(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/exam/exam"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/exam/exam.tsx":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/exam/exam.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _api_clock_clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/clock/clock */ "./src/api/clock/clock.ts");
/* harmony import */ var _api_combined_api_combined_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/combined_api/combined_api */ "./src/api/combined_api/combined_api.ts");
/* harmony import */ var _api_week_exam_week_exam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/week_exam/week_exam */ "./src/api/week_exam/week_exam.ts");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_exam_list_exam_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/exam-list/exam-list */ "./src/pages/exam/components/exam-list/exam-list.tsx");
/* harmony import */ var _components_lectures_lectures__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/lectures/lectures */ "./src/pages/exam/components/lectures/lectures.tsx");
/* harmony import */ var _components_share_share__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/share/share */ "./src/pages/exam/components/share/share.tsx");
/* harmony import */ var _exam_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./exam.scss */ "./src/pages/exam/exam.scss");
/* harmony import */ var _exam_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_exam_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);






/*
 * @Author: linzhihai
 * @Date: 2021-08-24 14:34:41
 * @LastEditTime: 2021-09-14 10:08:36
 * @Description:
 */



















var ExamPage = function ExamPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(true),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState3, 2),
      hasAnswer = _useState4[0],
      setHasAnswer = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState5, 2),
      objectId = _useState6[0],
      setObjectId = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState7, 2),
      formId = _useState8[0],
      setFormId = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])([]),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState9, 2),
      lectureList = _useState10[0],
      setLectureList = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])({}),
      _useState12 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState11, 2),
      bookContent = _useState12[0],
      setBookContent = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])([]),
      _useState14 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState13, 2),
      formFields = _useState14[0],
      setFormFields = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])({}),
      _useState16 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState15, 2),
      fieldValues = _useState16[0],
      setFieldValues = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])({}),
      _useState18 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState17, 2),
      errorTips = _useState18[0],
      setErrorTips = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(),
      _useState20 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState19, 2),
      channelId = _useState20[0],
      setChannelId = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(0),
      _useState22 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState21, 2),
      weekNum = _useState22[0],
      setWeekNum = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState24 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState23, 2),
      showDialog = _useState24[0],
      setShowDialog = _useState24[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__["useShareAppMessage"])(function (res) {
    console.log('useShareAppMessage', res);

    if (res.target) {
      _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].setEvent('lh_exam_sh_ck');
      return res.target.dataset.shareInfo;
    } else {
      return _store__WEBPACK_IMPORTED_MODULE_10__[/* ApiStore */ "a"].common.defaultShareInfo;
    }
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__["useDidShow"])(function () {
    _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].setEvent('lh_exam_show');
  });
  var route = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_15__["useEffect"])(function () {
    if (route.params) {
      var _route$params = route.params,
          channel_id = _route$params.channel_id,
          week_num = _route$params.week_num; //week_num === 0是先导课 先导课是没有周测的

      if (channel_id && Number(week_num) >= 1) {
        //获取本周课程列表
        getLectureList(channel_id, week_num);
        setChannelId(Number(channel_id !== null && channel_id !== void 0 ? channel_id : ''));
        setWeekNum(Number(week_num !== null && week_num !== void 0 ? week_num : ''));
      }
    }
  }, []);

  var getLectureList = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(object_id, week_num) {
      var res, list, form_id;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setObjectId(object_id);
              _context.prev = 1;
              _context.next = 4;
              return Object(_api_week_exam_week_exam__WEBPACK_IMPORTED_MODULE_8__[/* api_week_lecture_info */ "d"])(object_id, week_num);

            case 4:
              res = _context.sent;

              if (res) {
                //object_type === 'lecture'为音频课程 === 'form'为表单
                list = res.week_lecture_info_list.filter(function (item) {
                  return item.object_type === 'lecture';
                }); //为每个课程加上音频播放状态

                list.forEach(function (item) {
                  item.playStatus = 'pause';
                });
                console.log('week_lecture_info_list', list);

                if (list.length > 0) {
                  setLectureList(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(list));
                }

                setBookContent(res.book_content); //获取本周小测内容

                form_id = res.week_lecture_info_list[res.week_lecture_info_list.length - 1].object_id;
                getExamInfo(form_id);
                setFormId(form_id);
              } else {
                console.warn('未获取到周测回顾列表');
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('getLectureList error', _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function getLectureList(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var getExamInfo = /*#__PURE__*/function () {
    var _ref2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(form_id) {
      var account_id, res, form_fields, field_values;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              account_id = _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default.a.getStorageSync('account').id;
              _context2.prev = 1;
              _context2.next = 4;
              return Object(_api_combined_api_combined_api__WEBPACK_IMPORTED_MODULE_7__[/* api_combined_api */ "a"])({
                _input: {
                  'form.form_with_fields.get': {
                    form_id: form_id
                  },
                  'form.user_records.list_get': {
                    form_id: form_id,
                    account_id: account_id
                  }
                }
              });

            case 4:
              res = _context2.sent;

              if (res) {
                form_fields = res['form.form_with_fields.get'].data.form_fields;
                setFormFields(form_fields);
                setLoading(false); //判断是否提交过

                if (res['form.user_records.list_get'].data.records) {
                  field_values = res['form.user_records.list_get'].data.records[0].field_values;
                  setFieldValues(field_values);
                  setHasAnswer(true);
                }
              }

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.error('getExamInfo error', _context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function getExamInfo(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var bindSubmitTest = /*#__PURE__*/function () {
    var _ref3 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(e) {
      var isCheck, res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!hasAnswer) {
                _context3.next = 4;
                break;
              }

              _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].setEvent('lh_exam_vi_s');
              setShowDialog(true);
              return _context3.abrupt("return");

            case 4:
              changeTextarea(e);
              isCheck = check();

              if (isCheck) {
                _context3.next = 9;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default.a.showToast({
                title: '请答完题目再提交测试哦',
                icon: 'none'
              });
              return _context3.abrupt("return");

            case 9:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default.a.showToast({
                title: '提交中...',
                icon: 'loading',
                duration: 3000
              });
              _context3.prev = 10;
              _context3.next = 13;
              return Object(_api_week_exam_week_exam__WEBPACK_IMPORTED_MODULE_8__[/* api_week_exam_form */ "a"])({
                record_in: {
                  form_id: formId,
                  field_values: fieldValues
                }
              }, channelId);

            case 13:
              res = _context3.sent;

              if (res) {
                getClockIn();
                setShowDialog(true);
                setHasAnswer(true);
              }

              _context3.next = 20;
              break;

            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](10);
              console.error('bindSubmitTest', _context3.t0);

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[10, 17]]);
    }));

    return function bindSubmitTest(_x4) {
      return _ref3.apply(this, arguments);
    };
  }(); // textarea 校验
  // textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 bindsubmit。


  var changeTextarea = function changeTextarea(e) {
    var value = e.detail.value;
    var field_answer = {};

    for (var key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        field_answer[key] = {
          answer: value[key]
        };
      }
    }

    var field_values = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, fieldValues), field_answer);

    fieldValues = field_values;
    setFieldValues(field_values);
  }; //表单组件值变化


  var bindChange = function bindChange(e) {
    var value = e.detail.value.trim();
    var _e$target$dataset$fie = e.target.dataset.field,
        id = _e$target$dataset$fie.id,
        field_type = _e$target$dataset$fie.field_type;

    if (!value) {
      if (fieldValues[id]) {
        delete fieldValues[id];
      }
    } else {
      var field_answer = field_type === 'single_choice' ? Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, id, {
        selected: [value]
      }) : Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, id, {
        answer: value
      });
      fieldValues = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, fieldValues), field_answer);
    }

    setFieldValues(fieldValues);
    check(e.target.dataset.field);
  };
  /**
   * @description: 校验提交是否满足条件
   * @return {*}
   */


  var check = function check(field) {
    var tips = {};

    var checkValue = function checkValue(data) {
      var id = data.id,
          field_type = data.field_type,
          validators = data.validators;

      if (fieldValues[id] === undefined || fieldValues[id].answer === '') {
        tips = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, tips), Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, id, Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, field_type === 'single_choice' ? 'selected' : 'answer', field_type === 'single_choice' ? '请选择' : '请输入')));
      } else {
        //多行文本输入 要校验值是否合法
        if ((field_type === 'multi_input' || field_type === 'text_area') && Object.keys(validators).length > 0) {
          var val = fieldValues[id].answer;
          var min_length = validators.min_length,
              max_length = validators.max_length;

          if (val.length < min_length || val.length > max_length) {
            var msg = "\u8BF7\u8F93\u5165".concat(min_length, "\u5230").concat(max_length, "\u4E2A\u5B57");
            tips = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, tips), Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, id, {
              answer: [msg]
            }));
            return;
          }
        }

        if (tips[id]) {
          delete tips[id];
        }
      }
    };

    if (field) {
      tips = errorTips;
      checkValue(field);
    } else {
      var checkList = formFields.filter(function (item) {
        return item.field_type === 'single_choice' || item.field_type === 'multi_input' || item.field_type === 'text_area';
      }); //校验每一项的值是否合法

      checkList.forEach(function (item) {
        checkValue(item);
      });
    }

    console.log('tip', tips);
    setErrorTips(tips);
    return Object.keys(tips).length === 0;
  }; // 请求每日打卡接口


  var getClockIn = /*#__PURE__*/function () {
    var _ref6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].setEvent('lh_exam_dot_ck');
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default.a.showLoading();
              _context4.prev = 2;
              _context4.next = 5;
              return Object(_api_clock_clock__WEBPACK_IMPORTED_MODULE_6__[/* api_clock_in */ "a"])({
                object_id: "".concat(objectId),
                channel_id: Number(channelId),
                object_type: 'form'
              });

            case 5:
              res = _context4.sent;
              _context4.next = 12;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](2);
              console.error('getClockIn', _context4.t0);
              _utils_WX__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].Toast('打卡失败');

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 8]]);
    }));

    return function getClockIn() {
      return _ref6.apply(this, arguments);
    };
  }();

  return loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
      className: "test-review-container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
        className: "week-review-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
          className: "header flex",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
            className: "trc-tip"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
            className: "trc-text",
            children: "\u4E00\u5468\u5B66\u4E60\u56DE\u987E"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_lectures_lectures__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
          lectureList: lectureList,
          bookContent: bookContent
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* Form */ "e"], {
        onSubmit: bindSubmitTest,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
          className: "week-review-wrapper",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
            className: "header flex",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
              className: "trc-tip"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
              className: "trc-text",
              children: "\u4E00\u5468\u5C0F\u6D4B"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_exam_list_exam_list__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
            formFields: formFields,
            fieldValues: fieldValues,
            errorTips: errorTips,
            onChange: bindChange,
            hasAnswer: hasAnswer
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* Button */ "b"], {
          hoverClass: "footer-button-active",
          className: "footer-button",
          formType: "submit",
          children: hasAnswer ? '查看分数' : '提交测试'
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
          className: "footer-msg",
          children: "\u5173\u6CE8\u68A8\u82B1\u542C\u4E66\u516C\u4F17\u53F7\uFF0C\u56DE\u590D\u201C\u7B54\u6848\u201D\u5373\u53EF\u83B7\u5F97\u5468\u6D4B\u7B54\u6848"
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__["jsx"])(_components_share_share__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
      show: showDialog,
      closeEvent: setShowDialog,
      channelId: channelId,
      weekNum: weekNum,
      formId: formId
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ExamPage);

