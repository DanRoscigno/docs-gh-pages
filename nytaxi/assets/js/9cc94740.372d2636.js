"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[46866],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||s;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71724:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={sidebar_position:39,sidebar_label:"DELETE"},l="ALTER TABLE \u2026 DELETE",c={unversionedId:"ru/sql-reference/statements/alter/delete",id:"ru/sql-reference/statements/alter/delete",title:"ALTER TABLE \u2026 DELETE",description:"alter-mutations}",source:"@site/docs/ru/sql-reference/statements/alter/delete.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/delete",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/alter/delete",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/delete.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"DELETE"},sidebar:"russia",previous:{title:"SETTING",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/alter/setting"},next:{title:"UPDATE",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/alter/update"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"alter-mutations"},"ALTER TABLE \u2026 DELETE"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table [ON CLUSTER cluster] DELETE WHERE filter_expr\n")),(0,s.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438. \u0420\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043a\u0430\u043a ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/alter/#mutations"},"\u043c\u0443\u0442\u0430\u0446\u0438\u044f"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},":::note\n\u041f\u0440\u0435\u0444\u0438\u043a\u0441 `ALTER TABLE` \u0434\u0435\u043b\u0430\u0435\u0442 \u044d\u0442\u043e\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u043c \u043e\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043c, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u0445 SQL. \u041e\u043d \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 OLTP \u044d\u0442\u043e \u0442\u044f\u0436\u0435\u043b\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f, \u043d\u0435 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0447\u0430\u0441\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f.\n:::\n")),(0,s.kt)("p",null,"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"filter_expr")," \u0434\u043e\u043b\u0436\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u0442\u0438\u043f ",(0,s.kt)("inlineCode",{parentName:"p"},"UInt8"),". \u0417\u0430\u043f\u0440\u043e\u0441 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044d\u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0435\u043d\u0443\u043b\u0435\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,s.kt)("p",null,"\u041e\u0434\u0438\u043d \u0437\u0430\u043f\u0440\u043e\u0441 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043c\u0430\u043d\u0434, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438."),(0,s.kt)("p",null,"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings#mutations_sync"},"mutations_sync"),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/alter/#mutations"},"\u041c\u0443\u0442\u0430\u0446\u0438\u0438")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/alter/#synchronicity-of-alter-queries"},"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ALTER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings#mutations_sync"},"mutations_sync")," setting")))}m.isMDXComponent=!0}}]);