"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[55402],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||s;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88414:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],l={sidebar_position:40,sidebar_label:"remote"},o="remote, remoteSecure",p={unversionedId:"en/sql-reference/table-functions/remote",id:"en/sql-reference/table-functions/remote",title:"remote, remoteSecure",description:"Allows accessing remote servers, including migration of data, without creating a Distributed table. remoteSecure - same as remote but with a secured connection.",source:"@site/docs/en/sql-reference/table-functions/remote.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/remote",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/table-functions/remote",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/remote.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"remote"},sidebar:"english",previous:{title:"numbers",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/table-functions/numbers"},next:{title:"url",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/table-functions/url"}},d={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returned value",id:"returned-value",level:2},{value:"Usage",id:"usage",level:2},{value:"Adresses",id:"adresses",level:3},{value:"Examples",id:"examples",level:2},{value:"Selecting data from a remote server:",id:"selecting-data-from-a-remote-server",level:3},{value:"Inserting data from a remote server into a table:",id:"inserting-data-from-a-remote-server-into-a-table",level:3},{value:"Migration of tables from one system to another:",id:"migration-of-tables-from-one-system-to-another",level:3},{value:"On the source ClickHouse system (the system that currently hosts the data)",id:"on-the-source-clickhouse-system-the-system-that-currently-hosts-the-data",level:4},{value:"On the destination ClickHouse system:",id:"on-the-destination-clickhouse-system",level:4},{value:"Back on the source deployment:",id:"back-on-the-source-deployment",level:4},{value:"Globs in Addresses",id:"globs-in-addresses",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"remote-remotesecure"},"remote, remoteSecure"),(0,s.kt)("p",null,"Allows accessing remote servers, including migration of data, without creating a ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/special/distributed"},"Distributed")," table. ",(0,s.kt)("inlineCode",{parentName:"p"},"remoteSecure")," - same as ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," but with a secured connection."),(0,s.kt)("p",null,"Both functions can be used in ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"INSERT")," queries."),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"remote('addresses_expr', db, table[, 'user'[, 'password'], sharding_key])\nremote('addresses_expr', db.table[, 'user'[, 'password'], sharding_key])\nremoteSecure('addresses_expr', db, table[, 'user'[, 'password'], sharding_key])\nremoteSecure('addresses_expr', db.table[, 'user'[, 'password'], sharding_key])\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"addresses_expr")," \u2014 An expression that generates addresses of remote servers. This may be just one server address. The server address is ",(0,s.kt)("inlineCode",{parentName:"p"},"host:port"),", or just ",(0,s.kt)("inlineCode",{parentName:"p"},"host"),"."),(0,s.kt)("p",{parentName:"li"},"  The host can be specified as the server name, or as the IPv4 or IPv6 address. An IPv6 address is specified in square brackets."),(0,s.kt)("p",{parentName:"li"},"  The port is the TCP port on the remote server. If the port is omitted, it uses ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port"},"tcp_port")," from the server\u2019s config file in ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," (by default, 9000) and ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port_secure"},"tcp_port_secure")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"remoteSecure")," (by default, 9440)."),(0,s.kt)("p",{parentName:"li"},"  The port is required for an IPv6 address."),(0,s.kt)("p",{parentName:"li"},"  Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"db")," \u2014 Database name. Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"table")," \u2014 Table name. Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"user")," \u2014 User name. If the user is not specified, ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," is used. Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"password")," \u2014 User password. If the password is not specified, an empty password is used. Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"sharding_key")," \u2014 Sharding key to support distributing data across nodes. For example: ",(0,s.kt)("inlineCode",{parentName:"p"},"insert into remote('127.0.0.1:9000,127.0.0.2', db, table, 'default', rand())"),". Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt32"),"."))),(0,s.kt)("h2",{id:"returned-value"},"Returned value"),(0,s.kt)("p",null,"The dataset from remote servers."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Unless you are migrating data from one system to another, using the ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," table function is less optimal than creating a ",(0,s.kt)("inlineCode",{parentName:"p"},"Distributed")," table because in this case the server connection is re-established for every request. Also, if hostnames are set, the names are resolved, and errors are not counted when working with various replicas. When processing a large number of queries, always create the ",(0,s.kt)("inlineCode",{parentName:"p"},"Distributed")," table ahead of time, and do not use the ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," table function."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," table function can be useful in the following cases:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Migrating data from one system to another"),(0,s.kt)("li",{parentName:"ul"},"Accessing a specific server for data comparison, debugging, and testing."),(0,s.kt)("li",{parentName:"ul"},"Queries between various ClickHouse clusters for research purposes."),(0,s.kt)("li",{parentName:"ul"},"Infrequent distributed requests that are made manually."),(0,s.kt)("li",{parentName:"ul"},"Distributed requests where the set of servers is re-defined each time.")),(0,s.kt)("h3",{id:"adresses"},"Adresses"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"example01-01-1\nexample01-01-1:9440\nexample01-01-1:9000\nlocalhost\n127.0.0.1\n[::]:9440\n[::]:9000\n[2a02:6b8:0:1111::11]:9000\n")),(0,s.kt)("p",null,"Multiple addresses can be comma-separated. In this case, ClickHouse will use distributed processing, so it will send the query to all specified addresses (like shards with different data). Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"example01-01-1,example01-02-1\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"selecting-data-from-a-remote-server"},"Selecting data from a remote server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM remote('127.0.0.1', db.remote_engine_table) LIMIT 3;\n")),(0,s.kt)("h3",{id:"inserting-data-from-a-remote-server-into-a-table"},"Inserting data from a remote server into a table:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE remote_table (name String, value UInt32) ENGINE=Memory;\nINSERT INTO FUNCTION remote('127.0.0.1', currentDatabase(), 'remote_table') VALUES ('test', 42);\nSELECT * FROM remote_table;\n")),(0,s.kt)("h3",{id:"migration-of-tables-from-one-system-to-another"},"Migration of tables from one system to another:"),(0,s.kt)("p",null,"This example uses one table from a sample dataset.  The database is ",(0,s.kt)("inlineCode",{parentName:"p"},"imdb"),", and the table is ",(0,s.kt)("inlineCode",{parentName:"p"},"actors"),". "),(0,s.kt)("h4",{id:"on-the-source-clickhouse-system-the-system-that-currently-hosts-the-data"},"On the source ClickHouse system (the system that currently hosts the data)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Verify the source database and table name (",(0,s.kt)("inlineCode",{parentName:"p"},"imdb.actors"),")  "),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"show databases\n")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"show tables in imdb\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Get the CREATE TABLE statement from the source:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"select create_table_query\nfrom system.tables\nwhere database = 'imdb' and table = 'actors'\n")),(0,s.kt)("p",{parentName:"li"},"Response"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE imdb.actors (`id` UInt32,\n                          `first_name` String,\n                          `last_name` String,\n                          `gender` FixedString(1))\n                ENGINE = ReplicatedMergeTree('/clickhouse/tables/{uuid}/{shard}', '{replica}')\n                ORDER BY (id, first_name, last_name, gender)\n                SETTINGS index_granularity = 8192\n")))),(0,s.kt)("h4",{id:"on-the-destination-clickhouse-system"},"On the destination ClickHouse system:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create the destination database:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE imdb\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Using the CREATE TABLE statement from the source, create the destination:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE imdb.actors (`id` UInt32,\n                          `first_name` String,\n                          `last_name` String,\n                          `gender` FixedString(1))\n                ENGINE = ReplicatedMergeTree('/clickhouse/tables/{uuid}/{shard}', '{replica}')\n                ORDER BY (id, first_name, last_name, gender)\n                SETTINGS index_granularity = 8192\n")))),(0,s.kt)("h4",{id:"back-on-the-source-deployment"},"Back on the source deployment:"),(0,s.kt)("p",null,"Insert into the new database and table created on the remote system.  You will need the host, port, username, password, destination database, and destination table."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION\nremoteSecure('remote.clickhouse.cloud:9440', 'imdb.actors', 'USER', 'PASSWORD', rand())\nSELECT * from imdb.actors\n")),(0,s.kt)("h2",{id:"globs-in-addresses"},"Globs in Addresses"),(0,s.kt)("p",null,"Patterns in curly brackets ",(0,s.kt)("inlineCode",{parentName:"p"},"{ }")," are used to generate a set of shards and to specify replicas. If there are multiple pairs of curly brackets, then the direct product of the corresponding sets is generated.\nThe following pattern types are supported."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"{",(0,s.kt)("em",{parentName:"li"},"a"),",",(0,s.kt)("em",{parentName:"li"},"b"),"} - Any number of variants separated by a comma. The pattern is replaced with ",(0,s.kt)("em",{parentName:"li"},"a")," in the first shard address and it is replaced with ",(0,s.kt)("em",{parentName:"li"},"b")," in the second shard address and so on. For instance, ",(0,s.kt)("inlineCode",{parentName:"li"},"example0{1,2}-1")," generates addresses ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"example02-1"),"."),(0,s.kt)("li",{parentName:"ul"},"{",(0,s.kt)("em",{parentName:"li"},"n"),"..",(0,s.kt)("em",{parentName:"li"},"m"),"} - A range of numbers. This pattern generates shard addresses with incrementing indices from ",(0,s.kt)("em",{parentName:"li"},"n")," to ",(0,s.kt)("em",{parentName:"li"},"m"),". ",(0,s.kt)("inlineCode",{parentName:"li"},"example0{1..2}-1")," generates ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"example02-1"),"."),(0,s.kt)("li",{parentName:"ul"},"{",(0,s.kt)("em",{parentName:"li"},"0n"),"..",(0,s.kt)("em",{parentName:"li"},"0m"),"} - A range of numbers with leading zeroes. This modification preserves leading zeroes in indices. The pattern ",(0,s.kt)("inlineCode",{parentName:"li"},"example{01..03}-1")," generates ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-1"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"example02-1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"example03-1"),"."),(0,s.kt)("li",{parentName:"ul"},"{",(0,s.kt)("em",{parentName:"li"},"a"),"|",(0,s.kt)("em",{parentName:"li"},"b"),"} - Any number of variants separated by a ",(0,s.kt)("inlineCode",{parentName:"li"},"|"),". The pattern specifies replicas. For instance, ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-{1|2}")," generates replicas ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-2"),".")),(0,s.kt)("p",null,"The query will be sent to the first healthy replica. However, for ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," the replicas are iterated in the order currently set in the ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#settings-load_balancing"},"load_balancing")," setting.\nThe number of generated addresses is limited by ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#table_function_remote_max_addresses"},"table_function_remote_max_addresses")," setting."))}c.isMDXComponent=!0}}]);