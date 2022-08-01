"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23043],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74235:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],c={sidebar_position:46,sidebar_label:"\u89d2\u8272"},i=void 0,s={unversionedId:"zh/sql-reference/statements/alter/role",id:"zh/sql-reference/statements/alter/role",title:"role",description:"\u64cd\u4f5c\u89d2\u8272",source:"@site/docs/zh/sql-reference/statements/alter/role.md",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/role",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/alter/role",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/alter/role.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"\u89d2\u8272"},sidebar:"chinese",previous:{title:"QUOTA",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/alter/quota"},next:{title:"\u884c\u7b56\u7565",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/alter/row-policy"}},u={},p=[{value:"\u64cd\u4f5c\u89d2\u8272",id:"alter-role-statement",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"alter-role-statement"},"\u64cd\u4f5c\u89d2\u8272"),(0,o.kt)("p",null,"\u4fee\u6539\u89d2\u8272."),(0,o.kt)("p",null,"\u8bed\u6cd5\u793a\u4f8b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER ROLE [IF EXISTS] name1 [ON CLUSTER cluster_name1] [RENAME TO new_name1]\n        [, name2 [ON CLUSTER cluster_name2] [RENAME TO new_name2] ...]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY|WRITABLE] | PROFILE 'profile_name'] [,...]\n")))}m.isMDXComponent=!0}}]);