"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22146],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(n),g=a,m=f["".concat(c,".").concat(g)]||f[g]||i[g]||o;return n?t.createElement(m,l(l({ref:r},s),{},{components:n})):t.createElement(m,l({ref:r},s))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31842:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return i}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],u={sidebar_position:145},c="rankCorr",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/rankCorr",id:"ru/sql-reference/aggregate-functions/reference/rankCorr",title:"rankCorr",description:"agg_function-rankcorr}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/rankCorr.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/rankCorr",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/rankCorr",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/rankCorr.md",tags:[],version:"current",sidebarPosition:145,frontMatter:{sidebar_position:145},sidebar:"russia",previous:{title:"sumCount",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/sumcount"},next:{title:"sumKahan",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/sumkahan"}},s={},i=[],f={toc:i};function g(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_function-rankcorr"},"rankCorr"),(0,o.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0440\u0430\u043d\u0433\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u0438."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"rankCorr(x, y)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float#float32-float64"},"Float32")," \u0438\u043b\u0438 ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," \u2014 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float#float32-float64"},"Float32")," \u0438\u043b\u0438 ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0440\u0430\u043d\u0433\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u0438 \u0440\u0430\u043d\u0433\u043e\u0432 x \u0438 y. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043e\u0442 -1 \u0434\u043e +1. \u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0431\u043b\u0438\u0437\u043a\u043e\u0435 \u043a +1, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c, \u0438 \u0441 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0434\u043d\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u044b \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u0432\u0442\u043e\u0440\u0430\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0431\u043b\u0438\u0437\u043a\u043e\u0435 \u043a -1, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c, \u0438 \u0441 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0434\u043d\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u044b \u0432\u0442\u043e\u0440\u0430\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442\u0441\u044f. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0431\u043b\u0438\u0437\u043a\u043e\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e\u0435 0, \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c\u0438 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430\u043c\u0438.")),(0,o.kt)("p",null,"\u0422\u0438\u043f: ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT rankCorr(number, number) FROM numbers(100);\n")),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500rankCorr(number, number)\u2500\u2510\n\u2502                        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT roundBankers(rankCorr(exp(number), sin(number)), 3) FROM numbers(100);\n")),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500roundBankers(rankCorr(exp(number), sin(number)), 3)\u2500\u2510\n\u2502                                              -0.037 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BB%D1%8F%D1%86%D0%B8%D1%8F#%D0%9A%D0%BE%D1%8D%D1%84%D1%84%D0%B8%D1%86%D0%B8%D0%B5%D0%BD%D1%82_%D1%80%D0%B0%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BA%D0%BE%D1%80%D1%80%D0%B5%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%A1%D0%BF%D0%B8%D1%80%D0%BC%D0%B5%D0%BD%D0%B0"},"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0440\u0430\u043d\u0433\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u0438 \u0421\u043f\u0438\u0440\u043c\u0435\u043d\u0430"))))}g.isMDXComponent=!0}}]);