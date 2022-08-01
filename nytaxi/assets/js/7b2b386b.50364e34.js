"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49853],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={},p="system.columns",o={unversionedId:"zh/operations/system-tables/columns",id:"zh/operations/system-tables/columns",title:"system.columns",description:"system-columns}",source:"@site/docs/zh/operations/system-tables/columns.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/columns",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/columns",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/columns.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.clusters",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/clusters"},next:{title:"system.contributors",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/contributors"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-columns"},"system.columns"),(0,i.kt)("p",null,"\u6b64\u7cfb\u7edf\u8868\u5305\u542b\u6240\u6709\u8868\u4e2d\u5217\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u8868\u6765\u83b7\u5f97\u7c7b\u4f3c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/misc#misc-describe-table"},"DESCRIBE TABLE")," \u67e5\u8be2\u7684\u4fe1\u606f\uff0c\u4f46\u662f\u53ef\u4ee5\u540c\u65f6\u83b7\u5f97\u591a\u4e2a\u8868\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/create/table#temporary-tables"},"\u4e34\u65f6\u8868"),"\u4e2d\u7684\u5217\u53ea\u5728\u521b\u5efa\u5b83\u4eec\u7684\u4f1a\u8bdd\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"system.columns")," \u4e2d\u624d\u53ef\u89c1\uff0c\u5e76\u4e14\u5b83\u4eec\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," \u5b57\u6bb5\u663e\u793a\u4e3a\u7a7a\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"system.columns")," \u8868\u5305\u542b\u4ee5\u4e0b\u5217 (\u62ec\u53f7\u4e2d\u663e\u793a\u7684\u662f\u5217\u7c7b\u578b):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u5e93\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8868\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5217\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5217\u7c7b\u578b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"position")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u5217\u5728\u8868\u4e2d\u7684\u987a\u5e8f\u4f4d\u7f6e\uff0c\u4ece1\u5f00\u59cb\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_kind")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u9ed8\u8ba4\u503c\u7684\u8868\u8fbe\u5f0f\u7c7b\u578b(",(0,i.kt)("inlineCode",{parentName:"li"},"DEFAULT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MATERIALIZED"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ALIAS"),") \uff0c\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\uff0c\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_expression")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u9ed8\u8ba4\u503c\u7684\u8868\u8fbe\u5f0f\uff0c\u5982\u679c\u672a\u5b9a\u4e49\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u89e3\u538b\u540e\u7684\u6570\u636e\u7684\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"marks_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u6807\u8bb0\u7684\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"comment")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5217\u6ce8\u91ca\uff0c\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\uff0c\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_partition_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u5217\u662f\u5426\u5728\u5206\u533a\u8868\u8fbe\u5f0f\u4e2d\u7684\u6807\u5fd7\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_sorting_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u5217\u662f\u5426\u5728\u6392\u5e8f\u952e\u8868\u8fbe\u5f0f\u4e2d\u7684\u6807\u5fd7\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_primary_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u5217\u662f\u5426\u5728\u4e3b\u952e\u8868\u8fbe\u5f0f\u4e2d\u7684\u6807\u5fd7\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_in_sampling_key")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u5217\u662f\u5426\u5728\u91c7\u6837\u952e\u8868\u8fbe\u5f0f\u4e2d\u7684\u6807\u5fd7\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compression_codec")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u538b\u7f29\u7f16\u7801\u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"character_octet_length")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u4e8c\u8fdb\u5236\u6570\u636e\u3001\u5b57\u7b26\u6570\u636e\u6216\u6587\u672c\u6570\u636e\u548c\u56fe\u50cf\u7684\u6700\u5927\u957f\u5ea6(\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d)\u3002\u5728 ClickHouse \u4e2d\u53ea\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"li"},"FixedString")," \u6570\u636e\u7c7b\u578b\u6709\u610f\u4e49\u3002\u5426\u5219\uff0c\u5c06\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_precision")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u8fd1\u4f3c\u6570\u5b57\u578b\u6570\u636e\u3001\u7cbe\u786e\u6570\u5b57\u578b\u6570\u636e\u3001\u6574\u6570\u578b\u6570\u636e\u6216\u8d27\u5e01\u6570\u636e\u7684\u7cbe\u5ea6\u3002\u5728 ClickHouse \u4e2d\uff0c\u5bf9\u4e8e\u6574\u6570\u7c7b\u578b\u662f\u6bd4\u7279\u7387(bitness)\uff0c\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal")," \u7c7b\u578b\u662f\u5341\u8fdb\u5236\u7cbe\u5ea6\u3002\u5426\u5219\uff0c\u5c06\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_precision_radix")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6570\u5b57\u7cfb\u7edf\u7684\u57fa\u6570\u662f\u8fd1\u4f3c\u6570\u5b57\u578b\u6570\u636e\u3001\u7cbe\u786e\u6570\u5b57\u578b\u6570\u636e\u3001\u6574\u6570\u578b\u6570\u636e\u6216\u8d27\u5e01\u6570\u636e\u7684\u7cbe\u5ea6\u3002\u5728 ClickHouse \u4e2d\uff0c\u5bf9\u4e8e\u6574\u6570\u7c7b\u578b\u662f2\uff0c\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal")," \u7c7b\u578b\u662f10\u3002\u5426\u5219\uff0c\u5c06\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numeric_scale")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u8fd1\u4f3c\u6570\u5b57\u578b\u6570\u636e\u3001\u7cbe\u786e\u6570\u5b57\u578b\u6570\u636e\u3001\u6574\u6570\u578b\u6570\u636e\u6216\u8d27\u5e01\u6570\u636e\u7684\u6bd4\u4f8b\u3002\u5728 ClickHouse \u4e2d\u53ea\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"li"},"Decimal")," \u7c7b\u578b\u6709\u610f\u4e49\u3002\u5426\u5219\uff0c\u5c06\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u503c\u3002 "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"datetime_precision")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64")," \u6570\u636e\u7c7b\u578b\u7684\u5c0f\u6570\u7cbe\u5ea6\u3002\u5bf9\u4e8e\u5176\u4ed6\u6570\u636e\u7c7b\u578b\uff0c\u5c06\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u503c\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.columns LIMIT 2 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                INFORMATION_SCHEMA\ntable:                   COLUMNS\nname:                    table_catalog\ntype:                    String\nposition:                1\ndefault_kind:\ndefault_expression:\ndata_compressed_bytes:   0\ndata_uncompressed_bytes: 0\nmarks_bytes:             0\ncomment:\nis_in_partition_key:     0\nis_in_sorting_key:       0\nis_in_primary_key:       0\nis_in_sampling_key:      0\ncompression_codec:\ncharacter_octet_length:  \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision:       \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision_radix: \u1d3a\u1d41\u1d38\u1d38\nnumeric_scale:           \u1d3a\u1d41\u1d38\u1d38\ndatetime_precision:      \u1d3a\u1d41\u1d38\u1d38\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                INFORMATION_SCHEMA\ntable:                   COLUMNS\nname:                    table_schema\ntype:                    String\nposition:                2\ndefault_kind:\ndefault_expression:\ndata_compressed_bytes:   0\ndata_uncompressed_bytes: 0\nmarks_bytes:             0\ncomment:\nis_in_partition_key:     0\nis_in_sorting_key:       0\nis_in_primary_key:       0\nis_in_sampling_key:      0\ncompression_codec:\ncharacter_octet_length:  \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision:       \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision_radix: \u1d3a\u1d41\u1d38\u1d38\nnumeric_scale:           \u1d3a\u1d41\u1d38\u1d38\ndatetime_precision:      \u1d3a\u1d41\u1d38\u1d38\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/columns"},"\u539f\u6587")," "))}d.isMDXComponent=!0}}]);