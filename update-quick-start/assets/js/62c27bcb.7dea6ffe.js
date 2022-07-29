"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40144],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,d=g["".concat(o,".").concat(m)]||g[m]||c[m]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={},o="table_engines",p={unversionedId:"en/operations/system-tables/table_engines",id:"en/operations/system-tables/table_engines",title:"table_engines",description:"Contains description of table engines supported by server and their feature support information.",source:"@site/docs/en/operations/system-tables/table_engines.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/table_engines",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/table_engines",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/table_engines.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"storage_policies",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/storage_policies"},next:{title:"tables",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/tables"}},u={},c=[],g={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"table_engines"},"table_engines"),(0,i.kt)("p",null,"Contains description of table engines supported by server and their feature support information."),(0,i.kt)("p",null,"This table contains the following columns (the column type is shown in brackets):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (String) \u2014 The name of table engine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supports_settings")," (UInt8) \u2014 Flag that indicates if table engine supports ",(0,i.kt)("inlineCode",{parentName:"li"},"SETTINGS")," clause."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supports_skipping_indices")," (UInt8) \u2014 Flag that indicates if table engine supports ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-data_skipping-indexes"},"skipping indices"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supports_ttl")," (UInt8) \u2014 Flag that indicates if table engine supports ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supports_sort_order")," (UInt8) \u2014 Flag that indicates if table engine supports clauses ",(0,i.kt)("inlineCode",{parentName:"li"},"PARTITION_BY"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY_KEY"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ORDER_BY")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SAMPLE_BY"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supports_replication")," (UInt8) \u2014 Flag that indicates if table engine supports ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/mergetree-family/replication"},"data replication"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supports_duduplication")," (UInt8) \u2014 Flag that indicates if table engine supports data deduplication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supports_parallel_insert")," (UInt8) \u2014 Flag that indicates if table engine supports parallel insert (see ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#settings-max-insert-threads"},(0,i.kt)("inlineCode",{parentName:"a"},"max_insert_threads"))," setting).")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.table_engines\nWHERE name in ('Kafka', 'MergeTree', 'ReplicatedCollapsingMergeTree')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500supports_settings\u2500\u252c\u2500supports_skipping_indices\u2500\u252c\u2500supports_sort_order\u2500\u252c\u2500supports_ttl\u2500\u252c\u2500supports_replication\u2500\u252c\u2500supports_deduplication\u2500\u252c\u2500supports_parallel_insert\u2500\u2510\n\u2502 MergeTree                     \u2502                 1 \u2502                         1 \u2502                   1 \u2502            1 \u2502                    0 \u2502                      0 \u2502                        1 \u2502\n\u2502 Kafka                         \u2502                 1 \u2502                         0 \u2502                   0 \u2502            0 \u2502                    0 \u2502                      0 \u2502                        0 \u2502\n\u2502 ReplicatedCollapsingMergeTree \u2502                 1 \u2502                         1 \u2502                   1 \u2502            1 \u2502                    1 \u2502                      1 \u2502                        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MergeTree family ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/mergetree-family/mergetree#mergetree-query-clauses"},"query clauses")),(0,i.kt)("li",{parentName:"ul"},"Kafka ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/integrations/kafka#table_engine-kafka-creating-a-table"},"settings")),(0,i.kt)("li",{parentName:"ul"},"Join ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/special/join#join-limitations-and-settings"},"settings"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/table_engines"},"Original article")," "))}m.isMDXComponent=!0}}]);