/***/ }),

/***/ "./src/api/combined_api/combined_api.ts":
/*!**********************************************!*\
  !*** ./src/api/combined_api/combined_api.ts ***!
  \**********************************************/
/*! exports provided: api_combined_api */
/*! exports used: api_combined_api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_combined_api; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");
/*
 * @Author: linzhihai
 * @Date: 2021-08-20 16:26:00
 * @LastEditTime: 2021-08-25 16:57:24
 * @Description:
 */

/** 周测内容，待优化 */


/**
 * 获取周测内容
 * @param {*} params
 */
function api_combined_api(params) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* post */ "b"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].gw, "/combined_api/combined_api.get"), params);
}

/***/ }),

/***/ "./src/api/week_exam/week_exam.ts":
/*!****************************************!*\
  !*** ./src/api/week_exam/week_exam.ts ***!
  \****************************************/
/*! exports provided: api_week_lecture_info, api_week_exam_form, api_week_exam_form_share, api_week_exam_mina_share */
/*! exports used: api_week_exam_form, api_week_exam_form_share, api_week_exam_mina_share, api_week_lecture_info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return api_week_lecture_info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_week_exam_form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_week_exam_form_share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return api_week_exam_mina_share; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/http */ "./src/utils/http.ts");
/*
 * @Author: linzhihai
 * @Date: 2021-08-20 16:26:00
 * @LastEditTime: 2021-08-26 14:44:49
 * @Description:周测接口
 */


