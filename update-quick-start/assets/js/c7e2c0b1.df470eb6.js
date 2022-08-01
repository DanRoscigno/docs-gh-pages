"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16474],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31055:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={},c="\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570",p={unversionedId:"zh/operations/server-configuration-parameters/index",id:"zh/operations/server-configuration-parameters/index",title:"\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570",description:"server-settings}",source:"@site/docs/zh/operations/server-configuration-parameters/index.md",sourceDirName:"zh/operations/server-configuration-parameters",slug:"/zh/operations/server-configuration-parameters/",permalink:"/docs-gh-pages/update-quick-start/zh/operations/server-configuration-parameters/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/server-configuration-parameters/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u914d\u989d",permalink:"/docs-gh-pages/update-quick-start/zh/operations/quotas"},next:{title:"\u670d\u52a1\u5668\u8bbe\u7f6e",permalink:"/docs-gh-pages/update-quick-start/zh/operations/server-configuration-parameters/settings"}},u={},l=[],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-settings"},"\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570"),(0,a.kt)("p",null,"\u672c\u8282\u5305\u542b\u65e0\u6cd5\u5728\u4f1a\u8bdd\u6216\u67e5\u8be2\u7ea7\u522b\u66f4\u6539\u7684\u670d\u52a1\u5668\u8bbe\u7f6e\u7684\u8bf4\u660e\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u8bbe\u7f6e\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml")," ClickHouse\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"Other settings are described in the \xab",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/operations/settings/#settings"},"\u8bbe\u7f6e"),"\xbb section."),(0,a.kt)("p",null,"\u5728\u7814\u7a76\u8bbe\u7f6e\u4e4b\u524d\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/operations/configuration-files#configuration_files"},"\u914d\u7f6e\u6587\u4ef6")," \u90e8\u5206\u548c\u6ce8\u610f\u4f7f\u7528\u66ff\u6362\uff08\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"incl")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"optional")," \u5c5e\u6027\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/server_configuration_parameters/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);