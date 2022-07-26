"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50649],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(t),m=i,d=k["".concat(c,".").concat(m)]||k[m]||p[m]||l;return t?a.createElement(d,r(r({ref:n},u),{},{components:t})):a.createElement(d,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=k;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},58288:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),r=["components"],o={sidebar_position:61,sidebar_label:"\u6027\u80fd\u6d4b\u8bd5"},c="\u6027\u80fd\u6d4b\u8bd5",s={unversionedId:"zh/operations/utilities/clickhouse-benchmark",id:"zh/operations/utilities/clickhouse-benchmark",title:"\u6027\u80fd\u6d4b\u8bd5",description:"clickhouse-benchmark}",source:"@site/docs/zh/operations/utilities/clickhouse-benchmark.md",sourceDirName:"zh/operations/utilities",slug:"/zh/operations/utilities/clickhouse-benchmark",permalink:"/docs-gh-pages/up/zh/operations/utilities/clickhouse-benchmark",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/utilities/clickhouse-benchmark.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61,sidebar_label:"\u6027\u80fd\u6d4b\u8bd5"},sidebar:"chinese",previous:{title:"clickhouse-local",permalink:"/docs-gh-pages/up/zh/operations/utilities/clickhouse-local"},next:{title:"clickhouse-compressor",permalink:"/docs-gh-pages/up/zh/operations/utilities/clickhouse-compressor"}},u={},p=[{value:"keys\u53c2\u6570",id:"clickhouse-benchmark-keys",level:2},{value:"\u8f93\u51fa",id:"clickhouse-benchmark-output",level:2},{value:"\u5bf9\u6bd4\u6a21\u5f0f",id:"clickhouse-benchmark-comparison-mode",level:2},{value:"\u793a\u4f8b",id:"clickhouse-benchmark-example",level:2}],k={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse-benchmark"},"\u6027\u80fd\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8fde\u63a5\u5230ClickHouse\u670d\u52a1\u5668\u5e76\u91cd\u590d\u53d1\u9001\u6307\u5b9a\u7684\u67e5\u8be2\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "single query" | clickhouse-benchmark [keys]\n')),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-benchmark [keys] <<< "single query"\n')),(0,l.kt)("p",null,"\u5982\u679c\u8981\u53d1\u9001\u4e00\u7ec4\u67e5\u8be2\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\uff0c\u5e76\u5c06\u6bcf\u4e2a\u67e5\u8be2\u7684\u5b57\u7b26\u4e32\u653e\u5728\u6b64\u6587\u4ef6\u4e2d\u3002 \u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.numbers LIMIT 10000000\nSELECT 1\n")),(0,l.kt)("p",null,"\u7136\u540e\u5c06\u6b64\u6587\u4ef6\u4f20\u9012\u7ed9\u6807\u51c6\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-benchmark"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-benchmark [keys] < queries_file\n")),(0,l.kt)("h2",{id:"clickhouse-benchmark-keys"},"keys\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--concurrency=N")," \u2014 Number of queries that ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u540c\u65f6\u53d1\u9001\u3002 \u9ed8\u8ba4\u503c\uff1a1\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-d N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--delay=N")," \u2014 Interval in seconds between intermediate reports (set 0 to disable reports). Default value: 1."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h WORD"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--host=WORD")," \u2014 Server host. Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost"),". \u4e3a ",(0,l.kt)("a",{parentName:"li",href:"#clickhouse-benchmark-comparison-mode"},"\u6bd4\u8f83\u6a21\u5f0f")," \u60a8\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"-h")," \u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-p N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--port=N")," \u2014 Server port. Default value: 9000. For the ",(0,l.kt)("a",{parentName:"li",href:"#clickhouse-benchmark-comparison-mode"},"\u6bd4\u8f83\u6a21\u5f0f")," \u60a8\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"-p")," \u94a5\u5319"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-i N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--iterations=N")," \u2014 \u67e5\u8be2\u7684\u603b\u6b21\u6570. Default value: 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--randomize")," \u2014 \u6709\u591a\u4e2a\u67e5\u8be2\u65f6\uff0c\u4ee5\u968f\u673a\u987a\u5e8f\u6267\u884c."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--secure")," \u2014 \u4f7f\u7528TLS\u5b89\u5168\u8fde\u63a5."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-t N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--timelimit=N")," \u2014 Time limit in seconds. ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u8fbe\u5230\u6307\u5b9a\u7684\u65f6\u95f4\u9650\u5236\u65f6\u505c\u6b62\u53d1\u9001\u67e5\u8be2\u3002 \u9ed8\u8ba4\u503c\uff1a0\uff08\u7981\u7528\u65f6\u95f4\u9650\u5236\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--confidence=N")," \u2014 Level of confidence for T-test. Possible values: 0 (80%), 1 (90%), 2 (95%), 3 (98%), 4 (99%), 5 (99.5%). Default value: 5. In the ",(0,l.kt)("a",{parentName:"li",href:"#clickhouse-benchmark-comparison-mode"},"\u6bd4\u8f83\u6a21\u5f0f")," ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u6267\u884c ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Student%27s_t-test#Independent_two-sample_t-test"},"\u72ec\u7acb\u53cc\u6837\u672c\u5b66\u751f\u7684t\u6d4b\u8bd5")," \u6d4b\u8bd5\u4ee5\u786e\u5b9a\u4e24\u4e2a\u5206\u5e03\u662f\u5426\u4e0e\u6240\u9009\u7f6e\u4fe1\u6c34\u5e73\u6ca1\u6709\u4e0d\u540c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--cumulative")," \u2014 Printing cumulative data instead of data per interval."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--database=DATABASE_NAME")," \u2014 ClickHouse database name. Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--json=FILEPATH")," \u2014 JSON output. When the key is set, ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u5c06\u62a5\u544a\u8f93\u51fa\u5230\u6307\u5b9a\u7684JSON\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--user=USERNAME")," \u2014 ClickHouse user name. Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--password=PSWD")," \u2014 ClickHouse user password. Default value: empty string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--stacktrace")," \u2014 Stack traces output. When the key is set, ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-bencmark")," \u8f93\u51fa\u5f02\u5e38\u7684\u5806\u6808\u8ddf\u8e2a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--stage=WORD")," \u2014 \u67e5\u8be2\u8bf7\u6c42\u7684\u670d\u52a1\u7aef\u5904\u7406\u72b6\u6001. \u5728\u7279\u5b9a\u9636\u6bb5Clickhouse\u4f1a\u505c\u6b62\u67e5\u8be2\u5904\u7406\uff0c\u5e76\u8fd4\u56de\u7ed3\u679c\u7ed9",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark"),"\u3002 \u53ef\u80fd\u7684\u503c: ",(0,l.kt)("inlineCode",{parentName:"li"},"complete"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fetch_columns"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with_mergeable_state"),". \u9ed8\u8ba4\u503c: ",(0,l.kt)("inlineCode",{parentName:"li"},"complete"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help")," \u2014 Shows the help message.")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u67e5\u8be2\u65f6\u5e94\u7528\u4e0a\u8ff0\u7684\u90e8\u5206\u53c2\u6570 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/"},"\u8bbe\u7f6e")," \uff0c\u8bf7\u5c06\u5b83\u4eec\u4f5c\u4e3a\u952e\u4f20\u9012 ",(0,l.kt)("inlineCode",{parentName:"p"},"--<session setting name>= SETTING_VALUE"),". \u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"--max_memory_usage=1048576"),"."),(0,l.kt)("h2",{id:"clickhouse-benchmark-output"},"\u8f93\u51fa"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-benchmark")," \u6309\u7167 ",(0,l.kt)("inlineCode",{parentName:"p"},"--delay")," \u53c2\u6570\u95f4\u9694\u8f93\u51fa\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u62a5\u544a\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Queries executed: 10.\n\nlocalhost:9000, queries 10, QPS: 6.772, RPS: 67904487.440, MiB/s: 518.070, result RPS: 67721584.984, result MiB/s: 516.675.\n\n0.000%      0.145 sec.\n10.000%     0.146 sec.\n20.000%     0.146 sec.\n30.000%     0.146 sec.\n40.000%     0.147 sec.\n50.000%     0.148 sec.\n60.000%     0.148 sec.\n70.000%     0.148 sec.\n80.000%     0.149 sec.\n90.000%     0.150 sec.\n95.000%     0.150 sec.\n99.000%     0.150 sec.\n99.900%     0.150 sec.\n99.990%     0.150 sec.\n")),(0,l.kt)("p",null,"\u5728\u7ed3\u679c\u62a5\u544a\u4e2d\uff0c\u60a8\u53ef\u4ee5\u627e\u5230:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u6570\u91cf\uff1a\u53c2\u89c1",(0,l.kt)("inlineCode",{parentName:"p"},"Queries executed:"),"\u5b57\u6bb5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u72b6\u6001\u7801\uff08\u6309\u987a\u5e8f\u7ed9\u51fa\uff09:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ClickHouse\u670d\u52a1\u5668\u7684\u8fde\u63a5\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u5904\u7406\u7684\u67e5\u8be2\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"QPS\uff1a\u670d\u52a1\u7aef\u6bcf\u79d2\u5904\u7406\u7684\u67e5\u8be2\u6570\u91cf"),(0,l.kt)("li",{parentName:"ul"},"RPS\uff1a\u670d\u52a1\u5668\u6bcf\u79d2\u8bfb\u53d6\u591a\u5c11\u884c"),(0,l.kt)("li",{parentName:"ul"},"MiB/s\uff1a\u670d\u52a1\u5668\u6bcf\u79d2\u8bfb\u53d6\u591a\u5c11\u5b57\u8282\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u7ed3\u679cRPS\uff1a\u670d\u52a1\u7aef\u6bcf\u79d2\u751f\u6210\u591a\u5c11\u884c\u7684\u7ed3\u679c\u96c6\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u7ed3\u679cMiB/s.\u670d\u52a1\u7aef\u6bcf\u79d2\u751f\u6210\u591a\u5c11\u5b57\u8282\u7684\u7ed3\u679c\u96c6\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u6267\u884c\u65f6\u95f4\u7684\u767e\u5206\u6bd4\u3002"))),(0,l.kt)("h2",{id:"clickhouse-benchmark-comparison-mode"},"\u5bf9\u6bd4\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-benchmark")," \u53ef\u4ee5\u6bd4\u8f83\u4e24\u4e2a\u6b63\u5728\u8fd0\u884c\u7684ClickHouse\u670d\u52a1\u5668\u7684\u6027\u80fd\u3002"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u5bf9\u6bd4\u6a21\u5f0f\uff0c\u5206\u522b\u4e3a\u6bcf\u4e2a\u670d\u52a1\u5668\u914d\u7f6e\u5404\u81ea\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"--host"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--port"),"\u53c2\u6570\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-benchmark")," \u4f1a\u6839\u636e\u8bbe\u7f6e\u7684\u53c2\u6570\u5efa\u7acb\u5230\u5404\u4e2aServer\u7684\u8fde\u63a5\u5e76\u53d1\u9001\u8bf7\u6c42\u3002\u6bcf\u4e2a\u67e5\u8be2\u8bf7\u6c42\u4f1a\u968f\u673a\u53d1\u9001\u5230\u67d0\u4e2a\u670d\u52a1\u5668\u3002\u8f93\u51fa\u7ed3\u679c\u4f1a\u6309\u670d\u52a1\u5668\u5206\u7ec4\u8f93\u51fa"),(0,l.kt)("h2",{id:"clickhouse-benchmark-example"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "SELECT * FROM system.numbers LIMIT 10000000 OFFSET 10000000" | clickhouse-benchmark -i 10\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Loaded 1 queries.\n\nQueries executed: 6.\n\nlocalhost:9000, queries 6, QPS: 6.153, RPS: 123398340.957, MiB/s: 941.455, result RPS: 61532982.200, result MiB/s: 469.459.\n\n0.000%      0.159 sec.\n10.000%     0.159 sec.\n20.000%     0.159 sec.\n30.000%     0.160 sec.\n40.000%     0.160 sec.\n50.000%     0.162 sec.\n60.000%     0.164 sec.\n70.000%     0.165 sec.\n80.000%     0.166 sec.\n90.000%     0.166 sec.\n95.000%     0.167 sec.\n99.000%     0.167 sec.\n99.900%     0.167 sec.\n99.990%     0.167 sec.\n\n\n\nQueries executed: 10.\n\nlocalhost:9000, queries 10, QPS: 6.082, RPS: 121959604.568, MiB/s: 930.478, result RPS: 60815551.642, result MiB/s: 463.986.\n\n0.000%      0.159 sec.\n10.000%     0.159 sec.\n20.000%     0.160 sec.\n30.000%     0.163 sec.\n40.000%     0.164 sec.\n50.000%     0.165 sec.\n60.000%     0.166 sec.\n70.000%     0.166 sec.\n80.000%     0.167 sec.\n90.000%     0.167 sec.\n95.000%     0.170 sec.\n99.000%     0.172 sec.\n99.900%     0.172 sec.\n99.990%     0.172 sec.\n")))}m.isMDXComponent=!0}}]);