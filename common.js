(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/account/account.ts":
/*!************************************!*\
  !*** ./src/api/account/account.ts ***!
  \************************************/
/*! exports provided: api_weixin_mina_v2, api_user_access, api_judge_user_access, api_judge_subscribed, api_check_subscribed, api_share_card_count */
/*! exports used: api_check_subscribed, api_judge_subscribed, api_judge_user_access, api_share_card_count, api_user_access, api_weixin_mina_v2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return api_weixin_mina_v2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return api_user_access; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return api_judge_user_access; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_judge_subscribed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_check_subscribed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return api_share_card_count; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/config */ "./src/config/config.ts");


/*
 * @Author: linzhihai
 * @Date: 2021-08-20 16:26:00
 * @LastEditTime: 2021-09-17 15:58:14
 * @Description:
 */


/**
 * 登录
 */

function api_weixin_mina_v2(params) {
  var config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }; // noaccess 无需校验登录态的接口

  var _params = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, params), {}, {
    noaccess: true
  });

  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* post */ "b"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].wk, "/account/auth/weixin_mina_v2"), _params, config);
}
/** 用户加入 */

function api_user_access(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].base, "/access.user_access.get"), {
    object_type: params && params.object_type || 'channel',
    object_id: params && params.object_id || _config_config__WEBPACK_IMPORTED_MODULE_2__[/* configDefault */ "b"].channel_id,
    source: params && params.source || 'normal'
  });
}
/** 用户是否加入 */

function api_judge_user_access(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].base, "/access.judge_user_access.get"), {
    object_type: params && params.object_type || 'channel',
    object_id: params && params.object_id || _config_config__WEBPACK_IMPORTED_MODULE_2__[/* configDefault */ "b"].channel_id
  });
}
/** 是否关注公众号 */

function api_judge_subscribed(account_id) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].base, "/subscribe.judge_subscribed.get"), {
    account_id: account_id
  });
}
/**
 * 是否关注公众号
 * NOTE: 这是一个只专注于判断公众号的接口，楼上的那个接口说是有逻辑耦合，目前这个接口应用在首页的订阅消息那块
 *
 */

function api_check_subscribed(account_id) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].base, "/subscribe.check_subscribed.get"), {
    account_id: account_id
  });
}
/** 分享亲友卡 */

function api_share_card_count(channel_id) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].base, "/share.share_card_count.get"), {
    channel_id: channel_id
  });
}

/***/ }),

/***/ "./src/api/clock/clock.ts":
/*!********************************!*\
  !*** ./src/api/clock/clock.ts ***!
  \********************************/
/*! exports provided: api_clock_in, api_clock_mina_share_get, api_credits_get, api_finish_lecture, api_share_clock */
/*! exports used: api_clock_in, api_clock_mina_share_get, api_credits_get, api_share_clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_clock_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_clock_mina_share_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return api_credits_get; });
/* unused harmony export api_finish_lecture */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return api_share_clock; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");
/** 打卡 */


/**
 * 打卡
 */
function api_clock_in(params) {
  if (!params.object_type) params.object_type = 'lecture';
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/clock.clock_in"), params);
}
/**
 * 获取分享卡
 */

function api_clock_mina_share_get(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/clock.clock_mina_share.get"), params);
}
/**
 * 用户发布笔记获取积分接口
 */

function api_credits_get(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/clock.publish_note.credits.get"), params);
}
/** 用户学完课程获取积分接口 */

function api_finish_lecture(lecture_id, channel_id) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/clock.finish_lecture.credits.get"), {
    lecture_id: lecture_id,
    channel_id: channel_id
  });
}
/** 分享打卡事件上报 */

function api_share_clock() {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/clock.share_clock"));
}

/***/ }),

/***/ "./src/api/common/common.ts":
/*!**********************************!*\
  !*** ./src/api/common/common.ts ***!
  \**********************************/
/*! exports provided: api_business_flag, api_landing_page_random */
/*! exports used: api_business_flag, api_landing_page_random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_business_flag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_landing_page_random; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");


/*
 * @Description: file content
 * @Date: 2021-09-10 15:54:19
 * @LastEditTime: 2021-09-10 16:49:43
 */

// 引导关注公众号、购买转化弹窗
function api_business_flag(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* post */ "b"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].base, "/common.business_flag.post"), params);
}
/**
 * 获取落地页模板
 * @param {*} params
 */

function api_landing_page_random(params) {
  var _params = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, params), {}, {
    noaccess: true
  }); // 无需登录态


  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_1__[/* url */ "c"].base, "/common.landing_page_random.get"), _params);
}

/***/ }),

/***/ "./src/api/content/content.ts":
/*!************************************!*\
  !*** ./src/api/content/content.ts ***!
  \************************************/
/*! exports provided: api_content_get, api_channel_daily_content_get, api_today_content, api_noaccess_content_page, api_channel_daily_content, api_content_discussmessage_get, api_write_discussmessage_post, api_like_discussmessage_post */
/*! exports used: api_channel_daily_content_get, api_content_discussmessage_get, api_content_get, api_like_discussmessage_post, api_noaccess_content_page, api_today_content, api_write_discussmessage_post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return api_content_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_channel_daily_content_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return api_today_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return api_noaccess_content_page; });
/* unused harmony export api_channel_daily_content */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_content_discussmessage_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return api_write_discussmessage_post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return api_like_discussmessage_post; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/config */ "./src/config/config.ts");
/*
 * @Author: linzhihai
 * @Date: 2021-08-20 16:26:00
 * @LastEditTime: 2021-08-26 16:44:19
 * @Description:
 */

/** 内容 */


/**
 * 获取详情信息
 */

function api_content_get(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/content.content.get"), params);
}
/**
 * 获取详情目录信息
 */

function api_channel_daily_content_get(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/content.channel_daily_content.get"), params);
}
/**
 * 今日学习内容
 */

function api_today_content() {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/content.today_content_page.get"));
}
/** 新用户获取临时数据 无需token */

function api_noaccess_content_page() {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/content.noaccess_content_page.get"), {
    channel_id: _config_config__WEBPACK_IMPORTED_MODULE_1__[/* configDefault */ "b"].channel_id,
    noaccess: true
  });
}
/** 请求专栏计划页数据 */

function api_channel_daily_content(channel_id) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/content.channel_daily_content.get"), {
    channel_id: channel_id
  });
}
/**
 * 获取笔记列
 */

function api_content_discussmessage_get(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/content.content_discussmessage.get"), params);
}
/**
 * 发表笔记
 */

function api_write_discussmessage_post(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* post */ "b"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/content.write_discussmessage.post"), params);
}
/**
 * 评论点赞
 */

function api_like_discussmessage_post(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* post */ "b"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/content.like_discussmessage.post"), params);
}

/***/ }),

/***/ "./src/api/mina_app/mina_app.ts":
/*!**************************************!*\
  !*** ./src/api/mina_app/mina_app.ts ***!
  \**************************************/
/*! exports provided: api_template_subscription */
/*! exports used: api_template_subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_template_subscription; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");


/**
 * 小程序推送与模板消息
 * https://gitlab.weike.fm/lh/lh-docs/blob/master/%E6%A2%A8%E8%8A%B1%E5%90%AC%E4%B9%A6/V1.3.1/%E6%A2%A8%E8%8A%B1v1.31%E5%8A%9F%E8%83%BD%E5%90%8E%E7%AB%AF%E6%8A%80%E6%9C%AF%E5%AE%9E%E7%8E%B0.md#114-%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%A8%E9%80%81%E4%B8%8E%E6%A8%A1%E6%9D%BF%E6%B6%88%E6%81%AF
 */
function api_template_subscription(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* post */ "b"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/mina_app.template_subscription.post"), params);
}

/***/ }),

/***/ "./src/api/personal_center/personal_center.ts":
/*!****************************************************!*\
  !*** ./src/api/personal_center/personal_center.ts ***!
  \****************************************************/
/*! exports provided: api_bought_list, api_find_account_balance, api_withdraw_cash, api_personal_discuss, api_find_account_flows, api_find_balance_account_flows, api_user_infomation, api_personal_discuss_list */
/*! exports used: api_bought_list, api_find_account_balance, api_find_account_flows, api_find_balance_account_flows, api_personal_discuss, api_user_infomation, api_withdraw_cash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_bought_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_find_account_balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return api_withdraw_cash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return api_personal_discuss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return api_find_account_flows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return api_find_balance_account_flows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return api_user_infomation; });
/* unused harmony export api_personal_discuss_list */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");
/*
 * @Description: 个人中心
 * @LastEditTime: 2021-08-24 17:21:49
 */

// 我的课程
function api_bought_list() {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/personal_center.bought_list.get"), {});
}
/*** 申请提现start */
// 余额

function api_find_account_balance() {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/personal_center.find_account_balance.get"), {});
} // 提现按钮

function api_withdraw_cash(code) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/personal_center.withdraw_cash"), {
    code: code
  });
}
/*** 申请提现end */
// 我的笔记

function api_personal_discuss(page) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/personal_center.personal_discuss.get"), {
    page: page
  });
} // 学分记录

function api_find_account_flows(offset) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/personal_center.find_account_flows.get"), {
    limit: 20,
    offset: offset
  });
} // 余额流水记录

function api_find_balance_account_flows(offset) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/personal_center.find_balance_account_flows.get"), {
    limit: 20,
    offset: offset
  });
} // 个人中心

function api_user_infomation() {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/personal_center.infomation.get"), {});
}
/**
 * 获取个人笔记列表
 */

function api_personal_discuss_list(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/personal_center.personal_discuss.get"), params);
}

/***/ }),

/***/ "./src/api/study_length/study_length.ts":
/*!**********************************************!*\
  !*** ./src/api/study_length/study_length.ts ***!
  \**********************************************/
/*! exports provided: api_lecture_study_dot */
/*! exports used: api_lecture_study_dot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_lecture_study_dot; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");
/*
 * @Author: linzhihai
 * @Date: 2021-08-20 16:26:00
 * @LastEditTime: 2021-08-25 18:28:45
 * @Description:
 */

/** 课程学习打点 */

function api_lecture_study_dot(lecture_id, dot_ts) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/study_length.lecture_study_dot.get"), {
    lecture_id: lecture_id,
    dot_ts: dot_ts
  });
}

/***/ }),

/***/ "./src/components/bottom-dialog/bottom-dialog.scss":
/*!*********************************************************!*\
  !*** ./src/components/bottom-dialog/bottom-dialog.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bottom-dialog/bottom-dialog.tsx":
/*!********************************************************!*\
  !*** ./src/components/bottom-dialog/bottom-dialog.tsx ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_ui_dist_style_components_action_sheet_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui/dist/style/components/action-sheet.scss */ "./node_modules/taro-ui/dist/style/components/action-sheet.scss");
/* harmony import */ var taro_ui_dist_style_components_action_sheet_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_action_sheet_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taro_ui_lib_components_action_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui/lib/components/action-sheet */ "./node_modules/taro-ui/lib/components/action-sheet/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bottom_dialog_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottom-dialog.scss */ "./src/components/bottom-dialog/bottom-dialog.scss");
/* harmony import */ var _bottom_dialog_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bottom_dialog_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








var BottomDialog = function BottomDialog(props) {
  var value = props.value,
      _onClose = props.onClose,
      fixed = props.fixed;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (value) {
      setShow(true);
    } else {
      setTimeout(function () {
        setShow(false);
      }, 300);
    }
  }, [value]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
    className: fixed ? 'fixed-box' : '',
    catchMove: true,
    style: {
      position: 'fixed',
      zIndex: 1010
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui_lib_components_action_sheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      isOpened: value,
      onCancel: function onCancel() {
        return console.log('onCancel');
      },
      onClose: function onClose() {
        return _onClose === null || _onClose === void 0 ? void 0 : _onClose();
      },
      children: show && props.children
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (BottomDialog);

/***/ }),

/***/ "./src/components/dialog/dialog.scss":
/*!*******************************************!*\
  !*** ./src/components/dialog/dialog.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/dialog/dialog.tsx":
/*!******************************************!*\
  !*** ./src/components/dialog/dialog.tsx ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.scss */ "./src/components/dialog/dialog.scss");
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dialog_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/*
 * @Description: file content
 * @LastEditTime: 2021-09-08 15:42:54
 */







var Dialog = function Dialog(props) {
  var backgroundColor = props.backgroundColor,
      maskClose = props.maskClose,
      maskColor = props.maskColor,
      title = props.title,
      showClose = props.showClose,
      value = props.value,
      setValue = props.setValue;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    console.log('dialog value', value);
    return value ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
      catchMove: true,
      className: "modal-mask",
      onClick: function onClick() {
        return maskClose && (setValue === null || setValue === void 0 ? void 0 : setValue(false));
      },
      style: 'background-color: ' + maskColor,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        className: "modal-content",
        style: 'background-color: ' + backgroundColor,
        children: [title && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: "modal-title",
          children: title
        }), props.children]
      }), showClose && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Text */ "m"], {
        onClick: function onClick() {
          return setValue === null || setValue === void 0 ? void 0 : setValue(false);
        },
        className: "icon icon-guanbidanchuang1x"
      })]
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {});
  }, [backgroundColor, maskClose, maskColor, title, showClose, value, setValue]);
};

/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ "./src/components/empty/empty.module.scss":
/*!************************************************!*\
  !*** ./src/components/empty/empty.module.scss ***!
  \************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container--3ZeKw","img":"img--264PY","desc":"desc--2Nu5n"};

/***/ }),

/***/ "./src/components/empty/empty.tsx":
/*!****************************************!*\
  !*** ./src/components/empty/empty.tsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _empty_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty.module.scss */ "./src/components/empty/empty.module.scss");
/* harmony import */ var _empty_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_empty_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/*
 * @Description: 空状态
 * @Date: 2021-08-24 14:25:54
 * @LastEditTime: 2021-08-24 14:37:12
 */






var Empty = function Empty(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
    className: _empty_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "f"], {
      className: _empty_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img,
      src: props.img
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
      className: _empty_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.desc,
      children: props.desc
    })]
  });
};

Empty.defaultProps = {
  img: 'https://static-1253442168.file.myqcloud.com/xupload/20210605_empty.png',
  desc: '暂无数据！'
};
/* harmony default export */ __webpack_exports__["a"] = (Empty);

/***/ }),

/***/ "./src/components/family-card/family-card.module.scss":
/*!************************************************************!*\
  !*** ./src/components/family-card/family-card.module.scss ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"no_receive_container":"no_receive_container--3i3CI","content":"content--1XTtk","img_wrap":"img_wrap--3TmUD","content_rgt":"content_rgt--vrkOM","title":"title--3Z8yV","sub_tit":"sub_tit--2iPlO","number":"number--3IWCy","time":"time--2o0FZ","btn":"btn--3Npug","receive_container":"receive_container--3cT1n","icon_lingqutixing":"icon_lingqutixing--JpHEC","icon_guanbi1x":"icon_guanbi1x--2xLbP","text":"text--1X6cn","message":"message--3-1L-"};

/***/ }),

/***/ "./src/components/family-card/family-card.tsx":
/*!****************************************************!*\
  !*** ./src/components/family-card/family-card.tsx ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./family-card.module.scss */ "./src/components/family-card/family-card.module.scss");
/* harmony import */ var _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_family_card_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/*
 * @Description: 亲友卡
 * @Date: 2021-09-07 15:31:14
 * @LastEditTime: 2021-09-10 17:32:22
 */








var FamilyCard = function FamilyCard(props) {
  var isShare = props.isShare,
      shareCount = props.shareCount,
      validityDate = props.validityDate,
      showCard = props.showCard;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return isShare ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [shareCount !== 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
        className: "".concat(_family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.no_receive_container, " ").concat(_family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
            className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img_wrap,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "f"], {
              src: "https://static-1253442168.file.myqcloud.com/xupload/20210909_card_NHe970J.png"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
            className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content_rgt,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
              className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
              children: "\u68A8\u82B1\u542C\u4E66\u4EB2\u53CB\u7545\u542C\u5361"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
              className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sub_tit,
              children: "\u4E03\u5929\u514D\u8D39\u542C"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
              className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.number,
              children: [shareCount, "\u5F20"]
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.time,
          children: ["\u6709\u6548\u671F\uFF1A", validityDate]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
          children: "\u8D60\u9001\u4EB2\u53CB"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "b"], {
          className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
          openType: "share",
          onClick: function onClick() {
            return _utils_track__WEBPACK_IMPORTED_MODULE_3__[/* track */ "a"].setEvent('lh_minecourse_share_ck');
          },
          children: "\u8D60\u9001\u4EB2\u53CB"
        })]
      }), shareCount === 0 && showCard && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
        className: "".concat(_family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receive_container, "  ").concat(_family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "m"], {
            className: "icon icon-lingqutixing ".concat(_family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon_lingqutixing)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "m"], {
            className: _family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
            children: "\u4F60\u7684\u542C\u4E66\u4EB2\u53CB\u5361\u88AB\u9886\u53D6\u5B8C\u5566~"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "m"], {
          className: "icon icon-a-guanbi1x ".concat(_family_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon_guanbi1x),
          onClick: props.onCloseCard
        })]
      })]
    }) : null;
  }, [isShare, shareCount, validityDate, showCard]);
};

