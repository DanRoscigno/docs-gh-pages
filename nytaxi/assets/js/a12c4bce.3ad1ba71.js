"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1133],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=o(n),m=a,f=g["".concat(u,".").concat(m)]||g[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},99561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={sidebar_position:205},u="quantileTimingWeighted",o={unversionedId:"ru/sql-reference/aggregate-functions/reference/quantiletimingweighted",id:"ru/sql-reference/aggregate-functions/reference/quantiletimingweighted",title:"quantileTimingWeighted",description:"quantiletimingweighted}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/quantiletimingweighted.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/quantiletimingweighted",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/quantiletimingweighted",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/quantiletimingweighted.md",tags:[],version:"current",sidebarPosition:205,frontMatter:{sidebar_position:205},sidebar:"russia",previous:{title:"quantileTiming",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/quantiletiming"},next:{title:"quantileDeterministic",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/quantiledeterministic"}},c={},s=[],g={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantiletimingweighted"},"quantileTimingWeighted"),(0,i.kt)("p",null,"\u0421 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,i.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D0%BD%D1%82%D0%B8%D0%BB%D1%8C"},"\u043a\u0432\u0430\u043d\u0442\u0438\u043b\u044c")," \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0432\u0435\u0441 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d (\u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430). \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u043c\u0438, \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0438\u043c\u0438 \u0442\u0430\u043a\u0438\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u043a\u0430\u043a \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043a\u043b\u0438\u043a\u0430 \u0431\u044d\u043a\u0435\u043d\u0434\u0430."),(0,i.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," \u043d\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.kt)("a",{parentName:"p",href:"#quantiles"},"quantiles"),", \u044d\u0442\u043e \u043f\u043e\u0432\u044b\u0441\u0438\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTimingWeighted(level)(expr, weight)\n")),(0,i.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441: ",(0,i.kt)("inlineCode",{parentName:"p"},"medianTimingWeighted"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"level")," \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438. \u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e. \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043e\u0442 0 \u0434\u043e 1. \u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"level")," \u0438\u0437 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"[0.01, 0.99]"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0.5. \u041f\u0440\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"level=0.5")," \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,i.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%B8%D0%B0%D0%BD%D0%B0_(%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0)"},"\u043c\u0435\u0434\u0438\u0430\u043d\u0443"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),", \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0435\u0435 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0438\u043f\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float","*"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- \u0415\u0441\u043b\u0438 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0442\u043e \u0435\u0451 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e.\n- \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c 30 000 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 30 \u0441\u0435\u043a\u0443\u043d\u0434), \u0442\u043e \u043e\u043d\u043e \u043f\u0440\u0438\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a 30 000.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"weight")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u0432\u0435\u0441\u0430\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u0412\u0435\u0441 \u2014 \u044d\u0442\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c")),(0,i.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0447\u043d\u044b \u043f\u0440\u0438 \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0435 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 5670 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432."),(0,i.kt)("li",{parentName:"ul"},"\u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 5670 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 1024.")),(0,i.kt)("p",null,"\u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u043c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044f \u0447\u0438\u0441\u043b\u0430 16."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0414\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435 \u0438 \u0442\u043e\u0447\u043d\u0435\u0435, \u0447\u0435\u043c [quantile](#quantile).\n:::\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041a\u0432\u0430\u043d\u0442\u0438\u043b\u044c \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f.")),(0,i.kt)("p",null,"\u0422\u0438\u043f: ",(0,i.kt)("inlineCode",{parentName:"p"},"Float32"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f"\n\u0415\u0441\u043b\u0438 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044e `quantileTimingIf` \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0442\u043e \u0432\u0435\u0440\u043d\u0451\u0442\u0441\u044f [NaN](/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float#data_type-float-nan-inf). \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u043e\u0442 \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 0. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 `NaN` c\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 [\u0421\u0435\u043a\u0446\u0438\u044f ORDER BY](/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/order-by#select-order-by).\n:::\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u252c\u2500weight\u2500\u2510\n\u2502            68 \u2502      1 \u2502\n\u2502           104 \u2502      2 \u2502\n\u2502           112 \u2502      3 \u2502\n\u2502           126 \u2502      2 \u2502\n\u2502           138 \u2502      1 \u2502\n\u2502           162 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTimingWeighted(response_time, weight) FROM t\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTimingWeighted(response_time, weight)\u2500\u2510\n\u2502                                           112 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}m.isMDXComponent=!0}}]);