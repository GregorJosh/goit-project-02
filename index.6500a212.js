!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=r.parcelRequirefb1c;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},r.parcelRequirefb1c=a);var o,i=a("2vAcg"),s=a("bpxeT"),c=a("2TvXO");(i=a("2vAcg")).default.getMoviesTodayTrends=e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.api.get("trending/movie/day");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),r)}))),i.default.showMovieCards=function(e){return i.default.renderMovieCardHTML?e.results.map((function(e){return i.default.renderMovieCardHTML(e.id)})).join(""):""},i.default.renderMovieCardHTML=(o=e(s)(e(c).mark((function r(n){var t,a,o,s,u,l,d,p,f,v,g,m,h;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.api.get("movie/"+n);case 2:for(t=e.sent,a=t.poster_path,o=[],s=!0,u=!1,l=void 0,e.prev=6,d=t.genres[Symbol.iterator]();!(s=(p=d.next()).done);s=!0)f=p.value,o.push(f.name);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),u=!0,l=e.t0;case 14:e.prev=14,e.prev=15,s||null==d.return||d.return();case 17:if(e.prev=17,!u){e.next=20;break}throw l;case 20:return e.finish(17);case 21:return e.finish(14);case 22:return v=t.original_title,g=t.vote_average,m=t.popularity,h=t.overview,e.abrupt("return",'\n   <li class = "movie-card">\n       <div class="movie-thumb">\n        <img class="movie-image" src="'.concat(a,'" alt="').concat(o,'" loading="lazy" />\n       </div>\n      <div class="movie-info">\n        <p class="movie-name">').concat(v,'</p>\n        <p class="movie-descr"> ').concat(h,' </p>\n        <p class="movie-genres">').concat(o,'</p>\n        <p class="movie-votes">').concat(g,'</p>\n        <p class="movie-popularity">').concat(m,"</p>\n      </div>\n    </li>"));case 27:case"end":return e.stop()}}),r,null,[[6,10,14,22],[15,,17,21]])}))),function(e){return o.apply(this,arguments)}),(i=a("2vAcg")).default.apiTest("search-form.js"),(i=a("2vAcg")).default.apiTest("pagination-gallery.js"),a("7hKzD"),a("lI8oI"),i.default.currentWebPage="home",console.log("Current Web Page: "+i.default.currentWebPage),console.log("Current Home Movies Page: "+i.default.currentPage)}();
//# sourceMappingURL=index.6500a212.js.map
