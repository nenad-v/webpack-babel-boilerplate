exports.id = "main";
exports.modules = {

/***/ "./source/Car.js":
/*!***********************!*\
  !*** ./source/Car.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Car; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Car = function Car(brand, model) {\n  _classCallCheck(this, Car);\n\n  this.brand = brand;\n  this.model = mode;\n};\n\n\n\n//# sourceURL=webpack:///./source/Car.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Person */ \"./source/Person.js\");\n/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Car */ \"./source/Car.js\");\n\n\nvar car = new _Car__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('BMW', 'x6');\nvar user = new _Person__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Nenad', car);\nconsole.log(user);\n\n//# sourceURL=webpack:///./source/index.js?");

/***/ })

};