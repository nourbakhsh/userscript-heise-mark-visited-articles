// ==UserScript==
// @name         heise.de mark visited articles
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Besuchte Artikel auf heise.de in grau markieren
// @author       Navid
// @downloadURL  https://github.com/nourbakhsh/userscript-heise-mark-visited-articles/raw/main/heise.de-mark-visited-articles.user.js
// @updateURL    https://github.com/nourbakhsh/userscript-heise-mark-visited-articles/raw/main/heise.de-mark-visited-articles.user.js
// @match        https://*.heise.de/*
// @icon         https://icons.duckduckgo.com/ip3/heise.de.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
GM_addStyle(`
article a:visited{
  color:grey;
}
`);
})();
