!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequirefb1c;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequirefb1c=o);var l=o("2vAcg");(l=o("2vAcg")).default.apiTest("library.js");var r=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e.messege)}};l.default.getWatchedMovies=function(){return r(l.default.LOCAL_STORAGE_WATCH_KEY)||[]},l.default.getQueuedMovies=function(){return r(l.default.LOCAL_STORAGE_QUEUE_KEY)||[]};var a=l.default.getWatchedMovies(),u=l.default.getQueuedMovies();function i(){l.default.getWatchedMovies()}console.log("Oglądane filmy:",a),console.log("Filmy do obejrzenia:",u);var d=document.getElementById("watched-button"),c=document.getElementById("queue-button");d.addEventListener("click",i),c.addEventListener("click",(function(){l.default.getQueuedMovies()})),i(),(l=o("2vAcg")).default.apiTest("library-filters.js"),(l=o("2vAcg")).default.apiTest("pagination-lib.js"),o("7hKzD"),o("lI8oI"),l.default.currentWebPage="library",console.log("Current Web Page: "+l.default.currentWebPage),console.log("Current Library Movies Page: "+l.default.currentPage)}();
//# sourceMappingURL=library.4afb9970.js.map
