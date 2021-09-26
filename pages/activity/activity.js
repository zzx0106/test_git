(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/activity/activity"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/activity/activity.tsx":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/activity/activity.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui/dist/style/components/modal.scss */ "./node_modules/taro-ui/dist/style/components/modal.scss");
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taro_ui_lib_components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui/lib/components/modal */ "./node_modules/taro-ui/lib/components/modal/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _api_account_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/account/account */ "./src/api/account/account.ts");
/* harmony import */ var _api_common_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/common/common */ "./src/api/common/common.ts");
/* harmony import */ var _api_mina_app_mina_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/mina_app/mina_app */ "./src/api/mina_app/mina_app.ts");
/* harmony import */ var _api_share_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/share/share */ "./src/api/share/share.ts");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/login */ "./src/utils/login.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _activity_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./activity.scss */ "./src/pages/activity/activity.scss");
/* harmony import */ var _activity_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_activity_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_bullet_chat_bullet_chat__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/bullet-chat/bullet-chat */ "./src/pages/activity/components/bullet-chat/bullet-chat.tsx");
/* harmony import */ var _components_card_dialog_card_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/card-dialog/card-dialog */ "./src/pages/activity/components/card-dialog/card-dialog.tsx");
/* harmony import */ var _components_user_num_user_num__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/user-num/user-num */ "./src/pages/activity/components/user-num/user-num.tsx");
/* harmony import */ var _components_play_directory_play_directory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/play-directory/play-directory */ "./src/pages/activity/components/play-directory/play-directory.tsx");
/* harmony import */ var _api_content_content__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/api/content/content */ "./src/api/content/content.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__);




























