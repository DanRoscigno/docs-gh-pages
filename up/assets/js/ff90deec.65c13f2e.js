"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41072],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(t),s=a,d=c["".concat(o,".").concat(s)]||c[s]||g[s]||i;return t?r.createElement(d,p(p({ref:n},m),{},{components:t})):r.createElement(d,p({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<i;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},92179:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),p=["components"],l={sidebar_position:38,sidebar_label:"GraphiteMergeTree"},o="GraphiteMergeTree",u={unversionedId:"ru/engines/table-engines/mergetree-family/graphitemergetree",id:"ru/engines/table-engines/mergetree-family/graphitemergetree",title:"GraphiteMergeTree",description:"graphitemergetree}",source:"@site/docs/ru/engines/table-engines/mergetree-family/graphitemergetree.md",sourceDirName:"ru/engines/table-engines/mergetree-family",slug:"/ru/engines/table-engines/mergetree-family/graphitemergetree",permalink:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/graphitemergetree",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/mergetree-family/graphitemergetree.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"GraphiteMergeTree"},sidebar:"russia",previous:{title:"VersionedCollapsingMergeTree",permalink:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/versionedcollapsingmergetree"},next:{title:"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log",permalink:"/docs-gh-pages/up/ru/engines/table-engines/log-family/"}},m={},g=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"creating-table",level:2},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Rollup",id:"rollup-configuration",level:2},{value:"\u0422\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b (required-columns)",id:"required-columns",level:3},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 (patterns)",id:"patterns",level:3}],c={toc:g};function s(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphitemergetree"},"GraphiteMergeTree"),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u043e\u0440\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f/\u0443\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u0438\u044f (rollup) \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("a",{parentName:"p",href:"http://graphite.readthedocs.io/en/latest/index.html"},"Graphite"),". \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0435\u043d \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u044f\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ClickHouse \u043a\u0430\u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f Graphite."),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 rollup \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u0442\u043e \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 Graphite \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u0434\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 ClickHouse, \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphiteMergeTree"),". \u0414\u0432\u0438\u0436\u043e\u043a \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u043e\u0431\u044a\u0451\u043c \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043e\u0442 Graphite."),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043e\u0442 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"."),(0,i.kt)("h2",{id:"creating-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    Path String,\n    Time DateTime,\n    Value <Numeric_type>,\n    Version <Numeric_type>\n    ...\n) ENGINE = GraphiteMergeTree(config_section)\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,i.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/graphitemergetree#create-table-query"},"CREATE TABLE"),"."),(0,i.kt)("p",null,"\u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 (\u0441\u0435\u043d\u0441\u043e\u0440\u0430 Graphite). \u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445: ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0412\u0440\u0435\u043c\u044f \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u0440\u0438\u043a\u0438. \u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438. \u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445: \u043b\u044e\u0431\u043e\u0439 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0412\u0435\u0440\u0441\u0438\u044f \u043c\u0435\u0442\u0440\u0438\u043a\u0438. \u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445: \u043b\u044e\u0431\u043e\u0439 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 (ClickHouse \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439 \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443, \u0435\u0441\u043b\u0438 \u0432\u0435\u0440\u0441\u0438\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442. \u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u0438 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445)."))),(0,i.kt)("p",null,"\u0418\u043c\u0435\u043d\u0430 \u044d\u0442\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u044b \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 rollup."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b GraphiteMergeTree")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_section")," \u2014 \u0438\u043c\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 rollup.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0435\u043a\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430")),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphiteMergeTree")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0442\u0435 \u0436\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"\u0441\u0435\u043a\u0446\u0438\u0438")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0447\u0442\u043e \u0438 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::note "Attention"\n\u041d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u044d\u0442\u043e\u0442 \u0441\u043f\u043e\u0441\u043e\u0431 \u0432 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445 \u0438 \u043f\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0440\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u043d\u0430 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u0432\u044b\u0448\u0435.\n:::\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    EventDate Date,\n    Path String,\n    Time DateTime,\n    Value <Numeric_type>,\n    Version <Numeric_type>\n    ...\n) ENGINE [=] GraphiteMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, config_section)\n")),(0,i.kt)("p",null,"\u0412\u0441\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043a\u0440\u043e\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"config_section")," \u0438\u043c\u0435\u044e\u0442 \u0442\u043e \u0436\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_section")," \u2014 \u0438\u043c\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 rollup."))),(0,i.kt)("h2",{id:"rollup-configuration"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Rollup"),(0,i.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u043e\u0440\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"graphite_rollup")," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 . \u0418\u043c\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u044b\u043c. \u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446."),(0,i.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 rollup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"required-columns\npatterns\n")),(0,i.kt)("h3",{id:"required-columns"},"\u0422\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b (required-columns)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path_column_name")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 (\u0441\u0435\u043d\u0441\u043e\u0440 Graphite). \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"li"},"Path"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_column_name")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432\u0440\u0435\u043c\u044f \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u0440\u0438\u043a\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"li"},"Time"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value_column_name")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"time_column_name"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"li"},"Value"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version_column_name")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u043c\u0435\u0442\u0440\u0438\u043a\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"li"},"Timestamp"),".")),(0,i.kt)("h3",{id:"patterns"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 (patterns)"),(0,i.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pattern\n    rule_type\n    regexp\n    function\npattern\n    rule_type\n    regexp\n    age + precision\n    ...\npattern\n    rule_type\n    regexp\n    function\n    age + precision\n    ...\npattern\n    ...\ndefault\n    function\n    age + precision\n    ...\n")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u0433\u043e \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u044b:\n\n  1. \u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0431\u0435\u0437 `function` \u0438\u043b\u0438 `retention`.\n  1. \u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435 `function` \u0438 `retention`.\n  1. \u041f\u0440\u0430\u0432\u0438\u043b\u043e `default`.\n")),(0,i.kt)("p",{parentName:"div"},"\u041f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 ClickHouse \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern"),". \u041a\u0430\u0436\u0434\u044b\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern")," (\u0432\u043a\u043b\u044e\u0447\u0430\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),") \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"function"),", \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"retention"),", \u0438\u043b\u0438 \u043e\u0431\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e. \u0415\u0441\u043b\u0438 \u0438\u043c\u044f \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"regexp"),", \u0442\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern"),", \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,i.kt)("p",{parentName:"div"},"\u041f\u043e\u043b\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rule_type")," - \u0442\u0438\u043f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 (\u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u043c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u0432\u0438\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u043b\u043e\u0441\u043a\u0438\u0445/\u0442\u0435\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0442\u0440\u0438\u043a. \u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"li"},"all"),".",(0,i.kt)("br",{parentName:"li"}),"\u0415\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0438\u043b\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u0440\u0430\u0432\u0438\u043b \u043d\u0435\u043a\u0440\u0438\u0442\u0438\u0447\u043d\u0430, \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0442\u0438\u043f \u043f\u0440\u0430\u0432\u0438\u043b \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438. \u0418\u043d\u0430\u0447\u0435, \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u043d\u043e\u0435 \u043e\u0442 \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f 2 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u0442\u0438\u043f\u0430 \u043f\u0440\u0430\u0432\u0438\u043b - \u0434\u043b\u044f \u043e\u0431\u044b\u0447\u043d\u044b\u0445 (\u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435 root.branch.leaf) \u0438 \u0442\u0435\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0442\u0440\u0438\u043a (root.branch.leaf;tag1=value1).",(0,i.kt)("br",{parentName:"li"}),"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0432 \u043e\u0431\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043e\u0431\u043e\u0438\u0445 \u0442\u0438\u043f\u043e\u0432.",(0,i.kt)("br",{parentName:"li"}),"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"-   `all` (default) - \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u0435 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e\n-   `plain` - \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0434\u043b\u044f \u043f\u043b\u043e\u0441\u043a\u0438\u0445 \u043c\u0435\u0442\u0440\u0438\u043a (\u0431\u0435\u0437 \u0442\u0435\u0433\u043e\u0432). \u041f\u043e\u043b\u0435 `regexp` \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435.\n-   `tagged` - \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0434\u043b\u044f \u0442\u0435\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0442\u0440\u0438\u043a (\u043c\u0435\u0442\u0440\u0438\u043a\u0430 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0411\u0414 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 `someName?tag1=value1&tag2=value2&tag3=value3`), \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043f\u043e \u0438\u043c\u0435\u043d\u0430\u043c \u0442\u0435\u0433\u043e\u0432, \u043f\u0435\u0440\u0432\u044b\u043c - \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u0433\u0430 `__name__`, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c.  \u041f\u043e\u043b\u0435 `regexp` \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435.\n-   `tag_list` - \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0434\u043b\u044f \u0442\u0435\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0442\u0440\u0438\u043a, \u043f\u0440\u043e\u0441\u0442\u043e\u0439 DSL \u0434\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0442\u0435\u0433\u043e\u0432 graphite `someName;tag1=value1;tag2=value2`, `someName` \u0438\u043b\u0438 `tag1=value1;tag2=value2`. \u041f\u043e\u043b\u0435 `regexp` \u0442\u0440\u0430\u043d\u0441\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u043e `tagged`. C\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0438\u043c\u0435\u043d\u0430\u043c \u0442\u0435\u0433\u043e\u0432 \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043e\u043d\u043e \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u0433\u0430 (\u043d\u043e \u043d\u0435 \u0438\u043c\u044f) \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u043c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 `env=(dev|staging)`).\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regexp")," \u2013 \u0448\u0430\u0431\u043b\u043e\u043d \u0438\u043c\u0435\u043d\u0438 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 (\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 DSL)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"age")," \u2013 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"precision")," \u2013 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445. \u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c \u0434\u043b\u044f 86400 (\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u0432 \u0441\u0443\u0442\u043a\u0430\u0445)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function")," \u2013 \u0438\u043c\u044f \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043a \u0434\u0430\u043d\u043d\u044b\u043c, \u0447\u0435\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u043e\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u0432 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"[age, age + precision]"),". \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438: min/max/any/avg. Avg \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0442\u043e\u0447\u043d\u043e, \u043a\u0430\u043a \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u043e\u0442 \u0441\u0440\u0435\u0434\u043d\u0438\u0445.")),(0,i.kt)("h3",{parentName:"div",id:"configuration-example"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0431\u0435\u0437 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 \u043f\u0440\u0430\u0432\u0438\u043b"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<graphite_rollup>\n    <version_column_name>Version</version_column_name>\n    <pattern>\n        <regexp>click_cost</regexp>\n        <function>any</function>\n        <retention>\n            <age>0</age>\n            <precision>5</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>60</precision>\n        </retention>\n    </pattern>\n    <default>\n        <function>max</function>\n        <retention>\n            <age>0</age>\n            <precision>60</precision>\n        </retention>\n        <retention>\n            <age>3600</age>\n            <precision>300</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>3600</precision>\n        </retention>\n    </default>\n</graphite_rollup>\n")),(0,i.kt)("h3",{parentName:"div",id:"configuration-typed-example"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 c \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c \u0442\u0438\u043f\u0430 \u043f\u0440\u0430\u0432\u0438\u043b"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<graphite_rollup>\n    <version_column_name>Version</version_column_name>\n    <pattern>\n        <rule_type>plain</rule_type>\n        <regexp>click_cost</regexp>\n        <function>any</function>\n        <retention>\n            <age>0</age>\n            <precision>5</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>60</precision>\n        </retention>\n    </pattern>\n    <pattern>\n        <rule_type>tagged</rule_type>\n        <regexp>^((.*)|.)min\\?</regexp>\n        <function>min</function>\n        <retention>\n            <age>0</age>\n            <precision>5</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>60</precision>\n        </retention>\n    </pattern>\n    <pattern>\n        <rule_type>tagged</rule_type>\n        <regexp><![CDATA[^someName\\?(.*&)*tag1=value1(&|$)]]></regexp>\n        <function>min</function>\n        <retention>\n            <age>0</age>\n            <precision>5</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>60</precision>\n        </retention>\n    </pattern>\n    <pattern>\n        <rule_type>tag_list</rule_type>\n        <regexp>someName;tag2=value2</regexp>\n        <retention>\n            <age>0</age>\n            <precision>5</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>60</precision>\n        </retention>\n    </pattern>\n    <default>\n        <function>max</function>\n        <retention>\n            <age>0</age>\n            <precision>60</precision>\n        </retention>\n        <retention>\n            <age>3600</age>\n            <precision>300</precision>\n        </retention>\n        <retention>\n            <age>86400</age>\n            <precision>3600</precision>\n        </retention>\n    </default>\n</graphite_rollup>\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u041f\u0440\u043e\u0440\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u043b\u0438\u044f\u043d\u0438\u0439. \u041e\u0431\u044b\u0447\u043d\u043e \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u044b\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0440\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043d\u0430\u0434\u043e \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f [optimize](/docs-gh-pages/up/ru/sql-reference/statements/optimize). \u0418\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 [graphite-ch-optimizer](https://github.com/innogames/graphite-ch-optimizer).\n")))}s.isMDXComponent=!0}}]);