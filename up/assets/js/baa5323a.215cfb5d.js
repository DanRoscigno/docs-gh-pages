"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73198],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],u={},o="distributed_ddl_queue",l={unversionedId:"en/operations/system-tables/distributed_ddl_queue",id:"en/operations/system-tables/distributed_ddl_queue",title:"distributed_ddl_queue",description:"Contains information about distributed ddl queries (ON CLUSTER clause) that were executed on a cluster.",source:"@site/docs/en/operations/system-tables/distributed_ddl_queue.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/distributed_ddl_queue",permalink:"/docs-gh-pages/up/en/operations/system-tables/distributed_ddl_queue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/distributed_ddl_queue.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"disks",permalink:"/docs-gh-pages/up/en/operations/system-tables/disks"},next:{title:"distribution_queue",permalink:"/docs-gh-pages/up/en/operations/system-tables/distribution_queue"}},p={},d=[],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributed_ddl_queue"},"distributed_ddl_queue"),(0,i.kt)("p",null,"Contains information about ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/distributed-ddl"},"distributed ddl queries (ON CLUSTER clause)")," that were executed on a cluster."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entry")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 Query id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 Hostname."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_address")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 IP address that the Hostname resolves to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 Host Port."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Status of the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 Cluster name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 Query executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initiator")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 Node that executed the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_start_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Query start time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_finish_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Query finish time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_duration_ms")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Duration of query execution (in milliseconds)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception_code")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Exception code from ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/operations/tips#zookeeper"},"ClickHouse Keeper"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.distributed_ddl_queue\nWHERE cluster = 'test_cluster'\nLIMIT 2\nFORMAT Vertical\n\nQuery id: f544e72a-6641-43f1-836b-24baa1c9632a\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nentry:             query-0000000000\nhost_name:         clickhouse01\nhost_address:      172.23.0.11\nport:              9000\nstatus:            Finished\ncluster:           test_cluster\nquery:             CREATE DATABASE test_db UUID '4a82697e-c85e-4e5b-a01e-a36f2a758456' ON CLUSTER test_cluster\ninitiator:         clickhouse01:9000\nquery_start_time:  2020-12-30 13:07:51\nquery_finish_time: 2020-12-30 13:07:51\nquery_duration_ms: 6\nexception_code:    ZOK\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\nentry:             query-0000000000\nhost_name:         clickhouse02\nhost_address:      172.23.0.12\nport:              9000\nstatus:            Finished\ncluster:           test_cluster\nquery:             CREATE DATABASE test_db UUID '4a82697e-c85e-4e5b-a01e-a36f2a758456' ON CLUSTER test_cluster\ninitiator:         clickhouse01:9000\nquery_start_time:  2020-12-30 13:07:51\nquery_finish_time: 2020-12-30 13:07:51\nquery_duration_ms: 6\nexception_code:    ZOK\n\n2 rows in set. Elapsed: 0.025 sec.\n")))}m.isMDXComponent=!0}}]);