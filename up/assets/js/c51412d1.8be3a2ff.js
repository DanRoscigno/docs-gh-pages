"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[44918],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36487:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_position:55,sidebar_label:"hdfsCluster"},o="hdfsCluster Table Function",c={unversionedId:"en/sql-reference/table-functions/hdfsCluster",id:"en/sql-reference/table-functions/hdfsCluster",title:"hdfsCluster Table Function",description:"Allows processing files from HDFS in parallel from many nodes in a specified cluster. On initiator it creates a connection to all nodes in the cluster, discloses asterics in HDFS file path, and dispatches each file dynamically. On the worker node it asks the initiator about the next task to process and processes it. This is repeated until all tasks are finished.",source:"@site/docs/en/sql-reference/table-functions/hdfsCluster.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/hdfsCluster",permalink:"/docs-gh-pages/up/en/sql-reference/table-functions/hdfsCluster",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/hdfsCluster.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55,sidebar_label:"hdfsCluster"},sidebar:"english",previous:{title:"dictionary function",permalink:"/docs-gh-pages/up/en/sql-reference/table-functions/dictionary"},next:{title:"s3Cluster",permalink:"/docs-gh-pages/up/en/sql-reference/table-functions/s3Cluster"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hdfscluster-table-function"},"hdfsCluster Table Function"),(0,i.kt)("p",null,"Allows processing files from HDFS in parallel from many nodes in a specified cluster. On initiator it creates a connection to all nodes in the cluster, discloses asterics in HDFS file path, and dispatches each file dynamically. On the worker node it asks the initiator about the next task to process and processes it. This is repeated until all tasks are finished."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"hdfsCluster(cluster_name, URI, format, structure)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster_name")," \u2014 Name of a cluster that is used to build a set of addresses and connection parameters to remote and local servers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"URI")," \u2014 URI to a file or a bunch of files. Supports following wildcards in readonly mode: ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{'abc','def'}")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ",(0,i.kt)("inlineCode",{parentName:"li"},"abc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"def")," \u2014 strings. For more information see ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/engines/table-engines/integrations/s3#wildcards-in-path"},"Wildcards In Path"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," \u2014 The ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/interfaces/formats#formats"},"format")," of the file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 Structure of the table. Format ",(0,i.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("p",null,"A table with the specified structure for reading data in the specified file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Suppose that we have a ClickHouse cluster named ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster_simple"),", and several files with following URIs on HDFS:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_1\u2019"),(0,i.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_2\u2019"),(0,i.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_3\u2019"),(0,i.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_1\u2019"),(0,i.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_2\u2019"),(0,i.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_3\u2019")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Query the amount of rows in these files:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfsCluster('cluster_simple', 'hdfs://hdfs1:9000/{some,another}_dir/some_file_{1..3}', 'TSV', 'name String, value UInt32')\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Query the amount of rows in all files of these two directories:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfsCluster('cluster_simple', 'hdfs://hdfs1:9000/{some,another}_dir/*', 'TSV', 'name String, value UInt32')\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/engines/table-engines/integrations/hdfs"},"HDFS engine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/table-functions/hdfs"},"HDFS table function"))))}f.isMDXComponent=!0}}]);