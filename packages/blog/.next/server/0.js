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



 //import { connect } from "react-redux";

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
//export default connect(mapStateToProps)(CodeInjector);


/* harmony default export */ __webpack_exports__["default"] = (CodeInjector);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1YmxpYy9Db2RlSW5qZWN0b3IuanMiXSwibmFtZXMiOlsiQ29kZUluamVjdG9yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInRhcmdldFRhZ3NGb3JJbmplY3Rpb24iLCJ0YXJnZXQiLCJpbmplY3RDb2RlSW4iLCJ0YXJnZXRIVE1MVGFnIiwidGVtcENvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImVsZW0iLCJub2RlTmFtZSIsInNjcmlwdCIsImlubmVySFRNTCIsImNvcHlBdHRyaWJ1dGVzIiwiYXBwZW5kQ2hpbGQiLCJzb3VyY2UiLCJhdHRyIiwiYXR0cmlidXRlcyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwicG9wIiwic2V0QXR0cmlidXRlIiwibm9kZVZhbHVlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0EsTUFBTUEsWUFBTixTQUEyQkMsNENBQUssQ0FBQ0MsU0FBakMsQ0FBMkM7QUFDekNDLG1CQUFpQixHQUFHO0FBQ2xCLFVBQU1DLHNCQUFzQixHQUFHLENBQUMsTUFBRCxDQUEvQjs7QUFDQSxTQUFLLE1BQU1DLE1BQVgsSUFBcUJELHNCQUFyQixFQUE2QztBQUMzQyxXQUFLRSxZQUFMLENBQWtCRCxNQUFsQjtBQUNEO0FBQ0Y7O0FBRURDLGNBQVksQ0FBQ0MsYUFBRCxFQUFnQjtBQUMxQixVQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF0QixDQUQwQixDQUUxQjs7QUFDQSxVQUFNQyxRQUFRLEdBQUdILGFBQWEsQ0FBQ0csUUFBL0I7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLENBQUNFLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUlFLElBQUksR0FBR0gsUUFBUSxDQUFDQyxDQUFELENBQW5COztBQUNBLFVBQUlFLElBQUksQ0FBQ0MsUUFBTCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixjQUFNQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FNLGNBQU0sQ0FBQ0MsU0FBUCxHQUFtQkgsSUFBSSxDQUFDRyxTQUF4QjtBQUNBLGFBQUtDLGNBQUwsQ0FBb0JKLElBQXBCLEVBQTBCRSxNQUExQjtBQUNBRixZQUFJLEdBQUdFLE1BQVA7QUFDRDs7QUFDRFAsY0FBUSxDQUFDRixhQUFELENBQVIsQ0FBd0JZLFdBQXhCLENBQW9DTCxJQUFwQztBQUNEO0FBQ0Y7O0FBRURJLGdCQUFjLENBQUNFLE1BQUQsRUFBU2YsTUFBVCxFQUFpQjtBQUM3QixRQUFJZ0IsSUFBSjtBQUNBLFVBQU1DLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJOLE1BQU0sQ0FBQ0UsVUFBbEMsQ0FBbkI7O0FBQ0EsV0FBUUQsSUFBSSxHQUFHQyxVQUFVLENBQUNLLEdBQVgsRUFBZixFQUFrQztBQUNoQ3RCLFlBQU0sQ0FBQ3VCLFlBQVAsQ0FBb0JQLElBQUksQ0FBQ04sUUFBekIsRUFBbUNNLElBQUksQ0FBQ1EsU0FBeEM7QUFDRDtBQUNGOztBQUVEQyxRQUFNLEdBQUc7QUFDUCx3QkFBTyx1SkFBUDtBQUNEOztBQWxDd0MsQyxDQXFDM0M7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ2U5QiwyRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmNsYXNzIENvZGVJbmplY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB0YXJnZXRUYWdzRm9ySW5qZWN0aW9uID0gW1wiaGVhZFwiXTtcclxuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldFRhZ3NGb3JJbmplY3Rpb24pIHtcclxuICAgICAgdGhpcy5pbmplY3RDb2RlSW4odGFyZ2V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluamVjdENvZGVJbih0YXJnZXRIVE1MVGFnKSB7XHJcbiAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIC8vdGVtcENvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnByb3BzLmNvZGVGb3JIZWFkO1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0ZW1wQ29udGFpbmVyLmNoaWxkcmVuO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZWxlbSA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICBpZiAoZWxlbS5ub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIikge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGVsZW0uaW5uZXJIVE1MO1xyXG4gICAgICAgIHRoaXMuY29weUF0dHJpYnV0ZXMoZWxlbSwgc2NyaXB0KTtcclxuICAgICAgICBlbGVtID0gc2NyaXB0O1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50W3RhcmdldEhUTUxUYWddLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29weUF0dHJpYnV0ZXMoc291cmNlLCB0YXJnZXQpIHtcclxuICAgIGxldCBhdHRyO1xyXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNvdXJjZS5hdHRyaWJ1dGVzKTtcclxuICAgIHdoaWxlICgoYXR0ciA9IGF0dHJpYnV0ZXMucG9wKCkpKSB7XHJcbiAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSwgYXR0ci5ub2RlVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDw+PC8+O1xyXG4gIH1cclxufVxyXG5cclxuLy9Db2RlSW5qZWN0b3IucHJvcFR5cGVzID0ge1xyXG4vLyAgY29kZUZvckhlYWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vfTtcclxuXHJcbi8vY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyAgY29kZUZvckhlYWQ6IHN0YXRlLnNpdGVpbmZvLmNvZGVJbmplY3Rpb25IZWFkLH0pO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb2RlSW5qZWN0b3IpO1xyXG5leHBvcnQgZGVmYXVsdCBDb2RlSW5qZWN0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==