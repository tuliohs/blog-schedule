exports.ids = [8];
exports.modules = {

/***/ "./components/CheckoutExternal/Stripe.js":
/*!***********************************************!*\
  !*** ./components/CheckoutExternal/Stripe.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./config/strings.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\CheckoutExternal\\Stripe.js";









const Stripe = props => {
  const {
    course,
    siteInfo,
    auth,
    address
  } = props;
  const stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__["loadStripe"])(siteInfo.stripePublishableKey);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  const handleClick = async () => {
    let initiatePaymentResponse = await makePaymentRequest({
      courseId: course.id,
      backend: address.backend,
      token: auth.token,
      frontend: address.frontend,
      router
    });

    if (initiatePaymentResponse.status === 401) {
      router.push(`/login?redirect=${router.asPath}`);
      return;
    }

    try {
      initiatePaymentResponse = await initiatePaymentResponse.json();
      await redirectToStripeCheckout({
        stripe: await stripePromise,
        sessionId: initiatePaymentResponse.paymentTracker
      });
    } catch (err) {}
  };

  const makePaymentRequest = async ({
    courseId,
    backend,
    token,
    router,
    frontend
  }) => {
    const formData = new window.FormData();
    formData.append("courseid", courseId);
    formData.append("metadata", JSON.stringify({
      cancelUrl: `${frontend}${router.asPath}`,
      successUrl: `${frontend}/purchase`,
      sourceUrl: router.asPath
    }));
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(`${backend}/payment/initiate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });
    return res;
  };

  const redirectToStripeCheckout = async ({
    stripe,
    sessionId
  }) => {
    const result = await stripe.redirectToCheckout({
      sessionId
    });

    if (result.error) {// console.log(result.error);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleClick,
    variant: "contained",
    color: "primary",
    children: _config_strings__WEBPACK_IMPORTED_MODULE_5__["ENROLL_BUTTON_TEXT"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, undefined);
};

Stripe.propTypes = {
  course: _types__WEBPACK_IMPORTED_MODULE_3__["publicCourse"].isRequired,
  siteInfo: _types__WEBPACK_IMPORTED_MODULE_3__["siteInfoProps"],
  auth: _types__WEBPACK_IMPORTED_MODULE_3__["authProps"],
  address: _types__WEBPACK_IMPORTED_MODULE_3__["addressProps"]
};

const mapStateToProps = state => ({
  siteInfo: state.siteinfo,
  auth: state.auth,
  address: state.address
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Stripe));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0RXh0ZXJuYWwvU3RyaXBlLmpzIl0sIm5hbWVzIjpbIlN0cmlwZSIsInByb3BzIiwiY291cnNlIiwic2l0ZUluZm8iLCJhdXRoIiwiYWRkcmVzcyIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwic3RyaXBlUHVibGlzaGFibGVLZXkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDbGljayIsImluaXRpYXRlUGF5bWVudFJlc3BvbnNlIiwibWFrZVBheW1lbnRSZXF1ZXN0IiwiY291cnNlSWQiLCJpZCIsImJhY2tlbmQiLCJ0b2tlbiIsImZyb250ZW5kIiwic3RhdHVzIiwicHVzaCIsImFzUGF0aCIsImpzb24iLCJyZWRpcmVjdFRvU3RyaXBlQ2hlY2tvdXQiLCJzdHJpcGUiLCJzZXNzaW9uSWQiLCJwYXltZW50VHJhY2tlciIsImVyciIsImZvcm1EYXRhIiwid2luZG93IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2FuY2VsVXJsIiwic3VjY2Vzc1VybCIsInNvdXJjZVVybCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwicmVzdWx0IiwicmVkaXJlY3RUb0NoZWNrb3V0IiwiZXJyb3IiLCJFTlJPTExfQlVUVE9OX1RFWFQiLCJwcm9wVHlwZXMiLCJwdWJsaWNDb3Vyc2UiLCJpc1JlcXVpcmVkIiwic2l0ZUluZm9Qcm9wcyIsImF1dGhQcm9wcyIsImFkZHJlc3NQcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic2l0ZWluZm8iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLFFBQU07QUFBRUMsVUFB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LG1EQUFZQTtBQUpKLENBQW5COztBQU9BLE1BQU1DLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDbkQsVUFBUSxFQUFFbUQsS0FBSyxDQUFDQyxRQURrQjtBQUVsQ25ELE1BQUksRUFBRWtELEtBQUssQ0FBQ2xELElBRnNCO0FBR2xDQyxTQUFPLEVBQUVpRCxLQUFLLENBQUNqRDtBQUhtQixDQUFaLENBQXhCOztBQU1lbUQsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCckQsTUFBekIsQ0FBZixFIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIGFkZHJlc3NQcm9wcyxcclxuICBhdXRoUHJvcHMsXHJcbiAgcHVibGljQ291cnNlLFxyXG4gIHNpdGVJbmZvUHJvcHMsXHJcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuaW1wb3J0IHsgRU5ST0xMX0JVVFRPTl9URVhUIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9zdHJpbmdzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcblxyXG5jb25zdCBTdHJpcGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNvdXJzZSwgc2l0ZUluZm8sIGF1dGgsIGFkZHJlc3MgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKHNpdGVJbmZvLnN0cmlwZVB1Ymxpc2hhYmxlS2V5KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgaW5pdGlhdGVQYXltZW50UmVzcG9uc2UgPSBhd2FpdCBtYWtlUGF5bWVudFJlcXVlc3Qoe1xyXG4gICAgICBjb3Vyc2VJZDogY291cnNlLmlkLFxyXG4gICAgICBiYWNrZW5kOiBhZGRyZXNzLmJhY2tlbmQsXHJcbiAgICAgIHRva2VuOiBhdXRoLnRva2VuLFxyXG4gICAgICBmcm9udGVuZDogYWRkcmVzcy5mcm9udGVuZCxcclxuICAgICAgcm91dGVyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGluaXRpYXRlUGF5bWVudFJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvbG9naW4/cmVkaXJlY3Q9JHtyb3V0ZXIuYXNQYXRofWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaW5pdGlhdGVQYXltZW50UmVzcG9uc2UgPSBhd2FpdCBpbml0aWF0ZVBheW1lbnRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGF3YWl0IHJlZGlyZWN0VG9TdHJpcGVDaGVja291dCh7XHJcbiAgICAgICAgc3RyaXBlOiBhd2FpdCBzdHJpcGVQcm9taXNlLFxyXG4gICAgICAgIHNlc3Npb25JZDogaW5pdGlhdGVQYXltZW50UmVzcG9uc2UucGF5bWVudFRyYWNrZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1ha2VQYXltZW50UmVxdWVzdCA9IGFzeW5jICh7XHJcbiAgICBjb3Vyc2VJZCxcclxuICAgIGJhY2tlbmQsXHJcbiAgICB0b2tlbixcclxuICAgIHJvdXRlcixcclxuICAgIGZyb250ZW5kLFxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IHdpbmRvdy5Gb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY291cnNlaWRcIiwgY291cnNlSWQpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFxyXG4gICAgICBcIm1ldGFkYXRhXCIsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBjYW5jZWxVcmw6IGAke2Zyb250ZW5kfSR7cm91dGVyLmFzUGF0aH1gLFxyXG4gICAgICAgIHN1Y2Nlc3NVcmw6IGAke2Zyb250ZW5kfS9wdXJjaGFzZWAsXHJcbiAgICAgICAgc291cmNlVXJsOiByb3V0ZXIuYXNQYXRoLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kfS9wYXltZW50L2luaXRpYXRlYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9O1xyXG5cclxuICBjb25zdCByZWRpcmVjdFRvU3RyaXBlQ2hlY2tvdXQgPSBhc3luYyAoeyBzdHJpcGUsIHNlc3Npb25JZCB9KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHtcclxuICAgICAgc2Vzc2lvbklkLFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAge0VOUk9MTF9CVVRUT05fVEVYVH1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJpcGUucHJvcFR5cGVzID0ge1xyXG4gIGNvdXJzZTogcHVibGljQ291cnNlLmlzUmVxdWlyZWQsXHJcbiAgc2l0ZUluZm86IHNpdGVJbmZvUHJvcHMsXHJcbiAgYXV0aDogYXV0aFByb3BzLFxyXG4gIGFkZHJlc3M6IGFkZHJlc3NQcm9wcyxcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBzaXRlSW5mbzogc3RhdGUuc2l0ZWluZm8sXHJcbiAgYXV0aDogc3RhdGUuYXV0aCxcclxuICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTdHJpcGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9