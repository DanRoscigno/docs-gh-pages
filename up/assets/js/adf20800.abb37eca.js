"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66480],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||s;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77299:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={title:"Can I use ClickHouse as a time-series database?",toc_hidden:!0,toc_priority:101},c="Can I Use ClickHouse As a Time-Series Database?",u={unversionedId:"en/faq/use-cases/time-series",id:"en/faq/use-cases/time-series",title:"Can I use ClickHouse as a time-series database?",description:"can-i-use-clickhouse-as-a-time-series-database}",source:"@site/docs/en/faq/use-cases/time-series.md",sourceDirName:"en/faq/use-cases",slug:"/en/faq/use-cases/time-series",permalink:"/docs-gh-pages/up/en/faq/use-cases/time-series",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/use-cases/time-series.md",tags:[],version:"current",frontMatter:{title:"Can I use ClickHouse as a time-series database?",toc_hidden:!0,toc_priority:101},sidebar:"english",previous:{title:"Can I use ClickHouse as a key-value storage?",permalink:"/docs-gh-pages/up/en/faq/use-cases/key-value"},next:{title:"What's New",permalink:"/docs-gh-pages/up/en/whats-new"}},l={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"can-i-use-clickhouse-as-a-time-series-database"},"Can I Use ClickHouse As a Time-Series Database?"),(0,s.kt)("p",null,"ClickHouse is a generic data storage solution for ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/faq/general/olap"},"OLAP")," workloads, while there are many specialized time-series database management systems. Nevertheless, ClickHouse\u2019s ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/faq/general/why-clickhouse-is-so-fast"},"focus on query execution speed")," allows it to outperform specialized systems in many cases. There are many independent benchmarks on this topic out there, so we\u2019re not going to conduct one here. Instead, let\u2019s focus on ClickHouse features that are important to use if that\u2019s your use case."),(0,s.kt)("p",null,"First of all, there are ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"../../sql-reference/statements/create/table/#specialized-codecs"},"specialized codecs"))," which make typical time-series. Either common algorithms like ",(0,s.kt)("inlineCode",{parentName:"p"},"DoubleDelta")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Gorilla")," or specific to ClickHouse like ",(0,s.kt)("inlineCode",{parentName:"p"},"T64"),"."),(0,s.kt)("p",null,"Second, time-series queries often hit only recent data, like one day or one week old. It makes sense to use servers that have both fast nVME/SSD drives and high-capacity HDD drives. ClickHouse ",(0,s.kt)("a",{parentName:"p",href:"../../engines/table-engines/mergetree-family/mergetree/#table_engine-mergetree-multiple-volumes"},"TTL")," feature allows to configure keeping fresh hot data on fast drives and gradually move it to slower drives as it ages. Rollup or removal of even older data is also possible if your requirements demand it."),(0,s.kt)("p",null,"Even though it\u2019s against ClickHouse philosophy of storing and processing raw data, you can use ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/create/view"},"materialized views")," to fit into even tighter latency or costs requirements."))}m.isMDXComponent=!0}}]);