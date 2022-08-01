"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[95606],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,N=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return t?a.createElement(N,s(s({ref:n},m),{},{components:t})):a.createElement(N,s({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23506:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),s=["components"],i={sidebar_label:"ALTER permissions"},o="ALTER permissions",p={unversionedId:"en/guides/sre/user-management/alter-permissions",id:"en/guides/sre/user-management/alter-permissions",title:"ALTER permissions",description:"This article is intended to provide you with a better understanding of how to define permissions, and how permissions work when using ALTER statements for privileged users.",source:"@site/docs/en/guides/sre/user-management/alter-permissions.md",sourceDirName:"en/guides/sre/user-management",slug:"/en/guides/sre/user-management/alter-permissions",permalink:"/docs-gh-pages/update-quick-start/en/guides/sre/user-management/alter-permissions",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/sre/user-management/alter-permissions.md",tags:[],version:"current",frontMatter:{sidebar_label:"ALTER permissions"},sidebar:"english",previous:{title:"Access Control and Account Management",permalink:"/docs-gh-pages/update-quick-start/en/guides/sre/user-management/access-rights"},next:{title:"Configuring SSL-TLS",permalink:"/docs-gh-pages/update-quick-start/en/guides/sre/configuring-ssl"}},m={},u=[],d={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alter-permissions"},"ALTER permissions"),(0,l.kt)("p",null,"This article is intended to provide you with a better understanding of how to define permissions, and how permissions work when using ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," statements for privileged users."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," statements are divided into several categories, some of which are hierarchical and some of which are not and must be explicitly defined."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example DB, table and user configuration")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"With an admin user, create a sample user")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_user IDENTIFIED WITH plaintext_password BY 'password';\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Create sample database")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE my_db;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Create a sample table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE my_db.my_table (id UInt64, column1 String) ENGINE = MergeTree() ORDER BY id;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Create a sample admin user to grant/revoke privileges")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_alter_admin IDENTIFIED WITH plaintext_password BY 'password';\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To grant or revoke permissions, the admin user must have the ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION")," privilege.\nFor example: "),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALTER ON my_db.* WITH GRANT OPTION\n")),(0,l.kt)("p",{parentName:"div"},"In order to GRANT or REVOKE privileges the user must have those privileges themselves first."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Granting or Revoking Privileges")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," hierarchy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 ALTER (only for table and view)/\n\u2502   \u251c\u2500\u2500 ALTER TABLE/\n\u2502   \u2502   \u251c\u2500\u2500 ALTER UPDATE\n\u2502   \u2502   \u251c\u2500\u2500 ALTER DELETE\n\u2502   \u2502   \u251c\u2500\u2500 ALTER COLUMN/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER ADD COLUMN\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER DROP COLUMN\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER MODIFY COLUMN\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER COMMENT COLUMN\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER CLEAR COLUMN\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 ALTER RENAME COLUMN\n\u2502   \u2502   \u251c\u2500\u2500 ALTER INDEX/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER ORDER BY\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER SAMPLE BY\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER ADD INDEX\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER DROP INDEX\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER MATERIALIZE INDEX\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 ALTER CLEAR INDEX\n\u2502   \u2502   \u251c\u2500\u2500 ALTER CONSTRAINT/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ALTER ADD CONSTRAINT\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 ALTER DROP CONSTRAINT\n\u2502   \u2502   \u251c\u2500\u2500 ALTER TTL/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 ALTER MATERIALIZE TTL\n\u2502   \u2502   \u251c\u2500\u2500 ALTER SETTINGS\n\u2502   \u2502   \u251c\u2500\u2500 ALTER MOVE PARTITION\n\u2502   \u2502   \u251c\u2500\u2500 ALTER FETCH PARTITION\n\u2502   \u2502   \u2514\u2500\u2500 ALTER FREEZE PARTITION\n\u2502   \u2514\u2500\u2500 ALTER LIVE VIEW/\n\u2502       \u251c\u2500\u2500 ALTER LIVE VIEW REFRESH\n\u2502       \u2514\u2500\u2500 ALTER LIVE VIEW MODIFY QUERY\n\u251c\u2500\u2500 ALTER DATABASE\n\u251c\u2500\u2500 ALTER USER\n\u251c\u2500\u2500 ALTER ROLE\n\u251c\u2500\u2500 ALTER QUOTA\n\u251c\u2500\u2500 ALTER [ROW] POLICY\n\u2514\u2500\u2500 ALTER [SETTINGS] PROFILE\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Granting ",(0,l.kt)("inlineCode",{parentName:"li"},"ALTER")," Privileges to a User or Role")),(0,l.kt)("p",null,"Using an ",(0,l.kt)("inlineCode",{parentName:"p"},"GRANT ALTER on *.* TO my_user")," will only affect top-level ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER VIEW")," , other ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," statements must be individually granted or revoked."),(0,l.kt)("p",null,"for example, granting basic ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," privilege:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALTER ON my_db.my_table TO my_user;\n")),(0,l.kt)("p",null,"Resulting set of privileges:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS FOR  my_user;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"SHOW GRANTS FOR my_user\n\nQuery id: 706befbc-525e-4ec1-a1a2-ba2508cc09e3\n\n\u250c\u2500GRANTS FOR my_user\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 GRANT ALTER TABLE, ALTER VIEW ON my_db.my_table TO my_user   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"This will grant all permissions under ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER VIEW")," from the example above, however, it will not grant certain other ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," permissions such as ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER ROW POLICY")," (Refer back to the hierarchy and you will see that ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER ROW POLICY")," is not a child of ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER VIEW"),"). Those must be explicitly granted or revoked."),(0,l.kt)("p",null,"If only a subset of ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," permissions is needed then each can be granted separately, if there are sub-privileges to that permission then those would be automatically granted also."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALTER COLUMN ON my_db.my_table TO my_user;\n")),(0,l.kt)("p",null,"Grants would be set as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS FOR my_user;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"SHOW GRANTS FOR my_user\n\nQuery id: 47b3d03f-46ac-4385-91ec-41119010e4e2\n\n\u250c\u2500GRANTS FOR my_user\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 GRANT ALTER COLUMN ON default.my_table TO my_user \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 0.004 sec.\n")),(0,l.kt)("p",null,"This also gives the following sub-privileges:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER ADD COLUMN\nALTER DROP COLUMN\nALTER MODIFY COLUMN\nALTER COMMENT COLUMN\nALTER CLEAR COLUMN\nALTER RENAME COLUMN\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Revoking ",(0,l.kt)("inlineCode",{parentName:"li"},"ALTER")," privileges from Users and Roles")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"REVOKE")," statement works similarly to the ",(0,l.kt)("inlineCode",{parentName:"p"},"GRANT")," statement."),(0,l.kt)("p",null,"If a user/role was granted a sub-privilege, you may either revoke that sub-privilege directly or can revoke the next upline privilege."),(0,l.kt)("p",null,"For example, if the user was granted ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER ADD COLUMN")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALTER ADD COLUMN ON my_db.my_table TO my_user;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"GRANT ALTER ADD COLUMN ON my_db.my_table TO my_user\n\nQuery id: 61fe0fdc-1442-4cd6-b2f3-e8f2a853c739\n\nOk.\n\n0 rows in set. Elapsed: 0.002 sec.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS FOR my_user;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"SHOW GRANTS FOR my_user\n\nQuery id: 27791226-a18f-46c8-b2b4-a9e64baeb683\n\n\u250c\u2500GRANTS FOR my_user\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 GRANT ALTER ADD COLUMN ON my_db.my_table TO my_user \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"A privilege can be revoked individually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE ALTER ADD COLUMN ON my_db.my_table FROM my_user;\n")),(0,l.kt)("p",null,"Or can be revoked from any of the upper levels (revoke all of the COLUMN sub privileges):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"REVOKE ALTER COLUMN ON my_db.my_table FROM my_user;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"REVOKE ALTER COLUMN ON my_db.my_table FROM my_user\n\nQuery id: b882ba1b-90fb-45b9-b10f-3cda251e2ccc\n\nOk.\n\n0 rows in set. Elapsed: 0.002 sec.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS FOR my_user;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"SHOW GRANTS FOR my_user\n\nQuery id: e7d341de-de65-490b-852c-fa8bb8991174\n\nOk.\n\n0 rows in set. Elapsed: 0.003 sec.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Additonal"),"\nThe privileges must be granted by a user that not only has the ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION")," but also has the privileges themselves."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"To grant an admin user the privilege and also allow them to administer a set of privileges\nBelow is an example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT, ALTER COLUMN ON my_db.my_table TO my_alter_admin WITH GRANT OPTION;\n")),(0,l.kt)("p",null,"Now the user can grant or revoke ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER COLUMN")," and all sub-privileges."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Testing")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add the ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," privilege")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," GRANT SELECT ON my_db.my_table TO my_user;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Add the add column privilege to the user")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ADD COLUMN ON my_db.my_table TO my_user;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Log in with the restricted user")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --user my_user --password password --port 9000 --host <your_clickhouse_host>\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Test adding a column")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE my_db.my_table ADD COLUMN column2 String;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"ALTER TABLE my_db.my_table\n    ADD COLUMN `column2` String\n\nQuery id: d5d6bfa1-b80c-4d9f-8dcd-d13e7bd401a5\n\nOk.\n\n0 rows in set. Elapsed: 0.010 sec.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE my_db.my_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"DESCRIBE TABLE my_db.my_table\n\nQuery id: ab9cb2d0-5b1a-42e1-bc9c-c7ff351cb272\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 id      \u2502 UInt64 \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 column1 \u2502 String \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 column2 \u2502 String \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Test deleting a column")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE my_db.my_table DROP COLUMN column2;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"ALTER TABLE my_db.my_table\n    DROP COLUMN column2\n\nQuery id: 50ad5f6b-f64b-4c96-8f5f-ace87cea6c47\n\n\n0 rows in set. Elapsed: 0.004 sec.\n\nReceived exception from server (version 22.5.1):\nCode: 497. DB::Exception: Received from chnode1.marsnet.local:9440. DB::Exception: my_user: Not enough privileges. To execute this query it's necessary to have grant ALTER DROP COLUMN(column2) ON my_db.my_table. (ACCESS_DENIED)\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Testing the alter admin by granting the permission")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT, ALTER COLUMN ON my_db.my_table TO my_alter_admin WITH GRANT OPTION;\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Log in with the alter admin user")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --user my_alter_admin --password password --port 9000 --host <my_clickhouse_host>\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Grant a sub-privilege ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALTER ADD COLUMN ON my_db.my_table TO my_user;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"GRANT ALTER ADD COLUMN ON my_db.my_table TO my_user\n\nQuery id: 1c7622fa-9df1-4c54-9fc3-f984c716aeba\n\nOk.\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Test granting a privilege that the alter admin user does not have is not a sub privilege of the grants for the admin user.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALTER UPDATE ON my_db.my_table TO my_user;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"GRANT ALTER UPDATE ON my_db.my_table TO my_user\n\nQuery id: 191690dc-55a6-4625-8fee-abc3d14a5545\n\n\n0 rows in set. Elapsed: 0.004 sec.\n\nReceived exception from server (version 22.5.1):\nCode: 497. DB::Exception: Received from chnode1.marsnet.local:9440. DB::Exception: my_alter_admin: Not enough privileges. To execute this query it's necessary to have grant ALTER UPDATE ON my_db.my_table WITH GRANT OPTION. (ACCESS_DENIED)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Summary"),"\nThe ALTER privileges are hierarchical for ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," with tables and views but not for other ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," statements.  The permissions can be set in granular level or by grouping of permissions and also revoked similarly. The user granting or revoking must have ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION")," to set privileges on users, including the acting user themselves, and must have the privilege already. The acting user cannot revoke their own privileges if they do not have the grant option privilege themselves."))}c.isMDXComponent=!0}}]);