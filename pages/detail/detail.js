(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/detail/detail.tsx":
/*!*********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/detail/detail.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _api_clock_clock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/clock/clock */ "./src/api/clock/clock.ts");
/* harmony import */ var _api_content_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/content/content */ "./src/api/content/content.ts");
/* harmony import */ var _components_follow_remind_follow_remind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/follow-remind/follow-remind */ "./src/components/follow-remind/follow-remind.tsx");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/loading/loading */ "./src/components/loading/loading.tsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/config/config */ "./src/config/config.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_clock_clock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clock/clock */ "./src/pages/detail/components/clock/clock.tsx");
/* harmony import */ var _components_introduce_introduce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/introduce/introduce */ "./src/pages/detail/components/introduce/introduce.tsx");
/* harmony import */ var _components_knowledge_knowledge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/knowledge/knowledge */ "./src/pages/detail/components/knowledge/knowledge.tsx");
/* harmony import */ var _components_manuscript_manuscript__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/manuscript/manuscript */ "./src/pages/detail/components/manuscript/manuscript.tsx");
/* harmony import */ var _components_note_list_note_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/note-list/note-list */ "./src/pages/detail/components/note-list/note-list.tsx");
/* harmony import */ var _components_plaly_progress_play_progress__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/plaly-progress/play-progress */ "./src/pages/detail/components/plaly-progress/play-progress.tsx");
/* harmony import */ var _components_play_directory_play_directory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/play-directory/play-directory */ "./src/pages/detail/components/play-directory/play-directory.tsx");
/* harmony import */ var _components_play_rate_play_rate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/play-rate/play-rate */ "./src/pages/detail/components/play-rate/play-rate.tsx");
/* harmony import */ var _components_play_title_play_title__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/play-title/play-title */ "./src/pages/detail/components/play-title/play-title.tsx");
/* harmony import */ var _components_send_note_send_note__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/send-note/send-note */ "./src/pages/detail/components/send-note/send-note.tsx");
/* harmony import */ var _components_share_share__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/share/share */ "./src/pages/detail/components/share/share.tsx");
/* harmony import */ var _detail_module_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./detail.module.scss */ "./src/pages/detail/detail.module.scss");
/* harmony import */ var _detail_module_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_detail_module_scss__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _utils_css_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/utils/css-module */ "./src/utils/css-module.ts");
/* harmony import */ var _components_play_control_play_control__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/play-control/play-control */ "./src/pages/detail/components/play-control/play-control.tsx");
/* harmony import */ var _components_guide_dialog_guide_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/guide-dialog/guide-dialog */ "./src/pages/detail/components/guide-dialog/guide-dialog.tsx");
/* harmony import */ var _api_account_account__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/api/account/account */ "./src/api/account/account.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__);






























 // import { getNodes } from '@/utils/tools-plus';






