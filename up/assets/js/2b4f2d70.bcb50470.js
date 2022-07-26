"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[47359],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54967:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},p="mutations",l={unversionedId:"en/operations/system-tables/mutations",id:"en/operations/system-tables/mutations",title:"mutations",description:"The table contains information about mutations of MergeTree tables and their progress. Each mutation command is represented by a single row.",source:"@site/docs/en/operations/system-tables/mutations.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/mutations",permalink:"/docs-gh-pages/up/en/operations/system-tables/mutations",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/mutations.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"metrics",permalink:"/docs-gh-pages/up/en/operations/system-tables/metrics"},next:{title:"numbers",permalink:"/docs-gh-pages/up/en/operations/system-tables/numbers"}},m={},c=[],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mutations"},"mutations"),(0,i.kt)("p",null,"The table contains information about ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/alter/#mutations"},"mutations")," of ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," tables and their progress. Each mutation command is represented by a single row."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 The name of the database to which the mutation was applied.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 The name of the table to which the mutation was applied.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mutation_id")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 The ID of the mutation. For replicated tables these IDs correspond to znode names in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<table_path_in_clickhouse_keeper>/mutations/")," directory in ClickHouse Keeper. For non-replicated tables the IDs correspond to file names in the data directory of the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"command")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 The mutation command string (the part of the query after ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"create_time")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/datetime"},"Datetime"),") \u2014  Date and time when the mutation command was submitted for execution.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"block_numbers.partition_id")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),")) \u2014 For mutations of replicated tables, the array contains the partitions' IDs (one record for each partition). For mutations of non-replicated tables the array is empty.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"block_numbers.number")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"Int64"),")) \u2014 For mutations of replicated tables, the array contains one record for each partition, with the block number that was acquired by the mutation. Only parts that contain blocks with numbers less than this number will be mutated in the partition."),(0,i.kt)("p",{parentName:"li"},"In non-replicated tables, block numbers in all partitions form a single sequence. This means that for mutations of non-replicated tables, the column will contain one record with a single block number acquired by the mutation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parts_to_do_names")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),")) \u2014 An array of names of data parts that need to be mutated for the mutation to complete.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parts_to_do")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The number of data parts that need to be mutated for the mutation to complete.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"is_done")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 The flag whether the mutation is done or not. Possible values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," if the mutation is completed,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," if the mutation is still in process.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Even if ",(0,i.kt)("inlineCode",{parentName:"p"},"parts_to_do = 0")," it is possible that a mutation of a replicated table is not completed yet because of a long-running ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," query, that will create a new data part needed to be mutated."))),(0,i.kt)("p",null,"If there were problems with mutating some data parts, the following columns contain additional information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"latest_failed_part")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 The name of the most recent part that could not be mutated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"latest_fail_time")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/datetime"},"Datetime"),") \u2014 The date and time of the most recent part mutation failure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"latest_fail_reason")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 The exception message that caused the most recent part mutation failure."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/statements/alter/#mutations"},"Mutations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," table engine"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/engines/table-engines/mergetree-family/replication"},"ReplicatedMergeTree")," family")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/mutations"},"Original article")," "))}d.isMDXComponent=!0}}]);