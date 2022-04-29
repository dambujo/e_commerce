"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n//import Stripe from 'stripe';\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    console.log(req.body.cartItems);\n\n    try {\n      const params = {\n        submit_type: 'pay',\n        mode: 'payment',\n        payment_method_types: ['card'],\n        billing_address_collection: 'auto',\n        shipping_options: [{\n          shipping_rate: 'shr_1KtW0IFV758jyVbVsDpBagrl'\n        }, {\n          shipping_rate: 'shr_1KtWIaFV758jyVbVeHlQN8Nh'\n        }, {\n          shipping_rate: 'shr_1KtqBQFV758jyVbVHJK0b3Ph'\n        }],\n        line_items: req.body.map(item => {\n          const img = item.image[0].asset._ref;\n          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/zq4m7xtn/production/').replace('-web', '.web');\n          return {\n            price_data: {\n              currency: 'usd',\n              product_data: {\n                name: item.name,\n                images: [newImage]\n              },\n              unit_amount: item.price * 100\n            },\n            adjustable_quantity: {\n              enabled: true,\n              minimum: 1\n            },\n            quantity: item.quantity\n          };\n        }),\n        success_url: `${req.headers.origin}/success`,\n        cancel_url: `${req.headers.origin}/canceled`\n      }; // Create Checkout Sessions from body params.\n\n      const session = await stripe.checkout.sessions.create(params);\n      res.status(200).json(session);\n    } catch (err) {\n      res.status(err.statusCode || 500).json(err.message);\n    }\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method Not Allowed');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEI7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3BhZ2VzL2FwaS9zdHJpcGUuanM/ZDc4OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcblxuY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keS5jYXJ0SXRlbXMpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHN1Ym1pdF90eXBlOiAncGF5JyxcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAnYXV0bycsXG4gICAgICAgIHNoaXBwaW5nX29wdGlvbnM6IFtcbiAgICAgICAgICB7IHNoaXBwaW5nX3JhdGU6ICdzaHJfMUt0VzBJRlY3NThqeVZiVnNEcEJhZ3JsJyB9LFxuICAgICAgICAgIHsgc2hpcHBpbmdfcmF0ZTogJ3Nocl8xS3RXSWFGVjc1OGp5VmJWZUhsUU44TmgnIH0sXG4gICAgICAgICAgeyBzaGlwcGluZ19yYXRlOiAnc2hyXzFLdHFCUUZWNzU4anlWYlZISkswYjNQaCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbGluZV9pdGVtczogcmVxLmJvZHkubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW1nID0gaXRlbS5pbWFnZVswXS5hc3NldC5fcmVmO1xuICAgICAgICAgIGNvbnN0IG5ld0ltYWdlID0gaW1nXG4gICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgJ2ltYWdlLScsXG4gICAgICAgICAgICAgICdodHRwczovL2Nkbi5zYW5pdHkuaW8vaW1hZ2VzL3pxNG03eHRuL3Byb2R1Y3Rpb24vJyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5yZXBsYWNlKCctd2ViJywgJy53ZWInKTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgIGN1cnJlbmN5OiAndXNkJyxcbiAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGltYWdlczogW25ld0ltYWdlXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRqdXN0YWJsZV9xdWFudGl0eToge1xuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9zdWNjZXNzYCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9jYW5jZWxlZGAsXG4gICAgICB9O1xuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZShwYXJhbXMpO1xuXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzZXNzaW9uKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBOb3QgQWxsb3dlZCcpO1xuICB9XG59XG4iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImNhcnRJdGVtcyIsInBhcmFtcyIsInN1Ym1pdF90eXBlIiwibW9kZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJzaGlwcGluZ19vcHRpb25zIiwic2hpcHBpbmdfcmF0ZSIsImxpbmVfaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW1nIiwiaW1hZ2UiLCJhc3NldCIsIl9yZWYiLCJuZXdJbWFnZSIsInJlcGxhY2UiLCJwcmljZV9kYXRhIiwiY3VycmVuY3kiLCJwcm9kdWN0X2RhdGEiLCJuYW1lIiwiaW1hZ2VzIiwidW5pdF9hbW91bnQiLCJwcmljZSIsImFkanVzdGFibGVfcXVhbnRpdHkiLCJlbmFibGVkIiwibWluaW11bSIsInF1YW50aXR5Iiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwic3RhdHVzIiwianNvbiIsImVyciIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();