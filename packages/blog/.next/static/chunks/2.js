(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./components/Img.js":
/*!***************************!*\
  !*** ./components/Img.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types.js */ "./types.js");
/* harmony import */ var _config_defaultState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/defaultState */ "./config/defaultState.js");



var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Img.js",
    _this = undefined;




 //import { connect } from "react-redux";




var Img = function Img(src) {
  var isThumbnail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var classes = arguments.length > 2 ? arguments[2] : undefined;
  var alt = arguments.length > 3 ? arguments[3] : undefined;
  var defaultImage = arguments.length > 4 ? arguments[4] : undefined;
  var address = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _config_defaultState__WEBPACK_IMPORTED_MODULE_6__["default"].address.backend;
  var isExternal = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var source = src ? isExternal ? src : Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["formulateMediaUrl"])(address, src, isThumbnail) : defaultImage || "/courselit_backdrop_square";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: source,
      alt: alt,
      className: "jsx-1324233388" + " " + (classes || "")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1324233388",
      children: "img.jsx-1324233388{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTUdTXFxTaXN0ZW1hc1xcdGVtcFxcY291cnNlbGl0XFxwYWNrYWdlc1xcYmxvZ1xcY29tcG9uZW50c1xcSW1nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHc0IsV0FDQyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTUdTXFxTaXN0ZW1hc1xcdGVtcFxcY291cnNlbGl0XFxwYWNrYWdlc1xcYmxvZ1xcY29tcG9uZW50c1xcSW1nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IGZvcm11bGF0ZU1lZGlhVXJsIH0gZnJvbSBcIi4uL2xpYi91dGlscy5qc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkcmVzc1Byb3BzIH0gZnJvbSBcIi4uL3R5cGVzLmpzXCI7XHJcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi4vY29uZmlnL2RlZmF1bHRTdGF0ZSdcclxuXHJcbmNvbnN0IEltZyA9IChzcmMsXHJcbiAgaXNUaHVtYm5haWwgPSBmYWxzZSxcclxuICBjbGFzc2VzLFxyXG4gIGFsdCxcclxuICBkZWZhdWx0SW1hZ2UsXHJcbiAgYWRkcmVzcyA9IGRlZmF1bHRTdGF0ZS5hZGRyZXNzLmJhY2tlbmQsXHJcbiAgaXNFeHRlcm5hbCA9IGZhbHNlLCkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3Qgc291cmNlID0gc3JjXHJcbiAgICA/IGlzRXh0ZXJuYWxcclxuICAgICAgPyBzcmNcclxuICAgICAgOiBmb3JtdWxhdGVNZWRpYVVybChhZGRyZXNzLCBzcmMsIGlzVGh1bWJuYWlsKVxyXG4gICAgOiBkZWZhdWx0SW1hZ2UgfHwgXCIvY291cnNlbGl0X2JhY2tkcm9wX3NxdWFyZVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c291cmNlfSBhbHQ9e2FsdH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL0ltZy5wcm9wVHlwZXMgPSB7XHJcbi8vICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICBpc1RodW1ibmFpbDogUHJvcFR5cGVzLmJvb2wsXHJcbi8vICBjbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgZGVmYXVsdEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgYWRkcmVzczogYWRkcmVzc1Byb3BzLFxyXG4vLyAgaXNFeHRlcm5hbDogUHJvcFR5cGVzLmJvb2wsXHJcbi8vfTtcclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7ICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLH0pO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbWcpO1xyXG5leHBvcnQgZGVmYXVsdCBJbWdcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\MGS\\\\Sistemas\\\\temp\\\\courselit\\\\packages\\\\blog\\\\components\\\\Img.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
}; //Img.propTypes = {
//  src: PropTypes.string,
//  isThumbnail: PropTypes.bool,
//  classes: PropTypes.string,
//  alt: PropTypes.string,
//  defaultImage: PropTypes.string,
//  address: addressProps,
//  isExternal: PropTypes.bool,
//};
//const mapStateToProps = (state) => ({  address: state.address,});
//export default connect(mapStateToProps)(Img);


_c = Img;
/* harmony default export */ __webpack_exports__["default"] = (Img);

var _c;

$RefreshReg$(_c, "Img");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: queryGraphQL, capitalize, queryGraphQLWithUIEffects, formattedLocaleDate, makeGraphQLQueryStringFromJSObject, formulateMediaUrl, formulateCourseUrl, getPostDescriptionSnippet, getGraphQLQueryFields, getObjectContainingOnlyChangedFields, areObjectsDifferent, getAddress, getBackendAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryGraphQL", function() { return queryGraphQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryGraphQLWithUIEffects", function() { return queryGraphQLWithUIEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattedLocaleDate", function() { return formattedLocaleDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGraphQLQueryStringFromJSObject", function() { return makeGraphQLQueryStringFromJSObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formulateMediaUrl", function() { return formulateMediaUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formulateCourseUrl", function() { return formulateCourseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDescriptionSnippet", function() { return getPostDescriptionSnippet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphQLQueryFields", function() { return getGraphQLQueryFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectContainingOnlyChangedFields", function() { return getObjectContainingOnlyChangedFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areObjectsDifferent", function() { return areObjectsDifferent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddress", function() { return getAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackendAddress", function() { return getBackendAddress; });
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/constants.js */ "./config/constants.js");
/* harmony import */ var _courselit_components_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @courselit/components-library */ "./node_modules/@courselit/components-library/dist/index.js");
/* harmony import */ var _courselit_components_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_courselit_components_library__WEBPACK_IMPORTED_MODULE_4__);





var queryGraphQL = /*#__PURE__*/function () {
  var _ref = Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, query, token) {
    var options, response;
    return C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              method: "POST",
              headers: token ? {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              } : {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: query
              })
            };
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, options);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            response = _context.sent;

            if (!(response.errors && response.errors.length > 0)) {
              _context.next = 9;
              break;
            }

            throw new Error(response.errors[0].message);

          case 9:
            return _context.abrupt("return", response.data);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function queryGraphQL(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var capitalize = function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
var queryGraphQLWithUIEffects = function queryGraphQLWithUIEffects(backend, dispatch, networkAction, token) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(query) {
      var response;
      return C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dispatch(networkAction(false));
              _context2.next = 4;
              return queryGraphQL("".concat(backend, "/graph"), query, token);

            case 4:
              response = _context2.sent;
              return _context2.abrupt("return", response);

            case 6:
              _context2.prev = 6;
              dispatch(networkAction(false));
              return _context2.finish(6);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0,, 6, 9]]);
    }));

    return function (_x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var formattedLocaleDate = function formattedLocaleDate(epochString) {
  return new Date(Number(epochString)).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}; // Regex copied from: https://stackoverflow.com/a/48675160/942589

var makeGraphQLQueryStringFromJSObject = function makeGraphQLQueryStringFromJSObject(obj) {
  return JSON.stringify(obj).replace(/"([^(")"]+)":/g, "$1:");
};
var formulateMediaUrl = function formulateMediaUrl(backend, mediaID) {
  var generateThumbnailUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return mediaID ? "".concat(backend, "/media/").concat(mediaID).concat(generateThumbnailUrl ? "?thumb=1" : "") : "";
};
var formulateCourseUrl = function formulateCourseUrl(course) {
  var backend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "".concat(backend, "/").concat(course.isBlog ? _config_constants_js__WEBPACK_IMPORTED_MODULE_3__["URL_EXTENTION_POSTS"] : _config_constants_js__WEBPACK_IMPORTED_MODULE_3__["URL_EXTENTION_COURSES"], "/").concat(course.courseId, "/").concat(course.slug);
};
var getPostDescriptionSnippet = function getPostDescriptionSnippet(rawDraftJSContentState) {
  var firstSentence = _courselit_components_library__WEBPACK_IMPORTED_MODULE_4__["RichText"].hydrate({
    data: rawDraftJSContentState
  }).getCurrentContent().getPlainText().split(".")[0];
  return firstSentence ? firstSentence + "." : firstSentence;
};
var getGraphQLQueryFields = function getGraphQLQueryFields(jsObj) {
  var fieldsNotPutBetweenQuotes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var queryString = "{";

  for (var _i = 0, _Object$keys = Object.keys(jsObj); _i < _Object$keys.length; _i++) {
    var i = _Object$keys[_i];

    if (jsObj[i] !== undefined) {
      queryString += fieldsNotPutBetweenQuotes.includes(i) ? "".concat(i, ": ").concat(jsObj[i], ",") : "".concat(i, ": \"").concat(jsObj[i], "\",");
    }
  }

  queryString += "}";
  return queryString;
};
var getObjectContainingOnlyChangedFields = function getObjectContainingOnlyChangedFields(baseline, obj) {
  var result = {};

  for (var _i2 = 0, _Object$keys2 = Object.keys(baseline); _i2 < _Object$keys2.length; _i2++) {
    var i = _Object$keys2[_i2];

    if (baseline[i] !== obj[i]) {
      result[i] = obj[i];
    }
  }

  return result;
};
var areObjectsDifferent = function areObjectsDifferent(baseline, obj) {
  var onlyChangedFields = getObjectContainingOnlyChangedFields(baseline, obj);
  return !!Object.keys(onlyChangedFields).length;
};
var getAddress = function getAddress(host) {
  return {
    domain: extractDomainFromURL(host),
    backend: getBackendAddress(host),
    frontend: "http://".concat(host)
  };
};
var getBackendAddress = function getBackendAddress(host) {
  var domain = extractDomainFromURL(host);

  if (false) {} else {
    return "http://".concat(domain, ":8000");
  }
};

