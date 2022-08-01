"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58774],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,y=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},57520:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={sidebar_label:"\u6570\u636e\u7c7b\u578b",sidebar_position:37},s="\u6570\u636e\u7c7b\u578b",l={unversionedId:"zh/sql-reference/data-types/index",id:"zh/sql-reference/data-types/index",title:"\u6570\u636e\u7c7b\u578b",description:"data_types}",source:"@site/docs/zh/sql-reference/data-types/index.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/index.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_label:"\u6570\u636e\u7c7b\u578b",sidebar_position:37},sidebar:"chinese",previous:{title:"Polygon Dictionaries With Grids",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon"},next:{title:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"}},p={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data_types"},"\u6570\u636e\u7c7b\u578b"),(0,i.kt)("p",null,"ClickHouse \u53ef\u4ee5\u5728\u6570\u636e\u8868\u4e2d\u5b58\u50a8\u591a\u79cd\u6570\u636e\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u672c\u8282\u63cf\u8ff0 ClickHouse \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4ee5\u53ca\u4f7f\u7528\u6216\u8005\u5b9e\u73b0\u5b83\u4eec\u65f6\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u7684\u6ce8\u610f\u4e8b\u9879\u3002\n\u4f60\u53ef\u4ee5\u5728\u7cfb\u7edf\u8868 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/operations/system-tables/data_type_families#system_tables-data_type_families"},"system.data_type_families")," \u4e2d\u68c0\u67e5\u6570\u636e\u7c7b\u578b\u540d\u79f0\u662f\u5426\u533a\u5206\u5927\u5c0f\u5199\u3002"))}d.isMDXComponent=!0}}]);