var Detail = Object(_utils_css_module__WEBPACK_IMPORTED_MODULE_29__[/* CSSModule */ "a"])(function (props) {
  var _router$params$object, _channelInfo$name, _contentInfo$lecture_, _contentInfo$cover_ur, _contentInfo$lecture_2, _contentInfo$manu_mes, _contentInfo$knowledg, _contentInfo$book_nam, _contentInfo$manu_mes2, _contentInfo$course_b, _contentInfo$cover_ur2, _contentInfo$cover_ur3, _contentInfo$clock_to, _contentInfo$clock_st, _contentInfo$is_cashb, _contentInfo$cover_ur4, _contentInfo$lecture_3, _contentInfo$manu_mes3;

  var router = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(true),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];
  /** 是否关注公众号 */


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(false),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState3, 2),
      is_subscribed = _useState4[0],
      setIsSubscribed = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState5, 2),
      contentInfo = _useState6[0],
      setContentInfo = _useState6[1];

  var pageIndex = Object(react__WEBPACK_IMPORTED_MODULE_16__["useRef"])(1);

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(true),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState7, 2),
      hasMore = _useState8[0],
      setHasMore = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])([]),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState9, 2),
      newDiscusses = _useState10[0],
      setNewDiscusses = _useState10[1]; // 笔记列表


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])([]),
      _useState12 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState11, 2),
      myDiscusses = _useState12[0],
      setMyDiscusses = _useState12[1]; // 我的笔记列表


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(0),
      _useState14 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState13, 2),
      totalCount = _useState14[0],
      setTotalCount = _useState14[1]; // 笔记总数


  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(true),
      _useState16 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState15, 2),
      notesLoading = _useState16[0],
      setNotesLoading = _useState16[1]; // 写笔记的loading


  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(''),
      _useState18 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState17, 2),
      fromView = _useState18[0],
      setFromView = _useState18[1]; // 目录锚点


  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(0),
      _useState20 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState19, 2),
      unread = _useState20[0],
      setUnread = _useState20[1]; // 是否已听


  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])([]),
      _useState22 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState21, 2),
      fomateDailyContent = _useState22[0],
      setFomateDailyContent = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(false),
      _useState24 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState23, 2),
      sendSucc = _useState24[0],
      setSendSucc = _useState24[1]; // 通知笔记组件发表成功


  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])((_router$params$object = router.params.object_id) !== null && _router$params$object !== void 0 ? _router$params$object : ''),
      _useState26 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState25, 2),
      object_id = _useState26[0],
      setObjectId = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(),
      _useState28 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState27, 2),
      channelInfo = _useState28[0],
      setChannelInfo = _useState28[1];

  var discussId = Object(react__WEBPACK_IMPORTED_MODULE_16__["useRef"])(0); // 笔记id

  var playNow = Object(react__WEBPACK_IMPORTED_MODULE_16__["useRef"])(false); // 是否立即播放

  var shareInfo = Object(react__WEBPACK_IMPORTED_MODULE_16__["useRef"])({
    title: '想成为高情商、有才识、有气质的智慧女性吗？',
    path: '/pages/activity/activity',
    //若无path 默认跳转分享页
    imageUrl: 'https://static-1253442168.file.myqcloud.com/xupload/20210610_shareImg.png' //若无imageUrl 截图当前页面

  });
  var channel_id = router.params.channel_id || Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__[/* getStorage */ "h"])('setChannelId') || _config_config__WEBPACK_IMPORTED_MODULE_9__[/* configDefault */ "b"].channel_id;
  /** 初始化 */

  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(function () {
    handleSubscribe();
  }, []);
  /** lectureId（object_id）发生变化，获取课程数据 */

  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(function () {
    console.log('object_id change', object_id);
    if (object_id) getLectureContent(object_id);
  }, [object_id]);
  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(function () {
    console.log('contentInfo', contentInfo);

    if (contentInfo) {
      setLoading(false); // setTimeout(() => {
      //   getNodes();
      // }, 3000);
    }
  }, [contentInfo]);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__["useDidShow"])(function () {
    _utils_track__WEBPACK_IMPORTED_MODULE_33__[/* track */ "a"].setEvent('lh_play_show');
  });

  var handleSubscribe = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var subscribe, _wx$getStorageSync$id, account_id, res;

      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              subscribe = wx.getStorageSync('setIsSubscribe');

              if (!subscribe) {
                _context.next = 6;
                break;
              }

              setIsSubscribed(subscribe);
              _context.next = 12;
              break;

            case 6:
              account_id = Number((_wx$getStorageSync$id = wx.getStorageSync('account').id) !== null && _wx$getStorageSync$id !== void 0 ? _wx$getStorageSync$id : '');
              _context.next = 9;
              return Object(_api_account_account__WEBPACK_IMPORTED_MODULE_32__[/* api_judge_subscribed */ "b"])(account_id);

            case 9:
              res = _context.sent;
              wx.setStorageSync('setIsSubscribe', res.is_subscribed);
              setIsSubscribed(res.is_subscribed);

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.error('handleSubscribe', _context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function handleSubscribe() {
      return _ref.apply(this, arguments);
    };
  }();
  /** 请求当前课程学习内容 */


  var getLectureContent = /*#__PURE__*/function () {
    var _ref2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(lecture_id) {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              console.log('router', router, object_id);

              if (!object_id) {
                _context2.next = 10;
                break;
              }

              _context2.next = 5;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_6__[/* api_content_get */ "c"])({
                channel_id: channel_id,
                lecture_id: lecture_id
              });

            case 5:
              res = _context2.sent;
              console.log('res', res);
              contentHandler(res);
              getDiscussesList();
              getChannelDaily();
            // 获取专栏列表

            case 10:
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              console.log('getLectureContent error', _context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function getLectureContent(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var contentHandler = function contentHandler(res) {
    var manu_message = res.daily_content.text.replace(/\<img/gi, "<img class=\"rich-img\""); //文稿内容 正则给img标签增加class

    var lecture_name = res.daily_content.title; // 课程名称

    var cover_url = res.book_content.cover_url; // 书籍封面

    var anchor = res.daily_content.anchor; // 主播

    var author = res.daily_content.author; // 作者

    var course_book_introduction = res.daily_content.course_book_introduction; // 书籍极少

    var book_name = res.book_content.book_name; // 书籍名称

    var knowledge_map = res.daily_content.knowledge_map; // 知识导图

    var clock_total = res.clock_total; // 总打卡次数

    var clock_status = res.clock_status; // 打卡状态 0今日未打卡 1今日已打卡 2已获取全部返现，禁止打卡

    var is_cashback_user = res.is_cashback_user; // 课程名称

    setContentInfo({
      cover_url: cover_url,
      lecture_name: lecture_name,
      manu_message: manu_message,
      anchor: anchor,
      author: author,
      course_book_introduction: course_book_introduction,
      book_name: book_name,
      knowledge_map: knowledge_map,
      clock_total: clock_total,
      clock_status: clock_status,
      is_cashback_user: is_cashback_user
    });
  };
  /** 获取笔记列表接口 */


  var getDiscussesList = /*#__PURE__*/function () {
    var _ref3 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var res, myDiscussesList, discusses;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if (object_id) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return");

            case 3:
              if (totalCount > 0 && newDiscusses.length < totalCount) {
                setHasMore(true);
              }

              console.log('pageIndex.current', pageIndex.current);
              _context3.next = 7;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_6__[/* api_content_discussmessage_get */ "b"])({
                content_id: object_id,
                limit: 10,
                page: pageIndex.current
              });

            case 7:
              res = _context3.sent;
              setTotalCount(res.total_count);
              myDiscussesList = [];
              discusses = [];

              if (pageIndex.current === 1 && res.my_discusses.length) {
                // 自己发的笔记永远显示在第一个 并且会覆盖以前的笔记
                myDiscussesList = res.my_discusses.slice(0, 1);
                myDiscussesList[0].myDiscusses = true;
                setMyDiscusses(myDiscussesList);
              }

              if (res.discusses.length) {
                pageIndex.current += 1;
                discusses = [].concat(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(newDiscusses), Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(res.discusses));
                console.log('discusses.length - 1 === res.total_count', discusses.length - 1, res.total_count); // 如果有自己的笔记，那么笔记总数需要-1

                console.log('hasmore', discusses.length, res.total_count);

                if (discusses.length === res.total_count) {
                  setHasMore(false);
                }

                console.log('discusses', discusses, discusses.length);
                setNewDiscusses(discusses);
              } else {
                setHasMore(false);
              }

              _context3.next = 19;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              console.error('getDiscussesList error', _context3.t0);
              setHasMore(false);

            case 19:
              _context3.prev = 19;
              setNotesLoading(false);
              return _context3.finish(19);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 15, 19, 22]]);
    }));

    return function getDiscussesList() {
      return _ref3.apply(this, arguments);
    };
  }();
  /** 请求课程列表 */


  var getChannelDaily = /*#__PURE__*/function () {
    var _ref4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      var channel, localChannel, remotChannel;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              localChannel = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__[/* getStorage */ "h"])('set_fomate_daily_content');

              if (!localChannel) {
                _context4.next = 5;
                break;
              }

              channel = localChannel;
              _context4.next = 10;
              break;

            case 5:
              _context4.next = 7;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_6__[/* api_channel_daily_content_get */ "a"])({
                channel_id: channel_id
              });

            case 7:
              remotChannel = _context4.sent;
              channel = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__[/* handleChannelContent */ "j"])(remotChannel);
              Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__[/* setStorage */ "q"])('set_fomate_daily_content', channel);

            case 10:
              console.log('channelInfo', channel);
              getAudioMessage(channel.fomate_daily_content);
              setChannelInfo(channel.channel_info);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getChannelDaily() {
      return _ref4.apply(this, arguments);
    };
  }();
  /** 获取音频信息 */


  var getAudioMessage = function getAudioMessage(fomate_daily_content) {
    var lectureIndex = -1;
    fomate_daily_content.forEach(function (item) {
      var _item$books;

      (_item$books = item.books) === null || _item$books === void 0 ? void 0 : _item$books.forEach(function (book) {
        // 目录折叠面板 传给目录组件之前就全局赋值
        book.isShowPanel = true; // 优化性能，搜索到对应id就不走下面

        if (lectureIndex === -1) {
          lectureIndex = book.lectures.findIndex(function (lecture) {
            return Number(object_id) === lecture.object_id;
          });

          if (lectureIndex !== -1) {
            var lecture = book.lectures[lectureIndex];
            var title = lecture.title,
                anchor = lecture.anchor,
                author = lecture.author,
                book_id = lecture.book_id,
                object_type = lecture.object_type,
                _unread = lecture.unread,
                unlock = lecture.unlock,
                _object_id = lecture.object_id;
            var _lecture$object_info = lecture.object_info,
                audio = _lecture$object_info.audio,
                length = _lecture$object_info.length,
                id = _lecture$object_info.id;
            _store__WEBPACK_IMPORTED_MODULE_10__[/* ApiStore */ "a"].player.setPlayInfo({
              duration: length,
              src: audio,
              object_id: _object_id,
              status: 'pause',
              title: title,
              anchor: anchor,
              author: author,
              book_id: book_id,
              object_type: object_type,
              channel_id: channel_id,
              unread: _unread,
              unlock: unlock,
              cover_url: book.cover_url
            });
            console.log('setFromView', "id_to_".concat(book.id), book);

            if (playNow.current) {
              _store__WEBPACK_IMPORTED_MODULE_10__[/* ApiStore */ "a"].player.goPlay();
              playNow.current = false;
            }

            setFromView("id_to_".concat(book.id));
            setUnread(lecture.unread);
          }
        }
      });
    });
    console.log('fomate_daily_content', fomate_daily_content);
    setFomateDailyContent(fomate_daily_content);
  };
  /** 切换目录课程 */


  var onLectureEvent = function onLectureEvent(lectureId) {
    console.log('onLectureEvent', lectureId);
    setObjectId(lectureId);
    playNow.current = true;
  };
  /** 笔记组件点赞监听 */


  var onNoteLikeEvent = /*#__PURE__*/function () {
    var _ref5 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(item) {
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              discussId.current = item.id;
              console.log('--->', item.id, item.is_liked);
              _context5.next = 5;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_6__[/* api_like_discussmessage_post */ "d"])({
                content_id: object_id,
                discuss_id: item.id,
                is_liked: !item.is_liked
              });

            case 5:
              commonDiscussEvent(item, !item.is_liked);
              _context5.next = 12;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              console.error('点赞失败');
              wx.showToast({
                title: !item.is_liked ? '点赞失败' : '取消点赞失败',
                icon: 'none'
              });

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 8]]);
    }));

    return function onNoteLikeEvent(_x2) {
      return _ref5.apply(this, arguments);
    };
  }(); // 公共函数 处理点赞 取消点赞


  var commonDiscussEvent = function commonDiscussEvent(item, type) {
    // 给自己点赞
    if (item.myDiscusses) {
      myDiscusses.forEach(function (dis) {
        if (discussId.current === dis.id) {
          dis.is_liked = type;
          dis.like_count = type ? dis.like_count + 1 : dis.like_count - 1;
        }
      });
      setMyDiscusses(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(myDiscusses));
    } else {
      // 给用户点赞
      newDiscusses.forEach(function (dis) {
        if (discussId.current === dis.id) {
          dis.is_liked = type;
          dis.like_count = type ? dis.like_count + 1 : dis.like_count - 1;
        }
      });
      setNewDiscusses(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(newDiscusses));
    }
  };
  /** 请求发表笔记接口 */


  var onEmitNoteSendEvent = /*#__PURE__*/function () {
    var _ref6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(value, success) {
      var res, _data;

      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default.a.showLoading();
              _context6.next = 4;
              return Object(_api_content_content__WEBPACK_IMPORTED_MODULE_6__[/* api_write_discussmessage_post */ "g"])({
                content_id: object_id,
                message: value
              });

            case 4:
              res = _context6.sent;
              _data = res;
              _data.like_count = 0;
              _data.myDiscusses = true;
              setMyDiscusses([_data]);
              setSendSucc(true);
              getPublishNoteCredits(success);
              _context6.next = 18;
              break;

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default.a.hideLoading();
              console.error(_context6.t0);
              _utils_WX__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].Toast("\u53D1\u5E03\u7B14\u8BB0\u5931\u8D25: ".concat(_context6.t0.msg));

            case 18:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 13]]);
    }));

    return function onEmitNoteSendEvent(_x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }();
  /** 请求发表笔记获积分 */


  var getPublishNoteCredits = /*#__PURE__*/function () {
    var _ref7 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(success) {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return Object(_api_clock_clock__WEBPACK_IMPORTED_MODULE_5__[/* api_credits_get */ "c"])({
                channel_id: channel_id,
                lecture_id: object_id
              });

            case 3:
              res = _context7.sent;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default.a.hideLoading();
              _store__WEBPACK_IMPORTED_MODULE_10__[/* ApiStore */ "a"].common.setNoteDialog(false);
              success(true);

              if (!(_store__WEBPACK_IMPORTED_MODULE_10__[/* ApiStore */ "a"].common.noteType === 'edit')) {
                _context7.next = 10;
                break;
              }

              _utils_WX__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].Toast({
                title: '编辑成功！',
                icon: 'success'
              }); // TODO: 显示笔记发表成功的图片弹窗

              return _context7.abrupt("return");

            case 10:
              if (!res.got_credits) {
                _context7.next = 12;
                break;
              }

              return _context7.abrupt("return", _utils_WX__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].Toast("\u7B14\u8BB0\u63D0\u4EA4\u6210\u529F\uFF0C\u83B7\u5F97".concat(res.got_credits, "\u5B66\u5206")));

            case 12:
              _utils_WX__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].Toast({
                title: '笔记发表成功',
                icon: 'success'
              });
              _context7.next = 21;
              break;

            case 15:
              _context7.prev = 15;
              _context7.t0 = _context7["catch"](0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_14___default.a.hideLoading();
              console.error(_context7.t0);
              _utils_WX__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].Toast('获取积分失败！');
              success(false);

            case 21:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 15]]);
    }));

    return function getPublishNoteCredits(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();
  /** 修改打卡状态 */


  var setClockStatus = Object(react__WEBPACK_IMPORTED_MODULE_16__["useCallback"])(function (status) {
    if (contentInfo) {
      console.log('setClockStatus', contentInfo);
      setContentInfo(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, contentInfo), {}, {
        clock_status: status
      }));
    }
  }, [contentInfo]);
  /** 下拉触底 */

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__["useReachBottom"])(function () {
    console.log('useReachBottom');
    getDiscussesList();
  });

  var setShareInfo = function setShareInfo(e) {
    console.log('setShareInfo', e);
    shareInfo.current = e;
  };
  /** 分享监听 */


  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_14__["useShareAppMessage"])(function (res) {
    var _res$target, _res$target$dataset;

    console.log('useShareAppMessage res', res, res === null || res === void 0 ? void 0 : (_res$target = res.target) === null || _res$target === void 0 ? void 0 : (_res$target$dataset = _res$target.dataset) === null || _res$target$dataset === void 0 ? void 0 : _res$target$dataset.shareInfo);

    if (res.target) {
      // res.target.dataset.shareInfo.from ? track.setEvent('lh_share_sh_ck') : track.setEvent('lh_play_sh_ck');
      if (res.target.dataset.shareInfo.from) {
        _utils_track__WEBPACK_IMPORTED_MODULE_33__[/* track */ "a"].setEvent('lh_share_cl_ck');
        Object(_api_clock_clock__WEBPACK_IMPORTED_MODULE_5__[/* api_share_clock */ "d"])().catch(function () {}); // 分享打卡事件上报
      } else {
        _utils_track__WEBPACK_IMPORTED_MODULE_33__[/* track */ "a"].setEvent('lh_share_sh_ck');
      }

      return res.target.dataset.shareInfo;
    } else {
      _utils_track__WEBPACK_IMPORTED_MODULE_33__[/* track */ "a"].setEvent('lh_play_sh_ck');
      return shareInfo.current;
    }
  });
  return loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_loading_loading__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
    styleName: "scroll-view-container",
    children: [!is_subscribed && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* Block */ "a"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_follow_remind_follow_remind__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {})
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
      styleName: "play-box-container",
      children: [contentInfo && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_play_title_play_title__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"], Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, contentInfo)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
        styleName: "play-content-wrapper",
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* CustomWrapper */ "d"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_play_directory_play_directory__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"], {
            object_id: object_id,
            fromView: fromView,
            channelTitle: (_channelInfo$name = channelInfo === null || channelInfo === void 0 ? void 0 : channelInfo.name) !== null && _channelInfo$name !== void 0 ? _channelInfo$name : '',
            fomateDailyContent: fomateDailyContent,
            onEmitLectureEvent: onLectureEvent
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_play_control_play_control__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"], {
          lectureName: (_contentInfo$lecture_ = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.lecture_name) !== null && _contentInfo$lecture_ !== void 0 ? _contentInfo$lecture_ : '',
          coverUrl: (_contentInfo$cover_ur = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.cover_url) !== null && _contentInfo$cover_ur !== void 0 ? _contentInfo$cover_ur : '',
          objectId: object_id,
          channelId: channel_id
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_play_rate_play_rate__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {})]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_plaly_progress_play_progress__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
        styleName: "play-fun-list",
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_manuscript_manuscript__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
          lectureName: (_contentInfo$lecture_2 = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.lecture_name) !== null && _contentInfo$lecture_2 !== void 0 ? _contentInfo$lecture_2 : '',
          manuMessage: (_contentInfo$manu_mes = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.manu_message) !== null && _contentInfo$manu_mes !== void 0 ? _contentInfo$manu_mes : ''
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_knowledge_knowledge__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
          knowledgeMap: (_contentInfo$knowledg = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.knowledge_map) !== null && _contentInfo$knowledg !== void 0 ? _contentInfo$knowledg : '',
          unread: unread
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_introduce_introduce__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
          bookName: (_contentInfo$book_nam = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.book_name) !== null && _contentInfo$book_nam !== void 0 ? _contentInfo$book_nam : '',
          manuMessage: (_contentInfo$manu_mes2 = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.manu_message) !== null && _contentInfo$manu_mes2 !== void 0 ? _contentInfo$manu_mes2 : '',
          courseBookIntroduction: (_contentInfo$course_b = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.course_book_introduction) !== null && _contentInfo$course_b !== void 0 ? _contentInfo$course_b : '',
          coverUrl: (_contentInfo$cover_ur2 = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.cover_url) !== null && _contentInfo$cover_ur2 !== void 0 ? _contentInfo$cover_ur2 : ''
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_share_share__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], {
          objectId: object_id,
          coverUrl: (_contentInfo$cover_ur3 = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.cover_url) !== null && _contentInfo$cover_ur3 !== void 0 ? _contentInfo$cover_ur3 : '',
          setShareInfoCallback: setShareInfo
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_clock_clock__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        objectId: object_id,
        channelId: channel_id,
        setClockStatus: setClockStatus,
        clockTotal: (_contentInfo$clock_to = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.clock_total) !== null && _contentInfo$clock_to !== void 0 ? _contentInfo$clock_to : 0,
        clockStatus: (_contentInfo$clock_st = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.clock_status) !== null && _contentInfo$clock_st !== void 0 ? _contentInfo$clock_st : 0,
        duration: _store__WEBPACK_IMPORTED_MODULE_10__[/* ApiStore */ "a"].player.getPlayInfo.duration,
        isCashbackUser: (_contentInfo$is_cashb = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.is_cashback_user) !== null && _contentInfo$is_cashb !== void 0 ? _contentInfo$is_cashb : false
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_send_note_send_note__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"], {
        coverUrl: (_contentInfo$cover_ur4 = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.cover_url) !== null && _contentInfo$cover_ur4 !== void 0 ? _contentInfo$cover_ur4 : '',
        lectureName: (_contentInfo$lecture_3 = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.lecture_name) !== null && _contentInfo$lecture_3 !== void 0 ? _contentInfo$lecture_3 : '',
        onEmitNoteSendEvent: onEmitNoteSendEvent,
        totalCount: totalCount,
        sendSucc: sendSucc,
        manuMessage: (_contentInfo$manu_mes3 = contentInfo === null || contentInfo === void 0 ? void 0 : contentInfo.manu_message) !== null && _contentInfo$manu_mes3 !== void 0 ? _contentInfo$manu_mes3 : ''
      }), notesLoading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
        styleName: "loading-note",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* Image */ "f"], {
          styleName: "loading-img",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210712_loading.gif"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
          children: "\u7B14\u8BB0\u6B63\u5728\u52A0\u8F7D\u4E2D..."
        })]
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* Block */ "a"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* CustomWrapper */ "d"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_note_list_note_list__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
            newDiscusses: newDiscusses,
            myDiscusses: myDiscusses,
            onNoteLikeEvent: onNoteLikeEvent
          })
        })
      })]
    }), !!newDiscusses.length && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* Block */ "a"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__[/* View */ "o"], {
        styleName: "bottom-line",
        style: {
          marginBottom: "".concat(70 + Object(_utils_tools__WEBPACK_IMPORTED_MODULE_11__[/* safeBottom */ "o"])(), "px")
        },
        children: hasMore ? '加载中...' : '翻完了~'
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__["jsx"])(_components_guide_dialog_guide_dialog__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"], {})]
  });
}, _detail_module_scss__WEBPACK_IMPORTED_MODULE_28___default.a);
/* harmony default export */ __webpack_exports__["a"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_15__[/* observer */ "b"])(Detail));

