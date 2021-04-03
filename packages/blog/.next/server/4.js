exports.ids = [4];
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



 //import { connect } from "react-redux";




const Img = (src, isThumbnail = false, classes, alt, defaultImage, address = _config_defaultState__WEBPACK_IMPORTED_MODULE_6__["default"].address.backend, isExternal = false) => {
  const source = src ? isExternal ? src : Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_4__["formulateMediaUrl"])(address, src, isThumbnail) : defaultImage || "/courselit_backdrop_square";
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
      children: "img.jsx-1324233388{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTUdTXFxTaXN0ZW1hc1xcdGVtcFxcY291cnNlbGl0XFxwYWNrYWdlc1xcYmxvZ1xcY29tcG9uZW50c1xcSW1nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHc0IsV0FDQyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTUdTXFxTaXN0ZW1hc1xcdGVtcFxcY291cnNlbGl0XFxwYWNrYWdlc1xcYmxvZ1xcY29tcG9uZW50c1xcSW1nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IGZvcm11bGF0ZU1lZGlhVXJsIH0gZnJvbSBcIi4uL2xpYi91dGlscy5qc1wiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkcmVzc1Byb3BzIH0gZnJvbSBcIi4uL3R5cGVzLmpzXCI7XHJcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi4vY29uZmlnL2RlZmF1bHRTdGF0ZSdcclxuXHJcbmNvbnN0IEltZyA9IChzcmMsXHJcbiAgaXNUaHVtYm5haWwgPSBmYWxzZSxcclxuICBjbGFzc2VzLFxyXG4gIGFsdCxcclxuICBkZWZhdWx0SW1hZ2UsXHJcbiAgYWRkcmVzcyA9IGRlZmF1bHRTdGF0ZS5hZGRyZXNzLmJhY2tlbmQsXHJcbiAgaXNFeHRlcm5hbCA9IGZhbHNlLCkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3Qgc291cmNlID0gc3JjXHJcbiAgICA/IGlzRXh0ZXJuYWxcclxuICAgICAgPyBzcmNcclxuICAgICAgOiBmb3JtdWxhdGVNZWRpYVVybChhZGRyZXNzLCBzcmMsIGlzVGh1bWJuYWlsKVxyXG4gICAgOiBkZWZhdWx0SW1hZ2UgfHwgXCIvY291cnNlbGl0X2JhY2tkcm9wX3NxdWFyZVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c291cmNlfSBhbHQ9e2FsdH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vL0ltZy5wcm9wVHlwZXMgPSB7XHJcbi8vICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICBpc1RodW1ibmFpbDogUHJvcFR5cGVzLmJvb2wsXHJcbi8vICBjbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgZGVmYXVsdEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgYWRkcmVzczogYWRkcmVzc1Byb3BzLFxyXG4vLyAgaXNFeHRlcm5hbDogUHJvcFR5cGVzLmJvb2wsXHJcbi8vfTtcclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7ICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLH0pO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbWcpO1xyXG5leHBvcnQgZGVmYXVsdCBJbWdcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\MGS\\\\Sistemas\\\\temp\\\\courselit\\\\packages\\\\blog\\\\components\\\\Img.js */"
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
//export default connect(mapStateToProps)(Img);


/* harmony default export */ __webpack_exports__["default"] = (Img);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltZy5qcyJdLCJuYW1lcyI6WyJJbWciLCJzcmMiLCJpc1RodW1ibmFpbCIsImNsYXNzZXMiLCJhbHQiLCJkZWZhdWx0SW1hZ2UiLCJhZGRyZXNzIiwiZGVmYXVsdFN0YXRlIiwiYmFja2VuZCIsImlzRXh0ZXJuYWwiLCJzb3VyY2UiLCJmb3JtdWxhdGVNZWRpYVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUNDLEdBQUQsRUFDVkMsV0FBVyxHQUFHLEtBREosRUFFVkMsT0FGVSxFQUdWQyxHQUhVLEVBSVZDLFlBSlUsRUFLVkMsT0FBTyxHQUFHQyw0REFBWSxDQUFDRCxPQUFiLENBQXFCRSxPQUxyQixFQU1WQyxVQUFVLEdBQUcsS0FOSCxLQU1jO0FBR3hCLFFBQU1DLE1BQU0sR0FBR1QsR0FBRyxHQUNkUSxVQUFVLEdBQ1JSLEdBRFEsR0FFUlUsdUVBQWlCLENBQUNMLE9BQUQsRUFBVUwsR0FBVixFQUFlQyxXQUFmLENBSEwsR0FJZEcsWUFBWSxJQUFJLDRCQUpwQjtBQU1BLHNCQUNFO0FBQUEsNEJBQ0U7QUFBeUIsU0FBRyxFQUFFSyxNQUE5QjtBQUFzQyxTQUFHLEVBQUVOLEdBQTNDO0FBQUEsMkNBQWdCRCxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQVdELENBMUJELEMsQ0E0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2VILGtFQUFmLEUiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3JtdWxhdGVNZWRpYVVybCB9IGZyb20gXCIuLi9saWIvdXRpbHMuanNcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZHJlc3NQcm9wcyB9IGZyb20gXCIuLi90eXBlcy5qc1wiO1xyXG5pbXBvcnQgZGVmYXVsdFN0YXRlIGZyb20gJy4uL2NvbmZpZy9kZWZhdWx0U3RhdGUnXHJcblxyXG5jb25zdCBJbWcgPSAoc3JjLFxyXG4gIGlzVGh1bWJuYWlsID0gZmFsc2UsXHJcbiAgY2xhc3NlcyxcclxuICBhbHQsXHJcbiAgZGVmYXVsdEltYWdlLFxyXG4gIGFkZHJlc3MgPSBkZWZhdWx0U3RhdGUuYWRkcmVzcy5iYWNrZW5kLFxyXG4gIGlzRXh0ZXJuYWwgPSBmYWxzZSwpID0+IHtcclxuXHJcblxyXG4gIGNvbnN0IHNvdXJjZSA9IHNyY1xyXG4gICAgPyBpc0V4dGVybmFsXHJcbiAgICAgID8gc3JjXHJcbiAgICAgIDogZm9ybXVsYXRlTWVkaWFVcmwoYWRkcmVzcywgc3JjLCBpc1RodW1ibmFpbClcclxuICAgIDogZGVmYXVsdEltYWdlIHx8IFwiL2NvdXJzZWxpdF9iYWNrZHJvcF9zcXVhcmVcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NvdXJjZX0gYWx0PXthbHR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy9JbWcucHJvcFR5cGVzID0ge1xyXG4vLyAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgaXNUaHVtYm5haWw6IFByb3BUeXBlcy5ib29sLFxyXG4vLyAgY2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGRlZmF1bHRJbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gIGFkZHJlc3M6IGFkZHJlc3NQcm9wcyxcclxuLy8gIGlzRXh0ZXJuYWw6IFByb3BUeXBlcy5ib29sLFxyXG4vL307XHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyAgYWRkcmVzczogc3RhdGUuYWRkcmVzcyx9KTtcclxuLy9leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW1nKTtcclxuZXhwb3J0IGRlZmF1bHQgSW1nXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=