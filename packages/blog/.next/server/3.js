exports.ids = [3];
exports.modules = {

/***/ "./components/Public/Items/Course.js":
/*!*******************************************!*\
  !*** ./components/Public/Items/Course.js ***!
  \*******************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constants.js */ "./config/constants.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _courselit_components_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @courselit/components-library */ "@courselit/components-library");
/* harmony import */ var _courselit_components_library__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_courselit_components_library__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_strings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/strings.js */ "./config/strings.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\Items\\Course.js";









const Img = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../Img.js */ "./components/Img.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../Img.js */ "./components/Img.js")],
    modules: ["../../Img.js"]
  }
});

const useStyles = featuredImage => Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    marginBottom: theme.spacing(4),
    display: "block"
  },
  featuredImage: {
    height: "auto",
    width: "100%"
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5)
  }
}));

const Course = props => {
  const classes = useStyles(props.featuredImage)();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/${_config_constants_js__WEBPACK_IMPORTED_MODULE_4__["URL_EXTENTION_COURSES"]}/[id]/[slug]`,
      as: `/${_config_constants_js__WEBPACK_IMPORTED_MODULE_4__["URL_EXTENTION_COURSES"]}/${props.courseId}/${props.slug}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: classes.link,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_courselit_components_library__WEBPACK_IMPORTED_MODULE_7__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
            item: true,
            container: true,
            direction: "column",
            component: "article",
            children: [props.featuredImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
                src: props.featuredImage,
                classes: classes.featuredImage
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
              item: true,
              container: true,
              className: classes.title,
              justify: "space-between",
              alignItems: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
                item: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
                  variant: "h5",
                  children: props.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
                item: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_courselit_components_library__WEBPACK_IMPORTED_MODULE_7__["PriceTag"], {
                  cost: props.cost,
                  freeCostCaption: _config_strings_js__WEBPACK_IMPORTED_MODULE_8__["FREE_COST"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

Course.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  updated: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  creatorName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  featuredImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  cost: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  courseId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Course);

/***/ }),

/***/ "./components/Public/Items/Post.js":
/*!*****************************************!*\
  !*** ./components/Public/Items/Post.js ***!
  \*****************************************/
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
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/constants.js */ "./config/constants.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _courselit_components_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @courselit/components-library */ "@courselit/components-library");
/* harmony import */ var _courselit_components_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_courselit_components_library__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\Items\\Post.js";
 //import PropTypes from "prop-types";







const Img = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../Img.js */ "./components/Img.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../Img.js */ "./components/Img.js")],
    modules: ["../../Img.js"]
  }
});

const useStyles = featuredImage => Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  container: {
    overflow: "hidden"
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    marginBottom: theme.spacing(4),
    display: "block"
  },
  featuredImage: {
    height: "auto",
    width: "100%"
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5)
  }
}));

const Post = props => {
  const classes = useStyles(props.featuredImage)();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/${_config_constants_js__WEBPACK_IMPORTED_MODULE_3__["URL_EXTENTION_POSTS"]}/[id]/[slug]`,
      as: `/${_config_constants_js__WEBPACK_IMPORTED_MODULE_3__["URL_EXTENTION_POSTS"]}/${props.courseId}/${props.slug}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: classes.link,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_courselit_components_library__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            item: true,
            container: true,
            direction: "column",
            component: "article",
            className: classes.container,
            children: [props.featuredImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Img, {
                src: props.featuredImage,
                classes: classes.featuredImage
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              item: true,
              className: classes.title,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
                variant: "h5",
                children: props.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
                variant: "body1",
                children: props.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
}; //Post.propTypes = {
//  id: PropTypes.string.isRequired,
//  title: PropTypes.string.isRequired,
//  description: PropTypes.string.isRequired,
//  updated: PropTypes.string.isRequired,
//  creatorName: PropTypes.string.isRequired,
//  slug: PropTypes.string.isRequired,
//  featuredImage: PropTypes.string,
//  courseId: PropTypes.number.isRequired,
//};


/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./components/Public/Items/index.js":
/*!******************************************!*\
  !*** ./components/Public/Items/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/fetch */ "./lib/fetch.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/strings */ "./config/strings.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post */ "./components/Public/Items/Post.js");
/* harmony import */ var _Course__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Course */ "./components/Public/Items/Course.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_defaultState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/defaultState */ "./config/defaultState.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Public\\Items\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import PropTypes from "prop-types";
//import { connect } from "react-redux";
//import { networkAction } from "../../../redux/actions";




 //import { addressProps, publicCourse } from "../../../types";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  loadMoreBtn: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(2)
    }
  }
}));