/***/ }),

/***/ "./src/components/clock-dialog/clock-dialog.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/clock-dialog/clock-dialog.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"share-dialog-img":"share-dialog-img--3AqTv","share-button-wrapper":"share-button-wrapper--10YpT","share-button":"share-button--1xUg6","share-button-active":"share-button-active--14o4O","button-item":"button-item--11C5c","actived":"actived--2kwDX","actived-active":"actived-active--_h61N","icon-weixinfenxiang1x":"icon-weixinfenxiang1x--2qmkD","icon-guanbidanchuang1x":"icon-guanbidanchuang1x--3mm5K","icon-pengyouquanfenxiang1x":"icon-pengyouquanfenxiang1x--3EM9o","clock-title":"clock-title--2Gpf9","modal-mask":"modal-mask--3bIjb","modal-content":"modal-content--3MD6l","main-content":"main-content--1f1NX","modal-title":"modal-title--3qpvT","share-wrapper":"share-wrapper--3ggxI","medal-icon":"medal-icon--1a3vg","clock_dialog_bg":"clock_dialog_bg--mW3q6","clock-share-top-bg":"clock-share-top-bg--1sUfP","light-icon":"light-icon--2MPdN","animal":"animal--ar3Ig"};

/***/ }),

/***/ "./src/components/clock-dialog/clock-dialog.tsx":
/*!******************************************************!*\
  !*** ./src/components/clock-dialog/clock-dialog.tsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_css_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/css-module */ "./src/utils/css-module.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _dialog_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/dialog */ "./src/components/dialog/dialog.tsx");
/* harmony import */ var _clock_dialog_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clock-dialog.module.scss */ "./src/components/clock-dialog/clock-dialog.module.scss");
/* harmony import */ var _clock_dialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clock_dialog_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






var ClockDialog = Object(_utils_css_module__WEBPACK_IMPORTED_MODULE_0__[/* CSSModule */ "a"])(function (props) {
  var value = props.value,
      setValue = props.setValue,
      shareInfo = props.shareInfo;

  var bindSaveImage = function bindSaveImage() {// track.setEvent(`lh_${fr}_sa_ck`);
    // WX.saveImage(cardUrl);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_dialog_dialog__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    value: value,
    setValue: setValue,
    backgroundColor: "transparent",
    showClose: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
      styleName: "share-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
        styleName: "clock-share-card",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "f"], {
          styleName: "medal-icon",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210923_clock_dialog_header_bg.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "f"], {
          styleName: "clock_dialog_bg",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210923_clock_dialog_bg.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "f"], {
          styleName: "light-icon",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210918_guang.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          styleName: "clock-title",
          children: "\u963F\u6492\u5927\u5927\u5927"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
        styleName: "share-button-wrapper ",
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          hoverClass: "actived-active",
          styleName: "share-button actived",
          onClick: bindSaveImage,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "m"], {
            styleName: "icon-pengyouquanfenxiang1x",
            className: "icon icon-pengyouquanfenxiang1x"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
            styleName: "button-item",
            children: "\u751F\u6210\u6253\u5361\u56FE\u7247"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "o"], {
          hoverClass: "share-button-active",
          styleName: "share-button",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "m"], {
            styleName: "icon-weixinfenxiang1x",
            className: "icon icon-weixinfenxiang1x"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "b"], {
            styleName: "button-item",
            openType: "share",
            "data-shareInfo": shareInfo,
            onClick: function onClick() {
              return setValue(false);
            },
            children: "\u5206\u4EAB\u6210\u5C31"
          })]
        })]
      })]
    })
  });
}, _clock_dialog_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);
/* harmony default export */ __webpack_exports__["a"] = (ClockDialog);

/***/ }),

/***/ "./src/components/playing-icon/playing-icon.scss":
/*!*******************************************************!*\
  !*** ./src/components/playing-icon/playing-icon.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/playing-icon/playing-icon.tsx":
/*!******************************************************!*\
  !*** ./src/components/playing-icon/playing-icon.tsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _playing_icon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playing-icon.scss */ "./src/components/playing-icon/playing-icon.scss");
/* harmony import */ var _playing_icon_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_playing_icon_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





var playIcons = {
  pause: 'icon-zanting1',
  loading: 'icon-jiazai'
};
/** 播放的动画 */

var PlayingIcon = function PlayingIcon(props) {
  var statue = props.statue;
  console.log('playing statue', statue);
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
      className: "beat-wrap ".concat(statue === 'play' && 'beat-playing'),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
        className: "beat",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: "beat-item "
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: "beat-item "
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: "beat-item "
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: "beat-item "
        })]
      })
    });
  }, [statue]);
};

/* harmony default export */ __webpack_exports__["a"] = (PlayingIcon);

/***/ }),

/***/ "./src/pages/detail/components/clock/clock.scss":
/*!******************************************************!*\
  !*** ./src/pages/detail/components/clock/clock.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/components/clock/clock.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/detail/components/clock/clock.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _api_clock_clock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/clock/clock */ "./src/api/clock/clock.ts");
/* harmony import */ var _components_clock_dialog_clock_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/clock-dialog/clock-dialog */ "./src/components/clock-dialog/clock-dialog.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clock.scss */ "./src/pages/detail/components/clock/clock.scss");
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_clock_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
















