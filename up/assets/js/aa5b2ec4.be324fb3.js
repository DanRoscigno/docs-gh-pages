"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87601],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||p;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,s=new Array(p);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<p;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78839:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),s=["components"],l={},i="system.replicated_fetches",o={unversionedId:"ru/operations/system-tables/replicated_fetches",id:"ru/operations/system-tables/replicated_fetches",title:"system.replicated_fetches",description:"systemtables-replicatedfetches}",source:"@site/docs/ru/operations/system-tables/replicated_fetches.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/replicated_fetches",permalink:"/docs-gh-pages/up/ru/operations/system-tables/replicated_fetches",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/replicated_fetches.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.replicas",permalink:"/docs-gh-pages/up/ru/operations/system-tables/replicas"},next:{title:"system.replication_queue",permalink:"/docs-gh-pages/up/ru/operations/system-tables/replication_queue"}},c={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"system_tables-replicated_fetches"},"system.replicated_fetches"),(0,p.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0444\u043e\u043d\u043e\u0432\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0435\u043f\u043b\u0438\u043a."),(0,p.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"database")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"table")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"elapsed")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float64"),") \u2014 \u0432\u0440\u0435\u043c\u044f, \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0435\u0435 \u043e\u0442 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u043a\u0443\u0441\u043a\u0430, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"progress")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float64"),") \u2014 \u0434\u043e\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043e\u0442 0 \u0434\u043e 1.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"result_part_name")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043a\u0443\u0441\u043a\u0430.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"result_part_path")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c\u043e\u043c\u0443 \u043a\u0443\u0441\u043a\u0443.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"partition_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"total_size_bytes_compressed")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u043e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0436\u0430\u0442\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0432 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c\u043e\u043c \u043a\u0443\u0441\u043a\u0435 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"bytes_read_compressed")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0436\u0430\u0442\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0441\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0439 \u0438\u0437 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043a\u0443\u0441\u043a\u0430, \u0432 \u0431\u0430\u0439\u0442\u0430\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_path")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0440\u0435\u043f\u043b\u0438\u043a\u0435.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_hostname")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0445\u043e\u0441\u0442\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0440\u0435\u043f\u043b\u0438\u043a\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_port")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0440\u0442\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0440\u0435\u043f\u043b\u0438\u043a\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"interserver_scheme")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043c\u0435\u0436\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0441\u0445\u0435\u043c\u044b.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"URI")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u0430.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"to_detached")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0444\u043b\u0430\u0433, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"TO DETACHED")," \u0432 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0444\u043e\u043d\u043e\u0432\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"thread_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u0442\u043e\u043a\u0430."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.replicated_fetches LIMIT 1 FORMAT Vertical;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                    default\ntable:                       t\nelapsed:                     7.243039876\nprogress:                    0.41832135995612835\nresult_part_name:            all_0_0_0\nresult_part_path:            /var/lib/clickhouse/store/700/70080a04-b2de-4adf-9fa5-9ea210e81766/all_0_0_0/\npartition_id:                all\ntotal_size_bytes_compressed: 1052783726\nbytes_read_compressed:       440401920\nsource_replica_path:         /clickhouse/test/t/replicas/1\nsource_replica_hostname:     node1\nsource_replica_port:         9009\ninterserver_scheme:          http\nURI:                         http://node1:9009/?endpoint=DataPartsExchange%3A%2Fclickhouse%2Ftest%2Ft%2Freplicas%2F1&part=all_0_0_0&client_protocol_version=4&compress=false\nto_detached:                 0\nthread_id:                   54\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"../../sql-reference/statements/system/#query-language-system-replicated"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438 ReplicatedMergeTree"))))}d.isMDXComponent=!0}}]);