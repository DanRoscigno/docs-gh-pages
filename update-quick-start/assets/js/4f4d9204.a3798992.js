"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48413],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),f=c(r),g=a,k=f["".concat(p,".").concat(g)]||f[g]||s[g]||l;return r?n.createElement(k,i(i({ref:t},o),{},{components:r})):n.createElement(k,i({ref:t},o))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63847:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],u={sidebar_position:200},p="quantile",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/quantile",id:"ru/sql-reference/aggregate-functions/reference/quantile",title:"quantile",description:"quantile}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/quantile.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/quantile",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/quantile",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/quantile.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"russia",previous:{title:"uniqTheta",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/uniqthetasketch"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/quantiles"}},o={},s=[],f={toc:s};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quantile"},"quantile"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D0%BD%D1%82%D0%B8%D0%BB%D1%8C"},"\u043a\u0432\u0430\u043d\u0442\u0438\u043b\u044c")," \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reservoir_sampling"},"reservoir sampling")," \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440\u0430 \u0434\u043e 8192 \u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0447\u0438\u0441\u0435\u043b \u0434\u043b\u044f \u0434\u043b\u044f \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0435 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u043e\u0447\u043d\u0443\u044e \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("a",{parentName:"p",href:"#quantileexact"},"quantileExact"),"."),(0,l.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"quantile*")," \u043d\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("a",{parentName:"p",href:"#quantiles"},"quantiles"),", \u044d\u0442\u043e \u043f\u043e\u0432\u044b\u0441\u0438\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantile(level)(expr)\n")),(0,l.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441: ",(0,l.kt)("inlineCode",{parentName:"p"},"median"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438. \u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e. \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043e\u0442 0 \u0434\u043e 1. \u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u0438\u0437 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0.5. \u041f\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,l.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%B8%D0%B0%D0%BD%D0%B0_(%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0)"},"\u043c\u0435\u0434\u0438\u0430\u043d\u0443"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0435\u0435 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/#data_types"},"\u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0442\u0438\u043f\u043e\u0432")," \u0438\u043b\u0438 \u0442\u0438\u043f\u043e\u0432 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/date"},"Date"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u044c \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f.")),(0,l.kt)("p",null,"\u0422\u0438\u043f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/float"},"Float64")," \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/date"},"Date"),", \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/datetime"},"DateTime"),", \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u2510\n\u2502   1 \u2502\n\u2502   1 \u2502\n\u2502   2 \u2502\n\u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantile(val) FROM t\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantile(val)\u2500\u2510\n\u2502           1.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}g.isMDXComponent=!0}}]);