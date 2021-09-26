require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.tsx":
/*!*****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _utils_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/polyfill */ "./src/utils/polyfill.ts");
/* harmony import */ var _utils_polyfill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/index */ "./src/store/index.ts");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/log */ "./src/utils/log.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);





var _wx$getAccountInfoSyn;
/*
 * @Description: enter your description
 * @Date: 2021-09-17 10:01:10
 * @LastEditTime: 2021-09-17 14:53:00
 */








 // import { storageUtil } from './utils/storage';


 // import { configure } from 'mobx';
// https://zh.mobx.js.org/configuration.html#代码lint选项
// mobx 配置
// configure({
//   useProxies: 'ifavailable', // (实验阶段): 如果环境支持则启用 Proxy，否则 降级到non-proxy替代方案。这个模式的优势是:MobX将对不能在ES5环境中使用的API以及语言特性发出警告，触发ES5标准限制时抛出错误。
// });


var env = (_wx$getAccountInfoSyn = wx.getAccountInfoSync().miniProgram) === null || _wx$getAccountInfoSyn === void 0 ? void 0 : _wx$getAccountInfoSyn.envVersion;
if (!env) env = 'release'; // 兼容处理一下 envVersion 是高版本才有的

console.report = function () {}; // 兼容一下
// 开启日志系统 'release', 'trial'


if (!['develop'].includes(env)) {
  var report = new _utils_log__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"](env);
  console.error = report.error(); // console.report = report.log();
}

var App = /*#__PURE__*/function (_Component) {
  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _Component);

  var _super = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var account = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_10__[/* getStorage */ "h"])('account');
        console.log('account_id', account === null || account === void 0 ? void 0 : account.id);

        if (account) {
          _store_index__WEBPACK_IMPORTED_MODULE_7__[/* ApiStore */ "a"].user.setAccount(account);
          _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].initEvent(); // 初始化埋点
        }
      } catch (error) {
        console.error('didmount getuserinfo error', error);
      }
    }
  }, {
    key: "onLaunch",
    value: function onLaunch() {
      _utils_WX__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].checkUpdate();
      this.clearCache();
      var platform = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_10__[/* getPlatformInfo */ "g"])();
      wx.platform = platform;

      wx.getPlatform = function () {
        return wx.platform || _utils_tools__WEBPACK_IMPORTED_MODULE_10__[/* getPlatformInfo */ "g"];
      }; // storageUtil.init();

    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow(e) {
      console.log('componentDidShow', e); // WX.checkUpdate();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {// track.getTorDataService() && track.destroy();
    }
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
    /** 重新打开清除不必要的缓存 */

  }, {
    key: "clearCache",
    value: function clearCache() {
      wx.removeStorageSync('float_play'); // TODO 1.3.2版本删除，这里是为了清除原始数据

      wx.removeStorageSync('set_fomate_daily_content');
      wx.removeStorageSync('setWithdrawIng');
      wx.removeStorageSync('setIsSubscribe');
      wx.removeStorageSync('setIsAccess');
      wx.removeStorageSync('setClockMsg'); // TODO 1.3.2版本删除，这里是为了清除原始数据

      wx.removeStorageSync('setPlayRate'); // TODO 1.3.2版本删除，这里是为了清除原始数据
    } // this.props.children 就是要渲染的页面

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* Provider */ "a"], {
        store: _store_index__WEBPACK_IMPORTED_MODULE_7__[/* ApiStore */ "a"],
        children: this.props.children
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.tsx */ "./node_modules/babel-loader/lib/index.js!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");









var config = {"requiredBackgroundModes":["audio","location"],"sitemapLocation":"sitemap.json","tabBar":{"selectedColor":"#8C67D6","backgroundColor":"#ffffff","color":"#777A8B","borderStyle":"white","list":[{"selectedIconPath":"assets/images/home-active.png","pagePath":"pages/home/home","text":"今日课程","iconPath":"assets/images/home.png"},{"selectedIconPath":"assets/images/lecture-active.png","pagePath":"pages/mine-course/mine-course","text":"我的课程","iconPath":"assets/images/lecture.png"},{"selectedIconPath":"assets/images/user-active.png","pagePath":"pages/personal/personal","text":"个人中心","iconPath":"assets/images/user.png"}]},"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"梨花听书","navigationBarTextStyle":"black","backgroundColor":"#f8f8f8","pageOrientation":"portrait"},"pages":["pages/home/home","pages/mine-course/mine-course","pages/detail/detail","pages/personal/personal","pages/personal/my-notes/my-notes","pages/personal/my-purchased/my-purchased","pages/personal/my-record-score/my-record-score","pages/personal/my-record-overage/my-record-overage","pages/personal/withdrawal/withdrawal","pages/personal/center-credit/center-credit"],"subpackages":[{"root":"pages/exam/","name":"exam","pages":["exam"]},{"root":"pages/h5/","name":"h5","pages":["h5"]},{"root":"pages/channel-plan/","name":"channel-plan","pages":["channel-plan"]},{"root":"pages/activity/","name":"activity","pages":["activity"]}]};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createReactApp"])(_node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_4__, react_dom__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["initPxTransform"])({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/utils/log.ts":
/*!**************************!*\
  !*** ./src/utils/log.ts ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _libs_date_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/date-format */ "./src/libs/date-format.js");






