"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67864],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:1},u="count",l={unversionedId:"en/sql-reference/aggregate-functions/reference/count",id:"en/sql-reference/aggregate-functions/reference/count",title:"count",description:"Counts the number of rows or not-NULL values.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/count.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/count",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/count",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"english",previous:{title:"List of Aggregate Functions",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/"},next:{title:"min",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/min"}},c={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"count"},"count"),(0,o.kt)("p",null,"Counts the number of rows or not-NULL values."),(0,o.kt)("p",null,"ClickHouse supports the following syntaxes for ",(0,o.kt)("inlineCode",{parentName:"p"},"count"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"count(expr)")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"COUNT(DISTINCT expr)"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"count()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"COUNT(*)"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"count()")," syntax is ClickHouse-specific.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,"The function can take:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Zero parameters."),(0,o.kt)("li",{parentName:"ul"},"One ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/syntax#syntax-expressions"},"expression"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the function is called without parameters it counts the number of rows."),(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/syntax#syntax-expressions"},"expression")," is passed, then the function counts how many times this expression returned not null. If the expression returns a ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"-type value, then the result of ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," stays not ",(0,o.kt)("inlineCode",{parentName:"li"},"Nullable"),". The function returns 0 if the expression returned ",(0,o.kt)("inlineCode",{parentName:"li"},"NULL")," for all the rows.")),(0,o.kt)("p",null,"In both cases the type of the returned value is ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Details")),(0,o.kt)("p",null,"ClickHouse supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"COUNT(DISTINCT ...)")," syntax. The behavior of this construction depends on the ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#settings-count_distinct_implementation"},"count_distinct_implementation")," setting. It defines which of the ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq","*")," functions is used to perform the operation. The default is the ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact")," function."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM table")," query is optimized by default using metadata from MergeTree. If you need to use row-level security, disable optimization using the ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#optimize-trivial-count-query"},"optimize_trivial_count_query")," setting."),(0,o.kt)("p",null,"However ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT count(nullable_column) FROM table")," query can be optimized by enabling the ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#optimize-functions-to-subcolumns"},"optimize_functions_to_subcolumns")," setting. With ",(0,o.kt)("inlineCode",{parentName:"p"},"optimize_functions_to_subcolumns = 1")," the function reads only ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable#finding-null"},"null")," subcolumn instead of reading and processing the whole column data. The query ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT count(n) FROM table")," transforms to ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT sum(NOT n.null) FROM table"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502       5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, value FROM system.settings WHERE name = 'count_distinct_implementation'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 count_distinct_implementation \u2502 uniqExact \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(DISTINCT num) FROM t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500uniqExact(num)\u2500\u2510\n\u2502              3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"This example shows that ",(0,o.kt)("inlineCode",{parentName:"p"},"count(DISTINCT num)")," is performed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqExact")," function according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"count_distinct_implementation")," setting value."))}m.isMDXComponent=!0}}]);