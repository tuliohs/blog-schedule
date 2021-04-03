(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./components/AppToast.js":
/*!********************************!*\
  !*** ./components/AppToast.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./types.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");



var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\AppToast.js",
    _this = undefined;


 //import { connect } from "react-redux";

 //import { clearAppMessage } from "../redux/actions";




var AppToast = function AppToast(props) {
  var message = props.message;
  var action = message && message.action;

  var handleClose = function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    } //props.dispatch(clearAppMessage());

  };

  var getActionButtonsArray = function getActionButtonsArray() {
    var actionButtonsArray = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      "aria-label": "close",
      color: "inherit",
      onClick: handleClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Close"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, "close", false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)];

    if (action) {
      actionButtonsArray.unshift( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "secondary",
        size: "small",
        onClick: message.action.cb,
        children: message.action.text
      }, "action", false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this));
    }

    return actionButtonsArray;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Snackbar"], {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      open: message.open,
      autoHideDuration: 6000,
      onClose: handleClose,
      message: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: message.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 20
      }, _this),
      action: getActionButtonsArray()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this)
  }, void 0, false);
}; //AppToast.propTypes = {
//  message: appMessage.isRequired,
//  dispatch: PropTypes.func.isRequired,
//};


_c = AppToast;

var mapStateToProps = function mapStateToProps(state) {
  return {
    message: state.message
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}; //export default connect(mapStateToProps, mapDispatchToProps)(AppToast);


/* harmony default export */ __webpack_exports__["default"] = (AppToast);

var _c;

$RefreshReg$(_c, "AppToast");

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

/***/ "./components/Public/BaseLayout/Header.js":
/*!************************************************!*\
  !*** ./components/Public/BaseLayout/Header.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SessionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SessionButton */ "./components/Public/SessionButton.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../types */ "./types.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_MyContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../context/MyContext */ "./context/MyContext.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();



 //import { connect } from "react-redux";






var Img = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../Img.js */ "./components/Img.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../Img.js */ "./components/Img.js")];
    },
    modules: ["../../Img.js"]
  }
});
_c2 = Img;
var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    logo: {
      display: "flex"
    },
    logocontainer: {
      width: "2em",
      height: "2em",
      marginRight: theme.spacing(1),
      display: "flex"
    },
    logoimg: {
      borderRadius: "0.2em"
    }
  };
});

var Header = function Header(props) {
  _s();

  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      siteInfo = _useContext.siteInfo;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "space-between",
    direction: "row",
    alignItems: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        direction: "row",
        alignItems: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: classes.logo,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classes.logocontainer,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
                  src: siteInfo.logopath,
                  isThumbnail: true,
                  classes: classes.logoimg,
                  alt: "logo",
                  defaultImage: "/courselit_backdrop_square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            variant: "h5",
            children: siteInfo.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SessionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(Header, "wJvhQwB8tHOwj5kFd4w1vimVLcc=", false, function () {
  return [useStyles];
});

_c3 = Header;
Header.propTypes = {
  siteinfo: _types__WEBPACK_IMPORTED_MODULE_5__["siteInfoProps"]
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    siteinfo: state.siteinfo
  };
}; //export default connect(mapStateToProps)(Header);


/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3;

$RefreshReg$(_c, "Img$dynamic");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Public/BaseLayout/Scaffold/MenuItem.js":
/*!***********************************************************!*\
  !*** ./components/Public/BaseLayout/Scaffold/MenuItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../types */ "./types.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Scaffold\\MenuItem.js",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  externalLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block"
  }
});

var MenuItem = function MenuItem(props) {
  _s();

  var link = props.link;
  var classes = useStyles();
  return link.destination.indexOf("http") !== -1 || link.newTab ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: link.destination,
    target: "_blank",
    rel: "noreferrer noopener",
    className: classes.externalLink,
    onClick: props.closeDrawer ? props.closeDrawer : function () {},
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      button: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        primary: link.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), link.newTab && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["OpenInNew"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)
  }, link.text, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: link.destination,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      button: true,
      component: "a",
      onClick: props.closeDrawer ? props.closeDrawer : function () {},
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        primary: link.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)
  }, link.text, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
}; //MenuItem.propTypes = {
//  link: link,
//  closeDrawer: PropTypes.func,
//};


_s(MenuItem, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = MenuItem;
/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

var _c;

$RefreshReg$(_c, "MenuItem");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Public/BaseLayout/Scaffold/index.js":
/*!********************************************************!*\
  !*** ./components/Public/BaseLayout/Scaffold/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _AppToast_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../AppToast.js */ "./components/AppToast.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Header.js */ "./components/Public/BaseLayout/Header.js");
/* harmony import */ var _config_strings_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../config/strings.js */ "./config/strings.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../config/constants.js */ "./config/constants.js");
/* harmony import */ var _MenuItem_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MenuItem.js */ "./components/Public/BaseLayout/Scaffold/MenuItem.js");
/* harmony import */ var _context_MyContext_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../context/MyContext.js */ "./context/MyContext.js");




var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Scaffold\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











 //import PropTypes from "prop-types";

 //import { connect } from "react-redux";
//import { siteInfoProps, link, profileProps } from "../../../../types.js";





 //import Template from "../Template.js";

var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex"
    },
    drawer: Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.up("sm"), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.up("sm"), {
      display: "none"
    }),
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1
    },
    activeItem: {
      background: "#d6d6d6"
    },
    visitSiteLink: {
      color: "#fff"
    },
    showProgressBar: function showProgressBar(props) {
      return {
        visibility: props.networkAction ? "visible" : "hidden"
      };
    },
    menuTitle: {
      marginLeft: theme.spacing(2)
    }
  };
});

var Scaffold = function Scaffold(_ref) {
  _s();

  var children = _ref.children,
      props = _ref.props;
  var classes = useStyles(); //= useStyles(props);

  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["useTheme"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_MyContext_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
      siteInfo = _useContext.siteInfo,
      profile = _useContext.profile,
      navigation = _useContext.navigation;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mobileOpen = _useState[0],
      setMobileOpen = _useState[1];

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  var makeDrawer = function makeDrawer() {
    var forMobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
        container: true,
        alignItems: "center",
        className: classes.toolbar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
          item: true,
          className: classes.menuTitle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
            variant: "h5",
            children: siteInfo.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: [profile.fetched && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [props.profile.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
              link: {
                text: _config_strings_js__WEBPACK_IMPORTED_MODULE_15__["MAIN_MENU_ITEM_PROFILE"],
                destination: "/profile/".concat(props.profile.userId && props.profile.userId !== -1 ? props.profile.userId : props.profile.id),
                category: _config_constants_js__WEBPACK_IMPORTED_MODULE_16__["NAVIGATION_CATEGORY_MAIN"],
                newTab: false
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, _this)]
          }, void 0, true), (props.profile.isAdmin || props.profile.isCreator) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
            link: {
              text: _config_strings_js__WEBPACK_IMPORTED_MODULE_15__["MAIN_MENU_ITEM_DASHBOARD"],
              destination: "/dashboard/courses",
              category: _config_constants_js__WEBPACK_IMPORTED_MODULE_16__["NAVIGATION_CATEGORY_MAIN"],
              newTab: false
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, _this)]
        }, void 0, true), navigation && navigation.map(function (link) {
          return forMobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
            link: link,
            closeDrawer: handleDrawerToggle
          }, link.destination, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
            link: link
          }, link.destination, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      position: "fixed",
      className: classes.appBar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Toolbar"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "inherit",
          "aria-label": "open drawer",
          edge: "start",
          onClick: handleDrawerToggle,
          className: classes.menuButton,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Menu"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_js__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: classes.drawer,
      "aria-label": "menu",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__["default"], {
        smUp: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "temporary",
          anchor: theme.direction === "rtl" ? "right" : "left",
          open: mobileOpen,
          onClose: handleDrawerToggle,
          classes: {
            paper: classes.drawerPaper
          },
          ModalProps: {
            keepMounted: true // Better open performance on mobile.

          },
          children: makeDrawer(true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__["default"], {
        xsDown: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          classes: {
            paper: classes.drawerPaper
          },
          variant: "permanent",
          open: true,
          children: makeDrawer()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      children: "scafoolf"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: classes.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.toolbar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["LinearProgress"], {
        className: classes.showProgressBar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AppToast_js__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 5
  }, _this);
}; //Scaffold.propTypes = {
//  children: PropTypes.object,
//siteinfo: siteInfoProps,
//navigation: PropTypes.arrayOf(link),
//networkAction: PropTypes.bool.isRequired,
//profile: profileProps,
//};
//const mapStateToProps = (state) => ({
//  siteinfo: state.siteinfo,
//  navigation: state.navigation.filter((link) => link.category === "main"),
//  networkAction: state.networkAction,
//  profile: state.profile,
//});
//export default connect(mapStateToProps)(Scaffold);


_s(Scaffold, "sf7L6/jx2fY2aznb6OvY1m/rFBU=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["useTheme"]];
});

_c = Scaffold;
/* harmony default export */ __webpack_exports__["default"] = (Scaffold);

var _c;

$RefreshReg$(_c, "Scaffold");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Public/BaseLayout/Section.js":
/*!*************************************************!*\
  !*** ./components/Public/BaseLayout/Section.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _WidgetByName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WidgetByName */ "./components/Public/BaseLayout/WidgetByName.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/widgets */ "./config/widgets.js");
/* harmony import */ var _context_MyContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/MyContext */ "./context/MyContext.js");



var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Section.js",
    _this = undefined,
    _s = $RefreshSig$();

 //import PropTypes from "prop-types";
//import { connect } from "react-redux";







var Section = function Section(_ref) {
  _s();

  var name = _ref.name;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      layout = _useContext.layout;

  var sectionLayout = layout[name];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return sectionLayout && sectionLayout.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    direction: "column",
    children: sectionLayout.map(function (item, index) {
      return _config_widgets__WEBPACK_IMPORTED_MODULE_5__["default"][item].metadata.excludeFromPaths && _config_widgets__WEBPACK_IMPORTED_MODULE_5__["default"][item].metadata.excludeFromPaths.includes(router.pathname) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, index, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WidgetByName__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: item,
          section: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
}; //Section.propTypes = {
//  name: PropTypes.string.isRequired,
//  layout: PropTypes.object.isRequired,
//};
//const mapStateToProps = (state) => ({layout: state.layout,})
//export default connect(mapStateToProps)(Section);


_s(Section, "pV8xIWUDpWIiQ9iv3g4R5n3B9GY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Section;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c;

$RefreshReg$(_c, "Section");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Public/BaseLayout/Template.js":
/*!**************************************************!*\
  !*** ./components/Public/BaseLayout/Template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section */ "./components/Public/BaseLayout/Section.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");



var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Template.js",
    _this = undefined,
    _s = $RefreshSig$();

 //import PropTypes from "prop-types";





var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    mainContent: {
      maxWidth: 1240,
      minHeight: "80vh",
      margin: "0 auto"
    }
  };
});

var Template = function Template(_ref) {
  _s();

  var children = _ref.children,
      props = _ref.props;
  var classes = useStyles(); // useStyles(props);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      className: classes.mainContent,
      children: [router.pathname === "/" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 37
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        item: true,
        direction: "row",
        xs: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          container: true,
          item: true,
          direction: "column",
          xs: 12,
          md: 8,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            item: true,
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            item: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "bottom"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          container: true,
          item: true,
          direction: "column",
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: "aside"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        light: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        direction: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          container: true,
          item: true,
          direction: "column",
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: "footerLeft"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          container: true,
          item: true,
          direction: "column",
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: "footerRight"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
}; //Template.propTypes = {
//  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//};


_s(Template, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Template;
/* harmony default export */ __webpack_exports__["default"] = (Template);

var _c;

$RefreshReg$(_c, "Template");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Public/BaseLayout/WidgetByName.js":
/*!******************************************************!*\
  !*** ./components/Public/BaseLayout/WidgetByName.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/widgets */ "./config/widgets.js");
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/fetch */ "./lib/fetch.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/constants */ "./config/constants.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/utils */ "./lib/utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../types */ "./types.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\WidgetByName.js",
    _this = undefined;










var WidgetByName = function WidgetByName(_ref) {
  var name = _ref.name,
      section = _ref.section,
      address = _ref.address;
  var Widget = _config_widgets__WEBPACK_IMPORTED_MODULE_3__["default"][name].widget;
  var fetch = new _lib_fetch__WEBPACK_IMPORTED_MODULE_4__["default"]().setUrl("".concat(address.backend, "/graph")).setIsGraphQLEndpoint(true);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Widget, {
      name: name,
      fetchBuilder: fetch,
      section: section,
      config: Object.assign({}, _config_constants__WEBPACK_IMPORTED_MODULE_5__, {
        BACKEND: address.backend
      }),
      utilities: _lib_utils__WEBPACK_IMPORTED_MODULE_6__
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_c = WidgetByName;
WidgetByName.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  section: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  address: _types__WEBPACK_IMPORTED_MODULE_8__["addressProps"]
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    address: state.address
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(WidgetByName));

var _c;

$RefreshReg$(_c, "WidgetByName");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Public/BaseLayout/index.js":
/*!***********************************************!*\
  !*** ./components/Public/BaseLayout/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Template.js */ "./components/Public/BaseLayout/Template.js");
/* harmony import */ var _Scaffold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scaffold */ "./components/Public/BaseLayout/Scaffold/index.js");
/* harmony import */ var _context_MyContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/MyContext.js */ "./context/MyContext.js");
/* harmony import */ var _config_defaultState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/defaultState */ "./config/defaultState.js");



var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

 //import PropTypes from "prop-types";
//import { connect } from "react-redux";


 //import { addressProps, siteInfoProps } from "../../../types.js";




 //type Props = {
//  children?: ReactNode;
//  title?: string;
//  followLinks?: boolean;
//  descript?: string;
//};

var MasterLayout = function MasterLayout(_ref) {
  _s();

  var children = _ref.children,
      title = _ref.title,
      props = _ref.props;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
      siteInfo = _useContext.siteInfo;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [title, " | ", siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.logopath) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_3__["formulateMediaUrl"])(_config_defaultState__WEBPACK_IMPORTED_MODULE_7__["default"].address.backend, siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.logopath, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: siteInfo !== null && siteInfo !== void 0 && siteInfo.logopath ? Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_3__["formulateMediaUrl"])(_config_defaultState__WEBPACK_IMPORTED_MODULE_7__["default"].address.backend, siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.logopath, true) : "/courselit_backdrop_square.webp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Scaffold__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Template_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; //MasterLayout.propTypes = {
//  children: PropTypes.object,
//  networkAction: PropTypes.bool,
//  siteInfo: siteInfoProps?.isRequired,
//  title: PropTypes.string.isRequired,
//  layout: PropTypes.object.isRequired,
//  address: addressProps,
//};
//const mapStateToProps = (state) => ({
//  networkAction: state.networkAction,
//  siteInfo: state.siteinfo,
//  layout: state.layout,
//  address: state.address,
//});
//export default connect(mapStateToProps)(MasterLayout);


_s(MasterLayout, "FrpWm/lVIfcr4vLCpsvdazoN7z4=");

_c = MasterLayout;
/* harmony default export */ __webpack_exports__["default"] = (MasterLayout);

var _c;

$RefreshReg$(_c, "MasterLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Public/SessionButton.js":
/*!********************************************!*\
  !*** ./components/Public/SessionButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_strings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings.js */ "./config/strings.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _context_MyContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/MyContext.js */ "./context/MyContext.js");



var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\SessionButton.js",
    _s = $RefreshSig$();

/**
 * This component provides a clickable button which shows if the user
 * is logged in or is a guest.
 */

 //import { connect } from "react-redux";

 //import { authProps, profileProps } from "../../types.js";




var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  button: {
    color: "white"
  }
});

function SessionButton(props) {
  _s();

  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
      authProp = _useContext.authProp;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: authProp.guest ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/login",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: classes.button,
        children: _config_strings_js__WEBPACK_IMPORTED_MODULE_3__["GENERIC_SIGNIN_TEXT"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/logout",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: classes.button,
        children: _config_strings_js__WEBPACK_IMPORTED_MODULE_3__["GENERIC_SIGNOUT_TEXT"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this)
  }, void 0, false);
} //SessionButton.propTypes = {
//  auth: authProps,
//  profile: profileProps,
//};
//const mapStateToProps = (state) => ({ auth: state.auth, profile: state.profile, });
//export default connect(mapStateToProps)(SessionButton);


_s(SessionButton, "TfF2/YZ1Sf0ni13BE5sy1Dp67oY=", false, function () {
  return [useStyles];
});

_c = SessionButton;
/* harmony default export */ __webpack_exports__["default"] = (SessionButton);

var _c;

$RefreshReg$(_c, "SessionButton");

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

/***/ "./config/defaultState.js":
/*!********************************!*\
  !*** ./config/defaultState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings.js */ "./config/strings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  auth: {
    guest: true,
    token: null,
    userid: null,
    checked: false
  },
  siteinfo: {
    title: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_TITLE"],
    subtitle: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_SUBTITLE"],
    logopath: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_LOGO_PATH"],
    currencyUnit: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_CURRENCY_UNIT"],
    currencyISOCode: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_CURRENCY_ISO_CODE"],
    paymentMethod: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_PAYMENT_METHOD"],
    stripePublishableKey: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT"],
    themePrimaryColor: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_THEME_COLOR_PRIMARY"],
    themeSecondaryColor: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_THEME_COLOR_SECONDARY"],
    codeInjectionHead: _strings_js__WEBPACK_IMPORTED_MODULE_0__["GENERIC_CODE_INJECTION_HEAD"]
  },
  networkAction: false,
  profile: {
    isCreator: false,
    name: null,
    id: null,
    fetched: false,
    isAdmin: false,
    purchases: [],
    email: null,
    bio: null
  },
  message: {
    open: false,
    message: "",
    action: null
  },
  theme: {},
  layout: {
    top: [],
    bottom: [],
    aside: [],
    footerLeft: [],
    footerRight: []
  },
  navigation: [],
  address: {
    backend: "http://localhost:8000",
    frontend: "",
    domain: ""
  }
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./config/strings.js":
/*!***************************!*\
  !*** ./config/strings.js ***!
  \***************************/
