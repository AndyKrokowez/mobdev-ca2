(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swipe-back-69ef585b-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/swipe-back-69ef585b.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/swipe-back-69ef585b.js ***!
    \******************************************************************/

  /*! exports provided: createSwipeBackGesture */

  /***/
  function node_modulesIonicCoreDistEsmSwipeBack69ef585bJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function () {
      return createSwipeBackGesture;
    });
    /* harmony import */


    var _helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helpers-d8b49b57.js */
    "./node_modules/@ionic/core/dist/esm/helpers-d8b49b57.js");
    /* harmony import */


    var _index_e44ebcc6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-e44ebcc6.js */
    "./node_modules/@ionic/core/dist/esm/index-e44ebcc6.js");

    var createSwipeBackGesture = function createSwipeBackGesture(el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) {
      var win = el.ownerDocument.defaultView;

      var canStart = function canStart(detail) {
        return detail.startX <= 50 && canStartHandler();
      };

      var onMove = function onMove(detail) {
        // set the transition animation's progress
        var delta = detail.deltaX;
        var stepValue = delta / win.innerWidth;
        onMoveHandler(stepValue);
      };

      var onEnd = function onEnd(detail) {
        // the swipe back gesture has ended
        var delta = detail.deltaX;
        var width = win.innerWidth;
        var stepValue = delta / width;
        var velocity = detail.velocityX;
        var z = width / 2.0;
        var shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        var missing = shouldComplete ? 1 - stepValue : stepValue;
        var missingDistance = missing * width;
        var realDur = 0;

        if (missingDistance > 5) {
          var dur = missingDistance / Math.abs(velocity);
          realDur = Math.min(dur, 540);
        }
        /**
         * TODO: stepValue can sometimes return negative values
         * or values greater than 1 which should not be possible.
         * Need to investigate more to find where the issue is.
         */


        onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : Object(_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_0__["c"])(0, stepValue, 0.9999), realDur);
      };

      return Object(_index_e44ebcc6_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'goback-swipe',
        gesturePriority: 40,
        threshold: 10,
        canStart: canStart,
        onStart: onStartHandler,
        onMove: onMove,
        onEnd: onEnd
      });
    };
    /***/

  }
}]);
//# sourceMappingURL=swipe-back-69ef585b-js-es5.js.map