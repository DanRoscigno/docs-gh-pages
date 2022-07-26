"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92940],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||s;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94386:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],l={sidebar_position:39,sidebar_label:"DELETE"},i="ALTER TABLE \u2026 DELETE \u8bed\u53e5",c={unversionedId:"zh/sql-reference/statements/alter/delete",id:"zh/sql-reference/statements/alter/delete",title:"ALTER TABLE \u2026 DELETE \u8bed\u53e5",description:"alter-mutations}",source:"@site/docs/zh/sql-reference/statements/alter/delete.md",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/delete",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/alter/delete",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/alter/delete.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"DELETE"},sidebar:"chinese",previous:{title:"SETTING",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/alter/setting"},next:{title:"UPDATE",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/alter/update"}},p={},u=[],f={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"alter-mutations"},"ALTER TABLE \u2026 DELETE \u8bed\u53e5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table [ON CLUSTER cluster] DELETE WHERE filter_expr\n")),(0,s.kt)("p",null,"\u5220\u9664\u5339\u914d\u6307\u5b9a\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u7684\u6570\u636e\u3002\u5b9e\u73b0\u4e3a",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/alter/#mutations"},"\u7a81\u53d8"),"."),(0,s.kt)("p",null,'!!! note "\u5907\u6ce8"\n',(0,s.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),"\u524d\u7f00\u4f7f\u5f97\u8fd9\u4e2a\u8bed\u6cd5\u4e0d\u540c\u4e8e\u5927\u591a\u6570\u5176\u4ed6\u652f\u6301SQL\u7684\u7cfb\u7edf\u3002\u5b83\u7684\u76ee\u7684\u662f\u8868\u793a\uff0c\u4e0eOLTP\u6570\u636e\u5e93\u4e2d\u7684\u7c7b\u4f3c\u67e5\u8be2\u4e0d\u540c\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e0d\u4e3a\u7ecf\u5e38\u4f7f\u7528\u800c\u8bbe\u8ba1\u7684\u7e41\u91cd\u64cd\u4f5c\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"filter_expr")," \u7684\u7c7b\u578b\u5fc5\u987b\u662f",(0,s.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u3002\u8be5\u67e5\u8be2\u5220\u9664\u8868\u4e2d\u8be5\u8868\u8fbe\u5f0f\u63a5\u53d7\u975e\u96f6\u503c\u7684\u884c\u3002"),(0,s.kt)("p",null,"\u4e00\u4e2a\u67e5\u8be2\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u7528\u9017\u53f7\u5206\u9694\u7684\u547d\u4ee4\u3002"),(0,s.kt)("p",null,"\u67e5\u8be2\u5904\u7406\u7684\u540c\u6b65\u6027\u7531",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/settings#mutations_sync"},"mutations_sync"),"\u8bbe\u7f6e\u5b9a\u4e49\u3002\u7f3a\u7701\u60c5\u51b5\u4e0b\uff0c\u662f\u5f02\u6b65\u7684\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u8be6\u89c1")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/alter/#mutations"},"\u7a81\u53d8")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/alter/#synchronicity-of-alter-queries"},"ALTER\u67e5\u8be2\u7684\u540c\u6b65\u6027")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/operations/settings/settings#mutations_sync"},"mutations_sync")," setting")))}m.isMDXComponent=!0}}]);