/**
 * 获取周测页面的本周音频列表
 * @param channel_id 专栏id
 * @param week_num 第几周
 * @returns
 */
function api_week_lecture_info(channel_id, week_num) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/week_exam.week_lecture_info.get"), {
    channel_id: channel_id,
    week_num: week_num
  });
}
/**
 * 提交周测内容
 * @param {*} params
 */

function api_week_exam_form(params, channel_id) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* post */ "b"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/week_exam.week_exam_form.post?channel_id=").concat(channel_id), params);
}
/**
 * @param channel_id 专栏id
 * @param week_num 第几周
 * @param form_id 表单id
 */

function api_week_exam_form_share(channel_id, week_num, form_id) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/week_exam.week_exam_form_share.get"), {
    channel_id: channel_id,
    week_num: week_num,
    form_id: form_id
  });
}
function api_week_exam_mina_share(channel_id, week_num) {
  return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* get */ "a"])("".concat(_utils_http__WEBPACK_IMPORTED_MODULE_0__[/* url */ "c"].base, "/week_exam.week_exam_mina_share.get"), {
    channel_id: channel_id,
    week_num: week_num
  });
}

/***/ }),

/***/ "./src/components/share-dialog/share-dialog.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/share-dialog/share-dialog.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"share-dialog-img":"share-dialog-img--1gDSG","share-button-wrapper":"share-button-wrapper--eV2d3","share-button":"share-button--1aPgk","share-button-active":"share-button-active--2VqM9","button-item":"button-item--3sB1t","actived":"actived--D933E","actived-active":"actived-active--269JU","icon-weixinfenxiang1x":"icon-weixinfenxiang1x--xXzgW","icon-guanbidanchuang1x":"icon-guanbidanchuang1x--1JQqY","icon-pengyouquanfenxiang1x":"icon-pengyouquanfenxiang1x--3FiFU","share-wrapper":"share-wrapper--2wzbH","clock-share-card":"clock-share-card--35mLm","light-icon":"light-icon--1-iOi","clock-title":"clock-title--1nln7","medal-icon":"medal-icon--2B6kJ","modal-mask":"modal-mask--1gFxz","modal-content":"modal-content--18Tnv","main-content":"main-content--37FO5","modal-title":"modal-title--2zz7y","animal":"animal--34h0j"};

