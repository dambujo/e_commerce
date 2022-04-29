"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nconst Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst StateContext = ({\n  children\n}) => {\n  _s();\n\n  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  let foundProduct;\n  let index;\n\n  const onAdd = (product, quantity) => {\n    const checkProductInCart = cartItems.find(item => item._id === product._id);\n    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);\n    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);\n\n    if (checkProductInCart) {\n      const updateCartItems = cartItems.map(cartProduct => {\n        if (cartProduct._id === product._id) return { ...cartProduct,\n          quantity: cartProduct.quantity + quantity\n        };\n      });\n      setCardItems(updateCartItems);\n    } else {\n      product.quantity = quantity;\n      setCartItems([...cartItems, { ...product\n      }]);\n    }\n\n    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${qty} ${product.name} added to the cart.`);\n  };\n\n  const onRemove = product => {\n    foundProduct = cartItems.find(item => item._id === product._id);\n    const newCartItems = cartItems.filter(item => item._id !== product._id);\n    setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity);\n    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);\n    setCartItems(newCartItems);\n  };\n\n  const toggleCartItemQuanitity = (id, value) => {\n    foundProduct = cartItems.find(item => item._id === id);\n    index = cartItems.findIndex(product => product._id === id);\n    const newCartItems = cartItems.filter(item => item._id !== id);\n\n    if (value === 'inc') {\n      setCartItems(cartItems.map((item, i) => i === index ? { ...foundProduct,\n        quantity: foundProduct.quantity + 1\n      } : item));\n      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price);\n      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);\n    } else if (value === 'dec') {\n      if (foundProduct.quantity > 1) {\n        setCartItems(cartItems.map((item, i) => i === index ? { ...foundProduct,\n          quantity: foundProduct.quantity - 1\n        } : item));\n        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price);\n        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);\n      }\n    }\n  };\n\n  const incQty = () => {\n    setQty(prevQty => prevQty + 1);\n  };\n\n  const decQty = () => {\n    setQty(prevQty => {\n      if (prevQty - 1 < 1) return 1;\n      return prevQty - 1;\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {\n    value: {\n      showCart,\n      cartItems,\n      totalPrice,\n      totalQuantities,\n      qty,\n      incQty,\n      decQty,\n      onAdd,\n      setShowCart,\n      toggleCartItemQuanitity,\n      onRemove,\n      setCartItems,\n      setTotalPrice\n    }\n  }, children);\n};\n\n_s(StateContext, \"lTN9mPmtXpsm72zCYW+oCcRZHaw=\");\n\n_c = StateContext;\nconst useStateContext = () => {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n};\n\n_s2(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"StateContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVo7QUFPQVosUUFBQUEsYUFBYSxDQUFFYyxjQUFELElBQW9CQSxjQUFjLEdBQUdULFlBQVksQ0FBQ1UsS0FBbkQsQ0FBYjtBQUNBYixRQUFBQSxrQkFBa0IsQ0FBRWMsbUJBQUQsSUFBeUJBLG1CQUFtQixHQUFHLENBQWhELENBQWxCO0FBQ0Q7QUFDRjtBQUNGLEdBNUJEOztBQThCQSxRQUFNZSxNQUFNLEdBQUcsTUFBTTtBQUNuQjNCLElBQUFBLE1BQU0sQ0FBRTRCLE9BQUQsSUFBYUEsT0FBTyxHQUFHLENBQXhCLENBQU47QUFDRCxHQUZEOztBQUdBLFFBQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CN0IsSUFBQUEsTUFBTSxDQUFFNEIsT0FBRCxJQUFhO0FBQ2xCLFVBQUlBLE9BQU8sR0FBRyxDQUFWLEdBQWMsQ0FBbEIsRUFBcUIsT0FBTyxDQUFQO0FBRXJCLGFBQU9BLE9BQU8sR0FBRyxDQUFqQjtBQUNELEtBSkssQ0FBTjtBQUtELEdBTkQ7O0FBUUEsc0JBQ0UsMkRBQUMsT0FBRCxDQUFTLFFBQVQ7QUFDRSxTQUFLLEVBQUU7QUFDTHJDLE1BQUFBLFFBREs7QUFFTEUsTUFBQUEsU0FGSztBQUdMRSxNQUFBQSxVQUhLO0FBSUxFLE1BQUFBLGVBSks7QUFLTEUsTUFBQUEsR0FMSztBQU1MNEIsTUFBQUEsTUFOSztBQU9MRSxNQUFBQSxNQVBLO0FBUUwxQixNQUFBQSxLQVJLO0FBU0xYLE1BQUFBLFdBVEs7QUFVTDhCLE1BQUFBLHVCQVZLO0FBV0xILE1BQUFBLFFBWEs7QUFZTHpCLE1BQUFBLFlBWks7QUFhTEUsTUFBQUE7QUFiSztBQURULEtBaUJHTixRQWpCSCxDQURGO0FBcUJELENBaEhNOztHQUFNRDs7S0FBQUE7QUFrSE4sTUFBTXlDLGVBQWUsR0FBRztBQUFBOztBQUFBLFNBQU05QyxpREFBVSxDQUFDSSxPQUFELENBQWhCO0FBQUEsQ0FBeEI7O0lBQU0wQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b3RhbFF1YW50aXRpZXMsIHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGxldCBmb3VuZFByb2R1Y3Q7XG4gIGxldCBpbmRleDtcblxuICBjb25zdCBvbkFkZCA9IChwcm9kdWN0LCBxdWFudGl0eSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IGNhcnRJdGVtcy5maW5kKFxuICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBwcm9kdWN0Ll9pZCxcbiAgICApO1xuICAgIHNldFRvdGFsUHJpY2UoXG4gICAgICAocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlICsgcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5LFxuICAgICk7XG4gICAgc2V0VG90YWxRdWFudGl0aWVzKChwcmV2VG90YWxRdWFudGl0aWVzKSA9PiBwcmV2VG90YWxRdWFudGl0aWVzICsgcXVhbnRpdHkpO1xuICAgIGlmIChjaGVja1Byb2R1Y3RJbkNhcnQpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZUNhcnRJdGVtcyA9IGNhcnRJdGVtcy5tYXAoKGNhcnRQcm9kdWN0KSA9PiB7XG4gICAgICAgIGlmIChjYXJ0UHJvZHVjdC5faWQgPT09IHByb2R1Y3QuX2lkKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jYXJ0UHJvZHVjdCxcbiAgICAgICAgICAgIHF1YW50aXR5OiBjYXJ0UHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5LFxuICAgICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgc2V0Q2FyZEl0ZW1zKHVwZGF0ZUNhcnRJdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSBxdWFudGl0eTtcblxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIHsgLi4ucHJvZHVjdCB9XSk7XG4gICAgfVxuICAgIHRvYXN0LnN1Y2Nlc3MoYCR7cXR5fSAke3Byb2R1Y3QubmFtZX0gYWRkZWQgdG8gdGhlIGNhcnQuYCk7XG4gIH07XG5cbiAgY29uc3Qgb25SZW1vdmUgPSAocHJvZHVjdCkgPT4ge1xuICAgIGZvdW5kUHJvZHVjdCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gcHJvZHVjdC5faWQpO1xuICAgIGNvbnN0IG5ld0NhcnRJdGVtcyA9IGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBwcm9kdWN0Ll9pZCk7XG5cbiAgICBzZXRUb3RhbFByaWNlKFxuICAgICAgKHByZXZUb3RhbFByaWNlKSA9PlxuICAgICAgICBwcmV2VG90YWxQcmljZSAtIGZvdW5kUHJvZHVjdC5wcmljZSAqIGZvdW5kUHJvZHVjdC5xdWFudGl0eSxcbiAgICApO1xuICAgIHNldFRvdGFsUXVhbnRpdGllcyhcbiAgICAgIChwcmV2VG90YWxRdWFudGl0aWVzKSA9PiBwcmV2VG90YWxRdWFudGl0aWVzIC0gZm91bmRQcm9kdWN0LnF1YW50aXR5LFxuICAgICk7XG4gICAgc2V0Q2FydEl0ZW1zKG5ld0NhcnRJdGVtcyk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ2FydEl0ZW1RdWFuaXRpdHkgPSAoaWQsIHZhbHVlKSA9PiB7XG4gICAgZm91bmRQcm9kdWN0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZCk7XG4gICAgaW5kZXggPSBjYXJ0SXRlbXMuZmluZEluZGV4KChwcm9kdWN0KSA9PiBwcm9kdWN0Ll9pZCA9PT0gaWQpO1xuICAgIGNvbnN0IG5ld0NhcnRJdGVtcyA9IGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBpZCk7XG5cbiAgICBpZiAodmFsdWUgPT09ICdpbmMnKSB7XG4gICAgICBzZXRDYXJ0SXRlbXMoXG4gICAgICAgIGNhcnRJdGVtcy5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXhcbiAgICAgICAgICAgID8geyAuLi5mb3VuZFByb2R1Y3QsIHF1YW50aXR5OiBmb3VuZFByb2R1Y3QucXVhbnRpdHkgKyAxIH1cbiAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICBzZXRUb3RhbFByaWNlKChwcmV2VG90YWxQcmljZSkgPT4gcHJldlRvdGFsUHJpY2UgKyBmb3VuZFByb2R1Y3QucHJpY2UpO1xuICAgICAgc2V0VG90YWxRdWFudGl0aWVzKChwcmV2VG90YWxRdWFudGl0aWVzKSA9PiBwcmV2VG90YWxRdWFudGl0aWVzICsgMSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2RlYycpIHtcbiAgICAgIGlmIChmb3VuZFByb2R1Y3QucXVhbnRpdHkgPiAxKSB7XG4gICAgICAgIHNldENhcnRJdGVtcyhcbiAgICAgICAgICBjYXJ0SXRlbXMubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgaSA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgPyB7IC4uLmZvdW5kUHJvZHVjdCwgcXVhbnRpdHk6IGZvdW5kUHJvZHVjdC5xdWFudGl0eSAtIDEgfVxuICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlIC0gZm91bmRQcm9kdWN0LnByaWNlKTtcbiAgICAgICAgc2V0VG90YWxRdWFudGl0aWVzKChwcmV2VG90YWxRdWFudGl0aWVzKSA9PiBwcmV2VG90YWxRdWFudGl0aWVzIC0gMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGluY1F0eSA9ICgpID0+IHtcbiAgICBzZXRRdHkoKHByZXZRdHkpID0+IHByZXZRdHkgKyAxKTtcbiAgfTtcbiAgY29uc3QgZGVjUXR5ID0gKCkgPT4ge1xuICAgIHNldFF0eSgocHJldlF0eSkgPT4ge1xuICAgICAgaWYgKHByZXZRdHkgLSAxIDwgMSkgcmV0dXJuIDE7XG5cbiAgICAgIHJldHVybiBwcmV2UXR5IC0gMTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzaG93Q2FydCxcbiAgICAgICAgY2FydEl0ZW1zLFxuICAgICAgICB0b3RhbFByaWNlLFxuICAgICAgICB0b3RhbFF1YW50aXRpZXMsXG4gICAgICAgIHF0eSxcbiAgICAgICAgaW5jUXR5LFxuICAgICAgICBkZWNRdHksXG4gICAgICAgIG9uQWRkLFxuICAgICAgICBzZXRTaG93Q2FydCxcbiAgICAgICAgdG9nZ2xlQ2FydEl0ZW1RdWFuaXRpdHksXG4gICAgICAgIG9uUmVtb3ZlLFxuICAgICAgICBzZXRDYXJ0SXRlbXMsXG4gICAgICAgIHNldFRvdGFsUHJpY2UsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU3RhdGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFRvdGFsUXVhbnRpdGllcyIsInF0eSIsInNldFF0eSIsImZvdW5kUHJvZHVjdCIsImluZGV4Iiwib25BZGQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJmaW5kIiwiaXRlbSIsIl9pZCIsInByZXZUb3RhbFByaWNlIiwicHJpY2UiLCJwcmV2VG90YWxRdWFudGl0aWVzIiwidXBkYXRlQ2FydEl0ZW1zIiwibWFwIiwiY2FydFByb2R1Y3QiLCJzZXRDYXJkSXRlbXMiLCJzdWNjZXNzIiwibmFtZSIsIm9uUmVtb3ZlIiwibmV3Q2FydEl0ZW1zIiwiZmlsdGVyIiwidG9nZ2xlQ2FydEl0ZW1RdWFuaXRpdHkiLCJpZCIsInZhbHVlIiwiZmluZEluZGV4IiwiaSIsImluY1F0eSIsInByZXZRdHkiLCJkZWNRdHkiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});