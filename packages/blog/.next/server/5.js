exports.ids = [5];
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

/***/ "./config/defaultState.js":
/*!********************************!*\
  !*** ./config/defaultState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings.js */ "./config/strings.js");

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

/***/ }),

/***/ "./config/strings.js":
/*!***************************!*\
  !*** ./config/strings.js ***!
  \***************************/
/*! exports provided: ERR_ALL_FIELDS_REQUIRED, ERR_PASSWORDS_DONT_MATCH, SIGNUP_SUCCESS, ERR_COURSE_TITLE_REQUIRED, ERR_COURSE_COST_REQUIRED, RESP_API_USER_CREATED, CREATOR_AREA_LINK_TEXT, CREATOR_AREA_PAGE_TITLE, GENERIC_TITLE, GENERIC_SUBTITLE, GENERIC_LOGO_PATH, GENERIC_SIGNIN_TEXT, GENERIC_SIGNUP_TEXT, GENERIC_SIGNOUT_TEXT, GENERIC_CURRENCY_UNIT, GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT, GENERIC_CURRENCY_ISO_CODE, GENERIC_PAYMENT_METHOD, GENERIC_THEME_COLOR_PRIMARY, GENERIC_THEME_COLOR_SECONDARY, GENERIC_CODE_INJECTION_HEAD, BTN_LOAD_MORE, MEDIA_UPLOAD_BUTTON_TEXT, MEDIA_UPLOADING, MEDIA_ADD_NEW_BUTTON_TEXT, BUTTON_CANCEL_TEXT, MEDIA_SEARCH_INPUT_PLACEHOLDER, LOAD_MORE_TEXT, MANAGE_MEDIA_BUTTON_TEXT, MANAGE_COURSES_PAGE_HEADING, USERS_MANAGER_PAGE_HEADING, NEW_COURSE_PAGE_HEADING, MEDIA_MANAGER_DIALOG_TITLE, BUTTON_NEW_COURSE, BUTTON_DONE_TEXT, DIALOG_TITLE_FEATURED_IMAGE, BUTTON_SET_FEATURED_IMAGE, BUTTON_SELECT_MEDIA, FORM_FIELD_FEATURED_IMAGE, BTN_DELETE_COURSE, BTN_ADD_VIDEO, ADD_VIDEO_DIALOG_TITLE, CAPTION_VERIFIED, CAPTION_UNVERIFIED, LABEL_NEW_PASSWORD, BUTTON_SAVE, SWITCH_IS_ADMIN, SWITCH_IS_CREATOR, SWITCH_ACCOUNT_ACTIVE, LABEL_CONF_PASSWORD, HEADER_BLOG_POSTS_SECTION, HEADER_COURSES_SECTION, SITE_SETTINGS_TITLE, SITE_SETTINGS_SUBTITLE, SITE_SETTINGS_CURRENCY_UNIT, SITE_SETTINGS_CURRENCY_ISO_CODE_TEXT, SITE_SETTINGS_LOGO, SITE_SETTINGS_PAGE_HEADING, SITE_ADMIN_SETTINGS_STRIPE_SECRET, SITE_ADMIN_SETTINGS_PAYPAL_SECRET, SITE_ADMIN_SETTINGS_PAYTM_SECRET, SITE_SETTINGS_SECTION_GENERAL, SITE_SETTINGS_SECTION_PAYMENT, SITE_ADMIN_SETTINGS_PAYMENT_METHOD, SITE_SETTINGS_STRIPE_PUBLISHABLE_KEY_TEXT, FREE_COST, SIDEBAR_TEXT_COURSE_ABOUT, REACT_COMPONENT_CRASHED, CHECKOUT_DIALOG_TITLE, PAYMENT_MODAL_PAYMENT_DETAILS_HEADER, PAYMENT_MODAL_COST_PREFIX, PAYMENT_MODAL_PAY_NOW_BUTTON_CAPTION, PAYMENT_INITIATION_FAILED, PAYMENT_VERIFICATION_FAILED, STRIPE_PUBLISHABLE_KEY_EMPTY, CAPTION_TRY_AGAIN, CAPTION_CLOSE, LOADING, BUTTON_NEW_LESSON_TEXT, BUTTON_DELETE_LESSON_TEXT, COURSE_DETAILS_CARD_HEADER, DANGER_ZONE_HEADER, DANGER_ZONE_DESCRIPTION, DELETE_COURSE_POPUP_HEADER, POPUP_OK_ACTION, POPUP_CANCEL_ACTION, LOGIN_SECTION_HEADER, LOGIN_SECTION_BUTTON, LOGIN_INSTEAD_BUTTON, SIGNUP_SECTION_HEADER, SIGNUP_SECTION_BUTTON, MEDIA_MANAGER_PAGE_HEADING, BUTTON_SEARCH, BUTTON_ADD_FILE, FILE_UPLOAD_SUCCESS, HEADER_YOUR_MEDIA, LESSON_EDITOR_HEADER, BLOG_POST_SWITCH, DOWNLOADABLE_SWITCH, TYPE_DROPDOWN, LESSON_CONTENT_HEADER, CONTENT_URL_LABEL, MEDIA_MANAGER_YOUR_MEDIA_HEADER, DIALOG_SELECT_BUTTON, LESSON_REQUIRES_ENROLLMENT, DELETE_LESSON_POPUP_HEADER, APP_MESSAGE_LESSON_DELETED, APP_MESSAGE_LESSON_SAVED, APP_MESSAGE_COURSE_SAVED, ENROLL_IN_THE_COURSE, USER_ERROR_HEADER, ENROLL_BUTTON_TEXT, BUTTON_DELETE_MEDIA, DELETE_MEDIA_POPUP_HEADER, HEADER_EDITING_MEDIA, HEADER_EDITING_USER, HEADER_MEDIA_PREVIEW, PREVIEW_PDF_FILE, APP_MESSAGE_MEDIA_DELETED, APP_MESSAGE_MEDIA_UPDATED, PAGE_HEADER_ALL_COURSES, PAGE_HEADER_ALL_POSTS, COURSE_TYPE_BLOG, COURSE_TYPE_COURSE, COURSE_CREATOR_PREFIX, COURSE_EDITOR_DESCRIPTION, APP_MESSAGE_SETTINGS_SAVED, ENROLLED_COURSES_HEADER, SITE_CUSTOMISATIONS_SETTING_HEADER, SITE_CUSTOMISATIONS_SETTING_CODEINJECTION_HEAD, DISCARD_COURSE_CHANGES_POPUP_HEADER, FEATURED_SECTION_HEADER, CARD_HEADER_PAGE_LAYOUT, CARD_HEADER_THEME, CARD_DESCRIPTION_PAGE_LAYOUT, ADD_COMPONENT_POPUP_HEADER, APP_MESSAGE_CHANGES_SAVED, SUBHEADER_COURSES_SECTION, SUBHEADER_FEATURED_SECTION, SUBHEADER_THEME_ADD_THEME, SUBHEADER_THEME_ADDED_THEME, SUBHEADER_THEME_ADD_THEME_INPUT_LABEL, SUBHEADER_THEME_ADD_THEME_INPUT_PLACEHOLDER, SUBHEADER_THEME_INSTALLED_THEMES, BUTTON_GET_THEMES, ERROR_SNACKBAR_PREFIX, BUTTON_THEME_APPLY, BUTTON_THEME_UNINSTALL, BUTTON_THEME_INSTALL, BUTTON_THEME_REMIX, DELETE_THEME_POPUP_HEADER, APPLY_THEME_POPUP_HEADER, REMIXED_THEME_PREFIX, APP_MESSAGE_THEME_COPIED, NO_THEMES_INSTALLED, APP_MESSAGE_THEME_INSTALLED, CONSOLE_MESSAGE_THEME_INVALID, APP_MESSAGE_THEME_APPLIED, APP_MESSAGE_THEME_UNINSTALLED, HEADER_NAVIGATION, LABEL_NAVIGATION_LINK_TEXT, LABEL_NAVIGATION_LINK_DESTINATION, LINK_DROPDOWN, ADD_NEW_LINK_BUTTON, LABEL_NAVIGATION_LINK_NEWTAB, WIDGETS_PAGE_HEADER, PAYMENTS_SHIPPING_ADDRESS_SECTION_HEADER, HEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK, SUBHEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK, PURCHASE_STATUS_PAGE_HEADER, MAIN_MENU_ITEM_DASHBOARD, MAIN_MENU_ITEM_PROFILE, LAYOUT_SECTION_MAIN_CONTENT, LAYOUT_SECTION_FOOTER_LEFT, LAYOUT_SECTION_FOOTER_RIGHT, LAYOUT_SECTION_TOP, LAYOUT_SECTION_FOOTER, LAYOUT_SECTION_BOTTOM, LAYOUT_SECTION_ASIDE, TRANSACTION_STATUS_SUCCESS, TRANSACTION_STATUS_SUCCESS_DETAILS, TRANSACTION_STATUS_INITIATED, TRANSACTION_STATUS_FAILED, TRANSACTION_STATUS_FAILED_DETAILS, VISIT_COURSE_BUTTON, VISIT_POST_BUTTON, VERIFY_PAYMENT_BUTTON, PURCHASE_ID_HEADER, PAGE_HEADER_FEATURED, BTN_VIEW_ALL, EMPTY_COURSES_LIST_ADMIN, HEADER_RESET_PASSWORD, HEADER_DESIGN, HEADER_YOUR_PROFILE, PROFILE_PAGE_MESSAGE_NOT_LOGGED_IN, PROFILE_PAGE_HEADER, PROFILE_MY_COURSES, PROFILE_PAGE_NOT_ENROLLED, PROFILE_PAGE_BROWSE_COURSES_TEXT, PROFILE_SECTION_DETAILS_NAME, PROFILE_SECTION_DETAILS_EMAIL, PROFILE_SECTION_DETAILS_BIO, PROFILE_SECTION_DETAILS_BIO_EMPTY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_ALL_FIELDS_REQUIRED", function() { return ERR_ALL_FIELDS_REQUIRED; });
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
const ERR_ALL_FIELDS_REQUIRED = "All fields are required.";
const ERR_PASSWORDS_DONT_MATCH = "Passwords do not match.";
const SIGNUP_SUCCESS = "Sign up successful. Please sign in.";
const ERR_COURSE_TITLE_REQUIRED = "A title is required.";
const ERR_COURSE_COST_REQUIRED = "Cost is required."; // Replies from the backend

const RESP_API_USER_CREATED = "User created"; // Placeholder texts

const CREATOR_AREA_LINK_TEXT = "Create";
const CREATOR_AREA_PAGE_TITLE = "Dashboard";
const GENERIC_TITLE = "My Course Site";
const GENERIC_SUBTITLE = "Learn new skills";
const GENERIC_LOGO_PATH = ""; //export const GENERIC_SIGNIN_TEXT = "Sign in";

const GENERIC_SIGNIN_TEXT = "";
const GENERIC_SIGNUP_TEXT = "Sign up"; //export const GENERIC_SIGNOUT_TEXT = "Sign out";

const GENERIC_SIGNOUT_TEXT = "";
const GENERIC_CURRENCY_UNIT = "";
const GENERIC_STRIPE_PUBLISHABLE_KEY_TEXT = "";
const GENERIC_CURRENCY_ISO_CODE = "";
const GENERIC_PAYMENT_METHOD = "";
const GENERIC_THEME_COLOR_PRIMARY = "";
const GENERIC_THEME_COLOR_SECONDARY = "";
const GENERIC_CODE_INJECTION_HEAD = ""; // UI texts

const BTN_LOAD_MORE = "Load More";
const MEDIA_UPLOAD_BUTTON_TEXT = "Upload";
const MEDIA_UPLOADING = "Uploading...";
const MEDIA_ADD_NEW_BUTTON_TEXT = "Add new";
const BUTTON_CANCEL_TEXT = "Cancel";
const MEDIA_SEARCH_INPUT_PLACEHOLDER = "Search your media";
const LOAD_MORE_TEXT = "Load more";
const MANAGE_MEDIA_BUTTON_TEXT = "Insert media";
const MANAGE_COURSES_PAGE_HEADING = "Courses";
const USERS_MANAGER_PAGE_HEADING = "Users";
const NEW_COURSE_PAGE_HEADING = "Edit course";
const MEDIA_MANAGER_DIALOG_TITLE = "Add media";
const BUTTON_NEW_COURSE = "New";
const BUTTON_DONE_TEXT = "Done";
const DIALOG_TITLE_FEATURED_IMAGE = "Select featured image";
const BUTTON_SET_FEATURED_IMAGE = "Select";
const BUTTON_SELECT_MEDIA = "Pick media";
const FORM_FIELD_FEATURED_IMAGE = "Promotional media";
const BTN_DELETE_COURSE = "Delete course";
const BTN_ADD_VIDEO = "Add";
const ADD_VIDEO_DIALOG_TITLE = "Embed an online video";
const CAPTION_VERIFIED = "Verified";
const CAPTION_UNVERIFIED = "Not verified";
const LABEL_NEW_PASSWORD = "New password";
const BUTTON_SAVE = "Save";
const SWITCH_IS_ADMIN = "Admin";
const SWITCH_IS_CREATOR = "Creator";
const SWITCH_ACCOUNT_ACTIVE = "Account active";
const LABEL_CONF_PASSWORD = "Confirm password";
const HEADER_BLOG_POSTS_SECTION = "Articles";
const HEADER_COURSES_SECTION = "Courses";
const SITE_SETTINGS_TITLE = "Title";
const SITE_SETTINGS_SUBTITLE = "Subtitle";
const SITE_SETTINGS_CURRENCY_UNIT = "Currency Unit";
const SITE_SETTINGS_CURRENCY_ISO_CODE_TEXT = "Currency ISO Code";
const SITE_SETTINGS_LOGO = "Brand Logo";
const SITE_SETTINGS_PAGE_HEADING = "Settings";
const SITE_ADMIN_SETTINGS_STRIPE_SECRET = "Stripe Secret Key";
const SITE_ADMIN_SETTINGS_PAYPAL_SECRET = "Paypal Secret Key";
const SITE_ADMIN_SETTINGS_PAYTM_SECRET = "Paytm Secret Key";
const SITE_SETTINGS_SECTION_GENERAL = "General";
const SITE_SETTINGS_SECTION_PAYMENT = "Payment";
const SITE_ADMIN_SETTINGS_PAYMENT_METHOD = "Payment Method";
const SITE_SETTINGS_STRIPE_PUBLISHABLE_KEY_TEXT = "Stripe Publishable Key";
const FREE_COST = "FREE";
const SIDEBAR_TEXT_COURSE_ABOUT = "About this course";
const REACT_COMPONENT_CRASHED = "We've encountered a problem in showing the content";
const CHECKOUT_DIALOG_TITLE = "Checkout";
const PAYMENT_MODAL_PAYMENT_DETAILS_HEADER = "Payment details";
const PAYMENT_MODAL_COST_PREFIX = "Cost";
const PAYMENT_MODAL_PAY_NOW_BUTTON_CAPTION = "Pay now";
const PAYMENT_INITIATION_FAILED = "Payment processing failed. Please close this popup and try again.";
const PAYMENT_VERIFICATION_FAILED = "We were not able to verify your payment. Please try again.";
const STRIPE_PUBLISHABLE_KEY_EMPTY = "Stripe configuration is invalid. Please contact site admin.";
const CAPTION_TRY_AGAIN = "Try again";
const CAPTION_CLOSE = "Close";
const LOADING = "Loading";
const BUTTON_NEW_LESSON_TEXT = "Lesson";
const BUTTON_DELETE_LESSON_TEXT = "Delete";
const COURSE_DETAILS_CARD_HEADER = "Details";
const DANGER_ZONE_HEADER = "Danger zone";
const DANGER_ZONE_DESCRIPTION = "This action is irreversible.";
const DELETE_COURSE_POPUP_HEADER = "Delete course?";
const POPUP_OK_ACTION = "Yes";
const POPUP_CANCEL_ACTION = "No";
const LOGIN_SECTION_HEADER = "Sign In";
const LOGIN_SECTION_BUTTON = "Sign in";
const LOGIN_INSTEAD_BUTTON = "Already have an account?";
const SIGNUP_SECTION_HEADER = "Create an account";
const SIGNUP_SECTION_BUTTON = "Join";
const MEDIA_MANAGER_PAGE_HEADING = "Media";
const BUTTON_SEARCH = "Search";
const BUTTON_ADD_FILE = "Select a file";
const FILE_UPLOAD_SUCCESS = "File uploaded";
const HEADER_YOUR_MEDIA = "Your media";
const LESSON_EDITOR_HEADER = "Lesson";
const BLOG_POST_SWITCH = "Blog";
const DOWNLOADABLE_SWITCH = "Downloadable";
const TYPE_DROPDOWN = "Type";
const LESSON_CONTENT_HEADER = "Text Content";
const CONTENT_URL_LABEL = "Media content";
const MEDIA_MANAGER_YOUR_MEDIA_HEADER = "Your media";
const DIALOG_SELECT_BUTTON = "Select";
const LESSON_REQUIRES_ENROLLMENT = "Available to only enrolled students";
const DELETE_LESSON_POPUP_HEADER = "Delete lesson";
const APP_MESSAGE_LESSON_DELETED = "Lesson deleted";
const APP_MESSAGE_LESSON_SAVED = "Lesson details saved";
const APP_MESSAGE_COURSE_SAVED = "Course details saved";
const ENROLL_IN_THE_COURSE = "Please enroll in the course to access this lesson.";
const USER_ERROR_HEADER = "Yikes!";
const ENROLL_BUTTON_TEXT = "Enroll";
const BUTTON_DELETE_MEDIA = "Delete";
const DELETE_MEDIA_POPUP_HEADER = "Delete media";
const HEADER_EDITING_MEDIA = "Edit media";
const HEADER_EDITING_USER = "Edit user";
const HEADER_MEDIA_PREVIEW = "Preview";
const PREVIEW_PDF_FILE = "Open in a new tab";
const APP_MESSAGE_MEDIA_DELETED = "Media deleted";
const APP_MESSAGE_MEDIA_UPDATED = "Media details updated";
const PAGE_HEADER_ALL_COURSES = "Courses";
const PAGE_HEADER_ALL_POSTS = "Articles";
const COURSE_TYPE_BLOG = "Post";
const COURSE_TYPE_COURSE = "Course";
const COURSE_CREATOR_PREFIX = "By";
const COURSE_EDITOR_DESCRIPTION = "Description";
const APP_MESSAGE_SETTINGS_SAVED = "Settings saved";
const ENROLLED_COURSES_HEADER = "Enrolled courses";
const SITE_CUSTOMISATIONS_SETTING_HEADER = "Customizations";
const SITE_CUSTOMISATIONS_SETTING_CODEINJECTION_HEAD = "Code Injection in <head>";
const DISCARD_COURSE_CHANGES_POPUP_HEADER = "Discard changes made to the course?";
const FEATURED_SECTION_HEADER = "Featured Resources";
const CARD_HEADER_PAGE_LAYOUT = "Page Layout";
const CARD_HEADER_THEME = "Theme";
const CARD_DESCRIPTION_PAGE_LAYOUT = "Use the '+' buttons to add your favorite components to the desired sections of your page.";
const ADD_COMPONENT_POPUP_HEADER = "Add component";
const APP_MESSAGE_CHANGES_SAVED = "Changes saved";
const SUBHEADER_COURSES_SECTION = "Learn new skills with our carefully crafted courses.";
const SUBHEADER_FEATURED_SECTION = "Hand picked resources by the editors.";
const SUBHEADER_THEME_ADD_THEME = "Install new theme";
const SUBHEADER_THEME_ADDED_THEME = "Installed themes";
const SUBHEADER_THEME_ADD_THEME_INPUT_LABEL = "Theme Editor";
const SUBHEADER_THEME_ADD_THEME_INPUT_PLACEHOLDER = "Paste valid JSON here";
const SUBHEADER_THEME_INSTALLED_THEMES = "Installed themes";
const BUTTON_GET_THEMES = "Get more themes";
const ERROR_SNACKBAR_PREFIX = "Error";
const BUTTON_THEME_APPLY = "Apply";
const BUTTON_THEME_UNINSTALL = "Uninstall";
const BUTTON_THEME_INSTALL = "Install";
const BUTTON_THEME_REMIX = "Remix";
const DELETE_THEME_POPUP_HEADER = "Uninstall theme";
const APPLY_THEME_POPUP_HEADER = "Apply theme";
const REMIXED_THEME_PREFIX = "Remix";
const APP_MESSAGE_THEME_COPIED = "Theme ready to edit";
const NO_THEMES_INSTALLED = "No themes are installed";
const APP_MESSAGE_THEME_INSTALLED = "Theme installed";
const CONSOLE_MESSAGE_THEME_INVALID = "The active MUI theme is invalid. Falling back to the default theme.";
const APP_MESSAGE_THEME_APPLIED = "Theme applied";
const APP_MESSAGE_THEME_UNINSTALLED = "Theme uninstalled";
const HEADER_NAVIGATION = "Menus";
const LABEL_NAVIGATION_LINK_TEXT = "Text";
const LABEL_NAVIGATION_LINK_DESTINATION = "Location";
const LINK_DROPDOWN = "Category";
const ADD_NEW_LINK_BUTTON = "Add new link";
const LABEL_NAVIGATION_LINK_NEWTAB = "New tab";
const WIDGETS_PAGE_HEADER = "Widgets";
const PAYMENTS_SHIPPING_ADDRESS_SECTION_HEADER = "Shipping Address";
const HEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK = "Payment Confirmation Webhook URL";
const SUBHEADER_SECTION_PAYMENT_CONFIRMATION_WEBHOOK = "Your payment processor sends out notifications about purchases. CourseLit needs those notifications to correctly reflect user purchases. Right click the following link and copy the link address. Paste that into your payment processor's webhook settings.";
const PURCHASE_STATUS_PAGE_HEADER = "Purchase Status";
const MAIN_MENU_ITEM_DASHBOARD = "Dashboard";
const MAIN_MENU_ITEM_PROFILE = "Profile";
const LAYOUT_SECTION_MAIN_CONTENT = "Main Content";
const LAYOUT_SECTION_FOOTER_LEFT = "Left Section";
const LAYOUT_SECTION_FOOTER_RIGHT = "Right Section";
const LAYOUT_SECTION_TOP = "Top";
const LAYOUT_SECTION_FOOTER = "Footer";
const LAYOUT_SECTION_BOTTOM = "Bottom";
const LAYOUT_SECTION_ASIDE = "Aside";
const TRANSACTION_STATUS_SUCCESS = "Payment Confirmed.";
const TRANSACTION_STATUS_SUCCESS_DETAILS = "Thank you. You can now head over to your course and start learning.";
const TRANSACTION_STATUS_INITIATED = "Payment Not Yet Confirmed.";
const TRANSACTION_STATUS_FAILED = "Payment Failed.";
const TRANSACTION_STATUS_FAILED_DETAILS = "The payment service provider was unable to process your payment. Please go back and try again.";
const VISIT_COURSE_BUTTON = "Visit course";
const VISIT_POST_BUTTON = "Visit post";
const VERIFY_PAYMENT_BUTTON = "Re-check Payment Status";
const PURCHASE_ID_HEADER = "Purchase ID";
const PAGE_HEADER_FEATURED = "Featured Content";
const BTN_VIEW_ALL = "View all";
const EMPTY_COURSES_LIST_ADMIN = "Create your first course by clicking the + button on the top right.";
const HEADER_RESET_PASSWORD = "Reset password";
const HEADER_DESIGN = "Appearance";
const HEADER_YOUR_PROFILE = "Your Profile";
const PROFILE_PAGE_MESSAGE_NOT_LOGGED_IN = "to see your profile.";
const PROFILE_PAGE_HEADER = "Profile";
const PROFILE_MY_COURSES = "My Courses";
const PROFILE_PAGE_NOT_ENROLLED = "You are not enrolled in any course.";
const PROFILE_PAGE_BROWSE_COURSES_TEXT = "Browse our courses";
const PROFILE_SECTION_DETAILS_NAME = "Name";
const PROFILE_SECTION_DETAILS_EMAIL = "Email";
const PROFILE_SECTION_DETAILS_BIO = "Bio";
const PROFILE_SECTION_DETAILS_BIO_EMPTY = "The user has not filled the bio.";

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

/***/ "./context/MyContext.js":
/*!******************************!*\
  !*** ./context/MyContext.js ***!
  \******************************/
