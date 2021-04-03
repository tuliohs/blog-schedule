exports.ids = [0];
exports.modules = {

/***/ "./components/Public/CodeInjector.js":
/*!*******************************************!*\
  !*** ./components/Public/CodeInjector.js ***!
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



 ////import { connect } from "react-redux";

class CodeInjector extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    const targetTagsForInjection = ["head"];

    for (const target of targetTagsForInjection) {
      this.injectCodeIn(target);
    }
  }

  injectCodeIn(targetHTMLTag) {
    const tempContainer = document.createElement("div"); //tempContainer.innerHTML = this.props.codeForHead;

    const children = tempContainer.children;

    for (let i = 0; i < children.length; i++) {
      let elem = children[i];

      if (elem.nodeName === "SCRIPT") {
        const script = document.createElement("script");
        script.innerHTML = elem.innerHTML;
        this.copyAttributes(elem, script);
        elem = script;
      }

      document[targetHTMLTag].appendChild(elem);
    }
  }

  copyAttributes(source, target) {
    let attr;
    const attributes = Array.prototype.slice.call(source.attributes);

    while (attr = attributes.pop()) {
      target.setAttribute(attr.nodeName, attr.nodeValue);
    }
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }

} //CodeInjector.propTypes = {
//  codeForHead: PropTypes.string,
//};
//const mapStateToProps = (state) => ({  codeForHead: state.siteinfo.codeInjectionHead,});
//export default (CodeInjector);


/* harmony default export */ __webpack_exports__["default"] = (CodeInjector);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9Db2RlSW5qZWN0b3IuanMiXSwibmFtZXMiOlsiQ29kZUluamVjdG9yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInRhcmdldFRhZ3NGb3JJbmplY3Rpb24iLCJ0YXJnZXQiLCJpbmplY3RDb2RlSW4iLCJ0YXJnZXRIVE1MVGFnIiwidGVtcENvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImVsZW0iLCJub2RlTmFtZSIsInNjcmlwdCIsImlubmVySFRNTCIsImNvcHlBdHRyaWJ1dGVzIiwiYXBwZW5kQ2hpbGQiLCJzb3VyY2UiLCJhdHRyIiwiYXR0cmlidXRlcyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwicG9wIiwic2V0QXR0cmlidXRlIiwibm9kZVZhbHVlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0EsTUFBTUEsWUFBTixTQUEyQkMsNENBQUssQ0FBQ0MsU0FBakMsQ0FBMkM7QUFDekNDLG1CQUFpQixHQUFHO0FBQ2xCLFVBQU1DLHNCQUFzQixHQUFHLENBQUMsTUFBRCxDQUEvQjs7QUFDQSxTQUFLLE1BQU1DLE1BQVgsSUFBcUJELHNCQUFyQixFQUE2QztBQUMzQyxXQUFLRSxZQUFMLENBQWtCRCxNQUFsQjtBQUNEO0FBQ0Y7O0FBRURDLGNBQVksQ0FBQ0MsYUFBRCxFQUFnQjtBQUMxQixVQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF0QixDQUQwQixDQUUxQjs7QUFDQSxVQUFNQyxRQUFRLEdBQUdILGFBQWEsQ0FBQ0csUUFBL0I7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUlFLElBQUksR0FBR0gsUUFBUSxDQUFDQyxDQUFELENBQW5COztBQUNBLFVBQUlFLElBQUksQ0FBQ0MsUUFBTCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixjQUFNQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FNLGNBQU0sQ0FBQ0MsU0FBUCxHQUFtQkgsSUFBSSxDQUFDRyxTQUF4QjtBQUNBLGFBQUtDLGNBQUwsQ0FBb0JKLElBQXBCLEVBQTBCRSxNQUExQjtBQUNBRixZQUFJLEdBQUdFLE1BQVA7QUFDRDs7QUFDRFAsY0FBUSxDQUFDRixhQUFELENBQVIsQ0FBd0JZLFdBQXhCLENBQW9DTCxJQUFwQztBQUNEO0FBQ0Y7O0FBRURJLGdCQUFjLENBQUNFLE1BQUQsRUFBU2YsTUFBVCxFQUFpQjtBQUM3QixRQUFJZ0IsSUFBSjtBQUNBLFVBQU1DLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJOLE1BQU0sQ0FBQ0UsVUFBbEMsQ0FBbkI7O0FBQ0EsV0FBUUQsSUFBSSxHQUFHQyxVQUFVLENBQUNLLEdBQVgsRUFBZixFQUFrQztBQUNoQ3RCLFlBQU0sQ0FBQ3VCLFlBQVAsQ0FBb0JQLElBQUksQ0FBQ04sUUFBekIsRUFBbUNNLElBQUksQ0FBQ1EsU0FBeEM7QUFDRDtBQUNGOztBQUVEQyxRQUFNLEdBQUc7QUFDUCx3QkFBTyx1SkFBUDtBQUNEOztBQWxDd0MsQyxDQXFDM0M7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ2U5QiwyRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuY2xhc3MgQ29kZUluamVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHRhcmdldFRhZ3NGb3JJbmplY3Rpb24gPSBbXCJoZWFkXCJdO1xyXG4gICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0VGFnc0ZvckluamVjdGlvbikge1xyXG4gICAgICB0aGlzLmluamVjdENvZGVJbih0YXJnZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5qZWN0Q29kZUluKHRhcmdldEhUTUxUYWcpIHtcclxuICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy90ZW1wQ29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMucHJvcHMuY29kZUZvckhlYWQ7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRlbXBDb250YWluZXIuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBlbGVtID0gY2hpbGRyZW5baV07XHJcbiAgICAgIGlmIChlbGVtLm5vZGVOYW1lID09PSBcIlNDUklQVFwiKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gZWxlbS5pbm5lckhUTUw7XHJcbiAgICAgICAgdGhpcy5jb3B5QXR0cmlidXRlcyhlbGVtLCBzY3JpcHQpO1xyXG4gICAgICAgIGVsZW0gPSBzY3JpcHQ7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnRbdGFyZ2V0SFRNTFRhZ10uYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb3B5QXR0cmlidXRlcyhzb3VyY2UsIHRhcmdldCkge1xyXG4gICAgbGV0IGF0dHI7XHJcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc291cmNlLmF0dHJpYnV0ZXMpO1xyXG4gICAgd2hpbGUgKChhdHRyID0gYXR0cmlidXRlcy5wb3AoKSkpIHtcclxuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lLCBhdHRyLm5vZGVWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPD48Lz47XHJcbiAgfVxyXG59XHJcblxyXG4vL0NvZGVJbmplY3Rvci5wcm9wVHlwZXMgPSB7XHJcbi8vICBjb2RlRm9ySGVhZDogUHJvcFR5cGVzLnN0cmluZyxcclxuLy99O1xyXG5cclxuLy9jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7ICBjb2RlRm9ySGVhZDogc3RhdGUuc2l0ZWluZm8uY29kZUluamVjdGlvbkhlYWQsfSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgKENvZGVJbmplY3Rvcik7XHJcbmV4cG9ydCBkZWZhdWx0IENvZGVJbmplY3RvclxyXG4iXSwic291cmNlUm9vdCI6IiJ9