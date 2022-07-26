"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88501],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,d=g["".concat(o,".").concat(m)]||g[m]||c[m]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:11,sidebar_label:"PostgreSQL"},o="PostgreSQL",p={unversionedId:"zh/engines/table-engines/integrations/postgresql",id:"zh/engines/table-engines/integrations/postgresql",title:"PostgreSQL",description:"postgresql}",source:"@site/docs/zh/engines/table-engines/integrations/postgresql.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/postgresql",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/postgresql.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"PostgreSQL"},sidebar:"chinese",previous:{title:"RabbitMQ",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/rabbitmq"},next:{title:"ExternalDistributed",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/ExternalDistributed"}},u={},c=[{value:"\u521b\u5efa\u4e00\u5f20\u8868",id:"creating-a-table",level:2},{value:"\u5b9e\u65bd\u7ec6\u8282",id:"implementation-details",level:2},{value:"\u7528\u6cd5\u793a\u4f8b",id:"usage-example",level:2}],g={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,l.kt)("p",null,"PostgreSQL \u5f15\u64ce\u5141\u8bb8 ClickHouse \u5bf9\u5b58\u50a8\u5728\u8fdc\u7a0b PostgreSQL \u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2."),(0,l.kt)("h2",{id:"creating-a-table"},"\u521b\u5efa\u4e00\u5f20\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n    ...\n) ENGINE = PostgreSQL('host:port', 'database', 'table', 'user', 'password'[, `schema`]);\n")),(0,l.kt)("p",null,"\u8868\u7ed3\u6784\u53ef\u4ee5\u4e0e PostgreSQL \u6e90\u8868\u7ed3\u6784\u4e0d\u540c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5217\u540d\u5e94\u4e0e PostgreSQL \u6e90\u8868\u4e2d\u7684\u5217\u540d\u76f8\u540c\uff0c\u4f46\u60a8\u53ef\u4ee5\u6309\u4efb\u4f55\u987a\u5e8f\u4f7f\u7528\u5176\u4e2d\u7684\u4e00\u4e9b\u5217\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5217\u7c7b\u578b\u53ef\u80fd\u4e0e\u6e90\u8868\u4e2d\u7684\u5217\u7c7b\u578b\u4e0d\u540c\u3002 ClickHouse\u5c1d\u8bd5\u5c06\u6570\u503c",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"\u6620\u5c04")," \u5230ClickHouse\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"external_table_functions_use_nulls")," \u6765\u5b9a\u4e49\u5982\u4f55\u5904\u7406 Nullable \u5217. \u9ed8\u8ba4\u503c\u662f 1, \u5f53\u8bbe\u7f6e\u4e3a 0 \u65f6 - \u8868\u51fd\u6570\u5c06\u4e0d\u4f1a\u4f7f\u7528 nullable \u5217\uff0c\u800c\u662f\u63d2\u5165\u9ed8\u8ba4\u503c\u6765\u4ee3\u66ff null. \u8fd9\u540c\u6837\u9002\u7528\u4e8e\u6570\u7ec4\u6570\u636e\u7c7b\u578b\u4e2d\u7684 null \u503c.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 PostgreSQL \u670d\u52a1\u5668\u5730\u5740."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u6570\u636e\u5e93\u540d\u79f0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"table")," \u2014 \u8868\u540d\u79f0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user")," \u2014 PostgreSQL \u7528\u6237."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u7528\u6237\u5bc6\u7801."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"schema")," \u2014 Non-default table schema. \u53ef\u9009.")),(0,l.kt)("h2",{id:"implementation-details"},"\u5b9e\u65bd\u7ec6\u8282"),(0,l.kt)("p",null,"\u5728 PostgreSQL \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"COPY (SELECT ...) TO STDOUT")," \u7684\u65b9\u5f0f\u5728\u53ea\u8bfb PostgreSQL \u4e8b\u52a1\u4e2d\u8fd0\u884c\uff0c\u6bcf\u6b21 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u540e\u63d0\u4ea4\u3002"),(0,l.kt)("p",null,"\u7b80\u5355\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5b50\u53e5\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"="),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\uff01="),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},">"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},">="),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<="),"\uff0c\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"IN"),"\u662f\u5728PostgreSQL \u670d\u52a1\u5668\u4e0a\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u7684\u8fde\u63a5\u3001\u805a\u5408\u3001\u6392\u5e8f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"IN [ array ]"),"\u6761\u4ef6\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\u91c7\u6837\u7ea6\u675f\u90fd\u662f\u5728 PostgreSQL \u7684\u67e5\u8be2\u7ed3\u675f\u540e\u624d\u5728ClickHouse\u4e2d\u6267\u884c\u7684\u3002"),(0,l.kt)("p",null,"\u5728 PostgreSQL \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},'COPY "table_name" (field1, field2, ... fieldN) FROM STDIN')," \u7684\u65b9\u5f0f\u5728 PostgreSQL \u4e8b\u52a1\u4e2d\u8fd0\u884c\uff0c\u6bcf\u6761 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u8bed\u53e5\u540e\u81ea\u52a8\u63d0\u4ea4\u3002"),(0,l.kt)("p",null,"PostgreSQL \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Array")," \u7c7b\u578b\u4f1a\u88ab\u8f6c\u6362\u4e3a ClickHouse \u6570\u7ec4\u3002"),(0,l.kt)("p",null,'!!! info "Note"\n\u8981\u5c0f\u5fc3 - \u4e00\u4e2a\u5728 PostgreSQL \u4e2d\u7684\u6570\u7ec4\u6570\u636e\uff0c\u50cf',(0,l.kt)("inlineCode",{parentName:"p"},"type_name[]"),"\u8fd9\u6837\u521b\u5efa\uff0c\u53ef\u4ee5\u5728\u540c\u4e00\u5217\u7684\u4e0d\u540c\u8868\u884c\u4e2d\u5305\u542b\u4e0d\u540c\u7ef4\u5ea6\u7684\u591a\u7ef4\u6570\u7ec4\u3002\u4f46\u662f\u5728 ClickHouse \u4e2d\uff0c\u53ea\u5141\u8bb8\u5728\u540c\u4e00\u5217\u7684\u6240\u6709\u8868\u884c\u4e2d\u5305\u542b\u76f8\u540c\u7ef4\u6570\u7684\u591a\u7ef4\u6570\u7ec4\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u8bbe\u7f6e PostgreSQL \u5b57\u5178\u6e90\u4e2d Replicas \u7684\u4f18\u5148\u7ea7\u3002\u5730\u56fe\u4e2d\u7684\u6570\u5b57\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u5c31\u8d8a\u4f4e\u3002\u6700\u9ad8\u7684\u4f18\u5148\u7ea7\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,l.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u526f\u672c",(0,l.kt)("inlineCode",{parentName:"p"},"example01-1"),"\u6709\u6700\u9ad8\u7684\u4f18\u5148\u7ea7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<postgresql>\n    <port>5432</port>\n    <user>clickhouse</user>\n    <password>qwerty</password>\n    <replica>\n        <host>example01-1</host>\n        <priority>1</priority>\n    </replica>\n    <replica>\n        <host>example01-2</host>\n        <priority>2</priority>\n    </replica>\n    <db>db_name</db>\n    <table>table_name</table>\n    <where>id=10</where>\n    <invalidate_query>SQL_QUERY</invalidate_query>\n</postgresql>\n</source>\n")),(0,l.kt)("h2",{id:"usage-example"},"\u7528\u6cd5\u793a\u4f8b"),(0,l.kt)("p",null,"PostgreSQL \u4e2d\u7684\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'postgres=# CREATE TABLE "public"."test" (\n"int_id" SERIAL,\n"int_nullable" INT NULL DEFAULT NULL,\n"float" FLOAT NOT NULL,\n"str" VARCHAR(100) NOT NULL DEFAULT \'\',\n"float_nullable" FLOAT NULL DEFAULT NULL,\nPRIMARY KEY (int_id));\n\nCREATE TABLE\n\npostgres=# INSERT INTO test (int_id, str, "float") VALUES (1,\'test\',2);\nINSERT 0 1\n\npostgresql> SELECT * FROM test;\n  int_id | int_nullable | float | str  | float_nullable\n --------+--------------+-------+------+----------------\n       1 |              |     2 | test |\n (1 row)\n')),(0,l.kt)("p",null,"ClickHouse \u4e2d\u7684\u8868, \u4ece\u4e0a\u9762\u521b\u5efa\u7684 PostgreSQL \u8868\u4e2d\u68c0\u7d22\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE default.postgresql_table\n(\n    `float_nullable` Nullable(Float32),\n    `str` String,\n    `int_id` Int32\n)\nENGINE = PostgreSQL('localhost:5432', 'public', 'test', 'postges_user', 'postgres_password');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM postgresql_table WHERE str IN ('test');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500float_nullable\u2500\u252c\u2500str\u2500\u2500\u252c\u2500int_id\u2500\u2510\n\u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502 test \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u975e\u9ed8\u8ba4\u7684\u6a21\u5f0f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'postgres=# CREATE SCHEMA "nice.schema";\n\npostgres=# CREATE TABLE "nice.schema"."nice.table" (a integer);\n\npostgres=# INSERT INTO "nice.schema"."nice.table" SELECT i FROM generate_series(0, 99) as t(i)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE pg_table_schema_with_dots (a UInt32)\n        ENGINE PostgreSQL('localhost:5432', 'clickhouse', 'nice.table', 'postgrsql_user', 'password', 'nice.schema');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-postgresql"},"\u4f7f\u7528 PostgreSQL \u4f5c\u4e3a\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/postgresql/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);