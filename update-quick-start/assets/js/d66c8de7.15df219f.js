"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7052],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86497:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={},l="roles",c={unversionedId:"en/operations/system-tables/roles",id:"en/operations/system-tables/roles",title:"roles",description:"Contains information about configured roles.",source:"@site/docs/en/operations/system-tables/roles.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/roles",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/roles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/roles.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"role_grants",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/role-grants"},next:{title:"row_policies",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/row_policies"}},p={},u=[{value:"See Also",id:"see-also",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roles"},"roles"),(0,a.kt)("p",null,"Contains information about configured ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/access-rights#role-management"},"roles"),"."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," (",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 Role name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," (",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 Role ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage")," (",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 Path to the storage of roles. Configured in the ",(0,a.kt)("inlineCode",{parentName:"li"},"access_control_path")," parameter.")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/show#show-roles-statement"},"SHOW ROLES"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/roles"},"Original article")," "))}f.isMDXComponent=!0}}]);