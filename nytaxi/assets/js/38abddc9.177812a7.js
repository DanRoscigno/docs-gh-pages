"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60748],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27477:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],l={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},o="\u7cfb\u7edf\u3002\u5b57\u5178",c={unversionedId:"zh/operations/system-tables/dictionaries",id:"zh/operations/system-tables/dictionaries",title:"\u7cfb\u7edf\u3002\u5b57\u5178",description:"system_tables-dictionaries}",source:"@site/docs/zh/operations/system-tables/dictionaries.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/dictionaries",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/dictionaries",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/dictionaries.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.detached_parts",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/detached_parts"},next:{title:"system.disks",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/disks"}},d={},p=[],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-dictionaries"},"\u7cfb\u7edf\u3002\u5b57\u5178"),(0,i.kt)("p",null,"\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts"},"\u5916\u90e8\u5b57\u5178"),"."),(0,i.kt)("p",null,"\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 Name of the database containing the dictionary created by DDL query. Empty string for other dictionaries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"},"\u5b57\u5178\u540d\u79f0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/enum"},"\u679a\u4e3e8"),") \u2014 Dictionary status. Possible values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NOT_LOADED")," \u2014 Dictionary was not loaded because it was not used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOADED")," \u2014 Dictionary loaded successfully."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FAILED")," \u2014 Unable to load the dictionary as a result of an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOADING")," \u2014 Dictionary is loading now."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOADED_AND_RELOADING")," \u2014 Dictionary is loaded successfully, and is being reloaded right now (frequent reasons: ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/system#query_language-system-reload-dictionary"},"SYSTEM RELOAD DICTIONARY")," \u67e5\u8be2\uff0c\u8d85\u65f6\uff0c\u5b57\u5178\u914d\u7f6e\u5df2\u66f4\u6539\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FAILED_AND_RELOADING")," \u2014 Could not load the dictionary as a result of an error and is loading now."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 Path to the configuration file that describes the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 Type of a dictionary allocation. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-key"},"\u5bc6\u94a5\u7c7b\u578b"),":\u6570\u5b57\u952e (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") or \u0421omposite key (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 form \u201c(type 1, type 2, \u2026, type n)\u201d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attribute.names")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/array"},"\u9635\u5217"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),")) \u2014 Array of ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"\u5c5e\u6027\u540d\u79f0")," \u7531\u5b57\u5178\u63d0\u4f9b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attribute.types")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/array"},"\u9635\u5217"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),")) \u2014 Corresponding array of ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict_structure-attributes"},"\u5c5e\u6027\u7c7b\u578b")," \u8fd9\u662f\u7531\u5b57\u5178\u63d0\u4f9b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_allocated")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Amount of RAM allocated for the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_count")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of queries since the dictionary was loaded or since the last successful reboot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hit_rate")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/float"},"Float64"),") \u2014 For cache dictionaries, the percentage of uses for which the value was in the cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"element_count")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of items stored in the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load_factor")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/float"},"Float64"),") \u2014 Percentage filled in the dictionary (for a hashed dictionary, the percentage filled in the hash table)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 Text describing the ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u6570\u636e\u6e90")," \u4e3a\u4e86\u5b57\u5178"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifetime_min")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Minimum ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u4f7f\u7528\u5bff\u547d")," \u5728\u5185\u5b58\u4e2d\u7684\u5b57\u5178\uff0c\u4e4b\u540eClickHouse\u5c1d\u8bd5\u91cd\u65b0\u52a0\u8f7d\u5b57\u5178\uff08\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"invalidate_query")," \u88ab\u8bbe\u7f6e\uff0c\u90a3\u4e48\u53ea\u6709\u5f53\u5b83\u5df2\u7ecf\u6539\u53d8\uff09\u3002 \u5728\u51e0\u79d2\u949f\u5185\u8bbe\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifetime_max")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Maximum ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u4f7f\u7528\u5bff\u547d")," \u5728\u5185\u5b58\u4e2d\u7684\u5b57\u5178\uff0c\u4e4b\u540eClickHouse\u5c1d\u8bd5\u91cd\u65b0\u52a0\u8f7d\u5b57\u5178\uff08\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"invalidate_query")," \u88ab\u8bbe\u7f6e\uff0c\u90a3\u4e48\u53ea\u6709\u5f53\u5b83\u5df2\u7ecf\u6539\u53d8\uff09\u3002 \u5728\u51e0\u79d2\u949f\u5185\u8bbe\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loading_start_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4"),") \u2014 Start time for loading the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last_successful_update_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4"),") \u2014 End time for loading or updating the dictionary. Helps to monitor some troubles with external sources and investigate causes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loading_duration")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/float"},"Float32"),") \u2014 Duration of a dictionary loading."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last_exception")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 Text of the error that occurs when creating or reloading the dictionary if the dictionary couldn't be created.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u914d\u7f6e\u5b57\u5178\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dictdb.dict\n(\n    `key` Int64 DEFAULT -1,\n    `value_default` String DEFAULT 'world',\n    `value_expression` String DEFAULT 'xxx' EXPRESSION 'toString(127 * 172)'\n)\nPRIMARY KEY key\nSOURCE(CLICKHOUSE(HOST 'localhost' PORT 9000 USER 'default' TABLE 'dicttbl' DB 'dictdb'))\nLIFETIME(MIN 0 MAX 1)\nLAYOUT(FLAT())\n")),(0,i.kt)("p",null,"\u786e\u4fdd\u5b57\u5178\u5df2\u52a0\u8f7d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.dictionaries\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500database\u2500\u252c\u2500name\u2500\u252c\u2500status\u2500\u252c\u2500origin\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u252c\u2500key\u2500\u2500\u2500\u2500\u252c\u2500attribute.names\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500attribute.types\u2500\u2500\u2500\u2500\u2500\u252c\u2500bytes_allocated\u2500\u252c\u2500query_count\u2500\u252c\u2500hit_rate\u2500\u252c\u2500element_count\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500load_factor\u2500\u252c\u2500source\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500lifetime_min\u2500\u252c\u2500lifetime_max\u2500\u252c\u2500\u2500loading_start_time\u2500\u250c\u2500\u2500last_successful_update_time\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500loading_duration\u2500\u252c\u2500last_exception\u2500\u2510\n\u2502 dictdb   \u2502 dict \u2502 LOADED \u2502 dictdb.dict \u2502 Flat \u2502 UInt64 \u2502 ['value_default','value_expression'] \u2502 ['String','String'] \u2502           74032 \u2502           0 \u2502        1 \u2502             1 \u2502 0.0004887585532746823 \u2502 ClickHouse: dictdb.dicttbl \u2502            0 \u2502            1 \u2502 2020-03-04 04:17:34 \u2502   2020-03-04 04:30:34        \u2502                 0.002 \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);