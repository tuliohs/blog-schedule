exports.ids = [1];
exports.modules = {

/***/ "./components/Img.js":
/*!***************************!*\
  !*** ./components/Img.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types.js */ "./types.js");
/* harmony import */ var _config_defaultState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/defaultState */ "./config/defaultState.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\Img.js";



 ////import { connect } from "react-redux";




const Img = (src, isThumbnail = true, classes, alt, defaultImage, address = _config_defaultState__WEBPACK_IMPORTED_MODULE_6__["default"].address.backend, isExternal = false) => {
  console.log('srccrs', src.src);
  const source = src ? isExternal ? src : Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["formulateMediaUrl"])(address, src.src, isThumbnail) : defaultImage || "/courselit_backdrop_square";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: source,
      alt: alt,
      className: "jsx-1324233388" + " " + (classes || "")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1324233388",
      children: "img.jsx-1324233388{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTUdTXFxTaXN0ZW1hc1xcdGVtcFxcY291cnNlbGl0XFxwYWNrYWdlc1xcYmxvZ1xcY29tcG9uZW50c1xcSW1nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHc0IsV0FDQyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTUdTXFxTaXN0ZW1hc1xcdGVtcFxcY291cnNlbGl0XFxwYWNrYWdlc1xcYmxvZ1xcY29tcG9uZW50c1xcSW1nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IGZvcm11bGF0ZU1lZGlhVXJsIH0gZnJvbSBcIi4uL2xpYi91dGlscy5qc1wiO1xyXG4vLy8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRyZXNzUHJvcHMgfSBmcm9tIFwiLi4vdHlwZXMuanNcIjtcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuLi9jb25maWcvZGVmYXVsdFN0YXRlJ1xyXG5cclxuY29uc3QgSW1nID0gKHNyYyxcclxuICBpc1RodW1ibmFpbCA9IHRydWUsXHJcbiAgY2xhc3NlcyxcclxuICBhbHQsXHJcbiAgZGVmYXVsdEltYWdlLFxyXG4gIGFkZHJlc3MgPSBkZWZhdWx0U3RhdGUuYWRkcmVzcy5iYWNrZW5kLFxyXG4gIGlzRXh0ZXJuYWwgPSBmYWxzZSwpID0+IHtcclxuICBjb25zb2xlLmxvZygnc3JjY3JzJywgc3JjLnNyYylcclxuXHJcbiAgY29uc3Qgc291cmNlID0gc3JjXHJcbiAgICA/IGlzRXh0ZXJuYWxcclxuICAgICAgPyBzcmNcclxuICAgICAgOiBmb3JtdWxhdGVNZWRpYVVybChhZGRyZXNzLCBzcmMuc3JjLCBpc1RodW1ibmFpbClcclxuICAgIDogZGVmYXVsdEltYWdlIHx8IFwiL2NvdXJzZWxpdF9iYWNrZHJvcF9zcXVhcmVcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NvdXJjZX0gYWx0PXthbHR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy9JbWcucHJvcFR5cGVzID0ge1xyXG4vLyAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgaXNUaHVtYm5haWw6IFByb3BUeXBlcy5ib29sLFxyXG4vLyAgY2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGRlZmF1bHRJbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGFkZHJlc3M6IGFkZHJlc3NQcm9wcyxcclxuLy8gIGlzRXh0ZXJuYWw6IFByb3BUeXBlcy5ib29sLFxyXG4vL307XHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyAgYWRkcmVzczogc3RhdGUuYWRkcmVzcyx9KTtcclxuLy9leHBvcnQgZGVmYXVsdCAoSW1nKTtcclxuZXhwb3J0IGRlZmF1bHQgSW1nXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\MGS\\\\Sistemas\\\\temp\\\\courselit\\\\packages\\\\blog\\\\components\\\\Img.js */"
    }, void 0, false, void 0, undefined)]
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
//export default (Img);