/* harmony default export */ __webpack_exports__["a"] = (FamilyCard);

/***/ }),

/***/ "./src/components/follow-remind/follow-remind.tsx":
/*!********************************************************!*\
  !*** ./src/components/follow-remind/follow-remind.tsx ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/config */ "./src/config/config.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/follow-remind/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/*
 * @Author: linzhihai
 * @Date: 2021-08-23 14:32:23
 * @LastEditTime: 2021-09-13 14:43:20
 * @Description:
 */







var FollowRemind = function FollowRemind() {
  var handleRemind = function handleRemind() {
    _utils_WX__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].navigateTo('/pages/h5/h5', {
      webViewUrl: _config_config__WEBPACK_IMPORTED_MODULE_0__[/* configDefault */ "b"].remind_qr
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
      className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.follow_remind, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flex),
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flex,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
          className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon_xiaoxitixing, " icon-xiaoxitixing icon")
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.remind_text,
          children: "\u8BF7\u5173\u6CE8\u516C\u4F17\u53F7\u63A5\u6536\u8BFE\u7A0B\u66F4\u65B0\u63D0\u9192"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "b"], {
        hoverClass: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.remind_button_active,
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.remind_button,
        onClick: handleRemind,
        children: "\u63A5\u6536\u63D0\u9192"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.margin
    })]
  });
};

FollowRemind.option = {
  addGlobalClass: true
};
/* harmony default export */ __webpack_exports__["a"] = (FollowRemind);

/***/ }),

/***/ "./src/components/follow-remind/index.module.scss":
/*!********************************************************!*\
  !*** ./src/components/follow-remind/index.module.scss ***!
  \********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"follow_remind":"follow_remind--295th","margin":"margin--qnb32","flex":"flex--3vjod","icon_xiaoxitixing":"icon_xiaoxitixing--2f-oq","remind_text":"remind_text--1NjQ0","remind_button":"remind_button--1PnPE","remind_button_active":"remind_button_active--3_wT_"};

/***/ }),

/***/ "./src/components/lecture-list/lecture-list.scss":
/*!*******************************************************!*\
  !*** ./src/components/lecture-list/lecture-list.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/lecture-list/lecture-list.tsx":
/*!******************************************************!*\
  !*** ./src/components/lecture-list/lecture-list.tsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_follow_remind_follow_remind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/follow-remind/follow-remind */ "./src/components/follow-remind/follow-remind.tsx");
/* harmony import */ var _lecture_list_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lecture-list.scss */ "./src/components/lecture-list/lecture-list.scss");
/* harmony import */ var _lecture_list_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lecture_list_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/login */ "./src/utils/login.ts");
/* harmony import */ var _api_account_account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/account/account */ "./src/api/account/account.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _empty_empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../empty/empty */ "./src/components/empty/empty.tsx");
/* harmony import */ var _api_content_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/content/content */ "./src/api/content/content.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _components_family_card_family_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/family-card/family-card */ "./src/components/family-card/family-card.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/config/config */ "./src/config/config.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);





/*
 * @Author: linzhihai
 * @Date: 2021-08-24 15:42:16
 * @LastEditTime: 2021-09-23 15:08:23
 * @Description:
 */


















var LectureList = function LectureList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      dailyContent = _useState2[0],
      setDailyContent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      channelInfo = _useState4[0],
      setChannelInfo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState7, 2),
      hasJoin = _useState8[0],
      setHasJoin = _useState8[1]; // 是否加入


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState9, 2),
      isSubscribed = _useState10[0],
      setIsSubscribed = _useState10[1]; // 是否关注公众号
  // 分享亲友卡的数据


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState12 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState11, 2),
      isShare = _useState12[0],
      setIsShare = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState14 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState13, 2),
      shareCount = _useState14[0],
      setShareCount = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState16 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState15, 2),
      validityDate = _useState16[0],
      setValidityDate = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState18 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState17, 2),
      showCard = _useState18[0],
      setShowCard = _useState18[1]; // 是否展示领取完的卡片样式


  var from = props.from;
  var channelId = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__["useDidShow"])(function () {
    var ch_id = 0; // channel-plan

    if (from === 'plan') {
      var _$instance$router, _$instance$router2;

      var $instance = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__["getCurrentInstance"])();
      ch_id = (_$instance$router = $instance.router) !== null && _$instance$router !== void 0 && _$instance$router.params.channel_id ? +((_$instance$router2 = $instance.router) === null || _$instance$router2 === void 0 ? void 0 : _$instance$router2.params.channel_id) : _config_config__WEBPACK_IMPORTED_MODULE_17__[/* configDefault */ "b"].channel_id;
    } else {
      // pages/mine-course/mine-course
      var _channelId = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getStorageSync('setChannelId');

      ch_id = _channelId || _config_config__WEBPACK_IMPORTED_MODULE_17__[/* configDefault */ "b"].channel_id;
    }

    channelId.current = ch_id;

    if (ch_id) {
      checkIsNewUser();
    }
  });
  /**
   * @description: 是否关注公众号
   * @param {*}
   * @return {*}
   */

  var checkHasSubscribed = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _Taro$getStorageSync$;

      var subscribe, account_id, res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              subscribe = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getStorageSync('setIsSubscribe') ? JSON.parse(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getStorageSync('setIsSubscribe')) : false;

              if (!subscribe) {
                _context.next = 4;
                break;
              }

              setIsSubscribed(true);
              return _context.abrupt("return");

            case 4:
              account_id = Number((_Taro$getStorageSync$ = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getStorageSync('account').id) !== null && _Taro$getStorageSync$ !== void 0 ? _Taro$getStorageSync$ : '');
              _context.prev = 5;
              _context.next = 8;
              return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_9__[/* api_judge_subscribed */ "b"])(account_id);

            case 8:
              res = _context.sent;

              if (res) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.setStorageSync('setIsSubscribe', res.is_subscribed);
                setIsSubscribed(res.is_subscribed);
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);
              console.error('api_judge_subscribed error', _context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12]]);
    }));

    return function checkHasSubscribed() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * 获取分享亲友卡的信息
   */


  var getShareCard = /*#__PURE__*/function () {
    var _ref2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var res, isExpires, closeCard, isShowCard;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_9__[/* api_share_card_count */ "d"])(channelId.current);

            case 3:
              res = _context2.sent;

              if (res) {
                isExpires = +res.validity_date * 1000 < Date.now(); // 判断时间过没过期

                closeCard = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getStorageSync('closeCard'); // 获取点击关闭按钮的事件缓存

                isShowCard = !closeCard && !isExpires;
                setIsShare(res.is_share && !isExpires);
                setShareCount(res.friend_share_count);
                setValidityDate("".concat(Object(_utils_tools__WEBPACK_IMPORTED_MODULE_15__[/* timeStream */ "s"])(+res.validity_date * 1000, 'YMD_HMS')));
                setShowCard(isShowCard);
              }

              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function getShareCard() {
      return _ref2.apply(this, arguments);
    };
  }(); // 关闭亲友卡


  var onCloseCard = function onCloseCard() {
    setShowCard(false);
    setIsShare(false);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.setStorageSync('closeCard', true);
  };
  /**
   * @description: 是否是新用户
   * @param {*}
   * @return {*}
   */


  var checkIsNewUser = function checkIsNewUser() {
    Object(_utils_login__WEBPACK_IMPORTED_MODULE_8__[/* getToken */ "a"])( /*#__PURE__*/Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var accessStatus, res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              checkHasSubscribed();
              _context3.next = 3;
              return getShareCard();

            case 3:
              accessStatus = _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.getStorageSync('setIsAccess');

              if (!(accessStatus === 'join')) {
                _context3.next = 8;
                break;
              }

              getChannelDaily();
              _context3.next = 18;
              break;

            case 8:
              _context3.prev = 8;
              _context3.next = 11;
              return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_9__[/* api_judge_user_access */ "c"])();

            case 11:
              res = _context3.sent;

              if (res) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.setStorageSync('setIsAccess', res.is_access ? 'join' : null);
                res.is_access ? getChannelDaily() : onJoin();
              }

              _context3.next = 18;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](8);
              console.error('api_judge_user_access error', _context3.t0);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[8, 15]]);
    })), function () {
      onJoin();
      setIsSubscribed(false);
    });
  };

  var onJoin = function onJoin() {
    setLoading(false);
    setHasJoin(false);
  };
  /**
   * @description: 获取课程列表
   * @param {*}
   * @return {*}
   */


  var getChannelDaily = /*#__PURE__*/function () {
    var _ref4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var res, _res, channel_info, book_content, fomate_daily_content;

      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_14__[/* api_channel_daily_content_get */ "a"])({
                channel_id: channelId.current
              });

            case 3:
              res = _context4.sent;

              if (res) {
                res = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_15__[/* handleChannelContent */ "j"])(res);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.setStorageSync('set_fomate_daily_content', res);
                _res = res, channel_info = _res.channel_info, book_content = _res.book_content, fomate_daily_content = _res.fomate_daily_content;
                conformChannelDaily(fomate_daily_content, book_content, channel_info);
              }

              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error('getChannelDaily error', _context4.t0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    return function getChannelDaily() {
      return _ref4.apply(this, arguments);
    };
  }(); //由于后端偷懒没整合数据 前端做


  var conformChannelDaily = function conformChannelDaily(fomate_daily_content, book_content, channel_info) {
    fomate_daily_content.forEach(function (item) {
      var books = []; //获取每周下有几本书

      item.content.forEach(function (lecture) {
        if (lecture.object_type === 'lecture') {
          var index = books.findIndex(function (book) {
            return book.id === lecture.book_id;
          });

          if (index === -1) {
            books.push(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, book_content[lecture.book_id]), {}, {
              lectures: [lecture]
            }));
          } else {
            books[index].lectures.push(lecture);
          }
        } else {
          books.push(lecture);
        }
      });
      item.books = books;
    });
    setDailyContent(fomate_daily_content);
    setChannelInfo(channel_info);
    setHasJoin(true);
    setLoading(false);
  };
  /**
   * @description: 点击进入周测页
   * @param {*} e
   * @return {*}
   */


  var bindExam = function bindExam(e) {
    var _e$currentTarget$data = e.currentTarget.dataset,
        book = _e$currentTarget$data.book,
        week = _e$currentTarget$data.week;
    if (book.lectures) return;

    switch (book.unlock) {
      case 0:
        toast();
        break;

      case 1:
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
          url: "/pages/exam/exam?week_num=".concat(week, "&channel_id=").concat(book.channel_id)
        });
        break;

      case 2:
        _store__WEBPACK_IMPORTED_MODULE_12__[/* ApiStore */ "a"].common.bindAuthorization();
        break;
    }
  };
  /**
   * @description: 点击进入播放页面
   * @param {*} e
   * @return {*}
   */


  var bindPlayLecture = function bindPlayLecture(e) {
    if (props.from === 'plan') {
      _utils_track__WEBPACK_IMPORTED_MODULE_18__[/* track */ "a"].setEvent('lh_plan_ro_ck');
    }

    var item = e.currentTarget.dataset.item;

    switch (item.unlock) {
      case 0:
        toast();
        break;

      case 1:
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
          url: "/pages/detail/detail?object_id=".concat(item.object_id)
        });
        break;

      case 2:
        _store__WEBPACK_IMPORTED_MODULE_12__[/* ApiStore */ "a"].common.bindAuthorization();
        break;
    }
  };

  var toast = function toast() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
      title: '不要着急，每天解锁一节课哦！',
      icon: 'none'
    });
  };
  /**
   * 规则点击
   */


  var onRule = function onRule() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
      url: '/pages/h5/h5?webViewUrl=https://mp.weixin.qq.com/s/Ic-qij_XA3ZPUnUUHR88hg'
    });
  };

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {});
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* ScrollView */ "k"], {
    scrollY: true,
    children: hasJoin ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
      className: "my-lecture-container",
      children: [!isSubscribed && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_components_follow_remind_follow_remind__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "f"], {
        className: "banner",
        mode: "aspectFill",
        src: channelInfo.book_url
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
        className: "lecture-rule",
        onClick: onRule,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
          className: "icon icon-guizeshuoming rule-icon"
        }), "\u89C4\u5219\u8BF4\u660E"]
      }), from && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
        className: "message",
        style: {
          marginBottom: isShare ? '30rpx' : '40rpx'
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* RichText */ "j"], {
          className: "description",
          nodes: channelInfo.welcome_language
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
          className: "info flex",
          children: channelInfo.welcome_text
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_components_family_card_family_card__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        shareCount: shareCount,
        isShare: isShare,
        validityDate: validityDate,
        showCard: showCard,
        onCloseCard: onCloseCard
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
        className: "lecture-list-wrapper",
        children: dailyContent.map(function (items, index) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
              className: 'cells-wrapper ' + (!items.week_num ? 'cells-wrapper1' : 'cells-wrapper2'),
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                className: "week-title",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                  className: "llw-tip"
                }), items.week_num ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                  className: "items-title",
                  children: '第' + items.week_num + '周'
                }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                  className: "items-title",
                  children: "\u5148\u5BFC\u8BFE"
                })]
              }), items.books.map(function (book) {
                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                    className: 'cells-content flex ' + (book.object_type === 'form' ? 'form-cells' : ''),
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "f"], {
                      className: "lecture-icon",
                      lazyLoad: true,
                      mode: "aspectFill",
                      src: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_15__[/* getPicture */ "f"])(book.object_type === 'form' ? book.json_extend.cover_url : book.cover_url, 178)
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                      className: "cell-right",
                      onClick: bindExam,
                      "data-book": book,
                      "data-week": items.week_num,
                      children: [items.week_num ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                        children: book.object_type === 'form' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                          className: "lecture-text flex",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                            children: book.title
                          }), book.unlock === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                            className: "icon icon-gengduo"
                          }) : book.unlock === 2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                            className: "cart",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                              className: "icon icon-gouwuche"
                            })
                          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                            className: "icon icon-suo"
                          })]
                        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                          className: "lecture-text lecture-text_basic",
                          children: book.book_name
                        })
                      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                        className: "lecture-text",
                        children: book.lectures[0].title
                      }), book.lectures && book.lectures.map(function (lecture) {
                        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                          className: 'lecture-item ' + (items.week_num ? 'flex' : ''),
                          onClick: bindPlayLecture,
                          "data-item": lecture,
                          "data-week-num": items.week_num,
                          children: [items.week_num ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                            hoverClass: "summary-active",
                            className: 'summary ' + (lecture.unlock !== 1 ? 'light-lock' : ''),
                            children: lecture.title
                          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* RichText */ "j"], {
                            className: "summary",
                            nodes: lecture.object_info.description
                          }), lecture.unlock === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                            className: "arrow-icon",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                              className: "icon icon-gengduo"
                            })
                          }) : lecture.unlock === 2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                            className: "cart",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                              className: "icon icon-gouwuche"
                            })
                          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                              className: "icon icon-suo"
                            })
                          })]
                        }, lecture.i);
                      })]
                    })]
                  })
                }, book.id);
              })]
            })
          }, index);
        })
      })]
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_empty_empty__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      desc: "\u4F60\u8FD8\u6CA1\u6709\u52A0\u5165\u8BFE\u7A0B\u5662~"
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (LectureList);

/***/ }),

/***/ "./src/components/load-more/load-more.module.scss":
/*!********************************************************!*\
  !*** ./src/components/load-more/load-more.module.scss ***!
  \********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bottom_line":"bottom_line--3LD2i"};

/***/ }),