/***/ }),

/***/ "./src/components/share-dialog/share-dialog.tsx":
/*!******************************************************!*\
  !*** ./src/components/share-dialog/share-dialog.tsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_css_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/css-module */ "./src/utils/css-module.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _dialog_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog */ "./src/components/dialog/dialog.tsx");
/* harmony import */ var _share_dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share-dialog.module.scss */ "./src/components/share-dialog/share-dialog.module.scss");
/* harmony import */ var _share_dialog_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_share_dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








var ShareDialog = Object(_utils_css_module__WEBPACK_IMPORTED_MODULE_0__[/* CSSModule */ "a"])(function (props) {
  var value = props.value,
      setValue = props.setValue,
      fr = props.fr,
      randomShareWord = props.randomShareWord,
      _props$cardHeight = props.cardHeight,
      cardHeight = _props$cardHeight === void 0 ? 70 : _props$cardHeight,
      shareInfo = props.shareInfo,
      cardUrl = props.cardUrl,
      shareText = props.shareText;

  var bindSaveImage = function bindSaveImage() {
    _utils_track__WEBPACK_IMPORTED_MODULE_1__[/* track */ "a"].setEvent("lh_".concat(fr, "_sa_ck"));
    _utils_WX__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].saveImage(cardUrl);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    value: value,
    setValue: setValue,
    backgroundColor: "transparent",
    showClose: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
      styleName: "share-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "clock-share-card",
        children: [fr === 'clock' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Block */ "a"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "f"], {
            styleName: "light-icon",
            src: "https://static-1253442168.file.myqcloud.com/xupload/20210918_guang.png"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "f"], {
            styleName: "medal-icon",
            src: "https://static-1253442168.file.myqcloud.com/xupload/20210831_xunzhang.png"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
            styleName: "clock-title",
            children: randomShareWord
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "f"], {
          styleName: "share-dialog-img",
          mode: "heightFix",
          src: cardUrl
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        styleName: "share-button-wrapper ",
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          hoverClass: "share-button-active",
          styleName: "share-button",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
            styleName: "icon-weixinfenxiang1x",
            className: "icon icon-weixinfenxiang1x"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "b"], {
            styleName: "button-item",
            openType: "share",
            "data-shareInfo": shareInfo,
            onClick: function onClick() {
              return setValue(false);
            },
            children: shareText || '转发好友'
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          hoverClass: "actived-active",
          styleName: "share-button actived",
          onClick: bindSaveImage,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
            styleName: "icon-pengyouquanfenxiang1x",
            className: "icon icon-pengyouquanfenxiang1x"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "b"], {
            styleName: "button-item",
            children: "\u4FDD\u5B58\u56FE\u7247"
          })]
        })]
      })]
    })
  });
}, _share_dialog_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a);
/* harmony default export */ __webpack_exports__["a"] = (ShareDialog);

