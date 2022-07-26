"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30612],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={sidebar_position:59,sidebar_label:"clickhouse-copier"},l="clickhouse-copier",c={unversionedId:"en/operations/utilities/clickhouse-copier",id:"en/operations/utilities/clickhouse-copier",title:"clickhouse-copier",description:"Copies data from the tables in one cluster to tables in another (or the same) cluster.",source:"@site/docs/en/operations/utilities/clickhouse-copier.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-copier",permalink:"/docs-gh-pages/nytaxi/en/operations/utilities/clickhouse-copier",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/clickhouse-copier.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59,sidebar_label:"clickhouse-copier"},sidebar:"english",previous:{title:"Utilities",permalink:"/docs-gh-pages/nytaxi/en/operations/utilities/"},next:{title:"clickhouse-local",permalink:"/docs-gh-pages/nytaxi/en/operations/utilities/clickhouse-local"}},p={},u=[{value:"Running Clickhouse-copier",id:"running-clickhouse-copier",level:2},{value:"Format of keeper.xml",id:"format-of-zookeeper-xml",level:2},{value:"Configuration of Copying Tasks",id:"configuration-of-copying-tasks",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse-copier"},"clickhouse-copier"),(0,r.kt)("p",null,"Copies data from the tables in one cluster to tables in another (or the same) cluster."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To get a consistent copy, the data in the source tables and partitions should not change during the entire process."))),(0,r.kt)("p",null,"You can run multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," instances on different servers to perform the same job. ClickHouse Keeper, or ZooKeeper, is used for syncing the processes."),(0,r.kt)("p",null,"After starting, ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-copier"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connects to ClickHouse Keeper and receives:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Copying jobs."),(0,r.kt)("li",{parentName:"ul"},"The state of the copying jobs."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It performs the jobs."),(0,r.kt)("p",{parentName:"li"},"Each running process chooses the \u201cclosest\u201d shard of the source cluster and copies the data into the destination cluster, resharding the data if necessary."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," tracks the changes in ClickHouse Keeper and applies them on the fly."),(0,r.kt)("p",null,"To reduce network traffic, we recommend running ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," on the same server where the source data is located."),(0,r.kt)("h2",{id:"running-clickhouse-copier"},"Running Clickhouse-copier"),(0,r.kt)("p",null,"The utility should be run manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-copier --daemon --config keeper.xml --task-path /task/path --base-dir /path/to/dir\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"daemon")," \u2014 Starts ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," in daemon mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," \u2014 The path to the ",(0,r.kt)("inlineCode",{parentName:"li"},"keeper.xml")," file with the parameters for the connection to ClickHouse Keeper."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"task-path")," \u2014 The path to the ClickHouse Keeper node. This node is used for syncing ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," processes and storing tasks. Tasks are stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"$task-path/description"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"task-file")," \u2014 Optional path to file with task configuration for initial upload to ClickHouse Keeper."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"task-upload-force")," \u2014 Force upload ",(0,r.kt)("inlineCode",{parentName:"li"},"task-file")," even if node already exists."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base-dir")," \u2014 The path to logs and auxiliary files. When it starts, ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," creates ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-copier_YYYYMMHHSS_<PID>")," subdirectories in ",(0,r.kt)("inlineCode",{parentName:"li"},"$base-dir"),". If this parameter is omitted, the directories are created in the directory where ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," was launched.")),(0,r.kt)("h2",{id:"format-of-zookeeper-xml"},"Format of keeper.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<clickhouse>\n    <logger>\n        <level>trace</level>\n        <size>100M</size>\n        <count>3</count>\n    </logger>\n\n    <zookeeper>\n        <node index="1">\n            <host>127.0.0.1</host>\n            <port>2181</port>\n        </node>\n    </zookeeper>\n</clickhouse>\n')),(0,r.kt)("h2",{id:"configuration-of-copying-tasks"},"Configuration of Copying Tasks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    \x3c!-- Configuration of clusters as in an ordinary server config --\x3e\n    <remote_servers>\n        <source_cluster>\n            \x3c!--\n                source cluster & destination clusters accept exactly the same\n                parameters as parameters for the usual Distributed table\n                see https://clickhouse.com/docs/en/engines/table-engines/special/distributed/\n            --\x3e\n            <shard>\n                <internal_replication>false</internal_replication>\n                    <replica>\n                        <host>127.0.0.1</host>\n                        <port>9000</port>\n                        \x3c!--\n                        <user>default</user>\n                        <password>default</password>\n                        <secure>1</secure>\n                        --\x3e\n                    </replica>\n            </shard>\n            ...\n        </source_cluster>\n\n        <destination_cluster>\n        ...\n        </destination_cluster>\n    </remote_servers>\n\n    \x3c!-- How many simultaneously active workers are possible. If you run more workers superfluous workers will sleep. --\x3e\n    <max_workers>2</max_workers>\n\n    \x3c!-- Setting used to fetch (pull) data from source cluster tables --\x3e\n    <settings_pull>\n        <readonly>1</readonly>\n    </settings_pull>\n\n    \x3c!-- Setting used to insert (push) data to destination cluster tables --\x3e\n    <settings_push>\n        <readonly>0</readonly>\n    </settings_push>\n\n    \x3c!-- Common setting for fetch (pull) and insert (push) operations. Also, copier process context uses it.\n         They are overlaid by <settings_pull/> and <settings_push/> respectively. --\x3e\n    <settings>\n        <connect_timeout>3</connect_timeout>\n        \x3c!-- Sync insert is set forcibly, leave it here just in case. --\x3e\n        <insert_distributed_sync>1</insert_distributed_sync>\n    </settings>\n\n    \x3c!-- Copying tasks description.\n         You could specify several table task in the same task description (in the same ZooKeeper node), they will be performed\n         sequentially.\n    --\x3e\n    <tables>\n        \x3c!-- A table task, copies one table. --\x3e\n        <table_hits>\n            \x3c!-- Source cluster name (from <remote_servers/> section) and tables in it that should be copied --\x3e\n            <cluster_pull>source_cluster</cluster_pull>\n            <database_pull>test</database_pull>\n            <table_pull>hits</table_pull>\n\n            \x3c!-- Destination cluster name and tables in which the data should be inserted --\x3e\n            <cluster_push>destination_cluster</cluster_push>\n            <database_push>test</database_push>\n            <table_push>hits2</table_push>\n\n            \x3c!-- Engine of destination tables.\n                 If destination tables have not be created, workers create them using columns definition from source tables and engine\n                 definition from here.\n\n                 NOTE: If the first worker starts insert data and detects that destination partition is not empty then the partition will\n                 be dropped and refilled, take it into account if you already have some data in destination tables. You could directly\n                 specify partitions that should be copied in <enabled_partitions/>, they should be in quoted format like partition column of\n                 system.parts table.\n            --\x3e\n            <engine>\n            ENGINE=ReplicatedMergeTree('/clickhouse/tables/{cluster}/{shard}/hits2', '{replica}')\n            PARTITION BY toMonday(date)\n            ORDER BY (CounterID, EventDate)\n            </engine>\n\n            \x3c!-- Sharding key used to insert data to destination cluster --\x3e\n            <sharding_key>jumpConsistentHash(intHash64(UserID), 2)</sharding_key>\n\n            \x3c!-- Optional expression that filter data while pull them from source servers --\x3e\n            <where_condition>CounterID != 0</where_condition>\n\n            \x3c!-- This section specifies partitions that should be copied, other partition will be ignored.\n                 Partition names should have the same format as\n                 partition column of system.parts table (i.e. a quoted text).\n                 Since partition key of source and destination cluster could be different,\n                 these partition names specify destination partitions.\n\n                 NOTE: In spite of this section is optional (if it is not specified, all partitions will be copied),\n                 it is strictly recommended to specify them explicitly.\n                 If you already have some ready partitions on destination cluster they\n                 will be removed at the start of the copying since they will be interpeted\n                 as unfinished data from the previous copying!!!\n            --\x3e\n            <enabled_partitions>\n                <partition>'2018-02-26'</partition>\n                <partition>'2018-03-05'</partition>\n                ...\n            </enabled_partitions>\n        </table_hits>\n\n        \x3c!-- Next table to copy. It is not copied until previous table is copying. --\x3e\n        <table_visits>\n        ...\n        </table_visits>\n        ...\n    </tables>\n</clickhouse>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," tracks the changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"/task/path/description")," and applies them on the fly. For instance, if you change the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"max_workers"),", the number of processes running tasks will also change."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/utils/clickhouse-copier/"},"Original article")," "))}h.isMDXComponent=!0}}]);