"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[37653],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||s;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<s;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78367:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),c=["components"],o={sidebar_label:"CREATE",sidebar_position:34},i="\u0417\u0430\u043f\u0440\u043e\u0441\u044b CREATE",u={unversionedId:"ru/sql-reference/statements/create/index",id:"ru/sql-reference/statements/create/index",title:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b CREATE",description:"create-queries}",source:"@site/docs/ru/sql-reference/statements/create/index.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/create/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/create/index.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{sidebar_label:"CREATE",sidebar_position:34},sidebar:"russia",previous:{title:"INSERT INTO",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/insert-into"},next:{title:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/create/database"}},l={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-queries"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b CREATE"),(0,s.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 create \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u0443\u044e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/database"},"DATABASE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/table"},"TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/view"},"VIEW")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/dictionary"},"DICTIONARY")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/function"},"FUNCTION")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/user"},"USER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/role"},"ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/row-policy"},"ROW POLICY")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/quota"},"QUOTA")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/settings-profile"},"SETTINGS PROFILE"))))}m.isMDXComponent=!0}}]);