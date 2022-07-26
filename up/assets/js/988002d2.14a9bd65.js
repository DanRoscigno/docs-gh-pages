"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49695],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89623:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:45,sidebar_label:"hdfs"},s="hdfs",p={unversionedId:"zh/sql-reference/table-functions/hdfs",id:"zh/sql-reference/table-functions/hdfs",title:"hdfs",description:"hdfs}",source:"@site/docs/zh/sql-reference/table-functions/hdfs.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/hdfs",permalink:"/docs-gh-pages/up/zh/sql-reference/table-functions/hdfs",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/hdfs.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"hdfs"},sidebar:"chinese",previous:{title:"odbc",permalink:"/docs-gh-pages/up/zh/sql-reference/table-functions/odbc"},next:{title:"s3",permalink:"/docs-gh-pages/up/zh/sql-reference/table-functions/s3"}},u={},c=[{value:"\u865a\u62df\u5217",id:"virtual-columns",level:2}],f={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hdfs"},"hdfs"),(0,l.kt)("p",null,"\u6839\u636eHDFS\u4e2d\u7684\u6587\u4ef6\u521b\u5efa\u8868\u3002 \u8be5\u8868\u51fd\u6570\u7c7b\u4f3c\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/table-functions/url"},"url")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/table-functions/file"},"\u6587\u4ef6"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"hdfs(URI, format, structure)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URI")," \u2014 HDFS\u4e2d\u6587\u4ef6\u7684\u76f8\u5bf9URI\u3002 \u5728\u53ea\u8bfb\u6a21\u5f0f\u4e0b\uff0c\u6587\u4ef6\u8def\u5f84\u652f\u6301\u4ee5\u4e0b\u901a\u914d\u7b26: ",(0,l.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"{abc,def}")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," \uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"M")," \u662f\u6570\u5b57, ","`",(0,l.kt)("inlineCode",{parentName:"li"},"'abc', 'def'")," \u662f\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," \u2014 \u6587\u4ef6\u7684",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u8868\u7684\u7ed3\u6784\u3002\u683c\u5f0f  ",(0,l.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("p",null,"\u5177\u6709\u6307\u5b9a\u7ed3\u6784\u7684\u8868\uff0c\u7528\u4e8e\u8bfb\u53d6\u6216\u5199\u5165\u6307\u5b9a\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u8868\u6765\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs://hdfs1:9000/test")," \u5e76\u4ece\u4e2d\u9009\u62e9\u524d\u4e24\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hdfs('hdfs://hdfs1:9000/test', 'TSV', 'column1 UInt32, column2 UInt32, column3 UInt32')\nLIMIT 2\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8def\u5f84\u4e2d\u7684\u901a\u914d\u7b26")),(0,l.kt)("p",null,"\u591a\u4e2a\u8def\u5f84\u7ec4\u4ef6\u53ef\u4ee5\u5177\u6709\u901a\u914d\u7b26\u3002 \u5bf9\u4e8e\u8981\u5904\u7406\u7684\u6587\u4ef6\u5fc5\u987b\u5b58\u5728\u5e76\u4e0e\u6574\u4e2a\u8def\u5f84\u6a21\u5f0f\u5339\u914d\uff08\u4e0d\u4ec5\u540e\u7f00\u6216\u524d\u7f00\uff09\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u2014 \u66ff\u6362\u4efb\u610f\u6570\u91cf\u7684\u4efb\u4f55\u5b57\u7b26\uff0c\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," \u5305\u62ec\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u2014 \u66ff\u6362\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 \u66ff\u6362\u4efb\u4f55\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 \u66ff\u6362\u8303\u56f4\u4eceN\u5230M\u7684\u4efb\u4f55\u6570\u5b57\uff08\u5305\u62ec\u4e24\u4e2a\u8fb9\u754c\uff09\u3002")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," \u7684\u6784\u9020\u7c7b\u4f3c\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/table-functions/remote"},"remote"),")\u8868\u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5047\u8bbe\u6211\u4eec\u5728HDFS\u4e0a\u6709\u51e0\u4e2a\u5e26\u6709\u4ee5\u4e0bURI\u7684\u6587\u4ef6:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_1\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_2\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_3\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_1\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_2\u2019"),(0,l.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_3\u2019")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u8fd9\u4e9b\u6587\u4ef6\u4e2d\u7684\u884c\u6570:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/{some,another}_dir/some_file_{1..3}', 'TSV', 'name String, value UInt32')\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u8fd9\u4e24\u4e2a\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6\u4e2d\u7684\u884c\u6570:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/{some,another}_dir/*', 'TSV', 'name String, value UInt32')\n")),(0,l.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u5982\u679c\u60a8\u7684\u6587\u4ef6\u5217\u8868\u5305\u542b\u5e26\u524d\u5bfc\u96f6\u7684\u6570\u5b57\u8303\u56f4\uff0c\u8bf7\u5bf9\u6bcf\u4e2a\u6570\u5b57\u5206\u522b\u4f7f\u7528\u5e26\u6709\u5927\u62ec\u53f7\u7684\u7ed3\u6784\u6216\u4f7f\u7528 ',(0,l.kt)("inlineCode",{parentName:"p"},"?"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u4ece\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"file000"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"file001"),", \u2026 , ",(0,l.kt)("inlineCode",{parentName:"p"},"file999"),"\u7684\u6587\u4ef6\u4e2d\u67e5\u8be2\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/big_dir/file{0..9}{0..9}{0..9}', 'CSV', 'name String, value UInt32')\n")),(0,l.kt)("h2",{id:"virtual-columns"},"\u865a\u62df\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 \u6587\u4ef6\u8def\u5f84\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 \u6587\u4ef6\u540d\u79f0\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/table_engines/#table_engines-virtual_columns"},"\u865a\u62df\u5217"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/hdfs/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);