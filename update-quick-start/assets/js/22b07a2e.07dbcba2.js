"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60124],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,s(s({ref:t},o),{},{components:n})):a.createElement(k,s({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={},p="system.columns",u={unversionedId:"ru/operations/system-tables/columns",id:"ru/operations/system-tables/columns",title:"system.columns",description:"system-columns}",source:"@site/docs/ru/operations/system-tables/columns.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/columns",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/columns",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/columns.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.clusters",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/clusters"},next:{title:"system.contributors",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/contributors"}},o={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-columns"},"system.columns"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0432\u0441\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446."),(0,i.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/misc#misc-describe-table"},"DESCRIBE TABLE"),", \u043d\u043e \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0440\u0430\u0437\u0443."),(0,i.kt)("p",null,"\u041a\u043e\u043b\u043e\u043d\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/create/table#temporary-tables"},"\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446")," \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0441\u044f \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"system.columns")," \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u0435\u0445 \u0441\u0435\u0441\u0441\u0438\u044f\u0445, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044d\u0442\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0431\u044b\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b. \u041f\u043e\u043b\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," \u0443 \u0442\u0430\u043a\u0438\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u043f\u0443\u0441\u0442\u043e\u0435."),(0,i.kt)("p",null,"C\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0442\u0438\u043f \u0441\u0442\u043e\u043b\u0431\u0446\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"position")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 (\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 1)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_kind")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0442\u0438\u043f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f (",(0,i.kt)("inlineCode",{parentName:"li"},"DEFAULT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MATERIALIZED"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ALIAS"),") \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_expression")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"marks_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0441\u0435\u0447\u0435\u043a \u0432 \u0431\u0430\u0439\u0442\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"comment")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0441\u0442\u043e\u043b\u0431\u0446\u0443 \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_partition_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0444\u043b\u0430\u0433, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432 \u043a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_sorting_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0444\u043b\u0430\u0433, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432 \u043a\u043b\u044e\u0447 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_primary_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0444\u043b\u0430\u0433, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_sampling_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0444\u043b\u0430\u0433, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432 \u043a\u043b\u044e\u0447 \u0432\u044b\u0431\u043e\u0440\u043a\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compression_codec")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043a\u043e\u0434\u0435\u043a\u0430 \u0441\u0436\u0430\u0442\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"character_octet_length")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445 \u0434\u043b\u044f \u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u0438\u043c\u0432\u043e\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439. \u0412 ClickHouse \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"li"},"FixedString"),". \u0418\u043d\u0430\u0447\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_precision")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e\u0447\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412 ClickHouse \u044d\u0442\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0438 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u0430\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal"),". \u0418\u043d\u0430\u0447\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_precision_radix")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e\u0447\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412 ClickHouse \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0440\u0430\u0432\u043d\u043e 2 \u0434\u043b\u044f \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0438 10 \u2014 \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal"),". \u0418\u043d\u0430\u0447\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_scale")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e\u0447\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412 ClickHouse \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal"),". \u0418\u043d\u0430\u0447\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"datetime_precision")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u0430\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64"),". \u0414\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.columns LIMIT 2 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                INFORMATION_SCHEMA\ntable:                   COLUMNS\nname:                    table_catalog\ntype:                    String\nposition:                1\ndefault_kind:\ndefault_expression:\ndata_compressed_bytes:   0\ndata_uncompressed_bytes: 0\nmarks_bytes:             0\ncomment:\nis_in_partition_key:     0\nis_in_sorting_key:       0\nis_in_primary_key:       0\nis_in_sampling_key:      0\ncompression_codec:\ncharacter_octet_length:  \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision:       \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision_radix: \u1d3a\u1d41\u1d38\u1d38\nnumeric_scale:           \u1d3a\u1d41\u1d38\u1d38\ndatetime_precision:      \u1d3a\u1d41\u1d38\u1d38\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                INFORMATION_SCHEMA\ntable:                   COLUMNS\nname:                    table_schema\ntype:                    String\nposition:                2\ndefault_kind:\ndefault_expression:\ndata_compressed_bytes:   0\ndata_uncompressed_bytes: 0\nmarks_bytes:             0\ncomment:\nis_in_partition_key:     0\nis_in_sorting_key:       0\nis_in_primary_key:       0\nis_in_sampling_key:      0\ncompression_codec:\ncharacter_octet_length:  \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision:       \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision_radix: \u1d3a\u1d41\u1d38\u1d38\nnumeric_scale:           \u1d3a\u1d41\u1d38\u1d38\ndatetime_precision:      \u1d3a\u1d41\u1d38\u1d38\n")))}d.isMDXComponent=!0}}]);