const List = ({
  showLoadMoreButton = true,
  initialItems,
  generateQuery,
  posts = true
}) => {
  const {
    0: courses,
    1: setCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialItems || []);
  const {
    0: offset,
    1: setOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2);
  const {
    0: shouldShowLoadMoreButton,
    1: setShouldShowLoadMoreButton
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(typeof showLoadMoreButton === "boolean" ? showLoadMoreButton : false);
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getPosts(_config_defaultState__WEBPACK_IMPORTED_MODULE_8__["default"].address.backend);
  }, [offset]);

  const getPosts = async backend => {
    try {
      //verify what is it
      //props.dispatch && props.dispatch(networkAction(true));
      const fetch = new _lib_fetch__WEBPACK_IMPORTED_MODULE_2__["default"]().setUrl(`${backend}/graph`).setPayload(generateQuery(offset)).setIsGraphQLEndpoint(true).build();
      const response = await fetch.exec();

      if (response.courses) {
        if (response.courses.length > 0) {
          setCourses([...courses, ...response.courses]);
        } else {
          setShouldShowLoadMoreButton(false);
        }
      }
    } finally {//props.dispatch && props.dispatch(networkAction(false));
    }
  };

  return courses.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      container: true,
      xs: 12,
      justify: "space-between",
      children: courses.map((x, index) => posts ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Post__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, x), index, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Course__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({}, x), index, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 50
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), shouldShowLoadMoreButton && courses.length > -50 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        variant: "contained",
        disableElevation: true,
        onClick: () => setOffset(offset + 1),
        className: classes.loadMoreBtn,
        children: _config_strings__WEBPACK_IMPORTED_MODULE_4__["BTN_LOAD_MORE"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, undefined)]
  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
}; //List.propTypes = {
//  generateQuery: PropTypes.func.isRequired,
//  initialItems: PropTypes.arrayOf(publicCourse),
//  showLoadMoreButton: PropTypes.bool,
//  dispatch: PropTypes.func.isRequired,
//  posts: PropTypes.bool,
//  address: addressProps,
//};
//const mapStateToProps = (state) => ({address: state.address,})
//const mapDispatchToProps = (dispatch) => ({  dispatch: dispatch,});
//export default connect(mapStateToProps, mapDispatchToProps)(List);


