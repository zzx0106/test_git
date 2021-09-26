(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine-course/mine-course"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/mine-course/mine-course.tsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/mine-course/mine-course.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_lecture_list_lecture_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/lecture-list/lecture-list */ "./src/components/lecture-list/lecture-list.tsx");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _components_player_float_player_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/player-float/player-float */ "./src/components/player-float/player-float.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/*
 * @Description: 我的课程
 * @Date: 2021-08-23 14:47:58
 * @LastEditTime: 2021-09-23 17:41:03
 */










var MineCourse = function MineCourse() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {}, []);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useShareAppMessage"])(function (e) {
    var _getStorage, _getStorage$id;

    var cardShareInfo = {
      title: '我送你一张梨花听书7天VIP卡，快点击领取吧～',
      path: "/pages/activity/activity?from=friend&user_type=presented&channel_id=".concat((_getStorage = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_4__[/* getStorage */ "h"])('setChannelId')) !== null && _getStorage !== void 0 ? _getStorage : '', "&sender_id=").concat((_getStorage$id = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_4__[/* getStorage */ "h"])('account').id) !== null && _getStorage$id !== void 0 ? _getStorage$id : ''),
      imageUrl: 'https://static-1253442168.file.myqcloud.com/xupload/20210923_share-card_eE30n8c.png'
    };
    return e.from === 'menu' ? _store__WEBPACK_IMPORTED_MODULE_5__[/* ApiStore */ "a"].common.defaultShareInfo : cardShareInfo;
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_lecture_list_lecture_list__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_player_float_player_float__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {})]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MineCourse);

/***/ }),

/***/ "./src/pages/mine-course/mine-course.tsx":
/*!***********************************************!*\
  !*** ./src/pages/mine-course/mine-course.tsx ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_mine_course_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./mine-course.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/mine-course/mine-course.tsx");


var config = {"navigationBarTitleText":"我的课程"};

_node_modules_babel_loader_lib_index_js_mine_course_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_mine_course_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/mine-course/mine-course', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/mine-course/mine-course.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=mine-course.js.map