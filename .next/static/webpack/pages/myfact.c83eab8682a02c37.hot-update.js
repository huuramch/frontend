"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/myfact",{

/***/ "./src/pages/myfact/index.js":
/*!***********************************!*\
  !*** ./src/pages/myfact/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_likes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/likes */ \"./src/component/likes.js\");\n/* harmony import */ var _component_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/delete */ \"./src/component/delete.js\");\n/* harmony import */ var _component_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/update */ \"./src/component/update.js\");\n/* harmony import */ var _component_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/component/create */ \"./src/component/create.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Myfacts() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var userId = localStorage.getItem(\"userId\");\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n                var res, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"https://quizapp-0hs0.onrender.com/facts/\".concat(userId))\n                            ];\n                        case 1:\n                            res = _state.sent();\n                            console.log(res);\n                            setData(res.data);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    var handleMainButton = function() {\n        router.push(\"/\");\n    };\n    var handleMyFactButton = function() {\n        router.push(\"/myfact\");\n    };\n    var handleDeleteFact = function(factId) {\n        var updatedFacts = data.filter(function(fact) {\n            return fact._id !== factId;\n        });\n        setData(updatedFacts);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"logo\",\n                        src: \"https://scalebranding.com/wp-content/uploads/2021/01/1-48.jpgg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"nav-links\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleMainButton,\n                                        children: \"Facts\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 5\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleMyFactButton,\n                                        children: \"My Facts\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 5\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"cta\",\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"ungu\",\n                children: \"YOUR FACTS\"\n            }, void 0, false, {\n                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrapper1\",\n                children: data.map(function(value) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: value.title\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fact\",\n                                children: value.fact\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"date\",\n                                children: value.date\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_likes__WEBPACK_IMPORTED_MODULE_3__.Likes, {\n                                    likes: value.likes,\n                                    factId: value._id,\n                                    dislikes: value.dislikes\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 24\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_delete__WEBPACK_IMPORTED_MODULE_4__.Delete, {\n                                    factId: value._id,\n                                    onDelete: handleDeleteFact\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 24\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_update__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    factId: value._id\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 24\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Myfacts, \"Hi2RJgcOCJHNFGixyOoPRNMzVvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Myfacts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Myfacts);\nvar _c;\n$RefreshReg$(_c, \"Myfacts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmLEtBQUc7Z0NBQUNHLFNBQVMsRUFBQyxNQUFNOzBDQUFFVyxLQUFLLENBQUNoQixJQUFJOzs7OztxQ0FBTzswQ0FDeEMsOERBQUNFLEtBQUc7Z0NBQUNHLFNBQVMsRUFBQyxNQUFNOzBDQUFFVyxLQUFLLENBQUNFLElBQUk7Ozs7O3FDQUFPOzBDQUN4Qyw4REFBQ0MsR0FBQzswQ0FBQyw0RUFBQzNDLG1EQUFLO29DQUFDNEMsS0FBSyxFQUFFSixLQUFLLENBQUNJLEtBQUs7b0NBQUV2QixNQUFNLEVBQUVtQixLQUFLLENBQUNmLEdBQUc7b0NBQUNvQixRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFBUTs7Ozs7eUNBQUc7Ozs7O3FDQUFJOzBDQUMvRSw4REFBQ0YsR0FBQzswQ0FBQyw0RUFBQzFDLHFEQUFNO29DQUFDb0IsTUFBTSxFQUFFbUIsS0FBSyxDQUFDZixHQUFHO29DQUFFcUIsUUFBUSxFQUFFMUIsZ0JBQWdCOzs7Ozt5Q0FBSTs7Ozs7cUNBQUk7MENBQ2hFLDhEQUFDdUIsR0FBQzswQ0FBQyw0RUFBQ3pDLHlEQUFtQjtvQ0FBQ21CLE1BQU0sRUFBRW1CLEtBQUssQ0FBQ2YsR0FBRzs7Ozs7eUNBQUc7Ozs7O3FDQUFJOztvQ0FDN0MsQ0FDRjtnQkFBQSxDQUFDLENBQUM7Ozs7O29CQUVEOzs7Ozs7WUFDQSxDQUNMO0FBQ0wsQ0FBQztHQXhESnJCLE9BQU87O1FBQ0dQLGtEQUFTOzs7QUFEbkJPLEtBQUFBLE9BQU87QUEwREosK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL215ZmFjdC9pbmRleC5qcz8yZDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGlrZXMgfSBmcm9tICdAL2NvbXBvbmVudC9saWtlcyc7XG5pbXBvcnQgeyBEZWxldGUgfSBmcm9tICdAL2NvbXBvbmVudC9kZWxldGUnO1xuaW1wb3J0IFVwZGF0ZUZhY3RDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnQvdXBkYXRlJztcbmltcG9ydCBDcmVhdGUgZnJvbSAnQC9jb21wb25lbnQvY3JlYXRlJztcblxuXG5mdW5jdGlvbiBNeWZhY3RzKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKVxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3F1aXphcHAtMGhzMC5vbnJlbmRlci5jb20vZmFjdHMvJHt1c2VySWR9YClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgc2V0RGF0YShyZXMuZGF0YSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcbiAgICBjb25zdCBoYW5kbGVNYWluQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTXlGYWN0QnV0dG9uID0oKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL215ZmFjdFwiKVxuICAgICAgfVxuICAgICAgY29uc3QgaGFuZGxlRGVsZXRlRmFjdCA9IChmYWN0SWQpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZEZhY3RzID0gZGF0YS5maWx0ZXIoKGZhY3QpID0+IGZhY3QuX2lkICE9PSBmYWN0SWQpO1xuICAgICAgICBzZXREYXRhKHVwZGF0ZWRGYWN0cyk7XG4gICAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiaHR0cHM6Ly9zY2FsZWJyYW5kaW5nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS8xLTQ4LmpwZ2dcIiA+PC9pbWc+XG4gICAgPG5hdj5cbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgPGxpPjxhIG9uQ2xpY2s9e2hhbmRsZU1haW5CdXR0b259PkZhY3RzPC9hPjwvbGk+XG4gICAgPGxpPjxhIG9uQ2xpY2s9e2hhbmRsZU15RmFjdEJ1dHRvbn0+TXkgRmFjdHM8L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIDxhIGNsYXNzTmFtZT1cImN0YVwiIGhyZWY9XCIjXCI+PGJ1dHRvbj5Qcm9maWxlPC9idXR0b24+PC9hPlxuICAgIDwvaGVhZGVyPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd1bmd1Jz5ZT1VSIEZBQ1RTPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXIxJz5cbiAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8PiBcbiAgICAgICAgICAgICAgICAgICAgPGgxPnt2YWx1ZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFjdCc+e3ZhbHVlLmZhY3R9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlJz57dmFsdWUuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PExpa2VzIGxpa2VzPXt2YWx1ZS5saWtlc30gZmFjdElkPXt2YWx1ZS5faWR9ZGlzbGlrZXM9e3ZhbHVlLmRpc2xpa2VzfS8+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD48RGVsZXRlIGZhY3RJZD17dmFsdWUuX2lkfSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlRmFjdH0gLz48L3A+IFxuICAgICAgICAgICAgICAgICAgICA8cD48VXBkYXRlRmFjdENvbXBvbmVudCBmYWN0SWQ9e3ZhbHVlLl9pZH0vPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IE15ZmFjdHMiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpa2VzIiwiRGVsZXRlIiwiVXBkYXRlRmFjdENvbXBvbmVudCIsIkNyZWF0ZSIsIk15ZmFjdHMiLCJyb3V0ZXIiLCJkYXRhIiwic2V0RGF0YSIsInVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaERhdGEiLCJyZXMiLCJlcnJvciIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVNYWluQnV0dG9uIiwicHVzaCIsImhhbmRsZU15RmFjdEJ1dHRvbiIsImhhbmRsZURlbGV0ZUZhY3QiLCJmYWN0SWQiLCJ1cGRhdGVkRmFjdHMiLCJmaWx0ZXIiLCJmYWN0IiwiX2lkIiwiZGl2IiwiaGVhZGVyIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwibmF2IiwidWwiLCJsaSIsImEiLCJvbkNsaWNrIiwiaHJlZiIsImJ1dHRvbiIsImgxIiwibWFwIiwidmFsdWUiLCJ0aXRsZSIsImRhdGUiLCJwIiwibGlrZXMiLCJkaXNsaWtlcyIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/myfact/index.js\n"));

/***/ })

});