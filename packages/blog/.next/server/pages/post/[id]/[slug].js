module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/post/[id]/[slug]": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[id]/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

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

/***/ "./lib/fetch.js":
/*!**********************!*\
  !*** ./lib/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * A utility class to make network calls and intercept the response. It is
 * useful for cases like redirection to the login page if the server returned
 * a 401 etc.
 */



const Fetch = function (url, payload, token, isGraphQLEndpoint) {
  this.url = url;
  this.payload = payload;
  this.token = token;
  this.isGraphQLEndpoint = isGraphQLEndpoint;
};

Fetch.prototype.exec = async function () {
  const fetchOptions = {
    method: "POST",
    headers: {}
  };

  if (this.token) {
    fetchOptions.headers.Authorization = `Bearer ${this.token}`;
  }

  if (this.isGraphQLEndpoint) {
    fetchOptions.headers["Content-Type"] = "application/json";
    fetchOptions.body = JSON.stringify({
      query: this.payload
    });
  } else {
    fetchOptions.body = this.payload;
  }

  let response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(this.url, fetchOptions);

  if (response.status === 401) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/logout");
    return {};
  }

  response = await response.json();

  if (response.errors && response.errors.length > 0) {
    throw new Error(response.errors[0].message);
  }

  return this.isGraphQLEndpoint ? response.data : response;
};

const FetchBuilder = function () {
  return {
    setUrl: function (url) {
      this.url = url;
      return this;
    },
    setPayload: function (payload) {
      this.payload = payload;
      return this;
    },
    setAuthToken: function (token) {
      this.token = token;
      return this;
    },
    setIsGraphQLEndpoint: function (isGraphQLEndpoint) {
      this.isGraphQLEndpoint = isGraphQLEndpoint;
      return this;
    },
    build: function () {
      return new Fetch(this.url, this.payload, this.token, this.isGraphQLEndpoint);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (FetchBuilder);

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

/***/ "./pages/post/[id]/[slug].js":
/*!***********************************!*\
  !*** ./pages/post/[id]/[slug].js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_fetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/fetch.js */ "./lib/fetch.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\pages\\post\\[id]\\[slug].js";
//import { connect } from "react-redux";



 //import { addressProps, siteInfoProps } from "../../../types.js";


const BaseLayout = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../../components/Public/BaseLayout */ "./components/Public/BaseLayout/index.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../../components/Public/BaseLayout */ "./components/Public/BaseLayout/index.js")],
    modules: ["../../../components/Public/BaseLayout"]
  }
});
const Article = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../../../components/Public/Article.js */ "./components/Public/Article.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../../components/Public/Article.js */ "./components/Public/Article.js")],
    modules: ["../../../components/Public/Article.js"]
  }
});
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  content: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4)
  }
}));

const Post = props => {
  var _props$post, _props$address, _props$address2;

  const classes = useStyles();
  const articleOptions = {
    showAttribution: true
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BaseLayout, {
    title: (_props$post = props.post) === null || _props$post === void 0 ? void 0 : _props$post.title,
    children: props.post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      className: classes.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:url",
          content: Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_1__["formulateCourseUrl"])(props.post, (props === null || props === void 0 ? void 0 : (_props$address = props.address) === null || _props$address === void 0 ? void 0 : _props$address.frontend) || 'localhost:8000')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:type",
          content: "article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:title",
          content: props.post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:author",
          content: props.post.creatorName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined), props.post.featuredImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:image",
          content: Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_1__["formulateMediaUrl"])((props === null || props === void 0 ? void 0 : (_props$address2 = props.address) === null || _props$address2 === void 0 ? void 0 : _props$address2.frontend) || 'localhost:8000', props.post.featuredImage)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Article, {
        course: props.post,
        options: articleOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

const generateQuery = (pageOffset = 1) => `
  query {
    courses: getPosts(offset: ${pageOffset}) {
      id,
      title,
      description,
      updated,
      creatorName,
      slug,
      featuredImage,
      courseId
    }
  }
`;

const getCourses = async (backend = 'http://localhost:8000') => {
  let courses = [];

  try {
    const fetch = new _lib_fetch_js__WEBPACK_IMPORTED_MODULE_4__["default"]().setUrl(`${backend}/graph`).setPayload(generateQuery()).setIsGraphQLEndpoint(true).build();
    const response = await fetch.exec();
    courses = response.courses;
  } catch (e) {}

  return courses;
};

const getStaticPaths = async () => {
  const post = await getCourses();
  return {
    paths: post === null || post === void 0 ? void 0 : post.map(data => ({
      params: {
        id: data === null || data === void 0 ? void 0 : data.courseId.toString(),
        slug: data === null || data === void 0 ? void 0 : data.slug
      }
    })),
    fallback: true //SE A PAGINA NÃO EXISTIR ENTÃO, GERAR NOVAMENTE

  };
};
async function getStaticProps({
  params
}) {
  const graphQuery = `
    query {
      post: getCourse(courseId: ${params.id}) {
          id,
          title,
          description,
          featuredImage,
          updated,
          creatorName,
          creatorId,
          slug,
          isBlog,
          courseId,
      }
    }
  `;
  const fetch = new _lib_fetch_js__WEBPACK_IMPORTED_MODULE_4__["default"]() //.setUrl(`${getBackendAddress(req?.headers.host)}/graph`)
  .setUrl(`${'http://localhost:8000'}/graph`).setPayload(graphQuery).setIsGraphQLEndpoint(true).build();
  let post = null;

  try {
    const response = await fetch.exec();
    post = response.post;
  } catch (err) {
    post = {
      title: err.message
    };
  }

  return {
    props: {
      post
    }
  };
} //export async function getServerSideProps({ query, req }) {
//  //export async function getStaticProps({ params }) {
//  console.log('queryquery', query)
//  console.log(`${getBackendAddress(req?.headers.host)}/graph`, 'howtst')
//  const graphQuery = `
//      query {
//        post: getCourse(courseId: ${query.id}) {
//            id,
//            title,
//            description,
//            featuredImage,
//            updated,
//            creatorName,
//            creatorId,
//            slug,
//            isBlog,
//            courseId,
//        }
//      }
//    `;
//  const fetch = new FetchBuilder()
//    .setUrl(`${getBackendAddress(req?.headers.host)}/graph`)
//    //.setUrl(`${'localhost:3002'}/graph`)
//    .setPayload(graphQuery)
//    .setIsGraphQLEndpoint(true)
//    .build();
//  let post = null;
//  try {
//    const response = await fetch.exec();
//    post = response.post;
//  } catch (err) {
//    post = {
//      title: err.message,
//    };
//  }
//  return {
//    props: {
//      post,
//    },
//  };
//}
//Post.propTypes = {
//  siteInfo: siteInfoProps,
//  address: addressProps,
//};
//const mapStateToProps = (state) => ({siteInfo: state.siteinfo,address: state.address,});
//export default connect(mapStateToProps)(Post);

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "@courselit/common-widgets":
/*!********************************************!*\
  !*** external "@courselit/common-widgets" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@courselit/common-widgets");

/***/ }),

