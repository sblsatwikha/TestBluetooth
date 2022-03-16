"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 9718:
/*!******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/bleClient.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BleClient": () => (/* binding */ BleClient)
/* harmony export */ });
/* harmony import */ var _Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversion */ 8467);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ 9055);
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queue */ 6985);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validators */ 9168);







class BleClientClass {
  constructor() {
    this.scanListener = null;
    this.eventListeners = new Map();
    this.queue = (0,_queue__WEBPACK_IMPORTED_MODULE_4__.getQueue)(true);
  }

  enableQueue() {
    this.queue = (0,_queue__WEBPACK_IMPORTED_MODULE_4__.getQueue)(true);
  }

  disableQueue() {
    this.queue = (0,_queue__WEBPACK_IMPORTED_MODULE_4__.getQueue)(false);
  }

  initialize(options) {
    var _this = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.initialize(options);
      }));
    })();
  }
  /**
   * Reports whether BLE is enabled on this device.
   * Always returns `true` on **web**.
   * @deprecated Use `isEnabled` instead.
   */


  getEnabled() {
    var _this2 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.isEnabled();
    })();
  }

  isEnabled() {
    var _this3 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const enabled = yield _this3.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.isEnabled();
        return result.value;
      }));
      return enabled;
    })();
  }

  enable() {
    var _this4 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.enable();
      }));
    })();
  }

  disable() {
    var _this5 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.disable();
      }));
    })();
  }

  startEnabledNotifications(callback) {
    var _this6 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        const key = `onEnabledChanged`;
        yield (_a = _this6.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();
        const listener = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.addListener(key, result => {
          callback(result.value);
        });

        _this6.eventListeners.set(key, listener);

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.startEnabledNotifications();
      }));
    })();
  }

  stopEnabledNotifications() {
    var _this7 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        const key = `onEnabledChanged`;
        yield (_a = _this7.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();

        _this7.eventListeners.delete(key);

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.stopEnabledNotifications();
      }));
    })();
  }

  isLocationEnabled() {
    var _this8 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const enabled = yield _this8.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.isLocationEnabled();
        return result.value;
      }));
      return enabled;
    })();
  }

  openLocationSettings() {
    var _this9 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.openLocationSettings();
      }));
    })();
  }

  openBluetoothSettings() {
    var _this10 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this10.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.openBluetoothSettings();
      }));
    })();
  }

  openAppSettings() {
    var _this11 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.openAppSettings();
      }));
    })();
  }

  setDisplayStrings(displayStrings) {
    var _this12 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this12.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.setDisplayStrings(displayStrings);
      }));
    })();
  }

  requestDevice(options) {
    var _this13 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this13.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const device = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.requestDevice(options);
        return device;
      }));
      return result;
    })();
  }

  requestLEScan(options, callback) {
    var _this14 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this14.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        yield (_a = _this14.scanListener) === null || _a === void 0 ? void 0 : _a.remove();
        _this14.scanListener = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.addListener('onScanResult', resultInternal => {
          const result = Object.assign(Object.assign({}, resultInternal), {
            manufacturerData: _this14.convertObject(resultInternal.manufacturerData),
            serviceData: _this14.convertObject(resultInternal.serviceData),
            rawAdvertisement: resultInternal.rawAdvertisement ? _this14.convertValue(resultInternal.rawAdvertisement) : undefined
          });
          callback(result);
        });
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.requestLEScan(options);
      }));
    })();
  }

  stopLEScan() {
    var _this15 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this15.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        yield (_a = _this15.scanListener) === null || _a === void 0 ? void 0 : _a.remove();
        _this15.scanListener = null;
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.stopLEScan();
      }));
    })();
  }

  getDevices(deviceIds) {
    var _this16 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this16.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.getDevices({
          deviceIds
        });
        return result.devices;
      }));
    })();
  }

  getConnectedDevices(services) {
    var _this17 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this17.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.getConnectedDevices({
          services
        });
        return result.devices;
      }));
    })();
  }

  connect(deviceId, onDisconnect, options) {
    var _this18 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this18.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        if (onDisconnect) {
          const key = `disconnected|${deviceId}`;
          yield (_a = _this18.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();
          const listener = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.addListener(key, () => {
            onDisconnect(deviceId);
          });

          _this18.eventListeners.set(key, listener);
        }

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.connect(Object.assign({
          deviceId
        }, options));
      }));
    })();
  }

  createBond(deviceId) {
    var _this19 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this19.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.createBond({
          deviceId
        });
      }));
    })();
  }

  isBonded(deviceId) {
    var _this20 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isBonded = yield _this20.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.isBonded({
          deviceId
        });
        return result.value;
      }));
      return isBonded;
    })();
  }

  disconnect(deviceId) {
    var _this21 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this21.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.disconnect({
          deviceId
        });
      }));
    })();
  }

  getServices(deviceId) {
    var _this22 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const services = yield _this22.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.getServices({
          deviceId
        });
        return result.services;
      }));
      return services;
    })();
  }

  readRssi(deviceId) {
    var _this23 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = yield _this23.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.readRssi({
          deviceId
        });
        return parseFloat(result.value);
      }));
      return value;
    })();
  }

  read(deviceId, service, characteristic, options) {
    var _this24 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      const value = yield _this24.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.read(Object.assign({
          deviceId,
          service,
          characteristic
        }, options));
        return _this24.convertValue(result.value);
      }));
      return value;
    })();
  }

  write(deviceId, service, characteristic, value, options) {
    var _this25 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      return _this25.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!(value === null || value === void 0 ? void 0 : value.buffer)) {
          throw new Error('Invalid data.');
        }

        let writeValue = value;

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() !== 'web') {
          // on native we can only write strings
          writeValue = (0,_conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToHexString)(value);
        }

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.write(Object.assign({
          deviceId,
          service,
          characteristic,
          value: writeValue
        }, options));
      }));
    })();
  }

  writeWithoutResponse(deviceId, service, characteristic, value, options) {
    var _this26 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      yield _this26.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!(value === null || value === void 0 ? void 0 : value.buffer)) {
          throw new Error('Invalid data.');
        }

        let writeValue = value;

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() !== 'web') {
          // on native we can only write strings
          writeValue = (0,_conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToHexString)(value);
        }

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.writeWithoutResponse(Object.assign({
          deviceId,
          service,
          characteristic,
          value: writeValue
        }, options));
      }));
    })();
  }

  readDescriptor(deviceId, service, characteristic, descriptor, options) {
    var _this27 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      descriptor = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(descriptor);
      const value = yield _this27.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.readDescriptor(Object.assign({
          deviceId,
          service,
          characteristic,
          descriptor
        }, options));
        return _this27.convertValue(result.value);
      }));
      return value;
    })();
  }

  writeDescriptor(deviceId, service, characteristic, descriptor, value, options) {
    var _this28 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      descriptor = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(descriptor);
      return _this28.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!(value === null || value === void 0 ? void 0 : value.buffer)) {
          throw new Error('Invalid data.');
        }

        let writeValue = value;

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() !== 'web') {
          // on native we can only write strings
          writeValue = (0,_conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToHexString)(value);
        }

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.writeDescriptor(Object.assign({
          deviceId,
          service,
          characteristic,
          descriptor,
          value: writeValue
        }, options));
      }));
    })();
  }

  startNotifications(deviceId, service, characteristic, callback) {
    var _this29 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      yield _this29.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        const key = `notification|${deviceId}|${service}|${characteristic}`;
        yield (_a = _this29.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();
        const listener = yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.addListener(key, event => {
          callback(_this29.convertValue(event === null || event === void 0 ? void 0 : event.value));
        });

        _this29.eventListeners.set(key, listener);

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.startNotifications({
          deviceId,
          service,
          characteristic
        });
      }));
    })();
  }

  stopNotifications(deviceId, service, characteristic) {
    var _this30 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      service = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(service);
      characteristic = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateUUID)(characteristic);
      yield _this30.queue( /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a;

        const key = `notification|${deviceId}|${service}|${characteristic}`;
        yield (_a = _this30.eventListeners.get(key)) === null || _a === void 0 ? void 0 : _a.remove();

        _this30.eventListeners.delete(key);

        yield _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe.stopNotifications({
          deviceId,
          service,
          characteristic
        });
      }));
    })();
  }

  convertValue(value) {
    if (typeof value === 'string') {
      return (0,_conversion__WEBPACK_IMPORTED_MODULE_2__.hexStringToDataView)(value);
    } else if (value === undefined) {
      return new DataView(new ArrayBuffer(0));
    }

    return value;
  }

  convertObject(obj) {
    if (obj === undefined) {
      return undefined;
    }

    const result = {};

    for (const key of Object.keys(obj)) {
      result[key] = this.convertValue(obj[key]);
    }

    return result;
  }

}

