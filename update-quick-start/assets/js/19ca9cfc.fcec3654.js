"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10946],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(k,u(u({ref:t},l),{},{components:r})):n.createElement(k,u({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49038:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),u=["components"],i={sidebar_position:47,sidebar_label:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 ClickHouse"},c="\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 ClickHouse",s={unversionedId:"ru/operations/update",id:"ru/operations/update",title:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 ClickHouse",description:"clickhouse-upgrade}",source:"@site/docs/ru/operations/update.md",sourceDirName:"ru/operations",slug:"/ru/operations/update",permalink:"/docs-gh-pages/update-quick-start/ru/operations/update",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/update.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,sidebar_label:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 ClickHouse"},sidebar:"russia",previous:{title:"\u0423\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0435\u0439",permalink:"/docs-gh-pages/update-quick-start/ru/operations/troubleshooting"},next:{title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c",permalink:"/docs-gh-pages/update-quick-start/ru/operations/access-rights"}},l={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clickhouse-upgrade"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 ClickHouse"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 ClickHouse \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e deb-\u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update\n$ sudo apt-get install clickhouse-client clickhouse-server\n$ sudo service clickhouse-server restart\n")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 ClickHouse \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0435 \u0438\u0437 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0445 deb-\u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432, \u043a\u0440\u043e\u043c\u0435 \u0441\u043b\u0443\u0447\u0430\u044f, \u043a\u043e\u0433\u0434\u0430 \u0432\u0441\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0448\u0430\u0440\u0434\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b.\n:::\n')),(0,a.kt)("p",null,"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 ClickHouse \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"xx.yy.a.b")," \u2014 \u044d\u0442\u043e \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438. \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0443\u0437\u043d\u0430\u0442\u044c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/releases"},"\u0437\u0434\u0435\u0441\u044c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update\n$ sudo apt-get install clickhouse-server=xx.yy.a.b clickhouse-client=xx.yy.a.b clickhouse-common-static=xx.yy.a.b\n$ sudo service clickhouse-server restart\n")))}f.isMDXComponent=!0}}]);