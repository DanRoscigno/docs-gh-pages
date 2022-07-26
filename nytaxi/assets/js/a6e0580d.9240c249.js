"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88676],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95019:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:45,sidebar_label:"FixedString(N)"},s="Fixedstring",p={unversionedId:"en/sql-reference/data-types/fixedstring",id:"en/sql-reference/data-types/fixedstring",title:"Fixedstring",description:"A fixed-length string of N bytes (neither characters nor code points).",source:"@site/docs/en/sql-reference/data-types/fixedstring.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/fixedstring",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/fixedstring",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/fixedstring.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"FixedString(N)"},sidebar:"english",previous:{title:"String",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/string"},next:{title:"UUID",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/uuid"}},c={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fixedstring"},"Fixedstring"),(0,i.kt)("p",null,"A fixed-length string of ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," bytes (neither characters nor code points)."),(0,i.kt)("p",null,"To declare a column of ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," type, use the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"<column_name> FixedString(N)\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is a natural number."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," type is efficient when data has the length of precisely ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," bytes. In all other cases, it is likely to reduce efficiency."),(0,i.kt)("p",null,"Examples of the values that can be efficiently stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString"),"-typed columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The binary representation of IP addresses (",(0,i.kt)("inlineCode",{parentName:"li"},"FixedString(16)")," for IPv6)."),(0,i.kt)("li",{parentName:"ul"},"Language codes (ru_RU, en_US \u2026 )."),(0,i.kt)("li",{parentName:"ul"},"Currency codes (USD, RUB \u2026 )."),(0,i.kt)("li",{parentName:"ul"},"Binary representation of hashes (",(0,i.kt)("inlineCode",{parentName:"li"},"FixedString(16)")," for MD5, ",(0,i.kt)("inlineCode",{parentName:"li"},"FixedString(32)")," for SHA256).")),(0,i.kt)("p",null,"To store UUID values, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/uuid"},"UUID")," data type."),(0,i.kt)("p",null,"When inserting the data, ClickHouse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complements a string with null bytes if the string contains fewer than ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," bytes."),(0,i.kt)("li",{parentName:"ul"},"Throws the ",(0,i.kt)("inlineCode",{parentName:"li"},"Too large value for FixedString(N)")," exception if the string contains more than ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," bytes.")),(0,i.kt)("p",null,"When selecting the data, ClickHouse does not remove the null bytes at the end of the string. If you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," clause, you should add null bytes manually to match the ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," value. The following example illustrates how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," clause with ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString"),"."),(0,i.kt)("p",null,"Let\u2019s consider the following table with the single ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString(2)")," column:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2510\n\u2502 b     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"The query ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT * FROM FixedStringTable WHERE a = 'b'")," does not return any data as a result. We should complement the filter pattern with null bytes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM FixedStringTable\nWHERE a = 'b\\0'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 b \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"This behaviour differs from MySQL for the ",(0,i.kt)("inlineCode",{parentName:"p"},"CHAR")," type (where strings are padded with spaces, and the spaces are removed for output)."),(0,i.kt)("p",null,"Note that the length of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString(N)")," value is constant. The ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/array-functions#array_functions-length"},"length")," function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," even if the ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString(N)")," value is filled only with null bytes, but the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/string-functions#empty"},"empty")," function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," in this case."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/fixedstring/"},"Original article")," "))}f.isMDXComponent=!0}}]);