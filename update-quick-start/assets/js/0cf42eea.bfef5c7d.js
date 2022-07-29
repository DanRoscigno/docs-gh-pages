"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[63126],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:41,sidebar_label:"ROW POLICY"},s="CREATE ROW POLICY",p={unversionedId:"en/sql-reference/statements/create/row-policy",id:"en/sql-reference/statements/create/row-policy",title:"CREATE ROW POLICY",description:"Creates a row policy, i.e. a filter used to determine which rows a user can read from a table.",source:"@site/docs/en/sql-reference/statements/create/row-policy.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/row-policy",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/row-policy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/row-policy.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"ROW POLICY"},sidebar:"english",previous:{title:"ROLE",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/role"},next:{title:"QUOTA",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/quota"}},c={},d=[{value:"USING Clause",id:"using-clause",level:2},{value:"TO Clause",id:"to-clause",level:2},{value:"AS Clause",id:"as-clause",level:2},{value:"ON CLUSTER Clause",id:"on-cluster-clause",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-row-policy"},"CREATE ROW POLICY"),(0,o.kt)("p",null,"Creates a ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/access-rights#row-policy-management"},"row policy"),", i.e. a filter used to determine which rows a user can read from a table."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Row policies makes sense only for users with readonly access. If user can modify table or copy partitions between tables, it defeats the restrictions of row policies."))),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE [ROW] POLICY [IF NOT EXISTS | OR REPLACE] policy_name1 [ON CLUSTER cluster_name1] ON [db1.]table1\n        [, policy_name2 [ON CLUSTER cluster_name2] ON [db2.]table2 ...]\n    [FOR SELECT] USING condition\n    [AS {PERMISSIVE | RESTRICTIVE}]\n    [TO {role1 [, role2 ...] | ALL | ALL EXCEPT role1 [, role2 ...]}]\n")),(0,o.kt)("h2",{id:"using-clause"},"USING Clause"),(0,o.kt)("p",null,"Allows to specify a condition to filter rows. An user will see a row if the condition is calculated to non-zero for the row."),(0,o.kt)("h2",{id:"to-clause"},"TO Clause"),(0,o.kt)("p",null,"In the section ",(0,o.kt)("inlineCode",{parentName:"p"},"TO")," you can provide a list of users and roles this policy should work for. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY ... TO accountant, john@localhost"),"."),(0,o.kt)("p",null,"Keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL")," means all the ClickHouse users including current user. Keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL EXCEPT")," allow to exclude some users from the all users list, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY ... TO ALL EXCEPT accountant, john@localhost")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If there are no row policies defined for a table then any user can ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," all the row from the table. Defining one or more row policies for the table makes the access to the table depending on the row policies no matter if those row policies are defined for the current user or not. For example, the following policy"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY pol1 ON mydb.table1 USING b=1 TO mira, peter")),(0,o.kt)("p",{parentName:"div"},"forbids the users ",(0,o.kt)("inlineCode",{parentName:"p"},"mira")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"peter")," to see the rows with ",(0,o.kt)("inlineCode",{parentName:"p"},"b != 1"),", and any non-mentioned user (e.g., the user ",(0,o.kt)("inlineCode",{parentName:"p"},"paul"),") will see no rows from ",(0,o.kt)("inlineCode",{parentName:"p"},"mydb.table1")," at all."),(0,o.kt)("p",{parentName:"div"},"If that's not desirable it can't be fixed by adding one more row policy, like the following:"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY pol2 ON mydb.table1 USING 1 TO ALL EXCEPT mira, peter")))),(0,o.kt)("h2",{id:"as-clause"},"AS Clause"),(0,o.kt)("p",null,"It's allowed to have more than one policy enabled on the same table for the same user at the one time. So we need a way to combine the conditions from multiple policies."),(0,o.kt)("p",null,"By default policies are combined using the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," operator. For example, the following policies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY pol1 ON mydb.table1 USING b=1 TO mira, peter\nCREATE ROW POLICY pol2 ON mydb.table1 USING c=2 TO peter, antonio\n")),(0,o.kt)("p",null,"enables the user ",(0,o.kt)("inlineCode",{parentName:"p"},"peter")," to see rows with either ",(0,o.kt)("inlineCode",{parentName:"p"},"b=1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"c=2"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AS")," clause specifies how policies should be combined with other policies. Policies can be either permissive or restrictive. By default policies are permissive, which means they are combined using the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," operator."),(0,o.kt)("p",null,"A policy can be defined as restrictive as an alternative. Restrictive policies are combined using the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," operator."),(0,o.kt)("p",null,"Here is the general formula:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"row_is_visible = (one or more of the permissive policies' conditions are non-zero) AND\n                 (all of the restrictive policies's conditions are non-zero)\n")),(0,o.kt)("p",null,"For example, the following policies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY pol1 ON mydb.table1 USING b=1 TO mira, peter\nCREATE ROW POLICY pol2 ON mydb.table1 USING c=2 AS RESTRICTIVE TO peter, antonio\n")),(0,o.kt)("p",null,"enables the user ",(0,o.kt)("inlineCode",{parentName:"p"},"peter")," to see rows only if both ",(0,o.kt)("inlineCode",{parentName:"p"},"b=1")," AND ",(0,o.kt)("inlineCode",{parentName:"p"},"c=2"),"."),(0,o.kt)("h2",{id:"on-cluster-clause"},"ON CLUSTER Clause"),(0,o.kt)("p",null,"Allows creating row policies on a cluster, see ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/distributed-ddl"},"Distributed DDL"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY filter1 ON mydb.mytable USING a<1000 TO accountant, john@localhost")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY filter2 ON mydb.mytable USING a<1000 AND b=5 TO ALL EXCEPT mira")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY filter3 ON mydb.mytable USING 1 TO admin")))}u.isMDXComponent=!0}}]);