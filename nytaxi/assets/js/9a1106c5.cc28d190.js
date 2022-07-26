"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98786],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25956:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={sidebar_label:"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445",sidebar_position:37},s="\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445",u={unversionedId:"ru/sql-reference/data-types/index",id:"ru/sql-reference/data-types/index",title:"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445",description:"data_types}",source:"@site/docs/ru/sql-reference/data-types/index.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/index.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_label:"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445",sidebar_position:37},sidebar:"russia",previous:{title:"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/internal-dicts"},next:{title:"UInt8, UInt16, UInt32, UInt64, Int8, Int16, Int32, Int64",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/int-uint"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data_types"},"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,o.kt)("p",null,"ClickHouse \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432 \u044f\u0447\u0435\u0439\u043a\u0430\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432."),(0,o.kt)("p",null,"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0438\u043c\u0435\u043d \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/operations/system-tables/data_type_families#system_tables-data_type_families"},"system.data_type_families"),"."),(0,o.kt)("p",null,"\u0420\u0430\u0437\u0434\u0435\u043b \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438/\u0438\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0432\u044b\u0435 \u0438\u043c\u0435\u044e\u0442\u0441\u044f."))}d.isMDXComponent=!0}}]);