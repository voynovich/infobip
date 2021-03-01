/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/styles.scss":
/*!**************************!*\
  !*** ./sass/styles.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ "./sass/styles.scss");


//input-slider amount for
var firstSlider = document.getElementById("amount-from");
var firstOutput = document.getElementById("first-amount");
firstOutput.innerHTML = firstSlider.value;

firstSlider.oninput = function() {
  firstOutput.innerHTML = this.value;
}

//input-slider amount to
var secondSlider = document.getElementById("amount-to");
var secondOutput = document.getElementById("second-amount");
secondOutput.innerHTML = secondSlider.value;

secondSlider.oninput = function() {
  secondOutput.innerHTML = this.value;
}

// add active class to the navigation
var navigationList = document.getElementById("navigation-list");
var navigationElement = navigationList.getElementsByClassName("navigation-element");
for (var i = 0; i < navigationElement.length; i++) {
  navigationElement[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-nav");
  current[0].className = current[0].className.replace(" active-nav", "");
  this.className += " active-nav";
  });
}

// add active class to the number of elements filter under the list
var numberList = document.getElementById("number-list");
var numberElement = numberList.getElementsByClassName("number-element");
for (var i = 0; i < numberElement.length; i++) {
  numberElement[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-num");
  current[0].className = current[0].className.replace(" active-num", "");
  this.className += " active-num";
  });
}

//definition of html objects
var advanceFilteringButton = document.querySelector("#advance-filtering-button")
var advanceFilter = document.querySelector("#advance-filter")

advanceFilteringButton.onclick = function() {
    advanceFilteringButton.classList.toggle('active');
}

function removeAnimationOpenAdvanceFilter() {advanceFilter.classList.remove('animation-open')}
function addAnimationOpenAdvanceFilter() {advanceFilter.classList.add('animation-open')}
function removeAnimationCloseAdvanceFilter() {advanceFilter.classList.remove('animation-close')}
function removeActiveAdvanceFilter() {advanceFilter.classList.remove('active')}

advanceFilteringButton.addEventListener("click", openCloseAdvanceFilter)
function openCloseAdvanceFilter() {
    if (advanceFilter.classList.contains('active')) {
        clearTimeout (setTimeout(addAnimationOpenAdvanceFilter, 200))
        advanceFilter.classList.add('animation-close')
        setTimeout(removeAnimationOpenAdvanceFilter, 700)
        setTimeout(removeAnimationCloseAdvanceFilter, 900)
        setTimeout(removeActiveAdvanceFilter, 900)
    }
    else {
        clearTimeout(setTimeout(removeAnimationOpenAdvanceFilter, 700))
        clearTimeout(setTimeout(removeActiveAdvanceFilter, 700))
        clearTimeout(setTimeout(removeAnimationCloseAdvanceFilter, 700))
        advanceFilter.classList.add('active')
        advanceFilter.classList.remove('animation-open')
        advanceFilter.classList.remove('animation-close')
        setTimeout(addAnimationOpenAdvanceFilter, 200)
    }
    
}

//definition of html objects
var addNewEntryButton = document.querySelector("#add-new-entry")
var newEntry = document.querySelector("#new-entry")
var enterEntryButton = document.querySelector("#enter-new-entry")

function removeAnimationOpenMainFilter() {newEntry.classList.remove('animation-open')}
function addAnimationOpenMainFilter() {newEntry.classList.add('animation-open')}
function removeAnimationCloseMainFilter() {newEntry.classList.remove('animation-close')}
function removeActiveMainFilter() {newEntry.classList.remove('active')}

addNewEntryButton.addEventListener("click", openCloseMainFilter)
function openCloseMainFilter() {
    if (newEntry.classList.contains('active')) {
        clearTimeout (setTimeout(addAnimationOpenMainFilter, 200))
        newEntry.classList.add('animation-close')
        setTimeout(removeAnimationOpenMainFilter, 700)
        setTimeout(removeAnimationCloseMainFilter, 900)
        setTimeout(removeActiveMainFilter, 900)
    }
    else {
        clearTimeout(setTimeout(removeAnimationOpenMainFilter, 700))
        clearTimeout(setTimeout(removeActiveMainFilter, 700))
        clearTimeout(setTimeout(removeAnimationCloseMainFilter, 700))
        newEntry.classList.add('active')
        newEntry.classList.remove('animation-open')
        newEntry.classList.remove('animation-close')
        setTimeout(addAnimationOpenMainFilter, 200)
    }
}

enterEntryButton.addEventListener("click", closeAddEntry)
function closeAddEntry() {
    clearTimeout (setTimeout(addAnimationOpenMainFilter, 200))
    newEntry.classList.add('animation-close')
    setTimeout(removeAnimationOpenMainFilter, 700)
    setTimeout(removeAnimationCloseMainFilter, 900)
    setTimeout(removeActiveMainFilter, 900)
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZvYmlwLWFwcC8uL3Nhc3Mvc3R5bGVzLnNjc3M/MjBlNSIsIndlYnBhY2s6Ly9pbmZvYmlwLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbmZvYmlwLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2luZm9iaXAtYXBwLy4vanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTjZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOEJBQThCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDO0FBQzdDLDBDQUEwQztBQUMxQyw4Q0FBOEM7QUFDOUMsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDLHVDQUF1QztBQUN2QywyQ0FBMkM7QUFDM0MsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Nhc3Mvc3R5bGVzLnNjc3MnO1xyXG5cclxuLy9pbnB1dC1zbGlkZXIgYW1vdW50IGZvclxyXG52YXIgZmlyc3RTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtb3VudC1mcm9tXCIpO1xyXG52YXIgZmlyc3RPdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpcnN0LWFtb3VudFwiKTtcclxuZmlyc3RPdXRwdXQuaW5uZXJIVE1MID0gZmlyc3RTbGlkZXIudmFsdWU7XHJcblxyXG5maXJzdFNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgZmlyc3RPdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcclxufVxyXG5cclxuLy9pbnB1dC1zbGlkZXIgYW1vdW50IHRvXHJcbnZhciBzZWNvbmRTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtb3VudC10b1wiKTtcclxudmFyIHNlY29uZE91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kLWFtb3VudFwiKTtcclxuc2Vjb25kT3V0cHV0LmlubmVySFRNTCA9IHNlY29uZFNsaWRlci52YWx1ZTtcclxuXHJcbnNlY29uZFNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgc2Vjb25kT3V0cHV0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XHJcbn1cclxuXHJcbi8vIGFkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIG5hdmlnYXRpb25cclxudmFyIG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZpZ2F0aW9uLWxpc3RcIik7XHJcbnZhciBuYXZpZ2F0aW9uRWxlbWVudCA9IG5hdmlnYXRpb25MaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZpZ2F0aW9uLWVsZW1lbnRcIik7XHJcbmZvciAodmFyIGkgPSAwOyBpIDwgbmF2aWdhdGlvbkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICBuYXZpZ2F0aW9uRWxlbWVudFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlLW5hdlwiKTtcclxuICBjdXJyZW50WzBdLmNsYXNzTmFtZSA9IGN1cnJlbnRbMF0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlLW5hdlwiLCBcIlwiKTtcclxuICB0aGlzLmNsYXNzTmFtZSArPSBcIiBhY3RpdmUtbmF2XCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGFkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIG51bWJlciBvZiBlbGVtZW50cyBmaWx0ZXIgdW5kZXIgdGhlIGxpc3RcclxudmFyIG51bWJlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlci1saXN0XCIpO1xyXG52YXIgbnVtYmVyRWxlbWVudCA9IG51bWJlckxpc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm51bWJlci1lbGVtZW50XCIpO1xyXG5mb3IgKHZhciBpID0gMDsgaSA8IG51bWJlckVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICBudW1iZXJFbGVtZW50W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICB2YXIgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmUtbnVtXCIpO1xyXG4gIGN1cnJlbnRbMF0uY2xhc3NOYW1lID0gY3VycmVudFswXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmUtbnVtXCIsIFwiXCIpO1xyXG4gIHRoaXMuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZS1udW1cIjtcclxuICB9KTtcclxufVxyXG5cclxuLy9kZWZpbml0aW9uIG9mIGh0bWwgb2JqZWN0c1xyXG52YXIgYWR2YW5jZUZpbHRlcmluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWR2YW5jZS1maWx0ZXJpbmctYnV0dG9uXCIpXHJcbnZhciBhZHZhbmNlRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZHZhbmNlLWZpbHRlclwiKVxyXG5cclxuYWR2YW5jZUZpbHRlcmluZ0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBhZHZhbmNlRmlsdGVyaW5nQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbmltYXRpb25PcGVuQWR2YW5jZUZpbHRlcigpIHthZHZhbmNlRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbi1vcGVuJyl9XHJcbmZ1bmN0aW9uIGFkZEFuaW1hdGlvbk9wZW5BZHZhbmNlRmlsdGVyKCkge2FkdmFuY2VGaWx0ZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLW9wZW4nKX1cclxuZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uQ2xvc2VBZHZhbmNlRmlsdGVyKCkge2FkdmFuY2VGaWx0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uLWNsb3NlJyl9XHJcbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUFkdmFuY2VGaWx0ZXIoKSB7YWR2YW5jZUZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKX1cclxuXHJcbmFkdmFuY2VGaWx0ZXJpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5DbG9zZUFkdmFuY2VGaWx0ZXIpXHJcbmZ1bmN0aW9uIG9wZW5DbG9zZUFkdmFuY2VGaWx0ZXIoKSB7XHJcbiAgICBpZiAoYWR2YW5jZUZpbHRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0IChzZXRUaW1lb3V0KGFkZEFuaW1hdGlvbk9wZW5BZHZhbmNlRmlsdGVyLCAyMDApKVxyXG4gICAgICAgIGFkdmFuY2VGaWx0ZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLWNsb3NlJylcclxuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZUFuaW1hdGlvbk9wZW5BZHZhbmNlRmlsdGVyLCA3MDApXHJcbiAgICAgICAgc2V0VGltZW91dChyZW1vdmVBbmltYXRpb25DbG9zZUFkdmFuY2VGaWx0ZXIsIDkwMClcclxuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZUFjdGl2ZUFkdmFuY2VGaWx0ZXIsIDkwMClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChzZXRUaW1lb3V0KHJlbW92ZUFuaW1hdGlvbk9wZW5BZHZhbmNlRmlsdGVyLCA3MDApKVxyXG4gICAgICAgIGNsZWFyVGltZW91dChzZXRUaW1lb3V0KHJlbW92ZUFjdGl2ZUFkdmFuY2VGaWx0ZXIsIDcwMCkpXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNldFRpbWVvdXQocmVtb3ZlQW5pbWF0aW9uQ2xvc2VBZHZhbmNlRmlsdGVyLCA3MDApKVxyXG4gICAgICAgIGFkdmFuY2VGaWx0ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICBhZHZhbmNlRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbi1vcGVuJylcclxuICAgICAgICBhZHZhbmNlRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbi1jbG9zZScpXHJcbiAgICAgICAgc2V0VGltZW91dChhZGRBbmltYXRpb25PcGVuQWR2YW5jZUZpbHRlciwgMjAwKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi8vZGVmaW5pdGlvbiBvZiBodG1sIG9iamVjdHNcclxudmFyIGFkZE5ld0VudHJ5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtbmV3LWVudHJ5XCIpXHJcbnZhciBuZXdFbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWVudHJ5XCIpXHJcbnZhciBlbnRlckVudHJ5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRlci1uZXctZW50cnlcIilcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbk9wZW5NYWluRmlsdGVyKCkge25ld0VudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbi1vcGVuJyl9XHJcbmZ1bmN0aW9uIGFkZEFuaW1hdGlvbk9wZW5NYWluRmlsdGVyKCkge25ld0VudHJ5LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbi1vcGVuJyl9XHJcbmZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbkNsb3NlTWFpbkZpbHRlcigpIHtuZXdFbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpb24tY2xvc2UnKX1cclxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlTWFpbkZpbHRlcigpIHtuZXdFbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKX1cclxuXHJcbmFkZE5ld0VudHJ5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQ2xvc2VNYWluRmlsdGVyKVxyXG5mdW5jdGlvbiBvcGVuQ2xvc2VNYWluRmlsdGVyKCkge1xyXG4gICAgaWYgKG5ld0VudHJ5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQgKHNldFRpbWVvdXQoYWRkQW5pbWF0aW9uT3Blbk1haW5GaWx0ZXIsIDIwMCkpXHJcbiAgICAgICAgbmV3RW50cnkuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLWNsb3NlJylcclxuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZUFuaW1hdGlvbk9wZW5NYWluRmlsdGVyLCA3MDApXHJcbiAgICAgICAgc2V0VGltZW91dChyZW1vdmVBbmltYXRpb25DbG9zZU1haW5GaWx0ZXIsIDkwMClcclxuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZUFjdGl2ZU1haW5GaWx0ZXIsIDkwMClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChzZXRUaW1lb3V0KHJlbW92ZUFuaW1hdGlvbk9wZW5NYWluRmlsdGVyLCA3MDApKVxyXG4gICAgICAgIGNsZWFyVGltZW91dChzZXRUaW1lb3V0KHJlbW92ZUFjdGl2ZU1haW5GaWx0ZXIsIDcwMCkpXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNldFRpbWVvdXQocmVtb3ZlQW5pbWF0aW9uQ2xvc2VNYWluRmlsdGVyLCA3MDApKVxyXG4gICAgICAgIG5ld0VudHJ5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgbmV3RW50cnkuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uLW9wZW4nKVxyXG4gICAgICAgIG5ld0VudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbi1jbG9zZScpXHJcbiAgICAgICAgc2V0VGltZW91dChhZGRBbmltYXRpb25PcGVuTWFpbkZpbHRlciwgMjAwKVxyXG4gICAgfVxyXG59XHJcblxyXG5lbnRlckVudHJ5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUFkZEVudHJ5KVxyXG5mdW5jdGlvbiBjbG9zZUFkZEVudHJ5KCkge1xyXG4gICAgY2xlYXJUaW1lb3V0IChzZXRUaW1lb3V0KGFkZEFuaW1hdGlvbk9wZW5NYWluRmlsdGVyLCAyMDApKVxyXG4gICAgbmV3RW50cnkuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLWNsb3NlJylcclxuICAgIHNldFRpbWVvdXQocmVtb3ZlQW5pbWF0aW9uT3Blbk1haW5GaWx0ZXIsIDcwMClcclxuICAgIHNldFRpbWVvdXQocmVtb3ZlQW5pbWF0aW9uQ2xvc2VNYWluRmlsdGVyLCA5MDApXHJcbiAgICBzZXRUaW1lb3V0KHJlbW92ZUFjdGl2ZU1haW5GaWx0ZXIsIDkwMClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=