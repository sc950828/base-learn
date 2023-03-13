(function () {
  "use strict";
  var __webpack_modules__ = {
    "./jssrc/es3.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__);
      // index2.js
      var name = "randy";
      __webpack_exports__["default"] = name;
    },
  };

  // The module cache
  var __webpack_module_cache__ = {};
  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });
    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    // Return the exports of the module
    return module.exports;
  }

  /* webpack/runtime/make namespace object */
  !(function () {
    // define __esModule on exports
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  var __webpack_exports__ = {};
  !(function () {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _es3__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./es3 */ "./jssrc/es3.js");

    console.log(_es3__WEBPACK_IMPORTED_MODULE_0__["default"]);
  })();
})();
