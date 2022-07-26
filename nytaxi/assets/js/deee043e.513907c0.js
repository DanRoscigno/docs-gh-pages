"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29829],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,_=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(_,l(l({ref:t},m),{},{components:n})):i.createElement(_,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],o={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},p="\u7cfb\u7edf\u3002\u526f\u672c",s={unversionedId:"zh/operations/system-tables/replicas",id:"zh/operations/system-tables/replicas",title:"\u7cfb\u7edf\u3002\u526f\u672c",description:"system_tables-replicas}",source:"@site/docs/zh/operations/system-tables/replicas.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/replicas",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/replicas",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/replicas.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.quotas_usage",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/quotas_usage"},next:{title:"system.replicated_fetches",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/replicated_fetches"}},m={},u=[],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system_tables-replicas"},"\u7cfb\u7edf\u3002\u526f\u672c"),(0,r.kt)("p",null,"\u5305\u542b\u9a7b\u7559\u5728\u672c\u5730\u670d\u52a1\u5668\u4e0a\u7684\u590d\u5236\u8868\u7684\u4fe1\u606f\u548c\u72b6\u6001\u3002\n\u6b64\u8868\u53ef\u7528\u4e8e\u76d1\u89c6\u3002 \u8be5\u8868\u5bf9\u4e8e\u6bcf\u4e2a\u5df2\u590d\u5236\u7684","*","\u8868\u90fd\u5305\u542b\u4e00\u884c\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.replicas\nWHERE table = 'visits'\nFORMAT Vertical\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                   merge\ntable:                      visits\nengine:                     ReplicatedCollapsingMergeTree\nis_leader:                  1\ncan_become_leader:          1\nis_readonly:                0\nis_session_expired:         0\nfuture_parts:               1\nparts_to_check:             0\nzookeeper_path:             /clickhouse/tables/01-06/visits\nreplica_name:               example01-06-1.yandex.ru\nreplica_path:               /clickhouse/tables/01-06/visits/replicas/example01-06-1.yandex.ru\ncolumns_version:            9\nqueue_size:                 1\ninserts_in_queue:           0\nmerges_in_queue:            1\npart_mutations_in_queue:    0\nqueue_oldest_time:          2020-02-20 08:34:30\ninserts_oldest_time:        1970-01-01 00:00:00\nmerges_oldest_time:         2020-02-20 08:34:30\npart_mutations_oldest_time: 1970-01-01 00:00:00\noldest_part_to_get:\noldest_part_to_merge_to:    20200220_20284_20840_7\noldest_part_to_mutate_to:\nlog_max_index:              596273\nlog_pointer:                596274\nlast_queue_update:          2020-02-20 08:34:32\nabsolute_delay:             0\ntotal_replicas:             2\nactive_replicas:            2\n")),(0,r.kt)("p",null,"\u5217:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")," (",(0,r.kt)("inlineCode",{parentName:"li"},"String"),")-\u6570\u636e\u5e93\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table")," (",(0,r.kt)("inlineCode",{parentName:"li"},"String"),")-\u8868\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"engine")," (",(0,r.kt)("inlineCode",{parentName:"li"},"String"),")-\u8868\u5f15\u64ce\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_leader")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt8"),")-\u526f\u672c\u662f\u5426\u662f\u9886\u5bfc\u8005\u3002\n\u4e00\u6b21\u53ea\u6709\u4e00\u4e2a\u526f\u672c\u53ef\u4ee5\u6210\u4e3a\u9886\u5bfc\u8005\u3002 \u9886\u5bfc\u8005\u8d1f\u8d23\u9009\u62e9\u8981\u6267\u884c\u7684\u540e\u53f0\u5408\u5e76\u3002\n\u8bf7\u6ce8\u610f\uff0c\u53ef\u4ee5\u5bf9\u4efb\u4f55\u53ef\u7528\u4e14\u5728ZK\u4e2d\u5177\u6709\u4f1a\u8bdd\u7684\u526f\u672c\u6267\u884c\u5199\u64cd\u4f5c\uff0c\u800c\u4e0d\u7ba1\u8be5\u526f\u672c\u662f\u5426\u4e3aleader\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"can_become_leader")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt8"),")-\u526f\u672c\u662f\u5426\u53ef\u4ee5\u5f53\u9009\u4e3a\u9886\u5bfc\u8005\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_readonly")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt8"),")-\u526f\u672c\u662f\u5426\u5904\u4e8e\u53ea\u8bfb\u6a21\u5f0f\u3002\n\u5982\u679c\u914d\u7f6e\u6ca1\u6709ZooKeeper\u7684\u90e8\u5206\uff0c\u5982\u679c\u5728ZooKeeper\u4e2d\u91cd\u65b0\u521d\u59cb\u5316\u4f1a\u8bdd\u65f6\u53d1\u751f\u672a\u77e5\u9519\u8bef\uff0c\u4ee5\u53ca\u5728ZooKeeper\u4e2d\u91cd\u65b0\u521d\u59cb\u5316\u4f1a\u8bdd\u65f6\u53d1\u751f\u672a\u77e5\u9519\u8bef\uff0c\u5219\u6b64\u6a21\u5f0f\u5c06\u6253\u5f00\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_session_expired")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt8"),")-\u4e0eZooKeeper\u7684\u4f1a\u8bdd\u5df2\u7ecf\u8fc7\u671f\u3002 \u57fa\u672c\u4e0a\u4e00\u6837 ",(0,r.kt)("inlineCode",{parentName:"li"},"is_readonly"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"future_parts")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt32"),")-\u7531\u4e8e\u5c1a\u672a\u5b8c\u6210\u7684\u63d2\u5165\u6216\u5408\u5e76\u800c\u663e\u793a\u7684\u6570\u636e\u90e8\u5206\u7684\u6570\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parts_to_check")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt32"),")-\u961f\u5217\u4e2d\u7528\u4e8e\u9a8c\u8bc1\u7684\u6570\u636e\u90e8\u5206\u7684\u6570\u91cf\u3002 \u5982\u679c\u6000\u7591\u96f6\u4ef6\u53ef\u80fd\u5df2\u635f\u574f\uff0c\u5219\u5c06\u5176\u653e\u5165\u9a8c\u8bc1\u961f\u5217\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zookeeper_path")," (",(0,r.kt)("inlineCode",{parentName:"li"},"String"),")-\u5728ZooKeeper\u4e2d\u7684\u8868\u6570\u636e\u8def\u5f84\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replica_name")," (",(0,r.kt)("inlineCode",{parentName:"li"},"String"),")-\u5728\u52a8\u7269\u56ed\u7ba1\u7406\u5458\u526f\u672c\u540d\u79f0. \u540c\u4e00\u8868\u7684\u4e0d\u540c\u526f\u672c\u5177\u6709\u4e0d\u540c\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replica_path")," (",(0,r.kt)("inlineCode",{parentName:"li"},"String"),")-\u5728ZooKeeper\u4e2d\u7684\u526f\u672c\u6570\u636e\u7684\u8def\u5f84\u3002 \u4e0e\u8fde\u63a5\u76f8\u540c \u2018zookeeper_path/replicas/replica_path\u2019."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"columns_version")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Int32"),")-\u8868\u7ed3\u6784\u7684\u7248\u672c\u53f7\u3002 \u6307\u793a\u6267\u884cALTER\u7684\u6b21\u6570\u3002 \u5982\u679c\u526f\u672c\u6709\u4e0d\u540c\u7684\u7248\u672c\uff0c\u8fd9\u610f\u5473\u7740\u4e00\u4e9b\u526f\u672c\u8fd8\u6ca1\u6709\u505a\u51fa\u6240\u6709\u7684\u6539\u53d8\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queue_size")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt32"),")-\u7b49\u5f85\u6267\u884c\u7684\u64cd\u4f5c\u7684\u961f\u5217\u5927\u5c0f\u3002 \u64cd\u4f5c\u5305\u62ec\u63d2\u5165\u6570\u636e\u5757\u3001\u5408\u5e76\u548c\u67d0\u4e9b\u5176\u4ed6\u64cd\u4f5c\u3002 \u5b83\u901a\u5e38\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"future_parts"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inserts_in_queue")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt32"),")-\u9700\u8981\u63d2\u5165\u6570\u636e\u5757\u7684\u6570\u91cf\u3002 \u63d2\u5165\u901a\u5e38\u590d\u5236\u5f97\u76f8\u5f53\u5feb\u3002 \u5982\u679c\u8fd9\u4e2a\u6570\u5b57\u5f88\u5927\uff0c\u8fd9\u610f\u5473\u7740\u6709\u4ec0\u4e48\u4e0d\u5bf9\u52b2\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merges_in_queue")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt32"),")-\u7b49\u5f85\u8fdb\u884c\u5408\u5e76\u7684\u6570\u91cf\u3002 \u6709\u65f6\u5408\u5e76\u65f6\u95f4\u5f88\u957f\uff0c\u56e0\u6b64\u6b64\u503c\u53ef\u80fd\u957f\u65f6\u95f4\u5927\u4e8e\u96f6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"part_mutations_in_queue")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt32"),"\uff09-\u7b49\u5f85\u8fdb\u884c\u7684\u7a81\u53d8\u7684\u6570\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queue_oldest_time")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime"),")-\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"queue_size")," \u5927\u4e8e0\uff0c\u663e\u793a\u4f55\u65f6\u5c06\u6700\u65e7\u7684\u64cd\u4f5c\u6dfb\u52a0\u5230\u961f\u5217\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inserts_oldest_time")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime"),"\uff09-\u770b ",(0,r.kt)("inlineCode",{parentName:"li"},"queue_oldest_time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merges_oldest_time")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime"),"\uff09-\u770b ",(0,r.kt)("inlineCode",{parentName:"li"},"queue_oldest_time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"part_mutations_oldest_time")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime"),"\uff09-\u770b ",(0,r.kt)("inlineCode",{parentName:"li"},"queue_oldest_time"))),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u76844\u5217\u53ea\u6709\u5728\u6709ZK\u6d3b\u52a8\u4f1a\u8bdd\u7684\u60c5\u51b5\u4e0b\u624d\u5177\u6709\u975e\u96f6\u503c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log_max_index")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt64"),")-\u4e00\u822c\u6d3b\u52a8\u65e5\u5fd7\u4e2d\u7684\u6700\u5927\u6761\u76ee\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log_pointer")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt64"),")-\u526f\u672c\u590d\u5236\u5230\u5176\u6267\u884c\u961f\u5217\u7684\u5e38\u89c4\u6d3b\u52a8\u65e5\u5fd7\u4e2d\u7684\u6700\u5927\u6761\u76ee\u6570\u52a0\u4e00\u3002 \u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"log_pointer")," \u6bd4 ",(0,r.kt)("inlineCode",{parentName:"li"},"log_max_index"),"\uff0c\u6709\u70b9\u4e0d\u5bf9\u52b2\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"last_queue_update")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime"),")-\u4e0a\u6b21\u66f4\u65b0\u961f\u5217\u65f6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"absolute_delay")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt64"),"\uff09-\u5f53\u524d\u526f\u672c\u6709\u591a\u5927\u6ede\u540e\u79d2\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_replicas")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt8"),")-\u6b64\u8868\u7684\u5df2\u77e5\u526f\u672c\u603b\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"active_replicas")," (",(0,r.kt)("inlineCode",{parentName:"li"},"UInt8"),")-\u5728ZooKeeper\u4e2d\u5177\u6709\u4f1a\u8bdd\u7684\u6b64\u8868\u7684\u526f\u672c\u7684\u6570\u91cf\uff08\u5373\u6b63\u5e38\u8fd0\u884c\u7684\u526f\u672c\u7684\u6570\u91cf\uff09\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u8bf7\u6c42\u6240\u6709\u5217\uff0c\u8868\u53ef\u80fd\u4f1a\u5de5\u4f5c\u5f97\u6709\u70b9\u6162\uff0c\u56e0\u4e3a\u6bcf\u884c\u90fd\u4f1a\u4eceZooKeeper\u8fdb\u884c\u51e0\u6b21\u8bfb\u53d6\u3002\n\u5982\u679c\u60a8\u6ca1\u6709\u8bf7\u6c42\u6700\u540e4\u5217\uff08log_max_index\uff0clog_pointer\uff0ctotal_replicas\uff0cactive_replicas\uff09\uff0c\u8868\u5de5\u4f5c\u5f97\u5f88\u5feb\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u68c0\u67e5\u4e00\u5207\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff0c\u5982\u4e0b\u6240\u793a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    database,\n    table,\n    is_leader,\n    is_readonly,\n    is_session_expired,\n    future_parts,\n    parts_to_check,\n    columns_version,\n    queue_size,\n    inserts_in_queue,\n    merges_in_queue,\n    log_max_index,\n    log_pointer,\n    total_replicas,\n    active_replicas\nFROM system.replicas\nWHERE\n       is_readonly\n    OR is_session_expired\n    OR future_parts > 20\n    OR parts_to_check > 10\n    OR queue_size > 20\n    OR inserts_in_queue > 10\n    OR log_max_index - log_pointer > 10\n    OR total_replicas < 2\n    OR active_replicas < total_replicas\n")),(0,r.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u67e5\u8be2\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u4e1c\u897f\uff0c\u8fd9\u610f\u5473\u7740\u4e00\u5207\u90fd\u5f88\u597d\u3002"))}d.isMDXComponent=!0}}]);