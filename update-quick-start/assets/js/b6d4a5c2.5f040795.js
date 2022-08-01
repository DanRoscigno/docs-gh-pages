"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[77205],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var l=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?l.createElement(f,r(r({ref:n},p),{},{components:t})):l.createElement(f,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<a;u++)r[u]=t[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52341:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var l=t(87462),i=t(63366),a=(t(67294),t(3905)),r=["components"],o={sidebar_position:43,sidebar_label:"Conditional "},s="Conditional Functions",u={unversionedId:"en/sql-reference/functions/conditional-functions",id:"en/sql-reference/functions/conditional-functions",title:"Conditional Functions",description:"if",source:"@site/docs/en/sql-reference/functions/conditional-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/conditional-functions",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/conditional-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/conditional-functions.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"Conditional "},sidebar:"english",previous:{title:"For Replacing in Strings",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/string-replace-functions"},next:{title:"Files",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/files"}},p={},c=[{value:"if",id:"if",level:2},{value:"Ternary Operator",id:"ternary-operator",level:2},{value:"multiIf",id:"multiif",level:2},{value:"Using Conditional Results Directly",id:"using-conditional-results-directly",level:2},{value:"NULL Values in Conditionals",id:"null-values-in-conditionals",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conditional-functions"},"Conditional Functions"),(0,a.kt)("h2",{id:"if"},"if"),(0,a.kt)("p",null,"Controls conditional branching. Unlike most systems, ClickHouse always evaluate both expressions ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"else"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"if(cond, then, else)\n")),(0,a.kt)("p",null,"If the condition ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," evaluates to a non-zero value, returns the result of the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"then"),", and the result of the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"else"),", if present, is skipped. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," is zero or ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", then the result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," expression is skipped and the result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," expression, if present, is returned."),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#short-circuit-function-evaluation"},"short_circuit_function_evaluation")," setting to calculate the ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," function according to a short scheme. If this setting is enabled, ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," expression is evaluated only on rows where ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," is true, ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," expression \u2013 where ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," is false. For example, an exception about division by zero is not thrown when executing the query ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT if(number = 0, 0, intDiv(42, number)) FROM numbers(10)"),", because ",(0,a.kt)("inlineCode",{parentName:"p"},"intDiv(42, number)")," will be evaluated only for numbers that doesn't satisfy condition ",(0,a.kt)("inlineCode",{parentName:"p"},"number = 0"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cond")," \u2013 The condition for evaluation that can be zero or not. The type is UInt8, Nullable(UInt8) or NULL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"then")," \u2013 The expression to return if condition is met."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"else")," \u2013 The expression to return if condition is not met.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("p",null,"The function executes ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," expressions and returns its result, depending on whether the condition ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," ended up being zero or not."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT if(1, plus(2, 2), plus(2, 6));\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(2, 2)\u2500\u2510\n\u2502          4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT if(0, plus(2, 2), plus(2, 6));\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(2, 6)\u2500\u2510\n\u2502          8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"then")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"else")," must have the lowest common type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,"Take this ",(0,a.kt)("inlineCode",{parentName:"p"},"LEFT_RIGHT")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM LEFT_RIGHT\n\n\u250c\u2500left\u2500\u252c\u2500right\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502     4 \u2502\n\u2502    1 \u2502     3 \u2502\n\u2502    2 \u2502     2 \u2502\n\u2502    3 \u2502     1 \u2502\n\u2502    4 \u2502  \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"The following query compares ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    left,\n    right,\n    if(left < right, 'left is smaller than right', 'right is greater or equal than left') AS is_smaller\nFROM LEFT_RIGHT\nWHERE isNotNull(left) AND isNotNull(right)\n\n\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500is_smaller\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502    1 \u2502     3 \u2502 left is smaller than right          \u2502\n\u2502    2 \u2502     2 \u2502 right is greater or equal than left \u2502\n\u2502    3 \u2502     1 \u2502 right is greater or equal than left \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," values are not used in this example, check ",(0,a.kt)("a",{parentName:"p",href:"#null-values-in-conditionals"},"NULL values in conditionals")," section."),(0,a.kt)("h2",{id:"ternary-operator"},"Ternary Operator"),(0,a.kt)("p",null,"It works same as ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," function."),(0,a.kt)("p",null,"Syntax: ",(0,a.kt)("inlineCode",{parentName:"p"},"cond ? then : else")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," if the ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," evaluates to be true (greater than zero), otherwise returns ",(0,a.kt)("inlineCode",{parentName:"p"},"else"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cond")," must be of type of ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt8"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," must have the lowest common type.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," can be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/other-functions#ifnotfinite"},"ifNotFinite"),".")),(0,a.kt)("h2",{id:"multiif"},"multiIf"),(0,a.kt)("p",null,"Allows you to write the ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/operators/#operator_case"},"CASE")," operator more compactly in the query."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"multiIf(cond_1, then_1, cond_2, then_2, ..., else)\n")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/settings/settings#short-circuit-function-evaluation"},"short_circuit_function_evaluation")," setting to calculate the ",(0,a.kt)("inlineCode",{parentName:"p"},"multiIf")," function according to a short scheme. If this setting is enabled, ",(0,a.kt)("inlineCode",{parentName:"p"},"then_i")," expression is evaluated only on rows where ",(0,a.kt)("inlineCode",{parentName:"p"},"((NOT cond_1) AND (NOT cond_2) AND ... AND (NOT cond_{i-1}) AND cond_i)")," is true, ",(0,a.kt)("inlineCode",{parentName:"p"},"cond_i")," will be evaluated only on rows where ",(0,a.kt)("inlineCode",{parentName:"p"},"((NOT cond_1) AND (NOT cond_2) AND ... AND (NOT cond_{i-1}))")," is true. For example, an exception about division by zero is not thrown when executing the query ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT multiIf(number = 2, intDiv(1, number), number = 5) FROM numbers(10)"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cond_N")," \u2014 The condition for the function to return ",(0,a.kt)("inlineCode",{parentName:"li"},"then_N"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"then_N")," \u2014 The result of the function when executed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"else")," \u2014 The result of the function if none of the conditions is met.")),(0,a.kt)("p",null,"The function accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"2N+1")," parameters."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("p",null,"The function returns one of the values ",(0,a.kt)("inlineCode",{parentName:"p"},"then_N")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"else"),", depending on the conditions ",(0,a.kt)("inlineCode",{parentName:"p"},"cond_N"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Again using ",(0,a.kt)("inlineCode",{parentName:"p"},"LEFT_RIGHT")," table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    left,\n    right,\n    multiIf(left < right, 'left is smaller', left > right, 'left is greater', left = right, 'Both equal', 'Null value') AS result\nFROM LEFT_RIGHT\n\n\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500result\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502     4 \u2502 Null value      \u2502\n\u2502    1 \u2502     3 \u2502 left is smaller \u2502\n\u2502    2 \u2502     2 \u2502 Both equal      \u2502\n\u2502    3 \u2502     1 \u2502 left is greater \u2502\n\u2502    4 \u2502  \u1d3a\u1d41\u1d38\u1d38 \u2502 Null value      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"using-conditional-results-directly"},"Using Conditional Results Directly"),(0,a.kt)("p",null,"Conditionals always result to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". So you can use conditional results directly like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT left < right AS is_small\nFROM LEFT_RIGHT\n\n\u250c\u2500is_small\u2500\u2510\n\u2502     \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502        1 \u2502\n\u2502        0 \u2502\n\u2502        0 \u2502\n\u2502     \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"null-values-in-conditionals"},"NULL Values in Conditionals"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," values are involved in conditionals, the result will also be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    NULL < 1,\n    2 < NULL,\n    NULL < NULL,\n    NULL = NULL\n\n\u250c\u2500less(NULL, 1)\u2500\u252c\u2500less(2, NULL)\u2500\u252c\u2500less(NULL, NULL)\u2500\u252c\u2500equals(NULL, NULL)\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38          \u2502 \u1d3a\u1d41\u1d38\u1d38          \u2502 \u1d3a\u1d41\u1d38\u1d38             \u2502 \u1d3a\u1d41\u1d38\u1d38               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"So you should construct your queries carefully if the types are ",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable"),"."),(0,a.kt)("p",null,"The following example demonstrates this by failing to add equals condition to ",(0,a.kt)("inlineCode",{parentName:"p"},"multiIf"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    left,\n    right,\n    multiIf(left < right, 'left is smaller', left > right, 'right is smaller', 'Both equal') AS faulty_result\nFROM LEFT_RIGHT\n\n\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500faulty_result\u2500\u2500\u2500\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502     4 \u2502 Both equal       \u2502\n\u2502    1 \u2502     3 \u2502 left is smaller  \u2502\n\u2502    2 \u2502     2 \u2502 Both equal       \u2502\n\u2502    3 \u2502     1 \u2502 right is smaller \u2502\n\u2502    4 \u2502  \u1d3a\u1d41\u1d38\u1d38 \u2502 Both equal       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);