/*! exports provided: ERR_ALL_FIELDS_REQUIRED, ERR_PASSWORDS_DONT_MATCH, SIGNUP_SUCCESS, ERR_COURSE_TITLE_REQUIRED, ERR_COURSE_COST_REQUIRED, RESP_API_USER_CREATED, CREATOR_AREA_LINK_TEXT, CREATOR_AREA_PAGE_TITLE, GENERIC_TITLE, GENERIC_SUBTITLE, GENERIC_LOGO_PATH, GENERIC_SIGNIN_TEXT, GENERIC_SIGNUP_TEXT, GENERIC_SIGNOUT_TEXT, GENERIC_CURRENCY_UNIT, GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT, GENERIC_CURRENCY_ISO_CODE, GENERIC_PAYMENT_METHOD, GENERIC_THEME_COLOR_PRIMARY, GENERIC_THEME_COLOR_SECONDARY, GENERIC_CODE_INJECTION_HEAD, BTN_LOAD_MORE, MEDIA_UPLOAD_BUTTON_TEXT, MEDIA_UPLOADING, MEDIA_ADD_NEW_BUTTON_TEXT, BUTTON_CANCEL_TEXT, MEDIA_SEARCH_INPUT_PLACEHOLDER, LOAD_MORE_TEXT, MANAGE_MEDIA_BUTTON_TEXT, MANAGE_COURSES_PAGE_HEADING, USERS_MANAGER_PAGE_HEADING, NEW_COURSE_PAGE_HEADING, MEDIA_MANAGER_DIALOG_TITLE, BUTTON_NEW_COURSE, BUTTON_DONE_TEXT, DIALOG_TITLE_FEATURED_IMAGE, BUTTON_SET_FEATURED_IMAGE, BUTTON_SELECT_MEDIA, FORM_FIELD_FEATURED_IMAGE, BTN_DELETE_COURSE, BTN_ADD_VIDEO, ADD_VIDEO_DIALOG_TITLE, CAPTION_VERIFIED, CAPTION_UNVERIFIED, LABEL_NEW_PASSWORD, BUTTON_SAVE, SWITCH_IS_ADMIN, SWITCH_IS_CREATOR, SWITCH_ACCOUNT_ACTIVE, LABEL_CONF_PASSWORD, HEADER_BLOG_POSTS_SECTION, HEADER_COURSES_SECTION, SITE_SETTINGS_TITLE, SITE_SETTINGS_SUBTITLE, SITE_SETTINGS_CURRENCY_UNIT, SITE_SETTINGS_CURRENCY_ISO_CODE_TEXT, SITE_SETTINGS_LOGO, SITE_SETTINGS_PAGE_HEADING, SITE_ADMIN_SETTINGS_STRIPE_SECRET, SITE_ADMIN_SETTINGS_PAYPAL_SECRET, SITE_ADMIN_SETTINGS_PAYTM_SECRET, SITE_SETTINGS_SECTION_GENERAL, SITE_SETTINGS_SECTION_PAYMENT, SITE_ADMIN_SETTINGS_PAYMENT_METHOD, SITE_SETTINGS_STRIPE_PUBLISHABLE_KEY_TEXT, FREE_COST, SIDEBAR_TEXT_COURSE_ABOUT, REACT_COMPONENT_CRASHED, CHECKOUT_DIALOG_TITLE, PAYMENT_MODAL_PAYMENT_DETAILS_HEADER, PAYMENT_MODAL_COST_PREFIX, PAYMENT_MODAL_PAY_NOW_BUTTON_CAPTION, PAYMENT_INITIATION_FAILED, PAYMENT_VERIFICATION_FAILED, STRIPE_PUBLISHABLE_KEY_EMPTY, CAPTION_TRY_AGAIN, CAPTION_CLOSE, LOADING, BUTTON_NEW_LESSON_TEXT, BUTTON_DELETE_LESSON_TEXT, COURSE_DETAILS_CARD_HEADER, DANGER_ZONE_HEADER, DANGER_ZONE_DESCRIPTION, DELETE_COURSE_POPUP_HEADER, POPUP_OK_ACTION, POPUP_CANCEL_ACTION, LOGIN_SECTION_HEADER, LOGIN_SECTION_BUTTON, LOGIN_INSTEAD_BUTTON, SIGNUP_SECTION_HEADER, SIGNUP_SECTION_BUTTON, MEDIA_MANAGER_PAGE_HEADING, BUTTON_SEARCH, BUTTON_ADD_FILE, FILE_UPLOAD_SUCCESS, HEADER_YOUR_MEDIA, LESSON_EDITOR_HEADER, BLOG_POST_SWITCH, DOWNLOADABLE_SWITCH, TYPE_DROPDOWN, LESSON_CONTENT_HEADER, CONTENT_URL_LABEL, MEDIA_MANAGER_YOUR_MEDIA_HEADER, DIALOG_SELECT_BUTTON, LESSON_REQUIRES_ENROLLMENT, DELETE_LESSON_POPUP_HEADER, APP_MESSAGE_LESSON_DELETED, APP_MESSAGE_LESSON_SAVED, APP_MESSAGE_COURSE_SAVED, ENROLL_IN_THE_COURSE, USER_ERROR_HEADER, ENROLL_BUTTON_TEXT, BUTTON_DELETE_MEDIA, DELETE_MEDIA_POPUP_HEADER, HEADER_EDITING_MEDIA, HEADER_EDITING_USER, HEADER_MEDIA_PREVIEW, PREVIEW_PDF_FILE, APP_MESSAGE_MEDIA_DELETED, APP_MESSAGE_MEDIA_UPDATED, PAGE_HEADER_ALL_COURSES, PAGE_HEADER_ALL_POSTS, COURSE_TYPE_BLOG, COURSE_TYPE_COURSE, COURSE_CREATOR_PREFIX, COURSE_EDITOR_DESCRIPTION, APP_MESSAGE_SETTINGS_SAVED, ENROLLED_COURSES_HEADER, SITE_CUSTOMISATIONS_SETTING_HEADER, SITE_CUSTOMISATIONS_SETTING_CODEINJECTION_HEAD, DISCARD_COURSE_CHANGES_POPUP_HEADER, FEATURED_SECTION_HEADER, CARD_HEADER_PAGE_LAYOUT, CARD_HEADER_THEME, CARD_DESCRIPTION_PAGE_LAYOUT, ADD_COMPONENT_POPUP_HEADER, APP_MESSAGE_CHANGES_SAVED, SUBHEADER_COURSES_SECTION, SUBHEADER_FEATURED_SECTION, SUBHEADER_THEME_ADD_THEME, SUBHEADER_THEME_ADDED_THEME, SUBHEADER_THEME_ADD_THEME_INPUT_LABEL, SUBHEADER_THEME_ADD_THEME_INPUT_PLACEHOLDER, SUBHEADER_THEME_INSTALLED_THEMES, BUTTON_GET_THEMES, ERROR_SNACKBAR_PREFIX, BUTTON_THEME_APPLY, BUTTON_THEME_UNINSTALL, BUTTON_THEME_INSTALL, BUTTON_THEME_REMIX, DELETE_THEME_POPUP_HEADER, APPLY_THEME_POPUP_HEADER, REMIXED_THEME_PREFIX, APP_MESSAGE_THEME_COPIED, NO_THEMES_INSTALLED, APP_MESSAGE_THEME_INSTALLED, CONSOLE_MESSAGE_THEME_INVALID, APP_MESSAGE_THEME_APPLIED, APP_MESSAGE_THEME_UNINSTALLED, HEADER_NAVIGATION, LABEL_NAVIGATION_LINK_TEXT, LABEL_NAVIGATION_LINK_DESTINATION, LINK_DROPDOWN, ADD_NEW_LINK_BUTTON, LABEL_NAVIGATION_LINK_NEWTAB, WIDGETS_PAGE_HEADER, PAYMENTS_SHIPPING_ADDRESS_SECTION_HEADER, HEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK, SUBHEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK, PURCHASE_STATUS_PAGE_HEADER, MAIN_MENU_ITEM_DASHBOARD, MAIN_MENU_ITEM_PROFILE, LAYOUT_SECTION_MAIN_CONTENT, LAYOUT_SECTION_FOOTER_LEFT, LAYOUT_SECTION_FOOTER_RIGHT, LAYOUT_SECTION_TOP, LAYOUT_SECTION_FOOTER, LAYOUT_SECTION_BOTTOM, LAYOUT_SECTION_ASIDE, TRANSACTION_STATUS_SUCCESS, TRANSACTION_STATUS_SUCCESS_DETAILS, TRANSACTION_STATUS_INITIATED, TRANSACTION_STATUS_FAILED, TRANSACTION_STATUS_FAILED_DETAILS, VISIT_COURSE_BUTTON, VISIT_POST_BUTTON, VERIFY_PAYMENT_BUTTON, PURCHASE_ID_HEADER, PAGE_HEADER_FEATURED, BTN_VIEW_ALL, EMPTY_COURSES_LIST_ADMIN, HEADER_RESET_PASSWORD, HEADER_DESIGN, HEADER_YOUR_PROFILE, PROFILE_PAGE_MESSAGE_NOT_LOGGED_IN, PROFILE_PAGE_HEADER, PROFILE_MY_COURSES, PROFILE_PAGE_NOT_ENROLLED, PROFILE_PAGE_BROWSE_COURSES_TEXT, PROFILE_SECTION_DETAILS_NAME, PROFILE_SECTION_DETAILS_EMAIL, PROFILE_SECTION_DETAILS_BIO, PROFILE_SECTION_DETAILS_BIO_EMPTY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_ALL_FIELDS_REQUIRED", function() { return ERR_ALL_FIELDS_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_PASSWORDS_DONT_MATCH", function() { return ERR_PASSWORDS_DONT_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_COURSE_TITLE_REQUIRED", function() { return ERR_COURSE_TITLE_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_COURSE_COST_REQUIRED", function() { return ERR_COURSE_COST_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESP_API_USER_CREATED", function() { return RESP_API_USER_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATOR_AREA_LINK_TEXT", function() { return CREATOR_AREA_LINK_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATOR_AREA_PAGE_TITLE", function() { return CREATOR_AREA_PAGE_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_TITLE", function() { return GENERIC_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_SUBTITLE", function() { return GENERIC_SUBTITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_LOGO_PATH", function() { return GENERIC_LOGO_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_SIGNIN_TEXT", function() { return GENERIC_SIGNIN_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_SIGNUP_TEXT", function() { return GENERIC_SIGNUP_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_SIGNOUT_TEXT", function() { return GENERIC_SIGNOUT_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_CURRENCY_UNIT", function() { return GENERIC_CURRENCY_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT", function() { return GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_CURRENCY_ISO_CODE", function() { return GENERIC_CURRENCY_ISO_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_PAYMENT_METHOD", function() { return GENERIC_PAYMENT_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_THEME_COLOR_PRIMARY", function() { return GENERIC_THEME_COLOR_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_THEME_COLOR_SECONDARY", function() { return GENERIC_THEME_COLOR_SECONDARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_CODE_INJECTION_HEAD", function() { return GENERIC_CODE_INJECTION_HEAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTN_LOAD_MORE", function() { return BTN_LOAD_MORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_UPLOAD_BUTTON_TEXT", function() { return MEDIA_UPLOAD_BUTTON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_UPLOADING", function() { return MEDIA_UPLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ADD_NEW_BUTTON_TEXT", function() { return MEDIA_ADD_NEW_BUTTON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_CANCEL_TEXT", function() { return BUTTON_CANCEL_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_SEARCH_INPUT_PLACEHOLDER", function() { return MEDIA_SEARCH_INPUT_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_TEXT", function() { return LOAD_MORE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANAGE_MEDIA_BUTTON_TEXT", function() { return MANAGE_MEDIA_BUTTON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANAGE_COURSES_PAGE_HEADING", function() { return MANAGE_COURSES_PAGE_HEADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_MANAGER_PAGE_HEADING", function() { return USERS_MANAGER_PAGE_HEADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_COURSE_PAGE_HEADING", function() { return NEW_COURSE_PAGE_HEADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MANAGER_DIALOG_TITLE", function() { return MEDIA_MANAGER_DIALOG_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_NEW_COURSE", function() { return BUTTON_NEW_COURSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_DONE_TEXT", function() { return BUTTON_DONE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_TITLE_FEATURED_IMAGE", function() { return DIALOG_TITLE_FEATURED_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_SET_FEATURED_IMAGE", function() { return BUTTON_SET_FEATURED_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_SELECT_MEDIA", function() { return BUTTON_SELECT_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_FIELD_FEATURED_IMAGE", function() { return FORM_FIELD_FEATURED_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTN_DELETE_COURSE", function() { return BTN_DELETE_COURSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTN_ADD_VIDEO", function() { return BTN_ADD_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_VIDEO_DIALOG_TITLE", function() { return ADD_VIDEO_DIALOG_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTION_VERIFIED", function() { return CAPTION_VERIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTION_UNVERIFIED", function() { return CAPTION_UNVERIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_NEW_PASSWORD", function() { return LABEL_NEW_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_SAVE", function() { return BUTTON_SAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_IS_ADMIN", function() { return SWITCH_IS_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_IS_CREATOR", function() { return SWITCH_IS_CREATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_ACCOUNT_ACTIVE", function() { return SWITCH_ACCOUNT_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_CONF_PASSWORD", function() { return LABEL_CONF_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_BLOG_POSTS_SECTION", function() { return HEADER_BLOG_POSTS_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_COURSES_SECTION", function() { return HEADER_COURSES_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_TITLE", function() { return SITE_SETTINGS_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_SUBTITLE", function() { return SITE_SETTINGS_SUBTITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_CURRENCY_UNIT", function() { return SITE_SETTINGS_CURRENCY_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_CURRENCY_ISO_CODE_TEXT", function() { return SITE_SETTINGS_CURRENCY_ISO_CODE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_LOGO", function() { return SITE_SETTINGS_LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_PAGE_HEADING", function() { return SITE_SETTINGS_PAGE_HEADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_ADMIN_SETTINGS_STRIPE_SECRET", function() { return SITE_ADMIN_SETTINGS_STRIPE_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_ADMIN_SETTINGS_PAYPAL_SECRET", function() { return SITE_ADMIN_SETTINGS_PAYPAL_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_ADMIN_SETTINGS_PAYTM_SECRET", function() { return SITE_ADMIN_SETTINGS_PAYTM_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_SECTION_GENERAL", function() { return SITE_SETTINGS_SECTION_GENERAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_SECTION_PAYMENT", function() { return SITE_SETTINGS_SECTION_PAYMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_ADMIN_SETTINGS_PAYMENT_METHOD", function() { return SITE_ADMIN_SETTINGS_PAYMENT_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_SETTINGS_STRIPE_PUBLISHABLE_KEY_TEXT", function() { return SITE_SETTINGS_STRIPE_PUBLISHABLE_KEY_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FREE_COST", function() { return FREE_COST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TEXT_COURSE_ABOUT", function() { return SIDEBAR_TEXT_COURSE_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_COMPONENT_CRASHED", function() { return REACT_COMPONENT_CRASHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_DIALOG_TITLE", function() { return CHECKOUT_DIALOG_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODAL_PAYMENT_DETAILS_HEADER", function() { return PAYMENT_MODAL_PAYMENT_DETAILS_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODAL_COST_PREFIX", function() { return PAYMENT_MODAL_COST_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODAL_PAY_NOW_BUTTON_CAPTION", function() { return PAYMENT_MODAL_PAY_NOW_BUTTON_CAPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_INITIATION_FAILED", function() { return PAYMENT_INITIATION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_VERIFICATION_FAILED", function() { return PAYMENT_VERIFICATION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_PUBLISHABLE_KEY_EMPTY", function() { return STRIPE_PUBLISHABLE_KEY_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTION_TRY_AGAIN", function() { return CAPTION_TRY_AGAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTION_CLOSE", function() { return CAPTION_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_NEW_LESSON_TEXT", function() { return BUTTON_NEW_LESSON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_DELETE_LESSON_TEXT", function() { return BUTTON_DELETE_LESSON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSE_DETAILS_CARD_HEADER", function() { return COURSE_DETAILS_CARD_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANGER_ZONE_HEADER", function() { return DANGER_ZONE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANGER_ZONE_DESCRIPTION", function() { return DANGER_ZONE_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COURSE_POPUP_HEADER", function() { return DELETE_COURSE_POPUP_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_OK_ACTION", function() { return POPUP_OK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_CANCEL_ACTION", function() { return POPUP_CANCEL_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SECTION_HEADER", function() { return LOGIN_SECTION_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SECTION_BUTTON", function() { return LOGIN_SECTION_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_INSTEAD_BUTTON", function() { return LOGIN_INSTEAD_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SECTION_HEADER", function() { return SIGNUP_SECTION_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SECTION_BUTTON", function() { return SIGNUP_SECTION_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MANAGER_PAGE_HEADING", function() { return MEDIA_MANAGER_PAGE_HEADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_SEARCH", function() { return BUTTON_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_ADD_FILE", function() { return BUTTON_ADD_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_UPLOAD_SUCCESS", function() { return FILE_UPLOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_YOUR_MEDIA", function() { return HEADER_YOUR_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_EDITOR_HEADER", function() { return LESSON_EDITOR_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_POST_SWITCH", function() { return BLOG_POST_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADABLE_SWITCH", function() { return DOWNLOADABLE_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_DROPDOWN", function() { return TYPE_DROPDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_CONTENT_HEADER", function() { return LESSON_CONTENT_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_URL_LABEL", function() { return CONTENT_URL_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MANAGER_YOUR_MEDIA_HEADER", function() { return MEDIA_MANAGER_YOUR_MEDIA_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_SELECT_BUTTON", function() { return DIALOG_SELECT_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_REQUIRES_ENROLLMENT", function() { return LESSON_REQUIRES_ENROLLMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_LESSON_POPUP_HEADER", function() { return DELETE_LESSON_POPUP_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_LESSON_DELETED", function() { return APP_MESSAGE_LESSON_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_LESSON_SAVED", function() { return APP_MESSAGE_LESSON_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_COURSE_SAVED", function() { return APP_MESSAGE_COURSE_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENROLL_IN_THE_COURSE", function() { return ENROLL_IN_THE_COURSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ERROR_HEADER", function() { return USER_ERROR_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENROLL_BUTTON_TEXT", function() { return ENROLL_BUTTON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_DELETE_MEDIA", function() { return BUTTON_DELETE_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MEDIA_POPUP_HEADER", function() { return DELETE_MEDIA_POPUP_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_EDITING_MEDIA", function() { return HEADER_EDITING_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_EDITING_USER", function() { return HEADER_EDITING_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_MEDIA_PREVIEW", function() { return HEADER_MEDIA_PREVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIEW_PDF_FILE", function() { return PREVIEW_PDF_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_MEDIA_DELETED", function() { return APP_MESSAGE_MEDIA_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_MEDIA_UPDATED", function() { return APP_MESSAGE_MEDIA_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_HEADER_ALL_COURSES", function() { return PAGE_HEADER_ALL_COURSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_HEADER_ALL_POSTS", function() { return PAGE_HEADER_ALL_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSE_TYPE_BLOG", function() { return COURSE_TYPE_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSE_TYPE_COURSE", function() { return COURSE_TYPE_COURSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSE_CREATOR_PREFIX", function() { return COURSE_CREATOR_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSE_EDITOR_DESCRIPTION", function() { return COURSE_EDITOR_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_SETTINGS_SAVED", function() { return APP_MESSAGE_SETTINGS_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENROLLED_COURSES_HEADER", function() { return ENROLLED_COURSES_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_CUSTOMISATIONS_SETTING_HEADER", function() { return SITE_CUSTOMISATIONS_SETTING_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_CUSTOMISATIONS_SETTING_CODEINJECTION_HEAD", function() { return SITE_CUSTOMISATIONS_SETTING_CODEINJECTION_HEAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCARD_COURSE_CHANGES_POPUP_HEADER", function() { return DISCARD_COURSE_CHANGES_POPUP_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURED_SECTION_HEADER", function() { return FEATURED_SECTION_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_HEADER_PAGE_LAYOUT", function() { return CARD_HEADER_PAGE_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_HEADER_THEME", function() { return CARD_HEADER_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_DESCRIPTION_PAGE_LAYOUT", function() { return CARD_DESCRIPTION_PAGE_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMPONENT_POPUP_HEADER", function() { return ADD_COMPONENT_POPUP_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_CHANGES_SAVED", function() { return APP_MESSAGE_CHANGES_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBHEADER_COURSES_SECTION", function() { return SUBHEADER_COURSES_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBHEADER_FEATURED_SECTION", function() { return SUBHEADER_FEATURED_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBHEADER_THEME_ADD_THEME", function() { return SUBHEADER_THEME_ADD_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBHEADER_THEME_ADDED_THEME", function() { return SUBHEADER_THEME_ADDED_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBHEADER_THEME_ADD_THEME_INPUT_LABEL", function() { return SUBHEADER_THEME_ADD_THEME_INPUT_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBHEADER_THEME_ADD_THEME_INPUT_PLACEHOLDER", function() { return SUBHEADER_THEME_ADD_THEME_INPUT_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBHEADER_THEME_INSTALLED_THEMES", function() { return SUBHEADER_THEME_INSTALLED_THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_GET_THEMES", function() { return BUTTON_GET_THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_SNACKBAR_PREFIX", function() { return ERROR_SNACKBAR_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_THEME_APPLY", function() { return BUTTON_THEME_APPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_THEME_UNINSTALL", function() { return BUTTON_THEME_UNINSTALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_THEME_INSTALL", function() { return BUTTON_THEME_INSTALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_THEME_REMIX", function() { return BUTTON_THEME_REMIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_THEME_POPUP_HEADER", function() { return DELETE_THEME_POPUP_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLY_THEME_POPUP_HEADER", function() { return APPLY_THEME_POPUP_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMIXED_THEME_PREFIX", function() { return REMIXED_THEME_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_THEME_COPIED", function() { return APP_MESSAGE_THEME_COPIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_THEMES_INSTALLED", function() { return NO_THEMES_INSTALLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_THEME_INSTALLED", function() { return APP_MESSAGE_THEME_INSTALLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_MESSAGE_THEME_INVALID", function() { return CONSOLE_MESSAGE_THEME_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_THEME_APPLIED", function() { return APP_MESSAGE_THEME_APPLIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MESSAGE_THEME_UNINSTALLED", function() { return APP_MESSAGE_THEME_UNINSTALLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_NAVIGATION", function() { return HEADER_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_NAVIGATION_LINK_TEXT", function() { return LABEL_NAVIGATION_LINK_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_NAVIGATION_LINK_DESTINATION", function() { return LABEL_NAVIGATION_LINK_DESTINATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINK_DROPDOWN", function() { return LINK_DROPDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_LINK_BUTTON", function() { return ADD_NEW_LINK_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_NAVIGATION_LINK_NEWTAB", function() { return LABEL_NAVIGATION_LINK_NEWTAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGETS_PAGE_HEADER", function() { return WIDGETS_PAGE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENTS_SHIPPING_ADDRESS_SECTION_HEADER", function() { return PAYMENTS_SHIPPING_ADDRESS_SECTION_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK", function() { return HEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBHEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK", function() { return SUBHEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_STATUS_PAGE_HEADER", function() { return PURCHASE_STATUS_PAGE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_MENU_ITEM_DASHBOARD", function() { return MAIN_MENU_ITEM_DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_MENU_ITEM_PROFILE", function() { return MAIN_MENU_ITEM_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SECTION_MAIN_CONTENT", function() { return LAYOUT_SECTION_MAIN_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SECTION_FOOTER_LEFT", function() { return LAYOUT_SECTION_FOOTER_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SECTION_FOOTER_RIGHT", function() { return LAYOUT_SECTION_FOOTER_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SECTION_TOP", function() { return LAYOUT_SECTION_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SECTION_FOOTER", function() { return LAYOUT_SECTION_FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SECTION_BOTTOM", function() { return LAYOUT_SECTION_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SECTION_ASIDE", function() { return LAYOUT_SECTION_ASIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_STATUS_SUCCESS", function() { return TRANSACTION_STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_STATUS_SUCCESS_DETAILS", function() { return TRANSACTION_STATUS_SUCCESS_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_STATUS_INITIATED", function() { return TRANSACTION_STATUS_INITIATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_STATUS_FAILED", function() { return TRANSACTION_STATUS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_STATUS_FAILED_DETAILS", function() { return TRANSACTION_STATUS_FAILED_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIT_COURSE_BUTTON", function() { return VISIT_COURSE_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIT_POST_BUTTON", function() { return VISIT_POST_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_PAYMENT_BUTTON", function() { return VERIFY_PAYMENT_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_ID_HEADER", function() { return PURCHASE_ID_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_HEADER_FEATURED", function() { return PAGE_HEADER_FEATURED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTN_VIEW_ALL", function() { return BTN_VIEW_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_COURSES_LIST_ADMIN", function() { return EMPTY_COURSES_LIST_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_RESET_PASSWORD", function() { return HEADER_RESET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_DESIGN", function() { return HEADER_DESIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_YOUR_PROFILE", function() { return HEADER_YOUR_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_PAGE_MESSAGE_NOT_LOGGED_IN", function() { return PROFILE_PAGE_MESSAGE_NOT_LOGGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_PAGE_HEADER", function() { return PROFILE_PAGE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_MY_COURSES", function() { return PROFILE_MY_COURSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_PAGE_NOT_ENROLLED", function() { return PROFILE_PAGE_NOT_ENROLLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_PAGE_BROWSE_COURSES_TEXT", function() { return PROFILE_PAGE_BROWSE_COURSES_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_SECTION_DETAILS_NAME", function() { return PROFILE_SECTION_DETAILS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_SECTION_DETAILS_EMAIL", function() { return PROFILE_SECTION_DETAILS_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_SECTION_DETAILS_BIO", function() { return PROFILE_SECTION_DETAILS_BIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_SECTION_DETAILS_BIO_EMPTY", function() { return PROFILE_SECTION_DETAILS_BIO_EMPTY; });
/**
 * This file provides application wide strings.
 */
var ERR_ALL_FIELDS_REQUIRED = "All fields are required.";
var ERR_PASSWORDS_DONT_MATCH = "Passwords do not match.";
var SIGNUP_SUCCESS = "Sign up successful. Please sign in.";
var ERR_COURSE_TITLE_REQUIRED = "A title is required.";
var ERR_COURSE_COST_REQUIRED = "Cost is required."; // Replies from the backend

var RESP_API_USER_CREATED = "User created"; // Placeholder texts

var CREATOR_AREA_LINK_TEXT = "Create";
var CREATOR_AREA_PAGE_TITLE = "Dashboard";
var GENERIC_TITLE = "My Course Site";
var GENERIC_SUBTITLE = "Learn new skills";
var GENERIC_LOGO_PATH = ""; //export const GENERIC_SIGNIN_TEXT = "Sign in";

var GENERIC_SIGNIN_TEXT = "";
var GENERIC_SIGNUP_TEXT = "Sign up"; //export const GENERIC_SIGNOUT_TEXT = "Sign out";

var GENERIC_SIGNOUT_TEXT = "";
var GENERIC_CURRENCY_UNIT = "";
var GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT = "";
var GENERIC_CURRENCY_ISO_CODE = "";
var GENERIC_PAYMENT_METHOD = "";
var GENERIC_THEME_COLOR_PRIMARY = "";
var GENERIC_THEME_COLOR_SECONDARY = "";
var GENERIC_CODE_INJECTION_HEAD = ""; // UI texts

var BTN_LOAD_MORE = "Load More";
var MEDIA_UPLOAD_BUTTON_TEXT = "Upload";
var MEDIA_UPLOADING = "Uploading...";
var MEDIA_ADD_NEW_BUTTON_TEXT = "Add new";
var BUTTON_CANCEL_TEXT = "Cancel";
var MEDIA_SEARCH_INPUT_PLACEHOLDER = "Search your media";
var LOAD_MORE_TEXT = "Load more";
var MANAGE_MEDIA_BUTTON_TEXT = "Insert media";
var MANAGE_COURSES_PAGE_HEADING = "Courses";
var USERS_MANAGER_PAGE_HEADING = "Users";
var NEW_COURSE_PAGE_HEADING = "Edit course";
var MEDIA_MANAGER_DIALOG_TITLE = "Add media";
var BUTTON_NEW_COURSE = "New";
var BUTTON_DONE_TEXT = "Done";
var DIALOG_TITLE_FEATURED_IMAGE = "Select featured image";
var BUTTON_SET_FEATURED_IMAGE = "Select";
var BUTTON_SELECT_MEDIA = "Pick media";
var FORM_FIELD_FEATURED_IMAGE = "Promotional media";
var BTN_DELETE_COURSE = "Delete course";
var BTN_ADD_VIDEO = "Add";
var ADD_VIDEO_DIALOG_TITLE = "Embed an online video";
var CAPTION_VERIFIED = "Verified";
var CAPTION_UNVERIFIED = "Not verified";
var LABEL_NEW_PASSWORD = "New password";
var BUTTON_SAVE = "Save";
var SWITCH_IS_ADMIN = "Admin";
var SWITCH_IS_CREATOR = "Creator";
var SWITCH_ACCOUNT_ACTIVE = "Account active";
var LABEL_CONF_PASSWORD = "Confirm password";
var HEADER_BLOG_POSTS_SECTION = "Articles";
var HEADER_COURSES_SECTION = "Courses";
var SITE_SETTINGS_TITLE = "Title";
var SITE_SETTINGS_SUBTITLE = "Subtitle";
var SITE_SETTINGS_CURRENCY_UNIT = "Currency Unit";
var SITE_SETTINGS_CURRENCY_ISO_CODE_TEXT = "Currency ISO Code";
var SITE_SETTINGS_LOGO = "Brand Logo";
var SITE_SETTINGS_PAGE_HEADING = "Settings";
var SITE_ADMIN_SETTINGS_STRIPE_SECRET = "Stripe Secret Key";
var SITE_ADMIN_SETTINGS_PAYPAL_SECRET = "Paypal Secret Key";
var SITE_ADMIN_SETTINGS_PAYTM_SECRET = "Paytm Secret Key";
var SITE_SETTINGS_SECTION_GENERAL = "General";
var SITE_SETTINGS_SECTION_PAYMENT = "Payment";
var SITE_ADMIN_SETTINGS_PAYMENT_METHOD = "Payment Method";
var SITE_SETTINGS_STRIPE_PUBLISHABLE_KEY_TEXT = "Stripe Publishable Key";
var FREE_COST = "FREE";
var SIDEBAR_TEXT_COURSE_ABOUT = "About this course";
var REACT_COMPONENT_CRASHED = "We've encountered a problem in showing the content";
var CHECKOUT_DIALOG_TITLE = "Checkout";
var PAYMENT_MODAL_PAYMENT_DETAILS_HEADER = "Payment details";
var PAYMENT_MODAL_COST_PREFIX = "Cost";
var PAYMENT_MODAL_PAY_NOW_BUTTON_CAPTION = "Pay now";
var PAYMENT_INITIATION_FAILED = "Payment processing failed. Please close this popup and try again.";
var PAYMENT_VERIFICATION_FAILED = "We were not able to verify your payment. Please try again.";
var STRIPE_PUBLISHABLE_KEY_EMPTY = "Stripe configuration is invalid. Please contact site admin.";
var CAPTION_TRY_AGAIN = "Try again";
var CAPTION_CLOSE = "Close";
var LOADING = "Loading";
var BUTTON_NEW_LESSON_TEXT = "Lesson";
var BUTTON_DELETE_LESSON_TEXT = "Delete";
var COURSE_DETAILS_CARD_HEADER = "Details";
var DANGER_ZONE_HEADER = "Danger zone";
var DANGER_ZONE_DESCRIPTION = "This action is irreversible.";
var DELETE_COURSE_POPUP_HEADER = "Delete course?";
var POPUP_OK_ACTION = "Yes";
var POPUP_CANCEL_ACTION = "No";
var LOGIN_SECTION_HEADER = "Sign In";
var LOGIN_SECTION_BUTTON = "Sign in";
var LOGIN_INSTEAD_BUTTON = "Already have an account?";
var SIGNUP_SECTION_HEADER = "Create an account";
var SIGNUP_SECTION_BUTTON = "Join";
var MEDIA_MANAGER_PAGE_HEADING = "Media";
var BUTTON_SEARCH = "Search";
var BUTTON_ADD_FILE = "Select a file";
var FILE_UPLOAD_SUCCESS = "File uploaded";
var HEADER_YOUR_MEDIA = "Your media";
var LESSON_EDITOR_HEADER = "Lesson";
var BLOG_POST_SWITCH = "Blog";
var DOWNLOADABLE_SWITCH = "Downloadable";
var TYPE_DROPDOWN = "Type";
var LESSON_CONTENT_HEADER = "Text Content";
var CONTENT_URL_LABEL = "Media content";
var MEDIA_MANAGER_YOUR_MEDIA_HEADER = "Your media";
var DIALOG_SELECT_BUTTON = "Select";
var LESSON_REQUIRES_ENROLLMENT = "Available to only enrolled students";
var DELETE_LESSON_POPUP_HEADER = "Delete lesson";
var APP_MESSAGE_LESSON_DELETED = "Lesson deleted";
var APP_MESSAGE_LESSON_SAVED = "Lesson details saved";
var APP_MESSAGE_COURSE_SAVED = "Course details saved";
var ENROLL_IN_THE_COURSE = "Please enroll in the course to access this lesson.";
var USER_ERROR_HEADER = "Yikes!";
var ENROLL_BUTTON_TEXT = "Enroll";
var BUTTON_DELETE_MEDIA = "Delete";
var DELETE_MEDIA_POPUP_HEADER = "Delete media";
var HEADER_EDITING_MEDIA = "Edit media";
var HEADER_EDITING_USER = "Edit user";
var HEADER_MEDIA_PREVIEW = "Preview";
var PREVIEW_PDF_FILE = "Open in a new tab";
var APP_MESSAGE_MEDIA_DELETED = "Media deleted";
var APP_MESSAGE_MEDIA_UPDATED = "Media details updated";
var PAGE_HEADER_ALL_COURSES = "Courses";
var PAGE_HEADER_ALL_POSTS = "Articles";
var COURSE_TYPE_BLOG = "Post";
var COURSE_TYPE_COURSE = "Course";
var COURSE_CREATOR_PREFIX = "By";
var COURSE_EDITOR_DESCRIPTION = "Description";
var APP_MESSAGE_SETTINGS_SAVED = "Settings saved";
var ENROLLED_COURSES_HEADER = "Enrolled courses";
var SITE_CUSTOMISATIONS_SETTING_HEADER = "Customizations";
var SITE_CUSTOMISATIONS_SETTING_CODEINJECTION_HEAD = "Code Injection in <head>";
var DISCARD_COURSE_CHANGES_POPUP_HEADER = "Discard changes made to the course?";
var FEATURED_SECTION_HEADER = "Featured Resources";
var CARD_HEADER_PAGE_LAYOUT = "Page Layout";
var CARD_HEADER_THEME = "Theme";
var CARD_DESCRIPTION_PAGE_LAYOUT = "Use the '+' buttons to add your favorite components to the desired sections of your page.";
var ADD_COMPONENT_POPUP_HEADER = "Add component";
var APP_MESSAGE_CHANGES_SAVED = "Changes saved";
var SUBHEADER_COURSES_SECTION = "Learn new skills with our carefully crafted courses.";
var SUBHEADER_FEATURED_SECTION = "Hand picked resources by the editors.";
var SUBHEADER_THEME_ADD_THEME = "Install new theme";
var SUBHEADER_THEME_ADDED_THEME = "Installed themes";
var SUBHEADER_THEME_ADD_THEME_INPUT_LABEL = "Theme Editor";
var SUBHEADER_THEME_ADD_THEME_INPUT_PLACEHOLDER = "Paste valid JSON here";
var SUBHEADER_THEME_INSTALLED_THEMES = "Installed themes";
var BUTTON_GET_THEMES = "Get more themes";
var ERROR_SNACKBAR_PREFIX = "Error";
var BUTTON_THEME_APPLY = "Apply";
var BUTTON_THEME_UNINSTALL = "Uninstall";
var BUTTON_THEME_INSTALL = "Install";
var BUTTON_THEME_REMIX = "Remix";
var DELETE_THEME_POPUP_HEADER = "Uninstall theme";
var APPLY_THEME_POPUP_HEADER = "Apply theme";
var REMIXED_THEME_PREFIX = "Remix";
var APP_MESSAGE_THEME_COPIED = "Theme ready to edit";
var NO_THEMES_INSTALLED = "No themes are installed";
var APP_MESSAGE_THEME_INSTALLED = "Theme installed";
var CONSOLE_MESSAGE_THEME_INVALID = "The active MUI theme is invalid. Falling back to the default theme.";
var APP_MESSAGE_THEME_APPLIED = "Theme applied";
var APP_MESSAGE_THEME_UNINSTALLED = "Theme uninstalled";
var HEADER_NAVIGATION = "Menus";
var LABEL_NAVIGATION_LINK_TEXT = "Text";
var LABEL_NAVIGATION_LINK_DESTINATION = "Location";
var LINK_DROPDOWN = "Category";
var ADD_NEW_LINK_BUTTON = "Add new link";
var LABEL_NAVIGATION_LINK_NEWTAB = "New tab";
var WIDGETS_PAGE_HEADER = "Widgets";
var PAYMENTS_SHIPPING_ADDRESS_SECTION_HEADER = "Shipping Address";
var HEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK = "Payment Confirmation Webhook URL";
var SUBHEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK = "Your payment processor sends out notifications about purchases. CourseLit needs those notifications to correctly reflect user purchases. Right click the following link and copy the link address. Paste that into your payment processor's webhook settings.";
var PURCHASE_STATUS_PAGE_HEADER = "Purchase Status";
var MAIN_MENU_ITEM_DASHBOARD = "Dashboard";
var MAIN_MENU_ITEM_PROFILE = "Profile";
var LAYOUT_SECTION_MAIN_CONTENT = "Main Content";
var LAYOUT_SECTION_FOOTER_LEFT = "Left Section";
var LAYOUT_SECTION_FOOTER_RIGHT = "Right Section";
var LAYOUT_SECTION_TOP = "Top";
var LAYOUT_SECTION_FOOTER = "Footer";
var LAYOUT_SECTION_BOTTOM = "Bottom";
var LAYOUT_SECTION_ASIDE = "Aside";
var TRANSACTION_STATUS_SUCCESS = "Payment Confirmed.";
var TRANSACTION_STATUS_SUCCESS_DETAILS = "Thank you. You can now head over to your course and start learning.";
var TRANSACTION_STATUS_INITIATED = "Payment Not Yet Confirmed.";
var TRANSACTION_STATUS_FAILED = "Payment Failed.";
var TRANSACTION_STATUS_FAILED_DETAILS = "The payment service provider was unable to process your payment. Please go back and try again.";
var VISIT_COURSE_BUTTON = "Visit course";
var VISIT_POST_BUTTON = "Visit post";
var VERIFY_PAYMENT_BUTTON = "Re-check Payment Status";
var PURCHASE_ID_HEADER = "Purchase ID";
var PAGE_HEADER_FEATURED = "Featured Content";
var BTN_VIEW_ALL = "View all";
var EMPTY_COURSES_LIST_ADMIN = "Create your first course by clicking the + button on the top right.";
var HEADER_RESET_PASSWORD = "Reset password";
var HEADER_DESIGN = "Appearance";
var HEADER_YOUR_PROFILE = "Your Profile";
var PROFILE_PAGE_MESSAGE_NOT_LOGGED_IN = "to see your profile.";
var PROFILE_PAGE_HEADER = "Profile";
var PROFILE_MY_COURSES = "My Courses";
var PROFILE_PAGE_NOT_ENROLLED = "You are not enrolled in any course.";
var PROFILE_PAGE_BROWSE_COURSES_TEXT = "Browse our courses";
var PROFILE_SECTION_DETAILS_NAME = "Name";
var PROFILE_SECTION_DETAILS_EMAIL = "Email";
var PROFILE_SECTION_DETAILS_BIO = "Bio";
var PROFILE_SECTION_DETAILS_BIO_EMPTY = "The user has not filled the bio.";

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

