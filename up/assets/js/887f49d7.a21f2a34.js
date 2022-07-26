"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[14485],{3905:function(n,e,r){r.d(e,{Zo:function(){return m},kt:function(){return i}});var t=r(67294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function u(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},u=Object.keys(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var o=t.createContext({}),p=function(n){var e=t.useContext(o),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},m=function(n){var e=p(n.components);return t.createElement(o.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,u=n.originalType,o=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),g=p(r),i=a,b=g["".concat(o,".").concat(i)]||g[i]||c[i]||u;return r?t.createElement(b,s(s({ref:e},m),{},{components:r})):t.createElement(b,s({ref:e},m))}));function i(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var u=r.length,s=new Array(u);s[0]=g;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l.mdxType="string"==typeof n?n:a,s[1]=l;for(var p=2;p<u;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},21995:function(n,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return i},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var t=r(87462),a=r(63366),u=(r(67294),r(3905)),s=["components"],l={},o="GROUPING",p={unversionedId:"en/sql-reference/aggregate-functions/grouping_function",id:"en/sql-reference/aggregate-functions/grouping_function",title:"GROUPING",description:"GROUPING",source:"@site/docs/en/sql-reference/aggregate-functions/grouping_function.md",sourceDirName:"en/sql-reference/aggregate-functions",slug:"/en/sql-reference/aggregate-functions/grouping_function",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/grouping_function",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/grouping_function.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"Parametric",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/parametric-functions"},next:{title:"Table Functions",permalink:"/docs-gh-pages/up/en/sql-reference/table-functions/"}},m={},c=[{value:"GROUPING",id:"grouping-1",level:2},{value:"GROUPING SETS",id:"grouping-sets",level:2}],g={toc:c};function i(n){var e=n.components,r=(0,a.Z)(n,s);return(0,u.kt)("wrapper",(0,t.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"grouping"},"GROUPING"),(0,u.kt)("h2",{id:"grouping-1"},"GROUPING"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/select/group-by/#rollup-modifier"},"ROLLUP"),"  and ",(0,u.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/select/group-by/#cube-modifier"},"CUBE")," are modifiers to GROUP BY. Both of these calculate subtotals. ROLLUP takes an ordered list of columns, for example ",(0,u.kt)("inlineCode",{parentName:"p"},"(day, month, year)"),", and calculates subtotals at each level of the aggregation and then a grand total. CUBE calculates subtotals across all possible combinations of the columns specified.  GROUPING identifies which rows returned by ROLLUP or CUBE are superaggregates, and which are rows that would be returned by an unmodified GROUP BY."),(0,u.kt)("p",null,"The GROUPING function takes a column as an argument, and returns a 1 or a 0. "),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"1")," indicates that a row returned by a ",(0,u.kt)("inlineCode",{parentName:"li"},"ROLLUP")," or ",(0,u.kt)("inlineCode",{parentName:"li"},"CUBE")," modifier to ",(0,u.kt)("inlineCode",{parentName:"li"},"GROUP BY")," is a subtotal"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"0")," indicates that a row returned by a ",(0,u.kt)("inlineCode",{parentName:"li"},"ROLLUP")," or ",(0,u.kt)("inlineCode",{parentName:"li"},"CUBE")," is a row that is not a subtotal")),(0,u.kt)("h2",{id:"grouping-sets"},"GROUPING SETS"),(0,u.kt)("p",null,"By default, the CUBE modifier calculates subtotals for all possible combinations of the columns passed to CUBE.  GROUPING SETS allows you to specify the specific combinations to calculate."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) AS gr\nFROM numbers(10)\nGROUP BY\n    GROUPING SETS (\n        (number),\n        (number % 2)\n    )\nORDER BY number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  2 \u2502\n\u2502      1 \u2502  2 \u2502\n\u2502      2 \u2502  2 \u2502\n\u2502      3 \u2502  2 \u2502\n\u2502      4 \u2502  2 \u2502\n\u2502      5 \u2502  2 \u2502\n\u2502      6 \u2502  2 \u2502\n\u2502      7 \u2502  2 \u2502\n\u2502      8 \u2502  2 \u2502\n\u2502      9 \u2502  2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n12 rows in set. Elapsed: 0.005 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number % 2, number) AS gr\nFROM numbers(10)\nGROUP BY\n    GROUPING SETS (\n        (number),\n        (number % 2)\n    )\nORDER BY number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  2 \u2502\n\u2502      0 \u2502  2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      1 \u2502  1 \u2502\n\u2502      2 \u2502  1 \u2502\n\u2502      3 \u2502  1 \u2502\n\u2502      4 \u2502  1 \u2502\n\u2502      5 \u2502  1 \u2502\n\u2502      6 \u2502  1 \u2502\n\u2502      7 \u2502  1 \u2502\n\u2502      8 \u2502  1 \u2502\n\u2502      9 \u2502  1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n12 rows in set. Elapsed: 0.005 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) = 1 AS gr\nFROM numbers(10)\nGROUP BY\n    GROUPING SETS (\n        (number),\n        (number % 2)\n    )\nORDER BY number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      1 \u2502  0 \u2502\n\u2502      2 \u2502  0 \u2502\n\u2502      3 \u2502  0 \u2502\n\u2502      4 \u2502  0 \u2502\n\u2502      5 \u2502  0 \u2502\n\u2502      6 \u2502  0 \u2502\n\u2502      7 \u2502  0 \u2502\n\u2502      8 \u2502  0 \u2502\n\u2502      9 \u2502  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n12 rows in set. Elapsed: 0.004 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number\nFROM numbers(10)\nGROUP BY\n    GROUPING SETS (\n        (number),\n        (number % 2)\n    )\nORDER BY number, grouping(number, number % 2) = 1;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u2510\n\u2502      0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u2510\n\u2502      0 \u2502\n\u2502      0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u2510\n\u2502      1 \u2502\n\u2502      2 \u2502\n\u2502      3 \u2502\n\u2502      4 \u2502\n\u2502      5 \u2502\n\u2502      6 \u2502\n\u2502      7 \u2502\n\u2502      8 \u2502\n\u2502      9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n12 rows in set. Elapsed: 0.002 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    count(),\n    grouping(number, number % 2) AS gr\nFROM numbers(10)\nGROUP BY\n    GROUPING SETS (\n        (number),\n        (number, number % 2),\n        ()\n    )\nORDER BY (gr, number);\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500count()\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502      10 \u2502  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u252c\u2500count()\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502       1 \u2502  2 \u2502\n\u2502      1 \u2502       1 \u2502  2 \u2502\n\u2502      2 \u2502       1 \u2502  2 \u2502\n\u2502      3 \u2502       1 \u2502  2 \u2502\n\u2502      4 \u2502       1 \u2502  2 \u2502\n\u2502      5 \u2502       1 \u2502  2 \u2502\n\u2502      6 \u2502       1 \u2502  2 \u2502\n\u2502      7 \u2502       1 \u2502  2 \u2502\n\u2502      8 \u2502       1 \u2502  2 \u2502\n\u2502      9 \u2502       1 \u2502  2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500number\u2500\u252c\u2500count()\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502       1 \u2502  3 \u2502\n\u2502      1 \u2502       1 \u2502  3 \u2502\n\u2502      2 \u2502       1 \u2502  3 \u2502\n\u2502      3 \u2502       1 \u2502  3 \u2502\n\u2502      4 \u2502       1 \u2502  3 \u2502\n\u2502      5 \u2502       1 \u2502  3 \u2502\n\u2502      6 \u2502       1 \u2502  3 \u2502\n\u2502      7 \u2502       1 \u2502  3 \u2502\n\u2502      8 \u2502       1 \u2502  3 \u2502\n\u2502      9 \u2502       1 \u2502  3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n21 rows in set. Elapsed: 0.015 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number\nFROM numbers(10)\nGROUP BY\n    GROUPING SETS (\n        (number),\n        (number % 2)\n    )\nHAVING grouping(number, number % 2) = 2\nORDER BY number\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"Received exception from server (version 22.7.1):\nCode: 47. DB::Exception: Received from localhost:9000. DB::Exception: Unknown identifier: __grouping_set: While processing grouping(number, number % 2) = 2. (UNKNOWN_IDENTIFIER)\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number\nFROM numbers(10)\nGROUP BY\n    GROUPING SETS (\n        (number),\n        (number % 2)\n    )\nHAVING grouping(number, number % 2) = 1\nORDER BY number\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"Received exception from server (version 22.7.1):\nCode: 47. DB::Exception: Received from localhost:9000. DB::Exception: Unknown identifier: __grouping_set: While processing grouping(number, number % 2) = 1. (UNKNOWN_IDENTIFIER)\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    GROUPING(number, number % 2) = 1 as gr\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    GROUPING SETS (\n    (number),\n    (number % 2))\nORDER BY number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2502      1 \u2502  0 \u2502\n\u2502      2 \u2502  0 \u2502\n\u2502      3 \u2502  0 \u2502\n\u2502      4 \u2502  0 \u2502\n\u2502      5 \u2502  0 \u2502\n\u2502      6 \u2502  0 \u2502\n\u2502      7 \u2502  0 \u2502\n\u2502      8 \u2502  0 \u2502\n\u2502      9 \u2502  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n12 rows in set. Elapsed: 0.008 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) = 3\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    number,\n    number % 2\nORDER BY number;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500equals(grouping(number, modulo(number, 2)), 3)\u2500\u2510\n\u2502      0 \u2502                                              1 \u2502\n\u2502      1 \u2502                                              1 \u2502\n\u2502      2 \u2502                                              1 \u2502\n\u2502      3 \u2502                                              1 \u2502\n\u2502      4 \u2502                                              1 \u2502\n\u2502      5 \u2502                                              1 \u2502\n\u2502      6 \u2502                                              1 \u2502\n\u2502      7 \u2502                                              1 \u2502\n\u2502      8 \u2502                                              1 \u2502\n\u2502      9 \u2502                                              1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n10 rows in set. Elapsed: 0.009 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number),\n    GROUPING(number % 2)\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    number,\n    number % 2\nORDER BY number;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500grouping(number)\u2500\u252c\u2500grouping(modulo(number, 2))\u2500\u2510\n\u2502      0 \u2502                1 \u2502                           1 \u2502\n\u2502      1 \u2502                1 \u2502                           1 \u2502\n\u2502      2 \u2502                1 \u2502                           1 \u2502\n\u2502      3 \u2502                1 \u2502                           1 \u2502\n\u2502      4 \u2502                1 \u2502                           1 \u2502\n\u2502      5 \u2502                1 \u2502                           1 \u2502\n\u2502      6 \u2502                1 \u2502                           1 \u2502\n\u2502      7 \u2502                1 \u2502                           1 \u2502\n\u2502      8 \u2502                1 \u2502                           1 \u2502\n\u2502      9 \u2502                1 \u2502                           1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n10 rows in set. Elapsed: 0.010 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) AS gr\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    number,\n    number % 2\n    WITH ROLLUP\nORDER BY\n    number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2502      0 \u2502  2 \u2502\n\u2502      0 \u2502  3 \u2502\n\u2502      1 \u2502  2 \u2502\n\u2502      1 \u2502  3 \u2502\n\u2502      2 \u2502  2 \u2502\n\u2502      2 \u2502  3 \u2502\n\u2502      3 \u2502  2 \u2502\n\u2502      3 \u2502  3 \u2502\n\u2502      4 \u2502  2 \u2502\n\u2502      4 \u2502  3 \u2502\n\u2502      5 \u2502  2 \u2502\n\u2502      5 \u2502  3 \u2502\n\u2502      6 \u2502  2 \u2502\n\u2502      6 \u2502  3 \u2502\n\u2502      7 \u2502  2 \u2502\n\u2502      7 \u2502  3 \u2502\n\u2502      8 \u2502  2 \u2502\n\u2502      8 \u2502  3 \u2502\n\u2502      9 \u2502  2 \u2502\n\u2502      9 \u2502  3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n21 rows in set. Elapsed: 0.005 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) AS gr\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    ROLLUP(number, number % 2)\nORDER BY\n    number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2502      0 \u2502  2 \u2502\n\u2502      0 \u2502  3 \u2502\n\u2502      1 \u2502  2 \u2502\n\u2502      1 \u2502  3 \u2502\n\u2502      2 \u2502  2 \u2502\n\u2502      2 \u2502  3 \u2502\n\u2502      3 \u2502  2 \u2502\n\u2502      3 \u2502  3 \u2502\n\u2502      4 \u2502  2 \u2502\n\u2502      4 \u2502  3 \u2502\n\u2502      5 \u2502  2 \u2502\n\u2502      5 \u2502  3 \u2502\n\u2502      6 \u2502  2 \u2502\n\u2502      6 \u2502  3 \u2502\n\u2502      7 \u2502  2 \u2502\n\u2502      7 \u2502  3 \u2502\n\u2502      8 \u2502  2 \u2502\n\u2502      8 \u2502  3 \u2502\n\u2502      9 \u2502  2 \u2502\n\u2502      9 \u2502  3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n21 rows in set. Elapsed: 0.008 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) AS gr\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    number,\n    number % 2\n    WITH CUBE\nORDER BY\n    number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  2 \u2502\n\u2502      0 \u2502  3 \u2502\n\u2502      1 \u2502  2 \u2502\n\u2502      1 \u2502  3 \u2502\n\u2502      2 \u2502  2 \u2502\n\u2502      2 \u2502  3 \u2502\n\u2502      3 \u2502  2 \u2502\n\u2502      3 \u2502  3 \u2502\n\u2502      4 \u2502  2 \u2502\n\u2502      4 \u2502  3 \u2502\n\u2502      5 \u2502  2 \u2502\n\u2502      5 \u2502  3 \u2502\n\u2502      6 \u2502  2 \u2502\n\u2502      6 \u2502  3 \u2502\n\u2502      7 \u2502  2 \u2502\n\u2502      7 \u2502  3 \u2502\n\u2502      8 \u2502  2 \u2502\n\u2502      8 \u2502  3 \u2502\n\u2502      9 \u2502  2 \u2502\n\u2502      9 \u2502  3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n23 rows in set. Elapsed: 0.006 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) AS gr\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    CUBE(number, number % 2)\nORDER BY\n    number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  2 \u2502\n\u2502      0 \u2502  3 \u2502\n\u2502      1 \u2502  2 \u2502\n\u2502      1 \u2502  3 \u2502\n\u2502      2 \u2502  2 \u2502\n\u2502      2 \u2502  3 \u2502\n\u2502      3 \u2502  2 \u2502\n\u2502      3 \u2502  3 \u2502\n\u2502      4 \u2502  2 \u2502\n\u2502      4 \u2502  3 \u2502\n\u2502      5 \u2502  2 \u2502\n\u2502      5 \u2502  3 \u2502\n\u2502      6 \u2502  2 \u2502\n\u2502      6 \u2502  3 \u2502\n\u2502      7 \u2502  2 \u2502\n\u2502      7 \u2502  3 \u2502\n\u2502      8 \u2502  2 \u2502\n\u2502      8 \u2502  3 \u2502\n\u2502      9 \u2502  2 \u2502\n\u2502      9 \u2502  3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n23 rows in set. Elapsed: 0.004 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) + 3 as gr\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    CUBE(number, number % 2)\nHAVING grouping(number) != 0\nORDER BY\n    number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\n\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  5 \u2502\n\u2502      0 \u2502  6 \u2502\n\u2502      1 \u2502  5 \u2502\n\u2502      1 \u2502  6 \u2502\n\u2502      2 \u2502  5 \u2502\n\u2502      2 \u2502  6 \u2502\n\u2502      3 \u2502  5 \u2502\n\u2502      3 \u2502  6 \u2502\n\u2502      4 \u2502  5 \u2502\n\u2502      4 \u2502  6 \u2502\n\u2502      5 \u2502  5 \u2502\n\u2502      5 \u2502  6 \u2502\n\u2502      6 \u2502  5 \u2502\n\u2502      6 \u2502  6 \u2502\n\u2502      7 \u2502  5 \u2502\n\u2502      7 \u2502  6 \u2502\n\u2502      8 \u2502  5 \u2502\n\u2502      8 \u2502  6 \u2502\n\u2502      9 \u2502  5 \u2502\n\u2502      9 \u2502  6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n20 rows in set. Elapsed: 0.006 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) as gr\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    CUBE(number, number % 2) WITH TOTALS\nORDER BY\n    number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  1 \u2502\n\u2502      0 \u2502  2 \u2502\n\u2502      0 \u2502  3 \u2502\n\u2502      1 \u2502  2 \u2502\n\u2502      1 \u2502  3 \u2502\n\u2502      2 \u2502  2 \u2502\n\u2502      2 \u2502  3 \u2502\n\u2502      3 \u2502  2 \u2502\n\u2502      3 \u2502  3 \u2502\n\u2502      4 \u2502  2 \u2502\n\u2502      4 \u2502  3 \u2502\n\u2502      5 \u2502  2 \u2502\n\u2502      5 \u2502  3 \u2502\n\u2502      6 \u2502  2 \u2502\n\u2502      6 \u2502  3 \u2502\n\u2502      7 \u2502  2 \u2502\n\u2502      7 \u2502  3 \u2502\n\u2502      8 \u2502  2 \u2502\n\u2502      8 \u2502  3 \u2502\n\u2502      9 \u2502  2 \u2502\n\u2502      9 \u2502  3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\nTotals:\n\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n23 rows in set. Elapsed: 0.006 sec.\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    number,\n    grouping(number, number % 2) as gr\nFROM remote('172.21.0.{2,4}', numbers(10))\nGROUP BY\n    ROLLUP(number, number % 2) WITH TOTALS\nORDER BY\n    number, gr;\n")),(0,u.kt)("p",null,"Response"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2502      0 \u2502  2 \u2502\n\u2502      0 \u2502  3 \u2502\n\u2502      1 \u2502  2 \u2502\n\u2502      1 \u2502  3 \u2502\n\u2502      2 \u2502  2 \u2502\n\u2502      2 \u2502  3 \u2502\n\u2502      3 \u2502  2 \u2502\n\u2502      3 \u2502  3 \u2502\n\u2502      4 \u2502  2 \u2502\n\u2502      4 \u2502  3 \u2502\n\u2502      5 \u2502  2 \u2502\n\u2502      5 \u2502  3 \u2502\n\u2502      6 \u2502  2 \u2502\n\u2502      6 \u2502  3 \u2502\n\u2502      7 \u2502  2 \u2502\n\u2502      7 \u2502  3 \u2502\n\u2502      8 \u2502  2 \u2502\n\u2502      8 \u2502  3 \u2502\n\u2502      9 \u2502  2 \u2502\n\u2502      9 \u2502  3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\nTotals:\n\u250c\u2500number\u2500\u252c\u2500gr\u2500\u2510\n\u2502      0 \u2502  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n\n21 rows in set. Elapsed: 0.006 sec.\n")))}i.isMDXComponent=!0}}]);