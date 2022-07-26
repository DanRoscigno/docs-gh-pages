"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[42339],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(t),c=r,N=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(N,i(i({ref:n},u),{},{components:t})):a.createElement(N,i({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98070:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],s={sidebar_position:39,sidebar_label:"EXPLAIN"},p="EXPLAIN",o={unversionedId:"ru/sql-reference/statements/explain",id:"ru/sql-reference/statements/explain",title:"EXPLAIN",description:"explain}",source:"@site/docs/ru/sql-reference/statements/explain.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/explain",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/explain",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/explain.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"EXPLAIN"},sidebar:"russia",previous:{title:"GRANT",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/grant"},next:{title:"REVOKE",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/revoke"}},u={},m=[{value:"\u0422\u0438\u043f\u044b EXPLAIN",id:"explain-types",level:2},{value:"EXPLAIN AST",id:"explain-ast",level:3},{value:"EXPLAIN SYNTAX",id:"explain-syntax",level:3},{value:"EXPLAIN PLAN",id:"explain-plan",level:3},{value:"EXPLAIN PIPELINE",id:"explain-pipeline",level:3},{value:"EXPLAIN ESTIMATE",id:"explain-estimate",level:3}],d={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"explain"},"EXPLAIN"),(0,l.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u043f\u043b\u0430\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN [AST | SYNTAX | PLAN | PIPELINE] [setting = value, ...] SELECT ... [FORMAT ...]\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT sum(number) FROM numbers(10) UNION ALL SELECT sum(number) FROM numbers(10) ORDER BY sum(number) ASC FORMAT TSV;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"Union\n  Expression (Projection)\n    Expression (Before ORDER BY and SELECT)\n      Aggregating\n        Expression (Before GROUP BY)\n          SettingQuotaAndLimits (Set limits and quota after reading from storage)\n            ReadFromStorage (SystemNumbers)\n  Expression (Projection)\n    MergingSorted (Merge sorted streams for ORDER BY)\n      MergeSorting (Merge sorted blocks for ORDER BY)\n        PartialSorting (Sort each block for ORDER BY)\n          Expression (Before ORDER BY and SELECT)\n            Aggregating\n              Expression (Before GROUP BY)\n                SettingQuotaAndLimits (Set limits and quota after reading from storage)\n                  ReadFromStorage (SystemNumbers)\n")),(0,l.kt)("h2",{id:"explain-types"},"\u0422\u0438\u043f\u044b EXPLAIN"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AST")," \u2014 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0435 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYNTAX")," \u2014 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0441\u043b\u0435 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 AST."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PLAN")," \u2014 \u043f\u043b\u0430\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PIPELINE")," \u2014 \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")),(0,l.kt)("h3",{id:"explain-ast"},"EXPLAIN AST"),(0,l.kt)("p",null,"\u0414\u0430\u043c\u043f AST \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0442\u0438\u043f\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN AST SELECT 1;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SelectWithUnionQuery (children 1)\n ExpressionList (children 1)\n  SelectQuery (children 1)\n   ExpressionList (children 1)\n    Literal UInt64_1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN AST ALTER TABLE t1 DELETE WHERE date = today();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  explain\n  AlterQuery  t1 (children 1)\n   ExpressionList (children 1)\n    AlterCommand 27 (children 1)\n     Function equals (children 1)\n      ExpressionList (children 2)\n       Identifier date\n       Function today (children 1)\n        ExpressionList\n")),(0,l.kt)("h3",{id:"explain-syntax"},"EXPLAIN SYNTAX"),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0439."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SYNTAX SELECT * FROM system.numbers AS a, system.numbers AS b, system.numbers AS c;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    `--a.number` AS `a.number`,\n    `--b.number` AS `b.number`,\n    number AS `c.number`\nFROM\n(\n    SELECT\n        number AS `--a.number`,\n        b.number AS `--b.number`\n    FROM system.numbers AS a\n    CROSS JOIN system.numbers AS b\n) AS `--.s`\nCROSS JOIN system.numbers AS c\n")),(0,l.kt)("h3",{id:"explain-plan"},"EXPLAIN PLAN"),(0,l.kt)("p",null,"\u0414\u0430\u043c\u043f \u0448\u0430\u0433\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"header")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u0448\u0430\u0433\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0448\u0430\u0433\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 1."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"indexes")," \u2014 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u044b, \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043a\u0443\u0441\u043a\u043e\u0432 \u0438 \u0433\u0440\u0430\u043d\u0443\u043b \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"actions")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u0448\u0430\u0433\u0435. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0448\u0430\u0433\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/interfaces/formats#json"},"JSON"),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0. \u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043d\u0435\u043d\u0443\u0436\u043d\u043e\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/interfaces/formats#tabseparatedraw"},"TSVRaw"),".")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT sum(number) FROM numbers(10) GROUP BY number % 4;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"Union\n  Expression (Projection)\n  Expression (Before ORDER BY and SELECT)\n    Aggregating\n      Expression (Before GROUP BY)\n        SettingQuotaAndLimits (Set limits and quota after reading from storage)\n          ReadFromStorage (SystemNumbers)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u041e\u0446\u0435\u043d\u043a\u0430 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0448\u0430\u0433\u0430 \u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f.\n:::\n')),(0,l.kt)("p",null,"\u041f\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"json = 1")," \u0448\u0430\u0433\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432\u044b\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON. \u041a\u0430\u0436\u0434\u044b\u0439 \u0443\u0437\u0435\u043b \u2014 \u044d\u0442\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u0441\u0435\u0433\u0434\u0430 \u0435\u0441\u0442\u044c \u043a\u043b\u044e\u0447\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"Node Type")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"Plans"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"Node Type")," \u2014 \u044d\u0442\u043e \u0441\u0442\u0440\u043e\u043a\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u0448\u0430\u0433\u0430. ",(0,l.kt)("inlineCode",{parentName:"p"},"Plans")," \u2014 \u044d\u0442\u043e \u043c\u0430\u0441\u0441\u0438\u0432 \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f\u043c\u0438 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u0448\u0430\u0433\u043e\u0432. \u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u0438\u043f\u0430 \u0443\u0437\u043b\u0430 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, description = 0 SELECT 1 UNION ALL SELECT 2 FORMAT TSVRaw;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Union",\n      "Plans": [\n        {\n          "Node Type": "Expression",\n          "Plans": [\n            {\n              "Node Type": "SettingQuotaAndLimits",\n              "Plans": [\n                {\n                  "Node Type": "ReadFromStorage"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "Node Type": "Expression",\n          "Plans": [\n            {\n              "Node Type": "SettingQuotaAndLimits",\n              "Plans": [\n                {\n                  "Node Type": "ReadFromStorage"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,l.kt)("p",null,"\u041f\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"description")," = 1 \u043a \u0448\u0430\u0433\u0443 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043b\u044e\u0447 ",(0,l.kt)("inlineCode",{parentName:"p"},"Description"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Node Type": "ReadFromStorage",\n  "Description": "SystemOne"\n}\n')),(0,l.kt)("p",null,"\u041f\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"header")," = 1 \u043a \u0448\u0430\u0433\u0443 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043b\u044e\u0447 ",(0,l.kt)("inlineCode",{parentName:"p"},"Header")," \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, description = 0, header = 1 SELECT 1, 2 + dummy;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Expression",\n      "Header": [\n        {\n          "Name": "1",\n          "Type": "UInt8"\n        },\n        {\n          "Name": "plus(2, dummy)",\n          "Type": "UInt16"\n        }\n      ],\n      "Plans": [\n        {\n          "Node Type": "SettingQuotaAndLimits",\n          "Header": [\n            {\n              "Name": "dummy",\n              "Type": "UInt8"\n            }\n          ],\n          "Plans": [\n            {\n              "Node Type": "ReadFromStorage",\n              "Header": [\n                {\n                  "Name": "dummy",\n                  "Type": "UInt8"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,l.kt)("p",null,"\u041f\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"indexes")," = 1 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043b\u044e\u0447 ",(0,l.kt)("inlineCode",{parentName:"p"},"Indexes"),". \u041e\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432. \u041a\u0430\u0436\u0434\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u043a\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON \u0441 \u043a\u043b\u044e\u0447\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"Type")," (",(0,l.kt)("inlineCode",{parentName:"p"},"MinMax"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Partition"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"Skip"),") \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Name")," \u2014 \u0438\u043c\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430 (\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"Skip"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Keys")," \u2014 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Condition")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Description")," \u2014 \u0438\u043d\u0434\u0435\u043a\u0441 (\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"Skip"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Initial Parts")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Selected Parts")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0443\u0441\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Initial Granules")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u0440\u0430\u043d\u0443\u043b \u0434\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Selected Granulesis")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u0440\u0430\u043d\u0443\u043b \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430.")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Node Type": "ReadFromMergeTree",\n"Indexes": [\n  {\n    "Type": "MinMax",\n    "Keys": ["y"],\n    "Condition": "(y in [1, +inf))",\n    "Initial Parts": 5,\n    "Selected Parts": 4,\n    "Initial Granules": 12,\n    "Selected Granules": 11\n  },\n  {\n    "Type": "Partition",\n    "Keys": ["y", "bitAnd(z, 3)"],\n    "Condition": "and((bitAnd(z, 3) not in [1, 1]), and((y in [1, +inf)), (bitAnd(z, 3) not in [1, 1])))",\n    "Initial Parts": 4,\n    "Selected Parts": 3,\n    "Initial Granules": 11,\n    "Selected Granules": 10\n  },\n  {\n    "Type": "PrimaryKey",\n    "Keys": ["x", "y"],\n    "Condition": "and((x in [11, +inf)), (y in [1, +inf)))",\n    "Initial Parts": 3,\n    "Selected Parts": 2,\n    "Initial Granules": 10,\n    "Selected Granules": 6\n  },\n  {\n    "Type": "Skip",\n    "Name": "t_minmax",\n    "Description": "minmax GRANULARITY 2",\n    "Initial Parts": 2,\n    "Selected Parts": 1,\n    "Initial Granules": 6,\n    "Selected Granules": 2\n  },\n  {\n    "Type": "Skip",\n    "Name": "t_set",\n    "Description": "set GRANULARITY 2",\n    "Initial Parts": 1,\n    "Selected Parts": 1,\n    "Initial Granules": 2,\n    "Selected Granules": 1\n  }\n]\n')),(0,l.kt)("p",null,"\u041f\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"actions")," = 1 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043a\u043b\u044e\u0447\u0438, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0435 \u043e\u0442 \u0442\u0438\u043f\u0430 \u0448\u0430\u0433\u0430."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, actions = 1, description = 0 SELECT 1 FORMAT TSVRaw;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Expression",\n      "Expression": {\n        "Inputs": [],\n        "Actions": [\n          {\n            "Node Type": "Column",\n            "Result Type": "UInt8",\n            "Result Type": "Column",\n            "Column": "Const(UInt8)",\n            "Arguments": [],\n            "Removed Arguments": [],\n            "Result": 0\n          }\n        ],\n        "Outputs": [\n          {\n            "Name": "1",\n            "Type": "UInt8"\n          }\n        ],\n        "Positions": [0],\n        "Project Input": true\n      },\n      "Plans": [\n        {\n          "Node Type": "SettingQuotaAndLimits",\n          "Plans": [\n            {\n              "Node Type": "ReadFromStorage"\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,l.kt)("h3",{id:"explain-pipeline"},"EXPLAIN PIPELINE"),(0,l.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"header")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"graph")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0433\u0440\u0430\u0444, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 ",(0,l.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/DOT_(%D1%8F%D0%B7%D1%8B%D0%BA)"},"DOT"),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"compact")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0433\u0440\u0430\u0444 \u0432 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435, \u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"graph"),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 1.")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN PIPELINE SELECT sum(number) FROM numbers_mt(100000) GROUP BY number % 4;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"(Union)\n(Expression)\nExpressionTransform\n  (Expression)\n  ExpressionTransform\n    (Aggregating)\n    Resize 2 \u2192 1\n      AggregatingTransform \xd7 2\n        (Expression)\n        ExpressionTransform \xd7 2\n          (SettingQuotaAndLimits)\n            (ReadFromStorage)\n            NumbersMt \xd7 2 0 \u2192 1\n")),(0,l.kt)("h3",{id:"explain-estimate"},"EXPLAIN ESTIMATE"),(0,l.kt)("p",null," \u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043e\u0446\u0435\u043d\u043a\u0438 \u0447\u0438\u0441\u043b\u0430 \u0441\u0442\u0440\u043e\u043a, \u0437\u0430\u0441\u0435\u0447\u0435\u043a \u0438 \u043a\u0443\u0441\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u044b \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/mergetree#table_engines-mergetree"},"MergeTree"),". "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE ttt (i Int64) ENGINE = MergeTree() ORDER BY i SETTINGS index_granularity = 16, write_final_mark = 0;\nINSERT INTO ttt SELECT number FROM numbers(128);\nOPTIMIZE TABLE ttt;\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN ESTIMATE SELECT * FROM ttt;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500database\u2500\u252c\u2500table\u2500\u252c\u2500parts\u2500\u252c\u2500rows\u2500\u252c\u2500marks\u2500\u2510\n\u2502 default  \u2502 ttt   \u2502     1 \u2502  128 \u2502     8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/sql-reference/statements/explain/"},"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f")," "))}c.isMDXComponent=!0}}]);