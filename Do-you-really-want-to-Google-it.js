// ==UserScript==
// @name         Do you really want to Google it?
// @namespace    https://github.com/PenguinCabinet
// @version      v0.0.1
// @description  Display confirmation when searching on Google.
// @author       PenguinCabinet
// @license      MIT
// @match        https://www.google.com/search?q=*
// @grant        none
// ==/UserScript==

(function () {

    const url = new URL(location.href);

    if (url.searchParams.get("start") == null) {
        const body = document.getElementsByTagName("body")[0];
        body.style.filter = "blur(8px)";

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (window.confirm(`本当に、\"${url.searchParams.get("q")}\"をGoogle検索しますか？`)) {
                    body.style.filter = "";
                }
                else {
                    location.href = "https://www.google.com/";
                }

            });
        });
    }
    // Your code here...
})();