/***/ "./src/components/load-more/load-more.tsx":
/*!************************************************!*\
  !*** ./src/components/load-more/load-more.tsx ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _load_more_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-more.module.scss */ "./src/components/load-more/load-more.module.scss");
/* harmony import */ var _load_more_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_load_more_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/*
 * @Description: 用在列表里面，做滚动加载使用
 * @Date: 2021-08-24 15:02:34
 * @LastEditTime: 2021-08-25 09:53:49
 */




var LoadMore = function LoadMore(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
    className: _load_more_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bottom_line,
    children: props.is_last_page ? props.no_more_text : props.loading_text
  });
};

LoadMore.defaultProps = {
  no_more_text: '翻完了~',
  loading_text: '加载中...'
};
/* harmony default export */ __webpack_exports__["a"] = (LoadMore);

/***/ }),

/***/ "./src/components/loading/loading.module.scss":
/*!****************************************************!*\
  !*** ./src/components/loading/loading.module.scss ***!
  \****************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"loading_container":"loading_container--agVvD","loading_img":"loading_img--qB8JA"};

/***/ }),

/***/ "./src/components/loading/loading.tsx":
/*!********************************************!*\
  !*** ./src/components/loading/loading.tsx ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.module.scss */ "./src/components/loading/loading.module.scss");
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/*
 * @Author: linzhihai
 * @Date: 2021-08-23 11:27:42
 * @LastEditTime: 2021-08-23 15:55:44
 * @Description: 
 */




var Loading = function Loading() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
    className: _loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading_container,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "f"], {
      className: _loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading_img,
      src: "https://static-1253442168.file.myqcloud.com/xupload/20210922_loading.gif"
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "./src/components/navbar/navbar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/navbar/navbar.module.scss ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"header--1R4V8","border_bottom":"border_bottom--1Ifxy","background":"background--1lBwH","header_bar":"header_bar--3nCWd","header_bar_line":"header_bar_line--oBVjd","header_bar_back":"header_bar_back--1vm7p","header_bar_back_icon":"header_bar_back_icon--36ipL","header_bar_home":"header_bar_home--2l5Fk","header_bar_home_icon":"header_bar_home_icon--2-RAO","header_title":"header_title--3BGWj"};

/***/ }),

/***/ "./src/components/navbar/navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/navbar/navbar.tsx ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _navbar_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar.module.scss */ "./src/components/navbar/navbar.module.scss");
/* harmony import */ var _navbar_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);









/*
 * @Author: linzhihai
 * @Date: 2021-08-20 16:26:00
 * @LastEditTime: 2021-08-24 14:37:08
 * @Description:
 */







var NavBar = /*#__PURE__*/function (_Component) {
  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(NavBar, _Component);

  var _super = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(NavBar);

  function NavBar() {
    var _this;

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "IMAGE", {
      BLACK: 'https://staticqc-operating.lycheer.net/image/weike-SYAtWp-226817545.png',
      WHITE: 'https://staticqc-operating.lycheer.net/image/weike-CfsdHt-732417899.png'
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      statusBarHeight: 30,
      // 取个中间值30
      titleBarHeight: 46 // 取ios和android中间值

    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "headerGoTo", function () {
      _utils_WX__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].navigateBack(1);
    });

    return _this;
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(NavBar, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var platform, statusBarHeight, titleBarHeight;
        return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('componentDidMount');
                platform = wx.platform || wx.getSystemInfoSync();
                statusBarHeight = platform.statusBarHeight, titleBarHeight = platform.titleBarHeight;
                this.setState({
                  statusBarHeight: statusBarHeight,
                  titleBarHeight: titleBarHeight
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          noBorder = _this$props.noBorder,
          hiddenBack = _this$props.hiddenBack,
          title = _this$props.title,
          setBgImage = _this$props.setBgImage,
          white = _this$props.white;
      var _this$state = this.state,
          statusBarHeight = _this$state.statusBarHeight,
          titleBarHeight = _this$state.titleBarHeight;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        style: {
          height: "".concat(titleBarHeight + statusBarHeight, "px")
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          className: "".concat(_navbar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header, " ").concat(!noBorder ? _navbar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.border_bottom : ''),
          style: {
            height: "".concat(titleBarHeight, "px"),
            paddingTop: "".concat(statusBarHeight, "px"),
            backgroundImage: setBgImage ? "url(".concat(setBgImage, ")") : '',
            backgroundSize: setBgImage ? "100% ".concat(titleBarHeight + statusBarHeight, "px") : '',
            color: white ? '#fff' : '#000'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: _navbar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header_bar,
            onClick: this.headerGoTo,
            children: !hiddenBack && titleBarHeight > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
              className: _navbar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header_bar_back,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "f"], {
                className: _navbar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header_bar_back_icon,
                mode: "widthFix",
                src: white ? this.IMAGE.WHITE : this.IMAGE.BLACK
              })
            })
          }), titleBarHeight > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: _navbar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header_title,
            style: {
              color: "".concat(white ? '#fff' : '#000')
            },
            children: title
          })]
        })
      });
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "./src/components/player-float/player-float.scss":
/*!*******************************************************!*\
  !*** ./src/components/player-float/player-float.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/player-float/player-float.tsx":
/*!******************************************************!*\
  !*** ./src/components/player-float/player-float.tsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _player_float_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-float.scss */ "./src/components/player-float/player-float.scss");
/* harmony import */ var _player_float_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_player_float_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





/** 播放的悬浮窗 */




var PlayerFloat = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[/* observer */ "b"])(function () {
  var status = _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.playingState;
  var playingInfo = _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.playingInfo;
  if (status === 'ended' || !playingInfo.src) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {});

  var bindGoPlay = function bindGoPlay() {
    _utils_WX__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].navigateTo('/pages/detail/detail', {
      object_id: playingInfo.object_id
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
    className: "player-float flex",
    onClick: bindGoPlay,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "f"], {
      className: "pf-cover-url abso",
      mode: "aspectFit",
      src: playingInfo.cover_url
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
      className: "pf-cover-mask abso"
    }), status === 'play' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
      className: "pf-wrap",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
        className: "pf-music",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
          className: "pf-item m1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
          className: "pf-item m2"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
          className: "pf-item m3"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
          className: "pf-item m1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
          className: "pf-item m2"
        })]
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
      className: "icon icon-houtaibofang"
    })]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (PlayerFloat);

/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/*! exports provided: baseUrl, configDefault */
/*! exports used: baseUrl, configDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return configDefault; });
var _wx$getAccountInfoSyn;

var miniInfo = (_wx$getAccountInfoSyn = wx.getAccountInfoSync()) === null || _wx$getAccountInfoSyn === void 0 ? void 0 : _wx$getAccountInfoSyn.miniProgram;
var env = miniInfo === null || miniInfo === void 0 ? void 0 : miniInfo.envVersion;
console.log('环境判断：', env);
var prodConfig = {
  channel_id: 1099596,
  h5_url: 'https://lihua-act.tryweike.net/listen',
  remind_qr: 'https://mp.weixin.qq.com/s/vV09s8XJZQ3cuojRfD5gfg',
  weChat_qr: 'https://mp.weixin.qq.com/s/8eVXWS4X5lC5njiDAaDBhw'
};
var devConfig = {
  channel_id: 1067901,
  h5_url: 'https://dbg.lizhiweike.com/lihua-activity/listen',
  remind_qr: 'https://mp.weixin.qq.com/s/vV09s8XJZQ3cuojRfD5gfg',
  weChat_qr: 'https://mp.weixin.qq.com/s/8eVXWS4X5lC5njiDAaDBhw'
};
var prodUrl = {
  main: 'https://m.lizhiweike.com',
  gw: 'https://api-gw.lizhiweike.com',
  middleground: 'https://m.lizhiweike.com'
};
var devUrl = {
  main: 'https://basereq-dev.weike.fm',
  gw: 'https://api.dev4.weike.fm',
  middleground: 'https://dbg.weike.fm'
};

var _baseUrl;

var _configDefault;

if (env === 'develop') {
  _baseUrl = devUrl;
  _configDefault = devConfig; // _baseUrl = prodUrl;
  // _configDefault = prodConfig;
} else if (env === 'trial') {
  // _baseUrl = devUrl;
  // _configDefault = devConfig;
  _baseUrl = prodUrl;
  _configDefault = prodConfig;
} else if (env === 'release') {
  _baseUrl = prodUrl;
  _configDefault = prodConfig;
} else {
  _baseUrl = prodUrl;
  _configDefault = prodConfig;
}

var baseUrl = _baseUrl;
var configDefault = _configDefault;

/***/ }),

/***/ "./src/libs/date-format.js":
/*!*********************************!*\
  !*** ./src/libs/date-format.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
var dateFormat = function () {
  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMSTt])\1?|[LloZ]|"[^"]*"|'[^']*'/g,
      timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      timezoneClip = /[^-+\dA-Z]/g,
      pad = function pad(val, len) {
    val = String(val);
    len = len || 2;

    while (val.length < len) {
      val = '0' + val;
    }

    return val;
  }; // Regexes and supporting functions are cached through closure


  return function (date, mask, utc) {
    var dF = dateFormat; // You can't provide utc if you skip other args (use the "UTC:" mask prefix)

    if (arguments.length == 1 && Object.prototype.toString.call(date) == '[object String]' && !/\d/.test(date)) {
      mask = date;
      date = undefined;
    } // Passing date through Date applies Date.parse, if necessary


    date = date ? new Date(date) : new Date();
    if (Number.isNaN(date)) throw SyntaxError('invalid date');
    mask = String(dF.masks[mask] || mask || dF.masks['default']); // Allow setting the utc argument via the mask

    if (mask.slice(0, 4) == 'UTC:') {
      mask = mask.slice(4);
      utc = true;
    }

    var _ = utc ? 'getUTC' : 'get',
        d = date[_ + 'Date'](),
        D = date[_ + 'Day'](),
        m = date[_ + 'Month'](),
        y = date[_ + 'FullYear'](),
        H = date[_ + 'Hours'](),
        M = date[_ + 'Minutes'](),
        S = date[_ + 'Seconds'](),
        L = date[_ + 'Milliseconds'](),
        o = utc ? 0 : date.getTimezoneOffset(),
        flags = {
      d: d,
      dd: pad(d),
      ddd: dF.i18n.dayNames[D],
      dddd: dF.i18n.dayNames[D + 7],
      m: m + 1,
      mm: pad(m + 1),
      mmm: dF.i18n.monthNames[m],
      mmmm: dF.i18n.monthNames[m + 12],
      yy: String(y).slice(2),
      yyyy: y,
      h: H % 12 || 12,
      hh: pad(H % 12 || 12),
      H: H,
      HH: pad(H),
      M: M,
      MM: pad(M),
      S: S,
      SS: pad(S),
      l: pad(L, 3),
      L: pad(L > 99 ? Math.round(L / 10) : L),
      t: H < 12 ? 'a' : 'p',
      tt: H < 12 ? 'am' : 'pm',
      T: H < 12 ? 'A' : 'P',
      TT: H < 12 ? 'AM' : 'PM',
      Z: utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
      o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4) // S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (((d % 100) - (d % 10) != 10) * d) % 10],

    };

    return mask.replace(token, function ($0) {
      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
    });
  };
}(); // Some common format strings


dateFormat.masks = {
  default: 'ddd mmm dd yyyy HH:MM:SS',
  shortDate: 'm/d/yy',
  mediumDate: 'mmm d, yyyy',
  longDate: 'mmmm d, yyyy',
  fullDate: 'dddd, mmmm d, yyyy',
  shortTime: 'h:MM TT',
  mediumTime: 'h:MM:SS TT',
  longTime: 'h:MM:SS TT Z',
  isoDate: 'yyyy-mm-dd',
  isoTime: 'HH:MM:SS',
  isoDateTime: 'yyyy-mm-dd"T"HH:MM:ss',
  isoUtcDateTime: 'UTC:yyyy-mm-dd"T"HH:MM:ss"Z"'
}; // Internationalization strings

dateFormat.i18n = {
  dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  // dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}; // module.exports = dateFormat;

/* harmony default export */ __webpack_exports__["a"] = (dateFormat);

/***/ }),

/***/ "./src/store/common.ts":
/*!*****************************!*\
  !*** ./src/store/common.ts ***!
  \*****************************/
/*! exports provided: common */
/*! exports used: common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return common; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/config */ "./src/config/config.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");




/*
 * @Author: linzhihai
 * @Date: 2021-08-23 14:41:19
 * @LastEditTime: 2021-09-22 17:07:59
 * @Description:
 */



var Common = /*#__PURE__*/function () {
  /** 发送笔记的弹窗 */

  /** 发表笔记的类型 */

  /** 发表笔记的内容 */

  /** 默认分享文案 */

  /** 亲友卡分享文案 */
  // cardShareInfo: ShareParams = {
  //   title: '我送你一张梨花听书7天VIP卡，快点击领取吧～',
  //   path: `/pages/activity/activity?from=friend&user_type=presented&channel_id=${getStorage('setChannelId') ?? ''}&sender_id=${
  //     getStorage('account').id ?? ''
  //   }`,
  //   imageUrl: 'https://static-1253442168.file.myqcloud.com/xupload/20210909_share-card.png',
  // };
  function Common() {
    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Common);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "showNoteDialog", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "noteType", 'add');

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "noteContent", '');

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "defaultShareInfo", {
      title: '想成为高情商、有才识、有气质的智慧女性吗？',
      path: '/pages/activity/activity?from=home',
      //若无path 默认跳转分享页
      imageUrl: 'https://static-1253442168.file.myqcloud.com/xupload/20210610_shareImg.png' //若无imageUrl 截图当前页面

    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_4__[/* makeAutoObservable */ "l"])(this);
  }
  /**
   * @description: 跳转H5购买
   * @param {*}
   * @return {*}
   */


  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Common, [{
    key: "bindAuthorization",
    value: function bindAuthorization() {
      var scene = wx.getLaunchOptionsSync().scene;

      if (scene === 1000) {
        wx.showToast({
          title: '不要着急，每天解锁一节课哦！',
          icon: 'none',
          duration: 2000,
          mask: true
        });
        return;
      }

      var url = "/pages/h5/h5?webViewUrl=".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__[/* configDefault */ "b"].weChat_qr);
      wx.showToast({
        title: '请先购买！如已购买，点击右上角...中重新进入小程序',
        icon: 'none',
        duration: 2000,
        mask: true
      });
      setTimeout(function () {
        wx.navigateTo({
          url: url
        });
      }, 2000);
    }
    /** 设置发送笔记的弹窗显示或隐藏 */

  }, {
    key: "setNoteDialog",
    value: function setNoteDialog(showNoteDialog) {
      this.showNoteDialog = showNoteDialog;
    }
    /**
     * 设置发表笔记的类型
     * @param noteType 笔记类型
     */

  }, {
    key: "setNoteType",
    value: function setNoteType(noteType) {
      this.noteType = noteType;
    }
    /**
     *
     * @param noteContent 笔记内容
     */

  }, {
    key: "setNoteContent",
    value: function setNoteContent(noteContent) {
      this.noteContent = noteContent;
    }
  }]);

  return Common;
}();

var common = new Common();

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: ApiStore */
/*! exports used: ApiStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiStore; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/store/common.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/store/player.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/store/user.ts");
/*
 * @Author: linzhihai
 * @Date: 2021-08-20 16:26:00
 * @LastEditTime: 2021-09-14 17:27:15
 * @Description:
 */



var ApiStore = {
  common: _common__WEBPACK_IMPORTED_MODULE_0__[/* common */ "a"],
  player: _player__WEBPACK_IMPORTED_MODULE_1__[/* player */ "a"],
  user: _user__WEBPACK_IMPORTED_MODULE_2__[/* user */ "a"]
};

/***/ }),

/***/ "./src/store/player.ts":
/*!*****************************!*\
  !*** ./src/store/player.ts ***!
  \*****************************/
/*! exports provided: player */
/*! exports used: player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return player; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/bg-music */ "./src/utils/bg-music.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _api_study_length_study_length__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/study_length/study_length */ "./src/api/study_length/study_length.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");











var detaultInfo = {
  anchor: '',
  author: '',
  book_id: 0,
  channel_id: 0,
  duration: 0,
  object_id: 0,
  object_type: 'lecture',
  src: '',
  status: 'pause',
  title: '',
  unlock: 0,
  unread: 0,
  cover_url: ''
};
var rateMap = {
  0.5: 'icon-a-05beisu',
  1.0: 'icon-a-10beisu',
  1.5: 'icon-a-15beisu',
  2.0: 'icon-a-20beisu'
};