const BleClient = new BleClientClass();

/***/ }),

/***/ 9705:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/config.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />



/***/ }),

/***/ 8467:
/*!*******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/conversion.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numbersToDataView": () => (/* binding */ numbersToDataView),
/* harmony export */   "dataViewToNumbers": () => (/* binding */ dataViewToNumbers),
/* harmony export */   "textToDataView": () => (/* binding */ textToDataView),
/* harmony export */   "dataViewToText": () => (/* binding */ dataViewToText),
/* harmony export */   "numberToUUID": () => (/* binding */ numberToUUID),
/* harmony export */   "hexStringToDataView": () => (/* binding */ hexStringToDataView),
/* harmony export */   "dataViewToHexString": () => (/* binding */ dataViewToHexString),
/* harmony export */   "webUUIDToString": () => (/* binding */ webUUIDToString),
/* harmony export */   "mapToObject": () => (/* binding */ mapToObject)
/* harmony export */ });
/**
 * Convert an array of numbers into a DataView.
 */
function numbersToDataView(value) {
    return new DataView(Uint8Array.from(value).buffer);
}
/**
 * Convert a DataView into an array of numbers.
 */
function dataViewToNumbers(value) {
    return Array.from(new Uint8Array(value.buffer));
}
/**
 * Convert a string into a DataView.
 */
