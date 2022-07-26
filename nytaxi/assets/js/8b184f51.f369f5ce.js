"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[52886],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),y=r,k=m["".concat(o,".").concat(y)]||m[y]||c[y]||p;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<p;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return y},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),l=["components"],s={sidebar_position:65,sidebar_label:"Map(key, value)"},o="Map(key, value)",i={unversionedId:"en/sql-reference/data-types/map",id:"en/sql-reference/data-types/map",title:"Map(key, value)",description:"Map(key, value) data type stores key:value pairs.",source:"@site/docs/en/sql-reference/data-types/map.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/map",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/map",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/map.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65,sidebar_label:"Map(key, value)"},sidebar:"english",previous:{title:"Geo",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/geo"},next:{title:"SimpleAggregateFunction",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/simpleaggregatefunction"}},u={},c=[{value:"Convert Tuple to Map Type",id:"convert-tuple-to-map-type",level:2},{value:"Map.keys and Map.values Subcolumns",id:"mapkeys-and-mapvalues-subcolumns",level:2}],m={toc:c};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"mapkey-value"},"Map(key, value)"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Map(key, value)")," data type stores ",(0,p.kt)("inlineCode",{parentName:"p"},"key:value")," pairs."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Parameters")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"key")," \u2014 The key part of the pair. ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/string"},"String"),", ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/lowcardinality"},"LowCardinality"),", ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/uuid"},"UUID"),", ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/date"},"Date"),", ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/datetime"},"DateTime"),", ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/date32"},"Date32"),", ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/enum"},"Enum"),"."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"value")," \u2014 The value part of the pair. Arbitrary type, including ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/map"},"Map")," and ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/array"},"Array"),".")),(0,p.kt)("p",null,"To get the value from an ",(0,p.kt)("inlineCode",{parentName:"p"},"a Map('key', 'value')")," column, use ",(0,p.kt)("inlineCode",{parentName:"p"},"a['key']")," syntax. This lookup works now with a linear complexity."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Examples")),(0,p.kt)("p",null,"Consider the table:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_map (a Map(String, UInt64)) ENGINE=Memory;\nINSERT INTO table_map VALUES ({'key1':1, 'key2':10}), ({'key1':2,'key2':20}), ({'key1':3,'key2':30});\n")),(0,p.kt)("p",null,"Select all ",(0,p.kt)("inlineCode",{parentName:"p"},"key2")," values:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a['key2'] FROM table_map;\n")),(0,p.kt)("p",null,"Result:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\u2502                      10 \u2502\n\u2502                      20 \u2502\n\u2502                      30 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,p.kt)("p",null,"If there's no such ",(0,p.kt)("inlineCode",{parentName:"p"},"key")," in the ",(0,p.kt)("inlineCode",{parentName:"p"},"Map()")," column, the query returns zeros for numerical values, empty strings or empty arrays."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_map VALUES ({'key3':100}), ({});\nSELECT a['key3'] FROM table_map;\n")),(0,p.kt)("p",null,"Result:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                     100 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,p.kt)("h2",{id:"convert-tuple-to-map-type"},"Convert Tuple to Map Type"),(0,p.kt)("p",null,"You can cast ",(0,p.kt)("inlineCode",{parentName:"p"},"Tuple()")," as ",(0,p.kt)("inlineCode",{parentName:"p"},"Map()")," using ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST")," function:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST(([1, 2, 3], ['Ready', 'Steady', 'Go']), 'Map(UInt8, String)') AS map;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500map\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 {1:'Ready',2:'Steady',3:'Go'} \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,p.kt)("h2",{id:"mapkeys-and-mapvalues-subcolumns"},"Map.keys and Map.values Subcolumns"),(0,p.kt)("p",null,"To optimize ",(0,p.kt)("inlineCode",{parentName:"p"},"Map")," column processing, in some cases you can use the ",(0,p.kt)("inlineCode",{parentName:"p"},"keys")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"values")," subcolumns instead of reading the whole column."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("p",null,"Query:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_map (`a` Map(String, UInt64)) ENGINE = Memory;\n\nINSERT INTO t_map VALUES (map('key1', 1, 'key2', 2, 'key3', 3));\n\nSELECT a.keys FROM t_map;\n\nSELECT a.values FROM t_map;\n")),(0,p.kt)("p",null,"Result:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.keys\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['key1','key2','key3'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500a.values\u2500\u2510\n\u2502 [1,2,3]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"See Also")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/tuple-map-functions#function-map"},"map()")," function"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST()")," function")))}y.isMDXComponent=!0}}]);