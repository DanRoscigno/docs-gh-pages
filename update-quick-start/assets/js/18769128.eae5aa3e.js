"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41682],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||g[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},52278:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={sidebar_position:33,sidebar_label:"Log"},s="Log",u={unversionedId:"ru/engines/table-engines/log-family/log",id:"ru/engines/table-engines/log-family/log",title:"Log",description:"log}",source:"@site/docs/ru/engines/table-engines/log-family/log.md",sourceDirName:"ru/engines/table-engines/log-family",slug:"/ru/engines/table-engines/log-family/log",permalink:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/log-family/log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/log-family/log.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33,sidebar_label:"Log"},sidebar:"russia",previous:{title:"StripeLog",permalink:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/log-family/stripelog"},next:{title:"TinyLog",permalink:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/log-family/tinylog"}},c={},g=[],p={toc:g};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"log"},"Log"),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0443 \u0434\u0432\u0438\u0436\u043a\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Log"),". \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043e\u0431\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u043e\u0432 \u0432 \u0441\u0442\u0430\u0442\u044c\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/log-family/"},"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log"),"."),(0,i.kt)("p",null,"\u041e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/log-family/tinylog"},"TinyLog"),' \u0442\u0435\u043c, \u0447\u0442\u043e \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043b\u0435\u0436\u0438\u0442 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0444\u0430\u0439\u043b "\u0437\u0430\u0441\u0435\u0447\u0435\u043a". \u0417\u0430\u0441\u0435\u0447\u043a\u0438 \u043f\u0438\u0448\u0443\u0442\u0441\u044f \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0431\u043b\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435: \u0441 \u043a\u0430\u043a\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u0447\u0438\u0442\u0430\u0442\u044c \u0444\u0430\u0439\u043b, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0442\u043e\u043a\u043e\u0432.\n\u041f\u0440\u0438 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u043e\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u0435 \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u0447\u0442\u0435\u043d\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e, \u0430 \u0437\u0430\u043f\u0438\u0441\u0438 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0442 \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430.\n\u0414\u0432\u0438\u0436\u043e\u043a ',(0,i.kt)("inlineCode",{parentName:"p"},"Log")," \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441\u044b. \u0422\u0430\u043a\u0436\u0435, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0451\u043b \u0441\u0431\u043e\u0439, \u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u0442\u0430\u043d\u0435\u0442 \u0431\u0438\u0442\u043e\u0439, \u0438 \u0447\u0442\u0435\u043d\u0438\u044f \u0438\u0437 \u043d\u0435\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443. \u0414\u0432\u0438\u0436\u043e\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, write-once \u0442\u0430\u0431\u043b\u0438\u0446, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0445 \u0438 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0446\u0435\u043b\u0435\u0439."))}f.isMDXComponent=!0}}]);