var Clock = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__[/* observer */ "b"])(function (props) {
  var clockTotal = props.clockTotal,
      isCashbackUser = props.isCashbackUser,
      clockStatus = props.clockStatus,
      objectId = props.objectId,
      channelId = props.channelId,
      duration = props.duration,
      setClockStatus = props.setClockStatus;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(''),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      clockMessage = _useState2[0],
      setClockMessage = _useState2[1]; // 打卡信息提示


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(false),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      onClock = _useState4[0],
      setOnClock = _useState4[1]; // 是否能打卡


  var limit = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])(0); // 限制听到多少分的时候才能打卡

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(''),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      cardUrl = _useState6[0],
      setCardUrl = _useState6[1]; // 分享卡


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(''),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState7, 2),
      randomShareWord = _useState8[0],
      setRandomShareWord = _useState8[1]; // 分享dialog标题


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(false),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState9, 2),
      showDialog = _useState10[0],
      setShowDialog = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(0),
      _useState12 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState11, 2),
      customDay = _useState12[0],
      setCustomDay = _useState12[1]; // 打卡成功后手动加一天


  var time = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])(0);

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])({
    title: '',
    path: '',
    imageUrl: '',
    from: 'clock'
  }),
      _useState14 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState13, 2),
      shareModel = _useState14[0],
      setShareModel = _useState14[1]; // 是否可以打卡


  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    if (_store__WEBPACK_IMPORTED_MODULE_6__[/* ApiStore */ "a"].player.playInfo.object_id === _store__WEBPACK_IMPORTED_MODULE_6__[/* ApiStore */ "a"].player.playingInfo.object_id && _store__WEBPACK_IMPORTED_MODULE_6__[/* ApiStore */ "a"].player.playingState === 'play') {
      time.current++;

      if (_store__WEBPACK_IMPORTED_MODULE_6__[/* ApiStore */ "a"].player.progress / 60 > limit.current && !onClock && time.current >= 3) {
        // 可能有一瞬间进度条会缓存上一次的进度，从而导致时间不对，被触发打卡
        if (time.current >= 3) {
          setOnClock(true);
          setClockMessage('现在可以打卡啦！');
        }
      }
    }
  }, [_store__WEBPACK_IMPORTED_MODULE_6__[/* ApiStore */ "a"].player.progress, onClock]);
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    if (clockStatus !== undefined && duration !== undefined && isCashbackUser !== undefined) {
      console.log('进来几次');

      var _limit = duration / 60 >= 8 ? 8 : Math.floor(duration / 60);

      var _title = "\u70B9\u51FB\u67E5\u770B".concat(isCashbackUser ? '返现' : '学分', "\u8BB0\u5F55>>");

      var _clockMessage = "".concat(clockStatus ? _title : "\u542C".concat(_limit, "\u5206\u949F\u5C31\u53EF\u4EE5\u6253\u5361\u5566"));

      setClockMessage(_clockMessage);
      limit.current = _limit;
    }
  }, [duration]);

  var bindMoreCash = function bindMoreCash() {
    if (clockStatus) {
      _utils_track__WEBPACK_IMPORTED_MODULE_7__[/* track */ "a"].setEvent('lh_go_cash_ck');
      var url = isCashbackUser ? '/pages/personal/withdrawal/withdrawal' : '/pages/personal/center-credit/center-credit';
      _utils_WX__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].navigateTo(url);
    }
  };
  /** 每日打卡 */


  var getClockIn = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res, creadit, balance, msg, fx, xf;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _utils_track__WEBPACK_IMPORTED_MODULE_7__[/* track */ "a"].setEvent('lh_play_dot_ck');

              if (!(!onClock && !clockStatus)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", _utils_WX__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Toast("\u542C\u5230".concat(limit.current, "\u5206\u949F\u624D\u53EF\u4EE5\u6253\u5361\u5662~")));

            case 4:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showLoading();
              _context.next = 7;
              return Object(_api_clock_clock__WEBPACK_IMPORTED_MODULE_4__[/* api_clock_in */ "a"])({
                object_id: objectId,
                channel_id: channelId
              });

            case 7:
              res = _context.sent;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.hideLoading();
              creadit = res.got_creadits;
              balance = res.got_balance;
              msg = '';

              if (!creadit && !balance) {
                msg = '今日已打卡';
              } else {
                fx = balance ? "\u8FD4\u73B0".concat(balance / 100, "\u5143\uFF0C") : "";
                xf = creadit ? "\u83B7\u5F97".concat(creadit, "\u5B66\u5206") : "";
                msg = "\u6253\u5361\u6210\u529F\uFF0C".concat(fx).concat(xf);
                setClockStatus(1);
                setCustomDay(1);
              }

              setCardUrl(res.card_url);
              setRandomShareWord(res.random_share_word);
              setClockMessage("\u70B9\u51FB\u67E5\u770B".concat(isCashbackUser ? '返现' : '学分', "\u8BB0\u5F55>>"));
              _utils_WX__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Toast(msg);
              _context.next = 19;
              return getClockMinaShare(res);

            case 19:
              setShowDialog(true);
              _context.next = 27;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](0);
              console.error('getClockIn error', _context.t0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.hideLoading();
              _utils_WX__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Toast('获取打卡失败');

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 22]]);
    }));

    return function getClockIn() {
      return _ref.apply(this, arguments);
    };
  }();
  /** 获取分享卡信息 */


  var getClockMinaShare = /*#__PURE__*/function () {
    var _ref2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(res) {
      var share, model;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_api_clock_clock__WEBPACK_IMPORTED_MODULE_4__[/* api_clock_mina_share_get */ "b"])({
                book_name: res.book,
                share_word: res.share_word
              });

            case 3:
              share = _context2.sent;
              model = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, shareModel), {}, {
                imageUrl: share.card_url,
                title: "\u6211\u5728\u68A8\u82B1\u542C\u4E66\u5B66\u4E60\uFF0C\u5DF2\u5B66\u4E60".concat(res.history_daysum, "\u5929"),
                path: "/pages/activity/activity?from=clock" // 打卡转发

              });
              setShareModel(model);
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error('getClockMinaShare', _context2.t0);
              _utils_WX__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].Toast('获取分享卡信息失败');

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function getClockMinaShare(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return Object(react__WEBPACK_IMPORTED_MODULE_12__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Block */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "clock-container",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          className: "clock-wrapper flex",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "flex",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "f"], {
              className: "clock-icon",
              mode: "widthFix",
              src: "https://static-1253442168.file.myqcloud.com/xupload/20210811_daka.png"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
              className: "clock-left",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
                className: "title",
                children: ["\u4F60\u5DF2\u7D2F\u8BA1\u6253\u5361", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
                  className: "day",
                  children: clockTotal + customDay + '天'
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
                className: "sub-title",
                onClick: bindMoreCash,
                children: clockMessage
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "clock-button ".concat(clockStatus || !onClock ? '' : 'move'),
            onClick: getClockIn,
            style: 'background: ' + (clockStatus || !onClock ? 'linear-gradient(231deg, #FEE086 0%, #FAC986 100%)' : 'linear-gradient(248deg, #FDC50A 0%, #F3571E 100%)'),
            children: [!(clockStatus || !onClock) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
              className: "light"
            }), clockStatus ? '已打卡' : '打卡']
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_clock_dialog_clock_dialog__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        shareInfo: shareModel,
        value: showDialog,
        setValue: setShowDialog
      })]
    });
  }, [shareModel, showDialog, randomShareWord, cardUrl, onClock, clockMessage, clockTotal, isCashbackUser, clockStatus, objectId, channelId, duration, setClockStatus, customDay]);
});
/* harmony default export */ __webpack_exports__["a"] = (Clock);

/***/ }),

/***/ "./src/pages/detail/components/guide-dialog/guide-dialog.module.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/detail/components/guide-dialog/guide-dialog.module.scss ***!
  \***************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrap":"wrap--3rXrw","info":"info--13Vfd","btn":"btn--3aQCd","margin_40":"margin_40--2fx8M","margin_top_50":"margin_top_50--1l4ZE","hover-class":"hover-class--2Jqew"};

/***/ }),

/***/ "./src/pages/detail/components/guide-dialog/guide-dialog.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/detail/components/guide-dialog/guide-dialog.tsx ***!
  \*******************************************************************/
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
/* harmony import */ var _guide_dialog_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guide-dialog.module.scss */ "./src/pages/detail/components/guide-dialog/guide-dialog.module.scss");
/* harmony import */ var _guide_dialog_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_guide_dialog_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/dialog/dialog */ "./src/components/dialog/dialog.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _api_common_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/common/common */ "./src/api/common/common.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);




/*
 * @Description: 引导关注公众号、购买转化弹窗
 * @Date: 2021-09-08 10:32:32
 * @LastEditTime: 2021-09-23 15:16:49
 */











var GuideDialog = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__[/* observer */ "b"])(function () {
  var progress = _store__WEBPACK_IMPORTED_MODULE_8__[/* ApiStore */ "a"].player.getSliderProgress;
  var status = _store__WEBPACK_IMPORTED_MODULE_8__[/* ApiStore */ "a"].player.getPlayInfo.status;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      check_trial_subscribed_pop = _useState2[0],
      setCheckTrialSubscribedPop = _useState2[1]; // 是否给试听用户弹出关注公众号弹窗


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      trail_conversion_pop = _useState4[0],
      setTrailConversionPop = _useState4[1]; //是否需要给用户弹出购买转化弹窗


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      isVisible = _useState6[0],
      setIsVisible = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getStatus();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!isVisible && (check_trial_subscribed_pop || trail_conversion_pop) && status === 'play' && progress <= 1) {
      setIsVisible(true);
    }
  }, [isVisible, status, check_trial_subscribed_pop, trail_conversion_pop, progress]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isVisible) {
      console.log('effect--->', isVisible);

      if (check_trial_subscribed_pop) {
        _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].setEvent('lh_play_subscribed_show'); // 提示弹窗-去了解一下按钮
      } else {
        _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].setEvent('lh_play_conversion_show'); // 提示弹窗-去了解一下按钮
      }
    }
  }, [isVisible, check_trial_subscribed_pop]);
  var mapInfo = {
    check_trial_subscribed_pop: {
      infoList: [{
        id: 1,
        info: '恭喜你开始听书啦！'
      }, {
        id: 2,
        info: '在你听书的时候可以去关注公众号打开课程提醒，这样就不会漏了明天的听书啦！'
      }, {
        id: 3,
        info: '多听几天你就能体会到知识的美妙～',
        className: _guide_dialog_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.margin_40
      }],
      btnInfo: {
        path: 'https://mp.weixin.qq.com/s/a7HDCvHdpj6v4_q1k50ZpQ',
        name: '去打开提醒'
      }
    },
    trail_conversion_pop: {
      infoList: [{
        id: 1,
        info: '恭喜你，连续听了几天书啦！你是个懂得坚持的人，会学到更多的知识。'
      }, {
        id: 2,
        info: '梨花听书为了让大家学到更多知识，成为高情商、有财识的智慧女性，我们制定了100天的听书计划，点击下方按钮了解100天听书计划！'
      }],
      btnInfo: {
        path: 'https://mp.weixin.qq.com/s/a7HDCvHdpj6v4_q1k50ZpQ',
        name: '去了解一下咯',
        className: _guide_dialog_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.margin_top_50
      }
    }
  };

  var getStatus = /*#__PURE__*/function () {
    var _ref = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_api_common_common__WEBPACK_IMPORTED_MODULE_10__[/* api_business_flag */ "a"])({
                method: ['trial_subscribed_pop', 'trail_conversion_pop']
              });

            case 3:
              res = _context.sent;

              if (res) {
                setCheckTrialSubscribedPop(res.trial_subscribed_pop);
                setTrailConversionPop(res.trail_conversion_pop);
              }

              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getStatus() {
      return _ref.apply(this, arguments);
    };
  }();

  var goLink = function goLink(url, type) {
    if (type === 'check_trial_subscribed_pop') {
      _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].setEvent('lh_play_subscribed_ck'); // 提示弹窗-去打开提醒按钮
    } else {
      _utils_track__WEBPACK_IMPORTED_MODULE_11__[/* track */ "a"].setEvent('lh_play_conversion_ck'); // 提示弹窗-去了解一下按钮
    }

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
      url: "/pages/h5/h5?webViewUrl=".concat(url)
    });
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var _data$btnInfo;

    var type = check_trial_subscribed_pop ? 'check_trial_subscribed_pop' : 'trail_conversion_pop';
    var data = mapInfo[type];
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      value: isVisible,
      setValue: setIsVisible,
      backgroundColor: "#fff",
      title: "\u68A8\u82B1\u5C0F\u63D0\u793A",
      showClose: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
        className: _guide_dialog_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrap,
        children: [data.infoList.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
            className: "".concat(_guide_dialog_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.info, " ").concat(item === null || item === void 0 ? void 0 : item.className),
            children: item.info
          }, item.id);
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "b"], {
          className: "".concat(_guide_dialog_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn, " ").concat((_data$btnInfo = data.btnInfo) === null || _data$btnInfo === void 0 ? void 0 : _data$btnInfo.className),
          onClick: function onClick() {
            return goLink(data.btnInfo.path, type);
          },
          hoverClass: "hover-class",
          children: data.btnInfo.name
        })]
      })
    });
  }, [check_trial_subscribed_pop, trail_conversion_pop, isVisible]);
});
/* harmony default export */ __webpack_exports__["a"] = (GuideDialog);

/***/ }),

/***/ "./src/pages/detail/components/introduce/introduce.scss":
/*!**************************************************************!*\
  !*** ./src/pages/detail/components/introduce/introduce.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/components/introduce/introduce.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/detail/components/introduce/introduce.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/bottom-dialog/bottom-dialog */ "./src/components/bottom-dialog/bottom-dialog.tsx");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _introduce_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduce.scss */ "./src/pages/detail/components/introduce/introduce.scss");
/* harmony import */ var _introduce_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_introduce_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









