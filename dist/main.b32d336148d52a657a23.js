/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./media/audio/Kirkorov.mp3":
/*!**********************************!*\
  !*** ./media/audio/Kirkorov.mp3 ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"faa6e15257518df81d15f6e433d8855a.mp3\");\n\n//# sourceURL=webpack://lesson-3/./media/audio/Kirkorov.mp3?");

/***/ }),

/***/ "./media/audio/Vitas.mp3":
/*!*******************************!*\
  !*** ./media/audio/Vitas.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bc30e93ad2c64ab45edce285f04b7000.mp3\");\n\n//# sourceURL=webpack://lesson-3/./media/audio/Vitas.mp3?");

/***/ }),

/***/ "./media/video/masha.mp4":
/*!*******************************!*\
  !*** ./media/video/masha.mp4 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0e7c9de050a54d85c447aeb9f29d91de.mp4\");\n\n//# sourceURL=webpack://lesson-3/./media/video/masha.mp4?");

/***/ }),

/***/ "./media/img/1.jpg":
/*!*************************!*\
  !*** ./media/img/1.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/1.482744ee.jpg\";\n\n//# sourceURL=webpack://lesson-3/./media/img/1.jpg?");

/***/ }),

/***/ "./media/img/2.jpg":
/*!*************************!*\
  !*** ./media/img/2.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/2.45fd4744.jpg\";\n\n//# sourceURL=webpack://lesson-3/./media/img/2.jpg?");

/***/ }),

/***/ "./media/img/3.jpg":
/*!*************************!*\
  !*** ./media/img/3.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/3.314411f5.jpg\";\n\n//# sourceURL=webpack://lesson-3/./media/img/3.jpg?");

/***/ }),

/***/ "./media/img/4.jpg":
/*!*************************!*\
  !*** ./media/img/4.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/4.00b9af68.jpg\";\n\n//# sourceURL=webpack://lesson-3/./media/img/4.jpg?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawGalleryItem\": () => (/* binding */ drawGalleryItem)\n/* harmony export */ });\nfunction drawGalleryItem(item) {\r\n    const itemElement = document.createElement('div')\r\n    itemElement.classList = \"gallery_item\"\r\n    let itemContentElement;\r\n    let itemContentaudio;\r\n\r\n    if (item.type == 'img') {\r\n        itemContentElement = document.createElement('img')\r\n        itemContentElement.classList = \"gallery_item_img\"\r\n\r\n    }\r\n    if (item.type == 'audio') {\r\n        itemContentElement = document.createElement('div')\r\n        itemContentElement.classList = \"gallery_item_audio\"\r\n        itemContentaudio = document.createElement('audio')\r\n        itemContentElement.appendChild(itemContentaudio)\r\n    }\r\n    if (item.type == 'video') {\r\n        itemContentElement = document.createElement('video')\r\n        itemContentElement.classList = \"gallery_item_video\"\r\n    }\r\n\r\n    if (item.type != 'audio') {\r\n        itemContentElement.src = item.src;\r\n    } else {\r\n        itemContentaudio.src = item.src;\r\n    }\r\n\r\n    if (item.type == 'audio') {\r\n        itemContentaudio.controls = true\r\n    }\r\n    if (item.type == 'video') {\r\n        itemContentElement.controls = true\r\n    }\r\n\r\n    const itemHeadElement = document.createElement('p')\r\n    itemHeadElement.classList = \"gallery_item_head\"\r\n    itemHeadElement.textContent = item.head\r\n\r\n    itemElement.appendChild(itemContentElement)\r\n    itemElement.appendChild(itemHeadElement)\r\n\r\n    return itemElement\r\n}\n\n//# sourceURL=webpack://lesson-3/./src/item.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _media_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/img/1.jpg */ \"./media/img/1.jpg\");\n/* harmony import */ var _media_img_1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/img/2.jpg */ \"./media/img/2.jpg\");\n/* harmony import */ var _media_img_2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _media_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/img/3.jpg */ \"./media/img/3.jpg\");\n/* harmony import */ var _media_img_3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_media_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _media_img_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/img/4.jpg */ \"./media/img/4.jpg\");\n/* harmony import */ var _media_img_4_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_media_img_4_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _media_audio_Vitas_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/audio/Vitas.mp3 */ \"./media/audio/Vitas.mp3\");\n/* harmony import */ var _media_audio_Kirkorov_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/audio/Kirkorov.mp3 */ \"./media/audio/Kirkorov.mp3\");\n/* harmony import */ var _media_video_masha_mp4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/video/masha.mp4 */ \"./media/video/masha.mp4\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        src: (_media_img_1_jpg__WEBPACK_IMPORTED_MODULE_0___default()),\r\n        head: \"Мем 1\",\r\n        type: \"img\"\r\n    },\r\n    {\r\n        src: (_media_img_2_jpg__WEBPACK_IMPORTED_MODULE_1___default()),\r\n        head: \"Мем 2\",\r\n        type: \"img\"\r\n    },\r\n    {\r\n        src: (_media_img_3_jpg__WEBPACK_IMPORTED_MODULE_2___default()),\r\n        head: \"Мем 3\",\r\n        type: \"img\"\r\n    },\r\n    {\r\n        src: (_media_img_4_jpg__WEBPACK_IMPORTED_MODULE_3___default()),\r\n        head: \"Мем 4\",\r\n        type: \"img\"\r\n    },\r\n    {\r\n        src: _media_audio_Vitas_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n        head: \"Витас\",\r\n        type: \"audio\"\r\n    },\r\n    {\r\n        src: _media_audio_Kirkorov_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n        head: \"Киркоров\",\r\n        type: \"audio\"\r\n    },\r\n    {\r\n        src: _media_video_masha_mp4__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n        head: \"Маша и медведь\",\r\n        type: \"video\"\r\n    }\r\n]);\n\n//# sourceURL=webpack://lesson-3/./src/items.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n__webpack_require__.e(/*! import() */ \"src_style_scss\").then(__webpack_require__.bind(__webpack_require__, /*! ./style.scss */ \"./src/style.scss\"))\r\n\r\n;\r\n\r\n\r\nconst galleryBox = document.getElementById('gallery');\r\n\r\n_items__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(i => galleryBox.appendChild((0,_item__WEBPACK_IMPORTED_MODULE_0__.drawGalleryItem)(i)));\n\n//# sourceURL=webpack://lesson-3/./src/main.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "main." + "b8834a0a57931e21dca6" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "229b1785e3b296e08402" + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "lesson-3:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"src_style_scss":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklesson_3"] = self["webpackChunklesson_3"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;