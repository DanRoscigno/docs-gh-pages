"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98846],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,k=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},35655:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],s={sidebar_label:"Creating unique ClickHouse Keeper entries",sidebar_position:20},o="Configuring ClickHouse Keeper with unique paths",u={unversionedId:"en/guides/sre/keeper/clickhouse-keeper-uuid",id:"en/guides/sre/keeper/clickhouse-keeper-uuid",title:"Configuring ClickHouse Keeper with unique paths",description:"Description",source:"@site/docs/en/guides/sre/keeper/clickhouse-keeper-uuid.md",sourceDirName:"en/guides/sre/keeper",slug:"/en/guides/sre/keeper/clickhouse-keeper-uuid",permalink:"/docs-gh-pages/nytaxi/en/guides/sre/keeper/clickhouse-keeper-uuid",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/sre/keeper/clickhouse-keeper-uuid.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Creating unique ClickHouse Keeper entries",sidebar_position:20},sidebar:"english",previous:{title:"Configuring ClickHouse Keeper",permalink:"/docs-gh-pages/nytaxi/en/guides/sre/keeper/clickhouse-keeper"},next:{title:"User and role management",permalink:"/docs-gh-pages/nytaxi/en/guides/sre/user-role"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Example Environment",id:"example-environment",level:2},{value:"Procedures to set up tables to use {uuid}",id:"procedures-to-set-up-tables-to-use-uuid",level:2},{value:"Testing",id:"testing",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-clickhouse-keeper-with-unique-paths"},"Configuring ClickHouse Keeper with unique paths"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This article describes how to use the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"{uuid}")," macro setting\nto create unique entries in ClickHouse Keeper or ZooKeeper. Unique\npaths helps when creating and dropping tables frequently because\nthis avoids having to wait several minutes for Keeper garbage collection\nto remove path entries as each time a path is created a new ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," is used\nin that path; paths are never reused."),(0,i.kt)("h2",{id:"example-environment"},"Example Environment"),(0,i.kt)("p",null,"A three node cluster that will be configured to have ClickHouse Keeper\non all three nodes, and ClickHouse on two of the nodes. This provides\nClickHouse Keeper with three nodes (including a tiebreaker node), and\na single ClickHouse shard made up of two replicas."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"node"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chnode1.marsnet.local"),(0,i.kt)("td",{parentName:"tr",align:null},"data node - cluster cluster_1S_2R")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chnode2.marsnet.local"),(0,i.kt)("td",{parentName:"tr",align:null},"data node - cluster cluster_1S_2R")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chnode3.marsnet.local"),(0,i.kt)("td",{parentName:"tr",align:null},"ClickHouse Keeper tie breaker node")))),(0,i.kt)("p",null,"example config for cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <remote_servers>\n        <cluster_1S_2R>\n            <shard>\n                <replica>\n                    <host>chnode1.marsnet.local</host>\n                    <port>9440</port>\n                    <user>default</user>\n                    <password>ClickHouse123!</password>\n                    <secure>1</secure>\n                </replica>\n                <replica>\n                    <host>chnode2.marsnet.local</host>\n                    <port>9440</port>\n                    <user>default</user>\n                    <password>ClickHouse123!</password>\n                    <secure>1</secure>\n                </replica>\n            </shard>\n        </cluster_1S_2R>\n    </remote_servers>\n")),(0,i.kt)("h2",{id:"procedures-to-set-up-tables-to-use-uuid"},"Procedures to set up tables to use {uuid}"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure Macros on each server\nexample for server 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <macros>\n        <shard>1</shard>\n        <replica>replica_1</replica>\n    </macros>\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice that we define macros for ",(0,i.kt)("inlineCode",{parentName:"p"},"shard")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"replica"),", but that ",(0,i.kt)("inlineCode",{parentName:"p"},"{uuid}")," is not defined here, it is built-in and there is no need to define."))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a Database")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_uuid \n      ON CLUSTER 'cluster_1S_2R'\n      ENGINE Atomic;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"CREATE DATABASE db_uuid ON CLUSTER cluster_1S_2R\nENGINE = Atomic\n\nQuery id: 07fb7e65-beb4-4c30-b3ef-bd303e5c42b5\n\n\u250c\u2500host\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500port\u2500\u252c\u2500status\u2500\u252c\u2500error\u2500\u252c\u2500num_hosts_remaining\u2500\u252c\u2500num_hosts_active\u2500\u2510\n\u2502 chnode2.marsnet.local \u2502 9440 \u2502      0 \u2502       \u2502                   1 \u2502                0 \u2502\n\u2502 chnode1.marsnet.local \u2502 9440 \u2502      0 \u2502       \u2502                   0 \u2502                0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a table on the cluster using the macros and ",(0,i.kt)("inlineCode",{parentName:"li"},"{uuid}"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db_uuid.uuid_table1 ON CLUSTER 'cluster_1S_2R'\n   (\n     id UInt64,\n     column1 String\n   )\n   ENGINE = ReplicatedMergeTree('/clickhouse/tables/{shard}/db_uuid/{uuid}', '{replica}' )\n   ORDER BY (id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"CREATE TABLE db_uuid.uuid_table1 ON CLUSTER cluster_1S_2R\n(\n    `id` UInt64,\n    `column1` String\n)\nENGINE = ReplicatedMergeTree('/clickhouse/tables/{shard}/db_uuid/{uuid}', '{replica}')\nORDER BY id\n\nQuery id: 8f542664-4548-4a02-bd2a-6f2c973d0dc4\n\n\u250c\u2500host\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500port\u2500\u252c\u2500status\u2500\u252c\u2500error\u2500\u252c\u2500num_hosts_remaining\u2500\u252c\u2500num_hosts_active\u2500\u2510\n\u2502 chnode1.marsnet.local \u2502 9440 \u2502      0 \u2502       \u2502                   1 \u2502                0 \u2502\n\u2502 chnode2.marsnet.local \u2502 9440 \u2502      0 \u2502       \u2502                   0 \u2502                0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create a distributed table")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table db_uuid.dist_uuid_table1 on cluster 'cluster_1S_2R'\n   (\n     id UInt64,\n     column1 String\n   )\n   ENGINE = Distributed('cluster_1S_2R', 'db_uuid', 'uuid_table1' );\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"CREATE TABLE db_uuid.dist_uuid_table1 ON CLUSTER cluster_1S_2R\n(\n    `id` UInt64,\n    `column1` String\n)\nENGINE = Distributed('cluster_1S_2R', 'db_uuid', 'uuid_table1')\n\nQuery id: 3bc7f339-ab74-4c7d-a752-1ffe54219c0e\n\n\u250c\u2500host\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500port\u2500\u252c\u2500status\u2500\u252c\u2500error\u2500\u252c\u2500num_hosts_remaining\u2500\u252c\u2500num_hosts_active\u2500\u2510\n\u2502 chnode2.marsnet.local \u2502 9440 \u2502      0 \u2502       \u2502                   1 \u2502                0 \u2502\n\u2502 chnode1.marsnet.local \u2502 9440 \u2502      0 \u2502       \u2502                   0 \u2502                0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Insert data into first node (e.g ",(0,i.kt)("inlineCode",{parentName:"li"},"chnode1"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db_uuid.uuid_table1\n   ( id, column1)\n   VALUES\n   ( 1, 'abc');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"INSERT INTO db_uuid.uuid_table1 (id, column1) FORMAT Values\n\nQuery id: 0f178db7-50a6-48e2-9a1b-52ed14e6e0f9\n\nOk.\n\n1 row in set. Elapsed: 0.033 sec.\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Insert data into second node (e.g ",(0,i.kt)("inlineCode",{parentName:"li"},"chnode2"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db_uuid.uuid_table1\n   ( id, column1)\n   VALUES\n   ( 2, 'def');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"INSERT INTO db_uuid.uuid_table1 (id, column1) FORMAT Values\n\nQuery id: edc6f999-3e7d-40a0-8a29-3137e97e3607\n\nOk.\n\n1 row in set. Elapsed: 0.529 sec.\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"View records using distributed table")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM db_uuid.dist_uuid_table1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"SELECT *\nFROM db_uuid.dist_uuid_table1\n\nQuery id: 6cbab449-9e7f-40fe-b8c2-62d46ba9f5c8\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n2 rows in set. Elapsed: 0.007 sec.\n")),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"The default replication path can be defined before hand by macros and using also ",(0,i.kt)("inlineCode",{parentName:"p"},"{uuid}")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set default for tables on each node")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<default_replica_path>/clickhouse/tables/{shard}/db_uuid/{uuid}</default_replica_path>\n<default_replica_name>{replica}</default_replica_name>\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also define a macro ",(0,i.kt)("inlineCode",{parentName:"p"},"{database}")," on each node if nodes are used for certain databases."))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create table without explicit parameters:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db_uuid.uuid_table1 ON CLUSTER 'cluster_1S_2R'\n   (\n     id UInt64,\n     column1 String\n   )\n   ENGINE = ReplicatedMergeTree\n   ORDER BY (id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"CREATE TABLE db_uuid.uuid_table1 ON CLUSTER cluster_1S_2R\n(\n    `id` UInt64,\n    `column1` String\n)\nENGINE = ReplicatedMergeTree\nORDER BY id\n\nQuery id: ab68cda9-ae41-4d6d-8d3b-20d8255774ee\n\n\u250c\u2500host\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500port\u2500\u252c\u2500status\u2500\u252c\u2500error\u2500\u252c\u2500num_hosts_remaining\u2500\u252c\u2500num_hosts_active\u2500\u2510\n\u2502 chnode2.marsnet.local \u2502 9440 \u2502      0 \u2502       \u2502                   1 \u2502                0 \u2502\n\u2502 chnode1.marsnet.local \u2502 9440 \u2502      0 \u2502       \u2502                   0 \u2502                0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n2 rows in set. Elapsed: 1.175 sec.\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Verify it used the settings used in default config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE db_uuid.uuid_table1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"SHOW CREATE TABLE db_uuid.uuid_table1\n\nQuery id: 5925ecce-a54f-47d8-9c3a-ad3257840c9e\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE db_uuid.uuid_table1\n(\n    `id` UInt64,\n    `column1` String\n)\nENGINE = ReplicatedMergeTree('/clickhouse/tables/{shard}/db_uuid/{uuid}', '{replica}')\nORDER BY id\nSETTINGS index_granularity = 8192 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 0.003 sec.\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Example command to get table information and UUID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.tables \nWHERE database = 'db_uuid' AND name = 'uuid_table1';\n")),(0,i.kt)("p",null,"Example command to get information about the table in zookeeper with UUID for the table above"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.zookeeper \nWHERE path = '/clickhouse/tables/1/db_uuid/9e8a3cc2-0dec-4438-81a7-c3e63ce2a1cf/replicas';\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Database must be ",(0,i.kt)("inlineCode",{parentName:"p"},"Atomic"),", if upgrading from a previous version, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"default")," database is likely of ",(0,i.kt)("inlineCode",{parentName:"p"},"Ordinary")," type."))),(0,i.kt)("p",null,"To check:\nFor example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT name, engine FROM system.databases WHERE name = 'db_uuid';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"SELECT\n    name,\n    engine\nFROM system.databases\nWHERE name = 'db_uuid'\n\nQuery id: b047d459-a1d2-4016-bcf9-3e97e30e49c2\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u252c\u2500engine\u2500\u2510\n\u2502 db_uuid \u2502 Atomic \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 0.004 sec.\n")))}m.isMDXComponent=!0}}]);