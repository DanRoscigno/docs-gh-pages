"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16484],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43890:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={sidebar_position:42,sidebar_label:"QUOTA"},u="CREATE QUOTA",l={unversionedId:"en/sql-reference/statements/create/quota",id:"en/sql-reference/statements/create/quota",title:"CREATE QUOTA",description:"Creates a quota that can be assigned to a user or a role.",source:"@site/docs/en/sql-reference/statements/create/quota.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/quota",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/quota",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/quota.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,sidebar_label:"QUOTA"},sidebar:"english",previous:{title:"ROW POLICY",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/row-policy"},next:{title:"SETTINGS PROFILE",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/settings-profile"}},c={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-quota"},"CREATE QUOTA"),(0,s.kt)("p",null,"Creates a ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/access-rights#quotas-management"},"quota")," that can be assigned to a user or a role."),(0,s.kt)("p",null,"Syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE QUOTA [IF NOT EXISTS | OR REPLACE] name [ON CLUSTER cluster_name]\n    [KEYED BY {user_name | ip_address | client_key | client_key,user_name | client_key,ip_address} | NOT KEYED]\n    [FOR [RANDOMIZED] INTERVAL number {second | minute | hour | day | week | month | quarter | year}\n        {MAX { {queries | query_selects | query_inserts | errors | result_rows | result_bytes | read_rows | read_bytes | execution_time} = number } [,...] |\n         NO LIMITS | TRACKING ONLY} [,...]]\n    [TO {role [,...] | ALL | ALL EXCEPT role [,...]}]\n")),(0,s.kt)("p",null,"Keys ",(0,s.kt)("inlineCode",{parentName:"p"},"user_name"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ip_address"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"client_key"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"client_key, user_name")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"client_key, ip_address")," correspond to the fields in the ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/quotas"},"system.quotas")," table."),(0,s.kt)("p",null,"Parameters ",(0,s.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"query_selects"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"query_inserts"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"errors"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"result_rows"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"result_bytes"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"read_rows"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"read_bytes"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"execution_time")," correspond to the fields in the ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/system-tables/quotas_usage"},"system.quotas_usage")," table."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause allows creating quotas on a cluster, see ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/distributed-ddl"},"Distributed DDL"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Limit the maximum number of queries for the current user with 123 queries in 15 months constraint:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE QUOTA qA FOR INTERVAL 15 month MAX queries = 123 TO CURRENT_USER;\n")),(0,s.kt)("p",null,"For the default user limit the maximum execution time with half a second in 30 minutes, and limit the maximum number of queries with 321 and the maximum number of errors with 10 in 5 quaters:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE QUOTA qB FOR INTERVAL 30 minute MAX execution_time = 0.5, FOR INTERVAL 5 quarter MAX queries = 321, errors = 10 TO default;\n")))}d.isMDXComponent=!0}}]);