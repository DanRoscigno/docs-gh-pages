"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[74309],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||c;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37390:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),o=["components"],i={},u="\u65e5\u671f\u65f6\u95f4",l={unversionedId:"zh/sql-reference/data-types/datetime",id:"zh/sql-reference/data-types/datetime",title:"\u65e5\u671f\u65f6\u95f4",description:"data_type-datetime}",source:"@site/docs/zh/sql-reference/data-types/datetime.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/datetime",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/datetime",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/datetime.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u65e5\u671f",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/date"},next:{title:"Decimal(P,S),Decimal32(S),Decimal64(S),Decimal128(S)",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/decimal"}},p={},s=[{value:"\u65f6\u533a",id:"shi-qu",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"data_type-datetime"},"\u65e5\u671f\u65f6\u95f4"),(0,c.kt)("p",null,"\u65f6\u95f4\u6233\u7c7b\u578b\u3002\u7528\u56db\u4e2a\u5b57\u8282\uff08\u65e0\u7b26\u53f7\u7684\uff09\u5b58\u50a8 Unix \u65f6\u95f4\u6233\uff09\u3002\u5141\u8bb8\u5b58\u50a8\u4e0e\u65e5\u671f\u7c7b\u578b\u76f8\u540c\u7684\u8303\u56f4\u5185\u7684\u503c\u3002\u6700\u5c0f\u503c\u4e3a 1970-01-01 00:00:00\u3002\u65f6\u95f4\u6233\u7c7b\u578b\u503c\u7cbe\u786e\u5230\u79d2\uff08\u6ca1\u6709\u95f0\u79d2\uff09\u3002"),(0,c.kt)("p",null,"\u503c\u7684\u8303\u56f4: ","[","1970-01-01 00:00:00, 2106-02-07 06:28:15","]","\u3002"),(0,c.kt)("h2",{id:"shi-qu"},"\u65f6\u533a"),(0,c.kt)("p",null,"\u4f7f\u7528\u542f\u52a8\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u5668\u65f6\u7684\u7cfb\u7edf\u65f6\u533a\uff0c\u65f6\u95f4\u6233\u662f\u4ece\u6587\u672c\uff08\u5206\u89e3\u4e3a\u7ec4\u4ef6\uff09\u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236\u5e76\u8fd4\u56de\u3002\u5728\u6587\u672c\u683c\u5f0f\u4e2d\uff0c\u6709\u5173\u590f\u4ee4\u65f6\u7684\u4fe1\u606f\u4f1a\u4e22\u5931\u3002"),(0,c.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u7684\u65f6\u5019\u4f1a\u4f7f\u7528\u670d\u52a1\u7aef\u65f6\u533a\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u542f\u7528\u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u9009\u9879 ",(0,c.kt)("inlineCode",{parentName:"p"},"--use_client_time_zone")," \u6765\u8bbe\u7f6e\u4f7f\u7528\u5ba2\u6237\u7aef\u65f6\u95f4\u3002"),(0,c.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u5904\u7406\u6587\u672c\u65e5\u671f\u65f6\uff08\u4f8b\u5982\uff0c\u5728\u4fdd\u5b58\u6587\u672c\u8f6c\u50a8\u65f6\uff09\uff0c\u8bf7\u8bb0\u4f4f\u5728\u590f\u4ee4\u65f6\u66f4\u6539\u671f\u95f4\u53ef\u80fd\u5b58\u5728\u6b67\u4e49\uff0c\u5982\u679c\u65f6\u533a\u53d1\u751f\u66f4\u6539\uff0c\u5219\u53ef\u80fd\u5b58\u5728\u5339\u914d\u6570\u636e\u7684\u95ee\u9898\u3002"))}d.isMDXComponent=!0}}]);