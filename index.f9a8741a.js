!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequirefb1c;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){n[e]=r},r.parcelRequirefb1c=a);var o,c=a("2vAcg"),s=a("bpxeT"),u=a("2TvXO");(c=a("2vAcg")).default.getMoviesTodayTrends=e(s)(e(u).mark((function r(){var t,n,a,o=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.length>0&&void 0!==o[0]?o[0]:c.default.currentPage,t=document.getElementById(c.default.MOVIE_CARDS_PARENT_ELEMENT_ID),e.next=4,c.default.api.get("trending/movie/day");case 4:return n=e.sent,e.next=7,c.default.showMovieCards(n);case 7:a=e.sent,t.insertAdjacentHTML("afterbegin",a);case 9:case"end":return e.stop()}}),r)}))),c.default.renderMovieCardHTML=(o=e(s)(e(u).mark((function r(t){var n,a,o,s,i,l,d,f,v,p,g,m;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.default.api.get("movie/"+t);case 2:for(n=e.sent,a=n.poster_path,o="https://image.tmdb.org/t/p/w500",s=[],i=!0,l=!1,d=void 0,e.prev=7,f=n.genres[Symbol.iterator]();!(i=(v=f.next()).done);i=!0)p=v.value,s.push(p.name);e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),l=!0,d=e.t0;case 15:e.prev=15,e.prev=16,i||null==f.return||f.return();case 18:if(e.prev=18,!l){e.next=21;break}throw d;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return g=n.release_date.split("-")[0],m=n.original_title,n.vote_average,n.popularity,n.overview,e.abrupt("return",'\n   <li class = "movie-card">\n       <div class="movie-thumb">\n        <img class="movie-image" src="'.concat(o).concat(a,'" alt="Poster image" loading="lazy" />\n       </div>\n      <div class="movie-info">\n        <p class="movie-name">').concat(m,'</p>\n        <p class="movie-genres">').concat(s," | ").concat(g,"</p>\n      </div>\n    </li>"));case 29:case"end":return e.stop()}}),r,null,[[7,11,15,23],[16,,18,22]])}))),function(e){return o.apply(this,arguments)}),c.default.showMovieCards=function(){var r=e(s)(e(u).mark((function r(t){var n,a,o,s,i,l,d;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",a=!0,o=!1,s=void 0,e.prev=2,i=t.results[Symbol.iterator]();case 4:if(a=(l=i.next()).done){e.next=13;break}return d=l.value,e.t0=n,e.next=9,c.default.renderMovieCardHTML(d.id);case 9:n=e.t0+=e.sent;case 10:a=!0,e.next=4;break;case 13:e.next=19;break;case 15:e.prev=15,e.t1=e.catch(2),o=!0,s=e.t1;case 19:e.prev=19,e.prev=20,a||null==i.return||i.return();case 22:if(e.prev=22,!o){e.next=25;break}throw s;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.abrupt("return",n);case 28:case"end":return e.stop()}}),r,null,[[2,15,19,27],[20,,22,26]])})));return function(e){return r.apply(this,arguments)}}(),c.default.getMoviesTodayTrends();s=a("bpxeT"),u=a("2TvXO");(c=a("2vAcg")).default.apiTest("keyword.js"),c.default.getMoviesByKeyWord=function(){var r=e(s)(e(u).mark((function r(t){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Loading.circle(),c.default.currentKeyword=t,e.next=4,c.default.api.get("search/keyword?query=".concat(t,"&page=").concat(c.default.currentPage));case 4:if(n=e.sent,Loading.remove(),!(n.total_results>0)){e.next=10;break}return e.abrupt("return",n);case 10:return c.default.onSearchFailed(),e.abrupt("return",{});case 12:Notify.success("Notiflix Test");case 13:case"end":return e.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();c=a("2vAcg");var i=document.querySelector(".FormError");document.querySelector(".FormInput");i.classList.add("hidden"),c.default.onSearchFailed=function(){i.classList.remove("hidden")},a("2vAcg"),a("7hKzD"),a("lI8oI"),c.default.currentWebPage="home",console.log("Current Web Page: "+c.default.currentWebPage),console.log("Current Home Movies Page: "+c.default.currentPage)}();
//# sourceMappingURL=index.f9a8741a.js.map