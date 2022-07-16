// ==UserScript==
// @name         heise.de mark visited articles
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Besuchte Artikel auf heise.de Grau markieren
// @author       Navid
// @match        https://*.heise.de/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=heise.de
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
