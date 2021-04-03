exports.ids = [2];
exports.modules = {

/***/ "./components/AppToast.js":
/*!********************************!*\
  !*** ./components/AppToast.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./types.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\AppToast.js";

 //import { connect } from "react-redux";

 //import { clearAppMessage } from "../redux/actions";




const AppToast = props => {
  const {
    message
  } = props;
  const action = message && message.action;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    } //props.dispatch(clearAppMessage());

  };

  const getActionButtonsArray = () => {
    const actionButtonsArray = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      "aria-label": "close",
      color: "inherit",
      onClick: handleClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Close"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, "close", false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)];

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
      }, undefined));
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
      }, undefined),
      action: getActionButtonsArray()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
}; //AppToast.propTypes = {
//  message: appMessage.isRequired,
//  dispatch: PropTypes.func.isRequired,
//};


const mapStateToProps = state => ({
  message: state.message
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
}); //export default connect(mapStateToProps, mapDispatchToProps)(AppToast);


/* harmony default export */ __webpack_exports__["default"] = (AppToast);

/***/ }),

/***/ "./components/Public/BaseLayout/Header.js":
/*!************************************************!*\
  !*** ./components/Public/BaseLayout/Header.js ***!
  \************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SessionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SessionButton */ "./components/Public/SessionButton.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../types */ "./types.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_MyContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../context/MyContext */ "./context/MyContext.js");

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Header.js";


 //import { connect } from "react-redux";






const Img = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../Img.js */ "./components/Img.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../Img.js */ "./components/Img.js")],
    modules: ["../../Img.js"]
  }
});
const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
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
}));

const Header = props => {
  const classes = useStyles();
  const {
    siteInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
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
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            variant: "h5",
            children: siteInfo.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SessionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

Header.propTypes = {
  siteinfo: _types__WEBPACK_IMPORTED_MODULE_5__["siteInfoProps"]
};

const mapStateToProps = state => ({
  siteinfo: state.siteinfo
}); //export default connect(mapStateToProps)(Header);


/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Public/BaseLayout/Scaffold/MenuItem.js":
/*!***********************************************************!*\
  !*** ./components/Public/BaseLayout/Scaffold/MenuItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../types */ "./types.js");

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Scaffold\\MenuItem.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  externalLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block"
  }
});

const MenuItem = props => {
  const {
    link
  } = props;
  const classes = useStyles();
  return link.destination.indexOf("http") !== -1 || link.newTab ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: link.destination,
    target: "_blank",
    rel: "noreferrer noopener",
    className: classes.externalLink,
    onClick: props.closeDrawer ? props.closeDrawer : () => {},
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      button: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        primary: link.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), link.newTab && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["OpenInNew"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, link.text, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: link.destination,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      button: true,
      component: "a",
      onClick: props.closeDrawer ? props.closeDrawer : () => {},
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        primary: link.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)
  }, link.text, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
}; //MenuItem.propTypes = {
//  link: link,
//  closeDrawer: PropTypes.func,
//};


/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./components/Public/BaseLayout/Scaffold/index.js":
/*!********************************************************!*\
  !*** ./components/Public/BaseLayout/Scaffold/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _AppToast_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../AppToast.js */ "./components/AppToast.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Header.js */ "./components/Public/BaseLayout/Header.js");
/* harmony import */ var _config_strings_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../config/strings.js */ "./config/strings.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../config/constants.js */ "./config/constants.js");
/* harmony import */ var _MenuItem_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MenuItem.js */ "./components/Public/BaseLayout/Scaffold/MenuItem.js");
/* harmony import */ var _context_MyContext_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../context/MyContext.js */ "./context/MyContext.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Scaffold\\index.js";










 //import PropTypes from "prop-types";

 //import { connect } from "react-redux";
//import { siteInfoProps, link, profileProps } from "../../../../types.js";





 //import Template from "../Template.js";

const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
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
  showProgressBar: props => ({
    visibility: props.networkAction ? "visible" : "hidden"
  }),
  menuTitle: {
    marginLeft: theme.spacing(2)
  }
}));

const Scaffold = ({
  children,
  props
}) => {
  const classes = useStyles(); //= useStyles(props);

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["useTheme"])();
  const {
    siteInfo,
    profile,
    navigation
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext_js__WEBPACK_IMPORTED_MODULE_17__["default"]);
  const {
    0: mobileOpen,
    1: setMobileOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const makeDrawer = (forMobile = false) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      alignItems: "center",
      className: classes.toolbar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        className: classes.menuTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
          variant: "h5",
          children: siteInfo.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: [profile.fetched && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [props.profile.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            link: {
              text: _config_strings_js__WEBPACK_IMPORTED_MODULE_14__["MAIN_MENU_ITEM_PROFILE"],
              destination: `/profile/${props.profile.userId && props.profile.userId !== -1 ? props.profile.userId : props.profile.id}`,
              category: _config_constants_js__WEBPACK_IMPORTED_MODULE_15__["NAVIGATION_CATEGORY_MAIN"],
              newTab: false
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 17
          }, undefined)]
        }, void 0, true), (props.profile.isAdmin || props.profile.isCreator) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
          link: {
            text: _config_strings_js__WEBPACK_IMPORTED_MODULE_14__["MAIN_MENU_ITEM_DASHBOARD"],
            destination: "/dashboard/courses",
            category: _config_constants_js__WEBPACK_IMPORTED_MODULE_15__["NAVIGATION_CATEGORY_MAIN"],
            newTab: false
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }, undefined)]
      }, void 0, true), navigation && navigation.map(link => forMobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        link: link,
        closeDrawer: handleDrawerToggle
      }, link.destination, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        link: link
      }, link.destination, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      position: "fixed",
      className: classes.appBar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Toolbar"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
          color: "inherit",
          "aria-label": "open drawer",
          edge: "start",
          onClick: handleDrawerToggle,
          className: classes.menuButton,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Menu"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header_js__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: classes.drawer,
      "aria-label": "menu",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
        smUp: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
        xsDown: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      children: "scafoolf"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: classes.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.toolbar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["LinearProgress"], {
        className: classes.showProgressBar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AppToast_js__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 5
  }, undefined);
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


/* harmony default export */ __webpack_exports__["default"] = (Scaffold);

/***/ }),

/***/ "./components/Public/BaseLayout/Section.js":
/*!*************************************************!*\
  !*** ./components/Public/BaseLayout/Section.js ***!
  \*************************************************/
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
/* harmony import */ var _WidgetByName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WidgetByName */ "./components/Public/BaseLayout/WidgetByName.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/widgets */ "./config/widgets.js");
/* harmony import */ var _context_MyContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/MyContext */ "./context/MyContext.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Section.js";
 //import PropTypes from "prop-types";
//import { connect } from "react-redux";







const Section = ({
  name
}) => {
  const {
    layout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const sectionLayout = layout[name];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return sectionLayout && sectionLayout.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    direction: "column",
    children: sectionLayout.map((item, index) => _config_widgets__WEBPACK_IMPORTED_MODULE_5__["default"][item].metadata.excludeFromPaths && _config_widgets__WEBPACK_IMPORTED_MODULE_5__["default"][item].metadata.excludeFromPaths.includes(router.pathname) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, index, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WidgetByName__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: item,
        section: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
}; //Section.propTypes = {
//  name: PropTypes.string.isRequired,
//  layout: PropTypes.object.isRequired,
//};
//const mapStateToProps = (state) => ({layout: state.layout,})
//export default connect(mapStateToProps)(Section);


/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/Public/BaseLayout/Template.js":
/*!**************************************************!*\
  !*** ./components/Public/BaseLayout/Template.js ***!
  \**************************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section */ "./components/Public/BaseLayout/Section.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\Template.js";
 //import PropTypes from "prop-types";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  mainContent: {
    maxWidth: 1240,
    minHeight: "80vh",
    margin: "0 auto"
  }
}));

const Template = ({
  children,
  props
}) => {
  const classes = useStyles(); // useStyles(props);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
            container: true,
            item: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "bottom"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        light: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true)]
  }, void 0, true);
}; //Template.propTypes = {
//  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//};


/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./components/Public/BaseLayout/WidgetByName.js":
/*!******************************************************!*\
  !*** ./components/Public/BaseLayout/WidgetByName.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/widgets */ "./config/widgets.js");
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/fetch */ "./lib/fetch.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/constants */ "./config/constants.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/utils */ "./lib/utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../types */ "./types.js");

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\WidgetByName.js";









const WidgetByName = ({
  name,
  section,
  address
}) => {
  const Widget = _config_widgets__WEBPACK_IMPORTED_MODULE_3__["default"][name].widget;
  const fetch = new _lib_fetch__WEBPACK_IMPORTED_MODULE_4__["default"]().setUrl(`${address.backend}/graph`).setIsGraphQLEndpoint(true);
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
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

WidgetByName.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  section: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  address: _types__WEBPACK_IMPORTED_MODULE_8__["addressProps"]
};

