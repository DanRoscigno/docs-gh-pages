"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62185],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,h=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54447:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={sidebar_position:59,sidebar_label:"clickhouse-copier"},l="clickhouse-copier",c={unversionedId:"ru/operations/utilities/clickhouse-copier",id:"ru/operations/utilities/clickhouse-copier",title:"clickhouse-copier",description:"clickhouse-copier}",source:"@site/docs/ru/operations/utilities/clickhouse-copier.md",sourceDirName:"ru/operations/utilities",slug:"/ru/operations/utilities/clickhouse-copier",permalink:"/docs-gh-pages/update-quick-start/ru/operations/utilities/clickhouse-copier",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/utilities/clickhouse-copier.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59,sidebar_label:"clickhouse-copier"},sidebar:"russia",previous:{title:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b",permalink:"/docs-gh-pages/update-quick-start/ru/operations/utilities/"},next:{title:"clickhouse-local",permalink:"/docs-gh-pages/update-quick-start/ru/operations/utilities/clickhouse-local"}},p={},u=[{value:"\u0417\u0430\u043f\u0443\u0441\u043a Clickhouse-copier",id:"zapusk-clickhouse-copier",level:2},{value:"\u0424\u043e\u0440\u043c\u0430\u0442 Zookeeper.xml",id:"format-zookeeper-xml",level:2},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u043d\u0430 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"konfiguratsiia-zadanii-na-kopirovanie",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickhouse-copier"},"clickhouse-copier"),(0,o.kt)("p",null,"\u041a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0434\u0440\u0443\u0433\u043e\u0433\u043e (\u0438\u043b\u0438 \u044d\u0442\u043e\u0433\u043e \u0436\u0435) \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."),(0,o.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u0442\u043e\u0433\u043e \u0436\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f. \u0414\u043b\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ZooKeeper."),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430, ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u0421\u043e\u0435\u0434\u0438\u043d\u044f\u0435\u0442\u0441\u044f \u0441 ZooKeeper \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f \u043d\u0430 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."),(0,o.kt)("li",{parentName:"ul"},"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u043d\u0430 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u044f."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'\u041a\u0430\u0436\u0434\u044b\u0439 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 "\u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439" \u0448\u0430\u0440\u0434 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0448\u0430\u0440\u0434\u0438\u0440\u0443\u044f \u0438\u0445.\n')))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 ZooKeeper \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u0438\u0445 \xab\u043d\u0430 \u043b\u0435\u0442\u0443\xbb."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0441\u0435\u0442\u0435\u0432\u043e\u0433\u043e \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," \u043d\u0430 \u0442\u043e\u043c \u0436\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,o.kt)("h2",{id:"zapusk-clickhouse-copier"},"\u0417\u0430\u043f\u0443\u0441\u043a Clickhouse-copier"),(0,o.kt)("p",null,"\u0423\u0442\u0438\u043b\u0438\u0442\u0443 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-copier --daemon --config zookeeper.xml --task-path /task/path --base-dir /path/to/dir\n")),(0,o.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daemon")," - \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0434\u0435\u043c\u043e\u043d\u0430."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," - \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 ",(0,o.kt)("inlineCode",{parentName:"li"},"zookeeper.xml")," \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 ZooKeeper."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-path")," - \u043f\u0443\u0442\u044c \u043a \u043d\u043e\u0434\u0435 ZooKeeper. \u041d\u043e\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c\u0438 ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," \u0438 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0439. \u0417\u0430\u0434\u0430\u043d\u0438\u044f \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 ",(0,o.kt)("inlineCode",{parentName:"li"},"$task-path/description"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-file")," - \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0432 ZooKeeper."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-upload-force")," - \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"li"},"task-file")," \u0432 ZooKeeper \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0443\u0436\u0435 \u0431\u044b\u043b\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base-dir")," - \u043f\u0443\u0442\u044c \u043a \u043b\u043e\u0433\u0430\u043c \u0438 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0444\u0430\u0439\u043b\u0430\u043c. \u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0432 ",(0,o.kt)("inlineCode",{parentName:"li"},"$base-dir")," \u043f\u043e\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier_YYYYMMHHSS_<PID>"),". \u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d, \u0442\u043e \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435, \u0433\u0434\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," \u0431\u044b\u043b \u0437\u0430\u043f\u0443\u0449\u0435\u043d.")),(0,o.kt)("h2",{id:"format-zookeeper-xml"},"\u0424\u043e\u0440\u043c\u0430\u0442 Zookeeper.xml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<clickhouse>\n    <logger>\n        <level>trace</level>\n        <size>100M</size>\n        <count>3</count>\n    </logger>\n\n    <zookeeper>\n        <node index="1">\n            <host>127.0.0.1</host>\n            <port>2181</port>\n        </node>\n    </zookeeper>\n</clickhouse>\n')),(0,o.kt)("h2",{id:"konfiguratsiia-zadanii-na-kopirovanie"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u043d\u0430 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    \x3c!-- Configuration of clusters as in an ordinary server config --\x3e\n    <remote_servers>\n        <source_cluster>\n            \x3c!--\n                source cluster & destination clusters accept exactly the same\n                parameters as parameters for the usual Distributed table\n                see https://clickhouse.com/docs/ru/engines/table-engines/special/distributed/\n            --\x3e\n            <shard>\n                <internal_replication>false</internal_replication>\n                    <replica>\n                        <host>127.0.0.1</host>\n                        <port>9000</port>\n                        \x3c!--\n                        <user>default</user>\n                        <password>default</password>\n                        <secure>1</secure>\n                        --\x3e\n                    </replica>\n            </shard>\n            ...\n        </source_cluster>\n\n        <destination_cluster>\n        ...\n        </destination_cluster>\n    </remote_servers>\n\n    \x3c!-- How many simultaneously active workers are possible. If you run more workers superfluous workers will sleep. --\x3e\n    <max_workers>2</max_workers>\n\n    \x3c!-- Setting used to fetch (pull) data from source cluster tables --\x3e\n    <settings_pull>\n        <readonly>1</readonly>\n    </settings_pull>\n\n    \x3c!-- Setting used to insert (push) data to destination cluster tables --\x3e\n    <settings_push>\n        <readonly>0</readonly>\n    </settings_push>\n\n    \x3c!-- Common setting for fetch (pull) and insert (push) operations. Also, copier process context uses it.\n         They are overlaid by <settings_pull/> and <settings_push/> respectively. --\x3e\n    <settings>\n        <connect_timeout>3</connect_timeout>\n        \x3c!-- Sync insert is set forcibly, leave it here just in case. --\x3e\n        <insert_distributed_sync>1</insert_distributed_sync>\n    </settings>\n\n    \x3c!-- Copying tasks description.\n         You could specify several table task in the same task description (in the same ZooKeeper node), they will be performed\n         sequentially.\n    --\x3e\n    <tables>\n        \x3c!-- A table task, copies one table. --\x3e\n        <table_hits>\n            \x3c!-- Source cluster name (from <remote_servers/> section) and tables in it that should be copied --\x3e\n            <cluster_pull>source_cluster</cluster_pull>\n            <database_pull>test</database_pull>\n            <table_pull>hits</table_pull>\n\n            \x3c!-- Destination cluster name and tables in which the data should be inserted --\x3e\n            <cluster_push>destination_cluster</cluster_push>\n            <database_push>test</database_push>\n            <table_push>hits2</table_push>\n\n            \x3c!-- Engine of destination tables.\n                 If destination tables have not be created, workers create them using columns definition from source tables and engine\n                 definition from here.\n\n                 NOTE: If the first worker starts insert data and detects that destination partition is not empty then the partition will\n                 be dropped and refilled, take it into account if you already have some data in destination tables. You could directly\n                 specify partitions that should be copied in <enabled_partitions/>, they should be in quoted format like partition column of\n                 system.parts table.\n            --\x3e\n            <engine>\n            ENGINE=ReplicatedMergeTree('/clickhouse/tables/{cluster}/{shard}/hits2', '{replica}')\n            PARTITION BY toMonday(date)\n            ORDER BY (CounterID, EventDate)\n            </engine>\n\n            \x3c!-- Sharding key used to insert data to destination cluster --\x3e\n            <sharding_key>jumpConsistentHash(intHash64(UserID), 2)</sharding_key>\n\n            \x3c!-- Optional expression that filter data while pull them from source servers --\x3e\n            <where_condition>CounterID != 0</where_condition>\n\n            \x3c!-- This section specifies partitions that should be copied, other partition will be ignored.\n                 Partition names should have the same format as\n                 partition column of system.parts table (i.e. a quoted text).\n                 Since partition key of source and destination cluster could be different,\n                 these partition names specify destination partitions.\n\n                 NOTE: In spite of this section is optional (if it is not specified, all partitions will be copied),\n                 it is strictly recommended to specify them explicitly.\n                 If you already have some ready partitions on destination cluster they\n                 will be removed at the start of the copying since they will be interpeted\n                 as unfinished data from the previous copying!!!\n            --\x3e\n            <enabled_partitions>\n                <partition>'2018-02-26'</partition>\n                <partition>'2018-03-05'</partition>\n                ...\n            </enabled_partitions>\n        </table_hits>\n\n        \x3c!-- Next table to copy. It is not copied until previous table is copying. --\x3e\n        <table_visits>\n        ...\n        </table_visits>\n        ...\n    </tables>\n</clickhouse>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"/task/path/description")," \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u0438\u0445 \xab\u043d\u0430 \u043b\u0435\u0442\u0443\xbb. \u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u043e\u043c\u0435\u043d\u044f\u0435\u0442\u0435, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"max_workers"),", \u0442\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u043d\u0438\u044f, \u0442\u0430\u043a\u0436\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f."))}k.isMDXComponent=!0}}]);