"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FooterBanner.jsx":
/*!*************************************!*\
  !*** ./components/FooterBanner.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n\n\n\n\nconst FooterBanner = ({\n  footerBanner: {\n    discount,\n    largeText1,\n    largeText2,\n    saleTime,\n    smallText,\n    midText,\n    product,\n    buttonText,\n    image,\n    desc\n  }\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer-banner-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"banner-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, discount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, largeText1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, largeText2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, saleTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, smallText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, midText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n    href: `/product/${product}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\"\n  }, buttonText))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(image),\n    className: \"footer-banner-mage\"\n  })));\n};\n\n_c = FooterBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FooterBanner);\n\nvar _c;\n\n$RefreshReg$(_c, \"FooterBanner\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3RlckJhbm5lci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1HLFlBQVksR0FBRyxDQUFDO0FBQ3BCQyxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsUUFEWTtBQUVaQyxJQUFBQSxVQUZZO0FBR1pDLElBQUFBLFVBSFk7QUFJWkMsSUFBQUEsUUFKWTtBQUtaQyxJQUFBQSxTQUxZO0FBTVpDLElBQUFBLE9BTlk7QUFPWkMsSUFBQUEsT0FQWTtBQVFaQyxJQUFBQSxVQVJZO0FBU1pDLElBQUFBLEtBVFk7QUFVWkMsSUFBQUE7QUFWWTtBQURNLENBQUQsS0FhZjtBQUNKLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLHNFQUFJVCxRQUFKLENBREYsZUFFRSx1RUFBS0MsVUFBTCxDQUZGLGVBR0UsdUVBQUtDLFVBQUwsQ0FIRixlQUlFLHNFQUFJQyxRQUFKLENBSkYsQ0FERixlQU9FO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0Usc0VBQUlDLFNBQUosQ0FERixlQUVFLHVFQUFLQyxPQUFMLENBRkYsZUFHRSxzRUFBSUksSUFBSixDQUhGLGVBSUUsMkRBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUcsWUFBV0gsT0FBUTtBQUFoQyxrQkFDRTtBQUFRLFFBQUksRUFBQztBQUFiLEtBQXVCQyxVQUF2QixDQURGLENBSkYsQ0FQRixlQWVFO0FBQUssT0FBRyxFQUFFVixtREFBTSxDQUFDVyxLQUFELENBQWhCO0FBQXlCLGFBQVMsRUFBQztBQUFuQyxJQWZGLENBREYsQ0FERjtBQXFCRCxDQW5DRDs7S0FBTVY7QUFxQ04sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXJCYW5uZXIuanN4Pzc0OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICcuLi9saWIvY2xpZW50JztcblxuY29uc3QgRm9vdGVyQmFubmVyID0gKHtcbiAgZm9vdGVyQmFubmVyOiB7XG4gICAgZGlzY291bnQsXG4gICAgbGFyZ2VUZXh0MSxcbiAgICBsYXJnZVRleHQyLFxuICAgIHNhbGVUaW1lLFxuICAgIHNtYWxsVGV4dCxcbiAgICBtaWRUZXh0LFxuICAgIHByb2R1Y3QsXG4gICAgYnV0dG9uVGV4dCxcbiAgICBpbWFnZSxcbiAgICBkZXNjLFxuICB9LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJhbm5lci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWRlc2NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgPHA+e2Rpc2NvdW50fTwvcD5cbiAgICAgICAgICA8aDM+e2xhcmdlVGV4dDF9PC9oMz5cbiAgICAgICAgICA8aDM+e2xhcmdlVGV4dDJ9PC9oMz5cbiAgICAgICAgICA8cD57c2FsZVRpbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICAgIDxwPntzbWFsbFRleHR9PC9wPlxuICAgICAgICAgIDxoMz57bWlkVGV4dH08L2gzPlxuICAgICAgICAgIDxwPntkZXNjfTwvcD5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0fWB9PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+e2J1dHRvblRleHR9PC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9e3VybEZvcihpbWFnZSl9IGNsYXNzTmFtZT1cImZvb3Rlci1iYW5uZXItbWFnZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckJhbm5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1cmxGb3IiLCJGb290ZXJCYW5uZXIiLCJmb290ZXJCYW5uZXIiLCJkaXNjb3VudCIsImxhcmdlVGV4dDEiLCJsYXJnZVRleHQyIiwic2FsZVRpbWUiLCJzbWFsbFRleHQiLCJtaWRUZXh0IiwicHJvZHVjdCIsImJ1dHRvblRleHQiLCJpbWFnZSIsImRlc2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FooterBanner.jsx\n");

/***/ })

});