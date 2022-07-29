"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[74961],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],l={sidebar_position:52,sidebar_label:"System Tables"},o="System Tables",p={unversionedId:"en/operations/system-tables/index",id:"en/operations/system-tables/index",title:"System Tables",description:"Introduction",source:"@site/docs/en/operations/system-tables/index.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/index.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52,sidebar_label:"System Tables"},sidebar:"english",previous:{title:"Query Profiling",permalink:"/docs-gh-pages/update-quick-start/en/operations/optimizing-performance/sampling-query-profiler"},next:{title:"asynchronous_metric_log",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/asynchronous_metric_log"}},c={},u=[{value:"Introduction",id:"system-tables-introduction",level:2},{value:"Sources of System Metrics",id:"system-tables-sources-of-system-metrics",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-tables"},"System Tables"),(0,s.kt)("h2",{id:"system-tables-introduction"},"Introduction"),(0,s.kt)("p",null,"System tables provide information about:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Server states, processes, and environment."),(0,s.kt)("li",{parentName:"ul"},"Server\u2019s internal processes.")),(0,s.kt)("p",null,"System tables:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Located in the ",(0,s.kt)("inlineCode",{parentName:"li"},"system")," database."),(0,s.kt)("li",{parentName:"ul"},"Available only for reading data."),(0,s.kt)("li",{parentName:"ul"},"Can\u2019t be dropped or altered, but can be detached.")),(0,s.kt)("p",null,"Most of system tables store their data in RAM. A ClickHouse server creates such system tables at the start."),(0,s.kt)("p",null,"Unlike other system tables, the system log tables ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/metric_log"},"metric_log"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/query_log"},"query_log"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/query_thread_log"},"query_thread_log"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/trace_log"},"trace_log"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/part_log"},"part_log"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/crash-log"},"crash_log")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/text_log"},"text_log")," are served by ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," table engine and store their data in a filesystem by default. If you remove a table from a filesystem, the ClickHouse server creates the empty one again at the time of the next data writing. If system table schema changed in a new release, then ClickHouse renames the current table and creates a new one."),(0,s.kt)("p",null,"System log tables can be customized by creating a config file with the same name as the table under ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d/"),", or setting corresponding elements in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.xml"),". Elements can be customized are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"database"),": database the system log table belongs to. This option is deprecated now. All system log tables are under database ",(0,s.kt)("inlineCode",{parentName:"li"},"system"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"table"),": table to insert data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"partition_by"),": specify ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/mergetree-family/custom-partitioning-key"},"PARTITION BY")," expression."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ttl"),": specify table ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/alter/ttl"},"TTL")," expression."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"flush_interval_milliseconds"),": interval of flushing data to disk."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"engine"),": provide full engine expression (starting with ",(0,s.kt)("inlineCode",{parentName:"li"},"ENGINE =")," ) with parameters. This option is contradict with ",(0,s.kt)("inlineCode",{parentName:"li"},"partition_by")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"ttl"),". If set together, the server would raise an exception and exit.")),(0,s.kt)("p",null,"An example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <query_log>\n        <database>system</database>\n        <table>query_log</table>\n        <partition_by>toYYYYMM(event_date)</partition_by>\n        <ttl>event_date + INTERVAL 30 DAY DELETE</ttl>\n        \x3c!--\n        <engine>ENGINE = MergeTree PARTITION BY toYYYYMM(event_date) ORDER BY (event_date, event_time) SETTINGS index_granularity = 1024</engine>\n        --\x3e\n        <flush_interval_milliseconds>7500</flush_interval_milliseconds>\n    </query_log>\n</clickhouse>\n")),(0,s.kt)("p",null,"By default, table growth is unlimited. To control a size of a table, you can use ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/alter/ttl#manipulations-with-table-ttl"},"TTL")," settings for removing outdated log records. Also you can use the partitioning feature of ",(0,s.kt)("inlineCode",{parentName:"p"},"MergeTree"),"-engine tables."),(0,s.kt)("h2",{id:"system-tables-sources-of-system-metrics"},"Sources of System Metrics"),(0,s.kt)("p",null,"For collecting system metrics ClickHouse server uses:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"CAP_NET_ADMIN")," capability."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Procfs"},"procfs")," (only in Linux).")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"procfs")),(0,s.kt)("p",null,"If ClickHouse server does not have ",(0,s.kt)("inlineCode",{parentName:"p"},"CAP_NET_ADMIN")," capability, it tries to fall back to ",(0,s.kt)("inlineCode",{parentName:"p"},"ProcfsMetricsProvider"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"ProcfsMetricsProvider")," allows collecting per-query system metrics (for CPU and I/O)."),(0,s.kt)("p",null,"If procfs is supported and enabled on the system, ClickHouse server collects these metrics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"OSCPUVirtualTimeMicroseconds")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"OSCPUWaitMicroseconds")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"OSIOWaitMicroseconds")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"OSReadChars")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"OSWriteChars")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"OSReadBytes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"OSWriteBytes"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/"},"Original article")," "))}d.isMDXComponent=!0}}]);