/***/ }),

/***/ "./src/pages/exam/components/exam-list/exam-list.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/exam/components/exam-list/exam-list.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/pages/exam/components/exam-list/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/*
 * @Author: linzhihai
 * @Date: 2021-08-24 18:19:04
 * @LastEditTime: 2021-09-14 09:57:12
 * @Description:
 */







var ExamList = function ExamList(props) {
  var formFields = props.formFields,
      fieldValues = props.fieldValues,
      errorTips = props.errorTips,
      hasAnswer = props.hasAnswer,
      onChange = props.onChange;

  var bindChange = function bindChange(e) {
    _utils_track__WEBPACK_IMPORTED_MODULE_3__[/* track */ "a"].setEvent('lh_exam_ra_ck');
    onChange(e);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
    className: "exam",
    children: formFields.length > 0 && formFields.map(function (field, index) {
      var _fieldValues$field$id3, _errorTips$field$id, _errorTips$field$id2;

      return (field.field_type === 'single_choice' || field.field_type === 'multi_input' || field.field_type === 'text_area') && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
        className: "exam-box",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: "content-title",
          children: field.field_params.label
        }), field.field_type === 'single_choice' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* RadioGroup */ "i"], {
          onChange: bindChange,
          "data-field": field,
          children: field.field_params.data.choices.map(function (item, i) {
            var _fieldValues$field$id, _fieldValues$field$id2;

            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Label */ "g"], {
              className: "exam-radio",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Radio */ "h"], {
                value: item.value,
                checked: item.value === (fieldValues === null || fieldValues === void 0 ? void 0 : (_fieldValues$field$id = fieldValues[field.id]) === null || _fieldValues$field$id === void 0 ? void 0 : _fieldValues$field$id.selected[0]),
                color: ""
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Label */ "g"], {
                className: "radio"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
                className: "exam-radio-label",
                style: 'color: ' + (item.value === (fieldValues === null || fieldValues === void 0 ? void 0 : (_fieldValues$field$id2 = fieldValues[field.id]) === null || _fieldValues$field$id2 === void 0 ? void 0 : _fieldValues$field$id2.selected[0]) ? '#9B6ADA' : '#777A8B'),
                children: item.label
              })]
            }, i);
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* ScrollView */ "k"], {
          className: "scroll-view-container",
          scrollY: true,
          children: (field.field_type === 'multi_input' || field.field_type === 'text_area') && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Textarea */ "n"], {
            className: "textarea",
            value: (_fieldValues$field$id3 = fieldValues[field.id]) === null || _fieldValues$field$id3 === void 0 ? void 0 : _fieldValues$field$id3.answer,
            "data-field": field,
            maxlength: 1000,
            onBlur: bindChange,
            name: "".concat(field.id)
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: "error",
          children: field.field_type === 'single_choice' ? errorTips === null || errorTips === void 0 ? void 0 : (_errorTips$field$id = errorTips[field.id]) === null || _errorTips$field$id === void 0 ? void 0 : _errorTips$field$id.selected : errorTips === null || errorTips === void 0 ? void 0 : (_errorTips$field$id2 = errorTips[field.id]) === null || _errorTips$field$id2 === void 0 ? void 0 : _errorTips$field$id2.answer
        }), hasAnswer && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
            className: "mask"
          })
        })]
      }, index);
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ExamList);

/***/ }),

