"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58335],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_label:"INTO OUTFILE"},s="INTO OUTFILE Clause",p={unversionedId:"en/sql-reference/statements/select/into-outfile",id:"en/sql-reference/statements/select/into-outfile",title:"INTO OUTFILE Clause",description:"INTO OUTFILE clause redirects the result of a SELECT query to a file on the client side.",source:"@site/docs/en/sql-reference/statements/select/into-outfile.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/into-outfile",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/select/into-outfile",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/into-outfile.md",tags:[],version:"current",frontMatter:{sidebar_label:"INTO OUTFILE"},sidebar:"english",previous:{title:"INTERSECT",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/select/intersect"},next:{title:"JOIN",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/select/join"}},c={},u=[{value:"Implementation Details",id:"implementation-details",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"into-outfile-clause"},"INTO OUTFILE Clause"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE")," clause redirects the result of a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query to a file on the ",(0,i.kt)("strong",{parentName:"p"},"client")," side."),(0,i.kt)("p",null,"Compressed files are supported. Compression type is detected by the extension of the file name (mode ",(0,i.kt)("inlineCode",{parentName:"p"},"'auto'")," is used by default). Or it can be explicitly specified in a ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPRESSION")," clause. The compression level for a certain compression type can be specified in a ",(0,i.kt)("inlineCode",{parentName:"p"},"LEVEL")," clause."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <expr_list> INTO OUTFILE file_name [COMPRESSION type [LEVEL level]]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file_name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," are string literals. Supported compression types are: ",(0,i.kt)("inlineCode",{parentName:"p"},"'none'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'gzip'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'deflate'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'br'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'xz'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'zstd'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'lz4'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'bz2'"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"level")," is a numeric literal. Positive integers in following ranges are supported: ",(0,i.kt)("inlineCode",{parentName:"p"},"1-12")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"lz4")," type, ",(0,i.kt)("inlineCode",{parentName:"p"},"1-22")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"zstd")," type and ",(0,i.kt)("inlineCode",{parentName:"p"},"1-9")," for other compression types."),(0,i.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This functionality is available in the ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/interfaces/cli"},"command-line client")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/operations/utilities/clickhouse-local"},"clickhouse-local"),". Thus a query sent via ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/interfaces/http"},"HTTP interface")," will fail."),(0,i.kt)("li",{parentName:"ul"},"The query will fail if a file with the same file name already exists."),(0,i.kt)("li",{parentName:"ul"},"The default ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/interfaces/formats"},"output format")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"TabSeparated")," (like in the command-line client batch mode). Use ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/select/format"},"FORMAT")," clause to change it.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Execute the following query using ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/interfaces/cli"},"command-line client"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --query=\"SELECT 1,'ABC' INTO OUTFILE 'select.gz' FORMAT CSV;\"\nzcat select.gz \n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'1,"ABC"\n')))}f.isMDXComponent=!0}}]);