"use strict";var precacheConfig=[["./cn.html","27fcdacee4ef28e85b55e5e17a9a25eb"],["./index.html","dc5755a7620536b9ec0c48564fa75ee1"],["./static/css/cn.0726442c.css","10d0b9d602b3b657c55a1385c1844c28"],["./static/css/index.0726442c.css","2767bdf2b32295812e42d9d1a0293da3"],["./static/js/0.929dde0d.chunk.js","79babc01dfb66ed2fd701e3315858030"],["./static/js/1.00cd055f.chunk.js","b44ccbbbeef43cdbad45e2c08e91d12c"],["./static/js/10.0144233f.chunk.js","de33faced6cc57d2ad532893ca12bdb6"],["./static/js/11.e510bc05.chunk.js","f50b9008356ff446954158a7abff38b4"],["./static/js/12.bf2e052b.chunk.js","91d109b99fa8c0df1479aa5bcbfcba1a"],["./static/js/13.45553b85.chunk.js","d75cc9b025c0715a2487b5f513e300f4"],["./static/js/14.d3a32aac.chunk.js","65af5e9bd079907d820d94bee9c3b483"],["./static/js/15.1bf57907.chunk.js","4f046cde6d0ab055cface7cd72da9353"],["./static/js/16.8546d929.chunk.js","8400a85d545d5dfcb30ca28d040b6101"],["./static/js/17.e9f2901a.chunk.js","c1a9dd853108479f5b29feac8cb25aa1"],["./static/js/18.20e73ec0.chunk.js","1e32bbe6978ffc6c882f21582c4abaaa"],["./static/js/19.0152d044.chunk.js","a3c82ee5ef87bc1d19e605cc5b9d3a05"],["./static/js/2.93035da0.chunk.js","d251dce7ee90fec1a25bbbd5f5919a66"],["./static/js/20.07920a1b.chunk.js","b94f74c66a1d7906a834f141a5d47e51"],["./static/js/21.7b43f4c1.chunk.js","566f2f3d9cc3d04c50d40b2622c9fecf"],["./static/js/22.c162af6c.chunk.js","ffd2a2b2f3edd165e6f24382086dacb3"],["./static/js/23.6e8d207c.chunk.js","7abff3263f80de0e2101b88512ec2981"],["./static/js/24.e7888da7.chunk.js","2b78847a9ba1a38f2cd4beb406fe68a2"],["./static/js/25.c8973ed0.chunk.js","925021e39c982f4cb912c3b7da79df7e"],["./static/js/26.3227536b.chunk.js","e6d41984fa5bd5765e603311cf2faac4"],["./static/js/27.1c8a2439.chunk.js","46bea0600428cc11325e6f1080dd3ee6"],["./static/js/28.3d9b326a.chunk.js","30cd89db48388d161a0212f06cbfda72"],["./static/js/29.7d5f7e93.chunk.js","0164219d175ba5137055d8b41b3190d5"],["./static/js/3.41b2d111.chunk.js","c8d628087983f3cf6e5c9a8b83e0ad2d"],["./static/js/30.b9c6663d.chunk.js","ed1bd65f64637cf7ec7b9103f7710e79"],["./static/js/31.f17c4c44.chunk.js","960c87e4f625dcacd3b711fac7b31689"],["./static/js/32.ec0abc00.chunk.js","fe1de96bc03bd7c4a0c6ba2f0d5ca1e4"],["./static/js/33.38d5d6b5.chunk.js","48764d590512f65eba9880c0a1bf26d3"],["./static/js/34.9b885adc.chunk.js","899048eae2d0a5bef4e0f4c4e211f2ba"],["./static/js/35.bed7f45c.chunk.js","860314cb49acd36113c530d6bdaed9ef"],["./static/js/4.635e1fa9.chunk.js","92afa2e95f5e9d79a52030254d3dc892"],["./static/js/5.33cc0147.chunk.js","3d02a46f5058245962f0788f62bd4260"],["./static/js/6.09a4e3ba.chunk.js","a8765b887b76cd6eb6a48ec47c69fa8f"],["./static/js/7.bb3d771c.chunk.js","20e320f1c7c70049cf32bfa2b56d76ab"],["./static/js/8.01dd500e.chunk.js","19aa73d6f3430ab24f355a92f9f2e332"],["./static/js/9.edc3637d.chunk.js","3813d3cd75baa47e01c1344d0d0b0199"],["./static/js/cn.693efa36.js","164fc56f5c6177551141d5cbb5486449"],["./static/js/index.c2bc5d3f.js","2587a7a54f1d89a64148487bd746dfc3"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),s=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var e,a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var s="./index.html";!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)}))}});