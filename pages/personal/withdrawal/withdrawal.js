(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/personal/withdrawal/withdrawal"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/personal/withdrawal/withdrawal.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/personal/withdrawal/withdrawal.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _withdrawal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withdrawal.module.scss */ "./src/pages/personal/withdrawal/withdrawal.module.scss");
/* harmony import */ var _withdrawal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_withdrawal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_personal_center_personal_center__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/personal_center/personal_center */ "./src/api/personal_center/personal_center.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/dialog/dialog */ "./src/components/dialog/dialog.tsx");
/* harmony import */ var _utils_css_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/css-module */ "./src/utils/css-module.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);



/*
 * @Description: 申请提现
 * @Date: 2021-08-23 15:58:30
 * @LastEditTime: 2021-09-08 16:16:40
 */












var Withdrawal = Object(_utils_css_module__WEBPACK_IMPORTED_MODULE_11__[/* CSSModule */ "a"])(function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      cash_amount = _useState2[0],
      setCashAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      withdraw_ing = _useState4[0],
      setWithdrawIng = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setWithdrawIng(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getStorageSync('setWithdrawIng'));
    getFindBalance();
  }, []); // 获取余额

  var getFindBalance = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_api_personal_center_personal_center__WEBPACK_IMPORTED_MODULE_7__[/* api_find_account_balance */ "b"])();

            case 3:
              res = _context.sent;

              if (res) {
                setCashAmount(res.cash_amount);
                setLoading(false);
              }

              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setLoading(false);
              console.error('getFindBalance error', _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getFindBalance() {
      return _ref.apply(this, arguments);
    };
  }(); // 余额流水记录


  var bindRecords = function bindRecords() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
      url: '/pages/personal/my-record-overage/my-record-overage'
    });
  }; // 申请提现按钮点击事件


  var bindApply = function bindApply() {
    if (cash_amount < 5000) {
      toast('需满50元才可以提现哦~');
    } else {
      if (withdraw_ing) {
        return;
      }

      getWithdrawCash();
    }
  }; // 请求提现接口


  var getWithdrawCash = function getWithdrawCash() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.login({
      success: function () {
        var _success = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
          return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return Object(_api_personal_center_personal_center__WEBPACK_IMPORTED_MODULE_7__[/* api_withdraw_cash */ "g"])(res.code);

                case 3:
                  toast('提现申请成功！我们将在三个工作日之内审核完成~');
                  setWithdrawIng(true);
                  getFindBalance();
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](0);
                  _utils_WX__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Toast(_context2.t0.message);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 8]]);
        }));

        function success(_x) {
          return _success.apply(this, arguments);
        }

        return success;
      }(),
      fail: function fail(err) {
        console.log(err);
      }
    });
  };

  var toast = function toast(msg) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
      title: msg,
      icon: 'none',
      duration: 3000
    });
  };

  return loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
    styleName: "apply-withdraw-container",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
      styleName: "apply-card-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "flex",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
            styleName: "icon-jifen1x",
            className: "icon icon-jifen1x"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
            styleName: "left-text",
            children: "\u6211\u7684\u4F59\u989D"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "flex",
          onClick: bindRecords,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
            styleName: "right-text",
            children: "\u4F59\u989D\u6D41\u6C34\u8BB0\u5F55"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
            styleName: "icon-jifenjiantou1x",
            className: "icon icon-jifenjiantou1x"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "credits",
        children: [cash_amount / 100, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
          styleName: "light",
          children: "\u5143"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "tags",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
          styleName: "tags-text",
          children: "\u5DF2\u63D0\u73B0\uFF1A50\u5143"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
          styleName: "tags-text",
          children: "\u7D2F\u8BA1\u6700\u9AD8\u53EF\u63D0\u73B0\uFF1A99\u5143"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "b"], {
        styleName: "apply-button ".concat(cash_amount >= 5000 && !withdraw_ing ? 'apply-button-allow' : 'apply-button-not'),
        onClick: bindApply,
        children: withdraw_ing ? '申请提现中' : '申请提现'
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
      styleName: "content-message",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "title",
        children: "\u63D0\u73B0\u89C4\u5219\uFF1A"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "info",
        children: "1\u3001\u9996\u6B21\u63D0\u73B0\u6EE150\u5143\u5373\u53EF\u7533\u8BF7\u63D0\u73B0\uFF0C\u7B2C\u4E8C\u6B21\u63D0\u73B0\u6EE149\u5373\u53EF\u7533\u8BF7\u63D0\u73B0\uFF1B"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "info",
        children: "2\u3001\u5355\u6B21\u63D0\u73B0\u6700\u9AD8\u4E3A50\u5143\uFF0C\u6700\u9AD8\u53EF\u7D2F\u8BA1\u63D0\u73B099\u5143\uFF1B"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "info",
        children: "3\u3001\u542C\u4E66\u8BA1\u5212\u8BFE\u7A0B\u4E3A104\u5929\u8BFE\u7A0B\uFF0C\u6BCF\u65E5\u8FD4\u73B00.99\uFF0C\u56E0\u6B64\u8FD4\u73B0\u4F59\u989D\u6700\u9AD8\u4E3A102\u5143\uFF0C\u6700\u7EC8\u80FD\u63D0\u73B099\u5143\uFF1B"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "info",
        children: "4\u3001\u6BCF\u65E5\u53EA\u80FD\u63D0\u73B0\u4E00\u6B21\uFF1B"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "info",
        children: "5\u3001\u5982\u6709\u7591\u95EE\u8BF7\u6DFB\u52A0\u5BA2\u670D\uFF1Alihuatingshu001\u3002"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      value: value,
      setValue: setValue,
      showClose: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "wd-dialog",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-title",
          children: "\u63D0\u73B0\u7533\u8BF7"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-subtitle",
          children: "\u63D0\u73B0\u989D\u5EA6\uFF1A50\u5143 "
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-subtitle",
          children: "\u5DF2\u7D2F\u8BA1\u63D0\u73B0\uFF1A50\u5143 "
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-subtitle",
          children: "\u6700\u7EC8\u53EF\u63D0\u73B0\uFF1A49\u5143"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-subtitle",
          children: "\uFF08\u6700\u9AD8\u8FD4\u73B099\u5143\uFF0C\u56E0\u6B64\u672C\u6B21\u63D0\u73B0\u4E3A49\u5143\uFF09"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-subtitle",
          children: "\u624B\u7EED\u8D39\uFF1A49*0.6%=0.29\u5143 "
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-subtitle",
          children: "\u5B9E\u9645\u5230\u8D26\uFF1A48.71\u5143"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-subtitle margintop36",
          children: "\u6211\u4EEC\u5C06\u57283\u4E2A\u5DE5\u4F5C\u65E5\u5185\u5BA1\u6838\u60A8\u7684\u63D0\u73B0\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          styleName: "wd-dialog-btn",
          children: "\u786E\u8BA4\u63D0\u73B0"
        })]
      })
    })]
  });
}, _withdrawal_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a);
/* harmony default export */ __webpack_exports__["a"] = (Withdrawal);

