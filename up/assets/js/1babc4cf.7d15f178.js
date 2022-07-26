"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86411],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},l=Object.keys(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=s.createContext({}),i=function(e){var t=s.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=i(e.components);return s.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?s.createElement(h,r(r({ref:t},u),{},{components:a})):s.createElement(h,r({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var i=2;i<l;i++)r[i]=a[i];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55792:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var s=a(87462),n=a(63366),l=(a(67294),a(3905)),r=["components"],o={sidebar_position:37,sidebar_label:"SHOW"},p="SHOW Statements",i={unversionedId:"en/sql-reference/statements/show",id:"en/sql-reference/statements/show",title:"SHOW Statements",description:"SHOW CREATE TABLE",source:"@site/docs/en/sql-reference/statements/show.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/show",permalink:"/docs-gh-pages/up/en/sql-reference/statements/show",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/show.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,sidebar_label:"SHOW"},sidebar:"english",previous:{title:"SYSTEM",permalink:"/docs-gh-pages/up/en/sql-reference/statements/system"},next:{title:"GRANT",permalink:"/docs-gh-pages/up/en/sql-reference/statements/grant"}},u={},c=[{value:"SHOW CREATE TABLE",id:"show-create-table",level:2},{value:"SHOW DATABASES",id:"show-databases",level:2},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3},{value:"SHOW PROCESSLIST",id:"show-processlist",level:2},{value:"SHOW TABLES",id:"show-tables",level:2},{value:"Examples",id:"examples-1",level:3},{value:"See Also",id:"see-also-1",level:3},{value:"SHOW DICTIONARIES",id:"show-dictionaries",level:2},{value:"SHOW GRANTS",id:"show-grants",level:2},{value:"Syntax",id:"syntax",level:3},{value:"SHOW CREATE USER",id:"show-create-user",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"SHOW CREATE ROLE",id:"show-create-role",level:2},{value:"Syntax",id:"syntax-2",level:3},{value:"SHOW CREATE ROW POLICY",id:"show-create-row-policy",level:2},{value:"Syntax",id:"syntax-3",level:3},{value:"SHOW CREATE QUOTA",id:"show-create-quota",level:2},{value:"Syntax",id:"syntax-4",level:3},{value:"SHOW CREATE SETTINGS PROFILE",id:"show-create-settings-profile",level:2},{value:"Syntax",id:"syntax-5",level:3},{value:"SHOW USERS",id:"show-users",level:2},{value:"Syntax",id:"syntax-6",level:3},{value:"SHOW ROLES",id:"show-roles",level:2},{value:"Syntax",id:"syntax-7",level:3},{value:"SHOW PROFILES",id:"show-profiles",level:2},{value:"Syntax",id:"syntax-8",level:3},{value:"SHOW POLICIES",id:"show-policies",level:2},{value:"Syntax",id:"syntax-9",level:3},{value:"SHOW QUOTAS",id:"show-quotas",level:2},{value:"Syntax",id:"syntax-10",level:3},{value:"SHOW QUOTA",id:"show-quota",level:2},{value:"Syntax",id:"syntax-11",level:3},{value:"SHOW ACCESS",id:"show-access",level:2},{value:"Syntax",id:"syntax-12",level:3},{value:"SHOW CLUSTER(s)",id:"show-clusters",level:2},{value:"Syntax",id:"syntax-13",level:3},{value:"Examples",id:"examples-2",level:3},{value:"SHOW SETTINGS",id:"show-settings",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"show-statements"},"SHOW Statements"),(0,l.kt)("h2",{id:"show-create-table"},"SHOW CREATE TABLE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE [TEMPORARY] [TABLE|DICTIONARY|VIEW] [db.]table|view [INTO OUTFILE filename] [FORMAT format]\n")),(0,l.kt)("p",null,"Returns a single ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),"-type \u2018statement\u2019 column, which contains a single value \u2013 the ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE")," query used for creating the specified object."),(0,l.kt)("p",null,"Note that if you use this statement to get ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE")," query of system tables, you will get a ",(0,l.kt)("em",{parentName:"p"},"fake")," query, which only declares table structure, but cannot be used to create table."),(0,l.kt)("h2",{id:"show-databases"},"SHOW DATABASES"),(0,l.kt)("p",null,"Prints a list of all databases."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES [LIKE | ILIKE | NOT LIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE filename] [FORMAT format]\n")),(0,l.kt)("p",null,"This statement is identical to the query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM system.databases [WHERE name LIKE | ILIKE | NOT LIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE filename] [FORMAT format]\n")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Getting database names, containing the symbols sequence 'de' in their names:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES LIKE '%de%'\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2510\n\u2502 default \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Getting database names, containing symbols sequence 'de' in their names, in the case insensitive manner:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES ILIKE '%DE%'\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2510\n\u2502 default \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Getting database names, not containing the symbols sequence 'de' in their names:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES NOT LIKE '%de%'\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 _temporary_and_external_tables \u2502\n\u2502 system                         \u2502\n\u2502 test                           \u2502\n\u2502 tutorial                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Getting the first two rows from database names:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES LIMIT 2\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 _temporary_and_external_tables \u2502\n\u2502 default                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/database/#query-language-create-database"},"CREATE DATABASE"))),(0,l.kt)("h2",{id:"show-processlist"},"SHOW PROCESSLIST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW PROCESSLIST [INTO OUTFILE filename] [FORMAT format]\n")),(0,l.kt)("p",null,"Outputs the content of the ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/processes#system_tables-processes"},"system.processes")," table, that contains a list of queries that is being processed at the moment, excepting ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW PROCESSLIST")," queries."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT * FROM system.processes")," query returns data about all the current queries."),(0,l.kt)("p",null,"Tip (execute in the console):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ watch -n1 \"clickhouse-client --query='SHOW PROCESSLIST'\"\n")),(0,l.kt)("h2",{id:"show-tables"},"SHOW TABLES"),(0,l.kt)("p",null,"Displays a list of tables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [TEMPORARY] TABLES [{FROM | IN} <db>] [LIKE | ILIKE | NOT LIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE <filename>] [FORMAT <format>]\n")),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," clause is not specified, the query returns the list of tables from the current database."),(0,l.kt)("p",null,"This statement is identical to the query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM system.tables [WHERE name LIKE | ILIKE | NOT LIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE <filename>] [FORMAT <format>]\n")),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("p",null,"Getting table names, containing the symbols sequence 'user' in their names:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM system LIKE '%user%'\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 user_directories \u2502\n\u2502 users            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Getting table names, containing sequence 'user' in their names, in the case insensitive manner:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM system ILIKE '%USER%'\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 user_directories \u2502\n\u2502 users            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Getting table names, not containing the symbol sequence 's' in their names:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM system NOT LIKE '%s%'\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 metric_log   \u2502\n\u2502 metric_log_0 \u2502\n\u2502 metric_log_1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Getting the first two rows from table names:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM system LIMIT 2\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aggregate_function_combinators \u2502\n\u2502 asynchronous_metric_log        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"see-also-1"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/getting-started/tutorial/#create-tables"},"Create Tables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/show/#show-create-table"},"SHOW CREATE TABLE"))),(0,l.kt)("h2",{id:"show-dictionaries"},"SHOW DICTIONARIES"),(0,l.kt)("p",null,"Displays a list of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"external dictionaries"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DICTIONARIES [FROM <db>] [LIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE <filename>] [FORMAT <format>]\n")),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," clause is not specified, the query returns the list of dictionaries from the current database."),(0,l.kt)("p",null,"You can get the same results as the ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW DICTIONARIES")," query in the following way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM system.dictionaries WHERE database = <db> [AND name LIKE <pattern>] [LIMIT <N>] [INTO OUTFILE <filename>] [FORMAT <format>]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"The following query selects the first two rows from the list of tables in the ",(0,l.kt)("inlineCode",{parentName:"p"},"system")," database, whose names contain ",(0,l.kt)("inlineCode",{parentName:"p"},"reg"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DICTIONARIES FROM db LIKE '%reg%' LIMIT 2\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 regions      \u2502\n\u2502 region_names \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"show-grants"},"SHOW GRANTS"),(0,l.kt)("p",null,"Shows privileges for a user."),(0,l.kt)("h3",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS [FOR user1 [, user2 ...]]\n")),(0,l.kt)("p",null,"If user is not specified, the query returns privileges for the current user."),(0,l.kt)("h2",{id:"show-create-user"},"SHOW CREATE USER"),(0,l.kt)("p",null,"Shows parameters that were used at a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/create/user"},"user creation"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SHOW CREATE USER")," does not output user passwords."),(0,l.kt)("h3",{id:"syntax-1"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE USER [name1 [, name2 ...] | CURRENT_USER]\n")),(0,l.kt)("h2",{id:"show-create-role"},"SHOW CREATE ROLE"),(0,l.kt)("p",null,"Shows parameters that were used at a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/create/role"},"role creation"),"."),(0,l.kt)("h3",{id:"syntax-2"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE ROLE name1 [, name2 ...]\n")),(0,l.kt)("h2",{id:"show-create-row-policy"},"SHOW CREATE ROW POLICY"),(0,l.kt)("p",null,"Shows parameters that were used at a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/create/row-policy"},"row policy creation"),"."),(0,l.kt)("h3",{id:"syntax-3"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE [ROW] POLICY name ON [database1.]table1 [, [database2.]table2 ...]\n")),(0,l.kt)("h2",{id:"show-create-quota"},"SHOW CREATE QUOTA"),(0,l.kt)("p",null,"Shows parameters that were used at a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/create/quota"},"quota creation"),"."),(0,l.kt)("h3",{id:"syntax-4"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE QUOTA [name1 [, name2 ...] | CURRENT]\n")),(0,l.kt)("h2",{id:"show-create-settings-profile"},"SHOW CREATE SETTINGS PROFILE"),(0,l.kt)("p",null,"Shows parameters that were used at a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/create/settings-profile"},"settings profile creation"),"."),(0,l.kt)("h3",{id:"syntax-5"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE [SETTINGS] PROFILE name1 [, name2 ...]\n")),(0,l.kt)("h2",{id:"show-users"},"SHOW USERS"),(0,l.kt)("p",null,"Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/access-rights#user-account-management"},"user account")," names. To view user accounts parameters, see the system table ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/users#system_tables-users"},"system.users"),"."),(0,l.kt)("h3",{id:"syntax-6"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW USERS\n")),(0,l.kt)("h2",{id:"show-roles"},"SHOW ROLES"),(0,l.kt)("p",null,"Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/access-rights#role-management"},"roles"),". To view another parameters, see system tables ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/roles#system_tables-roles"},"system.roles")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/role-grants#system_tables-role_grants"},"system.role-grants"),"."),(0,l.kt)("h3",{id:"syntax-7"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [CURRENT|ENABLED] ROLES\n")),(0,l.kt)("h2",{id:"show-profiles"},"SHOW PROFILES"),(0,l.kt)("p",null,"Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/access-rights#settings-profiles-management"},"setting profiles"),". To view user accounts parameters, see the system table ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/settings_profiles#system_tables-settings_profiles"},"settings_profiles"),"."),(0,l.kt)("h3",{id:"syntax-8"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [SETTINGS] PROFILES\n")),(0,l.kt)("h2",{id:"show-policies"},"SHOW POLICIES"),(0,l.kt)("p",null,"Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/access-rights#row-policy-management"},"row policies")," for the specified table. To view user accounts parameters, see the system table ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/row_policies#system_tables-row_policies"},"system.row_policies"),"."),(0,l.kt)("h3",{id:"syntax-9"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [ROW] POLICIES [ON [db.]table]\n")),(0,l.kt)("h2",{id:"show-quotas"},"SHOW QUOTAS"),(0,l.kt)("p",null,"Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/access-rights#quotas-management"},"quotas"),". To view quotas parameters, see the system table ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/quotas#system_tables-quotas"},"system.quotas"),"."),(0,l.kt)("h3",{id:"syntax-10"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW QUOTAS\n")),(0,l.kt)("h2",{id:"show-quota"},"SHOW QUOTA"),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/quotas"},"quota")," consumption for all users or for current user. To view another parameters, see system tables ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/quotas_usage#system_tables-quotas_usage"},"system.quotas_usage")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/quota_usage#system_tables-quota_usage"},"system.quota_usage"),"."),(0,l.kt)("h3",{id:"syntax-11"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [CURRENT] QUOTA\n")),(0,l.kt)("h2",{id:"show-access"},"SHOW ACCESS"),(0,l.kt)("p",null,"Shows all ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/access-rights#user-account-management"},"users"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/access-rights#role-management"},"roles"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/access-rights#settings-profiles-management"},"profiles"),", etc. and all their ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/grant#grant-privileges"},"grants"),"."),(0,l.kt)("h3",{id:"syntax-12"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ACCESS\n")),(0,l.kt)("h2",{id:"show-clusters"},"SHOW CLUSTER(s)"),(0,l.kt)("p",null,"Returns a list of clusters. All available clusters are listed in the ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/clusters"},"system.clusters")," table."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"SHOW CLUSTER name")," query displays the contents of system.clusters table for this cluster."))),(0,l.kt)("h3",{id:"syntax-13"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CLUSTER '<name>'\nSHOW CLUSTERS [LIKE|NOT LIKE '<pattern>'] [LIMIT <N>]\n")),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CLUSTERS;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cluster\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 test_cluster_two_shards                      \u2502\n\u2502 test_cluster_two_shards_internal_replication \u2502\n\u2502 test_cluster_two_shards_localhost            \u2502\n\u2502 test_shard_localhost                         \u2502\n\u2502 test_shard_localhost_secure                  \u2502\n\u2502 test_unavailable_shard                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CLUSTERS LIKE 'test%' LIMIT 1;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cluster\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 test_cluster_two_shards \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CLUSTER 'test_shard_localhost' FORMAT Vertical;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncluster:                 test_shard_localhost\nshard_num:               1\nshard_weight:            1\nreplica_num:             1\nhost_name:               localhost\nhost_address:            127.0.0.1\nport:                    9000\nis_local:                1\nuser:                    default\ndefault_database:\nerrors_count:            0\nestimated_recovery_time: 0\n")),(0,l.kt)("h2",{id:"show-settings"},"SHOW SETTINGS"),(0,l.kt)("p",null,"Returns a list of system settings and their values. Selects data from the ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/settings"},"system.settings")," table."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [CHANGED] SETTINGS LIKE|ILIKE <name>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Clauses")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LIKE|ILIKE")," allow to specify a matching pattern for the setting name. It can contain globs such as ",(0,l.kt)("inlineCode",{parentName:"p"},"%")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"_"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")," clause is case-sensitive, ",(0,l.kt)("inlineCode",{parentName:"p"},"ILIKE")," \u2014 case insensitive."),(0,l.kt)("p",null,"When the ",(0,l.kt)("inlineCode",{parentName:"p"},"CHANGED")," clause is used, the query returns only settings changed from their default values."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query with the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")," clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW SETTINGS LIKE 'send_timeout';\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 send_timeout \u2502 Seconds \u2502 300   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query with the ",(0,l.kt)("inlineCode",{parentName:"p"},"ILIKE")," clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW SETTINGS ILIKE '%CONNECT_timeout%'\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 connect_timeout                         \u2502 Seconds      \u2502 10    \u2502\n\u2502 connect_timeout_with_failover_ms        \u2502 Milliseconds \u2502 50    \u2502\n\u2502 connect_timeout_with_failover_secure_ms \u2502 Milliseconds \u2502 100   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query with the ",(0,l.kt)("inlineCode",{parentName:"p"},"CHANGED")," clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CHANGED SETTINGS ILIKE '%MEMORY%'\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u252c\u2500value\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 max_memory_usage \u2502 UInt64 \u2502 10000000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/operations/system-tables/settings"},"system.settings")," table")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/show/"},"Original article")," "))}d.isMDXComponent=!0}}]);