// ==UserScript==
// @name           Pxer
// @name:zh        Pxer
// @name:en        Pxer
// @description    Maybe the best tool for pixiv.net for capture pictures
// @description:zh 可能是目前最好用的P站批量抓图工具
// @description:en Maybe the best tool for pixiv.net for capture pictures
// @version        7
// @namespace      http://pxer.pea3nut.org
// @supportURL     http://pxer.pea3nut.org
// @author         pea3nut / eternal-flame-AD
// @grant          unsafeWindow
// @noframes
// @updateURL      https://pxer-app.pea3nut.org/pxer.user.js
// @require        https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js
// @include        https://www.pixiv.net*
// @include        http://www.pixiv.net*
// @include        http://pxer.pea3nut.org*
// @include        https://pxer.pea3nut.org*
// ==/UserScript==
javascript: void(function() {

unsafeWindow['PXER_URL'] = 'https://127.0.0.1:8125/';
unsafeWindow['PXER_MODE'] = 'native';
unsafeWindow['Vue'] = Vue;

// add enter point script in page
document.documentElement.appendChild(
    document.createElement('script')
).src = window['PXER_URL'] + 'launcher.js?' + (+new Date);

}());