var Player = /*#__PURE__*/function () {
  /** 播放器进度 */

  /** 进度条进度，受到拖拽影响 */

  /** 速率 范围 0.5-2.0，默认为 1 */

  /** 速率图标 */

  /** 当前页面的playInfo */

  /** 当前播放中的playInfo */

  /** 当前播放中的实际状态 */

  /** 能否播放 */

  /** 拖拽中？ */

  /** 设置seeking的操作，此时需要拦截update触发 */

  /** 防止切换id的过程中，因为触发update，导致切换的id的时间被上一次的update替换 */

  /** 初始化的进度位置 */

  /** 播放时打点上报的timer */

  /** 播放超时操作 */

  /** 加载中的提示 */
  function Player() {
    var _this = this;

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Player);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "progress", 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "silderProgress", 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "rate", 1.0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "rateMap", rateMap);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "playInfo", Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, detaultInfo));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "playingInfo", Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, detaultInfo));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "playingState", 'pause');

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "canPlay", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "draging", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "seeking", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "isChanging", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "initProgress", 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "trackTimer", undefined);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "timeoutTimer", undefined);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "tipTimer", undefined);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "playDotTrack", /*#__PURE__*/Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var dot_ts, object_id;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dot_ts = new Date().getTime() / 1000 >> 0;
              object_id = _this.playingInfo.object_id;
              _context.next = 5;
              return Object(_api_study_length_study_length__WEBPACK_IMPORTED_MODULE_9__[/* api_lecture_study_dot */ "a"])(object_id, dot_ts);

            case 5:
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('打点失败', _context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    })));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "setProgress", Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__[/* throttle */ "r"])(function (currentTime) {
      Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* runInAction */ "o"])(function () {
        // console.log('设置currentTime', currentTime);
        _this.progress = currentTime;

        _this.setLocalProgress(currentTime);

        if (_this.draging) return console.log('draging');
        if (_this.seeking) return console.log('seeking'); // console.log('loading---->', bgMusic.ctx.currentTime, currentTime, bgMusic.ctx.paused);
        // return console.log('此时不同课程，同步进度', toJS(this.playInfo), toJS(this.playingInfo));

        if (_this.playInfo.object_id !== _this.playingInfo.object_id) {
          return console.log('id不同', _this.playInfo.object_id, _this.playingInfo.object_id);
        } // 场景A playing 退出详情，切到B，点击play，此时如果音频正在loading，播放进度条是不会变化的，
        // 但是throttle默认trailing为true，会触发最后一次回调，此时因为setPlayInfo已经执行，导致上面id的判断不会被阻塞
        // 那么就会出现进度条闪烁的问题
        // 解决方案：当音频loading时，不设置进度条


        if (_this.playingInfo.status === 'loading' && _this.isChanging) {
          return console.log('loading->isChanging', _this.playingInfo.status, _this.isChanging);
        }

        if (Math.floor(_this.silderProgress) !== Math.floor(_this.progress)) {
          // console.warn('设置currentTime', currentTime);
          // 存储播放状态
          _this.silderProgress = currentTime;
        }
      });
    }, 500));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "goPause", function () {
      console.log('goPause');
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].pause();
      _this.playingInfo.status = 'pause';
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "getProgress", /*#__PURE__*/function () {
      var _ref2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_id) {
        var position, _o$id, id, o, progress;

        return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                position = 0;

                try {
                  id = "".concat(_id);
                  o = Taro.getStorageSync('learningProgress');
                  progress = (_o$id = o === null || o === void 0 ? void 0 : o[id]) !== null && _o$id !== void 0 ? _o$id : 0;
                  position = progress;
                } catch (error) {
                  console.error('getProgress error', error);
                }

                return _context2.abrupt("return", position);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "setSeek", function (t) {
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setSeek(t);
      _this.progress = t;
      _this.silderProgress = t;

      _this.setLocalProgress(t);
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onChange", function (e) {
      console.log('onChange', _this.playInfo.object_id, _this.playingInfo.object_id, _this.playingInfo.status); // if (this.playInfo.object_id !== this.playingInfo.object_id && this.playingInfo.status === 'play') {
      // } else {
      // }

      if (_this.playingInfo.object_id === _this.playInfo.object_id && _this.playingInfo.status === 'play') {
        _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setSeek(e.detail.value);
      }

      if (_this.playingInfo.status === 'pause' || _this.playingInfo.status === 'stop') {
        _this.initProgress = e.detail.value;
      } // 播放状态下，拖拽上报
      // if (this.playingInfo.status === 'play') {
      //   wx.wkAudioReport.audioDrag?.(e.detail.value);
      // }


      _this.silderProgress = e.detail.value;
      var duration = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__[/* getAudioResTime */ "d"])();
      setTimeout(function () {
        _this.draging = false;
        console.log('设置draging', duration);
      }, duration);
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onChanging", function (e) {
      _this.draging = true;
      _this.silderProgress = e.detail.value;
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeAutoObservable */ "l"])(this, {
      timeoutTimer: false,
      tipTimer: false,
      getProgress: false,
      canPlay: false,
      draging: false,
      seeking: false,
      isChanging: false,
      initBgMusicListener: false,
      setLocalProgress: false,
      initProgress: false,
      rateMap: false,
      playDotTrack: false,
      trackTimer: false
    });
    this.initBgMusicListener(); // autorun(() => {
    //   console.log('autorun: ', this.playingInfo);
    // });
    // autorun(() => {
    //   console.warn('autorun: ', this.progress, this.silderProgress);
    // });
    // autorun(() => {
    //   console.log('reaction autorun:this.playingInfo.status ', this.playingInfo.status);
    // });
    // 自动打点计时器 reaction相比于autorun区别：不会在首次初始化时执行

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* reaction */ "n"])(function () {
      return _this.playingInfo.status;
    }, function (status) {
      console.log('reaction status', status, _this.playingInfo.status);

      if (status === 'play') {
        clearInterval(_this.trackTimer);
        _this.trackTimer = setInterval(function () {
          return _this.playDotTrack();
        }, 60000); // 开启打点计时器
      }

      if (status === 'pause' || status === 'stop') {
        clearInterval(_this.trackTimer);
      }
    });
  }
  /** 播放打点上报 */


  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Player, [{
    key: "initBgMusicListener",
    value: function initBgMusicListener() {
      var _this2 = this;

      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onSeeked(function () {
        setTimeout(function () {// this.seeking = false; // 兜底，先点播放，loading的时候拖动进度条
        }, 500);
      });
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onCanplay(function () {
        return _this2.onCanplay();
      });
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onPlay(function () {
        return _this2.onPlay();
      });
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onWaiting(function () {
        return _this2.onWaiting();
      }); // 监听系统控制器的上一曲

      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onPrev(function () {}); // 监听系统控制器的下一曲

      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onNext(function () {});
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onPause(function () {
        return _this2.onPause();
      });
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onStop(function () {
        return _this2.onStop();
      });
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onEnded(function (isEnded) {
        return _this2.onEnded(isEnded);
      });
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onError(function (error) {
        return _this2.onError(error);
      });
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].onTimeUpdate(function (_ref3) {
        var currentTime = _ref3.currentTime;
        return _this2.onTimeUpdate(currentTime);
      });
    }
  }, {
    key: "onCanplay",
    value: function onCanplay() {
      console.log('my oncanplay');
      this.canPlay = true;
    }
  }, {
    key: "onPlay",
    value: function onPlay() {
      var _this3 = this;

      console.log('onPlay'); // TODO syncStore

      setTimeout(function () {
        _this3.seeking = false; // 兜底，先点播放，loading的时候拖动进度条
      }, 700); // 播放顺便设置进度条，部分手机会有2次update(每次250ms)也就是至少500ms的0.x的定位，此时得忽略，不然会出现进度条闪烁的问题。
    }
  }, {
    key: "onWaiting",
    value: function onWaiting() {
      console.log('onWaiting', Date.now()); // this.canPlay = false;

      this.playingInfo.status = 'loading';
      this.playingState = 'loading';
    }
  }, {
    key: "onPause",
    value: function onPause() {
      this.playingInfo.status = 'pause';
      this.playingState = 'pause';
    }
  }, {
    key: "onStop",
    value: function onStop() {
      var _this4 = this;

      console.log('onStop');
      setTimeout(function () {
        Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* runInAction */ "o"])(function () {
          _this4.playingInfo.status = 'pause';
          _this4.playingState = 'stop';
          _this4.progress = 0;
          _this4.silderProgress = 0;
        });
      }, 1000);
    }
  }, {
    key: "onError",
    value: function onError(error) {
      var _this5 = this;

      console.log('onError', error);
      var accountId = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__[/* getStorage */ "h"])('account').id;
      var platform = wx.getPlatform(); // 上报错误信息

      _utils_track__WEBPACK_IMPORTED_MODULE_10__[/* track */ "a"].setEvent('lh_play_err', {
        from: accountId,
        audio: this.playingInfo.src,
        platform: "".concat(platform.model, ", ").concat(platform.system, ", ").concat(platform.version, ", ").concat(platform.SDKVersion),
        err: error ? error : ''
      });
      Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* runInAction */ "o"])(function () {
        _this5.playingInfo.status = 'pause';
        _this5.playingState = 'ended';

        _this5.setLocalProgress(0);
      });
    }
  }, {
    key: "onEnded",
    value: function onEnded(isEnded) {
      var _this6 = this;

      console.log('onEnded', isEnded);
      this.playingInfo.status = 'pause';
      this.playingState = 'ended';

      if (isEnded) {
        console.log('设置进度为0');
        setTimeout(function () {
          Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* runInAction */ "o"])(function () {
            _this6.setSeek(0);
          });
        }, 500); // 节流的最大时间500
      }
    }
  }, {
    key: "onTimeUpdate",
    value: function onTimeUpdate(currentTime) {
      // 如果进度条在动，则播放状态需要改成play

      /**
          这里onCanPlay，是因为ios在音频需要完整下载的前提下，
          会默认先触发一次onTimeUpdate，
          此时播放状态默认为播放中（可能是微信bug），
          实际还是在加载中，真正判断是否能播放的状态，是在onCanplay里面
         */
      // console.warn('onTimeUpdate', currentTime, this.seeking);
      if (this.playingInfo.status !== 'play' && this.canPlay) {
        console.log('这里又设置成play', Date.now());
        this.playingInfo.status = 'play';
        this.playingState = 'play';
        clearTimeout(this.timeoutTimer); // 清除掉超时操作的timer

        clearTimeout(this.tipTimer); // 清除掉提示操作的timer
      }

      this.setProgress(currentTime);
    }
    /** 获取当前页面的playinfo */

  }, {
    key: "getPlayInfo",
    get: function get() {
      if (this.playInfo.object_id !== this.playingInfo.object_id) {
        return this.playInfo;
      } else {
        return this.playingInfo;
      }
    }
    /** 获取交互进度条 */

  }, {
    key: "getSliderProgress",
    get: function get() {
      // if (this.playingInfo.object_id && this.silderProgress > this.playingInfo.duration) {
      //   return this.playingInfo.duration;
      // }
      return this.silderProgress;
    }
    /** 设置进度条位置 */

  }, {
    key: "setLocalProgress",
    value: function setLocalProgress(currentTime) {
      var playingInfo = this.playingInfo;

      if (playingInfo && currentTime !== undefined && !this.isChanging) {
        var o = wx.getStorageSync('learningProgress');

        if (!o) {
          o = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, playingInfo.object_id, currentTime);
        } else {
          o = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, o), {}, Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, playingInfo.object_id, currentTime));
        }

        wx.setStorageSync('learningProgress', o);
      }
    }
    /** 设置播放器信息 */

    /** 设置播放状态 */

  }, {
    key: "setPlayStatus",
    value: function setPlayStatus(status) {
      this.playInfo = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, this.playInfo), {}, {
        status: status
      });
    } // setPlayInfo(playInfo?: Partial<IPlayInfo>) {

  }, {
    key: "setPlayInfo",
    value: function setPlayInfo(playInfo, playNow) {
      console.log('setPlayInfo', playInfo, Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* toJS */ "q"])(this.playingInfo)); // 课程不相同，进度条初始化

      if (playInfo !== null && playInfo !== void 0 && playInfo.object_id && playInfo.object_id !== this.playingInfo.object_id) {
        this.silderProgress = 0;
      } else if (playInfo !== null && playInfo !== void 0 && playInfo.object_id && playInfo.object_id === this.playingInfo.object_id) {
        this.silderProgress = this.progress;
      }

      this.playInfo = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, this.playInfo), playInfo !== null && playInfo !== void 0 ? playInfo : {});
    }
  }, {
    key: "goPlay",
    value: function goPlay() {
      var _this7 = this;

      if (this.playInfo.object_id !== this.playingInfo.object_id) {
        this.playingInfo = this.playInfo;
        this.isChanging = true; // 更改播放源
      }

      console.log('goPlay', Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* toJS */ "q"])(this.playingInfo));
      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setCurrentInfo(this.playingInfo);
      var status = this.playingInfo.status;
      var src = this.playingInfo.src;

      if (!src) {
        this.silderProgress = 0; // 提前清除一下进度条位置，因为onStop有1秒延迟

        _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].stop();
        return wx.showToast({
          title: '音频播放失败！未检测到音频文件！',
          icon: 'none'
        });
      }

      if (status === 'loading') return console.log('此时loading');

      if (status === 'play') {
        this.goPause();
      } else {
        console.log('goPlay this.initProgress', this.silderProgress);

        if (this.silderProgress) {
          this.seeking = true;
          _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].play({
            src: src,
            seek: this.silderProgress
          }, function (isSetSrc) {
            console.log('play this.ctx.paused ---1', isSetSrc);
            _this7.canPlay = isSetSrc;
          }); // this.silderProgress = 0;
        } else {
          _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].play({
            src: src,
            seek: undefined
          }, function (isSetSrc) {
            console.log('play this.ctx.paused ---2', isSetSrc);
            _this7.canPlay = isSetSrc;
          });
        }

        setTimeout(function () {
          // 防止切换id的过程中，因为触发update，导致切换的id的时间被上一次的update替换
          _this7.isChanging = false;
        }, 500);
        this.playingInfo.status = 'loading'; // ios因为要下载全部（没做切片）默认下载速度0.6m/s，1分钟音频大约为2m的大小，所以一分钟音频大概下载3.3秒
        // android默认切片超时时间10秒

        var timeout = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__[/* isIos */ "l"])() ? this.playingInfo.duration / 60 * 3.3 * 1000 : 10000; // 如果超时（下载）时间的一半大于10秒，那么给个轻提示

        var tipTime = timeout / 2 > 10000 ? 10000 : 0;
        this.timeoutTimer = setTimeout(function () {
          console.log('4秒后判断', _this7.playingInfo.status);

          if (_this7.playingInfo.status === 'loading') {
            Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* runInAction */ "o"])(function () {
              _this7.playingInfo.status = 'pause';
              _this7.playingState = 'pause';
            });
          }
        }, timeout); // 轻提示

        if (tipTime) {
          this.tipTimer = setTimeout(function () {
            console.log('10秒后轻提示', _this7.playingInfo.status);

            if (_this7.playingInfo.status === 'loading') {
              wx.showToast({
                title: '音频加载中，请稍等...',
                icon: 'none',
                duration: 3000
              });
            }
          }, tipTime);
        }
      }
    } // async startPlay(playInfo: IPlayInfo, playNow: boolean) {

  }, {
    key: "startPlay",
    value: function () {
      var _startPlay = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this8 = this;

        var position;
        return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('startPlay', this.playInfo.object_id, this.playingInfo.object_id); // 如果是同一个课程，说明之前暂停了，现在重新播放

                if (!(this.playingInfo.object_id === this.playInfo.object_id)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", this.goPlay());

              case 3:
                // this.playInfo = playInfo;
                this.playingInfo = this.playInfo;
                this.isChanging = true;
                _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setCurrentInfo(this.playingInfo); // bgMusic.setReport()
                // 获取上一次的位置
                // let position = await this.getProgress(playInfo.object_id);

                position = 0; // 如果有拖拽过

                if (this.initProgress > 0) {
                  position = this.initProgress;
                  this.initProgress = 0;
                }

                if (position >= this.playingInfo.duration) position = 0; // 如果定位大于总时长，代表异常进度，此时置零

                console.log('startPlay playInfo', Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* toJS */ "q"])(this.playingInfo)); // if (this.playingInfo.object_id === this.playingInfo.object_id) {
                //   // 此时同一个课程
                //   if (this.playingInfo.status === 'play') {
                //     this.isChanging = false;
                //     // 浮窗播放，跳入详情，需要继续播放，此时音频是onCanplay状态，->
                //     // -> 并不会触发onCanplay的回调，该回调，会在bgMusicTool里面触发
                //     this.canPlay = true;
                //     return;
                //   }
                // }
                // if (playNow) {
                //   this.playingInfo.status = 'loading';
                //   bgMusic.play({ src: playInfo., seek: position }, (isSetSrc) => {
                //     // 在这里设置，是因为，设置src的话，才会触发onChanplay回调
                //     // 有一种是播放状态下（首页悬浮窗播放然后打开详情），不会设置src，所以不会触发onChangeplay回调
                //     this.canPlay = isSetSrc;
                //   });
                //   console.log('触发播放');
                //   setTimeout(() => {
                //     // 防止切换id的过程中，因为触发update，导致切换的id的时间被上一次的update替换
                //     this.isChanging = false;
                //   }, 500);
                //   return;
                // }
                // 如果不是初始化进入的，就是点击课程目录进入的
                // 初始化进入的，无需直接播放
                // 课程目录进入的，直接播放

                this.playingInfo.status = 'loading';
                this.playingState = 'loading';
                _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].play({
                  src: this.playingInfo.src,
                  seek: position
                }, function (isSetSrc) {
                  _this8.canPlay = isSetSrc;
                });

                if (this.rate != 1) {
                  _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].ctx.playbackRate = this.rate || 1;
                }

                setTimeout(function () {
                  _this8.isChanging = false;
                }, 500);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function startPlay() {
        return _startPlay.apply(this, arguments);
      }

      return startPlay;
    }()
  }, {
    key: "getRate",
    get: function get() {
      return {
        rate: this.rate,
        icon: this.rateMap[this.rate]
      };
    }
    /** 设置速率 */

  }, {
    key: "setRate",
    value: function setRate() {
      var rate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      if (this.rate === rate) return console.log("\u76F8\u540C\u500D\u901F".concat(rate, "\u4E0D\u8BBE\u7F6E\uFF01"));

      if (this.playInfo.object_id !== this.playingInfo.object_id) {
        this.goPlay();
        _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setRate(rate);
        this.rate = rate;
        return;
      }

      _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setRate(rate);

      if (!Object(_utils_tools__WEBPACK_IMPORTED_MODULE_8__[/* isIos */ "l"])()) {
        _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].ctx.startTime = this.progress;
        _utils_bg_music__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].ctx.seek(this.progress);
      }

      this.rate = rate;
    }
    /**
     * 设置定位
     * @param t 时间
     */

  }]);

  return Player;
}();

