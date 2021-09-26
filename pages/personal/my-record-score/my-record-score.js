(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/personal/my-record-score/my-record-score"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/personal/my-record-score/my-record-score.tsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/personal/my-record-score/my-record-score.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-record-score.module.scss */ "./src/pages/personal/my-record-score/my-record-score.module.scss");
/* harmony import */ var _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_personal_center_personal_center__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/personal_center/personal_center */ "./src/api/personal_center/personal_center.ts");
/* harmony import */ var _components_empty_empty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/empty/empty */ "./src/components/empty/empty.tsx");
/* harmony import */ var _components_load_more_load_more__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/load-more/load-more */ "./src/components/load-more/load-more.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);




/*
 * @Description: 学分记录
 * @Date: 2021-08-24 10:28:29
 * @LastEditTime: 2021-08-31 11:00:37
 */













var MyRecordScore = function MyRecordScore() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      offest = _useState4[0],
      setOffest = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      is_last_page = _useState6[0],
      setIsLastPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState7, 2),
      is_load_interface = _useState8[0],
      setIsLoadInterface = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState9, 2),
      account_flows = _useState10[0],
      setAccountFlows = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getFindAccountFlows();
  }, []);

  var getFindAccountFlows = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_api_personal_center_personal_center__WEBPACK_IMPORTED_MODULE_9__[/* api_find_account_flows */ "c"])(offest);

            case 3:
              res = _context.sent;

              if (res) {
                setAccountFlows([].concat(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(account_flows), Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(res.account_flows)));
                setIsLastPage(res.is_last_page);
                setIsLoadInterface(false);
                setLoading(false);
              }

              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setLoading(false);
              console.error('getFindAccountFlows error', _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getFindAccountFlows() {
      return _ref.apply(this, arguments);
    };
  }(); // 加载下一页数据


  var nextDataPage = function nextDataPage() {
    if (is_load_interface || is_last_page) return;
    offest = offest + 20;
    setOffest(offest);
    setIsLoadInterface(true);
    getFindAccountFlows();
  };

  return loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
      className: _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.top_line
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* ScrollView */ "k"], {
      className: _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.scroll_view_container,
      scrollY: true,
      onScrollToLower: nextDataPage,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
        className: _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.unit_record_container,
        children: account_flows.length ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
          children: [account_flows.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              className: "".concat(_my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.item_content, " ").concat(_my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.flex),
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.flex,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                  className: "icon icon-xuefen ".concat(_my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.item_icon)
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                    className: _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.item_title,
                    children: item.remark
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                    className: _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.item_date,
                    children: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_7__[/* timeStream */ "s"])(item.create_ts * 1000)
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.point,
                children: (item.account_change_type === 1 ? '+' : '-') + item.amount + '分'
              })]
            }, index);
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: _my_record_score_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bottom_line,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_load_more_load_more__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
              is_last_page: is_last_page
            })
          })]
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_empty_empty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {})
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MyRecordScore);

/***/ }),

/***/ "./src/pages/personal/my-record-score/my-record-score.module.scss":
/*!************************************************************************!*\
  !*** ./src/pages/personal/my-record-score/my-record-score.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"unit_record_container":"unit_record_container--3aTAW","top_line":"top_line--2vgcF","item_icon":"item_icon--2Mdcs","item_content":"item_content--2Gbi3","item_title":"item_title--QPlYG","item_date":"item_date--3CpeC","scroll_view_container":"scroll_view_container--1GDYP","point":"point--184M7","bottom_line":"bottom_line--3QAsA","flex":"flex--2bCBM"};

/***/ }),

/***/ "./src/pages/personal/my-record-score/my-record-score.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/personal/my-record-score/my-record-score.tsx ***!
  \****************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_my_record_score_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./my-record-score.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/personal/my-record-score/my-record-score.tsx");


var config = {"navigationBarTitleText":"学分记录"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_my_record_score_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/personal/my-record-score/my-record-score', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/personal/my-record-score/my-record-score.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=my-record-score.js.map