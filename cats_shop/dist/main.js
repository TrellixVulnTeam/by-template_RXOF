/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/babel.js":
/*!*************************!*\
  !*** ./script/babel.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/index.sass */ \"./styles/index.sass\");\n\nvar items = document.querySelector('.content_items');\nvar btnPrice = document.querySelector('#byPrice');\nvar btnAge = document.querySelector('#byAge');\nvar arrow = document.querySelectorAll('.sort_arrow');\nvar replacedNode;\nvar watchMore = document.querySelector('.more_cats'); //Сортировка по убыванию\n\nfunction sortAdс(sortBy) {\n  showAll();\n\n  for (var i = 0; i < items.children.length; i++) {\n    for (var j = i; j < items.children.length; j++) {\n      if (+items.children[i].querySelector(sortBy).innerText.match(/\\d/g).join('') > +items.children[j].querySelector(sortBy).innerText.match(/\\d/g).join('')) {\n        replacedNode = items.replaceChild(items.children[j], items.children[i]);\n        insertAfter(replacedNode, items.children[i]);\n      }\n    }\n  }\n\n  hideExcess();\n} //Сортировка по возрастанию\n\n\nfunction sortDes(sortBy) {\n  showAll();\n\n  for (var i = 0; i < items.children.length; i++) {\n    for (var j = i; j < items.children.length; j++) {\n      if (+items.children[i].querySelector(sortBy).innerText.match(/\\d/g).join('') < +items.children[j].querySelector(sortBy).innerText.match(/\\d/g).join('')) {\n        replacedNode = items.replaceChild(items.children[j], items.children[i]);\n        insertAfter(replacedNode, items.children[i]);\n      }\n    }\n  }\n\n  hideExcess();\n}\n\nfunction insertAfter(elem, refElem) {\n  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);\n} //Сортировка по цене\n\n\nbtnPrice.onclick = function () {\n  if (arrow[0].style.transform !== 'rotate(180deg)') {\n    arrow[0].style.transform = 'rotate(180deg)';\n    sortAdс('.price');\n  } else {\n    arrow[0].style.transform = '';\n    sortDes('.price');\n  }\n}; //Сортировка по возрасту\n\n\nbtnAge.onclick = function () {\n  if (arrow[1].style.transform !== 'rotate(180deg)') {\n    arrow[1].style.transform = 'rotate(180deg)';\n    sortAdс('.cat_age');\n  } else {\n    arrow[1].style.transform = '';\n    sortDes('.cat_age');\n  }\n}; //Изменение состояния кнопки покупки\n\n\nvar btnBuy = document.querySelectorAll('.button_buy');\n\nvar _loop = function _loop(n) {\n  btnBuy[n].onclick = function () {\n    btnBuy[n].style.backgroundColor = 'black';\n    btnBuy[n].innerText = 'Продано';\n  };\n};\n\nfor (var n = 0; n < btnBuy.length; n++) {\n  _loop(n);\n} //Добавление в избранное\n\n\nvar like = document.querySelectorAll('.like');\nvar message = document.querySelectorAll('.mess_fav');\n\nvar _loop2 = function _loop2(m) {\n  like[m].onclick = function () {\n    if (like[m].style.opacity !== '1') {\n      return new Promise(function (resolve) {\n        setTimeout(function () {\n          like[m].style.opacity = '100%';\n          resolve();\n        }, 0);\n      }).then(showMess('Котик в избранном :)', m)).then(hideMess(m));\n    } else {\n      return new Promise(function (resolve) {\n        setTimeout(function () {\n          like[m].style.opacity = '50%';\n          resolve();\n        }, 0);\n      }).then(showMess('Котик больше не в избранном :(', m)).then(hideMess(m));\n    }\n  };\n};\n\nfor (var m = 0; m < like.length; m++) {\n  _loop2(m);\n}\n\nfunction showMess(messageText, m) {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      message[m].classList.add('show_mess');\n      message[m].innerText = messageText;\n      resolve();\n    }, 500);\n  });\n}\n\nfunction hideMess(m) {\n  return new Promise(function () {\n    setTimeout(function () {\n      message[m].classList.remove('show_mess');\n    }, 2500);\n  });\n} //Прокрутка вверх\n\n\nvar btnScroll = document.querySelector('.scroll_up');\nvar screenWidth = window.screen.width;\nwindow.addEventListener('scroll', function () {\n  var scrolledY = window.scrollY;\n\n  if (scrolledY >= 800 && screenWidth > 1025) {\n    btnScroll.style.display = 'block';\n  } else {\n    btnScroll.style.display = 'none';\n  }\n});\n\nbtnScroll.onclick = function () {\n  window.scrollTo({\n    top: 0,\n    behavior: \"smooth\"\n  });\n}; //Валидация почты\n\n\nvar mail = document.getElementById('mail');\nvar btnMail = document.getElementById('mailBtn'); // let pattern = /\\S+@\\S+\\.\\S+/\n\nvar canPost = false;\nvar mess = document.querySelector('.validate_mess');\nvar pattern = /^[^ ]+@[^ ]+\\.[a-z]{1,3}$/;\n\nmail.onkeydown = function () {\n  if (mail.value.match(pattern)) {\n    mess.style.display = 'block';\n    mess.innerText = 'Почта введена правильно';\n    mess.style.color = '#90EE90';\n    btnMail.style.backgroundColor = '#90EE90';\n    btnMail.style.color = 'black';\n    canPost = true;\n  } else {\n    mess.style.display = 'block';\n    mess.innerText = 'Введите почту формата example@mail.(com/ru)';\n    mess.style.color = '#F08080';\n    btnMail.style.backgroundColor = '#F08080';\n    btnMail.style.color = 'white';\n    canPost = false;\n  }\n};\n\nbtnMail.onclick = function () {\n  if (canPost == true) {\n    alert('Спасибо за подписку!');\n    mail.value = '';\n    mess.style.display = 'none';\n    btnMail.style.backgroundColor = '#6EBBD3';\n    btnMail.style.color = 'white';\n    return false;\n  } else {\n    return false;\n  }\n}; //Мобильное меню\n\n\nvar mobMenu = document.querySelector('.mob_menu');\nvar areaMenu = document.querySelector('.header_content');\n\nmobMenu.onclick = function () {\n  // mobMenu.style.backgroundImage = 'url(../img/menuClose.png)'\n  if (areaMenu.style.display !== 'block') {\n    areaMenu.style.display = 'block';\n  } else {\n    areaMenu.style.display = 'none';\n  }\n}; //Скрываем все элементы если их больше 6\n\n\nwindow.onload = hideExcess();\n\nfunction showAll() {\n  for (var i = 0; i < items.children.length; i++) {\n    items.children[i].style.display = 'block';\n  }\n}\n\nfunction hideExcess() {\n  for (var i = 6; i < items.children.length; i++) {\n    items.children[i].style.display = 'none';\n  }\n\n  watchMore.style.display = 'block';\n} //Показываем остальные элементы\n\n\nwatchMore.onclick = function () {\n  for (var i = 6; i < items.children.length; i++) {\n    items.children[i].style.display = 'block';\n    watchMore.style.display = 'none';\n  }\n};\n\n//# sourceURL=webpack:///./script/babel.js?");

/***/ }),

/***/ "./styles/index.sass":
/*!***************************!*\
  !*** ./styles/index.sass ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/index.sass?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./script/babel.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;