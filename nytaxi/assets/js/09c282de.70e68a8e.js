"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75949],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=l,d=c["".concat(o,".").concat(k)]||c[k]||u[k]||i;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],s={sidebar_position:7,sidebar_label:"S3"},o="S3 \u8868\u5f15\u64ce",p={unversionedId:"zh/engines/table-engines/integrations/s3",id:"zh/engines/table-engines/integrations/s3",title:"S3 \u8868\u5f15\u64ce",description:"table-engine-s3}",source:"@site/docs/zh/engines/table-engines/integrations/s3.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/s3",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/s3",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/s3.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"S3"},sidebar:"chinese",previous:{title:"MongoDB",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/mongodb"},next:{title:"SQLite",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/sqlite"}},m={},u=[{value:"\u521b\u5efa\u8868",id:"creating-a-table",level:2},{value:"\u865a\u62df\u5217",id:"virtual-columns",level:2},{value:"\u5b9e\u65bd\u7ec6\u8282",id:"implementation-details",level:2},{value:"\u8def\u5f84\u4e2d\u7684\u901a\u914d\u7b26",id:"wildcards-in-path",level:2},{value:"\u865a\u62df\u5217",id:"virtual-columns",level:2},{value:"S3 \u76f8\u5173\u7684\u8bbe\u7f6e",id:"settings",level:2},{value:"\u57fa\u4e8e Endpoint \u7684\u8bbe\u7f6e",id:"endpoint-settings",level:2},{value:"\u7528\u6cd5",id:"usage-examples",level:2},{value:"\u53e6\u8bf7\u53c2\u9605",id:"\u53e6\u8bf7\u53c2\u9605",level:2}],c={toc:u};function k(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"table-engine-s3"},"S3 \u8868\u5f15\u64ce"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5f15\u64ce\u63d0\u4f9b\u4e0e",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),"\u751f\u6001\u7cfb\u7edf\u7684\u96c6\u6210\u3002\u8fd9\u4e2a\u5f15\u64ce\u7c7b\u4f3c\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/integrations/hdfs"},"HDFS"),"\u5f15\u64ce\uff0c\u4f46\u63d0\u4f9b\u4e86 S3 \u7279\u6709\u7684\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"creating-a-table"},"\u521b\u5efa\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s3_engine_table (name String, value UInt32)\nENGINE = S3(path, [aws_access_key_id, aws_secret_access_key,] format, [compression])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u2014 \u5e26\u6709\u6587\u4ef6\u8def\u5f84\u7684 Bucket url\u3002\u5728\u53ea\u8bfb\u6a21\u5f0f\u4e0b\u652f\u6301\u4ee5\u4e0b\u901a\u914d\u7b26: ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{abc,def}")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," \u662f\u6570\u5b57, ",(0,i.kt)("inlineCode",{parentName:"li"},"'abc'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'def'")," \u662f\u5b57\u7b26\u4e32. \u66f4\u591a\u4fe1\u606f\u89c1",(0,i.kt)("a",{parentName:"li",href:"#wildcards-in-path"},"\u4e0b\u6587"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," \u2014 \u6587\u4ef6\u7684",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aws_access_key_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"aws_secret_access_key")," - ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"AWS")," \u8d26\u53f7\u7684\u957f\u671f\u51ed\u8bc1. \u4f60\u53ef\u4ee5\u4f7f\u7528\u51ed\u8bc1\u6765\u5bf9\u4f60\u7684\u8bf7\u6c42\u8fdb\u884c\u8ba4\u8bc1.\u53c2\u6570\u662f\u53ef\u9009\u7684. \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u51ed\u636e, \u5c06\u4ece\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bfb\u53d6\u51ed\u636e. \u66f4\u591a\u4fe1\u606f\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-s3"},"\u4f7f\u7528 S3 \u6765\u5b58\u50a8\u6570\u636e"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compression")," \u2014 \u538b\u7f29\u7c7b\u578b. \u652f\u6301\u7684\u503c: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip/gz"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"brotli/br"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"xz/LZMA"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zstd/zst"),". \u53c2\u6570\u662f\u53ef\u9009\u7684. \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u6587\u4ef6\u6269\u5c55\u540d\u81ea\u52a8\u68c0\u6d4b\u538b\u7f29\u7c7b\u578b.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"s3_engine_table")," \u8868:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s3_engine_table (name String, value UInt32) ENGINE=S3('https://storage.yandexcloud.net/my-test-bucket-768/test-data.csv.gz', 'CSV', 'gzip');\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u586b\u5145\u6587\u4ef6:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO s3_engine_table VALUES ('one', 1), ('two', 2), ('three', 3);\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u6570\u636e:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM s3_engine_table LIMIT 2;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500value\u2500\u2510\n\u2502 one  \u2502     1 \u2502\n\u2502 two  \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"virtual-columns"},"\u865a\u62df\u5217"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 \u6587\u4ef6\u8def\u5f84."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 \u6587\u4ef6\u540d.")),(0,i.kt)("p",null,"\u6709\u5173\u865a\u62df\u5217\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/#table_engines-virtual_columns"},"\u8fd9\u91cc"),"."),(0,i.kt)("h2",{id:"implementation-details"},"\u5b9e\u65bd\u7ec6\u8282"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u548c\u5199\u5165\u53ef\u4ee5\u662f\u5e76\u884c\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u662f\u4e0d\u652f\u6301\u7684:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ALTER")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE")," \u64cd\u4f5c."),(0,i.kt)("li",{parentName:"ul"},"\u7d22\u5f15."),(0,i.kt)("li",{parentName:"ul"},"\u590d\u5236.")))),(0,i.kt)("h2",{id:"wildcards-in-path"},"\u8def\u5f84\u4e2d\u7684\u901a\u914d\u7b26"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"path")," \u53c2\u6570\u53ef\u4ee5\u4f7f\u7528\u7c7b bash \u7684\u901a\u914d\u7b26\u6765\u6307\u5b9a\u591a\u4e2a\u6587\u4ef6\u3002\u5bf9\u4e8e\u6b63\u5728\u5904\u7406\u7684\u6587\u4ef6\u5e94\u8be5\u5b58\u5728\u5e76\u5339\u914d\u5230\u6574\u4e2a\u8def\u5f84\u6a21\u5f0f\u3002 \u6587\u4ef6\u5217\u8868\u7684\u786e\u5b9a\u662f\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u7684\u65f6\u5019\u8fdb\u884c\uff08\u800c\u4e0d\u662f\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," \u7684\u65f6\u5019\uff09\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*")," \u2014 \u66ff\u4ee3\u4efb\u4f55\u6570\u91cf\u7684\u4efb\u4f55\u5b57\u7b26\uff0c\u9664\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," \u4ee5\u53ca\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?")," \u2014 \u4ee3\u66ff\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 \u66ff\u4ee3 ",(0,i.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"\u5b57\u7b26\u4e32."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 \u66ff\u6362 N \u5230 M \u8303\u56f4\u5185\u7684\u4efb\u4f55\u6570\u5b57\uff0c\u5305\u62ec\u4e24\u4e2a\u8fb9\u754c\u7684\u503c. N \u548c M \u53ef\u4ee5\u4ee5 0 \u5f00\u5934\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"000..078"))),(0,i.kt)("p",null,"\u5e26 ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," \u7684\u7ed3\u6784\u7c7b\u4f3c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/table-functions/remote"},"\u8fdc\u7a0b")," \u8868\u51fd\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5047\u8bbe\u6211\u4eec\u5728 S3 \u4e0a\u6709\u51e0\u4e2a CSV \u683c\u5f0f\u7684\u6587\u4ef6\uff0cURI\u5982\u4e0b:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2018",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_1.csv%E2%80%99"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_1.csv\u2019")),(0,i.kt)("li",{parentName:"ul"},"\u2018",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_2.csv%E2%80%99"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_2.csv\u2019")),(0,i.kt)("li",{parentName:"ul"},"\u2018",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_3.csv%E2%80%99"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_3.csv\u2019")),(0,i.kt)("li",{parentName:"ul"},"\u2018",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_1.csv%E2%80%99"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_1.csv\u2019")),(0,i.kt)("li",{parentName:"ul"},"\u2018",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_2.csv%E2%80%99"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_2.csv\u2019")),(0,i.kt)("li",{parentName:"ul"},"\u2018",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_3.csv%E2%80%99"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_3.csv\u2019"))),(0,i.kt)("p",null,"\u6709\u51e0\u79cd\u65b9\u6cd5\u6765\u521b\u5efa\u7531\u6240\u6709\u516d\u4e2a\u6587\u4ef6\u7ec4\u6210\u7684\u6570\u636e\u8868:"),(0,i.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u5f0f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_range (name String, value UInt32) ENGINE = S3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/some_file_{1..3}', 'CSV');\n")),(0,i.kt)("p",null,"\u53e6\u4e00\u79cd\u65b9\u5f0f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_question_mark (name String, value UInt32) ENGINE = S3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/some_file_?', 'CSV');\n")),(0,i.kt)("p",null,"\u8868\u7531\u4e24\u4e2a\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u7ec4\u6210\uff08\u6240\u6709\u6587\u4ef6\u5e94\u6ee1\u8db3\u67e5\u8be2\u4e2d\u63cf\u8ff0\u7684\u683c\u5f0f\u548c\u6a21\u5f0f\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_asterisk (name String, value UInt32) ENGINE = S3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/*', 'CSV');\n")),(0,i.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u5217\u8868\u4e2d\u5305\u542b\u6709\u4ece\u96f6\u5f00\u5934\u7684\u6570\u5b57\u8303\u56f4\uff0c\u8bf7\u5bf9\u6bcf\u4e2a\u6570\u5b57\u5206\u522b\u4f7f\u7528\u5e26\u62ec\u53f7\u7684\u7ed3\u6784\uff0c\u6216\u8005\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u4f7f\u7528\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"file-000.csv"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file-001.csv"),", \u2026 , ",(0,i.kt)("inlineCode",{parentName:"p"},"file-999.csv"),"\u6765\u521b\u5efa\u8868:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE big_table (name String, value UInt32) ENGINE = S3('https://storage.yandexcloud.net/my-test-bucket-768/big_prefix/file-{000..999}.csv', 'CSV');\n")),(0,i.kt)("h2",{id:"virtual-columns"},"\u865a\u62df\u5217"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 \u6587\u4ef6\u8def\u5f84."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 \u6587\u4ef6\u540d.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/#table_engines-virtual_columns"},"\u865a\u62df\u5217"))),(0,i.kt)("h2",{id:"settings"},"S3 \u76f8\u5173\u7684\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u8bbe\u7f6e\u53ef\u4ee5\u5728\u67e5\u8be2\u6267\u884c\u524d\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u653e\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3_max_single_part_upload_size")," - \u4f7f\u7528\u5355\u6587\u4ef6\u4e0a\u4f20\u81f3 S3 \u7684\u5bf9\u8c61\u7684\u6700\u5927\u6587\u4ef6\u5927\u5c0f\u3002\u9ed8\u8ba4\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"64Mb"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3_min_upload_part_size")," - \u4f7f\u7528",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html"},"S3\u591a\u6587\u4ef6\u5757\u4e0a\u4f20"),"\u65f6\uff0c\u6587\u4ef6\u5757\u7684\u6700\u5c0f\u6587\u4ef6\u5927\u5c0f\u3002\u9ed8\u8ba4\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"512Mb"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3_max_redirects")," - \u5141\u8bb8\u7684\u6700\u5927S3\u91cd\u5b9a\u5411\u8df3\u6570\u3002\u9ed8\u8ba4\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3_single_read_retries")," - \u5355\u6b21\u8bfb\u53d6\u65f6\u7684\u6700\u5927\u5c1d\u8bd5\u6b21\u6570\u3002\u9ed8\u8ba4\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"4"),"\u3002")),(0,i.kt)("p",null,"\u5b89\u5168\u8003\u8651\uff1a\u5982\u679c\u6076\u610f\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u7684 S3 \u7f51\u5740\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"s3_max_redirects"),"\u53c2\u6570\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u96f6\uff0c\u4ee5\u907f\u514d",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Server-side_request_forgery"},"SSRF"),"\u653b\u51fb\uff1b\u6216\u8005\uff0c\u5fc5\u987b\u5728\u670d\u52a1\u5668\u914d\u7f6e\u4e2d\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"remote_host_filter"),"\u3002"),(0,i.kt)("h2",{id:"endpoint-settings"},"\u57fa\u4e8e Endpoint \u7684\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u53ef\u4ee5\u4e3a\u7ed9\u5b9a\u7684\u7aef\u70b9\u6307\u5b9a\u4ee5\u4e0b\u8bbe\u7f6e\uff08\u5c06\u901a\u8fc7URL\u7684\u51c6\u786e\u524d\u7f00\u6765\u5339\u914d\uff09\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endpoint")," - \u6307\u5b9a\u4e00\u4e2a\u7aef\u70b9\u7684\u524d\u7f00\u3002\u5fc5\u8981\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"access_key_id"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"secret_access_key")," - \u7528\u4e8e\u6307\u5b9a\u7aef\u70b9\u7684\u767b\u9646\u51ed\u636e\u3002\u53ef\u9009\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"use_environment_credentials")," - \u5982\u679c\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\uff0cS3\u5ba2\u6237\u7aef\u5c06\u5c1d\u8bd5\u4ece\u73af\u5883\u53d8\u91cf\u548c",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Amazon_Elastic_Compute_Cloud"},"Amazon EC2"),"\u5143\u6570\u636e\u4e2d\u4e3a\u6307\u5b9a\u7684\u7aef\u70b9\u83b7\u53d6\u8bc1\u4e66\u3002\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"region")," - \u6307\u5b9aS3\u7684\u533a\u57df\u540d\u79f0\u3002\u53ef\u9009\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"use_insecure_imds_request")," - \u5982\u679c\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"\uff0cS3\u5ba2\u6237\u7aef\u5c06\u4f7f\u7528\u4e0d\u5b89\u5168\u7684 IMDS \u8bf7\u6c42\uff0c\u540c\u65f6\u4eceAmazon EC2 \u5143\u6570\u636e\u83b7\u53d6\u8bc1\u4e66\u3002\u53ef\u9009\u53c2\u6570\uff0c\u9ed8\u8ba4\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"header")," - \u6dfb\u52a0\u6307\u5b9a\u7684HTTP\u5934\u5230\u7ed9\u5b9a\u7aef\u70b9\u7684\u8bf7\u6c42\u4e2d\u3002\u53ef\u9009\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u6b21\u6b64\u53c2\u6570\u6765\u6dfb\u52a0\u591a\u4e2a\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"server_side_encryption_customer_key_base64")," - \u5982\u679c\u6307\u5b9a\uff0c\u9700\u8981\u6307\u5b9a\u8bbf\u95ee SSE-C \u52a0\u5bc6\u7684 S3 \u5bf9\u8c61\u6240\u9700\u7684\u5934\u4fe1\u606f\u3002\u53ef\u9009\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_single_read_retries")," - \u5355\u6b21\u8bfb\u53d6\u65f6\u7684\u6700\u5927\u5c1d\u8bd5\u6b21\u6570\u3002\u9ed8\u8ba4\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"4"),"\u3002\u53ef\u9009\u53c2\u6570\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<s3>\n    <endpoint-name>\n        <endpoint>https://storage.yandexcloud.net/my-test-bucket-768/</endpoint>\n        \x3c!-- <access_key_id>ACCESS_KEY_ID</access_key_id> --\x3e\n        \x3c!-- <secret_access_key>SECRET_ACCESS_KEY</secret_access_key> --\x3e\n        \x3c!-- <region>us-west-1</region> --\x3e\n        \x3c!-- <use_environment_credentials>false</use_environment_credentials> --\x3e\n        \x3c!-- <use_insecure_imds_request>false</use_insecure_imds_request> --\x3e\n        \x3c!-- <header>Authorization: Bearer SOME-TOKEN</header> --\x3e\n        \x3c!-- <server_side_encryption_customer_key_base64>BASE64-ENCODED-KEY</server_side_encryption_customer_key_base64> --\x3e\n        \x3c!-- <max_single_read_retries>4</max_single_read_retries> --\x3e\n    </endpoint-name>\n</s3>\n")),(0,i.kt)("h2",{id:"usage-examples"},"\u7528\u6cd5"),(0,i.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5728 S3 \u4e0a\u6709\u51e0\u4e2a CSV \u683c\u5f0f\u7684\u6587\u4ef6\uff0cURI \u5982\u4e0b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_1.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_1.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_2.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_2.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_3.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_3.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_1.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_1.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_2.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_2.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_3.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_3.csv'"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6709\u51e0\u79cd\u65b9\u5f0f\u6765\u5236\u4f5c\u7531\u6240\u6709\u516d\u4e2a\u6587\u4ef6\u7ec4\u6210\u7684\u8868\u683c\uff0c\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\u5982\u4e0b:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_range (name String, value UInt32)\nENGINE = S3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/some_file_{1..3}', 'CSV');\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u53e6\u4e00\u79cd\u65b9\u5f0f:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_question_mark (name String, value UInt32)\nENGINE = S3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/some_file_?', 'CSV');\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u8868\u7531\u4e24\u4e2a\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u7ec4\u6210\uff08\u6240\u6709\u6587\u4ef6\u5e94\u6ee1\u8db3\u67e5\u8be2\u4e2d\u63cf\u8ff0\u7684\u683c\u5f0f\u548c\u6a21\u5f0f\uff09:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_asterisk (name String, value UInt32)\nENGINE = S3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/*', 'CSV');\n")),(0,i.kt)("p",null,'!!! warning "Warning"\n\u5982\u679c\u6587\u4ef6\u5217\u8868\u4e2d\u5305\u542b\u6709\u4ece0\u5f00\u5934\u7684\u6570\u5b57\u8303\u56f4\uff0c\u8bf7\u5bf9\u6bcf\u4e2a\u6570\u5b57\u5206\u522b\u4f7f\u7528\u5e26\u62ec\u53f7\u7684\u7ed3\u6784\uff0c\u6216\u8005\u4f7f\u7528',(0,i.kt)("inlineCode",{parentName:"p"},"?"),"."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u4ece\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"li"},"file-000.csv"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"file-001.csv"),", \u2026 , ",(0,i.kt)("inlineCode",{parentName:"li"},"file-999.csv"),"\u521b\u5efa\u8868:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE big_table (name String, value UInt32)\nENGINE = S3('https://storage.yandexcloud.net/my-test-bucket-768/big_prefix/file-{000..999}.csv', 'CSV');\n")),(0,i.kt)("h2",{id:"\u53e6\u8bf7\u53c2\u9605"},"\u53e6\u8bf7\u53c2\u9605"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/table-functions/s3"},"S3 \u8868\u51fd\u6570"))))}k.isMDXComponent=!0}}]);