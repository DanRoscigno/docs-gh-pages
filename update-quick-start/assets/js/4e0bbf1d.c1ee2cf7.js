"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86875],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,u=m["".concat(o,".").concat(c)]||m[c]||g[c]||s;return a?r.createElement(u,i(i({ref:t},d),{},{components:a})):r.createElement(u,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39421:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],l={sidebar_position:30,sidebar_label:"MaterializedPostgreSQL"},o="[\u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439] MaterializedPostgreSQL",p={unversionedId:"ru/engines/database-engines/materialized-postgresql",id:"ru/engines/database-engines/materialized-postgresql",title:"[\u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439] MaterializedPostgreSQL",description:"materialize-postgresql}",source:"@site/docs/ru/engines/database-engines/materialized-postgresql.md",sourceDirName:"ru/engines/database-engines",slug:"/ru/engines/database-engines/materialized-postgresql",permalink:"/docs-gh-pages/update-quick-start/ru/engines/database-engines/materialized-postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/database-engines/materialized-postgresql.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,sidebar_label:"MaterializedPostgreSQL"},sidebar:"russia",previous:{title:"[experimental] MaterializedMySQL",permalink:"/docs-gh-pages/update-quick-start/ru/engines/database-engines/materialized-mysql"},next:{title:"MySQL",permalink:"/docs-gh-pages/update-quick-start/ru/engines/database-engines/mysql"}},d={},g=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"creating-a-database",level:2},{value:"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0432 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044e",id:"dynamically-adding-table-to-replication",level:2},{value:"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438\u0437 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438",id:"dynamically-removing-table-from-replication",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"settings",level:2},{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"requirements",level:2}],m={toc:g};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"materialize-postgresql"},"[\u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439]"," MaterializedPostgreSQL"),(0,s.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 ClickHouse \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u0434\u0430\u043c\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 PostgreSQL \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u0442.\u0435. \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0444\u043e\u043d\u0435, \u043a\u0430\u043a \u044d\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 PostgreSQL \u0432 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0439 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 PostgreSQL."),(0,s.kt)("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440 ClickHouse \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u0440\u0435\u043f\u043b\u0438\u043a\u0430 PostgreSQL. \u041e\u043d \u0447\u0438\u0442\u0430\u0435\u0442 WAL \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 DML \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u0414\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043d\u0435 \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u043d\u043e \u0441\u0430\u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b (\u043e\u043f\u0438\u0441\u0430\u043d\u043e \u043d\u0438\u0436\u0435)."),(0,s.kt)("h2",{id:"creating-a-database"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MaterializedPostgreSQL('host:port', ['database' | database], 'user', 'password') [SETTINGS ...]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 PostgreSQL."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c PostgreSQL."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,s.kt)("h2",{id:"dynamically-adding-table-to-replication"},"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0432 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE postgres_database.new_table;\n")),(0,s.kt)("p",null,"\u041f\u0440\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446 \u0432 \u0431\u0430\u0437\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#materialized-postgresql-tables-list"},"materialized_postgresql_tables_list"),", \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d (\u0432 ",(0,s.kt)("inlineCode",{parentName:"p"},".sql")," \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445) \u043d\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0442\u0430\u0431\u043b\u0438\u0446, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE"),"."),(0,s.kt)("h2",{id:"dynamically-removing-table-from-replication"},"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438\u0437 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE postgres_database.table_to_remove;\n")),(0,s.kt)("h2",{id:"settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#materialized-postgresql-max-block-size"},"materialized_postgresql_max_block_size"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#materialized-postgresql-tables-list"},"materialized_postgresql_tables_list"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#materialized-postgresql-allow-automatic-update"},"materialized_postgresql_allow_automatic_update"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#materialized-postgresql-replication-slot"},"materialized_postgresql_replication_slot"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#materialized-postgresql-snapshot"},"materialized_postgresql_snapshot")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE database1\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password')\nSETTINGS materialized_postgresql_max_block_size = 65536,\n         materialized_postgresql_tables_list = 'table1,table2,table3';\n\nSELECT * FROM database1.table1;\n")),(0,s.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e DDL \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041e\u0434\u043d\u0430\u043a\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0435\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_tables_list"),", \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446 \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE postgres_database MODIFY SETTING materialized_postgresql_max_block_size = <new_size>;\n")),(0,s.kt)("h2",{id:"requirements"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,s.kt)("a",{parentName:"p",href:"https://postgrespro.ru/docs/postgrespro/10/runtime-config-wal"},"wal_level")," \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"logical"),", \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,s.kt)("inlineCode",{parentName:"p"},"max_replication_slots")," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d \u043f\u043e \u043c\u0435\u043d\u044c\u0448\u0435\u0439 \u043c\u0435\u0440\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0432 PostgreSQL.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u041a\u0430\u0436\u0434\u0430\u044f \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 ",(0,s.kt)("a",{parentName:"p",href:"https://postgrespro.ru/docs/postgresql/10/sql-altertable#SQL-CREATETABLE-REPLICA-IDENTITY"},"\u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432"),":"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u0438\u043d\u0434\u0435\u043a\u0441"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"postgres# CREATE TABLE postgres_table (a Integer NOT NULL, b Integer, c Integer NOT NULL, d Integer, e Integer NOT NULL);\npostgres# CREATE unique INDEX postgres_table_index on postgres_table(a, c, e);\npostgres# ALTER TABLE postgres_table REPLICA IDENTITY USING INDEX postgres_table_index;\n")),(0,s.kt)("p",null,"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0432\u044b\u043c. \u0415\u0441\u043b\u0438 \u043e\u043d \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442, \u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0434\u0435\u043a\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u043a replica identity index (\u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440).\n\u0415\u0441\u043b\u0438 \u0438\u043d\u0434\u0435\u043a\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430, \u0442\u043e \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0442\u0430\u043a\u043e\u0439 \u0438\u043d\u0434\u0435\u043a\u0441.\n\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u043a\u0430\u043a\u043e\u0439 \u0442\u0438\u043f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"postgres# SELECT CASE relreplident\n          WHEN 'd' THEN 'default'\n          WHEN 'n' THEN 'nothing'\n          WHEN 'f' THEN 'full'\n          WHEN 'i' THEN 'index'\n       END AS replica_identity\nFROM pg_class\nWHERE oid = 'postgres_table'::regclass;\n")),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"')),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre"},"\u0420\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f **TOAST**-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f. \u0414\u043b\u044f \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.\n")),(0,s.kt)("h2",{parentName:"div",id:"example-of-use"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE postgresql_db\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password');\n\nSELECT * FROM postgresql_db.postgres_table;\n")),(0,s.kt)("h2",{parentName:"div",id:"notes"},"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f"),(0,s.kt)("h3",{parentName:"div",id:"logical-replication-slot-failover"},"\u0421\u0431\u043e\u0439 \u0441\u043b\u043e\u0442\u0430 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438"),(0,s.kt)("p",{parentName:"div"},"\u0421\u043b\u043e\u0442\u044b \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0435\u0441\u0442\u044c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043d\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0445 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0445.\n\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0431\u043e\u044f \u043d\u043e\u0432\u044b\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 (\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u043d\u044c\u0448\u0435 \u0431\u044b\u043b \u0440\u0435\u0437\u0435\u0432\u043d\u044b\u043c) \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u043d\u0430\u0442\u044c \u043e \u0441\u043b\u043e\u0442\u0430\u0445 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u043d\u0430 \u0432\u044b\u0448\u0435\u0434\u0448\u0435\u043c \u0438\u0437 \u0441\u0442\u0440\u043e\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044e \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0438\u0437 PostgreSQL.\n\u0420\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044c \u0440\u0443\u0447\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0442\u0430\u043c\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u0442\u0430 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 (\u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c ",(0,s.kt)("a",{parentName:"p",href:"https://patroni.readthedocs.io/en/latest/SETTINGS.html"},"\u0437\u0434\u0435\u0441\u044c"),"). \u042d\u0442\u043e\u0442 \u0441\u043b\u043e\u0442 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#materialized-postgresql-replication-slot"},"materialized_postgresql_replication_slot"),", \u0438 \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"EXPORT SNAPSHOT"),". \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u043d\u044d\u043f\u0448\u043e\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#materialized-postgresql-snapshot"},"materialized_postgresql_snapshot"),"."),(0,s.kt)("p",{parentName:"div"},"\u0418\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043e \u044d\u0442\u043e \u0441\u0442\u043e\u0438\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c. \u0415\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043d\u0435\u0442, \u0438\u043b\u0438 \u0435\u0441\u043b\u0438 \u043d\u0435\u0442 \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0442\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0442 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u0441\u0442\u043e\u0438\u0442, \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439."),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 (\u043e\u0442 ",(0,s.kt)("a",{parentName:"strong",href:"https://github.com/bchrobot"},"@bchrobot"),")")," "),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},"\u0421\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u043b\u043e\u0442 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0432 PostgreSQL.")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "acid.zalan.do/v1"\nkind: postgresql\nmetadata:\n  name: acid-demo-cluster\nspec:\n  numberOfInstances: 2\n  postgresql:\n    parameters:\n      wal_level: logical\n  patroni:\n    slots:\n      clickhouse_sync:\n        type: logical\n        database: demodb\n        plugin: pgoutput\n')),(0,s.kt)("ol",{parentName:"div",start:2},(0,s.kt)("li",{parentName:"ol"},"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u043b\u043e\u0442\u0430 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u0437\u0430\u0442\u0435\u043c \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u043d\u044d\u043f\u0448\u043e\u0442\u0430 \u044d\u0442\u043e\u0439 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438:")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nSELECT pg_export_snapshot();\n")),(0,s.kt)("ol",{parentName:"div",start:3},(0,s.kt)("li",{parentName:"ol"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ClickHouse:")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE demodb\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password')\nSETTINGS\n  materialized_postgresql_replication_slot = 'clickhouse_sync',\n  materialized_postgresql_snapshot = '0000000A-0000023F-3',\n  materialized_postgresql_tables_list = 'table1,table2,table3';\n")),(0,s.kt)("ol",{parentName:"div",start:4},(0,s.kt)("li",{parentName:"ol"},"\u041a\u043e\u0433\u0434\u0430 \u043d\u0430\u0447\u043d\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0411\u0414 \u0432 ClickHouse, \u043f\u0440\u0435\u0440\u0432\u0438\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e \u0432 PostgreSQL. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0441\u0431\u043e\u044f:")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec acid-demo-cluster-0 -c postgres -- su postgres -c 'patronictl failover --candidate acid-demo-cluster-1 --force'\n")))))}c.isMDXComponent=!0}}]);