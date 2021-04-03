(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

/***/ "./components/CheckoutExternal/Free.js":
/*!*********************************************!*\
  !*** ./components/CheckoutExternal/Free.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types */ "./types.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/strings */ "./config/strings.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\CheckoutExternal\\Free.js",
    _this = undefined,
    _s = $RefreshSig$();





 //import { connect } from "react-redux";


 //import { networkAction, setAppMessage } from "../../redux/actions";
//import AppMessage from "../../models/app-message";

var Free = function Free(_ref) {
  _s();

  var course = _ref.course,
      auth = _ref.auth,
      dispatch = _ref.dispatch,
      address = _ref.address;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      disabled = _useState[0],
      setDisabled = _useState[1];

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var initiatePaymentResponse;
      return C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setDisabled(true); //dispatch(networkAction(true));

              _context.next = 4;
              return makePaymentRequest({
                courseId: course.id,
                backend: address.backend,
                token: auth.token,
                dispatch: dispatch
              });

            case 4:
              initiatePaymentResponse = _context.sent;

              if (!(initiatePaymentResponse.status === 401)) {
                _context.next = 8;
                break;
              }

              router.push("/login?redirect=".concat(router.asPath));
              return _context.abrupt("return");

            case 8:
              _context.next = 10;
              return initiatePaymentResponse.json();

            case 10:
              initiatePaymentResponse = _context.sent;

              if (initiatePaymentResponse.status === "success") {
                router.reload();
              } else if (initiatePaymentResponse.status === "failed") {//dispatch(setAppMessage(new AppMessage(initiatePaymentResponse.error)));
              }

              _context.next = 16;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);

            case 16:
              _context.prev = 16;
              dispatch(networkAction(false));
              setDisabled(false);
              return _context.finish(16);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14, 16, 20]]);
    }));

    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  var makePaymentRequest = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {
      var courseId, backend, token, dispatch, formData, res;
      return C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              courseId = _ref3.courseId, backend = _ref3.backend, token = _ref3.token, dispatch = _ref3.dispatch;
              formData = new window.FormData();
              formData.append("courseid", courseId);
              _context2.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(backend, "/payment/initiate"), {
                method: "POST",
                headers: {
                  Authorization: "Bearer ".concat(token)
                },
                body: formData
              });

            case 5:
              res = _context2.sent;
              return _context2.abrupt("return", res);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function makePaymentRequest(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: handleClick,
    variant: "contained",
    color: "primary",
    disabled: disabled,
    children: _config_strings__WEBPACK_IMPORTED_MODULE_7__["ENROLL_BUTTON_TEXT"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};

_s(Free, "J5/6w2tdf0+oecE/ykqK1EcOX9U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c = Free;
Free.propTypes = {
  course: _types__WEBPACK_IMPORTED_MODULE_6__["publicCourse"].isRequired,
  auth: _types__WEBPACK_IMPORTED_MODULE_6__["authProps"],
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  address: _types__WEBPACK_IMPORTED_MODULE_6__["addressProps"]
}; //const mapStateToProps = (state) => ({auth: state.auth,address: state.address,})
//const mapDispatchToProps = (dispatch) => ({dispatch: dispatch,});
//export default connect(mapStateToProps, mapDispatchToProps)(Free);

/* harmony default export */ __webpack_exports__["default"] = (Free);

var _c;

$RefreshReg$(_c, "Free");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEV4dGVybmFsL0ZyZWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcyJdLCJuYW1lcyI6WyJGcmVlIiwiY291cnNlIiwiYXV0aCIsImRpc3BhdGNoIiwiYWRkcmVzcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImhhbmRsZUNsaWNrIiwibWFrZVBheW1lbnRSZXF1ZXN0IiwiY291cnNlSWQiLCJpZCIsImJhY2tlbmQiLCJ0b2tlbiIsImluaXRpYXRlUGF5bWVudFJlc3BvbnNlIiwic3RhdHVzIiwicHVzaCIsImFzUGF0aCIsImpzb24iLCJyZWxvYWQiLCJuZXR3b3JrQWN0aW9uIiwiZm9ybURhdGEiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwicmVzIiwiRU5ST0xMX0JVVFRPTl9URVhUIiwicHJvcFR5cGVzIiwicHVibGljQ291cnNlIiwiaXNSZXF1aXJlZCIsImF1dGhQcm9wcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJhZGRyZXNzUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtDQUVBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUM7QUFBQTs7QUFBQSxNQUF0Q0MsTUFBc0MsUUFBdENBLE1BQXNDO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDcEQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEb0Qsa0JBRXBCQyxzREFB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QUFDZXhDLG1FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkEsaUJBQWlCLG1CQUFPLENBQUMsdUVBQXNCIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBhZGRyZXNzUHJvcHMsIGF1dGhQcm9wcywgcHVibGljQ291cnNlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IEVOUk9MTF9CVVRUT05fVEVYVCB9IGZyb20gXCIuLi8uLi9jb25maWcvc3RyaW5nc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vaW1wb3J0IHsgbmV0d29ya0FjdGlvbiwgc2V0QXBwTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbi8vaW1wb3J0IEFwcE1lc3NhZ2UgZnJvbSBcIi4uLy4uL21vZGVscy9hcHAtbWVzc2FnZVwiO1xyXG5cclxuY29uc3QgRnJlZSA9ICh7IGNvdXJzZSwgYXV0aCwgZGlzcGF0Y2gsIGFkZHJlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAvL2Rpc3BhdGNoKG5ldHdvcmtBY3Rpb24odHJ1ZSkpO1xyXG5cclxuICAgICAgbGV0IGluaXRpYXRlUGF5bWVudFJlc3BvbnNlID0gYXdhaXQgbWFrZVBheW1lbnRSZXF1ZXN0KHtcclxuICAgICAgICBjb3Vyc2VJZDogY291cnNlLmlkLFxyXG4gICAgICAgIGJhY2tlbmQ6IGFkZHJlc3MuYmFja2VuZCxcclxuICAgICAgICB0b2tlbjogYXV0aC50b2tlbixcclxuICAgICAgICBkaXNwYXRjaCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoaW5pdGlhdGVQYXltZW50UmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2xvZ2luP3JlZGlyZWN0PSR7cm91dGVyLmFzUGF0aH1gKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGluaXRpYXRlUGF5bWVudFJlc3BvbnNlID0gYXdhaXQgaW5pdGlhdGVQYXltZW50UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoaW5pdGlhdGVQYXltZW50UmVzcG9uc2Uuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgfSBlbHNlIGlmIChpbml0aWF0ZVBheW1lbnRSZXNwb25zZS5zdGF0dXMgPT09IFwiZmFpbGVkXCIpIHtcclxuICAgICAgICAvL2Rpc3BhdGNoKHNldEFwcE1lc3NhZ2UobmV3IEFwcE1lc3NhZ2UoaW5pdGlhdGVQYXltZW50UmVzcG9uc2UuZXJyb3IpKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvL2Rpc3BhdGNoKHNldEFwcE1lc3NhZ2UobmV3IEFwcE1lc3NhZ2UoZXJyLm1lc3NhZ2UpKSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBkaXNwYXRjaChuZXR3b3JrQWN0aW9uKGZhbHNlKSk7XHJcbiAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBtYWtlUGF5bWVudFJlcXVlc3QgPSBhc3luYyAoeyBjb3Vyc2VJZCwgYmFja2VuZCwgdG9rZW4sIGRpc3BhdGNoIH0pID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IHdpbmRvdy5Gb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY291cnNlaWRcIiwgY291cnNlSWQpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2JhY2tlbmR9L3BheW1lbnQvaW5pdGlhdGVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgPlxyXG4gICAgICB7RU5ST0xMX0JVVFRPTl9URVhUfVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbkZyZWUucHJvcFR5cGVzID0ge1xyXG4gIGNvdXJzZTogcHVibGljQ291cnNlLmlzUmVxdWlyZWQsXHJcbiAgYXV0aDogYXV0aFByb3BzLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGFkZHJlc3M6IGFkZHJlc3NQcm9wcyxcclxufTtcclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe2F1dGg6IHN0YXRlLmF1dGgsYWRkcmVzczogc3RhdGUuYWRkcmVzcyx9KVxyXG4vL2NvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtkaXNwYXRjaDogZGlzcGF0Y2gsfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRnJlZSk7XHJcbmV4cG9ydCBkZWZhdWx0IEZyZWVcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L3JvdXRlcicpXG4iXSwic291cmNlUm9vdCI6IiJ9