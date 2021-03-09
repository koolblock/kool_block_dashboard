webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"../node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"../node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"../node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"../node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ \"../node_modules/@material-ui/icons/Search.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"../node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ \"../node_modules/@material-ui/core/esm/Link/index.js\");\nvar _jsxFileName = \"/Users/danielson/Desktop/kool_block_dashboard/app/components/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    toolbar: {\n      borderBottom: \"1px solid black\"\n    },\n    toolbarTitle: {\n      flex: 1\n    },\n    toolbarSecondary: {\n      justifyContent: \"space-between\",\n      overflowX: \"auto\"\n    },\n    toolbarLink: {\n      padding: theme.spacing(1),\n      flexShrink: 0\n    }\n  };\n});\nfunction Header(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n  var sections = props.sections,\n      title = props.title;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.toolbar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Subscribe\"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    component: \"h2\",\n    variant: \"h5\",\n    color: \"inherit\",\n    align: \"center\",\n    noWrap: true,\n    className: classes.toolbarTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, title), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    variant: \"outlined\",\n    size: \"small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"Sign up\")), __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    component: \"nav\",\n    variant: \"dense\",\n    className: classes.toolbarSecondary,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, sections.map(function (section) {\n    return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      color: \"inherit\",\n      noWrap: true,\n      key: section.title,\n      variant: \"body2\",\n      href: section.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }\n    }, section.title);\n  })));\n}\n\n_s(Header, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Header;\nHeader.propTypes = {\n  sections: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/@keystonejs/app-next/node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/@keystonejs/app-next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0b29sYmFyIiwiYm9yZGVyQm90dG9tIiwidG9vbGJhclRpdGxlIiwiZmxleCIsInRvb2xiYXJTZWNvbmRhcnkiLCJqdXN0aWZ5Q29udGVudCIsIm92ZXJmbG93WCIsInRvb2xiYXJMaW5rIiwicGFkZGluZyIsInNwYWNpbmciLCJmbGV4U2hyaW5rIiwiSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwic2VjdGlvbnMiLCJ0aXRsZSIsIm1hcCIsInNlY3Rpb24iLCJ1cmwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxXQUFPLEVBQUU7QUFDUEMsa0JBQVk7QUFETCxLQUQ4QjtBQUl2Q0MsZ0JBQVksRUFBRTtBQUNaQyxVQUFJLEVBQUU7QUFETSxLQUp5QjtBQU92Q0Msb0JBQWdCLEVBQUU7QUFDaEJDLG9CQUFjLEVBQUUsZUFEQTtBQUVoQkMsZUFBUyxFQUFFO0FBRkssS0FQcUI7QUFXdkNDLGVBQVcsRUFBRTtBQUNYQyxhQUFPLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjLENBQWQsQ0FERTtBQUVYQyxnQkFBVSxFQUFFO0FBRkQ7QUFYMEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFpQmUsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQTs7QUFDcEMsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQURvQyxNQUU1QmlCLFFBRjRCLEdBRVJGLEtBRlEsQ0FFNUJFLFFBRjRCO0FBQUEsTUFFbEJDLEtBRmtCLEdBRVJILEtBRlEsQ0FFbEJHLEtBRmtCO0FBSXBDLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBUyxhQUFTLEVBQUVGLE9BQU8sQ0FBQ2IsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUUsTUFBQyxvRUFBRDtBQUNFLGFBQVMsRUFBQyxJQURaO0FBRUUsV0FBTyxFQUFDLElBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFNBQUssRUFBQyxRQUpSO0FBS0UsVUFBTSxNQUxSO0FBTUUsYUFBUyxFQUFFYSxPQUFPLENBQUNYLFlBTnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR2EsS0FSSCxDQUZGLEVBWUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixFQWVFLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUMsVUFBaEI7QUFBMkIsUUFBSSxFQUFDLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixDQURGLEVBb0JFLE1BQUMsaUVBQUQ7QUFDRSxhQUFTLEVBQUMsS0FEWjtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsYUFBUyxFQUFFRixPQUFPLENBQUNULGdCQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dVLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSxXQUNaLE1BQUMsOERBQUQ7QUFDRSxXQUFLLEVBQUMsU0FEUjtBQUVFLFlBQU0sTUFGUjtBQUdFLFNBQUcsRUFBRUEsT0FBTyxDQUFDRixLQUhmO0FBSUUsYUFBTyxFQUFDLE9BSlY7QUFLRSxVQUFJLEVBQUVFLE9BQU8sQ0FBQ0MsR0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9HRCxPQUFPLENBQUNGLEtBUFgsQ0FEWTtBQUFBLEdBQWIsQ0FMSCxDQXBCRixDQURGO0FBd0NEOztHQTVDdUJKLE07VUFDTmQsUzs7O0tBRE1jLE07QUE4Q3hCQSxNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDakJMLFVBQVEsRUFBRU0saURBQVMsQ0FBQ0MsS0FESDtBQUVqQk4sT0FBSyxFQUFFSyxpREFBUyxDQUFDRTtBQUZBLENBQW5CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRvb2xiYXI6IHtcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgYmxhY2tgLFxuICB9LFxuICB0b29sYmFyVGl0bGU6IHtcbiAgICBmbGV4OiAxLFxuICB9LFxuICB0b29sYmFyU2Vjb25kYXJ5OiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIG92ZXJmbG93WDogXCJhdXRvXCIsXG4gIH0sXG4gIHRvb2xiYXJMaW5rOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHNlY3Rpb25zLCB0aXRsZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+U3Vic2NyaWJlPC9CdXR0b24+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgbm9XcmFwXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJUaXRsZX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgU2lnbiB1cFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDxUb29sYmFyXG4gICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICAgIHZhcmlhbnQ9XCJkZW5zZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyU2Vjb25kYXJ5fVxuICAgICAgPlxuICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgIGtleT17c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICBocmVmPXtzZWN0aW9uLnVybH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})