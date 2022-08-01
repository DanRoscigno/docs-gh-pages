"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10104],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25203:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],s={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:65,sidebar_label:"\u81ea\u7701"},i="\u5185\u7701\u529f\u80fd",c={unversionedId:"zh/sql-reference/functions/introspection",id:"zh/sql-reference/functions/introspection",title:"\u5185\u7701\u529f\u80fd",description:"introspection-functions}",source:"@site/docs/zh/sql-reference/functions/introspection.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/introspection",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/introspection",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/introspection.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:65,sidebar_label:"\u81ea\u7701"},sidebar:"chinese",previous:{title:"H3 Indexes",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/geo/h3"},next:{title:"Tuples",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/tuple-functions"}},p={},u=[{value:"addressToLine",id:"addresstoline",level:2},{value:"addressToSymbol",id:"addresstosymbol",level:2},{value:"demangle",id:"demangle",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introspection-functions"},"\u5185\u7701\u529f\u80fd"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u672c\u7ae0\u4e2d\u63cf\u8ff0\u7684\u51fd\u6570\u6765\u53cd\u7701 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"},"ELF")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DWARF"},"DWARF")," \u7528\u4e8e\u67e5\u8be2\u5206\u6790\u3002"),(0,l.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u8fd9\u4e9b\u529f\u80fd\u5f88\u6162\uff0c\u53ef\u80fd\u4f1a\u5f3a\u52a0\u5b89\u5168\u8003\u8651\u3002'),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5185\u7701\u529f\u80fd\u7684\u6b63\u786e\u64cd\u4f5c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-common-static-dbg")," \u5305\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bbe\u7f6e ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#settings-allow_introspection_functions"},"allow_introspection_functions")," \u8bbe\u7f6e\u4e3a1\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u5185\u7701\u51fd\u6570\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u3002\n")))),(0,l.kt)("p",null,"ClickHouse\u5c06\u63a2\u67e5\u5668\u62a5\u544a\u4fdd\u5b58\u5230 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/system-tables/trace_log#system_tables-trace_log"},"trace_log")," \u7cfb\u7edf\u8868. \u786e\u4fdd\u6b63\u786e\u914d\u7f6e\u4e86\u8868\u548c\u63a2\u67e5\u5668\u3002"),(0,l.kt)("h2",{id:"addresstoline"},"addressToLine"),(0,l.kt)("p",null,"\u5c06ClickHouse\u670d\u52a1\u5668\u8fdb\u7a0b\u5185\u7684\u865a\u62df\u5185\u5b58\u5730\u5740\u8f6c\u6362\u4e3aClickHouse\u6e90\u4ee3\u7801\u4e2d\u7684\u6587\u4ef6\u540d\u548c\u884c\u53f7\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u5b98\u65b9\u7684ClickHouse\u8f6f\u4ef6\u5305\uff0c\u60a8\u9700\u8981\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-common-static-dbg")," \u5305\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"addressToLine(address_of_binary_instruction)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address_of_binary_instruction")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u6b63\u5728\u8fd0\u884c\u8fdb\u7a0b\u7684\u6307\u4ee4\u5730\u5740\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6e90\u4ee3\u7801\u6587\u4ef6\u540d\u548c\u884c\u53f7\uff08\u7528\u5192\u53f7\u5206\u9694\u7684\u884c\u53f7\uff09"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\u793a\u4f8b, `/build/obj-x86_64-linux-gnu/../src/Common/ThreadPool.cpp:199`, where `199` is a line number.\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u51fd\u6570\u627e\u4e0d\u5230\u8c03\u8bd5\u4fe1\u606f\uff0c\u8fd4\u56de\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u540d\u79f0\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5730\u5740\u65e0\u6548\uff0c\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"))),(0,l.kt)("p",null,"\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u542f\u7528\u5185\u7701\u529f\u80fd:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_introspection_functions=1\n")),(0,l.kt)("p",null,"\u4ece\u4e2d\u9009\u62e9\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace_log")," \u7cfb\u7edf\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2019-11-19\nevent_time:              2019-11-19 18:57:23\nrevision:                54429\ntimer_type:              Real\nthread_number:           48\nquery_id:                421b6855-1858-45a5-8f37-f383409d6d72\ntrace:                   [140658411141617,94784174532828,94784076370703,94784076372094,94784076361020,94784175007680,140658411116251,140658403895439]\n")),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u5b57\u6bb5\u5305\u542b\u91c7\u6837\u65f6\u7684\u5806\u6808\u8ddf\u8e2a\u3002"),(0,l.kt)("p",null,"\u83b7\u53d6\u5355\u4e2a\u5730\u5740\u7684\u6e90\u4ee3\u7801\u6587\u4ef6\u540d\u548c\u884c\u53f7:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT addressToLine(94784076370703) \\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\naddressToLine(94784076370703): /build/obj-x86_64-linux-gnu/../src/Common/ThreadPool.cpp:199\n")),(0,l.kt)("p",null,"\u5c06\u51fd\u6570\u5e94\u7528\u4e8e\u6574\u4e2a\u5806\u6808\u8ddf\u8e2a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    arrayStringConcat(arrayMap(x -> addressToLine(x), trace), '\\n') AS trace_source_code_lines\nFROM system.trace_log\nLIMIT 1\n\\G\n")),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/higher-order-functions#higher_order_functions-array-map"},"arrayMap")," \u529f\u80fd\u5141\u8bb8\u5904\u7406\u7684\u6bcf\u4e2a\u5355\u72ec\u7684\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u9635\u5217\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"addressToLine")," \u529f\u80fd\u3002 \u8fd9\u79cd\u5904\u7406\u7684\u7ed3\u679c\uff0c\u4f60\u5728\u770b ",(0,l.kt)("inlineCode",{parentName:"p"},"trace_source_code_lines")," \u5217\u7684\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntrace_source_code_lines: /lib/x86_64-linux-gnu/libpthread-2.27.so\n/usr/lib/debug/usr/bin/clickhouse\n/build/obj-x86_64-linux-gnu/../src/Common/ThreadPool.cpp:199\n/build/obj-x86_64-linux-gnu/../src/Common/ThreadPool.h:155\n/usr/include/c++/9/bits/atomic_base.h:551\n/usr/lib/debug/usr/bin/clickhouse\n/lib/x86_64-linux-gnu/libpthread-2.27.so\n/build/glibc-OTsEL5/glibc-2.27/misc/../sysdeps/unix/sysv/linux/x86_64/clone.S:97\n")),(0,l.kt)("h2",{id:"addresstosymbol"},"addressToSymbol"),(0,l.kt)("p",null,"\u5c06ClickHouse\u670d\u52a1\u5668\u8fdb\u7a0b\u5185\u7684\u865a\u62df\u5185\u5b58\u5730\u5740\u8f6c\u6362\u4e3aClickHouse\u5bf9\u8c61\u6587\u4ef6\u4e2d\u7684\u7b26\u53f7\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"addressToSymbol(address_of_binary_instruction)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address_of_binary_instruction")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Address of instruction in a running process.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6765\u81eaClickHouse\u5bf9\u8c61\u6587\u4ef6\u7684\u7b26\u53f7\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5730\u5740\u65e0\u6548\uff0c\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,l.kt)("p",null,"\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u542f\u7528\u5185\u7701\u529f\u80fd:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_introspection_functions=1\n")),(0,l.kt)("p",null,"\u4ece\u4e2d\u9009\u62e9\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace_log")," \u7cfb\u7edf\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:    2019-11-20\nevent_time:    2019-11-20 16:57:59\nrevision:      54429\ntimer_type:    Real\nthread_number: 48\nquery_id:      724028bf-f550-45aa-910d-2af6212b94ac\ntrace:         [94138803686098,94138815010911,94138815096522,94138815101224,94138815102091,94138814222988,94138806823642,94138814457211,94138806823642,94138814457211,94138806823642,94138806795179,94138806796144,94138753770094,94138753771646,94138753760572,94138852407232,140399185266395,140399178045583]\n")),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u5b57\u6bb5\u5305\u542b\u91c7\u6837\u65f6\u7684\u5806\u6808\u8ddf\u8e2a\u3002"),(0,l.kt)("p",null,"\u83b7\u53d6\u5355\u4e2a\u5730\u5740\u7684\u7b26\u53f7:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT addressToSymbol(94138803686098) \\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\naddressToSymbol(94138803686098): _ZNK2DB24IAggregateFunctionHelperINS_20AggregateFunctionSumImmNS_24AggregateFunctionSumDataImEEEEE19addBatchSinglePlaceEmPcPPKNS_7IColumnEPNS_5ArenaE\n")),(0,l.kt)("p",null,"\u5c06\u51fd\u6570\u5e94\u7528\u4e8e\u6574\u4e2a\u5806\u6808\u8ddf\u8e2a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    arrayStringConcat(arrayMap(x -> addressToSymbol(x), trace), '\\n') AS trace_symbols\nFROM system.trace_log\nLIMIT 1\n\\G\n")),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/higher-order-functions#higher_order_functions-array-map"},"arrayMap")," \u529f\u80fd\u5141\u8bb8\u5904\u7406\u7684\u6bcf\u4e2a\u5355\u72ec\u7684\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u9635\u5217\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"addressToSymbols")," \u529f\u80fd\u3002 \u8fd9\u79cd\u5904\u7406\u7684\u7ed3\u679c\uff0c\u4f60\u5728\u770b ",(0,l.kt)("inlineCode",{parentName:"p"},"trace_symbols")," \u5217\u7684\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntrace_symbols: _ZNK2DB24IAggregateFunctionHelperINS_20AggregateFunctionSumImmNS_24AggregateFunctionSumDataImEEEEE19addBatchSinglePlaceEmPcPPKNS_7IColumnEPNS_5ArenaE\n_ZNK2DB10Aggregator21executeWithoutKeyImplERPcmPNS0_28AggregateFunctionInstructionEPNS_5ArenaE\n_ZN2DB10Aggregator14executeOnBlockESt6vectorIN3COWINS_7IColumnEE13immutable_ptrIS3_EESaIS6_EEmRNS_22AggregatedDataVariantsERS1_IPKS3_SaISC_EERS1_ISE_SaISE_EERb\n_ZN2DB10Aggregator14executeOnBlockERKNS_5BlockERNS_22AggregatedDataVariantsERSt6vectorIPKNS_7IColumnESaIS9_EERS6_ISB_SaISB_EERb\n_ZN2DB10Aggregator7executeERKSt10shared_ptrINS_17IBlockInputStreamEERNS_22AggregatedDataVariantsE\n_ZN2DB27AggregatingBlockInputStream8readImplEv\n_ZN2DB17IBlockInputStream4readEv\n_ZN2DB26ExpressionBlockInputStream8readImplEv\n_ZN2DB17IBlockInputStream4readEv\n_ZN2DB26ExpressionBlockInputStream8readImplEv\n_ZN2DB17IBlockInputStream4readEv\n_ZN2DB28AsynchronousBlockInputStream9calculateEv\n_ZNSt17_Function_handlerIFvvEZN2DB28AsynchronousBlockInputStream4nextEvEUlvE_E9_M_invokeERKSt9_Any_data\n_ZN14ThreadPoolImplI20ThreadFromGlobalPoolE6workerESt14_List_iteratorIS0_E\n_ZZN20ThreadFromGlobalPoolC4IZN14ThreadPoolImplIS_E12scheduleImplIvEET_St8functionIFvvEEiSt8optionalImEEUlvE1_JEEEOS4_DpOT0_ENKUlvE_clEv\n_ZN14ThreadPoolImplISt6threadE6workerESt14_List_iteratorIS0_E\nexecute_native_thread_routine\nstart_thread\nclone\n")),(0,l.kt)("h2",{id:"demangle"},"demangle"),(0,l.kt)("p",null,"\u8f6c\u6362\u4e00\u4e2a\u7b26\u53f7\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"#addresstosymbol"},"addressToSymbol")," \u51fd\u6570\u5230C++\u51fd\u6570\u540d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"demangle(symbol)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"symbol")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 Symbol from an object file.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"C++\u51fd\u6570\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7b26\u53f7\u65e0\u6548\uff0c\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,l.kt)("p",null,"\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u542f\u7528\u5185\u7701\u529f\u80fd:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_introspection_functions=1\n")),(0,l.kt)("p",null,"\u4ece\u4e2d\u9009\u62e9\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace_log")," \u7cfb\u7edf\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:    2019-11-20\nevent_time:    2019-11-20 16:57:59\nrevision:      54429\ntimer_type:    Real\nthread_number: 48\nquery_id:      724028bf-f550-45aa-910d-2af6212b94ac\ntrace:         [94138803686098,94138815010911,94138815096522,94138815101224,94138815102091,94138814222988,94138806823642,94138814457211,94138806823642,94138814457211,94138806823642,94138806795179,94138806796144,94138753770094,94138753771646,94138753760572,94138852407232,140399185266395,140399178045583]\n")),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u5b57\u6bb5\u5305\u542b\u91c7\u6837\u65f6\u7684\u5806\u6808\u8ddf\u8e2a\u3002"),(0,l.kt)("p",null,"\u83b7\u53d6\u5355\u4e2a\u5730\u5740\u7684\u51fd\u6570\u540d\u79f0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT demangle(addressToSymbol(94138803686098)) \\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndemangle(addressToSymbol(94138803686098)): DB::IAggregateFunctionHelper<DB::AggregateFunctionSum<unsigned long, unsigned long, DB::AggregateFunctionSumData<unsigned long> > >::addBatchSinglePlace(unsigned long, char*, DB::IColumn const**, DB::Arena*) const\n")),(0,l.kt)("p",null,"\u5c06\u51fd\u6570\u5e94\u7528\u4e8e\u6574\u4e2a\u5806\u6808\u8ddf\u8e2a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    arrayStringConcat(arrayMap(x -> demangle(addressToSymbol(x)), trace), '\\n') AS trace_functions\nFROM system.trace_log\nLIMIT 1\n\\G\n")),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/higher-order-functions#higher_order_functions-array-map"},"arrayMap")," \u529f\u80fd\u5141\u8bb8\u5904\u7406\u7684\u6bcf\u4e2a\u5355\u72ec\u7684\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u9635\u5217\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"demangle")," \u529f\u80fd\u3002 \u8fd9\u79cd\u5904\u7406\u7684\u7ed3\u679c\uff0c\u4f60\u5728\u770b ",(0,l.kt)("inlineCode",{parentName:"p"},"trace_functions")," \u5217\u7684\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntrace_functions: DB::IAggregateFunctionHelper<DB::AggregateFunctionSum<unsigned long, unsigned long, DB::AggregateFunctionSumData<unsigned long> > >::addBatchSinglePlace(unsigned long, char*, DB::IColumn const**, DB::Arena*) const\nDB::Aggregator::executeWithoutKeyImpl(char*&, unsigned long, DB::Aggregator::AggregateFunctionInstruction*, DB::Arena*) const\nDB::Aggregator::executeOnBlock(std::vector<COW<DB::IColumn>::immutable_ptr<DB::IColumn>, std::allocator<COW<DB::IColumn>::immutable_ptr<DB::IColumn> > >, unsigned long, DB::AggregatedDataVariants&, std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> >&, std::vector<std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> >, std::allocator<std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> > > >&, bool&)\nDB::Aggregator::executeOnBlock(DB::Block const&, DB::AggregatedDataVariants&, std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> >&, std::vector<std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> >, std::allocator<std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> > > >&, bool&)\nDB::Aggregator::execute(std::shared_ptr<DB::IBlockInputStream> const&, DB::AggregatedDataVariants&)\nDB::AggregatingBlockInputStream::readImpl()\nDB::IBlockInputStream::read()\nDB::ExpressionBlockInputStream::readImpl()\nDB::IBlockInputStream::read()\nDB::ExpressionBlockInputStream::readImpl()\nDB::IBlockInputStream::read()\nDB::AsynchronousBlockInputStream::calculate()\nstd::_Function_handler<void (), DB::AsynchronousBlockInputStream::next()::{lambda()#1}>::_M_invoke(std::_Any_data const&)\nThreadPoolImpl<ThreadFromGlobalPool>::worker(std::_List_iterator<ThreadFromGlobalPool>)\nThreadFromGlobalPool::ThreadFromGlobalPool<ThreadPoolImpl<ThreadFromGlobalPool>::scheduleImpl<void>(std::function<void ()>, int, std::optional<unsigned long>)::{lambda()#3}>(ThreadPoolImpl<ThreadFromGlobalPool>::scheduleImpl<void>(std::function<void ()>, int, std::optional<unsigned long>)::{lambda()#3}&&)::{lambda()#1}::operator()() const\nThreadPoolImpl<std::thread>::worker(std::_List_iterator<std::thread>)\nexecute_native_thread_routine\nstart_thread\nclone\n")))}m.isMDXComponent=!0}}]);