/* harmony default export */ __webpack_exports__["default"] = (List);

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9JdGVtcy9Db3Vyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QdWJsaWMvSXRlbXMvUG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9JdGVtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIkltZyIsImR5bmFtaWMiLCJ1c2VTdHlsZXMiLCJmZWF0dXJlZEltYWdlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwidGl0bGUiLCJtYXJnaW5Ub3AiLCJDb3Vyc2UiLCJwcm9wcyIsImNsYXNzZXMiLCJVUkxfRVhURU5USU9OX0NPVVJTRVMiLCJjb3Vyc2VJZCIsInNsdWciLCJjb3N0IiwiRlJFRV9DT1NUIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVkIiwiY3JlYXRvck5hbWUiLCJudW1iZXIiLCJjb250YWluZXIiLCJvdmVyZmxvdyIsIlBvc3QiLCJVUkxfRVhURU5USU9OX1BPU1RTIiwibG9hZE1vcmVCdG4iLCJicmVha3BvaW50cyIsInVwIiwibWFyZ2luTGVmdCIsIkxpc3QiLCJzaG93TG9hZE1vcmVCdXR0b24iLCJpbml0aWFsSXRlbXMiLCJnZW5lcmF0ZVF1ZXJ5IiwicG9zdHMiLCJjb3Vyc2VzIiwic2V0Q291cnNlcyIsInVzZVN0YXRlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0Iiwic2hvdWxkU2hvd0xvYWRNb3JlQnV0dG9uIiwic2V0U2hvdWxkU2hvd0xvYWRNb3JlQnV0dG9uIiwidXNlRWZmZWN0IiwiZ2V0UG9zdHMiLCJkZWZhdWx0U3RhdGUiLCJhZGRyZXNzIiwiYmFja2VuZCIsImZldGNoIiwiRmV0Y2hCdWlsZGVyIiwic2V0VXJsIiwic2V0UGF5bG9hZCIsInNldElzR3JhcGhRTEVuZHBvaW50IiwiYnVpbGQiLCJyZXNwb25zZSIsImV4ZWMiLCJsZW5ndGgiLCJtYXAiLCJ4IiwiaW5kZXgiLCJCVE5fTE9BRF9NT1JFIiwiSldUX0NPT0tJRV9OQU1FIiwiVVNFUklEX0NPT0tJRV9OQU1FIiwiTEVTU09OX1RZUEVfVEVYVCIsIkxFU1NPTl9UWVBFX0FVRElPIiwiTEVTU09OX1RZUEVfVklERU8iLCJMRVNTT05fVFlQRV9QREYiLCJMRVNTT05fVFlQRV9RVUlaIiwiRlJFRV9DT1VSU0VTX1RFWFQiLCJEUkFGVEpTX0VOVElUWV9UWVBFX0lNQUdFIiwiRFJBRlRKU19FTlRJVFlfVFlQRV9WSURFTyIsIkRSQUZUSlNfRU5USVRZX1RZUEVfQVVESU8iLCJQQVlNRU5UX01FVEhPRF9TVFJJUEUiLCJQQVlNRU5UX01FVEhPRF9QQVlQQUwiLCJQQVlNRU5UX01FVEhPRF9QQVlUTSIsIlBBWU1FTlRfTUVUSE9EX05PTkUiLCJUUkFOU0FDVElPTl9JTklUSUFURUQiLCJUUkFOU0FDVElPTl9TVUNDRVNTIiwiVFJBTlNBQ1RJT05fRkFJTEVEIiwiQ09OU0VDVVRJVkVfUEFZTUVOVF9WRVJJRklDQVRJT05fUkVRVUVTVF9HQVAiLCJNSU1FVFlQRV9WSURFTyIsIk1JTUVUWVBFX0FVRElPIiwiTUlNRVRZUEVfSU1BR0UiLCJUSEVNRVNfUkVQTyIsIk5BVklHQVRJT05fQ0FURUdPUllfTUFJTiIsIk5BVklHQVRJT05fQ0FURUdPUllfRk9PVEVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEdBQUcsR0FBR0MsbURBQU8sQ0FBQyxNQUFNLHdIQUFQO0FBQUE7QUFBQSx3Q0FBYyx5Q0FBZDtBQUFBLGNBQWMsY0FBZDtBQUFBO0FBQUEsRUFBbkI7O0FBRUEs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dkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QixZQUE1QixDQUF2QjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxnREFBcEIsQyxDQUVQOztBQUNPLE1BQU1DLHdCQUF3QixHQUFHLE1BQWpDO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsUUFBbkMsQyIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgVVJMX0VYVEVOVElPTl9DT1VSU0VTIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25zdGFudHMuanNcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgUHJpY2VUYWcsIENhcmQgfSBmcm9tIFwiQGNvdXJzZWxpdC9jb21wb25lbnRzLWxpYnJhcnlcIjtcclxuaW1wb3J0IHsgRlJFRV9DT1NUIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9zdHJpbmdzLmpzXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmNvbnN0IEltZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vSW1nLmpzXCIpKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IChmZWF0dXJlZEltYWdlKSA9PlxyXG4gIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgbGluazoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZWRJbWFnZToge1xyXG4gICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuY29uc3QgQ291cnNlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcy5mZWF0dXJlZEltYWdlKSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgPExpbmtcclxuICAgICAgICBocmVmPXtgLyR7VVJMX0VYVEVOVElPTl9DT1VSU0VTfS9baWRdL1tzbHVnXWB9XHJcbiAgICAgICAgYXM9e2AvJHtVUkxfRVhURU5USU9OX0NPVVJTRVN9LyR7cHJvcHMuY291cnNlSWR9LyR7cHJvcHMuc2x1Z31gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIGNvbXBvbmVudD1cImFydGljbGVcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMuZmVhdHVyZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8SW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5mZWF0dXJlZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXMuZmVhdHVyZWRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPntwcm9wcy50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8UHJpY2VUYWcgY29zdD17cHJvcHMuY29zdH0gZnJlZUNvc3RDYXB0aW9uPXtGUkVFX0NPU1R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvdXJzZS5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdXBkYXRlZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNyZWF0b3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZlYXR1cmVkSW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY29zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGNvdXJzZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgVVJMX0VYVEVOVElPTl9QT1NUUyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiQGNvdXJzZWxpdC9jb21wb25lbnRzLWxpYnJhcnlcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuY29uc3QgSW1nID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9JbWcuanNcIikpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gKGZlYXR1cmVkSW1hZ2UpID0+XHJcbiAgbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB9LFxyXG4gICAgbGluazoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZWRJbWFnZToge1xyXG4gICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHMuZmVhdHVyZWRJbWFnZSkoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgaHJlZj17YC8ke1VSTF9FWFRFTlRJT05fUE9TVFN9L1tpZF0vW3NsdWddYH1cclxuICAgICAgICBhcz17YC8ke1VSTF9FWFRFTlRJT05fUE9TVFN9LyR7cHJvcHMuY291cnNlSWR9LyR7cHJvcHMuc2x1Z31gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiYXJ0aWNsZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5mZWF0dXJlZEltYWdlICYmIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmZlYXR1cmVkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlcy5mZWF0dXJlZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3Byb3BzLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPntwcm9wcy5kZXNjcmlwdGlvbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vUG9zdC5wcm9wVHlwZXMgPSB7XHJcbi8vICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4vLyAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuLy8gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbi8vICB1cGRhdGVkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbi8vICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4vLyAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4vLyAgZmVhdHVyZWRJbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGNvdXJzZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbi8vfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy9pbXBvcnQgeyBuZXR3b3JrQWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IEZldGNoQnVpbGRlciBmcm9tIFwiLi4vLi4vLi4vbGliL2ZldGNoXCI7XHJcbmltcG9ydCB7IEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBCVE5fTE9BRF9NT1JFIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9zdHJpbmdzXCI7XHJcbmltcG9ydCBQb3N0IGZyb20gXCIuL1Bvc3RcIjtcclxuLy9pbXBvcnQgeyBhZGRyZXNzUHJvcHMsIHB1YmxpY0NvdXJzZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgQ291cnNlIGZyb20gXCIuL0NvdXJzZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuLi8uLi8uLi9jb25maWcvZGVmYXVsdFN0YXRlJ1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxvYWRNb3JlQnRuOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTGlzdCA9ICh7IHNob3dMb2FkTW9yZUJ1dHRvbiA9IHRydWUsIGluaXRpYWxJdGVtcyxcclxuICBnZW5lcmF0ZVF1ZXJ5LCBwb3N0cyA9IHRydWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKGluaXRpYWxJdGVtcyB8fCBbXSk7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDIpO1xyXG4gIGNvbnN0IFtzaG91bGRTaG93TG9hZE1vcmVCdXR0b24sIHNldFNob3VsZFNob3dMb2FkTW9yZUJ1dHRvbl0gPSB1c2VTdGF0ZShcclxuICAgIHR5cGVvZiBzaG93TG9hZE1vcmVCdXR0b24gPT09IFwiYm9vbGVhblwiXHJcbiAgICAgID8gc2hvd0xvYWRNb3JlQnV0dG9uXHJcbiAgICAgIDogZmFsc2VcclxuICApO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQb3N0cyhkZWZhdWx0U3RhdGUuYWRkcmVzcy5iYWNrZW5kKTtcclxuICB9LCBbb2Zmc2V0XSk7XHJcblxyXG4gIGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKGJhY2tlbmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vdmVyaWZ5IHdoYXQgaXMgaXRcclxuICAgICAgLy9wcm9wcy5kaXNwYXRjaCAmJiBwcm9wcy5kaXNwYXRjaChuZXR3b3JrQWN0aW9uKHRydWUpKTtcclxuICAgICAgY29uc3QgZmV0Y2ggPSBuZXcgRmV0Y2hCdWlsZGVyKClcclxuICAgICAgICAuc2V0VXJsKGAke2JhY2tlbmR9L2dyYXBoYClcclxuICAgICAgICAuc2V0UGF5bG9hZChnZW5lcmF0ZVF1ZXJ5KG9mZnNldCkpXHJcbiAgICAgICAgLnNldElzR3JhcGhRTEVuZHBvaW50KHRydWUpXHJcbiAgICAgICAgLmJ1aWxkKCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2guZXhlYygpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmNvdXJzZXMpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuY291cnNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzZXRDb3Vyc2VzKFsuLi5jb3Vyc2VzLCAuLi5yZXNwb25zZS5jb3Vyc2VzXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFNob3VsZFNob3dMb2FkTW9yZUJ1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAvL3Byb3BzLmRpc3BhdGNoICYmIHByb3BzLmRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBjb3Vyc2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICA8PlxyXG4gICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAge2NvdXJzZXMubWFwKCh4LCBpbmRleCkgPT5cclxuICAgICAgICAgIHBvc3RzID8gPFBvc3Qga2V5PXtpbmRleH0gIHsuLi54fSAvPiA6IDxDb3Vyc2Uga2V5PXtpbmRleH0gey4uLnh9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7c2hvdWxkU2hvd0xvYWRNb3JlQnV0dG9uICYmIGNvdXJzZXMubGVuZ3RoID4gLTUwICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9mZnNldChvZmZzZXQgKyAxKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRNb3JlQnRufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7QlROX0xPQURfTU9SRX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICkgOiAoXHJcbiAgICA8PjwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL0xpc3QucHJvcFR5cGVzID0ge1xyXG4vLyAgZ2VuZXJhdGVRdWVyeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gIGluaXRpYWxJdGVtczogUHJvcFR5cGVzLmFycmF5T2YocHVibGljQ291cnNlKSxcclxuLy8gIHNob3dMb2FkTW9yZUJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXHJcbi8vICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gIHBvc3RzOiBQcm9wVHlwZXMuYm9vbCxcclxuLy8gIGFkZHJlc3M6IGFkZHJlc3NQcm9wcyxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHthZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLH0pXHJcbi8vY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoeyAgZGlzcGF0Y2g6IGRpc3BhdGNoLH0pO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExpc3QpO1xyXG5leHBvcnQgZGVmYXVsdCBMaXN0XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgYXBwbGljYXRpb24gd2lkZSBjb25zdGFudHMuXHJcbiAqL1xyXG4vLyBpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG4vLyBjb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcsIHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuLy8gY29uc3QgTE9DQUxfQkFDS0VORCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XHJcbi8vIGNvbnN0IExPQ0FMX0ZST05URU5EID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuLy8gY29uc3QgQVBJX1BSRUZJWCA9IHB1YmxpY1J1bnRpbWVDb25maWcuYXBpUHJlZml4IHx8IFwiL2FwaVwiO1xyXG5cclxuLy8gY29uc3QgcmVzb2x2ZVByb2R1Y3Rpb25CYWNrZW5kID0gKCkgPT4gcHJvY2Vzcy5lbnYuQkFDS0VORFxyXG4vLyAgID8gYGh0dHA6Ly9iYWNrZW5kOjgwMDAke0FQSV9QUkVGSVh9YCAvLyBTZXJ2ZXItc2lkZSBBUEkgcGF0aCAoU1NSKVxyXG4vLyAgIDogIEFQSV9QUkVGSVggLy8gQ2xpZW50LXNpZGUgQVBJIHBhdGhcclxuLy8gZXhwb3J0IGNvbnN0IEJBQ0tFTkQgPVxyXG4vLyAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4vLyAgICAgPyBzZXJ2ZXJSdW50aW1lQ29uZmlnLnNzclVybFxyXG4vLyAgICAgICA/IHNlcnZlclJ1bnRpbWVDb25maWcuc3NyVXJsICsgQVBJX1BSRUZJWFxyXG4vLyAgICAgICA6IEFQSV9QUkVGSVhcclxuLy8gICAgIDogTE9DQUxfQkFDS0VORDtcclxuLy8gZXhwb3J0IGNvbnN0IEZST05URU5EID0gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsIHx8IExPQ0FMX0ZST05URU5EO1xyXG4vLyBleHBvcnQgY29uc3QgTUVESUFfQkFDS0VORCA9IHB1YmxpY1J1bnRpbWVDb25maWcubWFpblVybFxyXG4vLyAgID8gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsICsgQVBJX1BSRUZJWFxyXG4vLyAgIDogTE9DQUxfQkFDS0VORDtcclxuXHJcbi8vIENvbnN0YW50cyBmb3IgYXV0aCByZWxhdGVkIGZ1bmN0aW9uYWxpdGllc1xyXG5leHBvcnQgY29uc3QgSldUX0NPT0tJRV9OQU1FID0gXCJhY2Nlc3NfdG9rZW5cIjtcclxuZXhwb3J0IGNvbnN0IFVTRVJJRF9DT09LSUVfTkFNRSA9IFwiZW1haWxcIjtcclxuXHJcbi8vIENvbnN0YW50cyB0aGF0IHJlcHJlc2VudCB0eXBlcyBmcm9tIHRoZSBzZXJ2ZXJcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX1RFWFQgPSBcInRleHRcIjtcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX0FVRElPID0gXCJhdWRpb1wiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfVklERU8gPSBcInZpZGVvXCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fVFlQRV9QREYgPSBcInBkZlwiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfUVVJWiA9IFwicXVpelwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVSTF9FWFRFTlRJT05fUE9TVFMgPSBcInBvc3RcIjtcclxuZXhwb3J0IGNvbnN0IFVSTF9FWFRFTlRJT05fQ09VUlNFUyA9IFwiY291cnNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRlJFRV9DT1VSU0VTX1RFWFQgPSBcIkZSRUVcIjtcclxuXHJcbi8vIENvbnN0YW50IGZvciByZXByZXNlbnRpbmcgRHJhZnRqcycgZW50aXRpZXNcclxuZXhwb3J0IGNvbnN0IERSQUZUSlNfRU5USVRZX1RZUEVfSU1BR0UgPSBcImltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBEUkFGVEpTX0VOVElUWV9UWVBFX1ZJREVPID0gXCJ2aWRlb1wiO1xyXG5leHBvcnQgY29uc3QgRFJBRlRKU19FTlRJVFlfVFlQRV9BVURJTyA9IFwiYXVkaW9cIjtcclxuXHJcbi8vIFBheW1lbnQgbWV0aG9kc1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NRVRIT0RfU1RSSVBFID0gXCJzdHJpcGVcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1BBWVBBTCA9IFwicGF5cGFsXCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9QQVlUTSA9IFwicGF5dG1cIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX05PTkUgPSBcIlwiO1xyXG5cclxuLy8gdHJhbnNhY3Rpb24gc3RhdHVzZXMgZnJvbSBiYWNrZW5kXHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9JTklUSUFURUQgPSBcImluaXRpYXRlZFwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1VDQ0VTUyA9IFwic3VjY2Vzc1wiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fRkFJTEVEID0gXCJmYWlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05TRUNVVElWRV9QQVlNRU5UX1ZFUklGSUNBVElPTl9SRVFVRVNUX0dBUCA9IDIwMDA7XHJcblxyXG4vLyBtaW1lIHR5cGVzXHJcbmV4cG9ydCBjb25zdCBNSU1FVFlQRV9WSURFTyA9IFtcInZpZGVvL21wNFwiXTtcclxuZXhwb3J0IGNvbnN0IE1JTUVUWVBFX0FVRElPID0gW1wiYXVkaW8vbXAzXCJdO1xyXG5leHBvcnQgY29uc3QgTUlNRVRZUEVfSU1BR0UgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRVNfUkVQTyA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGVsaXRkZXYvY291cnNlbGl0LXRoZW1lc1wiO1xyXG5cclxuLy8gTmF2aWdhdGlvbiBjYXRlZ29yaWVzXHJcbmV4cG9ydCBjb25zdCBOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4gPSBcIm1haW5cIjtcclxuZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fQ0FURUdPUllfRk9PVEVSID0gXCJmb290ZXJcIjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==