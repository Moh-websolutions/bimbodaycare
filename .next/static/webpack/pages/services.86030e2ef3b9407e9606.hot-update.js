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
  titlefr: "Salles de classe spacieuse pour chaque group d’âge ",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/camera-big.png",
  width: "581",
  height: "228"
}, {
  id: "2",
  title: "Afterschool Program ",
  titlefr: "Programme préscolaire",
  description: "",
  descriptionfr: "",
  image: "/assets/img/hero/clock-big.png",
  width: "640",
  height: "398"
}, {
  id: "3",
  title: "Indoor and outdoor playgrounds",
  titlefr: "Parc intérieurs et extérieures ",
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
  titlefr: "Tous les repas sont préparés sur place a partir d’un menu équilibre ",
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
  descriptionfr: "Pour plus d'informations sur nos services de garde ou préscolaires, contactez-nous dès aujourd'hui et n'hésitez pas à nous appeler au 506-548-8069 dès aujourd'hui!",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGxTZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJzZXJ2aWNlcyIsImlkIiwidGl0bGUiLCJ0aXRsZWZyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbmZyIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIlNlcnZpY2VzTGlzdCIsInByb3BzIiwidXNlVHJhbnNsYXRpb24iLCJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiSXRlbXMiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJsb2NhbGUiLCJhbGxTZXJ2aWNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxRQUFRLEdBQUcsQ0FDYjtBQUNBQyxJQUFFLEVBQUUsR0FESjtBQUVBQyxPQUFLLEVBQUUseUNBRlA7QUFHQUMsU0FBTyxFQUFFLHFEQUhUO0FBSUFDLGFBQVcsRUFBQyxFQUpaO0FBS0FDLGVBQWEsRUFBQyxFQUxkO0FBTUFDLE9BQUssRUFBQyxpQ0FOTjtBQU9BQyxPQUFLLEVBQUMsS0FQTjtBQVFBQyxRQUFNLEVBQUU7QUFSUixDQURhLEVBWWI7QUFDQVAsSUFBRSxFQUFFLEdBREo7QUFFQUMsT0FBSyxFQUFFLHNCQUZQO0FBR0FDLFNBQU8sRUFBRSx1QkFIVDtBQUlBQyxhQUFXLEVBQUMsRUFKWjtBQUtBQyxlQUFhLEVBQUMsRUFMZDtBQU1BQyxPQUFLLEVBQUMsZ0NBTk47QUFPQUMsT0FBSyxFQUFDLEtBUE47QUFRQUMsUUFBTSxFQUFFO0FBUlIsQ0FaYSxFQXVCYjtBQUNBUCxJQUFFLEVBQUUsR0FESjtBQUVBQyxPQUFLLEVBQUUsZ0NBRlA7QUFHQUMsU0FBTyxFQUFFLGlDQUhUO0FBSUFDLGFBQVcsRUFBQyxFQUpaO0FBS0FDLGVBQWEsRUFBQyxFQUxkO0FBTUFDLE9BQUssRUFBQyxvQ0FOTjtBQU9BQyxPQUFLLEVBQUMsS0FQTjtBQVFBQyxRQUFNLEVBQUU7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c3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuODYwMzBlMmVmM2I5NDA3ZTk2MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcbiAgICB7XHJcbiAgICBpZDogXCIxXCIsICAgIFxyXG4gICAgdGl0bGU6IFwiU3BhY2lvdXMgY2xhc3Nyb29tcyBmb3IgYWxsIGFnZSBncm91cHMgXCIsXHJcbiAgICB0aXRsZWZyOiBcIlNhbGxlcyBkZSBjbGFzc2Ugc3BhY2lldXNlIHBvdXIgY2hhcXVlIGdyb3VwIGTigJnDomdlIFwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIGRlc2NyaXB0aW9uZnI6XCJcIixcclxuICAgIGltYWdlOlwiL2Fzc2V0cy9pbWcvaGVyby9jYW1lcmEtYmlnLnBuZ1wiLFxyXG4gICAgd2lkdGg6XCI1ODFcIixcclxuICAgIGhlaWdodDogXCIyMjhcIixcclxuICAgIH0sXHJcbiAgXHJcbiAgICB7ICBcclxuICAgIGlkOiBcIjJcIiwgICAgXHJcbiAgICB0aXRsZTogXCJBZnRlcnNjaG9vbCBQcm9ncmFtIFwiLFxyXG4gICAgdGl0bGVmcjogXCJQcm9ncmFtbWUgcHLDqXNjb2xhaXJlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb25mcjpcIlwiLFxyXG4gICAgaW1hZ2U6XCIvYXNzZXRzL2ltZy9oZXJvL2Nsb2NrLWJpZy5wbmdcIixcclxuICAgIHdpZHRoOlwiNjQwXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzk4XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgIGlkOiBcIjNcIiwgICAgXHJcbiAgICB0aXRsZTogXCJJbmRvb3IgYW5kIG91dGRvb3IgcGxheWdyb3VuZHNcIixcclxuICAgIHRpdGxlZnI6IFwiUGFyYyBpbnTDqXJpZXVycyBldCBleHTDqXJpZXVyZXMgXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb25mcjpcIlwiLFxyXG4gICAgaW1hZ2U6XCIvYXNzZXRzL2ltZy9oZXJvL2VkdWNhdGlvbi1iaWcucG5nXCIsXHJcbiAgICB3aWR0aDpcIjM5OVwiLFxyXG4gICAgaGVpZ2h0OiBcIjMwNFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICBpZDogXCI0XCIsICAgIFxyXG4gICAgdGl0bGU6IFwiRnJlbmNoIEN1cnJpY3VsdW1cIixcclxuICAgIHRpdGxlZnI6IFwiQ3VycmljdWx1bSBmcmFuw6dhaXNcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbmZyOlwiXCIsXHJcbiAgICBpbWFnZTpcIi9hc3NldHMvaW1nL2hlcm8vY2hhdGJveC1iaWcucG5nXCIsXHJcbiAgICB3aWR0aDpcIjY0MFwiLFxyXG4gICAgaGVpZ2h0OiBcIjI1M1wiLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICBpZDogXCI1XCIsICAgIFxyXG4gICAgdGl0bGU6IFwiQWxsIGZvb2QgaXMgcHJlcGFyZWQgb25zaXRlIGZyb20gYSB3ZWxsLWJhbGFuY2VkIG1lbnUgXCIsXHJcbiAgICB0aXRsZWZyOiBcIlRvdXMgbGVzIHJlcGFzIHNvbnQgcHLDqXBhcsOpcyBzdXIgcGxhY2UgYSBwYXJ0aXIgZOKAmXVuIG1lbnUgw6lxdWlsaWJyZSBcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbmZyOlwiXCIsXHJcbiAgICBpbWFnZTpcIi9hc3NldHMvaW1nL2hlcm8vYXBwbGUucG5nXCIsXHJcbiAgICB3aWR0aDpcIjY0MFwiLFxyXG4gICAgaGVpZ2h0OiBcIjM5OFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICBpZDogXCI2XCIsICAgIFxyXG4gICAgdGl0bGU6IFwiSW5mYW50IG51cnNlcnlcIixcclxuICAgIHRpdGxlZnI6IFwiUG91cG9ubmnDqHJlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgZGVzY3JpcHRpb25mcjpcIlwiLCAgICBcclxuICAgIGltYWdlOlwiL2Fzc2V0cy9pbWcvaGVyby9raWQucG5nXCIsXHJcbiAgICB3aWR0aDpcIjM3OVwiLFxyXG4gICAgaGVpZ2h0OiBcIjM3NFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICBpZDogXCI3XCIsICAgIFxyXG4gICAgdGl0bGU6IFwiTG9jYXRlZCBhdCB0aGUgY29sbGVnZVwiLFxyXG4gICAgdGl0bGVmcjogXCJTaXR1ZSBhdSBDb2xsw6hnZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIGRlc2NyaXB0aW9uZnI6XCJcIixcclxuICAgIGltYWdlOlwiL2Fzc2V0cy9pbWcvaGVyby9jb2xsZWdlLnBuZ1wiLFxyXG4gICAgd2lkdGg6XCI2NDBcIixcclxuICAgIGhlaWdodDogXCIzOThcIixcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHsgICAgXHJcbiAgICBpZDpcIjhcIiwgXHJcbiAgICB0aXRsZTogXCJMZXQncyBHZXQgaW4gVG91Y2hcIixcclxuICAgIHRpdGxlZnI6IFwiQ29tbXVuaXF1ZXogYXZlYyBub3VzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IG91ciBkYXljYXJlIG9yIHByZXNjaG9vbCBzZXJ2aWNlcyBjb250YWN0IHVzIHRvZGF5LCBhbmQgZmVlbCBmcmVlIHRvIGNhbGwgdXMgYXQgNTA2LTU0OC04MDY5IHRvZGF5IVwiLFxyXG4gICAgZGVzY3JpcHRpb25mcjogXCJQb3VyIHBsdXMgZCdpbmZvcm1hdGlvbnMgc3VyIG5vcyBzZXJ2aWNlcyBkZSBnYXJkZSBvdSBwcsOpc2NvbGFpcmVzLCBjb250YWN0ZXotbm91cyBkw6hzIGF1am91cmQnaHVpIGV0IG4naMOpc2l0ZXogcGFzIMOgIG5vdXMgYXBwZWxlciBhdSA1MDYtNTQ4LTgwNjkgZMOocyBhdWpvdXJkJ2h1aSFcIixcclxuICAgIGltYWdlOlwiL2Fzc2V0cy9pbWcvaGVyby9waG9uZS5wbmdcIixcclxuICAgIHdpZHRoOlwiNjQwXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzk4XCIsXHJcbiAgICB9LFxyXG5cclxuXTtcclxuIFxyXG5cclxuZnVuY3Rpb24gU2VydmljZXNMaXN0KHByb3BzKSB7XHJcblxyXG4gICAgbGV0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzZXJ2aWNlcyA9IHByb3BzLnNlcnZpY2VzO1xyXG4gIGNvbnN0IEl0ZW1zID0gc2VydmljZXMuc2xpY2UoMCwgOCkubWFwKChpdGVtKSA9PlxyXG4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWFsaXR5X19jb2xcIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbGl0eV9faXRlbVwiIGRhdGEtYW9zPVwiem9vbS1pbi1yaWdodFwiIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tc2luZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFsaXR5X19pY29uXCI+PGRpdiAgY2xhc3NOYW1lPVwicXVhbGl0eV9fcGljXCI+PEltYWdlIHNyYz17aXRlbS5pbWFnZX0gd2lkdGg9e2l0ZW0ud2lkdGh9IGhlaWdodD17aXRlbS5oZWlnaHR9IGFsdD17aXRlbS50aXRsZX0gLz48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbGl0eV9fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YWxpdHlfX2NhdGVnb3J5XCI+e3JvdXRlci5sb2NhbGUgPT09IFwiZnJcIiA/IGl0ZW0udGl0bGVmciAgOiBpdGVtLnRpdGxlICB9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbGl0eV9fdGV4dFwiPntyb3V0ZXIubG9jYWxlID09PSBcImZyXCIgPyBpdGVtLmRlc2NyaXB0aW9uZnIgIDogaXRlbS5kZXNjcmlwdGlvbiAgfTwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgIDw+e0l0ZW1zfTwvPiBcclxuICApO1xyXG59XHJcbmNvbnN0IGFsbFNlcnZpY2VzID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFsaXR5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YWxpdHlfX2JvZHlcIj5cclxuXHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc0xpc3Qgc2VydmljZXM9e3NlcnZpY2VzfSAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFsaXR5X19jaXJjbGVzXCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YWxpdHlfX2NpcmNsZVwiIGRhdGEtYW9zPVwiem9vbS1pbi1yaWdodFwiIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tc2luZVwiIGRhdGEtYW9zLWRlbGF5PVwiMTIwMFwiPiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFsaXR5X19jaXJjbGVcIj4gPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gXHJcblx0KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsU2VydmljZXMiXSwic291cmNlUm9vdCI6IiJ9