exports.ids = [7];
exports.modules = {

/***/ "./components/CheckoutExternal/Free.js":
/*!*********************************************!*\
  !*** ./components/CheckoutExternal/Free.js ***!
  \*********************************************/
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ "./types.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./config/strings.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\MGS\\Sistemas\\temp\\courselit\\packages\\blog\\components\\CheckoutExternal\\Free.js";




 //import { connect } from "react-redux";


 //import { networkAction, setAppMessage } from "../../redux/actions";
//import AppMessage from "../../models/app-message";

const Free = ({
  course,
  auth,
  dispatch,
  address
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    0: disabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleClick = async () => {
    try {
      setDisabled(true); //dispatch(networkAction(true));

      let initiatePaymentResponse = await makePaymentRequest({
        courseId: course.id,
        backend: address.backend,
        token: auth.token,
        dispatch
      });

      if (initiatePaymentResponse.status === 401) {
        router.push(`/login?redirect=${router.asPath}`);
        return;
      }

      initiatePaymentResponse = await initiatePaymentResponse.json();

      if (initiatePaymentResponse.status === "success") {
        router.reload();
      } else if (initiatePaymentResponse.status === "failed") {//dispatch(setAppMessage(new AppMessage(initiatePaymentResponse.error)));
      }
    } catch (err) {//dispatch(setAppMessage(new AppMessage(err.message)));
    } finally {
      dispatch(networkAction(false));
      setDisabled(false);
    }
  };

  const makePaymentRequest = async ({
    courseId,
    backend,
    token,
    dispatch
  }) => {
    const formData = new window.FormData();
    formData.append("courseid", courseId);
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(`${backend}/payment/initiate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });
    return res;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: handleClick,
    variant: "contained",
    color: "primary",
    disabled: disabled,
    children: _config_strings__WEBPACK_IMPORTED_MODULE_5__["ENROLL_BUTTON_TEXT"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined);
};

Free.propTypes = {
  course: _types__WEBPACK_IMPORTED_MODULE_4__["publicCourse"].isRequired,
  auth: _types__WEBPACK_IMPORTED_MODULE_4__["authProps"],
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  address: _types__WEBPACK_IMPORTED_MODULE_4__["addressProps"]
}; //const mapStateToProps = (state) => ({auth: state.auth,address: state.address,})
//const mapDispatchToProps = (dispatch) => ({dispatch: dispatch,});
//export default connect(mapStateToProps, mapDispatchToProps)(Free);

/* harmony default export */ __webpack_exports__["default"] = (Free);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0RXh0ZXJuYWwvRnJlZS5qcyJdLCJuYW1lcyI6WyJGcmVlIiwiY291cnNlIiwiYXV0aCIsImRpc3BhdGNoIiwiYWRkcmVzcyIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwiaW5pdGlhdGVQYXltZW50UmVzcG9uc2UiLCJtYWtlUGF5bWVudFJlcXVlc3QiLCJjb3Vyc2VJZCIsImlkIiwiYmFja2VuZCIsInRva2VuIiwic3RhdHVzIiwicHVzaCIsImFzUGF0aCIsImpzb24iLCJyZWxvYWQiLCJlcnIiLCJuZXR3b3JrQWN0aW9uIiwiZm9ybURhdGEiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiRU5ST0xMX0JVVFRPTl9URVhUIiwicHJvcFR5cGVzIiwicHVibGljQ291cnNlIiwiaXNSZXF1aXJlZCIsImF1dGhQcm9wcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJhZGRyZXNzUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0NBRUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxRQUFGO0FBQVVDLE1BQVY7QUFBZ0JDLFVBQWhCO0FBQTBCQztBQUExQixDQUFELEtBQXlDO0FBQ3BELFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUF4Qzs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsWUFBWTtBQUM5QixRQUFJO0FBQ0ZGLGlCQUFXLENBQUMsSUFBRCxDQUFYLENBREUsQ0FFRjs7QUFFQSxVQUFJRyx1QkFBdUIsR0FBRyxNQUFNQyxrQkFBa0IsQ0FBQztBQUNyREMsZ0JBQVEsRUFBRVosTUFBTSxDQUFDYSxFQURvQztBQUVyREMsZUFBTyxFQUFFWCxPQUFPLENBQUNXLE9BRm9DO0FBR3JEQyxhQUFLLEVBQUVkLElBQUksQ0FBQ2MsS0FIeUM7QUFJckRiO0FBSnFELE9BQUQsQ0FBdEQ7O0FBT0EsVUFBSVEsdUJBQXVCLENBQUNNLE1BQXhCLEtBQW1DLEdBQXZDLEVBQTRDO0FBQzFDWixjQUFNLENBQUNhLElBQVAsQ0FBYSxtQkFBa0JiLE1BQU0sQ0FBQ2MsTUFBTyxFQUE3QztBQUNBO0FBQ0Q7O0FBRURSLDZCQUF1QixHQUFHLE1BQU1BLHVCQUF1QixDQUFDUyxJQUF4QixFQUFoQzs7QUFDQSxVQUFJVCx1QkFBdUIsQ0FBQ00sTUFBeEIsS0FBbUMsU0FBdkMsRUFBa0Q7QUFDaERaLGNBQU0sQ0FBQ2dCLE1BQVA7QUFDRCxPQUZELE1BRU8sSUFBSVYsdUJBQXVCLENBQUNNLE1BQXhCLEtBQW1DLFFBQXZDLEVBQWlELENBQ3REO0FBQ0Q7QUFDRixLQXRCRCxDQXNCRSxPQUFPSyxHQUFQLEVBQVksQ0FDWjtBQUNELEtBeEJELFNBd0JVO0FBQ1JuQixjQUFRLENBQUNvQixhQUFhLENBQUMsS0FBRCxDQUFkLENBQVI7QUFDQWYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDRDtBQUNGLEdBN0JEOztBQStCQSxRQUFNSSxrQkFBa0IsR0FBRyxPQUFPO0FBQUVDLFlBQUY7QUFBWUUsV0FBWjtBQUFxQkMsU0FBckI7QUFBNEJiO0FBQTVCLEdBQVAsS0FBa0Q7QUFDM0UsVUFBTXFCLFFBQVEsR0FBRyxJQUFJQyxNQUFNLENBQUNDLFFBQVgsRUFBakI7QUFDQUYsWUFBUSxDQUFDRyxNQUFULENBQWdCLFVBQWhCLEVBQTRCZCxRQUE1QjtBQUVBLFVBQU1lLEdBQUcsR0FBRyxNQUFNQyx5REFBSyxDQUFFLEdBQUVkLE9BQVEsbUJBQVosRUFBZ0M7QUFDckRlLFlBQU0sRUFBRSxNQUQ2QztBQUVyREMsYUFBTyxFQUFFO0FBQ1BDLHFCQUFhLEVBQUcsVUFBU2hCLEtBQU07QUFEeEIsT0FGNEM7QUFLckRpQixVQUFJLEVBQUVUO0FBTCtDLEtBQWhDLENBQXZCO0FBUUEsV0FBT0ksR0FBUDtBQUNELEdBYkQ7O0FBZUEsc0JBQ0UscUVBQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUVsQixXQURYO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFlBQVEsRUFBRUgsUUFKWjtBQUFBLGNBTUcyQixrRUFBa0JBO0FBTnJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBNUREOztBQThEQWxDLElBQUksQ0FBQ21DLFNBQUwsR0FBaUI7QUFDZmxDLFFBQU0sRUFBRW1DLG1EQUFZLENBQUNDLFVBRE47QUFFZm5DLE1BQUksRUFBRW9DLGdEQUZTO0FBR2ZuQyxVQUFRLEVBQUVvQyxpREFBUyxDQUFDQyxJQUFWLENBQWVILFVBSFY7QUFJZmpDLFNBQU8sRUFBRXFDLG1EQUFZQTtBQUpOLENBQWpCLEMsQ0FPQTtBQUNBO0FBQ0E7O0FBQ2V6QyxtRUFBZixFIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgYWRkcmVzc1Byb3BzLCBhdXRoUHJvcHMsIHB1YmxpY0NvdXJzZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBFTlJPTExfQlVUVE9OX1RFWFQgfSBmcm9tIFwiLi4vLi4vY29uZmlnL3N0cmluZ3NcIjtcclxuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vL2ltcG9ydCB7IG5ldHdvcmtBY3Rpb24sIHNldEFwcE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG4vL2ltcG9ydCBBcHBNZXNzYWdlIGZyb20gXCIuLi8uLi9tb2RlbHMvYXBwLW1lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IEZyZWUgPSAoeyBjb3Vyc2UsIGF1dGgsIGRpc3BhdGNoLCBhZGRyZXNzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXREaXNhYmxlZCh0cnVlKTtcclxuICAgICAgLy9kaXNwYXRjaChuZXR3b3JrQWN0aW9uKHRydWUpKTtcclxuXHJcbiAgICAgIGxldCBpbml0aWF0ZVBheW1lbnRSZXNwb25zZSA9IGF3YWl0IG1ha2VQYXltZW50UmVxdWVzdCh7XHJcbiAgICAgICAgY291cnNlSWQ6IGNvdXJzZS5pZCxcclxuICAgICAgICBiYWNrZW5kOiBhZGRyZXNzLmJhY2tlbmQsXHJcbiAgICAgICAgdG9rZW46IGF1dGgudG9rZW4sXHJcbiAgICAgICAgZGlzcGF0Y2gsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGluaXRpYXRlUGF5bWVudFJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9sb2dpbj9yZWRpcmVjdD0ke3JvdXRlci5hc1BhdGh9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbml0aWF0ZVBheW1lbnRSZXNwb25zZSA9IGF3YWl0IGluaXRpYXRlUGF5bWVudFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKGluaXRpYXRlUGF5bWVudFJlc3BvbnNlLnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5pdGlhdGVQYXltZW50UmVzcG9uc2Uuc3RhdHVzID09PSBcImZhaWxlZFwiKSB7XHJcbiAgICAgICAgLy9kaXNwYXRjaChzZXRBcHBNZXNzYWdlKG5ldyBBcHBNZXNzYWdlKGluaXRpYXRlUGF5bWVudFJlc3BvbnNlLmVycm9yKSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy9kaXNwYXRjaChzZXRBcHBNZXNzYWdlKG5ldyBBcHBNZXNzYWdlKGVyci5tZXNzYWdlKSkpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgZGlzcGF0Y2gobmV0d29ya0FjdGlvbihmYWxzZSkpO1xyXG4gICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWFrZVBheW1lbnRSZXF1ZXN0ID0gYXN5bmMgKHsgY291cnNlSWQsIGJhY2tlbmQsIHRva2VuLCBkaXNwYXRjaCB9KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyB3aW5kb3cuRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvdXJzZWlkXCIsIGNvdXJzZUlkKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kfS9wYXltZW50L2luaXRpYXRlYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgID5cclxuICAgICAge0VOUk9MTF9CVVRUT05fVEVYVH1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5GcmVlLnByb3BUeXBlcyA9IHtcclxuICBjb3Vyc2U6IHB1YmxpY0NvdXJzZS5pc1JlcXVpcmVkLFxyXG4gIGF1dGg6IGF1dGhQcm9wcyxcclxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBhZGRyZXNzOiBhZGRyZXNzUHJvcHMsXHJcbn07XHJcblxyXG4vL2NvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHthdXRoOiBzdGF0ZS5hdXRoLGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsfSlcclxuLy9jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7ZGlzcGF0Y2g6IGRpc3BhdGNoLH0pO1xyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZyZWUpO1xyXG5leHBvcnQgZGVmYXVsdCBGcmVlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=