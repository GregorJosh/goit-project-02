!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequirefb1c;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequirefb1c=a);var o=a("2vAcg"),u=a("bpxeT"),d=a("2TvXO");o=a("2vAcg");function l(e){try{var n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(e){console.log(e.message)}}function i(){return c.apply(this,arguments)}function c(){return(c=e(u)(e(d).mark((function n(){var t,r;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.default.Loading.circle(),t=document.getElementById(o.default.MOVIE_CARDS_PARENT_ELEMENT_ID),r=l(o.default.LOCAL_STORAGE_WATCH_KEY)||[],e.next=5,o.default.renderMovieCardHTML(r);case 5:t.innerHTML=e.sent,o.default.Loading.remove();case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function f(){return(f=e(u)(e(d).mark((function n(){var t,r;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.default.Loading.circle(),t=document.getElementById(o.default.MOVIE_CARDS_PARENT_ELEMENT_ID),r=l(o.default.LOCAL_STORAGE_QUEUE_KEY)||[],e.next=5,o.default.renderMovieCardHTML(r);case 5:t.innerHTML=e.sent,o.default.Loading.remove();case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}var s=document.getElementById(o.default.WATCHED_BUTTON_ELEMENT_ID),E=document.getElementById(o.default.QUEUE_BUTTON_ELEMENT_ID);s.addEventListener("click",i),E.addEventListener("click",(function(){return f.apply(this,arguments)})),i(),a("2vAcg"),a("7hKzD"),a("lI8oI"),o.default.currentWebPage="library"}();
//# sourceMappingURL=library.b4094a7e.js.map
