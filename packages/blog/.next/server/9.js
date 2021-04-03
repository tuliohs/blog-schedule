exports.ids = [9];
exports.modules = {

/***/ "./components/CheckoutExternal/index.js":
/*!**********************************************!*\
  !*** ./components/CheckoutExternal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/constants */ "./config/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ "./types.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\CheckoutExternal\\index.js";





const Stripe = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./Stripe.js */ "./components/CheckoutExternal/Stripe.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Stripe.js */ "./components/CheckoutExternal/Stripe.js")],
    modules: ["./Stripe.js"]
  }
});
const Free = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./Free.js */ "./components/CheckoutExternal/Free.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Free.js */ "./components/CheckoutExternal/Free.js")],
    modules: ["./Free.js"]
  }
});

const CheckoutExternal = props => {
  const {
    course
  } = props;
  const {
    paymentMethod
  } = props.siteInfo;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [course.cost === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Free, {
      course: course
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }, undefined), course.cost !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [paymentMethod === _config_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_METHOD_STRIPE"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stripe, {
        course: course
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined), paymentMethod === _config_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_METHOD_PAYTM"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), paymentMethod === _config_constants__WEBPACK_IMPORTED_MODULE_3__["PAYMENT_METHOD_PAYPAL"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
};

CheckoutExternal.propTypes = {
  course: _types__WEBPACK_IMPORTED_MODULE_4__["publicCourse"].isRequired,
  siteInfo: _types__WEBPACK_IMPORTED_MODULE_4__["siteInfoProps"].isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  siteInfo: state.siteinfo
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CheckoutExternal));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0RXh0ZXJuYWwvaW5kZXguanMiXSwibmFtZXMiOlsiU3RyaXBlIiwiZHluYW1pYyIsIkZyZWUiLCJDaGVja291dEV4dGVybmFsIiwicHJvcHMiLCJjb3Vyc2UiLCJwYXltZW50TWV0aG9kIiwic2l0ZUluZm8iLCJjb3N0IiwiUEFZTUVOVF9NRVRIT0RfU1RSSVBFIiwiUEFZTUVOVF9NRVRIT0RfUEFZVE0iLCJQQVlNRU5UX01FVEhPRF9QQVlQQUwiLCJwcm9wVHlwZXMiLCJwdWJsaWNDb3Vyc2UiLCJpc1JlcXVpcmVkIiwic2l0ZUluZm9Qcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXV0aCIsInNpdGVpbmZvIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLG1EQUFPLENBQUMsTUFBTSwySUFBUDtBQUFBO0FBQUEsd0NBQWMsNERBQWQ7QUFBQSxjQUFjLGFBQWQ7QUFBQTtBQUFBLEVBQXRCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxtREFBTyxDQUFDLE1BQU0sdUlBQVA7QUFBQTtBQUFBLHdDQUFjLHdEQUFkO0FBQUEsY0FBYyxXQUFkO0FBQUE7QUFBQSxFQUFwQjs7QUFFQSxNQUFNRSxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFFBQU07QUFBRUM7QUFBRixNQUFhRCxLQUFuQjtBQUNBLFFBQU07QUFBRUU7QUFBRixNQUFvQkYsS0FBSyxDQUFDRyxRQUFoQztBQUVBLHNCQUNFO0FBQUEsZUFDR0YsTUFBTSxDQUFDRyxJQUFQLEtBQWdCLENBQWhCLGlCQUFxQixxRUFBQyxJQUFEO0FBQU0sWUFBTSxFQUFFSDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHhCLEVBRUdBLE1BQU0sQ0FBQ0csSUFBUCxLQUFnQixDQUFoQixpQkFDQztBQUFBLGlCQUNHRixhQUFhLEtBQUtHLHVFQUFsQixpQkFDQyxxRUFBQyxNQUFEO0FBQVEsY0FBTSxFQUFFSjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBSUdDLGFBQWEsS0FBS0ksc0VBQWxCLGlCQUEwQyx1SkFKN0MsRUFLR0osYUFBYSxLQUFLSyx1RUFBbEIsaUJBQTJDLHVKQUw5QztBQUFBLG9CQUhKO0FBQUEsa0JBREY7QUFjRCxDQWxCRDs7QUFvQkFSLGdCQUFnQixDQUFDUyxTQUFqQixHQUE2QjtBQUMzQlAsUUFBTSxFQUFFUSxtREFBWSxDQUFDQyxVQURNO0FBRTNCUCxVQUFRLEVBQUVRLG9EQUFhLENBQUNEO0FBRkcsQ0FBN0I7O0FBS0EsTUFBTUUsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbENDLE1BQUksRUFBRUQsS0FBSyxDQUFDQyxJQURzQjtBQUVsQ1gsVUFBUSxFQUFFVSxLQUFLLENBQUNFO0FBRmtCLENBQVosQ0FBeEI7O0FBS2VDLDBIQUFPLENBQUNKLGVBQUQsQ0FBUCxDQUF5QmIsZ0JBQXpCLENBQWYsRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgUEFZTUVOVF9NRVRIT0RfUEFZUEFMLFxyXG4gIFBBWU1FTlRfTUVUSE9EX1BBWVRNLFxyXG4gIFBBWU1FTlRfTUVUSE9EX1NUUklQRSxcclxufSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBwdWJsaWNDb3Vyc2UsIHNpdGVJbmZvUHJvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuY29uc3QgU3RyaXBlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL1N0cmlwZS5qc1wiKSk7XHJcbmNvbnN0IEZyZWUgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vRnJlZS5qc1wiKSk7XHJcblxyXG5jb25zdCBDaGVja291dEV4dGVybmFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjb3Vyc2UgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgcGF5bWVudE1ldGhvZCB9ID0gcHJvcHMuc2l0ZUluZm87XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y291cnNlLmNvc3QgPT09IDAgJiYgPEZyZWUgY291cnNlPXtjb3Vyc2V9IC8+fVxyXG4gICAgICB7Y291cnNlLmNvc3QgIT09IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7cGF5bWVudE1ldGhvZCA9PT0gUEFZTUVOVF9NRVRIT0RfU1RSSVBFICYmIChcclxuICAgICAgICAgICAgPFN0cmlwZSBjb3Vyc2U9e2NvdXJzZX0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cGF5bWVudE1ldGhvZCA9PT0gUEFZTUVOVF9NRVRIT0RfUEFZVE0gJiYgPD48Lz59XHJcbiAgICAgICAgICB7cGF5bWVudE1ldGhvZCA9PT0gUEFZTUVOVF9NRVRIT0RfUEFZUEFMICYmIDw+PC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkNoZWNrb3V0RXh0ZXJuYWwucHJvcFR5cGVzID0ge1xyXG4gIGNvdXJzZTogcHVibGljQ291cnNlLmlzUmVxdWlyZWQsXHJcbiAgc2l0ZUluZm86IHNpdGVJbmZvUHJvcHMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBhdXRoOiBzdGF0ZS5hdXRoLFxyXG4gIHNpdGVJbmZvOiBzdGF0ZS5zaXRlaW5mbyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hlY2tvdXRFeHRlcm5hbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=