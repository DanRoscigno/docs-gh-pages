"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67600],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(d,o(o({ref:t},i),{},{components:r})):n.createElement(d,o({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4872:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],s={sidebar_position:51,sidebar_label:"SET ROLE"},u="SET ROLE Statement",c={unversionedId:"en/sql-reference/statements/set-role",id:"en/sql-reference/statements/set-role",title:"SET ROLE Statement",description:"Activates roles for the current user.",source:"@site/docs/en/sql-reference/statements/set-role.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/set-role",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/set-role",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/set-role.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,sidebar_label:"SET ROLE"},sidebar:"english",previous:{title:"SET",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/set"},next:{title:"TRUNCATE",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/truncate"}},i={},p=[{value:"SET DEFAULT ROLE",id:"set-default-role",level:2},{value:"Examples",id:"examples",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"set-role-statement"},"SET ROLE Statement"),(0,l.kt)("p",null,"Activates roles for the current user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET ROLE {DEFAULT | NONE | role [,...] | ALL | ALL EXCEPT role [,...]}\n")),(0,l.kt)("h2",{id:"set-default-role"},"SET DEFAULT ROLE"),(0,l.kt)("p",null,"Sets default roles to a user."),(0,l.kt)("p",null,"Default roles are automatically activated at user login. You can set as default only the previously granted roles. If the role isn\u2019t granted to a user, ClickHouse throws an exception."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE {NONE | role [,...] | ALL | ALL EXCEPT role [,...]} TO {user|CURRENT_USER} [,...]\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Set multiple default roles to a user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE role1, role2, ... TO user\n")),(0,l.kt)("p",null,"Set all the granted roles as default to a user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE ALL TO user\n")),(0,l.kt)("p",null,"Purge default roles from a user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE NONE TO user\n")),(0,l.kt)("p",null,"Set all the granted roles as default excepting some of them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE ALL EXCEPT role1, role2 TO user\n")))}m.isMDXComponent=!0}}]);