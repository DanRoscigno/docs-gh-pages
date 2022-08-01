"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[5009],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29704:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:41,sidebar_label:"Float32, Float64"},p="Float32, Float64",u={unversionedId:"ru/sql-reference/data-types/float",id:"ru/sql-reference/data-types/float",title:"Float32, Float64",description:"float32-float64}",source:"@site/docs/ru/sql-reference/data-types/float.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/float",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/float",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/float.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"Float32, Float64"},sidebar:"russia",previous:{title:"UInt8, UInt16, UInt32, UInt64, Int8, Int16, Int32, Int64",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/int-uint"},next:{title:"Decimal",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/decimal"}},s={},c=[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439",id:"osobennosti-ispolzovaniia-chisel-s-plavaiushchei-zapiatoi",level:2},{value:"NaN \u0438 Inf",id:"data_type-float-nan-inf",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"float32-float64"},"Float32, Float64"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_754"},"\u0427\u0438\u0441\u043b\u0430 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439"),"."),(0,l.kt)("p",null,"\u0422\u0438\u043f\u044b \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b \u0442\u0438\u043f\u0430\u043c \u044f\u0437\u044b\u043a\u0430 \u0421:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float32")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float64")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"double"),".")),(0,l.kt)("p",null,"\u0421\u0438\u043d\u043e\u043d\u0438\u043c\u044b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float32")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"FLOAT"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float64")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"DOUBLE"),".")),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0434\u043b\u044f \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT(12)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT(15, 22)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE(12)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE(4, 18)"),"), \u043d\u043e ClickHouse \u0438\u0445 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442."),(0,l.kt)("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u0432\u0441\u0435\u0433\u0434\u0430, \u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0435 \u0432 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u043b\u0430 \u0441 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0435 \u0441\u0443\u043c\u043c\u044b \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,l.kt)("h2",{id:"osobennosti-ispolzovaniia-chisel-s-plavaiushchei-zapiatoi"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u0445 \u0441 \u0447\u0438\u0441\u043b\u0430\u043c\u0438 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 1 - 0.9\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500minus(1, 0.9)\u2500\u2510\n\u2502 0.09999999999999998 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043c\u0435\u0442\u043e\u0434\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f (\u0442\u0438\u043f\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b)."),(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u0445 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0447\u0438\u0441\u043b\u0430 \u043a\u0430\u043a \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u044c (",(0,l.kt)("inlineCode",{parentName:"li"},"Inf"),") \u0438 \xab\u043d\u0435 \u0447\u0438\u0441\u043b\u043e\xbb (",(0,l.kt)("inlineCode",{parentName:"li"},"NaN"),"). \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439."),(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0438\u0437 \u0441\u0442\u0440\u043e\u043a, \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u043c\u0430\u0448\u0438\u043d\u043d\u043e-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043c\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.")),(0,l.kt)("h2",{id:"data_type-float-nan-inf"},"NaN \u0438 Inf"),(0,l.kt)("p",null,"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e SQL, ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Inf")," \u2014 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u044c.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 0.5 / 0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(0.5, 0)\u2500\u2510\n\u2502            inf \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Inf")," \u2014 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u044c.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT -0.5 / 0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(-0.5, 0)\u2500\u2510\n\u2502            -inf \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NaN")," \u2014 \u043d\u0435 \u0447\u0438\u0441\u043b\u043e.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 0 / 0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(0, 0)\u2500\u2510\n\u2502          nan \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/order-by"},"\u0421\u0435\u043a\u0446\u0438\u044f ORDER BY "),"."))}f.isMDXComponent=!0}}]);