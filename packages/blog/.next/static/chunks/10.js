(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[10],{

/***/ "./components/CheckoutExternal/index.js":
/*!**********************************************!*\
  !*** ./components/CheckoutExternal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/constants */ "./config/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ "./types.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\CheckoutExternal\\index.js",
    _this = undefined;






var Stripe = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./Stripe.js */ "./components/CheckoutExternal/Stripe.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Stripe.js */ "./components/CheckoutExternal/Stripe.js")];
    },
    modules: ["./Stripe.js"]
  }
});
_c2 = Stripe;
var Free = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./Free.js */ "./components/CheckoutExternal/Free.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Free.js */ "./components/CheckoutExternal/Free.js")];
    },
    modules: ["./Free.js"]
  }
});
_c4 = Free;

var CheckoutExternal = function CheckoutExternal(props) {
  var course = props.course;
  var paymentMethod = props.siteInfo.paymentMethod;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [course.cost === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Free, {
      course: course
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }, _this), course.cost !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [paymentMethod === _config_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_METHOD_STRIPE"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stripe, {
        course: course
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this), paymentMethod === _config_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_METHOD_PAYTM"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), paymentMethod === _config_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_METHOD_PAYPAL"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
};

_c5 = CheckoutExternal;
CheckoutExternal.propTypes = {
  course: _types__WEBPACK_IMPORTED_MODULE_4__["publicCourse"].isRequired,
  siteInfo: _types__WEBPACK_IMPORTED_MODULE_4__["siteInfoProps"].isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    siteInfo: state.siteinfo
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CheckoutExternal));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Stripe$dynamic");
$RefreshReg$(_c2, "Stripe");
$RefreshReg$(_c3, "Free$dynamic");
$RefreshReg$(_c4, "Free");
$RefreshReg$(_c5, "CheckoutExternal");

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEV4dGVybmFsL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0cmlwZSIsImR5bmFtaWMiLCJGcmVlIiwiQ2hlY2tvdXRFeHRlcm5hbCIsInByb3BzIiwiY291cnNlIiwicGF5bWVudE1ldGhvZCIsInNpdGVJbmZvIiwiY29zdCIsIlBBWU1FTlRfTUVUSE9EX1NUUklQRSIsIlBBWU1FTlRfTUVUSE9EX1BBWVRNIiwiUEFZTUVOVF9NRVRIT0RfUEFZUEFMIiwicHJvcFR5cGVzIiwicHVibGljQ291cnNlIiwiaXNSZXF1aXJlZCIsInNpdGVJbmZvUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImF1dGgiLCJzaXRlaW5mbyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sMklBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDREQUFkO0FBQUE7QUFBQSxjQUFjLGFBQWQ7QUFBQTtBQUFBLEVBQXRCO01BQU1ELE07QUFDTixJQUFNRSxJQUFJLEdBQUdELG1EQUFPLE9BQUM7QUFBQSxTQUFNLHVJQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyx3REFBZDtBQUFBO0FBQUEsY0FBYyxXQUFkO0FBQUE7QUFBQSxFQUFwQjtNQUFNQyxJOztBQUVOLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDMUJDLE1BRDBCLEdBQ2ZELEtBRGUsQ0FDMUJDLE1BRDBCO0FBQUEsTUFFMUJDLGFBRjBCLEdBRVJGLEtBQUssQ0FBQ0csUUFGRSxDQUUxQkQsYUFGMEI7QUFJbEMsc0JBQ0U7QUFBQSxlQUNHRCxNQUFNLENBQUNHLElBQVAsS0FBZ0IsQ0FBaEIsaUJBQXFCLHFFQUFDLElBQUQ7QUFBTSxZQUFNLEVBQUVIO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUR4QixFQUVHQSxNQUFNLENBQUNHLElBQVAsS0FBZ0IsQ0FBaEIsaUJBQ0M7QUFBQSxpQkFDR0YsYUFBYSxLQUFLRyx1RUFBbEIsaUJBQ0MscUVBQUMsTUFBRDtBQUFRLGNBQU0sRUFBRUo7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBSUdDLGFBQWEsS0FBS0ksc0VBQWxCLGlCQUEwQyx1SkFKN0MsRUFLR0osYUFBYSxLQUFLSyx1RUFBbEIsaUJBQTJDLHVKQUw5QztBQUFBLG9CQUhKO0FBQUEsa0JBREY7QUFjRCxDQWxCRDs7TUFBTVIsZ0I7QUFvQk5BLGdCQUFnQixDQUFDUyxTQUFqQixHQUE2QjtBQUMzQlAsUUFBTSxFQUFFUSxtREFBWSxDQUFDQyxVQURNO0FBRTNCUCxVQUFRLEVBQUVRLG9EQUFhLENBQUNEO0FBRkcsQ0FBN0I7O0FBS0EsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0MsUUFBSSxFQUFFRCxLQUFLLENBQUNDLElBRHNCO0FBRWxDWCxZQUFRLEVBQUVVLEtBQUssQ0FBQ0U7QUFGa0IsR0FBWjtBQUFBLENBQXhCOztBQUtlQywwSEFBTyxDQUFDSixlQUFELENBQVAsQ0FBeUJiLGdCQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBQQVlNRU5UX01FVEhPRF9QQVlQQUwsXHJcbiAgUEFZTUVOVF9NRVRIT0RfUEFZVE0sXHJcbiAgUEFZTUVOVF9NRVRIT0RfU1RSSVBFLFxyXG59IGZyb20gXCIuLi8uLi9jb25maWcvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHB1YmxpY0NvdXJzZSwgc2l0ZUluZm9Qcm9wcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5jb25zdCBTdHJpcGUgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vU3RyaXBlLmpzXCIpKTtcclxuY29uc3QgRnJlZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9GcmVlLmpzXCIpKTtcclxuXHJcbmNvbnN0IENoZWNrb3V0RXh0ZXJuYWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNvdXJzZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBwYXltZW50TWV0aG9kIH0gPSBwcm9wcy5zaXRlSW5mbztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtjb3Vyc2UuY29zdCA9PT0gMCAmJiA8RnJlZSBjb3Vyc2U9e2NvdXJzZX0gLz59XHJcbiAgICAgIHtjb3Vyc2UuY29zdCAhPT0gMCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtwYXltZW50TWV0aG9kID09PSBQQVlNRU5UX01FVEhPRF9TVFJJUEUgJiYgKFxyXG4gICAgICAgICAgICA8U3RyaXBlIGNvdXJzZT17Y291cnNlfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtwYXltZW50TWV0aG9kID09PSBQQVlNRU5UX01FVEhPRF9QQVlUTSAmJiA8PjwvPn1cclxuICAgICAgICAgIHtwYXltZW50TWV0aG9kID09PSBQQVlNRU5UX01FVEhPRF9QQVlQQUwgJiYgPD48Lz59XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQ2hlY2tvdXRFeHRlcm5hbC5wcm9wVHlwZXMgPSB7XHJcbiAgY291cnNlOiBwdWJsaWNDb3Vyc2UuaXNSZXF1aXJlZCxcclxuICBzaXRlSW5mbzogc2l0ZUluZm9Qcm9wcy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGF1dGg6IHN0YXRlLmF1dGgsXHJcbiAgc2l0ZUluZm86IHN0YXRlLnNpdGVpbmZvLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGVja291dEV4dGVybmFsKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==