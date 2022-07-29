"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9886],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),f=c(r),m=l,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,s(s({ref:t},i),{},{components:r})):n.createElement(d,s({ref:t},i))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,s=new Array(a);s[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88958:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),l=r(63366),a=(r(67294),r(3905)),s=["components"],o={sidebar_position:50,sidebar_label:"SET ROLE"},u="SET ROLE",c={unversionedId:"ru/sql-reference/statements/set-role",id:"ru/sql-reference/statements/set-role",title:"SET ROLE",description:"set-role-statement}",source:"@site/docs/ru/sql-reference/statements/set-role.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/set-role",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/set-role",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/set-role.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"SET ROLE"},sidebar:"russia",previous:{title:"SET",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/set"},next:{title:"TRUNCATE",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/truncate"}},i={},p=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"set-role-syntax",level:3},{value:"SET DEFAULT ROLE",id:"set-default-role-statement",level:2},{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"set-default-role-syntax",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"set-default-role-examples",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,l.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-role-statement"},"SET ROLE"),(0,a.kt)("p",null,"\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442 \u0440\u043e\u043b\u0438 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("h3",{id:"set-role-syntax"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET ROLE {DEFAULT | NONE | role [,...] | ALL | ALL EXCEPT role [,...]}\n")),(0,a.kt)("h2",{id:"set-default-role-statement"},"SET DEFAULT ROLE"),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0440\u043e\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("p",null,"\u0420\u043e\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0420\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u043d\u0435\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438. \u0415\u0441\u043b\u0438 \u0440\u043e\u043b\u044c \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e, ClickHouse \u0432\u044b\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,a.kt)("h3",{id:"set-default-role-syntax"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE {NONE | role [,...] | ALL | ALL EXCEPT role [,...]} TO {user|CURRENT_USER} [,...]\n")),(0,a.kt)("h3",{id:"set-default-role-examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u043e\u043b\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE role1, role2, ... TO user\n")),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0440\u043e\u043b\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE ALL TO user\n")),(0,a.kt)("p",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u043e\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE NONE TO user\n")),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0440\u043e\u043b\u0438 \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE ALL EXCEPT role1, role2 TO user\n")))}m.isMDXComponent=!0}}]);