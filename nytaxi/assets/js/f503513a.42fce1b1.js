"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18416],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,k=m["".concat(o,".").concat(c)]||m[c]||f[c]||a;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76339:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],u={sidebar_position:45,sidebar_label:"Buffer"},o="Buffer",p={unversionedId:"ru/engines/table-engines/special/buffer",id:"ru/engines/table-engines/special/buffer",title:"Buffer",description:"buffer}",source:"@site/docs/ru/engines/table-engines/special/buffer.md",sourceDirName:"ru/engines/table-engines/special",slug:"/ru/engines/table-engines/special/buffer",permalink:"/docs-gh-pages/nytaxi/ru/engines/table-engines/special/buffer",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/special/buffer.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"Buffer"},sidebar:"russia",previous:{title:"Memory",permalink:"/docs-gh-pages/nytaxi/ru/engines/table-engines/special/memory"},next:{title:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",permalink:"/docs-gh-pages/nytaxi/ru/engines/table-engines/special/external-data"}},s={},f=[],m={toc:f};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buffer"},"Buffer"),(0,a.kt)("p",null,"\u0411\u0443\u0444\u0435\u0440\u0438\u0437\u0443\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043a\u0435, \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044f \u0438\u0445 \u0432 \u0434\u0440\u0443\u0433\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443. \u041f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438, \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0447\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0438 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Buffer(database, table, num_layers, min_time, max_time, min_rows, max_rows, min_bytes, max_bytes)\n")),(0,a.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445. \u0412\u043c\u0435\u0441\u0442\u043e \u0438\u043c\u0435\u043d\u0438 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0441\u0442\u0440\u043e\u043a\u0443.\n",(0,a.kt)("inlineCode",{parentName:"p"},"table")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0446\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435.\n",(0,a.kt)("inlineCode",{parentName:"p"},"num_layers")," \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0437\u043c\u0430. \u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0432\u0438\u0434\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"num_layers")," \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u0431\u0443\u0444\u0435\u0440\u043e\u0432. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u2014 16.\n",(0,a.kt)("inlineCode",{parentName:"p"},"min_time"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"max_time"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"min_rows"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"max_rows"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"min_bytes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"max_bytes")," \u2014 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0434\u043b\u044f \u0441\u0431\u0440\u043e\u0441\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430."),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432\u0441\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"min"),"-\u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"max"),"-\u0443\u0441\u043b\u043e\u0432\u0438\u0435."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min_time"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max_time")," \u2014 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0430 \u0432\u0440\u0435\u043c\u044f \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445 \u043e\u0442 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u0435\u0440\u0432\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0431\u0443\u0444\u0435\u0440."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min_rows"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max_rows")," \u2014 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0432 \u0431\u0443\u0444\u0435\u0440\u0435."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min_bytes"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max_bytes")," \u2014 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0430\u0439\u0442 \u0432 \u0431\u0443\u0444\u0435\u0440\u0435.")),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438, \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"num_layers")," \u0431\u0443\u0444\u0435\u0440\u043e\u0432. \u0418\u043b\u0438, \u0435\u0441\u043b\u0438 \u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u0443\u0441\u043a\u0430 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0439 (\u0431\u043e\u043b\u044c\u0448\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_rows")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_bytes"),"), \u0442\u043e \u043e\u043d \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043c\u0438\u043d\u0443\u044f \u0431\u0443\u0444\u0435\u0440."),(0,a.kt)("p",null,"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0434\u043b\u044f \u0441\u0431\u0440\u043e\u0441\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"num_layers")," \u0431\u0443\u0444\u0435\u0440\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"num_layers = 16")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_bytes = 100000000"),", \u0442\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0441\u0445\u043e\u0434 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 1.6 GB."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE merge.hits_buffer AS merge.hits ENGINE = Buffer(merge, hits, 16, 10, 100, 10000, 1000000, 10000000, 100000000)\n")),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 merge.hits_buffer \u0442\u0430\u043a\u043e\u0439 \u0436\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043a\u0430\u043a merge.hits \u0438 \u0434\u0432\u0438\u0436\u043a\u043e\u043c Buffer. \u041f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u044d\u0442\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0444\u0435\u0440\u0438\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043a\u0435 \u0438, \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 merge.hits. \u0421\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f 16 \u0431\u0443\u0444\u0435\u0440\u043e\u0432. \u0414\u0430\u043d\u043d\u044b\u0435, \u0438\u043c\u0435\u044e\u0449\u0438\u0435\u0441\u044f \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u043d\u0438\u0445 \u0431\u0443\u0434\u0443\u0442 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f, \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u0448\u043b\u043e \u0441\u0442\u043e \u0441\u0435\u043a\u0443\u043d\u0434, \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d \u043c\u0438\u043b\u043b\u0438\u043e\u043d \u0441\u0442\u0440\u043e\u043a, \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0441\u0442\u043e \u043c\u0435\u0433\u0430\u0431\u0430\u0439\u0442 \u0434\u0430\u043d\u043d\u044b\u0445; \u0438\u043b\u0438 \u0435\u0441\u043b\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u0440\u043e\u0448\u043b\u043e \u0434\u0435\u0441\u044f\u0442\u044c \u0441\u0435\u043a\u0443\u043d\u0434 \u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0434\u0435\u0441\u044f\u0442\u044c \u0442\u044b\u0441\u044f\u0447 \u0441\u0442\u0440\u043e\u043a \u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0434\u0435\u0441\u044f\u0442\u044c \u043c\u0435\u0433\u0430\u0431\u0430\u0439\u0442 \u0434\u0430\u043d\u043d\u044b\u0445. \u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430, \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u0430 \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u043e\u0434\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0430, \u0442\u043e \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u0430 \u0432 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435. \u0410 \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u043e\u043a, \u0442\u043e \u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u044b \u0440\u0430\u043d\u044c\u0448\u0435."),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u0440\u0438 DROP TABLE \u0438\u043b\u0438 DETACH TABLE, \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0442\u043e\u0436\u0435 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."),(0,a.kt)("p",null,"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043c\u0435\u043d\u0438 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0438\u043c\u0435\u043d\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u043e\u0434\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043a\u0430\u0432\u044b\u0447\u043a\u0430\u0445. \u042d\u0442\u043e \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0412 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043f\u0440\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u043d\u0430 \u0441\u0431\u0440\u043e\u0441 \u0434\u0430\u043d\u043d\u044b\u0445, \u0431\u0443\u0444\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0447\u0438\u0449\u0430\u0442\u044c\u0441\u044f. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u043c, \u0447\u0442\u043e\u0431\u044b \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043a\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043e\u043a\u043d\u043e \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0438\u043f\u0430 Buffer, \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u0430\u043a \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0438\u0435\u0441\u044f \u0432 \u0431\u0443\u0444\u0435\u0440\u0435, \u0442\u0430\u043a \u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (\u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u0430\u044f \u0435\u0441\u0442\u044c).\n\u041d\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u0432\u0438\u0434\u0443, \u0447\u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430 Buffer \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441. \u0422\u043e \u0435\u0441\u0442\u044c, \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u0443\u0444\u0435\u0440\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u0431\u0443\u0444\u0435\u0440\u043e\u0432 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430. (\u0414\u043b\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043f\u043e\u0434\u0447\u0438\u043d\u0451\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u0442 \u0438\u043d\u0434\u0435\u043a\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043d\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442.)"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b Buffer \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043f\u043e\u0434\u0447\u0438\u043d\u0451\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0442\u043e \u0431\u0443\u0434\u0443\u0442 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043e\u0431\u0435\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b Buffer \u0438 \u043f\u043e\u0434\u0447\u0438\u043d\u0451\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0442\u0438\u043f, \u0442\u043e \u0432 \u043b\u043e\u0433 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u0438 \u0431\u0443\u0444\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043e\u0447\u0438\u0449\u0435\u043d.\n\u0422\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u043f\u043e\u0434\u0447\u0438\u043d\u0451\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u0431\u0440\u043e\u0441\u0430 \u0431\u0443\u0444\u0435\u0440\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':::note "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"\n\u0412 \u0440\u0435\u043b\u0438\u0437\u0430\u0445 \u0434\u043e 26 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 2021 \u0433\u043e\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 ALTER \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 Buffer \u043b\u043e\u043c\u0430\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0431\u043b\u043e\u043a\u043e\u0432 \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443 (\u0441\u043c. [#15117](https://github.com/ClickHouse/ClickHouse/issues/15117) \u0438 [#30565](https://github.com/ClickHouse/ClickHouse/pull/30565)), \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0431\u0443\u0444\u0435\u0440\u0430 \u0438 \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u2014 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u043a\u0430. \u041f\u0435\u0440\u0435\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c ALTER \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 Buffer \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432 \u0432\u0430\u0448\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u044d\u0442\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0430.\n:::\n')),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043d\u0435\u0448\u0442\u0430\u0442\u043d\u043e\u043c \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0434\u0430\u043d\u043d\u044b\u0435, \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0438\u0435\u0441\u044f \u0432 \u0431\u0443\u0444\u0435\u0440\u0435, \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b."),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0442\u0438\u043f\u0430 Buffer \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 FINAL \u0438 SAMPLE. \u042d\u0442\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u0440\u043e\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043d\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0431\u0443\u0444\u0435\u0440\u0435. \u0412 \u0441\u0432\u044f\u0437\u0438 \u0441 \u044d\u0442\u0438\u043c, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0442\u0438\u043f\u0430 Buffer \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438, \u0430 \u0447\u0438\u0442\u0430\u0442\u044c \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 Buffer, \u043e\u0434\u0438\u043d \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u043e\u0432 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430\u043c, \u0435\u0441\u043b\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u0447\u0442\u0435\u043d\u0438\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435, \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 Buffer, \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0432 \u043f\u043e\u0434\u0447\u0438\u043d\u0451\u043d\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u043c\u0441\u044f \u043e\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0432\u0441\u0442\u0430\u0432\u043a\u0438, \u0438 \u0431\u043b\u043e\u043a\u0430\u043c\u0438, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u043c\u0438\u0441\u044f \u043e\u0442 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0431\u043b\u043e\u043a\u043e\u0432. \u0412 \u0441\u0432\u044f\u0437\u0438 \u0441 \u044d\u0442\u0438\u043c, \u0442\u0440\u0443\u0434\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0442\u0438\u043f\u0430 Buffer \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 CollapsingMergeTree. \u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c num_layers \u0432 1."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u043c\u043e\u0439, \u0442\u043e \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 Buffer \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446. \u0418\u0437-\u0437\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0441\u0442\u0440\u043e\u043a \u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u0431\u043b\u043e\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0451\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0434\u0435\u0434\u0443\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043e \u0438\u0441\u0447\u0435\u0437\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0434\u0451\u0436\u043d\u043e\u0439 exactly once \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,a.kt)("p",null,"\u0412 \u0441\u0432\u044f\u0437\u0438 \u0441 \u044d\u0442\u0438\u043c\u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0430\u043c\u0438, \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0438\u043f\u0430 Buffer \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u043b\u0438\u0448\u044c \u0432 \u043e\u0447\u0435\u043d\u044c \u0440\u0435\u0434\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445."),(0,a.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0438\u043f\u0430 Buffer \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0442\u0435\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u043e\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e INSERT-\u043e\u0432 \u0432 \u0435\u0434\u0438\u043d\u0438\u0446\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0438 \u043d\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u0443\u0444\u0435\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0434 \u0432\u0441\u0442\u0430\u0432\u043a\u043e\u0439, \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043e, INSERT-\u044b \u043d\u0435 \u0443\u0441\u043f\u0435\u0432\u0430\u044e\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f."),(0,a.kt)("p",null,"\u0417\u0430\u043c\u0435\u0442\u0438\u043c, \u0447\u0442\u043e \u0434\u0430\u0436\u0435 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0442\u0438\u043f\u0430 Buffer \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b\u0430 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435, \u0442\u0430\u043a \u043a\u0430\u043a \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u044b\u0441\u044f\u0447 \u0441\u0442\u0440\u043e\u043a \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443, \u0442\u043e\u0433\u0434\u0430 \u043a\u0430\u043a \u043f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0431\u043e\u043b\u0435\u0435 \u043a\u0440\u0443\u043f\u043d\u044b\u043c\u0438 \u0431\u043b\u043e\u043a\u0430\u043c\u0438, \u0434\u043e\u0441\u0442\u0438\u0436\u0438\u043c\u043e \u0431\u043e\u043b\u0435\u0435 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430 \u0441\u0442\u0440\u043e\u043a \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 (\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b ",(0,a.kt)("a",{parentName:"p",href:"../../../introduction/performance/"},"\xab\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\xbb"),"."))}c.isMDXComponent=!0}}]);