var player = new Player();

/***/ }),

/***/ "./src/store/user.ts":
/*!***************************!*\
  !*** ./src/store/user.ts ***!
  \***************************/
/*! exports provided: user */
/*! exports used: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");





var User = /*#__PURE__*/function () {
  /** 是否是新用户（未加入课程）0未加入 1已加入 */

  /** 是否调用过登录接口 */

  /** 用户信息 */
  function User() {
    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, User);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "userType", 'old');

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "isLogin", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "account", void 0);

    Object(mobx__WEBPACK_IMPORTED_MODULE_3__[/* makeAutoObservable */ "l"])(this);
  }
  /** 设置是否是全新用户 */


  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(User, [{
    key: "setUserType",
    value: function setUserType(userType) {
      this.userType = userType;
    }
    /** 设置音频 */

  }, {
    key: "setAccount",
    value: function setAccount(account) {
      console.log('setAccount');

      if (!this.isLogin) {
        this.isLogin = true;
      }

      this.account = account;
    }
  }]);

  return User;
}();

var user = new User();

/***/ }),

/***/ "./src/utils/WX.ts":
/*!*************************!*\
  !*** ./src/utils/WX.ts ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools */ "./src/utils/tools.ts");




 // throttlethrottle;

/* harmony default export */ __webpack_exports__["a"] = (new ( /*#__PURE__*/function () {
  function _class2() {
    var _this = this;

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, _class2);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "navigateTo", Object(_tools__WEBPACK_IMPORTED_MODULE_4__[/* throttle */ "r"])(function (url, data) {
      if (!url || typeof url !== 'string') {
        throw new Error("[Router.push] url \u4E0D\u80FD\u4E3A\u7A7A\u4E14\u5FC5\u987B\u662F\u5B57\u7B26");
      } // 保持原有的地址, 用于重定向是使用


      var tempUrl = url;

      if (data && Object.prototype.toString.call(data) === '[object Object]') {
        url += "?".concat(Object(_tools__WEBPACK_IMPORTED_MODULE_4__[/* jsonSort */ "m"])(data));
      }

      return new Promise(function (resolve, reject) {
        var pageArr = getCurrentPages();
        console.log('开始跳转'); // 如果大于设置的页面临界值, 则用重定向, 否则正常跳转

        if (pageArr.length >= 10) {
          _this.redirectTo(tempUrl, data).then(resolve).catch(reject);
        } else {
          wx.navigateTo({
            url: url,
            success: function success(res) {
              resolve(res);
            },
            fail: function fail(err) {
              reject(err);
            }
          });
        }
      });
    }));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "redirectTo", Object(_tools__WEBPACK_IMPORTED_MODULE_4__[/* throttle */ "r"])(function (url, data) {
      if (!url || typeof url !== 'string') {
        throw new Error("[Router.redirect] url \u4E0D\u80FD\u4E3A\u7A7A\u4E14\u5FC5\u987B\u662F\u5B57\u7B26");
      }

      if (data && Object.prototype.toString.call(data) === '[object Object]') {
        url += "?".concat(Object(_tools__WEBPACK_IMPORTED_MODULE_4__[/* jsonSort */ "m"])(data));
      }

      return new Promise(function (resolve, reject) {
        wx.redirectTo({
          url: url,
          success: function success(res) {
            console.log('res--->', res);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "navigateBack", Object(_tools__WEBPACK_IMPORTED_MODULE_4__[/* throttle */ "r"])(function () {
      var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      wx.navigateBack({
        delta: delta,
        fail: function fail(err) {
          if (err.errMsg && err.errMsg.includes('first page')) {
            // relaunch到my页面
            _this.reLaunch('/pages/home/home');
          }
        }
      });
    }));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "reLaunch", Object(_tools__WEBPACK_IMPORTED_MODULE_4__[/* throttle */ "r"])(function (url, data) {
      if (!url || typeof url !== 'string') {
        throw new Error("[Router.reLaunch] url \u4E0D\u80FD\u4E3A\u7A7A\u4E14\u5FC5\u987B\u662F\u5B57\u7B26");
      }

      if (data && Object.prototype.toString.call(data) === '[object Object]') {
        url += "?".concat(Object(_tools__WEBPACK_IMPORTED_MODULE_4__[/* jsonSort */ "m"])(data));
      }

      return new Promise(function (resolve, reject) {
        wx.reLaunch({
          url: url,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "switchTab", Object(_tools__WEBPACK_IMPORTED_MODULE_4__[/* throttle */ "r"])(function (url) {
      return new Promise(function (resolve, reject) {
        wx.switchTab({
          url: url,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }));
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_class2, [{
    key: "querySelect",
    value: function querySelect(tagName) {
      return new Promise(function (resolve, reject) {
        wx.createSelectorQuery().select(tagName).boundingClientRect().exec(function (res) {
          resolve(res);
        });
      });
    }
    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
     */

  }, {
    key: "getSetting",
    value: function getSetting() {
      return new Promise(function (res, rej) {
        wx.getSetting({
          success: function success(resSetting) {
            res(resSetting);
          },
          fail: function fail(err) {
            console.error('getSetting error', err);
            rej(err);
          }
        });
      });
    }
  }, {
    key: "login",
    value: function login() {
      return new Promise(function (res, rej) {
        wx.login({
          success: function success(resLogin) {
            if (!resLogin.code) {
              rej('登录失败！' + resLogin.errMsg);
            }

            res(resLogin.code);
          },
          fail: function fail(err) {
            console.log(err);
            rej(err);
          }
        });
      });
    }
  }, {
    key: "getUserProfile",
    value: function getUserProfile() {
      return new Promise(function (resolve, reject) {
        wx.getUserProfile({
          desc: '用于用户身份辨别',
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(e) {
            if ((e === null || e === void 0 ? void 0 : e.errMsg) !== 'getUserProfile:fail auth deny') {
              console.error('getUserProfile fail', e);
            }

            reject(e);
          }
        });
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return new Promise(function (resolve, reject) {
        wx.getUserInfo({
          withCredentials: true,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
    /**
     * 检测code是否过期
     */

  }, {
    key: "checkSession",
    value: function checkSession() {
      return new Promise(function (resolve, reject) {
        wx.checkSession({
          success: function success() {
            resolve(true);
          },
          fail: function fail() {
            resolve(false);
          }
        });
      });
    }
    /**
     * toast弹窗
     * @param {Object} {title:标题|icon:是否显示图标(默认: none)|duration:显示时长(默认: 2000)}
     * @returns {Promise}
     */

  }, {
    key: "Toast",
    value: function (_Toast) {
      function Toast(_x) {
        return _Toast.apply(this, arguments);
      }

      Toast.toString = function () {
        return _Toast.toString();
      };

      return Toast;
    }(function (params) {
      var defaultOpt = {
        title: '',
        icon: 'none',
        duration: 2000
      };
      if (!params) return console.warn('Toast 的 params 不能为空');

      if (typeof params === 'string') {
        // 下面这种ts不识别
        // if (Object.prototype.toString.call(params) === '[object String]') {
        params = {
          title: params,
          icon: 'none',
          duration: 2000
        };
      }

      if (Object.prototype.toString.call(params) === '[object Object]') {
        var _defaultOpt$params = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, defaultOpt), params),
            _defaultOpt$params$ti = _defaultOpt$params.title,
            title = _defaultOpt$params$ti === void 0 ? '' : _defaultOpt$params$ti,
            _defaultOpt$params$ic = _defaultOpt$params.icon,
            icon = _defaultOpt$params$ic === void 0 ? 'none' : _defaultOpt$params$ic,
            _defaultOpt$params$du = _defaultOpt$params.duration,
            duration = _defaultOpt$params$du === void 0 ? 2000 : _defaultOpt$params$du;

        if (!title) return;
        return new Promise(function (res, rej) {
          wx.showToast({
            title: title,
            icon: icon,
            duration: duration
          });
          setTimeout(function () {
            return res(true);
          }, duration);
        });
      }

      return Promise.resolve('');
    }
    /**
     * modal层
     * @param {Object} param0 {title: 标题|content: 内容|showCancel:true 是否取消}
     */
    )
  }, {
    key: "Modal",
    value: function Modal(options) {
      options = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        showCancel: true
      }, options);
      return new Promise(function (resolve, rej) {
        wx.showModal(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options), {}, {
          success: function success(res) {
            if (res.confirm) {
              resolve(true);
            } else if (res.cancel) {
              resolve(false);
            }
          }
        }));
      });
    } // 导航----------------------------------

    /** 页面回退做了优化，如果栈首是my页，就不用relaunch了 */

  }, {
    key: "pageBack",
    value: function pageBack() {
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1].route;

      if (pages.length === 1) {
        // 页面栈只有一个页面，而且是pay
        if (currentPage === 'pages/home/home') {
          return console.warn('顶层页面');
        } else {
          wx.reLaunch({
            url: 'pages/home/home'
          });
        }
      } else {
        wx.navigateBack({
          delta: 1
        });
      }
    }
    /**
     * 跳转
     * @param { String } url 跳转地址
     * @param { Object } data 跳转参数
     * @returns {Promise}
     */

  }, {
    key: "getLocationPermission",
    value:
    /** 获取用户地理位置权限 */
    function getLocationPermission() {
      return new Promise(function (resolve, reject) {
        wx.chooseLocation({
          success: function success(res) {
            resolve(res); //调用成功直接设置地址
          },
          fail: function fail() {
            wx.getSetting({
              success: function success(res) {
                var statu = res.authSetting;

                if (!statu['scope.userLocation']) {
                  wx.showModal({
                    title: '是否授权当前位置',
                    content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
                    success: function success(tip) {
                      if (tip.confirm) {
                        wx.openSetting({
                          success: function success(data) {
                            if (data.authSetting['scope.userLocation'] === true) {
                              wx.showToast({
                                title: '授权成功',
                                icon: 'success',
                                duration: 1000
                              }); //授权成功之后，再调用chooseLocation选择地方

                              wx.chooseLocation({
                                success: function success(res2) {
                                  resolve(res2);
                                }
                              });
                            } else {
                              wx.showToast({
                                title: '授权失败',
                                icon: 'success',
                                duration: 1000
                              });
                              reject(data);
                            }
                          }
                        });
                      }
                    }
                  });
                }
              },
              fail: function fail(res) {
                wx.showToast({
                  title: '调用授权窗口失败',
                  icon: 'success',
                  duration: 1000
                });
                reject(res);
              }
            });
          }
        });
      });
    }
    /** 检查小程序更新 */

  }, {
    key: "checkUpdate",
    value: function checkUpdate() {
      if (wx.canIUse('getUpdateManager')) {
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
          if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
              wx.showModal({
                title: '更新提示',
                content: '发现新版本，是否重启应用?',
                cancelColor: '#999999',
                confirmColor: '#FF0000',
                success: function success(res2) {
                  if (res2.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate();
                  }
                }
              });
            });
          }
        });
        updateManager.onUpdateFailed(function () {
          // 新的版本下载失败
          wx.showModal({
            title: '提示',
            content: '检查到有新版本，但下载失败，请检查网络设置',
            success: function success(res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              }
            }
          });
        });
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重启。'
        });
      }
    }
  }, {
    key: "saveImage",
    value: function saveImage(url) {
      wx.showLoading({
        title: '保存中'
      });
      wx.downloadFile({
        url: url,
        success: function success(res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function success() {
              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 1000
              });
            },
            fail: function fail() {
              wx.showModal({
                title: '提示',
                content: '需要您授权保存相册',
                showCancel: true,
                //是否显示取消按钮
                cancelText: '否',
                //默认是“取消”
                confirmText: '是',
                //默认是“确定”
                success: function success(res2) {
                  if (res2.cancel) return;
                  wx.openSetting({
                    success: function success(settingdata) {
                      if (settingdata.authSetting['scope.writePhotosAlbum']) {
                        wx.showToast({
                          title: '获取权限成功，再次点击图片即可保存',
                          icon: 'none'
                        });
                      } else {
                        wx.showToast({
                          title: '获取权限失败，将无法保存到相册哦',
                          icon: 'none'
                        });
                      }
                    }
                  });
                }
              });
            }
          });
        },
        complete: function complete() {
          wx.hideLoading();
        }
      });
    }
  }]);

  return _class2;
}())());

/***/ }),

/***/ "./src/utils/bg-music.ts":
/*!*******************************!*\
  !*** ./src/utils/bg-music.ts ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");







/**
 * TODO
 * mac:切换速率会导致重新播放，并且切换无效
 * ios:
 */
