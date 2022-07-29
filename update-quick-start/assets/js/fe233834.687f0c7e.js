"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60747],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return y}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),y=i,f=u["".concat(l,".").concat(y)]||u[y]||d[y]||r;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4763:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),s=["components"],o={sidebar_position:51,sidebar_label:"LowCardinality"},l="LowCardinality Data Type",c={unversionedId:"en/sql-reference/data-types/lowcardinality",id:"en/sql-reference/data-types/lowcardinality",title:"LowCardinality Data Type",description:"Changes the internal representation of other data types to be dictionary-encoded.",source:"@site/docs/en/sql-reference/data-types/lowcardinality.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/lowcardinality",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/lowcardinality",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/lowcardinality.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,sidebar_label:"LowCardinality"},sidebar:"english",previous:{title:"Enum",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/enum"},next:{title:"Array(T)",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Related Settings and Functions",id:"related-settings-and-functions",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:d};function y(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lowcardinality-data-type"},"LowCardinality Data Type"),(0,r.kt)("p",null,"Changes the internal representation of other data types to be dictionary-encoded."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"LowCardinality(data_type)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_type")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/date"},"Date"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/datetime"},"DateTime"),", and numbers excepting ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/decimal"},"Decimal"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"LowCardinality")," is not efficient for some data types, see the ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#allow_suspicious_low_cardinality_types"},"allow_suspicious_low_cardinality_types")," setting description.")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LowCardinality")," is a superstructure that changes a data storage method and rules of data processing. ClickHouse applies ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dictionary_coder"},"dictionary coding")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"LowCardinality"),"-columns. Operating with dictionary encoded data significantly increases performance of ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/select/"},"SELECT")," queries for many applications."),(0,r.kt)("p",null,"The efficiency of using ",(0,r.kt)("inlineCode",{parentName:"p"},"LowCardinality")," data type depends on data diversity. If a dictionary contains less than 10,000 distinct values, then ClickHouse mostly shows higher efficiency of data reading and storing. If a dictionary contains more than 100,000 distinct values, then ClickHouse can perform worse in comparison with using ordinary data types."),(0,r.kt)("p",null,"Consider using ",(0,r.kt)("inlineCode",{parentName:"p"},"LowCardinality")," instead of ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/enum"},"Enum")," when working with strings. ",(0,r.kt)("inlineCode",{parentName:"p"},"LowCardinality")," provides more flexibility in use and often reveals the same or higher efficiency."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Create a table with a ",(0,r.kt)("inlineCode",{parentName:"p"},"LowCardinality"),"-column:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE lc_t\n(\n    `id` UInt16,\n    `strings` LowCardinality(String)\n)\nENGINE = MergeTree()\nORDER BY id\n")),(0,r.kt)("h2",{id:"related-settings-and-functions"},"Related Settings and Functions"),(0,r.kt)("p",null,"Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#low_cardinality_max_dictionary_size"},"low_cardinality_max_dictionary_size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#low_cardinality_use_single_dictionary_for_part"},"low_cardinality_use_single_dictionary_for_part")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#low_cardinality_allow_in_native_format"},"low_cardinality_allow_in_native_format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#allow_suspicious_low_cardinality_types"},"allow_suspicious_low_cardinality_types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#output-format-arrow-low-cardinality-as-dictionary"},"output_format_arrow_low_cardinality_as_dictionary"))),(0,r.kt)("p",null,"Functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/type-conversion-functions#tolowcardinality"},"toLowCardinality"))),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.instana.com/blog/reducing-clickhouse-storage-cost-with-the-low-cardinality-type-lessons-from-an-instana-engineer/"},"Reducing ClickHouse Storage Cost with the Low Cardinality Type \u2013 Lessons from an Instana Engineer"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/rqf-ILRgBdY?list=PL0Z2YDlm0b3iwXCpEFiOOYmwXzVmjJfEt"},"String Optimization (video presentation in Russian)"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-presentations/raw/master/meetup19/string_optimization.pdf"},"Slides in English"),".")))}y.isMDXComponent=!0}}]);