function textToDataView(value) {
    return numbersToDataView(value.split('').map((s) => s.charCodeAt(0)));
}
/**
 * Convert a DataView into a string.
 */
function dataViewToText(value) {
    return String.fromCharCode(...dataViewToNumbers(value));
}
/**
 * Convert a 16 bit UUID into a 128 bit UUID string
 * @param value number, e.g. 0x180d
 * @return string, e.g. '0000180d-0000-1000-8000-00805f9b34fb'
 */
function numberToUUID(value) {
    return `0000${value.toString(16).padStart(4, '0')}-0000-1000-8000-00805f9b34fb`;
}
function hexStringToDataView(value) {
    const numbers = value
        .trim()
        .split(' ')
        .map((s) => parseInt(s, 16));
    return numbersToDataView(numbers);
}
function dataViewToHexString(value) {
    return dataViewToNumbers(value)
        .map((n) => {
        let s = n.toString(16);
        if (s.length == 1) {
            s = '0' + s;
        }
        return s;
    })
        .join(' ');
}
function webUUIDToString(uuid) {
    if (typeof uuid === 'string') {
        return uuid;
    }
    else if (typeof uuid === 'number') {
        return numberToUUID(uuid);
    }
    else {
        throw new Error('Invalid UUID');
    }
}
function mapToObject(map) {
    const obj = {};
    if (!map) {
        return undefined;
    }
    map.forEach((value, key) => {
        obj[key.toString()] = value;
    });
    return obj;
}


/***/ }),

/***/ 1311:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/definitions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanMode": () => (/* binding */ ScanMode)
/* harmony export */ });
/**
 * Android scan mode
 */
var ScanMode;
(function (ScanMode) {
    /**
     * Perform Bluetooth LE scan in low power mode. This mode is enforced if the scanning application is not in foreground.
     * https://developer.android.com/reference/android/bluetooth/le/ScanSettings#SCAN_MODE_LOW_POWER
     */
    ScanMode[ScanMode["SCAN_MODE_LOW_POWER"] = 0] = "SCAN_MODE_LOW_POWER";
    /**
     * Perform Bluetooth LE scan in balanced power mode. (default) Scan results are returned at a rate that provides a good trade-off between scan frequency and power consumption.
     * https://developer.android.com/reference/android/bluetooth/le/ScanSettings#SCAN_MODE_BALANCED
     */
    ScanMode[ScanMode["SCAN_MODE_BALANCED"] = 1] = "SCAN_MODE_BALANCED";
    /**
     * Scan using highest duty cycle. It's recommended to only use this mode when the application is running in the foreground.
     * https://developer.android.com/reference/android/bluetooth/le/ScanSettings#SCAN_MODE_LOW_LATENCY
     */
    ScanMode[ScanMode["SCAN_MODE_LOW_LATENCY"] = 2] = "SCAN_MODE_LOW_LATENCY";
})(ScanMode || (ScanMode = {}));