var BackgroundListener = /*#__PURE__*/function () {
  // 是否正在运行中
  // 监听是否停止
  // 是否在后台
  function BackgroundListener() {
    var _this = this,
        _this$systemInfo;

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, BackgroundListener);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "ctx", void 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "systemInfo", void 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "isIos", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "running", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "checked", void 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "isAppFront", true);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onError", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onPrev", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onNext", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onCanplay", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onTimeUpdate", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onEnded", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onStop", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onPause", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onPlay", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onWaiting", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onSeeked", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "_onSeeking", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "removeListener", function () {
      _this._onCanplay = function () {};

      _this._onTimeUpdate = function () {};

      _this._onEnded = function () {};

      _this._onStop = function () {};

      _this._onPause = function () {};

      _this._onPlay = function () {};

      _this._onWaiting = function () {};

      _this._onSeeked = function () {};

      _this._onSeeking = function () {};
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onErrorCallback", function (next, error) {
      return next(error);
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onNextCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onPrevCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onCanplayCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onPlayCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onPauseCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onStopCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onEndedCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onTimeUpdateCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onWaitingCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onSeekedCallback", function (next) {
      return next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "onSeekingCallback", function (next) {
      return next();
    });

    this.ctx = wx.getBackgroundAudioManager();
    this.systemInfo = wx.getSystemInfoSync();
    this.isIos = /ios/gi.test((_this$systemInfo = this.systemInfo) === null || _this$systemInfo === void 0 ? void 0 : _this$systemInfo.system);
    this.onListener(); // app在前台时回调

    wx.onAppShow(function (_res) {
      _this.isAppFront = true;
    }); // app在后台时回调

    wx.onAppHide(function (_res) {
      _this.isAppFront = false;
    });
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(BackgroundListener, [{
    key: "onListener",
    value: function onListener() {
      var _this2 = this;

      this.ctx.onError(function (e) {
        console.log('eeeee', e);

        _this2.onErrorHandler(e);
      });
      this.ctx.onNext(function () {
        return _this2.onNextHandler();
      });
      this.ctx.onPrev(function () {
        return _this2.onPrevHandler();
      });
      this.ctx.onCanplay(function () {
        return _this2.onCanplayHandler();
      });
      this.ctx.onPlay(function () {
        return _this2.onPlayHandler();
      });
      this.ctx.onPause(function () {
        return _this2.onPauseHandler();
      });
      this.ctx.onStop(function () {
        return _this2.onStopHandler();
      });
      this.ctx.onEnded(function () {
        return _this2.onEndedHandler();
      });
      this.ctx.onTimeUpdate(function () {
        return _this2.onTimeUpdateHandler();
      }); // 小程序音频后台补偿器，切换后台后this.ctx.onTimeUpdate不会触发，这里用于补偿this.ctx.onTimeUpdate的触发

      wx.wkOnAudioTimeUpdate = function () {
        return _this2.onTimeUpdateHandler();
      };

      this.ctx.onWaiting(function () {
        return _this2.onWaitingHandler();
      });
      this.ctx.onSeeked(function () {
        console.log('this.onSeekedHandler()');

        _this2.onSeekedHandler();
      });
      this.ctx.onSeeking(function () {
        return _this2.onSeekingHandler();
      });
    }
  }, {
    key: "onPrevHandler",
    value: function onPrevHandler() {
      this.onPrevCallback(this._onPrev);
    }
  }, {
    key: "onErrorHandler",
    value: function onErrorHandler(e) {
      this.onErrorCallback(this._onError, e);
    }
  }, {
    key: "onNextHandler",
    value: function onNextHandler() {
      this.onNextCallback(this._onNext);
    }
  }, {
    key: "onCanplayHandler",
    value: function onCanplayHandler() {
      this.onCanplayCallback(this._onCanplay);
    }
  }, {
    key: "onPlayHandler",
    value: function onPlayHandler() {
      this.onPlayCallback(this._onPlay);
    }
  }, {
    key: "onPauseHandler",
    value: function onPauseHandler() {
      this.running = false;
      this.onPauseCallback(this._onPause);
    }
  }, {
    key: "onStopHandler",
    value: function onStopHandler() {
      this.running = false;
      this.onStopCallback(this._onStop);
    }
  }, {
    key: "onEndedHandler",
    value: function onEndedHandler() {
      this.onEndedCallback(this._onEnded);
    }
  }, {
    key: "onTimeUpdateHandler",
    value: function onTimeUpdateHandler() {
      var _this3 = this;

      this.running = true;

      if (!this.checked) {
        // 场景，该场景为后台暂停音频，但是没有触发音频暂停回调，并且没有触发update，这里默认为已经暂停，所以默认回调一次停止事件
        this.checked = true;
        setTimeout(function () {
          _this3.checked = false;
          console.log('手动暂停', _this3.ctx.paused, _this3.running, !_this3.isAppFront);

          if (_this3.ctx.paused && _this3.running && !_this3.isAppFront) {
            _this3._onPause(); // 手动调用暂停

          }
        }, 2000);
      }

      this.onTimeUpdateCallback(this._onTimeUpdate);
    }
  }, {
    key: "onWaitingHandler",
    value: function onWaitingHandler() {
      this.onWaitingCallback(this._onWaiting);
    }
  }, {
    key: "onSeekedHandler",
    value: function onSeekedHandler() {
      this.onSeekedCallback(this._onSeeked);
    }
  }, {
    key: "onSeekingHandler",
    value: function onSeekingHandler() {
      this.onSeekingCallback(this._onSeeking);
    }
  }, {
    key: "onCanplay",
    value:
    /**
     * 是否能够播放
     * @param callback 是否能播放回调
     */
    function onCanplay(callback) {
      if (typeof callback !== 'function') return console.warn('onCanplay 入参必须是函数类型');
      this._onCanplay = callback;
    }
  }, {
    key: "onPlay",
    value: function onPlay(callback) {
      if (typeof callback !== 'function') return console.warn('onPlay 入参必须是函数类型');
      this._onPlay = callback;
    }
  }, {
    key: "onPause",
    value: function onPause(callback) {
      if (typeof callback !== 'function') return console.warn('onPause 入参必须是函数类型');
      this._onPause = callback;
    }
  }, {
    key: "onStop",
    value: function onStop(callback) {
      if (typeof callback !== 'function') return console.warn('onStop 入参必须是函数类型');
      this._onStop = callback;
    }
  }, {
    key: "onEnded",
    value: function onEnded(callback) {
      if (typeof callback !== 'function') return console.warn('onEnded 入参必须是函数类型');
      this._onEnded = callback;
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      if (typeof callback !== 'function') return console.warn('onError 入参必须是函数类型');
      this._onError = callback;
    }
  }, {
    key: "onTimeUpdate",
    value: function onTimeUpdate(callback) {
      if (typeof callback !== 'function') return console.warn('onTimeUpdate 入参必须是函数类型');
      this._onTimeUpdate = callback;
    }
  }, {
    key: "onWaiting",
    value: function onWaiting(callback) {
      if (typeof callback !== 'function') return console.warn('onWaiting 入参必须是函数类型');
      this._onWaiting = callback;
    }
  }, {
    key: "onSeeked",
    value: function onSeeked(callback) {
      if (typeof callback !== 'function') return console.warn('onSeeked 入参必须是函数类型');
      this._onSeeked = callback;
    }
  }, {
    key: "onSeeking",
    value: function onSeeking(callback) {
      if (typeof callback !== 'function') return console.warn('onSeeking 入参必须是函数类型');
      this._onSeeking = callback;
    }
  }, {
    key: "onNext",
    value: function onNext(callback) {
      if (typeof callback !== 'function') return console.warn('onNext 入参必须是函数类型');
      this._onNext = callback;
    }
  }, {
    key: "onPrev",
    value: function onPrev(callback) {
      if (typeof callback !== 'function') return console.warn('onPrev 入参必须是函数类型');
      this._onPrev = callback;
    }
  }]);

  return BackgroundListener;
}();

var BackgroundMusic = /*#__PURE__*/function (_BackgroundListener) {
  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BackgroundMusic, _BackgroundListener);

  var _super = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(BackgroundMusic);

  function BackgroundMusic() {
    var _this4;

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, BackgroundMusic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _super.call.apply(_super, [this].concat(args));

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "currentSeek", 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "isPlaying", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "setRateCallback", void 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "setSeekCallback", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "currentInfo", void 0);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "startCallback", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "rateFxCallback", function () {});

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onErrorCallback", function (next, error) {
      wx.showToast({
        title: '音频播放失败',
        icon: 'none'
      });
      next(error);
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onPrevCallback", function (next) {
      next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onNextCallback", function (next) {
      next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onCanplayCallback", function (next) {
      console.log('onCanplayCallback', _this4.ctx.currentTime);

      _this4.setSeekCallback();

      next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onPlayCallback", function (next) {
      console.log('onPlayCallback', _this4.ctx.currentTime, Date.now());
      next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onPauseCallback", function (next) {
      _this4.isPlaying = false;
      console.log('onPauseCallback', _this4.ctx.currentTime);
      next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onStopCallback", function (next) {
      var _this4$startCallback, _this5;

      _this4.isPlaying = false;
      console.log('onStopCallback', _this4.ctx.currentTime);
      (_this4$startCallback = (_this5 = _this4).startCallback) === null || _this4$startCallback === void 0 ? void 0 : _this4$startCallback.call(_this5); // ios设置rate需要先stop后再设置rate再设置src
      // 因为ios下的setRateCallback内部会触发一个暂停，这是非正常暂停，所以不需要反馈给前端

      if (_this4.setRateCallback) {
        _this4.setRateCallback();
      } else {
        next();
      }
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onEndedCallback", function (next) {
      _this4.isPlaying = false;
      console.log('onEndedCallback', _this4.ctx, _this4.ctx.duration, _this4.ctx.currentTime);

      _this4.setSeek(0);

      next(Math.abs(_this4.ctx.duration - _this4.ctx.currentTime) <= 1);
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onTimeUpdateCallback", function (next) {
      // console.log('onTimeUpdateCallback', this.ctx.currentTime, this.ctx.paused);
      // TODO 此处拦截，但是不保险，拦截原因，
      // 比如onEnded后会多触发一次update，但此时的paused是true，
      // 正常的情况下是false
      // console.log('onTimeUpdateCallback', this.ctx.paused, this.ctx);
      if (_this4.ctx.paused) return console.log('此处拦截update');
      _this4.isPlaying = true;
      _this4.currentSeek = _this4.ctx.currentTime;
      next({
        currentTime: _this4.ctx.currentTime
      });
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onSeekingCallback", function (next) {
      console.log('onSeekingCallback');
      next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onSeekedCallback", function (next) {
      console.log('onSeekedCallback', Date.now());
      next();
    });

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this4), "onWaitingCallback", function (next) {
      console.log('onWaitingCallback', Date.now());
      next();
    });

    return _this4;
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(BackgroundMusic, [{
    key: "setCurrentInfo",
    value: function setCurrentInfo(info) {
      this.currentInfo = info;
    }
  }, {
    key: "setReport",
    value: function setReport(options) {
      this.ctx.reportData = {
        evt: 'le_play',
        element: 'player__audio',
        evt_params: {
          ch_id: options.channel_id,
          lec_id: options.lecture_id
        }
      }; //  {
      //   evt: 'le_play',
      //   element: 'player__audio',
      //   evt_params: {
      //     ch_id: props.channel_id,
      //     lec_id: props.lecture_id,
      //   },
      // };
    }
  }, {
    key: "setSrc",
    value:
    /**
     * 设置地址
     * @param src 地址
     */
    function setSrc(src) {
      var _this$currentInfo, _this$currentInfo2, _this$currentInfo3, _this$currentInfo$tit, _this$currentInfo4, _this$currentInfo$cov, _this$currentInfo5;

      this.isPlaying = false;
      console.log('====================================');
      console.log('设置src', src, (_this$currentInfo = this.currentInfo) === null || _this$currentInfo === void 0 ? void 0 : _this$currentInfo.title, (_this$currentInfo2 = this.currentInfo) === null || _this$currentInfo2 === void 0 ? void 0 : _this$currentInfo2.cover_url, this.currentInfo, (_this$currentInfo3 = this.currentInfo) === null || _this$currentInfo3 === void 0 ? void 0 : _this$currentInfo3.title, this.ctx, this.ctx.paused);
      console.log('====================================');
      this.ctx.startTime = 0;
      this.ctx.currentTime = 0;
      this.ctx.src = src;
      this.ctx.title = (_this$currentInfo$tit = (_this$currentInfo4 = this.currentInfo) === null || _this$currentInfo4 === void 0 ? void 0 : _this$currentInfo4.title) !== null && _this$currentInfo$tit !== void 0 ? _this$currentInfo$tit : '梨花听书';
      this.ctx.coverImgUrl = (_this$currentInfo$cov = (_this$currentInfo5 = this.currentInfo) === null || _this$currentInfo5 === void 0 ? void 0 : _this$currentInfo5.cover_url) !== null && _this$currentInfo$cov !== void 0 ? _this$currentInfo$cov : ''; // this.startCallback = () => {
      //   console.log('开始设置src');
      //   setTimeout(() => {
      //     this.ctx.src = src;
      //     this.ctx.title = new Date().getTime() + '';
      //     this.startCallback = () => {};
      //   }, 200);
      // };
      // if (this.ctx.paused !== undefined && this.ctx.paused === false) {
      //   console.log('强制stop');
      //   this.ctx.stop();
      //   this.ctx.startTime = 0;
      //   this.ctx.currentTime = 0;
      // } else {
      //   this.startCallback?.();
      // }
    }
  }, {
    key: "stop",
    value: function stop() {
      // 如果偶遇src代表非stop状态，可以触发stop
      if (this.ctx.src) {
        this.ctx.stop();
      }
    }
    /**
     * 音频播放
     * @param src 音频url
     * @param seek 音频播放位置
     * @param isSetSrcCallback 是否是设置src的play
     */

  }, {
    key: "play",
    value: function play(_ref) {
      var _seek,
          _this6 = this;

      var src = _ref.src,
          seek = _ref.seek;
      var isSetSrcCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      console.log('play this.ctx.paused', !!src && this.ctx.src === src, src, seek, this.ctx.paused, this.ctx.src);
      if (!this.ctx.reportData) console.warn('reportData参数缺失，需要设置setReport否则无法触发update补帧功能（wx.wkOnAudioTimeUpdate）'); // 如果之前没有src，就走初始化的操作

      if (!!src && this.ctx.src === src) {
        isSetSrcCallback === null || isSetSrcCallback === void 0 ? void 0 : isSetSrcCallback(true);
        this.ctx.play();
      } else {
        console.log('设置src', this.setSrc, src);
        this.ctx.playbackRate = 1;
        isSetSrcCallback === null || isSetSrcCallback === void 0 ? void 0 : isSetSrcCallback(false);
        this.setSrc(src);
      }

      console.log('seek !== undefined && seek !== this.ctx.currentTime', seek, this.ctx.currentTime, seek !== undefined, seek !== this.ctx.currentTime); // if (seek !== undefined && seek !== this.ctx.currentTime) {
      // if (seek !== undefined) {

      seek = (_seek = seek) !== null && _seek !== void 0 ? _seek : 0; // 如果seek为undefined就默认为0， 处理20210918出现的onEnded后置0，播放this.ctx.currentTime仍然为之前的位置的bug

      if (!!src && this.ctx.src === src) {
        // 这里属于无需重新替换src播放
        this.ctx.currentTime = seek;
        this.ctx.startTime = seek; // TODO 这个可能去掉

        this.ctx.seek(seek);
        console.log('我触发了onPlay1');
        this.ctx.play(); // TODO 这里其实不用加，但是存在设置前触发了stop的情况
      } else {
        console.log('我设置了回调setSeekCallback'); // 这里属于替换src的操作

        this.setSeekCallback = function () {
          var _seek2;

          seek = (_seek2 = seek) !== null && _seek2 !== void 0 ? _seek2 : 0; // 防止typescript类型校验错误

          console.log('setSeekCallback', seek);
          _this6.currentSeek = seek;
          _this6.ctx.currentTime = seek;
          _this6.ctx.startTime = seek;

          _this6.ctx.seek(seek); // 这个可能去掉


          console.log('我触发了onPlay2');

          _this6.ctx.play(); // TODO 这里其实不用加，但是存在设置前触发了stop的情况


          _this6.setSeekCallback = function () {};
        };
      } // }
      // if (!this.ctx.src) {
      //   this.setSrc(src);
      //   // this.ctx.play();
      //   if (this.currentSeek > 0) {
      //     this.setSeek(this.currentSeek);
      //   }
      // } else {
      //   // 如果src是上一次的，也就是说没有更换音频
      //   if (this.ctx.src === src) {
      //     this.ctx.play();
      //   } else {
      //     // 如果src不是上一次的，代表更换音频
      //     this.setSrc(src);
      //     this.currentSeek = 0;
      //   }
      // }
      // TODO 判断src是不是相同，判断是否在播放状态

    }
  }, {
    key: "pause",
    value: function pause() {
      // if(this.ctx.paused)
      console.log('pause this.ctx.paused', this.ctx.paused);
      this.ctx.pause();
    }
    /**
     * 设置速率
     * 注：开发工具上，都是用的ios的模式，会导致如果使用android模拟器，设置速率无效
     * @param rate 速率
     */

  }, {
    key: "setRate",
    value: function setRate(rate) {
      var _this7 = this;

      console.log('setRate', this.isIos, +rate || 1);

      if (this.isIos) {
        // ios想改变速率得重新设置src
        // https://developers.weixin.qq.com/community/develop/doc/000c629406cd4075ce4cee9855b800?highLine=BackgroundAudioManager%2520playbackRate
        var src = this.ctx.src;
        var currentSeek = this.currentSeek;

        this.setRateCallback = function () {
          // this.ctx.startTime = this.currentSeek;
          _this7.setSrc(src);

          _this7.ctx.playbackRate = +rate || 1;
          console.log('当前速率', +rate || 1, _this7.currentSeek, currentSeek, src);
          _this7.ctx.startTime = currentSeek;

          _this7.ctx.seek(currentSeek);

          _this7.setRateCallback = undefined;
        };

        this.ctx.stop();
      } else {
        // this.rateFix();
        console.log('setRate---->', Date.now());
        this.ctx.playbackRate = +rate || 1;
      }
    }
  }, {
    key: "rateFix",
    value: function rateFix() {
      var _this8 = this;

      // 先拿到是否是暂停状态
      var needFix = this.ctx.paused;

      this.rateFxCallback = function () {
        if (needFix) {
          _this8.ctx.pause();
        }

        _this8.rateFxCallback = function () {};
      };
    }
    /**
     * 设置进度
     * @param seek 进度
     */

  }, {
    key: "setSeek",
    value: function setSeek(seek) {
      console.log('设置了进度', seek, this.isPlaying);
      this.currentSeek = seek;
      this.ctx.seek(seek);
    }
    /** 音频播放失败 */

  }]);

  return BackgroundMusic;
}(BackgroundListener);

