"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[8025],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={},l="current_roles",c={unversionedId:"en/operations/system-tables/current-roles",id:"en/operations/system-tables/current-roles",title:"current_roles",description:"Contains active roles of a current user. SET ROLE changes the contents of this table.",source:"@site/docs/en/operations/system-tables/current-roles.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/current-roles",permalink:"/docs-gh-pages/up/en/operations/system-tables/current-roles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/current-roles.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"crash_log",permalink:"/docs-gh-pages/up/en/operations/system-tables/crash-log"},next:{title:"data_skipping_indices",permalink:"/docs-gh-pages/up/en/operations/system-tables/data_skipping_indices"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"current_roles"},"current_roles"),(0,o.kt)("p",null,"Contains active roles of a current user. ",(0,o.kt)("inlineCode",{parentName:"p"},"SET ROLE")," changes the contents of this table."),(0,o.kt)("p",null,"Columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),")) \u2014 Role name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"with_admin_option")," (",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,o.kt)("inlineCode",{parentName:"p"},"current_role")," is a role with ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN OPTION")," privilege.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"is_default")," (",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,o.kt)("inlineCode",{parentName:"p"},"current_role")," is a default role."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/current-roles"},"Original article")," "))))}f.isMDXComponent=!0}}]);