var Introduce = function Introduce(props) {
  var bookName = props.bookName,
      courseBookIntroduction = props.courseBookIntroduction,
      coverUrl = props.coverUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      dialogStatus = _useState2[0],
      setDialogStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('0px'),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      scrollHeight = _useState4[0],
      setScrollHeight = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getScrollHeight();
  }, []);
  /** 显示或者隐藏 */

  var showBottomDialog = function showBottomDialog(type) {
    _utils_track__WEBPACK_IMPORTED_MODULE_2__[/* track */ "a"].setEvent('lh_play_vm_ck');
    setDialogStatus(type);
  };
  /** 设置滚动盒子高度 */


  var getScrollHeight = function getScrollHeight() {
    var wh = wx.platform.windowHeight || wx.getSystemInfoSync().windowHeight;
    var height = Math.floor(wh * 0.55) + 'px';
    setScrollHeight(height);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Block */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
      className: "append-item flex",
      onClick: function onClick() {
        return showBottomDialog(true);
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
        className: "icon icon-shujijieshao"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        className: "append-text",
        children: "\u4E66\u7C4D\u4ECB\u7ECD"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      value: dialogStatus,
      onClose: function onClose() {
        return setDialogStatus(false);
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        catchMove: true,
        className: "dialog-content-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          className: "title-content flex",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
            className: "dialog-title",
            children: "\u4E66\u7C4D\u4ECB\u7ECD"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
            onClick: function onClick() {
              return showBottomDialog(false);
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
              className: "icon icon-guanbibeifen"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
              className: "close-text",
              children: "\u5173\u95ED"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "k"], {
          scrollY: true,
          style: 'height: ' + scrollHeight,
          scrollWithAnimation: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
            className: "common-book-cover margin",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
              className: "common-tip-img"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "f"], {
              className: "common-book-img",
              mode: "aspectFill",
              src: coverUrl
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
            className: "book-title",
            children: '《' + bookName + '》'
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* RichText */ "j"], {
            className: "message",
            nodes: courseBookIntroduction || ''
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Introduce);

/***/ }),

/***/ "./src/pages/detail/components/knowledge/knowledge.scss":
/*!**************************************************************!*\
  !*** ./src/pages/detail/components/knowledge/knowledge.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/components/knowledge/knowledge.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/detail/components/knowledge/knowledge.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dialog/dialog */ "./src/components/dialog/dialog.tsx");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _knowledge_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./knowledge.scss */ "./src/pages/detail/components/knowledge/knowledge.scss");
/* harmony import */ var _knowledge_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_knowledge_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










var Knowledge = function Knowledge(props) {
  var knowledgeMap = props.knowledgeMap,
      unread = props.unread;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      isUnread = _useState2[0],
      setIsUnread = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      dialogStatus = _useState4[0],
      setDialogStatus = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setIsUnread(unread);
  }, [unread]);
  /** 显示弹窗 */

  var showDialog = function showDialog(type) {
    _utils_track__WEBPACK_IMPORTED_MODULE_2__[/* track */ "a"].setEvent('lh_map_sh_ck');

    if (!type) {
      setIsUnread(0);
    }

    setDialogStatus(type);
  };
  /** 保存图片 */


  var bindSaveImage = function bindSaveImage() {
    _utils_track__WEBPACK_IMPORTED_MODULE_2__[/* track */ "a"].setEvent("lh_map_sa_ck");
    if (!knowledgeMap) wx.showToast({
      title: '保存失败',
      icon: 'none'
    });
    _utils_WX__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].saveImage(knowledgeMap);
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
        className: "knowledge-append-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: "append-item flex",
          onClick: function onClick() {
            return showDialog(true);
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
            className: "icon icon-zhishidaotu"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "append-text",
            children: "\u77E5\u8BC6\u5BFC\u56FE"
          })]
        }), !!isUnread && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
          className: "gift-icon",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210817_liwu.png"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
        style: {
          display: 'none'
        },
        src: knowledgeMap
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        value: dialogStatus,
        setValue: setDialogStatus,
        backgroundColor: "transparent",
        maskClose: false,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          catchMove: true,
          className: "knowledge-map-container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
            className: "light-icon",
            src: "https://static-1253442168.file.myqcloud.com/xupload/20210918_guang.png"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* ScrollView */ "k"], {
            scrollY: true,
            className: 'map-wrapper ' + (isUnread ? 'map-move' : ''),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "f"], {
              className: "map",
              mode: "widthFix",
              src: knowledgeMap
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            hoverClass: "button-wrapper-active",
            className: "button-wrapper",
            onClick: bindSaveImage,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
              className: "icon icon-pengyouquanfenxiang1x"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
              className: "button-text",
              children: "\u4FDD\u5B58\u56FE\u7247"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
            className: "icon icon-guanbidanchuang1x",
            onClick: function onClick() {
              return showDialog(false);
            }
          })]
        })
      })]
    });
  }, [knowledgeMap, unread, isUnread, dialogStatus]);
};

/* harmony default export */ __webpack_exports__["a"] = (Knowledge);

/***/ }),

/***/ "./src/pages/detail/components/manuscript/manuscript.scss":
/*!****************************************************************!*\
  !*** ./src/pages/detail/components/manuscript/manuscript.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/components/manuscript/manuscript.tsx":
/*!***************************************************************!*\
  !*** ./src/pages/detail/components/manuscript/manuscript.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/bottom-dialog/bottom-dialog */ "./src/components/bottom-dialog/bottom-dialog.tsx");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _manuscript_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manuscript.scss */ "./src/pages/detail/components/manuscript/manuscript.scss");
/* harmony import */ var _manuscript_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_manuscript_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);


/*
 * @Description: file content
 * @Date: 2021-08-27 10:22:30
 * @LastEditTime: 2021-09-16 18:19:20
 */









var Manuscript = function Manuscript(props) {
  var lectureName = props.lectureName,
      manuMessage = props.manuMessage;
  var prevImages = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])('');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      dialogStatus = _useState2[0],
      setDialogStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('0px'),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      scrollHeight = _useState4[0],
      setScrollHeight = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log('useReady');
    getScrollHeight();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (manuMessage) {
      var images = manuMessage.match(/src=\"([^\"]*?)\"/i);

      if (images && images.length > 0) {
        prevImages.current = images[1];
      }
    }
  }, [manuMessage]);
  /** 显示或者隐藏 */

  var showBottomDialog = function showBottomDialog(type) {
    _utils_track__WEBPACK_IMPORTED_MODULE_2__[/* track */ "a"].setEvent('lh_intro_vm_ck');
    setDialogStatus(type);
  };
  /** 图片预览 */


  var bindPreview = function bindPreview() {
    if (prevImages.current) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.previewImage({
        urls: [prevImages.current],
        //需要预览的图片http链接列表，注意是数组
        current: '' // 当前显示图片的http链接，默认是第一个

      });
    }
  };
  /** 设置滚动盒子高度 */


  var getScrollHeight = function getScrollHeight() {
    var wh = wx.platform.windowHeight || wx.getSystemInfoSync().windowHeight;
    console.log('wh', wh);
    var height = Math.floor(wh * 0.55) + 'px';
    setScrollHeight(height);
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Block */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        className: "append-item flex",
        onClick: function onClick() {
          return showBottomDialog(true);
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
          className: "icon icon-wengao"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          className: "append-text",
          children: "\u6587\u5B57\u7A3F"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        value: dialogStatus,
        onClose: function onClose() {
          return setDialogStatus(false);
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
          catchMove: true,
          className: "dialog-content-wrapper",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
            className: "title-content flex",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
              className: "dialog-title",
              children: lectureName
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
              onClick: function onClick() {
                return showBottomDialog(false);
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
                className: "icon icon-guanbibeifen"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
                className: "close-text",
                children: "\u5173\u95ED"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "k"], {
            scrollY: true,
            style: 'height: ' + scrollHeight,
            scrollWithAnimation: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* RichText */ "j"], {
              nodes: manuMessage,
              onClick: bindPreview
            })
          })]
        })
      })]
    });
  }, [dialogStatus, lectureName, manuMessage, scrollHeight]);
};

/* harmony default export */ __webpack_exports__["a"] = (Manuscript);

/***/ }),

/***/ "./src/pages/detail/components/note-list/note-list.module.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/detail/components/note-list/note-list.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"note-content-wrapper":"note-content-wrapper--3q68L","item-wrapper":"item-wrapper--fEiQ1","light-wrapper":"light-wrapper--QDj3S","account-wrap":"account-wrap--2aVoe","basic-info":"basic-info--3S2wA","share-note":"share-note--3yMR4","share-img":"share-img--2klrY","share-txt":"share-txt--3pMgw","edit-note":"edit-note--1g8Km","edit-icon":"edit-icon--1Jl2G","edit-txt":"edit-txt--1H5GC","like-wrap":"like-wrap--1P6yW","avatar":"avatar--2fhJm","date":"date--2FSQI","name":"name--3TzXM","content":"content--1kRPr","content-footer":"content-footer--29MwI","amount":"amount--1SuxG","icon":"icon--1K-Id","note-more":"note-more--1_7cA","more-title":"more-title--5kR6s","icon-gengduo":"icon-gengduo--1oLX4"};

/***/ }),

/***/ "./src/pages/detail/components/note-list/note-list.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/detail/components/note-list/note-list.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _note_list_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note-list.module.scss */ "./src/pages/detail/components/note-list/note-list.module.scss");
/* harmony import */ var _note_list_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_note_list_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_css_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/css-module */ "./src/utils/css-module.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












