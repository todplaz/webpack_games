/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description,\n            image = response.image,\n            studio = response.studio,\n            tags = response.tags,\n            genre = response.genre,\n            editeur = response.editeur,\n            plateforme = response.plateforme,\n            plateformeDispo = response.plateformeDispo,\n            moyenne = response.moyenne,\n            vote = response.vote;\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n        articleDOM.querySelector(\"img.imagejeu\").innerHTML = image; //articleDOM.querySelector(\"p.studio span\").innerHTML = studio;\n\n        articleDOM.querySelector(\"p.lestags\").innerHTML = tags;\n        articleDOM.querySelector(\"p.genrejeu\").innerHTML = genre;\n        articleDOM.querySelector(\"p.editeur span\").innerHTML = editeur;\n        articleDOM.querySelector(\"p.plateform\").innerHTML = plateforme;\n        articleDOM.querySelector(\"p.ensortie\").innerHTML = plateformeDispo;\n        articleDOM.querySelector(\"p.moyenne span\").innerHTML = moyenne;\n        articleDOM.querySelector(\"p.vote\").innerHTML = vote;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <h1 class=\\\"title\\\"></h1>\\n          <p class=\\\"release-date\\\">Release date : <span></span></p>\\n          <p class=\\\"description\\\"></p>\\n        </div>\\n      </section>\\n\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <img class=\\\"imagejeu\\\"></img>\\n          <p class=\\\"studio\\\">Studio developpeur : <span></span></p>\\n          <p class=\\\"lestags\\\">Mots-cl\\xE9s: </p>\\n        </div>\\n      </section>\\n\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <p class=\\\"genrejeu\\\">Genre : </p>\\n          <p class=\\\"editeur\\\">Editeur : <span></span></p>\\n          <p class=\\\"plateform\\\">Plateforme : </p>\\n        </div>\\n      </section>\\n\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <p class=\\\"ensortie\\\">Plateforme disponible : </p>\\n          <p class=\\\"moyenne\\\">Note moyenne : <span></span></p>\\n          <p class=\\\"vote\\\">Nombre de votes : </p>\\n        </div>\\n      </section>\\n\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://src/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument + \"&page_size=27\";\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        response.results.forEach(function (article, index) {\n          var img_url = article.background_image;\n          var availablePlatforms = [];\n          var genres = [];\n          article.genres.forEach(function (element) {\n            return genres.push(element.name);\n          });\n          console.log(article.name);\n          console.log(article.parent_platforms.length);\n          article.parent_platforms.forEach(function (element) {\n            return availablePlatforms.push(element.platform.name);\n          }); //.forEach(platform => availablePlatforms.push(platform.name))\n\n          if (index <= 8) {\n            //article.parent_platforms.forEach(platform => console.log(platform.name))\n            articles += \"\\n                  <div class=\\\"visible\\\">\\n                    <img src=\\\"\".concat(img_url, \"\\\" onmouseenter=\\\"imageOut(event)\\\">\\n                    <div class=\\\"hover\\\" onmouseleave=\\\"hoverOut(event)\\\">\\n                      <p>\").concat(article.released, \"</p>\\n                      <p>\").concat(genres.join(\", \"), \"</p>\\n                      <p>\").concat(article.rating, \"/5 - \").concat(article.ratings_count, \" votes</p>\\n                    </div>\\n                    <h1>\").concat(article.name, \"</h1>\\n                    <p>Disponible sur \").concat(availablePlatforms.join(\", \"), \" </p>\\n                    <a href = \\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n                  </div>\\n                \");\n          } else {\n            articles += \" \\n                <div class=\\\"not-visible\\\" width=\\\"400px\\\" >\\n                  <img src=\\\"\".concat(img_url, \"\\\" onmouseenter=\\\"imageOut(event)\\\">\\n                  <div class=\\\"hover\\\" onmouseleave=\\\"hoverOut(event)\\\">\\n                    <p>\").concat(article.released, \"</p>\\n                    <p>\").concat(genres.join(\", \"), \"</p>\\n                    <p>\").concat(article.rating, \"/5 - \").concat(article.ratings_count, \" votes</p>\\n                  </div>\\n                  <h1>\").concat(article.name, \"</h1>\\n                  <p></p>\\n                  <a href = \\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n                </div>\\n              \");\n          }\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n        document.querySelector(\".page-list .articles\").insertAdjacentHTML(\"afterend\", \"<button id=\\\"seeMore\\\" onclick='displayMore()'>Voir plus d'éléments</button>\");\n      });\n    };\n\n    if (argument == \"default\") {\n      fetchList(\"https://api.rawg.io/api/games?ordering=released\");\n    } else {\n      fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n    }\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n\\n    <div id=\\\"header\\\">\\n      <h1>The Hyper Progame</h1>\\n      <form onsubmit=\\\"searchByKeyword(event)\\\">\\n        <input type=\\\"text\\\" id=\\\"search\\\" placeholder=\\\"Find a game...\\\"><br>\\n      </form> \\n    </div>\\n\\n    <h1>Welcome,</h1>\\n\\n    <p>The Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame,\\n    the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\\n    brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\\n    groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\\n    with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p><br>\\n\\n    <label for=\\\"platform\\\">S\\xE9lectionnez une plate-forme :</label>\\n    <select onchange=\\\"filterByPlatform()\\\" name=\\\"platform\\\" id=\\\"platform\\\" class=\\\"form-select danger\\\">\\n      <option value=\\\"all\\\">Toutes</option>\\n      <option value=\\\"PC\\\">PC</option>\\n      <option value=\\\"PlayStation\\\">PlayStation</option>\\n      <option value=\\\"Xbox\\\">Xbox</option>\\n      <option value=\\\"Nintendo\\\">Nintendo</option>\\n      <option value=\\\"iOS\\\">iOS</option>\\n      <option value=\\\"Android\\\">Android</option>\\n      <option value=\\\"Linux\\\">Linux</option>\\n    </select><br>\\n\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://src/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n //import 'bootstrap';\n//import '../sass/app.scss';\n//import { Home } from './Home';\n\n\n\n\nwindow.imageOut = function (event) {\n  event.target.style.display = \"none\";\n  event.target.nextElementSibling.style.display = \"block\";\n};\n\nwindow.hoverOut = function (event) {\n  event.target.style.display = \"none\";\n  event.target.previousElementSibling.style.display = \"block\";\n};\n\nvar pageArgument; //console.log(`La variable routes équivaut à undefined : ${typeof routes == 'undefined'}`)\n\nvar routes = {\n  \"home\": _PageList__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  \"pagelist\": _PageList__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  \"pagedetail\": _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n}; //console.log(`La variable routes équivaut à undefined : ${typeof routes == 'undefined'}`)\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n\n  if (path[0] == \"home\") {\n    pageArgument = \"default\";\n  }\n\n  routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\nwindow.searchByKeyword = function (e) {\n  e.preventDefault();\n  (0,_PageList__WEBPACK_IMPORTED_MODULE_2__.PageList)(document.querySelector('input[type=\"text\"]').value);\n};\n\nwindow.displayMore = function () {\n  console.log(\"Il reste \".concat(document.querySelectorAll('div.not-visible').length, \" \\xE9l\\xE9ments invisibles\"));\n\n  if (document.querySelectorAll('div.not-visible').length >= 9) {\n    console.log(\"Il reste \".concat(document.querySelectorAll('div.not-visible').length, \" \\xE9l\\xE9ments invisibles\"));\n\n    for (var i = 0; i < 9; i++) {\n      console.log(i);\n\n      if (document.querySelectorAll('div.not-visible')[i]) {\n        document.querySelectorAll('div.not-visible')[i].className = 'visible';\n      }\n    }\n  } else {\n    document.querySelector(\"#seeMore\").style.display = \"none\";\n  }\n};\n\nwindow.filterByPlatform = function () {\n  var selectedPlatform = document.querySelector(\"select\").value;\n\n  if (selectedPlatform == \"all\") {\n    document.querySelectorAll(\"div.visible>p\").forEach(function (paragraph) {\n      paragraph.parentElement.style.display = \"block\";\n    });\n  } else {\n    document.querySelectorAll(\"div.visible>p\").forEach(function (paragraph) {\n      if (!paragraph.innerHTML.includes(selectedPlatform)) {\n        paragraph.parentElement.style.display = \"none\";\n      } else {\n        paragraph.parentElement.style.display = \"block\";\n      }\n    });\n  }\n};\n\ndocument.querySelector('.jeuxliste').addEventListener('click', async(function (event) {\n  event.preventDefault();\n})); //document.querySelector('pagedetail').addEventListener('click', async (event => {\n//event.preventDefault();\n//}))\n\n//# sourceURL=webpack://src/./src/js/index.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://src/./src/sass/style.scss?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;