/***/ "./src/pages/exam/components/exam-list/index.scss":
/*!********************************************************!*\
  !*** ./src/pages/exam/components/exam-list/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/exam/components/lectures/index.scss":
/*!*******************************************************!*\
  !*** ./src/pages/exam/components/lectures/index.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/exam/components/lectures/lectures.tsx":
/*!*********************************************************!*\
  !*** ./src/pages/exam/components/lectures/lectures.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/pages/exam/components/lectures/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);



/*
 * @Author: linzhihai
 * @Date: 2021-08-24 18:19:04
 * @LastEditTime: 2021-08-31 16:54:25
 * @Description:
 */






 // const backgroundAudioManager = Taro.getBackgroundAudioManager();




var icons = {
  loading: 'icon-zhoucejiazai1x',
  pause: 'icon-zhoucebofang1x',
  play: 'icon-zhoucezanting1x'
};
var Lectures = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__[/* observer */ "b"])(function (props) {
  var lectureList = props.lectureList,
      bookContent = props.bookContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      lectures = _useState2[0],
      setLectures = _useState2[1];

  var playIndex = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(-1); // 当前播放索引

  var studyDotInterval = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var playInfo = _store__WEBPACK_IMPORTED_MODULE_5__[/* ApiStore */ "a"].player.playingInfo;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      /** 退出页面时清除定时器 */
      clearInterval(studyDotInterval.current);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setPlayStatus(playInfo.status);
  }, [playInfo.status]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (lectureList.length) {
      setLectures(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(lectureList));
    }
  }, [lectureList]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (_store__WEBPACK_IMPORTED_MODULE_5__[/* ApiStore */ "a"].player.playingState === 'ended') {
      playNextLecture(); // 播放下一首
    }
  }, [_store__WEBPACK_IMPORTED_MODULE_5__[/* ApiStore */ "a"].player.playingState]);
  /**
   * @description: 点击播放暂停
   * @param {*} e
   * @return {*}
   */

  var bindAudio = function bindAudio(item) {
    _utils_track__WEBPACK_IMPORTED_MODULE_8__[/* track */ "a"].setEvent('lh_exam_au_ck');
    console.log('bindAudio', Object(mobx__WEBPACK_IMPORTED_MODULE_7__[/* toJS */ "q"])(playInfo), item);

    if (playInfo.object_id === item.object_id && ['play', 'loading'].includes(playInfo.status)) {
      _store__WEBPACK_IMPORTED_MODULE_5__[/* ApiStore */ "a"].player.goPause();
    } else {
      playLecture(item);
    }
  };
  /**
   * 音频播放
   */


  var playLecture = function playLecture(item) {
    var index = lectures.findIndex(function (lecture) {
      return item.id === lecture.id;
    });
    lectures[index].playStatus = 'loading';
    playIndex.current = index;
    setLectures(lectures);
    var author = item.author,
        anchor = item.anchor,
        unread = item.unread,
        unlock = item.unlock,
        object_type = item.object_type,
        book_id = item.book_id,
        title = item.title,
        object_id = item.object_id,
        channel_id = item.channel_id;
    var _item$object_info = item.object_info,
        length = _item$object_info.length,
        audio = _item$object_info.audio;
    _store__WEBPACK_IMPORTED_MODULE_5__[/* ApiStore */ "a"].player.setPlayInfo({
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
      cover_url: bookContent[book_id].cover_url
    });
    _store__WEBPACK_IMPORTED_MODULE_5__[/* ApiStore */ "a"].player.goPlay();
  };

  var setPlayStatus = function setPlayStatus(status) {
    console.log('setPlayStatus', status, playIndex.current);
    var lecs = lectures; // 第一次进入且在播放中，处理从其他页面播放背景音乐进入情况

    if (status === 'play' && playIndex.current === -1) {
      lecs = lectureList; // 首次进入，该函数与setLectures是异步，所以这样处理

      console.log('lectureslectures', JSON.parse(JSON.stringify(lectures)));
      var index = lecs.findIndex(function (item) {
        return item.object_id === playInfo.object_id;
      });
      playIndex.current = index > -1 ? index : playIndex.current;
    }

    if (playIndex.current > -1) {
      //清除之前音频状态
      var _index = lecs.findIndex(function (item, i) {
        return item.playStatus !== 'pause' && i !== playIndex.current;
      });

      if (_index > -1) {
        lecs[_index].playStatus = 'pause';
      } //改变当前播放音频状态


      lecs[playIndex.current].playStatus = status;
      setLectures(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(lecs));
    }
  };
  /**
   * 结束后播放下一条音频
   */


  var playNextLecture = function playNextLecture() {
    var next = playIndex.current + 1;

    if (next < lectureList.length) {
      var lecture = lectureList[next];
      playLecture(lecture);
    } else {
      //播完所有课程 更改最后一节课状态
      lectures[lectures.length - 1].playStatus = 'pause';
      setLectures(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(lectures));
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: lectures.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
        className: "lecture",
        onClick: function onClick() {
          return bindAudio(item);
        },
        style: {
          color: item.playStatus !== 'pause' ? '#9B6ADA' : '#1b1c21'
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
          className: "lecture-content-title",
          children: "\u7B2C".concat(item.day_num, "\u5929\uFF1A").concat(item.title)
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
          className: "icon ".concat(icons[item.playStatus], " play-icon"),
          style: {
            color: item.playStatus !== 'pause' ? '#9B6ADA' : '#1b1c21'
          }
        })]
      }, index);
    })
  });
});
/* harmony default export */ __webpack_exports__["a"] = (Lectures);