/***/ }),

/***/ "./src/pages/personal/withdrawal/withdrawal.module.scss":
/*!**************************************************************!*\
  !*** ./src/pages/personal/withdrawal/withdrawal.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"flex":"flex--1JwsU","apply-withdraw-container":"apply-withdraw-container--rBdFs","apply-card-wrapper":"apply-card-wrapper--1CJb1","credits":"credits--30110","tags":"tags--8TIMG","tags-text":"tags-text--3Y7r3","icon-jifen1x":"icon-jifen1x--3MKp8","light":"light--3QToy","left-text":"left-text--2xoqj","apply-button":"apply-button--2Sp5l","apply-button-allow":"apply-button-allow--nyNKT","apply-button-not":"apply-button-not--2oRch","right-text":"right-text--1YZyj","icon-jifenjiantou1x":"icon-jifenjiantou1x--PmWFk","title":"title--237GN","info":"info--1snqN","error-icon":"error-icon--1nm5z","error-text":"error-text--3Zu7x","wd-dialog":"wd-dialog--1iXbB","wd-dialog-title":"wd-dialog-title--2ioWJ","wd-dialog-subtitle":"wd-dialog-subtitle--1cPF3","margintop36":"margintop36--MiDEq","wd-dialog-btn":"wd-dialog-btn--1poIe"};

/***/ }),

/***/ "./src/pages/personal/withdrawal/withdrawal.tsx":
/*!******************************************************!*\
  !*** ./src/pages/personal/withdrawal/withdrawal.tsx ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_withdrawal_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./withdrawal.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/personal/withdrawal/withdrawal.tsx");


var config = {"navigationBarTitleText":"申请提现"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_withdrawal_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/personal/withdrawal/withdrawal', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/personal/withdrawal/withdrawal.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=withdrawal.js.map