/* harmony default export */ __webpack_exports__["a"] = (new BackgroundMusic());

/***/ }),

/***/ "./src/utils/css-module.ts":
/*!*********************************!*\
  !*** ./src/utils/css-module.ts ***!
  \*********************************/
/*! exports provided: CSSModule */
/*! exports used: CSSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSModule; });
/* harmony import */ var react_css_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-css-modules */ "./node_modules/react-css-modules/dist/index.js");
/* harmony import */ var react_css_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_css_modules__WEBPACK_IMPORTED_MODULE_0__);

var CSSModule = function CSSModule(Component, defaultStyles, options) {
  if (!options) {
    options = {
      // https://github.com/gajus/react-css-modules#allowmultiple
      allowMultiple: true,
      //允许多个 CSS 模块名称。

      /**
       * 定义styleName无法映射到现有 CSS 模块时所需的操作。
        throw 抛出错误
        log 使用记录警告 console.warn
        ignore 默默地忽略缺少的样式名称
       */
      handleNotFoundStyleName: 'ignore'
    };
  }

  return react_css_modules__WEBPACK_IMPORTED_MODULE_0___default()(Component, defaultStyles, options);
};

/***/ }),

/***/ "./src/utils/http.ts":
/*!***************************!*\
  !*** ./src/utils/http.ts ***!
  \***************************/
/*! exports provided: url, http, get, post */
/*! exports used: get, post, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return url; });
/* unused harmony export http */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return post; });
/* harmony import */ var taro_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-axios */ "./node_modules/taro-axios/lib/index.esm.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/utils/login.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/config */ "./src/config/config.ts");




var url = {
  wk: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].main, "/api"),

  /** 听书 /v1/integration/wk_business_lihuats*/
  base: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].gw, "/v1/integration/lh_tingshu_business"),
  // base: `${baseUrl.gw}/v1/integration/wk_business_lihuats`, // 微课旧版本

  /** 周测 */
  gw: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].gw, "/v1"),
  middleground: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].middleground, "/api")
};
var http = taro_axios__WEBPACK_IMPORTED_MODULE_0__[/* axios */ "a"].create();

http.interceptors.request.use(function (config) {
  console.log("%c \u53D1\u9001 ".concat(Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* getUrlApiName */ "i"])(config.url), " "), 'background:#62D438;color:#333', config);
  Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* httpRequestHandler */ "k"])(config); // const api = getApiUrl(config.url);
  // console.report(`http_request ${api}`, config.data || {});

  return config;
}, function (err) {
  // console.error(err);
  return Promise.reject(err);
});
http.interceptors.response.use(function (res) {
  return new Promise(function (resolve, reject) {
    var _res$config;

    var response = res.data; // console.log(response);

    var api = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* getApiUrl */ "c"])(res === null || res === void 0 ? void 0 : (_res$config = res.config) === null || _res$config === void 0 ? void 0 : _res$config.url);

    if (response.code !== 0 && response.code !== '0000' && response.code !== 40101 && response.code !== 40102) {
      var _res$data;

      Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* fetchError */ "b"])(res, api, (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data);
      response.isReport = true;
      return reject(response);
    }

    console.log("%c \u63A5\u6536 ".concat(Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* getUrlApiName */ "i"])(res.config.url), " "), 'background:#1E1E1E;color:#bada55', res); // fetchSuccess(res, api);

    return resolve(response.data);
  });
}, function (error) {
  console.error('http_catch', error);
  return Promise.reject(error);
});
function get(apiUrl, params, config) {
  return new Promise(function (res, rej) {
    var _params, _params$params;

    if (params) params = {
      params: params
    }; // get 请求接收一个params对象

    if (config) params = Object.assign(params, config); // 如果不需要登录态的

    if ((_params = params) !== null && _params !== void 0 && (_params$params = _params.params) !== null && _params$params !== void 0 && _params$params.noaccess) {
      var _params2, _params2$params;

      (_params2 = params) === null || _params2 === void 0 ? true : (_params2$params = _params2.params) === null || _params2$params === void 0 ? true : delete _params2$params.noaccess; // 删掉，以免影响数据

      return res(http.get(apiUrl, params));
    }

    Object(_login__WEBPACK_IMPORTED_MODULE_2__[/* getToken */ "a"])(function () {
      return res(http.get(apiUrl, params));
    }, function () {
      console.log('没有token', apiUrl);
      rej({
        code: '0401'
      });
    });
  });
}
function post(apiUrl, params, config) {
  return new Promise(function (res, rej) {
    if (params !== null && params !== void 0 && params.noaccess) {
      params === null || params === void 0 ? true : delete params.noaccess; // 删掉，以免影响数据

      return res(http.post(apiUrl, params, config));
    }

    Object(_login__WEBPACK_IMPORTED_MODULE_2__[/* getToken */ "a"])(function () {
      return res(http.post(apiUrl, params, config));
    }, function () {
      rej({
        code: '0401'
      });
    });
  });
}

/***/ }),

/***/ "./src/utils/login.ts":
/*!****************************!*\
  !*** ./src/utils/login.ts ***!
  \****************************/
/*! exports provided: getToken, httpCheckLogin */
/*! exports used: getToken, httpCheckLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return httpCheckLogin; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _api_account_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/account/account */ "./src/api/account/account.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools */ "./src/utils/tools.ts");
/* harmony import */ var _WX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WX */ "./src/utils/WX.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/utils/storage.ts");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./track */ "./src/utils/track.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");



/*
 * @Description: 登录逻辑
 * @LastEditTime: 2021-09-15 09:56:28
 */






var callbackQueue = [];
var isProcessing = false;
function getToken(_x, _x2) {
  return _getToken.apply(this, arguments);
}
/** 登录设置token */

function _getToken() {
  _getToken = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(onSuccess, onFailed) {
    var token, res, cb, _cb$onSuccess, _cb$onFailed;

    return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = Object(_tools__WEBPACK_IMPORTED_MODULE_3__[/* getStorage */ "h"])('token');

            if (!token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(token));

          case 4:
            if (!isProcessing) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", callbackQueue.push({
              onSuccess: onSuccess,
              onFailed: onFailed
            }));

          case 6:
            isProcessing = true;
            console.log('getToken', callbackQueue);
            _storage__WEBPACK_IMPORTED_MODULE_5__[/* storageUtil */ "a"].clear();
            _context.next = 11;
            return httpCheckLogin();

          case 11:
            res = _context.sent;
            isProcessing = false;

            while (callbackQueue.length) {
              cb = callbackQueue.shift();

              if (cb) {
                if (!res.is_new) {
                  (_cb$onSuccess = cb.onSuccess) === null || _cb$onSuccess === void 0 ? void 0 : _cb$onSuccess.call(cb, res.access_token);
                  onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(res.access_token);
                } else {
                  (_cb$onFailed = cb.onFailed) === null || _cb$onFailed === void 0 ? void 0 : _cb$onFailed.call(cb);
                  onFailed === null || onFailed === void 0 ? void 0 : onFailed();
                }
              }
            }

            if (!res.is_new) {
              callbackQueue.forEach(function (_ref) {
                var os = _ref.onSuccess;
                return os === null || os === void 0 ? void 0 : os();
              });
              onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(res.access_token);
            } else {
              callbackQueue.forEach(function (_ref2) {
                var of = _ref2.onFailed;
                return of === null || of === void 0 ? void 0 : of();
              });
              onFailed === null || onFailed === void 0 ? void 0 : onFailed();
            }

            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.error('getToken error', _context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));
  return _getToken.apply(this, arguments);
}

function httpCheckLogin(_x3) {
  return _httpCheckLogin.apply(this, arguments);
}

function _httpCheckLogin() {
  _httpCheckLogin = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(params) {
    var code, data, info;
    return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _WX__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].login();

          case 3:
            code = _context2.sent;
            data = {
              code: code,
              mtype: 'lihuats'
            };

            if (params) {
              data.iv = params.iv;
              data.encryptedData = params.encryptedData;
            }

            _context2.next = 8;
            return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_2__[/* api_weixin_mina_v2 */ "f"])(data);

          case 8:
            info = _context2.sent;
            console.log('重新登录 info', info);
            _store__WEBPACK_IMPORTED_MODULE_7__[/* ApiStore */ "a"].user.setAccount(info.userinfo);

            if (info && !info.is_new) {
              Object(_tools__WEBPACK_IMPORTED_MODULE_3__[/* setStorage */ "q"])('token', info.access_token, {
                expires: 1000 * 60 * 60 * 5
              });
              Object(_tools__WEBPACK_IMPORTED_MODULE_3__[/* setStorage */ "q"])('account', info.userinfo);
              _track__WEBPACK_IMPORTED_MODULE_6__[/* track */ "a"].initEvent(); // 登录后初始化埋点
            }

            return _context2.abrupt("return", Promise.resolve(info));

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.error('httpCheckLogin error', _context2.t0);
            wx.showToast({
              title: '请求超时，请点击右上角...重新进入小程序',
              icon: 'none'
            });
            return _context2.abrupt("return", Promise.reject(_context2.t0));

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));
  return _httpCheckLogin.apply(this, arguments);
}

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/*! exports provided: storageUtil */
/*! exports used: storageUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storageUtil; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");




/*
 * @Description: TODO:数据缓存
 * @Date: 2021-09-10 19:03:50
 * @LastEditTime: 2021-09-15 16:26:16
 */


var DataStorage = /*#__PURE__*/function () {
  function DataStorage() {
    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DataStorage);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "whiteList", ['subscriptionMsg', 'closeCard']);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "storage", {
      token: '',
      account: '',
      // 是否订阅公众号
      setIsSubscribe: '',
      // 是否关闭已领取的亲友卡
      closeCard: '',
      // 用户是否加入专栏
      setIsAccess: '',
      // 课程列表
      set_fomate_daily_content: '',
      // 专栏id
      setChannelId: '',
      // 订阅消息
      subscriptionMsg: '',
      // 是否提现
      setWithdrawIng: '',
      //学习进度
      learningProgress: '',
      // 播放悬浮窗
      float_play: '',
      setClockMsg: '',
      setPlayRate: '',
      test: ''
    });
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DataStorage, [{
    key: "init",
    value: function init() {
      var _this = this;

      var _loop = function _loop(key) {
        if (Object.prototype.hasOwnProperty.call(_this.storage, key)) {
          Object.defineProperty(_this.storage, key, {
            get: function get() {
              return Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__[/* getStorage */ "h"])(key);
            },
            set: function set(value) {
              Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__[/* setStorage */ "q"])(key, value);
            },
            enumerable: true,
            configurable: true
          });
        }
      };

      for (var key in this.storage) {
        _loop(key);
      }
    }
  }, {
    key: "setStorage",
    value: function setStorage(key, value) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__[/* setStorage */ "q"])(key, value, config);
    }
  }, {
    key: "clear",
    value: function clear() {
      for (var key in this.storage) {
        if (Object.prototype.hasOwnProperty.call(this.storage, key)) {
          if (this.whiteList.indexOf(key) === -1) {
            Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__[/* removeStorage */ "n"])(key);
          }
        }
      }
    }
  }]);

  return DataStorage;
}();

var storageUtil = new DataStorage();

/***/ }),

/***/ "./src/utils/tools.ts":
/*!****************************!*\
  !*** ./src/utils/tools.ts ***!
  \****************************/
/*! exports provided: getPicture, getEntry, getUrlApiName, handleChannelContent, getAudioResTime, isIos, dateFormat, trim, secondToDate, httpRequestHandler, fetchError, fetchSuccess, getApiUrl, getPlatformInfo, getStorage, removeStorage, setStorage, jsonSort, throttle, debounce, getActivePage, timeStream, safeBottom */
/*! exports used: dateFormat, fetchError, getApiUrl, getAudioResTime, getEntry, getPicture, getPlatformInfo, getStorage, getUrlApiName, handleChannelContent, httpRequestHandler, isIos, jsonSort, removeStorage, safeBottom, secondToDate, setStorage, throttle, timeStream, trim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getUrlApiName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return handleChannelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAudioResTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isIos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return secondToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return httpRequestHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchError; });
/* unused harmony export fetchSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPlatformInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return removeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return jsonSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return throttle; });
/* unused harmony export debounce */
/* unused harmony export getActivePage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return timeStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return safeBottom; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _libs_date_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/date-format */ "./src/libs/date-format.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_account_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/account/account */ "./src/api/account/account.ts");








/** 获取当前page */
var getActivePage = function getActivePage() {
  var curPages = getCurrentPages();

  if (curPages.length) {
    return curPages[curPages.length - 1];
  }

  return {};
};

function isObject(value) {
  var type = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(value);

  return value != null && (type == 'object' || type == 'function');
}

/**
 * 防抖
 * @example
 * ```
 * debounce<(progress: number) => void>(progress => {}, 40)
 * ```
 */
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new Error('回调必须是函数');
  }

  wait = +wait || 0;

  if (options && isObject(options)) {
    var _options$maxWait;

    leading = !!(options !== null && options !== void 0 && options.leading);
    maxing = 'maxWait' in options;
    maxWait = maxing ? Math.max(+((_options$maxWait = options === null || options === void 0 ? void 0 : options.maxWait) !== null && _options$maxWait !== void 0 ? _options$maxWait : 0) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = Date.now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now());
  }

  function debounced() {
    var time = Date.now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * 节流
 * @example
 * ```
 * throttle<(progress: number) => void>(progress => {}, 40)
 * ```
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;
  if (wait === undefined) wait = 300;

  if (typeof func != 'function') {
    throw new Error('回调必须是函数');
  }

  if (options && isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return debounce(func, wait, {
    leading: leading,
    maxWait: wait,
    trailing: trailing
  });
}
/**
 * @desc 对象Key排序并生成key=value&
 * @param {Object} jsonObj 排序对象
 * @param {Boolean} isSort 是否排序
 */


function jsonSort(jsonObj) {
  var isSort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var arr = [];

  for (var _key in jsonObj) {
    if (jsonObj.hasOwnProperty(_key)) arr.push(_key);
  }

  isSort && arr.sort();
  var str = '';

  for (var i in arr) {
    // 过滤掉 Array.prototype.xxx进去的字段
    if (arr.hasOwnProperty(i)) {
      var value = '';

      if (Object.prototype.toString.call(jsonObj[arr[i]]) === '[object Object]') {
        value = JSON.stringify(jsonObj[arr[i]]);
      } else {
        value = jsonObj[arr[i]];
      }

      str += arr[i] + '=' + value + '&';
    }
  }

  return str.substr(0, str.length - 1);
}

function setStorage(key, value) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _config$expires = config.expires,
      expires = _config$expires === void 0 ? 0 : _config$expires;

  if (expires > 0) {
    console.log('设置setStorage', {
      __expires__: expires + Date.now(),
      __data__: value
    });
    return wx.setStorageSync(key, {
      __expires__: expires + Date.now(),
      __data__: value
    });
  }

  return wx.setStorageSync(key, value);
}