/* harmony default export */ __webpack_exports__["default"] = (Img);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3JjIiwiaXNUaHVtYm5haWwiLCJjbGFzc2VzIiwiYWx0IiwiZGVmYXVsdEltYWdlIiwiYWRkcmVzcyIsImRlZmF1bHRTdGF0ZSIsImJhY2tlbmQiLCJpc0V4dGVybmFsIiwiY29uc29sZSIsImxvZyIsInNvdXJjZSIsImZvcm11bGF0ZU1lZGlhVXJsIiwicXVlcnlHcmFwaFFMIiwidXJsIiwicXVlcnkiLCJ0b2tlbiIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlcnJvcnMiLCJsZW5ndGgiLCJFcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicXVlcnlHcmFwaFFMV2l0aFVJRWZmZWN0cyIsImRpc3BhdGNoIiwibmV0d29ya0FjdGlvbiIsImZvcm1hdHRlZExvY2FsZURhdGUiLCJlcG9jaFN0cmluZyIsIkRhdGUiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsIm1ha2VHcmFwaFFMUXVlcnlTdHJpbmdGcm9tSlNPYmplY3QiLCJvYmoiLCJyZXBsYWNlIiwibWVkaWFJRCIsImdlbmVyYXRlVGh1bWJuYWlsVXJsIiwiZm9ybXVsYXRlQ291cnNlVXJsIiwiY291cnNlIiwiaXNCbG9nIiwiVVJMX0VYVEVOVElPTl9QT1NUUyIsIlVSTF9FWFRFTlRJT05fQ09VUlNFUyIsImNvdXJzZUlkIiwic2x1ZyIsImdldFBvc3REZXNjcmlwdGlvblNuaXBwZXQiLCJyYXdEcmFmdEpTQ29udGVudFN0YXRlIiwiZmlyc3RTZW50ZW5jZSIsIlRleHRFZGl0b3IiLCJoeWRyYXRlIiwiZ2V0Q3VycmVudENvbnRlbnQiLCJnZXRQbGFpblRleHQiLCJzcGxpdCIsImdldEdyYXBoUUxRdWVyeUZpZWxkcyIsImpzT2JqIiwiZmllbGRzTm90UHV0QmV0d2VlblF1b3RlcyIsInF1ZXJ5U3RyaW5nIiwiaSIsIk9iamVjdCIsImtleXMiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImdldE9iamVjdENvbnRhaW5pbmdPbmx5Q2hhbmdlZEZpZWxkcyIsImJhc2VsaW5lIiwicmVzdWx0IiwiYXJlT2JqZWN0c0RpZmZlcmVudCIsIm9ubHlDaGFuZ2VkRmllbGRzIiwiZ2V0QWRkcmVzcyIsImhvc3QiLCJkb21haW4iLCJleHRyYWN0RG9tYWluRnJvbVVSTCIsImdldEJhY2tlbmRBZGRyZXNzIiwiZnJvbnRlbmQiLCJhdXRoUHJvcHMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImd1ZXN0IiwiYm9vbCIsInN0cmluZyIsInByb2ZpbGVQcm9wcyIsImlzQ3JlYXRvciIsIm5hbWUiLCJpZCIsImZldGNoZWQiLCJlbWFpbCIsInB1cmNoYXNlcyIsImFycmF5T2YiLCJsYXRlc3RQb3N0c1Byb3BzIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdG9yTmFtZSIsInVwZGF0ZWQiLCJudW1iZXIiLCJzaXRlSW5mb1Byb3BzIiwic3VidGl0bGUiLCJsb2dvcGF0aCIsImN1cnJlbmN5VW5pdCIsImN1cnJlbmN5SVNPQ29kZSIsInB1YmxpY0NvdXJzZSIsImlzRmVhdHVyZWQiLCJjb3N0IiwiY3JlYXRvcklkIiwiY3JlYXRvckNvdXJzZSIsInNpdGVVc2VyIiwidmVyaWZpZWQiLCJpc0FkbWluIiwiYXZhdGFyIiwiZmVhdHVyZWRDb3Vyc2UiLCJmZWF0dXJlZEltYWdlIiwiYXBwTWVzc2FnZSIsIm9wZW4iLCJhY3Rpb24iLCJ0ZXh0IiwiY2IiLCJmdW5jIiwibGVzc29uIiwidHlwZSIsImRvd25sb2FkYWJsZSIsImNvbnRlbnQiLCJjb250ZW50VVJMIiwibGlu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LEdBQWhCO0FBSGdDLENBQWhCLENBQW5CO0FBU0EsTUFBTTRCLE1BQU0sR0FBRzFDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDcENjLE9BQUssRUFBRWYsaURBQVMsQ0FBQ0ksTUFBVixDQUFpQlUsVUFEWTtBQUVwQzZCLE1BQUksRUFBRTNDLGlEQUFTLENBQUNJLE1BQVYsR0FBbUIsRUFGVztBQUdwQ3dDLGNBQVksRUFBRTVDLGlEQUFTLENBQUNHLElBQVYsR0FBaUIsS0FISztBQUlwQzBDLFNBQU8sRUFBRTdDLGlEQUFTLENBQUNJLE1BQVYsR0FBbUIsRUFKUTtBQUtwQzBDLFlBQVUsRUFBRTlDLGlEQUFTLENBQUNJLE1BQVYsR0FBbUI7QUFMSyxDQUFoQixDQUFmO0FBUUEsTUFBTTJDLElBQUksR0FBRy9DLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDbENzQyxNQUFJLEVBQUV2QyxpREFBUyxDQUFDSSxNQUFWLENBQWlCVSxVQURXO0FBRWxDa0MsYUFBVyxFQUFFaEQsaURBQVMsQ0FBQ0ksTUFBVixDQUFpQlUsVUFGSTtBQUdsQ21DLFVBQVEsRUFBRWpELGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJVLFVBSE87QUFJbENvQyxRQUFNLEVBQUVsRCxpREFBUyxDQUFDRyxJQUFWLENBQWVXO0FBSlcsQ0FBaEIsQ0FBYjtBQU9BLE1BQU1xQyxZQUFZLEdBQUduRCxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQzFDbkYsU0FBTyxFQUFFa0YsaURBQVMsQ0FBQ0ksTUFBVixDQUFpQlUsVUFEZ0I7QUFFMUNoQixVQUFRLEVBQUVFLGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJVLFVBRmU7QUFHMUNuQixRQUFNLEVBQUVLLGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJVO0FBSGlCLENBQWhCLENBQXJCLEMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3JtdWxhdGVNZWRpYVVybCB9IGZyb20gXCIuLi9saWIvdXRpbHMuanNcIjtcclxuLy8vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkcmVzc1Byb3BzIH0gZnJvbSBcIi4uL3R5cGVzLmpzXCI7XHJcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi4vY29uZmlnL2RlZmF1bHRTdGF0ZSdcclxuXHJcbmNvbnN0IEltZyA9IChzcmMsXHJcbiAgaXNUaHVtYm5haWwgPSB0cnVlLFxyXG4gIGNsYXNzZXMsXHJcbiAgYWx0LFxyXG4gIGRlZmF1bHRJbWFnZSxcclxuICBhZGRyZXNzID0gZGVmYXVsdFN0YXRlLmFkZHJlc3MuYmFja2VuZCxcclxuICBpc0V4dGVybmFsID0gZmFsc2UsKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3NyY2NycycsIHNyYy5zcmMpXHJcblxyXG4gIGNvbnN0IHNvdXJjZSA9IHNyY1xyXG4gICAgPyBpc0V4dGVybmFsXHJcbiAgICAgID8gc3JjXHJcbiAgICAgIDogZm9ybXVsYXRlTWVkaWFVcmwoYWRkcmVzcywgc3JjLnNyYywgaXNUaHVtYm5haWwpXHJcbiAgICA6IGRlZmF1bHRJbWFnZSB8fCBcIi9jb3Vyc2VsaXRfYmFja2Ryb3Bfc3F1YXJlXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzb3VyY2V9IGFsdD17YWx0fSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vSW1nLnByb3BUeXBlcyA9IHtcclxuLy8gIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGlzVGh1bWJuYWlsOiBQcm9wVHlwZXMuYm9vbCxcclxuLy8gIGNsYXNzZXM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICBkZWZhdWx0SW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICBhZGRyZXNzOiBhZGRyZXNzUHJvcHMsXHJcbi8vICBpc0V4dGVybmFsOiBQcm9wVHlwZXMuYm9vbCxcclxuLy99O1xyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgKEltZyk7XHJcbmV4cG9ydCBkZWZhdWx0IEltZ1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQge1xyXG4gIFVSTF9FWFRFTlRJT05fUE9TVFMsXHJcbiAgVVJMX0VYVEVOVElPTl9DT1VSU0VTLFxyXG59IGZyb20gXCIuLi9jb25maWcvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0IGFzIFRleHRFZGl0b3IgfSBmcm9tIFwiQGNvdXJzZWxpdC9jb21wb25lbnRzLWxpYnJhcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeUdyYXBoUUwgPSBhc3luYyAodXJsLCBxdWVyeSwgdG9rZW4pID0+IHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHRva2VuXHJcbiAgICAgID8ge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICAgIDogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcclxuICB9O1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XHJcbiAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvcnNbMF0ubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5R3JhcGhRTFdpdGhVSUVmZmVjdHMgPSAoXHJcbiAgYmFja2VuZCxcclxuICBkaXNwYXRjaCxcclxuICBuZXR3b3JrQWN0aW9uLFxyXG4gIHRva2VuXHJcbikgPT4gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHcmFwaFFMKGAke2JhY2tlbmR9L2dyYXBoYCwgcXVlcnksIHRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0dGVkTG9jYWxlRGF0ZSA9IChlcG9jaFN0cmluZykgPT5cclxuICBuZXcgRGF0ZShOdW1iZXIoZXBvY2hTdHJpbmcpKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9KTtcclxuXHJcbi8vIFJlZ2V4IGNvcGllZCBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDg2NzUxNjAvOTQyNTg5XHJcbmV4cG9ydCBjb25zdCBtYWtlR3JhcGhRTFF1ZXJ5U3RyaW5nRnJvbUpTT2JqZWN0ID0gKG9iaikgPT5cclxuICBKU09OLnN0cmluZ2lmeShvYmopLnJlcGxhY2UoL1wiKFteKFwiKVwiXSspXCI6L2csIFwiJDE6XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm11bGF0ZU1lZGlhVXJsID0gKFxyXG4gIGJhY2tlbmQsXHJcbiAgbWVkaWFJRCxcclxuICBnZW5lcmF0ZVRodW1ibmFpbFVybCA9IGZhbHNlXHJcbikgPT5cclxuICBtZWRpYUlEXHJcbiAgICA/IGAke2JhY2tlbmR9L21lZGlhLyR7bWVkaWFJRH0ke2dlbmVyYXRlVGh1bWJuYWlsVXJsID8gXCI/dGh1bWI9MVwiIDogXCJcIn1gXHJcbiAgICA6IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybXVsYXRlQ291cnNlVXJsID0gKGNvdXJzZSwgYmFja2VuZCA9IFwiXCIpID0+XHJcbiAgYCR7YmFja2VuZH0vJHtjb3Vyc2UuaXNCbG9nID8gVVJMX0VYVEVOVElPTl9QT1NUUyA6IFVSTF9FWFRFTlRJT05fQ09VUlNFU30vJHtjb3Vyc2UuY291cnNlSWRcclxuICB9LyR7Y291cnNlLnNsdWd9YDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0RGVzY3JpcHRpb25TbmlwcGV0ID0gKHJhd0RyYWZ0SlNDb250ZW50U3RhdGUpID0+IHtcclxuICBjb25zdCBmaXJzdFNlbnRlbmNlID0gVGV4dEVkaXRvci5oeWRyYXRlKHsgZGF0YTogcmF3RHJhZnRKU0NvbnRlbnRTdGF0ZSB9KVxyXG4gICAgLmdldEN1cnJlbnRDb250ZW50KClcclxuICAgIC5nZXRQbGFpblRleHQoKVxyXG4gICAgLnNwbGl0KFwiLlwiKVswXTtcclxuXHJcbiAgcmV0dXJuIGZpcnN0U2VudGVuY2UgPyBmaXJzdFNlbnRlbmNlICsgXCIuXCIgOiBmaXJzdFNlbnRlbmNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyYXBoUUxRdWVyeUZpZWxkcyA9IChcclxuICBqc09iaixcclxuICBmaWVsZHNOb3RQdXRCZXR3ZWVuUXVvdGVzID0gW11cclxuKSA9PiB7XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gXCJ7XCI7XHJcbiAgZm9yIChjb25zdCBpIG9mIE9iamVjdC5rZXlzKGpzT2JqKSkge1xyXG4gICAgaWYgKGpzT2JqW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcXVlcnlTdHJpbmcgKz0gZmllbGRzTm90UHV0QmV0d2VlblF1b3Rlcy5pbmNsdWRlcyhpKVxyXG4gICAgICAgID8gYCR7aX06ICR7anNPYmpbaV19LGBcclxuICAgICAgICA6IGAke2l9OiBcIiR7anNPYmpbaV19XCIsYDtcclxuICAgIH1cclxuICB9XHJcbiAgcXVlcnlTdHJpbmcgKz0gXCJ9XCI7XHJcblxyXG4gIHJldHVybiBxdWVyeVN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3RDb250YWluaW5nT25seUNoYW5nZWRGaWVsZHMgPSAoYmFzZWxpbmUsIG9iaikgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gIGZvciAoY29uc3QgaSBvZiBPYmplY3Qua2V5cyhiYXNlbGluZSkpIHtcclxuICAgIGlmIChiYXNlbGluZVtpXSAhPT0gb2JqW2ldKSB7XHJcbiAgICAgIHJlc3VsdFtpXSA9IG9ialtpXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcmVPYmplY3RzRGlmZmVyZW50ID0gKGJhc2VsaW5lLCBvYmopID0+IHtcclxuICBjb25zdCBvbmx5Q2hhbmdlZEZpZWxkcyA9IGdldE9iamVjdENvbnRhaW5pbmdPbmx5Q2hhbmdlZEZpZWxkcyhiYXNlbGluZSwgb2JqKTtcclxuICByZXR1cm4gISFPYmplY3Qua2V5cyhvbmx5Q2hhbmdlZEZpZWxkcykubGVuZ3RoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFkZHJlc3MgPSAoaG9zdCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkb21haW46IGV4dHJhY3REb21haW5Gcm9tVVJMKGhvc3QpLFxyXG4gICAgYmFja2VuZDogZ2V0QmFja2VuZEFkZHJlc3MoaG9zdCksXHJcbiAgICBmcm9udGVuZDogYGh0dHA6Ly8ke2hvc3R9YCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJhY2tlbmRBZGRyZXNzID0gKGhvc3QpID0+IHtcclxuICBjb25zdCBkb21haW4gPSBleHRyYWN0RG9tYWluRnJvbVVSTChob3N0KTtcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcIm5vdF93b3JkX2luX3Byb2R1Y3Rpb25cIikge1xyXG4gICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LklOU0VDVVJFID09PSBcInRydWVcIiA/IFwiaHR0cFwiIDogXCJodHRwc1wiXHJcbiAgICAgIH06Ly8ke2RvbWFpbn0vYXBpYDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBodHRwOi8vJHtkb21haW59OjgwMDBgO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGV4dHJhY3REb21haW5Gcm9tVVJMID0gKGhvc3QpID0+IHtcclxuICByZXR1cm4gaG9zdC5zcGxpdChcIjpcIilbMF07XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYWxsIHRoZSBQcm9wVHlwZXMgdXNlZCBhY3Jvc3MgdGhlIGFwcC5cclxuICovXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGd1ZXN0OiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIHRva2VuOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgaXNDcmVhdG9yOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBmZXRjaGVkOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBwdXJjaGFzZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYXRlc3RQb3N0c1Byb3BzID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHVwZGF0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpdGVJbmZvUHJvcHMgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgbG9nb3BhdGg6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGN1cnJlbmN5VW5pdDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgY3VycmVuY3lJU09Db2RlOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVibGljQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjcmVhdG9yTmFtZTogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgdXBkYXRlZDogUHJvcFR5cGVzLnN0cmluZyA9IFwiXCIsXHJcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGlzRmVhdHVyZWQ6IFByb3BUeXBlcy5ib29sID0gZmFsc2UsXHJcbiAgY29zdDogUHJvcFR5cGVzLm51bWJlcixcclxuICBjcmVhdG9ySWQ6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdG9yQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGNyZWF0b3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICB1cGRhdGVkOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBpc0ZlYXR1cmVkOiBQcm9wVHlwZXMuYm9vbCA9IGZhbHNlLFxyXG4gIGNvc3Q6IFByb3BUeXBlcy5udW1iZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpdGVVc2VyID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB2ZXJpZmllZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc0NyZWF0b3I6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNBZG1pbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIHB1cmNoYXNlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVkQ291cnNlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY29zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGZlYXR1cmVkSW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBNZXNzYWdlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhY3Rpb246IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjYjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGVzc29uID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcgPSBcIlwiLFxyXG4gIGRvd25sb2FkYWJsZTogUHJvcFR5cGVzLmJvb2wgPSBmYWxzZSxcclxuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxuICBjb250ZW50VVJMOiBQcm9wVHlwZXMuc3RyaW5nID0gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGluayA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBuZXdUYWI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZHJlc3NQcm9wcyA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgYmFja2VuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZyb250ZW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZG9tYWluOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9