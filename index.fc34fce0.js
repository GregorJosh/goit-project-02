var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequirefb1c;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequirefb1c=n);var l=n("bzNN1");(l=n("bzNN1")).default.getMoviesTodayTrends=async function(){l.default.Loading.circle();const e=document.getElementById(l.default.MOVIE_CARDS_PARENT_ELEMENT_ID),t=await l.default.api.get(`movie/popular?page=${l.default.currentPage}`),a=await l.default.showMovieCards(t);e.innerHTML=a,l.default.totalPages=t.total_pages,l.default.setPaginationButtons(),l.default.Loading.remove()},l.default.getMoviesByKeyWord=async function(e){l.default.Loading.circle();const t=document.getElementById(l.default.MOVIE_CARDS_PARENT_ELEMENT_ID);t.innerHTML="";const a=await l.default.api.get(`discover/movie?with_keywords=${e}&page=${l.default.currentPage}`),n=await l.default.showMovieCards(a);l.default.Loading.remove(),a.total_results>0?(l.default.currentKeyword=e,l.default.totalPages=a.total_pages,l.default.onSearchSuccess(),t.innerHTML=n):(l.default.currentKeyword="",l.default.totalPages=0,l.default.onSearchFailed()),l.default.setPaginationButtons()},l.default.renderMovieCardHTML=async function(e){try{const t=await l.default.api.get("movie/"+e),a="https://image.tmdb.org/t/p/w500"+t.poster_path,n=t.release_date.split("-")[0],o=t.original_title,u=[];let d="";for(const e of t.genres)u.push(e.name);return d=u.length>2?`${u[0]}, ${u[1]}, Other`:u.join(", "),`\n      <li class = "movie-card" id="${l.default.createMovieCardId(e)}">\n          <div class="movie-thumb">\n            <img class="movie-image" src="${a}" alt="Poster image" loading="lazy" />\n          </div>\n          <div class="movie-info">\n            <p class="movie-name">${o}</p>\n            <p class="movie-genres">${d} | ${n}</p>\n          </div>\n        </li>`}catch(t){return console.log("API: Movie "+e+" don't exist in api database!"),""}},l.default.showMovieCards=async function(e){let t="";for(const a of e.results)t+=await l.default.renderMovieCardHTML(a.id);return t},l.default.getMoviesTodayTrends(),n("bzNN1");l=n("bzNN1");const o=document.querySelector(".search-msg");document.getElementById(l.default.SEARCH_FORM_ELEMENT_ID).addEventListener("submit",(function(e){const t=e.target.elements.keyword.value;e.preventDefault(),l.default.getMoviesByKeyWord(t)})),l.default.onSearchFailed=function(){o.classList.remove("hidden")},l.default.onSearchSuccess=function(){o.classList.add("hidden")};l=n("bzNN1");const u=document.querySelector("div.pagination"),d=document.getElementById("first-btn"),r=document.getElementById("last-btn");l.default.setPaginationButtons=function(){const e=document.getElementById("btn1"),t=document.getElementById("btn2"),a=document.getElementById("btn3"),n=document.getElementById("btn4"),o=document.getElementById("btn5"),u=[e,t,a,n,o];let i=null;d.textContent="1",d.value="1",r.textContent=l.default.totalPages,r.value=l.default.totalPages,l.default.currentPage<3?(e.textContent="1",e.value="1",t.textContent="2",t.value="2",a.textContent="3",a.value="3",n.textContent="4",n.value="4",o.textContent="5",o.value="5"):l.default.currentPage>l.default.totalPages-3?(e.textContent=l.default.totalPages-4,e.value=l.default.totalPages-4,t.textContent=l.default.totalPages-3,t.value=l.default.totalPages-3,a.textContent=l.default.totalPages-2,a.value=l.default.totalPages-2,n.textContent=l.default.totalPages-1,n.value=l.default.totalPages-1,o.textContent=l.default.totalPages,o.value=l.default.totalPages):(e.textContent=l.default.currentPage-2,e.value=l.default.currentPage-2,t.textContent=l.default.currentPage-1,t.value=l.default.currentPage-1,a.textContent=l.default.currentPage,a.value=l.default.currentPage,n.textContent=l.default.currentPage+1,n.value=l.default.currentPage+1,o.textContent=l.default.currentPage+2,o.value=l.default.currentPage+2),u.forEach((e=>{e.classList.remove("active")})),i=u.find((e=>e.value==l.default.currentPage)),i.classList.add("active")},u.addEventListener("click",(function(e){const t=e.target;if("BUTTON"===t.nodeName){const e=t.id;"left-btn"===e?l.default.currentPage>1&&(l.default.currentPage-=1):"right-btn"===e?l.default.currentPage<l.default.totalPages-1&&(l.default.currentPage+=1):l.default.currentPage=t.value,l.default.currentKeyword?l.default.getMoviesByKeyWord(l.default.currentKeyword):l.default.getMoviesTodayTrends(),console.log("current page: "+l.default.currentPage)}})),n("epHO8"),n("gipeP"),l.default.currentWebPage="home";
//# sourceMappingURL=index.fc34fce0.js.map