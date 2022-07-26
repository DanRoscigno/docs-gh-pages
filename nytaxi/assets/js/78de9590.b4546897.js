"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72381],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,g=m(e,["components","mdxType","originalType","parentName"]),s=p(t),c=a,k=s["".concat(u,".").concat(c)]||s[c]||o[c]||i;return t?r.createElement(k,l(l({ref:n},g),{},{components:t})):r.createElement(k,l({ref:n},g))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var m={};for(var u in n)hasOwnProperty.call(n,u)&&(m[u]=n[u]);m.originalType=e,m.mdxType="string"==typeof e?e:a,l[1]=m;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},48894:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return o}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],m={sidebar_position:34,sidebar_label:"SummingMergeTree"},u="SummingMergeTree",p={unversionedId:"ru/engines/table-engines/mergetree-family/summingmergetree",id:"ru/engines/table-engines/mergetree-family/summingmergetree",title:"SummingMergeTree",description:"summingmergetree}",source:"@site/docs/ru/engines/table-engines/mergetree-family/summingmergetree.md",sourceDirName:"ru/engines/table-engines/mergetree-family",slug:"/ru/engines/table-engines/mergetree-family/summingmergetree",permalink:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/summingmergetree",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/mergetree-family/summingmergetree.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{sidebar_position:34,sidebar_label:"SummingMergeTree"},sidebar:"russia",previous:{title:"ReplacingMergeTree",permalink:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/replacingmergetree"},next:{title:"AggregatingMergeTree",permalink:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/aggregatingmergetree"}},g={},o=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"sozdanie-tablitsy",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"primer-ispolzovaniia",level:2},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",id:"obrabotka-dannykh",level:2},{value:"\u041e\u0431\u0449\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",id:"obshchie-pravila-summirovaniia",level:3},{value:"\u0421\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 AggregateFunction",id:"summirovanie-v-stolbtsakh-aggregatefunction",level:3},{value:"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"vlozhennye-struktury",level:3}],s={toc:o};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"summingmergetree"},"SummingMergeTree"),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/mergetree#table_engines-mergetree"},"MergeTree"),". \u041e\u0442\u043b\u0438\u0447\u0438\u0435 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," \u043f\u0440\u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u0438 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 ClickHouse \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c (\u0442\u043e\u0447\u043d\u0435\u0435, \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/mergetree"},"\u043a\u043b\u044e\u0447\u043e\u043c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"),") \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043d\u0430 \u043e\u0434\u043d\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0445\u0440\u0430\u043d\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0443\u043c\u043c\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u0437 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0441 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445. \u0415\u0441\u043b\u0438 \u043a\u043b\u044e\u0447 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u043d \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043a\u043b\u044e\u0447\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u043e\u043a, \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u043e\u0431\u044a\u0451\u043c \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("p",null,"\u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0438\u0436\u043e\u043a \u0432 \u043f\u0430\u0440\u0435 \u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),". \u0412 ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u043e\u0442\u0447\u0435\u0442\u043e\u0432. \u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043d\u0435 \u0443\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0446\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437-\u0437\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430."),(0,i.kt)("h2",{id:"sozdanie-tablitsy"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = SummingMergeTree([columns])\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,i.kt)("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/summingmergetree"},"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b SummingMergeTree")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"columns")," \u2014 \u043a\u043e\u0440\u0442\u0435\u0436 \u0441 \u0438\u043c\u0435\u043d\u0430\u043c\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0443\u0442 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440.\n\u0421\u0442\u043e\u043b\u0431\u0446\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u0442\u0438\u043f \u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 `columns` \u043d\u0435 \u0437\u0430\u0434\u0430\u043d, \u0442\u043e ClickHouse \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0441 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u0435 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0432 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447.\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0435\u043a\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430")),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0442\u0435 \u0436\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/mergetree"},"\u0441\u0435\u043a\u0446\u0438\u0438")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0447\u0442\u043e \u0438 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::note "Attention"\n\u041d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u044d\u0442\u043e\u0442 \u0441\u043f\u043e\u0441\u043e\u0431 \u0432 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445 \u0438 \u043f\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0440\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u043d\u0430 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u0432\u044b\u0448\u0435.\n:::\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] SummingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, [columns])\n")),(0,i.kt)("p",null,"\u0412\u0441\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043a\u0440\u043e\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," \u0438\u043c\u0435\u044e\u0442 \u0442\u043e \u0436\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"columns")," \u2014 \u043a\u043e\u0440\u0442\u0435\u0436 \u0441 \u0438\u043c\u0435\u043d\u0430\u043c\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043b\u044f \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u044b\u0448\u0435 \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443."))),(0,i.kt)("h2",{id:"primer-ispolzovaniia"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE summtt\n(\n    key UInt32,\n    value UInt32\n)\nENGINE = SummingMergeTree()\nORDER BY key\n")),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u043c \u0432 \u043d\u0435\u0451 \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO summtt Values(1,1),(1,2),(2,1)\n")),(0,i.kt)("p",null,"ClickHouse \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0440\u043e\u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 (",(0,i.kt)("a",{parentName:"p",href:"#obrabotka-dannykh"},"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0438\u0436\u0435 \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443"),"), \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," \u0438 \u0441\u0435\u043a\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT key, sum(value) FROM summtt GROUP BY key\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500key\u2500\u252c\u2500sum(value)\u2500\u2510\n\u2502   2 \u2502          1 \u2502\n\u2502   1 \u2502          3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"obrabotka-dannykh"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043e\u043d\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0435\u0441\u0442\u044c. \u041f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438 ClickHouse \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0438\u043c\u0435\u043d\u043d\u043e \u0432 \u044d\u0442\u043e\u0442 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0437\u0430\u043c\u0435\u043d\u0430 \u043c\u043d\u043e\u0433\u0438\u0445 \u0441\u0442\u0440\u043e\u043a \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u043d\u0430 \u043e\u0434\u043d\u0443 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0443\u0441\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("p",null,"ClickHouse \u043c\u043e\u0436\u0435\u0442 \u0441\u043b\u0438\u0442\u044c \u043a\u0443\u0441\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e \u043d\u0435 \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u043e\u043a\u0430\u0436\u0443\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u043c \u043a\u0443\u0441\u043a\u0435, \u0442.\u0435. \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435 \u043f\u043e\u043b\u043d\u044b\u043c. \u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),") \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/summingmergetree#agg_function-sum"},"sum()")," \u0438 \u0441\u0435\u043a\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0448\u0435."),(0,i.kt)("h3",{id:"obshchie-pravila-summirovaniia"},"\u041e\u0431\u0449\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0421\u0443\u043c\u043c\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0441 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u0431\u043e\u0440 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"columns"),"."),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0434\u043b\u044f \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u043a\u0430\u0437\u0430\u043b\u0438\u0441\u044c \u043d\u0443\u043b\u0435\u0432\u044b\u043c\u0438, \u0442\u043e \u0441\u0442\u0440\u043e\u0447\u043a\u0430 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u043d\u0435 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0432 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0438 \u043d\u0435 \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u044e\u0449\u0438\u0445\u0441\u044f, \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u0438\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f."),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0432 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447, \u043d\u0435 \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u044e\u0442\u0441\u044f."),(0,i.kt)("h3",{id:"summirovanie-v-stolbtsakh-aggregatefunction"},"\u0421\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 AggregateFunction"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0438\u043f\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/aggregatefunction#data-type-aggregatefunction"},"AggregateFunction")," ClickHouse \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0434\u0432\u0438\u0436\u043a\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree"),"."),(0,i.kt)("h3",{id:"vlozhennye-struktury"},"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"),(0,i.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u0441\u043e\u0431\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," \u0438 \u043e\u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u044e\u0449\u0438\u0445 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u043f\u0435\u0440\u0432\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 - \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 ",(0,i.kt)("inlineCode",{parentName:"li"},"(*Int*, Date, DateTime)")," \u0438\u043b\u0438 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0439 ",(0,i.kt)("inlineCode",{parentName:"li"},"(String, FixedString)"),", \u043d\u0430\u0437\u043e\u0432\u0435\u043c \u0435\u0433\u043e \u0443\u0441\u043b\u043e\u0432\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"li"},"key"),","),(0,i.kt)("li",{parentName:"ul"},"\u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b - \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"(*Int*, Float32/64)"),", \u0443\u0441\u043b\u043e\u0432\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"li"},"(values...)"),",")),(0,i.kt)("p",null,"\u0442\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"key => (values...)")," \u0438 \u043f\u0440\u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u0438 \u0435\u0451 \u0441\u0442\u0440\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u0432\u0443\u0445 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432 \u043f\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u0441\u043e \u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"(values...)"),"."),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[(1, 100)] + [(2, 150)] -> [(1, 100), (2, 150)]\n[(1, 100)] + [(1, 150)] -> [(1, 250)]\n[(1, 100)] + [(1, 150), (2, 150)] -> [(1, 250), (2, 150)]\n[(1, 100), (2, 150)] + [(1, -100)] -> [(2, 150)]\n")),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/summap#agg_functions-summap"},"sumMap(key, value)")," \u0434\u043b\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0435\u0451 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0432 \u043a\u043e\u0440\u0442\u0435\u0436\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043b\u044f \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."))}c.isMDXComponent=!0}}]);