const mapStateToProps = state => ({
  address: state.address
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(WidgetByName));

/***/ }),

/***/ "./components/Public/BaseLayout/index.js":
/*!***********************************************!*\
  !*** ./components/Public/BaseLayout/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Template.js */ "./components/Public/BaseLayout/Template.js");
/* harmony import */ var _Scaffold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scaffold */ "./components/Public/BaseLayout/Scaffold/index.js");
/* harmony import */ var _context_MyContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/MyContext.js */ "./context/MyContext.js");
/* harmony import */ var _config_defaultState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/defaultState */ "./config/defaultState.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\index.js";
 //import PropTypes from "prop-types";
//import { connect } from "react-redux";


 //import { addressProps, siteInfoProps } from "../../../types.js";




 //type Props = {
//  children?: ReactNode;
//  title?: string;
//  followLinks?: boolean;
//  descript?: string;
//};

const MasterLayout = ({
  children,
  title,
  props
}) => {
  const {
    siteInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [title, " | ", siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.logopath) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_3__["formulateMediaUrl"])(_config_defaultState__WEBPACK_IMPORTED_MODULE_7__["default"].address.backend, siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.logopath, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: siteInfo !== null && siteInfo !== void 0 && siteInfo.logopath ? Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_3__["formulateMediaUrl"])(_config_defaultState__WEBPACK_IMPORTED_MODULE_7__["default"].address.backend, siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.logopath, true) : "/courselit_backdrop_square.webp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Scaffold__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Template_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
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


/* harmony default export */ __webpack_exports__["default"] = (MasterLayout);

/***/ }),

/***/ "./components/Public/SessionButton.js":
/*!********************************************!*\
  !*** ./components/Public/SessionButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_strings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings.js */ "./config/strings.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_MyContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/MyContext.js */ "./context/MyContext.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\SessionButton.js";

/**
 * This component provides a clickable button which shows if the user
 * is logged in or is a guest.
 */

 //import { connect } from "react-redux";

 //import { authProps, profileProps } from "../../types.js";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  button: {
    color: "white"
  }
});

function SessionButton(props) {
  const classes = useStyles();
  const {
    authProp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MyContext_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
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


/* harmony default export */ __webpack_exports__["default"] = (SessionButton);

/***/ }),

/***/ "./config/constants.js":
/*!*****************************!*\
  !*** ./config/constants.js ***!
  \*****************************/
/*! exports provided: JWT_COOKIE_NAME, USERID_COOKIE_NAME, LESSON_TYPE_TEXT, LESSON_TYPE_AUDIO, LESSON_TYPE_VIDEO, LESSON_TYPE_PDF, LESSON_TYPE_QUIZ, URL_EXTENTION_POSTS, URL_EXTENTION_COURSES, FREE_COURSES_TEXT, DRAFTJS_ENTITY_TYPE_IMAGE, DRAFTJS_ENTITY_TYPE_VIDEO, DRAFTJS_ENTITY_TYPE_AUDIO, PAYMENT_METHOD_STRIPE, PAYMENT_METHOD_PAYPAL, PAYMENT_METHOD_PAYTM, PAYMENT_METHOD_NONE, TRANSACTION_INITIATED, TRANSACTION_SUCCESS, TRANSACTION_FAILED, CONSECUTIVE_PAYMENT_VERIFICATION_REQUEST_GAP, MIMETYPE_VIDEO, MIMETYPE_AUDIO, MIMETYPE_IMAGE, THEMES_REPO, NAVIGATION_CATEGORY_MAIN, NAVIGATION_CATEGORY_FOOTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_COOKIE_NAME", function() { return JWT_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERID_COOKIE_NAME", function() { return USERID_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_TYPE_TEXT", function() { return LESSON_TYPE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_TYPE_AUDIO", function() { return LESSON_TYPE_AUDIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_TYPE_VIDEO", function() { return LESSON_TYPE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_TYPE_PDF", function() { return LESSON_TYPE_PDF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSON_TYPE_QUIZ", function() { return LESSON_TYPE_QUIZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_EXTENTION_POSTS", function() { return URL_EXTENTION_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_EXTENTION_COURSES", function() { return URL_EXTENTION_COURSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FREE_COURSES_TEXT", function() { return FREE_COURSES_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAFTJS_ENTITY_TYPE_IMAGE", function() { return DRAFTJS_ENTITY_TYPE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAFTJS_ENTITY_TYPE_VIDEO", function() { return DRAFTJS_ENTITY_TYPE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAFTJS_ENTITY_TYPE_AUDIO", function() { return DRAFTJS_ENTITY_TYPE_AUDIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_METHOD_STRIPE", function() { return PAYMENT_METHOD_STRIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_METHOD_PAYPAL", function() { return PAYMENT_METHOD_PAYPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_METHOD_PAYTM", function() { return PAYMENT_METHOD_PAYTM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_METHOD_NONE", function() { return PAYMENT_METHOD_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_INITIATED", function() { return TRANSACTION_INITIATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_SUCCESS", function() { return TRANSACTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_FAILED", function() { return TRANSACTION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSECUTIVE_PAYMENT_VERIFICATION_REQUEST_GAP", function() { return CONSECUTIVE_PAYMENT_VERIFICATION_REQUEST_GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIMETYPE_VIDEO", function() { return MIMETYPE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIMETYPE_AUDIO", function() { return MIMETYPE_AUDIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIMETYPE_IMAGE", function() { return MIMETYPE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEMES_REPO", function() { return THEMES_REPO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_CATEGORY_MAIN", function() { return NAVIGATION_CATEGORY_MAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_CATEGORY_FOOTER", function() { return NAVIGATION_CATEGORY_FOOTER; });
/**
 * This file provides application wide constants.
 */
// import getConfig from "next/config";
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// const LOCAL_BACKEND = "http://localhost:8000";
// const LOCAL_FRONTEND = "http://localhost:3000";
// const API_PREFIX = publicRuntimeConfig.apiPrefix || "/api";
// const resolveProductionBackend = () => process.env.BACKEND
//   ? `http://backend:8000${API_PREFIX}` // Server-side API path (SSR)
//   :  API_PREFIX // Client-side API path
// export const BACKEND =
//   process.env.NODE_ENV === "production"
//     ? serverRuntimeConfig.ssrUrl
//       ? serverRuntimeConfig.ssrUrl + API_PREFIX
//       : API_PREFIX
//     : LOCAL_BACKEND;
// export const FRONTEND = publicRuntimeConfig.mainUrl || LOCAL_FRONTEND;
// export const MEDIA_BACKEND = publicRuntimeConfig.mainUrl
//   ? publicRuntimeConfig.mainUrl + API_PREFIX
//   : LOCAL_BACKEND;
// Constants for auth related functionalities
const JWT_COOKIE_NAME = "access_token";
const USERID_COOKIE_NAME = "email"; // Constants that represent types from the server

const LESSON_TYPE_TEXT = "text";
const LESSON_TYPE_AUDIO = "audio";
const LESSON_TYPE_VIDEO = "video";
const LESSON_TYPE_PDF = "pdf";
const LESSON_TYPE_QUIZ = "quiz";
const URL_EXTENTION_POSTS = "post";
const URL_EXTENTION_COURSES = "course";
const FREE_COURSES_TEXT = "FREE"; // Constant for representing Draftjs' entities

const DRAFTJS_ENTITY_TYPE_IMAGE = "image";
const DRAFTJS_ENTITY_TYPE_VIDEO = "video";
const DRAFTJS_ENTITY_TYPE_AUDIO = "audio"; // Payment methods

const PAYMENT_METHOD_STRIPE = "stripe";
const PAYMENT_METHOD_PAYPAL = "paypal";
const PAYMENT_METHOD_PAYTM = "paytm";
const PAYMENT_METHOD_NONE = ""; // transaction statuses from backend

const TRANSACTION_INITIATED = "initiated";
const TRANSACTION_SUCCESS = "success";
const TRANSACTION_FAILED = "failed";
const CONSECUTIVE_PAYMENT_VERIFICATION_REQUEST_GAP = 2000; // mime types

const MIMETYPE_VIDEO = ["video/mp4"];
const MIMETYPE_AUDIO = ["audio/mp3"];
const MIMETYPE_IMAGE = ["image/png", "image/jpeg", "image/webp"];
const THEMES_REPO = "https://github.com/codelitdev/courselit-themes"; // Navigation categories

const NAVIGATION_CATEGORY_MAIN = "main";
const NAVIGATION_CATEGORY_FOOTER = "footer";

/***/ }),

