/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./node_modules/next/Image.js":
/*!************************************!*\
  !*** ./node_modules/next/Image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/image */ \"./node_modules/next/dist/client/image.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9JbWFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSwyR0FBK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvSW1hZ2UuanM/NTNlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/Image.js\n"));

/***/ }),

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar productScreen = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var slug = query.slug;\n    var product = _utils_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.find(function(x) {\n        return x.slug === slug;\n    });\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Product Not Found\"\n        }, void 0, false, {\n            fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/\",\n                    children: \"Back to product\"\n                }, void 0, false, {\n                    fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-4 md:gap-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:col-span-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        src: product.image,\n                        alt: product.name,\n                        width: 640,\n                        height: 640,\n                        layout: \"responsive\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(productScreen, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productScreen);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ0s7QUFDZjtBQUNtQjtBQUNmO0FBQ0U7O0FBRS9CLElBQU1NLGFBQWEsR0FBRyxXQUFNOztJQUMxQixJQUFNLEtBQU8sR0FBS0wsc0RBQVMsRUFBRSxDQUFyQk0sS0FBSztJQUNiLElBQU0sSUFBTSxHQUFLQSxLQUFLLENBQWRDLElBQUk7SUFDWixJQUFNQyxPQUFPLEdBQUdULGlFQUFrQixDQUFDWSxTQUFBQSxDQUFDO2VBQUlBLENBQUMsQ0FBQ0osSUFBSSxLQUFLQSxJQUFJO0tBQUEsQ0FBQztJQUN4RCxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUNaLHFCQUFPLDhEQUFDSSxLQUFHO3NCQUFDLG1CQUFpQjs7Ozs7aUJBQU07S0FDcEM7SUFDRCxxQkFDRSw4REFBQ1YsMERBQU07UUFBQ1csS0FBSyxFQUFFTCxPQUFPLENBQUNNLElBQUk7OzBCQUN6Qiw4REFBQ0YsS0FBRztnQkFBQ0csU0FBUyxFQUFDLE1BQU07MEJBQ25CLDRFQUFDWixrREFBSTtvQkFBQ2EsSUFBSSxFQUFDLEdBQUc7OEJBQUMsaUJBQWU7Ozs7O3lCQUFPOzs7OztxQkFDakM7MEJBQ04sOERBQUNKLEtBQUc7Z0JBQUNHLFNBQVMsRUFBQyw4QkFBOEI7MEJBQzNDLDRFQUFDSCxLQUFHO29CQUFDRyxTQUFTLEVBQUMsZUFBZTs4QkFDNUIsNEVBQUNYLG1EQUFLO3dCQUNKYSxHQUFHLEVBQUVULE9BQU8sQ0FBQ1UsS0FBSzt3QkFDbEJDLEdBQUcsRUFBRVgsT0FBTyxDQUFDTSxJQUFJO3dCQUNqQk0sS0FBSyxFQUFFLEdBQUc7d0JBQ1ZDLE1BQU0sRUFBRSxHQUFHO3dCQUNYQyxNQUFNLEVBQUMsWUFBWTs7Ozs7NkJBRWI7Ozs7O3lCQUNKOzs7OztxQkFDRjs7Ozs7O2FBQ0MsQ0FDVjtDQUNGO0dBMUJLakIsYUFBYTs7UUFDQ0wsa0RBQVM7OztBQTJCN0IsK0RBQWVLLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tICcuLi8uLi91dGlscy9kYXRhJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSc7XG5cbmNvbnN0IHByb2R1Y3RTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNsdWcgfSA9IHF1ZXJ5O1xuICBjb25zdCBwcm9kdWN0ID0gZGF0YS5wcm9kdWN0cy5maW5kKHggPT4geC5zbHVnID09PSBzbHVnKVxuICBpZiAoIXByb2R1Y3QpIHtcbiAgICByZXR1cm4gPGRpdj5Qcm9kdWN0IE5vdCBGb3VuZDwvZGl2PlxuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT17cHJvZHVjdC5uYW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cbiAgICAgICAgPExpbmsgaHJlZj0nLyc+QmFjayB0byBwcm9kdWN0PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBtZDpncmlkLWNvbHMtNCBtZDpnYXAtMyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpjb2wtc3Bhbi0yJz5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgd2lkdGg9ezY0MH1cbiAgICAgICAgICAgIGhlaWdodD17NjQwfVxuICAgICAgICAgICAgbGF5b3V0PSdyZXNwb25zaXZlJ1xuICAgICAgICAgID5cbiAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RTY3JlZW4iXSwibmFtZXMiOlsiZGF0YSIsInVzZVJvdXRlciIsIlJlYWN0IiwiTGF5b3V0IiwiTGluayIsIkltYWdlIiwicHJvZHVjdFNjcmVlbiIsInF1ZXJ5Iiwic2x1ZyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImZpbmQiLCJ4IiwiZGl2IiwidGl0bGUiLCJuYW1lIiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});