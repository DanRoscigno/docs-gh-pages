"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85825],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,y=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41657:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_label:"Data Types",sidebar_position:37},c="Data Types",l={unversionedId:"en/sql-reference/data-types/index",id:"en/sql-reference/data-types/index",title:"Data Types",description:"ClickHouse can store various kinds of data in table cells.",source:"@site/docs/en/sql-reference/data-types/index.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/",permalink:"/docs-gh-pages/up/en/sql-reference/data-types/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/index.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_label:"Data Types",sidebar_position:37},sidebar:"english",previous:{title:"Internal Dictionaries",permalink:"/docs-gh-pages/up/en/sql-reference/dictionaries/internal-dicts"},next:{title:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",permalink:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"}},p={},u=[],f={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-types"},"Data Types"),(0,i.kt)("p",null,"ClickHouse can store various kinds of data in table cells."),(0,i.kt)("p",null,"This section describes the supported data types and special considerations for using and/or implementing them if any."),(0,i.kt)("p",null,"You can check whether data type name is case-sensitive in the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/data_type_families#system_tables-data_type_families"},"system.data_type_families")," table."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/"},"Original article")," "))}d.isMDXComponent=!0}}]);