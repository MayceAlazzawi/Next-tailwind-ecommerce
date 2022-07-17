"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar productScreen = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var slug = query.slug;\n    var product = _utils_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.find(function(x) {\n        return x.slug === slug;\n    });\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Product Not Found\"\n        }, void 0, false, {\n            fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/\",\n                    children: \"Back to product\"\n                }, void 0, false, {\n                    fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-4 md:gap-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:col-span-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayce/Development/code/learn/next-tailwind-amazoni/pages/product/[slug].js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(productScreen, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productScreen);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFtQztBQUNLO0FBQ2Y7QUFDbUI7QUFDZjs7QUFFN0IsSUFBTUssYUFBYSxHQUFHLFdBQU07O0lBQzFCLElBQU0sS0FBTyxHQUFLSixzREFBUyxFQUFFLENBQXJCSyxLQUFLO0lBQ2IsSUFBTSxJQUFNLEdBQUtBLEtBQUssQ0FBZEMsSUFBSTtJQUNaLElBQU1DLE9BQU8sR0FBR1IsaUVBQWtCLENBQUNXLFNBQUFBLENBQUM7ZUFBSUEsQ0FBQyxDQUFDSixJQUFJLEtBQUtBLElBQUk7S0FBQSxDQUFDO0lBQ3hELElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ1oscUJBQU8sOERBQUNJLEtBQUc7c0JBQUMsbUJBQWlCOzs7OztpQkFBTTtLQUNwQztJQUNELHFCQUNFLDhEQUFDVCwwREFBTTtRQUFDVSxLQUFLLEVBQUVMLE9BQU8sQ0FBQ00sSUFBSTs7MEJBQ3pCLDhEQUFDRixLQUFHO2dCQUFDRyxTQUFTLEVBQUMsTUFBTTswQkFDbkIsNEVBQUNYLGtEQUFJO29CQUFDWSxJQUFJLEVBQUMsR0FBRzs4QkFBQyxpQkFBZTs7Ozs7eUJBQU87Ozs7O3FCQUNqQzswQkFDTiw4REFBQ0osS0FBRztnQkFBQ0csU0FBUyxFQUFDLDhCQUE4QjswQkFDM0MsNEVBQUNILEtBQUc7b0JBQUNHLFNBQVMsRUFBQyxlQUFlOzs7Ozt5QkFFeEI7Ozs7O3FCQUNGOzs7Ozs7YUFDQyxDQUNWO0NBQ0Y7R0FuQktWLGFBQWE7O1FBQ0NKLGtEQUFTOzs7QUFvQjdCLCtEQUFlSSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vdXRpbHMvZGF0YSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBwcm9kdWN0U2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzbHVnIH0gPSBxdWVyeTtcbiAgY29uc3QgcHJvZHVjdCA9IGRhdGEucHJvZHVjdHMuZmluZCh4ID0+IHguc2x1ZyA9PT0gc2x1ZylcbiAgaWYgKCFwcm9kdWN0KSB7XG4gICAgcmV0dXJuIDxkaXY+UHJvZHVjdCBOb3QgRm91bmQ8L2Rpdj5cbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9e3Byb2R1Y3QubmFtZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPkJhY2sgdG8gcHJvZHVjdDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgbWQ6Z3JpZC1jb2xzLTQgbWQ6Z2FwLTMnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6Y29sLXNwYW4tMic+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0U2NyZWVuIl0sIm5hbWVzIjpbImRhdGEiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIkxheW91dCIsIkxpbmsiLCJwcm9kdWN0U2NyZWVuIiwicXVlcnkiLCJzbHVnIiwicHJvZHVjdCIsInByb2R1Y3RzIiwiZmluZCIsIngiLCJkaXYiLCJ0aXRsZSIsIm5hbWUiLCJjbGFzc05hbWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});