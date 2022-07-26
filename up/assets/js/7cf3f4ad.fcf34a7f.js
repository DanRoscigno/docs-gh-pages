"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85303],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66615:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),s=["components"],i={sidebar_position:36,sidebar_label:"SYSTEM"},o="SYSTEM Statements",p={unversionedId:"en/sql-reference/statements/system",id:"en/sql-reference/statements/system",title:"SYSTEM Statements",description:"The list of available SYSTEM statements:",source:"@site/docs/en/sql-reference/statements/system.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/system",permalink:"/docs-gh-pages/up/en/sql-reference/statements/system",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/system.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,sidebar_label:"SYSTEM"},sidebar:"english",previous:{title:"COMMENT",permalink:"/docs-gh-pages/up/en/sql-reference/statements/alter/comment"},next:{title:"SHOW",permalink:"/docs-gh-pages/up/en/sql-reference/statements/show"}},d={},u=[{value:"RELOAD EMBEDDED DICTIONARIES",id:"reload-embedded-dictionaries",level:2},{value:"RELOAD DICTIONARIES",id:"reload-dictionaries",level:2},{value:"RELOAD DICTIONARY",id:"reload-dictionary",level:2},{value:"RELOAD MODELS",id:"reload-models",level:2},{value:"RELOAD MODEL",id:"reload-model",level:2},{value:"RELOAD FUNCTIONS",id:"reload-functions",level:2},{value:"DROP DNS CACHE",id:"drop-dns-cache",level:2},{value:"DROP MARK CACHE",id:"drop-mark-cache",level:2},{value:"DROP REPLICA",id:"drop-replica",level:2},{value:"DROP UNCOMPRESSED CACHE",id:"drop-uncompressed-cache",level:2},{value:"DROP COMPILED EXPRESSION CACHE",id:"drop-compiled-expression-cache",level:2},{value:"FLUSH LOGS",id:"flush-logs",level:2},{value:"RELOAD CONFIG",id:"reload-config",level:2},{value:"SHUTDOWN",id:"shutdown",level:2},{value:"KILL",id:"kill",level:2},{value:"Managing Distributed Tables",id:"managing-distributed-tables",level:2},{value:"STOP DISTRIBUTED SENDS",id:"stop-distributed-sends",level:3},{value:"FLUSH DISTRIBUTED",id:"flush-distributed",level:3},{value:"START DISTRIBUTED SENDS",id:"start-distributed-sends",level:3},{value:"Managing MergeTree Tables",id:"managing-mergetree-tables",level:2},{value:"STOP MERGES",id:"stop-merges",level:3},{value:"START MERGES",id:"start-merges",level:3},{value:"STOP TTL MERGES",id:"stop-ttl-merges",level:3},{value:"START TTL MERGES",id:"start-ttl-merges",level:3},{value:"STOP MOVES",id:"stop-moves",level:3},{value:"START MOVES",id:"start-moves",level:3},{value:"SYSTEM UNFREEZE",id:"query_language-system-unfreeze",level:3},{value:"Managing ReplicatedMergeTree Tables",id:"managing-replicatedmergetree-tables",level:2},{value:"STOP FETCHES",id:"stop-fetches",level:3},{value:"START FETCHES",id:"start-fetches",level:3},{value:"STOP REPLICATED SENDS",id:"stop-replicated-sends",level:3},{value:"START REPLICATED SENDS",id:"start-replicated-sends",level:3},{value:"STOP REPLICATION QUEUES",id:"stop-replication-queues",level:3},{value:"START REPLICATION QUEUES",id:"start-replication-queues",level:3},{value:"SYNC REPLICA",id:"sync-replica",level:3},{value:"RESTART REPLICA",id:"restart-replica",level:3},{value:"RESTORE REPLICA",id:"restore-replica",level:3},{value:"RESTART REPLICAS",id:"restart-replicas",level:3}],m={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system-statements"},"SYSTEM Statements"),(0,l.kt)("p",null,"The list of available ",(0,l.kt)("inlineCode",{parentName:"p"},"SYSTEM")," statements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-reload-emdedded-dictionaries"},"RELOAD EMBEDDED DICTIONARIES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-reload-dictionaries"},"RELOAD DICTIONARIES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-reload-dictionary"},"RELOAD DICTIONARY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-reload-models"},"RELOAD MODELS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-reload-model"},"RELOAD MODEL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-reload-functions"},"RELOAD FUNCTIONS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-reload-functions"},"RELOAD FUNCTION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-drop-dns-cache"},"DROP DNS CACHE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-drop-mark-cache"},"DROP MARK CACHE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-drop-uncompressed-cache"},"DROP UNCOMPRESSED CACHE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-drop-compiled-expression-cache"},"DROP COMPILED EXPRESSION CACHE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-drop-replica"},"DROP REPLICA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-flush_logs"},"FLUSH LOGS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-reload-config"},"RELOAD CONFIG")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-shutdown"},"SHUTDOWN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-kill"},"KILL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-stop-distributed-sends"},"STOP DISTRIBUTED SENDS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-flush-distributed"},"FLUSH DISTRIBUTED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-start-distributed-sends"},"START DISTRIBUTED SENDS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-stop-merges"},"STOP MERGES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-start-merges"},"START MERGES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-stop-ttl-merges"},"STOP TTL MERGES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-start-ttl-merges"},"START TTL MERGES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-stop-moves"},"STOP MOVES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-start-moves"},"START MOVES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-unfreeze"},"SYSTEM UNFREEZE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-stop-fetches"},"STOP FETCHES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-start-fetches"},"START FETCHES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-start-replicated-sends"},"STOP REPLICATED SENDS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-start-replicated-sends"},"START REPLICATED SENDS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-stop-replication-queues"},"STOP REPLICATION QUEUES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-start-replication-queues"},"START REPLICATION QUEUES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-sync-replica"},"SYNC REPLICA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-restart-replica"},"RESTART REPLICA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-restore-replica"},"RESTORE REPLICA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#query_language-system-restart-replicas"},"RESTART REPLICAS"))),(0,l.kt)("h2",{id:"reload-embedded-dictionaries"},"RELOAD EMBEDDED DICTIONARIES"),(0,l.kt)("p",null,"Reload all ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/dictionaries/internal-dicts"},"Internal dictionaries"),".\nBy default, internal dictionaries are disabled.\nAlways returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," regardless of the result of the internal dictionary update."),(0,l.kt)("h2",{id:"reload-dictionaries"},"RELOAD DICTIONARIES"),(0,l.kt)("p",null,"Reloads all dictionaries that have been successfully loaded before.\nBy default, dictionaries are loaded lazily (see ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/server-configuration-parameters/settings#server_configuration_parameters-dictionaries_lazy_load"},"dictionaries_lazy_load"),"), so instead of being loaded automatically at startup, they are initialized on first access through dictGet function or SELECT from tables with ENGINE = Dictionary. The ",(0,l.kt)("inlineCode",{parentName:"p"},"SYSTEM RELOAD DICTIONARIES")," query reloads such dictionaries (LOADED).\nAlways returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," regardless of the result of the dictionary update."),(0,l.kt)("h2",{id:"reload-dictionary"},"RELOAD DICTIONARY"),(0,l.kt)("p",null,"Completely reloads a dictionary ",(0,l.kt)("inlineCode",{parentName:"p"},"dictionary_name"),", regardless of the state of the dictionary (LOADED / NOT_LOADED / FAILED).\nAlways returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," regardless of the result of updating the dictionary.\nThe status of the dictionary can be checked by querying the ",(0,l.kt)("inlineCode",{parentName:"p"},"system.dictionaries")," table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, status FROM system.dictionaries;\n")),(0,l.kt)("h2",{id:"reload-models"},"RELOAD MODELS"),(0,l.kt)("p",null,"Reloads all ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/guides/developer/apply-catboost-model"},"CatBoost")," models if the configuration was updated without restarting the server."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM RELOAD MODELS [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"reload-model"},"RELOAD MODEL"),(0,l.kt)("p",null,"Completely reloads a CatBoost model ",(0,l.kt)("inlineCode",{parentName:"p"},"model_name")," if the configuration was updated without restarting the server."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM RELOAD MODEL [ON CLUSTER cluster_name] <model_name>\n")),(0,l.kt)("h2",{id:"reload-functions"},"RELOAD FUNCTIONS"),(0,l.kt)("p",null,"Reloads all registered ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/functions/#executable-user-defined-functions"},"executable user defined functions")," or one of them from a configuration file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RELOAD FUNCTIONS [ON CLUSTER cluster_name]\nRELOAD FUNCTION [ON CLUSTER cluster_name] function_name\n")),(0,l.kt)("h2",{id:"drop-dns-cache"},"DROP DNS CACHE"),(0,l.kt)("p",null,"Resets ClickHouse\u2019s internal DNS cache. Sometimes (for old ClickHouse versions) it is necessary to use this command when changing the infrastructure (changing the IP address of another ClickHouse server or the server used by dictionaries)."),(0,l.kt)("p",null,"For more convenient (automatic) cache management, see disable_internal_dns_cache, dns_cache_update_period parameters."),(0,l.kt)("h2",{id:"drop-mark-cache"},"DROP MARK CACHE"),(0,l.kt)("p",null,"Resets the mark cache. Used in development of ClickHouse and performance tests."),(0,l.kt)("h2",{id:"drop-replica"},"DROP REPLICA"),(0,l.kt)("p",null,"Dead replicas can be dropped using following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM DROP REPLICA 'replica_name' FROM TABLE database.table;\nSYSTEM DROP REPLICA 'replica_name' FROM DATABASE database;\nSYSTEM DROP REPLICA 'replica_name';\nSYSTEM DROP REPLICA 'replica_name' FROM ZKPATH '/path/to/table/in/zk';\n")),(0,l.kt)("p",null,"Queries will remove the replica path in ZooKeeper. It is useful when the replica is dead and its metadata cannot be removed from ZooKeeper by ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," because there is no such table anymore. It will only drop the inactive/stale replica, and it cannot drop local replica, please use ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," for that. ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP REPLICA")," does not drop any tables and does not remove any data or metadata from disk."),(0,l.kt)("p",null,"The first one removes metadata of ",(0,l.kt)("inlineCode",{parentName:"p"},"'replica_name'")," replica of ",(0,l.kt)("inlineCode",{parentName:"p"},"database.table")," table.\nThe second one does the same for all replicated tables in the database.\nThe third one does the same for all replicated tables on the local server.\nThe fourth one is useful to remove metadata of dead replica when all other replicas of a table were dropped. It requires the table path to be specified explicitly. It must be the same path as was passed to the first argument of ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," engine on table creation."),(0,l.kt)("h2",{id:"drop-uncompressed-cache"},"DROP UNCOMPRESSED CACHE"),(0,l.kt)("p",null,"Reset the uncompressed data cache. Used in development of ClickHouse and performance tests.\nFor manage uncompressed data cache parameters use following server level settings ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/server-configuration-parameters/settings#server-settings-uncompressed_cache_size"},"uncompressed_cache_size")," and query/user/profile level settings ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/settings/settings#setting-use_uncompressed_cache"},"use_uncompressed_cache")),(0,l.kt)("h2",{id:"drop-compiled-expression-cache"},"DROP COMPILED EXPRESSION CACHE"),(0,l.kt)("p",null,"Reset the compiled expression cache. Used in development of ClickHouse and performance tests.\nCompiled expression cache used when query/user/profile enable option ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/settings/settings#compile-expressions"},"compile-expressions")),(0,l.kt)("h2",{id:"flush-logs"},"FLUSH LOGS"),(0,l.kt)("p",null,"Flushes buffers of log messages to system tables (e.g.\xa0system.query_log). Allows you to not wait 7.5 seconds when debugging.\nThis will also create system tables even if message queue is empty."),(0,l.kt)("h2",{id:"reload-config"},"RELOAD CONFIG"),(0,l.kt)("p",null,"Reloads ClickHouse configuration. Used when configuration is stored in ZooKeeper."),(0,l.kt)("h2",{id:"shutdown"},"SHUTDOWN"),(0,l.kt)("p",null,"Normally shuts down ClickHouse (like ",(0,l.kt)("inlineCode",{parentName:"p"},"service clickhouse-server stop")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"kill {$pid_clickhouse-server}"),")"),(0,l.kt)("h2",{id:"kill"},"KILL"),(0,l.kt)("p",null,"Aborts ClickHouse process (like ",(0,l.kt)("inlineCode",{parentName:"p"},"kill -9 {$ pid_clickhouse-server}"),")"),(0,l.kt)("h2",{id:"managing-distributed-tables"},"Managing Distributed Tables"),(0,l.kt)("p",null,"ClickHouse can manage ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/engines/table-engines/special/distributed"},"distributed")," tables. When a user inserts data into these tables, ClickHouse first creates a queue of the data that should be sent to cluster nodes, then asynchronously sends it. You can manage queue processing with the ",(0,l.kt)("a",{parentName:"p",href:"#query_language-system-stop-distributed-sends"},"STOP DISTRIBUTED SENDS"),", ",(0,l.kt)("a",{parentName:"p",href:"#query_language-system-flush-distributed"},"FLUSH DISTRIBUTED"),", and ",(0,l.kt)("a",{parentName:"p",href:"#query_language-system-start-distributed-sends"},"START DISTRIBUTED SENDS")," queries. You can also synchronously insert distributed data with the ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/settings/settings#insert_distributed_sync"},"insert_distributed_sync")," setting."),(0,l.kt)("h3",{id:"stop-distributed-sends"},"STOP DISTRIBUTED SENDS"),(0,l.kt)("p",null,"Disables background data distribution when inserting data into distributed tables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM STOP DISTRIBUTED SENDS [db.]<distributed_table_name>\n")),(0,l.kt)("h3",{id:"flush-distributed"},"FLUSH DISTRIBUTED"),(0,l.kt)("p",null,"Forces ClickHouse to send data to cluster nodes synchronously. If any nodes are unavailable, ClickHouse throws an exception and stops query execution. You can retry the query until it succeeds, which will happen when all nodes are back online."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM FLUSH DISTRIBUTED [db.]<distributed_table_name>\n")),(0,l.kt)("h3",{id:"start-distributed-sends"},"START DISTRIBUTED SENDS"),(0,l.kt)("p",null,"Enables background data distribution when inserting data into distributed tables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM START DISTRIBUTED SENDS [db.]<distributed_table_name>\n")),(0,l.kt)("h2",{id:"managing-mergetree-tables"},"Managing MergeTree Tables"),(0,l.kt)("p",null,"ClickHouse can manage background processes in ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," tables."),(0,l.kt)("h3",{id:"stop-merges"},"STOP MERGES"),(0,l.kt)("p",null,"Provides possibility to stop background merges for tables in the MergeTree family:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM STOP MERGES [ON VOLUME <volume_name> | [db.]merge_tree_family_table_name]\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"DETACH / ATTACH")," table will start background merges for the table even in case when merges have been stopped for all MergeTree tables before."))),(0,l.kt)("h3",{id:"start-merges"},"START MERGES"),(0,l.kt)("p",null,"Provides possibility to start background merges for tables in the MergeTree family:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM START MERGES [ON VOLUME <volume_name> | [db.]merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"stop-ttl-merges"},"STOP TTL MERGES"),(0,l.kt)("p",null,"Provides possibility to stop background delete old data according to ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL expression")," for tables in the MergeTree family:\nReturns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," even if table does not exist or table has not MergeTree engine. Returns error when database does not exist:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM STOP TTL MERGES [[db.]merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"start-ttl-merges"},"START TTL MERGES"),(0,l.kt)("p",null,"Provides possibility to start background delete old data according to ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL expression")," for tables in the MergeTree family:\nReturns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," even if table does not exist. Returns error when database does not exist:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM START TTL MERGES [[db.]merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"stop-moves"},"STOP MOVES"),(0,l.kt)("p",null,"Provides possibility to stop background move data according to ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/mergetree#mergetree-table-ttl"},"TTL table expression with TO VOLUME or TO DISK clause")," for tables in the MergeTree family:\nReturns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," even if table does not exist. Returns error when database does not exist:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM STOP MOVES [[db.]merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"start-moves"},"START MOVES"),(0,l.kt)("p",null,"Provides possibility to start background move data according to ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/mergetree#mergetree-table-ttl"},"TTL table expression with TO VOLUME and TO DISK clause")," for tables in the MergeTree family:\nReturns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," even if table does not exist. Returns error when database does not exist:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM START MOVES [[db.]merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"query_language-system-unfreeze"},"SYSTEM UNFREEZE"),(0,l.kt)("p",null,"Clears freezed backup with the specified name from all the disks. See more about unfreezing separate parts in ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/alter/partition#alter_unfreeze-partition"},"ALTER TABLE table_name UNFREEZE WITH NAME ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM UNFREEZE WITH NAME <backup_name>\n")),(0,l.kt)("h2",{id:"managing-replicatedmergetree-tables"},"Managing ReplicatedMergeTree Tables"),(0,l.kt)("p",null,"ClickHouse can manage background replication related processes in ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/replication#table_engines-replication"},"ReplicatedMergeTree")," tables."),(0,l.kt)("h3",{id:"stop-fetches"},"STOP FETCHES"),(0,l.kt)("p",null,"Provides possibility to stop background fetches for inserted parts for tables in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," family:\nAlways returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," regardless of the table engine and even if table or database does not exist."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM STOP FETCHES [[db.]replicated_merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"start-fetches"},"START FETCHES"),(0,l.kt)("p",null,"Provides possibility to start background fetches for inserted parts for tables in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," family:\nAlways returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok.")," regardless of the table engine and even if table or database does not exist."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM START FETCHES [[db.]replicated_merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"stop-replicated-sends"},"STOP REPLICATED SENDS"),(0,l.kt)("p",null,"Provides possibility to stop background sends to other replicas in cluster for new inserted parts for tables in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," family:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM STOP REPLICATED SENDS [[db.]replicated_merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"start-replicated-sends"},"START REPLICATED SENDS"),(0,l.kt)("p",null,"Provides possibility to start background sends to other replicas in cluster for new inserted parts for tables in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," family:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM START REPLICATED SENDS [[db.]replicated_merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"stop-replication-queues"},"STOP REPLICATION QUEUES"),(0,l.kt)("p",null,"Provides possibility to stop background fetch tasks from replication queues which stored in Zookeeper for tables in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," family. Possible background tasks types - merges, fetches, mutation, DDL statements with ON CLUSTER clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM STOP REPLICATION QUEUES [[db.]replicated_merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"start-replication-queues"},"START REPLICATION QUEUES"),(0,l.kt)("p",null,"Provides possibility to start background fetch tasks from replication queues which stored in Zookeeper for tables in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," family. Possible background tasks types - merges, fetches, mutation, DDL statements with ON CLUSTER clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM START REPLICATION QUEUES [[db.]replicated_merge_tree_family_table_name]\n")),(0,l.kt)("h3",{id:"sync-replica"},"SYNC REPLICA"),(0,l.kt)("p",null,"Wait until a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," table will be synced with other replicas in a cluster. Will run until ",(0,l.kt)("inlineCode",{parentName:"p"},"receive_timeout")," if fetches currently disabled for the table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM SYNC REPLICA [db.]replicated_merge_tree_family_table_name\n")),(0,l.kt)("p",null,"After running this statement the ",(0,l.kt)("inlineCode",{parentName:"p"},"[db.]replicated_merge_tree_family_table_name")," fetches commands from the common replicated log into its own replication queue, and then the query waits till the replica processes all of the fetched commands."),(0,l.kt)("h3",{id:"restart-replica"},"RESTART REPLICA"),(0,l.kt)("p",null,"Provides possibility to reinitialize Zookeeper sessions state for ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," table, will compare current state with Zookeeper as source of true and add tasks to Zookeeper queue if needed.\nInitialization replication queue based on ZooKeeper date happens in the same way as ",(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE")," statement. For a short time the table will be unavailable for any operations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM RESTART REPLICA [db.]replicated_merge_tree_family_table_name\n")),(0,l.kt)("h3",{id:"restore-replica"},"RESTORE REPLICA"),(0,l.kt)("p",null,"Restores a replica if data is ","[possibly]"," present but Zookeeper metadata is lost."),(0,l.kt)("p",null,"Works only on readonly ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," tables."),(0,l.kt)("p",null,"One may execute query after:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ZooKeeper root ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," loss."),(0,l.kt)("li",{parentName:"ul"},"Replicas path ",(0,l.kt)("inlineCode",{parentName:"li"},"/replicas")," loss."),(0,l.kt)("li",{parentName:"ul"},"Individual replica path ",(0,l.kt)("inlineCode",{parentName:"li"},"/replicas/replica_name/")," loss.")),(0,l.kt)("p",null,"Replica attaches locally found parts and sends info about them to Zookeeper.\nParts present on a replica before metadata loss are not re-fetched from other ones if not being outdated (so replica restoration does not mean re-downloading all data over the network)."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Parts in all states are moved to ",(0,l.kt)("inlineCode",{parentName:"p"},"detached/")," folder. Parts active before data loss (committed) are attached."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM RESTORE REPLICA [db.]replicated_merge_tree_family_table_name [ON CLUSTER cluster_name]\n")),(0,l.kt)("p",null,"Alternative syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM RESTORE REPLICA [ON CLUSTER cluster_name] [db.]replicated_merge_tree_family_table_name\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Creating a table on multiple servers. After the replica's metadata in ZooKeeper is lost, the table will attach as read-only as metadata is missing. The last query needs to execute on every replica."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test(n UInt32)\nENGINE = ReplicatedMergeTree('/clickhouse/tables/test/', '{replica}')\nORDER BY n PARTITION BY n % 10;\n\nINSERT INTO test SELECT * FROM numbers(1000);\n\n-- zookeeper_delete_path(\"/clickhouse/tables/test\", recursive=True) <- root loss.\n\nSYSTEM RESTART REPLICA test;\nSYSTEM RESTORE REPLICA test;\n")),(0,l.kt)("p",null,"Another way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SYSTEM RESTORE REPLICA test ON CLUSTER cluster;\n")),(0,l.kt)("h3",{id:"restart-replicas"},"RESTART REPLICAS"),(0,l.kt)("p",null,"Provides possibility to reinitialize Zookeeper sessions state for all ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," tables, will compare current state with Zookeeper as source of true and add tasks to Zookeeper queue if needed"))}c.isMDXComponent=!0}}]);