module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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
const GENERIC_LOGO_PATH = "";
const GENERIC_SIGNIN_TEXT = "Sign in";
const GENERIC_SIGNUP_TEXT = "Sign up";
const GENERIC_SIGNOUT_TEXT = "Sign out";
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

/***/ "./lib/session.js":
/*!************************!*\
  !*** ./lib/session.js ***!
  \************************/
/*! exports provided: setCookie, getCookie, removeCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Provides cookie based session management functions.
 *
 */

const setCookie = ({
  key,
  value,
  domain
}) => {
  if (false) {}
};
const getCookie = ({
  key,
  domain
}) => {
  return false ? undefined : null;
};
const removeCookie = ({
  key,
  domain
}) => {
  if (false) {}
};

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://nextjs.org/docs/messages/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://nextjs.org/docs/messages/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: refreshUserProfile, signedIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshUserProfile", function() { return refreshUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signedIn", function() { return signedIn; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_session_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/session.js */ "./lib/session.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/constants.js */ "./config/constants.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_strings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/strings.js */ "./config/strings.js");
/* harmony import */ var _config_defaultState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/defaultState */ "./config/defaultState.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _context_MyContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../context/MyContext */ "./context/MyContext.js");


var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 //import {
//  signedIn,
//  updateSiteInfo,
//  authHasBeenChecked,
//  updateSiteTheme,
//  updateSiteLayout,
//  updateSiteNavigation,
//  updateBackend,
//} from "../redux/actions.js";




 //import wrapper from "../redux/store.js";
//import "@courselit/rich-text/dist/main.css";


const CodeInjector = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/Public/CodeInjector.js */ "./components/Public/CodeInjector.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/Public/CodeInjector.js */ "./components/Public/CodeInjector.js")],
    modules: ["../components/Public/CodeInjector.js"]
  }
});


const muiTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["responsiveFontSizes"])(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#2A3F54'
    },
    secondary: {
      main: '#ec4d37',
      dark: '#eee'
    },
    error: {
      main: '#ff1744'
    },
    background: {
      default: '#f5f5f5'
    },
    contrastThreshold: 3
  },
  overrides: {
    drawerWidth: 240
  }
}));
async function refreshUserProfile(userId) {
  try {
    //dispatch(networkAction(true));
    const userID = userId; //|| getState().profile.email;

    const query = `
      { profile: getUser(email: "${userID}") {
          name,
          isCreator,
          id,
          isAdmin,
          email,
          purchases,
          userId,
          bio
        }
      }
      `;
    const fetch = new FetchBuilder().setUrl(`${_config_defaultState__WEBPACK_IMPORTED_MODULE_10__["default"].address.backend}/graph`).setPayload(query).setIsGraphQLEndpoint(true) //.setAuthToken(defaultState.auth.token)
    .build();
    const response = await fetch.exec(); //dispatch(networkAction(false));
    //dispatch(updateProfile(response.profile));

    console.log('propf', response.profile);
    return response.profile;
  } // finally {dispatch(networkAction(false))    }
  catch {
    return null;
  }
}
function signedIn(userid, token) {
  return refreshUserProfile(userid);
}