/***/ "./config/widgets.js":
/*!***************************!*\
  !*** ./config/widgets.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _courselit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../courselit.js */ "./courselit.js");

/* harmony default export */ __webpack_exports__["default"] = (_courselit_js__WEBPACK_IMPORTED_MODULE_0__["widgets"]);

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

/***/ "./context/MyContext.js":
/*!******************************!*\
  !*** ./context/MyContext.js ***!
  \******************************/
/*! exports provided: MyContext, default, MyProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContext", function() { return MyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProvider", function() { return MyProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\context\\MyContext.js",
    _this = undefined;


var MyContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  siteInfo: {},
  profile: {
    isCreator: false,
    name: "",
    id: "",
    fetched: false,
    email: ""
  },
  authProp: {},
  navigation: {},
  layout: {}
});
/* harmony default export */ __webpack_exports__["default"] = (MyContext);
var MyProvider = function MyProvider(children) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MyContext.Provider, {
    value: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 12
  }, _this);
};
_c = MyProvider;

var _c;

$RefreshReg$(_c, "MyProvider");

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

/***/ "./courselit.js":
/*!**********************!*\
  !*** ./courselit.js ***!
  \**********************/
/*! exports provided: widgets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgets", function() { return widgets; });
/* harmony import */ var _courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @courselit/widget-buttondown */ "./node_modules/@courselit/widget-buttondown/dist/index.js");
/* harmony import */ var _courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _courselit_common_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @courselit/common-widgets */ "./node_modules/@courselit/common-widgets/dist/index.js");
/* harmony import */ var _courselit_common_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_courselit_common_widgets__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var getAllWidgets = function getAllWidgets() {
  var widgets = {}; // Add common widgets to CourseLit

  var _iterator = _createForOfIteratorHelper(_courselit_common_widgets__WEBPACK_IMPORTED_MODULE_1___default.a),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var widget = _step.value;
      widgets[widget.metadata.name] = widget;
    } // Additional widgets are added here

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  widgets[_courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0___default.a.metadata.name] = _courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0___default.a;
  return widgets;
};

var widgets = getAllWidgets();

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

/***/ }),

/***/ "./lib/fetch.js":
/*!**********************!*\
  !*** ./lib/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);



/**
 * A utility class to make network calls and intercept the response. It is
 * useful for cases like redirection to the login page if the server returned
 * a 401 etc.
 */



var Fetch = function Fetch(url, payload, token, isGraphQLEndpoint) {
  this.url = url;
  this.payload = payload;
  this.token = token;
  this.isGraphQLEndpoint = isGraphQLEndpoint;
};

_c = Fetch;
Fetch.prototype.exec = /*#__PURE__*/Object(C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var fetchOptions, response;
  return C_Users_MGS_Sistemas_temp_courselit_packages_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetchOptions = {
            method: "POST",
            headers: {}
          };

          if (this.token) {
            fetchOptions.headers.Authorization = "Bearer ".concat(this.token);
          }

          if (this.isGraphQLEndpoint) {
            fetchOptions.headers["Content-Type"] = "application/json";
            fetchOptions.body = JSON.stringify({
              query: this.payload
            });
          } else {
            fetchOptions.body = this.payload;
          }

          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(this.url, fetchOptions);

        case 5:
          response = _context.sent;

          if (!(response.status === 401)) {
            _context.next = 9;
            break;
          }

          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/logout");
          return _context.abrupt("return", {});

        case 9:
          _context.next = 11;
          return response.json();

        case 11:
          response = _context.sent;

          if (!(response.errors && response.errors.length > 0)) {
            _context.next = 14;
            break;
          }

          throw new Error(response.errors[0].message);

        case 14:
          return _context.abrupt("return", this.isGraphQLEndpoint ? response.data : response);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

var FetchBuilder = function FetchBuilder() {
  return {
    setUrl: function setUrl(url) {
      this.url = url;
      return this;
    },
    setPayload: function setPayload(payload) {
      this.payload = payload;
      return this;
    },
    setAuthToken: function setAuthToken(token) {
      this.token = token;
      return this;
    },
    setIsGraphQLEndpoint: function setIsGraphQLEndpoint(isGraphQLEndpoint) {
      this.isGraphQLEndpoint = isGraphQLEndpoint;
      return this;
    },
    build: function build() {
      return new Fetch(this.url, this.payload, this.token, this.isGraphQLEndpoint);
    }
  };
};

_c2 = FetchBuilder;
/* harmony default export */ __webpack_exports__["default"] = (FetchBuilder);

var _c, _c2;

$RefreshReg$(_c, "Fetch");
$RefreshReg$(_c2, "FetchBuilder");

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

/***/ "./node_modules/@courselit/common-widgets/dist/About/AdminWidget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/About/AdminWidget.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var components_library_1 = __webpack_require__(/*! @courselit/components-library */ "./node_modules/@courselit/components-library/dist/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var AdminWidget = function (props) {
    var fetchBuilder = props.fetchBuilder, dispatch = props.dispatch, name = props.name, auth = props.auth;
    var _a = React.useState({
        text: components_library_1.RichText.emptyState(),
    }), settings = _a[0], setSettings = _a[1];
    var _b = React.useState(settings), newSettings = _b[0], setNewSettings = _b[1];
    React.useEffect(function () {
        getSettings();
    }, []);
    var getSettings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var settings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, components_library_1.WidgetHelpers.getWidgetSettings({
                        widgetName: name,
                        fetchBuilder: fetchBuilder,
                        dispatch: dispatch,
                    })];
                case 1:
                    settings = _a.sent();
                    if (settings) {
                        onNewSettingsReceived(settings);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var onNewSettingsReceived = function (settings) {
        var newSettings = Object.assign({}, settings, {
            text: settings.text
                ? components_library_1.RichText.hydrate({ data: settings.text })
                : components_library_1.RichText.emptyState(),
        });
        setSettings(newSettings);
        setNewSettings(newSettings);
    };
    var saveSettings = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    return [4 /*yield*/, components_library_1.WidgetHelpers.saveWidgetSettings({
                            widgetName: name,
                            newSettings: Object.assign({}, newSettings, {
                                text: components_library_1.RichText.stringify(newSettings.text),
                            }),
                            fetchBuilder: fetchBuilder,
                            auth: auth,
                            dispatch: dispatch,
                        })];
                case 1:
                    result = _a.sent();
                    onNewSettingsReceived(result);
                    return [2 /*return*/];
            }
        });
    }); };
    var isDirty = function () {
        return settings !== newSettings;
    };
    var onChangeData = function (editorState) {
        setNewSettings(Object.assign({}, newSettings, {
            text: editorState,
        }));
    };
    return (React.createElement(core_1.Grid, { container: true, direction: "column", spacing: 2 },
        React.createElement(core_1.Grid, { item: true, xs: true },
            React.createElement(core_1.Typography, { variant: "h6", color: "textSecondary" }, "Compose")),
        React.createElement(core_1.Grid, { item: true },
            React.createElement("form", { onSubmit: saveSettings },
                React.createElement(components_library_1.RichText, { initialContentState: settings.text, onChange: onChangeData }),
                React.createElement(core_1.Button, { variant: "contained", color: "primary", type: "submit", value: "Save", disabled: !isDirty() }, "Save")))));
};
var mapStateToProps = function (state) { return ({
    auth: state.auth,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    dispatch: dispatch,
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AdminWidget);


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/About/Widget.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/About/Widget.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var components_library_1 = __webpack_require__(/*! @courselit/components-library */ "./node_modules/@courselit/components-library/dist/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var styles_1 = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    container: {
        padding: theme.spacing(2),
    },
}); });
var Widget = function (props) {
    var fetchBuilder = props.fetchBuilder, dispatch = props.dispatch, name = props.name;
    var _a = React.useState({
        text: components_library_1.RichText.emptyState(),
    }), settings = _a[0], setSettings = _a[1];
    var classes = useStyles();
    React.useEffect(function () {
        getSettings();
    }, []);
    var getSettings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var settings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, components_library_1.WidgetHelpers.getWidgetSettings({
                        widgetName: name,
                        fetchBuilder: fetchBuilder,
                        dispatch: dispatch,
                    })];
                case 1:
                    settings = _a.sent();
                    if (settings) {
                        hydrateAndSetSettings(settings);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var hydrateAndSetSettings = function (settings) {
        var hydratedText = settings.text
            ? components_library_1.RichText.hydrate({ data: settings.text })
            : components_library_1.RichText.emptyState();
        setSettings(Object.assign({}, settings, {
            text: hydratedText,
        }));
    };
    return (React.createElement(core_1.Grid, { item: true, xs: true, className: classes.container },
        React.createElement(components_library_1.RichText, { initialContentState: settings.text, readOnly: true })));
};
var mapDispatchToProps = function (dispatch) { return ({
    dispatch: dispatch,
}); };
exports.default = react_redux_1.connect(function () { return ({}); }, mapDispatchToProps)(Widget);


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/About/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/About/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AdminWidget_1 = __importDefault(__webpack_require__(/*! ./AdminWidget */ "./node_modules/@courselit/common-widgets/dist/About/AdminWidget.js"));
var metadata_1 = __importDefault(__webpack_require__(/*! ./metadata */ "./node_modules/@courselit/common-widgets/dist/About/metadata.js"));
var Widget_1 = __importDefault(__webpack_require__(/*! ./Widget */ "./node_modules/@courselit/common-widgets/dist/About/Widget.js"));
exports.default = {
    metadata: metadata_1.default,
    widget: Widget_1.default,
    adminWidget: AdminWidget_1.default,
};


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/About/metadata.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/About/metadata.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "about",
    displayName: "About",
    compatibleWith: ["top", "aside", "bottom", "footerLeft", "footerRight"],
    excludeFromPaths: ["/login"],
};


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/AdminWidget.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FeaturedContent/AdminWidget.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var components_library_1 = __webpack_require__(/*! @courselit/components-library */ "./node_modules/@courselit/components-library/dist/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var AdminWidget = function (props) {
    var name = props.name, fetchBuilder = props.fetchBuilder, auth = props.auth, dispatch = props.dispatch;
    var _a = React.useState({
        title: "",
        subtitle: "",
    }), settings = _a[0], setSettings = _a[1];
    var _b = React.useState(settings), newSettings = _b[0], setNewSettings = _b[1];
    React.useEffect(function () {
        getSettings();
    }, [name]);
    var getSettings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var settings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, components_library_1.WidgetHelpers.getWidgetSettings({
                        widgetName: name,
                        fetchBuilder: fetchBuilder,
                        dispatch: dispatch,
                    })];
                case 1:
                    settings = _a.sent();
                    if (settings) {
                        onNewSettingsReceived(settings);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var onNewSettingsReceived = function (settings) {
        setSettings(settings);
        setNewSettings(settings);
    };
    var saveSettings = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    return [4 /*yield*/, components_library_1.WidgetHelpers.saveWidgetSettings({
                            widgetName: name,
                            newSettings: newSettings,
                            fetchBuilder: fetchBuilder,
                            auth: auth,
                            dispatch: dispatch,
                        })];
                case 1:
                    result = _a.sent();
                    onNewSettingsReceived(result);
                    return [2 /*return*/];
            }
        });
    }); };
    var onChangeData = function (e) {
        var _a;
        setNewSettings(Object.assign({}, newSettings, (_a = {},
            _a[e.target.name] = e.target.value,
            _a)));
    };
    var isDirty = function () {
        return settings !== newSettings;
    };
    return (React.createElement(core_1.Grid, { container: true, direction: "column", spacing: 2 },
        React.createElement(core_1.Grid, { item: true, xs: true },
            React.createElement(core_1.Typography, { variant: "body1" }, "Display featured items on the top section of the landing page.")),
        React.createElement(core_1.Grid, { item: true, xs: true },
            React.createElement(core_1.Typography, { variant: "h6" }, "Settings")),
        React.createElement(core_1.Grid, { item: true },
            React.createElement("form", { onSubmit: saveSettings },
                React.createElement(core_1.TextField, { variant: "outlined", label: "Section Title", fullWidth: true, margin: "normal", name: "title", value: newSettings.title || "", onChange: onChangeData }),
                React.createElement(core_1.TextField, { variant: "outlined", label: "Section Title", fullWidth: true, margin: "normal", name: "subtitle", value: newSettings.subtitle || "", onChange: onChangeData }),
                React.createElement(core_1.TextField, { variant: "outlined", label: "Background color", placeholder: "Enter the color's HEX code", fullWidth: true, margin: "normal", name: "backgroundColor", value: newSettings.backgroundColor || "", onChange: onChangeData }),
                React.createElement(core_1.Button, { variant: "contained", color: "primary", type: "submit", value: "Save", disabled: !isDirty() }, "Save")))));
};
var mapStateToProps = function (state) { return ({
    auth: state.auth,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    dispatch: dispatch,
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AdminWidget);


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/Item.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FeaturedContent/Item.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var link_1 = __importDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var styles_1 = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var components_library_1 = __webpack_require__(/*! @courselit/components-library */ "./node_modules/@courselit/components-library/dist/index.js");
var useStyles = function () {
    return styles_1.makeStyles(function (theme) { return ({
        link: {
            textDecoration: "none",
            color: "inherit",
            marginBottom: theme.spacing(4),
            display: "block",
        },
        featuredImage: {
            height: "auto",
            width: "100%",
        },
        title: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(0.5),
        },
        card: {
            padding: theme.spacing(2),
            border: "1px solid transparent",
            borderRadius: 1,
            "&:hover": {
                border: "1px solid #cccccc",
                cursor: "pointer",
            },
        },
    }); });
};
var Item = function (props) {
    var appUtilities = props.appUtilities, appConfig = props.appConfig;
    var classes = useStyles()();
    return (React.createElement(core_1.Grid, { item: true, xs: 12, md: 4 },
        React.createElement(link_1.default, { href: "/" + appConfig.URL_EXTENTION_COURSES + "/[id]/[slug]", as: "/" + appConfig.URL_EXTENTION_COURSES + "/" + props.course.courseId + "/" + props.course.slug },
            React.createElement("a", { className: classes.link },
                React.createElement(components_library_1.Card, null,
                    React.createElement(core_1.Grid, { item: true, container: true, direction: "column", component: "article" },
                        props.course.featuredImage && (React.createElement(core_1.Grid, { item: true },
                            React.createElement("img", { src: appUtilities.formulateMediaUrl(appConfig.BACKEND, props.course.featuredImage), className: classes.featuredImage }))),
                        React.createElement(core_1.Grid, { item: true, container: true, className: classes.title, justify: "space-between", alignItems: "center" },
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(core_1.Typography, { variant: "h5" }, props.course.title)),
                            React.createElement(core_1.Grid, { item: true },
                                React.createElement(components_library_1.PriceTag, { cost: props.course.cost, freeCostCaption: "FREE" })))))))));
};
exports.default = Item;


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/Widget.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FeaturedContent/Widget.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var Item_1 = __importDefault(__webpack_require__(/*! ./Item */ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/Item.js"));
var styles_1 = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var components_library_1 = __webpack_require__(/*! @courselit/components-library */ "./node_modules/@courselit/components-library/dist/index.js");
var link_1 = __importDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));
var useStyles = function (_a) {
    var backgroundColor = _a.backgroundColor;
    return styles_1.makeStyles(function (theme) {
        var _a, _b, _c;
        return ({
            content: (_a = {},
                _a[theme.breakpoints.down("sm")] = {
                    padding: theme.spacing(2),
                },
                _a.paddingTop = theme.spacing(2),
                _a.marginBottom = theme.spacing(2),
                _a.background = backgroundColor || "inherit",
                _a),
            header: (_b = {},
                _b[theme.breakpoints.up("md")] = {
                    marginLeft: theme.spacing(2),
                },
                _b.marginBottom = theme.spacing(2),
                _b),
            headerTop: {
                marginBottom: theme.spacing(1),
            },
            link: {
                textDecoration: "none",
                color: "inherit",
            },
            callToAction: (_c = {},
                _c[theme.breakpoints.up("md")] = {
                    marginLeft: theme.spacing(2),
                },
                _c.marginBottom = theme.spacing(2),
                _c),
        });
    });
};
var Widget = function (props) {
    var fetchBuilder = props.fetchBuilder, utilities = props.utilities, config = props.config, dispatch = props.dispatch, name = props.name;
    var _a = React.useState([]), posts = _a[0], setPosts = _a[1];
    var postsOffset = React.useState(1)[0];
    var BTN_LOAD_MORE = "View all";
    var _b = React.useState({
        title: "",
        subtitle: "",
    }), settings = _b[0], setSettings = _b[1];
    var classes = useStyles(settings)();
    React.useEffect(function () {
        getSettings();
        getPosts();
    }, [postsOffset]);
    var getPosts = function () { return __awaiter(void 0, void 0, void 0, function () {
        var query, fetch, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "\n    query {\n      courses: getCourses(offset: 1, onlyShowFeatured: true) {\n        id,\n        title,\n        cost,\n        featuredImage,\n        slug,\n        courseId\n      }\n    }\n    ";
                    fetch = fetchBuilder.setPayload(query).build();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    dispatch({ type: "NETWORK_ACTION", flag: true });
                    return [4 /*yield*/, fetch.exec()];
                case 2:
                    response = _a.sent();
                    if (response.courses) {
                        setPosts(__spreadArrays(posts, response.courses));
                    }
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    dispatch({ type: "NETWORK_ACTION", flag: false });
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getSettings = function () { return __awaiter(void 0, void 0, void 0, function () {
        var settings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, components_library_1.WidgetHelpers.getWidgetSettings({
                        widgetName: name,
                        fetchBuilder: fetchBuilder,
                        dispatch: dispatch,
                    })];
                case 1:
                    settings = _a.sent();
                    setSettings(settings);
                    return [2 /*return*/];
            }
        });
    }); };
    return posts.length > 0 ? (React.createElement(core_1.Grid, { item: true, xs: 12, className: classes.content },
        React.createElement(core_1.Grid, { container: true, component: "section" },
            React.createElement(core_1.Grid, { item: true, container: true, className: classes.header },
                React.createElement(core_1.Grid, { item: true, xs: 12, className: classes.headerTop },
                    React.createElement(core_1.Typography, { variant: "h2" }, settings.title)),
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(core_1.Typography, { variant: "body1", color: "textSecondary" }, settings.subtitle))),
            React.createElement(core_1.Grid, { item: true, container: true, xs: 12 }, posts.map(function (post, index) { return (React.createElement(Item_1.default, { key: index, appUtilities: utilities, appConfig: config, course: post })); })),
            posts.length > 0 && (React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Button, { variant: "contained", disableElevation: true, className: classes.callToAction },
                    React.createElement(link_1.default, { href: "/featured" },
                        React.createElement("a", { className: classes.link }, BTN_LOAD_MORE)))))))) : (React.createElement(React.Fragment, null));
};
var mapDispatchToProps = function (dispatch) { return ({
    dispatch: dispatch,
}); };
exports.default = react_redux_1.connect(function () { return ({}); }, mapDispatchToProps)(Widget);


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FeaturedContent/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AdminWidget_1 = __importDefault(__webpack_require__(/*! ./AdminWidget */ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/AdminWidget.js"));
var metadata_1 = __importDefault(__webpack_require__(/*! ./metadata */ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/metadata.js"));
var Widget_1 = __importDefault(__webpack_require__(/*! ./Widget */ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/Widget.js"));
exports.default = {
    widget: Widget_1.default,
    adminWidget: AdminWidget_1.default,
    metadata: metadata_1.default,
};


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/metadata.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FeaturedContent/metadata.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "featured-content",
    displayName: "Featured Content",
    compatibleWith: ["top"],
    icon: "",
    excludeFromPaths: ["/post/[id]/[slug]", "/login", "/course/[id]/[slug]"],
};


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FooterBranding/Widget.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FooterBranding/Widget.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var styles_1 = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var useStyles = function (sectionName) {
    return styles_1.makeStyles(function (theme) {
        var _a;
        return ({
            container: (_a = {
                    padding: theme.spacing(2),
                    textAlign: sectionName === "footerRight" ? "end" : "start"
                },
                _a[theme.breakpoints.down("sm")] = {
                    textAlign: "start",
                },
                _a),
        });
    });
};
var Widget = function (props) {
    var siteInfo = props.siteInfo, section = props.section;
    var classes = useStyles(section)();
    return (React.createElement(core_1.Grid, { item: true, xs: true, className: classes.container },
        React.createElement(core_1.Typography, { variant: "h5" }, siteInfo.title),
        React.createElement(core_1.Typography, { variant: "subtitle1" }, siteInfo.subtitle)));
};
var mapStateToProps = function (state) { return ({
    siteInfo: state.siteinfo,
}); };
exports.default = react_redux_1.connect(mapStateToProps)(Widget);


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FooterBranding/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FooterBranding/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __importDefault(__webpack_require__(/*! ./metadata */ "./node_modules/@courselit/common-widgets/dist/FooterBranding/metadata.js"));
var Widget_1 = __importDefault(__webpack_require__(/*! ./Widget */ "./node_modules/@courselit/common-widgets/dist/FooterBranding/Widget.js"));
exports.default = {
    widget: Widget_1.default,
    metadata: metadata_1.default,
};


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FooterBranding/metadata.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FooterBranding/metadata.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "footer-branding",
    displayName: "Branding",
    compatibleWith: ["footerLeft", "footerRight"],
};


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FooterMenu/Widget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FooterMenu/Widget.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var styles_1 = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var link_1 = __importDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));
var useStyles = function (sectionName) {
    return styles_1.makeStyles(function (theme) {
        var _a;
        return ({
            container: {
                padding: theme.spacing(2),
            },
            list: {
                listStyle: "none",
                margin: 0,
                paddingInlineStart: 0,
            },
            linkContainer: (_a = {
                    textAlign: sectionName === "footerRight" ? "end" : "start"
                },
                _a[theme.breakpoints.down("sm")] = {
                    marginBottom: theme.spacing(1),
                    textAlign: "start",
                },
                _a),
            link: {
                color: theme.palette.text.primary,
            },
        });
    });
};
var Widget = function (props) {
    var section = props.section;
    var classes = useStyles(section)();
    return (React.createElement(core_1.Grid, { item: true, xs: true, className: classes.container },
        React.createElement("nav", null,
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", component: "ul", className: classes.list }, props.navigation.map(function (link) { return (React.createElement(core_1.Grid, { item: true, component: "li", xs: 12, sm: 2, key: link.text, className: classes.linkContainer },
                React.createElement(link_1.default, { href: link.destination, key: link.text },
                    React.createElement("a", { className: classes.link },
                        React.createElement(core_1.Typography, { variant: "body2" }, link.text))))); })))));
};
var mapStateToProps = function (state) { return ({
    navigation: state.navigation.filter(function (link) { return link.category === "footer"; }),
}); };
exports.default = react_redux_1.connect(mapStateToProps)(Widget);


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FooterMenu/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FooterMenu/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __importDefault(__webpack_require__(/*! ./metadata */ "./node_modules/@courselit/common-widgets/dist/FooterMenu/metadata.js"));
var Widget_1 = __importDefault(__webpack_require__(/*! ./Widget */ "./node_modules/@courselit/common-widgets/dist/FooterMenu/Widget.js"));
exports.default = {
    widget: Widget_1.default,
    metadata: metadata_1.default,
};


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/FooterMenu/metadata.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/FooterMenu/metadata.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "footer-menu",
    displayName: "Footer Menu",
    compatibleWith: ["footerLeft", "footerRight"],
};


/***/ }),

/***/ "./node_modules/@courselit/common-widgets/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@courselit/common-widgets/dist/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var About_1 = __importDefault(__webpack_require__(/*! ./About */ "./node_modules/@courselit/common-widgets/dist/About/index.js"));
var FeaturedContent_1 = __importDefault(__webpack_require__(/*! ./FeaturedContent */ "./node_modules/@courselit/common-widgets/dist/FeaturedContent/index.js"));
var FooterBranding_1 = __importDefault(__webpack_require__(/*! ./FooterBranding */ "./node_modules/@courselit/common-widgets/dist/FooterBranding/index.js"));
var FooterMenu_1 = __importDefault(__webpack_require__(/*! ./FooterMenu */ "./node_modules/@courselit/common-widgets/dist/FooterMenu/index.js"));
exports.default = [FeaturedContent_1.default, FooterMenu_1.default, FooterBranding_1.default, About_1.default];


/***/ }),

