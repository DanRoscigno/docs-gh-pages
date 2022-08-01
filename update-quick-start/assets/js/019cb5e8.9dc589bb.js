"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[33347],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},c="How Do I Export Data from ClickHouse to a File?",u={unversionedId:"en/faq/integration/file-export",id:"en/faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",description:"how-to-export-to-file}",source:"@site/docs/en/faq/integration/file-export.md",sourceDirName:"en/faq/integration",slug:"/en/faq/integration/file-export",permalink:"/docs-gh-pages/update-quick-start/en/faq/integration/file-export",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/integration/file-export.md",tags:[],version:"current",frontMatter:{title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},sidebar:"english",previous:{title:"Integrating ClickHouse with Other Systems",permalink:"/docs-gh-pages/update-quick-start/en/faq/integration/"},next:{title:"How to import JSON into ClickHouse?",permalink:"/docs-gh-pages/update-quick-start/en/faq/integration/json-import"}},s={},p=[{value:"Using INTO OUTFILE Clause",id:"using-into-outfile-clause",level:2},{value:"Using a File-Engine Table",id:"using-a-file-engine-table",level:2},{value:"Using Command-Line Redirection",id:"using-command-line-redirection",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-export-to-file"},"How Do I Export Data from ClickHouse to a File?"),(0,o.kt)("h2",{id:"using-into-outfile-clause"},"Using INTO OUTFILE Clause"),(0,o.kt)("p",null,"Add an ",(0,o.kt)("a",{parentName:"p",href:"../../sql-reference/statements/select/into-outfile"},"INTO OUTFILE")," clause to your query."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file'\n")),(0,o.kt)("p",null,"By default, ClickHouse uses the ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/interfaces/formats"},"TabSeparated")," format for output data. To select the ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/interfaces/formats"},"data format"),", use the ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/select/format"},"FORMAT clause"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file' FORMAT CSV\n")),(0,o.kt)("h2",{id:"using-a-file-engine-table"},"Using a File-Engine Table"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/special/file"},"File")," table engine."),(0,o.kt)("h2",{id:"using-command-line-redirection"},"Using Command-Line Redirection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --query "SELECT * from table" --format FormatName > result.txt\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/interfaces/cli"},"clickhouse-client"),"."))}d.isMDXComponent=!0}}]);