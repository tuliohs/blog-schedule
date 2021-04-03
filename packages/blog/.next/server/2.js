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

 ////import { connect } from "react-redux";

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
}); //export default (AppToast);


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


 ////import { connect } from "react-redux";






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
}); //export default (Header);


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

 ////import { connect } from "react-redux";
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
//export default (Scaffold);


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
////import { connect } from "react-redux";







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
//export default (Section);


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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../types */ "./types.js");

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\BaseLayout\\WidgetByName.js";





 //import { connect } from "react-redux";



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
  address: _types__WEBPACK_IMPORTED_MODULE_7__["addressProps"]
};

const mapStateToProps = state => ({
  address: state.address
}); //export default (WidgetByName);


/* harmony default export */ __webpack_exports__["default"] = (WidgetByName);

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
////import { connect } from "react-redux";


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
//export default (MasterLayout);


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

 ////import { connect } from "react-redux";

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
//export default (SessionButton);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcFRvYXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL0Jhc2VMYXlvdXQvU2NhZmZvbGQvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9TY2FmZm9sZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdWJsaWMvQmFzZUxheW91dC9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L1dpZGdldEJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHVibGljL1Nlc3Npb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3Vyc2VsaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3R5cGVzLmpzIl0sIm5hbWVzIjpbIkFwcFRvYXN0IiwicHJvcHMiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImdldEFjdGlvbkJ1dHRvbnNBcnJheSIsImFjdGlvbkJ1dHRvbnNBcnJheSIsInVuc2hpZnQiLCJjYiIsInRleHQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJvcGVuIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkltZyIsImR5bmFtaWMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsb2dvIiwiZGlzcGxheSIsImxvZ29jb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImxvZ29pbWciLCJib3JkZXJSYWRpdXMiLCJIZWFkZXIiLCJjbGFzc2VzIiwic2l0ZUluZm8iLCJ1c2VDb250ZXh0IiwiTXlDb250ZXh0IiwibG9nb3BhdGgiLCJ0aXRsZSIsInByb3BUeXBlcyIsInNpdGVpbmZvIiwic2l0ZUluZm9Qcm9wcyIsImV4dGVybmFsTGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJNZW51SXRlbSIsImxpbmsiLCJkZXN0aW5hdGlvbiIsImluZGV4T2YiLCJuZXdUYWIiLCJjbG9zZURyYXdlciIsImRyYXdlcldpZHRoIiwicm9vdCIsImRyYXdlciIsImJyZWFrcG9pbnRzIiwidXAiLCJmbGV4U2hyaW5rIiwiYXBwQmFyIiwiekluZGV4IiwibWVudUJ1dHRvbiIsInRvb2xiYXIiLCJtaXhpbnMiLCJkcmF3ZXJQYXBlciIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImFjdGl2ZUl0ZW0iLCJiYWNrZ3JvdW5kIiwidmlzaXRTaXRlTGluayIsInNob3dQcm9ncmVzc0JhciIsInZpc2liaWxpdHkiLCJuZXR3b3JrQWN0aW9uIiwibWVudVRpdGxlIiwibWFyZ2luTGVmdCIsIlNjYWZmb2xkIiwiY2hpbGRyZW4iLCJ1c2VUaGVtZSIsInByb2ZpbGUiLCJuYXZpZ2F0aW9uIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZURyYXdlclRvZ2dsZSIsIm1ha2VEcmF3ZXIiLCJmb3JNb2JpbGUiLCJmZXRjaGVkIiwiaWQiLCJNQUlOX01FTlVfSVRFTV9QUk9GSUxFIiwidXNlcklkIiwiY2F0ZWdvcnkiLCJOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4iLCJpc0FkbWluIiwiaXNDcmVhdG9yIiwiTUFJTl9NRU5VX0lURU1fREFTSEJPQVJEIiwibWFwIiwiZGlyZWN0aW9uIiwicGFwZXIiLCJrZWVwTW91bnRlZCIsIlNlY3Rpb24iLCJuYW1lIiwibGF5b3V0Iiwic2VjdGlvbkxheW91dCIsInJvdXRlciIsInVzZVJvdXRlciIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCIsIndpZGdldHMiLCJtZXRhZGF0YSIsImV4Y2x1ZGVGcm9tUGF0aHMiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwibWFpbkNvbnRlbnQiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1hcmdpbiIsIlRlbXBsYXRlIiwiV2lkZ2V0QnlOYW1lIiwic2VjdGlvbiIsImFkZHJlc3MiLCJXaWRnZXQiLCJ3aWRnZXQiLCJmZXRjaCIsIkZldGNoQnVpbGRlciIsInNldFVybCIsImJhY2tlbmQiLCJzZXRJc0dyYXBoUUxFbmRwb2ludCIsIk9iamVjdCIsImFzc2lnbiIsImNvbmZpZyIsIkJBQ0tFTkQiLCJ1dGlsaXRpZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYWRkcmVzc1Byb3BzIiwiTWFzdGVyTGF5b3V0IiwiZm9ybXVsYXRlTWVkaWFVcmwiLCJkZWZhdWx0U3RhdGUiLCJidXR0b24iLCJTZXNzaW9uQnV0dG9uIiwiYXV0aFByb3AiLCJndWVzdCIsIkdFTkVSSUNfU0lHTklOX1RFWFQiLCJHRU5FUklDX1NJR05PVVRfVEVYVCIsIkpXVF9DT09LSUVfTkFNRSIsIlVTRVJJRF9DT09LSUVfTkFNRSIsIkxFU1NPTl9UWVBFX1RFWFQiLCJMRVNTT05fVFlQRV9BVURJTyIsIkxFU1NPTl9UWVBFX1ZJREVPIiwiTEVTU09OX1RZUEVfUERGIiwiTEVTU09OX1RZUEVfUVVJWiIsIlVSTF9FWFRFTlRJT05fUE9TVFMiLCJVUkxfRVhURU5USU9OX0NPVVJTRVMiLCJGUkVFX0NPVVJTRVNfVEVYVCIsIkRSQUZUSlNfRU5USVRZX1RZUEVfSU1BR0UiLCJEUkFGVEpTX0VOVElUWV9UWVBFX1ZJREVPIiwiRFJBRlRKU19FTlRJVFlfVFlQRV9BVURJTyIsIlBBWU1FTlRfTUVUSE9EX1NUUklQRSIsIlBBWU1FTlRfTUVUSE9EX1BBWVBBTCIsIlBBWU1FTlRfTUVUSE9EX1BBWVRNIiwiUEFZTUVOVF9NRVRIT0RfTk9ORSIsIlRSQU5TQUNUSU9OX0lOSVRJQVRFRCIsIlRSQU5TQUNUSU9OX1NVQ0NFU1MiLCJUUkFOU0FDVElPTl9GQUlMRUQiLCJDT05TRUNVVElWRV9QQVlNRU5UX1ZFUklGSUNBVElPTl9SRVFVRVNUX0dBUCIsIk1JTUVUWVBFX1ZJREVPIiwiTUlNRVRZUEVfQVVESU8iLCJNSU1FVFlQRV9JTUFHRSIsIlRIRU1FU19SRVBPIiwiTkFWSUdBVElPTl9DQVRFR09SWV9GT09URVIiLCJnZXRBbGxXaWRnZXRzIiwiQ29tbW9uV2lkZ2V0cyIsImJ1dHRvbmRvd24iLCJxdWVyeUdyYXBoUUwiLCJ1cmwiLCJxdWVyeSIsInRva2VuIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvcnMiLCJFcnJvciIsImRhdGEiLCJjYXBpdGFsaXplIiwicyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJxdWVyeUdyYXBoUUxXaXRoVUlFZmZlY3RzIiwiZm9ybWF0dGVkTG9jYWxlRGF0ZSIsImVwb2NoU3RyaW5nIiwiRGF0ZSIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwibWFrZUdyYXBoUUxRdWVyeVN0cmluZ0Zyb21KU09iamVjdCIsIm9iaiIsInJlcGxhY2UiLCJtZWRpYUlEIiwiZ2VuZXJhdGVUaHVtYm5haWxVcmwiLCJmb3JtdWxhdGVDb3Vyc2VVcmwiLCJjb3Vyc2UiLCJpc0Jsb2ciLCJjb3Vyc2VJZCIsInNsdWciLCJnZXRQb3N0RGVzY3JpcHRpb25TbmlwcGV0IiwicmF3RHJhZnRKU0NvbnRlbnRTdGF0ZSIsImZpcnN0U2VudGVuY2UiLCJUZXh0RWRpdG9yIiwiaHlkcmF0ZSIsImdldEN1cnJlbnRDb250ZW50IiwiZ2V0UGxhaW5UZXh0Iiwic3BsaXQiLCJnZXRHcmFwaFFMUXVlcnlGaWVsZHMiLCJqc09iaiIsImZpZWxkc05vdFB1dEJldHdlZW5RdW90ZXMiLCJxdWVyeVN0cmluZyIsImkiLCJrZXlzIiwidW5kZWZpbmVkIiwiZ2V0T2JqZWN0Q29udGFpbmluZ09ubHlDaGFuZ2VkRmllbGRzIiwiYmFzZWxpbmUiLCJyZXN1bHQiLCJhcmVPYmplY3RzRGlmZmVyZW50Iiwib25seUNoYW5nZWRGaWVsZHMiLCJnZXRBZGRyZXNzIiwiaG9zdCIsImRvbWFpbiIsImV4dHJhY3REb21haW5Gcm9tVVJMIiwiZ2V0QmFja2VuZEFkZHJlc3MiLCJmcm9udGVuZCIsImF1dGhQcm9wcyIsInNoYXBlIiwiYm9vbCIsInByb2ZpbGVQcm9wcyIsImVtYWlsIiwicHVyY2hhc2VzIiwiYXJyYXlPZiIsImxhdGVzdFBvc3RzUHJvcHMiLCJkZXNjcmlwdGlvbiIsImNyZWF0b3JOYW1lIiwidXBkYXRlZCIsIm51bWJlciIsInN1YnRpdGxlIiwiY3VycmVuY3lVbml0IiwiY3VycmVuY3lJU09Db2RlIiwicHVibGljQ291cnNlIiwiaXNGZWF0dXJlZCIsImNvc3QiLCJjcmVhdG9ySWQiLCJjcmVhdG9yQ291cnNlIiwic2l0ZVVzZXIiLCJ2ZXJpZmllZCIsImF2YXRhciIsImZlYXR1cmVkQ291cnNlIiwiZmVhdHVyZWRJbWFnZSIsImFwcE1lc3NhZ2UiLCJmdW5jIiwibGVzc29uIiwidHlwZSIsImRvd25sb2FkYWJsZSIsImNvbnRlbnRVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCLFFBQU07QUFBRUM7QUFBRixNQUFjRCxLQUFwQjtBQUNBLFFBQU1FLE1BQU0sR0FBR0QsT0FBTyxJQUFJQSxPQUFPLENBQUNDLE1BQWxDOztBQUVBLFFBQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFE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IFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLy8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBTbmFja2JhciwgSWNvbkJ1dHRvbiwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vaW1wb3J0IHsgY2xlYXJBcHBNZXNzYWdlIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgYXBwTWVzc2FnZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IEFwcFRvYXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSBwcm9wcztcclxuICBjb25zdCBhY3Rpb24gPSBtZXNzYWdlICYmIG1lc3NhZ2UuYWN0aW9uO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcbiAgICBpZiAocmVhc29uID09PSBcImNsaWNrYXdheVwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL3Byb3BzLmRpc3BhdGNoKGNsZWFyQXBwTWVzc2FnZSgpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBY3Rpb25CdXR0b25zQXJyYXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhY3Rpb25CdXR0b25zQXJyYXkgPSBbXHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAga2V5PVwiY2xvc2VcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXHJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDbG9zZSAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+LFxyXG4gICAgXTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgYWN0aW9uQnV0dG9uc0FycmF5LnVuc2hpZnQoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAga2V5PVwiYWN0aW9uXCJcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXttZXNzYWdlLmFjdGlvbi5jYn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bWVzc2FnZS5hY3Rpb24udGV4dH1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWN0aW9uQnV0dG9uc0FycmF5O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bWVzc2FnZSAmJiAoXHJcbiAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9wZW49e21lc3NhZ2Uub3Blbn1cclxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgIG1lc3NhZ2U9ezxzcGFuPnttZXNzYWdlLm1lc3NhZ2V9PC9zcGFuPn1cclxuICAgICAgICAgIGFjdGlvbj17Z2V0QWN0aW9uQnV0dG9uc0FycmF5KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL0FwcFRvYXN0LnByb3BUeXBlcyA9IHtcclxuLy8gIG1lc3NhZ2U6IGFwcE1lc3NhZ2UuaXNSZXF1aXJlZCxcclxuLy8gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vL307XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbWVzc2FnZTogc3RhdGUubWVzc2FnZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxyXG59KTtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgKEFwcFRvYXN0KTtcclxuZXhwb3J0IGRlZmF1bHQgQXBwVG9hc3RcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTZXNzaW9uQnV0dG9uIGZyb20gXCIuLi9TZXNzaW9uQnV0dG9uXCI7XHJcbmltcG9ydCB7IHNpdGVJbmZvUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IE15Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9NeUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IEltZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vSW1nLmpzXCIpKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxvZ286IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIH0sXHJcbiAgbG9nb2NvbnRhaW5lcjoge1xyXG4gICAgd2lkdGg6IFwiMmVtXCIsXHJcbiAgICBoZWlnaHQ6IFwiMmVtXCIsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIH0sXHJcbiAgbG9nb2ltZzoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMmVtXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgc2l0ZUluZm8gfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NpdGVJbmZvLmxvZ29wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVGh1bWJuYWlsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXMubG9nb2ltZ31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2U9XCIvY291cnNlbGl0X2JhY2tkcm9wX3NxdWFyZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntzaXRlSW5mby50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPFNlc3Npb25CdXR0b24gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIHNpdGVpbmZvOiBzaXRlSW5mb1Byb3BzLFxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHNpdGVpbmZvOiBzdGF0ZS5zaXRlaW5mbyxcclxufSk7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IChIZWFkZXIpO1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQsIExpc3RJdGVtSWNvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBPcGVuSW5OZXcgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbGluayB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgZXh0ZXJuYWxMaW5rOiB7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBNZW51SXRlbSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGluayB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gbGluay5kZXN0aW5hdGlvbi5pbmRleE9mKFwiaHR0cFwiKSAhPT0gLTEgfHwgbGluay5uZXdUYWIgPyAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPXtsaW5rLmRlc3RpbmF0aW9ufVxyXG4gICAgICBrZXk9e2xpbmsudGV4dH1cclxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5leHRlcm5hbExpbmt9XHJcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlRHJhd2VyID8gcHJvcHMuY2xvc2VEcmF3ZXIgOiAoKSA9PiB7IH19XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtsaW5rLnRleHR9PjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgIHtsaW5rLm5ld1RhYiAmJiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8T3BlbkluTmV3IC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9hPlxyXG4gICkgOiAoXHJcbiAgICA8TGluayBocmVmPXtsaW5rLmRlc3RpbmF0aW9ufSBrZXk9e2xpbmsudGV4dH0+XHJcbiAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgIGJ1dHRvblxyXG4gICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlRHJhd2VyID8gcHJvcHMuY2xvc2VEcmF3ZXIgOiAoKSA9PiB7IH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2xpbmsudGV4dH0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vTWVudUl0ZW0ucHJvcFR5cGVzID0ge1xyXG4vLyAgbGluazogbGluayxcclxuLy8gIGNsb3NlRHJhd2VyOiBQcm9wVHlwZXMuZnVuYyxcclxuLy99O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEdyaWQsIExpbmVhclByb2dyZXNzLCBUb29sYmFyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vL2ltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEFwcFRvYXN0IGZyb20gXCIuLi8uLi8uLi9BcHBUb2FzdC5qc1wiO1xyXG4vLy8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vL2ltcG9ydCB7IHNpdGVJbmZvUHJvcHMsIGxpbmssIHByb2ZpbGVQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlcy5qc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXIuanNcIjtcclxuaW1wb3J0IHtcclxuICBNQUlOX01FTlVfSVRFTV9EQVNIQk9BUkQsXHJcbiAgTUFJTl9NRU5VX0lURU1fUFJPRklMRSxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL3N0cmluZ3MuanNcIjtcclxuaW1wb3J0IHsgTkFWSUdBVElPTl9DQVRFR09SWV9NQUlOIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbmZpZy9jb25zdGFudHMuanNcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL01lbnVJdGVtLmpzXCI7XHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnRleHQvTXlDb250ZXh0LmpzXCI7XHJcblxyXG4vL2ltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGUuanNcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBkcmF3ZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gIGRyYXdlclBhcGVyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGFjdGl2ZUl0ZW06IHtcclxuICAgIGJhY2tncm91bmQ6IFwiI2Q2ZDZkNlwiLFxyXG4gIH0sXHJcbiAgdmlzaXRTaXRlTGluazoge1xyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgc2hvd1Byb2dyZXNzQmFyOiAocHJvcHMpID0+ICh7XHJcbiAgICB2aXNpYmlsaXR5OiBwcm9wcy5uZXR3b3JrQWN0aW9uID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLFxyXG4gIH0pLFxyXG4gIG1lbnVUaXRsZToge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTY2FmZm9sZCA9ICh7IGNoaWxkcmVuLCBwcm9wcyB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTsvLz0gdXNlU3R5bGVzKHByb3BzKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgeyBzaXRlSW5mbywgcHJvZmlsZSwgbmF2aWdhdGlvbiB9ID0gdXNlQ29udGV4dChNeUNvbnRleHQpXHJcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVEcmF3ZXJUb2dnbGUoKSB7XHJcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1ha2VEcmF3ZXIgPSAoZm9yTW9iaWxlID0gZmFsc2UpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVUaXRsZX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57c2l0ZUluZm8udGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7cHJvZmlsZS5mZXRjaGVkICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcm9wcy5wcm9maWxlLmlkICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxpbms9e3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBNQUlOX01FTlVfSVRFTV9QUk9GSUxFLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBgL3Byb2ZpbGUvJHtwcm9wcy5wcm9maWxlLnVzZXJJZCAmJiBwcm9wcy5wcm9maWxlLnVzZXJJZCAhPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgID8gcHJvcHMucHJvZmlsZS51c2VySWRcclxuICAgICAgICAgICAgICAgICAgICAgIDogcHJvcHMucHJvZmlsZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IE5BVklHQVRJT05fQ0FURUdPUllfTUFJTixcclxuICAgICAgICAgICAgICAgICAgICBuZXdUYWI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsocHJvcHMucHJvZmlsZS5pc0FkbWluIHx8IHByb3BzLnByb2ZpbGUuaXNDcmVhdG9yKSAmJiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICBsaW5rPXt7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6IE1BSU5fTUVOVV9JVEVNX0RBU0hCT0FSRCxcclxuICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL2Rhc2hib2FyZC9jb3Vyc2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4sXHJcbiAgICAgICAgICAgICAgICAgIG5ld1RhYjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtuYXZpZ2F0aW9uICYmXHJcbiAgICAgICAgICBuYXZpZ2F0aW9uLm1hcCgobGluaykgPT5cclxuICAgICAgICAgICAgZm9yTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgbGluaz17bGlua31cclxuICAgICAgICAgICAgICAgIGtleT17bGluay5kZXN0aW5hdGlvbn1cclxuICAgICAgICAgICAgICAgIGNsb3NlRHJhd2VyPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gbGluaz17bGlua30ga2V5PXtsaW5rLmRlc3RpbmF0aW9ufSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfSBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgIHsvKiBUaGUgaW1wbGVtZW50YXRpb24gY2FuIGJlIHN3YXBwZWQgd2l0aCBqcyB0byBhdm9pZCBTRU8gZHVwbGljYXRpb24gb2YgbGlua3MuICovfVxyXG4gICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcclxuICAgICAgICAgICAgYW5jaG9yPXt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn1cclxuICAgICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cclxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSwgLy8gQmV0dGVyIG9wZW4gcGVyZm9ybWFuY2Ugb24gbW9iaWxlLlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWFrZURyYXdlcih0cnVlKX1cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21ha2VEcmF3ZXIoKX1cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICA8L25hdiA+XHJcbiAgICAgIDxhPnNjYWZvb2xmPC9hPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0gLz5cclxuICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3dQcm9ncmVzc0Jhcn0gLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEFwcFRvYXN0IC8+XHJcbiAgICA8L2RpdiA+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vU2NhZmZvbGQucHJvcFR5cGVzID0ge1xyXG4vLyAgY2hpbGRyZW46IFByb3BUeXBlcy5vYmplY3QsXHJcbi8vc2l0ZWluZm86IHNpdGVJbmZvUHJvcHMsXHJcbi8vbmF2aWdhdGlvbjogUHJvcFR5cGVzLmFycmF5T2YobGluayksXHJcbi8vbmV0d29ya0FjdGlvbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuLy9wcm9maWxlOiBwcm9maWxlUHJvcHMsXHJcbi8vfTtcclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4vLyAgc2l0ZWluZm86IHN0YXRlLnNpdGVpbmZvLFxyXG4vLyAgbmF2aWdhdGlvbjogc3RhdGUubmF2aWdhdGlvbi5maWx0ZXIoKGxpbmspID0+IGxpbmsuY2F0ZWdvcnkgPT09IFwibWFpblwiKSxcclxuLy8gIG5ldHdvcmtBY3Rpb246IHN0YXRlLm5ldHdvcmtBY3Rpb24sXHJcbi8vICBwcm9maWxlOiBzdGF0ZS5wcm9maWxlLFxyXG4vL30pO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCAoU2NhZmZvbGQpO1xyXG5leHBvcnQgZGVmYXVsdCBTY2FmZm9sZFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgV2lkZ2V0QnlOYW1lIGZyb20gXCIuL1dpZGdldEJ5TmFtZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHdpZGdldHMgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy93aWRnZXRzXCI7XHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvTXlDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBsYXlvdXQgfSA9IHVzZUNvbnRleHQoTXlDb250ZXh0KVxyXG4gIGNvbnN0IHNlY3Rpb25MYXlvdXQgPSBsYXlvdXRbbmFtZV07XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uTGF5b3V0ICYmIHNlY3Rpb25MYXlvdXQubGVuZ3RoID8gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgIHtzZWN0aW9uTGF5b3V0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgd2lkZ2V0c1tpdGVtXS5tZXRhZGF0YS5leGNsdWRlRnJvbVBhdGhzICYmXHJcbiAgICAgICAgICB3aWRnZXRzW2l0ZW1dLm1ldGFkYXRhLmV4Y2x1ZGVGcm9tUGF0aHMuaW5jbHVkZXMocm91dGVyLnBhdGhuYW1lKSA/IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+PC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxXaWRnZXRCeU5hbWUgbmFtZT17aXRlbX0gc2VjdGlvbj17bmFtZX0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKSA6IChcclxuICAgIDw+PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vU2VjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbi8vICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbi8vICBsYXlvdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtsYXlvdXQ6IHN0YXRlLmxheW91dCx9KVxyXG4vL2V4cG9ydCBkZWZhdWx0IChTZWN0aW9uKTtcclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgbWFpbkNvbnRlbnQ6IHtcclxuICAgIG1heFdpZHRoOiAxMjQwLFxyXG4gICAgbWluSGVpZ2h0OiBcIjgwdmhcIixcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9ICh7IGNoaWxkcmVuLCBwcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpLy8gdXNlU3R5bGVzKHByb3BzKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIHsvKiogVG9wICovfVxyXG4gICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiICYmIDxTZWN0aW9uIG5hbWU9XCJ0b3BcIiAvPn1cclxuXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwicm93XCIgeHM+XHJcbiAgICAgICAgICB7LyoqIE1haW4gKi99XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJjb2x1bW5cIiB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtPlxyXG4gICAgICAgICAgICAgIDxTZWN0aW9uIG5hbWU9XCJib3R0b21cIiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgey8qKiBBc2lkZSAqL31cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj1cImNvbHVtblwiIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbiBuYW1lPVwiYXNpZGVcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgey8qKiBGb290ZXIgKi99XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPERpdmlkZXIgbGlnaHQgLz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249XCJjb2x1bW5cIiB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgPFNlY3Rpb24gbmFtZT1cImZvb3RlckxlZnRcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPVwiY29sdW1uXCIgeHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uIG5hbWU9XCJmb290ZXJSaWdodFwiIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL1RlbXBsYXRlLnByb3BUeXBlcyA9IHtcclxuLy8gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbi8vfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHdpZGdldHMgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy93aWRnZXRzXCI7XHJcbmltcG9ydCBGZXRjaEJ1aWxkZXIgZnJvbSBcIi4uLy4uLy4uL2xpYi9mZXRjaFwiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25zdGFudHNcIjtcclxuaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZHJlc3NQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5cclxuY29uc3QgV2lkZ2V0QnlOYW1lID0gKHsgbmFtZSwgc2VjdGlvbiwgYWRkcmVzcyB9KSA9PiB7XHJcbiAgY29uc3QgV2lkZ2V0ID0gd2lkZ2V0c1tuYW1lXS53aWRnZXQ7XHJcbiAgY29uc3QgZmV0Y2ggPSBuZXcgRmV0Y2hCdWlsZGVyKClcclxuICAgIC5zZXRVcmwoYCR7YWRkcmVzcy5iYWNrZW5kfS9ncmFwaGApXHJcbiAgICAuc2V0SXNHcmFwaFFMRW5kcG9pbnQodHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8V2lkZ2V0XHJcbiAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICBmZXRjaEJ1aWxkZXI9e2ZldGNofVxyXG4gICAgICAgIHNlY3Rpb249e3NlY3Rpb259XHJcbiAgICAgICAgY29uZmlnPXtPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIHtcclxuICAgICAgICAgIEJBQ0tFTkQ6IGFkZHJlc3MuYmFja2VuZCxcclxuICAgICAgICB9KX1cclxuICAgICAgICB1dGlsaXRpZXM9e3V0aWxpdGllc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5XaWRnZXRCeU5hbWUucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWRkcmVzczogYWRkcmVzc1Byb3BzLFxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsXHJcbn0pO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCAoV2lkZ2V0QnlOYW1lKTtcclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0QnlOYW1lXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLy8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGZvcm11bGF0ZU1lZGlhVXJsIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlscy5qc1wiO1xyXG4vL2ltcG9ydCB7IGFkZHJlc3NQcm9wcywgc2l0ZUluZm9Qcm9wcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy5qc1wiO1xyXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGUuanNcIjtcclxuaW1wb3J0IFNjYWZmb2xkIGZyb20gXCIuL1NjYWZmb2xkXCI7XHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvTXlDb250ZXh0LmpzXCI7XHJcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi4vLi4vLi4vY29uZmlnL2RlZmF1bHRTdGF0ZSdcclxuXHJcbi8vdHlwZSBQcm9wcyA9IHtcclxuLy8gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xyXG4vLyAgdGl0bGU/OiBzdHJpbmc7XHJcbi8vICBmb2xsb3dMaW5rcz86IGJvb2xlYW47XHJcbi8vICBkZXNjcmlwdD86IHN0cmluZztcclxuLy99O1xyXG5cclxuY29uc3QgTWFzdGVyTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBwcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBzaXRlSW5mbyB9ID0gdXNlQ29udGV4dChNeUNvbnRleHQpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIHt0aXRsZX0gfCB7c2l0ZUluZm8/LnRpdGxlfVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAge3NpdGVJbmZvPy5sb2dvcGF0aCAmJiAoXHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICAgICAgaHJlZj17Zm9ybXVsYXRlTWVkaWFVcmwoXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFN0YXRlLmFkZHJlc3MuYmFja2VuZCxcclxuICAgICAgICAgICAgICBzaXRlSW5mbz8ubG9nb3BhdGgsXHJcbiAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICBzaXRlSW5mbz8ubG9nb3BhdGhcclxuICAgICAgICAgICAgICA/IGZvcm11bGF0ZU1lZGlhVXJsKFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFN0YXRlLmFkZHJlc3MuYmFja2VuZCxcclxuICAgICAgICAgICAgICAgIHNpdGVJbmZvPy5sb2dvcGF0aCxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiBcIi9jb3Vyc2VsaXRfYmFja2Ryb3Bfc3F1YXJlLndlYnBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aCwgc2hyaW5rLXRvLWZpdD1ub1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U2NhZmZvbGQgID5cclxuICAgICAgICA8VGVtcGxhdGU+e2NoaWxkcmVufTwvVGVtcGxhdGU+XHJcbiAgICAgIDwvU2NhZmZvbGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy9NYXN0ZXJMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4vLyAgY2hpbGRyZW46IFByb3BUeXBlcy5vYmplY3QsXHJcbi8vICBuZXR3b3JrQWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcclxuLy8gIHNpdGVJbmZvOiBzaXRlSW5mb1Byb3BzPy5pc1JlcXVpcmVkLFxyXG4vLyAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuLy8gIGxheW91dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4vLyAgYWRkcmVzczogYWRkcmVzc1Byb3BzLFxyXG4vL307XHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4vLyAgbmV0d29ya0FjdGlvbjogc3RhdGUubmV0d29ya0FjdGlvbixcclxuLy8gIHNpdGVJbmZvOiBzdGF0ZS5zaXRlaW5mbyxcclxuLy8gIGxheW91dDogc3RhdGUubGF5b3V0LFxyXG4vLyAgYWRkcmVzczogc3RhdGUuYWRkcmVzcyxcclxuLy99KTtcclxuLy9leHBvcnQgZGVmYXVsdCAoTWFzdGVyTGF5b3V0KTtcclxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyTGF5b3V0XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBwcm92aWRlcyBhIGNsaWNrYWJsZSBidXR0b24gd2hpY2ggc2hvd3MgaWYgdGhlIHVzZXJcclxuICogaXMgbG9nZ2VkIGluIG9yIGlzIGEgZ3Vlc3QuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLy8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIEdFTkVSSUNfU0lHTk9VVF9URVhULFxyXG4gIEdFTkVSSUNfU0lHTklOX1RFWFQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbmZpZy9zdHJpbmdzLmpzXCI7XHJcbi8vaW1wb3J0IHsgYXV0aFByb3BzLCBwcm9maWxlUHJvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgTXlDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L015Q29udGV4dC5qc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbkJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGF1dGhQcm9wIH0gPSB1c2VDb250ZXh0KE15Q29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthdXRoUHJvcC5ndWVzdCA/IChcclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PntHRU5FUklDX1NJR05JTl9URVhUfTwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ291dFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT57R0VORVJJQ19TSUdOT1VUX1RFWFR9PC9CdXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy9TZXNzaW9uQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuLy8gIGF1dGg6IGF1dGhQcm9wcyxcclxuLy8gIHByb2ZpbGU6IHByb2ZpbGVQcm9wcyxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgYXV0aDogc3RhdGUuYXV0aCwgcHJvZmlsZTogc3RhdGUucHJvZmlsZSwgfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgKFNlc3Npb25CdXR0b24pO1xyXG5leHBvcnQgZGVmYXVsdCBTZXNzaW9uQnV0dG9uXHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgYXBwbGljYXRpb24gd2lkZSBjb25zdGFudHMuXHJcbiAqL1xyXG4vLyBpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG4vLyBjb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcsIHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuLy8gY29uc3QgTE9DQUxfQkFDS0VORCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XHJcbi8vIGNvbnN0IExPQ0FMX0ZST05URU5EID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuLy8gY29uc3QgQVBJX1BSRUZJWCA9IHB1YmxpY1J1bnRpbWVDb25maWcuYXBpUHJlZml4IHx8IFwiL2FwaVwiO1xyXG5cclxuLy8gY29uc3QgcmVzb2x2ZVByb2R1Y3Rpb25CYWNrZW5kID0gKCkgPT4gcHJvY2Vzcy5lbnYuQkFDS0VORFxyXG4vLyAgID8gYGh0dHA6Ly9iYWNrZW5kOjgwMDAke0FQSV9QUkVGSVh9YCAvLyBTZXJ2ZXItc2lkZSBBUEkgcGF0aCAoU1NSKVxyXG4vLyAgIDogIEFQSV9QUkVGSVggLy8gQ2xpZW50LXNpZGUgQVBJIHBhdGhcclxuLy8gZXhwb3J0IGNvbnN0IEJBQ0tFTkQgPVxyXG4vLyAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4vLyAgICAgPyBzZXJ2ZXJSdW50aW1lQ29uZmlnLnNzclVybFxyXG4vLyAgICAgICA/IHNlcnZlclJ1bnRpbWVDb25maWcuc3NyVXJsICsgQVBJX1BSRUZJWFxyXG4vLyAgICAgICA6IEFQSV9QUkVGSVhcclxuLy8gICAgIDogTE9DQUxfQkFDS0VORDtcclxuLy8gZXhwb3J0IGNvbnN0IEZST05URU5EID0gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsIHx8IExPQ0FMX0ZST05URU5EO1xyXG4vLyBleHBvcnQgY29uc3QgTUVESUFfQkFDS0VORCA9IHB1YmxpY1J1bnRpbWVDb25maWcubWFpblVybFxyXG4vLyAgID8gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsICsgQVBJX1BSRUZJWFxyXG4vLyAgIDogTE9DQUxfQkFDS0VORDtcclxuXHJcbi8vIENvbnN0YW50cyBmb3IgYXV0aCByZWxhdGVkIGZ1bmN0aW9uYWxpdGllc1xyXG5leHBvcnQgY29uc3QgSldUX0NPT0tJRV9OQU1FID0gXCJhY2Nlc3NfdG9rZW5cIjtcclxuZXhwb3J0IGNvbnN0IFVTRVJJRF9DT09LSUVfTkFNRSA9IFwiZW1haWxcIjtcclxuXHJcbi8vIENvbnN0YW50cyB0aGF0IHJlcHJlc2VudCB0eXBlcyBmcm9tIHRoZSBzZXJ2ZXJcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX1RFWFQgPSBcInRleHRcIjtcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX0FVRElPID0gXCJhdWRpb1wiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfVklERU8gPSBcInZpZGVvXCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fVFlQRV9QREYgPSBcInBkZlwiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfUVVJWiA9IFwicXVpelwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVSTF9FWFRFTlRJT05fUE9TVFMgPSBcInBvc3RcIjtcclxuZXhwb3J0IGNvbnN0IFVSTF9FWFRFTlRJT05fQ09VUlNFUyA9IFwiY291cnNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRlJFRV9DT1VSU0VTX1RFWFQgPSBcIkZSRUVcIjtcclxuXHJcbi8vIENvbnN0YW50IGZvciByZXByZXNlbnRpbmcgRHJhZnRqcycgZW50aXRpZXNcclxuZXhwb3J0IGNvbnN0IERSQUZUSlNfRU5USVRZX1RZUEVfSU1BR0UgPSBcImltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBEUkFGVEpTX0VOVElUWV9UWVBFX1ZJREVPID0gXCJ2aWRlb1wiO1xyXG5leHBvcnQgY29uc3QgRFJBRlRKU19FTlRJVFlfVFlQRV9BVURJTyA9IFwiYXVkaW9cIjtcclxuXHJcbi8vIFBheW1lbnQgbWV0aG9kc1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NRVRIT0RfU1RSSVBFID0gXCJzdHJpcGVcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1BBWVBBTCA9IFwicGF5cGFsXCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9QQVlUTSA9IFwicGF5dG1cIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX05PTkUgPSBcIlwiO1xyXG5cclxuLy8gdHJhbnNhY3Rpb24gc3RhdHVzZXMgZnJvbSBiYWNrZW5kXHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9JTklUSUFURUQgPSBcImluaXRpYXRlZFwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1VDQ0VTUyA9IFwic3VjY2Vzc1wiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fRkFJTEVEID0gXCJmYWlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05TRUNVVElWRV9QQVlNRU5UX1ZFUklGSUNBVElPTl9SRVFVRVNUX0dBUCA9IDIwMDA7XHJcblxyXG4vLyBtaW1lIHR5cGVzXHJcbmV4cG9ydCBjb25zdCBNSU1FVFlQRV9WSURFTyA9IFtcInZpZGVvL21wNFwiXTtcclxuZXhwb3J0IGNvbnN0IE1JTUVUWVBFX0FVRElPID0gW1wiYXVkaW8vbXAzXCJdO1xyXG5leHBvcnQgY29uc3QgTUlNRVRZUEVfSU1BR0UgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRVNfUkVQTyA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGVsaXRkZXYvY291cnNlbGl0LXRoZW1lc1wiO1xyXG5cclxuLy8gTmF2aWdhdGlvbiBjYXRlZ29yaWVzXHJcbmV4cG9ydCBjb25zdCBOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4gPSBcIm1haW5cIjtcclxuZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fQ0FURUdPUllfRk9PVEVSID0gXCJmb290ZXJcIjtcclxuIiwiaW1wb3J0IHsgd2lkZ2V0cyB9IGZyb20gXCIuLi9jb3Vyc2VsaXQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpZGdldHM7XHJcbiIsImltcG9ydCBidXR0b25kb3duIGZyb20gXCJAY291cnNlbGl0L3dpZGdldC1idXR0b25kb3duXCI7XHJcbmltcG9ydCBDb21tb25XaWRnZXRzIGZyb20gXCJAY291cnNlbGl0L2NvbW1vbi13aWRnZXRzXCI7XHJcblxyXG5jb25zdCBnZXRBbGxXaWRnZXRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdpZGdldHMgPSB7fTtcclxuXHJcbiAgLy8gQWRkIGNvbW1vbiB3aWRnZXRzIHRvIENvdXJzZUxpdFxyXG4gIGZvciAoY29uc3Qgd2lkZ2V0IG9mIENvbW1vbldpZGdldHMpIHtcclxuICAgIHdpZGdldHNbd2lkZ2V0Lm1ldGFkYXRhLm5hbWVdID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkaXRpb25hbCB3aWRnZXRzIGFyZSBhZGRlZCBoZXJlXHJcbiAgd2lkZ2V0c1tidXR0b25kb3duLm1ldGFkYXRhLm5hbWVdID0gYnV0dG9uZG93bjtcclxuXHJcbiAgcmV0dXJuIHdpZGdldHM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2lkZ2V0cyA9IGdldEFsbFdpZGdldHMoKTtcclxuIiwiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHtcclxuICBVUkxfRVhURU5USU9OX1BPU1RTLFxyXG4gIFVSTF9FWFRFTlRJT05fQ09VUlNFUyxcclxufSBmcm9tIFwiLi4vY29uZmlnL2NvbnN0YW50cy5qc1wiO1xyXG5pbXBvcnQgeyBSaWNoVGV4dCBhcyBUZXh0RWRpdG9yIH0gZnJvbSBcIkBjb3Vyc2VsaXQvY29tcG9uZW50cy1saWJyYXJ5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcXVlcnlHcmFwaFFMID0gYXN5bmMgKHVybCwgcXVlcnksIHRva2VuKSA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB0b2tlblxyXG4gICAgICA/IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfVxyXG4gICAgICA6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSksXHJcbiAgfTtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xyXG4gIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBpZiAocmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3JzWzBdLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeUdyYXBoUUxXaXRoVUlFZmZlY3RzID0gKFxyXG4gIGJhY2tlbmQsXHJcbiAgZGlzcGF0Y2gsXHJcbiAgbmV0d29ya0FjdGlvbixcclxuICB0b2tlblxyXG4pID0+IGFzeW5jIChxdWVyeSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkaXNwYXRjaChuZXR3b3JrQWN0aW9uKGZhbHNlKSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5R3JhcGhRTChgJHtiYWNrZW5kfS9ncmFwaGAsIHF1ZXJ5LCB0b2tlbik7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBkaXNwYXRjaChuZXR3b3JrQWN0aW9uKGZhbHNlKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlZExvY2FsZURhdGUgPSAoZXBvY2hTdHJpbmcpID0+XHJcbiAgbmV3IERhdGUoTnVtYmVyKGVwb2NoU3RyaW5nKSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgfSk7XHJcblxyXG4vLyBSZWdleCBjb3BpZWQgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4Njc1MTYwLzk0MjU4OVxyXG5leHBvcnQgY29uc3QgbWFrZUdyYXBoUUxRdWVyeVN0cmluZ0Zyb21KU09iamVjdCA9IChvYmopID0+XHJcbiAgSlNPTi5zdHJpbmdpZnkob2JqKS5yZXBsYWNlKC9cIihbXihcIilcIl0rKVwiOi9nLCBcIiQxOlwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtdWxhdGVNZWRpYVVybCA9IChcclxuICBiYWNrZW5kLFxyXG4gIG1lZGlhSUQsXHJcbiAgZ2VuZXJhdGVUaHVtYm5haWxVcmwgPSBmYWxzZVxyXG4pID0+XHJcbiAgbWVkaWFJRFxyXG4gICAgPyBgJHtiYWNrZW5kfS9tZWRpYS8ke21lZGlhSUR9JHtnZW5lcmF0ZVRodW1ibmFpbFVybCA/IFwiP3RodW1iPTFcIiA6IFwiXCJ9YFxyXG4gICAgOiBcIlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm11bGF0ZUNvdXJzZVVybCA9IChjb3Vyc2UsIGJhY2tlbmQgPSBcIlwiKSA9PlxyXG4gIGAke2JhY2tlbmR9LyR7Y291cnNlLmlzQmxvZyA/IFVSTF9FWFRFTlRJT05fUE9TVFMgOiBVUkxfRVhURU5USU9OX0NPVVJTRVN9LyR7Y291cnNlLmNvdXJzZUlkXHJcbiAgfS8ke2NvdXJzZS5zbHVnfWA7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdERlc2NyaXB0aW9uU25pcHBldCA9IChyYXdEcmFmdEpTQ29udGVudFN0YXRlKSA9PiB7XHJcbiAgY29uc3QgZmlyc3RTZW50ZW5jZSA9IFRleHRFZGl0b3IuaHlkcmF0ZSh7IGRhdGE6IHJhd0RyYWZ0SlNDb250ZW50U3RhdGUgfSlcclxuICAgIC5nZXRDdXJyZW50Q29udGVudCgpXHJcbiAgICAuZ2V0UGxhaW5UZXh0KClcclxuICAgIC5zcGxpdChcIi5cIilbMF07XHJcblxyXG4gIHJldHVybiBmaXJzdFNlbnRlbmNlID8gZmlyc3RTZW50ZW5jZSArIFwiLlwiIDogZmlyc3RTZW50ZW5jZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHcmFwaFFMUXVlcnlGaWVsZHMgPSAoXHJcbiAganNPYmosXHJcbiAgZmllbGRzTm90UHV0QmV0d2VlblF1b3RlcyA9IFtdXHJcbikgPT4ge1xyXG4gIGxldCBxdWVyeVN0cmluZyA9IFwie1wiO1xyXG4gIGZvciAoY29uc3QgaSBvZiBPYmplY3Qua2V5cyhqc09iaikpIHtcclxuICAgIGlmIChqc09ialtpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHF1ZXJ5U3RyaW5nICs9IGZpZWxkc05vdFB1dEJldHdlZW5RdW90ZXMuaW5jbHVkZXMoaSlcclxuICAgICAgICA/IGAke2l9OiAke2pzT2JqW2ldfSxgXHJcbiAgICAgICAgOiBgJHtpfTogXCIke2pzT2JqW2ldfVwiLGA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHF1ZXJ5U3RyaW5nICs9IFwifVwiO1xyXG5cclxuICByZXR1cm4gcXVlcnlTdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0Q29udGFpbmluZ09ubHlDaGFuZ2VkRmllbGRzID0gKGJhc2VsaW5lLCBvYmopID0+IHtcclxuICBjb25zdCByZXN1bHQgPSB7fTtcclxuICBmb3IgKGNvbnN0IGkgb2YgT2JqZWN0LmtleXMoYmFzZWxpbmUpKSB7XHJcbiAgICBpZiAoYmFzZWxpbmVbaV0gIT09IG9ialtpXSkge1xyXG4gICAgICByZXN1bHRbaV0gPSBvYmpbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXJlT2JqZWN0c0RpZmZlcmVudCA9IChiYXNlbGluZSwgb2JqKSA9PiB7XHJcbiAgY29uc3Qgb25seUNoYW5nZWRGaWVsZHMgPSBnZXRPYmplY3RDb250YWluaW5nT25seUNoYW5nZWRGaWVsZHMoYmFzZWxpbmUsIG9iaik7XHJcbiAgcmV0dXJuICEhT2JqZWN0LmtleXMob25seUNoYW5nZWRGaWVsZHMpLmxlbmd0aDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBZGRyZXNzID0gKGhvc3QpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZG9tYWluOiBleHRyYWN0RG9tYWluRnJvbVVSTChob3N0KSxcclxuICAgIGJhY2tlbmQ6IGdldEJhY2tlbmRBZGRyZXNzKGhvc3QpLFxyXG4gICAgZnJvbnRlbmQ6IGBodHRwOi8vJHtob3N0fWAsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCYWNrZW5kQWRkcmVzcyA9IChob3N0KSA9PiB7XHJcbiAgY29uc3QgZG9tYWluID0gZXh0cmFjdERvbWFpbkZyb21VUkwoaG9zdCk7XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJub3Rfd29yZF9pbl9wcm9kdWN0aW9uXCIpIHtcclxuICAgIHJldHVybiBgJHtwcm9jZXNzLmVudi5JTlNFQ1VSRSA9PT0gXCJ0cnVlXCIgPyBcImh0dHBcIiA6IFwiaHR0cHNcIlxyXG4gICAgICB9Oi8vJHtkb21haW59L2FwaWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgaHR0cDovLyR7ZG9tYWlufTo4MDAwYDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBleHRyYWN0RG9tYWluRnJvbVVSTCA9IChob3N0KSA9PiB7XHJcbiAgcmV0dXJuIGhvc3Quc3BsaXQoXCI6XCIpWzBdO1xyXG59O1xyXG4iLCIvKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgUHJvcFR5cGVzIHVzZWQgYWNyb3NzIHRoZSBhcHAuXHJcbiAqL1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aFByb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBndWVzdDogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICB0b2tlbjogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGlzQ3JlYXRvcjogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgZmV0Y2hlZDogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgcHVyY2hhc2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGF0ZXN0UG9zdHNQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY3JlYXRvck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB1cGRhdGVkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaXRlSW5mb1Byb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGxvZ29wYXRoOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBjdXJyZW5jeVVuaXQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGN1cnJlbmN5SVNPQ29kZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHB1YmxpY0NvdXJzZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY3JlYXRvck5hbWU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHVwZGF0ZWQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBpc0ZlYXR1cmVkOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGNvc3Q6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY3JlYXRvcklkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRvckNvdXJzZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgdXBkYXRlZDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgaXNGZWF0dXJlZDogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBjb3N0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaXRlVXNlciA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdmVyaWZpZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNDcmVhdG9yOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzQWRtaW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBwdXJjaGFzZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZWF0dXJlZENvdXJzZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNvc3Q6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBmZWF0dXJlZEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwTWVzc2FnZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWN0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY2I6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxlc3NvbiA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBkb3dubG9hZGFibGU6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgY29udGVudFVSTDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmsgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbmV3VGFiOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRyZXNzUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGJhY2tlbmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmcm9udGVuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRvbWFpbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==