function MyApp({
  Component,
  pageProps
}) {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(muiTheme);
  const {
    0: siteInfo,
    1: setSiteInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: "Forgetion",
    subtitle: "Learning Bases in Not Forgetion",
    logopath: "6065e0fc891b6c2dcc9c6d74",
    currencyUnit: "d",
    currencyISOCode: "a"
  });
  const {
    0: profile,
    1: setProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    isCreator: false,
    name: "",
    id: "",
    fetched: false,
    email: "" //purchases: [""],

  });
  const {
    0: authProp,
    1: setAuthProp
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    guest: false,
    token: ""
  });
  const {
    0: navigation,
    1: setNavigation
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    text: "Home",
    destination: "/",
    category: "main",
    newTab: false
  }]);
  const {
    0: layout,
    1: setLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_config_defaultState__WEBPACK_IMPORTED_MODULE_10__["default"].layout); //const muiTheme = responsiveFontSizes(theme);
  //const { theme, address } = store.getState();
  //try {
  //  muiTheme = responsiveFontSizes(
  //    createMuiTheme(Object.keys(theme.styles).length ? theme.styles : {})
  //  );
  //} catch (err) {
  //  console.warn(CONSOLE_MESSAGE_THEME_INVALID);
  //  muiTheme = responsiveFontSizes(createMuiTheme({}));
  //}

  const setUpCookies = () => {
    const tokenCookie = Object(_lib_session_js__WEBPACK_IMPORTED_MODULE_5__["getCookie"])({
      key: _config_constants_js__WEBPACK_IMPORTED_MODULE_6__["JWT_COOKIE_NAME"],
      domain: _config_defaultState__WEBPACK_IMPORTED_MODULE_10__["default"].address.domain
    });

    if (tokenCookie) {
      signedIn(Object(_lib_session_js__WEBPACK_IMPORTED_MODULE_5__["getCookie"])({
        key: _config_constants_js__WEBPACK_IMPORTED_MODULE_6__["USERID_COOKIE_NAME"],
        domain: _config_defaultState__WEBPACK_IMPORTED_MODULE_10__["default"].address.domain
      }), tokenCookie);
    } //store.dispatch(authHasBeenChecked());

  };

  const removeServerSideInjectedCSS = () => {
    //???? its usable for more projects
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setUpCookies();
    removeServerSideInjectedCSS();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_MyContext__WEBPACK_IMPORTED_MODULE_13__["default"].Provider, {
      value: {
        siteInfo,
        profile,
        authProp,
        navigation,
        layout
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
        theme: theme,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CodeInjector, {
          props: {
            codeForHead: "<>customization headers</>"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this)
  }, void 0, false);
} //async function updateSiteTheme(backend) {
//  let tema;
//  try {
//    //dispatch(networkAction(true));
//    const query = `
//      { 
//        theme: getTheme {
//          styles
//        }
//      }
//      `;
//    const fetch = new FetchBuilder()
//      .setUrl(`${backend}/graph`)
//      .setPayload(query)
//      .setIsGraphQLEndpoint(true)
//      .build();
//    const response = await fetch.exec();
//    tema = response
//  } catch (e) {
//    console.log(e, 'erro fetch')
//  }
//  return tema
//}
//export const getStaticProps  = async () => {
//export async function getServerSideProps
//export const getServerSideProps = async (context) => {
//  const { req } = context;
//  const courses = await updateSiteTheme(getBackendAddress(
//    req?.headers?.host || 'localhost:8000'
//  ));
//  return { props: { courses } };
//}
//MyApp.getInitialProps = async (appContext) => {
//  const { ctx } = appContext;
//  if (ctx.req && ctx.req.headers && ctx.req.headers.host) {
//ctx.store.dispatch(updateBackend(ctx.req.headers.host));
//await ctx.store.dispatch(updateSiteInfo());
//await ctx.store.dispatch(updateSiteLayout());
//await ctx.store.dispatch(updateSiteTheme());
//await ctx.store.dispatch(updateSiteNavigation());
//  }
//  const appProps = await App.getInitialProps(appContext);
//  return { ...appProps };
//};


/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@courselit/components-library":
/*!************************************************!*\
  !*** external "@courselit/components-library" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@courselit/components-library");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L015Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY291cnNlbGl0L2NvbXBvbmVudHMtbGlicmFyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSldUX0NPT0tJRV9OQU1FIiwiVVNFUklEX0NPT0tJRV9OQU1FIiwiTEVTU09OX1RZUEVfVEVYVCIsIkxFU1NPTl9UWVBFX0FVRElPIiwiTEVTU09OX1RZUEVfVklERU8iLCJMRVNTT05fVFlQRV9QREYiLCJMRVNTT05fVFlQRV9RVUlaIiwiVVJMX0VYVEVOVElPTl9QT1NUUyIsIlVSTF9FWFRFTlRJT05fQ09VUlNFUyIsIkZSRUVfQ09VUlNFU19URVhUIiwiRFJBRlRKU19FTlRJVFlfVFlQRV9JTUFHRSIsIkRSQUZUSlNfRU5USVRZX1RZUEVfVklERU8iLCJEUkFGVEpTX0VOVElUWV9UWVBFX0FVRElPIiwiUEFZTUVOVF9NRVRIT0RfU1RSSVBFIiwiUEFZTUVOVF9NRVRIT0RfUEFZUEFMIiwiUEFZTUVOVF9NRVRIT0RfUEFZVE0iLCJQQVlNRU5UX01FVEhPRF9OT05FIiwiVFJBTlNBQ1RJT05fSU5JVElBVEVEIiwiVFJBTlNBQ1RJT05fU1VDQ0VTUyIsIlRSQU5TQUNUSU9OX0ZBSUxFRCIsIkNPTlNFQ1VUSVZFX1BBWU1FTlRfVkVSSUZJQ0FUSU9OX1JFUVVFU1RfR0FQIiwiTUlNRVRZUEVfVklERU8iLCJNSU1FVFlQRV9BVURJTyIsIk1JTUVUWVBFX0lNQUdFIiwiVEhFTUVTX1JFUE8iLCJOQVZJR0FUSU9OX0NBVEVHT1JZX01BSU4iLCJOQVZJR0FUSU9OX0NBVEVHT1JZX0ZPT1RFUiIsImF1dGgiLCJndWVzdCIsInRva2VuIiwidXNlcmlkIiwiY2hlY2tlZCIsInNpdGVpbmZvIiwidGl0bGUiLCJHRU5FUklDX1RJVExFIiwic3VidGl0bGUiLCJHRU5FUklDX1NVQlRJVExFIiwibG9nb3BhdGgiLCJHRU5FUklDX0xPR09fUEFUSCIsImN1cnJlbmN5VW5pdCIsIkdFTkVSSUNfQ1VSUkVOQ1lfVU5JVCIsImN1cnJlbmN5SVNPQ29kZSIsIkdFTkVSSUNfQ1VSUkVOQ1lfSVNPX0NPREUiLCJwYXltZW50TWV0aG9kIiwiR0VORVJJQ19QQVlNRU5UX01FVEhPRCIsInN0cmlwZVB1Ymxpc2hhYmxlS2V5IiwiR0VORVJJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZX1RFWFQiLCJ0aGVtZVByaW1hcnlDb2xvciIsIkdFTkVSSUNfVEhFTUVfQ09MT1JfUFJJTUFSWSIsInRoZW1lU2Vjb25kYXJ5Q29sb3IiLCJHRU5FUklDX1RIRU1FX0NPTE9SX1NFQ09OREFSWSIsImNvZGVJbmplY3Rpb25IZWFkIiwiR0VORVJJQ19DT0RFX0lOSkVDVElPTl9IRUFEIiwibmV0d29ya0FjdGlvbiIsInByb2ZpbGUiLCJpc0NyZWF0b3IiLCJuYW1lIiwiaWQiLCJmZXRjaGVkIiwiaXNBZG1pbiIsInB1cmNoYXNlcyIsImVtYWlsIiwiYmlvIiwibWVzc2FnZSIsIm9wZW4iLCJhY3Rpb24iLCJ0aGVtZSIsImxheW91dCIsInRvcCIsImJvdHRvbSIsImFzaWRlIiwiZm9vdGVyTGVmdCIsImZvb3RlclJpZ2h0IiwibmF2aWdhdGlvbiIsImFkZHJlc3MiLCJiYWNrZW5kIiwiZnJvbnRlbmQiLCJkb21haW4iLCJFUlJfQUxMX0ZJRUxEU19SRVFVSVJFRCIsIkVSUl9QQVNTV09SRFNfRE9OVF9NQVRDSCIsIlNJR05VUF9TVUNDRVNTIiwiRVJSX0NPVVJTRV9USVRMRV9SRVFVSVJFRCIsIkVSUl9DT1VSU0VfQ09TVF9SRVFVSVJFRCIsIlJFU1BfQVBJX1VTRVJfQ1JFQVRFRCIsIkNSRUFUT1JfQVJFQV9MSU5LX1RFWFQiLCJDUkVBVE9SX0FSRUFfUEFHRV9USVRMRSIsIkdFTkVSSUNfU0lHTklOX1RFWFQiLCJHRU5FUklDX1NJR05VUF9URVhUIiwiR0VORVJJQ19TSUdOT1VUX1RFWFQiLCJCVE5fTE9BRF9NT1JFIiwiTUVESUFfVVBMT0FEX0JVVFRPTl9URVhUIiwiTUVESUFfVVBMT0FESU5HIiwiTUVESUFfQUREX05FV19CVVRUT05fVEVYVCIsIkJVVFRPTl9DQU5DRUxfVEVYVCIsIk1FRElBX1NFQVJDSF9JTlBVVF9QTEFDRUhPTERFUiIsIkxPQURfTU9SRV9URVhUIiwiTUFOQUdFX01FRElBX0JVVFRPTl9URVhUIiwiTUFOQUdFX0NPVVJTRVNfUEFHRV9IRUFESU5HIiwiVVNFUlNfTUFOQUdFUl9QQUdFX0hFQURJTkciLCJORVdfQ09VUlNFX1BBR0VfSEVBRElORyIsIk1FRElBX01BTkFHRVJfRElBTE9HX1RJVExFIiwiQlVUVE9OX05FV19DT1VSU0UiLCJCVVRUT05fRE9ORV9URVhUIiwiRElBTE9HX1RJVExFX0ZFQVRVUkVEX0lNQUdFIiwiQlVUVE9OX1NFVF9GRUFUVVJFRF9JTUFHRSIsIkJVVFRPTl9TRUxFQ1RfTUVESUEiLCJGT1JNX0ZJRUxEX0ZFQVRVUkVEX0lNQUdFIiwiQlROX0RFTEVURV9DT1VSU0UiLCJCVE5fQUREX1ZJREVPIiwiQUREX1ZJREVPX0RJQUxPR19USVRMRSIsIkNBUFRJT05fVkVSSUZJRUQiLCJDQVBUSU9OX1VOVkVSSUZJRUQiLCJMQUJFTF9ORVdfUEFTU1dPUkQiLCJCVVRUT05fU0FWRSIsIlNXSVRDSF9JU19BRE1JTiIsIlNXSVRDSF9JU19DUkVBVE9SIiwiU1dJVENIX0FDQ09VTlRfQUNUSVZFIiwiTEFCRUxfQ09ORl9QQVNTV09SRCIsIkhFQURFUl9CTE9HX1BPU1RTX1NFQ1RJT04iLCJIRUFERVJfQ09VUlNFU19TRUNUSU9OIiwiU0lURV9TRVRUSU5HU19USVRMRSIsIlNJVEVfU0VUVElOR1NfU1VCVElUTEUiLCJTSVRFX1NFVFRJTkdTX0NVUlJFTkNZX1VOSVQiLCJTSVRFX1NFVFRJTkdTX0NVUlJFTkNZX0lTT19DT0RFX1RFWFQiLCJTSVRFX1NFVFRJTkdTX0xPR08iLCJTSVRFX1NFVFRJTkdTX1BBR0VfSEVBRElORyIsIlNJVEVfQURNSU5fU0VUVElOR1NfU1RSSVBFX1NFQ1JFVCIsIlNJVEVfQURNSU5fU0VUVElOR1NfUEFZUEFMX1NFQ1JFVCIsIlNJVEVfQURNSU5fU0VUVElOR1NfUEFZVE1fU0VDUkVUIiwiU0lURV9TRVRUSU5HU19TRUNUSU9OX0dFTkVSQUwiLCJTSVRFX1NFVFRJTkdTX1NFQ1RJT05fUEFZTUVOVCIsIlNJVEVfQURNSU5fU0VUVElOR1NfUEFZTUVOVF9NRVRIT0QiLCJTSVRFX1NFVFRJTkdTX1NUUklQRV9QVUJMSVNIQUJMRV9LRVlfVEVYVCIsIkZSRUVfQ09TVCIsIlNJREVCQVJfVEVYVF9DT1VSU0VfQUJPVVQiLCJSRUFDVF9DT01QT05FTlRfQ1JBU0hFRCIsIkNIRUNLT1VUX0RJQUxPR19USVRMRSIsIlBBWU1FTlRfTU9EQUxfUEFZTUVOVF9ERVRBSUxTX0hFQURFUiIsIlBBWU1FTlRfTU9EQUxfQ09TVF9QUkVGSVgiLCJQQVlNRU5UX01PREFMX1BBWV9OT1dfQlVUVE9OX0NBUFRJT04iLCJQQVlNRU5UX0lOSVRJQVRJT05fRkFJTEVEIiwiUEFZTUVOVF9WRVJJRklDQVRJT05fRkFJTEVEIiwiU1RSSVBFX1BVQkxJU0hBQkxFX0tFWV9FTVBUWSIsIkNBUFRJT05fVFJZX0FHQUlOIiwiQ0FQVElPTl9DTE9TRSIsIkxPQURJTkciLCJCVVRUT05fTkVXX0xFU1NPTl9URVhUIiwiQlVUVE9OX0RFTEVURV9MRVNTT05fVEVYVCIsIkNPVVJTRV9ERVRBSUxTX0NBUkRfSEVBREVSIiwiREFOR0VSX1pPTkVfSEVBREVSIiwiREFOR0VSX1pPTkVfREVTQ1JJUFRJT04iLCJERUxFVEVfQ09VUlNFX1BPUFVQX0hFQURFUiIsIlBPUFVQX09LX0FDVElPTiIsIlBPUFVQX0NBTkNFTF9BQ1RJT04iLCJMT0dJTl9TRUNUSU9OX0hFQURFUiIsIkxPR0lOX1NFQ1RJT05fQlVUVE9OIiwiTE9HSU5fSU5TVEVBRF9CVVRUT04iLCJTSUdOVVBfU0VDVElPTl9IRUFERVIiLCJTSUdOVVBfU0VDVElPTl9CVVRUT04iLCJNRURJQV9NQU5BR0VSX1BBR0VfSEVBRElORyIsIkJVVFRPTl9TRUFSQ0giLCJCVVRUT05fQUREX0ZJTEUiLCJGSUxFX1VQTE9BRF9TVUNDRVNTIiwiSEVBREVSX1lPVVJfTUVESUEiLCJMRVNTT05fRURJVE9SX0hFQURFUiIsIkJMT0dfUE9TVF9TV0lUQ0giLCJET1dOTE9BREFCTEVfU1dJVENIIiwiVFlQRV9EUk9QRE9XTiIsIkxFU1NPTl9DT05URU5UX0hFQURFUiIsIkNPTlRFTlRfVVJMX0xBQkVMIiwiTUVESUFfTUFOQUdFUl9ZT1VSX01FRElBX0hFQURFUiIsIkRJQUxPR19TRUxFQ1RfQlVUVE9OIiwiTEVTU09OX1JFUVVJUkVTX0VOUk9MTE1FTlQiLCJERUxFVEVfTEVTU09OX1BPUFVQX0hFQURFUiIsIkFQUF9NRVNTQUdFX0xFU1NPTl9ERUxFVEVEIiwiQVBQX01FU1NBR0VfTEVTU09OX1NBVkVEIiwiQVBQX01FU1NBR0VfQ09VUlNFX1NBVkVEIiwiRU5ST0xMX0lOX1RIRV9DT1VSU0UiLCJVU0VSX0VSUk9SX0hFQURFUiIsIkVOUk9MTF9CVVRUT05fVEVYVCIsIkJVVFRPTl9ERUxFVEVfTUVESUEiLCJERUxFVEVfTUVESUFfUE9QVVBfSEVBREVSIiwiSEVBREVSX0VESVRJTkdfTUVESUEiLCJIRUFERVJfRURJVElOR19VU0VSIiwiSEVBREVSX01FRElBX1BSRVZJRVciLCJQUkVWSUVXX1BERl9GSUxFIiwiQVBQX01FU1NBR0VfTUVESUFfREVMRVRFRCIsIkFQUF9NRVNTQUdFX01FRElBX1VQREFURUQiLCJQQUdFX0hFQURFUl9BTExfQ09VUlNFUyIsIlBBR0VfSEVBREVSX0FMTF9QT1NUUyIsIkNPVVJTRV9UWVBFX0JMT0ciLCJDT1VSU0VfVFlQRV9DT1VSU0UiLCJDT1VSU0VfQ1JFQVRPUl9QUkVGSVgiLCJDT1VSU0VfRURJVE9SX0RFU0NSSVBUSU9OIiwiQVBQX01FU1NBR0VfU0VUVElOR1NfU0FWRUQiLCJFTlJPTExFRF9DT1VSU0VTX0hFQURFUiIsIlNJVEVfQ1VTVE9NSVNBVElPTlNfU0VUVElOR19IRUFERVIiLCJTSVRFX0NVU1RPTUlTQVRJT05TX1NFVFRJTkdfQ09ERUlOSkVDVElPTl9IRUFEIiwiRElTQ0FSRF9DT1VSU0VfQ0hBTkdFU19QT1BVUF9IRUFERVIiLCJGRUFUVVJFRF9TRUNUSU9OX0hFQURFUiIsIkNBUkRfSEVBREVSX1BBR0VfTEFZT1VUIiwiQ0FSRF9IRUFERVJfVEhFTUUiLCJDQVJEX0RFU0NSSVBUSU9OX1BBR0VfTEFZT1VUIiwiQUREX0NPTVBPTkVOVF9QT1BVUF9IRUFERVIiLCJBUFBfTUVTU0FHRV9DSEFOR0VTX1NBVkVEIiwiU1VCSEVBREVSX0NPVVJTRVNfU0VDVElPTiIsIlNVQkhFQURFUl9GRUFUVVJFRF9TRUNUSU9OIiwiU1VCSEVBREVSX1RIRU1FX0FERF9USEVNRSIsIlNVQkhFQURFUl9USEVNRV9BRERFRF9USEVNRSIsIlNVQkhFQURFUl9USEVNRV9BRERfVEhFTUVfSU5QVVRfTEFCRUwiLCJTVUJIRUFERVJfVEhFTUVfQUREX1RIRU1FX0lOUFVUX1BMQUNFSE9MREVSIiwiU1VCSEVBREVSX1RIRU1FX0lOU1RBTExFRF9USEVNRVMiLCJCVVRUT05fR0VUX1RIRU1FUyIsIkVSUk9SX1NOQUNLQkFSX1BSRUZJWCIsIkJVVFRPTl9USEVNRV9BUFBMWSIsIkJVVFRPTl9USEVNRV9VTklOU1RBTEwiLCJCVVRUT05fVEhFTUVfSU5TVEFMTCIsIkJVVFRPTl9USEVNRV9SRU1JWCIsIkRFTEVURV9USEVNRV9QT1BVUF9IRUFERVIiLCJBUFBMWV9USEVNRV9QT1BVUF9IRUFERVIiLCJSRU1JWEVEX1RIRU1FX1BSRUZJWCIsIkFQUF9NRVNTQUdFX1RIRU1FX0NPUElFRCIsIk5PX1RIRU1FU19JTlNUQUxMRUQiLCJBUFBfTUVTU0FHRV9USEVNRV9JTlNUQUxMRUQiLCJDT05TT0xFX01FU1NBR0VfVEhFTUVfSU5WQUxJRCIsIkFQUF9NRVNTQUdFX1RIRU1FX0FQUExJRUQiLCJBUFBfTUVTU0FHRV9USEVNRV9VTklOU1RBTExFRCIsIkhFQURFUl9OQVZJR0FUSU9OIiwiTEFCRUxfTkFWSUdBVElPTl9MSU5LX1RFWFQiLCJMQUJFTF9OQVZJR0FUSU9OX0xJTktfREVTVElOQVRJT04iLCJMSU5LX0RST1BET1dOIiwiQUREX05FV19MSU5LX0JVVFRPTiIsIkxBQkVMX05BVklHQVRJT05fTElOS19ORVdUQUIiLCJXSURHRVRTX1BBR0VfSEVBREVSIiwiUEFZTUVOVFNfU0hJUFBJTkdfQUREUkVTU19TRUNUSU9OX0hFQURFUiIsIkhFQURFUl9TRUNUSU9OX1BBWU1FTlRfQ09ORklSTUFUSU9OX1dFQkhPT0siLCJTVUJIRUFERVJfU0VDVElPTl9QQVlNRU5UX0NPTkZJUk1BVElPTl9XRUJIT09LIiwiUFVSQ0hBU0VfU1RBVFVTX1BBR0VfSEVBREVSIiwiTUFJTl9NRU5VX0lURU1fREFTSEJPQVJEIiwiTUFJTl9NRU5VX0lURU1fUFJPRklMRSIsIkxBWU9VVF9TRUNUSU9OX01BSU5fQ09OVEVOVCIsIkxBWU9VVF9TRUNUSU9OX0ZPT1RFUl9MRUZUIiwiTEFZT1VUX1NFQ1RJT05fRk9PVEVSX1JJR0hUIiwiTEFZT1VUX1NFQ1RJT05fVE9QIiwiTEFZT1VUX1NFQ1RJT05fRk9PVEVSIiwiTEFZT1VUX1NFQ1RJT05fQk9UVE9NIiwiTEFZT1VUX1NFQ1RJT05fQVNJREUiLCJUUkFOU0FDVElPTl9TVEFUVVNfU1VDQ0VTUyIsIlRSQU5TQUNUSU9OX1NUQVRVU19TVUNDRVNTX0RFVEFJTFMiLCJUUkFOU0FDVElPTl9TVEFUVVNfSU5JVElBVEVEIiwiVFJBTlNBQ1RJT05fU1RBVFVTX0ZBSUxFRCIsIlRSQU5TQUNUSU9OX1NUQVRVU19GQUlMRURfREVUQUlMUyIsIlZJU0lUX0NPVVJTRV9CVVRUT04iLCJWSVNJVF9QT1NUX0JVVFRPTiIsIlZFUklGWV9QQVlNRU5UX0JVVFRPTiIsIlBVUkNIQVNFX0lEX0hFQURFUiIsIlBBR0VfSEVBREVSX0ZFQVRVUkVEIiwiQlROX1ZJRVdfQUxMIiwiRU1QVFlfQ09VUlNFU19MSVNUX0FETUlOIiwiSEVBREVSX1JFU0VUX1BBU1NXT1JEIiwiSEVBREVSX0RFU0lHTiIsIkhFQURFUl9ZT1VSX1BST0ZJTEUiLCJQUk9GSUxFX1BBR0VfTUVTU0FHRV9OT1RfTE9HR0VEX0lOIiwiUFJPRklMRV9QQUdFX0hFQURFUiIsIlBST0ZJTEVfTVlfQ09VUlNFUyIsIlBST0ZJTEVfUEFHRV9OT1RfRU5ST0xMRUQiLCJQUk9GSUxFX1BBR0VfQlJPV1NFX0NPVVJTRVNfVEVYVCIsIlBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX05BTUUiLCJQUk9GSUxFX1NFQ1RJT05fREVUQUlMU19FTUFJTCIsIlBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX0JJTyIsIlBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX0JJT19FTVBUWSIsIk15Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzaXRlSW5mbyIsImF1dGhQcm9wIiwiTXlQcm92aWRlciIsImNoaWxkcmVuIiwic2V0Q29va2llIiwia2V5IiwidmFsdWUiLCJnZXRDb29raWUiLCJDb29raWVzIiwicmVtb3ZlQ29va2llIiwicXVlcnlHcmFwaFFMIiwidXJsIiwicXVlcnkiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3JzIiwibGVuZ3RoIiwiRXJyb3IiLCJkYXRhIiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicXVlcnlHcmFwaFFMV2l0aFVJRWZmZWN0cyIsImRpc3BhdGNoIiwiZm9ybWF0dGVkTG9jYWxlRGF0ZSIsImVwb2NoU3RyaW5nIiwiRGF0ZSIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwibWFrZUdyYXBoUUxRdWVyeVN0cmluZ0Zyb21KU09iamVjdCIsIm9iaiIsInJlcGxhY2UiLCJmb3JtdWxhdGVNZWRpYVVybCIsIm1lZGlhSUQiLCJnZW5lcmF0ZVRodW1ibmFpbFVybCIsImZvcm11bGF0ZUNvdXJzZVVybCIsImNvdXJzZSIsImlzQmxvZyIsImNvdXJzZUlkIiwic2x1ZyIsImdldFBvc3REZXNjcmlwdGlvblNuaXBwZXQiLCJyYXdEcmFmdEpTQ29udGVudFN0YXRlIiwiZmlyc3RTZW50ZW5jZSIsIlRleHRFZGl0b3IiLCJoeWRyYXRlIiwiZ2V0Q3VycmVudENvbnRlbnQiLCJnZXRQbGFpblRleHQiLCJzcGxpdCIsImdldEdyYXBoUUxRdWVyeUZpZWxkcyIsImpzT2JqIiwiZmllbGRzTm90UHV0QmV0d2VlblF1b3RlcyIsInF1ZXJ5U3RyaW5nIiwiaSIsIk9iamVjdCIsImtleXMiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImdldE9iamVjdENvbnRhaW5pbmdPbmx5Q2hhbmdlZEZpZWxkcyIsImJhc2VsaW5lIiwicmVzdWx0IiwiYXJlT2JqZWN0c0RpZmZlcmVudCIsIm9ubHlDaGFuZ2VkRmllbGRzIiwiZ2V0QWRkcmVzcyIsImhvc3QiLCJleHRyYWN0RG9tYWluRnJvbVVSTCIsImdldEJhY2tlbmRBZGRyZXNzIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIkNvZGVJbmplY3RvciIsImR5bmFtaWMiLCJtdWlUaGVtZSIsInJlc3BvbnNpdmVGb250U2l6ZXMiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImRhcmsiLCJlcnJvciIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiY29udHJhc3RUaHJlc2hvbGQiLCJvdmVycmlkZXMiLCJkcmF3ZXJXaWR0aCIsInJlZnJlc2hVc2VyUHJvZmlsZSIsInVzZXJJZCIsInVzZXJJRCIsIkZldGNoQnVpbGRlciIsInNldFVybCIsImRlZmF1bHRTdGF0ZSIsInNldFBheWxvYWQiLCJzZXRJc0dyYXBoUUxFbmRwb2ludCIsImJ1aWxkIiwiZXhlYyIsImxvZyIsInNpZ25lZEluIiwiTXlBcHAiLCJzZXRUaGVtZSIsInVzZVN0YXRlIiwic2V0U2l0ZUluZm8iLCJzZXRQcm9maWxlIiwic2V0QXV0aFByb3AiLCJzZXROYXZpZ2F0aW9uIiwidGV4dCIsImRlc3RpbmF0aW9uIiwiY2F0ZWdvcnkiLCJuZXdUYWIiLCJzZXRMYXlvdXQiLCJzZXRVcENvb2tpZXMiLCJ0b2tlbkNvb2tpZSIsInJlbW92ZVNlcnZlclNpZGVJbmplY3RlZENTUyIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInVzZUVmZmVjdCIsImNvZGVGb3JIZWFkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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QUFLLEVBQUVELEtBQXRCO0FBQUEsZ0NBQ0UscUVBQUMsU0FBRCxvQkFBZThSLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLFlBQUQ7QUFBYyxlQUFLLEVBQUU7QUFBRTBFLHVCQUFXLEVBQUU7QUFBZjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVVELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFZXJCLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL19hcHBcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBwcm92aWRlcyBhcHBsaWNhdGlvbiB3aWRlIGNvbnN0YW50cy5cclxuICovXHJcbi8vIGltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbi8vIGNvbnN0IHsgc2VydmVyUnVudGltZUNvbmZpZywgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG4vLyBjb25zdCBMT0NBTF9CQUNLRU5EID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcclxuLy8gY29uc3QgTE9DQUxfRlJPTlRFTkQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG4vLyBjb25zdCBBUElfUFJFRklYID0gcHVibGljUnVudGltZUNvbmZpZy5hcGlQcmVmaXggfHwgXCIvYXBpXCI7XHJcblxyXG4vLyBjb25zdCByZXNvbHZlUHJvZHVjdGlvbkJhY2tlbmQgPSAoKSA9PiBwcm9jZXNzLmVudi5CQUNLRU5EXHJcbi8vICAgPyBgaHR0cDovL2JhY2tlbmQ6ODAwMCR7QVBJX1BSRUZJWH1gIC8vIFNlcnZlci1zaWRlIEFQSSBwYXRoIChTU1IpXHJcbi8vICAgOiAgQVBJX1BSRUZJWCAvLyBDbGllbnQtc2lkZSBBUEkgcGF0aFxyXG4vLyBleHBvcnQgY29uc3QgQkFDS0VORCA9XHJcbi8vICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbi8vICAgICA/IHNlcnZlclJ1bnRpbWVDb25maWcuc3NyVXJsXHJcbi8vICAgICAgID8gc2VydmVyUnVudGltZUNvbmZpZy5zc3JVcmwgKyBBUElfUFJFRklYXHJcbi8vICAgICAgIDogQVBJX1BSRUZJWFxyXG4vLyAgICAgOiBMT0NBTF9CQUNLRU5EO1xyXG4vLyBleHBvcnQgY29uc3QgRlJPTlRFTkQgPSBwdWJsaWNSdW50aW1lQ29uZmlnLm1haW5VcmwgfHwgTE9DQUxfRlJPTlRFTkQ7XHJcbi8vIGV4cG9ydCBjb25zdCBNRURJQV9CQUNLRU5EID0gcHVibGljUnVudGltZUNvbmZpZy5tYWluVXJsXHJcbi8vICAgPyBwdWJsaWNSdW50aW1lQ29uZmlnLm1haW5VcmwgKyBBUElfUFJFRklYXHJcbi8vICAgOiBMT0NBTF9CQUNLRU5EO1xyXG5cclxuLy8gQ29uc3RhbnRzIGZvciBhdXRoIHJlbGF0ZWQgZnVuY3Rpb25hbGl0aWVzXHJcbmV4cG9ydCBjb25zdCBKV1RfQ09PS0lFX05BTUUgPSBcImFjY2Vzc190b2tlblwiO1xyXG5leHBvcnQgY29uc3QgVVNFUklEX0NPT0tJRV9OQU1FID0gXCJlbWFpbFwiO1xyXG5cclxuLy8gQ29uc3RhbnRzIHRoYXQgcmVwcmVzZW50IHR5cGVzIGZyb20gdGhlIHNlcnZlclxyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfVEVYVCA9IFwidGV4dFwiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1RZUEVfQVVESU8gPSBcImF1ZGlvXCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fVFlQRV9WSURFTyA9IFwidmlkZW9cIjtcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9UWVBFX1BERiA9IFwicGRmXCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fVFlQRV9RVUlaID0gXCJxdWl6XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVJMX0VYVEVOVElPTl9QT1NUUyA9IFwicG9zdFwiO1xyXG5leHBvcnQgY29uc3QgVVJMX0VYVEVOVElPTl9DT1VSU0VTID0gXCJjb3Vyc2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGUkVFX0NPVVJTRVNfVEVYVCA9IFwiRlJFRVwiO1xyXG5cclxuLy8gQ29uc3RhbnQgZm9yIHJlcHJlc2VudGluZyBEcmFmdGpzJyBlbnRpdGllc1xyXG5leHBvcnQgY29uc3QgRFJBRlRKU19FTlRJVFlfVFlQRV9JTUFHRSA9IFwiaW1hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IERSQUZUSlNfRU5USVRZX1RZUEVfVklERU8gPSBcInZpZGVvXCI7XHJcbmV4cG9ydCBjb25zdCBEUkFGVEpTX0VOVElUWV9UWVBFX0FVRElPID0gXCJhdWRpb1wiO1xyXG5cclxuLy8gUGF5bWVudCBtZXRob2RzXHJcbmV4cG9ydCBjb25zdCBQQVlNRU5UX01FVEhPRF9TVFJJUEUgPSBcInN0cmlwZVwiO1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NRVRIT0RfUEFZUEFMID0gXCJwYXlwYWxcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTUVUSE9EX1BBWVRNID0gXCJwYXl0bVwiO1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NRVRIT0RfTk9ORSA9IFwiXCI7XHJcblxyXG4vLyB0cmFuc2FjdGlvbiBzdGF0dXNlcyBmcm9tIGJhY2tlbmRcclxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX0lOSVRJQVRFRCA9IFwiaW5pdGlhdGVkXCI7XHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9TVUNDRVNTID0gXCJzdWNjZXNzXCI7XHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9GQUlMRUQgPSBcImZhaWxlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlNFQ1VUSVZFX1BBWU1FTlRfVkVSSUZJQ0FUSU9OX1JFUVVFU1RfR0FQID0gMjAwMDtcclxuXHJcbi8vIG1pbWUgdHlwZXNcclxuZXhwb3J0IGNvbnN0IE1JTUVUWVBFX1ZJREVPID0gW1widmlkZW8vbXA0XCJdO1xyXG5leHBvcnQgY29uc3QgTUlNRVRZUEVfQVVESU8gPSBbXCJhdWRpby9tcDNcIl07XHJcbmV4cG9ydCBjb25zdCBNSU1FVFlQRV9JTUFHRSA9IFtcImltYWdlL3BuZ1wiLCBcImltYWdlL2pwZWdcIiwgXCJpbWFnZS93ZWJwXCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRIRU1FU19SRVBPID0gXCJodHRwczovL2dpdGh1Yi5jb20vY29kZWxpdGRldi9jb3Vyc2VsaXQtdGhlbWVzXCI7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIGNhdGVnb3JpZXNcclxuZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fQ0FURUdPUllfTUFJTiA9IFwibWFpblwiO1xyXG5leHBvcnQgY29uc3QgTkFWSUdBVElPTl9DQVRFR09SWV9GT09URVIgPSBcImZvb3RlclwiO1xyXG4iLCJpbXBvcnQge1xyXG4gIEdFTkVSSUNfVElUTEUsXHJcbiAgR0VORVJJQ19TVUJUSVRMRSxcclxuICBHRU5FUklDX0xPR09fUEFUSCxcclxuICBHRU5FUklDX0NVUlJFTkNZX1VOSVQsXHJcbiAgR0VORVJJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZX1RFWFQsXHJcbiAgR0VORVJJQ19DVVJSRU5DWV9JU09fQ09ERSxcclxuICBHRU5FUklDX1BBWU1FTlRfTUVUSE9ELFxyXG4gIEdFTkVSSUNfVEhFTUVfQ09MT1JfUFJJTUFSWSxcclxuICBHRU5FUklDX1RIRU1FX0NPTE9SX1NFQ09OREFSWSxcclxuICBHRU5FUklDX0NPREVfSU5KRUNUSU9OX0hFQUQsXHJcbn0gZnJvbSBcIi4vc3RyaW5ncy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGF1dGg6IHtcclxuICAgIGd1ZXN0OiB0cnVlLFxyXG4gICAgdG9rZW46IG51bGwsXHJcbiAgICB1c2VyaWQ6IG51bGwsXHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICB9LFxyXG4gIHNpdGVpbmZvOiB7XHJcbiAgICB0aXRsZTogR0VORVJJQ19USVRMRSxcclxuICAgIHN1YnRpdGxlOiBHRU5FUklDX1NVQlRJVExFLFxyXG4gICAgbG9nb3BhdGg6IEdFTkVSSUNfTE9HT19QQVRILFxyXG4gICAgY3VycmVuY3lVbml0OiBHRU5FUklDX0NVUlJFTkNZX1VOSVQsXHJcbiAgICBjdXJyZW5jeUlTT0NvZGU6IEdFTkVSSUNfQ1VSUkVOQ1lfSVNPX0NPREUsXHJcbiAgICBwYXltZW50TWV0aG9kOiBHRU5FUklDX1BBWU1FTlRfTUVUSE9ELFxyXG4gICAgc3RyaXBlUHVibGlzaGFibGVLZXk6IEdFTkVSSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWV9URVhULFxyXG4gICAgdGhlbWVQcmltYXJ5Q29sb3I6IEdFTkVSSUNfVEhFTUVfQ09MT1JfUFJJTUFSWSxcclxuICAgIHRoZW1lU2Vjb25kYXJ5Q29sb3I6IEdFTkVSSUNfVEhFTUVfQ09MT1JfU0VDT05EQVJZLFxyXG4gICAgY29kZUluamVjdGlvbkhlYWQ6IEdFTkVSSUNfQ09ERV9JTkpFQ1RJT05fSEVBRCxcclxuICB9LFxyXG4gIG5ldHdvcmtBY3Rpb246IGZhbHNlLFxyXG4gIHByb2ZpbGU6IHtcclxuICAgIGlzQ3JlYXRvcjogZmFsc2UsXHJcbiAgICBuYW1lOiBudWxsLFxyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBmZXRjaGVkOiBmYWxzZSxcclxuICAgIGlzQWRtaW46IGZhbHNlLFxyXG4gICAgcHVyY2hhc2VzOiBbXSxcclxuICAgIGVtYWlsOiBudWxsLFxyXG4gICAgYmlvOiBudWxsLFxyXG4gIH0sXHJcbiAgbWVzc2FnZToge1xyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgYWN0aW9uOiBudWxsLFxyXG4gIH0sXHJcbiAgdGhlbWU6IHt9LFxyXG4gIGxheW91dDoge1xyXG4gICAgdG9wOiBbXSxcclxuICAgIGJvdHRvbTogW10sXHJcbiAgICBhc2lkZTogW10sXHJcbiAgICBmb290ZXJMZWZ0OiBbXSxcclxuICAgIGZvb3RlclJpZ2h0OiBbXSxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IFtdLFxyXG4gIGFkZHJlc3M6IHtcclxuICAgIGJhY2tlbmQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsXHJcbiAgICBmcm9udGVuZDogXCJcIixcclxuICAgIGRvbWFpbjogXCJcIixcclxuICB9LFxyXG59O1xyXG4iLCIvKipcclxuICogVGhpcyBmaWxlIHByb3ZpZGVzIGFwcGxpY2F0aW9uIHdpZGUgc3RyaW5ncy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgRVJSX0FMTF9GSUVMRFNfUkVRVUlSRUQgPSBcIkFsbCBmaWVsZHMgYXJlIHJlcXVpcmVkLlwiO1xyXG5leHBvcnQgY29uc3QgRVJSX1BBU1NXT1JEU19ET05UX01BVENIID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiO1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1NVQ0NFU1MgPSBcIlNpZ24gdXAgc3VjY2Vzc2Z1bC4gUGxlYXNlIHNpZ24gaW4uXCI7XHJcbmV4cG9ydCBjb25zdCBFUlJfQ09VUlNFX1RJVExFX1JFUVVJUkVEID0gXCJBIHRpdGxlIGlzIHJlcXVpcmVkLlwiO1xyXG5leHBvcnQgY29uc3QgRVJSX0NPVVJTRV9DT1NUX1JFUVVJUkVEID0gXCJDb3N0IGlzIHJlcXVpcmVkLlwiO1xyXG5cclxuLy8gUmVwbGllcyBmcm9tIHRoZSBiYWNrZW5kXHJcbmV4cG9ydCBjb25zdCBSRVNQX0FQSV9VU0VSX0NSRUFURUQgPSBcIlVzZXIgY3JlYXRlZFwiO1xyXG5cclxuLy8gUGxhY2Vob2xkZXIgdGV4dHNcclxuZXhwb3J0IGNvbnN0IENSRUFUT1JfQVJFQV9MSU5LX1RFWFQgPSBcIkNyZWF0ZVwiO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRPUl9BUkVBX1BBR0VfVElUTEUgPSBcIkRhc2hib2FyZFwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19USVRMRSA9IFwiTXkgQ291cnNlIFNpdGVcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfU1VCVElUTEUgPSBcIkxlYXJuIG5ldyBza2lsbHNcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfTE9HT19QQVRIID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfU0lHTklOX1RFWFQgPSBcIlNpZ24gaW5cIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfU0lHTlVQX1RFWFQgPSBcIlNpZ24gdXBcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfU0lHTk9VVF9URVhUID0gXCJTaWduIG91dFwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19DVVJSRU5DWV9VTklUID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWV9URVhUID0gXCJcIjtcclxuZXhwb3J0IGNvbnN0IEdFTkVSSUNfQ1VSUkVOQ1lfSVNPX0NPREUgPSBcIlwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19QQVlNRU5UX01FVEhPRCA9IFwiXCI7XHJcbmV4cG9ydCBjb25zdCBHRU5FUklDX1RIRU1FX0NPTE9SX1BSSU1BUlkgPSBcIlwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19USEVNRV9DT0xPUl9TRUNPTkRBUlkgPSBcIlwiO1xyXG5leHBvcnQgY29uc3QgR0VORVJJQ19DT0RFX0lOSkVDVElPTl9IRUFEID0gXCJcIjtcclxuXHJcbi8vIFVJIHRleHRzXHJcbmV4cG9ydCBjb25zdCBCVE5fTE9BRF9NT1JFID0gXCJMb2FkIE1vcmVcIjtcclxuZXhwb3J0IGNvbnN0IE1FRElBX1VQTE9BRF9CVVRUT05fVEVYVCA9IFwiVXBsb2FkXCI7XHJcbmV4cG9ydCBjb25zdCBNRURJQV9VUExPQURJTkcgPSBcIlVwbG9hZGluZy4uLlwiO1xyXG5leHBvcnQgY29uc3QgTUVESUFfQUREX05FV19CVVRUT05fVEVYVCA9IFwiQWRkIG5ld1wiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX0NBTkNFTF9URVhUID0gXCJDYW5jZWxcIjtcclxuZXhwb3J0IGNvbnN0IE1FRElBX1NFQVJDSF9JTlBVVF9QTEFDRUhPTERFUiA9IFwiU2VhcmNoIHlvdXIgbWVkaWFcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfTU9SRV9URVhUID0gXCJMb2FkIG1vcmVcIjtcclxuZXhwb3J0IGNvbnN0IE1BTkFHRV9NRURJQV9CVVRUT05fVEVYVCA9IFwiSW5zZXJ0IG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBNQU5BR0VfQ09VUlNFU19QQUdFX0hFQURJTkcgPSBcIkNvdXJzZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVTRVJTX01BTkFHRVJfUEFHRV9IRUFESU5HID0gXCJVc2Vyc1wiO1xyXG5leHBvcnQgY29uc3QgTkVXX0NPVVJTRV9QQUdFX0hFQURJTkcgPSBcIkVkaXQgY291cnNlXCI7XHJcbmV4cG9ydCBjb25zdCBNRURJQV9NQU5BR0VSX0RJQUxPR19USVRMRSA9IFwiQWRkIG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fTkVXX0NPVVJTRSA9IFwiTmV3XCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fRE9ORV9URVhUID0gXCJEb25lXCI7XHJcbmV4cG9ydCBjb25zdCBESUFMT0dfVElUTEVfRkVBVFVSRURfSU1BR0UgPSBcIlNlbGVjdCBmZWF0dXJlZCBpbWFnZVwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX1NFVF9GRUFUVVJFRF9JTUFHRSA9IFwiU2VsZWN0XCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fU0VMRUNUX01FRElBID0gXCJQaWNrIG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNX0ZJRUxEX0ZFQVRVUkVEX0lNQUdFID0gXCJQcm9tb3Rpb25hbCBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgQlROX0RFTEVURV9DT1VSU0UgPSBcIkRlbGV0ZSBjb3Vyc2VcIjtcclxuZXhwb3J0IGNvbnN0IEJUTl9BRERfVklERU8gPSBcIkFkZFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1ZJREVPX0RJQUxPR19USVRMRSA9IFwiRW1iZWQgYW4gb25saW5lIHZpZGVvXCI7XHJcbmV4cG9ydCBjb25zdCBDQVBUSU9OX1ZFUklGSUVEID0gXCJWZXJpZmllZFwiO1xyXG5leHBvcnQgY29uc3QgQ0FQVElPTl9VTlZFUklGSUVEID0gXCJOb3QgdmVyaWZpZWRcIjtcclxuZXhwb3J0IGNvbnN0IExBQkVMX05FV19QQVNTV09SRCA9IFwiTmV3IHBhc3N3b3JkXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fU0FWRSA9IFwiU2F2ZVwiO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0lTX0FETUlOID0gXCJBZG1pblwiO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX0lTX0NSRUFUT1IgPSBcIkNyZWF0b3JcIjtcclxuZXhwb3J0IGNvbnN0IFNXSVRDSF9BQ0NPVU5UX0FDVElWRSA9IFwiQWNjb3VudCBhY3RpdmVcIjtcclxuZXhwb3J0IGNvbnN0IExBQkVMX0NPTkZfUEFTU1dPUkQgPSBcIkNvbmZpcm0gcGFzc3dvcmRcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9CTE9HX1BPU1RTX1NFQ1RJT04gPSBcIkFydGljbGVzXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfQ09VUlNFU19TRUNUSU9OID0gXCJDb3Vyc2VzXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX1RJVExFID0gXCJUaXRsZVwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19TVUJUSVRMRSA9IFwiU3VidGl0bGVcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfU0VUVElOR1NfQ1VSUkVOQ1lfVU5JVCA9IFwiQ3VycmVuY3kgVW5pdFwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19DVVJSRU5DWV9JU09fQ09ERV9URVhUID0gXCJDdXJyZW5jeSBJU08gQ29kZVwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19MT0dPID0gXCJCcmFuZCBMb2dvXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX1BBR0VfSEVBRElORyA9IFwiU2V0dGluZ3NcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfQURNSU5fU0VUVElOR1NfU1RSSVBFX1NFQ1JFVCA9IFwiU3RyaXBlIFNlY3JldCBLZXlcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfQURNSU5fU0VUVElOR1NfUEFZUEFMX1NFQ1JFVCA9IFwiUGF5cGFsIFNlY3JldCBLZXlcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfQURNSU5fU0VUVElOR1NfUEFZVE1fU0VDUkVUID0gXCJQYXl0bSBTZWNyZXQgS2V5XCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX1NFQ1RJT05fR0VORVJBTCA9IFwiR2VuZXJhbFwiO1xyXG5leHBvcnQgY29uc3QgU0lURV9TRVRUSU5HU19TRUNUSU9OX1BBWU1FTlQgPSBcIlBheW1lbnRcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfQURNSU5fU0VUVElOR1NfUEFZTUVOVF9NRVRIT0QgPSBcIlBheW1lbnQgTWV0aG9kXCI7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1NFVFRJTkdTX1NUUklQRV9QVUJMSVNIQUJMRV9LRVlfVEVYVCA9XHJcbiAgXCJTdHJpcGUgUHVibGlzaGFibGUgS2V5XCI7XHJcbmV4cG9ydCBjb25zdCBGUkVFX0NPU1QgPSBcIkZSRUVcIjtcclxuZXhwb3J0IGNvbnN0IFNJREVCQVJfVEVYVF9DT1VSU0VfQUJPVVQgPSBcIkFib3V0IHRoaXMgY291cnNlXCI7XHJcbmV4cG9ydCBjb25zdCBSRUFDVF9DT01QT05FTlRfQ1JBU0hFRCA9XHJcbiAgXCJXZSd2ZSBlbmNvdW50ZXJlZCBhIHByb2JsZW0gaW4gc2hvd2luZyB0aGUgY29udGVudFwiO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfRElBTE9HX1RJVExFID0gXCJDaGVja291dFwiO1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9NT0RBTF9QQVlNRU5UX0RFVEFJTFNfSEVBREVSID0gXCJQYXltZW50IGRldGFpbHNcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTU9EQUxfQ09TVF9QUkVGSVggPSBcIkNvc3RcIjtcclxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfTU9EQUxfUEFZX05PV19CVVRUT05fQ0FQVElPTiA9IFwiUGF5IG5vd1wiO1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9JTklUSUFUSU9OX0ZBSUxFRCA9XHJcbiAgXCJQYXltZW50IHByb2Nlc3NpbmcgZmFpbGVkLiBQbGVhc2UgY2xvc2UgdGhpcyBwb3B1cCBhbmQgdHJ5IGFnYWluLlwiO1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVF9WRVJJRklDQVRJT05fRkFJTEVEID1cclxuICBcIldlIHdlcmUgbm90IGFibGUgdG8gdmVyaWZ5IHlvdXIgcGF5bWVudC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcclxuZXhwb3J0IGNvbnN0IFNUUklQRV9QVUJMSVNIQUJMRV9LRVlfRU1QVFkgPVxyXG4gIFwiU3RyaXBlIGNvbmZpZ3VyYXRpb24gaXMgaW52YWxpZC4gUGxlYXNlIGNvbnRhY3Qgc2l0ZSBhZG1pbi5cIjtcclxuZXhwb3J0IGNvbnN0IENBUFRJT05fVFJZX0FHQUlOID0gXCJUcnkgYWdhaW5cIjtcclxuZXhwb3J0IGNvbnN0IENBUFRJT05fQ0xPU0UgPSBcIkNsb3NlXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FESU5HID0gXCJMb2FkaW5nXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fTkVXX0xFU1NPTl9URVhUID0gXCJMZXNzb25cIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9ERUxFVEVfTEVTU09OX1RFWFQgPSBcIkRlbGV0ZVwiO1xyXG5leHBvcnQgY29uc3QgQ09VUlNFX0RFVEFJTFNfQ0FSRF9IRUFERVIgPSBcIkRldGFpbHNcIjtcclxuZXhwb3J0IGNvbnN0IERBTkdFUl9aT05FX0hFQURFUiA9IFwiRGFuZ2VyIHpvbmVcIjtcclxuZXhwb3J0IGNvbnN0IERBTkdFUl9aT05FX0RFU0NSSVBUSU9OID0gXCJUaGlzIGFjdGlvbiBpcyBpcnJldmVyc2libGUuXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09VUlNFX1BPUFVQX0hFQURFUiA9IFwiRGVsZXRlIGNvdXJzZT9cIjtcclxuZXhwb3J0IGNvbnN0IFBPUFVQX09LX0FDVElPTiA9IFwiWWVzXCI7XHJcbmV4cG9ydCBjb25zdCBQT1BVUF9DQU5DRUxfQUNUSU9OID0gXCJOb1wiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fU0VDVElPTl9IRUFERVIgPSBcIlNpZ24gSW5cIjtcclxuZXhwb3J0IGNvbnN0IExPR0lOX1NFQ1RJT05fQlVUVE9OID0gXCJTaWduIGluXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9JTlNURUFEX0JVVFRPTiA9IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU0VDVElPTl9IRUFERVIgPSBcIkNyZWF0ZSBhbiBhY2NvdW50XCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU0VDVElPTl9CVVRUT04gPSBcIkpvaW5cIjtcclxuZXhwb3J0IGNvbnN0IE1FRElBX01BTkFHRVJfUEFHRV9IRUFESU5HID0gXCJNZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgQlVUVE9OX1NFQVJDSCA9IFwiU2VhcmNoXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fQUREX0ZJTEUgPSBcIlNlbGVjdCBhIGZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IEZJTEVfVVBMT0FEX1NVQ0NFU1MgPSBcIkZpbGUgdXBsb2FkZWRcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9ZT1VSX01FRElBID0gXCJZb3VyIG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBMRVNTT05fRURJVE9SX0hFQURFUiA9IFwiTGVzc29uXCI7XHJcbmV4cG9ydCBjb25zdCBCTE9HX1BPU1RfU1dJVENIID0gXCJCbG9nXCI7XHJcbmV4cG9ydCBjb25zdCBET1dOTE9BREFCTEVfU1dJVENIID0gXCJEb3dubG9hZGFibGVcIjtcclxuZXhwb3J0IGNvbnN0IFRZUEVfRFJPUERPV04gPSBcIlR5cGVcIjtcclxuZXhwb3J0IGNvbnN0IExFU1NPTl9DT05URU5UX0hFQURFUiA9IFwiVGV4dCBDb250ZW50XCI7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1VSTF9MQUJFTCA9IFwiTWVkaWEgY29udGVudFwiO1xyXG5leHBvcnQgY29uc3QgTUVESUFfTUFOQUdFUl9ZT1VSX01FRElBX0hFQURFUiA9IFwiWW91ciBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgRElBTE9HX1NFTEVDVF9CVVRUT04gPSBcIlNlbGVjdFwiO1xyXG5leHBvcnQgY29uc3QgTEVTU09OX1JFUVVJUkVTX0VOUk9MTE1FTlQgPSBcIkF2YWlsYWJsZSB0byBvbmx5IGVucm9sbGVkIHN0dWRlbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTEVTU09OX1BPUFVQX0hFQURFUiA9IFwiRGVsZXRlIGxlc3NvblwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfTEVTU09OX0RFTEVURUQgPSBcIkxlc3NvbiBkZWxldGVkXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9MRVNTT05fU0FWRUQgPSBcIkxlc3NvbiBkZXRhaWxzIHNhdmVkXCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9DT1VSU0VfU0FWRUQgPSBcIkNvdXJzZSBkZXRhaWxzIHNhdmVkXCI7XHJcbmV4cG9ydCBjb25zdCBFTlJPTExfSU5fVEhFX0NPVVJTRSA9XHJcbiAgXCJQbGVhc2UgZW5yb2xsIGluIHRoZSBjb3Vyc2UgdG8gYWNjZXNzIHRoaXMgbGVzc29uLlwiO1xyXG5leHBvcnQgY29uc3QgVVNFUl9FUlJPUl9IRUFERVIgPSBcIllpa2VzIVwiO1xyXG5leHBvcnQgY29uc3QgRU5ST0xMX0JVVFRPTl9URVhUID0gXCJFbnJvbGxcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9ERUxFVEVfTUVESUEgPSBcIkRlbGV0ZVwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX01FRElBX1BPUFVQX0hFQURFUiA9IFwiRGVsZXRlIG1lZGlhXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfRURJVElOR19NRURJQSA9IFwiRWRpdCBtZWRpYVwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX0VESVRJTkdfVVNFUiA9IFwiRWRpdCB1c2VyXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfTUVESUFfUFJFVklFVyA9IFwiUHJldmlld1wiO1xyXG5leHBvcnQgY29uc3QgUFJFVklFV19QREZfRklMRSA9IFwiT3BlbiBpbiBhIG5ldyB0YWJcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX01FRElBX0RFTEVURUQgPSBcIk1lZGlhIGRlbGV0ZWRcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX01FRElBX1VQREFURUQgPSBcIk1lZGlhIGRldGFpbHMgdXBkYXRlZFwiO1xyXG5leHBvcnQgY29uc3QgUEFHRV9IRUFERVJfQUxMX0NPVVJTRVMgPSBcIkNvdXJzZXNcIjtcclxuZXhwb3J0IGNvbnN0IFBBR0VfSEVBREVSX0FMTF9QT1NUUyA9IFwiQXJ0aWNsZXNcIjtcclxuZXhwb3J0IGNvbnN0IENPVVJTRV9UWVBFX0JMT0cgPSBcIlBvc3RcIjtcclxuZXhwb3J0IGNvbnN0IENPVVJTRV9UWVBFX0NPVVJTRSA9IFwiQ291cnNlXCI7XHJcbmV4cG9ydCBjb25zdCBDT1VSU0VfQ1JFQVRPUl9QUkVGSVggPSBcIkJ5XCI7XHJcbmV4cG9ydCBjb25zdCBDT1VSU0VfRURJVE9SX0RFU0NSSVBUSU9OID0gXCJEZXNjcmlwdGlvblwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfU0VUVElOR1NfU0FWRUQgPSBcIlNldHRpbmdzIHNhdmVkXCI7XHJcbmV4cG9ydCBjb25zdCBFTlJPTExFRF9DT1VSU0VTX0hFQURFUiA9IFwiRW5yb2xsZWQgY291cnNlc1wiO1xyXG5leHBvcnQgY29uc3QgU0lURV9DVVNUT01JU0FUSU9OU19TRVRUSU5HX0hFQURFUiA9IFwiQ3VzdG9taXphdGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IFNJVEVfQ1VTVE9NSVNBVElPTlNfU0VUVElOR19DT0RFSU5KRUNUSU9OX0hFQUQgPVxyXG4gIFwiQ29kZSBJbmplY3Rpb24gaW4gPGhlYWQ+XCI7XHJcbmV4cG9ydCBjb25zdCBESVNDQVJEX0NPVVJTRV9DSEFOR0VTX1BPUFVQX0hFQURFUiA9XHJcbiAgXCJEaXNjYXJkIGNoYW5nZXMgbWFkZSB0byB0aGUgY291cnNlP1wiO1xyXG5leHBvcnQgY29uc3QgRkVBVFVSRURfU0VDVElPTl9IRUFERVIgPSBcIkZlYXR1cmVkIFJlc291cmNlc1wiO1xyXG5leHBvcnQgY29uc3QgQ0FSRF9IRUFERVJfUEFHRV9MQVlPVVQgPSBcIlBhZ2UgTGF5b3V0XCI7XHJcbmV4cG9ydCBjb25zdCBDQVJEX0hFQURFUl9USEVNRSA9IFwiVGhlbWVcIjtcclxuZXhwb3J0IGNvbnN0IENBUkRfREVTQ1JJUFRJT05fUEFHRV9MQVlPVVQgPVxyXG4gIFwiVXNlIHRoZSAnKycgYnV0dG9ucyB0byBhZGQgeW91ciBmYXZvcml0ZSBjb21wb25lbnRzIHRvIHRoZSBkZXNpcmVkIHNlY3Rpb25zIG9mIHlvdXIgcGFnZS5cIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01QT05FTlRfUE9QVVBfSEVBREVSID0gXCJBZGQgY29tcG9uZW50XCI7XHJcbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9DSEFOR0VTX1NBVkVEID0gXCJDaGFuZ2VzIHNhdmVkXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJIRUFERVJfQ09VUlNFU19TRUNUSU9OID1cclxuICBcIkxlYXJuIG5ldyBza2lsbHMgd2l0aCBvdXIgY2FyZWZ1bGx5IGNyYWZ0ZWQgY291cnNlcy5cIjtcclxuZXhwb3J0IGNvbnN0IFNVQkhFQURFUl9GRUFUVVJFRF9TRUNUSU9OID1cclxuICBcIkhhbmQgcGlja2VkIHJlc291cmNlcyBieSB0aGUgZWRpdG9ycy5cIjtcclxuZXhwb3J0IGNvbnN0IFNVQkhFQURFUl9USEVNRV9BRERfVEhFTUUgPSBcIkluc3RhbGwgbmV3IHRoZW1lXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJIRUFERVJfVEhFTUVfQURERURfVEhFTUUgPSBcIkluc3RhbGxlZCB0aGVtZXNcIjtcclxuZXhwb3J0IGNvbnN0IFNVQkhFQURFUl9USEVNRV9BRERfVEhFTUVfSU5QVVRfTEFCRUwgPSBcIlRoZW1lIEVkaXRvclwiO1xyXG5leHBvcnQgY29uc3QgU1VCSEVBREVSX1RIRU1FX0FERF9USEVNRV9JTlBVVF9QTEFDRUhPTERFUiA9XHJcbiAgXCJQYXN0ZSB2YWxpZCBKU09OIGhlcmVcIjtcclxuZXhwb3J0IGNvbnN0IFNVQkhFQURFUl9USEVNRV9JTlNUQUxMRURfVEhFTUVTID0gXCJJbnN0YWxsZWQgdGhlbWVzXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fR0VUX1RIRU1FUyA9IFwiR2V0IG1vcmUgdGhlbWVzXCI7XHJcbmV4cG9ydCBjb25zdCBFUlJPUl9TTkFDS0JBUl9QUkVGSVggPSBcIkVycm9yXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fVEhFTUVfQVBQTFkgPSBcIkFwcGx5XCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fVEhFTUVfVU5JTlNUQUxMID0gXCJVbmluc3RhbGxcIjtcclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9USEVNRV9JTlNUQUxMID0gXCJJbnN0YWxsXCI7XHJcbmV4cG9ydCBjb25zdCBCVVRUT05fVEhFTUVfUkVNSVggPSBcIlJlbWl4XCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfVEhFTUVfUE9QVVBfSEVBREVSID0gXCJVbmluc3RhbGwgdGhlbWVcIjtcclxuZXhwb3J0IGNvbnN0IEFQUExZX1RIRU1FX1BPUFVQX0hFQURFUiA9IFwiQXBwbHkgdGhlbWVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTUlYRURfVEhFTUVfUFJFRklYID0gXCJSZW1peFwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfVEhFTUVfQ09QSUVEID0gXCJUaGVtZSByZWFkeSB0byBlZGl0XCI7XHJcbmV4cG9ydCBjb25zdCBOT19USEVNRVNfSU5TVEFMTEVEID0gXCJObyB0aGVtZXMgYXJlIGluc3RhbGxlZFwiO1xyXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfVEhFTUVfSU5TVEFMTEVEID0gXCJUaGVtZSBpbnN0YWxsZWRcIjtcclxuZXhwb3J0IGNvbnN0IENPTlNPTEVfTUVTU0FHRV9USEVNRV9JTlZBTElEID1cclxuICBcIlRoZSBhY3RpdmUgTVVJIHRoZW1lIGlzIGludmFsaWQuIEZhbGxpbmcgYmFjayB0byB0aGUgZGVmYXVsdCB0aGVtZS5cIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX1RIRU1FX0FQUExJRUQgPSBcIlRoZW1lIGFwcGxpZWRcIjtcclxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX1RIRU1FX1VOSU5TVEFMTEVEID0gXCJUaGVtZSB1bmluc3RhbGxlZFwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX05BVklHQVRJT04gPSBcIk1lbnVzXCI7XHJcbmV4cG9ydCBjb25zdCBMQUJFTF9OQVZJR0FUSU9OX0xJTktfVEVYVCA9IFwiVGV4dFwiO1xyXG5leHBvcnQgY29uc3QgTEFCRUxfTkFWSUdBVElPTl9MSU5LX0RFU1RJTkFUSU9OID0gXCJMb2NhdGlvblwiO1xyXG5leHBvcnQgY29uc3QgTElOS19EUk9QRE9XTiA9IFwiQ2F0ZWdvcnlcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9ORVdfTElOS19CVVRUT04gPSBcIkFkZCBuZXcgbGlua1wiO1xyXG5leHBvcnQgY29uc3QgTEFCRUxfTkFWSUdBVElPTl9MSU5LX05FV1RBQiA9IFwiTmV3IHRhYlwiO1xyXG5leHBvcnQgY29uc3QgV0lER0VUU19QQUdFX0hFQURFUiA9IFwiV2lkZ2V0c1wiO1xyXG5leHBvcnQgY29uc3QgUEFZTUVOVFNfU0hJUFBJTkdfQUREUkVTU19TRUNUSU9OX0hFQURFUiA9IFwiU2hpcHBpbmcgQWRkcmVzc1wiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX1NFQ1RJT05fUEFZTUVOVF9DT05GSVJNQVRJT05fV0VCSE9PSyA9XHJcbiAgXCJQYXltZW50IENvbmZpcm1hdGlvbiBXZWJob29rIFVSTFwiO1xyXG5leHBvcnQgY29uc3QgU1VCSEVBREVSX1NFQ1RJT05fUEFZTUVOVF9DT05GSVJNQVRJT05fV0VCSE9PSyA9XHJcbiAgXCJZb3VyIHBheW1lbnQgcHJvY2Vzc29yIHNlbmRzIG91dCBub3RpZmljYXRpb25zIGFib3V0IHB1cmNoYXNlcy4gQ291cnNlTGl0IG5lZWRzIHRob3NlIG5vdGlmaWNhdGlvbnMgdG8gY29ycmVjdGx5IHJlZmxlY3QgdXNlciBwdXJjaGFzZXMuIFJpZ2h0IGNsaWNrIHRoZSBmb2xsb3dpbmcgbGluayBhbmQgY29weSB0aGUgbGluayBhZGRyZXNzLiBQYXN0ZSB0aGF0IGludG8geW91ciBwYXltZW50IHByb2Nlc3NvcidzIHdlYmhvb2sgc2V0dGluZ3MuXCI7XHJcbmV4cG9ydCBjb25zdCBQVVJDSEFTRV9TVEFUVVNfUEFHRV9IRUFERVIgPSBcIlB1cmNoYXNlIFN0YXR1c1wiO1xyXG5leHBvcnQgY29uc3QgTUFJTl9NRU5VX0lURU1fREFTSEJPQVJEID0gXCJEYXNoYm9hcmRcIjtcclxuZXhwb3J0IGNvbnN0IE1BSU5fTUVOVV9JVEVNX1BST0ZJTEUgPSBcIlByb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9TRUNUSU9OX01BSU5fQ09OVEVOVCA9IFwiTWFpbiBDb250ZW50XCI7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfU0VDVElPTl9GT09URVJfTEVGVCA9IFwiTGVmdCBTZWN0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfU0VDVElPTl9GT09URVJfUklHSFQgPSBcIlJpZ2h0IFNlY3Rpb25cIjtcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9TRUNUSU9OX1RPUCA9IFwiVG9wXCI7XHJcbmV4cG9ydCBjb25zdCBMQVlPVVRfU0VDVElPTl9GT09URVIgPSBcIkZvb3RlclwiO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUX1NFQ1RJT05fQk9UVE9NID0gXCJCb3R0b21cIjtcclxuZXhwb3J0IGNvbnN0IExBWU9VVF9TRUNUSU9OX0FTSURFID0gXCJBc2lkZVwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1RBVFVTX1NVQ0NFU1MgPSBcIlBheW1lbnQgQ29uZmlybWVkLlwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1RBVFVTX1NVQ0NFU1NfREVUQUlMUyA9XHJcbiAgXCJUaGFuayB5b3UuIFlvdSBjYW4gbm93IGhlYWQgb3ZlciB0byB5b3VyIGNvdXJzZSBhbmQgc3RhcnQgbGVhcm5pbmcuXCI7XHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9TVEFUVVNfSU5JVElBVEVEID0gXCJQYXltZW50IE5vdCBZZXQgQ29uZmlybWVkLlwiO1xyXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fU1RBVFVTX0ZBSUxFRCA9IFwiUGF5bWVudCBGYWlsZWQuXCI7XHJcbmV4cG9ydCBjb25zdCBUUkFOU0FDVElPTl9TVEFUVVNfRkFJTEVEX0RFVEFJTFMgPVxyXG4gIFwiVGhlIHBheW1lbnQgc2VydmljZSBwcm92aWRlciB3YXMgdW5hYmxlIHRvIHByb2Nlc3MgeW91ciBwYXltZW50LiBQbGVhc2UgZ28gYmFjayBhbmQgdHJ5IGFnYWluLlwiO1xyXG5leHBvcnQgY29uc3QgVklTSVRfQ09VUlNFX0JVVFRPTiA9IFwiVmlzaXQgY291cnNlXCI7XHJcbmV4cG9ydCBjb25zdCBWSVNJVF9QT1NUX0JVVFRPTiA9IFwiVmlzaXQgcG9zdFwiO1xyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBWU1FTlRfQlVUVE9OID0gXCJSZS1jaGVjayBQYXltZW50IFN0YXR1c1wiO1xyXG5leHBvcnQgY29uc3QgUFVSQ0hBU0VfSURfSEVBREVSID0gXCJQdXJjaGFzZSBJRFwiO1xyXG5leHBvcnQgY29uc3QgUEFHRV9IRUFERVJfRkVBVFVSRUQgPSBcIkZlYXR1cmVkIENvbnRlbnRcIjtcclxuZXhwb3J0IGNvbnN0IEJUTl9WSUVXX0FMTCA9IFwiVmlldyBhbGxcIjtcclxuZXhwb3J0IGNvbnN0IEVNUFRZX0NPVVJTRVNfTElTVF9BRE1JTiA9XHJcbiAgXCJDcmVhdGUgeW91ciBmaXJzdCBjb3Vyc2UgYnkgY2xpY2tpbmcgdGhlICsgYnV0dG9uIG9uIHRoZSB0b3AgcmlnaHQuXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfUkVTRVRfUEFTU1dPUkQgPSBcIlJlc2V0IHBhc3N3b3JkXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfREVTSUdOID0gXCJBcHBlYXJhbmNlXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfWU9VUl9QUk9GSUxFID0gXCJZb3VyIFByb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfUEFHRV9NRVNTQUdFX05PVF9MT0dHRURfSU4gPSBcInRvIHNlZSB5b3VyIHByb2ZpbGUuXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX1BBR0VfSEVBREVSID0gXCJQcm9maWxlXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX01ZX0NPVVJTRVMgPSBcIk15IENvdXJzZXNcIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfUEFHRV9OT1RfRU5ST0xMRUQgPSBcIllvdSBhcmUgbm90IGVucm9sbGVkIGluIGFueSBjb3Vyc2UuXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX1BBR0VfQlJPV1NFX0NPVVJTRVNfVEVYVCA9IFwiQnJvd3NlIG91ciBjb3Vyc2VzXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX1NFQ1RJT05fREVUQUlMU19OQU1FID0gXCJOYW1lXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX1NFQ1RJT05fREVUQUlMU19FTUFJTCA9IFwiRW1haWxcIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfU0VDVElPTl9ERVRBSUxTX0JJTyA9IFwiQmlvXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFX1NFQ1RJT05fREVUQUlMU19CSU9fRU1QVFkgPVxyXG4gIFwiVGhlIHVzZXIgaGFzIG5vdCBmaWxsZWQgdGhlIGJpby5cIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCB2YXIgTXlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBzaXRlSW5mbzoge30sXHJcbiAgICBwcm9maWxlOiB7XHJcbiAgICAgICAgaXNDcmVhdG9yOiBmYWxzZSxcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGF1dGhQcm9wOiB7fSxcclxuICAgIG5hdmlnYXRpb246IHt9LFxyXG4gICAgbGF5b3V0OiB7fVxyXG5cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgTXlDb250ZXh0XHJcblxyXG5leHBvcnQgY29uc3QgTXlQcm92aWRlciA9IChjaGlsZHJlbikgPT4ge1xyXG4gICAgcmV0dXJuIDxNeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NoaWxkcmVufSAvPlxyXG59IiwiLyoqXHJcbiAqIFByb3ZpZGVzIGNvb2tpZSBiYXNlZCBzZXNzaW9uIG1hbmFnZW1lbnQgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoeyBrZXksIHZhbHVlLCBkb21haW4gfSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIENvb2tpZXMuc2V0KGtleSwgdmFsdWUsIHsgZXhwaXJlczogMzY1LCBkb21haW4gfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9ICh7IGtleSwgZG9tYWluIH0pID0+IHtcclxuICByZXR1cm4gcHJvY2Vzcy5icm93c2VyID8gQ29va2llcy5nZXQoa2V5LCB7IGRvbWFpbiB9KSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKHsga2V5LCBkb21haW4gfSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIENvb2tpZXMucmVtb3ZlKGtleSwgeyBkb21haW4gfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQge1xyXG4gIFVSTF9FWFRFTlRJT05fUE9TVFMsXHJcbiAgVVJMX0VYVEVOVElPTl9DT1VSU0VTLFxyXG59IGZyb20gXCIuLi9jb25maWcvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0IGFzIFRleHRFZGl0b3IgfSBmcm9tIFwiQGNvdXJzZWxpdC9jb21wb25lbnRzLWxpYnJhcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeUdyYXBoUUwgPSBhc3luYyAodXJsLCBxdWVyeSwgdG9rZW4pID0+IHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHRva2VuXHJcbiAgICAgID8ge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICAgIDogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSB9KSxcclxuICB9O1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XHJcbiAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvcnNbMF0ubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5R3JhcGhRTFdpdGhVSUVmZmVjdHMgPSAoXHJcbiAgYmFja2VuZCxcclxuICBkaXNwYXRjaCxcclxuICBuZXR3b3JrQWN0aW9uLFxyXG4gIHRva2VuXHJcbikgPT4gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHcmFwaFFMKGAke2JhY2tlbmR9L2dyYXBoYCwgcXVlcnksIHRva2VuKTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGRpc3BhdGNoKG5ldHdvcmtBY3Rpb24oZmFsc2UpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0dGVkTG9jYWxlRGF0ZSA9IChlcG9jaFN0cmluZykgPT5cclxuICBuZXcgRGF0ZShOdW1iZXIoZXBvY2hTdHJpbmcpKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9KTtcclxuXHJcbi8vIFJlZ2V4IGNvcGllZCBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDg2NzUxNjAvOTQyNTg5XHJcbmV4cG9ydCBjb25zdCBtYWtlR3JhcGhRTFF1ZXJ5U3RyaW5nRnJvbUpTT2JqZWN0ID0gKG9iaikgPT5cclxuICBKU09OLnN0cmluZ2lmeShvYmopLnJlcGxhY2UoL1wiKFteKFwiKVwiXSspXCI6L2csIFwiJDE6XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm11bGF0ZU1lZGlhVXJsID0gKFxyXG4gIGJhY2tlbmQsXHJcbiAgbWVkaWFJRCxcclxuICBnZW5lcmF0ZVRodW1ibmFpbFVybCA9IGZhbHNlXHJcbikgPT5cclxuICBtZWRpYUlEXHJcbiAgICA/IGAke2JhY2tlbmR9L21lZGlhLyR7bWVkaWFJRH0ke2dlbmVyYXRlVGh1bWJuYWlsVXJsID8gXCI/dGh1bWI9MVwiIDogXCJcIn1gXHJcbiAgICA6IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybXVsYXRlQ291cnNlVXJsID0gKGNvdXJzZSwgYmFja2VuZCA9IFwiXCIpID0+XHJcbiAgYCR7YmFja2VuZH0vJHtjb3Vyc2UuaXNCbG9nID8gVVJMX0VYVEVOVElPTl9QT1NUUyA6IFVSTF9FWFRFTlRJT05fQ09VUlNFU30vJHtjb3Vyc2UuY291cnNlSWRcclxuICB9LyR7Y291cnNlLnNsdWd9YDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0RGVzY3JpcHRpb25TbmlwcGV0ID0gKHJhd0RyYWZ0SlNDb250ZW50U3RhdGUpID0+IHtcclxuICBjb25zdCBmaXJzdFNlbnRlbmNlID0gVGV4dEVkaXRvci5oeWRyYXRlKHsgZGF0YTogcmF3RHJhZnRKU0NvbnRlbnRTdGF0ZSB9KVxyXG4gICAgLmdldEN1cnJlbnRDb250ZW50KClcclxuICAgIC5nZXRQbGFpblRleHQoKVxyXG4gICAgLnNwbGl0KFwiLlwiKVswXTtcclxuXHJcbiAgcmV0dXJuIGZpcnN0U2VudGVuY2UgPyBmaXJzdFNlbnRlbmNlICsgXCIuXCIgOiBmaXJzdFNlbnRlbmNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyYXBoUUxRdWVyeUZpZWxkcyA9IChcclxuICBqc09iaixcclxuICBmaWVsZHNOb3RQdXRCZXR3ZWVuUXVvdGVzID0gW11cclxuKSA9PiB7XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gXCJ7XCI7XHJcbiAgZm9yIChjb25zdCBpIG9mIE9iamVjdC5rZXlzKGpzT2JqKSkge1xyXG4gICAgaWYgKGpzT2JqW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcXVlcnlTdHJpbmcgKz0gZmllbGRzTm90UHV0QmV0d2VlblF1b3Rlcy5pbmNsdWRlcyhpKVxyXG4gICAgICAgID8gYCR7aX06ICR7anNPYmpbaV19LGBcclxuICAgICAgICA6IGAke2l9OiBcIiR7anNPYmpbaV19XCIsYDtcclxuICAgIH1cclxuICB9XHJcbiAgcXVlcnlTdHJpbmcgKz0gXCJ9XCI7XHJcblxyXG4gIHJldHVybiBxdWVyeVN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3RDb250YWluaW5nT25seUNoYW5nZWRGaWVsZHMgPSAoYmFzZWxpbmUsIG9iaikgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gIGZvciAoY29uc3QgaSBvZiBPYmplY3Qua2V5cyhiYXNlbGluZSkpIHtcclxuICAgIGlmIChiYXNlbGluZVtpXSAhPT0gb2JqW2ldKSB7XHJcbiAgICAgIHJlc3VsdFtpXSA9IG9ialtpXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcmVPYmplY3RzRGlmZmVyZW50ID0gKGJhc2VsaW5lLCBvYmopID0+IHtcclxuICBjb25zdCBvbmx5Q2hhbmdlZEZpZWxkcyA9IGdldE9iamVjdENvbnRhaW5pbmdPbmx5Q2hhbmdlZEZpZWxkcyhiYXNlbGluZSwgb2JqKTtcclxuICByZXR1cm4gISFPYmplY3Qua2V5cyhvbmx5Q2hhbmdlZEZpZWxkcykubGVuZ3RoO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFkZHJlc3MgPSAoaG9zdCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkb21haW46IGV4dHJhY3REb21haW5Gcm9tVVJMKGhvc3QpLFxyXG4gICAgYmFja2VuZDogZ2V0QmFja2VuZEFkZHJlc3MoaG9zdCksXHJcbiAgICBmcm9udGVuZDogYGh0dHA6Ly8ke2hvc3R9YCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJhY2tlbmRBZGRyZXNzID0gKGhvc3QpID0+IHtcclxuICBjb25zdCBkb21haW4gPSBleHRyYWN0RG9tYWluRnJvbVVSTChob3N0KTtcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcIm5vdF93b3JkX2luX3Byb2R1Y3Rpb25cIikge1xyXG4gICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LklOU0VDVVJFID09PSBcInRydWVcIiA/IFwiaHR0cFwiIDogXCJodHRwc1wiXHJcbiAgICAgIH06Ly8ke2RvbWFpbn0vYXBpYDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBodHRwOi8vJHtkb21haW59OjgwMDBgO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGV4dHJhY3REb21haW5Gcm9tVVJMID0gKGhvc3QpID0+IHtcclxuICByZXR1cm4gaG9zdC5zcGxpdChcIjpcIilbMF07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5cbmltcG9ydCB7IFByb3ZpZGVyLCB1c2VTdG9yZSB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uL2xpYi9zZXNzaW9uLmpzXCI7XG5pbXBvcnQgeyBKV1RfQ09PS0lFX05BTUUsIFVTRVJJRF9DT09LSUVfTkFNRSB9IGZyb20gXCIuLi9jb25maWcvY29uc3RhbnRzLmpzXCI7XG4vL2ltcG9ydCB7XG4vLyAgc2lnbmVkSW4sXG4vLyAgdXBkYXRlU2l0ZUluZm8sXG4vLyAgYXV0aEhhc0JlZW5DaGVja2VkLFxuLy8gIHVwZGF0ZVNpdGVUaGVtZSxcbi8vICB1cGRhdGVTaXRlTGF5b3V0LFxuLy8gIHVwZGF0ZVNpdGVOYXZpZ2F0aW9uLFxuLy8gIHVwZGF0ZUJhY2tlbmQsXG4vL30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMuanNcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIHVuc3RhYmxlX2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgeyByZXNwb25zaXZlRm9udFNpemVzLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgQ09OU09MRV9NRVNTQUdFX1RIRU1FX0lOVkFMSUQgfSBmcm9tIFwiLi4vY29uZmlnL3N0cmluZ3MuanNcIjtcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi4vY29uZmlnL2RlZmF1bHRTdGF0ZSdcbi8vaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3JlZHV4L3N0b3JlLmpzXCI7XG4vL2ltcG9ydCBcIkBjb3Vyc2VsaXQvcmljaC10ZXh0L2Rpc3QvbWFpbi5jc3NcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgQ29kZUluamVjdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL1B1YmxpYy9Db2RlSW5qZWN0b3IuanNcIikpXG5cbmltcG9ydCB7IGdldEJhY2tlbmRBZGRyZXNzIH0gZnJvbSBcIi4uL2xpYi91dGlscy5qc1wiO1xuaW1wb3J0IE15Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L015Q29udGV4dCc7XG5cbmNvbnN0IG11aVRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7IG1haW46ICcjMkEzRjU0JyB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyNlYzRkMzcnLFxuICAgICAgZGFyazogJyNlZWUnXG4gICAgfSxcbiAgICBlcnJvcjogeyBtYWluOiAnI2ZmMTc0NCcgfSxcbiAgICBiYWNrZ3JvdW5kOiB7IGRlZmF1bHQ6ICcjZjVmNWY1JyB9LFxuICAgIGNvbnRyYXN0VGhyZXNob2xkOiAzXG4gIH0sXG4gIG92ZXJyaWRlczogeyBkcmF3ZXJXaWR0aDogMjQwIH1cbn1cbikpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoVXNlclByb2ZpbGUodXNlcklkKSB7XG4gIHRyeSB7XG4gICAgLy9kaXNwYXRjaChuZXR3b3JrQWN0aW9uKHRydWUpKTtcbiAgICBjb25zdCB1c2VySUQgPSB1c2VySWQgIC8vfHwgZ2V0U3RhdGUoKS5wcm9maWxlLmVtYWlsO1xuXG4gICAgY29uc3QgcXVlcnkgPSBgXG4gICAgICB7IHByb2ZpbGU6IGdldFVzZXIoZW1haWw6IFwiJHt1c2VySUR9XCIpIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGlzQ3JlYXRvcixcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBpc0FkbWluLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHB1cmNoYXNlcyxcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgYmlvXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGA7XG4gICAgY29uc3QgZmV0Y2ggPSBuZXcgRmV0Y2hCdWlsZGVyKClcbiAgICAgIC5zZXRVcmwoYCR7ZGVmYXVsdFN0YXRlLmFkZHJlc3MuYmFja2VuZH0vZ3JhcGhgKVxuICAgICAgLnNldFBheWxvYWQocXVlcnkpXG4gICAgICAuc2V0SXNHcmFwaFFMRW5kcG9pbnQodHJ1ZSlcbiAgICAgIC8vLnNldEF1dGhUb2tlbihkZWZhdWx0U3RhdGUuYXV0aC50b2tlbilcbiAgICAgIC5idWlsZCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2guZXhlYygpO1xuICAgIC8vZGlzcGF0Y2gobmV0d29ya0FjdGlvbihmYWxzZSkpO1xuICAgIC8vZGlzcGF0Y2godXBkYXRlUHJvZmlsZShyZXNwb25zZS5wcm9maWxlKSk7XG5cbiAgICBjb25zb2xlLmxvZygncHJvcGYnLCByZXNwb25zZS5wcm9maWxlKVxuICAgIHJldHVybiByZXNwb25zZS5wcm9maWxlXG4gIH1cbiAgLy8gZmluYWxseSB7ZGlzcGF0Y2gobmV0d29ya0FjdGlvbihmYWxzZSkpICAgIH1cbiAgY2F0Y2ggeyByZXR1cm4gbnVsbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRJbih1c2VyaWQsIHRva2VuKSB7XG4gIHJldHVybiByZWZyZXNoVXNlclByb2ZpbGUodXNlcmlkKVxufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShtdWlUaGVtZSk7XG4gIGNvbnN0IFtzaXRlSW5mbywgc2V0U2l0ZUluZm9dID0gdXNlU3RhdGUoe1xuICAgIHRpdGxlOiBcIkZvcmdldGlvblwiLFxuICAgIHN1YnRpdGxlOiBcIkxlYXJuaW5nIEJhc2VzIGluIE5vdCBGb3JnZXRpb25cIixcbiAgICBsb2dvcGF0aDogXCI2MDY1ZTBmYzg5MWI2YzJkY2M5YzZkNzRcIixcbiAgICBjdXJyZW5jeVVuaXQ6IFwiZFwiLFxuICAgIGN1cnJlbmN5SVNPQ29kZTogXCJhXCIsXG4gIH0pXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKHtcbiAgICBpc0NyZWF0b3I6IGZhbHNlLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgaWQ6IFwiXCIsXG4gICAgZmV0Y2hlZDogZmFsc2UsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgLy9wdXJjaGFzZXM6IFtcIlwiXSxcblxuICB9KVxuICBjb25zdCBbYXV0aFByb3AsIHNldEF1dGhQcm9wXSA9IHVzZVN0YXRlKHtcbiAgICBndWVzdDogZmFsc2UsXG4gICAgdG9rZW46IFwiXCJcbiAgfSk7XG4gIGNvbnN0IFtuYXZpZ2F0aW9uLCBzZXROYXZpZ2F0aW9uXSA9IHVzZVN0YXRlKFt7XG4gICAgdGV4dDogXCJIb21lXCIsXG4gICAgZGVzdGluYXRpb246IFwiL1wiLFxuICAgIGNhdGVnb3J5OiBcIm1haW5cIixcbiAgICBuZXdUYWI6IGZhbHNlXG4gIH1dKVxuICBjb25zdCBbbGF5b3V0LCBzZXRMYXlvdXRdID0gdXNlU3RhdGUoZGVmYXVsdFN0YXRlLmxheW91dClcblxuICAvL2NvbnN0IG11aVRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZSk7XG4gIC8vY29uc3QgeyB0aGVtZSwgYWRkcmVzcyB9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgLy90cnkge1xuICAvLyAgbXVpVGhlbWUgPSByZXNwb25zaXZlRm9udFNpemVzKFxuICAvLyAgICBjcmVhdGVNdWlUaGVtZShPYmplY3Qua2V5cyh0aGVtZS5zdHlsZXMpLmxlbmd0aCA/IHRoZW1lLnN0eWxlcyA6IHt9KVxuICAvLyAgKTtcbiAgLy99IGNhdGNoIChlcnIpIHtcbiAgLy8gIGNvbnNvbGUud2FybihDT05TT0xFX01FU1NBR0VfVEhFTUVfSU5WQUxJRCk7XG4gIC8vICBtdWlUaGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXMoY3JlYXRlTXVpVGhlbWUoe30pKTtcbiAgLy99XG5cbiAgY29uc3Qgc2V0VXBDb29raWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuQ29va2llID0gZ2V0Q29va2llKHtcbiAgICAgIGtleTogSldUX0NPT0tJRV9OQU1FLFxuICAgICAgZG9tYWluOiBkZWZhdWx0U3RhdGUuYWRkcmVzcy5kb21haW4sXG4gICAgfSk7XG4gICAgaWYgKHRva2VuQ29va2llKSB7XG4gICAgICBzaWduZWRJbihcbiAgICAgICAgZ2V0Q29va2llKHsga2V5OiBVU0VSSURfQ09PS0lFX05BTUUsIGRvbWFpbjogZGVmYXVsdFN0YXRlLmFkZHJlc3MuZG9tYWluIH0pLFxuICAgICAgICB0b2tlbkNvb2tpZVxuICAgICAgKVxuICAgIH1cbiAgICAvL3N0b3JlLmRpc3BhdGNoKGF1dGhIYXNCZWVuQ2hlY2tlZCgpKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTZXJ2ZXJTaWRlSW5qZWN0ZWRDU1MgPSAoKSA9PiB7Ly8/Pz8/IGl0cyB1c2FibGUgZm9yIG1vcmUgcHJvamVjdHNcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzcy1zZXJ2ZXItc2lkZVwiKTtcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVwQ29va2llcygpO1xuICAgIHJlbW92ZVNlcnZlclNpZGVJbmplY3RlZENTUygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE15Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzaXRlSW5mbywgcHJvZmlsZSwgYXV0aFByb3AsIG5hdmlnYXRpb24sIGxheW91dCB9fT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPENvZGVJbmplY3RvciBwcm9wcz17eyBjb2RlRm9ySGVhZDogXCI8PmN1c3RvbWl6YXRpb24gaGVhZGVyczwvPlwiIH19IC8+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvTXlDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbi8vYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2l0ZVRoZW1lKGJhY2tlbmQpIHtcbi8vICBsZXQgdGVtYTtcbi8vICB0cnkge1xuLy8gICAgLy9kaXNwYXRjaChuZXR3b3JrQWN0aW9uKHRydWUpKTtcbi8vICAgIGNvbnN0IHF1ZXJ5ID0gYFxuLy8gICAgICB7IFxuLy8gICAgICAgIHRoZW1lOiBnZXRUaGVtZSB7XG4vLyAgICAgICAgICBzdHlsZXNcbi8vICAgICAgICB9XG4vLyAgICAgIH1cbi8vICAgICAgYDtcbi8vICAgIGNvbnN0IGZldGNoID0gbmV3IEZldGNoQnVpbGRlcigpXG4vLyAgICAgIC5zZXRVcmwoYCR7YmFja2VuZH0vZ3JhcGhgKVxuLy8gICAgICAuc2V0UGF5bG9hZChxdWVyeSlcbi8vICAgICAgLnNldElzR3JhcGhRTEVuZHBvaW50KHRydWUpXG4vLyAgICAgIC5idWlsZCgpO1xuLy8gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaC5leGVjKCk7XG4vLyAgICB0ZW1hID0gcmVzcG9uc2VcblxuLy8gIH0gY2F0Y2ggKGUpIHtcbi8vICAgIGNvbnNvbGUubG9nKGUsICdlcnJvIGZldGNoJylcbi8vICB9XG4vLyAgcmV0dXJuIHRlbWFcbi8vfVxuXG4vL2V4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyAgPSBhc3luYyAoKSA9PiB7XG4vL2V4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHNcbi8vZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cbi8vICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcbi8vICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgdXBkYXRlU2l0ZVRoZW1lKGdldEJhY2tlbmRBZGRyZXNzKFxuLy8gICAgcmVxPy5oZWFkZXJzPy5ob3N0IHx8ICdsb2NhbGhvc3Q6ODAwMCdcbi8vICApKTtcbi8vICByZXR1cm4geyBwcm9wczogeyBjb3Vyc2VzIH0gfTtcbi8vfVxuXG4vL015QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XG4vLyAgY29uc3QgeyBjdHggfSA9IGFwcENvbnRleHQ7XG5cbi8vICBpZiAoY3R4LnJlcSAmJiBjdHgucmVxLmhlYWRlcnMgJiYgY3R4LnJlcS5oZWFkZXJzLmhvc3QpIHtcbi8vY3R4LnN0b3JlLmRpc3BhdGNoKHVwZGF0ZUJhY2tlbmQoY3R4LnJlcS5oZWFkZXJzLmhvc3QpKTtcbi8vYXdhaXQgY3R4LnN0b3JlLmRpc3BhdGNoKHVwZGF0ZVNpdGVJbmZvKCkpO1xuLy9hd2FpdCBjdHguc3RvcmUuZGlzcGF0Y2godXBkYXRlU2l0ZUxheW91dCgpKTtcbi8vYXdhaXQgY3R4LnN0b3JlLmRpc3BhdGNoKHVwZGF0ZVNpdGVUaGVtZSgpKTtcbi8vYXdhaXQgY3R4LnN0b3JlLmRpc3BhdGNoKHVwZGF0ZVNpdGVOYXZpZ2F0aW9uKCkpO1xuLy8gIH1cblxuLy8gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbi8vICByZXR1cm4geyAuLi5hcHBQcm9wcyB9O1xuLy99O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNvdXJzZWxpdC9jb21wb25lbnRzLWxpYnJhcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9