/***/ }),

/***/ "./src/pages/exam/components/share/share.tsx":
/*!***************************************************!*\
  !*** ./src/pages/exam/components/share/share.tsx ***!
  \***************************************************/
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
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_week_exam_week_exam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/week_exam/week_exam */ "./src/api/week_exam/week_exam.ts");
/* harmony import */ var _components_share_dialog_share_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/share-dialog/share-dialog */ "./src/components/share-dialog/share-dialog.tsx");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);




/*
 * @Author: linzhihai
 * @Date: 2021-08-24 18:19:04
 * @LastEditTime: 2021-08-30 16:47:09
 * @Description:
 */







var ExamShare = function ExamShare(props) {
  var channelId = props.channelId,
      weekNum = props.weekNum,
      formId = props.formId,
      show = props.show,
      closeEvent = props.closeEvent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      cardUrl = _useState2[0],
      setCardUrl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      bookUrlList = _useState4[0],
      setBookUrlList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      showShareDialog = _useState6[0],
      setShowShareDialog = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    title: '我正在梨花听书学习，本周学完2本书',
    path: '/pages/activity/activity?from=exam',
    imageUrl: ''
  }),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState7, 2),
      shareModel = _useState8[0],
      setShareModel = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (show) {
      getShareCard();
    } else {
      setShowShareDialog(false);
    }
  }, [show]);
  /**
   * @description: 获取邀请卡链接
   * @param {*}
   * @return {*}
   */

  var getShareCard = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, card;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading(); //此处请求不用loading 因为本就是一个弹窗

              _context.prev = 1;
              _context.next = 4;
              return Object(_api_week_exam_week_exam__WEBPACK_IMPORTED_MODULE_5__[/* api_week_exam_form_share */ "b"])(channelId, weekNum, formId);

            case 4:
              res = _context.sent;

              if (!(res && res.card_url)) {
                _context.next = 13;
                break;
              }

              setCardUrl(res.card_url);
              setBookUrlList(res.book_url_list);
              _context.next = 10;
              return Object(_api_week_exam_week_exam__WEBPACK_IMPORTED_MODULE_5__[/* api_week_exam_mina_share */ "c"])(channelId, weekNum);

            case 10:
              card = _context.sent;

              if (card && card.card_url) {
                setShareModel({
                  title: '我正在梨花听书学习，本周学完2本书',
                  path: "/pages/activity/activity?from=exam",
                  imageUrl: card.card_url
                });
                setShowShareDialog(true);
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();

            case 13:
              _context.next = 20;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              console.error('getShareCard', _context.t0);
              _utils_WX__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].Toast(_context.t0.msg || '网络异常，请稍后重试');
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 15]]);
    }));

    return function getShareCard() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_share_dialog_share_dialog__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    value: showShareDialog,
    setValue: closeEvent,
    shareInfo: shareModel,
    cardUrl: cardUrl,
    fr: "exam"
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ExamShare);

/***/ }),

/***/ "./src/pages/exam/exam.scss":
/*!**********************************!*\
  !*** ./src/pages/exam/exam.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/exam/exam.tsx":
/*!*********************************!*\
  !*** ./src/pages/exam/exam.tsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_exam_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./exam.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/exam/exam.tsx");


var config = {"navigationBarTitleText":"每周回顾与测试"};

_node_modules_babel_loader_lib_index_js_exam_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_exam_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/exam/exam', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/exam/exam.tsx","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=exam.js.map