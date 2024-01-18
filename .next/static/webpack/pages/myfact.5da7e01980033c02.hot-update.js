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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_likes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/likes */ \"./src/component/likes.js\");\n/* harmony import */ var _component_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/delete */ \"./src/component/delete.js\");\n/* harmony import */ var _component_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/update */ \"./src/component/update.js\");\n/* harmony import */ var _component_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/component/create */ \"./src/component/create.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Myfacts() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var userId = localStorage.getItem(\"userId\");\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n                var res, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"https://quizapp-0hs0.onrender.com/facts/\".concat(userId))\n                            ];\n                        case 1:\n                            res = _state.sent();\n                            console.log(res);\n                            setData(res.data);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    var handleMainButton = function() {\n        router.push(\"/\");\n    };\n    var handleMyFactButton = function() {\n        router.push(\"/myfact\");\n    };\n    var handleDeleteFact = function(factId) {\n        var updatedFacts = data.filter(function(fact) {\n            return fact._id !== factId;\n        });\n        setData(updatedFacts);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"logo\",\n                        src: \"https://scalebranding.com/wp-content/uploads/2021/01/1-48.jpgg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"nav-links\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleMainButton,\n                                        children: \"Facts\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 5\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: handleMyFactButton,\n                                        children: \"My Facts\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 5\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"cta\",\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"ungu\",\n                children: \"YOUR FACTS\"\n            }, void 0, false, {\n                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrapper1\",\n                children: data.map(function(value) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: value.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"fact\",\n                                    children: value.fact\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"date\",\n                                    children: value.date\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_likes__WEBPACK_IMPORTED_MODULE_3__.Likes, {\n                                        likes: value.likes,\n                                        factId: value._id,\n                                        dislikes: value.dislikes\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 16\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_delete__WEBPACK_IMPORTED_MODULE_4__.Delete, {\n                                        factId: value._id,\n                                        onDelete: handleDeleteFact\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 16\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_update__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        factId: value._id,\n                                        onUpdate: handleUpdateFact\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 16\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreateFactComponent, {\n                                        factId: value._id,\n                                        onCreate: function(factId, newFact) {\n                                            return handleCreateFact(factId, newFact);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, value._id, true, {\n                            fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230720/QUIZ-APP/front-end/src/pages/myfact/index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Myfacts, \"Hi2RJgcOCJHNFGixyOoPRNMzVvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Myfacts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Myfacts);\nvar _c;\n$RefreshReg$(_c, \"Myfacts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbXlmYWN0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBeUI7QUFDYztBQUNJO0FBQ0Q7QUFDRTtBQUNTO0FBQ2I7QUFHeEMsU0FBU1EsT0FBTyxHQUFHOzs7SUFDZixJQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFDMUIsSUFBd0JFLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JPLElBQUksR0FBYVAsR0FBWSxHQUF6QixFQUFFUSxPQUFPLEdBQUlSLEdBQVksR0FBaEI7SUFDcEJELGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQU1VLE1BQU0sR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQU1DLFNBQVM7dUJBQUcsK0ZBQVk7b0JBRWhCQyxHQUFHLEVBR0pDLEtBQUs7Ozs7Ozs7Ozs7NEJBSEU7O2dDQUFNakIsaURBQVMsQ0FBQywwQ0FBeUMsQ0FBUyxPQUFQWSxNQUFNLENBQUUsQ0FBQzs4QkFBQTs7NEJBQTFFSSxHQUFHLEdBQUcsYUFBb0U7NEJBQ2hGRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osR0FBRyxDQUFDOzRCQUNoQkwsT0FBTyxDQUFDSyxHQUFHLENBQUNOLElBQUksQ0FBQzs7Ozs7OzRCQUNaTyxLQUFLOzRCQUNWRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDOzs7Ozs7Ozs7OztZQUUxQixDQUFDOzRCQVJLRixTQUFTOzs7V0FRZDtRQUNEQSxTQUFTLEVBQUU7SUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ04sSUFBTU0sZ0JBQWdCLEdBQUcsV0FBTTtRQUMzQlosTUFBTSxDQUFDYSxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFNQyxrQkFBa0IsR0FBRSxXQUFNO1FBQzVCZCxNQUFNLENBQUNhLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQU1FLGdCQUFnQixHQUFHLFNBQUNDLE1BQU0sRUFBSztRQUNuQyxJQUFNQyxZQUFZLEdBQUdoQixJQUFJLENBQUNpQixNQUFNLENBQUMsU0FBQ0MsSUFBSTttQkFBS0EsSUFBSSxDQUFDQyxHQUFHLEtBQUtKLE1BQU07U0FBQSxDQUFDO1FBQy9EZCxPQUFPLENBQUNlLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxxQkFDSSw4REFBQ0ksS0FBRzs7MEJBQ0EsOERBQUNDLFFBQU07O2tDQUNmLDhEQUFDQyxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsTUFBTTt3QkFBQ0MsR0FBRyxFQUFDLGdFQUFnRTs7Ozs7NEJBQVE7a0NBQ2xHLDhEQUFDQyxLQUFHO2tDQUNKLDRFQUFDQyxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsV0FBVzs7OENBQ3pCLDhEQUFDSSxJQUFFOzhDQUFDLDRFQUFDQyxHQUFDO3dDQUFDQyxPQUFPLEVBQUVsQixnQkFBZ0I7a0RBQUUsT0FBSzs7Ozs7NENBQUk7Ozs7O3dDQUFLOzhDQUNoRCw4REFBQ2dCLElBQUU7OENBQUMsNEVBQUNDLEdBQUM7d0NBQUNDLE9BQU8sRUFBRWhCLGtCQUFrQjtrREFBRSxVQUFROzs7Ozs0Q0FBSTs7Ozs7d0NBQUs7Ozs7OztnQ0FDaEQ7Ozs7OzRCQUNDO2tDQUNOLDhEQUFDZSxHQUFDO3dCQUFDTCxTQUFTLEVBQUMsS0FBSzt3QkFBQ08sSUFBSSxFQUFDLEdBQUc7a0NBQUMsNEVBQUNDLFFBQU07c0NBQUMsU0FBTzs7Ozs7Z0NBQVM7Ozs7OzRCQUFJOzs7Ozs7b0JBQy9DOzBCQUNMLDhEQUFDQyxJQUFFO2dCQUFDVCxTQUFTLEVBQUMsTUFBTTswQkFBQyxZQUFVOzs7OztvQkFBSzswQkFDcEMsOERBQUNILEtBQUc7Z0JBQUNHLFNBQVMsRUFBQyxVQUFVOzBCQUVyQnZCLElBQUksQ0FBQ2lDLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUs7b0JBQ2hCLHFCQUNJO2tDQUNBLDRFQUFDZCxLQUFHOzs4Q0FDWiw4REFBQ1ksSUFBRTs4Q0FBRUUsS0FBSyxDQUFDQyxLQUFLOzs7Ozt5Q0FBTTs4Q0FDdEIsOERBQUNmLEtBQUc7b0NBQUNHLFNBQVMsRUFBQyxNQUFNOzhDQUFFVyxLQUFLLENBQUNoQixJQUFJOzs7Ozt5Q0FBTzs4Q0FDeEMsOERBQUNFLEtBQUc7b0NBQUNHLFNBQVMsRUFBQyxNQUFNOzhDQUFFVyxLQUFLLENBQUNFLElBQUk7Ozs7O3lDQUFPOzhDQUN4Qyw4REFBQ0MsR0FBQzs4Q0FBQyw0RUFBQzNDLG1EQUFLO3dDQUFDNEMsS0FBSyxFQUFFSixLQUFLLENBQUNJLEtBQUs7d0NBQUV2QixNQUFNLEVBQUVtQixLQUFLLENBQUNmLEdBQUc7d0NBQUVvQixRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFBUTs7Ozs7NkNBQUc7Ozs7O3lDQUFJOzhDQUNoRiw4REFBQ0YsR0FBQzs4Q0FBQyw0RUFBQzFDLHFEQUFNO3dDQUFDb0IsTUFBTSxFQUFFbUIsS0FBSyxDQUFDZixHQUFHO3dDQUFFcUIsUUFBUSxFQUFFMUIsZ0JBQWdCOzs7Ozs2Q0FBSTs7Ozs7eUNBQUk7OENBQ2hFLDhEQUFDdUIsR0FBQzs4Q0FBQyw0RUFBQ3pDLHlEQUFtQjt3Q0FBQ21CLE1BQU0sRUFBRW1CLEtBQUssQ0FBQ2YsR0FBRzt3Q0FBRXNCLFFBQVEsRUFBRUMsZ0JBQWdCOzs7Ozs2Q0FBSTs7Ozs7eUNBQUk7OENBQzdFLDhEQUFDTCxHQUFDOzhDQUNBLDRFQUFDTSxtQkFBbUI7d0NBQ2xCNUIsTUFBTSxFQUFFbUIsS0FBSyxDQUFDZixHQUFHO3dDQUNqQnlCLFFBQVEsRUFBRSxTQUFDN0IsTUFBTSxFQUFFOEIsT0FBTzttREFBS0MsZ0JBQWdCLENBQUMvQixNQUFNLEVBQUU4QixPQUFPLENBQUM7eUNBQUE7Ozs7OzZDQUNoRTs7Ozs7eUNBQ0E7OzJCQVpjWCxLQUFLLENBQUNmLEdBQUc7Ozs7aUNBYXZCO3FDQUNPLENBQ0Y7Z0JBQUEsQ0FBQyxDQUFDOzs7OztvQkFFRDs7Ozs7O1lBQ0EsQ0FDTDtBQUNMLENBQUM7R0FoRUpyQixPQUFPOztRQUNHUCxrREFBUzs7O0FBRG5CTyxLQUFBQSxPQUFPO0FBa0VKLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9teWZhY3QvaW5kZXguanM/MmQ3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpa2VzIH0gZnJvbSAnQC9jb21wb25lbnQvbGlrZXMnO1xuaW1wb3J0IHsgRGVsZXRlIH0gZnJvbSAnQC9jb21wb25lbnQvZGVsZXRlJztcbmltcG9ydCBVcGRhdGVGYWN0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50L3VwZGF0ZSc7XG5pbXBvcnQgQ3JlYXRlIGZyb20gJ0AvY29tcG9uZW50L2NyZWF0ZSc7XG5cblxuZnVuY3Rpb24gTXlmYWN0cygpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJylcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9xdWl6YXBwLTBoczAub25yZW5kZXIuY29tL2ZhY3RzLyR7dXNlcklkfWApXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG4gICAgY29uc3QgaGFuZGxlTWFpbkJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZU15RmFjdEJ1dHRvbiA9KCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9teWZhY3RcIilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhhbmRsZURlbGV0ZUZhY3QgPSAoZmFjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGYWN0cyA9IGRhdGEuZmlsdGVyKChmYWN0KSA9PiBmYWN0Ll9pZCAhPT0gZmFjdElkKTtcbiAgICAgICAgc2V0RGF0YSh1cGRhdGVkRmFjdHMpO1xuICAgICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cImh0dHBzOi8vc2NhbGVicmFuZGluZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvMS00OC5qcGdnXCIgPjwvaW1nPlxuICAgIDxuYXY+XG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgIDxsaT48YSBvbkNsaWNrPXtoYW5kbGVNYWluQnV0dG9ufT5GYWN0czwvYT48L2xpPlxuICAgIDxsaT48YSBvbkNsaWNrPXtoYW5kbGVNeUZhY3RCdXR0b259Pk15IEZhY3RzPC9hPjwvbGk+XG4gICAgPC91bD5cbiAgICA8L25hdj5cbiAgICA8YSBjbGFzc05hbWU9XCJjdGFcIiBocmVmPVwiI1wiPjxidXR0b24+UHJvZmlsZTwvYnV0dG9uPjwvYT5cbiAgICA8L2hlYWRlcj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndW5ndSc+WU9VUiBGQUNUUzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyMSc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPD4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2YWx1ZS5faWR9PlxuICAgICAgICAgICAgPGgxPnt2YWx1ZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhY3QnPnt2YWx1ZS5mYWN0fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGUnPnt2YWx1ZS5kYXRlfTwvZGl2PlxuICAgICAgICAgICAgPHA+PExpa2VzIGxpa2VzPXt2YWx1ZS5saWtlc30gZmFjdElkPXt2YWx1ZS5faWR9IGRpc2xpa2VzPXt2YWx1ZS5kaXNsaWtlc30vPjwvcD5cbiAgICAgICAgICAgIDxwPjxEZWxldGUgZmFjdElkPXt2YWx1ZS5faWR9IG9uRGVsZXRlPXtoYW5kbGVEZWxldGVGYWN0fSAvPjwvcD4gXG4gICAgICAgICAgICA8cD48VXBkYXRlRmFjdENvbXBvbmVudCBmYWN0SWQ9e3ZhbHVlLl9pZH0gb25VcGRhdGU9e2hhbmRsZVVwZGF0ZUZhY3R9IC8+PC9wPiBcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Q3JlYXRlRmFjdENvbXBvbmVudFxuICAgICAgICAgICAgICAgIGZhY3RJZD17dmFsdWUuX2lkfVxuICAgICAgICAgICAgICAgIG9uQ3JlYXRlPXsoZmFjdElkLCBuZXdGYWN0KSA9PiBoYW5kbGVDcmVhdGVGYWN0KGZhY3RJZCwgbmV3RmFjdCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBNeWZhY3RzIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaWtlcyIsIkRlbGV0ZSIsIlVwZGF0ZUZhY3RDb21wb25lbnQiLCJDcmVhdGUiLCJNeWZhY3RzIiwicm91dGVyIiwiZGF0YSIsInNldERhdGEiLCJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hEYXRhIiwicmVzIiwiZXJyb3IiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTWFpbkJ1dHRvbiIsInB1c2giLCJoYW5kbGVNeUZhY3RCdXR0b24iLCJoYW5kbGVEZWxldGVGYWN0IiwiZmFjdElkIiwidXBkYXRlZEZhY3RzIiwiZmlsdGVyIiwiZmFjdCIsIl9pZCIsImRpdiIsImhlYWRlciIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsIm5hdiIsInVsIiwibGkiLCJhIiwib25DbGljayIsImhyZWYiLCJidXR0b24iLCJoMSIsIm1hcCIsInZhbHVlIiwidGl0bGUiLCJkYXRlIiwicCIsImxpa2VzIiwiZGlzbGlrZXMiLCJvbkRlbGV0ZSIsIm9uVXBkYXRlIiwiaGFuZGxlVXBkYXRlRmFjdCIsIkNyZWF0ZUZhY3RDb21wb25lbnQiLCJvbkNyZWF0ZSIsIm5ld0ZhY3QiLCJoYW5kbGVDcmVhdGVGYWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/myfact/index.js\n"));

/***/ })

});