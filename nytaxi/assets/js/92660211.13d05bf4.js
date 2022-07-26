"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23397],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return y}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),y=r,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29398:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={sidebar_position:51,sidebar_label:"\u4f4e\u57fa\u6570\u7c7b\u578b"},s="\u4f4e\u57fa\u6570\u7c7b\u578b",c={unversionedId:"zh/sql-reference/data-types/lowcardinality",id:"zh/sql-reference/data-types/lowcardinality",title:"\u4f4e\u57fa\u6570\u7c7b\u578b",description:"lowcardinality-data-type}",source:"@site/docs/zh/sql-reference/data-types/lowcardinality.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/lowcardinality",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/lowcardinality",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/lowcardinality.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,sidebar_label:"\u4f4e\u57fa\u6570\u7c7b\u578b"},sidebar:"chinese",previous:{title:"DateTime64",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/datetime64"},next:{title:"\u57df",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/domains/"}},p={},d=[{value:"\u8bed\u6cd5",id:"lowcardinality-syntax",level:2},{value:"\u63cf\u8ff0",id:"lowcardinality-dscr",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u76f8\u5173\u7684\u8bbe\u7f6e\u548c\u51fd\u6570",id:"\u76f8\u5173\u7684\u8bbe\u7f6e\u548c\u51fd\u6570",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:d};function y(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lowcardinality-data-type"},"\u4f4e\u57fa\u6570\u7c7b\u578b"),(0,i.kt)("p",null,"\u628a\u5176\u5b83\u6570\u636e\u7c7b\u578b\u8f6c\u53d8\u4e3a\u5b57\u5178\u7f16\u7801\u7c7b\u578b\u3002"),(0,i.kt)("h2",{id:"lowcardinality-syntax"},"\u8bed\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LowCardinality(data_type)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_type")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/date"},"Date"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/datetime"},"DateTime"),"\uff0c\u5305\u62ec\u6570\u5b57\u7c7b\u578b\uff0c\u4f46\u662f",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/decimal"},"Decimal"),"\u9664\u5916\u3002\u5bf9\u4e00\u4e9b\u6570\u636e\u7c7b\u578b\u6765\u8bf4\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"LowCardinality")," \u5e76\u4e0d\u9ad8\u6548\uff0c\u8be6\u67e5",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#allow_suspicious_low_cardinality_types"},"allow_suspicious_low_cardinality_types"),"\u8bbe\u7f6e\u63cf\u8ff0\u3002")),(0,i.kt)("h2",{id:"lowcardinality-dscr"},"\u63cf\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u662f\u4e00\u79cd\u6539\u53d8\u6570\u636e\u5b58\u50a8\u548c\u6570\u636e\u5904\u7406\u65b9\u6cd5\u7684\u6982\u5ff5\u3002 ClickHouse\u4f1a\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u6240\u5728\u7684\u5217\u8fdb\u884c",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dictionary_coder"},"dictionary coding"),"\u3002\u5bf9\u5f88\u591a\u5e94\u7528\u6765\u8bf4\uff0c\u5904\u7406\u5b57\u5178\u7f16\u7801\u7684\u6570\u636e\u53ef\u4ee5\u663e\u8457\u7684\u589e\u52a0",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/select/"},"SELECT"),"\u67e5\u8be2\u901f\u5ea6\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCarditality")," \u6570\u636e\u7c7b\u578b\u7684\u6548\u7387\u4f9d\u8d56\u4e8e\u6570\u636e\u7684\u591a\u6837\u6027\u3002\u5982\u679c\u4e00\u4e2a\u5b57\u5178\u5305\u542b\u5c11\u4e8e10000\u4e2a\u4e0d\u540c\u7684\u503c\uff0c\u90a3\u4e48ClickHouse\u53ef\u4ee5\u8fdb\u884c\u66f4\u9ad8\u6548\u7684\u6570\u636e\u5b58\u50a8\u548c\u5904\u7406\u3002\u53cd\u4e4b\u5982\u679c\u5b57\u5178\u591a\u4e8e10000\uff0c\u6548\u7387\u4f1a\u8868\u73b0\u7684\u66f4\u5dee\u3002"),(0,i.kt)("p",null,"\u5f53\u4f7f\u7528\u5b57\u7b26\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u4ee3\u66ff",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/enum"},"Enum"),"\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u901a\u5e38\u66f4\u52a0\u7075\u6d3b\u548c\u9ad8\u6548\u3002"),(0,i.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u7c7b\u578b\u7684\u5217\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE lc_t\n(\n    `id` UInt16,\n    `strings` LowCardinality(String)\n)\nENGINE = MergeTree()\nORDER BY id\n")),(0,i.kt)("h2",{id:"\u76f8\u5173\u7684\u8bbe\u7f6e\u548c\u51fd\u6570"},"\u76f8\u5173\u7684\u8bbe\u7f6e\u548c\u51fd\u6570"),(0,i.kt)("p",null,"\u8bbe\u7f6e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#low_cardinality_max_dictionary_size"},"low_cardinality_max_dictionary_size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#low_cardinality_use_single_dictionary_for_part"},"low_cardinality_use_single_dictionary_for_part")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#low_cardinality_allow_in_native_format"},"low_cardinality_allow_in_native_format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#allow_suspicious_low_cardinality_types"},"allow_suspicious_low_cardinality_types"))),(0,i.kt)("p",null,"\u51fd\u6570:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/type-conversion-functions#tolowcardinality"},"toLowCardinality"))),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.altinity.com/blog/2019/3/27/low-cardinality"},"\u9ad8\u6548\u4f4e\u57fa\u6570\u7c7b\u578b"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.instana.com/blog/reducing-clickhouse-storage-cost-with-the-low-cardinality-type-lessons-from-an-instana-engineer/"},"\u4f7f\u7528\u4f4e\u57fa\u6570\u7c7b\u578b\u51cf\u5c11ClickHouse\u7684\u5b58\u50a8\u6210\u672c \u2013 \u6765\u81eaInstana\u5de5\u7a0b\u5e08\u7684\u5206\u4eab"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/rqf-ILRgBdY?list=PL0Z2YDlm0b3iwXCpEFiOOYmwXzVmjJfEt"},"\u5b57\u7b26\u4f18\u5316 (\u4fc4\u8bed\u89c6\u9891\u5206\u4eab)"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-presentations/raw/master/meetup19/string_optimization.pdf"},"\u82f1\u8bed\u5206\u4eab"),".")))}y.isMDXComponent=!0}}]);