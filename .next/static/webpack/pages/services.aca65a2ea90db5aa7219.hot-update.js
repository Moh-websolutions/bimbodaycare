webpackHotUpdate_N_E("pages/services",{

/***/ "./components/AllServices.js":
/*!***********************************!*\
  !*** ./components/AllServices.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "S:\\bimbo2020\\react\\bimbodaycare\\components\\AllServices.js",
    _s = $RefreshSig$(),
    _this2 = undefined;





var services = [{
  id: "1",
  title: "Spacious classrooms for all age groups ",
  titlefr: "Salles de classe spacieuses pour chaque group d’âge ",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/camera-big.png",
  width: "581",
  height: "228"
}, {
  id: "2",
  title: "Preschool and afterschool services",
  titlefr: "Services préscolaires et halte scolaire",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/clock-big.png",
  width: "640",
  height: "398"
}, {
  id: "3",
  title: "Indoor and outdoor playgrounds",
  titlefr: "Parc intérieurs et extérieurs ",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/education-big.png",
  width: "399",
  height: "304"
}, {
  id: "4",
  title: "French Curriculum",
  titlefr: "Curriculum français",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/chatbox-big.png",
  width: "640",
  height: "253"
}, {
  id: "5",
  title: "All food is prepared onsite from a well-balanced menu ",
  titlefr: "Tous les repas sont préparés sur place à partir d’un menu équilibré ",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/apple.png",
  width: "640",
  height: "398"
}, {
  id: "6",
  title: "Infant nursery",
  titlefr: "Pouponnière",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/kid.png",
  width: "379",
  height: "374"
}, {
  id: "7",
  title: "Located at the college",
  titlefr: "Situe au Collège",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/college.png",
  width: "640",
  height: "398"
}, {
  id: "8",
  title: "Let's Get in Touch",
  titlefr: "Communiquez avec nous",
  description: "For more information about our daycare or preschool services contact us today, and feel free to call us at 506-548-8069 today!",
  descriptionfr: "Contactez-nous ou appelez-nous au 506-548-8069 dès aujourd’hui pour tout renseignement concernant nos services de garderie ou de halte scolaire!",
  image: "/assets/img/hero/phone.png",
  width: "640",
  height: "398"
}];

function ServicesList(props) {
  _s();

  var _this = this;

  var _useTranslation = Object(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      t = _useTranslation.t;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var services = props.services;
  var Items = services.slice(0, 8).map(function (item) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "quality__col",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "quality__item",
        "data-aos": "zoom-in-right",
        "data-aos-easing": "ease-in-sine",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "quality__icon",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "quality__pic",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
              src: item.image,
              width: item.width,
              height: item.height,
              alt: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 73
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 42
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "quality__details",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "quality__category",
            children: router.locale === "fr" ? item.titlefr : item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "quality__text",
            children: router.locale === "fr" ? item.descriptionfr : item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)
    }, item.id, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Items
  }, void 0, false);
}

_s(ServicesList, "4RnRNJiHpB9q7GSIHCO6Xnv5sUA=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__["default"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = ServicesList;

var allServices = function allServices() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "quality",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "quality__body",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ServicesList, {
          services: services
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, _this2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "quality__circles",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "quality__circle",
          "data-aos": "zoom-in-right",
          "data-aos-easing": "ease-in-sine",
          "data-aos-delay": "1200",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "quality__circle",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, _this2)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, _this2);
};

/* harmony default export */ __webpack_exports__["default"] = (allServices);

var _c;

$RefreshReg$(_c, "ServicesList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGxTZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJzZXJ2aWNlcyIsImlkIiwidGl0bGUiLCJ0aXRsZWZyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbmZyIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIlNlcnZpY2VzTGlzdCIsInByb3BzIiwidXNlVHJhbnNsYXRpb24iLCJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiSXRlbXMiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJsb2NhbGUiLCJhbGxTZXJ2aWNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxRQUFRLEdBQUcsQ0FDYjtBQUNBQyxJQUFFLEVBQUUsR0FESjtBQUVBQyxPQUFLLEVBQUUseUNBRlA7QUFHQUMsU0FBTyxFQUFFLHNEQUhUO0FBSUFDLGFBQVcsRUFBQyxFQUpaO0FBS0FDLGVBQWEsRUFBQyxFQUxkO0FBTUFDLE9BQUssRUFBQyxpQ0FOTjtBQU9BQyxPQUFLLEVBQUMsS0FQTjtBQVFBQyxRQUFNLEVBQUU7QUFSUixDQURhLEVBWWI7QUFDQVAsSUFBRSxFQUFFLEdBREo7QUFFQUMsT0FBSyxFQUFFLG9DQUZQO0FBR0FDLFNBQU8sRUFBRSx5Q0FIVDtBQUlBQyxhQUFXLEVBQUMsRUFKWjtBQUtBQyxlQUFhLEVBQUMsRUFMZDtBQU1BQyxPQUFLLEVBQUMsZ0NBTk47QUFPQUMsT0FBSyxFQUFDLEtBUE47QUFRQUMsUUFBTSxFQUFFO0FBUlIsQ0FaYSxFQXVCYjtBQUNBUCxJQUFFLEVBQUUsR0FESjtBQUVBQyxPQUFLLEVBQUUsZ0NBRlA7QUFHQUMsU0FBTyxFQUFFLGdDQUhUO0FBSUFDLGFBQVcsRUFBQyxFQUpaO0FBS0FDLGVBQWEsRUFBQyxFQUxkO0FBTUFDLE9BQUssRUFBQyxvQ0FOTjtBQU9BQyxPQUFLLEVBQUMsS0FQTjtBQVFBQyxRQUFNLEVBQUU7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c3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuYWNhNjVhMmVhOTBkYjVhYTcyMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcbiAgICB7XHJcbiAgICBpZDogXCIxXCIsICAgIFxyXG4gICAgdGl0bGU6IFwiU3BhY2lvdXMgY2xhc3Nyb29tcyBmb3IgYWxsIGFnZSBncm91cHMgXCIsXHJcbiAgICB0aXRsZWZyOiBcIlNhbGxlcyBkZSBjbGFzc2Ugc3BhY2lldXNlcyBwb3VyIGNoYXF1ZSBncm91cCBk4oCZw6JnZSBcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbmZyOlwiXCIsXHJcbiAgICBpbWFnZTpcIi9hc3NldHMvaW1nL2hlcm8vY2FtZXJhLWJpZy5wbmdcIixcclxuICAgIHdpZHRoOlwiNTgxXCIsXHJcbiAgICBoZWlnaHQ6IFwiMjI4XCIsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgeyAgXHJcbiAgICBpZDogXCIyXCIsICAgIFxyXG4gICAgdGl0bGU6IFwiUHJlc2Nob29sIGFuZCBhZnRlcnNjaG9vbCBzZXJ2aWNlc1wiLFxyXG4gICAgdGl0bGVmcjogXCJTZXJ2aWNlcyBwcsOpc2NvbGFpcmVzIGV0IGhhbHRlIHNjb2xhaXJlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb25mcjpcIlwiLFxyXG4gICAgaW1hZ2U6XCIvYXNzZXRzL2ltZy9oZXJvL2Nsb2NrLWJpZy5wbmdcIixcclxuICAgIHdpZHRoOlwiNjQwXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzk4XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgIGlkOiBcIjNcIiwgICAgXHJcbiAgICB0aXRsZTogXCJJbmRvb3IgYW5kIG91dGRvb3IgcGxheWdyb3VuZHNcIixcclxuICAgIHRpdGxlZnI6IFwiUGFyYyBpbnTDqXJpZXVycyBldCBleHTDqXJpZXVycyBcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbmZyOlwiXCIsXHJcbiAgICBpbWFnZTpcIi9hc3NldHMvaW1nL2hlcm8vZWR1Y2F0aW9uLWJpZy5wbmdcIixcclxuICAgIHdpZHRoOlwiMzk5XCIsXHJcbiAgICBoZWlnaHQ6IFwiMzA0XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgIGlkOiBcIjRcIiwgICAgXHJcbiAgICB0aXRsZTogXCJGcmVuY2ggQ3VycmljdWx1bVwiLFxyXG4gICAgdGl0bGVmcjogXCJDdXJyaWN1bHVtIGZyYW7Dp2Fpc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIGRlc2NyaXB0aW9uZnI6XCJcIixcclxuICAgIGltYWdlOlwiL2Fzc2V0cy9pbWcvaGVyby9jaGF0Ym94LWJpZy5wbmdcIixcclxuICAgIHdpZHRoOlwiNjQwXCIsXHJcbiAgICBoZWlnaHQ6IFwiMjUzXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgIGlkOiBcIjVcIiwgICAgXHJcbiAgICB0aXRsZTogXCJBbGwgZm9vZCBpcyBwcmVwYXJlZCBvbnNpdGUgZnJvbSBhIHdlbGwtYmFsYW5jZWQgbWVudSBcIixcclxuICAgIHRpdGxlZnI6IFwiVG91cyBsZXMgcmVwYXMgc29udCBwcsOpcGFyw6lzIHN1ciBwbGFjZSDDoCBwYXJ0aXIgZOKAmXVuIG1lbnUgw6lxdWlsaWJyw6kgXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb25mcjpcIlwiLFxyXG4gICAgaW1hZ2U6XCIvYXNzZXRzL2ltZy9oZXJvL2FwcGxlLnBuZ1wiLFxyXG4gICAgd2lkdGg6XCI2NDBcIixcclxuICAgIGhlaWdodDogXCIzOThcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgaWQ6IFwiNlwiLCAgICBcclxuICAgIHRpdGxlOiBcIkluZmFudCBudXJzZXJ5XCIsXHJcbiAgICB0aXRsZWZyOiBcIlBvdXBvbm5pw6hyZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIGRlc2NyaXB0aW9uZnI6XCJcIiwgICAgXHJcbiAgICBpbWFnZTpcIi9hc3NldHMvaW1nL2hlcm8va2lkLnBuZ1wiLFxyXG4gICAgd2lkdGg6XCIzNzlcIixcclxuICAgIGhlaWdodDogXCIzNzRcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgaWQ6IFwiN1wiLCAgICBcclxuICAgIHRpdGxlOiBcIkxvY2F0ZWQgYXQgdGhlIGNvbGxlZ2VcIixcclxuICAgIHRpdGxlZnI6IFwiU2l0dWUgYXUgQ29sbMOoZ2VcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbmZyOlwiXCIsXHJcbiAgICBpbWFnZTpcIi9hc3NldHMvaW1nL2hlcm8vY29sbGVnZS5wbmdcIixcclxuICAgIHdpZHRoOlwiNjQwXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzk4XCIsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB7ICAgIFxyXG4gICAgaWQ6XCI4XCIsIFxyXG4gICAgdGl0bGU6IFwiTGV0J3MgR2V0IGluIFRvdWNoXCIsXHJcbiAgICB0aXRsZWZyOiBcIkNvbW11bmlxdWV6IGF2ZWMgbm91c1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBvdXIgZGF5Y2FyZSBvciBwcmVzY2hvb2wgc2VydmljZXMgY29udGFjdCB1cyB0b2RheSwgYW5kIGZlZWwgZnJlZSB0byBjYWxsIHVzIGF0IDUwNi01NDgtODA2OSB0b2RheSFcIixcclxuICAgIGRlc2NyaXB0aW9uZnI6IFwiQ29udGFjdGV6LW5vdXMgb3UgYXBwZWxlei1ub3VzIGF1IDUwNi01NDgtODA2OSBkw6hzIGF1am91cmTigJlodWkgcG91ciB0b3V0IHJlbnNlaWduZW1lbnQgY29uY2VybmFudCBub3Mgc2VydmljZXMgZGUgZ2FyZGVyaWUgb3UgZGUgaGFsdGUgc2NvbGFpcmUhXCIsXHJcbiAgICBpbWFnZTpcIi9hc3NldHMvaW1nL2hlcm8vcGhvbmUucG5nXCIsXHJcbiAgICB3aWR0aDpcIjY0MFwiLFxyXG4gICAgaGVpZ2h0OiBcIjM5OFwiLFxyXG4gICAgfSxcclxuXHJcbl07XHJcbiBcclxuXHJcbmZ1bmN0aW9uIFNlcnZpY2VzTGlzdChwcm9wcykge1xyXG5cclxuICAgIGxldCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc2VydmljZXMgPSBwcm9wcy5zZXJ2aWNlcztcclxuICBjb25zdCBJdGVtcyA9IHNlcnZpY2VzLnNsaWNlKDAsIDgpLm1hcCgoaXRlbSkgPT5cclxuICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbGl0eV9fY29sXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YWxpdHlfX2l0ZW1cIiBkYXRhLWFvcz1cInpvb20taW4tcmlnaHRcIiBkYXRhLWFvcy1lYXNpbmc9XCJlYXNlLWluLXNpbmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbGl0eV9faWNvblwiPjxkaXYgIGNsYXNzTmFtZT1cInF1YWxpdHlfX3BpY1wiPjxJbWFnZSBzcmM9e2l0ZW0uaW1hZ2V9IHdpZHRoPXtpdGVtLndpZHRofSBoZWlnaHQ9e2l0ZW0uaGVpZ2h0fSBhbHQ9e2l0ZW0udGl0bGV9IC8+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YWxpdHlfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFsaXR5X19jYXRlZ29yeVwiPntyb3V0ZXIubG9jYWxlID09PSBcImZyXCIgPyBpdGVtLnRpdGxlZnIgIDogaXRlbS50aXRsZSAgfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YWxpdHlfX3RleHRcIj57cm91dGVyLmxvY2FsZSA9PT0gXCJmclwiID8gaXRlbS5kZXNjcmlwdGlvbmZyICA6IGl0ZW0uZGVzY3JpcHRpb24gIH08L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgICA8PntJdGVtc308Lz4gXHJcbiAgKTtcclxufVxyXG5jb25zdCBhbGxTZXJ2aWNlcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbGl0eVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFsaXR5X19ib2R5XCI+XHJcblxyXG4gICAgICAgICAgICA8U2VydmljZXNMaXN0IHNlcnZpY2VzPXtzZXJ2aWNlc30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbGl0eV9fY2lyY2xlc1wiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFsaXR5X19jaXJjbGVcIiBkYXRhLWFvcz1cInpvb20taW4tcmlnaHRcIiBkYXRhLWFvcy1lYXNpbmc9XCJlYXNlLWluLXNpbmVcIiBkYXRhLWFvcy1kZWxheT1cIjEyMDBcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbGl0eV9fY2lyY2xlXCI+IDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+IFxyXG5cdClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbFNlcnZpY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==