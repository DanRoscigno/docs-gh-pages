"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[13390],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),m=i,d=k["".concat(c,".").concat(m)]||k[m]||s[m]||a;return n?l.createElement(d,r(r({ref:t},u),{},{components:n})):l.createElement(d,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<a;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var l=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],o={sidebar_position:60,sidebar_label:"clickhouse-local"},c="clickhouse-local",p={unversionedId:"zh/operations/utilities/clickhouse-local",id:"zh/operations/utilities/clickhouse-local",title:"clickhouse-local",description:"clickhouse-local}",source:"@site/docs/zh/operations/utilities/clickhouse-local.md",sourceDirName:"zh/operations/utilities",slug:"/zh/operations/utilities/clickhouse-local",permalink:"/docs-gh-pages/up/zh/operations/utilities/clickhouse-local",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/utilities/clickhouse-local.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,sidebar_label:"clickhouse-local"},sidebar:"chinese",previous:{title:"\u5b9e\u7528\u5de5\u5177",permalink:"/docs-gh-pages/up/zh/operations/utilities/"},next:{title:"\u6027\u80fd\u6d4b\u8bd5",permalink:"/docs-gh-pages/up/zh/operations/utilities/clickhouse-benchmark"}},u={},s=[{value:"\u7528\u9014",id:"usage",level:2},{value:"\u793a\u4f8b",id:"examples",level:2}],k={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clickhouse-local"},"clickhouse-local"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-local"),"\u6a21\u5f0f\u53ef\u4ee5\u4f7f\u60a8\u80fd\u591f\u5bf9\u672c\u5730\u6587\u4ef6\u6267\u884c\u5feb\u901f\u5904\u7406\uff0c\u800c\u65e0\u9700\u90e8\u7f72\u548c\u914d\u7f6eClickHouse\u670d\u52a1\u5668\u3002"),(0,a.kt)("p",null,"\u63a5\u53d7\u8868\u793a\u8868\u683ctables\u7684\u6570\u636e\uff0c\u5e76\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/utilities/clickhouse-local"},"ClickHouse SQL\u65b9\u8a00"),"\u67e5\u8be2\u5b83\u4eec\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-local"),"\u4f7f\u7528\u4e0eClickHouse Server\u76f8\u540c\u7684\u6838\u5fc3\uff0c\u56e0\u6b64\u5b83\u652f\u6301\u5927\u591a\u6570\u529f\u80fd\u4ee5\u53ca\u76f8\u540c\u7684\u683c\u5f0f\u548c\u8868\u5f15\u64ce\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-local"),"\u4e0d\u80fd\u8bbf\u95ee\u540c\u4e00\u4e3b\u673a\u4e0a\u7684\u6570\u636e\uff0c\u4f46\u5b83\u652f\u6301\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"--config-file"),"\u65b9\u5f0f\u52a0\u8f7d\u670d\u52a1\u5668\u914d\u7f6e\u3002"),(0,a.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u4e0d\u5efa\u8bae\u5c06\u751f\u4ea7\u670d\u52a1\u5668\u914d\u7f6e\u52a0\u8f7d\u5230',(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-local"),"\u56e0\u4e3a\u6570\u636e\u53ef\u4ee5\u5728\u4eba\u4e3a\u9519\u8bef\u7684\u60c5\u51b5\u4e0b\u88ab\u635f\u574f\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e34\u65f6\u6570\u636e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u521b\u5efa\u4e00\u4e2a\u552f\u4e00\u7684\u4e34\u65f6\u6570\u636e\u76ee\u5f55\u3002"),(0,a.kt)("h2",{id:"usage"},"\u7528\u9014"),(0,a.kt)("p",null,"\u57fa\u672c\u7528\u6cd5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-local --structure "table_structure" --input-format "format_of_incoming_data" -q "query"\n')),(0,a.kt)("p",null,"\u53c2\u6570:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-S"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--structure")," \u2014 \u8f93\u5165\u6570\u636e\u7684\u8868\u7ed3\u6784\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--input-format")," \u2014 \u8f93\u5165\u683c\u5f0f\u5316\u7c7b\u578b, \u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"TSV"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-f"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--file")," \u2014 \u6570\u636e\u8def\u5f84, \u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"stdin"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-q"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--query")," \u2014 \u8981\u67e5\u8be2\u7684SQL\u8bed\u53e5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},";"),"\u505a\u5206\u9694\u7b26\u3002\u60a8\u5fc5\u987b\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"query"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"queries-file"),"\u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--queries-file")," - \u5305\u542b\u6267\u884c\u67e5\u8be2\u7684\u6587\u4ef6\u8def\u5f84\u3002\u60a8\u5fc5\u987b\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"query"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"queries-file"),"\u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-N"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--table")," \u2014 \u6570\u636e\u8f93\u51fa\u7684\u8868\u540d\uff0c\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"table"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--format"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--output-format")," \u2014 \u8f93\u51fa\u683c\u5f0f\u5316\u7c7b\u578b, \u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"TSV"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-d"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--database")," \u2014 \u9ed8\u8ba4\u6570\u636e\u5e93\u540d\uff0c\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"_local"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--stacktrace")," \u2014 \u662f\u5426\u5728\u51fa\u73b0\u5f02\u5e38\u65f6\u8f93\u51fa\u6808\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--echo")," \u2014 \u6267\u884c\u524d\u6253\u5370\u67e5\u8be2\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--verbose")," \u2014 debug\u663e\u793a\u67e5\u8be2\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--logger.console")," \u2014 \u65e5\u5fd7\u663e\u793a\u5230\u63a7\u5236\u53f0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--logger.log")," \u2014 \u65e5\u5fd7\u6587\u4ef6\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--logger.level")," \u2014 \u65e5\u5fd7\u7ea7\u522b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--ignore-error")," \u2014 \u5f53\u67e5\u8be2\u5931\u8d25\u65f6\uff0c\u4e0d\u505c\u6b62\u5904\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--config-file")," \u2014 \u4e0eClickHouse\u670d\u52a1\u5668\u683c\u5f0f\u76f8\u540c\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u914d\u7f6e\u4e3a\u7a7a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--no-system-tables")," \u2014 \u4e0d\u9644\u52a0\u7cfb\u7edf\u8868\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--help")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse-local"),"\u4f7f\u7528\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-V"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--version")," \u2014 \u6253\u5370\u7248\u672c\u4fe1\u606f\u5e76\u9000\u51fa\u3002")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2aClickHouse\u914d\u7f6e\u7684\u53c2\u6570\uff0c\u4e5f\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u53ef\u4ee5\u4e0d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"--config-file"),"\u6307\u5b9a\u3002"),(0,a.kt)("h2",{id:"examples"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo -e "1,2\\n3,4" | clickhouse-local -S "a Int64, b Int64" --input-format "CSV" -q "SELECT * FROM table"\nRead 2 rows, 32.00 B in 0.000 sec., 5182 rows/sec., 80.97 KiB/sec.\n1 2\n3 4\n')),(0,a.kt)("p",null,"\u53e6\u4e00\u4e2a\u793a\u4f8b\uff0c\u7c7b\u4f3c\u4e0a\u4e00\u4e2a\u4f7f\u7528\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -e "1,2\\n3,4" | clickhouse-local -q "CREATE TABLE table (a Int64, b Int64) ENGINE = File(CSV, stdin); SELECT a, b FROM table; DROP TABLE table"\nRead 2 rows, 32.00 B in 0.000 sec., 4987 rows/sec., 77.93 KiB/sec.\n1 2\n3 4\n')),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"stdin"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"--file"),"\u53c2\u6570, \u6253\u5f00\u4efb\u610f\u6570\u91cf\u7684\u6587\u4ef6\u6765\u4f7f\u7528\u591a\u4e2a\u6587\u4ef6",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/table-functions/file"},(0,a.kt)("inlineCode",{parentName:"a"},"file")," table function"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 1 | tee 1.tsv\n1\n\n$ echo 2 | tee 2.tsv\n2\n\n$ clickhouse-local --query \"\n    select * from file('1.tsv', TSV, 'a int') t1\n    cross join file('2.tsv', TSV, 'b int') t2\"\n1   2\n")),(0,a.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u67e5\u8be2\u6bcf\u4e2aUnix\u7528\u6237\u4f7f\u7528\u5185\u5b58:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ ps aux | tail -n +2 | awk \'{ printf("%s\\t%s\\n", $1, $4) }\' | clickhouse-local -S "user String, mem Float64" -q "SELECT user, round(sum(mem), 2) as memTotal FROM table GROUP BY user ORDER BY memTotal DESC FORMAT Pretty"\nRead 186 rows, 4.15 KiB in 0.035 sec., 5302 rows/sec., 118.34 KiB/sec.\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 user     \u2503 memTotal \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 bayonet  \u2502    113.5 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 root     \u2502      8.8 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n...\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/utils/clickhouse-local/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);