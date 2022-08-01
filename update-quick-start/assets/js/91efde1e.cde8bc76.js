"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98446],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,E=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(E,i(i({ref:t},c),{},{components:r})):n.createElement(E,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32503:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={sidebar_label:"PREWHERE"},s="\u0421\u0435\u043a\u0446\u0438\u044f PREWHERE",l={unversionedId:"ru/sql-reference/statements/select/prewhere",id:"ru/sql-reference/statements/select/prewhere",title:"\u0421\u0435\u043a\u0446\u0438\u044f PREWHERE",description:"prewhere-clause}",source:"@site/docs/ru/sql-reference/statements/select/prewhere.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/prewhere",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/prewhere",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/prewhere.md",tags:[],version:"current",frontMatter:{sidebar_label:"PREWHERE"},sidebar:"russia",previous:{title:"ORDER BY",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/order-by"},next:{title:"SAMPLE",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/sample"}},c={},u=[{value:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 PREWHERE \u0432\u0440\u0443\u0447\u043d\u0443\u044e",id:"controlling-prewhere-manually",level:2},{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"limitations",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prewhere-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f PREWHERE"),(0,o.kt)("p",null,"Prewhere \u2014 \u044d\u0442\u043e \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438. \u041e\u043d\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0441\u0435\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u044f\u0432\u043d\u043e \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0437 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/where"},"WHERE")," \u0434\u043e \u0441\u0442\u0430\u0434\u0438\u0438 prewhere. \u0420\u043e\u043b\u044c \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0435\u0439, \u0435\u0441\u043b\u0438 \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 prewhere \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f prewhere. \u0417\u0430\u0442\u0435\u043c \u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0431\u043b\u043e\u043a\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 prewhere \xab\u0432\u0435\u0440\u043d\u043e\xbb \u043f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043c\u0435\u0440\u0435 \u0434\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u044f\u0434\u043e\u0432. \u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u043e\u0432, \u0433\u0434\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 prewhere \xab\u043b\u043e\u0436\u043d\u043e\xbb \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u043e\u043a \u0438 \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f prewhere \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u0435\u043d\u044c\u0448\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0447\u0435\u043c \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0447\u0430\u0441\u0442\u0435\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u044d\u0442\u043e \u0447\u0430\u0441\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0434\u0438\u0441\u043a\u0430 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,o.kt)("h2",{id:"controlling-prewhere-manually"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 PREWHERE \u0432\u0440\u0443\u0447\u043d\u0443\u044e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438\u0437 \u0442\u0435\u0445, \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,o.kt)("p",null,"\u0412 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE"),", \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE"),"."),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#optimize_move_to_prewhere"},"optimize_move_to_prewhere")," \u0440\u0430\u0432\u043d\u043e 0, \u044d\u0432\u0440\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044e \u0447\u0430\u0441\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," \u043a ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f."),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0435\u0441\u0442\u044c \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/from#select-from-final"},"FINAL"),", \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430. \u041e\u043d\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043e\u0431\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#optimize_move_to_prewhere"},"optimize_move_to_prewhere")," \u0438 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#optimize_move_to_prewhere_if_final"},"optimize_move_to_prewhere_if_final"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},':::note "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"\n\u0421\u0435\u043a\u0446\u0438\u044f `PREWHERE` \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043e `FINAL`, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 `FROM ... FINAL` \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043a\u0430\u0437\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 `PREWHERE` \u0441 \u043f\u043e\u043b\u044f\u043c\u0438, \u043d\u0435 \u0432\u0445\u043e\u0434\u044f\u0449\u044f\u043c\u0438 \u0432 `ORDER BY` \u0442\u0430\u0431\u043b\u0438\u0446\u044b.\n:::\n')),(0,o.kt)("h2",{id:"limitations"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0434\u0432\u0438\u0436\u043a\u0430\u043c\u0438 \u0438\u0437 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/"},"*MergeTree"),"."))}f.isMDXComponent=!0}}]);