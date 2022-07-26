"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40686],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,u(u({ref:t},l),{},{components:r})):n.createElement(m,u({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91316:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),u=["components"],a={sidebar_position:38,sidebar_label:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430"},c="\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430",s={unversionedId:"ru/guides/index",id:"ru/guides/index",title:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430",description:"rukovodstva}",source:"@site/docs/ru/guides/index.md",sourceDirName:"ru/guides",slug:"/ru/guides/",permalink:"/docs-gh-pages/up/ru/guides/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/guides/index.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430"},sidebar:"russia",previous:{title:"Window Functions",permalink:"/docs-gh-pages/up/ru/sql-reference/window-functions/"},next:{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost \u0432 ClickHouse",permalink:"/docs-gh-pages/up/ru/guides/apply-catboost-model"}},l={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rukovodstva"},"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430"),(0,i.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u043f\u043e\u0448\u0430\u0433\u043e\u0432\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u0432\u0430\u043c \u0440\u0435\u0448\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ClickHouse."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/guides/apply-catboost-model"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost \u0432 ClickHouse"))))}f.isMDXComponent=!0}}]);