var NoteList = function NoteList(props) {
  var _props$newDiscusses = props.newDiscusses,
      newDiscusses = _props$newDiscusses === void 0 ? [] : _props$newDiscusses,
      _props$myDiscusses = props.myDiscusses,
      myDiscusses = _props$myDiscusses === void 0 ? [] : _props$myDiscusses,
      onNoteLikeEvent = props.onNoteLikeEvent;
  var disabled = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  console.log('myDiscusses', myDiscusses); // 取自己的评价放在首位，且myDiscusses的长度不大于1

  var discussesList = [].concat(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(myDiscusses), Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(newDiscusses));
  /** 点赞状态事件 */

  var bindLikeStatus = function bindLikeStatus(item) {
    if (!disabled.current) {
      console.log('点赞的item', item);
      onNoteLikeEvent === null || onNoteLikeEvent === void 0 ? void 0 : onNoteLikeEvent(item);
    } else {
      _utils_WX__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Toast('请不要点击过快~');
    }

    disabled.current = true;
    setTimeout(function () {
      disabled.current = false;
    }, 500);
  };
  /** 查看笔记 */


  var bindMore = function bindMore() {
    _utils_track__WEBPACK_IMPORTED_MODULE_3__[/* track */ "a"].setEvent('lh_note_vm_ck');
    _utils_WX__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].navigateTo('/pages/personal/my-notes/my-notes');
  };
  /** 编辑笔记 */


  var editNote = function editNote(content) {
    _store__WEBPACK_IMPORTED_MODULE_1__[/* ApiStore */ "a"].common.setNoteContent(content);
    _store__WEBPACK_IMPORTED_MODULE_1__[/* ApiStore */ "a"].common.setNoteType('edit');
    _store__WEBPACK_IMPORTED_MODULE_1__[/* ApiStore */ "a"].common.setNoteDialog(true);
  }; // TODO: 分享笔记


  var shareNote = function shareNote() {};

  return Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Block */ "a"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
        styleName: "note-content-wrapper",
        children: [discussesList.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Block */ "a"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
              styleName: 'item-wrapper ' + (item.myDiscusses ? 'light-wrapper' : ''),
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                className: "flex",
                styleName: "account-wrap",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                  styleName: "basic-info",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "f"], {
                    styleName: "avatar",
                    mode: "aspectFill",
                    src: item.account.avatar_url || 'https://img.lycheer.net/avatar/4cba76bb40e4646f75e715310023cff4.png/avatar'
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                    styleName: "name",
                    children: item.account.nickname
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                  styleName: "share-note",
                  onClick: shareNote,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "f"], {
                    src: "https://static-1253442168.file.myqcloud.com/xupload/20210922_share-note.png",
                    styleName: "share-img"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                    styleName: "share-txt",
                    children: "\u5206\u4EAB\u7B14\u8BB0"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* RichText */ "j"], {
                styleName: "content",
                nodes: item.content
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                styleName: "content-footer",
                className: "flex",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                  styleName: "date",
                  children: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_2__[/* dateFormat */ "a"])(item.timestamp * 1000, 'mm-dd HH:MM')
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                  className: "flex",
                  children: [item.myDiscusses && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                    styleName: "edit-note",
                    onClick: function onClick() {
                      return editNote(item.content);
                    },
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                      className: "icon icon-bianjibiji",
                      styleName: "edit-icon"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                      styleName: "edit-txt",
                      children: "\u7F16\u8F91\u7B14\u8BB0"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                    onClick: function onClick() {
                      return bindLikeStatus(item);
                    },
                    styleName: "like-wrap",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                      className: 'icon ' + (item.is_liked ? 'icon-dianzan2' : 'icon-dianzan1'),
                      styleName: "icon",
                      style: 'color: ' + (item.is_liked ? '#986DDA' : '#BABABA')
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                      styleName: "amount",
                      style: 'color: ' + (item.is_liked ? '#9B6ADA' : '#C4C6CF'),
                      children: item.like_count
                    })]
                  })]
                })]
              }), item.myDiscusses && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
                styleName: "note-more",
                onClick: bindMore,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                  styleName: "more-title",
                  children: "\u67E5\u770B\u6211\u7684\u6240\u6709\u7B14\u8BB0"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "m"], {
                  className: "icon icon-gengduo"
                })]
              })]
            })
          }, item.id);
        }), !discussesList.length && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Block */ "a"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
            styleName: "common-empty-container",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "f"], {
              styleName: "empty-img",
              src: "https://static-1253442168.file.myqcloud.com/xupload/20210605_empty.png"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "o"], {
              styleName: "empty-text",
              children: "\u6682\u65E0\u7B14\u8BB0\uFF0C\u5FEB\u6765\u505A\u7B2C\u4E00\u4E2A\u53D1\u8868\u7B14\u8BB0\u7684\u4EBA\u54E6\uFF5E"
            })]
          })
        })]
      })
    });
  }, [newDiscusses, myDiscusses, onNoteLikeEvent]);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_css_module__WEBPACK_IMPORTED_MODULE_8__[/* CSSModule */ "a"])(NoteList, _note_list_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a));

/***/ }),

/***/ "./src/pages/detail/components/plaly-progress/play-progress.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/detail/components/plaly-progress/play-progress.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/components/plaly-progress/play-progress.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/detail/components/plaly-progress/play-progress.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _play_progress_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play-progress.scss */ "./src/pages/detail/components/plaly-progress/play-progress.scss");
/* harmony import */ var _play_progress_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_play_progress_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










var width = function width(sliderProgress, duration) {
  var val = Math.ceil(sliderProgress);
  return val * (84 / duration) - 4;
};

var PlayProgress = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* observer */ "b"])(function () {
  var progress = _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.getSliderProgress;
  var duration = _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.getPlayInfo.duration;

  var onChanging = function onChanging(e) {
    _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.onChanging(e);
  };

  var onChange = function onChange(e) {
    _utils_track__WEBPACK_IMPORTED_MODULE_2__[/* track */ "a"].setEvent('lh_play_sl_sc');
    _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.onChange(e);
  };

  var Progress = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
      className: "slider-box",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        className: "slider-btn",
        style: 'margin-left: ' + width(progress, duration) + '%',
        children: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* secondToDate */ "p"])(progress) + '/' + Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* secondToDate */ "p"])(duration)
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        className: "slider-line"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
        className: "slider-line-active",
        style: 'width: ' + width(progress, duration) + '%'
      })]
    });
  }, [progress, duration]);
  /** 避免secondToDate被计算两次，因为duration只会触发一次更变，没必要跟progress一样高频率触发secondToDate */

  var DurationText = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
      className: "cs-time",
      children: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* secondToDate */ "p"])(duration)
    });
  }, [duration]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "o"], {
    className: "component-slider",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "m"], {
      className: "cs-time",
      children: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* secondToDate */ "p"])(progress)
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Slider */ "l"], {
      className: "native-slider",
      blockSize: 18,
      blockColor: "#986dda",
      backgroundColor: "#DCDDDC",
      activeColor: "#986dda",
      step: 1,
      onChange: onChange,
      onChanging: onChanging,
      max: duration,
      value: progress
    }), DurationText]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (PlayProgress);

/***/ }),

/***/ "./src/pages/detail/components/play-control/play-control.scss":
/*!********************************************************************!*\
  !*** ./src/pages/detail/components/play-control/play-control.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/components/play-control/play-control.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/detail/components/play-control/play-control.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _play_control_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play-control.scss */ "./src/pages/detail/components/play-control/play-control.scss");
/* harmony import */ var _play_control_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_play_control_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/*
 * @Description: file content
 * @LastEditTime: 2021-09-23 10:52:03
 */








var PlayeControl = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[/* observer */ "b"])(function (props) {
  var _getStorage;

  var status = _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.getPlayInfo.status;
  var playIcons = {
    play: 'icon-zanting',
    pause: 'icon-bofang4',
    loading: 'icon-jiazai3'
  };
  /** 点击播放暂停 */

  var bindAudioStatus = function bindAudioStatus() {
    if (status === 'pause') {
      _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.goPlay();
    } else {
      _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].player.goPause();
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
      id: "play-status-control",
      className: "flex fpw-play-status-wrapper",
      hoverClass: "fpw-play-status-wrapper-active",
      onClick: bindAudioStatus,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
        className: 'icon ' + playIcons[status]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
      className: "fixed-play-wrapper flex",
      style: {
        paddingBottom: "".concat(Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* safeBottom */ "o"])() ? Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* safeBottom */ "o"])() : 14, "px")
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "f"], {
          className: "fpw-lecture-icon",
          mode: "aspectFill",
          src: (_getStorage = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__[/* getStorage */ "h"])('account')) === null || _getStorage === void 0 ? void 0 : _getStorage.avatar_url
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
          className: "fpw-ipt",
          onClick: function onClick() {
            return _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].common.setNoteDialog(true);
          },
          children: "\u5B66\u5230\u4EC0\u4E48\u90FD\u8BB0\u8D77\u6765\u2026"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "o"], {
        className: "fpw-note-wrapper",
        onClick: function onClick() {
          return _store__WEBPACK_IMPORTED_MODULE_0__[/* ApiStore */ "a"].common.setNoteDialog(true);
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "f"], {
          className: "fpw-publish-icon",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210603_publish.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "m"], {
          className: "fpw-publish-text",
          children: "\u53D1\u8868\u7B14\u8BB0"
        })]
      })]
    })]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (PlayeControl);

/***/ }),

/***/ "./src/pages/detail/components/play-directory/play-directory.scss":
/*!************************************************************************!*\
  !*** ./src/pages/detail/components/play-directory/play-directory.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/components/play-directory/play-directory.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages/detail/components/play-directory/play-directory.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/bottom-dialog/bottom-dialog */ "./src/components/bottom-dialog/bottom-dialog.tsx");
/* harmony import */ var _components_playing_icon_playing_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/playing-icon/playing-icon */ "./src/components/playing-icon/playing-icon.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _play_directory_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./play-directory.scss */ "./src/pages/detail/components/play-directory/play-directory.scss");
/* harmony import */ var _play_directory_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_play_directory_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