/***/ "@courselit/components-library":
/*!************************************************!*\
  !*** external "@courselit/components-library" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@courselit/components-library");

/***/ }),

/***/ "@courselit/widget-buttondown":
/*!***********************************************!*\
  !*** external "@courselit/widget-buttondown" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@courselit/widget-buttondown");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2xpYi9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC8vW3NsdWddLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjb3Vyc2VsaXQvY29tbW9uLXdpZGdldHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY291cnNlbGl0L2NvbXBvbmVudHMtbGlicmFyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjb3Vyc2VsaXQvd2lkZ2V0LWJ1dHRvbmRvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkpXVF9DT09LSUVfTkFNRSIsIlVTRVJJRF9DT09LSUVfTkFNRSIsIkxFU1NPTl9UWVBFX1RFWFQiLCJMRVNTT05fVFlQRV9BVURJTyIsIkxFU1NPTl9UWVBFX1ZJREVPIiwiTEVTU09OX1RZUEVfUERGIiwiTEVTU09OX1RZUEVfUVVJWiIsIlVSTF9FWFRFTlRJT05fUE9TVFMiLCJVUkxfRVhURU5USU9OX0NPVVJTRVMiLCJGUkVFX0NPVVJTRVNfVEVYVCIsIkRSQUZUSlNfRU5USVRZX1RZUEVfSU1BR0UiLCJEUkFGVEpTX0VOVElUWV9UWVBFX1ZJREVPIiwiRFJBRlRKU19FTlRJVFlfVFlQRV9BVURJTyIsIlBBWU1FTlRfTUVUSE9EX1NUUklQRSIsIlBBWU1FTlRfTUVUSE9EX1BBWVBBTCIsIlBBWU1FTlRfTUVUSE9EX1BBWVRNIiwiUEFZTUVOVF9NRVRIT0RfTk9ORSIsIlRSQU5TQUNUSU9OX0lOSVRJQVRFRCIsIlRSQU5TQUNUSU9OX1NVQ0NFU1MiLCJUUkFOU0FDVElPTl9GQUlMRUQiLCJDT05TRUNVVElWRV9QQVlNRU5UX1ZFUklGSUNBVElPTl9SRVFVRVNUX0dBUCIsIk1JTUVUWVBFX1ZJREVPIiwiTUlNRVRZUEVfQVVESU8iLCJNSU1FVFlQRV9JTUFHRSIsIlRIRU1FU19SRVBPIiwiTkFWSUdBVElPTl9DQVRFR09SWV9NQUlOIiwiTkFWSUdBVElPTl9DQVRFR09SWV9GT09URVIiLCJGZXRjaCIsInVybCIsInBheWxvYWQiLCJ0b2tlbiIsImlzR3JhcGhRTEVuZHBvaW50IiwicHJvdG90eXBlIiwiZXhlYyIsImZldGNoT3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJSb3V0ZXIiLCJwdXNoIiwianNvbiIsImVycm9ycyIsImxlbmd0aCIsIkVycm9yIiwibWVzc2FnZSIsImRhdGEiLCJGZXRjaEJ1aWxkZXIiLCJzZXRVcmwiLCJzZXRQYXlsb2FkIiwic2V0QXV0aFRva2VuIiwic2V0SXNHcmFwaFFMRW5kcG9pbnQiLCJidWlsZCIsInF1ZXJ5R3JhcGhRTCIsIm9wdGlvbnMiLCJjYXBpdGFsaXplIiwicyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJxdWVyeUdyYXBoUUxXaXRoVUlFZmZlY3RzIiwiYmFja2VuZCIsImRpc3BhdGNoIiwibmV0d29ya0FjdGlvbiIsImZvcm1hdHRlZExvY2FsZURhdGUiLCJlcG9jaFN0cmluZyIsIkRhdGUiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsIm1ha2VHcmFwaFFMUXVlcnlTdHJpbmdGcm9tSlNPYmplY3QiLCJvYmoiLCJyZXBsYWNlIiwiZm9ybXVsYXRlTWVkaWFVcmwiLCJtZWRpYUlEIiwiZ2VuZXJhdGVUaHVtYm5haWxVcmwiLCJmb3JtdWxhdGVDb3Vyc2VVcmwiLCJjb3Vyc2UiLCJpc0Jsb2ciLCJjb3Vyc2VJZCIsInNsdWciLCJnZXRQb3N0RGVzY3JpcHRpb25TbmlwcGV0IiwicmF3RHJhZnRKU0NvbnRlbnRTdGF0ZSIsImZpcnN0U2VudGVuY2UiLCJUZXh0RWRpdG9yIiwiaHlkcmF0ZSIsImdldEN1cnJlbnRDb250ZW50IiwiZ2V0UGxhaW5UZXh0Iiwic3BsaXQiLCJnZXRHcmFwaFFMUXVlcnlGaWVsZHMiLCJqc09iaiIsImZpZWxkc05vdFB1dEJldHdlZW5RdW90ZXMiLCJxdWVyeVN0cmluZyIsImkiLCJPYmplY3QiLCJrZXlzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJnZXRPYmplY3RDb250YWluaW5nT25seUNoYW5nZWRGaWVsZHMiLCJiYXNlbGluZSIsInJlc3VsdCIsImFyZU9iamVjdHNEaWZmZXJlbnQiLCJvbmx5Q2hhbmdlZEZpZWxkcyIsImdldEFkZHJlc3MiLCJob3N0IiwiZG9tYWluIiwiZXh0cmFjdERvbWFpbkZyb21VUkwiLCJnZXRCYWNrZW5kQWRkcmVzcyIsImZyb250ZW5kIiwiQmFzZUxheW91dCIsImR5bmFtaWMiLCJBcnRpY2xlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGVudCIsInBhZGRpbmciLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiUG9zdCIsInByb3BzIiwiY2xhc3NlcyIsImFydGljbGVPcHRpb25zIiwic2hvd0F0dHJpYnV0aW9uIiwicG9zdCIsInRpdGxlIiwiYWRkcmVzcyIsImNyZWF0b3JOYW1lIiwiZmVhdHVyZWRJbWFnZSIsImdlbmVyYXRlUXVlcnkiLCJwYWdlT2Zmc2V0IiwiZ2V0Q291cnNlcyIsImNvdXJzZXMiLCJlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiZ3JhcGhRdWVyeSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSx5Q0FBeUM7UUFDekM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJO1FBQ0o7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3pIQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9wb3N0L1tpZF0vW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvcG9zdC9baWRdL1tzbHVnXVwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vLi4vLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wb3N0L1tpZF0vW3NsdWddLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgYXBwbGljYXRpb24gd2lkZSBjb25zdGFudHMuXHJcbiAqL1xyXG4vLyBpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG4vLyBjb25zdCB7IHNlcnZlclJ1bnRpbWVDb25maWcsIHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuLy8gY29uc3QgTE9DQUxfQkFDS0VORCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XHJcbi8vIGNvbnN0IExPQ0FMX0ZST05URU5EID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuLy8gY29uc3QgQVBJX1BSRUZJWCA9IHB1YmxpY1J1bnRpbWVDb25maWcuYXBpUHJlZml4IHx8IFwiL2FwaVwiO1xyXG5cclxuLy8gY29uc3QgcmVzb2x2ZVByb2R1Y3Rpb25CYWNrZW5kID0gKCkgPT4gcHJvY2Vzcy5lbnYuQkFDS0VORFxyXG4vLyAgID8gYGh0dHA6Ly9iYWNrZW5kOjgwMDAke0FQSV9QUkVGSVh9YCAvLyBTZXJ2ZXItc2lkZSBBUEkgcGF0aCAoU1NSKVxyXG4vLyAgIDogIEFQSV9QUkVGSVggLy8gQ2xpZW50LXNpZGUgQVBJIHBhdGhcclxuLy8gZXhwb3J0IGNvbnN0IEJBQ0tFTkQgPVxyXG4vLyAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4vLyAgICAgPyBzZXJ2ZXJSdW50aW1lQ29uZmlnLnNzclVybFxyXG4vLyAgICAgICA/IHNlcnZlclJ1bnRpbWVDb25maWcuc3NyVXJsICsgQVBJX1BSRUZJWFxyXG4vLyAgICAgICA6IEFQSV9QUkVGSVhcclxuLy8gICAgIDogTE9DQUxfQkFDS0VORDtcclxuLy8gZXhwb3J0IGNvbnN0IEZST05URU5EID0gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsIHx8IExPQ0FMX0ZST05URU5EO1xyXG4vLyBleHBvcnQgY29uc3QgTUVESUFfQkFDS0VORCA9IHB1YmxpY1J1bnRpbWVDb25maWcubWFpblVybFxyXG4vLyAgID8gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsICsgQVBJX1BSRUZJWFxyXG4vLyAgIDogTE9DQUxfQkFDS0VORDtcclxuXHJcbi8vIENvbnN0YW50cyBmb3IgYXV0aCByZWxhdGVkIGZ1bmN0aW9uYWxpdGllc1xyXG5leHBvcnQgY29uc3QgSldUX0NPT0tJRV9OQU1FID0gXCJhY2Nlc3NfdG9rZW5cIjtcclxuZXhwb3J0IGNvbnN0IFVTRVJJRF9DT09LSUVfTkFNRSA9IFwiZW1haWxcIjtcclxuXHJcbi8vIENvbnN0YW50cyB0aGF0IHJlcHJlc2VudCB0eXBlcyBmcm9tIHRoZSBzZXJ2ZXJcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX1RFWFQgPSBcInRleHRcIjtcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX0FVRElPID0gXCJhdWRpb1wiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfVklERU8gPSBcInZpZGVvXCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fVFlQRV9QREYgPSBcInBkZlwiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfUVVJWiA9IFwicXVpelwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVSTF9FWFRFTlRJT05fUE9TVFMgPSBcInBvc3RcIjtcclxuZXhwb3J0IGNvbnN0IFVSTF9FWFRFTlRJT05fQ09VUlNFUyA9IFwiY291cnNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRlJFRV9DT1VSU0VTX1RFWFQgPSBcIkZSRUVcIjtcclxuXHJcbi8vIENvbnN0YW50IGZvciByZXByZXNlbnRpbmcgRHJhZnRqcycgZW50aXRpZXNcclxuZXhwb3J0IGNvbnN0IERSQUZUSlNfRU5USVRZX1RZUEVfSU1BR0UgPSBcImltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBEUkFGVEpTX0VOVElUWV9UWVBFX1ZJREVPID0gXCJ2aWRlb1wiO1xyXG5leHBvcnQgY29uc3QgRFJBRlRKU19FTlRJVFlfVFlQRV9BVURJTyA9IFwiYXVkaW9cIjtcclxuXHJcbi8vIFBheW1lbnQgbWV0aG9kc1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NRVRIT0RfU1RSSVBFID0gXCJzdHJpcGVcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1BBWVBBTCA9IFwicGF5cGFsXCI7XHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9QQVlUTSA9IFwicGF5dG1cIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX05PTkUgPSBcIlwiO1xyXG5cclxuLy8gdHJhbnNhY3Rpb24gc3RhdHVzZXMgZnJvbSBiYWNrZW5kXHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9JTklUSUFURUQgPSBcImluaXRpYXRlZFwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1VDQ0VTUyA9IFwic3VjY2Vzc1wiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fRkFJTEVEID0gXCJmYWlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05TRUNVVElWRV9QQVlNRU5UX1ZFUklGSUNBVElPTl9SRVFVRVNUX0dBUCA9IDIwMDA7XHJcblxyXG4vLyBtaW1lIHR5cGVzXHJcbmV4cG9ydCBjb25zdCBNSU1FVFlQRV9WSURFTyA9IFtcInZpZGVvL21wNFwiXTtcclxuZXhwb3J0IGNvbnN0IE1JTUVUWVBFX0FVRElPID0gW1wiYXVkaW8vbXAzXCJdO1xyXG5leHBvcnQgY29uc3QgTUlNRVRZUEVfSU1BR0UgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRVNfUkVQTyA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGVsaXRkZXYvY291cnNlbGl0LXRoZW1lc1wiO1xyXG5cclxuLy8gTmF2aWdhdGlvbiBjYXRlZ29yaWVzXHJcbmV4cG9ydCBjb25zdCBOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4gPSBcIm1haW5cIjtcclxuZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fQ0FURUdPUllfRk9PVEVSID0gXCJmb290ZXJcIjtcclxuIiwiLyoqXHJcbiAqIEEgdXRpbGl0eSBjbGFzcyB0byBtYWtlIG5ldHdvcmsgY2FsbHMgYW5kIGludGVyY2VwdCB0aGUgcmVzcG9uc2UuIEl0IGlzXHJcbiAqIHVzZWZ1bCBmb3IgY2FzZXMgbGlrZSByZWRpcmVjdGlvbiB0byB0aGUgbG9naW4gcGFnZSBpZiB0aGUgc2VydmVyIHJldHVybmVkXHJcbiAqIGEgNDAxIGV0Yy5cclxuICovXHJcblxyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgRmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBwYXlsb2FkLCB0b2tlbiwgaXNHcmFwaFFMRW5kcG9pbnQpIHtcclxuICB0aGlzLnVybCA9IHVybDtcclxuICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICB0aGlzLmlzR3JhcGhRTEVuZHBvaW50ID0gaXNHcmFwaFFMRW5kcG9pbnQ7XHJcbn07XHJcblxyXG5GZXRjaC5wcm90b3R5cGUuZXhlYyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge30sXHJcbiAgfTtcclxuXHJcbiAgaWYgKHRoaXMudG9rZW4pIHtcclxuICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dGhpcy50b2tlbn1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMuaXNHcmFwaFFMRW5kcG9pbnQpIHtcclxuICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XHJcbiAgICBmZXRjaE9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgcXVlcnk6IHRoaXMucGF5bG9hZCB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmV0Y2hPcHRpb25zLmJvZHkgPSB0aGlzLnBheWxvYWQ7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCwgZmV0Y2hPcHRpb25zKTtcclxuXHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9sb2dvdXRcIik7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgaWYgKHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yc1swXS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzLmlzR3JhcGhRTEVuZHBvaW50ID8gcmVzcG9uc2UuZGF0YSA6IHJlc3BvbnNlO1xyXG59O1xyXG5cclxuY29uc3QgRmV0Y2hCdWlsZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXRVcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldFBheWxvYWQ6IGZ1bmN0aW9uIChwYXlsb2FkKSB7XHJcbiAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldEF1dGhUb2tlbjogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0SXNHcmFwaFFMRW5kcG9pbnQ6IGZ1bmN0aW9uIChpc0dyYXBoUUxFbmRwb2ludCkge1xyXG4gICAgICB0aGlzLmlzR3JhcGhRTEVuZHBvaW50ID0gaXNHcmFwaFFMRW5kcG9pbnQ7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGJ1aWxkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRmV0Y2goXHJcbiAgICAgICAgdGhpcy51cmwsXHJcbiAgICAgICAgdGhpcy5wYXlsb2FkLFxyXG4gICAgICAgIHRoaXMudG9rZW4sXHJcbiAgICAgICAgdGhpcy5pc0dyYXBoUUxFbmRwb2ludFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hCdWlsZGVyO1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQge1xyXG4gIFVSTF9FWFRFTlRJT05fUE9TVFMsXHJcbiAgVVJMX0VYVEVOVElPTl9DT1VSU0VTLFxyXG59IGZyb20gXCIuLi9jb25maWcvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0IGFzIFRleHRFZGl0b3IgfSBmcm9tIFwiQGNvdXJzZWxpdC9jb21wb25lbnRzLWxpYnJhcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeUdyYXBoUUwgPSBhc3luYyAodXJsLCBxdWVyeSwgdG9rZW4pID0+IHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHRva2VuXHJcbiAgICAgID8ge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICAgIDogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcclxuICB9O1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XHJcbiAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvcnNbMF0ubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5R3JhcGhRTFdpdGhVSUVmZmVjdHMgPSAoXHJcbiAgYmFja2VuZCxcclxuICBkaXNwYXRjaCxcclxuICBuZXR3b3JrQWN0aW9uLFxyXG4gIHRva2VuXHJcbikgPT4gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHcmFwaFFMKGAke2JhY2tlbmR9L2dyYXBoYCwgcXVlcnksIHRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0dGVkTG9jYWxlRGF0ZSA9IChlcG9jaFN0cmluZykgPT5cclxuICBuZXcgRGF0ZShOdW1iZXIoZXBvY2hTdHJpbmcpKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9KTtcclxuXHJcbi8vIFJlZ2V4IGNvcGllZCBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDg2NzUxNjAvOTQyNTg5XHJcbmV4cG9ydCBjb25zdCBtYWtlR3JhcGhRTFF1ZXJ5U3RyaW5nRnJvbUpTT2JqZWN0ID0gKG9iaikgPT5cclxuICBKU09OLnN0cmluZ2lmeShvYmopLnJlcGxhY2UoL1wiKFteKFwiKVwiXSspXCI6L2csIFwiJDE6XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm11bGF0ZU1lZGlhVXJsID0gKFxyXG4gIGJhY2tlbmQsXHJcbiAgbWVkaWFJRCxcclxuICBnZW5lcmF0ZVRodW1ibmFpbFVybCA9IGZhbHNlXHJcbikgPT5cclxuICBtZWRpYUlEXHJcbiAgICA/IGAke2JhY2tlbmR9L21lZGlhLyR7bWVkaWFJRH0ke2dlbmVyYXRlVGh1bWJuYWlsVXJsID8gXCI/dGh1bWI9MVwiIDogXCJcIn1gXHJcbiAgICA6IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybXVsYXRlQ291cnNlVXJsID0gKGNvdXJzZSwgYmFja2VuZCA9IFwiXCIpID0+XHJcbiAgYCR7YmFja2VuZH0vJHtjb3Vyc2UuaXNCbG9nID8gVVJMX0VYVEVOVElPTl9QT1NUUyA6IFVSTF9FWFRFTlRJT05fQ09VUlNFU30vJHtjb3Vyc2UuY291cnNlSWRcclxuICB9LyR7Y291cnNlLnNsdWd9YDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0RGVzY3JpcHRpb25TbmlwcGV0ID0gKHJhd0RyYWZ0SlNDb250ZW50U3RhdGUpID0+IHtcclxuICBjb25zdCBmaXJzdFNlbnRlbmNlID0gVGV4dEVkaXRvci5oeWRyYXRlKHsgZGF0YTogcmF3RHJhZnRKU0NvbnRlbnRTdGF0ZSB9KVxyXG4gICAgLmdldEN1cnJlbnRDb250ZW50KClcclxuICAgIC5nZXRQbGFpblRleHQoKVxyXG4gICAgLnNwbGl0KFwiLlwiKVswXTtcclxuXHJcbiAgcmV0dXJuIGZpcnN0U2VudGVuY2UgPyBmaXJzdFNlbnRlbmNlICsgXCIuXCIgOiBmaXJzdFNlbnRlbmNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyYXBoUUxRdWVyeUZpZWxkcyA9IChcclxuICBqc09iaixcclxuICBmaWVsZHNOb3RQdXRCZXR3ZWVuUXVvdGVzID0gW11cclxuKSA9PiB7XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gXCJ7XCI7XHJcbiAgZm9yIChjb25zdCBpIG9mIE9iamVjdC5rZXlzKGpzT2JqKSkge1xyXG4gICAgaWYgKGpzT2JqW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcXVlcnlTdHJpbmcgKz0gZmllbGRzTm90UHV0QmV0d2VlblF1b3Rlcy5pbmNsdWRlcyhpKVxyXG4gICAgICAgID8gYCR7aX06ICR7anNPYmpbaV19LGBcclxuICAgICAgICA6IGAke2l9OiBcIiR7anNPYmpbaV19XCIsYDtcclxuICAgIH1cclxuICB9XHJcbiAgcXVlcnlTdHJpbmcgKz0gXCJ9XCI7XHJcblxyXG4gIHJldHVybiBxdWVyeVN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3RDb250YWluaW5nT25seUNoYW5nZWRGaWVsZHMgPSAoYmFzZWxpbmUsIG9iaikgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gIGZvciAoY29uc3QgaSBvZiBPYmplY3Qua2V5cyhiYXNlbGluZSkpIHtcclxuICAgIGlmIChiYXNlbGluZVtpXSAhPT0gb2JqW2ldKSB7XHJcbiAgICAgIHJlc3VsdFtpXSA9IG9ialtpXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcmVPYmplY3RzRGlmZmVyZW50ID0gKGJhc2VsaW5lLCBvYmopID0+IHtcclxuICBjb25zdCBvbmx5Q2hhbmdlZEZpZWxkcyA9IGdldE9iamVjdENvbnRhaW5pbmdPbmx5Q2hhbmdlZEZpZWxkcyhiYXNlbGluZSwgb2JqKTtcclxuICByZXR1cm4gISFPYmplY3Qua2V5cyhvbmx5Q2hhbmdlZEZpZWxkcykubGVuZ3RoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFkZHJlc3MgPSAoaG9zdCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkb21haW46IGV4dHJhY3REb21haW5Gcm9tVVJMKGhvc3QpLFxyXG4gICAgYmFja2VuZDogZ2V0QmFja2VuZEFkZHJlc3MoaG9zdCksXHJcbiAgICBmcm9udGVuZDogYGh0dHA6Ly8ke2hvc3R9YCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJhY2tlbmRBZGRyZXNzID0gKGhvc3QpID0+IHtcclxuICBjb25zdCBkb21haW4gPSBleHRyYWN0RG9tYWluRnJvbVVSTChob3N0KTtcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcIm5vdF93b3JkX2luX3Byb2R1Y3Rpb25cIikge1xyXG4gICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LklOU0VDVVJFID09PSBcInRydWVcIiA/IFwiaHR0cFwiIDogXCJodHRwc1wiXHJcbiAgICAgIH06Ly8ke2RvbWFpbn0vYXBpYDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBodHRwOi8vJHtkb21haW59OjgwMDBgO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGV4dHJhY3REb21haW5Gcm9tVVJMID0gKGhvc3QpID0+IHtcclxuICByZXR1cm4gaG9zdC5zcGxpdChcIjpcIilbMF07XHJcbn07XHJcbiIsIi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGZvcm11bGF0ZU1lZGlhVXJsLFxyXG4gIGZvcm11bGF0ZUNvdXJzZVVybCxcclxuICBnZXRCYWNrZW5kQWRkcmVzcyxcclxufSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzLmpzXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRmV0Y2hCdWlsZGVyIGZyb20gXCIuLi8uLi8uLi9saWIvZmV0Y2guanNcIjtcclxuLy9pbXBvcnQgeyBhZGRyZXNzUHJvcHMsIHNpdGVJbmZvUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMuanNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuY29uc3QgQmFzZUxheW91dCA9IGR5bmFtaWMoKCkgPT5cclxuICBpbXBvcnQoXCIuLi8uLi8uLi9jb21wb25lbnRzL1B1YmxpYy9CYXNlTGF5b3V0XCIpXHJcbik7XHJcbmNvbnN0IEFydGljbGUgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHVibGljL0FydGljbGUuanNcIikpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGVudDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG59KSlcclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgYXJ0aWNsZU9wdGlvbnMgPSB7XHJcbiAgICBzaG93QXR0cmlidXRpb246IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlTGF5b3V0IHRpdGxlPXtwcm9wcy5wb3N0Py50aXRsZX0+XHJcbiAgICAgIHtwcm9wcy5wb3N0ICYmIChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2Zvcm11bGF0ZUNvdXJzZVVybChwcm9wcy5wb3N0LFxyXG4gICAgICAgICAgICAgICAgcHJvcHM/LmFkZHJlc3M/LmZyb250ZW5kIHx8ICdsb2NhbGhvc3Q6ODAwMCdcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwcm9wcy5wb3N0LnRpdGxlfSAvPlxyXG4gICAgICAgICAgICB7LyoqIFRPRE86IHJlLWVuYWJsZSB0aGUgZm9sbG93aW5nIG1ldGEgdGFnIG9uY2UgU1NSIGlzIHN1cHBvcnRlZCAqL31cclxuICAgICAgICAgICAgey8qIDxtZXRhXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD17Z2V0UG9zdERlc2NyaXB0aW9uU25pcHBldChwcm9wcy5wb3N0LmRlc2NyaXB0aW9uKX1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6YXV0aG9yXCIgY29udGVudD17cHJvcHMucG9zdC5jcmVhdG9yTmFtZX0gLz5cclxuICAgICAgICAgICAge3Byb3BzLnBvc3QuZmVhdHVyZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD17Zm9ybXVsYXRlTWVkaWFVcmwoXHJcbiAgICAgICAgICAgICAgICAgIHByb3BzPy5hZGRyZXNzPy5mcm9udGVuZCB8fCAnbG9jYWxob3N0OjgwMDAnLFxyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5wb3N0LmZlYXR1cmVkSW1hZ2VcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxBcnRpY2xlIGNvdXJzZT17cHJvcHMucG9zdH0gb3B0aW9ucz17YXJ0aWNsZU9wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9CYXNlTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGdlbmVyYXRlUXVlcnkgPSAocGFnZU9mZnNldCA9IDEpID0+IGBcclxuICBxdWVyeSB7XHJcbiAgICBjb3Vyc2VzOiBnZXRQb3N0cyhvZmZzZXQ6ICR7cGFnZU9mZnNldH0pIHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgdXBkYXRlZCxcclxuICAgICAgY3JlYXRvck5hbWUsXHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIGZlYXR1cmVkSW1hZ2UsXHJcbiAgICAgIGNvdXJzZUlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRDb3Vyc2VzID0gYXN5bmMgKGJhY2tlbmQgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJykgPT4ge1xyXG4gIGxldCBjb3Vyc2VzID0gW107XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZldGNoID0gbmV3IEZldGNoQnVpbGRlcigpXHJcbiAgICAgIC5zZXRVcmwoYCR7YmFja2VuZH0vZ3JhcGhgKVxyXG4gICAgICAuc2V0UGF5bG9hZChnZW5lcmF0ZVF1ZXJ5KCkpXHJcbiAgICAgIC5zZXRJc0dyYXBoUUxFbmRwb2ludCh0cnVlKVxyXG4gICAgICAuYnVpbGQoKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2guZXhlYygpO1xyXG4gICAgY291cnNlcyA9IHJlc3BvbnNlLmNvdXJzZXM7XHJcbiAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgcmV0dXJuIGNvdXJzZXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldENvdXJzZXMoKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcG9zdD8ubWFwKGRhdGEgPT4gKHsgcGFyYW1zOiB7IGlkOiBkYXRhPy5jb3Vyc2VJZC50b1N0cmluZygpLCBzbHVnOiBkYXRhPy5zbHVnIH0gfSkpLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsIC8vU0UgQSBQQUdJTkEgTsODTyBFWElTVElSIEVOVMODTywgR0VSQVIgTk9WQU1FTlRFXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZ3JhcGhRdWVyeSA9IGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgcG9zdDogZ2V0Q291cnNlKGNvdXJzZUlkOiAke3BhcmFtcy5pZH0pIHtcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2UsXHJcbiAgICAgICAgICB1cGRhdGVkLFxyXG4gICAgICAgICAgY3JlYXRvck5hbWUsXHJcbiAgICAgICAgICBjcmVhdG9ySWQsXHJcbiAgICAgICAgICBzbHVnLFxyXG4gICAgICAgICAgaXNCbG9nLFxyXG4gICAgICAgICAgY291cnNlSWQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG4gIGNvbnN0IGZldGNoID0gbmV3IEZldGNoQnVpbGRlcigpXHJcbiAgICAvLy5zZXRVcmwoYCR7Z2V0QmFja2VuZEFkZHJlc3MocmVxPy5oZWFkZXJzLmhvc3QpfS9ncmFwaGApXHJcbiAgICAuc2V0VXJsKGAkeydodHRwOi8vbG9jYWxob3N0OjgwMDAnfS9ncmFwaGApXHJcbiAgICAuc2V0UGF5bG9hZChncmFwaFF1ZXJ5KVxyXG4gICAgLnNldElzR3JhcGhRTEVuZHBvaW50KHRydWUpXHJcbiAgICAuYnVpbGQoKTtcclxuXHJcbiAgbGV0IHBvc3QgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoLmV4ZWMoKTtcclxuICAgIHBvc3QgPSByZXNwb25zZS5wb3N0O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcG9zdCA9IHtcclxuICAgICAgdGl0bGU6IGVyci5tZXNzYWdlLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5cclxuLy9leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnksIHJlcSB9KSB7XHJcbi8vICAvL2V4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbi8vICBjb25zb2xlLmxvZygncXVlcnlxdWVyeScsIHF1ZXJ5KVxyXG4vLyAgY29uc29sZS5sb2coYCR7Z2V0QmFja2VuZEFkZHJlc3MocmVxPy5oZWFkZXJzLmhvc3QpfS9ncmFwaGAsICdob3d0c3QnKVxyXG4vLyAgY29uc3QgZ3JhcGhRdWVyeSA9IGBcclxuLy8gICAgICBxdWVyeSB7XHJcbi8vICAgICAgICBwb3N0OiBnZXRDb3Vyc2UoY291cnNlSWQ6ICR7cXVlcnkuaWR9KSB7XHJcbi8vICAgICAgICAgICAgaWQsXHJcbi8vICAgICAgICAgICAgdGl0bGUsXHJcbi8vICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbi8vICAgICAgICAgICAgZmVhdHVyZWRJbWFnZSxcclxuLy8gICAgICAgICAgICB1cGRhdGVkLFxyXG4vLyAgICAgICAgICAgIGNyZWF0b3JOYW1lLFxyXG4vLyAgICAgICAgICAgIGNyZWF0b3JJZCxcclxuLy8gICAgICAgICAgICBzbHVnLFxyXG4vLyAgICAgICAgICAgIGlzQmxvZyxcclxuLy8gICAgICAgICAgICBjb3Vyc2VJZCxcclxuLy8gICAgICAgIH1cclxuLy8gICAgICB9XHJcbi8vICAgIGA7XHJcbi8vICBjb25zdCBmZXRjaCA9IG5ldyBGZXRjaEJ1aWxkZXIoKVxyXG4vLyAgICAuc2V0VXJsKGAke2dldEJhY2tlbmRBZGRyZXNzKHJlcT8uaGVhZGVycy5ob3N0KX0vZ3JhcGhgKVxyXG4vLyAgICAvLy5zZXRVcmwoYCR7J2xvY2FsaG9zdDozMDAyJ30vZ3JhcGhgKVxyXG4vLyAgICAuc2V0UGF5bG9hZChncmFwaFF1ZXJ5KVxyXG4vLyAgICAuc2V0SXNHcmFwaFFMRW5kcG9pbnQodHJ1ZSlcclxuLy8gICAgLmJ1aWxkKCk7XHJcblxyXG4vLyAgbGV0IHBvc3QgPSBudWxsO1xyXG4vLyAgdHJ5IHtcclxuLy8gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaC5leGVjKCk7XHJcbi8vICAgIHBvc3QgPSByZXNwb25zZS5wb3N0O1xyXG4vLyAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgIHBvc3QgPSB7XHJcbi8vICAgICAgdGl0bGU6IGVyci5tZXNzYWdlLFxyXG4vLyAgICB9O1xyXG4vLyAgfVxyXG5cclxuLy8gIHJldHVybiB7XHJcbi8vICAgIHByb3BzOiB7XHJcbi8vICAgICAgcG9zdCxcclxuLy8gICAgfSxcclxuLy8gIH07XHJcbi8vfVxyXG5cclxuXHJcblxyXG4vL1Bvc3QucHJvcFR5cGVzID0ge1xyXG4vLyAgc2l0ZUluZm86IHNpdGVJbmZvUHJvcHMsXHJcbi8vICBhZGRyZXNzOiBhZGRyZXNzUHJvcHMsXHJcbi8vfTtcclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7c2l0ZUluZm86IHN0YXRlLnNpdGVpbmZvLGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBvc3QpO1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY291cnNlbGl0L2NvbW1vbi13aWRnZXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjb3Vyc2VsaXQvY29tcG9uZW50cy1saWJyYXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjb3Vyc2VsaXQvd2lkZ2V0LWJ1dHRvbmRvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvc3RyaXBlLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==