var Report = /*#__PURE__*/function () {
  function Report(env) {
    var _this = this;

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Report);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "logger", null);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "errFunc", console.error);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "logFunc", console.log);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "env", void 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "log", function () {
      return function () {
        try {
          var _this$logFunc;

          for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
          }

          //判断配置文件是否开启日志调试
          (_this$logFunc = _this.logFunc).call.apply(_this$logFunc, [console].concat(arg)); // 如果是正常上报错误信息， 没有report标识的， 为其他插件错误上报信息


          _this.report('log', arg);

          console.log('上报info信息', _this.getParams(arg));
        } catch (e) {
          console.log('上报info catch错误', _this.getParams([{
            type: 'info catch error'
          }, e]));

          _this.report('error', [{
            type: 'log catch error'
          }, e]);
        }
      };
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "error", function () {
      return function () {
        try {
          var _this$errFunc, _arg$;

          for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            arg[_key2] = arguments[_key2];
          }

          //判断配置文件是否开启日志调试
          (_this$errFunc = _this.errFunc).call.apply(_this$errFunc, [console].concat(arg)); // 如果是正常上报错误信息， 没有report标识的， 为其他插件错误上报信息


          if ((_arg$ = arg[1]) !== null && _arg$ !== void 0 && _arg$.isReport) return console.log('接口已经上报，无需上报', arg);

          _this.report('error', arg);

          console.log('上报错误信息', _this.getParams(arg));
        } catch (e) {
          console.log('上报catch错误', _this.getParams([{
            type: 'catch error'
          }, e]));

          _this.report('error', [{
            type: 'error catch error'
          }, e]);
        }
      };
    });

    this.env = env;

    if (wx.getRealtimeLogManager) {
      this.logger = wx.getRealtimeLogManager();
      console.log('%c <------日志系统已开启------>', 'background:#2145AB;color:#fff');
    }
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Report, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var userInfo = wx.getStorageSync('account') || {};
      delete userInfo.avatar_url;
      delete userInfo.small_avatar_url;
      delete userInfo.introduction;
      return {
        userInfo: userInfo
      };
    }
  }, {
    key: "getPageInfo",
    value: function getPageInfo() {
      var pages = getCurrentPages();
      var route = pages === null || pages === void 0 ? void 0 : pages[pages.length - 1];
      return {
        routerQuery: route === null || route === void 0 ? void 0 : route.options,
        routeUrl: route === null || route === void 0 ? void 0 : route.route
      };
    }
  }, {
    key: "getPlatform",
    value: function getPlatform() {
      var platform = wx.getPlatform();
      return {
        platform: {
          SDKVersion: platform.SDKVersion,
          benchmarkLevel: platform.benchmarkLevel,
          brand: platform.brand,
          model: platform.model,
          platform: platform.platform,
          system: platform.system,
          version: platform.version
        }
      };
    }
  }, {
    key: "getParams",
    value: function getParams(obj) {
      return Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        createTime: Object(_libs_date_format__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Date.now(), 'yyyy-mm-dd HH:MM:SS')
      }, this.getPageInfo()), this.getUserInfo()), this.getPlatform()), obj.map(function (o) {
        if (o instanceof Error) {
          var _o$stack;

          return {
            message: o === null || o === void 0 ? void 0 : o.message,
            stack: o === null || o === void 0 ? void 0 : (_o$stack = o.stack) === null || _o$stack === void 0 ? void 0 : _o$stack.substring(0, 1000) // 最多截取1000长度

          };
        }

        return o;
      }));
    }
    /**
     * 上报
     * @param {Object} params 上报对象
     */

  }, {
    key: "report",
    value: function report(type, params) {
      if (!this.logger) return;

      try {
        if (type === 'log') {
          this.logger.info(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.getParams(params)));
        }

        if (type === 'error') {
          this.logger.error(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.getParams(params)));
        } // 添加日志搜索key字段


        if (typeof params[0] === 'string') {
          this.logger.addFilterMsg("".concat(this.env, " ").concat(params[0]));
        } else if (params[0] instanceof Error) {
          var _params$;

          this.logger.addFilterMsg("".concat(this.env, " ").concat((_params$ = params[0]) === null || _params$ === void 0 ? void 0 : _params$.message));
        }
      } catch (error) {
        console.warn('report', error);
      }
    }
  }]);

  return Report;
}();

/* harmony default export */ __webpack_exports__["a"] = (Report);

/***/ }),

/***/ "./src/utils/polyfill.ts":
/*!*******************************!*\
  !*** ./src/utils/polyfill.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}

if (!Object.hasOwnProperty('getOwnPropertyDescriptors')) {
  Object.defineProperty(Object, 'getOwnPropertyDescriptors', {
    configurable: true,
    writable: true,
    value: function getOwnPropertyDescriptors(object) {
      return Reflect.ownKeys(object).reduce(function (descriptors, key) {
        return Object.defineProperty(descriptors, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: Object.getOwnPropertyDescriptor(object, key)
        });
      }, {});
    }
  });
}

/***/ })

},[["./src/app.tsx","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=app.js.map