var Activity = Object(mobx_react__WEBPACK_IMPORTED_MODULE_18__[/* observer */ "b"])(function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(''),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState, 2),
      headImage = _useState2[0],
      setHeadImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(true),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1]; // 首屏图片加载中


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])([]),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState5, 2),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])([]),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState7, 2),
      plan = _useState8[0],
      setPlan = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(0),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState9, 2),
      currTab = _useState10[0],
      setCurrTab = _useState10[1]; // 当前tab


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(),
      _useState12 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState11, 2),
      userNum = _useState12[0],
      setUserNum = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(false),
      _useState14 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState13, 2),
      showDialog = _useState14[0],
      setShowDialog = _useState14[1]; // 是否弹出领取成功弹窗


  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(''),
      _useState16 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState15, 2),
      scrollTop = _useState16[0],
      setScrollTop = _useState16[1]; // 每次切换tab时，需要置顶tab


  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])('ordinary'),
      _useState18 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState17, 2),
      landingType = _useState18[0],
      setLandingType = _useState18[1]; //落地页类型


  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(true),
      _useState20 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState19, 2),
      redEnvelope = _useState20[0],
      setredEnvelope = _useState20[1]; //红包的状态


  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(false),
      _useState22 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState21, 2),
      dialogStatus = _useState22[0],
      setDialogStatus = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])([]),
      _useState24 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState23, 2),
      fomateDailyContent = _useState24[0],
      setFomateDailyContent = _useState24[1]; //音频信息


  var subscribeList = Object(react__WEBPACK_IMPORTED_MODULE_19__["useRef"])(['9-P1Vuc8OOuhg8CBLIOFWfjd1FsC2aLXtGNO1sWEcG4', '8LumSmpu4cipHE31pXG6KPn5QHi8aG1WzVxj710o-Kg', 'ofoXGPaa5O5rdKshDwwlaTvwoMol1CuVbSrw8_GswA8']); // 订阅列表

  var hasUserInfo = Object(react__WEBPACK_IMPORTED_MODULE_19__["useRef"])(false); // 是否有用户权限

  var hasSubscribe = Object(react__WEBPACK_IMPORTED_MODULE_19__["useRef"])(false); // 是否已经订阅过消息

  var isAccess = Object(react__WEBPACK_IMPORTED_MODULE_19__["useRef"])(false); // 用户是否授权登录过

  var isShowDialog = Object(react__WEBPACK_IMPORTED_MODULE_19__["useRef"])(false); // 是否弹出过领取的弹窗

  var router = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_17__["useRouter"])();
  /** 初始化 */

  Object(react__WEBPACK_IMPORTED_MODULE_19__["useEffect"])(function () {
    getChannelDaily(); // 亲友卡

    if (router.params.user_type === 'presented') {
      getCoverImgs('friend');
    } else {
      getCoverImgs('common'); //判断皮肤类型

      if (landingType === 'ordinary') {}
    } // getHasUserSubscribe();
    // 设置剩余名额


    var num = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_13__[/* getStorage */ "h"])('activity_user_num') || 100;
    setUserNum(num);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_19__["useEffect"])(function () {
    if (loading) return; // 登录完成后调用

    Object(_utils_login__WEBPACK_IMPORTED_MODULE_12__[/* getToken */ "a"])(function () {
      // 用户存在登录态，就获取用户状态
      getHasUserInfo();
    }, function () {
      // 拿不到登录态， 全新用户，并且是亲友卡，直接弹窗
      if (!isShowDialog.current && router.params.user_type === 'presented') {
        setShowDialog(true);
        setTimeout(function () {
          return setShowDialog(false);
        }, 5000);
        isShowDialog.current = true;
      }
    });
  }, [loading]);

  var onTabChange = function onTabChange(curr) {
    setCurrTab(curr);
    Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_17__["nextTick"])(function () {
      setScrollTop("scrolltop".concat(curr));
    });
  };

  var getChannelDaily = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var remotChannel;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_25__[/* api_channel_daily_content_get */ "a"])({
                channel_id: 1067901
              });

            case 2:
              remotChannel = _context.sent;
              setFomateDailyContent(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(remotChannel.fomate_daily_content));
              console.log(remotChannel, '专栏信息');

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getChannelDaily() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * 获取封面信息
   * @params page_type 模板类型
   */


  var getCoverImgs = /*#__PURE__*/function () {
    var _ref2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(page_type) {
      var _res$head_image_url, _res$description, _res$plan, res;

      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_api_common_common__WEBPACK_IMPORTED_MODULE_7__[/* api_landing_page_random */ "b"])({
                page_type: page_type
              });

            case 3:
              res = _context2.sent;
              setHeadImage((_res$head_image_url = res === null || res === void 0 ? void 0 : res.head_image_url) !== null && _res$head_image_url !== void 0 ? _res$head_image_url : '');
              setDescription((_res$description = res === null || res === void 0 ? void 0 : res.description) !== null && _res$description !== void 0 ? _res$description : []);
              setPlan((_res$plan = res === null || res === void 0 ? void 0 : res.plan) !== null && _res$plan !== void 0 ? _res$plan : []);
              console.log('res--->', res);
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Toast('获取封面信息失败');
              console.error('getCoverImgs error', _context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function getCoverImgs(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /** 获取用户信息 */


  var getHasUserInfo = /*#__PURE__*/function () {
    var _ref3 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var _res$is_access, res;

      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_6__[/* api_judge_user_access */ "c"])();

            case 3:
              res = _context3.sent;
              console.log('res', res);
              isAccess.current = (_res$is_access = res === null || res === void 0 ? void 0 : res.is_access) !== null && _res$is_access !== void 0 ? _res$is_access : false;

              if (!(res !== null && res !== void 0 && res.is_access)) {
                _context3.next = 13;
                break;
              }

              _utils_track__WEBPACK_IMPORTED_MODULE_14__[/* track */ "a"].setEvent('lh_activity_show'); //写完打开

              _context3.next = 10;
              return _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Toast({
                title: '你已是听书用户，无需领取哦~',
                duration: 4000
              });

            case 10:
              return _context3.abrupt("return");

            case 13:
              _store__WEBPACK_IMPORTED_MODULE_11__[/* ApiStore */ "a"].user.setUserType('new');
              _utils_track__WEBPACK_IMPORTED_MODULE_14__[/* track */ "a"].setEvent('lh_activity_show_newuser');

            case 15:
              if (!(router.params.user_type === 'presented')) {
                _context3.next = 18;
                break;
              }

              _context3.next = 18;
              return getPresented();

            case 18:
              hasUserInfo.current = true;
              _context3.next = 31;
              break;

            case 21:
              _context3.prev = 21;
              _context3.t0 = _context3["catch"](0);
              console.error('getUserInof error', _context3.t0); // 全新用户

              if (!((_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.code) === '0401')) {
                _context3.next = 30;
                break;
              }

              console.log('全新用户');
              _store__WEBPACK_IMPORTED_MODULE_11__[/* ApiStore */ "a"].user.setUserType('new');
              _utils_track__WEBPACK_IMPORTED_MODULE_14__[/* track */ "a"].setEvent('lh_activity_show_newuser');
              _context3.next = 31;
              break;

            case 30:
              return _context3.abrupt("return", Promise.reject(_context3.t0));

            case 31:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 21]]);
    }));

    return function getHasUserInfo() {
      return _ref3.apply(this, arguments);
    };
  }();
  /** 获取用户订阅信息 */


  var getHasUserSubscribe = /*#__PURE__*/function () {
    var _ref4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      var subList;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              subList = ['9-P1Vuc8OOuhg8CBLIOFWfjd1FsC2aLXtGNO1sWEcG4', '8LumSmpu4cipHE31pXG6KPn5QHi8aG1WzVxj710o-Kg', 'ofoXGPaa5O5rdKshDwwlaTvwoMol1CuVbSrw8_GswA8'];
              wx.getSetting({
                withSubscriptions: true,
                success: function success(res) {
                  var _res$subscriptionsSet;

                  console.log('getSetting', res); // 如果有itemSettings代表用户是点击了记住

                  var itemSettings = res === null || res === void 0 ? void 0 : (_res$subscriptionsSet = res.subscriptionsSetting) === null || _res$subscriptionsSet === void 0 ? void 0 : _res$subscriptionsSet.itemSettings;
                  var nonSubList = subList.filter(function (sub) {
                    console.log('itemSettings', itemSettings);
                    return (itemSettings === null || itemSettings === void 0 ? void 0 : itemSettings[sub]) !== 'accept';
                  });

                  if (nonSubList.length > 0) {
                    console.log('存在未订阅的消息', nonSubList);
                    subscribeList.current = nonSubList;
                    hasSubscribe.current = false;
                  } else {
                    hasSubscribe.current = true;
                    console.log('消息已经订阅过', nonSubList);
                  }
                }
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getHasUserSubscribe() {
      return _ref4.apply(this, arguments);
    };
  }();

  var goFree7Day = Object(react__WEBPACK_IMPORTED_MODULE_19__["useRef"])(Object(_utils_tools__WEBPACK_IMPORTED_MODULE_13__[/* throttle */ "r"])( /*#__PURE__*/Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
    var _router$params$user_t, source, res;

    return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            if (!isAccess.current) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Toast({
              title: '你已是听书用户，无需领取哦~',
              duration: 4000
            }));

          case 3:
            console.log('goFree7Day', hasUserInfo.current, subscribeList.current);

            if (hasUserInfo.current) {
              _context5.next = 10;
              break;
            }

            _context5.next = 7;
            return toLogin();

          case 7:
            _context5.next = 9;
            return getHasUserInfo();

          case 9:
            return _context5.abrupt("return", _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Toast('请再次点击按钮~'));

          case 10:
            if (hasSubscribe.current) {
              _context5.next = 13;
              break;
            }

            _context5.next = 13;
            return toSubscribe();

          case 13:
            source = (_router$params$user_t = router.params.user_type) !== null && _router$params$user_t !== void 0 ? _router$params$user_t : router.params.gift ? 'gift' : 'normal';
            console.log('source', source);
            _utils_track__WEBPACK_IMPORTED_MODULE_14__[/* track */ "a"].setEvent('lh_activity_7d_ck', {
              source: source
            }); // 亲友卡会自动加入课程，非亲友卡，手动调用加入课程

            if (!(source !== 'presented')) {
              _context5.next = 20;
              break;
            }

            _context5.next = 19;
            return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_6__[/* api_user_access */ "e"])({
              source: 'normal'
            });

          case 19:
            res = _context5.sent;

          case 20:
            // 跳转课程页
            _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].navigateTo('/pages/channel-plan/channel-plan');
            _context5.next = 26;
            break;

          case 23:
            _context5.prev = 23;
            _context5.t0 = _context5["catch"](0);
            console.error('goFree7Day', _context5.t0);

          case 26:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 23]]);
  })), 1500, {
    trailing: false
  })).current;
  /** 授权登录 */

  var toLogin = function toLogin() {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(resolve, reject) {
        var e, res;
        return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                if (!Object(_utils_tools__WEBPACK_IMPORTED_MODULE_13__[/* getStorage */ "h"])('account').id) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return", resolve(Object(_utils_tools__WEBPACK_IMPORTED_MODULE_13__[/* getStorage */ "h"])('account')));

              case 3:
                _context6.next = 5;
                return _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].getUserProfile();

              case 5:
                e = _context6.sent;
                console.log('e--getUserProfile', e);
                wx.showLoading({
                  title: '登录中...'
                }); // TODO 这里有时候不成功

                _context6.next = 10;
                return Object(_utils_login__WEBPACK_IMPORTED_MODULE_12__[/* httpCheckLogin */ "b"])({
                  iv: e.iv,
                  encryptedData: e.encryptedData
                });

              case 10:
                res = _context6.sent;
                resolve(res.userinfo);
                _context6.next = 17;
                break;

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6["catch"](0);
                reject(_context6.t0);

              case 17:
                _context6.prev = 17;
                wx.hideLoading();
                return _context6.finish(17);

              case 20:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 14, 17, 20]]);
      }));

      return function (_x2, _x3) {
        return _ref6.apply(this, arguments);
      };
    }());
  };
  /** 订阅消息 */


  var toSubscribe = /*#__PURE__*/function () {
    var _ref7 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7() {
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", new Promise(function (resolve) {
                wx.requestSubscribeMessage({
                  tmplIds: subscribeList.current,
                  success: function success(res) {
                    console.log('requestSubscribeMessage res', res);
                    var subList = []; // 已经订阅的列表
                    // 已经订阅的列表

                    var nonSubList = []; // 没有订阅的列表
                    // 没有订阅的列表

                    subscribeList.current.forEach(function (sub) {
                      if ((res === null || res === void 0 ? void 0 : res[sub]) === 'accept') {
                        subList.push(sub);
                      } else {
                        nonSubList.push(sub);
                      }
                    });
                    console.log('已订阅成功', subList);
                    console.log('未订阅成功', nonSubList);

                    if (subList.length) {
                      // 订阅消息发送
                      Object(_api_mina_app_mina_app__WEBPACK_IMPORTED_MODULE_8__[/* api_template_subscription */ "a"])({
                        template_ids: subList
                      });
                    } // WX.Toast('请再次点击按钮~');
                    // WX.Toast('请再次点击按钮~');


                    hasSubscribe.current = true;
                    resolve(true);
                  },
                  fail: function fail(error) {
                    console.error('订阅失败', error);
                    resolve(false);
                    return error;
                  },
                  complete: function complete() {
                    hasSubscribe.current = true; // 用户不管点击取消还是什么，都默认通过
                  }
                });
              }));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function toSubscribe() {
      return _ref7.apply(this, arguments);
    };
  }();
  /** 领取亲友卡 */


  var getPresented = /*#__PURE__*/function () {
    var _ref8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8() {
      var _ref9, channel_id, sender_id, _ref10;

      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _ref9 = router.params, channel_id = _ref9.channel_id, sender_id = _ref9.sender_id;

              if (!(!channel_id || !sender_id)) {
                _context8.next = 6;
                break;
              }

              console.error('领卡失败', router.params);
              _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Toast('领取失败！缺少必要参数');
              return _context8.abrupt("return", Promise.reject({
                message: 'channel_id或者sender_id为空',
                params: {
                  channel_id: channel_id,
                  sender_id: sender_id
                }
              }));

            case 6:
              _context8.next = 8;
              return Object(_api_share_share__WEBPACK_IMPORTED_MODULE_9__[/* api_receive_share_card */ "a"])({
                channel_id: channel_id,
                sender_id: sender_id
              });

            case 8:
              // 如果弹过的，就不谈了
              if (!isShowDialog.current) {
                setShowDialog(true);
                setTimeout(function () {
                  setShowDialog(false);
                }, 5000);
              }

              _context8.next = 16;
              break;

            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](0);
              console.error('领卡失败 error', _context8.t0);
              _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Toast((_ref10 = '领卡失败！' + (_context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.message)) !== null && _ref10 !== void 0 ? _ref10 : '');
              return _context8.abrupt("return", Promise.reject(_context8.t0));

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 11]]);
    }));

    return function getPresented() {
      return _ref8.apply(this, arguments);
    };
  }(); //书单计划展开收进


  var audition = function audition() {
    var planType = dialogStatus;
    planType = !planType;
    setDialogStatus(planType);
  }; //立刻加入操作


  var gojoinNow = function gojoinNow() {
    _store__WEBPACK_IMPORTED_MODULE_11__[/* ApiStore */ "a"].player.goPause();
    _store__WEBPACK_IMPORTED_MODULE_11__[/* ApiStore */ "a"].player.playingState = 'ended'; // WX.switchTab('/pages/home/home');

    if (!_utils_tools__WEBPACK_IMPORTED_MODULE_13__[/* isIos */ "l"]) {
      console.log('直接付款');
    } else {
      console.log('跳转页面');
    }
  }; //开红包


  var openRed = function openRed() {
    setredEnvelope(false);
    _utils_WX__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].Toast('领取成功！请尽快使用，以免失效');
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
    className: "activity-page",
    children: [loading && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* ScrollView */ "k"], {
      className: "ap-scroll",
      scrollY: true,
      scrollIntoView: scrollTop,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_components_bullet_chat_bullet_chat__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
          className: "ap-bg-box",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
            id: "header-bg",
            onLoad: function onLoad() {
              return setLoading(false);
            },
            onError: function onError() {
              return setLoading(false);
            },
            lazyLoad: true,
            className: "ap-img-item",
            src: headImage,
            mode: "widthFix"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
          id: "scrolltop0"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
          id: "scrolltop1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
          className: "tab-box",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
            className: "tab-item ".concat(currTab === 0 && 'active'),
            onClick: function onClick() {
              return onTabChange(0);
            },
            children: "\u8BFE\u7A0B\u4ECB\u7ECD"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
            className: "tab-line"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
            className: "tab-item ".concat(currTab === 1 && 'active'),
            onClick: function onClick() {
              return onTabChange(1);
            },
            children: "\u4E66\u5355\u8BA1\u5212"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
          className: "ap-tab-content",
          children: [currTab === 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
            className: "ap-img-box",
            children: description.map(function (url, i) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
                lazyLoad: true,
                className: "ap-img-item",
                src: url,
                mode: "widthFix"
              }, url);
            })
          }), currTab === 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
            className: "ap-img-box",
            children: plan.map(function (url, i) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
                lazyLoad: true,
                className: "ap-img-item",
                src: url,
                mode: "widthFix"
              }, url);
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_components_card_dialog_card_dialog__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], {
      value: showDialog,
      setValue: setShowDialog
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(taro_ui_lib_components_modal__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      className: "red-envelope",
      closeOnClickOverlay: false,
      isOpened: redEnvelope,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
        className: "red-envelope-bg",
        src: "https://static-1253442168.file.myqcloud.com/xupload/20210923_activity_red_bg_AtXASzJ.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
        onClick: openRed,
        className: "red-envelope-btn",
        src: "https://static-1253442168.file.myqcloud.com/xupload/20210923_activity_open_bg_LtCrhs2.png"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* CustomWrapper */ "d"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_components_play_directory_play_directory__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
        fomateDailyContent: fomateDailyContent,
        dialogStatus: dialogStatus,
        setDialogStatus: setDialogStatus
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
      className: "apb-user-box",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
        className: "apb-user-text",
        children: userNum !== undefined && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_components_user_num_user_num__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], {
          num: userNum
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
        className: "apb-user-bg",
        src: __webpack_require__(/*! ../../assets/images/activity_bottom_bg.png */ "./src/assets/images/activity_bottom_bg.png")
      })]
    }), landingType !== 'ordinary' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
      className: "ap-bottom-box",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
        className: "ap-bottom-ordinary-box",
        onClick: goFree7Day,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Text */ "m"], {
          children: "\u53BB\u514D\u8D39\u542C7\u5929"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
          className: "apb-btn-bg",
          src: __webpack_require__(/*! ../../assets/images/activity_buy_bg.png */ "./src/assets/images/activity_buy_bg.png")
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
          className: "apb-btn-hand",
          mode: "widthFix",
          src: __webpack_require__(/*! ../../assets/images/activity_hand.png */ "./src/assets/images/activity_hand.png")
        })]
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
      className: "ap-bottom-box",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
        className: "apb-btn",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
          className: "apb-audition-box",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Text */ "m"], {
            className: "apb-audition-deposit",
            children: ["\u62BC\u91D1", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Text */ "m"], {
              children: ["\uFFE5", redEnvelope === false ? 99 : 199]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Text */ "m"], {
            className: "apb-audition-remind",
            children: "\u5B66\u5B8C\u5168\u989D\u9000\u6B3E"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
          className: "apb-btn-audition",
          onClick: audition,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Text */ "m"], {
            className: "icon icon-shitingliebiao"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Text */ "m"], {
            children: "\u8BD5\u542C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
            className: "apb-btn-bg",
            src: __webpack_require__(/*! ../../assets/images/activity_audition_bg.png */ "./src/assets/images/activity_audition_bg.png")
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* View */ "o"], {
          className: "apb-btn-box",
          onClick: gojoinNow,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Text */ "m"], {
            children: "\u7ACB\u523B\u52A0\u5165"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
            className: "apb-btn-bg",
            src: __webpack_require__(/*! ../../assets/images/activity_buy_bgt.png */ "./src/assets/images/activity_buy_bgt.png")
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__[/* Image */ "f"], {
            className: "apb-btn-hand",
            mode: "widthFix",
            src: __webpack_require__(/*! ../../assets/images/activity_hand.png */ "./src/assets/images/activity_hand.png")
          })]
        })]
      })
    })]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (Activity);

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/modal.scss":
/*!***************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/modal.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/noticebar.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/noticebar.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/lib/common/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/taro-ui/lib/common/utils.js ***!
  \**************************************************/
