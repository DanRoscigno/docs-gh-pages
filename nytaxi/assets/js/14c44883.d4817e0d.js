"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[20079],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),s=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(k.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,f=u["".concat(k,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var k in t)hasOwnProperty.call(t,k)&&(o[k]=t[k]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18640:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return k},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},k="Kafka",s={unversionedId:"zh/engines/table-engines/integrations/kafka",id:"zh/engines/table-engines/integrations/kafka",title:"Kafka",description:"kafka}",source:"@site/docs/zh/engines/table-engines/integrations/kafka.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/kafka",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/kafka",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"HDFS",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/hdfs"},next:{title:"MySQL",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/mysql"}},p={},c=[{value:"\u914d\u7f6e",id:"pei-zhi",level:2},{value:"Kerberos \u652f\u6301",id:"kafka-kerberos-zhi-chi",level:3},{value:"\u865a\u62df\u5217",id:"\u865a\u62df\u5217",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kafka"},"Kafka"),(0,l.kt)("p",null,"\u6b64\u5f15\u64ce\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"http://kafka.apache.org/"},"Apache Kafka")," \u7ed3\u5408\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"Kafka \u7279\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u6216\u8005\u8ba2\u9605\u6570\u636e\u6d41\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u9519\u5b58\u50a8\u673a\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u6d41\u6570\u636e\u3002")),(0,l.kt)("a",{name:"table_engine-kafka-creating-a-table"}),(0,l.kt)("p",null,"\u8001\u7248\u683c\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Kafka(kafka_broker_list, kafka_topic_list, kafka_group_name, kafka_format\n      [, kafka_row_delimiter, kafka_schema, kafka_num_consumers])\n")),(0,l.kt)("p",null,"\u65b0\u7248\u683c\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Kafka SETTINGS\n  kafka_broker_list = 'localhost:9092',\n  kafka_topic_list = 'topic1,topic2',\n  kafka_group_name = 'group1',\n  kafka_format = 'JSONEachRow',\n  kafka_row_delimiter = '\\n',\n  kafka_schema = '',\n  kafka_num_consumers = 2\n")),(0,l.kt)("p",null,"\u5fc5\u8981\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kafka_broker_list")," \u2013 \u4ee5\u9017\u53f7\u5206\u9694\u7684 brokers \u5217\u8868 (",(0,l.kt)("inlineCode",{parentName:"li"},"localhost:9092"),")\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kafka_topic_list")," \u2013 topic \u5217\u8868 (",(0,l.kt)("inlineCode",{parentName:"li"},"my_topic"),")\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kafka_group_name")," \u2013 Kafka \u6d88\u8d39\u7ec4\u540d\u79f0 (",(0,l.kt)("inlineCode",{parentName:"li"},"group1"),")\u3002\u5982\u679c\u4e0d\u5e0c\u671b\u6d88\u606f\u5728\u96c6\u7fa4\u4e2d\u91cd\u590d\uff0c\u8bf7\u5728\u6bcf\u4e2a\u5206\u7247\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u7ec4\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kafka_format")," \u2013 \u6d88\u606f\u4f53\u683c\u5f0f\u3002\u4f7f\u7528\u4e0e SQL \u90e8\u5206\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"FORMAT")," \u51fd\u6570\u76f8\u540c\u8868\u793a\u65b9\u6cd5\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"JSONEachRow"),"\u3002\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("inlineCode",{parentName:"li"},"Formats")," \u90e8\u5206\u3002")),(0,l.kt)("p",null,"\u53ef\u9009\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kafka_row_delimiter")," - \u6bcf\u4e2a\u6d88\u606f\u4f53\uff08\u8bb0\u5f55\uff09\u4e4b\u95f4\u7684\u5206\u9694\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kafka_schema")," \u2013 \u5982\u679c\u89e3\u6790\u683c\u5f0f\u9700\u8981\u4e00\u4e2a schema \u65f6\uff0c\u6b64\u53c2\u6570\u5fc5\u586b\u3002\u4f8b\u5982\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://capnproto.org/"},"\u666e\u7f57\u6258\u8239\u957f")," \u9700\u8981 schema \u6587\u4ef6\u8def\u5f84\u4ee5\u53ca\u6839\u5bf9\u8c61 ",(0,l.kt)("inlineCode",{parentName:"li"},"schema.capnp:Message")," \u7684\u540d\u5b57\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kafka_num_consumers")," \u2013 \u5355\u4e2a\u8868\u7684\u6d88\u8d39\u8005\u6570\u91cf\u3002\u9ed8\u8ba4\u503c\u662f\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\uff0c\u5982\u679c\u4e00\u4e2a\u6d88\u8d39\u8005\u7684\u541e\u5410\u91cf\u4e0d\u8db3\uff0c\u5219\u6307\u5b9a\u66f4\u591a\u7684\u6d88\u8d39\u8005\u3002\u6d88\u8d39\u8005\u7684\u603b\u6570\u4e0d\u5e94\u8be5\u8d85\u8fc7 topic \u4e2d\u5206\u533a\u7684\u6570\u91cf\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u5206\u533a\u53ea\u80fd\u5206\u914d\u4e00\u4e2a\u6d88\u8d39\u8005\u3002")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    timestamp UInt64,\n    level String,\n    message String\n  ) ENGINE = Kafka('localhost:9092', 'topic', 'group1', 'JSONEachRow');\n\n  SELECT * FROM queue LIMIT 5;\n\n  CREATE TABLE queue2 (\n    timestamp UInt64,\n    level String,\n    message String\n  ) ENGINE = Kafka SETTINGS kafka_broker_list = 'localhost:9092',\n                            kafka_topic_list = 'topic',\n                            kafka_group_name = 'group1',\n                            kafka_format = 'JSONEachRow',\n                            kafka_num_consumers = 4;\n\n  CREATE TABLE queue2 (\n    timestamp UInt64,\n    level String,\n    message String\n  ) ENGINE = Kafka('localhost:9092', 'topic', 'group1')\n              SETTINGS kafka_format = 'JSONEachRow',\n                       kafka_num_consumers = 4;\n")),(0,l.kt)("p",null,"\u6d88\u8d39\u7684\u6d88\u606f\u4f1a\u88ab\u81ea\u52a8\u8ffd\u8e2a\uff0c\u56e0\u6b64\u6bcf\u4e2a\u6d88\u606f\u5728\u4e0d\u540c\u7684\u6d88\u8d39\u7ec4\u91cc\u53ea\u4f1a\u8bb0\u5f55\u4e00\u6b21\u3002\u5982\u679c\u5e0c\u671b\u83b7\u5f97\u4e24\u6b21\u6570\u636e\uff0c\u5219\u4f7f\u7528\u53e6\u4e00\u4e2a\u7ec4\u540d\u521b\u5efa\u526f\u672c\u3002"),(0,l.kt)("p",null,"\u6d88\u8d39\u7ec4\u53ef\u4ee5\u7075\u6d3b\u914d\u7f6e\u5e76\u4e14\u5728\u96c6\u7fa4\u4e4b\u95f4\u540c\u6b65\u3002\u4f8b\u5982\uff0c\u5982\u679c\u7fa4\u96c6\u4e2d\u670910\u4e2a\u4e3b\u9898\u548c5\u4e2a\u8868\u526f\u672c\uff0c\u5219\u6bcf\u4e2a\u526f\u672c\u5c06\u83b7\u5f972\u4e2a\u4e3b\u9898\u3002 \u5982\u679c\u526f\u672c\u6570\u91cf\u53d1\u751f\u53d8\u5316\uff0c\u4e3b\u9898\u5c06\u81ea\u52a8\u5728\u526f\u672c\u4e2d\u91cd\u65b0\u5206\u914d\u3002\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"http://kafka.apache.org/intro%E3%80%82"},"http://kafka.apache.org/intro\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u5bf9\u4e8e\u8bfb\u53d6\u6d88\u606f\u5e76\u4e0d\u662f\u5f88\u6709\u7528\uff08\u8c03\u8bd5\u9664\u5916\uff09\uff0c\u56e0\u4e3a\u6bcf\u6761\u6d88\u606f\u53ea\u80fd\u88ab\u8bfb\u53d6\u4e00\u6b21\u3002\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u521b\u5efa\u5b9e\u65f6\u7ebf\u7a0b\u66f4\u5b9e\u7528\u3002\u60a8\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5f15\u64ce\u521b\u5efa\u4e00\u4e2a Kafka \u6d88\u8d39\u8005\u5e76\u4f5c\u4e3a\u4e00\u6761\u6570\u636e\u6d41\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u7ed3\u6784\u8868\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u7269\u5316\u89c6\u56fe\uff0c\u6539\u89c6\u56fe\u4f1a\u5728\u540e\u53f0\u8f6c\u6362\u5f15\u64ce\u4e2d\u7684\u6570\u636e\u5e76\u5c06\u5176\u653e\u5165\u4e4b\u524d\u521b\u5efa\u7684\u8868\u4e2d\u3002")),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"MATERIALIZED VIEW")," \u6dfb\u52a0\u81f3\u5f15\u64ce\uff0c\u5b83\u5c06\u4f1a\u5728\u540e\u53f0\u6536\u96c6\u6570\u636e\u3002\u53ef\u4ee5\u6301\u7eed\u4e0d\u65ad\u5730\u4ece Kafka \u6536\u96c6\u6570\u636e\u5e76\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u5c06\u6570\u636e\u8f6c\u6362\u4e3a\u6240\u9700\u8981\u7684\u683c\u5f0f\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    timestamp UInt64,\n    level String,\n    message String\n  ) ENGINE = Kafka('localhost:9092', 'topic', 'group1', 'JSONEachRow');\n\n  CREATE TABLE daily (\n    day Date,\n    level String,\n    total UInt64\n  ) ENGINE = SummingMergeTree(day, (day, level), 8192);\n\n  CREATE MATERIALIZED VIEW consumer TO daily\n    AS SELECT toDate(toDateTime(timestamp)) AS day, level, count() as total\n    FROM queue GROUP BY day, level;\n\n  SELECT level, sum(total) FROM daily GROUP BY level;\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0c\u63a5\u53d7\u7684\u6d88\u606f\u88ab\u5206\u7ec4\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#settings-max_insert_block_size"},"max_insert_block_size")," \u5927\u5c0f\u7684\u5757\u3002\u5982\u679c\u672a\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#stream-flush-interval-ms"},"stream_flush_interval_ms")," \u6beb\u79d2\u5185\u5f62\u6210\u5757\uff0c\u5219\u4e0d\u5173\u5fc3\u5757\u7684\u5b8c\u6574\u6027\uff0c\u90fd\u4f1a\u5c06\u6570\u636e\u5237\u65b0\u5230\u8868\u4e2d\u3002"),(0,l.kt)("p",null,"\u505c\u6b62\u63a5\u6536\u4e3b\u9898\u6570\u636e\u6216\u66f4\u6539\u8f6c\u6362\u903b\u8f91\uff0c\u8bf7 detach \u7269\u5316\u89c6\u56fe\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  DETACH TABLE consumer;\n  ATTACH TABLE consumer;\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," \u66f4\u6539\u76ee\u6807\u8868\uff0c\u4e3a\u4e86\u907f\u514d\u76ee\u6807\u8868\u4e0e\u89c6\u56fe\u4e2d\u7684\u6570\u636e\u4e4b\u95f4\u5b58\u5728\u5dee\u5f02\uff0c\u63a8\u8350\u505c\u6b62\u7269\u5316\u89c6\u56fe\u3002"),(0,l.kt)("h2",{id:"pei-zhi"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphiteMergeTree")," \u7c7b\u4f3c\uff0cKafka \u5f15\u64ce\u652f\u6301\u4f7f\u7528ClickHouse\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u6269\u5c55\u914d\u7f6e\u3002\u53ef\u4ee5\u4f7f\u7528\u4e24\u4e2a\u914d\u7f6e\u952e\uff1a\u5168\u5c40 (",(0,l.kt)("inlineCode",{parentName:"p"},"kafka"),") \u548c \u4e3b\u9898\u7ea7\u522b (",(0,l.kt)("inlineCode",{parentName:"p"},"kafka_*"),")\u3002\u9996\u5148\u5e94\u7528\u5168\u5c40\u914d\u7f6e\uff0c\u7136\u540e\u5e94\u7528\u4e3b\u9898\u7ea7\u914d\u7f6e\uff08\u5982\u679c\u5b58\u5728\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'  \x3c!-- Global configuration options for all tables of Kafka engine type --\x3e\n  <kafka>\n    <debug>cgrp</debug>\n    <auto_offset_reset>smallest</auto_offset_reset>\n  </kafka>\n\n  \x3c!-- Configuration specific for topic "logs" --\x3e\n  <kafka_logs>\n    <retry_backoff_ms>250</retry_backoff_ms>\n    <fetch_min_bytes>100000</fetch_min_bytes>\n  </kafka_logs>\n')),(0,l.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u914d\u7f6e\u9009\u9879\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"librdkafka\u914d\u7f6e\u53c2\u8003"),"\u3002\u5728 ClickHouse \u914d\u7f6e\u4e2d\u4f7f\u7528\u4e0b\u5212\u7ebf (",(0,l.kt)("inlineCode",{parentName:"p"},"_"),") \uff0c\u5e76\u4e0d\u662f\u4f7f\u7528\u70b9 (",(0,l.kt)("inlineCode",{parentName:"p"},"."),")\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"check.crcs=true")," \u5c06\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"<check_crcs>true</check_crcs>"),"\u3002"),(0,l.kt)("h3",{id:"kafka-kerberos-zhi-chi"},"Kerberos \u652f\u6301"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528\u4e86kerberos\u7684kafka, \u5c06security_protocol \u8bbe\u7f6e\u4e3asasl_plaintext\u5c31\u591f\u4e86\uff0c\u5982\u679ckerberos\u7684ticket\u662f\u7531\u64cd\u4f5c\u7cfb\u7edf\u83b7\u53d6\u548c\u7f13\u5b58\u7684\u3002\nclickhouse\u4e5f\u652f\u6301\u81ea\u5df1\u4f7f\u7528keyfile\u7684\u65b9\u5f0f\u6765\u7ef4\u62a4kerbros\u7684\u51ed\u8bc1\u3002\u914d\u7f6esasl_kerberos_service_name\u3001sasl_kerberos_keytab\u3001sasl_kerberos_principal\u4e09\u4e2a\u5b50\u5143\u7d20\u5c31\u53ef\u4ee5\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- Kerberos-aware Kafka --\x3e\n  <kafka>\n    <security_protocol>SASL_PLAINTEXT</security_protocol>\n    <sasl_kerberos_keytab>/home/kafkauser/kafkauser.keytab</sasl_kerberos_keytab>\n    <sasl_kerberos_principal>kafkauser/kafkahost@EXAMPLE.COM</sasl_kerberos_principal>\n  </kafka>\n")),(0,l.kt)("h2",{id:"\u865a\u62df\u5217"},"\u865a\u62df\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_topic")," \u2013 Kafka \u4e3b\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_key")," \u2013 \u4fe1\u606f\u7684\u952e\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_offset")," \u2013 \u6d88\u606f\u7684\u504f\u79fb\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_timestamp")," \u2013 \u6d88\u606f\u7684\u65f6\u95f4\u6233\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_timestamp_ms")," \u2013 \u6d88\u606f\u7684\u65f6\u95f4\u6233(\u6beb\u79d2)\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_partition")," \u2013 Kafka \u4e3b\u9898\u7684\u5206\u533a\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/#table_engines-virtual_columns"},"\u865a\u62df\u5217")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#background_message_broker_schedule_pool_size"},"\u540e\u53f0\u6d88\u606f\u4ee3\u7406\u8c03\u5ea6\u6c60\u5927\u5c0f"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/table_engines/kafka/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);