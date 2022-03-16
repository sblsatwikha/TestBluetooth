import { Component } from '@angular/core';
import {
  BleClient,
  dataViewToText,
  numbersToDataView,
  ScanResult,
} from '@capacitor-community/bluetooth-le';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bluetoothScanResults: ScanResult[] = [];
  bluetoothIsScanning = false;
  bluetoothConnectedDevice?: ScanResult;

  readonly MDLDefaultServiceUUID = "00000005-A123-48CE-896B-4C76973373E6";

  readonly enableWiFiCommand = [0x03, 0x17, 0x01, 0x01];

  constructor() {}

  async scanForBluetoothDevices() {
    try {
      await BleClient.initialize();

      this.bluetoothScanResults = [];
      this.bluetoothIsScanning = true;
      
      await BleClient.requestLEScan(
        { services: [] },
        this.onBluetoothDeviceFound.bind(this)
      );

      const stopScanAfterMilliSeconds = 13500;
      setTimeout(async () => {
        await BleClient.stopLEScan();
        this.bluetoothIsScanning = false;
        console.log('stopped scanning');
      }, stopScanAfterMilliSeconds);
    } catch (error) {
      this.bluetoothIsScanning = false;
      console.error('scanForBluetoothDevices', error);
    }
  }

  onBluetoothDeviceFound(result) {
    this.bluetoothScanResults.push(result);
    console.log('received new scan result ', this.bluetoothScanResults);
  }

  async connectToBluetoothDevice(scanResult: ScanResult) {
    const device = scanResult.device;
    const stopScanAfterMilliSeconds = 13500;
    try {

      await BleClient.connect(
        scanResult.device["deviceId"],
        this.onBluetooDeviceDisconnected.bind(this),
        {timeout: 100000}
      );


      this.bluetoothConnectedDevice = scanResult;
      await this.triggerBluetoothPairing();

      const deviceName = device.name ?? device.deviceId;
      console.log(`connected to device ${deviceName}`);
     alert(`connected to device ${deviceName}`);
    } catch (error) {
      console.log('connectToDevice', error);
      alert(JSON.stringify(error));
    }
  }

  async triggerBluetoothPairing() {
    await this.sendBluetoothWriteCommand(this.enableWiFiCommand);
  }

  async sendBluetoothWriteCommand(command: number[]) {
  if (!this.bluetoothConnectedDevice) {
    console.log('Bluetooth device not connected');
    alert('Bluetooth device not connected');
    return;
  }
  try {
    // await BleClient.write(
    //   this.bluetoothConnectedDevice.device.deviceId,
    //   this.MDLDefaultServiceUUID,
    //   this.GOIDStateUUID,
    //   numbersToDataView(command)
    // );
    alert('command sent');
    console.log('Bluetooth command sent');
    } catch (error) {
      console.log(`error: ${JSON.stringify(error)}`);
      alert(JSON.stringify(error));
    }
  }

  async disconnectFromBluetoothDevice(scanResult: ScanResult) {
    const device = scanResult.device;
    try {
      await BleClient.disconnect(scanResult.device.deviceId);
      const deviceName = device.name ?? device.deviceId;
      alert(`disconnected from device ${deviceName}`);
    } catch (error) {
      console.error('disconnectFromDevice', error);
    }
  }

  onBluetooDeviceDisconnected(disconnectedDeviceId: string) {
    alert(`Disconnected ${disconnectedDeviceId}`);
    this.bluetoothConnectedDevice = undefined;
  }


}
