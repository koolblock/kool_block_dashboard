(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{316:function(e,t,n){var r=n(96);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},328:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(307);n(150),n(316),n(149),n(1),n(111),n(306);const l=({children:e})=>o.a.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation()}},e);t.default=({onChange:e,filter:t,field:n,value:r})=>{if(!t)return null;const i="ks-input-"+n.path;return o.a.createElement(l,null,o.a.createElement(c.a,{field:n,renderContext:null,htmlID:i,onChange:t=>{if(null===t)e(null);else{const{value:n}=t;n&&e(n.id)}},value:r,isMulti:!1}))}}}]);