function removeStorage(key) {
  return wx.removeStorageSync(key);
}

function getStorage(key) {
  var msg = wx.getStorageSync(key);
  /** fix旧版本token处理 */

  if (key === 'token' && typeof msg === 'string') {
    var tokenExpireTime = wx.getStorageSync('token_expire_time');

    if (tokenExpireTime) {
      msg = ''; // 过期了

      console.log('旧方案token删除掉重新登录');
      removeStorage('token_expire_time');
      removeStorage('token');
      return msg;
    }
  }

  if (msg.__expires__) {
    if (msg.__expires__ > Date.now()) {
      return msg.__data__;
    } else {
      removeStorage(key); // 过期了，清除掉

      return ''; // getStorageSync拿不到默认返回''
    }
  } else {
    return msg;
  }
}
/**
 * 获取系统信息
 */


function getPlatformInfo() {
  var platform = wx.getSystemInfoSync();

  if (platform.model.includes('iPhone')) {
    platform.titleBarHeight = 44;
  } else {
    platform.titleBarHeight = 48;
  }

  platform.statusBarHeight = platform.statusBarHeight || 30;
  platform.navHeight = platform.titleBarHeight + platform.statusBarHeight; // iPhone X、iPhone XS

  var isIPhoneX = /iphone/.test(platform.model.toLocaleLowerCase()) && Number(platform.screenWidth) == 375 && Number(platform.screenHeight) == 812; // iPhone XS Max

  var isIPhoneXSMax = /iphone/.test(platform.model.toLocaleLowerCase()) && Number(platform.screenWidth) == 414 && Number(platform.screenHeight) == 896; // iPhone XR

  var isIPhoneXR = /iphone/.test(platform.model.toLocaleLowerCase()) && Number(platform.screenWidth) == 414 && Number(platform.screenHeight) == 896;

  if (isIPhoneX || isIPhoneXSMax || isIPhoneXR) {
    platform.isIphoneX = true;
  }

  console.log('platform', platform);
  return platform;
}

function getApiUrl(url) {
  if (!url) return url;

  try {
    var index = url.lastIndexOf('/');
    var api = url.substring(index + 1, url.length);
    return api;
  } catch (error) {
    console.error('getApiUrl error', error);
    return '';
  }
}

function fetchError(res, api, data) {
  var _res$config, _res$config2, _res$config3, _res$data, _res$data2, _res$data3;

  console.error("http_then ".concat(res.config.url, " "), {
    config: {
      baseUrl: res === null || res === void 0 ? void 0 : (_res$config = res.config) === null || _res$config === void 0 ? void 0 : _res$config.baseURL,
      url: api || '',
      method: res === null || res === void 0 ? void 0 : (_res$config2 = res.config) === null || _res$config2 === void 0 ? void 0 : _res$config2.method,
      data: res === null || res === void 0 ? void 0 : (_res$config3 = res.config) === null || _res$config3 === void 0 ? void 0 : _res$config3.data
    },
    data: data,
    message: (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.message,
    code: (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.code,
    now_ts: (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.now_ts
  });
}

function fetchSuccess(res, api) {// console.report(`http_then ${res.config.url} `, {
  //   config: {
  //     baseUrl: res?.config?.baseURL,
  //     url: api || '',
  //     method: res?.config?.method,
  //     data: res?.config?.data,
  //   },
  //   data: '响应数据从后端抓取',
  //   message: res.data?.message,
  //   code: res.data?.code,
  //   now_ts: res.data?.now_ts,
  // });
}

function httpRequestHandler(config) {
  var _account$id;

  var method = config.method;
  var token = getStorage('token');
  var account = getStorage('account');
  config.headers = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json, text/javascript, */*'
  }, config.headers), {}, {
    AUTHORIZATION: token,
    account_id: (_account$id = account === null || account === void 0 ? void 0 : account.id) !== null && _account$id !== void 0 ? _account$id : ''
  });

  if (config.method === 'get') {
    var _config$url;

    if (!config.params) config.params = {};
    config.params.token = token;

    if ((_config$url = config.url) !== null && _config$url !== void 0 && _config$url.includes('get_robot_accounts')) {
      // 写死token
      var freeToken = token || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTA3NTk1ODYxfQ.ON9D06DRTEFNbq7vXyvAdDJ388tHyu1TDNiaTf2b5Yo';
      config.params.token = freeToken;
      config.headers.AUTHORIZATION = freeToken;
    }
  } else if (config.method === 'post') {
    var _config$url2, _config$url4;

    if (!config.data) config.data = {}; // post请求在链接上加token

    var hashmarkIndex = (_config$url2 = config.url) === null || _config$url2 === void 0 ? void 0 : _config$url2.indexOf('#');

    if (hashmarkIndex !== -1) {
      var _config$url3;

      config.url = (_config$url3 = config.url) === null || _config$url3 === void 0 ? void 0 : _config$url3.slice(0, hashmarkIndex);
    }

    if (!((_config$url4 = config.url) !== null && _config$url4 !== void 0 && _config$url4.includes('weixin_mina'))) {
      var _config$url5;

      config.url += (((_config$url5 = config.url) === null || _config$url5 === void 0 ? void 0 : _config$url5.indexOf('?')) === -1 ? '?' : '&') + "token=".concat(token);
    }
  }

  var contentType = config.headers['Content-Type'] || config.headers['content-type'];

  if (contentType.includes('application/x-www-form-urlencoded')) {
    if (method === 'post') {
      config.data = qs__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(config.data);
    }
  }
}
/**
 * 秒转时间
 * @param {*} val 秒数
 * @param {*} type 'hms'返回时分秒 | 'ms'分秒 | 's'秒
 */


function secondToDate(val, type) {
  var h = Math.floor(val / 3600).toString();
  var m = Math.floor(val / 60 % 60).toString();
  var s = Math.floor(val % 60).toString();
  h = h.length < 2 ? "0".concat(h) : h;
  m = m.length < 2 ? "0".concat(m) : m;
  s = s.length < 2 ? "0".concat(s) : s;

  switch (type) {
    case 'hms':
      return h + ':' + m + ':' + s;

    case 'ms':
      return m + ':' + s;

    case 's':
      return s;

    default:
      return m + ':' + s;
  }
}
/** 字符串去除空格等 */


function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function dateFormat(data, mask, utc) {
  return Object(_libs_date_format__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(data, mask, utc);
}
/**
 * 时间戳转换
 * @param timestamp 时间戳
 * @param type  转换类型
 * @param connector 连接方式
 * @returns
 */


function timeStream(timestamp, type) {
  var connector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';
  var date = new Date(timestamp);
  var Y = date.getFullYear();
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var nowTime = new Date();
  var timeToString = nowTime.toString();

  switch (type) {
    // 年-月-日
    case 'YMD':
      return "".concat(Y).concat(connector).concat(M).concat(connector).concat(D);
    // 月-日

    case 'MD':
      return "".concat(M).concat(connector).concat(D);
    // 月-日 时：分

    case 'MD_HM':
      return "".concat(M).concat(connector).concat(D, " ").concat(h, ":").concat(m);
    // 月-日 时：分：秒

    case 'YMD_HMS':
      return "".concat(Y).concat(connector).concat(M).concat(connector).concat(D, " ").concat(h, ":").concat(m, ":").concat(s);
    // x年x月x日

    case 'CN_YMD':
      return "".concat(Y, "\u5E74").concat(M, "\u6708").concat(D, "\u65E5");
    // x年x月x日 时：分

    case 'CN_YMD_HM':
      return "".concat(Y, "\u5E74").concat(M, "\u6708").concat(D, "\u65E5 ").concat(h, ":").concat(m);
    // x月x日

    case 'CN_MD':
      return "".concat(M, "\u6708").concat(D, "\u65E5");
    // x月x日 时：分

    case 'CN_MD_HM':
      return "".concat(M, "\u6708").concat(D, "\u65E5 ").concat(h, ":").concat(m);
    // 时:分

    case 'hm':
      return "".concat(h, ":").concat(m);
    // 天数差

    case '-D':
      return Math.floor((timestamp * 1000 - Date.parse(timeToString)) / 1000 / 3600 / 24);
    // 小时差

    case '-H':
      return Math.ceil((timestamp * 1000 - Date.parse(timeToString)) / 1000 / 3600);

    case 'standard':
      return "".concat(Y).concat(connector).concat(M).concat(connector).concat(D, " ").concat(h, ":").concat(m, ":").concat(s);

    default:
      // 年-月-日 时:分
      return "".concat(Y).concat(connector).concat(M).concat(connector).concat(D, " ").concat(h, ":").concat(m);
  }
}

function isIos() {
  var system = wx.getPlatform().system;
  return /ios/gi.test(system);
}
/** 获取音频进度设置的响应实践，每种机型都不同 */


function getAudioResTime() {
  var ios = isIos();
  var phoneLevel = 30; // 机器性能越大越强

  if (wx.getPlatform().brand !== 'devtools') {
    phoneLevel = wx.getSystemInfoSync().benchmarkLevel;
  }

  var duration = 100; // ios的延迟是100，机子越垃圾，延迟越大

  if (!ios) {
    if (phoneLevel >= 30) {
      duration = 300;
    } else if (phoneLevel >= 25) {
      duration = 400;
    } else if (phoneLevel >= 15) {
      duration = 700;
    } else if (phoneLevel >= 10) {
      duration = 800;
    } else {
      duration = 1000;
    }

    console.log(duration);
  } else {
    if (phoneLevel >= 30) {
      duration = 100;
    } else {
      duration = 200;
    }
  }

  return duration;
}
/** 由于后端偷懒没整合数据 前端做 TODO 后端优化 */


function handleChannelContent(content) {
  try {
    content.fomate_daily_content.forEach(function (item) {
      var books = [];
      item.content.forEach(function (lecture) {
        if (lecture.object_type === 'lecture') {
          var index = books.findIndex(function (book) {
            return book.id === lecture.book_id;
          });

          if (index === -1) {
            books.push(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, content.book_content[lecture.book_id]), {}, {
              lectures: [lecture]
            }));
          } else {
            books[index].lectures.push(lecture);
          }
        } else {
          books.length && (item.exam = lecture);
        }
      });
      item.books = books;
    });
  } catch (error) {
    console.error(content);
  }

  return content;
}
/**
 * 获取url 最后一个/到?开头的数据
 * @param url
 */


function getUrlApiName(url) {
  try {
    var _url$match$, _url$match;

    return (_url$match$ = url === null || url === void 0 ? void 0 : (_url$match = url.match(/[^\/]+?(?=\?|$)/)) === null || _url$match === void 0 ? void 0 : _url$match[0]) !== null && _url$match$ !== void 0 ? _url$match$ : url;
  } catch (error) {
    console.warn(error);
    return url;
  }
}

var EntryTypeArray = ['home', //首页分享
'clock', //打卡转发
'clock_qrcode', //打卡图片里面的二维码 TODO 待配置
'share_book', //分享好书
'exam', //周测转发
'exam_qrcode', //周测分享图 TODO 待配置
'friend' //亲友卡
];

/**
 * 获取入口路径
 * @returns
 * ```
 * from: 分享来源(key)
 * home   首页分享
 * clock  打卡转发
 * clock_qrcode 打卡图片里面的二维码 TODO 待配置
 * share_book 分享好书
 * exam   周测转发
 * exam_qrcode  周测分享图 TODO 待配置
 * friend 亲友卡
 * ```
 */
function getEntry() {
  var _pages$0$options$from, _pages$0$options;

  var pages = getCurrentPages();
  var root = (_pages$0$options$from = pages === null || pages === void 0 ? void 0 : (_pages$0$options = pages[0].options) === null || _pages$0$options === void 0 ? void 0 : _pages$0$options.from) !== null && _pages$0$options$from !== void 0 ? _pages$0$options$from : 'home';
  console.log('root', root);
  return root;
}

function safeBottom() {
  var res = wx.getSystemInfoSync();
  return res.screenHeight - res.safeArea.bottom;
}
/**
 * @description: 是否关注公众号
 * @param {*}
 * @return {*}
 */


var checkHasSubscribed = /*#__PURE__*/function () {
  var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _wx$getStorageSync$id;

    var subscribe, account_id, res;
    return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            subscribe = wx.getStorageSync('setIsSubscribe') ? JSON.parse(Taro.getStorageSync('setIsSubscribe')) : false;

            if (!subscribe) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", subscribe);

          case 3:
            account_id = Number((_wx$getStorageSync$id = wx.getStorageSync('account').id) !== null && _wx$getStorageSync$id !== void 0 ? _wx$getStorageSync$id : '');
            _context.prev = 4;
            _context.next = 7;
            return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_6__[/* api_judge_subscribed */ "b"])(account_id);

          case 7:
            res = _context.sent;

            if (!res) {
              _context.next = 11;
              break;
            }

            wx.setStorageSync('setIsSubscribe', res.is_subscribed);
            return _context.abrupt("return", res.is_subscribed);

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](4);
            console.error('api_judge_subscribed error', _context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 13]]);
  }));

  return function checkHasSubscribed() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * @description: 图片质量压缩
 * @param {string} url 图片链接
 * @param {number} width 限定缩略图的宽最多为width
 * @param {string} format 新图的输出格式
 * @param {number} quality 新图的图片质量<取值范围是[1, 100]，默认75。>
 * @decs https://developer.qiniu.com/dora/api/basic-processing-images-imageview2
 */


function getPicture(url) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'normal';
  var quality = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 85;

  if (format === 'webp') {
    return "".concat(url, "?imageView2/format/webp/2/w/").concat(width, "/q/").concat(quality, "!");
  } else {
    return "".concat(url, "?imageView2/2/w/").concat(width, "/q/").concat(quality, "!");
  }
}



/***/ }),

/***/ "./src/utils/track.ts":
/*!****************************!*\
  !*** ./src/utils/track.ts ***!
  \****************************/
/*! exports provided: track */
/*! exports used: track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return track; });
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/login */ "./src/utils/login.ts");
/* harmony import */ var _weike_mp_earth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @weike/mp-earth */ "./node_modules/@weike/mp-earth/lib/index.js");
/* harmony import */ var _weike_mp_earth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_weike_mp_earth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");





/*
 * @Description: 埋点
 * @Date: 2021-08-26 16:00:12
 * @LastEditTime: 2021-09-14 17:25:27
 */





var Track = /*#__PURE__*/function () {
  function Track() {
    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Track);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "isInit", false);

    Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, "torDataService", null);
  }

  Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Track, [{
    key: "getTorDataService",
    value: function getTorDataService() {
      return this.torDataService;
    }
  }, {
    key: "setTorDataService",
    value: function setTorDataService(torDataService) {
      this.torDataService = torDataService;
    } // 玄武埋点初始化

  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this = this;

      if (this.isInit) return console.log('玄武已初始化');
      Object(_utils_login__WEBPACK_IMPORTED_MODULE_4__[/* getToken */ "a"])(function () {
        console.log('*******埋点初始化******');

        try {
          var id = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_6__[/* getStorage */ "h"])('account').id;
          _weike_mp_earth__WEBPACK_IMPORTED_MODULE_5___default.a.init(id, 'weike', 'wk.lhm001a.df0.d00a', {
            version: 'v1'
          });

          _this.setTorDataService(_weike_mp_earth__WEBPACK_IMPORTED_MODULE_5___default.a);

          _this.isInit = true;
        } catch (err) {
          console.error('玄武埋点初始化失败');
        }
      }, function () {});
    }
  }, {
    key: "setEvent",
    value: function setEvent(evt, params) {
      var _this2 = this;

      if (this.torDataService) {
        try {
          this.torDataService.emitAction(evt, Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, params), {}, {
            user_type: _store__WEBPACK_IMPORTED_MODULE_7__[/* ApiStore */ "a"].user.userType,
            from_page: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_6__[/* getEntry */ "e"])()
          }));
        } catch (e) {
          console.log('setEvent', e);
        }
      } else {
        setTimeout(function () {
          _this2.setEvent(evt, params);
        }, 500);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.torDataService && this.torDataService.destroy();
    }
  }]);

  return Track;
}();

var track = new Track();

/***/ })

}]);
//# sourceMappingURL=common.js.map