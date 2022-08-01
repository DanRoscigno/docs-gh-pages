"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90249],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,f=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(f,p(p({ref:t},m),{},{components:a})):n.createElement(f,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<i;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39077:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p=["components"],s={},o="system.mutations",l={unversionedId:"zh/operations/system-tables/mutations",id:"zh/operations/system-tables/mutations",title:"system.mutations",description:"system_tables-mutations}",source:"@site/docs/zh/operations/system-tables/mutations.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/mutations",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/mutations",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/mutations.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.metrics",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/metrics"},next:{title:"system.numbers",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/numbers"}},m={},u=[],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-mutations"},"system.mutations"),(0,i.kt)("p",null,"\u8be5\u8868\u5305\u542b\u5173\u4e8eMergeTree\u8868\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/alter#alter-mutations"},"mutation"),"\u53ca\u5176\u8fdb\u5ea6\u4fe1\u606f \u3002\u6bcf\u6761mutation\u547d\u4ee4\u90fd\u7528\u4e00\u884c\u6765\u8868\u793a\u3002"),(0,i.kt)("p",null,"\u8be5\u8868\u5177\u6709\u4ee5\u4e0b\u5217\u5c5e\u6027:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5e94\u7528mutation\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5e94\u7528mutation\u7684\u8868\u540d\u79f0\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mutation_id")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 mutation\u7684ID\u3002\u5bf9\u4e8e\u590d\u5236\u8868\uff0c\u8fd9\u4e9bID\u5bf9\u5e94\u4e8eZooKeeper\u4e2d<table_path_in_zookeeper>/mutations/\u76ee\u5f55\u4e0b\u7684znode\u540d\u79f0\u3002\u5bf9\u4e8e\u975e\u590d\u5236\u8868\uff0cID\u5bf9\u5e94\u8868\u7684\u6570\u636e\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u540d\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"command")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 mutation\u547d\u4ee4\u5b57\u7b26\u4e32\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table"),"\u8bed\u53e5\u4e4b\u540e\u7684\u90e8\u5206)\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"create_time")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/datetime"},"Datetime"),") \u2014 mutation\u547d\u4ee4\u63d0\u4ea4\u6267\u884c\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"block_numbers.partition_id")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u5bf9\u4e8e\u590d\u5236\u8868\u7684mutation\uff0c\u8be5\u6570\u7ec4\u5305\u542b\u5206\u533a\u7684ID\uff08\u6bcf\u4e2a\u5206\u533a\u90fd\u6709\u4e00\u6761\u8bb0\u5f55\uff09\u3002\u5bf9\u4e8e\u975e\u590d\u5236\u8868\u7684mutation\uff0c\u8be5\u6570\u7ec4\u4e3a\u7a7a\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"block_numbers.number")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"Int64"),")) \u2014 \u5bf9\u4e8e\u590d\u5236\u8868\u7684mutation\uff0c\u8be5\u6570\u7ec4\u5305\u542b\u6bcf\u4e2a\u5206\u533a\u7684\u4e00\u6761\u8bb0\u5f55\uff0c\u4ee5\u53ca\u901a\u8fc7mutation\u83b7\u53d6\u7684\u5757\u53f7\u3002\u53ea\u6709\u5305\u542b\u5757\u53f7\u5c0f\u4e8e\u8be5\u6570\u5b57\u7684\u5757\u7684part\u624d\u4f1a\u5728\u5206\u533a\u4e2d\u5e94\u7528mutation\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5728\u975e\u590d\u5236\u8868\u4e2d\uff0c\u6240\u6709\u5206\u533a\u4e2d\u7684\u5757\u53f7\u7ec4\u6210\u4e00\u4e2a\u5e8f\u5217\u3002\u8fd9\u610f\u5473\u7740\u5bf9\u4e8e\u975e\u590d\u5236\u8868\u7684mutation\uff0c\u8be5\u5217\u5c06\u5305\u542b\u4e00\u6761\u8bb0\u5f55\uff0c\u8be5\u8bb0\u5f55\u5177\u6709\u901a\u8fc7mutation\u83b7\u5f97\u7684\u5355\u4e2a\u5757\u53f7\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parts_to_do_names")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u7531\u9700\u8981\u5e94\u7528mutation\u7684part\u540d\u79f0\u6784\u6210\u7684\u6570\u7ec4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parts_to_do")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u9700\u8981\u5e94\u7528mutation\u7684part\u7684\u6570\u91cf\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"is_done")," (",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 mutation\u662f\u5426\u5b8c\u6210\u7684\u6807\u5fd7\u3002\u5176\u4e2d\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1\uff0c\u8868\u793amutation\u5df2\u7ecf\u5b8c\u6210\u3002"),(0,i.kt)("li",{parentName:"ul"},"0\uff0c\u8868\u793amutation\u4ecd\u5728\u8fdb\u884c\u4e2d\u3002")))),(0,i.kt)("p",null,'!!! info "\u6ce8\u610f"\n\u5373\u4f7f parts_to_do = 0\uff0c\u7531\u4e8e\u957f\u65f6\u95f4\u8fd0\u884c\u7684',(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u67e5\u8be2\u5c06\u521b\u5efa\u9700\u8981mutate\u7684\u65b0part\uff0c\u4e5f\u53ef\u80fd\u5bfc\u81f4\u590d\u5236\u8868mutation\u5c1a\u672a\u5b8c\u6210\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u67d0\u4e9bparts\u5728mutation\u65f6\u51fa\u73b0\u95ee\u9898\uff0c\u4ee5\u4e0b\u5217\u5c06\u5305\u542b\u9644\u52a0\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"latest_failed_part"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6700\u8fd1\u4e0d\u80fdmutation\u7684part\u7684\u540d\u79f0\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"latest_fail_time"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u6700\u8fd1\u7684\u4e00\u4e2amutation\u5931\u8d25\u7684\u65f6\u95f4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"latest_fail_reason"),"(",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5bfc\u81f4\u6700\u8fd1part\u7684mutation\u5931\u8d25\u7684\u5f02\u5e38\u6d88\u606f\u3002"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u8868\u5f15\u64ce"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/replication"},"ReplicatedMergeTree")," \u65cf")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system_tables/mutations"},"Original article")," "))}d.isMDXComponent=!0}}]);