/*! exports provided: MyContext, default, MyProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContext", function() { return MyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProvider", function() { return MyProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\context\\MyContext.js";

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
const MyProvider = children => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MyContext.Provider, {
    value: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 12
  }, undefined);
};

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
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
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
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

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
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

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
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
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
exports.default = void 0;

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
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

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
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

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
  if (!path.startsWith('/')) path = `/${path}`;
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
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
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
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

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
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
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

    this.onPopState = e => {
      const state = e.state;

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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
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

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

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

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
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

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
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


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
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
      default: obj
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

  newObj.default = obj;

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


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
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
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
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
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcFRvYXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvU2NhZmZvbGQvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9TY2FmZm9sZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L1dpZGdldEJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL1Nlc3Npb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L015Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb3Vyc2VsaXQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3R5cGVzLmpzIl0sIm5hbWVzIjpbIkFwcFRvYXN0IiwicHJvcHMiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImdldEFjdGlvbkJ1dHRvbnNBcnJheSIsImFjdGlvbkJ1dHRvbnNBcnJheSIsInVuc2hpZnQiLCJjYiIsInRleHQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJvcGVuIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkltZyIsImR5bmFtaWMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsb2dvIiwiZGlzcGxheSIsImxvZ29jb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImxvZ29pbWciLCJib3JkZXJSYWRpdXMiLCJIZWFkZXIiLCJjbGFzc2VzIiwic2l0ZUluZm8iLCJ1c2VDb250ZXh0IiwiTXlDb250ZXh0IiwibG9nb3BhdGgiLCJ0aXRsZSIsInByb3BUeXBlcyIsInNpdGVpbmZvIiwic2l0ZUluZm9Qcm9wcyIsImV4dGVybmFsTGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJNZW51SXRlbSIsImxpbmsiLCJkZXN0aW5hdGlvbiIsImluZGV4T2YiLCJuZXdUYWIiLCJjbG9zZURyYXdlciIsImRyYXdlcldpZHRoIiwicm9vdCIsImRyYXdlciIsImJyZWFrcG9pbnRzIiwidXAiLCJmbGV4U2hyaW5rIiwiYXBwQmFyIiwiekluZGV4IiwibWVudUJ1dHRvbiIsInRvb2xiYXIiLCJtaXhpbnMiLCJkcmF3ZXJQYXBlciIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImFjdGl2ZUl0ZW0iLCJiYWNrZ3JvdW5kIiwidmlzaXRTaXRlTGluayIsInNob3dQcm9ncmVzc0JhciIsInZpc2liaWxpdHkiLCJuZXR3b3JrQWN0aW9uIiwibWVudVRpdGxlIiwibWFyZ2luTGVmdCIsIlNjYWZmb2xkIiwiY2hpbGRyZW4iLCJ1c2VUaGVtZSIsInByb2ZpbGUiLCJuYXZpZ2F0aW9uIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZURyYXdlclRvZ2dsZSIsIm1ha2VEcmF3ZXIiLCJmb3JNb2JpbGUiLCJmZXRjaGVkIiwiaWQiLCJNQUlOX01FTlVfSVRFTV9QUk9GSUxFIiwidXNlcklkIiwiY2F0ZWdvcnkiLCJOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4iLCJpc0FkbWluIiwiaXNDcmVhdG9yIiwiTUFJTl9NRU5VX0lURU1fREFTSEJPQVJEIiwibWFwIiwiZGlyZWN0aW9uIiwicGFwZXIiLCJrZWVwTW91bnRlZCIsIlNlY3Rpb24iLCJuYW1lIiwibGF5b3V0Iiwic2VjdGlvbkxheW91dCIsInJvdXRlciIsInVzZVJvdXRlciIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCIsIndpZGdldHMiLCJtZXRhZGF0YSIsImV4Y2x1ZGVGcm9tUGF0aHMiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwibWFpbkNvbnRlbnQiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1hcmdpbiIsIlRlbXBsYXRlIiwiV2lkZ2V0QnlOYW1lIiwic2VjdGlvbiIsImFkZHJlc3MiLCJXaWRnZXQiLCJ3aWRnZXQiLCJmZXRjaCIsIkZldGNoQnVpbGRlciIsInNldFVybCIsImJhY2tlbmQiLCJzZXRJc0dyYXBoUUxFbmRwb2ludCIsIk9iamVjdCIsImFzc2lnbiIsImNvbmZpZyIsIkJBQ0tFTkQiLCJ1dGlsaXRpZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYWRkcmVzc1Byb3BzIiwiY29ubmVjdCIsIk1hc3RlckxheW91dCIsImZvcm11bGF0ZU1lZGlhVXJsIiwiZGVmYXVsdFN0YXRlIiwiYnV0dG9uIiwiU2Vzc2lvbkJ1dHRvbiIsImF1dGhQcm9wIiwiZ3Vlc3QiLCJHRU5FUklDX1NJR05JTl9URVhUIiwiR0VORVJJQ19TSUdOT1VUX1RFWFQiLCJhdXRoIiwidG9rZW4iLCJ1c2VyaWQiLCJjaGVja2VkIiwiR0VORVJJQ19USVRMRSIsInN1YnRpdGxlIiwiR0VORVJJQ19TVUJUSVRMRSIsIkdFTkVSSUNfTE9HT19QQVRIIiwiY3VycmVuY3lVbml0IiwiR0VORVJJQ19DVVJSRU5DWV9VTklUIiwiY3VycmVuY3lJU09Db2RlIiwiR0VORVJJQ19DVVJSRU5DWV9JU09fQ09ERSIsInBheW1lbnRNZXRob2QiLCJHRU5FUklDX1BBWU1FTlRfTUVUSE9EIiwic3RyaXBlUHVibGlzaGFibGVLZXkiLCJHRU5FUklDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVlfVEVYVCIsInRoZW1lUHJpbWFyeUNvbG9yIiwiR0VORVJJQ19USEVNRV9DT0xPUl9QUklNQVJZIiwidGhlbWVTZWNvbmRhcnlDb2xvciIsIkdFTkVSSUNfVEhFTUVfQ09MT1JfU0VDT05EQVJZIiwiY29kZUluamVjdGlvbkhlYWQiLCJHRU5FUklDX0NPREVfSU5KRUNUSU9OX0hFQUQiLCJwdXJjaGFzZXMiLCJlbWFpbCIsImJpbyIsInRvcCIsImJvdHRvbSIsImFzaWRlIiwiZm9vdGVyTGVmdCIsImZvb3RlclJpZ2h0IiwiZnJvbnRlbmQiLCJkb21haW4iLCJFUlJfQUxMX0ZJRUxEU19SRVFVSVJFRCIsIkVSUl9QQVNTV09SRFNfRE9OVF9NQVRDSCIsIlNJR05VUF9TVUNDRVNTIiwiRVJSX0NPVVJTRV9USVRMRV9SRVFVSVJFRCIsIkVSUl9DT1VSU0VfQ09TVF9SRVFVSVJFRCIsIlJFU1BfQVBJX1VTRVJfQ1JFQVRFRCIsIkNSRUFUT1JfQVJFQV9MSU5LX1RFWFQiLCJDUkVBVE9SX0FSRUFfUEFHRV9USVRMRSIsIkdFTkVSSUNfU0lHTlVQX1RFWFQiLCJCVE5fTE9BRF9NT1JFIiwiTUVESUFfVVBMT0FEX0JVVFRPTl9URVhUIiwiTUVESUFfVVBMT0FESU5HIiwiTUVESUFfQUREX05FV19CVVRUT05fVEVYVCIsIkJVVFRPTl9DQU5DRUxfVEVYVCIsIk1FRElBX1NFQVJDSF9JTlBVVF9QTEFDRUhPTERFUiIsIkxPQURfTU9SRV9URVhUIiwiTUFOQUdFX01FRElBX0JVVFRPTl9URVhUIiwiTUFOQUdFX0NPVVJTRVNfUEFHRV9IRUFESU5HIiwiVVNFUlNfTUFOQUdFUl9QQUdFX0hFQURJTkciLCJORVdfQ09VUlNFX1BBR0VfSEVBRElORyIsIk1FRElBX01BTkFHRVJfRElBTE9HX1RJVExFIiwiQlVUVE9OX05FV19DT1VSU0UiLCJCVVRUT05fRE9ORV9URVhUIiwiRElBTE9HX1RJVExFX0ZFQVRVUkVEX0lNQUdFIiwiQlVUVE9OX1NFVF9GRUFUVVJFRF9JTUFHRSIsIkJVVFRPTl9TRUxFQ1RfTUVESUEiLCJGT1JNX0ZJRUxEX0ZFQVRVUkVEX0lNQUdFIiwiQlROX0RFTEVURV9DT1VSU0UiLCJCVE5fQUREX1ZJREVPIiwiQUREX1ZJREVPX0RJQUxPR19USVRMRSIsIkNBUFRJT05fVkVSSUZJRUQiLCJDQVBUSU9OX1VOVkVSSUZJRUQiLCJMQUJFTF9ORVdfUEFTU1dPUkQiLCJCVVRUT05fU0FWRSIsIlNXSVRDSF9JU19BRE1JTiIsIlNXSVRDSF9JU19DUkVBVE9SIiwiU1dJVENIX0FDQ09VTlRfQUNUSVZFIiwiTEFCRUxfQ09ORl9QQVNTV09SRCIsIkhFQURFUl9CTE9HX1BPU1RTX1NFQ1RJT04iLCJIRUFERVJfQ09VUlNFU19TRUNUSU9OIiwiU0lURV9TRVRUSU5HU19USVRMRSIsIlNJVEVfU0VUVElOR1NfU1VCVElUTEUiLCJTSVRFX1NFVFRJTkdTX0NVUlJFTkNZX1VOSVQiLCJTSVRFX1NFVFRJTkdTX0NVUlJFTkNZX0lTT19DT0RFX1RFWFQiLCJTSVRFX1NFVFRJTkdTX0xPR08iLCJTSVRFX1NFVFRJTkdTX1BBR0VfSEVBRElORyIsIlNJVEVfQURNSU5fU0VUVElOR1NfU1RSSVBFX1NFQ1JFVCIsIlNJVEVfQURNSU5fU0VUVElOR1NfUEFZUEFMX1NFQ1JFVCIsIlNJVEVfQURNSU5fU0VUVElOR1NfUEFZVE1fU0VDUkVUIiwiU0lURV9TRVRUSU5HU19TRUNUSU9OX0dFTkVSQUwiLCJTSVRFX1NFVFRJTkdTX1NFQ1RJT05fUEFZTUVOVCIsIlNJVEVfQURNSU5fU0VUVElOR1NfUEFZTUVOVF9NRVRIT0QiLCJTSVRFX1NFVFRJTkdTX1NUUklQRV9QVUJMSVNIQUJMRV9LRVlfVEVYVCIsIkZSRUVfQ09TVCIsIlNJREVCQVJfVEVYVF9DT1VSU0VfQUJPVVQiLCJSRUFDVF9DT01QT05FTlRfQ1JBU0hFRCIsIkNIRUNLT1VUX0RJQUxPR19USVRMRSIsIlBBWU1FTlRfTU9EQUxfUEFZTUVOVF9ERVRBSUxTX0hFQURFUiIsIlBBWU1FTlRfTU9EQUxfQ09TVF9QUkVGSVgiLCJQQVlNRU5UX01PREFMX1BBWV9OT1dfQlVUVE9OX0NBUFRJT04iLCJQQVlNRU5UX0lOSVRJQVRJT05fRkFJTEVEIiwiUEFZTUVOVF9WRVJJRklDQVRJT05fRkFJTEVEIiwiU1RSSVBFX1BVQkxJU0hBQkxFX0tFWV9FTVBUWSIsIkNBUFRJT05fVFJZX0FHQUlOIiwiQ0FQVElPTl9DTE9TRSIsIkxPQURJTkciLCJCVVRUT05fTkVXX0xFU1NPTl9URVhUIiwiQlVUVE9OX0RFTEVURV9MRVNTT05fVEVYVCIsIkNPVVJTRV9ERVRBSUxTX0NBUkRfSEVBREVSIiwiREFOR0VSX1pPTkVfSEVBREVSIiwiREFOR0VSX1pPTkVfREVTQ1JJUFRJT04iLCJERUxFVEVfQ09VUlNFX1BPUFVQX0hFQURFUiIsIlBPUFVQX09LX0FDVElPTiIsIlBPUFVQX0NBTkNFTF9BQ1RJT04iLCJMT0dJTl9TRUNUSU9OX0hFQURFUiIsIkxPR0lOX1NFQ1RJT05fQlVUVE9OIiwiTE9HSU5fSU5TVEVBRF9CVVRUT04iLCJTSUdOVVBfU0VDVElPTl9IRUFERVIiLCJTSUdOVVBfU0VDVElPTl9CVVRUT04iLCJNRURJQV9NQU5BR0VSX1BBR0VfSEVBRElORyIsIkJVVFRPTl9TRUFSQ0giLCJCVVRUT05fQUREX0ZJTEUiLCJGSUxFX1VQTE9BRF9TVUNDRVNTIiwiSEVBREVSX1lPVVJfTUVESUEiLCJMRVNTT05fRURJVE9SX0hFQURFUiIsIkJMT0dfUE9TVF9TV0lUQ0giLCJET1dOTE9BREFCTEVfU1dJVENIIiwiVFlQRV9EUk9QRE9XTiIsIkxFU1NPTl9DT05URU5UX0hFQURFUiIsIkNPTlRFTlRfVVJMX0xBQkVMIiwiTUVESUFfTUFOQUdFUl9ZT1VSX01FRElBX0hFQURFUiIsIkRJQUxPR19TRUxFQ1RfQlVUVE9OIiwiTEVTU09OX1JFUVVJUkVTX0VOUk9MTE1FTlQiLCJERUxFVEVfTEVTU09OX1BPUFVQX0hFQURFUiIsIkFQUF9NRVNTQUdFX0xFU1NPTl9ERUxFVEVEIiwiQVBQX01FU1NBR0VfTEVTU09OX1NBVkVEIiwiQVBQX01FU1NBR0VfQ09VUlNFX1NBVkVEIiwiRU5ST0xMX0lOX1RIRV9DT1VSU0UiLCJVU0VSX0VSUk9SX0hFQURFUiIsIkVOUk9MTF9CVVRUT05fVEVYVCIsIkJVVFRPTl9ERUxFVEVfTUVESUEiLCJERUxFVEVfTUVESUFfUE9QVVBfSEVBREVSIiwiSEVBREVSX0VESVRJTkdfTUVESUEiLCJIRUFERVJfRURJVElOR19VU0VSIiwiSEVBREVSX01FRElBX1BSRVZJRVciLCJQUkVWSUVXX1BERl9GSUxFIiwiQVBQX01FU1NBR0VfTUVESUFfREVMRVRFRCIsIkFQUF9NRVNTQUdFX01FRElBX1VQREFURUQiLCJQQUdFX0hFQURFUl9BTExfQ09VUlNFUyIsIlBBR0VfSEVBREVSX0FMTF9QT1NUUyIsIkNPVVJTRV9UWVBFX0JMT0ciLCJDT1VSU0VfVFlQRV9DT1VSU0UiLCJDT1VSU0VfQ1JFQVRPUl9QUkVGSVgiLCJDT1VSU0VfRURJVE9SX0RFU0NSSVBUSU9OIiwiQVBQX01FU1NBR0VfU0VUVElOR1NfU0FWRUQiLCJFTlJPTExFRF9DT1VSU0VTX0hFQURFUiIsIlNJVEVfQ1VTVE9NSVNBVElPTlNfU0VUVElOR19IRUFERVIiLCJTSVRFX0NVU1RPTUlTQVRJT05TX1NFVFRJTkdfQ09ERUlOSkVDVElPTl9IRUFEIiwiRElTQ0FSRF9DT1VSU0VfQ0hBTkdFU19QT1BVUF9IRUFERVIiLCJGRUFUVVJFRF9TRUNUSU9OX0hFQURFUiIsIkNBUkRfSEVBREVSX1BBR0VfTEFZT1VUIiwiQ0FSRF9IRUFERVJfVEhFTUUiLCJDQVJEX0RFU0NSSVBUSU9OX1BBR0VfTEFZT1VUIiwiQUREX0NPTVBPTkVOVF9QT1BVUF9IRUFERVIiLCJBUFBfTUVTU0FHRV9DSEFOR0VTX1NBVkVEIiwiU1VCSEVBREVSX0NPVVJTRVNfU0VDVElPTiIsIlNVQkhFQURFUl9GRUFUVVJFRF9TRUNUSU9OIiwiU1VCSEVBREVSX1RIRU1FX0FERF9USEVNRSIsIlNVQkhFQURFUl9USEVNRV9BRERFRF9USEVNRSIsIlNVQkhFQURFUl9USEVNRV9BRERfVEhFTUVfSU5QVVRfTEFCRUwiLCJTVUJIRUFERVJfVEhFTUVfQUREX1RIRU1FX0lOUFVUX1BMQUNFSE9MREVSIiwiU1VCSEVBREVSX1RIRU1FX0lOU1RBTExFRF9USEVNRVMiLCJCVVRUT05fR0VUX1RIRU1FUyIsIkVSUk9SX1NOQUNLQkFSX1BSRUZJWCIsIkJVVFRPTl9USEVNRV9BUFBMWSIsIkJVVFRPTl9USEVNRV9VTklOU1RBTEwiLCJCVVRUT05fVEhFTUVfSU5TVEFMTCIsIkJVVFRPTl9USEVNRV9SRU1JWCIsIkRFTEVURV9USEVNRV9QT1BVUF9IRUFERVIiLCJBUFBMWV9USEVNRV9QT1BVUF9IRUFERVIiLCJSRU1JWEVEX1RIRU1FX1BSRUZJWCIsIkFQUF9NRVNTQUdFX1RIRU1FX0NPUElFRCIsIk5PX1RIRU1FU19JTlNUQUxMRUQiLCJBUFBfTUVTU0FHRV9USEVNRV9JTlNUQUxMRUQiLCJDT05TT0xFX01FU1NBR0VfVEhFTUVfSU5WQUxJRCIsIkFQUF9NRVNTQUdFX1RIRU1FX0FQUExJRUQiLCJBUFBfTUVTU0FHRV9USEVNRV9VTklOU1RBTExFRCIsIkhFQURFUl9OQVZJR0FUSU9OIiwiTEFCRUxfTkFWSUdBVElPTl9MSU5LX1RFWFQiLCJMQUJFTF9OQVZJR0FUSU9OX0xJTktfREVTVElOQVRJT04iLCJMSU5LX0RST1BET1dOIiwiQUREX05FV19MSU5LX0JVVFRPTiIsIkxBQkVMX05BVklHQVRJT05fTElOS19ORVdUQUIiLCJXSURHRVRTX1BBR0VfSEVBREVSIiwiUEFZTUVOVFNfU0hJUFBJTkdfQUREUkVTU19TRUNUSU9OX0hFQURFUiIsIkhFQURFUl9TRUNUSU9OX1BBWU1FTlRfQ09ORklSTUFUSU9OX1dFQkhPT0siLCJTVUJIRUFERVJfU0VDVElPTl9QQVlNRU5UX0NPTkZJUk1BVElPTl9XRUJIT09LIiwiUFVSQ0hBU0VfU1RBVFVTX1BBR0VfSEVBREVSIiwiTEFZT1VUX1NFQ1RJT05fTUFJTl9DT05URU5UIiwiTEFZT1VUX1NFQ1RJT05fRk9PVEVSX0xFRlQiLCJMQVlPVVRfU0VDVElPTl9GT09URVJfUklHSFQiLCJMQVlPVVRfU0VDVElPTl9UT1AiLCJMQVlPVVRfU0VDVElPTl9GT09URVIiLCJMQVlPVVRfU0VDVElPTl9CT1RUT00iLCJMQVlPVVRfU0VDVElPTl9BU0lERSIsIlRSQU5TQUNUSU9OX1NUQVRVU19TVUNDRVNTIiwiVFJBTlNBQ1RJT05fU1RBVFVTX1NVQ0NFU1NfREVUQUlMUyIsIlRSQU5TQUNUSU9OX1NUQVRVU19JTklUSUFURUQiLCJUUkFOU0FDVElPTl9TVEFUVVNfRkFJTEVEIiwiVFJBTlNBQ1RJT05fU1RBVFVTX0ZBSUxFRF9ERVRBSUxTIiwiVklTSVRfQ09VUlNFX0JVVFRPTiIsIlZJU0lUX1BPU1RfQlVUVE9OIiwiVkVSSUZZX1BBWU1FTlRfQlVUVE9OIiwiUFVSQ0hBU0VfSURfSEVBREVSIiwiUEFHRV9IRUFERVJfRkVBVFVSRUQiLCJCVE5fVklFV19BTEwiLCJFTVBUWV9DT1VSU0VTX0xJU1RfQURNSU4iLCJIRUFERVJfUkVTRVRfUEFTU1dPUkQiLCJIRUFERVJfREVTSUdOIiwiSEVBREVSX1lPVVJfUFJPRklMRSIsIlBST0ZJTEVfUEFHRV9NRVNTQUdFX05PVF9MT0dHRURfSU4iLCJQUk9GSUxFX1BBR0VfSEVBREVSIiwiUFJPRklMRV9NWV9DT1VSU0VTIiwiUFJPRklMRV9QQUdFX05PVF9FTlJPTExFRCIsIlBST0ZJTEVfUEFHRV9CUk9XU0VfQ09VUlNFU19URVhUIiwiUFJPRklMRV9TRUNUSU9OX0RFVEFJTFNfTkFNRSIsIlBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX0VNQUlMIiwiUFJPRklMRV9TRUNUSU9OX0RFVEFJTFNfQklPIiwiUFJPRklMRV9TRUNUSU9OX0RFVEFJTFNfQklPX0VNUFRZIiwiY3JlYXRlQ29udGV4dCIsIk15UHJvdmlkZXIiLCJnZXRBbGxXaWRnZXRzIiwiQ29tbW9uV2lkZ2V0cyIsImJ1dHRvbmRvd24iLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiYXV0aFByb3BzIiwic2hhcGUiLCJib29sIiwicHJvZmlsZVByb3BzIiwiYXJyYXlPZiIsImxhdGVzdFBvc3RzUHJvcHMiLCJkZXNjcmlwdGlvbiIsImNyZWF0b3JOYW1lIiwidXBkYXRlZCIsIm51bWJlciIsInNsdWciLCJwdWJsaWNDb3Vyc2UiLCJpc0ZlYXR1cmVkIiwiY29zdCIsImNyZWF0b3JJZCIsImNyZWF0b3JDb3Vyc2UiLCJzaXRlVXNlciIsInZlcmlmaWVkIiwiYXZhdGFyIiwiZmVhdHVyZWRDb3Vyc2UiLCJmZWF0dXJlZEltYWdlIiwiYXBwTWVzc2FnZSIsImZ1bmMiLCJsZXNzb24iLCJ0eXBlIiwiZG93bmxvYWRhYmxlIiwiY29udGVudFVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUIsUUFBTTtBQUFFQztBQUFGLE1BQWNELEtBQXBCO0FBQ0EsUUFBTUUsTUFBTSxHQUFHRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsTUFBbEM7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNyQyxRQUFJQSxNQUFNLEtBQUssV0FBZixFQUE0QjtBQUMxQjtBQUNELEtBSG9DLENBS3JDOztB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RSxFQUZIO0FBR1BDLFVBQU0sRUFBRTtBQUhEO0FBNUNJLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QyxVQURXO0FBRWxDdEYsYUFBVyxFQUFFb0YsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGSTtBQUdsQzdDLFVBQVEsRUFBRTJDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBSE87QUFJbENwRixRQUFNLEVBQUVrRixpREFBUyxDQUFDZ2xCLElBQVYsQ0FBZTlrQjtBQUpXLENBQWhCLENBQWI7QUFPQSxNQUFNQyxZQUFZLEdBQUdILGlEQUFTLENBQUMra0IsS0FBVixDQUFnQjtBQUMxQ3RsQixTQUFPLEVBQUVPLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRGdCO0FBRTFDMEMsVUFBUSxFQUFFNUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGZTtBQUcxQzJDLFFBQU0sRUFBRTdDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBSGlCLENBQWhCLENBQXJCLEMiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgU25hY2tiYXIsIEljb25CdXR0b24sIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL2ltcG9ydCB7IGNsZWFyQXBwTWVzc2FnZSB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGFwcE1lc3NhZ2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBBcHBUb2FzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYWN0aW9uID0gbWVzc2FnZSAmJiBtZXNzYWdlLmFjdGlvbjtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG4gICAgaWYgKHJlYXNvbiA9PT0gXCJjbGlja2F3YXlcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9wcm9wcy5kaXNwYXRjaChjbGVhckFwcE1lc3NhZ2UoKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QWN0aW9uQnV0dG9uc0FycmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uQnV0dG9uc0FycmF5ID0gW1xyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGtleT1cImNsb3NlXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2xvc2UgLz5cclxuICAgICAgPC9JY29uQnV0dG9uPixcclxuICAgIF07XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIGFjdGlvbkJ1dHRvbnNBcnJheS51bnNoaWZ0KFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGtleT1cImFjdGlvblwiXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgb25DbGljaz17bWVzc2FnZS5hY3Rpb24uY2J9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge21lc3NhZ2UuYWN0aW9uLnRleHR9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbkJ1dHRvbnNBcnJheTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvcGVuPXttZXNzYWdlLm9wZW59XHJcbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICBtZXNzYWdlPXs8c3Bhbj57bWVzc2FnZS5tZXNzYWdlfTwvc3Bhbj59XHJcbiAgICAgICAgICBhY3Rpb249e2dldEFjdGlvbkJ1dHRvbnNBcnJheSgpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy9BcHBUb2FzdC5wcm9wVHlwZXMgPSB7XHJcbi8vICBtZXNzYWdlOiBhcHBNZXNzYWdlLmlzUmVxdWlyZWQsXHJcbi8vICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy99O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGRpc3BhdGNoOiBkaXNwYXRjaCxcclxufSk7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcFRvYXN0KTtcclxuZXhwb3J0IGRlZmF1bHQgQXBwVG9hc3RcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgU2Vzc2lvbkJ1dHRvbiBmcm9tIFwiLi4vU2Vzc2lvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBzaXRlSW5mb1Byb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvTXlDb250ZXh0XCI7XHJcblxyXG5jb25zdCBJbWcgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL0ltZy5qc1wiKSk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBsb2dvOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGxvZ29jb250YWluZXI6IHtcclxuICAgIHdpZHRoOiBcIjJlbVwiLFxyXG4gICAgaGVpZ2h0OiBcIjJlbVwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGxvZ29pbWc6IHtcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjJlbVwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHNpdGVJbmZvIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgZGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8SW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzaXRlSW5mby5sb2dvcGF0aH1cclxuICAgICAgICAgICAgICAgICAgICBpc1RodW1ibmFpbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzLmxvZ29pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlPVwiL2NvdXJzZWxpdF9iYWNrZHJvcF9zcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57c2l0ZUluZm8udGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxTZXNzaW9uQnV0dG9uIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBzaXRlaW5mbzogc2l0ZUluZm9Qcm9wcyxcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBzaXRlaW5mbzogc3RhdGUuc2l0ZWluZm8sXHJcbn0pO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUljb24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgT3BlbkluTmV3IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGxpbmsgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGV4dGVybmFsTGluazoge1xyXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTWVudUl0ZW0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxpbmsgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIGxpbmsuZGVzdGluYXRpb24uaW5kZXhPZihcImh0dHBcIikgIT09IC0xIHx8IGxpbmsubmV3VGFiID8gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17bGluay5kZXN0aW5hdGlvbn1cclxuICAgICAga2V5PXtsaW5rLnRleHR9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZXJuYWxMaW5rfVxyXG4gICAgICBvbkNsaWNrPXtwcm9wcy5jbG9zZURyYXdlciA/IHByb3BzLmNsb3NlRHJhd2VyIDogKCkgPT4geyB9fVxyXG4gICAgPlxyXG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17bGluay50ZXh0fT48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICB7bGluay5uZXdUYWIgJiYgKFxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPE9wZW5Jbk5ldyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgIDwvYT5cclxuICApIDogKFxyXG4gICAgPExpbmsgaHJlZj17bGluay5kZXN0aW5hdGlvbn0ga2V5PXtsaW5rLnRleHR9PlxyXG4gICAgICA8TGlzdEl0ZW1cclxuICAgICAgICBidXR0b25cclxuICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5jbG9zZURyYXdlciA/IHByb3BzLmNsb3NlRHJhd2VyIDogKCkgPT4geyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtsaW5rLnRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL01lbnVJdGVtLnByb3BUeXBlcyA9IHtcclxuLy8gIGxpbms6IGxpbmssXHJcbi8vICBjbG9zZURyYXdlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbi8vfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBHcmlkLCBMaW5lYXJQcm9ncmVzcywgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuLy9pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBBcHBUb2FzdCBmcm9tIFwiLi4vLi4vLi4vQXBwVG9hc3QuanNcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vaW1wb3J0IHsgc2l0ZUluZm9Qcm9wcywgbGluaywgcHJvZmlsZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzLmpzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIE1BSU5fTUVOVV9JVEVNX0RBU0hCT0FSRCxcclxuICBNQUlOX01FTlVfSVRFTV9QUk9GSUxFLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWcvc3RyaW5ncy5qc1wiO1xyXG5pbXBvcnQgeyBOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL2NvbnN0YW50cy5qc1wiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW0uanNcIjtcclxuaW1wb3J0IE15Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29udGV4dC9NeUNvbnRleHQuanNcIjtcclxuXHJcbi8vaW1wb3J0IFRlbXBsYXRlIGZyb20gXCIuLi9UZW1wbGF0ZS5qc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgYWN0aXZlSXRlbToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjZDZkNmQ2XCIsXHJcbiAgfSxcclxuICB2aXNpdFNpdGVMaW5rOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgfSxcclxuICBzaG93UHJvZ3Jlc3NCYXI6IChwcm9wcykgPT4gKHtcclxuICAgIHZpc2liaWxpdHk6IHByb3BzLm5ldHdvcmtBY3Rpb24gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXHJcbiAgfSksXHJcbiAgbWVudVRpdGxlOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNjYWZmb2xkID0gKHsgY2hpbGRyZW4sIHByb3BzIH0pID0+IHtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpOy8vPSB1c2VTdHlsZXMocHJvcHMpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCB7IHNpdGVJbmZvLCBwcm9maWxlLCBuYXZpZ2F0aW9uIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZURyYXdlclRvZ2dsZSgpIHtcclxuICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZURyYXdlciA9IChmb3JNb2JpbGUgPSBmYWxzZSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubWVudVRpdGxlfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntzaXRlSW5mby50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtwcm9maWxlLmZldGNoZWQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb3BzLnByb2ZpbGUuaWQgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgbGluaz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IE1BSU5fTUVOVV9JVEVNX1BST0ZJTEUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IGAvcHJvZmlsZS8ke3Byb3BzLnByb2ZpbGUudXNlcklkICYmIHByb3BzLnByb2ZpbGUudXNlcklkICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy5wcm9maWxlLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5wcm9maWxlLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YCxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogTkFWSUdBVElPTl9DQVRFR09SWV9NQUlOLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RhYjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyhwcm9wcy5wcm9maWxlLmlzQWRtaW4gfHwgcHJvcHMucHJvZmlsZS5pc0NyZWF0b3IpICYmIChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgIGxpbms9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dDogTUFJTl9NRU5VX0lURU1fREFTSEJPQVJELFxyXG4gICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvZGFzaGJvYXJkL2NvdXJzZXNcIixcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IE5BVklHQVRJT05fQ0FURUdPUllfTUFJTixcclxuICAgICAgICAgICAgICAgICAgbmV3VGFiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge25hdmlnYXRpb24gJiZcclxuICAgICAgICAgIG5hdmlnYXRpb24ubWFwKChsaW5rKSA9PlxyXG4gICAgICAgICAgICBmb3JNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAga2V5PXtsaW5rLmRlc3RpbmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2xvc2VEcmF3ZXI9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBsaW5rPXtsaW5rfSBrZXk9e2xpbmsuZGVzdGluYXRpb259IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9IGFyaWEtbGFiZWw9XCJtZW51XCI+XHJcbiAgICAgICAgey8qIFRoZSBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgc3dhcHBlZCB3aXRoIGpzIHRvIGF2b2lkIFNFTyBkdXBsaWNhdGlvbiBvZiBsaW5rcy4gKi99XHJcbiAgICAgICAgPEhpZGRlbiBzbVVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgICAgICAgICBhbmNob3I9e3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxyXG4gICAgICAgICAgICBvcGVuPXttb2JpbGVPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgTW9kYWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlLCAvLyBCZXR0ZXIgb3BlbiBwZXJmb3JtYW5jZSBvbiBtb2JpbGUuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYWtlRHJhd2VyKHRydWUpfVxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPEhpZGRlbiB4c0Rvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICAgICAgb3BlblxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWFrZURyYXdlcigpfVxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgIDwvbmF2ID5cclxuICAgICAgPGE+c2NhZm9vbGY8L2E+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxyXG4gICAgICAgIDxMaW5lYXJQcm9ncmVzcyBjbGFzc05hbWU9e2NsYXNzZXMuc2hvd1Byb2dyZXNzQmFyfSAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8QXBwVG9hc3QgLz5cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59O1xyXG5cclxuLy9TY2FmZm9sZC5wcm9wVHlwZXMgPSB7XHJcbi8vICBjaGlsZHJlbjogUHJvcFR5cGVzLm9iamVjdCxcclxuLy9zaXRlaW5mbzogc2l0ZUluZm9Qcm9wcyxcclxuLy9uYXZpZ2F0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihsaW5rKSxcclxuLy9uZXR3b3JrQWN0aW9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4vL3Byb2ZpbGU6IHByb2ZpbGVQcm9wcyxcclxuLy99O1xyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbi8vICBzaXRlaW5mbzogc3RhdGUuc2l0ZWluZm8sXHJcbi8vICBuYXZpZ2F0aW9uOiBzdGF0ZS5uYXZpZ2F0aW9uLmZpbHRlcigobGluaykgPT4gbGluay5jYXRlZ29yeSA9PT0gXCJtYWluXCIpLFxyXG4vLyAgbmV0d29ya0FjdGlvbjogc3RhdGUubmV0d29ya0FjdGlvbixcclxuLy8gIHByb2ZpbGU6IHN0YXRlLnByb2ZpbGUsXHJcbi8vfSk7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTY2FmZm9sZCk7XHJcbmV4cG9ydCBkZWZhdWx0IFNjYWZmb2xkXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgV2lkZ2V0QnlOYW1lIGZyb20gXCIuL1dpZGdldEJ5TmFtZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHdpZGdldHMgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy93aWRnZXRzXCI7XHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvTXlDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBsYXlvdXQgfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KVxyXG4gIGNvbnN0IHNlY3Rpb25MYXlvdXQgPSBsYXlvdXRbbmFtZV07XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uTGF5b3V0ICYmIHNlY3Rpb25MYXlvdXQubGVuZ3RoID8gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgIHtzZWN0aW9uTGF5b3V0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgd2lkZ2V0c1tpdGVtXS5tZXRhZGF0YS5leGNsdWRlRnJvbVBhdGhzICYmXHJcbiAgICAgICAgICB3aWRnZXRzW2l0ZW1dLm1ldGFkYXRhLmV4Y2x1ZGVGcm9tUGF0aHMuaW5jbHVkZXMocm91dGVyLnBhdGhuYW1lKSA/IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+PC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxXaWRnZXRCeU5hbWUgbmFtZT17aXRlbX0gc2VjdGlvbj17bmFtZX0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKSA6IChcclxuICAgIDw+PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbi8vICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbi8vICBsYXlvdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtsYXlvdXQ6IHN0YXRlLmxheW91dCx9KVxyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWN0aW9uKTtcclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgbWFpbkNvbnRlbnQ6IHtcclxuICAgIG1heFdpZHRoOiAxMjQwLFxyXG4gICAgbWluSGVpZ2h0OiBcIjgwdmhcIixcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9ICh7IGNoaWxkcmVuLCBwcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpLy8gdXNlU3R5bGVzKHByb3BzKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIHsvKiogVG9wICovfVxyXG4gICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiICYmIDxTZWN0aW9uIG5hbWU9XCJ0b3BcIiAvPn1cclxuXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwicm93XCIgeHM+XHJcbiAgICAgICAgICB7LyoqIE1haW4gKi99XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJjb2x1bW5cIiB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtPlxyXG4gICAgICAgICAgICAgIDxTZWN0aW9uIG5hbWU9XCJib3R0b21cIiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgey8qKiBBc2lkZSAqL31cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj1cImNvbHVtblwiIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbiBuYW1lPVwiYXNpZGVcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgey8qKiBGb290ZXIgKi99XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPERpdmlkZXIgbGlnaHQgLz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJjb2x1bW5cIiB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgPFNlY3Rpb24gbmFtZT1cImZvb3RlckxlZnRcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwiY29sdW1uXCIgeHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uIG5hbWU9XCJmb290ZXJSaWdodFwiIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL1RlbXBsYXRlLnByb3BUeXBlcyA9IHtcclxuLy8gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbi8vfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHdpZGdldHMgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy93aWRnZXRzXCI7XHJcbmltcG9ydCBGZXRjaEJ1aWxkZXIgZnJvbSBcIi4uLy4uLy4uL2xpYi9mZXRjaFwiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25zdGFudHNcIjtcclxuaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRyZXNzUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IFdpZGdldEJ5TmFtZSA9ICh7IG5hbWUsIHNlY3Rpb24sIGFkZHJlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFdpZGdldCA9IHdpZGdldHNbbmFtZV0ud2lkZ2V0O1xyXG4gIGNvbnN0IGZldGNoID0gbmV3IEZldGNoQnVpbGRlcigpXHJcbiAgICAuc2V0VXJsKGAke2FkZHJlc3MuYmFja2VuZH0vZ3JhcGhgKVxyXG4gICAgLnNldElzR3JhcGhRTEVuZHBvaW50KHRydWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFdpZGdldFxyXG4gICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgZmV0Y2hCdWlsZGVyPXtmZXRjaH1cclxuICAgICAgICBzZWN0aW9uPXtzZWN0aW9ufVxyXG4gICAgICAgIGNvbmZpZz17T2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCB7XHJcbiAgICAgICAgICBCQUNLRU5EOiBhZGRyZXNzLmJhY2tlbmQsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgdXRpbGl0aWVzPXt1dGlsaXRpZXN9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuV2lkZ2V0QnlOYW1lLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2VjdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGFkZHJlc3M6IGFkZHJlc3NQcm9wcyxcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShXaWRnZXRCeU5hbWUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgZm9ybXVsYXRlTWVkaWFVcmwgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzLmpzXCI7XHJcbi8vaW1wb3J0IHsgYWRkcmVzc1Byb3BzLCBzaXRlSW5mb1Byb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzLmpzXCI7XHJcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi9UZW1wbGF0ZS5qc1wiO1xyXG5pbXBvcnQgU2NhZmZvbGQgZnJvbSBcIi4vU2NhZmZvbGRcIjtcclxuaW1wb3J0IE15Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9NeUNvbnRleHQuanNcIjtcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuLi8uLi8uLi9jb25maWcvZGVmYXVsdFN0YXRlJ1xyXG5cclxuLy90eXBlIFByb3BzID0ge1xyXG4vLyAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XHJcbi8vICB0aXRsZT86IHN0cmluZztcclxuLy8gIGZvbGxvd0xpbmtzPzogYm9vbGVhbjtcclxuLy8gIGRlc2NyaXB0Pzogc3RyaW5nO1xyXG4vL307XHJcblxyXG5jb25zdCBNYXN0ZXJMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIHByb3BzIH0pID0+IHtcclxuICBjb25zdCB7IHNpdGVJbmZvIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAge3RpdGxlfSB8IHtzaXRlSW5mbz8udGl0bGV9XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgICB7c2l0ZUluZm8/LmxvZ29wYXRoICYmIChcclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgICBocmVmPXtmb3JtdWxhdGVNZWRpYVVybChcclxuICAgICAgICAgICAgICBkZWZhdWx0U3RhdGUuYWRkcmVzcy5iYWNrZW5kLFxyXG4gICAgICAgICAgICAgIHNpdGVJbmZvPy5sb2dvcGF0aCxcclxuICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgIHNpdGVJbmZvPy5sb2dvcGF0aFxyXG4gICAgICAgICAgICAgID8gZm9ybXVsYXRlTWVkaWFVcmwoXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U3RhdGUuYWRkcmVzcy5iYWNrZW5kLFxyXG4gICAgICAgICAgICAgICAgc2l0ZUluZm8/LmxvZ29wYXRoLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IFwiL2NvdXJzZWxpdF9iYWNrZHJvcF9zcXVhcmUud2VicFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTY2FmZm9sZCAgPlxyXG4gICAgICAgIDxUZW1wbGF0ZT57Y2hpbGRyZW59PC9UZW1wbGF0ZT5cclxuICAgICAgPC9TY2FmZm9sZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL01hc3RlckxheW91dC5wcm9wVHlwZXMgPSB7XHJcbi8vICBjaGlsZHJlbjogUHJvcFR5cGVzLm9iamVjdCxcclxuLy8gIG5ldHdvcmtBY3Rpb246IFByb3BUeXBlcy5ib29sLFxyXG4vLyAgc2l0ZUluZm86IHNpdGVJbmZvUHJvcHM/LmlzUmVxdWlyZWQsXHJcbi8vICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4vLyAgbGF5b3V0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbi8vICBhZGRyZXNzOiBhZGRyZXNzUHJvcHMsXHJcbi8vfTtcclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbi8vICBuZXR3b3JrQWN0aW9uOiBzdGF0ZS5uZXR3b3JrQWN0aW9uLFxyXG4vLyAgc2l0ZUluZm86IHN0YXRlLnNpdGVpbmZvLFxyXG4vLyAgbGF5b3V0OiBzdGF0ZS5sYXlvdXQsXHJcbi8vICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxyXG4vL30pO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNYXN0ZXJMYXlvdXQpO1xyXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXJMYXlvdXRcclxuIiwiLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IHByb3ZpZGVzIGEgY2xpY2thYmxlIGJ1dHRvbiB3aGljaCBzaG93cyBpZiB0aGUgdXNlclxyXG4gKiBpcyBsb2dnZWQgaW4gb3IgaXMgYSBndWVzdC5cclxuICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIEdFTkVSSUNfU0lHTk9VVF9URVhULFxyXG4gIEdFTkVSSUNfU0lHTklOX1RFWFQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbmZpZy9zdHJpbmdzLmpzXCI7XHJcbi8vaW1wb3J0IHsgYXV0aFByb3BzLCBwcm9maWxlUHJvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgTXlDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L015Q29udGV4dC5qc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbkJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGF1dGhQcm9wIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthdXRoUHJvcC5ndWVzdCA/IChcclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PntHRU5FUklDX1NJR05JTl9URVhUfTwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ291dFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT57R0VORVJJQ19TSUdOT1VUX1RFWFR9PC9CdXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy9TZXNzaW9uQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuLy8gIGF1dGg6IGF1dGhQcm9wcyxcclxuLy8gIHByb2ZpbGU6IHByb2ZpbGVQcm9wcyxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgYXV0aDogc3RhdGUuYXV0aCwgcHJvZmlsZTogc3RhdGUucHJvZmlsZSwgfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlc3Npb25CdXR0b24pO1xyXG5leHBvcnQgZGVmYXVsdCBTZXNzaW9uQnV0dG9uXHJcbiIsImltcG9ydCB7XHJcbiAgR0VORVJJQ19USVRMRSxcclxuICBHRU5FUklDX1NVQlRJVExFLFxyXG4gIEdFTkVSSUNfTE9HT19QQVRILFxyXG4gIEdFTkVSSUNfQ1VSUkVOQ1lfVU5JVCxcclxuICBHRU5FUklDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVlfVEVYVCxcclxuICBHRU5FUklDX0NVUlJFTkNZX0lTT19DT0RFLFxyXG4gIEdFTkVSSUNfUEFZTUVOVF9NRVRIT0QsXHJcbiAgR0VORVJJQ19USEVNRV9DT0xPUl9QUklNQVJZLFxyXG4gIEdFTkVSSUNfVEhFTUVfQ09MT1JfU0VDT05EQVJZLFxyXG4gIEdFTkVSSUNfQ09ERV9JTkpFQ1RJT05fSEVBRCxcclxufSBmcm9tIFwiLi9zdHJpbmdzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYXV0aDoge1xyXG4gICAgZ3Vlc3Q6IHRydWUsXHJcbiAgICB0b2tlbjogbnVsbCxcclxuICAgIHVzZXJpZDogbnVsbCxcclxuICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgc2l0ZWluZm86IHtcclxuICAgIHRpdGxlOiBHRU5FUklDX1RJVExFLFxyXG4gICAgc3VidGl0bGU6IEdFTkVSSUNfU1VCVElUTEUsXHJcbiAgICBsb2dvcGF0aDogR0VORVJJQ19MT0dPX1BBVEgsXHJcbiAgICBjdXJyZW5jeVVuaXQ6IEdFTkVSSUNfQ1VSUkVOQ1lfVU5JVCxcclxuICAgIGN1cnJlbmN5SVNPQ29kZTogR0VORVJJQ19DVVJSRU5DWV9JU09fQ09ERSxcclxuICAgIHBheW1lbnRNZXRob2Q6IEdFTkVSSUNfUEFZTUVOVF9NRVRIT0QsXHJcbiAgICBzdHJpcGVQdWJsaXNoYWJsZUtleTogR0VORVJJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZX1RFWFQsXHJcbiAgICB0aGVtZVByaW1hcnlDb2xvcjogR0VORVJJQ19USEVNRV9DT0xPUl9QUklNQVJZLFxyXG4gICAgdGhlbWVTZWNvbmRhcnlDb2xvcjogR0VORVJJQ19USEVNRV9DT0xPUl9TRUNPTkRBUlksXHJcbiAgICBjb2RlSW5qZWN0aW9uSGVhZDogR0VORVJJQ19DT0RFX0lOSkVDVElPTl9IRUFELFxyXG4gIH0sXHJcbiAgbmV0d29ya0FjdGlvbjogZmFsc2UsXHJcbiAgcHJvZmlsZToge1xyXG4gICAgaXNDcmVhdG9yOiBmYWxzZSxcclxuICAgIG5hbWU6IG51bGwsXHJcbiAgICBpZDogbnVsbCxcclxuICAgIGZldGNoZWQ6IGZhbHNlLFxyXG4gICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICBwdXJjaGFzZXM6IFtdLFxyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBiaW86IG51bGwsXHJcbiAgfSxcclxuICBtZXNzYWdlOiB7XHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICBhY3Rpb246IG51bGwsXHJcbiAgfSxcclxuICB0aGVtZToge30sXHJcbiAgbGF5b3V0OiB7XHJcbiAgICB0b3A6IFtdLFxyXG4gICAgYm90dG9tOiBbXSxcclxuICAgIGFzaWRlOiBbXSxcclxuICAgIGZvb3RlckxlZnQ6IFtdLFxyXG4gICAgZm9vdGVyUmlnaHQ6IFtdLFxyXG4gIH0sXHJcbiAgbmF2aWdhdGlvbjogW10sXHJcbiAgYWRkcmVzczoge1xyXG4gICAgYmFja2VuZDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIixcclxuICAgIGZyb250ZW5kOiBcIlwiLFxyXG4gICAgZG9tYWluOiBcIlwiLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgYXBwbGljYXRpb24gd2lkZSBzdHJpbmdzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBFUlJfQUxMX0ZJRUxEU19SRVFVSVJFRCA9IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQuXCI7XHJcbmV4cG9ydCBjb25zdCBFUlJfUEFTU1dPUkRTX0RPTlRfTUFUQ0ggPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9IFwiU2lnbiB1cCBzdWNjZXNzZnVsLiBQbGVhc2Ugc2lnbiBpbi5cIjtcclxuZXhwb3J0IGNvbnN0IEVSUl9DT1VSU0VfVElUTEVfUkVRVUlSRUQgPSBcIkEgdGl0bGUgaXMgcmVxdWlyZWQuXCI7XHJcbmV4cG9ydCBjb25zdCBFUlJfQ09VUlNFX0NPU1RfUkVRVUlSRUQgPSBcIkNvc3QgaXMgcmVxdWlyZWQuXCI7XHJcblxyXG4vLyBSZXBsaWVzIGZyb20gdGhlIGJhY2tlbmRcclxuZXhwb3J0IGNvbnN0IFJFU1BfQVBJX1VTRVJfQ1JFQVRFRCA9IFwiVXNlciBjcmVhdGVkXCI7XHJcblxyXG4vLyBQbGFjZWhvbGRlciB0ZXh0c1xyXG5leHBvcnQgY29uc3QgQ1JFQVRPUl9BUkVBX0xJTktfVEVYVCA9IFwiQ3JlYXRlXCI7XHJcbmV4cG9ydCBjb25zdCBDUkVBVE9SX0FSRUFfUEFHRV9USVRMRSA9IFwiRGFzaGJvYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX1RJVExFID0gXCJNeSBDb3Vyc2UgU2l0ZVwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19TVUJUSVRMRSA9IFwiTGVhcm4gbmV3IHNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19MT0dPX1BBVEggPSBcIlwiO1xyXG4vL2V4cG9ydCBjb25zdCBHRU5FUklDX1NJR05JTl9URVhUID0gXCJTaWduIGluXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX1NJR05JTl9URVhUID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfU0lHTlVQX1RFWFQgPSBcIlNpZ24gdXBcIjtcclxuLy9leHBvcnQgY29uc3QgR0VORVJJQ19TSUdOT1VUX1RFWFQgPSBcIlNpZ24gb3V0XCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX1NJR05PVVRfVEVYVCA9IFwiXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX0NVUlJFTkNZX1VOSVQgPSBcIlwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZX1RFWFQgPSBcIlwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19DVVJSRU5DWV9JU09fQ09ERSA9IFwiXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX1BBWU1FTlRfTUVUSE9EID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfVEhFTUVfQ09MT1JfUFJJTUFSWSA9IFwiXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX1RIRU1FX0NPTE9SX1NFQ09OREFSWSA9IFwiXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX0NPREVfSU5KRUNUSU9OX0hFQUQgPSBcIlwiO1xyXG5cclxuLy8gVUkgdGV4dHNcclxuZXhwb3J0IGNvbnN0IEJUTl9MT0FEX01PUkUgPSBcIkxvYWQgTW9yZVwiO1xyXG5leHBvcnQgY29uc3QgTUVESUFfVVBMT0FEX0JVVFRPTl9URVhUID0gXCJVcGxvYWRcIjtcclxuZXhwb3J0IGNvbnN0IE1FRElBX1VQTE9BRElORyA9IFwiVXBsb2FkaW5nLi4uXCI7XHJcbmV4cG9ydCBjb25zdCBNRURJQV9BRERfTkVXX0JVVFRPTl9URVhUID0gXCJBZGQgbmV3XCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fQ0FOQ0VMX1RFWFQgPSBcIkNhbmNlbFwiO1xyXG5leHBvcnQgY29uc3QgTUVESUFfU0VBUkNIX0lOUFVUX1BMQUNFSE9MREVSID0gXCJTZWFyY2ggeW91ciBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NT1JFX1RFWFQgPSBcIkxvYWQgbW9yZVwiO1xyXG5leHBvcnQgY29uc3QgTUFOQUdFX01FRElBX0JVVFRPTl9URVhUID0gXCJJbnNlcnQgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IE1BTkFHRV9DT1VSU0VTX1BBR0VfSEVBRElORyA9IFwiQ291cnNlc1wiO1xyXG5leHBvcnQgY29uc3QgVVNFUlNfTUFOQUdFUl9QQUdFX0hFQURJTkcgPSBcIlVzZXJzXCI7XHJcbmV4cG9ydCBjb25zdCBORVdfQ09VUlNFX1BBR0VfSEVBRElORyA9IFwiRWRpdCBjb3Vyc2VcIjtcclxuZXhwb3J0IGNvbnN0IE1FRElBX01BTkFHRVJfRElBTE9HX1RJVExFID0gXCJBZGQgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9ORVdfQ09VUlNFID0gXCJOZXdcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9ET05FX1RFWFQgPSBcIkRvbmVcIjtcclxuZXhwb3J0IGNvbnN0IERJQUxPR19USVRMRV9GRUFUVVJFRF9JTUFHRSA9IFwiU2VsZWN0IGZlYXR1cmVkIGltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fU0VUX0ZFQVRVUkVEX0lNQUdFID0gXCJTZWxlY3RcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9TRUxFQ1RfTUVESUEgPSBcIlBpY2sgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IEZPUk1fRklFTERfRkVBVFVSRURfSU1BR0UgPSBcIlByb21vdGlvbmFsIG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBCVE5fREVMRVRFX0NPVVJTRSA9IFwiRGVsZXRlIGNvdXJzZVwiO1xyXG5leHBvcnQgY29uc3QgQlROX0FERF9WSURFTyA9IFwiQWRkXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfVklERU9fRElBTE9HX1RJVExFID0gXCJFbWJlZCBhbiBvbmxpbmUgdmlkZW9cIjtcclxuZXhwb3J0IGNvbnN0IENBUFRJT05fVkVSSUZJRUQgPSBcIlZlcmlmaWVkXCI7XHJcbmV4cG9ydCBjb25zdCBDQVBUSU9OX1VOVkVSSUZJRUQgPSBcIk5vdCB2ZXJpZmllZFwiO1xyXG5leHBvcnQgY29uc3QgTEFCRUxfTkVXX1BBU1NXT1JEID0gXCJOZXcgcGFzc3dvcmRcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9TQVZFID0gXCJTYXZlXCI7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfSVNfQURNSU4gPSBcIkFkbWluXCI7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfSVNfQ1JFQVRPUiA9IFwiQ3JlYXRvclwiO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0FDQ09VTlRfQUNUSVZFID0gXCJBY2NvdW50IGFjdGl2ZVwiO1xyXG5leHBvcnQgY29uc3QgTEFCRUxfQ09ORl9QQVNTV09SRCA9IFwiQ29uZmlybSBwYXNzd29yZFwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX0JMT0dfUE9TVFNfU0VDVElPTiA9IFwiQXJ0aWNsZXNcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9DT1VSU0VTX1NFQ1RJT04gPSBcIkNvdXJzZXNcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfVElUTEUgPSBcIlRpdGxlXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX1NVQlRJVExFID0gXCJTdWJ0aXRsZVwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19DVVJSRU5DWV9VTklUID0gXCJDdXJyZW5jeSBVbml0XCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX0NVUlJFTkNZX0lTT19DT0RFX1RFWFQgPSBcIkN1cnJlbmN5IElTTyBDb2RlXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX0xPR08gPSBcIkJyYW5kIExvZ29cIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfUEFHRV9IRUFESU5HID0gXCJTZXR0aW5nc1wiO1xyXG5leHBvcnQgY29uc3QgU0lURV9BRE1JTl9TRVRUSU5HU19TVFJJUEVfU0VDUkVUID0gXCJTdHJpcGUgU2VjcmV0IEtleVwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9BRE1JTl9TRVRUSU5HU19QQVlQQUxfU0VDUkVUID0gXCJQYXlwYWwgU2VjcmV0IEtleVwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9BRE1JTl9TRVRUSU5HU19QQVlUTV9TRUNSRVQgPSBcIlBheXRtIFNlY3JldCBLZXlcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfU0VDVElPTl9HRU5FUkFMID0gXCJHZW5lcmFsXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX1NFQ1RJT05fUEFZTUVOVCA9IFwiUGF5bWVudFwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9BRE1JTl9TRVRUSU5HU19QQVlNRU5UX01FVEhPRCA9IFwiUGF5bWVudCBNZXRob2RcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWV9URVhUID1cclxuICBcIlN0cmlwZSBQdWJsaXNoYWJsZSBLZXlcIjtcclxuZXhwb3J0IGNvbnN0IEZSRUVfQ09TVCA9IFwiRlJFRVwiO1xyXG5leHBvcnQgY29uc3QgU0lERUJBUl9URVhUX0NPVVJTRV9BQk9VVCA9IFwiQWJvdXQgdGhpcyBjb3Vyc2VcIjtcclxuZXhwb3J0IGNvbnN0IFJFQUNUX0NPTVBPTkVOVF9DUkFTSEVEID1cclxuICBcIldlJ3ZlIGVuY291bnRlcmVkIGEgcHJvYmxlbSBpbiBzaG93aW5nIHRoZSBjb250ZW50XCI7XHJcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9ESUFMT0dfVElUTEUgPSBcIkNoZWNrb3V0XCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01PREFMX1BBWU1FTlRfREVUQUlMU19IRUFERVIgPSBcIlBheW1lbnQgZGV0YWlsc1wiO1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NT0RBTF9DT1NUX1BSRUZJWCA9IFwiQ29zdFwiO1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NT0RBTF9QQVlfTk9XX0JVVFRPTl9DQVBUSU9OID0gXCJQYXkgbm93XCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX0lOSVRJQVRJT05fRkFJTEVEID1cclxuICBcIlBheW1lbnQgcHJvY2Vzc2luZyBmYWlsZWQuIFBsZWFzZSBjbG9zZSB0aGlzIHBvcHVwIGFuZCB0cnkgYWdhaW4uXCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX1ZFUklGSUNBVElPTl9GQUlMRUQgPVxyXG4gIFwiV2Ugd2VyZSBub3QgYWJsZSB0byB2ZXJpZnkgeW91ciBwYXltZW50LiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xyXG5leHBvcnQgY29uc3QgU1RSSVBFX1BVQkxJU0hBQkxFX0tFWV9FTVBUWSA9XHJcbiAgXCJTdHJpcGUgY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkLiBQbGVhc2UgY29udGFjdCBzaXRlIGFkbWluLlwiO1xyXG5leHBvcnQgY29uc3QgQ0FQVElPTl9UUllfQUdBSU4gPSBcIlRyeSBhZ2FpblwiO1xyXG5leHBvcnQgY29uc3QgQ0FQVElPTl9DTE9TRSA9IFwiQ2xvc2VcIjtcclxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSBcIkxvYWRpbmdcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9ORVdfTEVTU09OX1RFWFQgPSBcIkxlc3NvblwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX0RFTEVURV9MRVNTT05fVEVYVCA9IFwiRGVsZXRlXCI7XHJcbmV4cG9ydCBjb25zdCBDT1VSU0VfREVUQUlMU19DQVJEX0hFQURFUiA9IFwiRGV0YWlsc1wiO1xyXG5leHBvcnQgY29uc3QgREFOR0VSX1pPTkVfSEVBREVSID0gXCJEYW5nZXIgem9uZVwiO1xyXG5leHBvcnQgY29uc3QgREFOR0VSX1pPTkVfREVTQ1JJUFRJT04gPSBcIlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZS5cIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DT1VSU0VfUE9QVVBfSEVBREVSID0gXCJEZWxldGUgY291cnNlP1wiO1xyXG5leHBvcnQgY29uc3QgUE9QVVBfT0tfQUNUSU9OID0gXCJZZXNcIjtcclxuZXhwb3J0IGNvbnN0IFBPUFVQX0NBTkNFTF9BQ1RJT04gPSBcIk5vXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9TRUNUSU9OX0hFQURFUiA9IFwiU2lnbiBJblwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fU0VDVElPTl9CVVRUT04gPSBcIlNpZ24gaW5cIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX0lOU1RFQURfQlVUVE9OID0gXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIjtcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TRUNUSU9OX0hFQURFUiA9IFwiQ3JlYXRlIGFuIGFjY291bnRcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TRUNUSU9OX0JVVFRPTiA9IFwiSm9pblwiO1xyXG5leHBvcnQgY29uc3QgTUVESUFfTUFOQUdFUl9QQUdFX0hFQURJTkcgPSBcIk1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fU0VBUkNIID0gXCJTZWFyY2hcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9BRERfRklMRSA9IFwiU2VsZWN0IGEgZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgRklMRV9VUExPQURfU1VDQ0VTUyA9IFwiRmlsZSB1cGxvYWRlZFwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX1lPVVJfTUVESUEgPSBcIllvdXIgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9FRElUT1JfSEVBREVSID0gXCJMZXNzb25cIjtcclxuZXhwb3J0IGNvbnN0IEJMT0dfUE9TVF9TV0lUQ0ggPSBcIkJsb2dcIjtcclxuZXhwb3J0IGNvbnN0IERPV05MT0FEQUJMRV9TV0lUQ0ggPSBcIkRvd25sb2FkYWJsZVwiO1xyXG5leHBvcnQgY29uc3QgVFlQRV9EUk9QRE9XTiA9IFwiVHlwZVwiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX0NPTlRFTlRfSEVBREVSID0gXCJUZXh0IENvbnRlbnRcIjtcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVVJMX0xBQkVMID0gXCJNZWRpYSBjb250ZW50XCI7XHJcbmV4cG9ydCBjb25zdCBNRURJQV9NQU5BR0VSX1lPVVJfTUVESUFfSEVBREVSID0gXCJZb3VyIG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBESUFMT0dfU0VMRUNUX0JVVFRPTiA9IFwiU2VsZWN0XCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fUkVRVUlSRVNfRU5ST0xMTUVOVCA9IFwiQXZhaWxhYmxlIHRvIG9ubHkgZW5yb2xsZWQgc3R1ZGVudHNcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9MRVNTT05fUE9QVVBfSEVBREVSID0gXCJEZWxldGUgbGVzc29uXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9MRVNTT05fREVMRVRFRCA9IFwiTGVzc29uIGRlbGV0ZWRcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX0xFU1NPTl9TQVZFRCA9IFwiTGVzc29uIGRldGFpbHMgc2F2ZWRcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX0NPVVJTRV9TQVZFRCA9IFwiQ291cnNlIGRldGFpbHMgc2F2ZWRcIjtcclxuZXhwb3J0IGNvbnN0IEVOUk9MTF9JTl9USEVfQ09VUlNFID1cclxuICBcIlBsZWFzZSBlbnJvbGwgaW4gdGhlIGNvdXJzZSB0byBhY2Nlc3MgdGhpcyBsZXNzb24uXCI7XHJcbmV4cG9ydCBjb25zdCBVU0VSX0VSUk9SX0hFQURFUiA9IFwiWWlrZXMhXCI7XHJcbmV4cG9ydCBjb25zdCBFTlJPTExfQlVUVE9OX1RFWFQgPSBcIkVucm9sbFwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX0RFTEVURV9NRURJQSA9IFwiRGVsZXRlXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVESUFfUE9QVVBfSEVBREVSID0gXCJEZWxldGUgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9FRElUSU5HX01FRElBID0gXCJFZGl0IG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfRURJVElOR19VU0VSID0gXCJFZGl0IHVzZXJcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9NRURJQV9QUkVWSUVXID0gXCJQcmV2aWV3XCI7XHJcbmV4cG9ydCBjb25zdCBQUkVWSUVXX1BERl9GSUxFID0gXCJPcGVuIGluIGEgbmV3IHRhYlwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfTUVESUFfREVMRVRFRCA9IFwiTWVkaWEgZGVsZXRlZFwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfTUVESUFfVVBEQVRFRCA9IFwiTWVkaWEgZGV0YWlscyB1cGRhdGVkXCI7XHJcbmV4cG9ydCBjb25zdCBQQUdFX0hFQURFUl9BTExfQ09VUlNFUyA9IFwiQ291cnNlc1wiO1xyXG5leHBvcnQgY29uc3QgUEFHRV9IRUFERVJfQUxMX1BPU1RTID0gXCJBcnRpY2xlc1wiO1xyXG5leHBvcnQgY29uc3QgQ09VUlNFX1RZUEVfQkxPRyA9IFwiUG9zdFwiO1xyXG5leHBvcnQgY29uc3QgQ09VUlNFX1RZUEVfQ09VUlNFID0gXCJDb3Vyc2VcIjtcclxuZXhwb3J0IGNvbnN0IENPVVJTRV9DUkVBVE9SX1BSRUZJWCA9IFwiQnlcIjtcclxuZXhwb3J0IGNvbnN0IENPVVJTRV9FRElUT1JfREVTQ1JJUFRJT04gPSBcIkRlc2NyaXB0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9TRVRUSU5HU19TQVZFRCA9IFwiU2V0dGluZ3Mgc2F2ZWRcIjtcclxuZXhwb3J0IGNvbnN0IEVOUk9MTEVEX0NPVVJTRVNfSEVBREVSID0gXCJFbnJvbGxlZCBjb3Vyc2VzXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX0NVU1RPTUlTQVRJT05TX1NFVFRJTkdfSEVBREVSID0gXCJDdXN0b21pemF0aW9uc1wiO1xyXG5leHBvcnQgY29uc3QgU0lURV9DVVNUT01JU0FUSU9OU19TRVRUSU5HX0NPREVJTkpFQ1RJT05fSEVBRCA9XHJcbiAgXCJDb2RlIEluamVjdGlvbiBpbiA8aGVhZD5cIjtcclxuZXhwb3J0IGNvbnN0IERJU0NBUkRfQ09VUlNFX0NIQU5HRVNfUE9QVVBfSEVBREVSID1cclxuICBcIkRpc2NhcmQgY2hhbmdlcyBtYWRlIHRvIHRoZSBjb3Vyc2U/XCI7XHJcbmV4cG9ydCBjb25zdCBGRUFUVVJFRF9TRUNUSU9OX0hFQURFUiA9IFwiRmVhdHVyZWQgUmVzb3VyY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBDQVJEX0hFQURFUl9QQUdFX0xBWU9VVCA9IFwiUGFnZSBMYXlvdXRcIjtcclxuZXhwb3J0IGNvbnN0IENBUkRfSEVBREVSX1RIRU1FID0gXCJUaGVtZVwiO1xyXG5leHBvcnQgY29uc3QgQ0FSRF9ERVNDUklQVElPTl9QQUdFX0xBWU9VVCA9XHJcbiAgXCJVc2UgdGhlICcrJyBidXR0b25zIHRvIGFkZCB5b3VyIGZhdm9yaXRlIGNvbXBvbmVudHMgdG8gdGhlIGRlc2lyZWQgc2VjdGlvbnMgb2YgeW91ciBwYWdlLlwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTVBPTkVOVF9QT1BVUF9IRUFERVIgPSBcIkFkZCBjb21wb25lbnRcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX0NIQU5HRVNfU0FWRUQgPSBcIkNoYW5nZXMgc2F2ZWRcIjtcclxuZXhwb3J0IGNvbnN0IFNVQkhFQURFUl9DT1VSU0VTX1NFQ1RJT04gPVxyXG4gIFwiTGVhcm4gbmV3IHNraWxscyB3aXRoIG91ciBjYXJlZnVsbHkgY3JhZnRlZCBjb3Vyc2VzLlwiO1xyXG5leHBvcnQgY29uc3QgU1VCSEVBREVSX0ZFQVRVUkVEX1NFQ1RJT04gPVxyXG4gIFwiSGFuZCBwaWNrZWQgcmVzb3VyY2VzIGJ5IHRoZSBlZGl0b3JzLlwiO1xyXG5leHBvcnQgY29uc3QgU1VCSEVBREVSX1RIRU1FX0FERF9USEVNRSA9IFwiSW5zdGFsbCBuZXcgdGhlbWVcIjtcclxuZXhwb3J0IGNvbnN0IFNVQkhFQURFUl9USEVNRV9BRERFRF9USEVNRSA9IFwiSW5zdGFsbGVkIHRoZW1lc1wiO1xyXG5leHBvcnQgY29uc3QgU1VCSEVBREVSX1RIRU1FX0FERF9USEVNRV9JTlBVVF9MQUJFTCA9IFwiVGhlbWUgRWRpdG9yXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJIRUFERVJfVEhFTUVfQUREX1RIRU1FX0lOUFVUX1BMQUNFSE9MREVSID1cclxuICBcIlBhc3RlIHZhbGlkIEpTT04gaGVyZVwiO1xyXG5leHBvcnQgY29uc3QgU1VCSEVBREVSX1RIRU1FX0lOU1RBTExFRF9USEVNRVMgPSBcIkluc3RhbGxlZCB0aGVtZXNcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9HRVRfVEhFTUVTID0gXCJHZXQgbW9yZSB0aGVtZXNcIjtcclxuZXhwb3J0IGNvbnN0IEVSUk9SX1NOQUNLQkFSX1BSRUZJWCA9IFwiRXJyb3JcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9USEVNRV9BUFBMWSA9IFwiQXBwbHlcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9USEVNRV9VTklOU1RBTEwgPSBcIlVuaW5zdGFsbFwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX1RIRU1FX0lOU1RBTEwgPSBcIkluc3RhbGxcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9USEVNRV9SRU1JWCA9IFwiUmVtaXhcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9USEVNRV9QT1BVUF9IRUFERVIgPSBcIlVuaW5zdGFsbCB0aGVtZVwiO1xyXG5leHBvcnQgY29uc3QgQVBQTFlfVEhFTUVfUE9QVVBfSEVBREVSID0gXCJBcHBseSB0aGVtZVwiO1xyXG5leHBvcnQgY29uc3QgUkVNSVhFRF9USEVNRV9QUkVGSVggPSBcIlJlbWl4XCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9USEVNRV9DT1BJRUQgPSBcIlRoZW1lIHJlYWR5IHRvIGVkaXRcIjtcclxuZXhwb3J0IGNvbnN0IE5PX1RIRU1FU19JTlNUQUxMRUQgPSBcIk5vIHRoZW1lcyBhcmUgaW5zdGFsbGVkXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9USEVNRV9JTlNUQUxMRUQgPSBcIlRoZW1lIGluc3RhbGxlZFwiO1xyXG5leHBvcnQgY29uc3QgQ09OU09MRV9NRVNTQUdFX1RIRU1FX0lOVkFMSUQgPVxyXG4gIFwiVGhlIGFjdGl2ZSBNVUkgdGhlbWUgaXMgaW52YWxpZC4gRmFsbGluZyBiYWNrIHRvIHRoZSBkZWZhdWx0IHRoZW1lLlwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfVEhFTUVfQVBQTElFRCA9IFwiVGhlbWUgYXBwbGllZFwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfVEhFTUVfVU5JTlNUQUxMRUQgPSBcIlRoZW1lIHVuaW5zdGFsbGVkXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfTkFWSUdBVElPTiA9IFwiTWVudXNcIjtcclxuZXhwb3J0IGNvbnN0IExBQkVMX05BVklHQVRJT05fTElOS19URVhUID0gXCJUZXh0XCI7XHJcbmV4cG9ydCBjb25zdCBMQUJFTF9OQVZJR0FUSU9OX0xJTktfREVTVElOQVRJT04gPSBcIkxvY2F0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBMSU5LX0RST1BET1dOID0gXCJDYXRlZ29yeVwiO1xyXG5leHBvcnQgY29uc3QgQUREX05FV19MSU5LX0JVVFRPTiA9IFwiQWRkIG5ldyBsaW5rXCI7XHJcbmV4cG9ydCBjb25zdCBMQUJFTF9OQVZJR0FUSU9OX0xJTktfTkVXVEFCID0gXCJOZXcgdGFiXCI7XHJcbmV4cG9ydCBjb25zdCBXSURHRVRTX1BBR0VfSEVBREVSID0gXCJXaWRnZXRzXCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UU19TSElQUElOR19BRERSRVNTX1NFQ1RJT05fSEVBREVSID0gXCJTaGlwcGluZyBBZGRyZXNzXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfU0VDVElPTl9QQVlNRU5UX0NPTkZJUk1BVElPTl9XRUJIT09LID1cclxuICBcIlBheW1lbnQgQ29uZmlybWF0aW9uIFdlYmhvb2sgVVJMXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJIRUFERVJfU0VDVElPTl9QQVlNRU5UX0NPTkZJUk1BVElPTl9XRUJIT09LID1cclxuICBcIllvdXIgcGF5bWVudCBwcm9jZXNzb3Igc2VuZHMgb3V0IG5vdGlmaWNhdGlvbnMgYWJvdXQgcHVyY2hhc2VzLiBDb3Vyc2VMaXQgbmVlZHMgdGhvc2Ugbm90aWZpY2F0aW9ucyB0byBjb3JyZWN0bHkgcmVmbGVjdCB1c2VyIHB1cmNoYXNlcy4gUmlnaHQgY2xpY2sgdGhlIGZvbGxvd2luZyBsaW5rIGFuZCBjb3B5IHRoZSBsaW5rIGFkZHJlc3MuIFBhc3RlIHRoYXQgaW50byB5b3VyIHBheW1lbnQgcHJvY2Vzc29yJ3Mgd2ViaG9vayBzZXR0aW5ncy5cIjtcclxuZXhwb3J0IGNvbnN0IFBVUkNIQVNFX1NUQVRVU19QQUdFX0hFQURFUiA9IFwiUHVyY2hhc2UgU3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBNQUlOX01FTlVfSVRFTV9EQVNIQk9BUkQgPSBcIkRhc2hib2FyZFwiO1xyXG5leHBvcnQgY29uc3QgTUFJTl9NRU5VX0lURU1fUFJPRklMRSA9IFwiUHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1NFQ1RJT05fTUFJTl9DT05URU5UID0gXCJNYWluIENvbnRlbnRcIjtcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9TRUNUSU9OX0ZPT1RFUl9MRUZUID0gXCJMZWZ0IFNlY3Rpb25cIjtcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9TRUNUSU9OX0ZPT1RFUl9SSUdIVCA9IFwiUmlnaHQgU2VjdGlvblwiO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1NFQ1RJT05fVE9QID0gXCJUb3BcIjtcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9TRUNUSU9OX0ZPT1RFUiA9IFwiRm9vdGVyXCI7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfU0VDVElPTl9CT1RUT00gPSBcIkJvdHRvbVwiO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1NFQ1RJT05fQVNJREUgPSBcIkFzaWRlXCI7XHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9TVEFUVVNfU1VDQ0VTUyA9IFwiUGF5bWVudCBDb25maXJtZWQuXCI7XHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9TVEFUVVNfU1VDQ0VTU19ERVRBSUxTID1cclxuICBcIlRoYW5rIHlvdS4gWW91IGNhbiBub3cgaGVhZCBvdmVyIHRvIHlvdXIgY291cnNlIGFuZCBzdGFydCBsZWFybmluZy5cIjtcclxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1NUQVRVU19JTklUSUFURUQgPSBcIlBheW1lbnQgTm90IFlldCBDb25maXJtZWQuXCI7XHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9TVEFUVVNfRkFJTEVEID0gXCJQYXltZW50IEZhaWxlZC5cIjtcclxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1NUQVRVU19GQUlMRURfREVUQUlMUyA9XHJcbiAgXCJUaGUgcGF5bWVudCBzZXJ2aWNlIHByb3ZpZGVyIHdhcyB1bmFibGUgdG8gcHJvY2VzcyB5b3VyIHBheW1lbnQuIFBsZWFzZSBnbyBiYWNrIGFuZCB0cnkgYWdhaW4uXCI7XHJcbmV4cG9ydCBjb25zdCBWSVNJVF9DT1VSU0VfQlVUVE9OID0gXCJWaXNpdCBjb3Vyc2VcIjtcclxuZXhwb3J0IGNvbnN0IFZJU0lUX1BPU1RfQlVUVE9OID0gXCJWaXNpdCBwb3N0XCI7XHJcbmV4cG9ydCBjb25zdCBWRVJJRllfUEFZTUVOVF9CVVRUT04gPSBcIlJlLWNoZWNrIFBheW1lbnQgU3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBQVVJDSEFTRV9JRF9IRUFERVIgPSBcIlB1cmNoYXNlIElEXCI7XHJcbmV4cG9ydCBjb25zdCBQQUdFX0hFQURFUl9GRUFUVVJFRCA9IFwiRmVhdHVyZWQgQ29udGVudFwiO1xyXG5leHBvcnQgY29uc3QgQlROX1ZJRVdfQUxMID0gXCJWaWV3IGFsbFwiO1xyXG5leHBvcnQgY29uc3QgRU1QVFlfQ09VUlNFU19MSVNUX0FETUlOID1cclxuICBcIkNyZWF0ZSB5b3VyIGZpcnN0IGNvdXJzZSBieSBjbGlja2luZyB0aGUgKyBidXR0b24gb24gdGhlIHRvcCByaWdodC5cIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9SRVNFVF9QQVNTV09SRCA9IFwiUmVzZXQgcGFzc3dvcmRcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9ERVNJR04gPSBcIkFwcGVhcmFuY2VcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9ZT1VSX1BST0ZJTEUgPSBcIllvdXIgUHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9QQUdFX01FU1NBR0VfTk9UX0xPR0dFRF9JTiA9IFwidG8gc2VlIHlvdXIgcHJvZmlsZS5cIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfUEFHRV9IRUFERVIgPSBcIlByb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfTVlfQ09VUlNFUyA9IFwiTXkgQ291cnNlc1wiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9QQUdFX05PVF9FTlJPTExFRCA9IFwiWW91IGFyZSBub3QgZW5yb2xsZWQgaW4gYW55IGNvdXJzZS5cIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfUEFHRV9CUk9XU0VfQ09VUlNFU19URVhUID0gXCJCcm93c2Ugb3VyIGNvdXJzZXNcIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX05BTUUgPSBcIk5hbWVcIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX0VNQUlMID0gXCJFbWFpbFwiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9TRUNUSU9OX0RFVEFJTFNfQklPID0gXCJCaW9cIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX0JJT19FTVBUWSA9XHJcbiAgXCJUaGUgdXNlciBoYXMgbm90IGZpbGxlZCB0aGUgYmlvLlwiO1xyXG4iLCJpbXBvcnQgeyB3aWRnZXRzIH0gZnJvbSBcIi4uL2NvdXJzZWxpdC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2lkZ2V0cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCB2YXIgTXlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBzaXRlSW5mbzoge30sXHJcbiAgICBwcm9maWxlOiB7XHJcbiAgICAgICAgaXNDcmVhdG9yOiBmYWxzZSxcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGF1dGhQcm9wOiB7fSxcclxuICAgIG5hdmlnYXRpb246IHt9LFxyXG4gICAgbGF5b3V0OiB7fVxyXG5cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgTXlDb250ZXh0XHJcblxyXG5leHBvcnQgY29uc3QgTXlQcm92aWRlciA9IChjaGlsZHJlbikgPT4ge1xyXG4gICAgcmV0dXJuIDxNeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NoaWxkcmVufSAvPlxyXG59IiwiaW1wb3J0IGJ1dHRvbmRvd24gZnJvbSBcIkBjb3Vyc2VsaXQvd2lkZ2V0LWJ1dHRvbmRvd25cIjtcclxuaW1wb3J0IENvbW1vbldpZGdldHMgZnJvbSBcIkBjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHNcIjtcclxuXHJcbmNvbnN0IGdldEFsbFdpZGdldHMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2lkZ2V0cyA9IHt9O1xyXG5cclxuICAvLyBBZGQgY29tbW9uIHdpZGdldHMgdG8gQ291cnNlTGl0XHJcbiAgZm9yIChjb25zdCB3aWRnZXQgb2YgQ29tbW9uV2lkZ2V0cykge1xyXG4gICAgd2lkZ2V0c1t3aWRnZXQubWV0YWRhdGEubmFtZV0gPSB3aWRnZXQ7XHJcbiAgfVxyXG5cclxuICAvLyBBZGRpdGlvbmFsIHdpZGdldHMgYXJlIGFkZGVkIGhlcmVcclxuICB3aWRnZXRzW2J1dHRvbmRvd24ubWV0YWRhdGEubmFtZV0gPSBidXR0b25kb3duO1xyXG5cclxuICByZXR1cm4gd2lkZ2V0cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aWRnZXRzID0gZ2V0QWxsV2lkZ2V0cygpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYWxsIHRoZSBQcm9wVHlwZXMgdXNlZCBhY3Jvc3MgdGhlIGFwcC5cclxuICovXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGd1ZXN0OiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIHRva2VuOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaXNDcmVhdG9yOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBmZXRjaGVkOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBwdXJjaGFzZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYXRlc3RQb3N0c1Byb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHVwZGF0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpdGVJbmZvUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgbG9nb3BhdGg6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGN1cnJlbmN5VW5pdDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgY3VycmVuY3lJU09Db2RlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVibGljQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgdXBkYXRlZDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGlzRmVhdHVyZWQ6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgY29zdDogUHJvcFR5cGVzLm51bWJlcixcclxuICBjcmVhdG9ySWQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdG9yQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGNyZWF0b3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICB1cGRhdGVkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBpc0ZlYXR1cmVkOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGNvc3Q6IFByb3BUeXBlcy5udW1iZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpdGVVc2VyID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB2ZXJpZmllZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc0NyZWF0b3I6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNBZG1pbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHB1cmNoYXNlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVkQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY29zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGZlYXR1cmVkSW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBNZXNzYWdlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhY3Rpb246IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjYjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGVzc29uID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGRvd25sb2FkYWJsZTogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBjb250ZW50VVJMOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGluayA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBuZXdUYWI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZHJlc3NQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgYmFja2VuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZyb250ZW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZG9tYWluOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9