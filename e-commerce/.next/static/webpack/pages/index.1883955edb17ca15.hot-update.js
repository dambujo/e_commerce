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

/***/ "./components/HeroBanner.jsx":
/*!***********************************!*\
  !*** ./components/HeroBanner.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n\n\n\n\nconst HeroBanner = ({\n  heroBanner\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"hero-banner-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"beats-solo\"\n  }, heroBanner.smallText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, heroBanner.midText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, heroBanner.largeText1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(heroBanner.image),\n    alt: \"headphones\",\n    className: \"hero-banner-image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n    href: `/product/${heroBanner.product}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\"\n  }, \"BUTTON TEXT\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"DESCRIPTION\")))));\n};\n\n_c = HeroBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroBanner);\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroBanner\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm9CYW5uZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNRyxVQUFVLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBb0I7QUFDckMsc0JBQ0UscUZBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQTJCQSxVQUFVLENBQUNDLFNBQXRDLENBREYsZUFFRSx1RUFBS0QsVUFBVSxDQUFDRSxPQUFoQixDQUZGLGVBR0UsdUVBQUtGLFVBQVUsQ0FBQ0csVUFBaEIsQ0FIRixlQUlFO0FBQ0UsT0FBRyxFQUFFTCxtREFBTSxDQUFDRSxVQUFVLENBQUNJLEtBQVosQ0FEYjtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBR0UsYUFBUyxFQUFDO0FBSFosSUFKRixlQVNFLHFGQUNFLDJEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFHLFlBQVdKLFVBQVUsQ0FBQ0ssT0FBUTtBQUEzQyxrQkFDRTtBQUFRLFFBQUksRUFBQztBQUFiLG1CQURGLENBREYsZUFJRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLHFGQURGLGVBRUUsb0ZBRkYsQ0FKRixDQVRGLENBREYsQ0FERjtBQXVCRCxDQXhCRDs7S0FBTU47QUEwQk4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvQmFubmVyLmpzeD83ZGU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICcuLi9saWIvY2xpZW50JztcblxuY29uc3QgSGVyb0Jhbm5lciA9ICh7IGhlcm9CYW5uZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYmFubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJiZWF0cy1zb2xvXCI+e2hlcm9CYW5uZXIuc21hbGxUZXh0fTwvcD5cbiAgICAgICAgPGgzPntoZXJvQmFubmVyLm1pZFRleHR9PC9oMz5cbiAgICAgICAgPGgxPntoZXJvQmFubmVyLmxhcmdlVGV4dDF9PC9oMT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dXJsRm9yKGhlcm9CYW5uZXIuaW1hZ2UpfVxuICAgICAgICAgIGFsdD1cImhlYWRwaG9uZXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8tYmFubmVyLWltYWdlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtoZXJvQmFubmVyLnByb2R1Y3R9YH0+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5CVVRUT04gVEVYVDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cbiAgICAgICAgICAgIDxoNT5EZXNjcmlwdGlvbjwvaDU+XG4gICAgICAgICAgICA8cD5ERVNDUklQVElPTjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9CYW5uZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXJsRm9yIiwiSGVyb0Jhbm5lciIsImhlcm9CYW5uZXIiLCJzbWFsbFRleHQiLCJtaWRUZXh0IiwibGFyZ2VUZXh0MSIsImltYWdlIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeroBanner.jsx\n");

/***/ })

});