 (function(modules) { // webpackBootstrap
 	var installedModules = {};
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}
 	return __webpack_require__(__webpack_require__.s ="./src\index.js");
 })

 ({
  
     "./src\index.js":
    (function(module, exports, __webpack_require__) {
      eval(`const str = __webpack_require__("./src\\a.js");

__webpack_require__("./src\\index.less");

console.log(str);`);
  }),
   
     "./src\a.js":
    (function(module, exports, __webpack_require__) {
      eval(`module.exports = 'hello webpack'; //node语法`);
  }),
   
     "./src\index.less":
    (function(module, exports, __webpack_require__) {
      eval(`let style = document.createElement('style');
style.innerHTML = "body {\\n  background-color: blueviolet;\\n}\\n";
document.head.appendChild(style);`);
  }),
   
 });