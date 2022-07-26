"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12906],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,g=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36543:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],u={sidebar_position:192},p="uniqCombined",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/uniqcombined",id:"ru/sql-reference/aggregate-functions/reference/uniqcombined",title:"uniqCombined",description:"agg_function-uniqcombined}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/uniqcombined.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/uniqcombined",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/uniqcombined",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/uniqcombined.md",tags:[],version:"current",sidebarPosition:192,frontMatter:{sidebar_position:192},sidebar:"russia",previous:{title:"uniqExact",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/uniqexact"},next:{title:"uniqCombined64",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/uniqcombined64"}},l={},s=[],f={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-uniqcombined"},"uniqCombined"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u0431\u043b\u0438\u0436\u0451\u043d\u043d\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"uniqCombined(HLL_precision)(x[, ...])\n")),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqCombined")," \u2014 \u044d\u0442\u043e \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0432\u044b\u0431\u043e\u0440 \u0434\u043b\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0442\u0438\u043f\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HLL_precision")," \u2014 \u044d\u0442\u043e \u043b\u043e\u0433\u0430\u0440\u0438\u0444\u043c \u043f\u043e \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044e 2 \u043e\u0442 \u0447\u0438\u0441\u043b\u0430 \u044f\u0447\u0435\u0435\u043a \u0432 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HyperLogLog"},"HyperLogLog"),". \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043a\u0430\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqCombined (x [,...])"),". \u0414\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"HLL_precision")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 17, \u0447\u0442\u043e \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 96 \u041a\u0411 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 (2^17 \u044f\u0447\u0435\u0435\u043a, 6 \u0431\u0438\u0442 \u043a\u0430\u0436\u0434\u0430\u044f)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0427\u0438\u0441\u043b\u043e \u0442\u0438\u043f\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438")),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0445\u044d\u0448 (64-\u0431\u0438\u0442\u043d\u044b\u0439 \u0434\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," \u0438 32-\u0431\u0438\u0442\u043d\u044b\u0439 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432) \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438, \u0430 \u0437\u0430\u0442\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0435\u0433\u043e \u0432 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u0445.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u0442\u0440\u0451\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432: \u043c\u0430\u0441\u0441\u0438\u0432, \u0445\u044d\u0448-\u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0438 HyperLogLog \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439 \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u0438 \u043f\u043e\u0433\u0440\u0435\u0448\u043d\u043e\u0441\u0442\u0438."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u0414\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432. \u0415\u0441\u043b\u0438 \u0440\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u0431\u043e\u0440\u0430 \u0431\u043e\u043b\u044c\u0448\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0445\u044d\u0448-\u0442\u0430\u0431\u043b\u0438\u0446\u0430. \u041f\u0440\u0438 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 HyperLogLog, \u0438\u043c\u0435\u044e\u0449\u0430\u044f \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d (\u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},':::note "Note"\n\u0422\u0430\u043a \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f 32-\u0431\u0438\u0442\u043d\u044b\u0439 \u0445\u044d\u0448 \u0434\u043b\u044f \u043d\u0435-`String` \u0442\u0438\u043f\u043e\u0432, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443 \u0434\u043b\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u0438\u0447\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 `UINT_MAX` (\u043e\u0448\u0438\u0431\u043a\u0430 \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0430\u0441\u0442\u0451\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u0432 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439), \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c [uniqCombined64](#agg_function-uniqcombined64)\n:::\n')),(0,a.kt)("p",{parentName:"li"},"\u041f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 ",(0,a.kt)("a",{parentName:"p",href:"#agg_function-uniq"},"uniq"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqCombined"),":")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u041f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u043c\u0435\u043d\u044c\u0448\u0435 \u043f\u0430\u043c\u044f\u0442\u0438.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0441 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u041e\u0431\u044b\u0447\u043d\u043e \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0431\u043e\u043b\u0435\u0435 \u043d\u0438\u0437\u043a\u0443\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f\u0445 ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqCombined")," \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0447\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"uniq"),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e \u0441\u0435\u0442\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0439 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"))))}m.isMDXComponent=!0}}]);