/***/ }),

/***/ 8907:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanMode": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.ScanMode),
/* harmony export */   "BleClient": () => (/* reexport safe */ _bleClient__WEBPACK_IMPORTED_MODULE_1__.BleClient),
/* harmony export */   "dataViewToHexString": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToHexString),
/* harmony export */   "dataViewToNumbers": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToNumbers),
/* harmony export */   "dataViewToText": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.dataViewToText),
/* harmony export */   "hexStringToDataView": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.hexStringToDataView),
/* harmony export */   "mapToObject": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.mapToObject),
/* harmony export */   "numberToUUID": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.numberToUUID),
/* harmony export */   "numbersToDataView": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.numbersToDataView),
/* harmony export */   "textToDataView": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.textToDataView),
/* harmony export */   "webUUIDToString": () => (/* reexport safe */ _conversion__WEBPACK_IMPORTED_MODULE_2__.webUUIDToString),
/* harmony export */   "BluetoothLe": () => (/* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_3__.BluetoothLe)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 1311);
/* harmony import */ var _bleClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bleClient */ 9718);
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversion */ 8467);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ 9055);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 9705);







/***/ }),

/***/ 9055:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/plugin.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BluetoothLe": () => (/* binding */ BluetoothLe)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);

const BluetoothLe = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BluetoothLe', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_bluetooth-le_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3801)).then((m) => m.BluetoothLe),
});


/***/ }),

/***/ 6985:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/queue.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQueue": () => (/* binding */ getQueue)
/* harmony export */ });
/* harmony import */ var throat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throat */ 4423);
/* harmony import */ var throat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(throat__WEBPACK_IMPORTED_MODULE_0__);

function getQueue(enabled) {
    if (enabled) {
        return throat__WEBPACK_IMPORTED_MODULE_0___default()(1);
    }
    else {
        return (fn) => fn();
    }
}


/***/ }),

/***/ 9168:
/*!*******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/bluetooth-le/dist/esm/validators.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateUUID": () => (/* binding */ validateUUID)
/* harmony export */ });
function validateUUID(uuid) {
    if (typeof uuid !== 'string') {
        throw new Error(`Invalid UUID type ${typeof uuid}. Expected string.`);
    }
    uuid = uuid.toLowerCase();
    const is128BitUuid = uuid.search(/^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/) >= 0;
    if (!is128BitUuid) {
        throw new Error(`Invalid UUID format ${uuid}. Expected 128 bit string (e.g. "0000180d-0000-1000-8000-00805f9b34fb").`);
    }
    return uuid;
}


/***/ }),

/***/ 2960:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_Users_apple_Documents_Projects_TestBluetooth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 4423:
/*!**************************************!*\
  !*** ./node_modules/throat/index.js ***!
  \**************************************/
