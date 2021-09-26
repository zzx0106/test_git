(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/personal/my-notes/my-notes"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/personal/my-notes/my-notes.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/personal/my-notes/my-notes.tsx ***!
  \**********************************************************************************/
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
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_personal_center_personal_center__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/personal_center/personal_center */ "./src/api/personal_center/personal_center.ts");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-notes.module.scss */ "./src/pages/personal/my-notes/my-notes.module.scss");
/* harmony import */ var _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _my_notes_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-notes.scss */ "./src/pages/personal/my-notes/my-notes.scss");
/* harmony import */ var _my_notes_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_my_notes_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_empty_empty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/empty/empty */ "./src/components/empty/empty.tsx");
/* harmony import */ var _components_load_more_load_more__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/load-more/load-more */ "./src/components/load-more/load-more.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);




/*
 * @Description: 我的笔记
 * @Date: 2021-08-23 16:40:08
 * @LastEditTime: 2021-09-03 15:32:22
 */















var MyNotes = function MyNotes() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      personal_discuss_list = _useState2[0],
      setPersonal_discuss_list = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState7, 2),
      is_last_page = _useState8[0],
      setIsLastPage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState9, 2),
      is_load_interface = _useState10[0],
      setIsLoadInterface = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getPersonalDiscuss();
  }, []);

  var getPersonalDiscuss = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, list;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_api_personal_center_personal_center__WEBPACK_IMPORTED_MODULE_7__[/* api_personal_discuss */ "e"])(page);

            case 3:
              res = _context.sent;

              if (res) {
                list = [].concat(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(personal_discuss_list), Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(res.personal_discuss_list));
                list.forEach(function (item) {
                  item.noMore = item.noMore || false;
                });
                setPersonal_discuss_list(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(list));
                setIsLastPage(res.is_last_page);
                setIsLoadInterface(false);
                getNotesHeight(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(list));
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setLoading(false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getPersonalDiscuss() {
      return _ref.apply(this, arguments);
    };
  }(); // 上拉加载数据


  var nextDataPage = function nextDataPage() {
    if (is_load_interface || is_last_page) return;
    setIsLoadInterface(true);
    page = page * 1 + 1;
    setPage(page);
    getPersonalDiscuss();
  };

  var bindRoute = function bindRoute(object_id) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
      url: "/pages/detail/detail?object_id=".concat(object_id)
    });
  }; // 显示更多


  var bindShowMore = function bindShowMore(id) {
    personal_discuss_list.forEach(function (item) {
      if (id === item.id) {
        item.noMore = !item.noMore;
      }
    });
    setPersonal_discuss_list(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(personal_discuss_list));
  };
  /**
   * 获取content 内容高度来判断是否显示 查看更多
   * @param list 列表数据
   */


  var getNotesHeight = function getNotesHeight(list) {
    setTimeout(function () {
      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.createSelectorQuery();
      query.selectAll('.note-info').boundingClientRect(function (rect) {
        list.forEach(function (item, index) {
          //已渲染过的html重新计算高度有问题全<=48
          if (!item.height) {
            item.height = rect[index].height;
          }
        });
        setPersonal_discuss_list(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(list));
        setLoading(false);
      }).exec();
    }, 50);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: [loading && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
      style: {
        opacity: !loading ? '1' : '0'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* ScrollView */ "k"], {
        className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.scroll_view_container,
        scrollY: true,
        onScrollToLower: nextDataPage,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.my_notes_container,
          children: personal_discuss_list.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.item_content,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.item_header,
                onClick: function onClick() {
                  return bindRoute(item.object_id);
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                  className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.flex,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                    className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.flex,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                      className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.title,
                      children: item.channel_name
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                      className: "icon icon-gerenzhongxinjiantou1x"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                    className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.light_text,
                    children: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_9__[/* timeStream */ "s"])(item.create_ts * 1000, 'CN_YMD')
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                  className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.light_text,
                  children: item.book_name
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: "'note-info' ".concat(item.height && item.height > 48 ? 'note-info-hide' : ''),
                style: {
                  display: item.noMore ? 'block' : '-webkit-box',
                  lineHeight: '24px'
                },
                children: item.content
              }), item.height && item.height > 48 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
                className: _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.footer_more,
                onClick: function onClick() {
                  return bindShowMore(item.id);
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                  children: item.noMore ? '收起' : '查看更多'
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
                  className: "".concat(_my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.arrow_down, " ").concat(item.noMore ? _my_notes_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.rote : ''),
                  src: "https://static-1253442168.file.myqcloud.com/xupload/20210608_down.png"
                })]
              })]
            }, index);
          })
        }), !personal_discuss_list.length ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_empty_empty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_load_more_load_more__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
          is_last_page: is_last_page
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MyNotes);

/***/ }),

/***/ "./src/pages/personal/my-notes/my-notes.module.scss":
/*!**********************************************************!*\
  !*** ./src/pages/personal/my-notes/my-notes.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"scroll_view_container":"scroll_view_container--3orV0","my_notes_container":"my_notes_container--3WzSN","item_content":"item_content--Ov09j","item_header":"item_header--21ix5","icon-gengduo":"icon-gengduo--3gWF7","flex":"flex--22mV6","title":"title--248R8","light_text":"light_text--1KxRX","note_info":"note_info--22E7o","note_info_hide":"note_info_hide--2WxdG","footer_more":"footer_more--3zMKF","rote":"rote--_-i9a","arrow_down":"arrow_down--W2vCp","bottom_line":"bottom_line--3zFfV"};

/***/ }),

/***/ "./src/pages/personal/my-notes/my-notes.scss":
/*!***************************************************!*\
  !*** ./src/pages/personal/my-notes/my-notes.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/personal/my-notes/my-notes.tsx":
/*!**************************************************!*\
  !*** ./src/pages/personal/my-notes/my-notes.tsx ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_my_notes_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./my-notes.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/personal/my-notes/my-notes.tsx");


var config = {"navigationBarTitleText":"我的笔记"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_my_notes_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/personal/my-notes/my-notes', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/personal/my-notes/my-notes.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=my-notes.js.map