/*! exports provided: delay, delayQuerySelector, uuid, getEventDetail, initTestEnv, isTest, pxTransform, handleTouchScroll, delayGetClientRect, delayGetScrollOffset, mergeStyle */
/*! exports used: handleTouchScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* unused harmony export delay */
/* unused harmony export delayQuerySelector */
/* unused harmony export uuid */
/* unused harmony export getEventDetail */
/* unused harmony export initTestEnv */
/* unused harmony export isTest */
/* unused harmony export pxTransform */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleTouchScroll; });
/* unused harmony export delayGetClientRect */
/* unused harmony export delayGetScrollOffset */
/* unused harmony export mergeStyle */
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);


var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv();

function delay() {
  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, delayTime);
  });
}

function delayQuerySelector(selectorStr) {
  var delayTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  return new Promise(function (resolve) {
    var selector = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}

function delayGetScrollOffset(_ref) {
  var _ref$delayTime = _ref.delayTime,
      delayTime = _ref$delayTime === void 0 ? 500 : _ref$delayTime;
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery().selectViewport().scrollOffset().exec(function (res) {
        resolve(res);
      });
    });
  });
}

function delayGetClientRect(_ref2) {
  var selectorStr = _ref2.selectorStr,
      _ref2$delayTime = _ref2.delayTime,
      delayTime = _ref2$delayTime === void 0 ? 500 : _ref2$delayTime;
  var selector = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}

