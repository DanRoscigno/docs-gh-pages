"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[55352],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30460:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],o={sidebar_position:38,sidebar_label:"Operators"},p="Operators",s={unversionedId:"en/sql-reference/operators/index",id:"en/sql-reference/operators/index",title:"Operators",description:"ClickHouse transforms operators to their corresponding functions at the query parsing stage according to their priority, precedence, and associativity.",source:"@site/docs/en/sql-reference/operators/index.md",sourceDirName:"en/sql-reference/operators",slug:"/en/sql-reference/operators/",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/operators/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/operators/index.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"Operators"},sidebar:"english",previous:{title:"SimpleAggregateFunction",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/simpleaggregatefunction"},next:{title:"EXISTS",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/operators/exists"}},u={},c=[{value:"Access Operators",id:"access-operators",level:2},{value:"Numeric Negation Operator",id:"numeric-negation-operator",level:2},{value:"Multiplication and Division Operators",id:"multiplication-and-division-operators",level:2},{value:"Addition and Subtraction Operators",id:"addition-and-subtraction-operators",level:2},{value:"Comparison Operators",id:"comparison-operators",level:2},{value:"equals function",id:"equals-function",level:3},{value:"notEquals function",id:"notequals-function",level:3},{value:"lessOrEquals function",id:"lessorequals-function",level:3},{value:"greaterOrEquals function",id:"greaterorequals-function",level:3},{value:"less function",id:"less-function",level:3},{value:"greater function",id:"greater-function",level:3},{value:"like function",id:"like-function",level:3},{value:"notLike function",id:"notlike-function",level:3},{value:"ilike function",id:"ilike-function",level:3},{value:"BETWEEN function",id:"between-function",level:3},{value:"Operators for Working with Data Sets",id:"operators-for-working-with-data-sets",level:2},{value:"in function",id:"in-function",level:3},{value:"notIn function",id:"notin-function",level:3},{value:"globalIn function",id:"globalin-function",level:3},{value:"globalNotIn function",id:"globalnotin-function",level:3},{value:"in subquery function",id:"in-subquery-function",level:3},{value:"notIn subquery function",id:"notin-subquery-function",level:3},{value:"in subquery function",id:"in-subquery-function-1",level:3},{value:"notIn subquery function",id:"notin-subquery-function-1",level:3},{value:"Operators for Working with Dates and Times",id:"operators-for-working-with-dates-and-times",level:2},{value:"EXTRACT",id:"extract",level:3},{value:"INTERVAL",id:"interval",level:3},{value:"Logical AND Operator",id:"logical-and-operator",level:2},{value:"Logical OR Operator",id:"logical-or-operator",level:2},{value:"Logical Negation Operator",id:"logical-negation-operator",level:2},{value:"Conditional Operator",id:"conditional-operator",level:2},{value:"Conditional Expression",id:"conditional-expression",level:2},{value:"Concatenation Operator",id:"concatenation-operator",level:2},{value:"Lambda Creation Operator",id:"lambda-creation-operator",level:2},{value:"Array Creation Operator",id:"array-creation-operator",level:2},{value:"Tuple Creation Operator",id:"tuple-creation-operator",level:2},{value:"Associativity",id:"associativity",level:2},{value:"Checking for <code>NULL</code>",id:"checking-for-null",level:2},{value:"IS NULL",id:"is-null",level:3},{value:"IS NOT NULL",id:"is-not-null",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"operators"},"Operators"),(0,r.kt)("p",null,"ClickHouse transforms operators to their corresponding functions at the query parsing stage according to their priority, precedence, and associativity."),(0,r.kt)("h2",{id:"access-operators"},"Access Operators"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a[N]")," \u2013 Access to an element of an array. The ",(0,r.kt)("inlineCode",{parentName:"p"},"arrayElement(a, N)")," function."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a.N")," \u2013 Access to a tuple element. The ",(0,r.kt)("inlineCode",{parentName:"p"},"tupleElement(a, N)")," function."),(0,r.kt)("h2",{id:"numeric-negation-operator"},"Numeric Negation Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-a")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"negate (a)")," function."),(0,r.kt)("p",null,"For tuple negation: ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/tuple-functions#tuplenegate"},"tupleNegate"),"."),(0,r.kt)("h2",{id:"multiplication-and-division-operators"},"Multiplication and Division Operators"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a * b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"multiply (a, b)")," function."),(0,r.kt)("p",null,"For multiplying tuple by number: ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/tuple-functions#tuplemultiplybynumber"},"tupleMultiplyByNumber"),", for scalar profuct: ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/tuple-functions#dotproduct"},"dotProduct"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a / b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"divide(a, b)")," function."),(0,r.kt)("p",null,"For dividing tuple by number: ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/tuple-functions#tupledividebynumber"},"tupleDivideByNumber"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a % b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"modulo(a, b)")," function."),(0,r.kt)("h2",{id:"addition-and-subtraction-operators"},"Addition and Subtraction Operators"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a + b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"plus(a, b)")," function."),(0,r.kt)("p",null,"For tuple addiction: ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/tuple-functions#tupleplus"},"tuplePlus"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a - b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"minus(a, b)")," function."),(0,r.kt)("p",null,"For tuple subtraction: ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/tuple-functions#tupleminus"},"tupleMinus"),"."),(0,r.kt)("h2",{id:"comparison-operators"},"Comparison Operators"),(0,r.kt)("h3",{id:"equals-function"},"equals function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a = b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"equals(a, b)")," function."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a == b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"equals(a, b)")," function."),(0,r.kt)("h3",{id:"notequals-function"},"notEquals function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a != b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"notEquals(a, b)")," function."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a <> b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"notEquals(a, b)")," function."),(0,r.kt)("h3",{id:"lessorequals-function"},"lessOrEquals function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a <= b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"lessOrEquals(a, b)")," function."),(0,r.kt)("h3",{id:"greaterorequals-function"},"greaterOrEquals function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a >= b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"greaterOrEquals(a, b)")," function."),(0,r.kt)("h3",{id:"less-function"},"less function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a < b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"less(a, b)")," function."),(0,r.kt)("h3",{id:"greater-function"},"greater function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a > b")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"greater(a, b)")," function."),(0,r.kt)("h3",{id:"like-function"},"like function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a LIKE s")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"like(a, b)")," function."),(0,r.kt)("h3",{id:"notlike-function"},"notLike function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a NOT LIKE s")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"notLike(a, b)")," function."),(0,r.kt)("h3",{id:"ilike-function"},"ilike function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a ILIKE s")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"ilike(a, b)")," function."),(0,r.kt)("h3",{id:"between-function"},"BETWEEN function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a BETWEEN b AND c")," \u2013 The same as ",(0,r.kt)("inlineCode",{parentName:"p"},"a >= b AND a <= c"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a NOT BETWEEN b AND c")," \u2013 The same as ",(0,r.kt)("inlineCode",{parentName:"p"},"a < b OR a > c"),"."),(0,r.kt)("h2",{id:"operators-for-working-with-data-sets"},"Operators for Working with Data Sets"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/operators/in"},"IN operators")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/operators/exists"},"EXISTS")," operator."),(0,r.kt)("h3",{id:"in-function"},"in function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a IN ...")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"in(a, b)")," function."),(0,r.kt)("h3",{id:"notin-function"},"notIn function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a NOT IN ...")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"notIn(a, b)")," function."),(0,r.kt)("h3",{id:"globalin-function"},"globalIn function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a GLOBAL IN ...")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"globalIn(a, b)")," function."),(0,r.kt)("h3",{id:"globalnotin-function"},"globalNotIn function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a GLOBAL NOT IN ...")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"globalNotIn(a, b)")," function."),(0,r.kt)("h3",{id:"in-subquery-function"},"in subquery function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a = ANY (subquery)")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"in(a, subquery)")," function.  "),(0,r.kt)("h3",{id:"notin-subquery-function"},"notIn subquery function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a != ANY (subquery)")," \u2013 The same as ",(0,r.kt)("inlineCode",{parentName:"p"},"a NOT IN (SELECT singleValueOrNull(*) FROM subquery)"),"."),(0,r.kt)("h3",{id:"in-subquery-function-1"},"in subquery function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a = ALL (subquery)")," \u2013 The same as ",(0,r.kt)("inlineCode",{parentName:"p"},"a IN (SELECT singleValueOrNull(*) FROM subquery)"),"."),(0,r.kt)("h3",{id:"notin-subquery-function-1"},"notIn subquery function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a != ALL (subquery)")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"notIn(a, subquery)")," function. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Query with ALL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number AS a FROM numbers(10) WHERE a > ALL (SELECT number FROM numbers(3, 3));\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 6 \u2502\n\u2502 7 \u2502\n\u2502 8 \u2502\n\u2502 9 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query with ANY:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number AS a FROM numbers(10) WHERE a > ANY (SELECT number FROM numbers(3, 3));\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 4 \u2502\n\u2502 5 \u2502\n\u2502 6 \u2502\n\u2502 7 \u2502\n\u2502 8 \u2502\n\u2502 9 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"operators-for-working-with-dates-and-times"},"Operators for Working with Dates and Times"),(0,r.kt)("h3",{id:"extract"},"EXTRACT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXTRACT(part FROM date);\n")),(0,r.kt)("p",null,"Extract parts from a given date. For example, you can retrieve a month from a given date, or a second from a time."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"part")," parameter specifies which part of the date to retrieve. The following values are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAY")," \u2014 The day of the month. Possible values: 1\u201331."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MONTH")," \u2014 The number of a month. Possible values: 1\u201312."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YEAR")," \u2014 The year."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SECOND")," \u2014 The second. Possible values: 0\u201359."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MINUTE")," \u2014 The minute. Possible values: 0\u201359."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOUR")," \u2014 The hour. Possible values: 0\u201323.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"part")," parameter is case-insensitive."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," parameter specifies the date or the time to process. Either ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/date"},"Date")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/datetime"},"DateTime")," type is supported."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT EXTRACT(DAY FROM toDate('2017-06-15'));\nSELECT EXTRACT(MONTH FROM toDate('2017-06-15'));\nSELECT EXTRACT(YEAR FROM toDate('2017-06-15'));\n")),(0,r.kt)("p",null,"In the following example we create a table and insert into it a value with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.Orders\n(\n    OrderId UInt64,\n    OrderName String,\n    OrderDate DateTime\n)\nENGINE = Log;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test.Orders VALUES (1, 'Jarlsberg Cheese', toDateTime('2008-10-11 13:23:44'));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toYear(OrderDate) AS OrderYear,\n    toMonth(OrderDate) AS OrderMonth,\n    toDayOfMonth(OrderDate) AS OrderDay,\n    toHour(OrderDate) AS OrderHour,\n    toMinute(OrderDate) AS OrderMinute,\n    toSecond(OrderDate) AS OrderSecond\nFROM test.Orders;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500OrderYear\u2500\u252c\u2500OrderMonth\u2500\u252c\u2500OrderDay\u2500\u252c\u2500OrderHour\u2500\u252c\u2500OrderMinute\u2500\u252c\u2500OrderSecond\u2500\u2510\n\u2502      2008 \u2502         10 \u2502       11 \u2502        13 \u2502          23 \u2502          44 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"You can see more examples in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/tests/queries/0_stateless/00619_extract.sql"},"tests"),"."),(0,r.kt)("h3",{id:"interval"},"INTERVAL"),(0,r.kt)("p",null,"Creates an ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/special-data-types/interval"},"Interval"),"-type value that should be used in arithmetical operations with ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/date"},"Date")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/datetime"},"DateTime"),"-type values."),(0,r.kt)("p",null,"Types of intervals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SECOND")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MINUTE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOUR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WEEK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MONTH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"QUARTER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YEAR"))),(0,r.kt)("p",null,"You can also use a string literal when setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," value. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL 1 HOUR")," is identical to the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL '1 hour'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL '1' hour"),"."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Intervals with different types can\u2019t be combined. You can\u2019t use expressions like ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL 4 DAY 1 HOUR"),". Specify intervals in units that are smaller or equal to the smallest unit of the interval, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL 25 HOUR"),". You can use consecutive operations, like in the example below."))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() AS current_date_time, current_date_time + INTERVAL 4 DAY + INTERVAL 3 HOUR;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(plus(now(), toIntervalDay(4)), toIntervalHour(3))\u2500\u2510\n\u2502 2020-11-03 22:09:50 \u2502                                    2020-11-08 01:09:50 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() AS current_date_time, current_date_time + INTERVAL '4 day' + INTERVAL '3 hour';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(plus(now(), toIntervalDay(4)), toIntervalHour(3))\u2500\u2510\n\u2502 2020-11-03 22:12:10 \u2502                                    2020-11-08 01:12:10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() AS current_date_time, current_date_time + INTERVAL '4' day + INTERVAL '3' hour;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(plus(now(), toIntervalDay('4')), toIntervalHour('3'))\u2500\u2510\n\u2502 2020-11-03 22:33:19 \u2502                                        2020-11-08 01:33:19 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"You can work with dates without using ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL"),", just by adding or subtracting seconds, minutes, and hours. For example, an interval of one day can be set by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"60*60*24"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," syntax or ",(0,r.kt)("inlineCode",{parentName:"p"},"addDays")," function are always preferred. Simple addition or subtraction (syntax like ",(0,r.kt)("inlineCode",{parentName:"p"},"now() + ..."),") doesn't consider time settings. For example, daylight saving time."))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDateTime('2014-10-26 00:00:00', 'Asia/Istanbul') AS time, time + 60 * 60 * 24 AS time_plus_24_hours, time + toIntervalDay(1) AS time_plus_1_day;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500time\u2500\u252c\u2500\u2500time_plus_24_hours\u2500\u252c\u2500\u2500\u2500\u2500\u2500time_plus_1_day\u2500\u2510\n\u2502 2014-10-26 00:00:00 \u2502 2014-10-26 23:00:00 \u2502 2014-10-27 00:00:00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/special-data-types/interval"},"Interval")," data type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/type-conversion-functions#function-tointerval"},"toInterval")," type conversion functions")),(0,r.kt)("h2",{id:"logical-and-operator"},"Logical AND Operator"),(0,r.kt)("p",null,"Syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT a AND b")," \u2014 calculates logical conjunction of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," with the function ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/logical-functions#logical-and-function"},"and"),"."),(0,r.kt)("h2",{id:"logical-or-operator"},"Logical OR Operator"),(0,r.kt)("p",null,"Syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT a OR b")," \u2014 calculates logical disjunction of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," with the function ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/logical-functions#logical-or-function"},"or"),"."),(0,r.kt)("h2",{id:"logical-negation-operator"},"Logical Negation Operator"),(0,r.kt)("p",null,"Syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT NOT a")," \u2014 calculates logical negation of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," with the function ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/logical-functions#logical-not-function"},"not"),"."),(0,r.kt)("h2",{id:"conditional-operator"},"Conditional Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a ? b : c")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"if(a, b, c)")," function."),(0,r.kt)("p",null,"Note:"),(0,r.kt)("p",null,"The conditional operator calculates the values of b and c, then checks whether condition a is met, and then returns the corresponding value. If ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," is an ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/array-join#functions_arrayjoin"},"arrayJoin()")," function, each row will be replicated regardless of the \u201ca\u201d condition."),(0,r.kt)("h2",{id:"conditional-expression"},"Conditional Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CASE [x]\n    WHEN a THEN b\n    [WHEN ... THEN ...]\n    [ELSE c]\nEND\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is specified, then ",(0,r.kt)("inlineCode",{parentName:"p"},"transform(x, [a, ...], [b, ...], c)")," function is used. Otherwise \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"multiIf(a, b, ..., c)"),"."),(0,r.kt)("p",null,"If there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"ELSE c")," clause in the expression, the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," function does not work with ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("h2",{id:"concatenation-operator"},"Concatenation Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"s1 || s2")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"concat(s1, s2) function.")),(0,r.kt)("h2",{id:"lambda-creation-operator"},"Lambda Creation Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x -> expr")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda(x, expr) function.")),(0,r.kt)("p",null,"The following operators do not have a priority since they are brackets:"),(0,r.kt)("h2",{id:"array-creation-operator"},"Array Creation Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[x1, ...]")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"array(x1, ...) function.")),(0,r.kt)("h2",{id:"tuple-creation-operator"},"Tuple Creation Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(x1, x2, ...)")," \u2013 The ",(0,r.kt)("inlineCode",{parentName:"p"},"tuple(x2, x2, ...) function.")),(0,r.kt)("h2",{id:"associativity"},"Associativity"),(0,r.kt)("p",null,"All binary operators have left associativity. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2 + 3")," is transformed to ",(0,r.kt)("inlineCode",{parentName:"p"},"plus(plus(1, 2), 3)"),".\nSometimes this does not work the way you expect. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT 4 > 2 > 3")," will result in 0."),(0,r.kt)("p",null,"For efficiency, the ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," functions accept any number of arguments. The corresponding chains of ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," operators are transformed into a single call of these functions."),(0,r.kt)("h2",{id:"checking-for-null"},"Checking for ",(0,r.kt)("inlineCode",{parentName:"h2"},"NULL")),(0,r.kt)("p",null,"ClickHouse supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"IS NULL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IS NOT NULL")," operators."),(0,r.kt)("h3",{id:"is-null"},"IS NULL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/nullable"},"Nullable")," type values, the ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NULL")," operator returns:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),", if the value is ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," otherwise."))),(0,r.kt)("li",{parentName:"ul"},"For other values, the ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NULL")," operator always returns ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,r.kt)("p",null,"Can be optimized by enabling the ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/settings/settings#optimize-functions-to-subcolumns"},"optimize_functions_to_subcolumns")," setting. With ",(0,r.kt)("inlineCode",{parentName:"p"},"optimize_functions_to_subcolumns = 1")," the function reads only ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/nullable#finding-null"},"null")," subcolumn instead of reading and processing the whole column data. The query ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT n IS NULL FROM table")," transforms to ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT n.null FROM TABLE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x+100 FROM t_null WHERE y IS NULL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(x, 100)\u2500\u2510\n\u2502          101 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"is-not-null"},"IS NOT NULL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/nullable"},"Nullable")," type values, the ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NOT NULL")," operator returns:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),", if the value is ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," otherwise."))),(0,r.kt)("li",{parentName:"ul"},"For other values, the ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NOT NULL")," operator always returns ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t_null WHERE y IS NOT NULL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500y\u2500\u2510\n\u2502 2 \u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Can be optimized by enabling the ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/settings/settings#optimize-functions-to-subcolumns"},"optimize_functions_to_subcolumns")," setting. With ",(0,r.kt)("inlineCode",{parentName:"p"},"optimize_functions_to_subcolumns = 1")," the function reads only ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/nullable#finding-null"},"null")," subcolumn instead of reading and processing the whole column data. The query ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT n IS NOT NULL FROM table")," transforms to ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT NOT n.null FROM TABLE"),"."))}m.isMDXComponent=!0}}]);