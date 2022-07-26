"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[63774],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79307:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:44,sidebar_label:"odbc"},s="odbc",c={unversionedId:"en/sql-reference/table-functions/odbc",id:"en/sql-reference/table-functions/odbc",title:"odbc",description:"Returns table that is connected via ODBC.",source:"@site/docs/en/sql-reference/table-functions/odbc.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/odbc",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/odbc",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/odbc.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"odbc"},sidebar:"english",previous:{title:"jdbc",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/jdbc"},next:{title:"hdfs",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/hdfs"}},u={},p=[{value:"Usage Example",id:"usage-example",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"odbc"},"odbc"),(0,l.kt)("p",null,"Returns table that is connected via ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_Database_Connectivity"},"ODBC"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"odbc(connection_settings, external_database, external_table)\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"connection_settings")," \u2014 Name of the section with connection settings in the ",(0,l.kt)("inlineCode",{parentName:"li"},"odbc.ini")," file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"external_database")," \u2014 Name of a database in an external DBMS."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"external_table")," \u2014 Name of a table in the ",(0,l.kt)("inlineCode",{parentName:"li"},"external_database"),".")),(0,l.kt)("p",null,"To safely implement ODBC connections, ClickHouse uses a separate program ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge"),". If the ODBC driver is loaded directly from ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),", driver problems can crash the ClickHouse server. ClickHouse automatically starts ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge")," when it is required. The ODBC bridge program is installed from the same package as the ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),"."),(0,l.kt)("p",null,"The fields with the ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," values from the external table are converted into the default values for the base data type. For example, if a remote MySQL table field has the ",(0,l.kt)("inlineCode",{parentName:"p"},"INT NULL")," type it is converted to 0 (the default value for ClickHouse ",(0,l.kt)("inlineCode",{parentName:"p"},"Int32")," data type)."),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Getting data from the local MySQL installation via ODBC")),(0,l.kt)("p",null,"This example is checked for Ubuntu Linux 18.04 and MySQL server 5.7."),(0,l.kt)("p",null,"Ensure that unixODBC and MySQL Connector are installed."),(0,l.kt)("p",null,"By default (if installed from packages), ClickHouse starts as user ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse"),". Thus you need to create and configure this user in the MySQL server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo mysql\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'clickhouse'@'localhost' IDENTIFIED BY 'clickhouse';\nmysql> GRANT ALL PRIVILEGES ON *.* TO 'clickhouse'@'clickhouse' WITH GRANT OPTION;\n")),(0,l.kt)("p",null,"Then configure the connection in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/odbc.ini"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/odbc.ini\n[mysqlconn]\nDRIVER = /usr/local/lib/libmyodbc5w.so\nSERVER = 127.0.0.1\nPORT = 3306\nDATABASE = test\nUSERNAME = clickhouse\nPASSWORD = clickhouse\n")),(0,l.kt)("p",null,"You can check the connection using the ",(0,l.kt)("inlineCode",{parentName:"p"},"isql")," utility from the unixODBC installation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ isql -v mysqlconn\n+-------------------------+\n| Connected!                            |\n|                                       |\n...\n")),(0,l.kt)("p",null,"Table in MySQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+------+----------+-----+----------+\n| int_id | int_nullable | float | float_nullable |\n+------+----------+-----+----------+\n|      1 |         NULL |     2 |           NULL |\n+------+----------+-----+----------+\n1 row in set (0,00 sec)\n")),(0,l.kt)("p",null,"Retrieving data from the MySQL table in ClickHouse:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM odbc('DSN=mysqlconn', 'test', 'test')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500int_nullable\u2500\u252c\u2500float\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502            0 \u2502     2 \u2502              0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-odbc"},"ODBC external dictionaries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/engines/table-engines/integrations/odbc"},"ODBC table engine"),".")))}f.isMDXComponent=!0}}]);