function uuid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var value = [];
  var i = 0;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      value[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r; // rfc4122 requires these characters

    /* eslint-disable-next-line */

    value[8] = value[13] = value[18] = value[23] = '-';
    value[14] = '4'; // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5

    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | Math.random() * 16;
        value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }

  return value.join('');
}

function getEventDetail(event) {
  var detail;

  switch (ENV) {
    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB:
      detail = {
        pageX: event.pageX,
        pageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        x: event.x,
        y: event.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEAPP:
      detail = {
        pageX: event.touches[0].pageX,
        pageY: event.touches[0].pageY,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.ALIPAY:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.SWAN:
      detail = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.detail.x,
        y: event.detail.y
      };
      break;

    default:
      detail = {
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        x: 0,
        y: 0
      };
      console.warn('getEventDetail暂未支持该环境');
      break;
  }

  return detail;
}

function initTestEnv() {
  if (false) {}
}

function isTest() {
  return "development" === 'test';
}

var scrollTop = 0;

function handleTouchScroll(flag) {
  if (ENV !== _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB) {
    return;
  }

  if (flag) {
    scrollTop = document.documentElement.scrollTop; // 使body脱离文档流

    document.body.classList.add('at-frozen'); // 把脱离文档流的body拉上去！否则页面会回到顶部！

    document.body.style.top = "".concat(-scrollTop, "px");
  } else {
    document.body.style.top = '';
    document.body.classList.remove('at-frozen');
    document.documentElement.scrollTop = scrollTop;
  }
}

function pxTransform(size) {
  if (!size) return '';
  var designWidth = 750;
  var deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  };
  return "".concat(size / deviceRatio[designWidth], "rpx");
}