var PlayDirectory = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__[/* observer */ "b"])(function (props) {
  var fomateDailyContent = props.fomateDailyContent,
      fromView = props.fromView,
      _props$object_id = props.object_id,
      object_id = _props$object_id === void 0 ? 0 : _props$object_id,
      onEmitLectureEvent = props.onEmitLectureEvent,
      channelTitle = props.channelTitle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      dialogStatus = _useState2[0],
      setDialogStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])('0px'),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      scrollHeight = _useState4[0],
      setScrollHeight = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(''),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, 2),
      fromViewData = _useState6[0],
      setFromViewData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState7, 2),
      fomateDaily = _useState8[0],
      setFomateDaily = _useState8[1];

  var playStatus = _store__WEBPACK_IMPORTED_MODULE_4__[/* ApiStore */ "a"].player.getPlayInfo.status; // scrollWithAnimation设置为false后，需要等待列表渲染完毕后再去设置定位才行

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (dialogStatus) {
      setTimeout(function () {
        return setFromViewData(fromView);
      });
    } else {
      setTimeout(function () {
        return setFromViewData('');
      });
    }
  }, [fromView, dialogStatus]);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    getScrollHeight();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    console.log('useEffectsetFomateDaily');
    setFomateDaily(fomateDailyContent !== null && fomateDailyContent !== void 0 ? fomateDailyContent : []);
  }, [fomateDailyContent]);
  /** 打开目录抽屉组件 */

  var bindPowerDrawer = function bindPowerDrawer(type) {
    _utils_track__WEBPACK_IMPORTED_MODULE_5__[/* track */ "a"].setEvent('lh_play_li_ck');
    setDialogStatus(type);
  };
  /** 设置滚动盒子高度 */


  var getScrollHeight = function getScrollHeight() {
    var _wx$platform$windowHe, _wx, _wx$platform, _wx2, _wx2$platform, _wx$platform$windowHe2, _wx3, _wx3$platform;

    //沙雕处理方法 获取不到动态高度 就按屏幕高度写死
    var height = Math.floor(((_wx$platform$windowHe = (_wx = wx) === null || _wx === void 0 ? void 0 : (_wx$platform = _wx.platform) === null || _wx$platform === void 0 ? void 0 : _wx$platform.windowHeight) !== null && _wx$platform$windowHe !== void 0 ? _wx$platform$windowHe : 0) * 0.55) + 'px';
    console.log('height', height, (_wx2 = wx) === null || _wx2 === void 0 ? void 0 : (_wx2$platform = _wx2.platform) === null || _wx2$platform === void 0 ? void 0 : _wx2$platform.windowHeight, (_wx$platform$windowHe2 = (_wx3 = wx) === null || _wx3 === void 0 ? void 0 : (_wx3$platform = _wx3.platform) === null || _wx3$platform === void 0 ? void 0 : _wx3$platform.windowHeight) !== null && _wx$platform$windowHe2 !== void 0 ? _wx$platform$windowHe2 : 0 * 0.55);
    setScrollHeight(height);
  };
  /** 折叠面板 */


  var bindShowPanel = function bindShowPanel(id) {
    console.log('bindShowPanel', id);
    fomateDailyContent.forEach(function (items) {
      var _items$books;

      (_items$books = items.books) === null || _items$books === void 0 ? void 0 : _items$books.forEach(function (book) {
        if (id === book.id) {
          console.log('book.isShowPanel', book.isShowPanel);
          book.isShowPanel = !book.isShowPanel;
        }
      });
    });
    setFomateDaily(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(fomateDailyContent));
  }; // 目录播放事件 联动播放页面


  var bindViewPlay = function bindViewPlay(item, week) {
    console.log('bindViewPlay', item.unlock);

    switch (item.unlock) {
      case 0:
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
          title: '不要着急，每天解锁一节课哦！',
          icon: 'none'
        });
        break;

      case 1:
        if (item.object_type === 'form') {
          _utils_WX__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].navigateTo('/pages/exam/exam', {
            week_num: week,
            channel_id: item.channel_id
          });
        } else {
          onEmitLectureEvent === null || onEmitLectureEvent === void 0 ? void 0 : onEmitLectureEvent("".concat(item.object_id));
        }

        setDialogStatus(false);
        break;

      case 2:
        // 跳转商城
        _store__WEBPACK_IMPORTED_MODULE_4__[/* ApiStore */ "a"].common.bindAuthorization();
        break;
    }
  };

  var Header = Object(react__WEBPACK_IMPORTED_MODULE_10__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
      className: "directory-bg",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "directory-header flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "header-wrapper",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
            className: "header-title",
            children: "\u76EE\u5F55"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
            className: "header-subtitle",
            children: channelTitle
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          onClick: function onClick() {
            return bindPowerDrawer(false);
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
            className: "icon icon-guanbibeifen"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
            className: "close-text",
            children: "\u5173\u95ED"
          })]
        })]
      })
    });
  }, [channelTitle]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Block */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
      className: "append-item flex",
      onClick: function onClick() {
        return bindPowerDrawer(true);
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
        className: "icon icon-mulu"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "append-text",
        children: "\u76EE\u5F55"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      value: dialogStatus,
      onClose: function onClose() {
        return setDialogStatus(false);
      },
      children: [Header, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* ScrollView */ "k"], {
        scrollY: true,
        style: 'height: ' + scrollHeight,
        scrollIntoView: fromViewData,
        scrollWithAnimation: false,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "panel-directory-wrapper",
          children: fomateDaily.map(function (items, i) {
            var _items$books2;

            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Block */ "a"], {
              children: [!!items.week_num && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                className: "items-bg",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                  className: "items-title",
                  children: '第' + items.week_num + '周'
                })
              }), (_items$books2 = items.books) === null || _items$books2 === void 0 ? void 0 : _items$books2.map(function (book) {
                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                  className: "book-item",
                  children: [!!items.week_num && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                    className: "lecture-header flex",
                    onClick: function onClick(e) {
                      return bindShowPanel(book.id);
                    },
                    id: 'id_to_' + book.id,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                      className: "lecture-title",
                      children: book.book_name
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                      className: 'icon icon-zhankai ' + (book.isShowPanel ? 'rotate' : '')
                    })]
                  }), book.isShowPanel && book.lectures.map(function (lec) {
                    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                      className: "lecture-content flex",
                      onClick: function onClick(e) {
                        return bindViewPlay(lec);
                      },
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                        className: "lecture-subtitle ".concat(lec.object_id == object_id && 'playing', " ").concat(lec.unlock !== 1 && 'locked'),
                        children: lec.title
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                        className: "flex",
                        children: [lec.unlock === 1 && !!lec.unread && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                          className: "read-status ".concat(lec.object_id == object_id && 'playing'),
                          children: "\u672A\u542C"
                        }), lec.unlock === 1
                        /* 解锁 */
                        && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Block */ "a"], {
                          children: lec.object_id == object_id ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_playing_icon_playing_icon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
                            statue: playStatus
                          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                            className: "icon icon-gengduo"
                          })
                        }), lec.unlock === 2
                        /* 购物车 */
                        && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                          className: "cart",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                            className: "icon icon-gouwuche"
                          })
                        }), lec.unlock === 0
                        /* 锁 */
                        && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                          className: "icon icon-suo"
                        })]
                      })]
                    }, lec.id);
                  })]
                }, book.id);
              }), !!items.exam && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                onClick: function onClick() {
                  return bindViewPlay(items.exam, items.week_num);
                },
                className: "form-content flex",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                  className: "lecture-title",
                  children: items.exam.title + '与回顾'
                }), items.exam.unlock === 1
                /** 解锁  */
                && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                  className: "icon icon-gengduo"
                }), items.exam.unlock === 2
                /** 购物车 */
                && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
                  className: "cart",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                    className: "icon icon-gouwuche"
                  })
                }), items.exam.unlock === 0
                /** 锁 */
                && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
                  className: "icon icon-suo"
                })]
              })]
            }, i);
          })
        })
      })]
    })]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (PlayDirectory);

/***/ }),

/***/ "./src/pages/detail/components/play-rate/index.module.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/detail/components/play-rate/index.module.scss ***!
  \*****************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"append_item":"append_item--1XGV9","speed_text":"speed_text--31l-Y","speed_on":"speed_on--1Teqr","speed_icon":"speed_icon--1SNwK","icon_xuanze":"icon_xuanze--1EQdS","speed_item":"speed_item--34sg4","append_text":"append_text--HCJ-q","dialog_content_wrapper":"dialog_content_wrapper--3Q5in","title_content":"title_content--lCo3U","title":"title--1HW4m","icon_guanbibeifen":"icon_guanbibeifen--2FzmN","close_text":"close_text--2OYNf"};

/***/ }),

/***/ "./src/pages/detail/components/play-rate/play-rate.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/detail/components/play-rate/play-rate.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/bottom-dialog/bottom-dialog */ "./src/components/bottom-dialog/bottom-dialog.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/detail/components/play-rate/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);


/*
 * @Description: file content
 * @LastEditTime: 2021-08-27 16:51:33
 */









var PlayRate = function PlayRate(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      dialogStatus = _useState2[0],
      setDialogStatus = _useState2[1]; // const [speedIcon, setSpeedIcon] = useState('icon-a-10beisu');
  // const [checkSpeed, setCheckSpeed] = useState(1.0);


  var rateData = _store__WEBPACK_IMPORTED_MODULE_2__[/* ApiStore */ "a"].player.getRate;
  var speedList = [{
    title: '放慢速度到0.5倍',
    speed: 0.5
  }, {
    title: '正常速度',
    speed: 1.0
  }, {
    title: '加快速度到1.5倍',
    speed: 1.5
  }, {
    title: '加快速度到2.0倍',
    speed: 2.0
  }];
  /** 弹出事件 */

  var showBottomDialog = function showBottomDialog(type) {
    type && _utils_track__WEBPACK_IMPORTED_MODULE_3__[/* track */ "a"].setEvent("lh_speed_sh_ck");
    setDialogStatus(type);
  };
  /** 改变速率 */


  var bindChange = function bindChange(item) {
    var map = {
      0.5: 'icon-a-05beisu',
      1.0: 'icon-a-10beisu',
      1.5: 'icon-a-15beisu',
      2.0: 'icon-a-20beisu'
    };
    _utils_track__WEBPACK_IMPORTED_MODULE_3__[/* track */ "a"].setEvent("lh_speed_".concat(item.speed, "_ck")); // setCheckSpeed(item.speed);

    setDialogStatus(false); // setSpeedIcon(map[item.speed]);

    _store__WEBPACK_IMPORTED_MODULE_2__[/* ApiStore */ "a"].player.setRate(item.speed);
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
        className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.append_item, " flex"),
        onClick: function onClick() {
          return showBottomDialog(true);
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
          className: "icon ".concat(rateData.icon, " ").concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.speed_icon)
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.append_text,
          children: "\u500D\u901F"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        value: dialogStatus,
        onClose: function onClose() {
          return setDialogStatus(false);
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.dialog_content_wrapper,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
            className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title_content, " flex"),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
              children: "\u8C03\u6574\u64AD\u653E\u901F\u5EA6"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              onClick: function onClick() {
                return showBottomDialog(false);
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                className: "icon icon-guanbibeifen ".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.icon_guanbibeifen)
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.close_text,
                children: "\u5173\u95ED"
              })]
            })]
          }), speedList.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
              catchMove: true,
              onClick: function onClick() {
                return bindChange(item);
              },
              className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.speed_item, " flex"),
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.speed_text, " ").concat(item.speed === rateData.rate && _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.speed_on),
                children: item.title
              }), item.speed === rateData.rate && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
                className: "icon icon-xuanze ".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.icon_xuanze)
              })]
            }, index);
          })]
        })
      })]
    });
  }, [rateData, dialogStatus]);
};

/* harmony default export */ __webpack_exports__["a"] = (PlayRate);

/***/ }),

/***/ "./src/pages/detail/components/play-title/index.module.scss":
/*!******************************************************************!*\
  !*** ./src/pages/detail/components/play-title/index.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"lecture_title_wrapper":"lecture_title_wrapper--1KSLH","lecture_text":"lecture_text--1NgBo","sub_title":"sub_title--2HTc0","title":"title--3L3Eh"};

/***/ }),

/***/ "./src/pages/detail/components/play-title/play-title.tsx":
/*!***************************************************************!*\
  !*** ./src/pages/detail/components/play-title/play-title.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/detail/components/play-title/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var PlayTitle = function PlayTitle(props) {
  var cover_url = props.cover_url,
      lecture_name = props.lecture_name,
      anchor = props.anchor,
      author = props.author;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.lecture_title_wrapper,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
        className: "common-book-cover",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: "common-tip-img"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "f"], {
          className: "common-book-img",
          mode: "aspectFill",
          src: cover_url
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.lecture_text,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
          children: lecture_name
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sub_title,
          children: '主播：' + (anchor || '/')
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "o"], {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sub_title,
          children: '作者：' + (author || '/')
        })]
      })]
    });
  }, [cover_url, lecture_name, anchor, author]);
};

/* harmony default export */ __webpack_exports__["a"] = (PlayTitle);

/***/ }),

/***/ "./src/pages/detail/components/send-note/send-note.module.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/detail/components/send-note/send-note.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"note-header-wrapper":"note-header-wrapper--269z_","symbol-icon":"symbol-icon--2A8sr","symbol-text":"symbol-text--3wF-C","note-number":"note-number--XuDN3","sn-tip":"sn-tip--3ajvf","note-button":"note-button--3LEWu","note-button-active":"note-button-active--cypL4","publish-icon":"publish-icon--33jSs","button-text":"button-text--q4CcN","note-actionsheet-wrapper":"note-actionsheet-wrapper--IPP6F","top-wrap":"top-wrap--6hKLD","title":"title--2Jt1Y","content":"content--3Tt_G","cancel":"cancel--WkiQm","confirm":"confirm--OJ-eu","confirm-active":"confirm-active--sMIOo","header":"header--31rm1","lecture-info":"lecture-info--2ot8J","lecture-icon":"lecture-icon--2pOWR","lecture-text":"lecture-text--6vW7r","note-scroll-view-container":"note-scroll-view-container--3N3FB","textarea":"textarea--3srSK","publish-text":"publish-text--1ndd5","textarea-footer":"textarea-footer--1ZOlG","note-footer-wrap":"note-footer-wrap--2sGIZ","footer-icon":"footer-icon--LMmG-","footer-txt":"footer-txt--3E255"};

/***/ }),

/***/ "./src/pages/detail/components/send-note/send-note.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/detail/components/send-note/send-note.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/bottom-dialog/bottom-dialog */ "./src/components/bottom-dialog/bottom-dialog.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _utils_track__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/track */ "./src/utils/track.ts");
/* harmony import */ var _utils_WX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/WX */ "./src/utils/WX.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _send_note_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-note.module.scss */ "./src/pages/detail/components/send-note/send-note.module.scss");
/* harmony import */ var _send_note_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_send_note_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_css_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/css-module */ "./src/utils/css-module.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













