"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50456],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6429:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s="system.text_log",p={unversionedId:"ru/operations/system-tables/text_log",id:"ru/operations/system-tables/text_log",title:"system.text_log",description:"systemtables-textlog}",source:"@site/docs/ru/operations/system-tables/text_log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/text_log",permalink:"/docs-gh-pages/nytaxi/ru/operations/system-tables/text_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/text_log.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.tables",permalink:"/docs-gh-pages/nytaxi/ru/operations/system-tables/tables"},next:{title:"time_zones",permalink:"/docs-gh-pages/nytaxi/ru/operations/system-tables/time_zones"}},m={},u=[],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-text_log"},"system.text_log"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u0430\u043f\u0438\u0441\u0438 \u043b\u043e\u0433\u043e\u0432. \u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"text_log.level"),"."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (Date) \u2014 \u0434\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (DateTime) \u2014 \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (DateTime) \u2014 \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"microseconds")," (UInt32) \u2014 \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread_name")," (String) \u2014 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043a\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b\u0430 \u0441\u0434\u0435\u043b\u0430\u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread_id")," (UInt64) \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u0442\u043e\u043a\u0430 \u041e\u0421."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level")," (Enum8) \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'Fatal'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'Critical'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'Error'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'Warning'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"5")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'Notice'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"6")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'Information'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"7")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'Debug'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"8")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"'Trace'"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_id")," (String) \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logger_name")," (LowCardinality(String)) \u2014 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043b\u043e\u0433\u0433\u0435\u0440\u0430 (",(0,i.kt)("inlineCode",{parentName:"li"},"DDLWorker"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," (String) \u2014 \u0441\u0430\u043c\u043e \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0438\u0441\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"revision")," (UInt32) \u2014 \u0440\u0435\u0432\u0438\u0437\u0438\u044f ClickHouse."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source_file")," (LowCardinality(String)) \u2014 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b\u0430 \u0441\u0434\u0435\u043b\u0430\u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source_line")," (UInt64) \u2014 \u0438\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0431\u044b\u043b\u0430 \u0441\u0434\u0435\u043b\u0430\u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.text_log LIMIT 1 \\G\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2020-09-10\nevent_time:              2020-09-10 11:23:07\nevent_time_microseconds: 2020-09-10 11:23:07.871397\nmicroseconds:            871397\nthread_name:             clickhouse-serv\nthread_id:               564917\nlevel:                   Information\nquery_id:\nlogger_name:             DNSCacheUpdater\nmessage:                 Update period 15 seconds\nrevision:                54440\nsource_file:             /ClickHouse/src/Interpreters/DNSCacheUpdater.cpp; void DB::DNSCacheUpdater::start()\nsource_line:             45\n")))}d.isMDXComponent=!0}}]);