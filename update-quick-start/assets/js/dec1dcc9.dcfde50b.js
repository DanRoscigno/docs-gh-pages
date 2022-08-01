"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66974],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=i(a),m=r,d=k["".concat(u,".").concat(m)]||k[m]||c[m]||l;return a?n.createElement(d,p(p({ref:t},o),{},{components:a})):n.createElement(d,p({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=k;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},86756:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],s={},u="Distance functions",i={unversionedId:"en/sql-reference/functions/distance-functions",id:"en/sql-reference/functions/distance-functions",title:"Distance functions",description:"L1Norm",source:"@site/docs/en/sql-reference/functions/distance-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/distance-functions",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/distance-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/distance-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"Time Window",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/time-window-functions"},next:{title:"Aggregate Functions",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/"}},o={},c=[{value:"L1Norm",id:"l1norm",level:2},{value:"L2Norm",id:"l2norm",level:2},{value:"LinfNorm",id:"linfnorm",level:2},{value:"LpNorm",id:"lpnorm",level:2},{value:"L1Distance",id:"l1distance",level:2},{value:"L2Distance",id:"l2distance",level:2},{value:"LinfDistance",id:"linfdistance",level:2},{value:"LpDistance",id:"lpdistance",level:2},{value:"L1Normalize",id:"l1normalize",level:2},{value:"L2Normalize",id:"l2normalize",level:2},{value:"LinfNormalize",id:"linfnormalize",level:2},{value:"LpNormalize",id:"lpnormalize",level:2},{value:"cosineDistance",id:"cosinedistance",level:2}],k={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"distance-functions"},"Distance functions"),(0,l.kt)("h2",{id:"l1norm"},"L1Norm"),(0,l.kt)("p",null,"Calculates the sum of absolute values of a vector."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"L1Norm(vector)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"normL1"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"L1-norm or ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Taxicab_geometry"},"taxicab geometry")," distance.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT L1Norm((1, 2));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500L1Norm((1, 2))\u2500\u2510\n\u2502              3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"l2norm"},"L2Norm"),(0,l.kt)("p",null,"Calculates the square root of the sum of the squares of the vector values."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"L2Norm(vector)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"normL2"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"L2-norm or ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Euclidean_distance"},"Euclidean distance"),".")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT L2Norm((1, 2));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500L2Norm((1, 2))\u2500\u2510\n\u2502 2.23606797749979 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"linfnorm"},"LinfNorm"),(0,l.kt)("p",null,"Calculates the maximum of absolute values of a vector."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LinfNorm(vector)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"normLinf"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linf-norm or the maximum absolute value.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT LinfNorm((1, -2));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500LinfNorm((1, -2))\u2500\u2510\n\u2502                 2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"lpnorm"},"LpNorm"),(0,l.kt)("p",null,"Calculates the root of ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),"-th power of the sum of the absolute values of a vector in the power of ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LpNorm(vector, p)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"normLp"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p")," \u2014 The power. Possible values: real number in ",(0,l.kt)("inlineCode",{parentName:"li"},"[1; inf)"),". ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Norm_(mathematics)#p-norm"},"Lp-norm"))),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT LpNorm((1, -2), 2);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500LpNorm((1, -2), 2)\u2500\u2510\n\u2502   2.23606797749979 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"l1distance"},"L1Distance"),(0,l.kt)("p",null,"Calculates the distance between two points (the values of the vectors are the coordinates) in ",(0,l.kt)("inlineCode",{parentName:"p"},"L1")," space (1-norm (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Taxicab_geometry"},"taxicab geometry")," distance))."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"L1Distance(vector1, vector2)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"distanceL1"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector1")," \u2014 First vector. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector2")," \u2014 Second vector. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1-norm distance.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT L1Distance((1, 2), (2, 3));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500L1Distance((1, 2), (2, 3))\u2500\u2510\n\u2502                          2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"l2distance"},"L2Distance"),(0,l.kt)("p",null,"Calculates the distance between two points (the values of the vectors are the coordinates) in Euclidean space (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Euclidean_distance"},"Euclidean distance"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"L2Distance(vector1, vector2)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"distanceL2"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector1")," \u2014 First vector. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector2")," \u2014 Second vector. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2-norm distance.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT L2Distance((1, 2), (2, 3));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500L2Distance((1, 2), (2, 3))\u2500\u2510\n\u2502         1.4142135623730951 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"linfdistance"},"LinfDistance"),(0,l.kt)("p",null,"Calculates the distance between two points (the values of the vectors are the coordinates) in ",(0,l.kt)("inlineCode",{parentName:"p"},"L_{inf}")," space (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Norm_(mathematics)#Maximum_norm_(special_case_of:_infinity_norm,_uniform_norm,_or_supremum_norm)"},"maximum norm"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LinfDistance(vector1, vector2)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"distanceLinf"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector1")," \u2014 First vector. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector1")," \u2014 Second vector. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Infinity-norm distance.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT LinfDistance((1, 2), (2, 3));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500LinfDistance((1, 2), (2, 3))\u2500\u2510\n\u2502                            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"lpdistance"},"LpDistance"),(0,l.kt)("p",null,"Calculates the distance between two points (the values of the vectors are the coordinates) in ",(0,l.kt)("inlineCode",{parentName:"p"},"Lp")," space (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Norm_(mathematics)#p-norm"},"p-norm distance"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LpDistance(vector1, vector2, p)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"distanceLp"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector1")," \u2014 First vector. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vector2")," \u2014 Second vector. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p")," \u2014 The power. Possible values: real number from ",(0,l.kt)("inlineCode",{parentName:"li"},"[1; inf)"),". ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"p-norm distance.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT LpDistance((1, 2), (2, 3), 3);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500LpDistance((1, 2), (2, 3), 3)\u2500\u2510\n\u2502            1.2599210498948732 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"l1normalize"},"L1Normalize"),(0,l.kt)("p",null,"Calculates the unit vector of a given vector (the values of the tuple are the coordinates) in ",(0,l.kt)("inlineCode",{parentName:"p"},"L1")," space (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Taxicab_geometry"},"taxicab geometry"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"L1Normalize(tuple)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"normalizeL1"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unit vector.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT L1Normalize((1, 2));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500L1Normalize((1, 2))\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (0.3333333333333333,0.6666666666666666) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"l2normalize"},"L2Normalize"),(0,l.kt)("p",null,"Calculates the unit vector of a given vector (the values of the tuple are the coordinates) in Euclidean space (using ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Euclidean_distance"},"Euclidean distance"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"L2Normalize(tuple)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"normalizeL1"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unit vector.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT L2Normalize((3, 4));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500L2Normalize((3, 4))\u2500\u2510\n\u2502 (0.6,0.8)           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"linfnormalize"},"LinfNormalize"),(0,l.kt)("p",null,"Calculates the unit vector of a given vector (the values of the tuple are the coordinates) in ",(0,l.kt)("inlineCode",{parentName:"p"},"L_{inf}")," space (using ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Norm_(mathematics)#Maximum_norm_(special_case_of:_infinity_norm,_uniform_norm,_or_supremum_norm)"},"maximum norm"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LinfNormalize(tuple)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"normalizeLinf "),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unit vector.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT LinfNormalize((3, 4));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500LinfNormalize((3, 4))\u2500\u2510\n\u2502 (0.75,1)              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"lpnormalize"},"LpNormalize"),(0,l.kt)("p",null,"Calculates the unit vector of a given vector (the values of the tuple are the coordinates) in ",(0,l.kt)("inlineCode",{parentName:"p"},"Lp")," space (using ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Norm_(mathematics)#p-norm"},"p-norm"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LpNormalize(tuple, p)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"normalizeLp "),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p")," \u2014 The power. Possible values: any number from [1;inf). ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unit vector.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple")," of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT LpNormalize((3, 4),5);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500LpNormalize((3, 4), 5)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (0.7187302630182624,0.9583070173576831) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"cosinedistance"},"cosineDistance"),(0,l.kt)("p",null,"Calculates the cosine distance between two vectors (the values of the tuples are the coordinates). The less the returned value is, the more similar are the vectors."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"cosineDistance(tuple1, tuple2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple1")," \u2014 First tuple. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple2")," \u2014 Second tuple. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cosine of the angle between two vectors substracted from one.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT cosineDistance((1, 2), (2, 3));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cosineDistance((1, 2), (2, 3))\u2500\u2510\n\u2502           0.007722123286332261 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);