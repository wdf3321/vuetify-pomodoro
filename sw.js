if(!self.define){let i,e={};const n=(n,s)=>(n=new URL(n+".js",s).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(s,a)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let c={};const r=i=>n(i,o),l={module:{uri:o},exports:c,require:r};e[o]=Promise.all(s.map((i=>l[i]||r(i)))).then((i=>(a(...i),c)))}}define(["./workbox-3625d7b0"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/godtoneasia.25ddca16.mp3",revision:null},{url:"assets/index.30bf1731.css",revision:null},{url:"assets/index.e1ae150c.js",revision:null},{url:"assets/ListView.04b9a1b3.js",revision:null},{url:"assets/materialdesignicons-webfont.48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont.861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont.bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont.e52d60f6.woff2",revision:null},{url:"assets/SettingsView.8b736ac7.css",revision:null},{url:"assets/SettingsView.92889f2b.js",revision:null},{url:"assets/wayne.9995e324.mp3",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"d5872d7772923d509b316a312a29907b"},{url:"favicon-32x32.png",revision:"dcfb3b59a4b4b3e51c941865a141f903"},{url:"favicon.ico",revision:"33564575d21c6f8ade4fec596c9956fb"},{url:"img/icons/android-chrome-192x192.png",revision:"c7d1ff86f2f6a92b8c54768e2ddd9e8a"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"cb8d7d01c675e05e649f73065511ac5c"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"ddde699e066485ae493c56808ce6e606"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"6fea033db16d0f17335d1f1ebac324fd"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"85c519a02af57cd4d44a10cd56757410"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"de14909e247d63814a6788c7e2e697c5"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"ba2328182e94ded79ae9c9aca1ac6f36"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"7c7508266ec175b4a421b32305dda9af"},{url:"img/icons/apple-touch-icon.png",revision:"825ef539433494d89dd15ea5d7f5c626"},{url:"img/icons/ipad_splash.png",revision:"5b529da0a33365f3cf44eeb99a9ed118"},{url:"img/icons/ipadpro1_splash.png",revision:"f0baa3f1b99dc2a189f7f988426a77e1"},{url:"img/icons/ipadpro2_splash.png",revision:"16eb2c745586ff8b232ada37355aa72c"},{url:"img/icons/ipadpro3_splash.png",revision:"334c7bec7f45dbc2cf1a93da3107e07f"},{url:"img/icons/iphone5_splash.png",revision:"02764b9b65f86f3b9c2458e59358682a"},{url:"img/icons/iphone6_splash.png",revision:"926b44ea568c89d28184f9309452ce80"},{url:"img/icons/iphoneplus_splash.png",revision:"b52a0f12fd79aa20f435cacee02ab4d3"},{url:"img/icons/iphonex_splash.png",revision:"d6bf221b0a62b8eead9850f5e9733883"},{url:"img/icons/iphonexr_splash.png",revision:"9218f1a7c8fe84e52e139d35a6479543"},{url:"img/icons/iphonexsmax_splash.png",revision:"05b540b87bc5a7eb8a645997202ceca1"},{url:"img/icons/msapplication-icon-144x144.png",revision:"5bcacaf4df148ee7704420f902576f9e"},{url:"img/icons/mstile-150x150.png",revision:"1b088e138aa0ec27c580f4f69eab376c"},{url:"img/icons/safari-pinned-tab.svg",revision:"4f3a7609d064445e7c97f668bb6665e8"},{url:"index.html",revision:"ad72559b64081ef82566ef0e3d5ab18c"},{url:"tomato.png",revision:"dea9842b1b34def05c94e10c636cddbb"},{url:"./img/icons/android-chrome-192x192.png",revision:"c7d1ff86f2f6a92b8c54768e2ddd9e8a"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"cb8d7d01c675e05e649f73065511ac5c"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"ddde699e066485ae493c56808ce6e606"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"ba2328182e94ded79ae9c9aca1ac6f36"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"7c7508266ec175b4a421b32305dda9af"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"6fea033db16d0f17335d1f1ebac324fd"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"85c519a02af57cd4d44a10cd56757410"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"de14909e247d63814a6788c7e2e697c5"},{url:"./img/icons/apple-touch-icon.png",revision:"825ef539433494d89dd15ea5d7f5c626"},{url:"./favicon-16x16.png",revision:"d5872d7772923d509b316a312a29907b"},{url:"./favicon-32x32.png",revision:"dcfb3b59a4b4b3e51c941865a141f903"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"5bcacaf4df148ee7704420f902576f9e"},{url:"./img/icons/mstile-150x150.png",revision:"1b088e138aa0ec27c580f4f69eab376c"},{url:"manifest.webmanifest",revision:"abbee9bbfb676fb652cc59380e8a89ca"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