function objectToString(style) {
  if (style && Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style) === 'object') {
    var styleStr = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += "".concat(lowerCaseKey, ":").concat(style[key], ";");
    });
    return styleStr;
  } else if (style && typeof style === 'string') {
    return style;
  }

  return '';
}
/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */


function mergeStyle(style1, style2) {
  if (style1 && Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style1) === 'object' && style2 && Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style2) === 'object') {
    return Object.assign({}, style1, style2);
  }

  return objectToString(style1) + objectToString(style2);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/taro-ui/lib/components/modal/action/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/lib/components/modal/action/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtModalAction; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");









var AtModalAction = /*#__PURE__*/function (_React$Component) {
  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtModalAction, _React$Component);

  var _super = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtModalAction);

  function AtModalAction() {
    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtModalAction);

    return _super.apply(this, arguments);
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtModalAction, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()('at-modal__footer', {
        'at-modal__footer--simple': this.props.isSimple
      }, this.props.className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: rootClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-modal__action'
      }, this.props.children));
    }
  }]);

  return AtModalAction;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


AtModalAction.defaultProps = {
  isSimple: false
};
AtModalAction.propTypes = {
  isSimple: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

/***/ }),

/***/ "./node_modules/taro-ui/lib/components/modal/content/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/taro-ui/lib/components/modal/content/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtModalContent; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");








var AtModalContent = /*#__PURE__*/function (_React$Component) {
  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtModalContent, _React$Component);

  var _super = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtModalContent);

  function AtModalContent() {
    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtModalContent);

    return _super.apply(this, arguments);
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtModalContent, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()('at-modal__content', this.props.className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "k"], {
        scrollY: true,
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtModalContent;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./node_modules/taro-ui/lib/components/modal/header/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/lib/components/modal/header/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtModalHeader; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");








var AtModalHeader = /*#__PURE__*/function (_React$Component) {
  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtModalHeader, _React$Component);

  var _super = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtModalHeader);

  function AtModalHeader() {
    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtModalHeader);

    return _super.apply(this, arguments);
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtModalHeader, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()('at-modal__header', this.props.className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtModalHeader;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./node_modules/taro-ui/lib/components/modal/index.js":
/*!************************************************************!*\
  !*** ./node_modules/taro-ui/lib/components/modal/index.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtModal; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/lib/common/utils.js");
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./action/index */ "./node_modules/taro-ui/lib/components/modal/action/index.js");
/* harmony import */ var _content_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/index */ "./node_modules/taro-ui/lib/components/modal/content/index.js");
/* harmony import */ var _header_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/index */ "./node_modules/taro-ui/lib/components/modal/header/index.js");














var AtModal = /*#__PURE__*/function (_React$Component) {
  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtModal, _React$Component);

  var _super = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtModal);

  function AtModal(props) {
    var _this;

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtModal);

    _this = _super.call(this, props);

    _this.handleClickOverlay = function () {
      if (_this.props.closeOnClickOverlay) {
        _this.setState({
          _isOpened: false
        }, _this.handleClose);
      }
    };

    _this.handleClose = function (event) {
      if (typeof _this.props.onClose === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        _this.props.onClose(event);
      }
    };

    _this.handleCancel = function (event) {
      if (typeof _this.props.onCancel === 'function') {
        _this.props.onCancel(event);
      }
    };

    _this.handleConfirm = function (event) {
      if (typeof _this.props.onConfirm === 'function') {
        _this.props.onConfirm(event);
      }
    };

    _this.handleTouchMove = function (e) {
      e.stopPropagation();
    };

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.ENV_TYPE.WEB
    };
    return _this;
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtModal, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;

      if (this.props.isOpened !== isOpened) {
        Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__[/* handleTouchScroll */ "a"])(isOpened);
      }

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          _isOpened = _this$state._isOpened,
          isWEB = _this$state.isWEB;
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content,
          cancelText = _this$props.cancelText,
          confirmText = _this$props.confirmText;
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()('at-modal', {
        'at-modal--active': _isOpened
      }, this.props.className);

      if (title || content) {
        var isRenderAction = cancelText || confirmText;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: rootClass
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          onClick: this.handleClickOverlay,
          className: 'at-modal__overlay'
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: 'at-modal__container'
        }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_header_index__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], null, title)), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_content_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: 'content-simple'
        }, isWEB ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"] // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        , {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          dangerouslySetInnerHTML: {
            __html: content.replace(/\n/g, '<br/>')
          }
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], null, content))), isRenderAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_action_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          isSimple: true
        }, cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "b"], {
          onClick: this.handleCancel
        }, cancelText), confirmText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "b"], {
          onClick: this.handleConfirm
        }, confirmText))));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        onTouchMove: this.handleTouchMove,
        className: rootClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-modal__overlay',
        onClick: this.handleClickOverlay
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-modal__container'
      }, this.props.children));
    }
  }]);

  return AtModal;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


AtModal.defaultProps = {
  isOpened: false,
  closeOnClickOverlay: true
};
AtModal.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  content: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  closeOnClickOverlay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  cancelText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  confirmText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};

/***/ }),

/***/ "./node_modules/taro-ui/lib/components/noticebar/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/taro-ui/lib/components/noticebar/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtNoticebar; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);










