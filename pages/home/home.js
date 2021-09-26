(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/home"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/home/home.tsx":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/home/home.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/navbar/navbar */ "./src/components/navbar/navbar.tsx");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _components_channel_item_channel_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/channel-item/channel-item */ "./src/pages/home/components/channel-item/channel-item.tsx");
/* harmony import */ var _api_content_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/content/content */ "./src/api/content/content.ts");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.scss */ "./src/pages/home/home.scss");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/login */ "./src/utils/login.ts");
/* harmony import */ var _api_account_account__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/account/account */ "./src/api/account/account.ts");
/* harmony import */ var _components_player_float_player_float__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/player-float/player-float */ "./src/components/player-float/player-float.tsx");
/* harmony import */ var _components_empty_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/empty/empty */ "./src/components/empty/empty.tsx");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);



/*
 * @Author: linzhihai
 * @Date: 2021-08-20 16:26:00
 * @LastEditTime: 2021-09-22 10:36:55
 * @Description: 首页
 */



















var HomePage = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__[/* observer */ "b"])(function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      hasJoin = _useState4[0],
      setHasJoin = _useState4[1]; // 是否已经加入


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      todayContent = _useState6[0],
      setTodayContent = _useState6[1]; // 今日课程数据


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState7, 2),
      bookInfo = _useState8[0],
      setBookInfo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState9, 2),
      channelInfo = _useState10[0],
      setChannelInfo = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState12 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState11, 2),
      studiedDay = _useState12[0],
      setStudiedDay = _useState12[1]; // 已学习天数


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState14 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState13, 2),
      isSubscribed = _useState14[0],
      setIsSubscribed = _useState14[1]; // 是否关注公众号


  var route = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useShareAppMessage"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_9__[/* ApiStore */ "a"].common.defaultShareInfo;
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useDidShow"])( /*#__PURE__*/Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('home did show', route.params);
            checkIsNewUser();
            _utils_track__WEBPACK_IMPORTED_MODULE_17__[/* track */ "a"].setEvent('lh_home_show');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  /**
   * @description: 是否关注公众号
   * @param {*}
   * @return {*}
   */

  var checkHasSubscribed = /*#__PURE__*/function () {
    var _ref2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _Taro$getStorageSync$;

      var account_id, res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              account_id = Number((_Taro$getStorageSync$ = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getStorageSync('account').id) !== null && _Taro$getStorageSync$ !== void 0 ? _Taro$getStorageSync$ : '');
              _context2.prev = 1;
              _context2.next = 4;
              return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_14__[/* api_check_subscribed */ "a"])(account_id);

            case 4:
              res = _context2.sent;

              if (res) {
                setIsSubscribed(res.is_subscribed);
              }

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.error('api_judge_subscribed error', _context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function checkHasSubscribed() {
      return _ref2.apply(this, arguments);
    };
  }();

  var checkIsNewUser = function checkIsNewUser() {
    Object(_utils_login__WEBPACK_IMPORTED_MODULE_13__[/* getToken */ "a"])( /*#__PURE__*/Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var accessStatus, res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              checkHasSubscribed();
              accessStatus = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getStorageSync('setIsAccess');

              if (!(accessStatus === 'join')) {
                _context3.next = 6;
                break;
              }

              getTodayContent();
              _context3.next = 16;
              break;

            case 6:
              _context3.prev = 6;
              _context3.next = 9;
              return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_14__[/* api_judge_user_access */ "c"])();

            case 9:
              res = _context3.sent;

              if (res) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.setStorageSync('setIsAccess', res.is_access ? 'join' : null);
                res.is_access ? getTodayContent() : getNoaccessContent();
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](6);
              console.error('api_judge_user_access error', _context3.t0);

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[6, 13]]);
    })), function () {
      getNoaccessContent();
      setIsSubscribed(false);
    });
  };
  /**
   * @description: 获取已加入的用户接口数据
   * @param {*}
   * @return {*}
   */


  var getTodayContent = /*#__PURE__*/function () {
    var _ref4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_11__[/* api_today_content */ "f"])();

            case 3:
              res = _context4.sent;

              if (res) {
                setTodayContent(res.today_content);
                setChannelInfo(res.channel_info);
                setBookInfo(res.book_info);
                setStudiedDay(res.studied_day);
                setHasJoin(true);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.setStorageSync('setChannelId', res.channel_info.channel_id);
              }

              setTimeout(function () {
                setLoading(false);
              }, 300);
              _context4.next = 12;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              setLoading(false);
              console.error('getTodayContent error', _context4.t0);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    return function getTodayContent() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * @description: 获取无token和未加入用户接口数据
   * @param {*}
   * @return {*}
   */


  var getNoaccessContent = /*#__PURE__*/function () {
    var _ref5 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_11__[/* api_noaccess_content_page */ "e"])();

            case 3:
              res = _context5.sent;

              if (res) {
                setTimeout(function () {
                  setLoading(false);
                }, 300);
                setHasJoin(false);
                setChannelInfo(res);
              }

              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.error('getNoaccessContent error', _context5.t0);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));

    return function getNoaccessContent() {
      return _ref5.apply(this, arguments);
    };
  }();

  return loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      title: '今日课程',
      setBgImage: 'https://staticqc-operating.lycheer.net/image/weike-cjPjaZ-1471964848.png',
      white: true,
      noBorder: true,
      hiddenBack: true
    }), !todayContent.length && hasJoin ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_components_empty_empty__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
        className: "header-bg-wrapper",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: "flex",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "flex",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
              className: "header-logo",
              src: "https://static-1253442168.file.myqcloud.com/xupload/20210721_logo.png"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
                className: "text-logo",
                src: "https://static-1253442168.file.myqcloud.com/xupload/20210721_title.png"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: "sub-text",
                children: "\u966A\u4F34\u5973\u6027\u7EC8\u751F\u6210\u957F"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
            className: "button-share flex",
            openType: "share",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
              className: "icon icon-fenxiang"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
              className: "share-text",
              children: "\u5206\u4EAB"
            })]
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_components_channel_item_channel_item__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      todayContent: todayContent,
      bookInfo: bookInfo,
      channelInfo: channelInfo,
      studiedDay: studiedDay,
      hasJoin: hasJoin,
      isSubscribed: isSubscribed
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_components_player_float_player_float__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {})]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (HomePage);