var extractDomainFromURL = function extractDomainFromURL(host) {
  return host.split(":")[0];
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = /*#__PURE__*/function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./types.js":
/*!******************!*\
  !*** ./types.js ***!
  \******************/
/*! exports provided: authProps, profileProps, latestPostsProps, siteInfoProps, publicCourse, creatorCourse, siteUser, featuredCourse, appMessage, lesson, link, addressProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authProps", function() { return authProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileProps", function() { return profileProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latestPostsProps", function() { return latestPostsProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteInfoProps", function() { return siteInfoProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicCourse", function() { return publicCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatorCourse", function() { return creatorCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteUser", function() { return siteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featuredCourse", function() { return featuredCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appMessage", function() { return appMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lesson", function() { return lesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressProps", function() { return addressProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file contains all the PropTypes used across the app.
 */

var authProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  guest: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  token: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
var profileProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  isCreator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  fetched: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  purchases: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
});
var latestPostsProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  creatorName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  updated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});
var siteInfoProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  logopath: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  currencyUnit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  currencyISOCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
var publicCourse = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  creatorName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  updated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  slug: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isFeatured: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  cost: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  creatorId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
var creatorCourse = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  creatorName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  updated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  slug: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  isFeatured: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  cost: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var siteUser = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  verified: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isCreator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isAdmin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  purchases: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
});
var featuredCourse = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  cost: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  featuredImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
var appMessage = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  open: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  action: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    cb: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  })
});
var lesson = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  downloadable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  contentURL: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
var link = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  destination: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  category: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  newTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
});
var addressProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  backend: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  frontend: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  domain: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0cmluZy1oYXNoL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L2xpYi9zdHlsZXNoZWV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3N0eWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3N0eWxlc2hlZXQtcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L3N0eWxlLmpzIiwid2VicGFjazovL19OX0UvLi90eXBlcy5qcyJdLCJuYW1lcyI6WyJJbWciLCJzcmMiLCJpc1RodW1ibmFpbCIsImNsYXNzZXMiLCJhbHQiLCJkZWZhdWx0SW1hZ2UiLCJhZGRyZXNzIiwiZGVmYXVsdFN0YXRlIiwiYmFja2VuZCIsImlzRXh0ZXJuYWwiLCJzb3VyY2UiLCJmb3JtdWxhdGVNZWRpYVVybCIsInF1ZXJ5R3JhcGhRTCIsInVybCIsInF1ZXJ5IiwidG9rZW4iLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3JzIiwibGVuZ3RoIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImNhcGl0YWxpemUiLCJzIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInF1ZXJ5R3JhcGhRTFdpdGhVSUVmZmVjdHMiLCJkaXNwYXRjaCIsIm5ldHdvcmtBY3Rpb24iLCJmb3JtYXR0ZWRMb2NhbGVEYXRlIiwiZXBvY2hTdHJpbmciLCJEYXRlIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJtYWtlR3JhcGhRTFF1ZXJ5U3RyaW5nRnJvbUpTT2JqZWN0Iiwib2JqIiwicmVwbGFjZSIsIm1lZGlhSUQiLCJnZW5lcmF0ZVRodW1ibmFpbFVybCIsImZvcm11bGF0ZUNvdXJzZVVybCIsImNvdXJzZSIsImlzQmxvZyIsIlVSTF9FWFRFTlRJT05fUE9TVFMiLCJVUkxfRVhURU5USU9OX0NPVVJTRVMiLCJjb3Vyc2VJZCIsInNsdWciLCJnZXRQb3N0RGVzY3JpcHRpb25TbmlwcGV0IiwicmF3RHJhZnRKU0NvbnRlbnRTdGF0ZSIsImZpcnN0U2VudGVuY2UiLCJUZXh0RWRpdG9yIiwiaHlkcmF0ZSIsImdldEN1cnJlbnRDb250ZW50IiwiZ2V0UGxhaW5UZXh0Iiwic3BsaXQiLCJnZXRHcmFwaFFMUXVlcnlGaWVsZHMiLCJqc09iaiIsImZpZWxkc05vdFB1dEJldHdlZW5RdW90ZXMiLCJxdWVyeVN0cmluZyIsIk9iamVjdCIsImtleXMiLCJpIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJnZXRPYmplY3RDb250YWluaW5nT25seUNoYW5nZWRGaWVsZHMiLCJiYXNlbGluZSIsInJlc3VsdCIsImFyZU9iamVjdHNEaWZmZXJlbnQiLCJvbmx5Q2hhbmdlZEZpZWxkcyIsImdldEFkZHJlc3MiLCJob3N0IiwiZG9tYWluIiwiZXh0cmFjdERvbWFpbkZyb21VUkwiLCJnZXRCYWNrZW5kQWRkcmVzcyIsImZyb250ZW5kIiwiYXV0aFByb3BzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJndWVzdCIsImJvb2wiLCJzdHJpbmciLCJwcm9maWxlUHJvcHMiLCJpc0NyZWF0b3IiLCJuYW1lIiwiaWQiLCJmZXRjaGVkIiwiZW1haWwiLCJwdXJjaGFzZXMiLCJhcnJheU9mIiwibGF0ZXN0UG9zdHNQcm9wcyIsImlzUmVxdWlyZWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY3JlYXRvck5hbWUiLCJ1cGRhdGVkIiwibnVtYmVyIiwic2l0ZUluZm9Qcm9wcyIsInN1YnRpdGxlIiwibG9nb3BhdGgiLCJjdXJyZW5jeVVuaXQiLCJjdXJyZW5jeUlTT0NvZGUiLCJwdWJsaWNDb3Vyc2UiLCJpc0ZlYXR1cmVkIiwiY29zdCIsImNyZWF0b3JJZCIsImNyZWF0b3JDb3Vyc2UiLCJzaXRlVXNlciIsInZlcmlmaWVkIiwiaXNBZG1pbiIsImF2YXRhciIsImZlYXR1cmVkQ291cnNlIiwiZmVhdHVyZWRJbWFnZSIsImFwcE1lc3NhZ2UiLCJvcGVuIiwiYWN0aW9uIiwidGV4dCIsImNiIiwiZnVuYyIsImxlc3NvbiIsInR5cGUiLCJkb3dubG9hZGFibGUiLCJjb250ZW50IiwiY29udGVudFVSTCIsImxpbmsiLCJkZXN0aW5hdGlvbiIsImNhdGVnb3J5IiwibmV3VGFiIiwiYWRkcmVzc1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFNYztBQUFBLE1BTHhCQyxXQUt3Qix1RUFMVixLQUtVO0FBQUEsTUFKeEJDLE9BSXdCO0FBQUEsTUFIeEJDLEdBR3dCO0FBQUEsTUFGeEJDLFlBRXdCO0FBQUEsTUFEeEJDLE9BQ3dCLHVFQURkQyw0REFBWSxDQUFDRCxPQUFiLENBQXFCRSxPQUNQO0FBQUEsTUFBeEJDLFVBQXdCLHVFQUFYLEtBQVc7QUFHeEIsTUFBTUMsTUFBTSxHQUFHVCxHQUFHLEdBQ2RRLFVBQVUsR0FDUlIsR0FEUSxHQUVSVSx1RUFBaUIsQ0FBQ0wsT0FBRCxFQUFVTCxHQUFWLEVBQWVDLFdBQWYsQ0FITCxHQUlkRyxZQUFZLElBQUksNEJBSnBCO0FBTUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUF5QixTQUFHLEVBQUVLLE1BQTlCO0FBQXNDLFNBQUcsRUFBRU4sR0FBM0M7QUFBQSwyQ0FBZ0JELE9BQWhCO0FBQUE7QUFB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QW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxtQkFBbUIsaUNBQWlDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDN1JhOztBQUViO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCLGlEQUFpRCxtQkFBTyxDQUFDLG9GQUF1Qjs7QUFFaEYsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLCtDQUErQywwREFBMEQsMkNBQTJDLGlDQUFpQzs7QUFFckw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekVhOztBQUViO0FBQ0E7O0FBRUEseUNBQXlDLG1CQUFPLENBQUMsd0RBQWE7O0FBRTlELHlDQUF5QyxtQkFBTyxDQUFDLDBFQUFrQjs7QUFFbkUsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQzs7O0FBRzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGtCQUFrQixjQUFjLE9BQU8sR0FBRyxjQUFjLEdBQUc7O0FBRWxHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtB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QUFVLEVBQUU5QyxpREFBUyxDQUFDSSxNQUFWLEdBQW1CO0FBTEssQ0FBaEIsQ0FBZjtBQVFBLElBQU0yQyxJQUFJLEdBQUcvQyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ2xDc0MsTUFBSSxFQUFFdkMsaURBQVMsQ0FBQ0ksTUFBVixDQUFpQlUsVUFEVztBQUVsQ2tDLGFBQVcsRUFBRWhELGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJVLFVBRkk7QUFHbENtQyxVQUFRLEVBQUVqRCxpREFBUyxDQUFDSSxNQUFWLENBQWlCVSxVQUhPO0FBSWxDb0MsUUFBTSxFQUFFbEQsaURBQVMsQ0FBQ0csSUFBVixDQUFlVztBQUpXLENBQWhCLENBQWI7QUFPQSxJQUFNcUMsWUFBWSxHQUFHbkQsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUMxQ2pGLFNBQU8sRUFBRWdGLGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJVLFVBRGdCO0FBRTFDaEIsVUFBUSxFQUFFRSxpREFBUyxDQUFDSSxNQUFWLENBQWlCVSxVQUZlO0FBRzFDbkIsUUFBTSxFQUFFSyxpREFBUyxDQUFDSSxNQUFWLENBQWlCVTtBQUhpQixDQUFoQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9ybXVsYXRlTWVkaWFVcmwgfSBmcm9tIFwiLi4vbGliL3V0aWxzLmpzXCI7XHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRyZXNzUHJvcHMgfSBmcm9tIFwiLi4vdHlwZXMuanNcIjtcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuLi9jb25maWcvZGVmYXVsdFN0YXRlJ1xyXG5cclxuY29uc3QgSW1nID0gKHNyYyxcclxuICBpc1RodW1ibmFpbCA9IGZhbHNlLFxyXG4gIGNsYXNzZXMsXHJcbiAgYWx0LFxyXG4gIGRlZmF1bHRJbWFnZSxcclxuICBhZGRyZXNzID0gZGVmYXVsdFN0YXRlLmFkZHJlc3MuYmFja2VuZCxcclxuICBpc0V4dGVybmFsID0gZmFsc2UsKSA9PiB7XHJcblxyXG5cclxuICBjb25zdCBzb3VyY2UgPSBzcmNcclxuICAgID8gaXNFeHRlcm5hbFxyXG4gICAgICA/IHNyY1xyXG4gICAgICA6IGZvcm11bGF0ZU1lZGlhVXJsKGFkZHJlc3MsIHNyYywgaXNUaHVtYm5haWwpXHJcbiAgICA6IGRlZmF1bHRJbWFnZSB8fCBcIi9jb3Vyc2VsaXRfYmFja2Ryb3Bfc3F1YXJlXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzb3VyY2V9IGFsdD17YWx0fSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vSW1nLnByb3BUeXBlcyA9IHtcclxuLy8gIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGlzVGh1bWJuYWlsOiBQcm9wVHlwZXMuYm9vbCxcclxuLy8gIGNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICBkZWZhdWx0SW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICBhZGRyZXNzOiBhZGRyZXNzUHJvcHMsXHJcbi8vICBpc0V4dGVybmFsOiBQcm9wVHlwZXMuYm9vbCxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEltZyk7XHJcbmV4cG9ydCBkZWZhdWx0IEltZ1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQge1xyXG4gIFVSTF9FWFRFTlRJT05fUE9TVFMsXHJcbiAgVVJMX0VYVEVOVElPTl9DT1VSU0VTLFxyXG59IGZyb20gXCIuLi9jb25maWcvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0IGFzIFRleHRFZGl0b3IgfSBmcm9tIFwiQGNvdXJzZWxpdC9jb21wb25lbnRzLWxpYnJhcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeUdyYXBoUUwgPSBhc3luYyAodXJsLCBxdWVyeSwgdG9rZW4pID0+IHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHRva2VuXHJcbiAgICAgID8ge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICAgIDogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcclxuICB9O1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XHJcbiAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvcnNbMF0ubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5R3JhcGhRTFdpdGhVSUVmZmVjdHMgPSAoXHJcbiAgYmFja2VuZCxcclxuICBkaXNwYXRjaCxcclxuICBuZXR3b3JrQWN0aW9uLFxyXG4gIHRva2VuXHJcbikgPT4gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHcmFwaFFMKGAke2JhY2tlbmR9L2dyYXBoYCwgcXVlcnksIHRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0dGVkTG9jYWxlRGF0ZSA9IChlcG9jaFN0cmluZykgPT5cclxuICBuZXcgRGF0ZShOdW1iZXIoZXBvY2hTdHJpbmcpKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9KTtcclxuXHJcbi8vIFJlZ2V4IGNvcGllZCBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDg2NzUxNjAvOTQyNTg5XHJcbmV4cG9ydCBjb25zdCBtYWtlR3JhcGhRTFF1ZXJ5U3RyaW5nRnJvbUpTT2JqZWN0ID0gKG9iaikgPT5cclxuICBKU09OLnN0cmluZ2lmeShvYmopLnJlcGxhY2UoL1wiKFteKFwiKVwiXSspXCI6L2csIFwiJDE6XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm11bGF0ZU1lZGlhVXJsID0gKFxyXG4gIGJhY2tlbmQsXHJcbiAgbWVkaWFJRCxcclxuICBnZW5lcmF0ZVRodW1ibmFpbFVybCA9IGZhbHNlXHJcbikgPT5cclxuICBtZWRpYUlEXHJcbiAgICA/IGAke2JhY2tlbmR9L21lZGlhLyR7bWVkaWFJRH0ke2dlbmVyYXRlVGh1bWJuYWlsVXJsID8gXCI/dGh1bWI9MVwiIDogXCJcIn1gXHJcbiAgICA6IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybXVsYXRlQ291cnNlVXJsID0gKGNvdXJzZSwgYmFja2VuZCA9IFwiXCIpID0+XHJcbiAgYCR7YmFja2VuZH0vJHtjb3Vyc2UuaXNCbG9nID8gVVJMX0VYVEVOVElPTl9QT1NUUyA6IFVSTF9FWFRFTlRJT05fQ09VUlNFU30vJHtjb3Vyc2UuY291cnNlSWRcclxuICB9LyR7Y291cnNlLnNsdWd9YDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0RGVzY3JpcHRpb25TbmlwcGV0ID0gKHJhd0RyYWZ0SlNDb250ZW50U3RhdGUpID0+IHtcclxuICBjb25zdCBmaXJzdFNlbnRlbmNlID0gVGV4dEVkaXRvci5oeWRyYXRlKHsgZGF0YTogcmF3RHJhZnRKU0NvbnRlbnRTdGF0ZSB9KVxyXG4gICAgLmdldEN1cnJlbnRDb250ZW50KClcclxuICAgIC5nZXRQbGFpblRleHQoKVxyXG4gICAgLnNwbGl0KFwiLlwiKVswXTtcclxuXHJcbiAgcmV0dXJuIGZpcnN0U2VudGVuY2UgPyBmaXJzdFNlbnRlbmNlICsgXCIuXCIgOiBmaXJzdFNlbnRlbmNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyYXBoUUxRdWVyeUZpZWxkcyA9IChcclxuICBqc09iaixcclxuICBmaWVsZHNOb3RQdXRCZXR3ZWVuUXVvdGVzID0gW11cclxuKSA9PiB7XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gXCJ7XCI7XHJcbiAgZm9yIChjb25zdCBpIG9mIE9iamVjdC5rZXlzKGpzT2JqKSkge1xyXG4gICAgaWYgKGpzT2JqW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcXVlcnlTdHJpbmcgKz0gZmllbGRzTm90UHV0QmV0d2VlblF1b3Rlcy5pbmNsdWRlcyhpKVxyXG4gICAgICAgID8gYCR7aX06ICR7anNPYmpbaV19LGBcclxuICAgICAgICA6IGAke2l9OiBcIiR7anNPYmpbaV19XCIsYDtcclxuICAgIH1cclxuICB9XHJcbiAgcXVlcnlTdHJpbmcgKz0gXCJ9XCI7XHJcblxyXG4gIHJldHVybiBxdWVyeVN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3RDb250YWluaW5nT25seUNoYW5nZWRGaWVsZHMgPSAoYmFzZWxpbmUsIG9iaikgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gIGZvciAoY29uc3QgaSBvZiBPYmplY3Qua2V5cyhiYXNlbGluZSkpIHtcclxuICAgIGlmIChiYXNlbGluZVtpXSAhPT0gb2JqW2ldKSB7XHJcbiAgICAgIHJlc3VsdFtpXSA9IG9ialtpXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcmVPYmplY3RzRGlmZmVyZW50ID0gKGJhc2VsaW5lLCBvYmopID0+IHtcclxuICBjb25zdCBvbmx5Q2hhbmdlZEZpZWxkcyA9IGdldE9iamVjdENvbnRhaW5pbmdPbmx5Q2hhbmdlZEZpZWxkcyhiYXNlbGluZSwgb2JqKTtcclxuICByZXR1cm4gISFPYmplY3Qua2V5cyhvbmx5Q2hhbmdlZEZpZWxkcykubGVuZ3RoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFkZHJlc3MgPSAoaG9zdCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkb21haW46IGV4dHJhY3REb21haW5Gcm9tVVJMKGhvc3QpLFxyXG4gICAgYmFja2VuZDogZ2V0QmFja2VuZEFkZHJlc3MoaG9zdCksXHJcbiAgICBmcm9udGVuZDogYGh0dHA6Ly8ke2hvc3R9YCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJhY2tlbmRBZGRyZXNzID0gKGhvc3QpID0+IHtcclxuICBjb25zdCBkb21haW4gPSBleHRyYWN0RG9tYWluRnJvbVVSTChob3N0KTtcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcIm5vdF93b3JkX2luX3Byb2R1Y3Rpb25cIikge1xyXG4gICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LklOU0VDVVJFID09PSBcInRydWVcIiA/IFwiaHR0cFwiIDogXCJodHRwc1wiXHJcbiAgICAgIH06Ly8ke2RvbWFpbn0vYXBpYDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBodHRwOi8vJHtkb21haW59OjgwMDBgO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGV4dHJhY3REb21haW5Gcm9tVVJMID0gKGhvc3QpID0+IHtcclxuICByZXR1cm4gaG9zdC5zcGxpdChcIjpcIilbMF07XHJcbn07XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgdmFyIGhhc2ggPSA1MzgxLFxuICAgICAgaSAgICA9IHN0ci5sZW5ndGg7XG5cbiAgd2hpbGUoaSkge1xuICAgIGhhc2ggPSAoaGFzaCAqIDMzKSBeIHN0ci5jaGFyQ29kZUF0KC0taSk7XG4gIH1cblxuICAvKiBKYXZhU2NyaXB0IGRvZXMgYml0d2lzZSBvcGVyYXRpb25zIChsaWtlIFhPUiwgYWJvdmUpIG9uIDMyLWJpdCBzaWduZWRcbiAgICogaW50ZWdlcnMuIFNpbmNlIHdlIHdhbnQgdGhlIHJlc3VsdHMgdG8gYmUgYWx3YXlzIHBvc2l0aXZlLCBjb252ZXJ0IHRoZVxuICAgKiBzaWduZWQgaW50IHRvIGFuIHVuc2lnbmVkIGJ5IGRvaW5nIGFuIHVuc2lnbmVkIGJpdHNoaWZ0LiAqL1xuICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKlxuQmFzZWQgb24gR2xhbW9yJ3Mgc2hlZXRcbmh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9ibG9iLzY2N2I0ODBkMzFiMzcyMWE5MDUwMjFiMjZlMTI5MGNlOTJjYTI4Nzkvc3JjL3NoZWV0LmpzXG4qL1xudmFyIGlzUHJvZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxudmFyIFN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZiRuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBuYW1lID0gX3JlZiRuYW1lID09PSB2b2lkIDAgPyAnc3R5bGVzaGVldCcgOiBfcmVmJG5hbWUsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gaXNQcm9kIDogX3JlZiRvcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBfcmVmJGlzQnJvd3NlciA9IF9yZWYuaXNCcm93c2VyLFxuICAgICAgICBpc0Jyb3dzZXIgPSBfcmVmJGlzQnJvd3NlciA9PT0gdm9pZCAwID8gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgOiBfcmVmJGlzQnJvd3NlcjtcblxuICAgIGludmFyaWFudChpc1N0cmluZyhuYW1lKSwgJ2BuYW1lYCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlciA9IFwiI1wiICsgbmFtZSArIFwiLWRlbGV0ZWQtcnVsZV9fX197fVwiO1xuICAgIGludmFyaWFudCh0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nLCAnYG9wdGltaXplRm9yU3BlZWRgIG11c3QgYmUgYSBib29sZWFuJyk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IG9wdGltaXplRm9yU3BlZWQ7XG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHRoaXMuX3NlcnZlclNoZWV0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3RhZ3MgPSBbXTtcbiAgICB0aGlzLl9pbmplY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3J1bGVzQ291bnQgPSAwO1xuICAgIHZhciBub2RlID0gdGhpcy5faXNCcm93c2VyICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJjc3Atbm9uY2VcIl0nKTtcbiAgICB0aGlzLl9ub25jZSA9IG5vZGUgPyBub2RlLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIDogbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0T3B0aW1pemVGb3JTcGVlZCA9IGZ1bmN0aW9uIHNldE9wdGltaXplRm9yU3BlZWQoYm9vbCkge1xuICAgIGludmFyaWFudCh0eXBlb2YgYm9vbCA9PT0gJ2Jvb2xlYW4nLCAnYHNldE9wdGltaXplRm9yU3BlZWRgIGFjY2VwdHMgYSBib29sZWFuJyk7XG4gICAgaW52YXJpYW50KHRoaXMuX3J1bGVzQ291bnQgPT09IDAsICdvcHRpbWl6ZUZvclNwZWVkIGNhbm5vdCBiZSB3aGVuIHJ1bGVzIGhhdmUgYWxyZWFkeSBiZWVuIGluc2VydGVkJyk7XG4gICAgdGhpcy5mbHVzaCgpO1xuICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBib29sO1xuICAgIHRoaXMuaW5qZWN0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmlzT3B0aW1pemVGb3JTcGVlZCA9IGZ1bmN0aW9uIGlzT3B0aW1pemVGb3JTcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW1pemVGb3JTcGVlZDtcbiAgfTtcblxuICBfcHJvdG8uaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpbnZhcmlhbnQoIXRoaXMuX2luamVjdGVkLCAnc2hlZXQgYWxyZWFkeSBpbmplY3RlZCcpO1xuICAgIHRoaXMuX2luamVjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5fdGFnc1swXSA9IHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUpO1xuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9ICdpbnNlcnRSdWxlJyBpbiB0aGlzLmdldFNoZWV0KCk7XG5cbiAgICAgIGlmICghdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignU3R5bGVTaGVldDogb3B0aW1pemVGb3JTcGVlZCBtb2RlIG5vdCBzdXBwb3J0ZWQgZmFsbGluZyBiYWNrIHRvIHN0YW5kYXJkIG1vZGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgIHRoaXMuX2luamVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NlcnZlclNoZWV0ID0ge1xuICAgICAgY3NzUnVsZXM6IFtdLFxuICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSB7XG4gICAgICAgICAgICBjc3NUZXh0OiBydWxlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMucHVzaCh7XG4gICAgICAgICAgICBjc3NUZXh0OiBydWxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUnVsZTogZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xuICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXNbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRTaGVldEZvclRhZyA9IGZ1bmN0aW9uIGdldFNoZWV0Rm9yVGFnKHRhZykge1xuICAgIGlmICh0YWcuc2hlZXQpIHtcbiAgICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gICAgfSAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRTaGVldCA9IGZ1bmN0aW9uIGdldFNoZWV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFNoZWV0Rm9yVGFnKHRoaXMuX3RhZ3NbdGhpcy5fdGFncy5sZW5ndGggLSAxXSk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgaW52YXJpYW50KGlzU3RyaW5nKHJ1bGUpLCAnYGluc2VydFJ1bGVgIGFjY2VwdHMgb25seSBzdHJpbmdzJyk7XG5cbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlcnZlclNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLmdldFNoZWV0KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgIGluZGV4ID0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgfSAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1Z1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAwMDc5OTIvY2hyb21lLXN1ZGRlbmx5LXN0b3BwZWQtYWNjZXB0aW5nLWluc2VydHJ1bGVcblxuXG4gICAgICB0cnkge1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVTaGVldDogaWxsZWdhbCBydWxlOiBcXG5cXG5cIiArIHJ1bGUgKyBcIlxcblxcblNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjAwMDc5OTIgZm9yIG1vcmUgaW5mb1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGluc2VydGlvblBvaW50ID0gdGhpcy5fdGFnc1tpbmRleF07XG5cbiAgICAgIHRoaXMuX3RhZ3MucHVzaCh0aGlzLm1ha2VTdHlsZVRhZyh0aGlzLl9uYW1lLCBydWxlLCBpbnNlcnRpb25Qb2ludCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGxhY2VSdWxlID0gZnVuY3Rpb24gcmVwbGFjZVJ1bGUoaW5kZXgsIHJ1bGUpIHtcbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCB8fCAhdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLl9pc0Jyb3dzZXIgPyB0aGlzLmdldFNoZWV0KCkgOiB0aGlzLl9zZXJ2ZXJTaGVldDtcblxuICAgICAgaWYgKCFydWxlLnRyaW0oKSkge1xuICAgICAgICBydWxlID0gdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzaGVldC5jc3NSdWxlc1tpbmRleF0pIHtcbiAgICAgICAgLy8gQFRCRCBTaG91bGQgd2UgdGhyb3cgYW4gZXJyb3I/XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cblxuICAgICAgc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcblwiICsgcnVsZSArIFwiXFxuXFxuU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yMDAwNzk5MiBmb3IgbW9yZSBpbmZvXCIpO1xuICAgICAgICB9IC8vIEluIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBpbmRpY2VzIHdlIGluc2VydCBhIGRlbGV0ZVJ1bGVQbGFjZWhvbGRlclxuXG5cbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZSh0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0YWcgPSB0aGlzLl90YWdzW2luZGV4XTtcbiAgICAgIGludmFyaWFudCh0YWcsIFwib2xkIHJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xuICAgICAgdGFnLnRleHRDb250ZW50ID0gcnVsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH07XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3NlcnZlclNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMucmVwbGFjZVJ1bGUoaW5kZXgsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgaW52YXJpYW50KHRhZywgXCJydWxlIGF0IGluZGV4IGBcIiArIGluZGV4ICsgXCJgIG5vdCBmb3VuZFwiKTtcbiAgICAgIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICB0aGlzLl90YWdzW2luZGV4XSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG5cbiAgICBpZiAodGhpcy5faXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl90YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICByZXR1cm4gdGFnICYmIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW1wbGVyIG9uIHNlcnZlclxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMgPSBbXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNzc1J1bGVzID0gZnVuY3Rpb24gY3NzUnVsZXMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90YWdzLnJlZHVjZShmdW5jdGlvbiAocnVsZXMsIHRhZykge1xuICAgICAgaWYgKHRhZykge1xuICAgICAgICBydWxlcyA9IHJ1bGVzLmNvbmNhdChBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoX3RoaXMyLmdldFNoZWV0Rm9yVGFnKHRhZykuY3NzUnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHJ1bGUuY3NzVGV4dCA9PT0gX3RoaXMyLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID8gbnVsbCA6IHJ1bGU7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bGVzLnB1c2gobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9LCBbXSk7XG4gIH07XG5cbiAgX3Byb3RvLm1ha2VTdHlsZVRhZyA9IGZ1bmN0aW9uIG1ha2VTdHlsZVRhZyhuYW1lLCBjc3NTdHJpbmcsIHJlbGF0aXZlVG9UYWcpIHtcbiAgICBpZiAoY3NzU3RyaW5nKSB7XG4gICAgICBpbnZhcmlhbnQoaXNTdHJpbmcoY3NzU3RyaW5nKSwgJ21ha2VTdHlsZVRhZyBhY2NlcHMgb25seSBzdHJpbmdzIGFzIHNlY29uZCBwYXJhbWV0ZXInKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBpZiAodGhpcy5fbm9uY2UpIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgdGhpcy5fbm9uY2UpO1xuICAgIHRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICB0YWcuc2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIG5hbWUsICcnKTtcblxuICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NTdHJpbmcpKTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblxuICAgIGlmIChyZWxhdGl2ZVRvVGFnKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZSh0YWcsIHJlbGF0aXZlVG9UYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZztcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVTaGVldCwgW3tcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHlsZVNoZWV0O1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldDogXCIgKyBtZXNzYWdlICsgXCIuXCIpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9zdHlsZXNoZWV0UmVnaXN0cnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0eWxlc2hlZXQtcmVnaXN0cnlcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzdHlsZVNoZWV0UmVnaXN0cnkgPSBuZXcgX3N0eWxlc2hlZXRSZWdpc3RyeVtcImRlZmF1bHRcIl0oKTtcblxudmFyIEpTWFN0eWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEpTWFN0eWxlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBKU1hTdHlsZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnByZXZQcm9wcyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIEpTWFN0eWxlLmR5bmFtaWMgPSBmdW5jdGlvbiBkeW5hbWljKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby5tYXAoZnVuY3Rpb24gKHRhZ0luZm8pIHtcbiAgICAgIHZhciBiYXNlSWQgPSB0YWdJbmZvWzBdO1xuICAgICAgdmFyIHByb3BzID0gdGFnSW5mb1sxXTtcbiAgICAgIHJldHVybiBzdHlsZVNoZWV0UmVnaXN0cnkuY29tcHV0ZUlkKGJhc2VJZCwgcHJvcHMpO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfSAvLyBwcm9iYWJseSBmYXN0ZXIgdGhhbiBQdXJlQ29tcG9uZW50IChzaGFsbG93RXF1YWwpXG4gIDtcblxuICB2YXIgX3Byb3RvID0gSlNYU3R5bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUob3RoZXJQcm9wcykge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmlkICE9PSBvdGhlclByb3BzLmlkIHx8IC8vIFdlIGRvIHRoaXMgY2hlY2sgYmVjYXVzZSBgZHluYW1pY2AgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciB1bmRlZmluZWQuXG4gICAgLy8gVGhlc2UgYXJlIHRoZSBjb21wdXRlZCB2YWx1ZXMgZm9yIGR5bmFtaWMgc3R5bGVzLlxuICAgIFN0cmluZyh0aGlzLnByb3BzLmR5bmFtaWMpICE9PSBTdHJpbmcob3RoZXJQcm9wcy5keW5hbWljKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBzdHlsZVNoZWV0UmVnaXN0cnkucmVtb3ZlKHRoaXMucHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gbWFrZSB0aGUgc2lkZSBlZmZlY3QgYXN5bmMgc2FmZSBpbiB0aGUgXCJyZW5kZXJcIiBwaGFzZS5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvc3R5bGVkLWpzeC9wdWxsLzQ4NFxuICAgIGlmICh0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSh0aGlzLnByZXZQcm9wcykpIHtcbiAgICAgIC8vIFVwZGF0ZXNcbiAgICAgIGlmICh0aGlzLnByZXZQcm9wcy5pZCkge1xuICAgICAgICBzdHlsZVNoZWV0UmVnaXN0cnkucmVtb3ZlKHRoaXMucHJldlByb3BzKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVTaGVldFJlZ2lzdHJ5LmFkZCh0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMucHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSlNYU3R5bGU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEpTWFN0eWxlO1xuXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgdmFyIGNzc1J1bGVzID0gc3R5bGVTaGVldFJlZ2lzdHJ5LmNzc1J1bGVzKCk7XG4gIHN0eWxlU2hlZXRSZWdpc3RyeS5mbHVzaCgpO1xuICByZXR1cm4gY3NzUnVsZXM7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zdHJpbmdIYXNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3RyaW5nLWhhc2hcIikpO1xuXG52YXIgX3N0eWxlc2hlZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9zdHlsZXNoZWV0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBzYW5pdGl6ZSA9IGZ1bmN0aW9uIHNhbml0aXplKHJ1bGUpIHtcbiAgcmV0dXJuIHJ1bGUucmVwbGFjZSgvXFwvc3R5bGUvZ2ksICdcXFxcL3N0eWxlJyk7XG59O1xuXG52YXIgU3R5bGVTaGVldFJlZ2lzdHJ5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldFJlZ2lzdHJ5KF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZiRzdHlsZVNoZWV0ID0gX3JlZi5zdHlsZVNoZWV0LFxuICAgICAgICBzdHlsZVNoZWV0ID0gX3JlZiRzdHlsZVNoZWV0ID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRzdHlsZVNoZWV0LFxuICAgICAgICBfcmVmJG9wdGltaXplRm9yU3BlZWQgPSBfcmVmLm9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIG9wdGltaXplRm9yU3BlZWQgPSBfcmVmJG9wdGltaXplRm9yU3BlZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRvcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBfcmVmJGlzQnJvd3NlciA9IF9yZWYuaXNCcm93c2VyLFxuICAgICAgICBpc0Jyb3dzZXIgPSBfcmVmJGlzQnJvd3NlciA9PT0gdm9pZCAwID8gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgOiBfcmVmJGlzQnJvd3NlcjtcblxuICAgIHRoaXMuX3NoZWV0ID0gc3R5bGVTaGVldCB8fCBuZXcgX3N0eWxlc2hlZXRbXCJkZWZhdWx0XCJdKHtcbiAgICAgIG5hbWU6ICdzdHlsZWQtanN4JyxcbiAgICAgIG9wdGltaXplRm9yU3BlZWQ6IG9wdGltaXplRm9yU3BlZWRcbiAgICB9KTtcblxuICAgIHRoaXMuX3NoZWV0LmluamVjdCgpO1xuXG4gICAgaWYgKHN0eWxlU2hlZXQgJiYgdHlwZW9mIG9wdGltaXplRm9yU3BlZWQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZChvcHRpbWl6ZUZvclNwZWVkKTtcblxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzQnJvd3NlciA9IGlzQnJvd3NlcjtcbiAgICB0aGlzLl9mcm9tU2VydmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2luZGljZXMgPSB7fTtcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSB7fTtcbiAgICB0aGlzLmNvbXB1dGVJZCA9IHRoaXMuY3JlYXRlQ29tcHV0ZUlkKCk7XG4gICAgdGhpcy5jb21wdXRlU2VsZWN0b3IgPSB0aGlzLmNyZWF0ZUNvbXB1dGVTZWxlY3RvcigpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXRSZWdpc3RyeS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChwcm9wcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gQXJyYXkuaXNBcnJheShwcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIHRoaXMuX3NoZWV0LnNldE9wdGltaXplRm9yU3BlZWQodGhpcy5fb3B0aW1pemVGb3JTcGVlZCk7XG5cbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSB0aGlzLl9zaGVldC5pc09wdGltaXplRm9yU3BlZWQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNCcm93c2VyICYmICF0aGlzLl9mcm9tU2VydmVyKSB7XG4gICAgICB0aGlzLl9mcm9tU2VydmVyID0gdGhpcy5zZWxlY3RGcm9tU2VydmVyKCk7XG4gICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSBPYmplY3Qua2V5cyh0aGlzLl9mcm9tU2VydmVyKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdGFnTmFtZSkge1xuICAgICAgICBhY2NbdGFnTmFtZV0gPSAwO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRnZXRJZEFuZFJ1bGVzID0gdGhpcy5nZXRJZEFuZFJ1bGVzKHByb3BzKSxcbiAgICAgICAgc3R5bGVJZCA9IF90aGlzJGdldElkQW5kUnVsZXMuc3R5bGVJZCxcbiAgICAgICAgcnVsZXMgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzLnJ1bGVzOyAvLyBEZWR1cGluZzoganVzdCBpbmNyZWFzZSB0aGUgaW5zdGFuY2VzIGNvdW50LlxuXG5cbiAgICBpZiAoc3R5bGVJZCBpbiB0aGlzLl9pbnN0YW5jZXNDb3VudHMpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSArPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbmRpY2VzID0gcnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICByZXR1cm4gX3RoaXMuX3NoZWV0Lmluc2VydFJ1bGUocnVsZSk7XG4gICAgfSkgLy8gRmlsdGVyIG91dCBpbnZhbGlkIHJ1bGVzXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCAhPT0gLTE7XG4gICAgfSk7XG4gICAgdGhpcy5faW5kaWNlc1tzdHlsZUlkXSA9IGluZGljZXM7XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdID0gMTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkZ2V0SWRBbmRSdWxlczIgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICBzdHlsZUlkID0gX3RoaXMkZ2V0SWRBbmRSdWxlczIuc3R5bGVJZDtcblxuICAgIGludmFyaWFudChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cywgXCJzdHlsZUlkOiBgXCIgKyBzdHlsZUlkICsgXCJgIG5vdCBmb3VuZFwiKTtcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gLT0gMTtcblxuICAgIGlmICh0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPCAxKSB7XG4gICAgICB2YXIgdGFnRnJvbVNlcnZlciA9IHRoaXMuX2Zyb21TZXJ2ZXIgJiYgdGhpcy5fZnJvbVNlcnZlcltzdHlsZUlkXTtcblxuICAgICAgaWYgKHRhZ0Zyb21TZXJ2ZXIpIHtcbiAgICAgICAgdGFnRnJvbVNlcnZlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZ0Zyb21TZXJ2ZXIpO1xuICAgICAgICBkZWxldGUgdGhpcy5fZnJvbVNlcnZlcltzdHlsZUlkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luZGljZXNbc3R5bGVJZF0uZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl9zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuX2luZGljZXNbc3R5bGVJZF07XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF07XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUocHJvcHMsIG5leHRQcm9wcykge1xuICAgIHRoaXMuYWRkKG5leHRQcm9wcyk7XG4gICAgdGhpcy5yZW1vdmUocHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHRoaXMuX3NoZWV0LmZsdXNoKCk7XG5cbiAgICB0aGlzLl9zaGVldC5pbmplY3QoKTtcblxuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IHt9O1xuICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcbiAgICB0aGlzLmNvbXB1dGVTZWxlY3RvciA9IHRoaXMuY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNzc1J1bGVzID0gZnVuY3Rpb24gY3NzUnVsZXMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZnJvbVNlcnZlciA9IHRoaXMuX2Zyb21TZXJ2ZXIgPyBPYmplY3Qua2V5cyh0aGlzLl9mcm9tU2VydmVyKS5tYXAoZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHJldHVybiBbc3R5bGVJZCwgX3RoaXMzLl9mcm9tU2VydmVyW3N0eWxlSWRdXTtcbiAgICB9KSA6IFtdO1xuXG4gICAgdmFyIGNzc1J1bGVzID0gdGhpcy5fc2hlZXQuY3NzUnVsZXMoKTtcblxuICAgIHJldHVybiBmcm9tU2VydmVyLmNvbmNhdChPYmplY3Qua2V5cyh0aGlzLl9pbmRpY2VzKS5tYXAoZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHJldHVybiBbc3R5bGVJZCwgX3RoaXMzLl9pbmRpY2VzW3N0eWxlSWRdLm1hcChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGNzc1J1bGVzW2luZGV4XS5jc3NUZXh0O1xuICAgICAgfSkuam9pbihfdGhpczMuX29wdGltaXplRm9yU3BlZWQgPyAnJyA6ICdcXG4nKV07XG4gICAgfSkgLy8gZmlsdGVyIG91dCBlbXB0eSBydWxlc1xuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHJ1bGVbMV0pO1xuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogY3JlYXRlQ29tcHV0ZUlkXG4gICAqXG4gICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0byBjb21wdXRlIGFuZCBtZW1vaXplIGEganN4IGlkIGZyb20gYSBiYXNlZElkIGFuZCBvcHRpb25hbGx5IHByb3BzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jcmVhdGVDb21wdXRlSWQgPSBmdW5jdGlvbiBjcmVhdGVDb21wdXRlSWQoKSB7XG4gICAgdmFyIGNhY2hlID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChiYXNlSWQsIHByb3BzKSB7XG4gICAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIHJldHVybiBcImpzeC1cIiArIGJhc2VJZDtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BzVG9TdHJpbmcgPSBTdHJpbmcocHJvcHMpO1xuICAgICAgdmFyIGtleSA9IGJhc2VJZCArIHByb3BzVG9TdHJpbmc7IC8vIHJldHVybiBganN4LSR7aGFzaFN0cmluZyhgJHtiYXNlSWR9LSR7cHJvcHNUb1N0cmluZ31gKX1gXG5cbiAgICAgIGlmICghY2FjaGVba2V5XSkge1xuICAgICAgICBjYWNoZVtrZXldID0gXCJqc3gtXCIgKyAoMCwgX3N0cmluZ0hhc2hbXCJkZWZhdWx0XCJdKShiYXNlSWQgKyBcIi1cIiArIHByb3BzVG9TdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FjaGVba2V5XTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBjcmVhdGVDb21wdXRlU2VsZWN0b3JcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgZHluYW1pYyBzZWxlY3RvcnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZUNvbXB1dGVTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVTZWxlY3RvcihzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHApIHtcbiAgICBpZiAoc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwID09PSB2b2lkIDApIHtcbiAgICAgIHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCA9IC9fX2pzeC1zdHlsZS1keW5hbWljLXNlbGVjdG9yL2c7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgY3NzKSB7XG4gICAgICAvLyBTYW5pdGl6ZSBTU1ItZWQgQ1NTLlxuICAgICAgLy8gQ2xpZW50IHNpZGUgY29kZSBkb2Vzbid0IG5lZWQgdG8gYmUgc2FuaXRpemVkIHNpbmNlIHdlIHVzZVxuICAgICAgLy8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUgKGRldikgYW5kIHRoZSBDU1NPTSBhcGkgc2hlZXQuaW5zZXJ0UnVsZSAocHJvZCkuXG4gICAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICBjc3MgPSBzYW5pdGl6ZShjc3MpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWRjc3MgPSBpZCArIGNzcztcblxuICAgICAgaWYgKCFjYWNoZVtpZGNzc10pIHtcbiAgICAgICAgY2FjaGVbaWRjc3NdID0gY3NzLnJlcGxhY2Uoc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwLCBpZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZVtpZGNzc107XG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0SWRBbmRSdWxlcyA9IGZ1bmN0aW9uIGdldElkQW5kUnVsZXMocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBjc3MgPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgZHluYW1pYyA9IHByb3BzLmR5bmFtaWMsXG4gICAgICAgIGlkID0gcHJvcHMuaWQ7XG5cbiAgICBpZiAoZHluYW1pYykge1xuICAgICAgdmFyIHN0eWxlSWQgPSB0aGlzLmNvbXB1dGVJZChpZCwgZHluYW1pYyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdHlsZUlkOiBzdHlsZUlkLFxuICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShjc3MpID8gY3NzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQuY29tcHV0ZVNlbGVjdG9yKHN0eWxlSWQsIHJ1bGUpO1xuICAgICAgICB9KSA6IFt0aGlzLmNvbXB1dGVTZWxlY3RvcihzdHlsZUlkLCBjc3MpXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGVJZDogdGhpcy5jb21wdXRlSWQoaWQpLFxuICAgICAgcnVsZXM6IEFycmF5LmlzQXJyYXkoY3NzKSA/IGNzcyA6IFtjc3NdXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogc2VsZWN0RnJvbVNlcnZlclxuICAgKlxuICAgKiBDb2xsZWN0cyBzdHlsZSB0YWdzIGZyb20gdGhlIGRvY3VtZW50IHdpdGggaWQgX19qc3gtWFhYXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNlbGVjdEZyb21TZXJ2ZXIgPSBmdW5jdGlvbiBzZWxlY3RGcm9tU2VydmVyKCkge1xuICAgIHZhciBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJfX2pzeC1cIl0nKSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBlbGVtZW50KSB7XG4gICAgICB2YXIgaWQgPSBlbGVtZW50LmlkLnNsaWNlKDIpO1xuICAgICAgYWNjW2lkXSA9IGVsZW1lbnQ7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldFJlZ2lzdHJ5O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlU2hlZXRSZWdpc3RyeTtcblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0eWxlU2hlZXRSZWdpc3RyeTogXCIgKyBtZXNzYWdlICsgXCIuXCIpO1xuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc3R5bGUnKVxuIiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhbGwgdGhlIFByb3BUeXBlcyB1c2VkIGFjcm9zcyB0aGUgYXBwLlxyXG4gKi9cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgZ3Vlc3Q6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgdG9rZW46IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZVByb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpc0NyZWF0b3I6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGZldGNoZWQ6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHB1cmNoYXNlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhdGVzdFBvc3RzUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNyZWF0b3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdXBkYXRlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0ZUluZm9Qcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBsb2dvcGF0aDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgY3VycmVuY3lVbml0OiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBjdXJyZW5jeUlTT0NvZGU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBwdWJsaWNDb3Vyc2UgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNyZWF0b3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICB1cGRhdGVkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaXNGZWF0dXJlZDogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBjb3N0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNyZWF0b3JJZDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0b3JDb3Vyc2UgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgY3JlYXRvck5hbWU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHVwZGF0ZWQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGlzRmVhdHVyZWQ6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgY29zdDogUHJvcFR5cGVzLm51bWJlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0ZVVzZXIgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHZlcmlmaWVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzQ3JlYXRvcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc0FkbWluOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgcHVyY2hhc2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmVhdHVyZWRDb3Vyc2UgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjb3N0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZmVhdHVyZWRJbWFnZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcE1lc3NhZ2UgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNiOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZXNzb24gPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgZG93bmxvYWRhYmxlOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGNvbnRlbnRVUkw6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzdGluYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIG5ld1RhYjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkcmVzc1Byb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBiYWNrZW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnJvbnRlbmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkb21haW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=