/***/ ((module) => {



function throatInternal(size) {
  var queue = new Queue();
  var s = size | 0;

  function run(fn, self, args) {
    if ((s | 0) !== 0) {
      s = (s | 0) - 1;
      return new Promise(function (resolve) {
        resolve(fn.apply(self, args));
      }).then(onFulfill, onReject);
    }
    return new Promise(function (resolve) {
      queue.push(new Delayed(resolve, fn, self, args));
    }).then(runDelayed);
  }
  function runDelayed(d) {
    try {
      return Promise.resolve(d.fn.apply(d.self, d.args)).then(
        onFulfill,
        onReject
      );
    } catch (ex) {
      onReject(ex);
    }
  }
  function onFulfill(result) {
    release();
    return result;
  }
  function onReject(error) {
    release();
    throw error;
  }
  function release() {
    var next = queue.shift();
    if (next) {
      next.resolve(next);
    } else {
      s = (s | 0) + 1;
    }
  }

  return run;
}

function earlyBound(size, fn) {
  const run = throatInternal(size | 0);
  return function () {
    var args = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    return run(fn, this, args);
  };
}
function lateBound(size) {
  const run = throatInternal(size | 0);
  return function (fn) {
    if (typeof fn !== 'function') {
      throw new TypeError(
        'Expected throat fn to be a function but got ' + typeof fn
      );
    }
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
    return run(fn, this, args);
  };
}
module.exports = function throat(size, fn) {
  if (typeof size === 'function') {
    var temp = fn;
    fn = size;
    size = temp;
  }
  if (typeof size !== 'number') {
    throw new TypeError(
      'Expected throat size to be a number but got ' + typeof size
    );
  }
  if (fn !== undefined && typeof fn !== 'function') {
    throw new TypeError(
      'Expected throat fn to be a function but got ' + typeof fn
    );
  }
  if (typeof fn === 'function') {
    return earlyBound(size | 0, fn);
  } else {
    return lateBound(size | 0);
  }
};

module.exports["default"] = module.exports;

function Delayed(resolve, fn, self, args) {
  this.resolve = resolve;
  this.fn = fn;
  this.self = self || null;
  this.args = args;
}

var blockSize = 64;
function Queue() {
  this._s1 = [];
  this._s2 = [];
  this._shiftBlock = this._pushBlock = new Array(blockSize);
  this._pushIndex = 0;
  this._shiftIndex = 0;
}

Queue.prototype.push = function (value) {
  if (this._pushIndex === blockSize) {
    this._pushIndex = 0;
    this._s1[this._s1.length] = this._pushBlock = new Array(blockSize);
  }
  this._pushBlock[this._pushIndex++] = value;
};

Queue.prototype.shift = function () {
  if (this._shiftIndex === blockSize) {
    this._shiftIndex = 0;
    var s2 = this._s2;
    if (s2.length === 0) {
      var s1 = this._s1;
      if (s1.length === 0) {
        return undefined;
      }
      this._s1 = s2;
      s2 = this._s2 = s1.reverse();
    }
    this._shiftBlock = s2.pop();
  }
  if (
    this._pushBlock === this._shiftBlock &&
    this._pushIndex === this._shiftIndex
  ) {
    return undefined;
  }
  var result = this._shiftBlock[this._shiftIndex];
  this._shiftBlock[this._shiftIndex++] = null;
  return result;
};


/***/ }),

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_apple_Documents_Projects_TestBluetooth_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _capacitor_community_bluetooth_le__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/bluetooth-le */ 8907);