/***/ }),

/***/ "./src/pages/home/components/channel-item/channel-item.scss":
/*!******************************************************************!*\
  !*** ./src/pages/home/components/channel-item/channel-item.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/components/channel-item/channel-item.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/home/components/channel-item/channel-item.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _channel_item_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./channel-item.scss */ "./src/pages/home/components/channel-item/channel-item.scss");
/* harmony import */ var _channel_item_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_channel_item_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_account_account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/account/account */ "./src/api/account/account.ts");
/* harmony import */ var _utils_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/login */ "./src/utils/login.ts");
/* harmony import */ var _api_mina_app_mina_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/mina_app/mina_app */ "./src/api/mina_app/mina_app.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);




/*
 * @Author: linzhihai
 * @Date: 2021-08-23 17:42:58
 * @LastEditTime: 2021-09-18 10:15:16
 * @Description:
 */












var ChannelItem = function ChannelItem(props) {
  var _channelInfo$noaccess;

  var todayContent = props.todayContent,
      channelInfo = props.channelInfo,
      bookInfo = props.bookInfo,
      studiedDay = props.studiedDay,
      hasJoin = props.hasJoin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      isDisabled = _useState2[0],
      setIsDisabled = _useState2[1];

  var route = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var subscribeList = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(['9-P1Vuc8OOuhg8CBLIOFWfjd1FsC2aLXtGNO1sWEcG4', '8LumSmpu4cipHE31pXG6KPn5QHi8aG1WzVxj710o-Kg', 'ofoXGPaa5O5rdKshDwwlaTvwoMol1CuVbSrw8_GswA8']); // 订阅列表

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {}, []);

  var bindToPlay = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var _e$currentTarget$data, object_id, object_type, channel_id, week_num, url;

      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _e$currentTarget$data = e.currentTarget.dataset.item, object_id = _e$currentTarget$data.object_id, object_type = _e$currentTarget$data.object_type, channel_id = _e$currentTarget$data.channel_id;
              week_num = channelInfo.week_num;
              _context.next = 4;
              return toSubscribe();

            case 4:
              url = "/pages/detail/detail?object_id=".concat(object_id);

              if (object_type === 'form') {
                url = "/pages/exam/exam?channel_id=".concat(channel_id, "&week_num=").concat(week_num);
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
                url: url
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function bindToPlay(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var bindJoin = /*#__PURE__*/function () {
    var _ref2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var account_info, _route$params$user_ty, source;

      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (isDisabled) {
                _context2.next = 12;
                break;
              }

              setIsDisabled(true);
              account_info = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getStorageSync('account');

              if (!account_info) {
                _context2.next = 9;
                break;
              }

              _context2.next = 6;
              return toSubscribe();

            case 6:
              source = (_route$params$user_ty = route.params.user_type) !== null && _route$params$user_ty !== void 0 ? _route$params$user_ty : route.params.gift ? 'gift' : 'normal';
              getUserAccess({
                source: source
              });
              return _context2.abrupt("return");

            case 9:
              getUserProfile();
              _context2.next = 13;
              break;

            case 12:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
                title: '操作太快啦！',
                icon: 'none',
                mask: true
              });

            case 13:
              setTimeout(function () {
                setIsDisabled(false);
              }, 500);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function bindJoin() {
      return _ref2.apply(this, arguments);
    };
  }();
  /** 订阅消息 */


  var toSubscribe = /*#__PURE__*/function () {
    var _ref3 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var subscriptionMsg;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              subscriptionMsg = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_6__[/* getStorage */ "h"])('subscriptionMsg');
              return _context3.abrupt("return", !props.isSubscribed && !subscriptionMsg && new Promise(function (resolve) {
                wx.requestSubscribeMessage({
                  tmplIds: subscribeList.current,
                  success: function success(res) {
                    var subList = []; // 已经订阅的列表

                    // 已经订阅的列表
                    subscribeList.current.forEach(function (sub) {
                      if ((res === null || res === void 0 ? void 0 : res[sub]) === 'accept') {
                        subList.push(sub);
                      }
                    });
                    console.log('已订阅成功', subList);

                    if (subList.length) {
                      // 订阅消息发送
                      Object(_api_mina_app_mina_app__WEBPACK_IMPORTED_MODULE_10__[/* api_template_subscription */ "a"])({
                        template_ids: subList
                      });
                    }

                    Object(_utils_tools__WEBPACK_IMPORTED_MODULE_6__[/* setStorage */ "q"])('subscriptionMsg', 24 * 60 * 60 * 1000, {
                      expires: 24 * 60 * 60 * 1000
                    });
                    resolve(true);
                  },
                  fail: function fail(error) {
                    console.error('订阅失败', error);
                    resolve(false);
                    return error;
                  },
                  complete: function complete() {}
                });
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function toSubscribe() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * @description: 请求加入
   * @param {*} option
   * @return {*}
   */


  var getUserAccess = /*#__PURE__*/function () {
    var _ref4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(option) {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_8__[/* api_user_access */ "e"])(option);

            case 3:
              res = _context4.sent;

              if (res) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
                  title: '加入成功，请开始你的听书之旅吧！',
                  icon: 'none',
                  duration: 2000,
                  mask: true
                });
                setTimeout(function () {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
                    url: '/pages/channel-plan/channel-plan'
                  });
                }, 2000);
              }

              _context4.next = 11;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error('getUserAccess error', _context4.t0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    return function getUserAccess(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getUserProfile = function getUserProfile() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getUserProfile({
      desc: '用于用户身份辨别',
      success: function success(res) {
        getCheckLogin(res);
      },
      fail: function fail(err) {
        console.log('授权失败：', err);
      }
    });
  };

  var getCheckLogin = function getCheckLogin(res) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
    var option = {
      encryptedData: res.encryptedData,
      iv: res.iv
    };
    Object(_utils_login__WEBPACK_IMPORTED_MODULE_9__[/* httpCheckLogin */ "b"])(option).then(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
        title: '请再次点击按钮~',
        icon: 'none'
      });
    }).catch(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.hideLoading();
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
    className: "content-container",
    children: [hasJoin ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
        className: "content-wrapper",
        children: todayContent.map(function (item, _) {
          var _bookInfo$item$book_i, _bookInfo$item$book_i2;

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "content-item_box",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              className: "title",
              children: channelInfo === null || channelInfo === void 0 ? void 0 : channelInfo.name
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              className: "book-cover",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: "tip-img"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
                className: "book-img",
                mode: "aspectFill",
                src: item.object_type === 'form' ? item.json_extend.cover_url : (_bookInfo$item$book_i = bookInfo === null || bookInfo === void 0 ? void 0 : (_bookInfo$item$book_i2 = bookInfo[item.book_id]) === null || _bookInfo$item$book_i2 === void 0 ? void 0 : _bookInfo$item$book_i2.cover_url) !== null && _bookInfo$item$book_i !== void 0 ? _bookInfo$item$book_i : ''
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              className: "sub-title",
              children: item.object_type === 'form' ? '一周小测' : item.day_num ? item.title : '先导课'
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              className: "end-text",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                children: "\u52A0\u6CB9\uFF0C\u5DF2\u575A\u6301"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                className: "strong",
                children: studiedDay
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                children: "\u5929"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
              className: "footer-button",
              onClick: bindToPlay,
              "data-item": item,
              hoverClass: "hover-class",
              children: "\u7ACB\u5373\u5F00\u59CB"
            })]
          }, item.object_id);
        })
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
        className: "content-wrapper",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: "content-item_box",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "title",
            children: channelInfo === null || channelInfo === void 0 ? void 0 : channelInfo.noaccess_channel_title
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "book-cover",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              className: "tip-img"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
              className: "book-img",
              mode: "aspectFill",
              src: (_channelInfo$noaccess = channelInfo === null || channelInfo === void 0 ? void 0 : channelInfo.noaccess_channel_cover) !== null && _channelInfo$noaccess !== void 0 ? _channelInfo$noaccess : ''
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "sub-title",
            children: channelInfo === null || channelInfo === void 0 ? void 0 : channelInfo.noaccess_channel_subtitle
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "sub-title",
            children: channelInfo === null || channelInfo === void 0 ? void 0 : channelInfo.noaccess_channel_description
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
            className: "footer-button",
            onClick: bindJoin,
            hoverClass: "hover-class",
            children: "\u7ACB\u5373\u52A0\u5165"
          })]
        })
      })
    }), !(hasJoin && !todayContent.length) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
      className: "content-wrapper",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
        className: "content-item_box seize",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: "light-title",
          children: "\u66F4\u591A\u7CBE\u5F69\u5185\u5BB9\u6301\u7EED\u66F4\u65B0\u4E2D"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: "book-cover",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "tip-img"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
            className: "book-img",
            mode: "aspectFill",
            src: "https://static-1253442168.file.myqcloud.com/xupload/20210727_11.png"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ChannelItem);

/***/ }),

/***/ "./src/pages/home/home.scss":
/*!**********************************!*\
  !*** ./src/pages/home/home.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/home.tsx":
/*!*********************************!*\
  !*** ./src/pages/home/home.tsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_home_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./home.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/home/home.tsx");


var config = {"navigationBarTitleText":"首页","navigationStyle":"custom"};

_node_modules_babel_loader_lib_index_js_home_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_home_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/home', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/home/home.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=home.js.map