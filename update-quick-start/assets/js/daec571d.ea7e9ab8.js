"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72344],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,N=d["".concat(p,".").concat(m)]||d[m]||i[m]||l;return t?r.createElement(N,s(s({ref:n},c),{},{components:t})):r.createElement(N,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17810:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return i}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),s=["components"],o={sidebar_label:"ARRAY JOIN"},p="\u0421\u0435\u043a\u0446\u0438\u044f ARRAY JOIN",u={unversionedId:"ru/sql-reference/statements/select/array-join",id:"ru/sql-reference/statements/select/array-join",title:"\u0421\u0435\u043a\u0446\u0438\u044f ARRAY JOIN",description:"select-array-join-clause}",source:"@site/docs/ru/sql-reference/statements/select/array-join.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/array-join",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/array-join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/array-join.md",tags:[],version:"current",frontMatter:{sidebar_label:"ARRAY JOIN"},sidebar:"russia",previous:{title:"ALL",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/all"},next:{title:"DISTINCT",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/distinct"}},c={},i=[{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b ARRAY JOIN",id:"basic-array-join-examples",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u043b\u0438\u0430\u0441\u043e\u0432",id:"using-aliases",level:2},{value:"ARRAY JOIN \u0441\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445",id:"array-join-with-nested-data-structure",level:2},{value:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"implementation-details",level:2}],d={toc:i};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-array-join-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f ARRAY JOIN"),(0,l.kt)("p",null,"\u0422\u0438\u043f\u043e\u0432\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0435\u0446-\u043c\u0430\u0441\u0441\u0438\u0432 \u2014 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043d\u043e\u0432\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u043a\u0430\u0436\u0434\u044b\u043c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0438\u0437 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u042d\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN"),"."),(0,l.kt)("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u043e\u0439 \u0441\u0435\u043a\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043e\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u044d\u0442\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0438\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c \u0438\u043b\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445. \u0426\u0435\u043b\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u0445\u043e\u0436\u0430 \u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/functions/array-join#functions_arrayjoin"},"arrayJoin"),", \u043d\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0435\u043a\u0446\u0438\u0438 \u0448\u0438\u0440\u0435."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <expr_list>\nFROM <left_subquery>\n[LEFT] ARRAY JOIN <array>\n[WHERE|PREWHERE <expr>]\n...\n")),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0443 \u0441\u0435\u043a\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),(0,l.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u0438\u0434\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u043d\u0438\u0436\u0435:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ARRAY JOIN")," - \u0412 \u0431\u0430\u0437\u043e\u0432\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0443\u0441\u0442\u044b\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LEFT ARRAY JOIN")," - \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043f\u0443\u0441\u0442\u044b\u043c\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u0443\u0441\u0442\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0432\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0442\u0438\u043f\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 (\u043e\u0431\u044b\u0447\u043d\u043e 0, \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0438\u043b\u0438 NULL).")),(0,l.kt)("h2",{id:"basic-array-join-examples"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b ARRAY JOIN"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043d\u0438\u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"LEFT ARRAY JOIN"),". C\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u043a\u043e\u043b\u043e\u043d\u043a\u043e\u0439 \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/array"},"Array")," \u0438 \u0432\u0441\u0442\u0430\u0432\u0438\u043c \u0432 \u043d\u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE arrays_test\n(\n    s String,\n    arr Array(UInt8)\n) ENGINE = Memory;\n\nINSERT INTO arrays_test\nVALUES ('Hello', [1,2]), ('World', [3,4,5]), ('Goodbye', []);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello       \u2502 [1,2]   \u2502\n\u2502 World       \u2502 [3,4,5] \u2502\n\u2502 Goodbye     \u2502 []      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0412 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u043c \u043d\u0438\u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr\nFROM arrays_test\nARRAY JOIN arr;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2510\n\u2502 Hello \u2502   1 \u2502\n\u2502 Hello \u2502   2 \u2502\n\u2502 World \u2502   3 \u2502\n\u2502 World \u2502   4 \u2502\n\u2502 World \u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"LEFT ARRAY JOIN"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr\nFROM arrays_test\nLEFT ARRAY JOIN arr;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2510\n\u2502 Hello       \u2502   1 \u2502\n\u2502 Hello       \u2502   2 \u2502\n\u2502 World       \u2502   3 \u2502\n\u2502 World       \u2502   4 \u2502\n\u2502 World       \u2502   5 \u2502\n\u2502 Goodbye     \u2502   0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"using-aliases"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u043b\u0438\u0430\u0441\u043e\u0432"),(0,l.kt)("p",null,"\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d \u0430\u043b\u0438\u0430\u0441 \u0434\u043b\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u0430. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u0430\u043b\u0438\u0430\u0441, \u0430 \u0441\u0430\u043c \u043c\u0430\u0441\u0441\u0438\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043f\u043e \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u043c\u0435\u043d\u0438. \u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr, a\nFROM arrays_test\nARRAY JOIN arr AS a;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u252c\u2500a\u2500\u2510\n\u2502 Hello \u2502 [1,2]   \u2502 1 \u2502\n\u2502 Hello \u2502 [1,2]   \u2502 2 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 3 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 4 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr_external\nFROM arrays_test\nARRAY JOIN [1, 2, 3] AS arr_external;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr_external\u2500\u2510\n\u2502 Hello       \u2502            1 \u2502\n\u2502 Hello       \u2502            2 \u2502\n\u2502 Hello       \u2502            3 \u2502\n\u2502 World       \u2502            1 \u2502\n\u2502 World       \u2502            2 \u2502\n\u2502 World       \u2502            3 \u2502\n\u2502 Goodbye     \u2502            1 \u2502\n\u2502 Goodbye     \u2502            2 \u2502\n\u2502 Goodbye     \u2502            3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0441 \u043d\u0438\u043c\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e (\u043f\u0440\u044f\u043c\u0430\u044f \u0441\u0443\u043c\u043c\u0430, \u0430 \u043d\u0435 \u0434\u0435\u043a\u0430\u0440\u0442\u043e\u0432\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435). \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432\u0441\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440. \u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr, a, num, mapped\nFROM arrays_test\nARRAY JOIN arr AS a, arrayEnumerate(arr) AS num, arrayMap(x -> x + 1, arr) AS mapped;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u252c\u2500a\u2500\u252c\u2500num\u2500\u252c\u2500mapped\u2500\u2510\n\u2502 Hello \u2502 [1,2]   \u2502 1 \u2502   1 \u2502      2 \u2502\n\u2502 Hello \u2502 [1,2]   \u2502 2 \u2502   2 \u2502      3 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 3 \u2502   1 \u2502      4 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 4 \u2502   2 \u2502      5 \u2502\n\u2502 World \u2502 [3,4,5] \u2502 5 \u2502   3 \u2502      6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0412 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u043c \u043d\u0438\u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("a",{parentName:"p",href:"../../../sql-reference/functions/array-functions#array_functions-arrayenumerate"},"arrayEnumerate"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, arr, a, num, arrayEnumerate(arr)\nFROM arrays_test\nARRAY JOIN arr AS a, arrayEnumerate(arr) AS num;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500arr\u2500\u2500\u2500\u2500\u2500\u252c\u2500a\u2500\u252c\u2500num\u2500\u252c\u2500arrayEnumerate(arr)\u2500\u2510\n\u2502 Hello \u2502 [1,2]   \u2502 1 \u2502   1 \u2502 [1,2]               \u2502\n\u2502 Hello \u2502 [1,2]   \u2502 2 \u2502   2 \u2502 [1,2]               \u2502\n\u2502 World \u2502 [3,4,5] \u2502 3 \u2502   1 \u2502 [1,2,3]             \u2502\n\u2502 World \u2502 [3,4,5] \u2502 4 \u2502   2 \u2502 [1,2,3]             \u2502\n\u2502 World \u2502 [3,4,5] \u2502 5 \u2502   3 \u2502 [1,2,3]             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"array-join-with-nested-data-structure"},"ARRAY JOIN \u0441\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nested-data-structures/nested"},"\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE nested_test\n(\n    s String,\n    nest Nested(\n    x UInt8,\n    y UInt32)\n) ENGINE = Memory;\n\nINSERT INTO nested_test\nVALUES ('Hello', [1,2], [10,20]), ('World', [3,4,5], [30,40,50]), ('Goodbye', [], []);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500nest.x\u2500\u2500\u252c\u2500nest.y\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello   \u2502 [1,2]   \u2502 [10,20]    \u2502\n\u2502 World   \u2502 [3,4,5] \u2502 [30,40,50] \u2502\n\u2502 Goodbye \u2502 []      \u2502 []         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `nest.x`, `nest.y`\nFROM nested_test\nARRAY JOIN nest;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500nest.x\u2500\u252c\u2500nest.y\u2500\u2510\n\u2502 Hello \u2502      1 \u2502     10 \u2502\n\u2502 Hello \u2502      2 \u2502     20 \u2502\n\u2502 World \u2502      3 \u2502     30 \u2502\n\u2502 World \u2502      4 \u2502     40 \u2502\n\u2502 World \u2502      5 \u2502     50 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u0438\u043c\u0435\u043d \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN"),", \u0441\u0435\u043a\u0446\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u043d \u0441\u043e\u0441\u0442\u043e\u0438\u0442. \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0438\u0436\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `nest.x`, `nest.y`\nFROM nested_test\nARRAY JOIN `nest.x`, `nest.y`;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500nest.x\u2500\u252c\u2500nest.y\u2500\u2510\n\u2502 Hello \u2502      1 \u2502     10 \u2502\n\u2502 Hello \u2502      2 \u2502     20 \u2502\n\u2502 World \u2502      3 \u2502     30 \u2502\n\u2502 World \u2502      4 \u2502     40 \u2502\n\u2502 World \u2502      5 \u2502     50 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0430\u044f \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u044f \u0442\u0430\u043a\u0436\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `nest.x`, `nest.y`\nFROM nested_test\nARRAY JOIN `nest.x`;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500nest.x\u2500\u252c\u2500nest.y\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello \u2502      1 \u2502 [10,20]    \u2502\n\u2502 Hello \u2502      2 \u2502 [10,20]    \u2502\n\u2502 World \u2502      3 \u2502 [30,40,50] \u2502\n\u2502 World \u2502      4 \u2502 [30,40,50] \u2502\n\u2502 World \u2502      5 \u2502 [30,40,50] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441 \u0434\u043b\u044f \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 JOIN-\u0430, \u0442\u0430\u043a \u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432. \u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `n.x`, `n.y`, `nest.x`, `nest.y`\nFROM nested_test\nARRAY JOIN nest AS n;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500n.x\u2500\u252c\u2500n.y\u2500\u252c\u2500nest.x\u2500\u2500\u252c\u2500nest.y\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello \u2502   1 \u2502  10 \u2502 [1,2]   \u2502 [10,20]    \u2502\n\u2502 Hello \u2502   2 \u2502  20 \u2502 [1,2]   \u2502 [10,20]    \u2502\n\u2502 World \u2502   3 \u2502  30 \u2502 [3,4,5] \u2502 [30,40,50] \u2502\n\u2502 World \u2502   4 \u2502  40 \u2502 [3,4,5] \u2502 [30,40,50] \u2502\n\u2502 World \u2502   5 \u2502  50 \u2502 [3,4,5] \u2502 [30,40,50] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"../../../sql-reference/functions/array-functions#array_functions-arrayenumerate"},"arrayEnumerate"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT s, `n.x`, `n.y`, `nest.x`, `nest.y`, num\nFROM nested_test\nARRAY JOIN nest AS n, arrayEnumerate(`nest.x`) AS num;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u2500\u252c\u2500n.x\u2500\u252c\u2500n.y\u2500\u252c\u2500nest.x\u2500\u2500\u252c\u2500nest.y\u2500\u2500\u2500\u2500\u2500\u252c\u2500num\u2500\u2510\n\u2502 Hello \u2502   1 \u2502  10 \u2502 [1,2]   \u2502 [10,20]    \u2502   1 \u2502\n\u2502 Hello \u2502   2 \u2502  20 \u2502 [1,2]   \u2502 [10,20]    \u2502   2 \u2502\n\u2502 World \u2502   3 \u2502  30 \u2502 [3,4,5] \u2502 [30,40,50] \u2502   1 \u2502\n\u2502 World \u2502   4 \u2502  40 \u2502 [3,4,5] \u2502 [30,40,50] \u2502   2 \u2502\n\u2502 World \u2502   5 \u2502  50 \u2502 [3,4,5] \u2502 [30,40,50] \u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"implementation-details"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u0425\u043e\u0442\u044f \u0441\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043f\u0435\u0440\u0435\u0434 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/where"},"WHERE"),"/",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/prewhere"},"PREWHERE"),", \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432 \u043b\u044e\u0431\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0435\u0441\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438. \u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."))}m.isMDXComponent=!0}}]);