"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80156],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),o=["components"],r={sidebar_position:4,sidebar_label:"MySQL"},s="MySQL",u={unversionedId:"en/engines/table-engines/integrations/mysql",id:"en/engines/table-engines/integrations/mysql",title:"MySQL",description:"The MySQL engine allows you to perform SELECT and INSERT queries on data that is stored on a remote MySQL server.",source:"@site/docs/en/engines/table-engines/integrations/mysql.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/mysql",permalink:"/docs-gh-pages/nytaxi/en/engines/table-engines/integrations/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/mysql.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"MySQL"},sidebar:"english",previous:{title:"Hive",permalink:"/docs-gh-pages/nytaxi/en/engines/table-engines/integrations/hive"},next:{title:"MongoDB",permalink:"/docs-gh-pages/nytaxi/en/engines/table-engines/integrations/mongodb"}},c={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Settings",id:"mysql-settings",level:2},{value:"connection_auto_close",id:"connection-auto-close",level:3},{value:"connection_max_tries",id:"connection-max-tries",level:3},{value:"connection_pool_size",id:"connection-pool-size",level:3},{value:"connection_wait_timeout",id:"connection-wait-timeout",level:3},{value:"connect_timeout",id:"connect-timeout",level:3},{value:"read_write_timeout",id:"read-write-timeout",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mysql"},"MySQL"),(0,i.kt)("p",null,"The MySQL engine allows you to perform ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," queries on data that is stored on a remote MySQL server."),(0,i.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n    ...\n) ENGINE = MySQL('host:port', 'database', 'table', 'user', 'password'[, replace_query, 'on_duplicate_clause'])\nSETTINGS\n    [ connection_pool_size=16, ]\n    [ connection_max_tries=3, ]\n    [ connection_wait_timeout=5, ]\n    [ connection_auto_close=true, ]\n    [ connect_timeout=10, ]\n    [ read_write_timeout=300 ]\n;\n")),(0,i.kt)("p",null,"See a detailed description of the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE")," query."),(0,i.kt)("p",null,"The table structure can differ from the original MySQL table structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Column names should be the same as in the original MySQL table, but you can use just some of these columns and in any order."),(0,i.kt)("li",{parentName:"ul"},"Column types may differ from those in the original MySQL table. ClickHouse tries to ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/engines/database-engines/mysql#data_types-support"},"cast")," values to the ClickHouse data types."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/operations/settings/settings#external-table-functions-use-nulls"},"external_table_functions_use_nulls")," setting defines how to handle Nullable columns. Default value: 1. If 0, the table function does not make Nullable columns and inserts default values instead of nulls. This is also applicable for NULL values inside arrays.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"host:port")," \u2014 MySQL server address.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," \u2014 Remote database name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," \u2014 Remote table name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"user")," \u2014 MySQL user.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"password")," \u2014 User password.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"replace_query")," \u2014 Flag that converts ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," queries to ",(0,i.kt)("inlineCode",{parentName:"p"},"REPLACE INTO"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"replace_query=1"),", the query is substituted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," \u2014 The ",(0,i.kt)("inlineCode",{parentName:"p"},"ON DUPLICATE KEY on_duplicate_clause")," expression that is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," query."),(0,i.kt)("p",{parentName:"li"},"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO t (c1,c2) VALUES ('a', 2) ON DUPLICATE KEY UPDATE c2 = c2 + 1"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE c2 = c2 + 1"),". See the ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/insert-on-duplicate.html"},"MySQL documentation")," to find which ",(0,i.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," you can use with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ON DUPLICATE KEY")," clause."),(0,i.kt)("p",{parentName:"li"},"To specify ",(0,i.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," you need to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"replace_query")," parameter. If you simultaneously pass ",(0,i.kt)("inlineCode",{parentName:"p"},"replace_query = 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause"),", ClickHouse generates an exception."))),(0,i.kt)("p",null,"Simple ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses such as ",(0,i.kt)("inlineCode",{parentName:"p"},"=, !=, >, >=, <, <=")," are executed on the MySQL server."),(0,i.kt)("p",null,"The rest of the conditions and the ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT")," sampling constraint are executed in ClickHouse only after the query to MySQL finishes."),(0,i.kt)("p",null,"Supports multiple replicas that must be listed by ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_replicas (id UInt32, name String, age UInt32, money UInt32) ENGINE = MySQL(`mysql{2|3|4}:3306`, 'clickhouse', 'test_replicas', 'root', 'clickhouse');\n")),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)("p",null,"Table in MySQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+------+----------+-----+----------+\n| int_id | int_nullable | float | float_nullable |\n+------+----------+-----+----------+\n|      1 |         NULL |     2 |           NULL |\n+------+----------+-----+----------+\n1 row in set (0,00 sec)\n")),(0,i.kt)("p",null,"Table in ClickHouse, retrieving data from the MySQL table created above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_table\n(\n    `float_nullable` Nullable(Float32),\n    `int_id` Int32\n)\nENGINE = MySQL('localhost:3306', 'test', 'test', 'bayonet', '123')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_table\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500float_nullable\u2500\u252c\u2500int_id\u2500\u2510\n\u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"mysql-settings"},"Settings"),(0,i.kt)("p",null,"Default settings are not very efficient, since they do not even reuse connections. These settings allow you to increase the number of queries run by the server per second."),(0,i.kt)("h3",{id:"connection-auto-close"},"connection_auto_close"),(0,i.kt)("p",null,"Allows to automatically close the connection after query execution, i.e. disable connection reuse."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 \u2014 Auto-close connection is allowed, so the connection reuse is disabled"),(0,i.kt)("li",{parentName:"ul"},"0 \u2014 Auto-close connection is not allowed, so the connection reuse is enabled")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("h3",{id:"connection-max-tries"},"connection_max_tries"),(0,i.kt)("p",null,"Sets the number of retries for pool with failover."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positive integer."),(0,i.kt)("li",{parentName:"ul"},"0 \u2014 There are no retries for pool with failover.")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("h3",{id:"connection-pool-size"},"connection_pool_size"),(0,i.kt)("p",null,"Size of connection pool (if all connections are in use, the query will wait until some connection will be freed)."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positive integer.")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"16"),"."),(0,i.kt)("h3",{id:"connection-wait-timeout"},"connection_wait_timeout"),(0,i.kt)("p",null,"Timeout (in seconds) for waiting for free connection (in case of there is already connection_pool_size active connections), 0 - do not wait."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positive integer.")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,i.kt)("h3",{id:"connect-timeout"},"connect_timeout"),(0,i.kt)("p",null,"Connect timeout (in seconds)."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positive integer.")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,i.kt)("h3",{id:"read-write-timeout"},"read_write_timeout"),(0,i.kt)("p",null,"Read/write timeout (in seconds)."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positive integer.")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"300"),"."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/mysql"},"The mysql table function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-mysql"},"Using MySQL as a source of external dictionary"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/mysql/"},"Original article")," "))}d.isMDXComponent=!0}}]);