"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1480],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78988:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"ClickHouse\u652f\u6301\u591a\u533a\u57df\u590d\u5236\u5417?",toc_hidden:!0,sidebar_position:30},u="ClickHouse\u652f\u6301\u591a\u533a\u57df\u590d\u5236\u5417?",l={unversionedId:"zh/faq/operations/multi-region-replication",id:"zh/faq/operations/multi-region-replication",title:"ClickHouse\u652f\u6301\u591a\u533a\u57df\u590d\u5236\u5417?",description:"does-clickhouse-support-multi-region-replication}",source:"@site/docs/zh/faq/operations/multi-region-replication.md",sourceDirName:"zh/faq/operations",slug:"/zh/faq/operations/multi-region-replication",permalink:"/docs-gh-pages/update-quick-start/zh/faq/operations/multi-region-replication",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/operations/multi-region-replication.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"ClickHouse\u652f\u6301\u591a\u533a\u57df\u590d\u5236\u5417?",toc_hidden:!0,sidebar_position:30},sidebar:"chinese",previous:{title:"Is it possible to delete old records from a ClickHouse table?",permalink:"/docs-gh-pages/update-quick-start/zh/faq/operations/delete-old-data"},next:{title:"Integration",permalink:"/docs-gh-pages/update-quick-start/zh/faq/integration/"}},p={},s=[],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"does-clickhouse-support-multi-region-replication"},"ClickHouse\u652f\u6301\u591a\u533a\u57df\u590d\u5236\u5417?"),(0,i.kt)("p",null,"\u7b80\u77ed\u7684\u56de\u7b54\u662f\u201c\u662f\u7684\u201d\u3002\u7136\u800c\uff0c\u6211\u4eec\u5efa\u8bae\u5c06\u6240\u6709\u533a\u57df/\u6570\u636e\u4e2d\u5fc3\u4e4b\u95f4\u7684\u5ef6\u8fdf\u4fdd\u6301\u5728\u4e24\u4f4d\u6570\u5b57\u8303\u56f4\u5185\uff0c\u5426\u5219\uff0c\u5728\u901a\u8fc7\u5206\u5e03\u5f0f\u5171\u8bc6\u534f\u8bae\u65f6\uff0c\u5199\u6027\u80fd\u5c06\u53d7\u5230\u5f71\u54cd\u3002\u4f8b\u5982\uff0c\u7f8e\u56fd\u6d77\u5cb8\u4e4b\u95f4\u7684\u590d\u5236\u53ef\u80fd\u4f1a\u5f88\u597d\uff0c\u4f46\u7f8e\u56fd\u548c\u6b27\u6d32\u4e4b\u95f4\u5c31\u4e0d\u884c\u3002"),(0,i.kt)("p",null,"\u5728\u914d\u7f6e\u65b9\u9762\uff0c\u8fd9\u4e0e\u5355\u533a\u57df\u590d\u5236\u6ca1\u6709\u533a\u522b\uff0c\u53ea\u662f\u4f7f\u7528\u4f4d\u4e8e\u4e0d\u540c\u4f4d\u7f6e\u7684\u4e3b\u673a\u4f5c\u4e3a\u526f\u672c\u3002"),(0,i.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/mergetree-family/replication"},"\u5173\u4e8e\u6570\u636e\u590d\u5236\u7684\u5b8c\u6574\u6587\u7ae0"),"\u3002"))}d.isMDXComponent=!0}}]);