/***/ "./config/widgets.js":
/*!***************************!*\
  !*** ./config/widgets.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _courselit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../courselit.js */ "./courselit.js");

/* harmony default export */ __webpack_exports__["default"] = (_courselit_js__WEBPACK_IMPORTED_MODULE_0__["widgets"]);

/***/ }),

/***/ "./courselit.js":
/*!**********************!*\
  !*** ./courselit.js ***!
  \**********************/
/*! exports provided: widgets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgets", function() { return widgets; });
/* harmony import */ var _courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @courselit/widget-buttondown */ "@courselit/widget-buttondown");
/* harmony import */ var _courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _courselit_common_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @courselit/common-widgets */ "@courselit/common-widgets");
/* harmony import */ var _courselit_common_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_courselit_common_widgets__WEBPACK_IMPORTED_MODULE_1__);



const getAllWidgets = () => {
  const widgets = {}; // Add common widgets to CourseLit

  for (const widget of _courselit_common_widgets__WEBPACK_IMPORTED_MODULE_1___default.a) {
    widgets[widget.metadata.name] = widget;
  } // Additional widgets are added here


  widgets[_courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0___default.a.metadata.name] = _courselit_widget_buttondown__WEBPACK_IMPORTED_MODULE_0___default.a;
  return widgets;
};

const widgets = getAllWidgets();

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: queryGraphQL, capitalize, queryGraphQLWithUIEffects, formattedLocaleDate, makeGraphQLQueryStringFromJSObject, formulateMediaUrl, formulateCourseUrl, getPostDescriptionSnippet, getGraphQLQueryFields, getObjectContainingOnlyChangedFields, areObjectsDifferent, getAddress, getBackendAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryGraphQL", function() { return queryGraphQL; });
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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/constants.js */ "./config/constants.js");
/* harmony import */ var _courselit_components_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @courselit/components-library */ "@courselit/components-library");
/* harmony import */ var _courselit_components_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_courselit_components_library__WEBPACK_IMPORTED_MODULE_2__);



const queryGraphQL = async (url, query, token) => {
  const options = {
    method: "POST",
    headers: token ? {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    } : {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  };
  let response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, options);
  response = await response.json();

  if (response.errors && response.errors.length > 0) {
    throw new Error(response.errors[0].message);
  }

  return response.data;
};
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
const queryGraphQLWithUIEffects = (backend, dispatch, networkAction, token) => async query => {
  try {
    dispatch(networkAction(false));
    const response = await queryGraphQL(`${backend}/graph`, query, token);
    return response;
  } finally {
    dispatch(networkAction(false));
  }
};
const formattedLocaleDate = epochString => new Date(Number(epochString)).toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
}); // Regex copied from: https://stackoverflow.com/a/48675160/942589

const makeGraphQLQueryStringFromJSObject = obj => JSON.stringify(obj).replace(/"([^(")"]+)":/g, "$1:");
const formulateMediaUrl = (backend, mediaID, generateThumbnailUrl = false) => mediaID ? `${backend}/media/${mediaID}${generateThumbnailUrl ? "?thumb=1" : ""}` : "";
const formulateCourseUrl = (course, backend = "") => `${backend}/${course.isBlog ? _config_constants_js__WEBPACK_IMPORTED_MODULE_1__["URL_EXTENTION_POSTS"] : _config_constants_js__WEBPACK_IMPORTED_MODULE_1__["URL_EXTENTION_COURSES"]}/${course.courseId}/${course.slug}`;
const getPostDescriptionSnippet = rawDraftJSContentState => {
  const firstSentence = _courselit_components_library__WEBPACK_IMPORTED_MODULE_2__["RichText"].hydrate({
    data: rawDraftJSContentState
  }).getCurrentContent().getPlainText().split(".")[0];
  return firstSentence ? firstSentence + "." : firstSentence;
};
const getGraphQLQueryFields = (jsObj, fieldsNotPutBetweenQuotes = []) => {
  let queryString = "{";

  for (const i of Object.keys(jsObj)) {
    if (jsObj[i] !== undefined) {
      queryString += fieldsNotPutBetweenQuotes.includes(i) ? `${i}: ${jsObj[i]},` : `${i}: "${jsObj[i]}",`;
    }
  }

  queryString += "}";
  return queryString;
};
const getObjectContainingOnlyChangedFields = (baseline, obj) => {
  const result = {};

  for (const i of Object.keys(baseline)) {
    if (baseline[i] !== obj[i]) {
      result[i] = obj[i];
    }
  }

  return result;
};
const areObjectsDifferent = (baseline, obj) => {
  const onlyChangedFields = getObjectContainingOnlyChangedFields(baseline, obj);
  return !!Object.keys(onlyChangedFields).length;
};
const getAddress = host => {
  return {
    domain: extractDomainFromURL(host),
    backend: getBackendAddress(host),
    frontend: `http://${host}`
  };
};
const getBackendAddress = host => {
  const domain = extractDomainFromURL(host);

  if (false) {} else {
    return `http://${domain}:8000`;
  }
};

const extractDomainFromURL = host => {
  return host.split(":")[0];
};

/***/ }),

/***/ "./types.js":
/*!******************!*\
  !*** ./types.js ***!
  \******************/
/*! exports provided: authProps, profileProps, latestPostsProps, siteInfoProps, publicCourse, creatorCourse, siteUser, featuredCourse, appMessage, lesson, link, addressProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authProps", function() { return authProps; });
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file contains all the PropTypes used across the app.
 */

const authProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  guest: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  token: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
const profileProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  isCreator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  fetched: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  purchases: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
});
const latestPostsProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  creatorName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  updated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});
const siteInfoProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  logopath: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  currencyUnit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  currencyISOCode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
const publicCourse = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
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
const creatorCourse = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  creatorName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  updated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  slug: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  isFeatured: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  cost: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
const siteUser = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  verified: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isCreator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isAdmin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  purchases: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
});
const featuredCourse = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  cost: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  featuredImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
const appMessage = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  open: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  action: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    cb: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  })
});
const lesson = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  downloadable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool = false,
  content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = "",
  contentURL: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string = ""
});
const link = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  destination: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  category: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  newTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
});
const addressProps = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  backend: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  frontend: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  domain: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcFRvYXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvU2NhZmZvbGQvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9TY2FmZm9sZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L1dpZGdldEJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL1Nlc3Npb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3Vyc2VsaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3R5cGVzLmpzIl0sIm5hbWVzIjpbIkFwcFRvYXN0IiwicHJvcHMiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImdldEFjdGlvbkJ1dHRvbnNBcnJheSIsImFjdGlvbkJ1dHRvbnNBcnJheSIsInVuc2hpZnQiLCJjYiIsInRleHQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJvcGVuIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkltZyIsImR5bmFtaWMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsb2dvIiwiZGlzcGxheSIsImxvZ29jb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImxvZ29pbWciLCJib3JkZXJSYWRpdXMiLCJIZWFkZXIiLCJjbGFzc2VzIiwic2l0ZUluZm8iLCJ1c2VDb250ZXh0IiwiTXlDb250ZXh0IiwibG9nb3BhdGgiLCJ0aXRsZSIsInByb3BUeXBlcyIsInNpdGVpbmZvIiwic2l0ZUluZm9Qcm9wcyIsImV4dGVybmFsTGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJNZW51SXRlbSIsImxpbmsiLCJkZXN0aW5hdGlvbiIsImluZGV4T2YiLCJuZXdUYWIiLCJjbG9zZURyYXdlciIsImRyYXdlcldpZHRoIiwicm9vdCIsImRyYXdlciIsImJyZWFrcG9pbnRzIiwidXAiLCJmbGV4U2hyaW5rIiwiYXBwQmFyIiwiekluZGV4IiwibWVudUJ1dHRvbiIsInRvb2xiYXIiLCJtaXhpbnMiLCJkcmF3ZXJQYXBlciIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImFjdGl2ZUl0ZW0iLCJiYWNrZ3JvdW5kIiwidmlzaXRTaXRlTGluayIsInNob3dQcm9ncmVzc0JhciIsInZpc2liaWxpdHkiLCJuZXR3b3JrQWN0aW9uIiwibWVudVRpdGxlIiwibWFyZ2luTGVmdCIsIlNjYWZmb2xkIiwiY2hpbGRyZW4iLCJ1c2VUaGVtZSIsInByb2ZpbGUiLCJuYXZpZ2F0aW9uIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZURyYXdlclRvZ2dsZSIsIm1ha2VEcmF3ZXIiLCJmb3JNb2JpbGUiLCJmZXRjaGVkIiwiaWQiLCJNQUlOX01FTlVfSVRFTV9QUk9GSUxFIiwidXNlcklkIiwiY2F0ZWdvcnkiLCJOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4iLCJpc0FkbWluIiwiaXNDcmVhdG9yIiwiTUFJTl9NRU5VX0lURU1fREFTSEJPQVJEIiwibWFwIiwiZGlyZWN0aW9uIiwicGFwZXIiLCJrZWVwTW91bnRlZCIsIlNlY3Rpb24iLCJuYW1lIiwibGF5b3V0Iiwic2VjdGlvbkxheW91dCIsInJvdXRlciIsInVzZVJvdXRlciIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCIsIndpZGdldHMiLCJtZXRhZGF0YSIsImV4Y2x1ZGVGcm9tUGF0aHMiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwibWFpbkNvbnRlbnQiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1hcmdpbiIsIlRlbXBsYXRlIiwiV2lkZ2V0QnlOYW1lIiwic2VjdGlvbiIsImFkZHJlc3MiLCJXaWRnZXQiLCJ3aWRnZXQiLCJmZXRjaCIsIkZldGNoQnVpbGRlciIsInNldFVybCIsImJhY2tlbmQiLCJzZXRJc0dyYXBoUUxFbmRwb2ludCIsIk9iamVjdCIsImFzc2lnbiIsImNvbmZpZyIsIkJBQ0tFTkQiLCJ1dGlsaXRpZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYWRkcmVzc1Byb3BzIiwiY29ubmVjdCIsIk1hc3RlckxheW91dCIsImZvcm11bGF0ZU1lZGlhVXJsIiwiZGVmYXVsdFN0YXRlIiwiYnV0dG9uIiwiU2Vzc2lvbkJ1dHRvbiIsImF1dGhQcm9wIiwiZ3Vlc3QiLCJHRU5FUklDX1NJR05JTl9URVhUIiwiR0VORVJJQ19TSUdOT1VUX1RFWFQiLCJKV1RfQ09PS0lFX05BTUUiLCJVU0VSSURfQ09PS0lFX05BTUUiLCJMRVNTT05fVFlQRV9URVhUIiwiTEVTU09OX1RZUEVfQVVESU8iLCJMRVNTT05fVFlQRV9WSURFTyIsIkxFU1NPTl9UWVBFX1BERiIsIkxFU1NPTl9UWVBFX1FVSVoiLCJVUkxfRVhURU5USU9OX1BPU1RTIiwiVVJMX0VYVEVOVElPTl9DT1VSU0VTIiwiRlJFRV9DT1VSU0VTX1RFWFQiLCJEUkFGVEpTX0VOVElUWV9UWVBFX0lNQUdFIiwiRFJBRlRKU19FTlRJVFlfVFlQRV9WSURFTyIsIkRSQUZUSlNfRU5USVRZX1RZUEVfQVVESU8iLCJQQVlNRU5UX01FVEhPRF9TVFJJUEUiLCJQQVlNRU5UX01FVEhPRF9QQVlQQUwiLCJQQVlNRU5UX01FVEhPRF9QQVlUTSIsIlBBWU1FTlRfTUVUSE9EX05PTkUiLCJUUkFOU0FDVElPTl9JTklUSUFURUQiLCJUUkFOU0FDVElPTl9TVUNDRVNTIiwiVFJBTlNBQ1RJT05fRkFJTEVEIiwiQ09OU0VDVVRJVkVfUEFZTUVOVF9WRVJJRklDQVRJT05fUkVRVUVTVF9HQVAiLCJNSU1FVFlQRV9WSURFTyIsIk1JTUVUWVBFX0FVRElPIiwiTUlNRVRZUEVfSU1BR0UiLCJUSEVNRVNfUkVQTyIsIk5BVklHQVRJT05fQ0FURUdPUllfRk9PVEVSIiwiZ2V0QWxsV2lkZ2V0cyIsIkNvbW1vbldpZGdldHMiLCJidXR0b25kb3duIiwicXVlcnlHcmFwaFFMIiwidXJsIiwicXVlcnkiLCJ0b2tlbiIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3JzIiwiRXJyb3IiLCJkYXRhIiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicXVlcnlHcmFwaFFMV2l0aFVJRWZmZWN0cyIsImZvcm1hdHRlZExvY2FsZURhdGUiLCJlcG9jaFN0cmluZyIsIkRhdGUiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsIm1ha2VHcmFwaFFMUXVlcnlTdHJpbmdGcm9tSlNPYmplY3QiLCJvYmoiLCJyZXBsYWNlIiwibWVkaWFJRCIsImdlbmVyYXRlVGh1bWJuYWlsVXJsIiwiZm9ybXVsYXRlQ291cnNlVXJsIiwiY291cnNlIiwiaXNCbG9nIiwiY291cnNlSWQiLCJzbHVnIiwiZ2V0UG9zdERlc2NyaXB0aW9uU25pcHBldCIsInJhd0RyYWZ0SlNDb250ZW50U3RhdGUiLCJmaXJzdFNlbnRlbmNlIiwiVGV4dEVkaXRvciIsImh5ZHJhdGUiLCJnZXRDdXJyZW50Q29udGVudCIsImdldFBsYWluVGV4dCIsInNwbGl0IiwiZ2V0R3JhcGhRTFF1ZXJ5RmllbGRzIiwianNPYmoiLCJmaWVsZHNOb3RQdXRCZXR3ZWVuUXVvdGVzIiwicXVlcnlTdHJpbmciLCJpIiwia2V5cyIsInVuZGVmaW5lZCIsImdldE9iamVjdENvbnRhaW5pbmdPbmx5Q2hhbmdlZEZpZWxkcyIsImJhc2VsaW5lIiwicmVzdWx0IiwiYXJlT2JqZWN0c0RpZmZlcmVudCIsIm9ubHlDaGFuZ2VkRmllbGRzIiwiZ2V0QWRkcmVzcyIsImhvc3QiLCJkb21haW4iLCJleHRyYWN0RG9tYWluRnJvbVVSTCIsImdldEJhY2tlbmRBZGRyZXNzIiwiZnJvbnRlbmQiLCJhdXRoUHJvcHMiLCJzaGFwZSIsImJvb2wiLCJwcm9maWxlUHJvcHMiLCJlbWFpbCIsInB1cmNoYXNlcyIsImFycmF5T2YiLCJsYXRlc3RQb3N0c1Byb3BzIiwiZGVzY3JpcHRpb24iLCJjcmVhdG9yTmFtZSIsInVwZGF0ZWQiLCJudW1iZXIiLCJzdWJ0aXRsZSIsImN1cnJlbmN5VW5pdCIsImN1cnJlbmN5SVNPQ29kZSIsInB1YmxpY0NvdXJzZSIsImlzRmVhdHVyZWQiLCJjb3N0IiwiY3JlYXRvcklkIiwiY3JlYXRvckNvdXJzZSIsInNpdGVVc2VyIiwidmVyaWZpZWQiLCJhdmF0YXIiLCJmZWF0dXJlZENvdXJzZSIsImZlYXR1cmVkSW1hZ2UiLCJhcHBNZXNzYWdlIiwiZnVuYyIsImxlc3NvbiIsInR5cGUiLCJkb3dubG9hZGFibGUiLCJjb250ZW50VVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUMxQixRQUFNO0FBQUVDO0FBQUYsTUFBY0QsS0FBcEI7QUFDQSxRQUFNRSxNQUFNLEdBQUdELE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxNQUFsQzs7QUFFQSxRQUFNQyxXQUFXLEdBQUcs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IjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgU25hY2tiYXIsIEljb25CdXR0b24sIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCB7IGNsZWFyQXBwTWVzc2FnZSB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGFwcE1lc3NhZ2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBBcHBUb2FzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYWN0aW9uID0gbWVzc2FnZSAmJiBtZXNzYWdlLmFjdGlvbjtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG4gICAgaWYgKHJlYXNvbiA9PT0gXCJjbGlja2F3YXlcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9wcm9wcy5kaXNwYXRjaChjbGVhckFwcE1lc3NhZ2UoKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QWN0aW9uQnV0dG9uc0FycmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uQnV0dG9uc0FycmF5ID0gW1xyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2xvc2UgLz5cclxuICAgICAgPC9JY29uQnV0dG9uPixcclxuICAgIF07XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIGFjdGlvbkJ1dHRvbnNBcnJheS51bnNoaWZ0KFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGtleT1cImFjdGlvblwiXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgb25DbGljaz17bWVzc2FnZS5hY3Rpb24uY2J9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge21lc3NhZ2UuYWN0aW9uLnRleHR9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbkJ1dHRvbnNBcnJheTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvcGVuPXttZXNzYWdlLm9wZW59XHJcbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICBtZXNzYWdlPXs8c3Bhbj57bWVzc2FnZS5tZXNzYWdlfTwvc3Bhbj59XHJcbiAgICAgICAgICBhY3Rpb249e2dldEFjdGlvbkJ1dHRvbnNBcnJheSgpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy9BcHBUb2FzdC5wcm9wVHlwZXMgPSB7XHJcbi8vICBtZXNzYWdlOiBhcHBNZXNzYWdlLmlzUmVxdWlyZWQsXHJcbi8vICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy99O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGRpc3BhdGNoOiBkaXNwYXRjaCxcclxufSk7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcFRvYXN0KTtcclxuZXhwb3J0IGRlZmF1bHQgQXBwVG9hc3RcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgU2Vzc2lvbkJ1dHRvbiBmcm9tIFwiLi4vU2Vzc2lvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBzaXRlSW5mb1Byb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvTXlDb250ZXh0XCI7XHJcblxyXG5jb25zdCBJbWcgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL0ltZy5qc1wiKSk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBsb2dvOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGxvZ29jb250YWluZXI6IHtcclxuICAgIHdpZHRoOiBcIjJlbVwiLFxyXG4gICAgaGVpZ2h0OiBcIjJlbVwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGxvZ29pbWc6IHtcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjJlbVwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHNpdGVJbmZvIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgZGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8SW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzaXRlSW5mby5sb2dvcGF0aH1cclxuICAgICAgICAgICAgICAgICAgICBpc1RodW1ibmFpbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzLmxvZ29pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlPVwiL2NvdXJzZWxpdF9iYWNrZHJvcF9zcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57c2l0ZUluZm8udGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxTZXNzaW9uQnV0dG9uIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBzaXRlaW5mbzogc2l0ZUluZm9Qcm9wcyxcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBzaXRlaW5mbzogc3RhdGUuc2l0ZWluZm8sXHJcbn0pO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUljb24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgT3BlbkluTmV3IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGxpbmsgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGV4dGVybmFsTGluazoge1xyXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTWVudUl0ZW0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxpbmsgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIGxpbmsuZGVzdGluYXRpb24uaW5kZXhPZihcImh0dHBcIikgIT09IC0xIHx8IGxpbmsubmV3VGFiID8gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17bGluay5kZXN0aW5hdGlvbn1cclxuICAgICAga2V5PXtsaW5rLnRleHR9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZXJuYWxMaW5rfVxyXG4gICAgICBvbkNsaWNrPXtwcm9wcy5jbG9zZURyYXdlciA/IHByb3BzLmNsb3NlRHJhd2VyIDogKCkgPT4geyB9fVxyXG4gICAgPlxyXG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17bGluay50ZXh0fT48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICB7bGluay5uZXdUYWIgJiYgKFxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPE9wZW5Jbk5ldyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgIDwvYT5cclxuICApIDogKFxyXG4gICAgPExpbmsgaHJlZj17bGluay5kZXN0aW5hdGlvbn0ga2V5PXtsaW5rLnRleHR9PlxyXG4gICAgICA8TGlzdEl0ZW1cclxuICAgICAgICBidXR0b25cclxuICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5jbG9zZURyYXdlciA/IHByb3BzLmNsb3NlRHJhd2VyIDogKCkgPT4geyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtsaW5rLnRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL01lbnVJdGVtLnByb3BUeXBlcyA9IHtcclxuLy8gIGxpbms6IGxpbmssXHJcbi8vICBjbG9zZURyYXdlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbi8vfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBHcmlkLCBMaW5lYXJQcm9ncmVzcywgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuLy9pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBBcHBUb2FzdCBmcm9tIFwiLi4vLi4vLi4vQXBwVG9hc3QuanNcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vaW1wb3J0IHsgc2l0ZUluZm9Qcm9wcywgbGluaywgcHJvZmlsZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzLmpzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIE1BSU5fTUVOVV9JVEVNX0RBU0hCT0FSRCxcclxuICBNQUlOX01FTlVfSVRFTV9QUk9GSUxFLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWcvc3RyaW5ncy5qc1wiO1xyXG5pbXBvcnQgeyBOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL2NvbnN0YW50cy5qc1wiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW0uanNcIjtcclxuaW1wb3J0IE15Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29udGV4dC9NeUNvbnRleHQuanNcIjtcclxuXHJcbi8vaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuLi9UZW1wbGF0ZS5qc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgYWN0aXZlSXRlbToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjZDZkNmQ2XCIsXHJcbiAgfSxcclxuICB2aXNpdFNpdGVMaW5rOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgfSxcclxuICBzaG93UHJvZ3Jlc3NCYXI6IChwcm9wcykgPT4gKHtcclxuICAgIHZpc2liaWxpdHk6IHByb3BzLm5ldHdvcmtBY3Rpb24gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXHJcbiAgfSksXHJcbiAgbWVudVRpdGxlOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNjYWZmb2xkID0gKHsgY2hpbGRyZW4sIHByb3BzIH0pID0+IHtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpOy8vPSB1c2VTdHlsZXMocHJvcHMpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCB7IHNpdGVJbmZvLCBwcm9maWxlLCBuYXZpZ2F0aW9uIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZURyYXdlclRvZ2dsZSgpIHtcclxuICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZURyYXdlciA9IChmb3JNb2JpbGUgPSBmYWxzZSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubWVudVRpdGxlfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntzaXRlSW5mby50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtwcm9maWxlLmZldGNoZWQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb3BzLnByb2ZpbGUuaWQgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgbGluaz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IE1BSU5fTUVOVV9JVEVNX1BST0ZJTEUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IGAvcHJvZmlsZS8ke3Byb3BzLnByb2ZpbGUudXNlcklkICYmIHByb3BzLnByb2ZpbGUudXNlcklkICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy5wcm9maWxlLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5wcm9maWxlLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YCxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogTkFWSUdBVElPTl9DQVRFR09SWV9NQUlOLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RhYjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyhwcm9wcy5wcm9maWxlLmlzQWRtaW4gfHwgcHJvcHMucHJvZmlsZS5pc0NyZWF0b3IpICYmIChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgIGxpbms9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dDogTUFJTl9NRU5VX0lURU1fREFTSEJPQVJELFxyXG4gICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvZGFzaGJvYXJkL2NvdXJzZXNcIixcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IE5BVklHQVRJT05fQ0FURUdPUllfTUFJTixcclxuICAgICAgICAgICAgICAgICAgbmV3VGFiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge25hdmlnYXRpb24gJiZcclxuICAgICAgICAgIG5hdmlnYXRpb24ubWFwKChsaW5rKSA9PlxyXG4gICAgICAgICAgICBmb3JNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAga2V5PXtsaW5rLmRlc3RpbmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2xvc2VEcmF3ZXI9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBsaW5rPXtsaW5rfSBrZXk9e2xpbmsuZGVzdGluYXRpb259IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9IGFyaWEtbGFiZWw9XCJtZW51XCI+XHJcbiAgICAgICAgey8qIFRoZSBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgc3dhcHBlZCB3aXRoIGpzIHRvIGF2b2lkIFNFTyBkdXBsaWNhdGlvbiBvZiBsaW5rcy4gKi99XHJcbiAgICAgICAgPEhpZGRlbiBzbVVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgICAgICAgICBhbmNob3I9e3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxyXG4gICAgICAgICAgICBvcGVuPXttb2JpbGVPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgTW9kYWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlLCAvLyBCZXR0ZXIgb3BlbiBwZXJmb3JtYW5jZSBvbiBtb2JpbGUuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYWtlRHJhd2VyKHRydWUpfVxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPEhpZGRlbiB4c0Rvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICAgICAgb3BlblxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWFrZURyYXdlcigpfVxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgIDwvbmF2ID5cclxuICAgICAgPGE+c2NhZm9vbGY8L2E+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxyXG4gICAgICAgIDxMaW5lYXJQcm9ncmVzcyBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd1Byb2dyZXNzQmFyfSAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8QXBwVG9hc3QgLz5cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59O1xyXG5cclxuLy9TY2FmZm9sZC5wcm9wVHlwZXMgPSB7XHJcbi8vICBjaGlsZHJlbjogUHJvcFR5cGVzLm9iamVjdCxcclxuLy9zaXRlaW5mbzogc2l0ZUluZm9Qcm9wcyxcclxuLy9uYXZpZ2F0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihsaW5rKSxcclxuLy9uZXR3b3JrQWN0aW9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4vL3Byb2ZpbGU6IHByb2ZpbGVQcm9wcyxcclxuLy99O1xyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbi8vICBzaXRlaW5mbzogc3RhdGUuc2l0ZWluZm8sXHJcbi8vICBuYXZpZ2F0aW9uOiBzdGF0ZS5uYXZpZ2F0aW9uLmZpbHRlcigobGluaykgPT4gbGluay5jYXRlZ29yeSA9PT0gXCJtYWluXCIpLFxyXG4vLyAgbmV0d29ya0FjdGlvbjogc3RhdGUubmV0d29ya0FjdGlvbixcclxuLy8gIHByb2ZpbGU6IHN0YXRlLnByb2ZpbGUsXHJcbi8vfSk7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTY2FmZm9sZCk7XHJcbmV4cG9ydCBkZWZhdWx0IFNjYWZmb2xkXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgV2lkZ2V0QnlOYW1lIGZyb20gXCIuL1dpZGdldEJ5TmFtZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHdpZGdldHMgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy93aWRnZXRzXCI7XHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvTXlDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBsYXlvdXQgfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KVxyXG4gIGNvbnN0IHNlY3Rpb25MYXlvdXQgPSBsYXlvdXRbbmFtZV07XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uTGF5b3V0ICYmIHNlY3Rpb25MYXlvdXQubGVuZ3RoID8gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgIHtzZWN0aW9uTGF5b3V0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgd2lkZ2V0c1tpdGVtXS5tZXRhZGF0YS5leGNsdWRlRnJvbVBhdGhzICYmXHJcbiAgICAgICAgICB3aWRnZXRzW2l0ZW1dLm1ldGFkYXRhLmV4Y2x1ZGVGcm9tUGF0aHMuaW5jbHVkZXMocm91dGVyLnBhdGhuYW1lKSA/IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+PC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxXaWRnZXRCeU5hbWUgbmFtZT17aXRlbX0gc2VjdGlvbj17bmFtZX0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKSA6IChcclxuICAgIDw+PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbi8vICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbi8vICBsYXlvdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtsYXlvdXQ6IHN0YXRlLmxheW91dCx9KVxyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWN0aW9uKTtcclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgbWFpbkNvbnRlbnQ6IHtcclxuICAgIG1heFdpZHRoOiAxMjQwLFxyXG4gICAgbWluSGVpZ2h0OiBcIjgwdmhcIixcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9ICh7IGNoaWxkcmVuLCBwcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpLy8gdXNlU3R5bGVzKHByb3BzKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIHsvKiogVG9wICovfVxyXG4gICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiICYmIDxTZWN0aW9uIG5hbWU9XCJ0b3BcIiAvPn1cclxuXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwicm93XCIgeHM+XHJcbiAgICAgICAgICB7LyoqIE1haW4gKi99XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJjb2x1bW5cIiB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtPlxyXG4gICAgICAgICAgICAgIDxTZWN0aW9uIG5hbWU9XCJib3R0b21cIiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgey8qKiBBc2lkZSAqL31cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj1cImNvbHVtblwiIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbiBuYW1lPVwiYXNpZGVcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgey8qKiBGb290ZXIgKi99XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPERpdmlkZXIgbGlnaHQgLz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJjb2x1bW5cIiB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgPFNlY3Rpb24gbmFtZT1cImZvb3RlckxlZnRcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwiY29sdW1uXCIgeHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uIG5hbWU9XCJmb290ZXJSaWdodFwiIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL1RlbXBsYXRlLnByb3BUeXBlcyA9IHtcclxuLy8gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbi8vfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHdpZGdldHMgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy93aWRnZXRzXCI7XHJcbmltcG9ydCBGZXRjaEJ1aWxkZXIgZnJvbSBcIi4uLy4uLy4uL2xpYi9mZXRjaFwiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25zdGFudHNcIjtcclxuaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRyZXNzUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IFdpZGdldEJ5TmFtZSA9ICh7IG5hbWUsIHNlY3Rpb24sIGFkZHJlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFdpZGdldCA9IHdpZGdldHNbbmFtZV0ud2lkZ2V0O1xyXG4gIGNvbnN0IGZldGNoID0gbmV3IEZldGNoQnVpbGRlcigpXHJcbiAgICAuc2V0VXJsKGAke2FkZHJlc3MuYmFja2VuZH0vZ3JhcGhgKVxyXG4gICAgLnNldElzR3JhcGhRTEVuZHBvaW50KHRydWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFdpZGdldFxyXG4gICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgZmV0Y2hCdWlsZGVyPXtmZXRjaH1cclxuICAgICAgICBzZWN0aW9uPXtzZWN0aW9ufVxyXG4gICAgICAgIGNvbmZpZz17T2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCB7XHJcbiAgICAgICAgICBCQUNLRU5EOiBhZGRyZXNzLmJhY2tlbmQsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgdXRpbGl0aWVzPXt1dGlsaXRpZXN9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuV2lkZ2V0QnlOYW1lLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2VjdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGFkZHJlc3M6IGFkZHJlc3NQcm9wcyxcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShXaWRnZXRCeU5hbWUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgZm9ybXVsYXRlTWVkaWFVcmwgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzLmpzXCI7XHJcbi8vaW1wb3J0IHsgYWRkcmVzc1Byb3BzLCBzaXRlSW5mb1Byb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzLmpzXCI7XHJcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi9UZW1wbGF0ZS5qc1wiO1xyXG5pbXBvcnQgU2NhZmZvbGQgZnJvbSBcIi4vU2NhZmZvbGRcIjtcclxuaW1wb3J0IE15Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9NeUNvbnRleHQuanNcIjtcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuLi8uLi8uLi9jb25maWcvZGVmYXVsdFN0YXRlJ1xyXG5cclxuLy90eXBlIFByb3BzID0ge1xyXG4vLyAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XHJcbi8vICB0aXRsZT86IHN0cmluZztcclxuLy8gIGZvbGxvd0xpbmtzPzogYm9vbGVhbjtcclxuLy8gIGRlc2NyaXB0Pzogc3RyaW5nO1xyXG4vL307XHJcblxyXG5jb25zdCBNYXN0ZXJMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIHByb3BzIH0pID0+IHtcclxuICBjb25zdCB7IHNpdGVJbmZvIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAge3RpdGxlfSB8IHtzaXRlSW5mbz8udGl0bGV9XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgICB7c2l0ZUluZm8/LmxvZ29wYXRoICYmIChcclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgICBocmVmPXtmb3JtdWxhdGVNZWRpYVVybChcclxuICAgICAgICAgICAgICBkZWZhdWx0U3RhdGUuYWRkcmVzcy5iYWNrZW5kLFxyXG4gICAgICAgICAgICAgIHNpdGVJbmZvPy5sb2dvcGF0aCxcclxuICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgIHNpdGVJbmZvPy5sb2dvcGF0aFxyXG4gICAgICAgICAgICAgID8gZm9ybXVsYXRlTWVkaWFVcmwoXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U3RhdGUuYWRkcmVzcy5iYWNrZW5kLFxyXG4gICAgICAgICAgICAgICAgc2l0ZUluZm8/LmxvZ29wYXRoLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IFwiL2NvdXJzZWxpdF9iYWNrZHJvcF9zcXVhcmUud2VicFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTY2FmZm9sZCAgPlxyXG4gICAgICAgIDxUZW1wbGF0ZT57Y2hpbGRyZW59PC9UZW1wbGF0ZT5cclxuICAgICAgPC9TY2FmZm9sZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL01hc3RlckxheW91dC5wcm9wVHlwZXMgPSB7XHJcbi8vICBjaGlsZHJlbjogUHJvcFR5cGVzLm9iamVjdCxcclxuLy8gIG5ldHdvcmtBY3Rpb246IFByb3BUeXBlcy5ib29sLFxyXG4vLyAgc2l0ZUluZm86IHNpdGVJbmZvUHJvcHM/LmlzUmVxdWlyZWQsXHJcbi8vICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4vLyAgbGF5b3V0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbi8vICBhZGRyZXNzOiBhZGRyZXNzUHJvcHMsXHJcbi8vfTtcclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbi8vICBuZXR3b3JrQWN0aW9uOiBzdGF0ZS5uZXR3b3JrQWN0aW9uLFxyXG4vLyAgc2l0ZUluZm86IHN0YXRlLnNpdGVpbmZvLFxyXG4vLyAgbGF5b3V0OiBzdGF0ZS5sYXlvdXQsXHJcbi8vICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxyXG4vL30pO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNYXN0ZXJMYXlvdXQpO1xyXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXJMYXlvdXRcclxuIiwiLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IHByb3ZpZGVzIGEgY2xpY2thYmxlIGJ1dHRvbiB3aGljaCBzaG93cyBpZiB0aGUgdXNlclxyXG4gKiBpcyBsb2dnZWQgaW4gb3IgaXMgYSBndWVzdC5cclxuICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIEdFTkVSSUNfU0lHTk9VVF9URVhULFxyXG4gIEdFTkVSSUNfU0lHTklOX1RFWFQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbmZpZy9zdHJpbmdzLmpzXCI7XHJcbi8vaW1wb3J0IHsgYXV0aFByb3BzLCBwcm9maWxlUHJvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgTXlDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L015Q29udGV4dC5qc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbkJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGF1dGhQcm9wIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthdXRoUHJvcC5ndWVzdCA/IChcclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PntHRU5FUklDX1NJR05JTl9URVhUfTwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ291dFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT57R0VORVJJQ19TSUdOT1VUX1RFWFR9PC9CdXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy9TZXNzaW9uQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuLy8gIGF1dGg6IGF1dGhQcm9wcyxcclxuLy8gIHByb2ZpbGU6IHByb2ZpbGVQcm9wcyxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgYXV0aDogc3RhdGUuYXV0aCwgcHJvZmlsZTogc3RhdGUucHJvZmlsZSwgfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlc3Npb25CdXR0b24pO1xyXG5leHBvcnQgZGVmYXVsdCBTZXNzaW9uQnV0dG9uXHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgYXBwbGljYXRpb24gd2lkZSBjb25zdGFudHMuXHJcbiAqL1xyXG4vLyBpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG4vLyBjb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcsIHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuLy8gY29uc3QgTE9DQUxfQkFDS0VORCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XHJcbi8vIGNvbnN0IExPQ0FMX0ZST05URU5EID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuLy8gY29uc3QgQVBJX1BSRUZJWCA9IHB1YmxpY1J1bnRpbWVDb25maWcuYXBpUHJlZml4IHx8IFwiL2FwaVwiO1xyXG5cclxuLy8gY29uc3QgcmVzb2x2ZVByb2R1Y3Rpb25CYWNrZW5kID0gKCkgPT4gcHJvY2Vzcy5lbnYuQkFDS0VORFxyXG4vLyAgID8gYGh0dHA6Ly9iYWNrZW5kOjgwMDAke0FQSV9QUkVGSVh9YCAvLyBTZXJ2ZXItc2lkZSBBUEkgcGF0aCAoU1NSKVxyXG4vLyAgIDogIEFQSV9QUkVGSVggLy8gQ2xpZW50LXNpZGUgQVBJIHBhdGhcclxuLy8gZXhwb3J0IGNvbnN0IEJBQ0tFTkQgPVxyXG4vLyAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4vLyAgICAgPyBzZXJ2ZXJSdW50aW1lQ29uZmlnLnNzclVybFxyXG4vLyAgICAgICA/IHNlcnZlclJ1bnRpbWVDb25maWcuc3NyVXJsICsgQVBJX1BSRUZJWFxyXG4vLyAgICAgICA6IEFQSV9QUkVGSVhcclxuLy8gICAgIDogTE9DQUxfQkFDS0VORDtcclxuLy8gZXhwb3J0IGNvbnN0IEZST05URU5EID0gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsIHx8IExPQ0FMX0ZST05URU5EO1xyXG4vLyBleHBvcnQgY29uc3QgTUVESUFfQkFDS0VORCA9IHB1YmxpY1J1bnRpbWVDb25maWcubWFpblVybFxyXG4vLyAgID8gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsICsgQVBJX1BSRUZJWFxyXG4vLyAgIDogTE9DQUxfQkFDS0VORDtcclxuXHJcbi8vIENvbnN0YW50cyBmb3IgYXV0aCByZWxhdGVkIGZ1bmN0aW9uYWxpdGllc1xyXG5leHBvcnQgY29uc3QgSldUX0NPT0tJRV9OQU1FID0gXCJhY2Nlc3NfdG9rZW5cIjtcclxuZXhwb3J0IGNvbnN0IFVTRVJJRF9DT09LSUVfTkFNRSA9IFwiZW1haWxcIjtcclxuXHJcbi8vIENvbnN0YW50cyB0aGF0IHJlcHJlc2VudCB0eXBlcyBmcm9tIHRoZSBzZXJ2ZXJcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX1RFWFQgPSBcInRleHRcIjtcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX0FVRElPID0gXCJhdWRpb1wiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfVklERU8gPSBcInZpZGVvXCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fVFlQRV9QREYgPSBcInBkZlwiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfUVVJWiA9IFwicXVpelwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVSTF9FWFRFTlRJT05fUE9TVFMgPSBcInBvc3RcIjtcclxuZXhwb3J0IGNvbnN0IFVSTF9FWFRFTlRJT05fQ09VUlNFUyA9IFwiY291cnNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRlJFRV9DT1VSU0VTX1RFWFQgPSBcIkZSRUVcIjtcclxuXHJcbi8vIENvbnN0YW50IGZvciByZXByZXNlbnRpbmcgRHJhZnRqcycgZW50aXRpZXNcclxuZXhwb3J0IGNvbnN0IERSQUZUSlNfRU5USVRZX1RZUEVfSU1BR0UgPSBcImltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBEUkFGVEpTX0VOVElUWV9UWVBFX1ZJREVPID0gXCJ2aWRlb1wiO1xyXG5leHBvcnQgY29uc3QgRFJBRlRKU19FTlRJVFlfVFlQRV9BVURJTyA9IFwiYXVkaW9cIjtcclxuXHJcbi8vIFBheW1lbnQgbWV0aG9kc1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NRVRIT0RfU1RSSVBFID0gXCJzdHJpcGVcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1BBWVBBTCA9IFwicGF5cGFsXCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9QQVlUTSA9IFwicGF5dG1cIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX05PTkUgPSBcIlwiO1xyXG5cclxuLy8gdHJhbnNhY3Rpb24gc3RhdHVzZXMgZnJvbSBiYWNrZW5kXHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9JTklUSUFURUQgPSBcImluaXRpYXRlZFwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1VDQ0VTUyA9IFwic3VjY2Vzc1wiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fRkFJTEVEID0gXCJmYWlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05TRUNVVElWRV9QQVlNRU5UX1ZFUklGSUNBVElPTl9SRVFVRVNUX0dBUCA9IDIwMDA7XHJcblxyXG4vLyBtaW1lIHR5cGVzXHJcbmV4cG9ydCBjb25zdCBNSU1FVFlQRV9WSURFTyA9IFtcInZpZGVvL21wNFwiXTtcclxuZXhwb3J0IGNvbnN0IE1JTUVUWVBFX0FVRElPID0gW1wiYXVkaW8vbXAzXCJdO1xyXG5leHBvcnQgY29uc3QgTUlNRVRZUEVfSU1BR0UgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRVNfUkVQTyA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGVsaXRkZXYvY291cnNlbGl0LXRoZW1lc1wiO1xyXG5cclxuLy8gTmF2aWdhdGlvbiBjYXRlZ29yaWVzXHJcbmV4cG9ydCBjb25zdCBOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4gPSBcIm1haW5cIjtcclxuZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fQ0FURUdPUllfRk9PVEVSID0gXCJmb290ZXJcIjtcclxuIiwiaW1wb3J0IHsgd2lkZ2V0cyB9IGZyb20gXCIuLi9jb3Vyc2VsaXQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpZGdldHM7XHJcbiIsImltcG9ydCBidXR0b25kb3duIGZyb20gXCJAY291cnNlbGl0L3dpZGdldC1idXR0b25kb3duXCI7XHJcbmltcG9ydCBDb21tb25XaWRnZXRzIGZyb20gXCJAY291cnNlbGl0L2NvbW1vbi13aWRnZXRzXCI7XHJcblxyXG5jb25zdCBnZXRBbGxXaWRnZXRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdpZGdldHMgPSB7fTtcclxuXHJcbiAgLy8gQWRkIGNvbW1vbiB3aWRnZXRzIHRvIENvdXJzZUxpdFxyXG4gIGZvciAoY29uc3Qgd2lkZ2V0IG9mIENvbW1vbldpZGdldHMpIHtcclxuICAgIHdpZGdldHNbd2lkZ2V0Lm1ldGFkYXRhLm5hbWVdID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkaXRpb25hbCB3aWRnZXRzIGFyZSBhZGRlZCBoZXJlXHJcbiAgd2lkZ2V0c1tidXR0b25kb3duLm1ldGFkYXRhLm5hbWVdID0gYnV0dG9uZG93bjtcclxuXHJcbiAgcmV0dXJuIHdpZGdldHM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2lkZ2V0cyA9IGdldEFsbFdpZGdldHMoKTtcclxuIiwiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHtcclxuICBVUkxfRVhURU5USU9OX1BPU1RTLFxyXG4gIFVSTF9FWFRFTlRJT05fQ09VUlNFUyxcclxufSBmcm9tIFwiLi4vY29uZmlnL2NvbnN0YW50cy5qc1wiO1xyXG5pbXBvcnQgeyBSaWNoVGV4dCBhcyBUZXh0RWRpdG9yIH0gZnJvbSBcIkBjb3Vyc2VsaXQvY29tcG9uZW50cy1saWJyYXJ5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcXVlcnlHcmFwaFFMID0gYXN5bmMgKHVybCwgcXVlcnksIHRva2VuKSA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB0b2tlblxyXG4gICAgICA/IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfVxyXG4gICAgICA6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXHJcbiAgfTtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xyXG4gIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBpZiAocmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3JzWzBdLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeUdyYXBoUUxXaXRoVUlFZmZlY3RzID0gKFxyXG4gIGJhY2tlbmQsXHJcbiAgZGlzcGF0Y2gsXHJcbiAgbmV0d29ya0FjdGlvbixcclxuICB0b2tlblxyXG4pID0+IGFzeW5jIChxdWVyeSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkaXNwYXRjaChuZXR3b3JrQWN0aW9uKGZhbHNlKSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5R3JhcGhRTChgJHtiYWNrZW5kfS9ncmFwaGAsIHF1ZXJ5LCB0b2tlbik7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBkaXNwYXRjaChuZXR3b3JrQWN0aW9uKGZhbHNlKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlZExvY2FsZURhdGUgPSAoZXBvY2hTdHJpbmcpID0+XHJcbiAgbmV3IERhdGUoTnVtYmVyKGVwb2NoU3RyaW5nKSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgfSk7XHJcblxyXG4vLyBSZWdleCBjb3BpZWQgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4Njc1MTYwLzk0MjU4OVxyXG5leHBvcnQgY29uc3QgbWFrZUdyYXBoUUxRdWVyeVN0cmluZ0Zyb21KU09iamVjdCA9IChvYmopID0+XHJcbiAgSlNPTi5zdHJpbmdpZnkob2JqKS5yZXBsYWNlKC9cIihbXihcIilcIl0rKVwiOi9nLCBcIiQxOlwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtdWxhdGVNZWRpYVVybCA9IChcclxuICBiYWNrZW5kLFxyXG4gIG1lZGlhSUQsXHJcbiAgZ2VuZXJhdGVUaHVtYm5haWxVcmwgPSBmYWxzZVxyXG4pID0+XHJcbiAgbWVkaWFJRFxyXG4gICAgPyBgJHtiYWNrZW5kfS9tZWRpYS8ke21lZGlhSUR9JHtnZW5lcmF0ZVRodW1ibmFpbFVybCA/IFwiP3RodW1iPTFcIiA6IFwiXCJ9YFxyXG4gICAgOiBcIlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm11bGF0ZUNvdXJzZVVybCA9IChjb3Vyc2UsIGJhY2tlbmQgPSBcIlwiKSA9PlxyXG4gIGAke2JhY2tlbmR9LyR7Y291cnNlLmlzQmxvZyA/IFVSTF9FWFRFTlRJT05fUE9TVFMgOiBVUkxfRVhURU5USU9OX0NPVVJTRVN9LyR7Y291cnNlLmNvdXJzZUlkXHJcbiAgfS8ke2NvdXJzZS5zbHVnfWA7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdERlc2NyaXB0aW9uU25pcHBldCA9IChyYXdEcmFmdEpTQ29udGVudFN0YXRlKSA9PiB7XHJcbiAgY29uc3QgZmlyc3RTZW50ZW5jZSA9IFRleHRFZGl0b3IuaHlkcmF0ZSh7IGRhdGE6IHJhd0RyYWZ0SlNDb250ZW50U3RhdGUgfSlcclxuICAgIC5nZXRDdXJyZW50Q29udGVudCgpXHJcbiAgICAuZ2V0UGxhaW5UZXh0KClcclxuICAgIC5zcGxpdChcIi5cIilbMF07XHJcblxyXG4gIHJldHVybiBmaXJzdFNlbnRlbmNlID8gZmlyc3RTZW50ZW5jZSArIFwiLlwiIDogZmlyc3RTZW50ZW5jZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHcmFwaFFMUXVlcnlGaWVsZHMgPSAoXHJcbiAganNPYmosXHJcbiAgZmllbGRzTm90UHV0QmV0d2VlblF1b3RlcyA9IFtdXHJcbikgPT4ge1xyXG4gIGxldCBxdWVyeVN0cmluZyA9IFwie1wiO1xyXG4gIGZvciAoY29uc3QgaSBvZiBPYmplY3Qua2V5cyhqc09iaikpIHtcclxuICAgIGlmIChqc09ialtpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHF1ZXJ5U3RyaW5nICs9IGZpZWxkc05vdFB1dEJldHdlZW5RdW90ZXMuaW5jbHVkZXMoaSlcclxuICAgICAgICA/IGAke2l9OiAke2pzT2JqW2ldfSxgXHJcbiAgICAgICAgOiBgJHtpfTogXCIke2pzT2JqW2ldfVwiLGA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHF1ZXJ5U3RyaW5nICs9IFwifVwiO1xyXG5cclxuICByZXR1cm4gcXVlcnlTdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0Q29udGFpbmluZ09ubHlDaGFuZ2VkRmllbGRzID0gKGJhc2VsaW5lLCBvYmopID0+IHtcclxuICBjb25zdCByZXN1bHQgPSB7fTtcclxuICBmb3IgKGNvbnN0IGkgb2YgT2JqZWN0LmtleXMoYmFzZWxpbmUpKSB7XHJcbiAgICBpZiAoYmFzZWxpbmVbaV0gIT09IG9ialtpXSkge1xyXG4gICAgICByZXN1bHRbaV0gPSBvYmpbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXJlT2JqZWN0c0RpZmZlcmVudCA9IChiYXNlbGluZSwgb2JqKSA9PiB7XHJcbiAgY29uc3Qgb25seUNoYW5nZWRGaWVsZHMgPSBnZXRPYmplY3RDb250YWluaW5nT25seUNoYW5nZWRGaWVsZHMoYmFzZWxpbmUsIG9iaik7XHJcbiAgcmV0dXJuICEhT2JqZWN0LmtleXMob25seUNoYW5nZWRGaWVsZHMpLmxlbmd0aDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBZGRyZXNzID0gKGhvc3QpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZG9tYWluOiBleHRyYWN0RG9tYWluRnJvbVVSTChob3N0KSxcclxuICAgIGJhY2tlbmQ6IGdldEJhY2tlbmRBZGRyZXNzKGhvc3QpLFxyXG4gICAgZnJvbnRlbmQ6IGBodHRwOi8vJHtob3N0fWAsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCYWNrZW5kQWRkcmVzcyA9IChob3N0KSA9PiB7XHJcbiAgY29uc3QgZG9tYWluID0gZXh0cmFjdERvbWFpbkZyb21VUkwoaG9zdCk7XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJub3Rfd29yZF9pbl9wcm9kdWN0aW9uXCIpIHtcclxuICAgIHJldHVybiBgJHtwcm9jZXNzLmVudi5JTlNFQ1VSRSA9PT0gXCJ0cnVlXCIgPyBcImh0dHBcIiA6IFwiaHR0cHNcIlxyXG4gICAgICB9Oi8vJHtkb21haW59L2FwaWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgaHR0cDovLyR7ZG9tYWlufTo4MDAwYDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBleHRyYWN0RG9tYWluRnJvbVVSTCA9IChob3N0KSA9PiB7XHJcbiAgcmV0dXJuIGhvc3Quc3BsaXQoXCI6XCIpWzBdO1xyXG59O1xyXG4iLCIvKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgUHJvcFR5cGVzIHVzZWQgYWNyb3NzIHRoZSBhcHAuXHJcbiAqL1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aFByb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBndWVzdDogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICB0b2tlbjogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGlzQ3JlYXRvcjogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgZmV0Y2hlZDogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgcHVyY2hhc2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGF0ZXN0UG9zdHNQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY3JlYXRvck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB1cGRhdGVkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaXRlSW5mb1Byb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGxvZ29wYXRoOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBjdXJyZW5jeVVuaXQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGN1cnJlbmN5SVNPQ29kZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHB1YmxpY0NvdXJzZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY3JlYXRvck5hbWU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHVwZGF0ZWQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBpc0ZlYXR1cmVkOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGNvc3Q6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY3JlYXRvcklkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRvckNvdXJzZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgdXBkYXRlZDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgaXNGZWF0dXJlZDogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBjb3N0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaXRlVXNlciA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdmVyaWZpZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNDcmVhdG9yOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzQWRtaW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBwdXJjaGFzZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZWF0dXJlZENvdXJzZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNvc3Q6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBmZWF0dXJlZEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwTWVzc2FnZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWN0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY2I6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxlc3NvbiA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBkb3dubG9hZGFibGU6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgY29udGVudFVSTDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmsgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbmV3VGFiOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRyZXNzUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGJhY2tlbmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmcm9udGVuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRvbWFpbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==