var AtNoticebar = /*#__PURE__*/function (_React$Component) {
  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtNoticebar, _React$Component);

  var _super = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtNoticebar);

  function AtNoticebar(props) {
    var _this;

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtNoticebar);

    _this = _super.call(this, props);
    var animElemId = "J_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    _this.state = {
      show: true,
      animElemId: animElemId,
      animationData: {
        actions: [{}]
      },
      dura: 15,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.ENV_TYPE.ALIPAY,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.ENV_TYPE.WEB
    };
    return _this;
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtNoticebar, [{
    key: "onClose",
    value: function onClose(event) {
      this.setState({
        show: false
      });
      this.props.onClose && this.props.onClose(event);
    }
  }, {
    key: "onGotoMore",
    value: function onGotoMore(event) {
      this.props.onGotoMore && this.props.onGotoMore(event);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      if (!this.timeout) {
        this.interval && clearInterval(this.interval);
        this.initAnimation();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.marquee) return;
      this.initAnimation();
    }
  }, {
    key: "initAnimation",
    value: function initAnimation() {
      var _this2 = this;

      var _this$state = this.state,
          isWEAPP = _this$state.isWEAPP,
          isALIPAY = _this$state.isALIPAY;
      this.timeout = setTimeout(function () {
        _this2.timeout = null;

        if (_this2.state.isWEB) {
          var _this2$props$speed = _this2.props.speed,
              speed = _this2$props$speed === void 0 ? 100 : _this2$props$speed;
          var elem = document.querySelector(".".concat(_this2.state.animElemId));
          if (!elem) return;
          var width = elem.getBoundingClientRect().width;
          var dura = width / +speed;

          _this2.setState({
            dura: dura
          });
        } else if (isWEAPP || isALIPAY) {
          var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.createSelectorQuery();
          query.select(".".concat(_this2.state.animElemId)).boundingClientRect().exec(function (res) {
            var queryRes = res[0];
            if (!queryRes) return;
            var width = queryRes.width;
            var _this2$props$speed2 = _this2.props.speed,
                speed = _this2$props$speed2 === void 0 ? 100 : _this2$props$speed2;
            var dura = width / +speed;
            var animation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.createAnimation({
              duration: dura * 1000,
              timingFunction: 'linear'
            });
            var resetAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });
            var resetOpacityAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });

            var animBody = function animBody() {
              resetOpacityAnimation.opacity(0).step();

              _this2.setState({
                animationData: resetOpacityAnimation.export()
              });

              setTimeout(function () {
                resetAnimation.translateX(0).step();

                _this2.setState({
                  animationData: resetAnimation.export()
                });
              }, 300);
              setTimeout(function () {
                resetOpacityAnimation.opacity(1).step();

                _this2.setState({
                  animationData: resetOpacityAnimation.export()
                });
              }, 600);
              setTimeout(function () {
                animation.translateX(-width).step();

                _this2.setState({
                  animationData: animation.export()
                });
              }, 900);
            };

            animBody();
            _this2.interval = setInterval(animBody, dura * 1000 + 1000);
          });
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          single = _this$props.single,
          icon = _this$props.icon,
          marquee = _this$props.marquee,
          customStyle = _this$props.customStyle,
          className = _this$props.className,
          _this$props$moreText = _this$props.moreText,
          moreText = _this$props$moreText === void 0 ? '查看详情' : _this$props$moreText;
      var _this$props2 = this.props,
          showMore = _this$props2.showMore,
          close = _this$props2.close;
      var _this$state2 = this.state,
          dura = _this$state2.dura,
          show = _this$state2.show,
          animElemId = _this$state2.animElemId,
          animationData = _this$state2.animationData,
          isWEAPP = _this$state2.isWEAPP,
          isALIPAY = _this$state2.isALIPAY;
      var rootClassName = ['at-noticebar'];
      if (!single) showMore = false;
      var style = {};
      var innerClassName = ['at-noticebar__content-inner'];

      if (marquee) {
        close = false;
        style['animation-duration'] = "".concat(dura, "s");
        innerClassName.push(animElemId);
      }

      var classObject = {
        'at-noticebar--marquee': marquee,
        'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
        'at-noticebar--single': !marquee && single
      };
      var iconClass = ['at-icon'];
      if (icon) iconClass.push("at-icon-".concat(icon));
      return show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(rootClassName, classObject, className),
        style: customStyle
      }, close && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-noticebar__close',
        onClick: this.onClose.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
        className: 'at-icon at-icon-close'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-noticebar__content'
      }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-noticebar__content-icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(iconClass, iconClass)
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-noticebar__content-text'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        id: animElemId,
        animation: animationData,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(innerClassName),
        style: style
      }, this.props.children))), showMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-noticebar__more',
        onClick: this.onGotoMore.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
        className: 'text'
      }, moreText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: 'at-noticebar__more-icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
        className: 'at-icon at-icon-chevron-right'
      }))));
    }
  }]);

  return AtNoticebar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


AtNoticebar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  showMore: false,
  icon: '',
  customStyle: {}
};
AtNoticebar.propTypes = {
  close: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  single: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  marquee: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  speed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  moreText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  showMore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onGotoMore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/api/robot/robot.ts":
/*!********************************!*\
  !*** ./src/api/robot/robot.ts ***!
  \********************************/
/*! exports provided: api_get_robot_accounts */
/*! exports used: api_get_robot_accounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_get_robot_accounts; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");


// 获取机器人
function api_get_robot_accounts(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].middleground, "/get_robot_accounts"), Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, params), {}, {
    noaccess: true
  }));
}

/***/ }),

/***/ "./src/api/share/share.ts":
/*!********************************!*\
  !*** ./src/api/share/share.ts ***!
  \********************************/
/*! exports provided: api_receive_share_card */
/*! exports used: api_receive_share_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_receive_share_card; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");


/**
 * 领取分享卡
 * https://value.weike.fm/tools/apidocs#get-/lh_tingshu_business/share.receive_share_card.get
 */
function api_receive_share_card(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/share.receive_share_card.get"), params);
}

/***/ }),

/***/ "./src/assets/images/activity_audition_bg.png":
/*!****************************************************!*\
  !*** ./src/assets/images/activity_audition_bg.png ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/activity_audition_bg.png";

/***/ }),

/***/ "./src/assets/images/activity_bottom_bg.png":
/*!**************************************************!*\
  !*** ./src/assets/images/activity_bottom_bg.png ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/activity_bottom_bg.png";

/***/ }),

/***/ "./src/assets/images/activity_buy_bg.png":
/*!***********************************************!*\
  !*** ./src/assets/images/activity_buy_bg.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/activity_buy_bg.png";

/***/ }),

/***/ "./src/assets/images/activity_buy_bgt.png":
/*!************************************************!*\
  !*** ./src/assets/images/activity_buy_bgt.png ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/activity_buy_bgt.png";

/***/ }),

/***/ "./src/assets/images/activity_hand.png":
/*!*********************************************!*\
  !*** ./src/assets/images/activity_hand.png ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/activity_hand.png";

/***/ }),