var SendNote = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__[/* observer */ "b"])(Object(_utils_css_module__WEBPACK_IMPORTED_MODULE_10__[/* CSSModule */ "a"])(function (props) {
  var onEmitNoteSendEvent = props.onEmitNoteSendEvent,
      totalCount = props.totalCount,
      coverUrl = props.coverUrl,
      lectureName = props.lectureName,
      sendSucc = props.sendSucc,
      manuMessage = props.manuMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      noteValue = _useState2[0],
      setNoteValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState4 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      textareaFous = _useState4[0],
      setTextareaFous = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(500),
      _useState6 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      maxlength = _useState6[0],
      setMaxlength = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(0),
      _useState8 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
      minLength = _useState8[0],
      setMinLength = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(431),
      _useState10 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
      cursorSpacing = _useState10[0],
      setCursorSpacing = _useState10[1]; // 指定光标与键盘的距离，单位 px 。取 Textarea 距离底部的距离和 cursorSpacing 指定的距离的最小值作为光标与键盘的距离


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState12 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState11, 2),
      isManuscripts = _useState12[0],
      setIsManuscripts = _useState12[1]; // 是否显示文稿


  var _ApiStore$common = _store__WEBPACK_IMPORTED_MODULE_2__[/* ApiStore */ "a"].common,
      showNoteDialog = _ApiStore$common.showNoteDialog,
      noteType = _ApiStore$common.noteType,
      noteContent = _ApiStore$common.noteContent;
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (sendSucc) {
      _store__WEBPACK_IMPORTED_MODULE_2__[/* ApiStore */ "a"].common.setNoteDialog(false);
      setNoteValue('');
      setMinLength(0);
    }

    return function () {
      _store__WEBPACK_IMPORTED_MODULE_2__[/* ApiStore */ "a"].common.setNoteDialog(false);
      setIsManuscripts(false);
    };
  }, [sendSucc]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (noteType === 'edit') {
      setNoteValue(noteContent);
    }
  }, [noteType]); // 显示发表笔记弹窗

  var bindShowActionNote = function bindShowActionNote(type) {
    type && _utils_track__WEBPACK_IMPORTED_MODULE_4__[/* track */ "a"].setEvent('lh_play_no_s');
    _store__WEBPACK_IMPORTED_MODULE_2__[/* ApiStore */ "a"].common.setNoteDialog(type);
  };
  /** 发表笔记 */


  var bindPublishNote = function bindPublishNote() {
    var value = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__[/* trim */ "t"])(noteValue);

    if (!value) {
      _utils_WX__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Toast('请输入笔记后再发表哦');
      setTextareaFous(true);
      return;
    }

    onEmitNoteSendEvent === null || onEmitNoteSendEvent === void 0 ? void 0 : onEmitNoteSendEvent(value, function (isSuccess) {
      if (isSuccess) setNoteValue('');
    });
  };

  var bindKeyoardHeightChange = function bindKeyoardHeightChange(e) {
    console.log('bindKeyoardHeightChange', e.detail.height, cursorSpacing);

    if (e.detail.height) {
      console.log('设置为431', e.detail.duration * 1000);
      setCursorSpacing(e.detail.height);
    }
  }; // 监听文本框内容


  var valueChange = function valueChange(e) {
    var value = Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__[/* trim */ "t"])(e.detail.value);
    var length = value.length;
    if (length > 500) length = 500;
    setMinLength(length);
    setNoteValue(value);
  }; // 点击收起、展开文稿按钮


  var onManuscript = function onManuscript() {
    setTextareaFous(true);
    setIsManuscripts(!isManuscripts);
  };

  var onClose = function onClose() {
    _store__WEBPACK_IMPORTED_MODULE_2__[/* ApiStore */ "a"].common.setNoteDialog(false);
    setIsManuscripts(false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Block */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
      styleName: "note-header-wrapper",
      className: "flex",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "f"], {
          styleName: "symbol-icon",
          src: "https://static-1253442168.file.myqcloud.com/xupload/20210603_douhao.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          className: "flex",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
            styleName: "symbol-text",
            children: "\u7CBE\u9009\u5B66\u4E60\u7B14\u8BB0"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
            styleName: "sn-tip",
            children: "/"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
            styleName: "note-number",
            children: totalCount
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_bottom_dialog_bottom_dialog__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      fixed: true,
      value: showNoteDialog,
      onClose: onClose,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        catchMove: true,
        styleName: "note-actionsheet-wrapper",
        children: [isManuscripts && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          styleName: "top-wrap",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
            styleName: "title",
            children: "\u6587\u7A3F"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "k"], {
            styleName: "content",
            scrollY: true,
            onScroll: function onScroll() {
              return setTextareaFous(true);
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* RichText */ "j"], {
              nodes: manuMessage
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
            styleName: "note-actionsheet-popup"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "k"], {
          styleName: "note-scroll-view-container",
          scrollY: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Textarea */ "n"], {
            styleName: "textarea",
            value: noteValue,
            placeholder: "\u8BF7\u8F93\u5165\u8BFB\u4E66\u7B14\u8BB0\u2026",
            maxlength: maxlength,
            focus: textareaFous,
            fixed: true,
            holdKeyboard: true,
            cursorSpacing: cursorSpacing,
            onKeyboardHeightChange: bindKeyoardHeightChange,
            onInput: valueChange
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
            styleName: "textarea-footer",
            children: minLength + '/' + maxlength + '字'
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          styleName: "note-footer-wrap",
          className: "flex",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
            className: "flex",
            onClick: onManuscript,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
              className: "icon ".concat(isManuscripts ? 'icon-bijishouqi' : 'icon-bijizhankai'),
              styleName: "footer-icon"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
              styleName: "footer-txt",
              children: [isManuscripts ? '收起' : '展开', "\u6587\u7A3F"]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
            className: "flex",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
              styleName: "cancel",
              onClick: function onClick() {
                return bindShowActionNote(false);
              },
              children: "\u53D6\u6D88"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
              styleName: "confirm",
              style: {
                opacity: !Object(_utils_tools__WEBPACK_IMPORTED_MODULE_3__[/* trim */ "t"])(noteValue) ? '0.5' : '1'
              },
              onClick: bindPublishNote,
              children: "\u53D1\u8868\u7B14\u8BB0"
            })]
          })]
        })]
      })
    })]
  });
}, _send_note_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a));
/* harmony default export */ __webpack_exports__["a"] = (SendNote);

/***/ }),

/***/ "./src/pages/detail/components/share/share.scss":
/*!******************************************************!*\
  !*** ./src/pages/detail/components/share/share.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/components/share/share.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/detail/components/share/share.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _share_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share.scss */ "./src/pages/detail/components/share/share.scss");
/* harmony import */ var _share_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_share_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











var Share = function Share(props) {
  var coverUrl = props.coverUrl,
      objectId = props.objectId,
      setShareInfoCallback = props.setShareInfoCallback;
  var width = 422;
  var height = 338;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    imageUrl: '',
    path: '/pages/activity/activity?from=share_book',
    title: '我正在听这本书，感觉很不错，你也来一起听书吧！'
  }),
      _useState2 = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      shareInfo = _useState2[0],
      setShareInfo = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (coverUrl) initCanvas();
  }, [coverUrl]);

  var initCanvas = function initCanvas() {
    setTimeout(function () {
      // 优化，可能拿不到
      var query = wx.createSelectorQuery();
      query.select('#shareCanvas').fields({
        node: true,
        rect: true
      }, function (res) {
        console.log('res2222', res);
        var canvas = res.node;
        var ctx = canvas.getContext('2d');
        canvas.width = width; //本地图像的width

        canvas.height = height; //本地图像的height

        render(canvas, ctx);
      }).exec();
    }, 300);
  };

  var render = function render(canvas, ctx) {
    var img = canvas.createImage();
    img.onload = /*#__PURE__*/Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('img', img, img.src);
              ctx.drawImage(img, 0, 0, width, height);
              _context.next = 4;
              return setBookCover(canvas, ctx);

            case 4:
              setCanvas(canvas);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    img.src = "https://static-1253442168.file.myqcloud.com/xupload/20210817_share.png";
  }; // 绘制书籍封面


  var setBookCover = function setBookCover(canvas, ctx) {
    var leftX = 136;
    var topY = 48; // 绘制圆角

    function roundRect(x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.clip();
    } // 绘制阴影


    function roundShadow() {
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 5;
      ctx.shadowBlur = 8; // @ts-ignore

      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.37)';
      ctx.fillRect(leftX, topY, 8, 194);
    }

    return new Promise(function (resolve, reject) {
      console.log(' Taro.getImageInfo', coverUrl);
      var img = canvas.createImage();

      img.onload = function () {
        roundRect(leftX, topY, 146, 194, 10);
        ctx.drawImage(img, leftX, topY, 146, 194);
        roundShadow();
        resolve();
      };

      img.src = coverUrl; // Taro.getImageInfo({
      //   src: coverUrl,
      //   success: (res) => {
      //     console.log('getImageInfo', res);
      //     if (res.path) {
      //       let img = canvas.createImage();
      //       img.onload = () => {
      //         roundRect(leftX, topY, 146, 194, 10);
      //         ctx.drawImage(img, leftX, topY, 146, 194);
      //         roundShadow();
      //         resolve();
      //       };
      //       img.src = res.path;
      //     }
      //   },
      //   fail: (err) => {
      //     console.log('getImageInfo', err);
      //     reject(err);
      //   },
      // });
    });
  }; // 生成图片


  var setCanvas = function setCanvas(canvas) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.canvasToTempFilePath({
      canvas: canvas,
      width: width,
      height: height,
      destWidth: width,
      destHeight: height,
      success: function success(res) {
        var newShareInfo = Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_work_codes_work_lihua_listen_mini_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, shareInfo), {}, {
          imageUrl: res.tempFilePath
        });

        setShareInfo(newShareInfo);
        setShareInfoCallback === null || setShareInfoCallback === void 0 ? void 0 : setShareInfoCallback(newShareInfo); // 回调给详情，用于右上角分享
      }
    });
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Block */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "b"], {
        className: "append-item flex",
        openType: "share",
        "data-shareInfo": shareInfo,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "m"], {
          className: "icon icon-fenxiang1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "o"], {
          className: "append-text",
          children: "\u5206\u4EAB\u597D\u4E66"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Canvas */ "c"], {
        className: "share-canvas",
        id: "shareCanvas",
        type: "2d",
        style: 'width: ' + width + 'px;height: ' + height + 'px'
      })]
    });
  }, [coverUrl, objectId, shareInfo]);
};

/* harmony default export */ __webpack_exports__["a"] = (Share);

/***/ }),

/***/ "./src/pages/detail/detail.module.scss":
/*!*********************************************!*\
  !*** ./src/pages/detail/detail.module.scss ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bottom-line":"bottom-line--3vA1i","scroll-view-container":"scroll-view-container--7oJgF","play-content-wrapper":"play-content-wrapper--1Jtod","play-box-container":"play-box-container--34rk0","loading-note":"loading-note--20aZw","loading-img":"loading-img--bdvkY","play-fun-list":"play-fun-list--2LH60","common-book-cover":"common-book-cover--HPgvm","common-tip-img":"common-tip-img--20uch","common-book-img":"common-book-img--4vdiG"};

/***/ }),

/***/ "./src/pages/detail/detail.tsx":
/*!*************************************!*\
  !*** ./src/pages/detail/detail.tsx ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_detail_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./detail.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/detail/detail.tsx");


var config = {"navigationBarTitleText":"梨花听书","onReachBottomDistance":100};

_node_modules_babel_loader_lib_index_js_detail_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_detail_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/detail/detail', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/detail/detail.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=detail.js.map