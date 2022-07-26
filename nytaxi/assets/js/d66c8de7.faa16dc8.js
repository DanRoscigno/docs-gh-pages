"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7052],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={},l="roles",c={unversionedId:"en/operations/system-tables/roles",id:"en/operations/system-tables/roles",title:"roles",description:"Contains information about configured roles.",source:"@site/docs/en/operations/system-tables/roles.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/roles",permalink:"/docs-gh-pages/nytaxi/en/operations/system-tables/roles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/roles.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"role_grants",permalink:"/docs-gh-pages/nytaxi/en/operations/system-tables/role-grants"},next:{title:"row_policies",permalink:"/docs-gh-pages/nytaxi/en/operations/system-tables/row_policies"}},p={},u=[{value:"See Also",id:"see-also",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roles"},"roles"),(0,a.kt)("p",null,"Contains information about configured ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/access-rights#role-management"},"roles"),"."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," (",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/string"},"String"),") \u2014 Role name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," (",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 Role ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage")," (",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/string"},"String"),") \u2014 Path to the storage of roles. Configured in the ",(0,a.kt)("inlineCode",{parentName:"li"},"access_control_path")," parameter.")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/statements/show#show-roles-statement"},"SHOW ROLES"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/roles"},"Original article")," "))}f.isMDXComponent=!0}}]);