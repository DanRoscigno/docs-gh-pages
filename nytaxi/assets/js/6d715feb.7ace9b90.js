"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[20733],{3905:function(e,t,a){a.d(t,{Zo:function(){return g},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,m=d["".concat(o,".").concat(c)]||d[c]||u[c]||s;return a?r.createElement(m,l(l({ref:t},g),{},{components:a})):r.createElement(m,l({ref:t},g))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37535:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),l=["components"],i={sidebar_position:30,sidebar_label:"MaterializedPostgreSQL"},o="[experimental] MaterializedPostgreSQL",p={unversionedId:"zh/engines/database-engines/materialized-postgresql",id:"zh/engines/database-engines/materialized-postgresql",title:"[experimental] MaterializedPostgreSQL",description:"materialize-postgresql}",source:"@site/docs/zh/engines/database-engines/materialized-postgresql.md",sourceDirName:"zh/engines/database-engines",slug:"/zh/engines/database-engines/materialized-postgresql",permalink:"/docs-gh-pages/nytaxi/zh/engines/database-engines/materialized-postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/database-engines/materialized-postgresql.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,sidebar_label:"MaterializedPostgreSQL"},sidebar:"chinese",previous:{title:"MaterializedMySQL",permalink:"/docs-gh-pages/nytaxi/zh/engines/database-engines/materialized-mysql"},next:{title:"MySQL",permalink:"/docs-gh-pages/nytaxi/zh/engines/database-engines/mysql"}},g={},u=[{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"creating-a-database",level:2},{value:"\u8bbe\u7f6e",id:"settings",level:2},{value:"\u5fc5\u5907\u6761\u4ef6",id:"requirements",level:2},{value:"\u6ce8\u610f",id:"warning",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"example-of-use",level:2}],d={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"materialize-postgresql"},"[experimental]"," MaterializedPostgreSQL"),(0,s.kt)("p",null,"\u4f7f\u7528PostgreSQL\u6570\u636e\u5e93\u8868\u7684\u521d\u59cb\u6570\u636e\u8f6c\u50a8\u521b\u5efaClickHouse\u6570\u636e\u5e93\uff0c\u5e76\u542f\u52a8\u590d\u5236\u8fc7\u7a0b\uff0c\u5373\u6267\u884c\u540e\u53f0\u4f5c\u4e1a\uff0c\u4ee5\u4fbf\u5728\u8fdc\u7a0bPostgreSQL\u6570\u636e\u5e93\u4e2d\u7684PostgreSQL\u6570\u636e\u5e93\u8868\u4e0a\u53d1\u751f\u65b0\u66f4\u6539\u65f6\u5e94\u7528\u8fd9\u4e9b\u66f4\u6539\u3002"),(0,s.kt)("p",null,"ClickHouse\u670d\u52a1\u5668\u4f5c\u4e3aPostgreSQL\u526f\u672c\u5de5\u4f5c\u3002\u5b83\u8bfb\u53d6WAL\u5e76\u6267\u884cDML\u67e5\u8be2\u3002DDL\u4e0d\u662f\u590d\u5236\u7684\uff0c\u4f46\u53ef\u4ee5\u5904\u7406\uff08\u5982\u4e0b\u6240\u8ff0\uff09\u3002"),(0,s.kt)("h2",{id:"creating-a-database"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MaterializedPostgreSQL('host:port', ['database' | database], 'user', 'password') [SETTINGS ...]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Engine\u53c2\u6570")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 PostgreSQL\u670d\u52a1\u5730\u5740"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"database")," \u2014 PostgreSQL\u6570\u636e\u5e93\u540d"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user")," \u2014 PostgreSQL\u7528\u6237\u540d"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u7528\u6237\u5bc6\u7801")),(0,s.kt)("h2",{id:"settings"},"\u8bbe\u7f6e"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#materialized-postgresql-max-block-size"},"materialized_postgresql_max_block_size"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#materialized-postgresql-tables-list"},"materialized_postgresql_tables_list"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#materialized-postgresql-allow-automatic-update"},"materialized_postgresql_allow_automatic_update")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE database1\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password')\nSETTINGS materialized_postgresql_max_block_size = 65536,\n         materialized_postgresql_tables_list = 'table1,table2,table3';\n\nSELECT * FROM database1.table1;\n")),(0,s.kt)("h2",{id:"requirements"},"\u5fc5\u5907\u6761\u4ef6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5728postgresql\u914d\u7f6e\u6587\u4ef6\u4e2d\u5c06",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/runtime-config-wal.html"},"wal_level"),"\u8bbe\u7f6e\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"logical"),"\uff0c\u5c06",(0,s.kt)("inlineCode",{parentName:"p"},"max_replication_slots"),"\u8bbe\u7f6e\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"2"),"\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u590d\u5236\u8868\u5fc5\u987b\u5177\u6709\u4ee5\u4e0b\u4e00\u4e2a",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/10/sql-altertable.html#SQL-CREATETABLE-REPLICA-IDENTITY"},"replica identity"),":"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"default")," (\u4e3b\u952e)")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"index")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"postgres# CREATE TABLE postgres_table (a Integer NOT NULL, b Integer, c Integer NOT NULL, d Integer, e Integer NOT NULL);\npostgres# CREATE unique INDEX postgres_table_index on postgres_table(a, c, e);\npostgres# ALTER TABLE postgres_table REPLICA IDENTITY USING INDEX postgres_table_index;\n")),(0,s.kt)("p",null,"\u603b\u662f\u5148\u68c0\u67e5\u4e3b\u952e\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u68c0\u67e5\u7d22\u5f15(\u5b9a\u4e49\u4e3a\u526f\u672c\u6807\u8bc6\u7d22\u5f15)\u3002\n\u5982\u679c\u4f7f\u7528index\u4f5c\u4e3a\u526f\u672c\u6807\u8bc6\uff0c\u5219\u8868\u4e2d\u5fc5\u987b\u53ea\u6709\u4e00\u4e2a\u8fd9\u6837\u7684\u7d22\u5f15\u3002\n\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u68c0\u67e5\u4e00\u4e2a\u7279\u5b9a\u7684\u8868\u4f7f\u7528\u4e86\u4ec0\u4e48\u7c7b\u578b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"postgres# SELECT CASE relreplident\n          WHEN 'd' THEN 'default'\n          WHEN 'n' THEN 'nothing'\n          WHEN 'f' THEN 'full'\n          WHEN 'i' THEN 'index'\n       END AS replica_identity\nFROM pg_class\nWHERE oid = 'postgres_table'::regclass;\n")),(0,s.kt)("h2",{id:"warning"},"\u6ce8\u610f"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/9.5/storage-toast.html"},(0,s.kt)("strong",{parentName:"a"},"TOAST")),"\u4e0d\u652f\u6301\u503c\u8f6c\u6362\u3002\u5c06\u4f7f\u7528\u6570\u636e\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\u3002")),(0,s.kt)("h2",{id:"example-of-use"},"\u4f7f\u7528\u793a\u4f8b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE postgresql_db\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password');\n\nSELECT * FROM postgresql_db.postgres_table;\n")))}c.isMDXComponent=!0}}]);