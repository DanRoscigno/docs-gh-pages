"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41470],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=s,f=m["".concat(o,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),r=["components"],l={sidebar_position:45,sidebar_label:"s3"},o="s3 Table Function",c={unversionedId:"en/sql-reference/table-functions/s3",id:"en/sql-reference/table-functions/s3",title:"s3 Table Function",description:"Provides table-like interface to select/insert files in Amazon S3. This table function is similar to hdfs, but provides S3-specific features.",source:"@site/docs/en/sql-reference/table-functions/s3.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/s3",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/table-functions/s3",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/s3.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"s3"},sidebar:"english",previous:{title:"hdfs",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/table-functions/hdfs"},next:{title:"input",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/table-functions/input"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Partitioned Write",id:"partitioned-write",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"s3-table-function"},"s3 Table Function"),(0,i.kt)("p",null,"Provides table-like interface to select/insert files in ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),". This table function is similar to ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/table-functions/hdfs"},"hdfs"),", but provides S3-specific features."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"s3(path, [aws_access_key_id, aws_secret_access_key,] format, structure, [compression])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u2014 Bucket url with path to file. Supports following wildcards in readonly mode: ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{abc,def}")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ",(0,i.kt)("inlineCode",{parentName:"li"},"'abc'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'def'")," \u2014 strings. For more information see ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/integrations/s3#wildcards-in-path"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," \u2014 The ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/interfaces/formats#formats"},"format")," of the file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 Structure of the table. Format ",(0,i.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compression")," \u2014 Parameter is optional. Supported values: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip/gz"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"brotli/br"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"xz/LZMA"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zstd/zst"),". By default, it will autodetect compression by file extension.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("p",null,"A table with the specified structure for reading or writing data in the specified file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Selecting the first two rows from the table from S3 file ",(0,i.kt)("inlineCode",{parentName:"p"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/data.csv"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/data.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32')\nLIMIT 2;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"The similar but from file with ",(0,i.kt)("inlineCode",{parentName:"p"},"gzip")," compression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/data.csv.gz', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32', 'gzip')\nLIMIT 2;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Suppose that we have several files with following URIs on S3:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_1.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_1.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_2.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_2.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_3.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_3.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_4.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_4.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_1.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_1.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_2.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_2.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_3.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_3.csv'")),(0,i.kt)("li",{parentName:"ul"},"'",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_4.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_4.csv'"))),(0,i.kt)("p",null,"Count the amount of rows in files ending with numbers from 1 to 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/{some,another}_prefix/some_file_{1..3}.csv', 'CSV', 'name String, value UInt32')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      18 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Count the total amount of rows in all files in these two directories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/{some,another}_prefix/*', 'CSV', 'name String, value UInt32')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      24 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"."))),(0,i.kt)("p",null,"Count the total amount of rows in files named ",(0,i.kt)("inlineCode",{parentName:"p"},"file-000.csv"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file-001.csv"),", \u2026 , ",(0,i.kt)("inlineCode",{parentName:"p"},"file-999.csv"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/big_prefix/file-{000..999}.csv', 'CSV', 'name String, value UInt32');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      12 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Insert data into file ",(0,i.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip')\nVALUES ('test-data', 1), ('test-data-2', 2);\n")),(0,i.kt)("p",null,"Insert data into file ",(0,i.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz")," from existing table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip')\nSELECT name, value FROM existing_table;\n")),(0,i.kt)("h2",{id:"partitioned-write"},"Partitioned Write"),(0,i.kt)("p",null,"If you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"PARTITION BY")," expression when inserting data into ",(0,i.kt)("inlineCode",{parentName:"p"},"S3")," table, a separate file is created for each partition value. Splitting the data into separate files helps to improve reading operations efficiency."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Using partition ID in a key creates separate files:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE FUNCTION\n    s3('http://bucket.amazonaws.com/my_bucket/file_{_partition_id}.csv', 'CSV', 'a String, b UInt32, c UInt32')\n    PARTITION BY a VALUES ('x', 2, 3), ('x', 4, 5), ('y', 11, 12), ('y', 13, 14), ('z', 21, 22), ('z', 23, 24);\n")),(0,i.kt)("p",null,"As a result, the data is written into three files: ",(0,i.kt)("inlineCode",{parentName:"p"},"file_x.csv"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file_y.csv"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"file_z.csv"),"."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Using partition ID in a bucket name creates files in different buckets:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE FUNCTION\n    s3('http://bucket.amazonaws.com/my_bucket_{_partition_id}/file.csv', 'CSV', 'a UInt32, b UInt32, c UInt32')\n    PARTITION BY a VALUES (1, 2, 3), (1, 4, 5), (10, 11, 12), (10, 13, 14), (20, 21, 22), (20, 23, 24);\n")),(0,i.kt)("p",null,"As a result, the data is written into three files in different buckets: ",(0,i.kt)("inlineCode",{parentName:"p"},"my_bucket_1/file.csv"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"my_bucket_10/file.csv"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"my_bucket_20/file.csv"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/integrations/s3"},"S3 engine"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/s3/"},"Original article")," "))}k.isMDXComponent=!0}}]);