/***/ "./src/pages/activity/activity.scss":
/*!******************************************!*\
  !*** ./src/pages/activity/activity.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/activity/activity.tsx":
/*!*****************************************!*\
  !*** ./src/pages/activity/activity.tsx ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_activity_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./activity.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/activity/activity.tsx");


var config = {"navigationBarTitleText":"梨花听书"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_activity_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/activity/activity', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/activity/components/bullet-chat/bullet-chat.module.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/activity/components/bullet-chat/bullet-chat.module.scss ***!
  \***************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bullet-chat":"bullet-chat--ZXHca","bc-marquee":"bc-marquee--1QTnL","user-info":"user-info--29Jpj","user-avatar":"user-avatar--2pz7y","user-name":"user-name--1Ss2y","user-name-text":"user-name-text--ei9Fb"};

/***/ }),

/***/ "./src/pages/activity/components/bullet-chat/bullet-chat.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/activity/components/bullet-chat/bullet-chat.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_ui_dist_style_components_noticebar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui/dist/style/components/noticebar.scss */ "./node_modules/taro-ui/dist/style/components/noticebar.scss");
/* harmony import */ var taro_ui_dist_style_components_noticebar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_noticebar_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taro_ui_lib_components_noticebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui/lib/components/noticebar */ "./node_modules/taro-ui/lib/components/noticebar/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _bullet_chat_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bullet-chat.module.scss */ "./src/pages/activity/components/bullet-chat/bullet-chat.module.scss");
/* harmony import */ var _bullet_chat_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bullet_chat_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_robot_robot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/robot/robot */ "./src/api/robot/robot.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _utils_css_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/css-module */ "./src/utils/css-module.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













var BulletChat = Object(_utils_css_module__WEBPACK_IMPORTED_MODULE_10__[/* CSSModule */ "a"])(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState, 2),
      robotList = _useState2[0],
      setRobotList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    getRobotList();
  }, []);

  var getRobotList = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return new Promise(function (res) {
                return setTimeout(function () {
                  return res(1);
                }, 3000);
              });

            case 3:
              _context.next = 5;
              return Object(_api_robot_robot__WEBPACK_IMPORTED_MODULE_8__[/* api_get_robot_accounts */ "a"])({
                limit: 20
              });

            case 5:
              res = _context.sent;
              console.log('res', res);

              if (res !== null && res !== void 0 && res.length) {
                setRobotList(res);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error('getRobotList', _context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function getRobotList() {
      return _ref.apply(this, arguments);
    };
  }();

  return Object(react__WEBPACK_IMPORTED_MODULE_7__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
      styleName: "bullet-chat",
      children: robotList.length > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui_lib_components_noticebar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        marquee: true,
        speed: 40,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
          styleName: "bc-marquee",
          children: robotList.map(function (user) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
              styleName: "user-info",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "f"], {
                styleName: "user-avatar",
                lazyLoad: true,
                src: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_9__[/* getPicture */ "f"])(user.avatar_url, 26),
                mode: "aspectFill"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                styleName: "user-name",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                  styleName: "user-name-text",
                  children: user.nickname
                }), "\u521A\u521A\u52A0\u5165\u6210\u529F"]
              })]
            }, user.id);
          })
        })
      })
    });
  }, [robotList]);
}, _bullet_chat_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a);
/* harmony default export */ __webpack_exports__["a"] = (BulletChat);

/***/ }),

/***/ "./src/pages/activity/components/card-dialog/card-dialog.module.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/activity/components/card-dialog/card-dialog.module.scss ***!
  \***************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"card-dialog-wrapper":"card-dialog-wrapper--3buus","light-icon":"light-icon--1P0WK","animal":"animal--21nYR","medal-icon":"medal-icon--2l7-s","card-title":"card-title--38rIl","card-bg":"card-bg--3__EI","card-desc":"card-desc--44upd"};

/***/ }),

/***/ "./src/pages/activity/components/card-dialog/card-dialog.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/activity/components/card-dialog/card-dialog.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/dialog/dialog */ "./src/components/dialog/dialog.tsx");
/* harmony import */ var _utils_css_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/css-module */ "./src/utils/css-module.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _card_dialog_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-dialog.module.scss */ "./src/pages/activity/components/card-dialog/card-dialog.module.scss");
/* harmony import */ var _card_dialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_dialog_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






var CardDialog = Object(_utils_css_module__WEBPACK_IMPORTED_MODULE_1__[/* CSSModule */ "a"])(function (props) {
  var value = props.value,
      setValue = props.setValue;
  console.log('CardDialog');
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    value: value,
    setValue: setValue,
    backgroundColor: "transparent",
    showClose: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
      styleName: "card-dialog-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "f"], {
        styleName: "light-icon",
        src: "https://static-1253442168.file.myqcloud.com/xupload/20210918_guang.png"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
        styleName: "cd-card",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "f"], {
          styleName: "medal-icon",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210831_xunzhang.png",
          mode: "widthFix"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
          styleName: "card-title",
          children: "\u9886\u53D6\u6210\u529F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "f"], {
          styleName: "card-bg",
          mode: "heightFix",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210909_card_NHe970J.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
          styleName: "card-desc",
          children: "\u606D\u559C\u4F60\uFF01\u83B7\u5F97\u4E00\u5F20\u68A8\u82B1\u542C\u4E667\u5929\u7545\u542C\u5361 \u4F60\u5C06\u53EF\u514D\u8D39\u542C7\u5929\u7684\u8BFE\u7A0B\uFF01\u5728\u8FD97\u5929\uFF0C\u8BF7\u8F7B\u677E\u6109\u5FEB\u7684\u542C\u4E66\u5427\uFF5E"
        })]
      })]
    })
  });
}, _card_dialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);
/* harmony default export */ __webpack_exports__["a"] = (CardDialog);

/***/ }),

/***/ "./src/pages/activity/components/play-directory/play-directory.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/activity/components/play-directory/play-directory.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/activity/components/play-directory/play-directory.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/activity/components/play-directory/play-directory.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/bottom-dialog/bottom-dialog */ "./src/components/bottom-dialog/bottom-dialog.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _play_directory_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./play-directory.scss */ "./src/pages/activity/components/play-directory/play-directory.scss");
/* harmony import */ var _play_directory_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_play_directory_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










