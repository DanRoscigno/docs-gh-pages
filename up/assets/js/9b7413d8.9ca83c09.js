"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58409],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||s;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84192:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={},c="system.databases",u={unversionedId:"ru/operations/system-tables/databases",id:"ru/operations/system-tables/databases",title:"system.databases",description:"system-databases}",source:"@site/docs/ru/operations/system-tables/databases.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/databases",permalink:"/docs-gh-pages/up/ru/operations/system-tables/databases",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/databases.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.data_type_families",permalink:"/docs-gh-pages/up/ru/operations/system-tables/data_type_families"},next:{title:"system.detached_parts",permalink:"/docs-gh-pages/up/ru/operations/system-tables/detached_parts"}},p={},l=[],m={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-databases"},"system.databases"),(0,s.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0434\u0438\u043d \u0441\u0442\u043e\u043b\u0431\u0435\u0446 name \u0442\u0438\u043f\u0430 String - \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445.\n\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u043d\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440, \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435.\n\u042d\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,s.kt)("inlineCode",{parentName:"p"},"SHOW DATABASES"),"."))}f.isMDXComponent=!0}}]);