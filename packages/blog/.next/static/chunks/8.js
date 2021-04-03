(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[8],{

/***/ "../../node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/MGS/Sistemas/temp/courselit/node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \**********************************************************************************************/
/*! exports provided: loadStripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStripe", function() { return loadStripe; });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.11.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
};

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./components/CheckoutExternal/Stripe.js":
/*!***********************************************!*\
  !*** ./components/CheckoutExternal/Stripe.js ***!
  \***********************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "./types.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ "../../node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/strings */ "./config/strings.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\CheckoutExternal\\Stripe.js",
    _this = undefined,
    _s = $RefreshSig$();










var Stripe = function Stripe(props) {
  _s();

  var course = props.course,
      siteInfo = props.siteInfo,
      auth = props.auth,
      address = props.address;
  var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__["loadStripe"])(siteInfo.stripePublishableKey);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var initiatePaymentResponse;
      return C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return makePaymentRequest({
                courseId: course.id,
                backend: address.backend,
                token: auth.token,
                frontend: address.frontend,
                router: router
              });

            case 2:
              initiatePaymentResponse = _context.sent;

              if (!(initiatePaymentResponse.status === 401)) {
                _context.next = 6;
                break;
              }

              router.push("/login?redirect=".concat(router.asPath));
              return _context.abrupt("return");

            case 6:
              _context.prev = 6;
              _context.next = 9;
              return initiatePaymentResponse.json();

            case 9:
              initiatePaymentResponse = _context.sent;
              _context.t0 = redirectToStripeCheckout;
              _context.next = 13;
              return stripePromise;

            case 13:
              _context.t1 = _context.sent;
              _context.t2 = initiatePaymentResponse.paymentTracker;
              _context.t3 = {
                stripe: _context.t1,
                sessionId: _context.t2
              };
              _context.next = 18;
              return (0, _context.t0)(_context.t3);

            case 18:
              _context.next = 22;
              break;

            case 20:
              _context.prev = 20;
              _context.t4 = _context["catch"](6);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 20]]);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  var makePaymentRequest = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
      var courseId, backend, token, router, frontend, formData, res;
      return C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              courseId = _ref2.courseId, backend = _ref2.backend, token = _ref2.token, router = _ref2.router, frontend = _ref2.frontend;
              formData = new window.FormData();
              formData.append("courseid", courseId);
              formData.append("metadata", JSON.stringify({
                cancelUrl: "".concat(frontend).concat(router.asPath),
                successUrl: "".concat(frontend, "/purchase"),
                sourceUrl: router.asPath
              }));
              _context2.next = 6;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("".concat(backend, "/payment/initiate"), {
                method: "POST",
                headers: {
                  Authorization: "Bearer ".concat(token)
                },
                body: formData
              });

            case 6:
              res = _context2.sent;
              return _context2.abrupt("return", res);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function makePaymentRequest(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var redirectToStripeCheckout = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref4) {
      var stripe, sessionId, result;
      return C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              stripe = _ref4.stripe, sessionId = _ref4.sessionId;
              _context3.next = 3;
              return stripe.redirectToCheckout({
                sessionId: sessionId
              });

            case 3:
              result = _context3.sent;

              if (result.error) {// console.log(result.error);
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function redirectToStripeCheckout(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleClick,
    variant: "contained",
    color: "primary",
    children: _config_strings__WEBPACK_IMPORTED_MODULE_7__["ENROLL_BUTTON_TEXT"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, _this);
};

_s(Stripe, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c = Stripe;
Stripe.propTypes = {
  course: _types__WEBPACK_IMPORTED_MODULE_5__["publicCourse"].isRequired,
  siteInfo: _types__WEBPACK_IMPORTED_MODULE_5__["siteInfoProps"],
  auth: _types__WEBPACK_IMPORTED_MODULE_5__["authProps"],
  address: _types__WEBPACK_IMPORTED_MODULE_5__["addressProps"]
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    siteInfo: state.siteinfo,
    auth: state.auth,
    address: state.address
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Stripe));

var _c;

$RefreshReg$(_c, "Stripe");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FL0M6L1VzZXJzL01HUy9TaXN0ZW1hcy90ZW1wL2NvdXJzZWxpdC9ub2RlX21vZHVsZXMvQHN0cmlwZS9zdHJpcGUtanMvZGlzdC9zdHJpcGUuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoZWNrb3V0RXh0ZXJuYWwvU3RyaXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiXSwibmFtZXMiOlsiU3RyaXBlIiwicHJvcHMiLCJjb3Vyc2UiLCJzaXRlSW5mbyIsImF1dGgiLCJhZGRyZXNzIiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJzdHJpcGVQdWJsaXNoYWJsZUtleSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwibWFrZVBheW1lbnRSZXF1ZXN0IiwiY291cnNlSWQiLCJpZCIsImJhY2tlbmQiLCJ0b2tlbiIsImZyb250ZW5kIiwiaW5pdGlhdGVQYXltZW50UmVzcG9uc2UiLCJzdGF0dXMiLCJwdXNoIiwiYXNQYXRoIiwianNvbiIsInJlZGlyZWN0VG9TdHJpcGVDaGVja291dCIsInBheW1lbnRUcmFja2VyIiwic3RyaXBlIiwic2Vzc2lvbklkIiwiZm9ybURhdGEiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYW5jZWxVcmwiLCJzdWNjZXNzVXJsIiwic291cmNlVXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJyZXMiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJyZXN1bHQiLCJlcnJvciIsIkVOUk9MTF9CVVRUT05fVEVYVCIsInByb3BUeXBlcyIsInB1YmxpY0NvdXJzZSIsImlzUmVxdWlyZWQiLCJzaXRlSW5mb1Byb3BzIiwiYXV0aFByb3BzIiwiYWRkcmVzc1Byb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzaXRlaW5m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LCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVjNfVVJMID0gJ2h0dHBzOi8vanMuc3RyaXBlLmNvbS92Myc7XG52YXIgVjNfVVJMX1JFR0VYID0gL15odHRwczpcXC9cXC9qc1xcLnN0cmlwZVxcLmNvbVxcL3YzXFwvPyhcXD8uKik/JC87XG52YXIgRVhJU1RJTkdfU0NSSVBUX01FU1NBR0UgPSAnbG9hZFN0cmlwZS5zZXRMb2FkUGFyYW1ldGVycyB3YXMgY2FsbGVkIGJ1dCBhbiBleGlzdGluZyBTdHJpcGUuanMgc2NyaXB0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBkb2N1bWVudDsgZXhpc3Rpbmcgc2NyaXB0IHBhcmFtZXRlcnMgd2lsbCBiZSB1c2VkJztcbnZhciBmaW5kU2NyaXB0ID0gZnVuY3Rpb24gZmluZFNjcmlwdCgpIHtcbiAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0W3NyY149XFxcIlwiLmNvbmNhdChWM19VUkwsIFwiXFxcIl1cIikpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzY3JpcHQgPSBzY3JpcHRzW2ldO1xuXG4gICAgaWYgKCFWM19VUkxfUkVHRVgudGVzdChzY3JpcHQuc3JjKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcmlwdDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIGluamVjdFNjcmlwdCA9IGZ1bmN0aW9uIGluamVjdFNjcmlwdChwYXJhbXMpIHtcbiAgdmFyIHF1ZXJ5U3RyaW5nID0gcGFyYW1zICYmICFwYXJhbXMuYWR2YW5jZWRGcmF1ZFNpZ25hbHMgPyAnP2FkdmFuY2VkRnJhdWRTaWduYWxzPWZhbHNlJyA6ICcnO1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5zcmMgPSBcIlwiLmNvbmNhdChWM19VUkwpLmNvbmNhdChxdWVyeVN0cmluZyk7XG4gIHZhciBoZWFkT3JCb2R5ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmICghaGVhZE9yQm9keSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZG9jdW1lbnQuYm9keSBub3QgdG8gYmUgbnVsbC4gU3RyaXBlLmpzIHJlcXVpcmVzIGEgPGJvZHk+IGVsZW1lbnQuJyk7XG4gIH1cblxuICBoZWFkT3JCb2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIHJldHVybiBzY3JpcHQ7XG59O1xuXG52YXIgcmVnaXN0ZXJXcmFwcGVyID0gZnVuY3Rpb24gcmVnaXN0ZXJXcmFwcGVyKHN0cmlwZSwgc3RhcnRUaW1lKSB7XG4gIGlmICghc3RyaXBlIHx8ICFzdHJpcGUuX3JlZ2lzdGVyV3JhcHBlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0cmlwZS5fcmVnaXN0ZXJXcmFwcGVyKHtcbiAgICBuYW1lOiAnc3RyaXBlLWpzJyxcbiAgICB2ZXJzaW9uOiBcIjEuMTEuMFwiLFxuICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lXG4gIH0pO1xufTtcblxudmFyIHN0cmlwZVByb21pc2UgPSBudWxsO1xudmFyIGxvYWRTY3JpcHQgPSBmdW5jdGlvbiBsb2FkU2NyaXB0KHBhcmFtcykge1xuICAvLyBFbnN1cmUgdGhhdCB3ZSBvbmx5IGF0dGVtcHQgdG8gbG9hZCBTdHJpcGUuanMgYXQgbW9zdCBvbmNlXG4gIGlmIChzdHJpcGVQcm9taXNlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN0cmlwZVByb21pc2U7XG4gIH1cblxuICBzdHJpcGVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gUmVzb2x2ZSB0byBudWxsIHdoZW4gaW1wb3J0ZWQgc2VydmVyIHNpZGUuIFRoaXMgbWFrZXMgdGhlIG1vZHVsZVxuICAgICAgLy8gc2FmZSB0byBpbXBvcnQgaW4gYW4gaXNvbW9ycGhpYyBjb2RlIGJhc2UuXG4gICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuU3RyaXBlICYmIHBhcmFtcykge1xuICAgICAgY29uc29sZS53YXJuKEVYSVNUSU5HX1NDUklQVF9NRVNTQUdFKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LlN0cmlwZSkge1xuICAgICAgcmVzb2x2ZSh3aW5kb3cuU3RyaXBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHNjcmlwdCA9IGZpbmRTY3JpcHQoKTtcblxuICAgICAgaWYgKHNjcmlwdCAmJiBwYXJhbXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKEVYSVNUSU5HX1NDUklQVF9NRVNTQUdFKTtcbiAgICAgIH0gZWxzZSBpZiAoIXNjcmlwdCkge1xuICAgICAgICBzY3JpcHQgPSBpbmplY3RTY3JpcHQocGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuU3RyaXBlKSB7XG4gICAgICAgICAgcmVzb2x2ZSh3aW5kb3cuU3RyaXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTdHJpcGUuanMgbm90IGF2YWlsYWJsZScpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIFN0cmlwZS5qcycpKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHJpcGVQcm9taXNlO1xufTtcbnZhciBpbml0U3RyaXBlID0gZnVuY3Rpb24gaW5pdFN0cmlwZShtYXliZVN0cmlwZSwgYXJncywgc3RhcnRUaW1lKSB7XG4gIGlmIChtYXliZVN0cmlwZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHN0cmlwZSA9IG1heWJlU3RyaXBlLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIHJlZ2lzdGVyV3JhcHBlcihzdHJpcGUsIHN0YXJ0VGltZSk7XG4gIHJldHVybiBzdHJpcGU7XG59O1xuXG4vLyBvd24gc2NyaXB0IGluamVjdGlvbi5cblxudmFyIHN0cmlwZVByb21pc2UkMSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbG9hZFNjcmlwdChudWxsKTtcbn0pO1xudmFyIGxvYWRDYWxsZWQgPSBmYWxzZTtcbnN0cmlwZVByb21pc2UkMVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgaWYgKCFsb2FkQ2FsbGVkKSB7XG4gICAgY29uc29sZS53YXJuKGVycik7XG4gIH1cbn0pO1xudmFyIGxvYWRTdHJpcGUgPSBmdW5jdGlvbiBsb2FkU3RyaXBlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgbG9hZENhbGxlZCA9IHRydWU7XG4gIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gc3RyaXBlUHJvbWlzZSQxLnRoZW4oZnVuY3Rpb24gKG1heWJlU3RyaXBlKSB7XG4gICAgcmV0dXJuIGluaXRTdHJpcGUobWF5YmVTdHJpcGUsIGFyZ3MsIHN0YXJ0VGltZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbG9hZFN0cmlwZSB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBhZGRyZXNzUHJvcHMsXHJcbiAgYXV0aFByb3BzLFxyXG4gIHB1YmxpY0NvdXJzZSxcclxuICBzaXRlSW5mb1Byb3BzLFxyXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7IEVOUk9MTF9CVVRUT05fVEVYVCB9IGZyb20gXCIuLi8uLi9jb25maWcvc3RyaW5nc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5cclxuY29uc3QgU3RyaXBlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjb3Vyc2UsIHNpdGVJbmZvLCBhdXRoLCBhZGRyZXNzIH0gPSBwcm9wcztcclxuICBjb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShzaXRlSW5mby5zdHJpcGVQdWJsaXNoYWJsZUtleSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGluaXRpYXRlUGF5bWVudFJlc3BvbnNlID0gYXdhaXQgbWFrZVBheW1lbnRSZXF1ZXN0KHtcclxuICAgICAgY291cnNlSWQ6IGNvdXJzZS5pZCxcclxuICAgICAgYmFja2VuZDogYWRkcmVzcy5iYWNrZW5kLFxyXG4gICAgICB0b2tlbjogYXV0aC50b2tlbixcclxuICAgICAgZnJvbnRlbmQ6IGFkZHJlc3MuZnJvbnRlbmQsXHJcbiAgICAgIHJvdXRlcixcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChpbml0aWF0ZVBheW1lbnRSZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICByb3V0ZXIucHVzaChgL2xvZ2luP3JlZGlyZWN0PSR7cm91dGVyLmFzUGF0aH1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGluaXRpYXRlUGF5bWVudFJlc3BvbnNlID0gYXdhaXQgaW5pdGlhdGVQYXltZW50UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBhd2FpdCByZWRpcmVjdFRvU3RyaXBlQ2hlY2tvdXQoe1xyXG4gICAgICAgIHN0cmlwZTogYXdhaXQgc3RyaXBlUHJvbWlzZSxcclxuICAgICAgICBzZXNzaW9uSWQ6IGluaXRpYXRlUGF5bWVudFJlc3BvbnNlLnBheW1lbnRUcmFja2VyLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge31cclxuICB9O1xyXG5cclxuICBjb25zdCBtYWtlUGF5bWVudFJlcXVlc3QgPSBhc3luYyAoe1xyXG4gICAgY291cnNlSWQsXHJcbiAgICBiYWNrZW5kLFxyXG4gICAgdG9rZW4sXHJcbiAgICByb3V0ZXIsXHJcbiAgICBmcm9udGVuZCxcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyB3aW5kb3cuRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvdXJzZWlkXCIsIGNvdXJzZUlkKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcclxuICAgICAgXCJtZXRhZGF0YVwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgY2FuY2VsVXJsOiBgJHtmcm9udGVuZH0ke3JvdXRlci5hc1BhdGh9YCxcclxuICAgICAgICBzdWNjZXNzVXJsOiBgJHtmcm9udGVuZH0vcHVyY2hhc2VgLFxyXG4gICAgICAgIHNvdXJjZVVybDogcm91dGVyLmFzUGF0aCxcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFja2VuZH0vcGF5bWVudC9pbml0aWF0ZWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVkaXJlY3RUb1N0cmlwZUNoZWNrb3V0ID0gYXN5bmMgKHsgc3RyaXBlLCBzZXNzaW9uSWQgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7XHJcbiAgICAgIHNlc3Npb25JZCxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgIHtFTlJPTExfQlVUVE9OX1RFWFR9XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuU3RyaXBlLnByb3BUeXBlcyA9IHtcclxuICBjb3Vyc2U6IHB1YmxpY0NvdXJzZS5pc1JlcXVpcmVkLFxyXG4gIHNpdGVJbmZvOiBzaXRlSW5mb1Byb3BzLFxyXG4gIGF1dGg6IGF1dGhQcm9wcyxcclxuICBhZGRyZXNzOiBhZGRyZXNzUHJvcHMsXHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgc2l0ZUluZm86IHN0YXRlLnNpdGVpbmZvLFxyXG4gIGF1dGg6IHN0YXRlLmF1dGgsXHJcbiAgYWRkcmVzczogc3RhdGUuYWRkcmVzcyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU3RyaXBlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L3JvdXRlcicpXG4iXSwic291cmNlUm9vdCI6IiJ9