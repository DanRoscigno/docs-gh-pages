"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59744],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26492:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_position:33,sidebar_label:"\u5206\u5e03\u5f0f\u5f15\u64ce"},p="\u5206\u5e03\u5f0f\u5f15\u64ce",o={unversionedId:"zh/engines/table-engines/special/distributed",id:"zh/engines/table-engines/special/distributed",title:"\u5206\u5e03\u5f0f\u5f15\u64ce",description:"distributed}",source:"@site/docs/zh/engines/table-engines/special/distributed.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/distributed",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/special/distributed",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/distributed.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33,sidebar_label:"\u5206\u5e03\u5f0f\u5f15\u64ce"},sidebar:"chinese",previous:{title:"MySQL",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/mysql"},next:{title:"\u5173\u8054\u8868\u5f15\u64ce",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/special/join"}},u={},d=[{value:"\u521b\u5efa\u6570\u636e\u8868",id:"distributed-creating-a-table",level:2},{value:"\u5df2\u6709\u6570\u636e\u8868",id:"distributed-from-a-table",level:2},{value:"\u96c6\u7fa4",id:"distributed-clusters",level:2},{value:"\u5199\u5165\u6570\u636e",id:"\u5199\u5165\u6570\u636e",level:2},{value:"\u8bfb\u53d6\u6570\u636e",id:"distributed-reading-data",level:2},{value:"\u865a\u62df\u5217",id:"virtual-columns",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributed"},"\u5206\u5e03\u5f0f\u5f15\u64ce"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u5f15\u64ce\u672c\u8eab\u4e0d\u5b58\u50a8\u6570\u636e"),", \u4f46\u53ef\u4ee5\u5728\u591a\u4e2a\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u5206\u5e03\u5f0f\u67e5\u8be2\u3002\n\u8bfb\u662f\u81ea\u52a8\u5e76\u884c\u7684\u3002\u8bfb\u53d6\u65f6\uff0c\u8fdc\u7a0b\u670d\u52a1\u5668\u8868\u7684\u7d22\u5f15\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u4f1a\u88ab\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"distributed-creating-a-table"},"\u521b\u5efa\u6570\u636e\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = Distributed(cluster, database, table[, sharding_key[, policy_name]])\n[SETTINGS name=value, ...]\n")),(0,i.kt)("h2",{id:"distributed-from-a-table"},"\u5df2\u6709\u6570\u636e\u8868"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"Distributed")," \u8868\u6307\u5411\u5f53\u524d\u670d\u52a1\u5668\u4e0a\u7684\u4e00\u4e2a\u8868\u65f6\uff0c\u4f60\u53ef\u4ee5\u91c7\u7528\u4ee5\u4e0b\u8bed\u53e5:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster] AS [db2.]name2 ENGINE = Distributed(cluster, database, table[, sharding_key[, policy_name]]) [SETTINGS name=value, ...]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u5f15\u64ce\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cluster")," - \u670d\u52a1\u4e3a\u914d\u7f6e\u4e2d\u7684\u96c6\u7fa4\u540d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," - \u8fdc\u7a0b\u6570\u636e\u5e93\u540d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," - \u8fdc\u7a0b\u6570\u636e\u8868\u540d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sharding_key")," - (\u53ef\u9009) \u5206\u7247key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"policy_name")," - (\u53ef\u9009) \u89c4\u5219\u540d\uff0c\u5b83\u4f1a\u88ab\u7528\u4f5c\u5b58\u50a8\u4e34\u65f6\u6587\u4ef6\u4ee5\u4fbf\u5f02\u6b65\u53d1\u9001\u6570\u636e"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8be6\u89c1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#insert_distributed_sync"},"insert_distributed_sync")," \u8bbe\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes"},"MergeTree")," \u67e5\u770b\u793a\u4f8b"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u8bbe\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fsync_after_insert")," - \u5bf9\u5f02\u6b65\u63d2\u5165\u5230\u5206\u5e03\u5f0f\u7684\u6587\u4ef6\u6570\u636e\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"fsync"),"\u3002\u786e\u4fdd\u64cd\u4f5c\u7cfb\u7edf\u5c06\u6240\u6709\u63d2\u5165\u7684\u6570\u636e\u5237\u65b0\u5230\u542f\u52a8\u8282\u70b9",(0,i.kt)("strong",{parentName:"p"},"\u78c1\u76d8\u4e0a\u7684\u4e00\u4e2a\u6587\u4ef6"),"\u4e2d\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fsync_directories")," - \u5bf9\u76ee\u5f55\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"fsync"),"\u3002\u4fdd\u8bc1\u64cd\u4f5c\u7cfb\u7edf\u5728\u5206\u5e03\u5f0f\u8868\u4e0a\u8fdb\u884c\u5f02\u6b65\u63d2\u5165\u76f8\u5173\u64cd\u4f5c(\u63d2\u5165\u540e\uff0c\u53d1\u9001\u6570\u636e\u5230\u5206\u7247\u7b49)\u540e\u5237\u65b0\u76ee\u5f55\u5143\u6570\u636e.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bytes_to_throw_insert")," - \u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u6570\u91cf\u7684\u538b\u7f29\u5b57\u8282\u5c06\u7b49\u5f85\u5f02\u6b65INSERT\uff0c\u5c06\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u30020 - \u4e0d\u629b\u51fa\u3002\u9ed8\u8ba4\u503c0.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bytes_to_delay_insert")," - \u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u6570\u91cf\u7684\u538b\u7f29\u5b57\u8282\u5c06\u7b49\u5f85\u5f02\u6b65INSERT\uff0c\u67e5\u8be2\u5c06\u88ab\u5ef6\u8fdf\u30020 - \u4e0d\u8981\u5ef6\u8fdf\u3002\u9ed8\u8ba4\u503c0.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_delay_to_insert")," - \u6700\u5927\u5ef6\u8fdf\u591a\u5c11\u79d2\u63d2\u5165\u6570\u636e\u5230\u5206\u5e03\u5f0f\u8868\uff0c\u5982\u679c\u6709\u5f88\u591a\u6302\u8d77\u5b57\u8282\u5f02\u6b65\u53d1\u9001\u3002\u9ed8\u8ba4\u503c60\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"monitor_batch_inserts")," - \u7b49\u540c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#distributed_directory_monitor_batch_inserts"},"distributed_directory_monitor_batch_inserts"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"monitor_split_batch_on_failure")," - \u7b49\u540c\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#distributed_directory_monitor_split_batch_on_failure"},"distributed_directory_monitor_split_batch_on_failure"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"monitor_sleep_time_ms")," - \u7b49\u540c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#distributed_directory_monitor_sleep_time_ms"},"distributed_directory_monitor_sleep_time_ms"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"monitor_max_sleep_time_ms")," - \u7b49\u540c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#distributed_directory_monitor_max_sleep_time_ms"},"distributed_directory_monitor_max_sleep_time_ms")))),(0,i.kt)("p",null,'!!! note "\u5907\u6ce8"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"**\u7a33\u5b9a\u6027\u8bbe\u7f6e** (`fsync_...`):\n\n- \u53ea\u5f71\u54cd\u5f02\u6b65\u63d2\u5165(\u4f8b\u5982:`insert_distributed_sync=false`), \u5f53\u6570\u636e\u9996\u5148\u5b58\u50a8\u5728\u542f\u52a8\u8282\u70b9\u78c1\u76d8\u4e0a\uff0c\u7136\u540e\u518d\u5f02\u6b65\u53d1\u9001\u5230shard\u3002\n\u2014 \u53ef\u80fd\u4f1a\u663e\u8457\u964d\u4f4e`insert`\u7684\u6027\u80fd\n- \u5f71\u54cd\u5c06\u5b58\u50a8\u5728\u5206\u5e03\u5f0f\u8868\u6587\u4ef6\u5939\u4e2d\u7684\u6570\u636e\u5199\u5165 **\u63a5\u53d7\u60a8\u63d2\u5165\u7684\u8282\u70b9** \u3002\u5982\u679c\u4f60\u9700\u8981\u4fdd\u8bc1\u5199\u5165\u6570\u636e\u5230\u5e95\u5c42\u7684MergeTree\u8868\u4e2d\uff0c\u8bf7\u53c2\u9605 `system.merge_tree_settings` \u4e2d\u7684\u6301\u4e45\u6027\u8bbe\u7f6e(`...fsync...`)\n\n**\u63d2\u5165\u9650\u5236\u8bbe\u7f6e** (`..._insert`) \u8bf7\u89c1:\n\n- [insert_distributed_sync](/docs-gh-pages/nytaxi/zh/operations/settings/settings#insert_distributed_sync) \u8bbe\u7f6e\n- [prefer_localhost_replica](/docs-gh-pages/nytaxi/zh/operations/settings/settings#settings-prefer-localhost-replica) \u8bbe\u7f6e\n- `bytes_to_throw_insert` \u5728 `bytes_to_delay_insert` \u4e4b\u524d\u5904\u7406\uff0c\u6240\u4ee5\u4f60\u4e0d\u5e94\u8be5\u8bbe\u7f6e\u5b83\u7684\u503c\u5c0f\u4e8e `bytes_to_delay_insert`\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits_all AS hits\nENGINE = Distributed(logs, default, hits[, sharding_key[, policy_name]])\nSETTINGS\n    fsync_after_insert=0,\n    fsync_directories=0;\n")),(0,i.kt)("p",null,"\u6570\u636e\u5c06\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"logs"),"\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u670d\u52a1\u5668\u4e2d\uff0c\u4ece\u4f4d\u4e8e\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u670d\u52a1\u5668\u4e0a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"default.hits"),"\u8868\u8bfb\u53d6\u3002\u3002\n\u6570\u636e\u4e0d\u4ec5\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u8bfb\u53d6\uff0c\u800c\u4e14\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u90e8\u5206\u5904\u7406(\u5728\u53ef\u80fd\u7684\u8303\u56f4\u5185)\u3002\n\u4f8b\u5982\uff0c\u5bf9\u4e8e\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\u7684\u67e5\u8be2\uff0c\u6570\u636e\u5c06\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u805a\u5408\uff0c\u805a\u5408\u51fd\u6570\u7684\u4e2d\u95f4\u72b6\u6001\u5c06\u88ab\u53d1\u9001\u5230\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u3002\u7136\u540e\u5c06\u8fdb\u4e00\u6b65\u805a\u5408\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u5e38\u91cf\u8868\u8fbe\u5f0f\u6765\u4ee3\u66ff\u6570\u636e\u5e93\u540d\u79f0\u3002\u4f8b\u5982: ",(0,i.kt)("inlineCode",{parentName:"p"},"currentDatabase()"),"\u3002"),(0,i.kt)("h2",{id:"distributed-clusters"},"\u96c6\u7fa4"),(0,i.kt)("p",null,"\u96c6\u7fa4\u662f\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/configuration-files"},"\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6"),"\u6765\u914d\u7f6e\u7684"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<remote_servers>\n    <logs>\n        \x3c!-- \u5206\u5e03\u5f0f\u67e5\u8be2\u7684\u670d\u52a1\u5668\u95f4\u96c6\u7fa4\u5bc6\u7801\n             \u9ed8\u8ba4\u503c:\u65e0\u5bc6\u7801(\u5c06\u4e0d\u6267\u884c\u8eab\u4efd\u9a8c\u8bc1)\n\n             \u5982\u679c\u8bbe\u7f6e\u4e86\uff0c\u90a3\u4e48\u5206\u5e03\u5f0f\u67e5\u8be2\u5c06\u5728\u5206\u7247\u4e0a\u9a8c\u8bc1\uff0c\u6240\u4ee5\u81f3\u5c11:\n             - \u8fd9\u6837\u7684\u96c6\u7fa4\u5e94\u8be5\u5b58\u5728\u4e8eshard\u4e0a\n             - \u8fd9\u6837\u7684\u96c6\u7fa4\u5e94\u8be5\u6709\u76f8\u540c\u7684\u5bc6\u7801\u3002\n\n             \u800c\u4e14(\u8fd9\u662f\u66f4\u91cd\u8981\u7684)\uff0cinitial_user\u5c06\u4f5c\u4e3a\u67e5\u8be2\u7684\u5f53\u524d\u7528\u6237\u4f7f\u7528\u3002\n        --\x3e\n        \x3c!-- <secret></secret> --\x3e\n        <shard>\n            \x3c!-- \u53ef\u9009\u7684\u3002\u5199\u6570\u636e\u65f6\u5206\u7247\u6743\u91cd\u3002 \u9ed8\u8ba4: 1. --\x3e\n            <weight>1</weight>\n            \x3c!-- \u53ef\u9009\u7684\u3002\u662f\u5426\u53ea\u5c06\u6570\u636e\u5199\u5165\u5176\u4e2d\u4e00\u4e2a\u526f\u672c\u3002\u9ed8\u8ba4\u503c:false(\u5c06\u6570\u636e\u5199\u5165\u6240\u6709\u526f\u672c)\u3002 --\x3e\n            <internal_replication>false</internal_replication>\n            <replica>\n                \x3c!-- \u53ef\u9009\u7684\u3002\u8d1f\u8f7d\u5747\u8861\u526f\u672c\u7684\u4f18\u5148\u7ea7\uff0c\u8bf7\u53c2\u89c1\uff08load_balancing \u8bbe\u7f6e)\u3002\u9ed8\u8ba4\u503c:1(\u503c\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8)\u3002 --\x3e\n                <priority>1</priority>\n                <host>example01-01-1</host>\n                <port>9000</port>\n            </replica>\n            <replica>\n                <host>example01-01-2</host>\n                <port>9000</port>\n            </replica>\n        </shard>\n        <shard>\n            <weight>2</weight>\n            <internal_replication>false</internal_replication>\n            <replica>\n                <host>example01-02-1</host>\n                <port>9000</port>\n            </replica>\n            <replica>\n                <host>example01-02-2</host>\n                <secure>1</secure>\n                <port>9440</port>\n            </replica>\n        </shard>\n    </logs>\n</remote_servers>\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a\u2019logs\u2019\u7684\u96c6\u7fa4\uff0c\u5b83\u7531\u4e24\u4e2a\u5206\u7247\u7ec4\u6210\uff0c\u6bcf\u4e2a\u5206\u7247\u5305\u542b\u4e24\u4e2a\u526f\u672c\u3002\n\u5206\u7247\u662f\u6307\u5305\u542b\u6570\u636e\u4e0d\u540c\u90e8\u5206\u7684\u670d\u52a1\u5668\uff08\u8981\u8bfb\u53d6\u6240\u6709\u6570\u636e\uff0c\u5fc5\u987b\u8bbf\u95ee\u6240\u6709\u5206\u7247\uff09\u3002\n\u526f\u672c\u662f\u5b58\u50a8\u590d\u5236\u6570\u636e\u7684\u670d\u52a1\u5668\uff08\u8981\u8bfb\u53d6\u6240\u6709\u6570\u636e\uff0c\u8bbf\u95ee\u4efb\u4e00\u526f\u672c\u4e0a\u7684\u6570\u636e\u5373\u53ef\uff09\u3002"),(0,i.kt)("p",null,"\u96c6\u7fa4\u540d\u79f0\u4e0d\u80fd\u5305\u542b\u70b9\u53f7\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u670d\u52a1\u5668\u9700\u8981\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"port"),"\uff0c\u548c\u53ef\u9009\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"secure"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"compression")," \u7684\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host")," \u2013 \u8fdc\u7a0b\u670d\u52a1\u5668\u5730\u5740\u3002\u53ef\u4ee5\u57df\u540d\u3001IPv4\u6216IPv6\u3002\u5982\u679c\u6307\u5b9a\u57df\u540d\uff0c\u5219\u670d\u52a1\u5728\u542f\u52a8\u65f6\u53d1\u8d77\u4e00\u4e2a DNS \u8bf7\u6c42\uff0c\u5e76\u4e14\u8bf7\u6c42\u7ed3\u679c\u4f1a\u5728\u670d\u52a1\u5668\u8fd0\u884c\u671f\u95f4\u4e00\u76f4\u88ab\u8bb0\u5f55\u3002\u5982\u679c DNS \u8bf7\u6c42\u5931\u8d25\uff0c\u5219\u670d\u52a1\u4e0d\u4f1a\u542f\u52a8\u3002\u5982\u679c\u4f60\u4fee\u6539\u4e86 DNS \u8bb0\u5f55\uff0c\u5219\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," \u2013 \u6d88\u606f\u4f20\u9012\u7684 TCP \u7aef\u53e3\uff08\u300ctcp_port\u300d\u914d\u7f6e\u901a\u5e38\u8bbe\u4e3a 9000\uff09\u3002\u4e0d\u8981\u8ddf http_port \u6df7\u6dc6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," \u2013 \u7528\u4e8e\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u7528\u6237\u540d\u3002\u9ed8\u8ba4\u503c\uff1adefault\u3002\u8be5\u7528\u6237\u5fc5\u987b\u6709\u6743\u9650\u8bbf\u95ee\u8be5\u8fdc\u7a0b\u670d\u52a1\u5668\u3002\u8bbf\u95ee\u6743\u9650\u914d\u7f6e\u5728 users.xml \u6587\u4ef6\u4e2d\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\xab\u8bbf\u95ee\u6743\u9650\xbb\u90e8\u5206\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," \u2013 \u7528\u4e8e\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u5bc6\u7801\u3002\u9ed8\u8ba4\u503c\uff1a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secure")," \u2013 \u662f\u5426\u4f7f\u7528ssl\u8fdb\u884c\u8fde\u63a5\uff0c\u8bbe\u4e3atrue\u65f6\uff0c\u901a\u5e38\u4e5f\u5e94\u8be5\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"port")," = 9440\u3002\u670d\u52a1\u5668\u4e5f\u8981\u76d1\u542c ",(0,i.kt)("inlineCode",{parentName:"li"},"<tcp_port_secure>9440</tcp_port_secure>")," \u5e76\u6709\u6b63\u786e\u7684\u8bc1\u4e66\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compression")," - \u662f\u5426\u4f7f\u7528\u6570\u636e\u538b\u7f29\u3002\u9ed8\u8ba4\u503c\uff1atrue\u3002")),(0,i.kt)("p",null,"\u914d\u7f6e\u4e86\u526f\u672c\uff0c\u8bfb\u53d6\u64cd\u4f5c\u4f1a\u4ece\u6bcf\u4e2a\u5206\u7247\u91cc\u9009\u62e9\u4e00\u4e2a\u53ef\u7528\u7684\u526f\u672c\u3002\u53ef\u914d\u7f6e\u8d1f\u8f7d\u5e73\u8861\u7b97\u6cd5\uff08\u6311\u9009\u526f\u672c\u7684\u65b9\u5f0f\uff09 - \u8bf7\u53c2\u9605\xabload_balancing\xbb\u8bbe\u7f6e\u3002\n\u5982\u679c\u8ddf\u670d\u52a1\u5668\u7684\u8fde\u63a5\u4e0d\u53ef\u7528\uff0c\u5219\u5728\u5c1d\u8bd5\u77ed\u8d85\u65f6\u7684\u91cd\u8fde\u3002\u5982\u679c\u91cd\u8fde\u5931\u8d25\uff0c\u5219\u9009\u62e9\u4e0b\u4e00\u4e2a\u526f\u672c\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002\u5982\u679c\u8ddf\u6240\u6709\u526f\u672c\u7684\u8fde\u63a5\u5c1d\u8bd5\u90fd\u5931\u8d25\uff0c\u5219\u5c1d\u8bd5\u7528\u76f8\u540c\u7684\u65b9\u5f0f\u518d\u91cd\u590d\u51e0\u6b21\u3002\n\u8be5\u673a\u5236\u6709\u5229\u4e8e\u7cfb\u7edf\u53ef\u7528\u6027\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u5b8c\u5168\u5bb9\u9519\uff1a\u5982\u6709\u8fdc\u7a0b\u670d\u52a1\u5668\u80fd\u591f\u63a5\u53d7\u8fde\u63a5\uff0c\u4f46\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u6216\u72b6\u51b5\u4e0d\u4f73\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u914d\u7f6e\u4e00\u4e2a\uff08\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u64cd\u4f5c\u66f4\u5e94\u8be5\u79f0\u4e3a\u8fdc\u7a0b\u67e5\u8be2\uff0c\u800c\u4e0d\u662f\u5206\u5e03\u5f0f\u67e5\u8be2\uff09\u6216\u4efb\u610f\u591a\u4e2a\u5206\u7247\u3002\u5728\u6bcf\u4e2a\u5206\u7247\u4e2d\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e00\u4e2a\u6216\u4efb\u610f\u591a\u4e2a\u526f\u672c\u3002\u4e0d\u540c\u5206\u7247\u53ef\u914d\u7f6e\u4e0d\u540c\u6570\u91cf\u7684\u526f\u672c\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d\u914d\u7f6e\u4efb\u610f\u6570\u91cf\u7684\u96c6\u7fa4\u3002"),(0,i.kt)("p",null,"\u8981\u67e5\u770b\u96c6\u7fa4\uff0c\u53ef\u4f7f\u7528\xabsystem.clusters\xbb\u8868\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u5206\u5e03\u5f0f\u5f15\u64ce\u53ef\u4ee5\u50cf\u4f7f\u7528\u672c\u5730\u670d\u52a1\u5668\u4e00\u6837\u4f7f\u7528\u96c6\u7fa4\u3002\u4f46\u662f\uff0c\u96c6\u7fa4\u4e0d\u662f\u81ea\u52a8\u6269\u5c55\u7684\uff1a\u4f60\u5fc5\u987b\u7f16\u5199\u96c6\u7fa4\u914d\u7f6e\u5230\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6\u4e2d\uff08\u6700\u597d\uff0c\u7ed9\u6240\u6709\u96c6\u7fa4\u7684\u670d\u52a1\u5668\u5199\u4e0a\u5b8c\u6574\u914d\u7f6e\uff09\u3002"),(0,i.kt)("p",null,"\u4e0d\u652f\u6301\u7528\u5206\u5e03\u5f0f\u8868\u67e5\u8be2\u522b\u7684\u5206\u5e03\u5f0f\u8868\uff08\u9664\u975e\u8be5\u8868\u53ea\u6709\u4e00\u4e2a\u5206\u7247\uff09\u3002\u6216\u8005\u8bf4\uff0c\u8981\u7528\u5206\u5e03\u8868\u67e5\u67e5\u8be2\xab\u6700\u7ec8\xbb\u7684\u6570\u636e\u8868\u3002\n\u5206\u5e03\u5f0f\u5f15\u64ce\u9700\u8981\u5c06\u96c6\u7fa4\u4fe1\u606f\u5199\u5165\u914d\u7f6e\u6587\u4ef6\u3002\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u96c6\u7fa4\u4fe1\u606f\u4f1a\u5373\u65f6\u66f4\u65b0\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\u5668\u3002\u5982\u679c\u4f60\u6bcf\u6b21\u662f\u8981\u5411\u4e0d\u786e\u5b9a\u7684\u4e00\u7ec4\u5206\u7247\u548c\u526f\u672c\u53d1\u9001\u67e5\u8be2\uff0c\u5219\u4e0d\u9002\u5408\u521b\u5efa\u5206\u5e03\u5f0f\u8868 - \u800c\u5e94\u8be5\u4f7f\u7528\xab\u8fdc\u7a0b\xbb\u8868\u51fd\u6570\u3002 \u8bf7\u53c2\u9605\xab\u8868\u51fd\u6570\xbb\u90e8\u5206\u3002"),(0,i.kt)("h2",{id:"\u5199\u5165\u6570\u636e"},"\u5199\u5165\u6570\u636e"),(0,i.kt)("p",null,"\u5411\u96c6\u7fa4\u5199\u6570\u636e\u7684\u65b9\u6cd5\u6709\u4e24\u79cd\uff1a"),(0,i.kt)("p",null,"\u4e00\uff0c\u81ea\u5df2\u6307\u5b9a\u8981\u5c06\u54ea\u4e9b\u6570\u636e\u5199\u5165\u54ea\u4e9b\u670d\u52a1\u5668\uff0c\u5e76\u76f4\u63a5\u5728\u6bcf\u4e2a\u5206\u7247\u4e0a\u6267\u884c\u5199\u5165\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5728\u5206\u5e03\u5f0f\u8868\u4e0a\xab\u67e5\u8be2\xbb\uff0c\u5728\u6570\u636e\u8868\u4e0a INSERT\u3002\n\u8fd9\u662f\u6700\u7075\u6d3b\u7684\u89e3\u51b3\u65b9\u6848 \u2013 \u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u5206\u7247\u65b9\u6848\uff0c\u5bf9\u4e8e\u590d\u6742\u4e1a\u52a1\u7279\u6027\u7684\u9700\u6c42\uff0c\u8fd9\u53ef\u80fd\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\n\u8fd9\u4e5f\u662f\u6700\u4f73\u89e3\u51b3\u65b9\u6848\uff0c\u56e0\u4e3a\u6570\u636e\u53ef\u4ee5\u5b8c\u5168\u72ec\u7acb\u5730\u5199\u5165\u4e0d\u540c\u7684\u5206\u7247\u3002"),(0,i.kt)("p",null,"\u4e8c\uff0c\u5728\u5206\u5e03\u5f0f\u8868\u4e0a\u6267\u884c INSERT\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5206\u5e03\u5f0f\u8868\u4f1a\u8de8\u670d\u52a1\u5668\u5206\u53d1\u63d2\u5165\u6570\u636e\u3002\n\u4e3a\u4e86\u5199\u5165\u5206\u5e03\u5f0f\u8868\uff0c\u5fc5\u987b\u8981\u914d\u7f6e\u5206\u7247\u952e\uff08\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff09\u3002\u5f53\u7136\uff0c\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u5206\u7247\uff0c\u5219\u5199\u64cd\u4f5c\u5728\u6ca1\u6709\u5206\u7247\u952e\u7684\u60c5\u51b5\u4e0b\u4e5f\u80fd\u5de5\u4f5c\uff0c\u56e0\u4e3a\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5206\u7247\u952e\u6ca1\u6709\u610f\u4e49\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u5206\u7247\u90fd\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u6743\u91cd\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6743\u91cd\u7b49\u4e8e1\u3002\u6570\u636e\u4f9d\u636e\u5206\u7247\u6743\u91cd\u6309\u6bd4\u4f8b\u5206\u53d1\u5230\u5206\u7247\u4e0a\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6709\u4e24\u4e2a\u5206\u7247\uff0c\u7b2c\u4e00\u4e2a\u5206\u7247\u7684\u6743\u91cd\u662f9\uff0c\u800c\u7b2c\u4e8c\u4e2a\u5206\u7247\u7684\u6743\u91cd\u662f10\uff0c\u5219\u53d1\u9001 9 / 19 \u7684\u884c\u5230\u7b2c\u4e00\u4e2a\u5206\u7247\uff0c 10 / 19 \u7684\u884c\u5230\u7b2c\u4e8c\u4e2a\u5206\u7247\u3002"),(0,i.kt)("p",null,"\u5206\u7247\u53ef\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49 \u2018internal_replication\u2019 \u53c2\u6570\u3002"),(0,i.kt)("p",null,"\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a\xabtrue\xbb\u65f6\uff0c\u5199\u64cd\u4f5c\u53ea\u9009\u4e00\u4e2a\u6b63\u5e38\u7684\u526f\u672c\u5199\u5165\u6570\u636e\u3002\u5982\u679c\u5206\u5e03\u5f0f\u8868\u7684\u5b50\u8868\u662f\u590d\u5236\u8868(","*","ReplicaMergeTree)\uff0c\u8bf7\u4f7f\u7528\u6b64\u65b9\u6848\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u8fd9\u5176\u5b9e\u662f\u628a\u6570\u636e\u7684\u590d\u5236\u5de5\u4f5c\u4ea4\u7ed9\u5b9e\u9645\u9700\u8981\u5199\u5165\u6570\u636e\u7684\u8868\u672c\u8eab\u800c\u4e0d\u662f\u5206\u5e03\u5f0f\u8868\u3002"),(0,i.kt)("p",null,"\u82e5\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a\xabfalse\xbb\uff08\u9ed8\u8ba4\u503c\uff09\uff0c\u5199\u64cd\u4f5c\u4f1a\u5c06\u6570\u636e\u5199\u5165\u6240\u6709\u526f\u672c\u3002\u5b9e\u8d28\u4e0a\uff0c\u8fd9\u610f\u5473\u7740\u8981\u5206\u5e03\u5f0f\u8868\u672c\u8eab\u6765\u590d\u5236\u6570\u636e\u3002\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u5982\u4f7f\u7528\u590d\u5236\u8868\u7684\u597d\uff0c\u56e0\u4e3a\u4e0d\u4f1a\u68c0\u67e5\u526f\u672c\u7684\u4e00\u81f4\u6027\uff0c\u5e76\u4e14\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u526f\u672c\u6570\u636e\u53ef\u80fd\u4f1a\u6709\u4e9b\u4e0d\u4e00\u6837\u3002"),(0,i.kt)("p",null,"\u9009\u62e9\u5c06\u4e00\u884c\u6570\u636e\u53d1\u9001\u5230\u54ea\u4e2a\u5206\u7247\u7684\u65b9\u6cd5\u662f\uff0c\u9996\u5148\u8ba1\u7b97\u5206\u7247\u8868\u8fbe\u5f0f\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a\u8ba1\u7b97\u7ed3\u679c\u9664\u4ee5\u6240\u6709\u5206\u7247\u7684\u6743\u91cd\u603b\u548c\u5f97\u5230\u4f59\u6570\u3002\u8be5\u884c\u4f1a\u53d1\u9001\u5230\u90a3\u4e2a\u5305\u542b\u8be5\u4f59\u6570\u7684\u4ece\u2019prev_weight\u2019\u5230\u2019prev_weights + weight\u2019\u7684\u534a\u95ed\u534a\u5f00\u533a\u95f4\u5bf9\u5e94\u7684\u5206\u7247\u4e0a\uff0c\u5176\u4e2d \u2018prev_weights\u2019 \u662f\u8be5\u5206\u7247\u524d\u9762\u7684\u6240\u6709\u5206\u7247\u7684\u6743\u91cd\u548c\uff0c\u2018weight\u2019 \u662f\u8be5\u5206\u7247\u7684\u6743\u91cd\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6709\u4e24\u4e2a\u5206\u7247\uff0c\u7b2c\u4e00\u4e2a\u5206\u7247\u6743\u91cd\u4e3a9\uff0c\u800c\u7b2c\u4e8c\u4e2a\u5206\u7247\u6743\u91cd\u4e3a10\uff0c\u5219\u4f59\u6570\u5728 ","[","0,9) \u4e2d\u7684\u884c\u53d1\u7ed9\u7b2c\u4e00\u4e2a\u5206\u7247\uff0c\u4f59\u6570\u5728 ","[","9,19) \u4e2d\u7684\u884c\u53d1\u7ed9\u7b2c\u4e8c\u4e2a\u5206\u7247\u3002"),(0,i.kt)("p",null,"\u5206\u7247\u8868\u8fbe\u5f0f\u53ef\u4ee5\u662f\u7531\u5e38\u91cf\u548c\u8868\u5217\u7ec4\u6210\u7684\u4efb\u4f55\u8fd4\u56de\u6574\u6570\u8868\u8fbe\u5f0f\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8868\u8fbe\u5f0f \u2018rand()\u2019 \u6765\u968f\u673a\u5206\u914d\u6570\u636e\uff0c\u6216\u8005\u4f7f\u7528 \u2018UserID\u2019 \u6765\u6309\u7528\u6237 ID \u7684\u4f59\u6570\u5206\u5e03\uff08\u76f8\u540c\u7528\u6237\u7684\u6570\u636e\u5c06\u5206\u914d\u5230\u5355\u4e2a\u5206\u7247\u4e0a\uff0c\u8fd9\u53ef\u964d\u4f4e\u5e26\u6709\u7528\u6237\u4fe1\u606f\u7684 IN \u548c JOIN \u7684\u8bed\u53e5\u8fd0\u884c\u7684\u590d\u6742\u5ea6\uff09\u3002\u5982\u679c\u8be5\u5217\u6570\u636e\u5206\u5e03\u4e0d\u591f\u5747\u5300\uff0c\u53ef\u4ee5\u5c06\u5176\u5305\u88c5\u5728\u6563\u5217\u51fd\u6570\u4e2d\uff1aintHash64(UserID)\u3002"),(0,i.kt)("p",null,"\u8fd9\u79cd\u7b80\u5355\u7684\u7528\u4f59\u6570\u6765\u9009\u62e9\u5206\u7247\u7684\u65b9\u6848\u662f\u6709\u5c40\u9650\u7684\uff0c\u5e76\u4e0d\u603b\u9002\u7528\u3002\u5b83\u9002\u7528\u4e8e\u4e2d\u578b\u548c\u5927\u578b\u6570\u636e\uff08\u6570\u5341\u53f0\u670d\u52a1\u5668\uff09\u7684\u573a\u666f\uff0c\u4f46\u4e0d\u9002\u7528\u4e8e\u5de8\u91cf\u6570\u636e\uff08\u6570\u767e\u53f0\u6216\u66f4\u591a\u670d\u52a1\u5668\uff09\u7684\u573a\u666f\u3002\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u5e94\u6839\u636e\u4e1a\u52a1\u7279\u6027\u9700\u6c42\u8003\u8651\u7684\u5206\u7247\u65b9\u6848\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u7528\u5206\u5e03\u5f0f\u8868\u7684\u591a\u5206\u7247\u3002"),(0,i.kt)("p",null,"SELECT \u67e5\u8be2\u4f1a\u88ab\u53d1\u9001\u5230\u6240\u6709\u5206\u7247\uff0c\u5e76\u4e14\u65e0\u8bba\u6570\u636e\u5728\u5206\u7247\u4e2d\u5982\u4f55\u5206\u5e03\uff08\u5373\u4f7f\u6570\u636e\u5b8c\u5168\u968f\u673a\u5206\u5e03\uff09\u90fd\u53ef\u6b63\u5e38\u5de5\u4f5c\u3002\u6dfb\u52a0\u65b0\u5206\u7247\u65f6\uff0c\u4e0d\u5fc5\u5c06\u65e7\u6570\u636e\u4f20\u8f93\u5230\u8be5\u5206\u7247\u3002\u4f60\u53ef\u4ee5\u7ed9\u65b0\u5206\u7247\u5206\u914d\u5927\u6743\u91cd\u7136\u540e\u5199\u65b0\u6570\u636e - \u6570\u636e\u53ef\u80fd\u4f1a\u7a0d\u5206\u5e03\u4e0d\u5747\uff0c\u4f46\u67e5\u8be2\u4f1a\u6b63\u786e\u9ad8\u6548\u5730\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u60c5\u51b5\uff0c\u4f60\u9700\u8981\u5173\u6ce8\u5206\u7247\u65b9\u6848\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u9700\u8981\u7279\u5b9a\u952e\u8fde\u63a5\u6570\u636e\uff08 IN \u6216 JOIN \uff09\u7684\u67e5\u8be2\u3002\u5982\u679c\u6570\u636e\u662f\u7528\u8be5\u952e\u8fdb\u884c\u5206\u7247\uff0c\u5219\u5e94\u4f7f\u7528\u672c\u5730 IN \u6216 JOIN \u800c\u4e0d\u662f GLOBAL IN \u6216 GLOBAL JOIN\uff0c\u8fd9\u6837\u6548\u7387\u66f4\u9ad8\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5927\u91cf\u670d\u52a1\u5668\uff08\u4e0a\u767e\u6216\u66f4\u591a\uff09\uff0c\u4f46\u6709\u5927\u91cf\u5c0f\u67e5\u8be2\uff08\u4e2a\u522b\u5ba2\u6237\u7684\u67e5\u8be2 - \u7f51\u7ad9\uff0c\u5e7f\u544a\u5546\u6216\u5408\u4f5c\u4f19\u4f34\uff09\u3002\u4e3a\u4e86\u4f7f\u5c0f\u67e5\u8be2\u4e0d\u5f71\u54cd\u6574\u4e2a\u96c6\u7fa4\uff0c\u8ba9\u5355\u4e2a\u5ba2\u6237\u7684\u6570\u636e\u5904\u4e8e\u5355\u4e2a\u5206\u7247\u4e0a\u662f\u6709\u610f\u4e49\u7684\u3002\u6216\u8005 \u4f60\u53ef\u4ee5\u914d\u7f6e\u4e24\u7ea7\u5206\u7247\uff1a\u5c06\u6574\u4e2a\u96c6\u7fa4\u5212\u5206\u4e3a\xab\u5c42\xbb\uff0c\u4e00\u4e2a\u5c42\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u5206\u7247\u3002\u5355\u4e2a\u5ba2\u6237\u7684\u6570\u636e\u4f4d\u4e8e\u5355\u4e2a\u5c42\u4e0a\uff0c\u6839\u636e\u9700\u8981\u5c06\u5206\u7247\u6dfb\u52a0\u5230\u5c42\u4e2d\uff0c\u5c42\u4e2d\u7684\u6570\u636e\u968f\u673a\u5206\u5e03\u3002\u7136\u540e\u7ed9\u6bcf\u5c42\u521b\u5efa\u5206\u5e03\u5f0f\u8868\uff0c\u518d\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u7684\u5206\u5e03\u5f0f\u8868\u7528\u4e8e\u5168\u5c40\u7684\u67e5\u8be2\u3002")),(0,i.kt)("p",null,"\u6570\u636e\u662f\u5f02\u6b65\u5199\u5165\u7684\u3002\u5bf9\u4e8e\u5206\u5e03\u5f0f\u8868\u7684 INSERT\uff0c\u6570\u636e\u5757\u53ea\u5199\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u3002\u4e4b\u540e\u4f1a\u5c3d\u5feb\u5730\u5728\u540e\u53f0\u53d1\u9001\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u3002\u53d1\u9001\u6570\u636e\u7684\u5468\u671f\u6027\u662f\u7531",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#distributed_directory_monitor_sleep_time_ms"},"distributed_directory_monitor_sleep_time_ms"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#distributed_directory_monitor_max_sleep_time_ms"},"distributed_directory_monitor_max_sleep_time_ms"),"\u8bbe\u7f6e\u3002\u5206\u5e03\u5f0f\u5f15\u64ce\u4f1a\u5206\u522b\u53d1\u9001\u6bcf\u4e2a\u63d2\u5165\u6570\u636e\u7684\u6587\u4ef6\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#distributed_directory_monitor_batch_inserts"},"distributed_directory_monitor_batch_inserts"),"\u8bbe\u7f6e\u542f\u7528\u6279\u91cf\u53d1\u9001\u6587\u4ef6\u3002\u8be5\u8bbe\u7f6e\u901a\u8fc7\u66f4\u597d\u5730\u5229\u7528\u672c\u5730\u670d\u52a1\u5668\u548c\u7f51\u7edc\u8d44\u6e90\u6765\u63d0\u9ad8\u96c6\u7fa4\u6027\u80fd\u3002\u4f60\u5e94\u8be5\u68c0\u67e5\u8868\u76ee\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/database/table/"),"\u4e2d\u7684\u6587\u4ef6\u5217\u8868(\u7b49\u5f85\u53d1\u9001\u7684\u6570\u636e)\u6765\u68c0\u67e5\u6570\u636e\u662f\u5426\u53d1\u9001\u6210\u529f\u3002\u6267\u884c\u540e\u53f0\u4efb\u52a1\u7684\u7ebf\u7a0b\u6570\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#background_distributed_schedule_pool_size"},"background_distributed_schedule_pool_size"),"\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5728 INSERT \u5230\u5206\u5e03\u5f0f\u8868\u65f6\u670d\u52a1\u5668\u8282\u70b9\u4e22\u5931\u6216\u91cd\u542f\uff08\u5982\uff0c\u8bbe\u5907\u6545\u969c\uff09\uff0c\u5219\u63d2\u5165\u7684\u6570\u636e\u53ef\u80fd\u4f1a\u4e22\u5931\u3002\u5982\u679c\u5728\u8868\u76ee\u5f55\u4e2d\u68c0\u6d4b\u5230\u635f\u574f\u7684\u6570\u636e\u5206\u7247\uff0c\u5219\u4f1a\u5c06\u5176\u8f6c\u79fb\u5230\xabbroken\xbb\u5b50\u76ee\u5f55\uff0c\u5e76\u4e0d\u518d\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"distributed-reading-data"},"\u8bfb\u53d6\u6570\u636e"),(0,i.kt)("p",null,"\u5f53\u67e5\u8be2\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Distributed"),"\u8868\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u67e5\u8be2\u88ab\u53d1\u9001\u5230\u6240\u6709\u7684\u5206\u7247\uff0c\u4e0d\u7ba1\u6570\u636e\u662f\u5982\u4f55\u5206\u5e03\u5728\u5206\u7247\u4e0a\u7684(\u5b83\u4eec\u53ef\u4ee5\u5b8c\u5168\u968f\u673a\u5206\u5e03)\u3002\u5f53\u60a8\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5206\u7247\u65f6\uff0c\u60a8\u4e0d\u5fc5\u5c06\u65e7\u6570\u636e\u4f20\u8f93\u5230\u5b83\u3002\u76f8\u53cd\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u66f4\u91cd\u7684\u6743\u91cd\u5411\u5176\u5199\u5165\u65b0\u6570\u636e\u2014\u2014\u6570\u636e\u7684\u5206\u5e03\u4f1a\u7a0d\u5fae\u4e0d\u5747\u5300\uff0c\u4f46\u67e5\u8be2\u5c06\u6b63\u786e\u6709\u6548\u5730\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u5f53\u542f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"max_parallel_replicas"),"\u9009\u9879\u65f6\uff0c\u67e5\u8be2\u5904\u7406\u5c06\u5728\u5355\u4e2a\u5206\u7247\u4e2d\u7684\u6240\u6709\u526f\u672c\u4e4b\u95f4\u5e76\u884c\u5316\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#settings-max_parallel_replicas"},"max_parallel_replicas"),"\u3002"),(0,i.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5206\u5e03\u5f0f",(0,i.kt)("inlineCode",{parentName:"p"},"in"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"global in"),"\u67e5\u8be2\u662f\u5982\u4f55\u5904\u7406\u7684\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/operators/in#select-distributed-subqueries"},"\u8fd9\u91cc"),"\u6587\u6863\u3002"),(0,i.kt)("h2",{id:"virtual-columns"},"\u865a\u62df\u5217"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_shard_num")," \u2014 \u8868",(0,i.kt)("inlineCode",{parentName:"li"},"system.clusters")," \u4e2d\u7684  ",(0,i.kt)("inlineCode",{parentName:"li"},"shard_num")," \u503c . \u6570\u636e\u7c7b\u578b: ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt32"),".")),(0,i.kt)("p",null,'!!! note "\u5907\u6ce8"\n\u56e0\u4e3a ',(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/table-functions/remote"},"remote")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/table-functions/cluster"},"cluster")," \u8868\u65b9\u6cd5\u5185\u90e8\u521b\u5efa\u4e86\u5206\u5e03\u5f0f\u8868\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"_shard_num")," \u5bf9\u4ed6\u4eec\u90fd\u6709\u6548."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8be6\u89c1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/#table_engines-virtual_columns"},"\u865a\u62df\u5217")," \u63cf\u8ff0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#background_distributed_schedule_pool_size"},"background_distributed_schedule_pool_size")," \u8bbe\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/other-functions#shard-num"},"shardNum()")," \u548c ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/other-functions#shard-count"},"shardCount()")," \u65b9\u6cd5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/distributed/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);