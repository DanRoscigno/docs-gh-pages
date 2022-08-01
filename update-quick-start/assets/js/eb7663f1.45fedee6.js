"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45571],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(r),k=a,m=f["".concat(l,".").concat(k)]||f[k]||s[k]||p;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22804:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),i=["components"],o={sidebar_position:311,sidebar_label:"sparkbar"},l="sparkbar",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/sparkbar",id:"ru/sql-reference/aggregate-functions/reference/sparkbar",title:"sparkbar",description:"sparkbar}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/sparkbar.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/sparkbar",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/sparkbar",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/sparkbar.md",tags:[],version:"current",sidebarPosition:311,frontMatter:{sidebar_position:311,sidebar_label:"sparkbar"},sidebar:"russia",previous:{title:"mannWhitneyUTest",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/mannwhitneyutest"},next:{title:"median",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/median"}},u={},s=[],f={toc:s};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"sparkbar"},"sparkbar"),(0,p.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0442\u0440\u043e\u0438\u0442 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u0447\u0430\u0441\u0442\u043e\u0442 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c ",(0,p.kt)("inlineCode",{parentName:"p"},"x")," \u0438 \u0447\u0430\u0441\u0442\u043e\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 ",(0,p.kt)("inlineCode",{parentName:"p"},"y")," \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"[min_x, max_x]"),". "),(0,p.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d, \u0442\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043d\u0438\u0436\u043d\u0435\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u0437\u044f\u0442\u043e \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),", \u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"sparkbar(width[, min_x, max_x])(x, y)\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"width")," \u2014 \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b. \u0422\u0438\u043f: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"Integer"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"min_x")," \u2014 \u041d\u0430\u0447\u0430\u043b\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"max_x")," \u2014 \u041a\u043e\u043d\u0435\u0446 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u041f\u043e\u043b\u0435 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"y")," \u2014 \u041f\u043e\u043b\u0435 \u0441 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u0413\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0447\u0430\u0441\u0442\u043e\u0442.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,p.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE spark_bar_data (`cnt` UInt64,`event_date` Date) ENGINE = MergeTree ORDER BY event_date SETTINGS index_granularity = 8192;\n \nINSERT INTO spark_bar_data VALUES(1,'2020-01-01'),(4,'2020-01-02'),(5,'2020-01-03'),(2,'2020-01-04'),(3,'2020-01-05'),(7,'2020-01-06'),(6,'2020-01-07'),(8,'2020-01-08'),(2,'2020-01-11');\n\nSELECT sparkbar(9)(event_date,cnt) FROM spark_bar_data;\n\nSELECT sparkbar(9,toDate('2020-01-01'),toDate('2020-01-10'))(event_date,cnt) FROM spark_bar_data;\n")),(0,p.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\n\u250c\u2500sparkbar(9)(event_date, cnt)\u2500\u2510\n\u2502                              \u2502\n\u2502 \u2581\u2585\u2584\u2583\u2588\u2588\u2585 \u2581                   \u2502\n\u2502                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500sparkbar(9, toDate('2020-01-01'), toDate('2020-01-10'))(event_date, cnt)\u2500\u2510\n\u2502                                                                          \u2502\n\u2502\u2581\u2584\u2584\u2582\u2585\u2587\u2588\u2581                                                                 \u2502\n\u2502                                                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);