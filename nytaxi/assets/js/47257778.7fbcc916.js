"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85402],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:34,sidebar_label:"\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"},u="\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",p={unversionedId:"ru/sql-reference/functions/arithmetic-functions",id:"ru/sql-reference/functions/arithmetic-functions",title:"\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",description:"arifmeticheskie-funktsii}",source:"@site/docs/ru/sql-reference/functions/arithmetic-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/arithmetic-functions",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/functions/arithmetic-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/arithmetic-functions.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{sidebar_position:34,sidebar_label:"\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/functions/"},next:{title:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/functions/array-functions"}},s={},c=[{value:"plus(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a + b",id:"plusa-b-operator-a-b",level:2},{value:"minus(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a - b",id:"minusa-b-operator-a-b",level:2},{value:"multiply(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a * b",id:"multiplya-b-operator-a-b",level:2},{value:"divide(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a / b",id:"dividea-b-operator-a-b",level:2},{value:"intDiv(a, b)",id:"intdiva-b",level:2},{value:"intDivOrZero(a, b)",id:"intdivorzeroa-b",level:2},{value:"modulo(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a % b",id:"modulo",level:2},{value:"moduloOrZero(a, b)",id:"modulo-or-zero",level:2},{value:"negate(a), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 -a",id:"negatea-operator-a",level:2},{value:"abs(a)",id:"arithm_func-abs",level:2},{value:"gcd(a, b)",id:"gcda-b",level:2},{value:"lcm(a, b)",id:"lcma-b",level:2},{value:"max2",id:"max2",level:2},{value:"min2",id:"min2",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"arifmeticheskie-funktsii"},"\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0432\u0441\u0435\u0445 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0442\u0438\u043f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f, \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u0442\u0438\u043f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0432\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u0442\u0438\u043f \u0435\u0441\u0442\u044c. \u041c\u0438\u043d\u0438\u043c\u0443\u043c \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u0431\u0438\u0442, \u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0441\u0442\u0438 \u0438 \xab\u043f\u043b\u0430\u0432\u0443\u0447\u0435\u0441\u0442\u0438\xbb. \u0415\u0441\u043b\u0438 \u0431\u0438\u0442 \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u0442\u043e \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u0442\u0438\u043f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0431\u0438\u0442\u043d\u043e\u0441\u0442\u0438."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(0), toTypeName(0 + 0), toTypeName(0 + 0 + 0), toTypeName(0 + 0 + 0 + 0)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(0)\u2500\u252c\u2500toTypeName(plus(0, 0))\u2500\u252c\u2500toTypeName(plus(plus(0, 0), 0))\u2500\u252c\u2500toTypeName(plus(plus(plus(0, 0), 0), 0))\u2500\u2510\n\u2502 UInt8         \u2502 UInt16                 \u2502 UInt32                          \u2502 UInt64                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u043f\u0430\u0440\u044b \u0442\u0438\u043f\u043e\u0432 \u0438\u0437 UInt8, UInt16, UInt32, UInt64, Int8, Int16, Int32, Int64, Float32, Float64."),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435, \u043a\u0430\u043a \u0432 C++."),(0,l.kt)("h2",{id:"plusa-b-operator-a-b"},"plus(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a + b"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0441\u0443\u043c\u043c\u0443 \u0447\u0438\u0441\u0435\u043b.\n\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u0446\u0435\u043b\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u0441 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0434\u0430\u0442\u043e\u0439-\u0441-\u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0434\u0430\u0442\u044b, \u043f\u0440\u0438\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043f\u0440\u0438\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u043d\u0435\u0439. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0434\u0430\u0442\u044b-\u0441-\u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c - \u043f\u0440\u0438\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0435\u043a\u0443\u043d\u0434."),(0,l.kt)("h2",{id:"minusa-b-operator-a-b"},"minus(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a - b"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u043d\u043e\u0441\u0442\u044c \u0447\u0438\u0441\u0435\u043b. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0442\u0438\u043f."),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0447\u0438\u0442\u0430\u0442\u044c \u0446\u0435\u043b\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u0438\u0437 \u0434\u0430\u0442\u044b \u0438 \u0434\u0430\u0442\u044b-\u0441-\u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c. \u0421\u043c\u044b\u0441\u043b \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u0435\u043d - \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u044b\u0448\u0435 \u0434\u043b\u044f plus."),(0,l.kt)("h2",{id:"multiplya-b-operator-a-b"},"multiply(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a ","*"," b"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u0435\u043b."),(0,l.kt)("h2",{id:"dividea-b-operator-a-b"},"divide(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a / b"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0447\u0430\u0441\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u0435\u043b. \u0422\u0438\u043f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u0438\u043f\u043e\u043c \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439.\n\u0422\u043e \u0435\u0441\u0442\u044c, \u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0435 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435. \u0414\u043b\u044f \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e intDiv.\n\u041f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043d\u0430 \u043d\u043e\u043b\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f inf, -inf \u0438\u043b\u0438 nan."),(0,l.kt)("h2",{id:"intdiva-b"},"intDiv(a, b)"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0447\u0430\u0441\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u0435\u043b. \u0414\u0435\u043b\u0435\u043d\u0438\u0435 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435, \u0441 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435\u043c \u0432\u043d\u0438\u0437 (\u043f\u043e \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e).\n\u041f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043d\u0430 \u043d\u043e\u043b\u044c \u0438\u043b\u0438 \u043f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043d\u0430 \u043c\u0438\u043d\u0443\u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u0443, \u043a\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,l.kt)("h2",{id:"intdivorzeroa-b"},"intDivOrZero(a, b)"),(0,l.kt)("p",null,"\u041e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 intDiv \u0442\u0435\u043c, \u0447\u0442\u043e \u043f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043d\u0430 \u043d\u043e\u043b\u044c \u0438\u043b\u0438 \u043f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043d\u0430 \u043c\u0438\u043d\u0443\u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u0443, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u043b\u044c."),(0,l.kt)("h2",{id:"modulo"},"modulo(a, b), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 a % b"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043e\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u044f.\n\u0415\u0441\u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b - \u0447\u0438\u0441\u043b\u0430 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439, \u0442\u043e \u043e\u043d\u0438 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0446\u0435\u043b\u044b\u0435 \u0447\u0438\u0441\u043b\u0430, \u043f\u0443\u0442\u0451\u043c \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043d\u0438\u044f \u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438.\n\u0411\u0435\u0440\u0451\u0442\u0441\u044f \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u0432 \u0442\u043e\u043c \u0436\u0435 \u0441\u043c\u044b\u0441\u043b\u0435, \u043a\u0430\u043a \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u0432 C++. \u041f\u043e \u0444\u0430\u043a\u0442\u0443, \u0434\u043b\u044f \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f truncated division.\n\u041f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043d\u0430 \u043d\u043e\u043b\u044c \u0438\u043b\u0438 \u043f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043d\u0430 \u043c\u0438\u043d\u0443\u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u0443, \u043a\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,l.kt)("h2",{id:"modulo-or-zero"},"moduloOrZero(a, b)"),(0,l.kt)("p",null,"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 ",(0,l.kt)("a",{parentName:"p",href:"#modulo"},"modulo"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u043e\u043b\u044c \u043f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043d\u0430 \u043d\u043e\u043b\u044c."),(0,l.kt)("h2",{id:"negatea-operator-a"},"negate(a), \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 -a"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u043e, \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0435 \u043f\u043e \u0437\u043d\u0430\u043a\u0443. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0442\u0438\u043f."),(0,l.kt)("h2",{id:"arithm_func-abs"},"abs(a)"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0447\u0438\u0441\u043b\u0430 a. \u0422\u043e \u0435\u0441\u0442\u044c, \u0435\u0441\u043b\u0438 a \\< 0, \u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 -a.\n\u0414\u043b\u044f \u0431\u0435\u0437\u0437\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u0435\u043b\u0430\u0435\u0442. \u0414\u043b\u044f \u0447\u0438\u0441\u0435\u043b \u0442\u0438\u043f\u0430 \u0446\u0435\u043b\u044b\u0445 \u0441\u043e \u0437\u043d\u0430\u043a\u043e\u043c, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0431\u0435\u0437\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430."),(0,l.kt)("h2",{id:"gcda-b"},"gcd(a, b)"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0438\u0439 \u043e\u0431\u0449\u0438\u0439 \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0447\u0438\u0441\u0435\u043b.\n\u041f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043d\u0430 \u043d\u043e\u043b\u044c \u0438\u043b\u0438 \u043f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043d\u0430 \u043c\u0438\u043d\u0443\u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u0443, \u043a\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,l.kt)("h2",{id:"lcma-b"},"lcm(a, b)"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u043e\u0431\u0449\u0435\u0435 \u043a\u0440\u0430\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u0435\u043b.\n\u041f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043d\u0430 \u043d\u043e\u043b\u044c \u0438\u043b\u0438 \u043f\u0440\u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043d\u0430 \u043c\u0438\u043d\u0443\u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u0443, \u043a\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,l.kt)("h2",{id:"max2"},"max2"),(0,l.kt)("p",null,"\u0421\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u0442 \u0434\u0432\u0430 \u0447\u0438\u0441\u043b\u0430 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a \u0442\u0438\u043f\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"max2(value1, value2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value1")," \u2014 \u043f\u0435\u0440\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/int-uint"},"Int/UInt")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value2")," \u2014 \u0432\u0442\u043e\u0440\u043e\u0435 \u0447\u0438\u0441\u043b\u043e. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/int-uint"},"Int/UInt")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0438 \u0434\u0432\u0443\u0445 \u0447\u0438\u0441\u0435\u043b.")),(0,l.kt)("p",null,"\u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT max2(-1, 2);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500max2(-1, 2)\u2500\u2510\n\u2502           2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"min2"},"min2"),(0,l.kt)("p",null,"\u0421\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u0442 \u0434\u0432\u0430 \u0447\u0438\u0441\u043b\u0430 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0438\u043d\u0438\u043c\u0443\u043c. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a \u0442\u0438\u043f\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"min2(value1, value2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value1")," \u2014 \u043f\u0435\u0440\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/int-uint"},"Int/UInt")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value2")," \u2014 \u0432\u0442\u043e\u0440\u043e\u0435 \u0447\u0438\u0441\u043b\u043e. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/int-uint"},"Int/UInt")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0438 \u0434\u0432\u0443\u0445 \u0447\u0438\u0441\u0435\u043b.")),(0,l.kt)("p",null,"\u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT min2(-1, 2);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500min2(-1, 2)\u2500\u2510\n\u2502          -1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);