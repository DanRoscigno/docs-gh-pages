"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57646],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(t),g=i,m=f["".concat(s,".").concat(g)]||f[g]||p[g]||o;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41432:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),c=["components"],a={},s="\u96c6\u5408",l={unversionedId:"zh/engines/table-engines/special/set",id:"zh/engines/table-engines/special/set",title:"\u96c6\u5408",description:"set}",source:"@site/docs/zh/engines/table-engines/special/set.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/set",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/special/set",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/set.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"Null",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/special/null"},next:{title:"URL(URL,\u683c\u5f0f)",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/special/url"}},u={},p=[],f={toc:p};function g(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set"},"\u96c6\u5408"),(0,o.kt)("p",null,"\u59cb\u7ec8\u5b58\u5728\u4e8e RAM \u4e2d\u7684\u6570\u636e\u96c6\u3002\u5b83\u9002\u7528\u4e8eIN\u8fd0\u7b97\u7b26\u7684\u53f3\u4fa7\uff08\u8bf7\u53c2\u89c1 \xabIN\u8fd0\u7b97\u7b26\xbb \u90e8\u5206\uff09\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 INSERT \u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\u3002\u65b0\u5143\u7d20\u5c06\u6dfb\u52a0\u5230\u6570\u636e\u96c6\u4e2d\uff0c\u800c\u91cd\u590d\u9879\u5c06\u88ab\u5ffd\u7565\u3002\u4f46\u662f\u4e0d\u80fd\u5bf9\u6b64\u7c7b\u578b\u8868\u6267\u884c SELECT \u8bed\u53e5\u3002\u68c0\u7d22\u6570\u636e\u7684\u552f\u4e00\u65b9\u6cd5\u662f\u5728 IN \u8fd0\u7b97\u7b26\u7684\u53f3\u534a\u90e8\u5206\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("p",null,"\u6570\u636e\u59cb\u7ec8\u5b58\u5728\u4e8e RAM \u4e2d\u3002\u5bf9\u4e8e INSERT\uff0c\u63d2\u5165\u6570\u636e\u5757\u4e5f\u4f1a\u5199\u5165\u78c1\u76d8\u4e0a\u7684\u8868\u76ee\u5f55\u3002\u542f\u52a8\u670d\u52a1\u5668\u65f6\uff0c\u6b64\u6570\u636e\u5c06\u52a0\u8f7d\u5230 RAM\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u91cd\u65b0\u542f\u52a8\u540e\uff0c\u6570\u636e\u4ecd\u7136\u5b58\u5728\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5f3a\u5236\u670d\u52a1\u5668\u91cd\u542f\uff0c\u78c1\u76d8\u4e0a\u7684\u6570\u636e\u5757\u53ef\u80fd\u4f1a\u4e22\u5931\u6216\u635f\u574f\u3002\u5728\u6570\u636e\u5757\u635f\u574f\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u9700\u8981\u624b\u52a8\u5220\u9664\u5305\u542b\u635f\u574f\u6570\u636e\u7684\u6587\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/set/"},"\u539f\u59cb\u6587\u7ae0")," "))}g.isMDXComponent=!0}}]);