let HomePage = class HomePage {
    constructor() {
        this.bluetoothScanResults = [];
        this.bluetoothIsScanning = false;
        this.MDLDefaultServiceUUID = "00000005-A123-48CE-896B-4C76973373E6";
        this.enableWiFiCommand = [0x03, 0x17, 0x01, 0x01];
    }
    scanForBluetoothDevices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield _capacitor_community_bluetooth_le__WEBPACK_IMPORTED_MODULE_2__.BleClient.initialize();
                this.bluetoothScanResults = [];
                this.bluetoothIsScanning = true;
                yield _capacitor_community_bluetooth_le__WEBPACK_IMPORTED_MODULE_2__.BleClient.requestLEScan({ services: [] }, this.onBluetoothDeviceFound.bind(this));
                const stopScanAfterMilliSeconds = 13500;
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    yield _capacitor_community_bluetooth_le__WEBPACK_IMPORTED_MODULE_2__.BleClient.stopLEScan();
                    this.bluetoothIsScanning = false;
                    console.log('stopped scanning');
                }), stopScanAfterMilliSeconds);
            }
            catch (error) {
                this.bluetoothIsScanning = false;
                console.error('scanForBluetoothDevices', error);
            }
        });
    }
    onBluetoothDeviceFound(result) {
        this.bluetoothScanResults.push(result);
        console.log('received new scan result ', this.bluetoothScanResults);
    }
    connectToBluetoothDevice(scanResult) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const device = scanResult.device;
            const stopScanAfterMilliSeconds = 13500;
            try {
                yield _capacitor_community_bluetooth_le__WEBPACK_IMPORTED_MODULE_2__.BleClient.connect(scanResult.device["deviceId"], this.onBluetooDeviceDisconnected.bind(this), { timeout: 100000 });
                this.bluetoothConnectedDevice = scanResult;
                yield this.triggerBluetoothPairing();
                const deviceName = (_a = device.name) !== null && _a !== void 0 ? _a : device.deviceId;
                console.log(`connected to device ${deviceName}`);
                alert(`connected to device ${deviceName}`);
            }
            catch (error) {
                console.log('connectToDevice', error);
                alert(JSON.stringify(error));
            }
        });
    }
    triggerBluetoothPairing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.sendBluetoothWriteCommand(this.enableWiFiCommand);
        });
    }
    sendBluetoothWriteCommand(command) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
            }
            catch (error) {
                console.log(`error: ${JSON.stringify(error)}`);
                alert(JSON.stringify(error));
            }
        });
    }
    disconnectFromBluetoothDevice(scanResult) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const device = scanResult.device;
            try {
                yield _capacitor_community_bluetooth_le__WEBPACK_IMPORTED_MODULE_2__.BleClient.disconnect(scanResult.device.deviceId);
                const deviceName = (_a = device.name) !== null && _a !== void 0 ? _a : device.deviceId;
                alert(`disconnected from device ${deviceName}`);
            }
            catch (error) {
                console.error('disconnectFromDevice', error);
            }
        });
    }
    onBluetooDeviceDisconnected(disconnectedDeviceId) {
        alert(`Disconnected ${disconnectedDeviceId}`);
        this.bluetoothConnectedDevice = undefined;
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _Users_apple_Documents_Projects_TestBluetooth_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Bluetooth Test (ionic)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-button\n      expand=\"block\"\n      [disabled]=\"bluetoothIsScanning\"\n      (click)=\"scanForBluetoothDevices()\"\n    >\n      {{ bluetoothIsScanning?\"Scaning\":\"Scan for bluetooth devices\" }}\n    </ion-button>\n\n    <ng-container *ngIf=\"bluetoothScanResults.length>0\">\n      <ion-item *ngFor=\"let scanResult of bluetoothScanResults\">\n        <ion-label>\n          <h2>{{scanResult.device?.name ?? \"NO name\" }}</h2>\n          <p style=\"font-size: 8px\">{{scanResult.device.deviceId}}</p>\n        </ion-label>\n\n        \n        <ion-button color=\"danger\" slot=\"end\" (click)=\"disconnectFromBluetoothDevice(scanResult)\" >\n          Disconnect\n        </ion-button>\n\n        <ion-button (click)=\"connectToBluetoothDevice(scanResult)\" slot=\"end\">\n          Connect\n        </ion-button>\n      </ion-item>\n    </ng-container>\n\n   <ng-container *ngIf=\"bluetoothConnectedDevice\" style=\"margin-top: 40px\">\n      <ion-list-header>\n        CONNECTED TO: {{bluetoothConnectedDevice.device.name}} ✅\n      </ion-list-header>\n  </ng-container>\n\n       <!-- <ion-list-header> Go Pro Bluetooth Commands </ion-list-header>\n      <ion-item>\n        <ion-label>Take Photo</ion-label>\n        <ion-button\n          slot=\"end\"\n          (click)=\"sendBluetoothWriteCommand(shutterCommand)\"\n        >\n          send\n        </ion-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Shut Down</ion-label>\n        <ion-button\n          slot=\"end\"\n          (click)=\"sendBluetoothWriteCommand(shutdownCommand)\"\n        >\n          send\n        </ion-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Get GoPro Wifi Creds</ion-label>\n        <ion-button slot=\"end\" (click)=\"getGoProWiFiCreds()\"> send </ion-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Enable Go Pro WiFi Access Point</ion-label>\n        <ion-button\n          slot=\"end\"\n          (click)=\"sendBluetoothWriteCommand(enableGoProWiFiCommand)\"\n        >\n          send\n        </ion-button>\n      </ion-item>\n\n      <ion-list-header> Go Pro WiFi related </ion-list-header>\n      <ion-item>\n        <ion-label>Connect To Go Pro WiFi</ion-label>\n        <ion-button slot=\"end\" (click)=\"connectToGoProWifi()\">\n          send\n        </ion-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Show Files On Camera (GoPro)</ion-label>\n        <ion-button slot=\"end\" (click)=\"showFilesOnCamera()\"> send </ion-button>\n      </ion-item>\n    </ng-container> -->\n\n    <!-- <ion-list-header> Device related </ion-list-header>\n    <ion-item>\n      <ion-label>Show files on device!</ion-label>\n      <ion-button slot=\"end\" (click)=\"showFilesOnDevice()\"> send </ion-button>\n    </ion-item>\n    <div style=\"height: 300px\"></div> -->\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map