(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/personal/center-credit/center-credit"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/personal/center-credit/center-credit.tsx":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/personal/center-credit/center-credit.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/navbar/navbar */ "./src/components/navbar/navbar.tsx");
/* harmony import */ var _components_empty_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/empty/empty */ "./src/components/empty/empty.tsx");
/* harmony import */ var _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./center-credit.module.scss */ "./src/pages/personal/center-credit/center-credit.module.scss");
/* harmony import */ var _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);

/*
 * @Description: 学分中心
 * @Date: 2021-08-23 10:44:09
 * @LastEditTime: 2021-09-23 15:25:17
 */












var CenterCredit = function CenterCredit() {
  var _$instance$router, _$instance$router$par, _$instance$router2;

  var $instance = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["getCurrentInstance"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoading(false);
  }, []);

  var onNavigate = function onNavigate(key) {
    var map = {
      record: '/pages/personal/my-record-score/my-record-score',
      // 学分记录
      apply: '/pages/personal/withdrawal/withdrawal' // 提现

    };
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
      url: map[key]
    });
  };

  return loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      title: "\u5B66\u5206\u4E2D\u5FC3",
      setBgImage: "https://static-1253442168.file.myqcloud.com/xupload/20210721_bg1.png",
      noBorder: true,
      white: true
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
      className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header_bg_wrapper,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
        className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.flex,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          className: "".concat(_center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.flex, " ").concat(_center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.left_cell),
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "f"], {
            className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.avatar,
            src: ((_$instance$router = $instance.router) === null || _$instance$router === void 0 ? void 0 : _$instance$router.params.avatar) || _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getStorageSync('account').avatar_url || 'https://img.lycheer.net/avatar/4cba76bb40e4646f75e715310023cff4.png/avatar'
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
            className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
              className: "".concat(_center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.layout),
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "m"], {
                className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.strong,
                children: (_$instance$router$par = (_$instance$router2 = $instance.router) === null || _$instance$router2 === void 0 ? void 0 : _$instance$router2.params.credits_num) !== null && _$instance$router$par !== void 0 ? _$instance$router$par : ''
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "m"], {
                className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.title,
                children: "\u5B66\u5206"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
              className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.subtitle,
              children: "\u53D1\u8868\u7B14\u8BB0\u80FD\u83B7\u5F97\u5B66\u5206\u54E6~"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.button,
          onClick: function onClick() {
            return onNavigate('record');
          },
          hoverClass: "hover-class",
          children: "\u5B66\u5206\u8BB0\u5F55"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
      className: _center_credit_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.empty_container,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_empty_empty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        img: "https://static-1253442168.file.myqcloud.com/xupload/20210728_empty.png",
        desc: "\u8FD8\u5728\u5F00\u53D1\u4E2D\uFF0C\u514D\u8D39\u5151\u6362\u7684\u5546\u54C1\u9A6C\u4E0A\u5C31\u5230\u54E6\uFF5E"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (CenterCredit);

/***/ }),

/***/ "./src/pages/personal/center-credit/center-credit.module.scss":
/*!********************************************************************!*\
  !*** ./src/pages/personal/center-credit/center-credit.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header_bg_wrapper":"header_bg_wrapper--32_HY","left_cell":"left_cell--228Pa","content":"content--1nnm6","avatar":"avatar--26UWY","strong":"strong--TE8xg","layout":"layout--7yIqU","title":"title--1jDST","subtitle":"subtitle--2K7Pp","button":"button--1nIbw","content-wrapper":"content-wrapper--11KO9","empty_container":"empty_container--1QB-P","flex":"flex--7Gjzr","hover-class":"hover-class--3_ytS"};

/***/ }),

/***/ "./src/pages/personal/center-credit/center-credit.tsx":
/*!************************************************************!*\
  !*** ./src/pages/personal/center-credit/center-credit.tsx ***!
  \************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_center_credit_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./center-credit.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/personal/center-credit/center-credit.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_center_credit_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/personal/center-credit/center-credit', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/personal/center-credit/center-credit.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=center-credit.js.map