var icons = {
  loading: 'icon-zhoucejiazai1x',
  pause: 'icon-zhoucebofang1x',
  play: 'icon-zhoucezanting1x'
};
var PlayDirectory = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* observer */ "b"])(function (props) {
  var dialogStatus = props.dialogStatus,
      setDialogStatus = props.setDialogStatus,
      fomateDailyContent = props.fomateDailyContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('0px'),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      scrollHeight = _useState2[0],
      setScrollHeight = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      lectures = _useState4[0],
      setLectures = _useState4[1];

  var playStatus = _store__WEBPACK_IMPORTED_MODULE_3__[/* ApiStore */ "a"].player.getPlayInfo.status;
  var bookId = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(-1); //当前播放书籍的id

  var Header = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
      className: "directory-bg",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
        className: "directory-header flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: "header-wrapper",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
            className: "header-title",
            children: "\u4E66\u5355\u8BA1\u5212"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          onClick: function onClick() {
            return setDialogStatus(false);
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
            className: "icon icon-guanbibeifen"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
            className: "close-text",
            children: "\u5173\u95ED"
          })]
        })]
      })
    });
  }, [dialogStatus]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    fomateDailyContent.forEach(function (item) {
      item.content.forEach(function (book) {
        book.playStatus = 'pause';
      });
    });
    setLectures(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(fomateDailyContent)); // getLectureContent();
  }, [fomateDailyContent]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    getScrollHeight();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    setPlayStatus(playStatus);
  }, [playStatus]); //清除状态

  var setPlayStatus = function setPlayStatus(status) {
    lectures.forEach(function (item) {
      item.content.forEach(function (book, index) {
        if (book.object_id === bookId.current) {
          book.playStatus = status;
        } else {
          book.playStatus = 'pause';
        }
      });
    });
    setLectures(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(lectures));
  };
  /** 设置滚动盒子高度 */


  var getScrollHeight = function getScrollHeight() {
    var _wx$platform$windowHe, _wx, _wx$platform, _wx2, _wx2$platform, _wx$platform$windowHe2, _wx3, _wx3$platform;

    //沙雕处理方法 获取不到动态高度 就按屏幕高度写死
    var height = Math.floor(((_wx$platform$windowHe = (_wx = wx) === null || _wx === void 0 ? void 0 : (_wx$platform = _wx.platform) === null || _wx$platform === void 0 ? void 0 : _wx$platform.windowHeight) !== null && _wx$platform$windowHe !== void 0 ? _wx$platform$windowHe : 0) * 0.55) + 'px';
    console.log('height', height, (_wx2 = wx) === null || _wx2 === void 0 ? void 0 : (_wx2$platform = _wx2.platform) === null || _wx2$platform === void 0 ? void 0 : _wx2$platform.windowHeight, (_wx$platform$windowHe2 = (_wx3 = wx) === null || _wx3 === void 0 ? void 0 : (_wx3$platform = _wx3.platform) === null || _wx3$platform === void 0 ? void 0 : _wx3$platform.windowHeight) !== null && _wx$platform$windowHe2 !== void 0 ? _wx$platform$windowHe2 : 0 * 0.55);
    setScrollHeight(height);
  };
  /**
   * @description: 点击播放暂停
   * @param {*} e
   * @return {*}
   */


  var bindAudio = function bindAudio(item, index, sub) {
    playLecture(item, index, sub);
  };
  /**
   * 音频播放
   */


  var playLecture = function playLecture(item, index, sub) {
    console.log(item, '当前数据');
    var author = item.author,
        anchor = item.anchor,
        unread = item.unread,
        unlock = item.unlock,
        object_type = item.object_type,
        book_id = item.book_id,
        title = item.title,
        object_id = item.object_id,
        channel_id = item.channel_id;
    console.log(item);
    lectures[index].content[sub].playStatus = 'loading';
    bookId.current = item.object_id;
    setLectures(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(lectures));
    var _item$object_info = item.object_info,
        length = _item$object_info.length,
        audio = _item$object_info.audio;
    _store__WEBPACK_IMPORTED_MODULE_3__[/* ApiStore */ "a"].player.setPlayInfo({
      anchor: anchor,
      author: author,
      unlock: unlock,
      unread: unread,
      object_type: object_type,
      book_id: book_id,
      title: title,
      object_id: object_id,
      channel_id: channel_id,
      duration: length,
      src: audio,
      status: 'pause',
      cover_url: ''
    });
    _store__WEBPACK_IMPORTED_MODULE_3__[/* ApiStore */ "a"].player.goPlay();
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      onClose: function onClose() {
        return setDialogStatus(false);
      },
      value: dialogStatus,
      children: [Header, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* ScrollView */ "k"], {
        scrollY: true,
        style: 'height: ' + scrollHeight,
        scrollWithAnimation: false,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: "panel-directory-wrapper",
          children: lectures.map(function (items, index) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
              children: [items.week_num === 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: "lecture-content flex",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                  className: "items-title",
                  children: "\u5148\u884C\u8BFE"
                })
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: "lecture-content flex",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                  className: "items-title",
                  children: '第' + items.week_num + '周'
                })
              }), items.content.map(function (book, sub) {
                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                  className: "lecture-content flex",
                  onClick: function onClick() {
                    return bindAudio(book, index, sub);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                    className: "lecture-subtitle playing locked",
                    children: book.title
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                    className: "icon ".concat(icons[book.playStatus], " play-icon"),
                    style: {
                      color: '#9B6ADA'
                    }
                  })]
                }, book.id);
              })]
            }, index);
          })
        })
      })]
    })
  });
});
/* harmony default export */ __webpack_exports__["a"] = (PlayDirectory);

/***/ }),

/***/ "./src/pages/activity/components/user-num/user-num.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/activity/components/user-num/user-num.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








var UserNum = function UserNum(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.num || 100),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      num = _useState2[0],
      setNum = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (props.num <= 20) return; // 如果小于20，则不变
    //数字每秒随机减1-4 当数字减到20以下时 不再减

    var timer = setInterval(function () {
      var randomNum = Math.ceil(Math.random() * 4);
      setNum(function (old) {
        if (old < 20) {
          clearInterval(timer);
          return old;
        }

        return old - randomNum;
      });
    }, 4000);
    return function () {
      clearInterval(timer);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* setStorage */ "q"])('activity_user_num', num);
  }, [num]);
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: ["\u9650\u65F6\u798F\u5229\u4EC5\u5269", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
        children: num
      }), "\u4E2A\u540D\u989D"]
    });
  }, [num]);
};

/* harmony default export */ __webpack_exports__["a"] = (UserNum);

/***/ })

},[["./src/pages/activity/activity.tsx","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=activity.js.map