/***/ "./node_modules/@courselit/widget-buttondown/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@courselit/widget-buttondown/dist/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js"),__webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js"),__webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js")):undefined}(this,(function(e,t,n,r,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(1),o=n.n(i),s=n(3),c=n(2);const u=e=>{const{fetchBuilder:t,name:n,auth:i}=e,[o,s]=Object(r.useState)({}),[u,l]=Object(r.useState)({});Object(r.useEffect)(()=>{d()},[n]);const d=async()=>{const e=`\n    query {\n        settings: getWidgetSettings(name: "${n}") {\n            settings\n        }\n    }\n    `,r=t.setPayload(e).build();try{const e=await r.exec();e.settings.settings&&p(e.settings.settings)}catch(e){}},p=e=>{const t=JSON.parse(e);s(t),l(t)};return a.a.createElement(c.Grid,{container:!0,direction:"column",spacing:2},a.a.createElement(c.Grid,{item:!0,xs:!0},a.a.createElement(c.Typography,{variant:"h6",color:"textSecondary"},"Settings")),a.a.createElement(c.Grid,{item:!0},a.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const r=`\n    mutation {\n      settings: saveWidgetSettings(widgetSettingsData: {\n        name: "${n}",\n        settings: "${JSON.stringify(u).replace(/"/g,'\\"')}"\n      }) {\n        settings\n      }\n    }\n    `,a=t.setPayload(r).setAuthToken(i.token).build();try{const e=await a.exec();e.settings&&p(e.settings.settings)}catch(e){}}},a.a.createElement(c.TextField,{variant:"outlined",label:"Newsletter Link",fullWidth:!0,margin:"normal",name:"url",value:u.url||"",onChange:e=>{l(Object.assign({},u,{[e.target.name]:e.target.value}))},required:!0}),a.a.createElement(c.Button,{variant:"contained",color:"primary",type:"submit",value:"Save",disabled:u.url===o.url},"Save"))))};u.propTypes={name:o.a.string.isRequired,fetchBuilder:o.a.object.isRequired,theme:o.a.object.isRequired,auth:o.a.shape({guest:o.a.bool,token:o.a.string})};var l=Object(s.connect)(e=>({auth:e.auth}))(u),d=n(4);const p=Object(d.makeStyles)(e=>({container:{padding:e.spacing(2),paddingTop:e.spacing(4)},iframe:{width:"100%",height:220,border:"1px #ccc solid"}})),m=e=>{const{fetchBuilder:t,name:n}=e,[i,o]=Object(r.useState)({}),s=p();Object(r.useEffect)(()=>{c()},[n]);const c=async()=>{const e=`\n    query {\n        settings: getWidgetSettings(name: "${n}") {\n            settings\n        }\n    }\n    `,r=t.setPayload(e).build();try{const e=await r.exec();o(JSON.parse(e.settings.settings))}catch(e){}};return a.a.createElement("div",{className:s.container},i.url&&a.a.createElement(a.a.Fragment,null,a.a.createElement("iframe",{scrolling:"no",className:s.iframe,src:i.url+"?as_embed=true"}),a.a.createElement("br",null),a.a.createElement("br",null)))};m.propTypes={name:o.a.string.isRequired,fetchBuilder:o.a.object.isRequired};var g=Object(s.connect)(e=>({auth:e.auth}))(m);t.default={metadata:{name:"buttondown",displayName:"Buttondown",compatibleWith:["bottom","aside"],icon:"https://buttondown.email/static/images/icons/icon@72.png",excludeFromPaths:["/login"]},widget:g,adminWidget:l}}])}));

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + (true ? "\nOpen your browser's console to view the Component stack trace." : undefined));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();
  var pathname = router && router.pathname || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childRef = child && typeof child === 'object' && child.ref;

  var _ref3 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  }),
      _ref4 = _slicedToArray(_ref3, 2),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(function () {
    var shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Link");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports["default"] = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject);
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return setTimeout(function () {
        if (!cancelled) {
          reject(err);
        }
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route) {
      var _this = this;

      return withFuture(route, routes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _yield$getFilesForRou, scripts, css, _yield$Promise$all, _yield$Promise$all2, styles, entrypoint, res;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return getFilesForRoute(assetPrefix, route);

              case 3:
                _yield$getFilesForRou = _context.sent;
                scripts = _yield$getFilesForRou.scripts;
                css = _yield$getFilesForRou.css;
                _context.next = 8;
                return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);

              case 8:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                styles = _yield$Promise$all2[1];
                _context.next = 13;
                return resolvePromiseWithTimeout(_this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route))));

              case 13:
                entrypoint = _context.sent;
                res = Object.assign({
                  styles: styles
                }, entrypoint);
                return _context.abrupt("return", 'error' in entrypoint ? entrypoint : res);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      })));
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback.requestIdleCallback)(function () {
          return _this2.loadRoute(route);
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports["default"] = _default;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports["default"] = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base = new URL(currentPath, 'http://n');
  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router.pathname, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils.getLocationOrigin)();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

var manualScrollRestoration =  false && false;
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales,
        isPreview = _ref.isPreview;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), {
          locale: locale
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var _options$scroll, localeChange, parsedAs, localePathResult, didNavigate, _this$locales, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, parsed, pathname, query, pages, rewrites, _yield, resolvedAs, rewritesResult, route, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp, isValidShallowRoute;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated
                if (options._h) {
                  this.isReady = true;
                } // Default to scroll reset behavior unless explicitly specified to be
                // `false`! This makes the behavior between using `Router#push` and a
                // `<Link />` consistent.


                options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
                localeChange = options.locale !== this.locale;

                if (true) {
                  _context.next = 18;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _utils.formatWithValidation)(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 18:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 34;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 34:
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 36;
                _context.next = 39;
                return this.pageLoader.getPageList();

              case 39:
                pages = _context.sent;
                _context.next = 42;
                return (0, _routeLoader.getClientBuildManifest)();

              case 42:
                _yield = _context.sent;
                rewrites = _yield.__rewrites;
                _context.next = 50;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context["catch"](36);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 50:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

                if (pathname !== '/_error') {
                  if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);

                    if (parsed.pathname !== pathname) {
                      pathname = parsed.pathname;
                      url = (0, _utils.formatWithValidation)(parsed);
                    }
                  }
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

                if (isLocalURL(as)) {
                  _context.next = 60;
                  break;
                }

                if (false) {}

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 58:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 60:
                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 76;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 75;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 73;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 73:
                _context.next = 76;
                break;

              case 75:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 76:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 77;
                _context.next = 80;
                return this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);

              case 80:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 107;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 93;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 91;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

                if (!pages.includes(parsedHref.pathname)) {
                  _context.next = 91;
                  break;
                }

                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 91:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 93:
                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 107;
                  break;
                }

                _context.prev = 95;
                _context.next = 98;
                return this.fetchComponent('/404');

              case 98:
                notFoundRoute = '/404';
                _context.next = 104;
                break;

              case 101:
                _context.prev = 101;
                _context.t1 = _context["catch"](95);
                notFoundRoute = '/_error';

              case 104:
                _context.next = 106;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                  shallow: false
                });

              case 106:
                routeInfo = _context.sent;

              case 107:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                } // shallow routing is only allowed for same page URL changes.


                isValidShallowRoute = options.shallow && this.route === route;

                if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                }

                _context.next = 114;
                return this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
                  x: 0,
                  y: 0
                }))["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 114:
                if (!error) {
                  _context.next = 117;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 117:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 122:
                _context.prev = 122;
                _context.t2 = _context["catch"](77);

                if (!_context.t2.cancelled) {
                  _context.next = 126;
                  break;
                }

                return _context.abrupt("return", false);

              case 126:
                throw _context.t2;

              case 127:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[36, 46], [77, 122], [95, 101]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader.isAssetError)(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 14;
                  break;
                }

                ;
                _context2.next = 11;
                return this.fetchComponent('/_error');

              case 11:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 14:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 26;
                  break;
                }

                _context2.prev = 16;
                _context2.next = 19;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 19:
                routeInfo.props = _context2.sent;
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 26:
                return _context2.abrupt("return", routeInfo);

              case 29:
                _context2.prev = 29;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 29], [16, 22]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps) {
        var _this2 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, _require, isValidElementType, dataHref, props;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), resolvedAs, __N_SSG, this.locale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this2._getStaticData(dataHref) : __N_SSP ? _this2._getServerData(dataHref) : _this2.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data, resetScroll) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this3 = this;

        var asPath,
            options,
            parsed,
            pathname,
            parsedAs,
            localePathResult,
            pages,
            resolvedAs,
            rewrites,
            _yield2,
            rewritesResult,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                resolvedAs = asPath;

                if (true) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 12;
                return (0, _routeLoader.getClientBuildManifest)();

              case 12:
                _yield2 = _context4.sent;
                rewrites = _yield2.__rewrites;
                rewritesResult = (0, _resolveRewrites["default"])(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);
                resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

                _context4.next = 21;
                break;

              case 19:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

              case 21:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

                if (false) {}

                return _context4.abrupt("return");

              case 24:
                _context4.next = 26;
                return Promise.all([this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? _this3._getStaticData(_this3.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this3.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x18) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x19) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this4 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this4.clc) {
          _this4.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this5 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this5.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      var _this6 = this;

      var _URL2 = new URL(dataHref, window.location.href),
          resourceKey = _URL2.href;

      if (this.sdr[resourceKey]) {
        return this.sdr[resourceKey];
      }

      return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(function (data) {
        delete _this6.sdr[resourceKey];
        return data;
      })["catch"](function (err) {
        delete _this6.sdr[resourceKey];
        throw err;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data, resetScroll) {
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL(false ? undefined : (0, _utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = resolveRewrites;

function resolveRewrites() {}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBUb2FzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvU2NhZmZvbGQvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvU2NhZmZvbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9XaWRnZXRCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHVibGljL1Nlc3Npb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy9kZWZhdWx0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy9zdHJpbmdzLmpzIiwid2VicGFjazovL19OX0UvLi9jb25maWcvd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9NeUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvdXJzZWxpdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZldGNoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNvdXJzZWxpdC9jb21tb24td2lkZ2V0cy9kaXN0L0Fib3V0L0FkbWluV2lkZ2V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNvdXJzZWxpdC9jb21tb24td2lkZ2V0cy9kaXN0L0Fib3V0L1dpZGdldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHMvZGlzdC9BYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHMvZGlzdC9BYm91dC9tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHMvZGlzdC9GZWF0dXJlZENvbnRlbnQvQWRtaW5XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY291cnNlbGl0L2NvbW1vbi13aWRnZXRzL2Rpc3QvRmVhdHVyZWRDb250ZW50L0l0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY291cnNlbGl0L2NvbW1vbi13aWRnZXRzL2Rpc3QvRmVhdHVyZWRDb250ZW50L1dpZGdldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHMvZGlzdC9GZWF0dXJlZENvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY291cnNlbGl0L2NvbW1vbi13aWRnZXRzL2Rpc3QvRmVhdHVyZWRDb250ZW50L21ldGFkYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNvdXJzZWxpdC9jb21tb24td2lkZ2V0cy9kaXN0L0Zvb3RlckJyYW5kaW5nL1dpZGdldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHMvZGlzdC9Gb290ZXJCcmFuZGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHMvZGlzdC9Gb290ZXJCcmFuZGluZy9tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHMvZGlzdC9Gb290ZXJNZW51L1dpZGdldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHMvZGlzdC9Gb290ZXJNZW51L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNvdXJzZWxpdC9jb21tb24td2lkZ2V0cy9kaXN0L0Zvb3Rlck1lbnUvbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY291cnNlbGl0L2NvbW1vbi13aWRnZXRzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY291cnNlbGl0L3dpZGdldC1idXR0b25kb3duL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi90eXBlcy5qcyJdLCJuYW1lcyI6WyJBcHBUb2FzdCIsInByb3BzIiwibWVzc2FnZSIsImFjdGlvbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJnZXRBY3Rpb25CdXR0b25zQXJyYXkiLCJhY3Rpb25CdXR0b25zQXJyYXkiLCJ1bnNoaWZ0IiwiY2IiLCJ0ZXh0IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwib3BlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJJbWciLCJkeW5hbWljIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibG9nbyIsImRpc3BsYXkiLCJsb2dvY29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJsb2dvaW1nIiwiYm9yZGVyUmFkaXVzIiwiSGVhZGVyIiwiY2xhc3NlcyIsInVzZUNvbnRleHQiLCJNeUNvbnRleHQiLCJzaXRlSW5mbyIsImxvZ29wYXRoIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJzaXRlaW5mbyIsInNpdGVJbmZvUHJvcHMiLCJleHRlcm5hbExpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiTWVudUl0ZW0iLCJsaW5rIiwiZGVzdGluYXRpb24iLCJpbmRleE9mIiwibmV3VGFiIiwiY2xvc2VEcmF3ZXIiLCJkcmF3ZXJXaWR0aCIsInJvb3QiLCJkcmF3ZXIiLCJicmVha3BvaW50cyIsInVwIiwiZmxleFNocmluayIsImFwcEJhciIsInpJbmRleCIsIm1lbnVCdXR0b24iLCJ0b29sYmFyIiwibWl4aW5zIiwiZHJhd2VyUGFwZXIiLCJjb250ZW50IiwiZmxleEdyb3ciLCJhY3RpdmVJdGVtIiwiYmFja2dyb3VuZCIsInZpc2l0U2l0ZUxpbmsiLCJzaG93UHJvZ3Jlc3NCYXIiLCJ2aXNpYmlsaXR5IiwibmV0d29ya0FjdGlvbiIsIm1lbnVUaXRsZSIsIm1hcmdpbkxlZnQiLCJTY2FmZm9sZCIsImNoaWxkcmVuIiwidXNlVGhlbWUiLCJwcm9maWxlIiwibmF2aWdhdGlvbiIsInVzZVN0YXRlIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJtYWtlRHJhd2VyIiwiZm9yTW9iaWxlIiwiZmV0Y2hlZCIsImlkIiwiTUFJTl9NRU5VX0lURU1fUFJPRklMRSIsInVzZXJJZCIsImNhdGVnb3J5IiwiTkFWSUdBVElPTl9DQVRFR09SWV9NQUlOIiwiaXNBZG1pbiIsImlzQ3JlYXRvciIsIk1BSU5fTUVOVV9JVEVNX0RBU0hCT0FSRCIsIm1hcCIsImRpcmVjdGlvbiIsInBhcGVyIiwia2VlcE1vdW50ZWQiLCJTZWN0aW9uIiwibmFtZSIsImxheW91dCIsInNlY3Rpb25MYXlvdXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsZW5ndGgiLCJpdGVtIiwiaW5kZXgiLCJ3aWRnZXRzIiwibWV0YWRhdGEiLCJleGNsdWRlRnJvbVBhdGhzIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsIm1haW5Db250ZW50IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXJnaW4iLCJUZW1wbGF0ZSIsIldpZGdldEJ5TmFtZSIsInNlY3Rpb24iLCJhZGRyZXNzIiwiV2lkZ2V0Iiwid2lkZ2V0IiwiZmV0Y2giLCJGZXRjaEJ1aWxkZXIiLCJzZXRVcmwiLCJiYWNrZW5kIiwic2V0SXNHcmFwaFFMRW5kcG9pbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJjb25maWciLCJCQUNLRU5EIiwidXRpbGl0aWVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFkZHJlc3NQcm9wcyIsImNvbm5lY3QiLCJNYXN0ZXJMYXlvdXQiLCJmb3JtdWxhdGVNZWRpYVVybCIsImRlZmF1bHRTdGF0ZSIsImJ1dHRvbiIsIlNlc3Npb25CdXR0b24iLCJhdXRoUHJvcCIsImd1ZXN0IiwiR0VORVJJQ19TSUdOSU5fVEVYVCIsIkdFTkVSSUNfU0lHTk9VVF9URVhUIiwiYXV0aCIsInRva2VuIiwidXNlcmlkIiwiY2hlY2tlZCIsIkdFTkVSSUNfVElUTEUiLCJzdWJ0aXRsZSIsIkdFTkVSSUNfU1VCVElUTEUiLCJHRU5FUklDX0xPR09fUEFUSCIsImN1cnJlbmN5VW5pdCIsIkdFTkVSSUNfQ1VSUkVOQ1lfVU5JVCIsImN1cnJlbmN5SVNPQ29kZSIsIkdFTkVSSUNfQ1VSUkVOQ1lfSVNPX0NPREUiLCJwYXltZW50TWV0aG9kIiwiR0VORVJJQ19QQVlNRU5UX01FVEhPRCIsInN0cmlwZVB1Ymxpc2hhYmxlS2V5IiwiR0VORVJJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZX1RFWFQiLCJ0aGVtZVByaW1hcnlDb2xvciIsIkdFTkVSSUNfVEhFTUVfQ09MT1JfUFJJTUFSWSIsInRoZW1lU2Vjb25kYXJ5Q29sb3IiLCJHRU5FUklDX1RIRU1FX0NPTE9SX1NFQ09OREFSWSIsImNvZGVJbmplY3Rpb25IZWFkIiwiR0VORVJJQ19DT0RFX0lOSkVDVElPTl9IRUFEIiwicHVyY2hhc2VzIiwiZW1haWwiLCJiaW8iLCJ0b3AiLCJib3R0b20iLCJhc2lkZSIsImZvb3RlckxlZnQiLCJmb290ZXJSaWdodCIsImZyb250ZW5kIiwiZG9tYWluIiwiRVJSX0FMTF9GSUVMRFNfUkVRVUlSRUQiLCJFUlJfUEFTU1dPUkRTX0RPTlRfTUFUQ0giLCJTSUdOVVBfU1VDQ0VTUyIsIkVSUl9DT1VSU0VfVElUTEVfUkVRVUlSRUQiLCJFUlJfQ09VUlNFX0NPU1RfUkVRVUlSRUQiLCJSRVNQX0FQSV9VU0VSX0NSRUFURUQiLCJDUkVBVE9SX0FSRUFfTElOS19URVhUIiwiQ1JFQVRPUl9BUkVBX1BBR0VfVElUTEUiLCJHRU5FUklDX1NJR05VUF9URVhUIiwiQlROX0xPQURfTU9SRSIsIk1FRElBX1VQTE9BRF9CVVRUT05fVEVYVCIsIk1FRElBX1VQTE9BRElORyIsIk1FRElBX0FERF9ORVdfQlVUVE9OX1RFWFQiLCJCVVRUT05fQ0FOQ0VMX1RFWFQiLCJNRURJQV9TRUFSQ0hfSU5QVVRfUExBQ0VIT0xERVIiLCJMT0FEX01PUkVfVEVYVCIsIk1BTkFHRV9NRURJQV9CVVRUT05fVEVYVCIsIk1BTkFHRV9DT1VSU0VTX1BBR0VfSEVBRElORyIsIlVTRVJTX01BTkFHRVJfUEFHRV9IRUFESU5HIiwiTkVXX0NPVVJTRV9QQUdFX0hFQURJTkciLCJNRURJQV9NQU5BR0VSX0RJQUxPR19USVRMRSIsIkJVVFRPTl9ORVdfQ09VUlNFIiwiQlVUVE9OX0RPTkVfVEVYVCIsIkRJQUxPR19USVRMRV9GRUFUVVJFRF9JTUFHRSIsIkJVVFRPTl9TRVRfRkVBVFVSRURfSU1BR0UiLCJCVVRUT05fU0VMRUNUX01FRElBIiwiRk9STV9GSUVMRF9GRUFUVVJFRF9JTUFHRSIsIkJUTl9ERUxFVEVfQ09VUlNFIiwiQlROX0FERF9WSURFTyIsIkFERF9WSURFT19ESUFMT0dfVElUTEUiLCJDQVBUSU9OX1ZFUklGSUVEIiwiQ0FQVElPTl9VTlZFUklGSUVEIiwiTEFCRUxfTkVXX1BBU1NXT1JEIiwiQlVUVE9OX1NBVkUiLCJTV0lUQ0hfSVNfQURNSU4iLCJTV0lUQ0hfSVNfQ1JFQVRPUiIsIlNXSVRDSF9BQ0NPVU5UX0FDVElWRSIsIkxBQkVMX0NPTkZfUEFTU1dPUkQiLCJIRUFERVJfQkxPR19QT1NUU19TRUNUSU9OIiwiSEVBREVSX0NPVVJTRVNfU0VDVElPTiIsIlNJVEVfU0VUVElOR1NfVElUTEUiLCJTSVRFX1NFVFRJTkdTX1NVQlRJVExFIiwiU0lURV9TRVRUSU5HU19DVVJSRU5DWV9VTklUIiwiU0lURV9TRVRUSU5HU19DVVJSRU5DWV9JU09fQ09ERV9URVhUIiwiU0lURV9TRVRUSU5HU19MT0dPIiwiU0lURV9TRVRUSU5HU19QQUdFX0hFQURJTkciLCJTSVRFX0FETUlOX1NFVFRJTkdTX1NUUklQRV9TRUNSRVQiLCJTSVRFX0FETUlOX1NFVFRJTkdTX1BBWVBBTF9TRUNSRVQiLCJTSVRFX0FETUlOX1NFVFRJTkdTX1BBWVRNX1NFQ1JFVCIsIlNJVEVfU0VUVElOR1NfU0VDVElPTl9HRU5FUkFMIiwiU0lURV9TRVRUSU5HU19TRUNUSU9OX1BBWU1FTlQiLCJTSVRFX0FETUlOX1NFVFRJTkdTX1BBWU1FTlRfTUVUSE9EIiwiU0lURV9TRVRUSU5HU19TVFJJUEVfUFVCTElTSEFCTEVfS0VZX1RFWFQiLCJGUkVFX0NPU1QiLCJTSURFQkFSX1RFWFRfQ09VUlNFX0FCT1VUIiwiUkVBQ1RfQ09NUE9ORU5UX0NSQVNIRUQiLCJDSEVDS09VVF9ESUFMT0dfVElUTEUiLCJQQVlNRU5UX01PREFMX1BBWU1FTlRfREVUQUlMU19IRUFERVIiLCJQQVlNRU5UX01PREFMX0NPU1RfUFJFRklYIiwiUEFZTUVOVF9NT0RBTF9QQVlfTk9XX0JVVFRPTl9DQVBUSU9OIiwiUEFZTUVOVF9JTklUSUFUSU9OX0ZBSUxFRCIsIlBBWU1FTlRfVkVSSUZJQ0FUSU9OX0ZBSUxFRCIsIlNUUklQRV9QVUJMSVNIQUJMRV9LRVlfRU1QVFkiLCJDQVBUSU9OX1RSWV9BR0FJTiIsIkNBUFRJT05fQ0xPU0UiLCJMT0FESU5HIiwiQlVUVE9OX05FV19MRVNTT05fVEVYVCIsIkJVVFRPTl9ERUxFVEVfTEVTU09OX1RFWFQiLCJDT1VSU0VfREVUQUlMU19DQVJEX0hFQURFUiIsIkRBTkdFUl9aT05FX0hFQURFUiIsIkRBTkdFUl9aT05FX0RFU0NSSVBUSU9OIiwiREVMRVRFX0NPVVJTRV9QT1BVUF9IRUFERVIiLCJQT1BVUF9PS19BQ1RJT04iLCJQT1BVUF9DQU5DRUxfQUNUSU9OIiwiTE9HSU5fU0VDVElPTl9IRUFERVIiLCJMT0dJTl9TRUNUSU9OX0JVVFRPTiIsIkxPR0lOX0lOU1RFQURfQlVUVE9OIiwiU0lHTlVQX1NFQ1RJT05fSEVBREVSIiwiU0lHTlVQX1NFQ1RJT05fQlVUVE9OIiwiTUVESUFfTUFOQUdFUl9QQUdFX0hFQURJTkciLCJCVVRUT05fU0VBUkNIIiwiQlVUVE9OX0FERF9GSUxFIiwiRklMRV9VUExPQURfU1VDQ0VTUyIsIkhFQURFUl9ZT1VSX01FRElBIiwiTEVTU09OX0VESVRPUl9IRUFERVIiLCJCTE9HX1BPU1RfU1dJVENIIiwiRE9XTkxPQURBQkxFX1NXSVRDSCIsIlRZUEVfRFJPUERPV04iLCJMRVNTT05fQ09OVEVOVF9IRUFERVIiLCJDT05URU5UX1VSTF9MQUJFTCIsIk1FRElBX01BTkFHRVJfWU9VUl9NRURJQV9IRUFERVIiLCJESUFMT0dfU0VMRUNUX0JVVFRPTiIsIkxFU1NPTl9SRVFVSVJFU19FTlJPTExNRU5UIiwiREVMRVRFX0xFU1NPTl9QT1BVUF9IRUFERVIiLCJBUFBfTUVTU0FHRV9MRVNTT05fREVMRVRFRCIsIkFQUF9NRVNTQUdFX0xFU1NPTl9TQVZFRCIsIkFQUF9NRVNTQUdFX0NPVVJTRV9TQVZFRCIsIkVOUk9MTF9JTl9USEVfQ09VUlNFIiwiVVNFUl9FUlJPUl9IRUFERVIiLCJFTlJPTExfQlVUVE9OX1RFWFQiLCJCVVRUT05fREVMRVRFX01FRElBIiwiREVMRVRFX01FRElBX1BPUFVQX0hFQURFUiIsIkhFQURFUl9FRElUSU5HX01FRElBIiwiSEVBREVSX0VESVRJTkdfVVNFUiIsIkhFQURFUl9NRURJQV9QUkVWSUVXIiwiUFJFVklFV19QREZfRklMRSIsIkFQUF9NRVNTQUdFX01FRElBX0RFTEVURUQiLCJBUFBfTUVTU0FHRV9NRURJQV9VUERBVEVEIiwiUEFHRV9IRUFERVJfQUxMX0NPVVJTRVMiLCJQQUdFX0hFQURFUl9BTExfUE9TVFMiLCJDT1VSU0VfVFlQRV9CTE9HIiwiQ09VUlNFX1RZUEVfQ09VUlNFIiwiQ09VUlNFX0NSRUFUT1JfUFJFRklYIiwiQ09VUlNFX0VESVRPUl9ERVNDUklQVElPTiIsIkFQUF9NRVNTQUdFX1NFVFRJTkdTX1NBVkVEIiwiRU5ST0xMRURfQ09VUlNFU19IRUFERVIiLCJTSVRFX0NVU1RPTUlTQVRJT05TX1NFVFRJTkdfSEVBREVSIiwiU0lURV9DVVNUT01JU0FUSU9OU19TRVRUSU5HX0NPREVJTkpFQ1RJT05fSEVBRCIsIkRJU0NBUkRfQ09VUlNFX0NIQU5HRVNfUE9QVVBfSEVBREVSIiwiRkVBVFVSRURfU0VDVElPTl9IRUFERVIiLCJDQVJEX0hFQURFUl9QQUdFX0xBWU9VVCIsIkNBUkRfSEVBREVSX1RIRU1FIiwiQ0FSRF9ERVNDUklQVElPTl9QQUdFX0xBWU9VVCIsIkFERF9DT01QT05FTlRfUE9QVVBfSEVBREVSIiwiQVBQX01FU1NBR0VfQ0hBTkdFU19TQVZFRCIsIlNVQkhFQURFUl9DT1VSU0VTX1NFQ1RJT04iLCJTVUJIRUFERVJfRkVBVFVSRURfU0VDVElPTiIsIlNVQkhFQURFUl9USEVNRV9BRERfVEhFTUUiLCJTVUJIRUFERVJfVEhFTUVfQURERURfVEhFTUUiLCJTVUJIRUFERVJfVEhFTUVfQUREX1RIRU1FX0lOUFVUX0xBQkVMIiwiU1VCSEVBREVSX1RIRU1FX0FERF9USEVNRV9JTlBVVF9QTEFDRUhPTERFUiIsIlNVQkhFQURFUl9USEVNRV9JTlNUQUxMRURfVEhFTUVTIiwiQlVUVE9OX0dFVF9USEVNRVMiLCJFUlJPUl9TTkFDS0JBUl9QUkVGSVgiLCJCVVRUT05fVEhFTUVfQVBQTFkiLCJCVVRUT05fVEhFTUVfVU5JTlNUQUxMIiwiQlVUVE9OX1RIRU1FX0lOU1RBTEwiLCJCVVRUT05fVEhFTUVfUkVNSVgiLCJERUxFVEVfVEhFTUVfUE9QVVBfSEVBREVSIiwiQVBQTFlfVEhFTUVfUE9QVVBfSEVBREVSIiwiUkVNSVhFRF9USEVNRV9QUkVGSVgiLCJBUFBfTUVTU0FHRV9USEVNRV9DT1BJRUQiLCJOT19USEVNRVNfSU5TVEFMTEVEIiwiQVBQX01FU1NBR0VfVEhFTUVfSU5TVEFMTEVEIiwiQ09OU09MRV9NRVNTQUdFX1RIRU1FX0lOVkFMSUQiLCJBUFBfTUVTU0FHRV9USEVNRV9BUFBMSUVEIiwiQVBQX01FU1NBR0VfVEhFTUVfVU5JTlNUQUxMRUQiLCJIRUFERVJfTkFWSUdBVElPTiIsIkxBQkVMX05BVklHQVRJT05fTElOS19URVhUIiwiTEFCRUxfTkFWSUdBVElPTl9MSU5LX0RFU1RJTkFUSU9OIiwiTElOS19EUk9QRE9XTiIsIkFERF9ORVdfTElOS19CVVRUT04iLCJMQUJFTF9OQVZJR0FUSU9OX0xJTktfTkVXVEFCIiwiV0lER0VUU19QQUdFX0hFQURFUiIsIlBBWU1FTlRTX1NISVBQSU5HX0FERFJFU1NfU0VDVElPTl9IRUFERVIiLCJIRUFERVJfU0VDVElPTl9QQVlNRU5UX0NPTkZJUk1BVElPTl9XRUJIT09LIiwiU1VCSEVBREVSX1NFQ1RJT05fUEFZTUVOVF9DT05GSVJNQVRJT05fV0VCSE9PSyIsIlBVUkNIQVNFX1NUQVRVU19QQUdFX0hFQURFUiIsIkxBWU9VVF9TRUNUSU9OX01BSU5fQ09OVEVOVCIsIkxBWU9VVF9TRUNUSU9OX0ZPT1RFUl9MRUZUIiwiTEFZT1VUX1NFQ1RJT05fRk9PVEVSX1JJR0hUIiwiTEFZT1VUX1NFQ1RJT05fVE9QIiwiTEFZT1VUX1NFQ1RJT05fRk9PVEVSIiwiTEFZT1VUX1NFQ1RJT05fQk9UVE9NIiwiTEFZT1VUX1NFQ1RJT05fQVNJREUiLCJUUkFOU0FDVElPTl9TVEFUVVNfU1VDQ0VTUyIsIlRSQU5TQUNUSU9OX1NUQVRVU19TVUNDRVNTX0RFVEFJTFMiLCJUUkFOU0FDVElPTl9TVEFUVVNfSU5JVElBVEVEIiwiVFJBTlNBQ1RJT05fU1RBVFVTX0ZBSUxFRCIsIlRSQU5TQUNUSU9OX1NUQVRVU19GQUlMRURfREVUQUlMUyIsIlZJU0lUX0NPVVJTRV9CVVRUT04iLCJWSVNJVF9QT1NUX0JVVFRPTiIsIlZFUklGWV9QQVlNRU5UX0JVVFRPTiIsIlBVUkNIQVNFX0lEX0hFQURFUiIsIlBBR0VfSEVBREVSX0ZFQVRVUkVEIiwiQlROX1ZJRVdfQUxMIiwiRU1QVFlfQ09VUlNFU19MSVNUX0FETUlOIiwiSEVBREVSX1JFU0VUX1BBU1NXT1JEIiwiSEVBREVSX0RFU0lHTiIsIkhFQURFUl9ZT1VSX1BST0ZJTEUiLCJQUk9GSUxFX1BBR0VfTUVTU0FHRV9OT1RfTE9HR0VEX0lOIiwiUFJPRklMRV9QQUdFX0hFQURFUiIsIlBST0ZJTEVfTVlfQ09VUlNFUyIsIlBST0ZJTEVfUEFHRV9OT1RfRU5ST0xMRUQiLCJQUk9GSUxFX1BBR0VfQlJPV1NFX0NPVVJTRVNfVEVYVCIsIlBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX05BTUUiLCJQUk9GSUxFX1NFQ1RJT05fREVUQUlMU19FTUFJTCIsIlBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX0JJTyIsIlBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX0JJT19FTVBUWSIsImNyZWF0ZUNvbnRleHQiLCJNeVByb3ZpZGVyIiwiZ2V0QWxsV2lkZ2V0cyIsIkNvbW1vbldpZGdldHMiLCJidXR0b25kb3duIiwiRmV0Y2giLCJ1cmwiLCJwYXlsb2FkIiwiaXNHcmFwaFFMRW5kcG9pbnQiLCJwcm90b3R5cGUiLCJleGVjIiwiZmV0Y2hPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJSb3V0ZXIiLCJwdXNoIiwianNvbiIsImVycm9ycyIsIkVycm9yIiwiZGF0YSIsInNldFBheWxvYWQiLCJzZXRBdXRoVG9rZW4iLCJidWlsZCIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInNoYWxsb3ciLCJsb2NhbGUiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYWN0dWFsIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiQ29tcG9uZW50IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImRlbEJhc2VQYXRoIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiZGV0ZWN0ZWREb21haW4iLCJkZXRlY3REb21haW5Mb2NhbGUiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsImV4dCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicGFnZVByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiYXV0aFByb3BzIiwic2hhcGUiLCJib29sIiwicHJvZmlsZVByb3BzIiwiYXJyYXlPZiIsImxhdGVzdFBvc3RzUHJvcHMiLCJkZXNjcmlwdGlvbiIsImNyZWF0b3JOYW1lIiwidXBkYXRlZCIsIm51bWJlciIsInNsdWciLCJwdWJsaWNDb3Vyc2UiLCJpc0ZlYXR1cmVkIiwiY29zdCIsImNyZWF0b3JJZCIsImNyZWF0b3JDb3Vyc2UiLCJzaXRlVXNlciIsInZlcmlmaWVkIiwiYXZhdGFyIiwiZmVhdHVyZWRDb3Vyc2UiLCJmZWF0dXJlZEltYWdlIiwiYXBwTWVzc2FnZSIsImZ1bmMiLCJsZXNzb24iLCJ0eXBlIiwiZG93bmxvYWRhYmxlIiwiY29udGVudFVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbEJDLE9BRGtCLEdBQ05ELEtBRE0sQ0FDbEJDLE9BRGtCO0FBRTFCLE1BQU1DLE1BQU0sR0FBR0QsT0FBTyxJQUFJQSxPQUFPLENBQUNDLE1BQWxDOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNyQyxRQUFJQSxNQUFNLEtBQUssV0FBZixFQUE0QjtBQUMxQjtBQUNELEtBSG9DLENBS3JDOztBQUNELEdBTkQ7O0FBUUEsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDLFFBQU1DLGtCQUFrQixHQUFHLGNBQ3pCLHFFQUFDLDREQUFEO0FBRUUsb0JBQVcsT0FG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RFc7QUFFbEN0RixhQUFXLEVBQUVvRixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUZJO0FBR2xDN0MsVUFBUSxFQUFFMkMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFITztBQUlsQ3BGLFFBQU0sRUFBRWtGLGlEQUFTLENBQUN3bEIsSUFBVixDQUFldGxCO0FBSlcsQ0FBaEIsQ0FBYjtBQU9BLElBQU1DLFlBQVksR0FBR0gsaURBQVMsQ0FBQ3VsQixLQUFWLENBQWdCO0FBQzFDOWxCLFNBQU8sRUFBRU8saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEZ0I7QUFFMUMwQyxVQUFRLEVBQUU1QyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUZlO0FBRzFDMkMsUUFBTSxFQUFFN0MsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFIaUIsQ0FBaEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL2NodW5rcy82LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBTbmFja2JhciwgSWNvbkJ1dHRvbiwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vaW1wb3J0IHsgY2xlYXJBcHBNZXNzYWdlIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgYXBwTWVzc2FnZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IEFwcFRvYXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSBwcm9wcztcclxuICBjb25zdCBhY3Rpb24gPSBtZXNzYWdlICYmIG1lc3NhZ2UuYWN0aW9uO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcbiAgICBpZiAocmVhc29uID09PSBcImNsaWNrYXdheVwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL3Byb3BzLmRpc3BhdGNoKGNsZWFyQXBwTWVzc2FnZSgpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBY3Rpb25CdXR0b25zQXJyYXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhY3Rpb25CdXR0b25zQXJyYXkgPSBbXHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAga2V5PVwiY2xvc2VcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXHJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDbG9zZSAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+LFxyXG4gICAgXTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgYWN0aW9uQnV0dG9uc0FycmF5LnVuc2hpZnQoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAga2V5PVwiYWN0aW9uXCJcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXttZXNzYWdlLmFjdGlvbi5jYn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bWVzc2FnZS5hY3Rpb24udGV4dH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWN0aW9uQnV0dG9uc0FycmF5O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bWVzc2FnZSAmJiAoXHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9wZW49e21lc3NhZ2Uub3Blbn1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuPnttZXNzYWdlLm1lc3NhZ2V9PC9zcGFuPn1cclxuICAgICAgICAgIGFjdGlvbj17Z2V0QWN0aW9uQnV0dG9uc0FycmF5KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL0FwcFRvYXN0LnByb3BUeXBlcyA9IHtcclxuLy8gIG1lc3NhZ2U6IGFwcE1lc3NhZ2UuaXNSZXF1aXJlZCxcclxuLy8gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vL307XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbWVzc2FnZTogc3RhdGUubWVzc2FnZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxyXG59KTtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwVG9hc3QpO1xyXG5leHBvcnQgZGVmYXVsdCBBcHBUb2FzdFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTZXNzaW9uQnV0dG9uIGZyb20gXCIuLi9TZXNzaW9uQnV0dG9uXCI7XHJcbmltcG9ydCB7IHNpdGVJbmZvUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IE15Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9NeUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IEltZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vSW1nLmpzXCIpKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxvZ286IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIH0sXHJcbiAgbG9nb2NvbnRhaW5lcjoge1xyXG4gICAgd2lkdGg6IFwiMmVtXCIsXHJcbiAgICBoZWlnaHQ6IFwiMmVtXCIsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIH0sXHJcbiAgbG9nb2ltZzoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMmVtXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgc2l0ZUluZm8gfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NpdGVJbmZvLmxvZ29wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVGh1bWJuYWlsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXMubG9nb2ltZ31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2U9XCIvY291cnNlbGl0X2JhY2tkcm9wX3NxdWFyZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntzaXRlSW5mby50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPFNlc3Npb25CdXR0b24gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIHNpdGVpbmZvOiBzaXRlSW5mb1Byb3BzLFxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHNpdGVpbmZvOiBzdGF0ZS5zaXRlaW5mbyxcclxufSk7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXIpO1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQsIExpc3RJdGVtSWNvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBPcGVuSW5OZXcgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbGluayB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgZXh0ZXJuYWxMaW5rOiB7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBNZW51SXRlbSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGluayB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gbGluay5kZXN0aW5hdGlvbi5pbmRleE9mKFwiaHR0cFwiKSAhPT0gLTEgfHwgbGluay5uZXdUYWIgPyAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPXtsaW5rLmRlc3RpbmF0aW9ufVxyXG4gICAgICBrZXk9e2xpbmsudGV4dH1cclxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5leHRlcm5hbExpbmt9XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlRHJhd2VyID8gcHJvcHMuY2xvc2VEcmF3ZXIgOiAoKSA9PiB7IH19XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtsaW5rLnRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgIHtsaW5rLm5ld1RhYiAmJiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8T3BlbkluTmV3IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9hPlxyXG4gICkgOiAoXHJcbiAgICA8TGluayBocmVmPXtsaW5rLmRlc3RpbmF0aW9ufSBrZXk9e2xpbmsudGV4dH0+XHJcbiAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgIGJ1dHRvblxyXG4gICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlRHJhd2VyID8gcHJvcHMuY2xvc2VEcmF3ZXIgOiAoKSA9PiB7IH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2xpbmsudGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vTWVudUl0ZW0ucHJvcFR5cGVzID0ge1xyXG4vLyAgbGluazogbGluayxcclxuLy8gIGNsb3NlRHJhd2VyOiBQcm9wVHlwZXMuZnVuYyxcclxuLy99O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEdyaWQsIExpbmVhclByb2dyZXNzLCBUb29sYmFyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vL2ltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEFwcFRvYXN0IGZyb20gXCIuLi8uLi8uLi9BcHBUb2FzdC5qc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy9pbXBvcnQgeyBzaXRlSW5mb1Byb3BzLCBsaW5rLCBwcm9maWxlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXMuanNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFJTl9NRU5VX0lURU1fREFTSEJPQVJELFxyXG4gIE1BSU5fTUVOVV9JVEVNX1BST0ZJTEUsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbmZpZy9zdHJpbmdzLmpzXCI7XHJcbmltcG9ydCB7IE5BVklHQVRJT05fQ0FURUdPUllfTUFJTiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWcvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi9NZW51SXRlbS5qc1wiO1xyXG5pbXBvcnQgTXlDb250ZXh0IGZyb20gXCIuLi8uLi8uLi8uLi9jb250ZXh0L015Q29udGV4dC5qc1wiO1xyXG5cclxuLy9pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4uL1RlbXBsYXRlLmpzXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcclxuICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBhY3RpdmVJdGVtOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNkNmQ2ZDZcIixcclxuICB9LFxyXG4gIHZpc2l0U2l0ZUxpbms6IHtcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICB9LFxyXG4gIHNob3dQcm9ncmVzc0JhcjogKHByb3BzKSA9PiAoe1xyXG4gICAgdmlzaWJpbGl0eTogcHJvcHMubmV0d29ya0FjdGlvbiA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIixcclxuICB9KSxcclxuICBtZW51VGl0bGU6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2NhZmZvbGQgPSAoeyBjaGlsZHJlbiwgcHJvcHMgfSkgPT4ge1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7Ly89IHVzZVN0eWxlcyhwcm9wcyk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHsgc2l0ZUluZm8sIHByb2ZpbGUsIG5hdmlnYXRpb24gfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KVxyXG4gIGNvbnN0IFttb2JpbGVPcGVuLCBzZXRNb2JpbGVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRHJhd2VyVG9nZ2xlKCkge1xyXG4gICAgc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYWtlRHJhd2VyID0gKGZvck1vYmlsZSA9IGZhbHNlKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51VGl0bGV9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3NpdGVJbmZvLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAge3Byb2ZpbGUuZmV0Y2hlZCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvcHMucHJvZmlsZS5pZCAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICBsaW5rPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogTUFJTl9NRU5VX0lURU1fUFJPRklMRSxcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogYC9wcm9maWxlLyR7cHJvcHMucHJvZmlsZS51c2VySWQgJiYgcHJvcHMucHJvZmlsZS51c2VySWQgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHByb3BzLnByb2ZpbGUudXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLnByb2ZpbGUuaWRcclxuICAgICAgICAgICAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7KHByb3BzLnByb2ZpbGUuaXNBZG1pbiB8fCBwcm9wcy5wcm9maWxlLmlzQ3JlYXRvcikgJiYgKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgbGluaz17e1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBNQUlOX01FTlVfSVRFTV9EQVNIQk9BUkQsXHJcbiAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi9kYXNoYm9hcmQvY291cnNlc1wiLFxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeTogTkFWSUdBVElPTl9DQVRFR09SWV9NQUlOLFxyXG4gICAgICAgICAgICAgICAgICBuZXdUYWI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7bmF2aWdhdGlvbiAmJlxyXG4gICAgICAgICAgbmF2aWdhdGlvbi5tYXAoKGxpbmspID0+XHJcbiAgICAgICAgICAgIGZvck1vYmlsZSA/IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2xpbmsuZGVzdGluYXRpb259XHJcbiAgICAgICAgICAgICAgICBjbG9zZURyYXdlcj17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGxpbms9e2xpbmt9IGtleT17bGluay5kZXN0aW5hdGlvbn0gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn0gYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgICB7LyogVGhlIGltcGxlbWVudGF0aW9uIGNhbiBiZSBzd2FwcGVkIHdpdGgganMgdG8gYXZvaWQgU0VPIGR1cGxpY2F0aW9uIG9mIGxpbmtzLiAqL31cclxuICAgICAgICA8SGlkZGVuIHNtVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICAgIGFuY2hvcj17dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBNb2RhbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21ha2VEcmF3ZXIodHJ1ZSl9XHJcbiAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICA8SGlkZGVuIHhzRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYWtlRHJhd2VyKCl9XHJcbiAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgPC9uYXYgPlxyXG4gICAgICA8YT5zY2Fmb29sZjwvYT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9IC8+XHJcbiAgICAgICAgPExpbmVhclByb2dyZXNzIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93UHJvZ3Jlc3NCYXJ9IC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxBcHBUb2FzdCAvPlxyXG4gICAgPC9kaXYgPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL1NjYWZmb2xkLnByb3BUeXBlcyA9IHtcclxuLy8gIGNoaWxkcmVuOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4vL3NpdGVpbmZvOiBzaXRlSW5mb1Byb3BzLFxyXG4vL25hdmlnYXRpb246IFByb3BUeXBlcy5hcnJheU9mKGxpbmspLFxyXG4vL25ldHdvcmtBY3Rpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbi8vcHJvZmlsZTogcHJvZmlsZVByb3BzLFxyXG4vL307XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuLy8gIHNpdGVpbmZvOiBzdGF0ZS5zaXRlaW5mbyxcclxuLy8gIG5hdmlnYXRpb246IHN0YXRlLm5hdmlnYXRpb24uZmlsdGVyKChsaW5rKSA9PiBsaW5rLmNhdGVnb3J5ID09PSBcIm1haW5cIiksXHJcbi8vICBuZXR3b3JrQWN0aW9uOiBzdGF0ZS5uZXR3b3JrQWN0aW9uLFxyXG4vLyAgcHJvZmlsZTogc3RhdGUucHJvZmlsZSxcclxuLy99KTtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNjYWZmb2xkKTtcclxuZXhwb3J0IGRlZmF1bHQgU2NhZmZvbGRcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBXaWRnZXRCeU5hbWUgZnJvbSBcIi4vV2lkZ2V0QnlOYW1lXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgd2lkZ2V0cyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL3dpZGdldHNcIjtcclxuaW1wb3J0IE15Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9NeUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSAoeyBuYW1lIH0pID0+IHtcclxuICBjb25zdCB7IGxheW91dCB9ID0gdXNlQ29udGV4dChNeUNvbnRleHQpXHJcbiAgY29uc3Qgc2VjdGlvbkxheW91dCA9IGxheW91dFtuYW1lXTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb25MYXlvdXQgJiYgc2VjdGlvbkxheW91dC5sZW5ndGggPyAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAge3NlY3Rpb25MYXlvdXQubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICB3aWRnZXRzW2l0ZW1dLm1ldGFkYXRhLmV4Y2x1ZGVGcm9tUGF0aHMgJiZcclxuICAgICAgICAgIHdpZGdldHNbaXRlbV0ubWV0YWRhdGEuZXhjbHVkZUZyb21QYXRocy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpID8gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT48L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPFdpZGdldEJ5TmFtZSBuYW1lPXtpdGVtfSBzZWN0aW9uPXtuYW1lfSAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvR3JpZD5cclxuICApIDogKFxyXG4gICAgPD48Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy9TZWN0aW9uLnByb3BUeXBlcyA9IHtcclxuLy8gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuLy8gIGxheW91dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4vL307XHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe2xheW91dDogc3RhdGUubGF5b3V0LH0pXHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlY3Rpb24pO1xyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IERpdmlkZXIsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL1NlY3Rpb25cIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBtYWluQ29udGVudDoge1xyXG4gICAgbWF4V2lkdGg6IDEyNDAsXHJcbiAgICBtaW5IZWlnaHQ6IFwiODB2aFwiLFxyXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFRlbXBsYXRlID0gKHsgY2hpbGRyZW4sIHByb3BzIH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCkvLyB1c2VTdHlsZXMocHJvcHMpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQ29udGVudH0+XHJcbiAgICAgICAgey8qKiBUb3AgKi99XHJcbiAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgJiYgPFNlY3Rpb24gbmFtZT1cInRvcFwiIC8+fVxyXG5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJyb3dcIiB4cz5cclxuICAgICAgICAgIHsvKiogTWFpbiAqL31cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj1cImNvbHVtblwiIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbT5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPFNlY3Rpb24gbmFtZT1cImJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICB7LyoqIEFzaWRlICovfVxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwiY29sdW1uXCIgeHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uIG5hbWU9XCJhc2lkZVwiIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICB7LyoqIEZvb3RlciAqL31cclxuICAgICAgPD5cclxuICAgICAgICA8RGl2aWRlciBsaWdodCAvPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj1cImNvbHVtblwiIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbiBuYW1lPVwiZm9vdGVyTGVmdFwiIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJjb2x1bW5cIiB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgPFNlY3Rpb24gbmFtZT1cImZvb3RlclJpZ2h0XCIgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vVGVtcGxhdGUucHJvcFR5cGVzID0ge1xyXG4vLyAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuLy99O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgd2lkZ2V0cyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL3dpZGdldHNcIjtcclxuaW1wb3J0IEZldGNoQnVpbGRlciBmcm9tIFwiLi4vLi4vLi4vbGliL2ZldGNoXCI7XHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZHJlc3NQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5cclxuY29uc3QgV2lkZ2V0QnlOYW1lID0gKHsgbmFtZSwgc2VjdGlvbiwgYWRkcmVzcyB9KSA9PiB7XHJcbiAgY29uc3QgV2lkZ2V0ID0gd2lkZ2V0c1tuYW1lXS53aWRnZXQ7XHJcbiAgY29uc3QgZmV0Y2ggPSBuZXcgRmV0Y2hCdWlsZGVyKClcclxuICAgIC5zZXRVcmwoYCR7YWRkcmVzcy5iYWNrZW5kfS9ncmFwaGApXHJcbiAgICAuc2V0SXNHcmFwaFFMRW5kcG9pbnQodHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8V2lkZ2V0XHJcbiAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICBmZXRjaEJ1aWxkZXI9e2ZldGNofVxyXG4gICAgICAgIHNlY3Rpb249e3NlY3Rpb259XHJcbiAgICAgICAgY29uZmlnPXtPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIHtcclxuICAgICAgICAgIEJBQ0tFTkQ6IGFkZHJlc3MuYmFja2VuZCxcclxuICAgICAgICB9KX1cclxuICAgICAgICB1dGlsaXRpZXM9e3V0aWxpdGllc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5XaWRnZXRCeU5hbWUucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWRkcmVzczogYWRkcmVzc1Byb3BzLFxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFdpZGdldEJ5TmFtZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBmb3JtdWxhdGVNZWRpYVVybCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHMuanNcIjtcclxuLy9pbXBvcnQgeyBhZGRyZXNzUHJvcHMsIHNpdGVJbmZvUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMuanNcIjtcclxuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuL1RlbXBsYXRlLmpzXCI7XHJcbmltcG9ydCBTY2FmZm9sZCBmcm9tIFwiLi9TY2FmZm9sZFwiO1xyXG5pbXBvcnQgTXlDb250ZXh0IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L015Q29udGV4dC5qc1wiO1xyXG5pbXBvcnQgZGVmYXVsdFN0YXRlIGZyb20gJy4uLy4uLy4uL2NvbmZpZy9kZWZhdWx0U3RhdGUnXHJcblxyXG4vL3R5cGUgUHJvcHMgPSB7XHJcbi8vICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcclxuLy8gIHRpdGxlPzogc3RyaW5nO1xyXG4vLyAgZm9sbG93TGlua3M/OiBib29sZWFuO1xyXG4vLyAgZGVzY3JpcHQ/OiBzdHJpbmc7XHJcbi8vfTtcclxuXHJcbmNvbnN0IE1hc3RlckxheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgcHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc2l0ZUluZm8gfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICB7dGl0bGV9IHwge3NpdGVJbmZvPy50aXRsZX1cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgIHtzaXRlSW5mbz8ubG9nb3BhdGggJiYgKFxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICAgIGhyZWY9e2Zvcm11bGF0ZU1lZGlhVXJsKFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRTdGF0ZS5hZGRyZXNzLmJhY2tlbmQsXHJcbiAgICAgICAgICAgICAgc2l0ZUluZm8/LmxvZ29wYXRoLFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgc2l0ZUluZm8/LmxvZ29wYXRoXHJcbiAgICAgICAgICAgICAgPyBmb3JtdWxhdGVNZWRpYVVybChcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTdGF0ZS5hZGRyZXNzLmJhY2tlbmQsXHJcbiAgICAgICAgICAgICAgICBzaXRlSW5mbz8ubG9nb3BhdGgsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogXCIvY291cnNlbGl0X2JhY2tkcm9wX3NxdWFyZS53ZWJwXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNjYWZmb2xkICA+XHJcbiAgICAgICAgPFRlbXBsYXRlPntjaGlsZHJlbn08L1RlbXBsYXRlPlxyXG4gICAgICA8L1NjYWZmb2xkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vTWFzdGVyTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuLy8gIGNoaWxkcmVuOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4vLyAgbmV0d29ya0FjdGlvbjogUHJvcFR5cGVzLmJvb2wsXHJcbi8vICBzaXRlSW5mbzogc2l0ZUluZm9Qcm9wcz8uaXNSZXF1aXJlZCxcclxuLy8gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbi8vICBsYXlvdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuLy8gIGFkZHJlc3M6IGFkZHJlc3NQcm9wcyxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuLy8gIG5ldHdvcmtBY3Rpb246IHN0YXRlLm5ldHdvcmtBY3Rpb24sXHJcbi8vICBzaXRlSW5mbzogc3RhdGUuc2l0ZWluZm8sXHJcbi8vICBsYXlvdXQ6IHN0YXRlLmxheW91dCxcclxuLy8gIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsXHJcbi8vfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1hc3RlckxheW91dCk7XHJcbmV4cG9ydCBkZWZhdWx0IE1hc3RlckxheW91dFxyXG4iLCIvKipcclxuICogVGhpcyBjb21wb25lbnQgcHJvdmlkZXMgYSBjbGlja2FibGUgYnV0dG9uIHdoaWNoIHNob3dzIGlmIHRoZSB1c2VyXHJcbiAqIGlzIGxvZ2dlZCBpbiBvciBpcyBhIGd1ZXN0LlxyXG4gKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgR0VORVJJQ19TSUdOT1VUX1RFWFQsXHJcbiAgR0VORVJJQ19TSUdOSU5fVEVYVCxcclxufSBmcm9tIFwiLi4vLi4vY29uZmlnL3N0cmluZ3MuanNcIjtcclxuLy9pbXBvcnQgeyBhdXRoUHJvcHMsIHByb2ZpbGVQcm9wcyB9IGZyb20gXCIuLi8uLi90eXBlcy5qc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvTXlDb250ZXh0LmpzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9uQnV0dG9uKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgYXV0aFByb3AgfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2F1dGhQcm9wLmd1ZXN0ID8gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+e0dFTkVSSUNfU0lHTklOX1RFWFR9PC9CdXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb3V0XCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PntHRU5FUklDX1NJR05PVVRfVEVYVH08L0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vL1Nlc3Npb25CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4vLyAgYXV0aDogYXV0aFByb3BzLFxyXG4vLyAgcHJvZmlsZTogcHJvZmlsZVByb3BzLFxyXG4vL307XHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyBhdXRoOiBzdGF0ZS5hdXRoLCBwcm9maWxlOiBzdGF0ZS5wcm9maWxlLCB9KTtcclxuLy9leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2Vzc2lvbkJ1dHRvbik7XHJcbmV4cG9ydCBkZWZhdWx0IFNlc3Npb25CdXR0b25cclxuIiwiaW1wb3J0IHtcclxuICBHRU5FUklDX1RJVExFLFxyXG4gIEdFTkVSSUNfU1VCVElUTEUsXHJcbiAgR0VORVJJQ19MT0dPX1BBVEgsXHJcbiAgR0VORVJJQ19DVVJSRU5DWV9VTklULFxyXG4gIEdFTkVSSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWV9URVhULFxyXG4gIEdFTkVSSUNfQ1VSUkVOQ1lfSVNPX0NPREUsXHJcbiAgR0VORVJJQ19QQVlNRU5UX01FVEhPRCxcclxuICBHRU5FUklDX1RIRU1FX0NPTE9SX1BSSU1BUlksXHJcbiAgR0VORVJJQ19USEVNRV9DT0xPUl9TRUNPTkRBUlksXHJcbiAgR0VORVJJQ19DT0RFX0lOSkVDVElPTl9IRUFELFxyXG59IGZyb20gXCIuL3N0cmluZ3MuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhdXRoOiB7XHJcbiAgICBndWVzdDogdHJ1ZSxcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgdXNlcmlkOiBudWxsLFxyXG4gICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgfSxcclxuICBzaXRlaW5mbzoge1xyXG4gICAgdGl0bGU6IEdFTkVSSUNfVElUTEUsXHJcbiAgICBzdWJ0aXRsZTogR0VORVJJQ19TVUJUSVRMRSxcclxuICAgIGxvZ29wYXRoOiBHRU5FUklDX0xPR09fUEFUSCxcclxuICAgIGN1cnJlbmN5VW5pdDogR0VORVJJQ19DVVJSRU5DWV9VTklULFxyXG4gICAgY3VycmVuY3lJU09Db2RlOiBHRU5FUklDX0NVUlJFTkNZX0lTT19DT0RFLFxyXG4gICAgcGF5bWVudE1ldGhvZDogR0VORVJJQ19QQVlNRU5UX01FVEhPRCxcclxuICAgIHN0cmlwZVB1Ymxpc2hhYmxlS2V5OiBHRU5FUklDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVlfVEVYVCxcclxuICAgIHRoZW1lUHJpbWFyeUNvbG9yOiBHRU5FUklDX1RIRU1FX0NPTE9SX1BSSU1BUlksXHJcbiAgICB0aGVtZVNlY29uZGFyeUNvbG9yOiBHRU5FUklDX1RIRU1FX0NPTE9SX1NFQ09OREFSWSxcclxuICAgIGNvZGVJbmplY3Rpb25IZWFkOiBHRU5FUklDX0NPREVfSU5KRUNUSU9OX0hFQUQsXHJcbiAgfSxcclxuICBuZXR3b3JrQWN0aW9uOiBmYWxzZSxcclxuICBwcm9maWxlOiB7XHJcbiAgICBpc0NyZWF0b3I6IGZhbHNlLFxyXG4gICAgbmFtZTogbnVsbCxcclxuICAgIGlkOiBudWxsLFxyXG4gICAgZmV0Y2hlZDogZmFsc2UsXHJcbiAgICBpc0FkbWluOiBmYWxzZSxcclxuICAgIHB1cmNoYXNlczogW10sXHJcbiAgICBlbWFpbDogbnVsbCxcclxuICAgIGJpbzogbnVsbCxcclxuICB9LFxyXG4gIG1lc3NhZ2U6IHtcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICAgIGFjdGlvbjogbnVsbCxcclxuICB9LFxyXG4gIHRoZW1lOiB7fSxcclxuICBsYXlvdXQ6IHtcclxuICAgIHRvcDogW10sXHJcbiAgICBib3R0b206IFtdLFxyXG4gICAgYXNpZGU6IFtdLFxyXG4gICAgZm9vdGVyTGVmdDogW10sXHJcbiAgICBmb290ZXJSaWdodDogW10sXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiBbXSxcclxuICBhZGRyZXNzOiB7XHJcbiAgICBiYWNrZW5kOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiLFxyXG4gICAgZnJvbnRlbmQ6IFwiXCIsXHJcbiAgICBkb21haW46IFwiXCIsXHJcbiAgfSxcclxufTtcclxuIiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBwcm92aWRlcyBhcHBsaWNhdGlvbiB3aWRlIHN0cmluZ3MuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUl9BTExfRklFTERTX1JFUVVJUkVEID0gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZC5cIjtcclxuZXhwb3J0IGNvbnN0IEVSUl9QQVNTV09SRFNfRE9OVF9NQVRDSCA9IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIjtcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVUNDRVNTID0gXCJTaWduIHVwIHN1Y2Nlc3NmdWwuIFBsZWFzZSBzaWduIGluLlwiO1xyXG5leHBvcnQgY29uc3QgRVJSX0NPVVJTRV9USVRMRV9SRVFVSVJFRCA9IFwiQSB0aXRsZSBpcyByZXF1aXJlZC5cIjtcclxuZXhwb3J0IGNvbnN0IEVSUl9DT1VSU0VfQ09TVF9SRVFVSVJFRCA9IFwiQ29zdCBpcyByZXF1aXJlZC5cIjtcclxuXHJcbi8vIFJlcGxpZXMgZnJvbSB0aGUgYmFja2VuZFxyXG5leHBvcnQgY29uc3QgUkVTUF9BUElfVVNFUl9DUkVBVEVEID0gXCJVc2VyIGNyZWF0ZWRcIjtcclxuXHJcbi8vIFBsYWNlaG9sZGVyIHRleHRzXHJcbmV4cG9ydCBjb25zdCBDUkVBVE9SX0FSRUFfTElOS19URVhUID0gXCJDcmVhdGVcIjtcclxuZXhwb3J0IGNvbnN0IENSRUFUT1JfQVJFQV9QQUdFX1RJVExFID0gXCJEYXNoYm9hcmRcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfVElUTEUgPSBcIk15IENvdXJzZSBTaXRlXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX1NVQlRJVExFID0gXCJMZWFybiBuZXcgc2tpbGxzXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX0xPR09fUEFUSCA9IFwiXCI7XHJcbi8vZXhwb3J0IGNvbnN0IEdFTkVSSUNfU0lHTklOX1RFWFQgPSBcIlNpZ24gaW5cIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfU0lHTklOX1RFWFQgPSBcIlwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19TSUdOVVBfVEVYVCA9IFwiU2lnbiB1cFwiO1xyXG4vL2V4cG9ydCBjb25zdCBHRU5FUklDX1NJR05PVVRfVEVYVCA9IFwiU2lnbiBvdXRcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfU0lHTk9VVF9URVhUID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfQ1VSUkVOQ1lfVU5JVCA9IFwiXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVlfVEVYVCA9IFwiXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX0NVUlJFTkNZX0lTT19DT0RFID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfUEFZTUVOVF9NRVRIT0QgPSBcIlwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19USEVNRV9DT0xPUl9QUklNQVJZID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfVEhFTUVfQ09MT1JfU0VDT05EQVJZID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfQ09ERV9JTkpFQ1RJT05fSEVBRCA9IFwiXCI7XHJcblxyXG4vLyBVSSB0ZXh0c1xyXG5leHBvcnQgY29uc3QgQlROX0xPQURfTU9SRSA9IFwiTG9hZCBNb3JlXCI7XHJcbmV4cG9ydCBjb25zdCBNRURJQV9VUExPQURfQlVUVE9OX1RFWFQgPSBcIlVwbG9hZFwiO1xyXG5leHBvcnQgY29uc3QgTUVESUFfVVBMT0FESU5HID0gXCJVcGxvYWRpbmcuLi5cIjtcclxuZXhwb3J0IGNvbnN0IE1FRElBX0FERF9ORVdfQlVUVE9OX1RFWFQgPSBcIkFkZCBuZXdcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9DQU5DRUxfVEVYVCA9IFwiQ2FuY2VsXCI7XHJcbmV4cG9ydCBjb25zdCBNRURJQV9TRUFSQ0hfSU5QVVRfUExBQ0VIT0xERVIgPSBcIlNlYXJjaCB5b3VyIG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01PUkVfVEVYVCA9IFwiTG9hZCBtb3JlXCI7XHJcbmV4cG9ydCBjb25zdCBNQU5BR0VfTUVESUFfQlVUVE9OX1RFWFQgPSBcIkluc2VydCBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgTUFOQUdFX0NPVVJTRVNfUEFHRV9IRUFESU5HID0gXCJDb3Vyc2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVU0VSU19NQU5BR0VSX1BBR0VfSEVBRElORyA9IFwiVXNlcnNcIjtcclxuZXhwb3J0IGNvbnN0IE5FV19DT1VSU0VfUEFHRV9IRUFESU5HID0gXCJFZGl0IGNvdXJzZVwiO1xyXG5leHBvcnQgY29uc3QgTUVESUFfTUFOQUdFUl9ESUFMT0dfVElUTEUgPSBcIkFkZCBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX05FV19DT1VSU0UgPSBcIk5ld1wiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX0RPTkVfVEVYVCA9IFwiRG9uZVwiO1xyXG5leHBvcnQgY29uc3QgRElBTE9HX1RJVExFX0ZFQVRVUkVEX0lNQUdFID0gXCJTZWxlY3QgZmVhdHVyZWQgaW1hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9TRVRfRkVBVFVSRURfSU1BR0UgPSBcIlNlbGVjdFwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX1NFTEVDVF9NRURJQSA9IFwiUGljayBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgRk9STV9GSUVMRF9GRUFUVVJFRF9JTUFHRSA9IFwiUHJvbW90aW9uYWwgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IEJUTl9ERUxFVEVfQ09VUlNFID0gXCJEZWxldGUgY291cnNlXCI7XHJcbmV4cG9ydCBjb25zdCBCVE5fQUREX1ZJREVPID0gXCJBZGRcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9WSURFT19ESUFMT0dfVElUTEUgPSBcIkVtYmVkIGFuIG9ubGluZSB2aWRlb1wiO1xyXG5leHBvcnQgY29uc3QgQ0FQVElPTl9WRVJJRklFRCA9IFwiVmVyaWZpZWRcIjtcclxuZXhwb3J0IGNvbnN0IENBUFRJT05fVU5WRVJJRklFRCA9IFwiTm90IHZlcmlmaWVkXCI7XHJcbmV4cG9ydCBjb25zdCBMQUJFTF9ORVdfUEFTU1dPUkQgPSBcIk5ldyBwYXNzd29yZFwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX1NBVkUgPSBcIlNhdmVcIjtcclxuZXhwb3J0IGNvbnN0IFNXSVRDSF9JU19BRE1JTiA9IFwiQWRtaW5cIjtcclxuZXhwb3J0IGNvbnN0IFNXSVRDSF9JU19DUkVBVE9SID0gXCJDcmVhdG9yXCI7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfQUNDT1VOVF9BQ1RJVkUgPSBcIkFjY291bnQgYWN0aXZlXCI7XHJcbmV4cG9ydCBjb25zdCBMQUJFTF9DT05GX1BBU1NXT1JEID0gXCJDb25maXJtIHBhc3N3b3JkXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfQkxPR19QT1NUU19TRUNUSU9OID0gXCJBcnRpY2xlc1wiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX0NPVVJTRVNfU0VDVElPTiA9IFwiQ291cnNlc1wiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19USVRMRSA9IFwiVGl0bGVcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfU1VCVElUTEUgPSBcIlN1YnRpdGxlXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX0NVUlJFTkNZX1VOSVQgPSBcIkN1cnJlbmN5IFVuaXRcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfQ1VSUkVOQ1lfSVNPX0NPREVfVEVYVCA9IFwiQ3VycmVuY3kgSVNPIENvZGVcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfTE9HTyA9IFwiQnJhbmQgTG9nb1wiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19QQUdFX0hFQURJTkcgPSBcIlNldHRpbmdzXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX0FETUlOX1NFVFRJTkdTX1NUUklQRV9TRUNSRVQgPSBcIlN0cmlwZSBTZWNyZXQgS2V5XCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX0FETUlOX1NFVFRJTkdTX1BBWVBBTF9TRUNSRVQgPSBcIlBheXBhbCBTZWNyZXQgS2V5XCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX0FETUlOX1NFVFRJTkdTX1BBWVRNX1NFQ1JFVCA9IFwiUGF5dG0gU2VjcmV0IEtleVwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19TRUNUSU9OX0dFTkVSQUwgPSBcIkdlbmVyYWxcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfU0VDVElPTl9QQVlNRU5UID0gXCJQYXltZW50XCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX0FETUlOX1NFVFRJTkdTX1BBWU1FTlRfTUVUSE9EID0gXCJQYXltZW50IE1ldGhvZFwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19TVFJJUEVfUFVCTElTSEFCTEVfS0VZX1RFWFQgPVxyXG4gIFwiU3RyaXBlIFB1Ymxpc2hhYmxlIEtleVwiO1xyXG5leHBvcnQgY29uc3QgRlJFRV9DT1NUID0gXCJGUkVFXCI7XHJcbmV4cG9ydCBjb25zdCBTSURFQkFSX1RFWFRfQ09VUlNFX0FCT1VUID0gXCJBYm91dCB0aGlzIGNvdXJzZVwiO1xyXG5leHBvcnQgY29uc3QgUkVBQ1RfQ09NUE9ORU5UX0NSQVNIRUQgPVxyXG4gIFwiV2UndmUgZW5jb3VudGVyZWQgYSBwcm9ibGVtIGluIHNob3dpbmcgdGhlIGNvbnRlbnRcIjtcclxuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0RJQUxPR19USVRMRSA9IFwiQ2hlY2tvdXRcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTU9EQUxfUEFZTUVOVF9ERVRBSUxTX0hFQURFUiA9IFwiUGF5bWVudCBkZXRhaWxzXCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01PREFMX0NPU1RfUFJFRklYID0gXCJDb3N0XCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01PREFMX1BBWV9OT1dfQlVUVE9OX0NBUFRJT04gPSBcIlBheSBub3dcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfSU5JVElBVElPTl9GQUlMRUQgPVxyXG4gIFwiUGF5bWVudCBwcm9jZXNzaW5nIGZhaWxlZC4gUGxlYXNlIGNsb3NlIHRoaXMgcG9wdXAgYW5kIHRyeSBhZ2Fpbi5cIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9XHJcbiAgXCJXZSB3ZXJlIG5vdCBhYmxlIHRvIHZlcmlmeSB5b3VyIHBheW1lbnQuIFBsZWFzZSB0cnkgYWdhaW4uXCI7XHJcbmV4cG9ydCBjb25zdCBTVFJJUEVfUFVCTElTSEFCTEVfS0VZX0VNUFRZID1cclxuICBcIlN0cmlwZSBjb25maWd1cmF0aW9uIGlzIGludmFsaWQuIFBsZWFzZSBjb250YWN0IHNpdGUgYWRtaW4uXCI7XHJcbmV4cG9ydCBjb25zdCBDQVBUSU9OX1RSWV9BR0FJTiA9IFwiVHJ5IGFnYWluXCI7XHJcbmV4cG9ydCBjb25zdCBDQVBUSU9OX0NMT1NFID0gXCJDbG9zZVwiO1xyXG5leHBvcnQgY29uc3QgTE9BRElORyA9IFwiTG9hZGluZ1wiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX05FV19MRVNTT05fVEVYVCA9IFwiTGVzc29uXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fREVMRVRFX0xFU1NPTl9URVhUID0gXCJEZWxldGVcIjtcclxuZXhwb3J0IGNvbnN0IENPVVJTRV9ERVRBSUxTX0NBUkRfSEVBREVSID0gXCJEZXRhaWxzXCI7XHJcbmV4cG9ydCBjb25zdCBEQU5HRVJfWk9ORV9IRUFERVIgPSBcIkRhbmdlciB6b25lXCI7XHJcbmV4cG9ydCBjb25zdCBEQU5HRVJfWk9ORV9ERVNDUklQVElPTiA9IFwiVGhpcyBhY3Rpb24gaXMgaXJyZXZlcnNpYmxlLlwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0NPVVJTRV9QT1BVUF9IRUFERVIgPSBcIkRlbGV0ZSBjb3Vyc2U/XCI7XHJcbmV4cG9ydCBjb25zdCBQT1BVUF9PS19BQ1RJT04gPSBcIlllc1wiO1xyXG5leHBvcnQgY29uc3QgUE9QVVBfQ0FOQ0VMX0FDVElPTiA9IFwiTm9cIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX1NFQ1RJT05fSEVBREVSID0gXCJTaWduIEluXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9TRUNUSU9OX0JVVFRPTiA9IFwiU2lnbiBpblwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fSU5TVEVBRF9CVVRUT04gPSBcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1NFQ1RJT05fSEVBREVSID0gXCJDcmVhdGUgYW4gYWNjb3VudFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1NFQ1RJT05fQlVUVE9OID0gXCJKb2luXCI7XHJcbmV4cG9ydCBjb25zdCBNRURJQV9NQU5BR0VSX1BBR0VfSEVBRElORyA9IFwiTWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9TRUFSQ0ggPSBcIlNlYXJjaFwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX0FERF9GSUxFID0gXCJTZWxlY3QgYSBmaWxlXCI7XHJcbmV4cG9ydCBjb25zdCBGSUxFX1VQTE9BRF9TVUNDRVNTID0gXCJGaWxlIHVwbG9hZGVkXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfWU9VUl9NRURJQSA9IFwiWW91ciBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX0VESVRPUl9IRUFERVIgPSBcIkxlc3NvblwiO1xyXG5leHBvcnQgY29uc3QgQkxPR19QT1NUX1NXSVRDSCA9IFwiQmxvZ1wiO1xyXG5leHBvcnQgY29uc3QgRE9XTkxPQURBQkxFX1NXSVRDSCA9IFwiRG93bmxvYWRhYmxlXCI7XHJcbmV4cG9ydCBjb25zdCBUWVBFX0RST1BET1dOID0gXCJUeXBlXCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fQ09OVEVOVF9IRUFERVIgPSBcIlRleHQgQ29udGVudFwiO1xyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9VUkxfTEFCRUwgPSBcIk1lZGlhIGNvbnRlbnRcIjtcclxuZXhwb3J0IGNvbnN0IE1FRElBX01BTkFHRVJfWU9VUl9NRURJQV9IRUFERVIgPSBcIllvdXIgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IERJQUxPR19TRUxFQ1RfQlVUVE9OID0gXCJTZWxlY3RcIjtcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9SRVFVSVJFU19FTlJPTExNRU5UID0gXCJBdmFpbGFibGUgdG8gb25seSBlbnJvbGxlZCBzdHVkZW50c1wiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0xFU1NPTl9QT1BVUF9IRUFERVIgPSBcIkRlbGV0ZSBsZXNzb25cIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX0xFU1NPTl9ERUxFVEVEID0gXCJMZXNzb24gZGVsZXRlZFwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfTEVTU09OX1NBVkVEID0gXCJMZXNzb24gZGV0YWlscyBzYXZlZFwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfQ09VUlNFX1NBVkVEID0gXCJDb3Vyc2UgZGV0YWlscyBzYXZlZFwiO1xyXG5leHBvcnQgY29uc3QgRU5ST0xMX0lOX1RIRV9DT1VSU0UgPVxyXG4gIFwiUGxlYXNlIGVucm9sbCBpbiB0aGUgY291cnNlIHRvIGFjY2VzcyB0aGlzIGxlc3Nvbi5cIjtcclxuZXhwb3J0IGNvbnN0IFVTRVJfRVJST1JfSEVBREVSID0gXCJZaWtlcyFcIjtcclxuZXhwb3J0IGNvbnN0IEVOUk9MTF9CVVRUT05fVEVYVCA9IFwiRW5yb2xsXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fREVMRVRFX01FRElBID0gXCJEZWxldGVcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9NRURJQV9QT1BVUF9IRUFERVIgPSBcIkRlbGV0ZSBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX0VESVRJTkdfTUVESUEgPSBcIkVkaXQgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9FRElUSU5HX1VTRVIgPSBcIkVkaXQgdXNlclwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX01FRElBX1BSRVZJRVcgPSBcIlByZXZpZXdcIjtcclxuZXhwb3J0IGNvbnN0IFBSRVZJRVdfUERGX0ZJTEUgPSBcIk9wZW4gaW4gYSBuZXcgdGFiXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9NRURJQV9ERUxFVEVEID0gXCJNZWRpYSBkZWxldGVkXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9NRURJQV9VUERBVEVEID0gXCJNZWRpYSBkZXRhaWxzIHVwZGF0ZWRcIjtcclxuZXhwb3J0IGNvbnN0IFBBR0VfSEVBREVSX0FMTF9DT1VSU0VTID0gXCJDb3Vyc2VzXCI7XHJcbmV4cG9ydCBjb25zdCBQQUdFX0hFQURFUl9BTExfUE9TVFMgPSBcIkFydGljbGVzXCI7XHJcbmV4cG9ydCBjb25zdCBDT1VSU0VfVFlQRV9CTE9HID0gXCJQb3N0XCI7XHJcbmV4cG9ydCBjb25zdCBDT1VSU0VfVFlQRV9DT1VSU0UgPSBcIkNvdXJzZVwiO1xyXG5leHBvcnQgY29uc3QgQ09VUlNFX0NSRUFUT1JfUFJFRklYID0gXCJCeVwiO1xyXG5leHBvcnQgY29uc3QgQ09VUlNFX0VESVRPUl9ERVNDUklQVElPTiA9IFwiRGVzY3JpcHRpb25cIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX1NFVFRJTkdTX1NBVkVEID0gXCJTZXR0aW5ncyBzYXZlZFwiO1xyXG5leHBvcnQgY29uc3QgRU5ST0xMRURfQ09VUlNFU19IRUFERVIgPSBcIkVucm9sbGVkIGNvdXJzZXNcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfQ1VTVE9NSVNBVElPTlNfU0VUVElOR19IRUFERVIgPSBcIkN1c3RvbWl6YXRpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX0NVU1RPTUlTQVRJT05TX1NFVFRJTkdfQ09ERUlOSkVDVElPTl9IRUFEID1cclxuICBcIkNvZGUgSW5qZWN0aW9uIGluIDxoZWFkPlwiO1xyXG5leHBvcnQgY29uc3QgRElTQ0FSRF9DT1VSU0VfQ0hBTkdFU19QT1BVUF9IRUFERVIgPVxyXG4gIFwiRGlzY2FyZCBjaGFuZ2VzIG1hZGUgdG8gdGhlIGNvdXJzZT9cIjtcclxuZXhwb3J0IGNvbnN0IEZFQVRVUkVEX1NFQ1RJT05fSEVBREVSID0gXCJGZWF0dXJlZCBSZXNvdXJjZXNcIjtcclxuZXhwb3J0IGNvbnN0IENBUkRfSEVBREVSX1BBR0VfTEFZT1VUID0gXCJQYWdlIExheW91dFwiO1xyXG5leHBvcnQgY29uc3QgQ0FSRF9IRUFERVJfVEhFTUUgPSBcIlRoZW1lXCI7XHJcbmV4cG9ydCBjb25zdCBDQVJEX0RFU0NSSVBUSU9OX1BBR0VfTEFZT1VUID1cclxuICBcIlVzZSB0aGUgJysnIGJ1dHRvbnMgdG8gYWRkIHlvdXIgZmF2b3JpdGUgY29tcG9uZW50cyB0byB0aGUgZGVzaXJlZCBzZWN0aW9ucyBvZiB5b3VyIHBhZ2UuXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NUE9ORU5UX1BPUFVQX0hFQURFUiA9IFwiQWRkIGNvbXBvbmVudFwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfQ0hBTkdFU19TQVZFRCA9IFwiQ2hhbmdlcyBzYXZlZFwiO1xyXG5leHBvcnQgY29uc3QgU1VCSEVBREVSX0NPVVJTRVNfU0VDVElPTiA9XHJcbiAgXCJMZWFybiBuZXcgc2tpbGxzIHdpdGggb3VyIGNhcmVmdWxseSBjcmFmdGVkIGNvdXJzZXMuXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJIRUFERVJfRkVBVFVSRURfU0VDVElPTiA9XHJcbiAgXCJIYW5kIHBpY2tlZCByZXNvdXJjZXMgYnkgdGhlIGVkaXRvcnMuXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJIRUFERVJfVEhFTUVfQUREX1RIRU1FID0gXCJJbnN0YWxsIG5ldyB0aGVtZVwiO1xyXG5leHBvcnQgY29uc3QgU1VCSEVBREVSX1RIRU1FX0FEREVEX1RIRU1FID0gXCJJbnN0YWxsZWQgdGhlbWVzXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJIRUFERVJfVEhFTUVfQUREX1RIRU1FX0lOUFVUX0xBQkVMID0gXCJUaGVtZSBFZGl0b3JcIjtcclxuZXhwb3J0IGNvbnN0IFNVQkhFQURFUl9USEVNRV9BRERfVEhFTUVfSU5QVVRfUExBQ0VIT0xERVIgPVxyXG4gIFwiUGFzdGUgdmFsaWQgSlNPTiBoZXJlXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJIRUFERVJfVEhFTUVfSU5TVEFMTEVEX1RIRU1FUyA9IFwiSW5zdGFsbGVkIHRoZW1lc1wiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX0dFVF9USEVNRVMgPSBcIkdldCBtb3JlIHRoZW1lc1wiO1xyXG5leHBvcnQgY29uc3QgRVJST1JfU05BQ0tCQVJfUFJFRklYID0gXCJFcnJvclwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX1RIRU1FX0FQUExZID0gXCJBcHBseVwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX1RIRU1FX1VOSU5TVEFMTCA9IFwiVW5pbnN0YWxsXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fVEhFTUVfSU5TVEFMTCA9IFwiSW5zdGFsbFwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX1RIRU1FX1JFTUlYID0gXCJSZW1peFwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1RIRU1FX1BPUFVQX0hFQURFUiA9IFwiVW5pbnN0YWxsIHRoZW1lXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBMWV9USEVNRV9QT1BVUF9IRUFERVIgPSBcIkFwcGx5IHRoZW1lXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1JWEVEX1RIRU1FX1BSRUZJWCA9IFwiUmVtaXhcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX1RIRU1FX0NPUElFRCA9IFwiVGhlbWUgcmVhZHkgdG8gZWRpdFwiO1xyXG5leHBvcnQgY29uc3QgTk9fVEhFTUVTX0lOU1RBTExFRCA9IFwiTm8gdGhlbWVzIGFyZSBpbnN0YWxsZWRcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX1RIRU1FX0lOU1RBTExFRCA9IFwiVGhlbWUgaW5zdGFsbGVkXCI7XHJcbmV4cG9ydCBjb25zdCBDT05TT0xFX01FU1NBR0VfVEhFTUVfSU5WQUxJRCA9XHJcbiAgXCJUaGUgYWN0aXZlIE1VSSB0aGVtZSBpcyBpbnZhbGlkLiBGYWxsaW5nIGJhY2sgdG8gdGhlIGRlZmF1bHQgdGhlbWUuXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9USEVNRV9BUFBMSUVEID0gXCJUaGVtZSBhcHBsaWVkXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9USEVNRV9VTklOU1RBTExFRCA9IFwiVGhlbWUgdW5pbnN0YWxsZWRcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9OQVZJR0FUSU9OID0gXCJNZW51c1wiO1xyXG5leHBvcnQgY29uc3QgTEFCRUxfTkFWSUdBVElPTl9MSU5LX1RFWFQgPSBcIlRleHRcIjtcclxuZXhwb3J0IGNvbnN0IExBQkVMX05BVklHQVRJT05fTElOS19ERVNUSU5BVElPTiA9IFwiTG9jYXRpb25cIjtcclxuZXhwb3J0IGNvbnN0IExJTktfRFJPUERPV04gPSBcIkNhdGVnb3J5XCI7XHJcbmV4cG9ydCBjb25zdCBBRERfTkVXX0xJTktfQlVUVE9OID0gXCJBZGQgbmV3IGxpbmtcIjtcclxuZXhwb3J0IGNvbnN0IExBQkVMX05BVklHQVRJT05fTElOS19ORVdUQUIgPSBcIk5ldyB0YWJcIjtcclxuZXhwb3J0IGNvbnN0IFdJREdFVFNfUEFHRV9IRUFERVIgPSBcIldpZGdldHNcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRTX1NISVBQSU5HX0FERFJFU1NfU0VDVElPTl9IRUFERVIgPSBcIlNoaXBwaW5nIEFkZHJlc3NcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9TRUNUSU9OX1BBWU1FTlRfQ09ORklSTUFUSU9OX1dFQkhPT0sgPVxyXG4gIFwiUGF5bWVudCBDb25maXJtYXRpb24gV2ViaG9vayBVUkxcIjtcclxuZXhwb3J0IGNvbnN0IFNVQkhFQURFUl9TRUNUSU9OX1BBWU1FTlRfQ09ORklSTUFUSU9OX1dFQkhPT0sgPVxyXG4gIFwiWW91ciBwYXltZW50IHByb2Nlc3NvciBzZW5kcyBvdXQgbm90aWZpY2F0aW9ucyBhYm91dCBwdXJjaGFzZXMuIENvdXJzZUxpdCBuZWVkcyB0aG9zZSBub3RpZmljYXRpb25zIHRvIGNvcnJlY3RseSByZWZsZWN0IHVzZXIgcHVyY2hhc2VzLiBSaWdodCBjbGljayB0aGUgZm9sbG93aW5nIGxpbmsgYW5kIGNvcHkgdGhlIGxpbmsgYWRkcmVzcy4gUGFzdGUgdGhhdCBpbnRvIHlvdXIgcGF5bWVudCBwcm9jZXNzb3IncyB3ZWJob29rIHNldHRpbmdzLlwiO1xyXG5leHBvcnQgY29uc3QgUFVSQ0hBU0VfU1RBVFVTX1BBR0VfSEVBREVSID0gXCJQdXJjaGFzZSBTdGF0dXNcIjtcclxuZXhwb3J0IGNvbnN0IE1BSU5fTUVOVV9JVEVNX0RBU0hCT0FSRCA9IFwiRGFzaGJvYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBNQUlOX01FTlVfSVRFTV9QUk9GSUxFID0gXCJQcm9maWxlXCI7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfU0VDVElPTl9NQUlOX0NPTlRFTlQgPSBcIk1haW4gQ29udGVudFwiO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1NFQ1RJT05fRk9PVEVSX0xFRlQgPSBcIkxlZnQgU2VjdGlvblwiO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1NFQ1RJT05fRk9PVEVSX1JJR0hUID0gXCJSaWdodCBTZWN0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfU0VDVElPTl9UT1AgPSBcIlRvcFwiO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1NFQ1RJT05fRk9PVEVSID0gXCJGb290ZXJcIjtcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9TRUNUSU9OX0JPVFRPTSA9IFwiQm90dG9tXCI7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfU0VDVElPTl9BU0lERSA9IFwiQXNpZGVcIjtcclxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1NUQVRVU19TVUNDRVNTID0gXCJQYXltZW50IENvbmZpcm1lZC5cIjtcclxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1NUQVRVU19TVUNDRVNTX0RFVEFJTFMgPVxyXG4gIFwiVGhhbmsgeW91LiBZb3UgY2FuIG5vdyBoZWFkIG92ZXIgdG8geW91ciBjb3Vyc2UgYW5kIHN0YXJ0IGxlYXJuaW5nLlwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1RBVFVTX0lOSVRJQVRFRCA9IFwiUGF5bWVudCBOb3QgWWV0IENvbmZpcm1lZC5cIjtcclxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1NUQVRVU19GQUlMRUQgPSBcIlBheW1lbnQgRmFpbGVkLlwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1RBVFVTX0ZBSUxFRF9ERVRBSUxTID1cclxuICBcIlRoZSBwYXltZW50IHNlcnZpY2UgcHJvdmlkZXIgd2FzIHVuYWJsZSB0byBwcm9jZXNzIHlvdXIgcGF5bWVudC4gUGxlYXNlIGdvIGJhY2sgYW5kIHRyeSBhZ2Fpbi5cIjtcclxuZXhwb3J0IGNvbnN0IFZJU0lUX0NPVVJTRV9CVVRUT04gPSBcIlZpc2l0IGNvdXJzZVwiO1xyXG5leHBvcnQgY29uc3QgVklTSVRfUE9TVF9CVVRUT04gPSBcIlZpc2l0IHBvc3RcIjtcclxuZXhwb3J0IGNvbnN0IFZFUklGWV9QQVlNRU5UX0JVVFRPTiA9IFwiUmUtY2hlY2sgUGF5bWVudCBTdGF0dXNcIjtcclxuZXhwb3J0IGNvbnN0IFBVUkNIQVNFX0lEX0hFQURFUiA9IFwiUHVyY2hhc2UgSURcIjtcclxuZXhwb3J0IGNvbnN0IFBBR0VfSEVBREVSX0ZFQVRVUkVEID0gXCJGZWF0dXJlZCBDb250ZW50XCI7XHJcbmV4cG9ydCBjb25zdCBCVE5fVklFV19BTEwgPSBcIlZpZXcgYWxsXCI7XHJcbmV4cG9ydCBjb25zdCBFTVBUWV9DT1VSU0VTX0xJU1RfQURNSU4gPVxyXG4gIFwiQ3JlYXRlIHlvdXIgZmlyc3QgY291cnNlIGJ5IGNsaWNraW5nIHRoZSArIGJ1dHRvbiBvbiB0aGUgdG9wIHJpZ2h0LlwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX1JFU0VUX1BBU1NXT1JEID0gXCJSZXNldCBwYXNzd29yZFwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX0RFU0lHTiA9IFwiQXBwZWFyYW5jZVwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX1lPVVJfUFJPRklMRSA9IFwiWW91ciBQcm9maWxlXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX1BBR0VfTUVTU0FHRV9OT1RfTE9HR0VEX0lOID0gXCJ0byBzZWUgeW91ciBwcm9maWxlLlwiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9QQUdFX0hFQURFUiA9IFwiUHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9NWV9DT1VSU0VTID0gXCJNeSBDb3Vyc2VzXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX1BBR0VfTk9UX0VOUk9MTEVEID0gXCJZb3UgYXJlIG5vdCBlbnJvbGxlZCBpbiBhbnkgY291cnNlLlwiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9QQUdFX0JST1dTRV9DT1VSU0VTX1RFWFQgPSBcIkJyb3dzZSBvdXIgY291cnNlc1wiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9TRUNUSU9OX0RFVEFJTFNfTkFNRSA9IFwiTmFtZVwiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9TRUNUSU9OX0RFVEFJTFNfRU1BSUwgPSBcIkVtYWlsXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX1NFQ1RJT05fREVUQUlMU19CSU8gPSBcIkJpb1wiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9TRUNUSU9OX0RFVEFJTFNfQklPX0VNUFRZID1cclxuICBcIlRoZSB1c2VyIGhhcyBub3QgZmlsbGVkIHRoZSBiaW8uXCI7XHJcbiIsImltcG9ydCB7IHdpZGdldHMgfSBmcm9tIFwiLi4vY291cnNlbGl0LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aWRnZXRzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IHZhciBNeUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICAgIHNpdGVJbmZvOiB7fSxcclxuICAgIHByb2ZpbGU6IHtcclxuICAgICAgICBpc0NyZWF0b3I6IGZhbHNlLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgZmV0Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgYXV0aFByb3A6IHt9LFxyXG4gICAgbmF2aWdhdGlvbjoge30sXHJcbiAgICBsYXlvdXQ6IHt9XHJcblxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbnRleHRcclxuXHJcbmV4cG9ydCBjb25zdCBNeVByb3ZpZGVyID0gKGNoaWxkcmVuKSA9PiB7XHJcbiAgICByZXR1cm4gPE15Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2hpbGRyZW59IC8+XHJcbn0iLCJpbXBvcnQgYnV0dG9uZG93biBmcm9tIFwiQGNvdXJzZWxpdC93aWRnZXQtYnV0dG9uZG93blwiO1xyXG5pbXBvcnQgQ29tbW9uV2lkZ2V0cyBmcm9tIFwiQGNvdXJzZWxpdC9jb21tb24td2lkZ2V0c1wiO1xyXG5cclxuY29uc3QgZ2V0QWxsV2lkZ2V0cyA9ICgpID0+IHtcclxuICBjb25zdCB3aWRnZXRzID0ge307XHJcblxyXG4gIC8vIEFkZCBjb21tb24gd2lkZ2V0cyB0byBDb3Vyc2VMaXRcclxuICBmb3IgKGNvbnN0IHdpZGdldCBvZiBDb21tb25XaWRnZXRzKSB7XHJcbiAgICB3aWRnZXRzW3dpZGdldC5tZXRhZGF0YS5uYW1lXSA9IHdpZGdldDtcclxuICB9XHJcblxyXG4gIC8vIEFkZGl0aW9uYWwgd2lkZ2V0cyBhcmUgYWRkZWQgaGVyZVxyXG4gIHdpZGdldHNbYnV0dG9uZG93bi5tZXRhZGF0YS5uYW1lXSA9IGJ1dHRvbmRvd247XHJcblxyXG4gIHJldHVybiB3aWRnZXRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpZGdldHMgPSBnZXRBbGxXaWRnZXRzKCk7XHJcbiIsIi8qKlxyXG4gKiBBIHV0aWxpdHkgY2xhc3MgdG8gbWFrZSBuZXR3b3JrIGNhbGxzIGFuZCBpbnRlcmNlcHQgdGhlIHJlc3BvbnNlLiBJdCBpc1xyXG4gKiB1c2VmdWwgZm9yIGNhc2VzIGxpa2UgcmVkaXJlY3Rpb24gdG8gdGhlIGxvZ2luIHBhZ2UgaWYgdGhlIHNlcnZlciByZXR1cm5lZFxyXG4gKiBhIDQwMSBldGMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEZldGNoID0gZnVuY3Rpb24gKHVybCwgcGF5bG9hZCwgdG9rZW4sIGlzR3JhcGhRTEVuZHBvaW50KSB7XHJcbiAgdGhpcy51cmwgPSB1cmw7XHJcbiAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcclxuICB0aGlzLnRva2VuID0gdG9rZW47XHJcbiAgdGhpcy5pc0dyYXBoUUxFbmRwb2ludCA9IGlzR3JhcGhRTEVuZHBvaW50O1xyXG59O1xyXG5cclxuRmV0Y2gucHJvdG90eXBlLmV4ZWMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZmV0Y2hPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHt9LFxyXG4gIH07XHJcblxyXG4gIGlmICh0aGlzLnRva2VuKSB7XHJcbiAgICBmZXRjaE9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3RoaXMudG9rZW59YDtcclxuICB9XHJcblxyXG4gIGlmICh0aGlzLmlzR3JhcGhRTEVuZHBvaW50KSB7XHJcbiAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG4gICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5OiB0aGlzLnBheWxvYWQgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gdGhpcy5wYXlsb2FkO1xyXG4gIH1cclxuXHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIGZldGNoT3B0aW9ucyk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgUm91dGVyLnB1c2goXCIvbG9nb3V0XCIpO1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvcnNbMF0ubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcy5pc0dyYXBoUUxFbmRwb2ludCA/IHJlc3BvbnNlLmRhdGEgOiByZXNwb25zZTtcclxufTtcclxuXHJcbmNvbnN0IEZldGNoQnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0VXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRQYXlsb2FkOiBmdW5jdGlvbiAocGF5bG9hZCkge1xyXG4gICAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRBdXRoVG9rZW46IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICB0aGlzLnRva2VuID0gdG9rZW47XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldElzR3JhcGhRTEVuZHBvaW50OiBmdW5jdGlvbiAoaXNHcmFwaFFMRW5kcG9pbnQpIHtcclxuICAgICAgdGhpcy5pc0dyYXBoUUxFbmRwb2ludCA9IGlzR3JhcGhRTEVuZHBvaW50O1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBidWlsZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gbmV3IEZldGNoKFxyXG4gICAgICAgIHRoaXMudXJsLFxyXG4gICAgICAgIHRoaXMucGF5bG9hZCxcclxuICAgICAgICB0aGlzLnRva2VuLFxyXG4gICAgICAgIHRoaXMuaXNHcmFwaFFMRW5kcG9pbnRcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZldGNoQnVpbGRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBjb21wb25lbnRzX2xpYnJhcnlfMSA9IHJlcXVpcmUoXCJAY291cnNlbGl0L2NvbXBvbmVudHMtbGlicmFyeVwiKTtcbnZhciByZWFjdF9yZWR1eF8xID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTtcbnZhciBBZG1pbldpZGdldCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBmZXRjaEJ1aWxkZXIgPSBwcm9wcy5mZXRjaEJ1aWxkZXIsIGRpc3BhdGNoID0gcHJvcHMuZGlzcGF0Y2gsIG5hbWUgPSBwcm9wcy5uYW1lLCBhdXRoID0gcHJvcHMuYXV0aDtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIHRleHQ6IGNvbXBvbmVudHNfbGlicmFyeV8xLlJpY2hUZXh0LmVtcHR5U3RhdGUoKSxcbiAgICB9KSwgc2V0dGluZ3MgPSBfYVswXSwgc2V0U2V0dGluZ3MgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZShzZXR0aW5ncyksIG5ld1NldHRpbmdzID0gX2JbMF0sIHNldE5ld1NldHRpbmdzID0gX2JbMV07XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0U2V0dGluZ3MoKTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIGdldFNldHRpbmdzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjb21wb25lbnRzX2xpYnJhcnlfMS5XaWRnZXRIZWxwZXJzLmdldFdpZGdldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldE5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEJ1aWxkZXI6IGZldGNoQnVpbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25OZXdTZXR0aW5nc1JlY2VpdmVkKHNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciBvbk5ld1NldHRpbmdzUmVjZWl2ZWQgPSBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgICAgICAgdmFyIG5ld1NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIHtcbiAgICAgICAgICAgIHRleHQ6IHNldHRpbmdzLnRleHRcbiAgICAgICAgICAgICAgICA/IGNvbXBvbmVudHNfbGlicmFyeV8xLlJpY2hUZXh0Lmh5ZHJhdGUoeyBkYXRhOiBzZXR0aW5ncy50ZXh0IH0pXG4gICAgICAgICAgICAgICAgOiBjb21wb25lbnRzX2xpYnJhcnlfMS5SaWNoVGV4dC5lbXB0eVN0YXRlKCksXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTZXR0aW5ncyhuZXdTZXR0aW5ncyk7XG4gICAgICAgIHNldE5ld1NldHRpbmdzKG5ld1NldHRpbmdzKTtcbiAgICB9O1xuICAgIHZhciBzYXZlU2V0dGluZ3MgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNvbXBvbmVudHNfbGlicmFyeV8xLldpZGdldEhlbHBlcnMuc2F2ZVdpZGdldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXROYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NldHRpbmdzOiBPYmplY3QuYXNzaWduKHt9LCBuZXdTZXR0aW5ncywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb21wb25lbnRzX2xpYnJhcnlfMS5SaWNoVGV4dC5zdHJpbmdpZnkobmV3U2V0dGluZ3MudGV4dCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hCdWlsZGVyOiBmZXRjaEJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogYXV0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG9uTmV3U2V0dGluZ3NSZWNlaXZlZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciBpc0RpcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MgIT09IG5ld1NldHRpbmdzO1xuICAgIH07XG4gICAgdmFyIG9uQ2hhbmdlRGF0YSA9IGZ1bmN0aW9uIChlZGl0b3JTdGF0ZSkge1xuICAgICAgICBzZXROZXdTZXR0aW5ncyhPYmplY3QuYXNzaWduKHt9LCBuZXdTZXR0aW5ncywge1xuICAgICAgICAgICAgdGV4dDogZWRpdG9yU3RhdGUsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJjb2x1bW5cIiwgc3BhY2luZzogMiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5HcmlkLCB7IGl0ZW06IHRydWUsIHhzOiB0cnVlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiaDZcIiwgY29sb3I6IFwidGV4dFNlY29uZGFyeVwiIH0sIFwiQ29tcG9zZVwiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgaXRlbTogdHJ1ZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBvblN1Ym1pdDogc2F2ZVNldHRpbmdzIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnRzX2xpYnJhcnlfMS5SaWNoVGV4dCwgeyBpbml0aWFsQ29udGVudFN0YXRlOiBzZXR0aW5ncy50ZXh0LCBvbkNoYW5nZTogb25DaGFuZ2VEYXRhIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlNhdmVcIiwgZGlzYWJsZWQ6ICFpc0RpcnR5KCkgfSwgXCJTYXZlXCIpKSkpKTtcbn07XG52YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiAoe1xuICAgIGF1dGg6IHN0YXRlLmF1dGgsXG59KTsgfTtcbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiAoZGlzcGF0Y2gpIHsgcmV0dXJuICh7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxufSk7IH07XG5leHBvcnRzLmRlZmF1bHQgPSByZWFjdF9yZWR1eF8xLmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkbWluV2lkZ2V0KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgY29tcG9uZW50c19saWJyYXJ5XzEgPSByZXF1aXJlKFwiQGNvdXJzZWxpdC9jb21wb25lbnRzLWxpYnJhcnlcIik7XG52YXIgcmVhY3RfcmVkdXhfMSA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTtcbnZhciB1c2VTdHlsZXMgPSBzdHlsZXNfMS5tYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkgeyByZXR1cm4gKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxufSk7IH0pO1xudmFyIFdpZGdldCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBmZXRjaEJ1aWxkZXIgPSBwcm9wcy5mZXRjaEJ1aWxkZXIsIGRpc3BhdGNoID0gcHJvcHMuZGlzcGF0Y2gsIG5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgdGV4dDogY29tcG9uZW50c19saWJyYXJ5XzEuUmljaFRleHQuZW1wdHlTdGF0ZSgpLFxuICAgIH0pLCBzZXR0aW5ncyA9IF9hWzBdLCBzZXRTZXR0aW5ncyA9IF9hWzFdO1xuICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0U2V0dGluZ3MoKTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIGdldFNldHRpbmdzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBjb21wb25lbnRzX2xpYnJhcnlfMS5XaWRnZXRIZWxwZXJzLmdldFdpZGdldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldE5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEJ1aWxkZXI6IGZldGNoQnVpbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHlkcmF0ZUFuZFNldFNldHRpbmdzKHNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciBoeWRyYXRlQW5kU2V0U2V0dGluZ3MgPSBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgICAgICAgdmFyIGh5ZHJhdGVkVGV4dCA9IHNldHRpbmdzLnRleHRcbiAgICAgICAgICAgID8gY29tcG9uZW50c19saWJyYXJ5XzEuUmljaFRleHQuaHlkcmF0ZSh7IGRhdGE6IHNldHRpbmdzLnRleHQgfSlcbiAgICAgICAgICAgIDogY29tcG9uZW50c19saWJyYXJ5XzEuUmljaFRleHQuZW1wdHlTdGF0ZSgpO1xuICAgICAgICBzZXRTZXR0aW5ncyhPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncywge1xuICAgICAgICAgICAgdGV4dDogaHlkcmF0ZWRUZXh0LFxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IHRydWUsIGNsYXNzTmFtZTogY2xhc3Nlcy5jb250YWluZXIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnRzX2xpYnJhcnlfMS5SaWNoVGV4dCwgeyBpbml0aWFsQ29udGVudFN0YXRlOiBzZXR0aW5ncy50ZXh0LCByZWFkT25seTogdHJ1ZSB9KSkpO1xufTtcbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiAoZGlzcGF0Y2gpIHsgcmV0dXJuICh7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxufSk7IH07XG5leHBvcnRzLmRlZmF1bHQgPSByZWFjdF9yZWR1eF8xLmNvbm5lY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHt9KTsgfSwgbWFwRGlzcGF0Y2hUb1Byb3BzKShXaWRnZXQpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWRtaW5XaWRnZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9BZG1pbldpZGdldFwiKSk7XG52YXIgbWV0YWRhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tZXRhZGF0YVwiKSk7XG52YXIgV2lkZ2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vV2lkZ2V0XCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBtZXRhZGF0YTogbWV0YWRhdGFfMS5kZWZhdWx0LFxuICAgIHdpZGdldDogV2lkZ2V0XzEuZGVmYXVsdCxcbiAgICBhZG1pbldpZGdldDogQWRtaW5XaWRnZXRfMS5kZWZhdWx0LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6IFwiYWJvdXRcIixcbiAgICBkaXNwbGF5TmFtZTogXCJBYm91dFwiLFxuICAgIGNvbXBhdGlibGVXaXRoOiBbXCJ0b3BcIiwgXCJhc2lkZVwiLCBcImJvdHRvbVwiLCBcImZvb3RlckxlZnRcIiwgXCJmb290ZXJSaWdodFwiXSxcbiAgICBleGNsdWRlRnJvbVBhdGhzOiBbXCIvbG9naW5cIl0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBjb21wb25lbnRzX2xpYnJhcnlfMSA9IHJlcXVpcmUoXCJAY291cnNlbGl0L2NvbXBvbmVudHMtbGlicmFyeVwiKTtcbnZhciByZWFjdF9yZWR1eF8xID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTtcbnZhciBBZG1pbldpZGdldCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBuYW1lID0gcHJvcHMubmFtZSwgZmV0Y2hCdWlsZGVyID0gcHJvcHMuZmV0Y2hCdWlsZGVyLCBhdXRoID0gcHJvcHMuYXV0aCwgZGlzcGF0Y2ggPSBwcm9wcy5kaXNwYXRjaDtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJcIixcbiAgICB9KSwgc2V0dGluZ3MgPSBfYVswXSwgc2V0U2V0dGluZ3MgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZShzZXR0aW5ncyksIG5ld1NldHRpbmdzID0gX2JbMF0sIHNldE5ld1NldHRpbmdzID0gX2JbMV07XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0U2V0dGluZ3MoKTtcbiAgICB9LCBbbmFtZV0pO1xuICAgIHZhciBnZXRTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZXR0aW5ncztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgY29tcG9uZW50c19saWJyYXJ5XzEuV2lkZ2V0SGVscGVycy5nZXRXaWRnZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXROYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hCdWlsZGVyOiBmZXRjaEJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV3U2V0dGluZ3NSZWNlaXZlZChzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25OZXdTZXR0aW5nc1JlY2VpdmVkID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gICAgICAgIHNldFNldHRpbmdzKHNldHRpbmdzKTtcbiAgICAgICAgc2V0TmV3U2V0dGluZ3Moc2V0dGluZ3MpO1xuICAgIH07XG4gICAgdmFyIHNhdmVTZXR0aW5ncyA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY29tcG9uZW50c19saWJyYXJ5XzEuV2lkZ2V0SGVscGVycy5zYXZlV2lkZ2V0U2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldE5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2V0dGluZ3M6IG5ld1NldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoQnVpbGRlcjogZmV0Y2hCdWlsZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IGF1dGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBvbk5ld1NldHRpbmdzUmVjZWl2ZWQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgb25DaGFuZ2VEYXRhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzZXROZXdTZXR0aW5ncyhPYmplY3QuYXNzaWduKHt9LCBuZXdTZXR0aW5ncywgKF9hID0ge30sXG4gICAgICAgICAgICBfYVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgX2EpKSk7XG4gICAgfTtcbiAgICB2YXIgaXNEaXJ0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzICE9PSBuZXdTZXR0aW5ncztcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJjb2x1bW5cIiwgc3BhY2luZzogMiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5HcmlkLCB7IGl0ZW06IHRydWUsIHhzOiB0cnVlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5UeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6IFwiYm9keTFcIiB9LCBcIkRpc3BsYXkgZmVhdHVyZWQgaXRlbXMgb24gdGhlIHRvcCBzZWN0aW9uIG9mIHRoZSBsYW5kaW5nIHBhZ2UuXCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBpdGVtOiB0cnVlLCB4czogdHJ1ZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg2XCIgfSwgXCJTZXR0aW5nc1wiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgaXRlbTogdHJ1ZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBvblN1Ym1pdDogc2F2ZVNldHRpbmdzIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuVGV4dEZpZWxkLCB7IHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgbGFiZWw6IFwiU2VjdGlvbiBUaXRsZVwiLCBmdWxsV2lkdGg6IHRydWUsIG1hcmdpbjogXCJub3JtYWxcIiwgbmFtZTogXCJ0aXRsZVwiLCB2YWx1ZTogbmV3U2V0dGluZ3MudGl0bGUgfHwgXCJcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlRGF0YSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5UZXh0RmllbGQsIHsgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBsYWJlbDogXCJTZWN0aW9uIFRpdGxlXCIsIGZ1bGxXaWR0aDogdHJ1ZSwgbWFyZ2luOiBcIm5vcm1hbFwiLCBuYW1lOiBcInN1YnRpdGxlXCIsIHZhbHVlOiBuZXdTZXR0aW5ncy5zdWJ0aXRsZSB8fCBcIlwiLCBvbkNoYW5nZTogb25DaGFuZ2VEYXRhIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLlRleHRGaWVsZCwgeyB2YXJpYW50OiBcIm91dGxpbmVkXCIsIGxhYmVsOiBcIkJhY2tncm91bmQgY29sb3JcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgdGhlIGNvbG9yJ3MgSEVYIGNvZGVcIiwgZnVsbFdpZHRoOiB0cnVlLCBtYXJnaW46IFwibm9ybWFsXCIsIG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsIHZhbHVlOiBuZXdTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgfHwgXCJcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlRGF0YSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5CdXR0b24sIHsgdmFyaWFudDogXCJjb250YWluZWRcIiwgY29sb3I6IFwicHJpbWFyeVwiLCB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJTYXZlXCIsIGRpc2FibGVkOiAhaXNEaXJ0eSgpIH0sIFwiU2F2ZVwiKSkpKSk7XG59O1xudmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gKHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoLFxufSk7IH07XG52YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZnVuY3Rpb24gKGRpc3BhdGNoKSB7IHJldHVybiAoe1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbn0pOyB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfcmVkdXhfMS5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZG1pbldpZGdldCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgbGlua18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJuZXh0L2xpbmtcIikpO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpO1xudmFyIGNvbXBvbmVudHNfbGlicmFyeV8xID0gcmVxdWlyZShcIkBjb3Vyc2VsaXQvY29tcG9uZW50cy1saWJyYXJ5XCIpO1xudmFyIHVzZVN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3R5bGVzXzEubWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHsgcmV0dXJuICh7XG4gICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgfSxcbiAgICAgICAgZmVhdHVyZWRJbWFnZToge1xuICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgICAgICB9LFxuICAgICAgICBjYXJkOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxLFxuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NjY2NcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTsgfSk7XG59O1xudmFyIEl0ZW0gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYXBwVXRpbGl0aWVzID0gcHJvcHMuYXBwVXRpbGl0aWVzLCBhcHBDb25maWcgPSBwcm9wcy5hcHBDb25maWc7XG4gICAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKSgpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBpdGVtOiB0cnVlLCB4czogMTIsIG1kOiA0IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlua18xLmRlZmF1bHQsIHsgaHJlZjogXCIvXCIgKyBhcHBDb25maWcuVVJMX0VYVEVOVElPTl9DT1VSU0VTICsgXCIvW2lkXS9bc2x1Z11cIiwgYXM6IFwiL1wiICsgYXBwQ29uZmlnLlVSTF9FWFRFTlRJT05fQ09VUlNFUyArIFwiL1wiICsgcHJvcHMuY291cnNlLmNvdXJzZUlkICsgXCIvXCIgKyBwcm9wcy5jb3Vyc2Uuc2x1ZyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMubGluayB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50c19saWJyYXJ5XzEuQ2FyZCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBpdGVtOiB0cnVlLCBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJjb2x1bW5cIiwgY29tcG9uZW50OiBcImFydGljbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY291cnNlLmZlYXR1cmVkSW1hZ2UgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgaXRlbTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGFwcFV0aWxpdGllcy5mb3JtdWxhdGVNZWRpYVVybChhcHBDb25maWcuQkFDS0VORCwgcHJvcHMuY291cnNlLmZlYXR1cmVkSW1hZ2UpLCBjbGFzc05hbWU6IGNsYXNzZXMuZmVhdHVyZWRJbWFnZSB9KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBpdGVtOiB0cnVlLCBjb250YWluZXI6IHRydWUsIGNsYXNzTmFtZTogY2xhc3Nlcy50aXRsZSwganVzdGlmeTogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5HcmlkLCB7IGl0ZW06IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImg1XCIgfSwgcHJvcHMuY291cnNlLnRpdGxlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBpdGVtOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50c19saWJyYXJ5XzEuUHJpY2VUYWcsIHsgY29zdDogcHJvcHMuY291cnNlLmNvc3QsIGZyZWVDb3N0Q2FwdGlvbjogXCJGUkVFXCIgfSkpKSkpKSkpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBJdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTtcbnZhciBJdGVtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vSXRlbVwiKSk7XG52YXIgc3R5bGVzXzEgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTtcbnZhciByZWFjdF9yZWR1eF8xID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xudmFyIGNvbXBvbmVudHNfbGlicmFyeV8xID0gcmVxdWlyZShcIkBjb3Vyc2VsaXQvY29tcG9uZW50cy1saWJyYXJ5XCIpO1xudmFyIGxpbmtfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibmV4dC9saW5rXCIpKTtcbnZhciB1c2VTdHlsZXMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gX2EuYmFja2dyb3VuZENvbG9yO1xuICAgIHJldHVybiBzdHlsZXNfMS5tYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBjb250ZW50OiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildID0ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX2EucGFkZGluZ1RvcCA9IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgICAgICAgICAgX2EubWFyZ2luQm90dG9tID0gdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgICAgICBfYS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZENvbG9yIHx8IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgIF9hKSxcbiAgICAgICAgICAgIGhlYWRlcjogKF9iID0ge30sXG4gICAgICAgICAgICAgICAgX2JbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfYi5tYXJnaW5Cb3R0b20gPSB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgICAgIF9iKSxcbiAgICAgICAgICAgIGhlYWRlclRvcDoge1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWxsVG9BY3Rpb246IChfYyA9IHt9LFxuICAgICAgICAgICAgICAgIF9jW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildID0ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX2MubWFyZ2luQm90dG9tID0gdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgICAgICAgICBfYyksXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbnZhciBXaWRnZXQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgZmV0Y2hCdWlsZGVyID0gcHJvcHMuZmV0Y2hCdWlsZGVyLCB1dGlsaXRpZXMgPSBwcm9wcy51dGlsaXRpZXMsIGNvbmZpZyA9IHByb3BzLmNvbmZpZywgZGlzcGF0Y2ggPSBwcm9wcy5kaXNwYXRjaCwgbmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdmFyIF9hID0gUmVhY3QudXNlU3RhdGUoW10pLCBwb3N0cyA9IF9hWzBdLCBzZXRQb3N0cyA9IF9hWzFdO1xuICAgIHZhciBwb3N0c09mZnNldCA9IFJlYWN0LnVzZVN0YXRlKDEpWzBdO1xuICAgIHZhciBCVE5fTE9BRF9NT1JFID0gXCJWaWV3IGFsbFwiO1xuICAgIHZhciBfYiA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIlwiLFxuICAgIH0pLCBzZXR0aW5ncyA9IF9iWzBdLCBzZXRTZXR0aW5ncyA9IF9iWzFdO1xuICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKHNldHRpbmdzKSgpO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldFNldHRpbmdzKCk7XG4gICAgICAgIGdldFBvc3RzKCk7XG4gICAgfSwgW3Bvc3RzT2Zmc2V0XSk7XG4gICAgdmFyIGdldFBvc3RzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXJ5LCBmZXRjaCwgcmVzcG9uc2UsIGVycl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IFwiXFxuICAgIHF1ZXJ5IHtcXG4gICAgICBjb3Vyc2VzOiBnZXRDb3Vyc2VzKG9mZnNldDogMSwgb25seVNob3dGZWF0dXJlZDogdHJ1ZSkge1xcbiAgICAgICAgaWQsXFxuICAgICAgICB0aXRsZSxcXG4gICAgICAgIGNvc3QsXFxuICAgICAgICBmZWF0dXJlZEltYWdlLFxcbiAgICAgICAgc2x1ZyxcXG4gICAgICAgIGNvdXJzZUlkXFxuICAgICAgfVxcbiAgICB9XFxuICAgIFwiO1xuICAgICAgICAgICAgICAgICAgICBmZXRjaCA9IGZldGNoQnVpbGRlci5zZXRQYXlsb2FkKHF1ZXJ5KS5idWlsZCgpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIk5FVFdPUktfQUNUSU9OXCIsIGZsYWc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoLmV4ZWMoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvdXJzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKF9fc3ByZWFkQXJyYXlzKHBvc3RzLCByZXNwb25zZS5jb3Vyc2VzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTkVUV09SS19BQ1RJT05cIiwgZmxhZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHZhciBnZXRTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZXR0aW5ncztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgY29tcG9uZW50c19saWJyYXJ5XzEuV2lkZ2V0SGVscGVycy5nZXRXaWRnZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXROYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hCdWlsZGVyOiBmZXRjaEJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgcmV0dXJuIHBvc3RzLmxlbmd0aCA+IDAgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBpdGVtOiB0cnVlLCB4czogMTIsIGNsYXNzTmFtZTogY2xhc3Nlcy5jb250ZW50IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBjb21wb25lbnQ6IFwic2VjdGlvblwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5HcmlkLCB7IGl0ZW06IHRydWUsIGNvbnRhaW5lcjogdHJ1ZSwgY2xhc3NOYW1lOiBjbGFzc2VzLmhlYWRlciB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IDEyLCBjbGFzc05hbWU6IGNsYXNzZXMuaGVhZGVyVG9wIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoMlwiIH0sIHNldHRpbmdzLnRpdGxlKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBpdGVtOiB0cnVlLCB4czogMTIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImJvZHkxXCIsIGNvbG9yOiBcInRleHRTZWNvbmRhcnlcIiB9LCBzZXR0aW5ncy5zdWJ0aXRsZSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgaXRlbTogdHJ1ZSwgY29udGFpbmVyOiB0cnVlLCB4czogMTIgfSwgcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0LCBpbmRleCkgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbV8xLmRlZmF1bHQsIHsga2V5OiBpbmRleCwgYXBwVXRpbGl0aWVzOiB1dGlsaXRpZXMsIGFwcENvbmZpZzogY29uZmlnLCBjb3Vyc2U6IHBvc3QgfSkpOyB9KSksXG4gICAgICAgICAgICBwb3N0cy5sZW5ndGggPiAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5HcmlkLCB7IGl0ZW06IHRydWUsIHhzOiAxMiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBkaXNhYmxlRWxldmF0aW9uOiB0cnVlLCBjbGFzc05hbWU6IGNsYXNzZXMuY2FsbFRvQWN0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlua18xLmRlZmF1bHQsIHsgaHJlZjogXCIvZmVhdHVyZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMubGluayB9LCBCVE5fTE9BRF9NT1JFKSkpKSkpKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xufTtcbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiAoZGlzcGF0Y2gpIHsgcmV0dXJuICh7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxufSk7IH07XG5leHBvcnRzLmRlZmF1bHQgPSByZWFjdF9yZWR1eF8xLmNvbm5lY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHt9KTsgfSwgbWFwRGlzcGF0Y2hUb1Byb3BzKShXaWRnZXQpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWRtaW5XaWRnZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9BZG1pbldpZGdldFwiKSk7XG52YXIgbWV0YWRhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tZXRhZGF0YVwiKSk7XG52YXIgV2lkZ2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vV2lkZ2V0XCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB3aWRnZXQ6IFdpZGdldF8xLmRlZmF1bHQsXG4gICAgYWRtaW5XaWRnZXQ6IEFkbWluV2lkZ2V0XzEuZGVmYXVsdCxcbiAgICBtZXRhZGF0YTogbWV0YWRhdGFfMS5kZWZhdWx0LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6IFwiZmVhdHVyZWQtY29udGVudFwiLFxuICAgIGRpc3BsYXlOYW1lOiBcIkZlYXR1cmVkIENvbnRlbnRcIixcbiAgICBjb21wYXRpYmxlV2l0aDogW1widG9wXCJdLFxuICAgIGljb246IFwiXCIsXG4gICAgZXhjbHVkZUZyb21QYXRoczogW1wiL3Bvc3QvW2lkXS9bc2x1Z11cIiwgXCIvbG9naW5cIiwgXCIvY291cnNlL1tpZF0vW3NsdWddXCJdLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9yZWR1eF8xID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTtcbnZhciBzdHlsZXNfMSA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpO1xudmFyIHVzZVN0eWxlcyA9IGZ1bmN0aW9uIChzZWN0aW9uTmFtZSkge1xuICAgIHJldHVybiBzdHlsZXNfMS5tYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgY29udGFpbmVyOiAoX2EgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogc2VjdGlvbk5hbWUgPT09IFwiZm9vdGVyUmlnaHRcIiA/IFwiZW5kXCIgOiBcInN0YXJ0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF9hW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX2EpLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG52YXIgV2lkZ2V0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIHNpdGVJbmZvID0gcHJvcHMuc2l0ZUluZm8sIHNlY3Rpb24gPSBwcm9wcy5zZWN0aW9uO1xuICAgIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKHNlY3Rpb24pKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KGNvcmVfMS5HcmlkLCB7IGl0ZW06IHRydWUsIHhzOiB0cnVlLCBjbGFzc05hbWU6IGNsYXNzZXMuY29udGFpbmVyIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLlR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJoNVwiIH0sIHNpdGVJbmZvLnRpdGxlKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcInN1YnRpdGxlMVwiIH0sIHNpdGVJbmZvLnN1YnRpdGxlKSkpO1xufTtcbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuICh7XG4gICAgc2l0ZUluZm86IHN0YXRlLnNpdGVpbmZvLFxufSk7IH07XG5leHBvcnRzLmRlZmF1bHQgPSByZWFjdF9yZWR1eF8xLmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShXaWRnZXQpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWV0YWRhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tZXRhZGF0YVwiKSk7XG52YXIgV2lkZ2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vV2lkZ2V0XCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB3aWRnZXQ6IFdpZGdldF8xLmRlZmF1bHQsXG4gICAgbWV0YWRhdGE6IG1ldGFkYXRhXzEuZGVmYXVsdCxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBuYW1lOiBcImZvb3Rlci1icmFuZGluZ1wiLFxuICAgIGRpc3BsYXlOYW1lOiBcIkJyYW5kaW5nXCIsXG4gICAgY29tcGF0aWJsZVdpdGg6IFtcImZvb3RlckxlZnRcIiwgXCJmb290ZXJSaWdodFwiXSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVhY3RfcmVkdXhfMSA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7XG52YXIgc3R5bGVzXzEgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTtcbnZhciBsaW5rXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5leHQvbGlua1wiKSk7XG52YXIgdXNlU3R5bGVzID0gZnVuY3Rpb24gKHNlY3Rpb25OYW1lKSB7XG4gICAgcmV0dXJuIHN0eWxlc18xLm1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3Q6IHtcbiAgICAgICAgICAgICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlua0NvbnRhaW5lcjogKF9hID0ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHNlY3Rpb25OYW1lID09PSBcImZvb3RlclJpZ2h0XCIgPyBcImVuZFwiIDogXCJzdGFydFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfYVt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildID0ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX2EpLFxuICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbnZhciBXaWRnZXQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgc2VjdGlvbiA9IHByb3BzLnNlY3Rpb247XG4gICAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoc2VjdGlvbikoKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IHRydWUsIGNsYXNzTmFtZTogY2xhc3Nlcy5jb250YWluZXIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuR3JpZCwgeyBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJyb3dcIiwganVzdGlmeTogXCJzcGFjZS1iZXR3ZWVuXCIsIGNvbXBvbmVudDogXCJ1bFwiLCBjbGFzc05hbWU6IGNsYXNzZXMubGlzdCB9LCBwcm9wcy5uYXZpZ2F0aW9uLm1hcChmdW5jdGlvbiAobGluaykgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29yZV8xLkdyaWQsIHsgaXRlbTogdHJ1ZSwgY29tcG9uZW50OiBcImxpXCIsIHhzOiAxMiwgc206IDIsIGtleTogbGluay50ZXh0LCBjbGFzc05hbWU6IGNsYXNzZXMubGlua0NvbnRhaW5lciB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlua18xLmRlZmF1bHQsIHsgaHJlZjogbGluay5kZXN0aW5hdGlvbiwga2V5OiBsaW5rLnRleHQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMubGluayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChjb3JlXzEuVHlwb2dyYXBoeSwgeyB2YXJpYW50OiBcImJvZHkyXCIgfSwgbGluay50ZXh0KSkpKSk7IH0pKSkpKTtcbn07XG52YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiAoe1xuICAgIG5hdmlnYXRpb246IHN0YXRlLm5hdmlnYXRpb24uZmlsdGVyKGZ1bmN0aW9uIChsaW5rKSB7IHJldHVybiBsaW5rLmNhdGVnb3J5ID09PSBcImZvb3RlclwiOyB9KSxcbn0pOyB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RfcmVkdXhfMS5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoV2lkZ2V0KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG1ldGFkYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWV0YWRhdGFcIikpO1xudmFyIFdpZGdldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1dpZGdldFwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgd2lkZ2V0OiBXaWRnZXRfMS5kZWZhdWx0LFxuICAgIG1ldGFkYXRhOiBtZXRhZGF0YV8xLmRlZmF1bHQsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbmFtZTogXCJmb290ZXItbWVudVwiLFxuICAgIGRpc3BsYXlOYW1lOiBcIkZvb3RlciBNZW51XCIsXG4gICAgY29tcGF0aWJsZVdpdGg6IFtcImZvb3RlckxlZnRcIiwgXCJmb290ZXJSaWdodFwiXSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYm91dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0Fib3V0XCIpKTtcbnZhciBGZWF0dXJlZENvbnRlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9GZWF0dXJlZENvbnRlbnRcIikpO1xudmFyIEZvb3RlckJyYW5kaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRm9vdGVyQnJhbmRpbmdcIikpO1xudmFyIEZvb3Rlck1lbnVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Gb290ZXJNZW51XCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFtGZWF0dXJlZENvbnRlbnRfMS5kZWZhdWx0LCBGb290ZXJNZW51XzEuZGVmYXVsdCwgRm9vdGVyQnJhbmRpbmdfMS5kZWZhdWx0LCBBYm91dF8xLmRlZmF1bHRdO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikscmVxdWlyZShcInByb3AtdHlwZXNcIikscmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpLHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKSxyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJyZWFjdFwiLFwicHJvcC10eXBlc1wiLFwiQG1hdGVyaWFsLXVpL2NvcmVcIixcInJlYWN0LXJlZHV4XCIsXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHNbXCJAY291cnNlbGl0L3dpZGdldC1idXR0b25kb3duXCJdPXQocmVxdWlyZShcInJlYWN0XCIpLHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSxyZXF1aXJlKFwicmVhY3QtcmVkdXhcIikscmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIikpOmVbXCJAY291cnNlbGl0L3dpZGdldC1idXR0b25kb3duXCJdPXQoZS5yZWFjdCxlW1wicHJvcC10eXBlc1wiXSxlW1wiQG1hdGVyaWFsLXVpL2NvcmVcIl0sZVtcInJlYWN0LXJlZHV4XCJdLGVbXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCJdKX0odGhpcywoZnVuY3Rpb24oZSx0LG4scixhKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIGE9dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsbiksYS5sPSEwLGEuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgYSBpbiBlKW4uZChyLGEsZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxhKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz01KX0oW2Z1bmN0aW9uKHQsbil7dC5leHBvcnRzPWV9LGZ1bmN0aW9uKGUsbil7ZS5leHBvcnRzPXR9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPW59LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWF9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIHI9bigwKSxhPW4ubihyKSxpPW4oMSksbz1uLm4oaSkscz1uKDMpLGM9bigyKTtjb25zdCB1PWU9Pntjb25zdHtmZXRjaEJ1aWxkZXI6dCxuYW1lOm4sYXV0aDppfT1lLFtvLHNdPU9iamVjdChyLnVzZVN0YXRlKSh7fSksW3UsbF09T2JqZWN0KHIudXNlU3RhdGUpKHt9KTtPYmplY3Qoci51c2VFZmZlY3QpKCgpPT57ZCgpfSxbbl0pO2NvbnN0IGQ9YXN5bmMoKT0+e2NvbnN0IGU9YFxcbiAgICBxdWVyeSB7XFxuICAgICAgICBzZXR0aW5nczogZ2V0V2lkZ2V0U2V0dGluZ3MobmFtZTogXCIke259XCIpIHtcXG4gICAgICAgICAgICBzZXR0aW5nc1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGAscj10LnNldFBheWxvYWQoZSkuYnVpbGQoKTt0cnl7Y29uc3QgZT1hd2FpdCByLmV4ZWMoKTtlLnNldHRpbmdzLnNldHRpbmdzJiZwKGUuc2V0dGluZ3Muc2V0dGluZ3MpfWNhdGNoKGUpe319LHA9ZT0+e2NvbnN0IHQ9SlNPTi5wYXJzZShlKTtzKHQpLGwodCl9O3JldHVybiBhLmEuY3JlYXRlRWxlbWVudChjLkdyaWQse2NvbnRhaW5lcjohMCxkaXJlY3Rpb246XCJjb2x1bW5cIixzcGFjaW5nOjJ9LGEuYS5jcmVhdGVFbGVtZW50KGMuR3JpZCx7aXRlbTohMCx4czohMH0sYS5hLmNyZWF0ZUVsZW1lbnQoYy5UeXBvZ3JhcGh5LHt2YXJpYW50OlwiaDZcIixjb2xvcjpcInRleHRTZWNvbmRhcnlcIn0sXCJTZXR0aW5nc1wiKSksYS5hLmNyZWF0ZUVsZW1lbnQoYy5HcmlkLHtpdGVtOiEwfSxhLmEuY3JlYXRlRWxlbWVudChcImZvcm1cIix7b25TdWJtaXQ6YXN5bmMgZT0+e2UucHJldmVudERlZmF1bHQoKTtjb25zdCByPWBcXG4gICAgbXV0YXRpb24ge1xcbiAgICAgIHNldHRpbmdzOiBzYXZlV2lkZ2V0U2V0dGluZ3Mod2lkZ2V0U2V0dGluZ3NEYXRhOiB7XFxuICAgICAgICBuYW1lOiBcIiR7bn1cIixcXG4gICAgICAgIHNldHRpbmdzOiBcIiR7SlNPTi5zdHJpbmdpZnkodSkucmVwbGFjZSgvXCIvZywnXFxcXFwiJyl9XCJcXG4gICAgICB9KSB7XFxuICAgICAgICBzZXR0aW5nc1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICBgLGE9dC5zZXRQYXlsb2FkKHIpLnNldEF1dGhUb2tlbihpLnRva2VuKS5idWlsZCgpO3RyeXtjb25zdCBlPWF3YWl0IGEuZXhlYygpO2Uuc2V0dGluZ3MmJnAoZS5zZXR0aW5ncy5zZXR0aW5ncyl9Y2F0Y2goZSl7fX19LGEuYS5jcmVhdGVFbGVtZW50KGMuVGV4dEZpZWxkLHt2YXJpYW50Olwib3V0bGluZWRcIixsYWJlbDpcIk5ld3NsZXR0ZXIgTGlua1wiLGZ1bGxXaWR0aDohMCxtYXJnaW46XCJub3JtYWxcIixuYW1lOlwidXJsXCIsdmFsdWU6dS51cmx8fFwiXCIsb25DaGFuZ2U6ZT0+e2woT2JqZWN0LmFzc2lnbih7fSx1LHtbZS50YXJnZXQubmFtZV06ZS50YXJnZXQudmFsdWV9KSl9LHJlcXVpcmVkOiEwfSksYS5hLmNyZWF0ZUVsZW1lbnQoYy5CdXR0b24se3ZhcmlhbnQ6XCJjb250YWluZWRcIixjb2xvcjpcInByaW1hcnlcIix0eXBlOlwic3VibWl0XCIsdmFsdWU6XCJTYXZlXCIsZGlzYWJsZWQ6dS51cmw9PT1vLnVybH0sXCJTYXZlXCIpKSkpfTt1LnByb3BUeXBlcz17bmFtZTpvLmEuc3RyaW5nLmlzUmVxdWlyZWQsZmV0Y2hCdWlsZGVyOm8uYS5vYmplY3QuaXNSZXF1aXJlZCx0aGVtZTpvLmEub2JqZWN0LmlzUmVxdWlyZWQsYXV0aDpvLmEuc2hhcGUoe2d1ZXN0Om8uYS5ib29sLHRva2VuOm8uYS5zdHJpbmd9KX07dmFyIGw9T2JqZWN0KHMuY29ubmVjdCkoZT0+KHthdXRoOmUuYXV0aH0pKSh1KSxkPW4oNCk7Y29uc3QgcD1PYmplY3QoZC5tYWtlU3R5bGVzKShlPT4oe2NvbnRhaW5lcjp7cGFkZGluZzplLnNwYWNpbmcoMikscGFkZGluZ1RvcDplLnNwYWNpbmcoNCl9LGlmcmFtZTp7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OjIyMCxib3JkZXI6XCIxcHggI2NjYyBzb2xpZFwifX0pKSxtPWU9Pntjb25zdHtmZXRjaEJ1aWxkZXI6dCxuYW1lOm59PWUsW2ksb109T2JqZWN0KHIudXNlU3RhdGUpKHt9KSxzPXAoKTtPYmplY3Qoci51c2VFZmZlY3QpKCgpPT57YygpfSxbbl0pO2NvbnN0IGM9YXN5bmMoKT0+e2NvbnN0IGU9YFxcbiAgICBxdWVyeSB7XFxuICAgICAgICBzZXR0aW5nczogZ2V0V2lkZ2V0U2V0dGluZ3MobmFtZTogXCIke259XCIpIHtcXG4gICAgICAgICAgICBzZXR0aW5nc1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGAscj10LnNldFBheWxvYWQoZSkuYnVpbGQoKTt0cnl7Y29uc3QgZT1hd2FpdCByLmV4ZWMoKTtvKEpTT04ucGFyc2UoZS5zZXR0aW5ncy5zZXR0aW5ncykpfWNhdGNoKGUpe319O3JldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6cy5jb250YWluZXJ9LGkudXJsJiZhLmEuY3JlYXRlRWxlbWVudChhLmEuRnJhZ21lbnQsbnVsbCxhLmEuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiLHtzY3JvbGxpbmc6XCJub1wiLGNsYXNzTmFtZTpzLmlmcmFtZSxzcmM6aS51cmwrXCI/YXNfZW1iZWQ9dHJ1ZVwifSksYS5hLmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGEuYS5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSkpfTttLnByb3BUeXBlcz17bmFtZTpvLmEuc3RyaW5nLmlzUmVxdWlyZWQsZmV0Y2hCdWlsZGVyOm8uYS5vYmplY3QuaXNSZXF1aXJlZH07dmFyIGc9T2JqZWN0KHMuY29ubmVjdCkoZT0+KHthdXRoOmUuYXV0aH0pKShtKTt0LmRlZmF1bHQ9e21ldGFkYXRhOntuYW1lOlwiYnV0dG9uZG93blwiLGRpc3BsYXlOYW1lOlwiQnV0dG9uZG93blwiLGNvbXBhdGlibGVXaXRoOltcImJvdHRvbVwiLFwiYXNpZGVcIl0saWNvbjpcImh0dHBzOi8vYnV0dG9uZG93bi5lbWFpbC9zdGF0aWMvaW1hZ2VzL2ljb25zL2ljb25ANzIucG5nXCIsZXhjbHVkZUZyb21QYXRoczpbXCIvbG9naW5cIl19LHdpZGdldDpnLGFkbWluV2lkZ2V0Omx9fV0pfSkpOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJvdXRlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5leHRSb3V0ZXI+KG51bGwgYXMgYW55KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSb3V0ZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1JvdXRlckNvbnRleHQnXG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBUcmFuc2xhdGVzIGEgbG9naWNhbCByb3V0ZSBpbnRvIGl0cyBwYWdlcyBhc3NldCBwYXRoIChyZWxhdGl2ZSBmcm9tIGEgY29tbW9uIHByZWZpeClcbi8vIFwiYXNzZXQgcGF0aFwiIGJlaW5nIGl0cyBqYXZhc2NyaXB0IGZpbGUsIGRhdGEgZmlsZSwgcHJlcmVuZGVyZWQgaHRtbCwuLi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFzc2V0UGF0aEZyb21Sb3V0ZShcbiAgcm91dGU6IHN0cmluZyxcbiAgZXh0OiBzdHJpbmcgPSAnJ1xuKTogc3RyaW5nIHtcbiAgY29uc3QgcGF0aCA9XG4gICAgcm91dGUgPT09ICcvJ1xuICAgICAgPyAnL2luZGV4J1xuICAgICAgOiAvXlxcL2luZGV4KFxcL3wkKS8udGVzdChyb3V0ZSlcbiAgICAgID8gYC9pbmRleCR7cm91dGV9YFxuICAgICAgOiBgJHtyb3V0ZX1gXG4gIHJldHVybiBwYXRoICsgZXh0XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvcm91dGVyJylcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYWxsIHRoZSBQcm9wVHlwZXMgdXNlZCBhY3Jvc3MgdGhlIGFwcC5cclxuICovXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGd1ZXN0OiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIHRva2VuOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaXNDcmVhdG9yOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBmZXRjaGVkOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBwdXJjaGFzZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYXRlc3RQb3N0c1Byb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHVwZGF0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpdGVJbmZvUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgbG9nb3BhdGg6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGN1cnJlbmN5VW5pdDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgY3VycmVuY3lJU09Db2RlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVibGljQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgdXBkYXRlZDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGlzRmVhdHVyZWQ6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgY29zdDogUHJvcFR5cGVzLm51bWJlcixcclxuICBjcmVhdG9ySWQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdG9yQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGNyZWF0b3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICB1cGRhdGVkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBpc0ZlYXR1cmVkOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGNvc3Q6IFByb3BUeXBlcy5udW1iZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpdGVVc2VyID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB2ZXJpZmllZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc0NyZWF0b3I6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNBZG1pbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHB1cmNoYXNlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVkQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY29zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGZlYXR1cmVkSW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBNZXNzYWdlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhY3Rpb246IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjYjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGVzc29uID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGRvd25sb2FkYWJsZTogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBjb250ZW50VVJMOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGluayA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBuZXdUYWI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZHJlc3NQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgYmFja2VuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZyb250ZW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZG9tYWluOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9