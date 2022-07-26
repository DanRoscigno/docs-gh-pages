"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[63527],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},p="\u7cfb\u7edf\u3002part_log",s={unversionedId:"zh/operations/system-tables/part_log",id:"zh/operations/system-tables/part_log",title:"\u7cfb\u7edf\u3002part_log",description:"system_tables-part-log}",source:"@site/docs/zh/operations/system-tables/part_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/part_log",permalink:"/docs-gh-pages/up/zh/operations/system-tables/part_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/part_log.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.opentelemetry_span_log",permalink:"/docs-gh-pages/up/zh/operations/system-tables/opentelemetry_span_log"},next:{title:"system.parts",permalink:"/docs-gh-pages/up/zh/operations/system-tables/parts"}},m={},u=[],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-part-log"},"\u7cfb\u7edf\u3002part_log"),(0,i.kt)("p",null,"\u8be5 ",(0,i.kt)("inlineCode",{parentName:"p"},"system.part_log")," \u8868\u53ea\u6709\u5f53\u521b\u5efa ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-part-log"},"part_log")," \u6307\u5b9a\u4e86\u670d\u52a1\u5668\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,"\u6b64\u8868\u5305\u542b\u4e0e\u4ee5\u4e0b\u60c5\u51b5\u53d1\u751f\u7684\u4e8b\u4ef6\u6709\u5173\u7684\u4fe1\u606f ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/engines/table-engines/mergetree-family/custom-partitioning-key"},"\u6570\u636e\u90e8\u5206")," \u5728 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u5bb6\u5ead\u8868\uff0c\u4f8b\u5982\u6dfb\u52a0\u6216\u5408\u5e76\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u8be5 ",(0,i.kt)("inlineCode",{parentName:"p"},"system.part_log")," \u8868\u5305\u542b\u4ee5\u4e0b\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_type")," (Enum) \u2014 Type of the event that occurred with the data part. Can have one of the following values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEW_PART")," \u2014 Inserting of a new data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS")," \u2014 Merging of data parts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOWNLOAD_PART")," \u2014 Downloading a data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REMOVE_PART")," \u2014 Removing or detaching a data part using ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/alter#alter_detach-partition"},"DETACH PARTITION"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MUTATE_PART")," \u2014 Mutating of a data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MOVE_PART")," \u2014 Moving the data part from the one disk to another one."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (Date) \u2014 Event date."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (DateTime) \u2014 Event time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration_ms")," (UInt64) \u2014 Duration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (String) \u2014 Name of the database the data part is in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (String) \u2014 Name of the table the data part is in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"part_name")," (String) \u2014 Name of the data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partition_id")," (String) \u2014 ID of the partition that the data part was inserted to. The column takes the \u2018all\u2019 \u503c\uff0c\u5982\u679c\u5206\u533a\u662f\u7531 ",(0,i.kt)("inlineCode",{parentName:"li"},"tuple()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows")," (UInt64) \u2014 The number of rows in the data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size_in_bytes")," (UInt64) \u2014 Size of the data part in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merged_from")," (Array(String)) \u2014 An array of names of the parts which the current part was made up from (after the merge)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_uncompressed")," (UInt64) \u2014 Size of uncompressed bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_rows")," (UInt64) \u2014 The number of rows was read during the merge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_bytes")," (UInt64) \u2014 The number of bytes was read during the merge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," (UInt16) \u2014 The code number of the occurred error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception")," (String) \u2014 Text message of the occurred error.")),(0,i.kt)("p",null,"\u8be5 ",(0,i.kt)("inlineCode",{parentName:"p"},"system.part_log")," \u8868\u7684\u7b2c\u4e00\u4e2a\u63d2\u5165\u6570\u636e\u5230\u540e\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u684c\u5b50"))}d.isMDXComponent=!0}}]);