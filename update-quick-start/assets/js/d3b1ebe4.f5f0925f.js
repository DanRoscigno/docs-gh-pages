"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[44194],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25449:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={},p="distribution_queue",l={unversionedId:"en/operations/system-tables/distribution_queue",id:"en/operations/system-tables/distribution_queue",title:"distribution_queue",description:"Contains information about local files that are in the queue to be sent to the shards. These local files contain new parts that are created by inserting new data into the Distributed table in asynchronous mode.",source:"@site/docs/en/operations/system-tables/distribution_queue.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/distribution_queue",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/distribution_queue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/distribution_queue.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"distributed_ddl_queue",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/distributed_ddl_queue"},next:{title:"enabled_roles",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/enabled-roles"}},u={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distribution_queue"},"distribution_queue"),(0,i.kt)("p",null,"Contains information about local files that are in the queue to be sent to the shards. These local files contain new parts that are created by inserting new data into the Distributed table in asynchronous mode."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_path")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 Path to the folder with local files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"is_blocked")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag indicates whether sending local files to the server is blocked.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"error_count")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Number of errors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_files")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Number of local files in a folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Size of compressed data in local files, in bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"broken_data_files")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Number of files that has been marked as broken (due to an error).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"broken_data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Size of compressed data in broken files, in bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"last_exception")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 Text message about the last error that occurred (if any)."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.distribution_queue LIMIT 1 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:              default\ntable:                 dist\ndata_path:             ./store/268/268bc070-3aad-4b1a-9cf2-4987580161af/default@127%2E0%2E0%2E2:9000/\nis_blocked:            1\nerror_count:           0\ndata_files:            1\ndata_compressed_bytes: 499\nlast_exception:\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/special/distributed"},"Distributed table engine"))))}m.isMDXComponent=!0}}]);