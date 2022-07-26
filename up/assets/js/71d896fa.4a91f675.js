"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80822],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41441:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],p={},c="system.detached_parts",i={unversionedId:"zh/operations/system-tables/detached_parts",id:"zh/operations/system-tables/detached_parts",title:"system.detached_parts",description:"systemtables-detachedparts}",source:"@site/docs/zh/operations/system-tables/detached_parts.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/detached_parts",permalink:"/docs-gh-pages/up/zh/operations/system-tables/detached_parts",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/detached_parts.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.databases",permalink:"/docs-gh-pages/up/zh/operations/system-tables/databases"},next:{title:"\u7cfb\u7edf\u3002\u5b57\u5178",permalink:"/docs-gh-pages/up/zh/operations/system-tables/dictionaries"}},l={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-detached_parts"},"system.detached_parts"),(0,s.kt)("p",null,"\u5305\u542b\u5173\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u8868\u7684\u5206\u79bb\u5206\u533a\u7684\u4fe1\u606f\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"reason")," \u5217\u8be6\u7ec6\u8bf4\u660e\u4e86\u8be5\u5206\u533a\u88ab\u5206\u79bb\u7684\u539f\u56e0\u3002"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u5206\u79bb\u7684\u5206\u533a\uff0c\u539f\u56e0\u662f\u7a7a\u7684\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/alter/partition#alter_attach-partition"},"ALTER TABLE ATTACH PARTITION","|","PART")," \u547d\u4ee4\u6dfb\u52a0\u8fd9\u4e9b\u5206\u533a\u3002"),(0,s.kt)("p",null,"\u5173\u4e8e\u5176\u4ed6\u5217\u7684\u63cf\u8ff0\uff0c\u8bf7\u53c2\u89c1 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/system-tables/parts#system_tables-parts"},"system.parts"),"\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u5206\u533a\u540d\u79f0\u65e0\u6548\uff0c\u4e00\u4e9b\u5217\u7684\u503c\u53ef\u80fd\u662f",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/alter/partition#alter_drop-detached"},"ALTER TABLE DROP DETACHED PART"),"\u6765\u5220\u9664\u8fd9\u4e9b\u5206\u533a\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/detached_parts"},"\u539f\u6587")," "))}m.isMDXComponent=!0}}]);