"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17281],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,g=m["".concat(i,".").concat(f)]||m[f]||p[f]||u;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<u;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21206:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),o=["components"],s={sidebar_position:144},i="sumCount",l={unversionedId:"en/sql-reference/aggregate-functions/reference/sumcount",id:"en/sql-reference/aggregate-functions/reference/sumcount",title:"sumCount",description:"Calculates the sum of the numbers and counts the number of rows at the same time. The function is used by ClickHouse query optimizer: if there are multiple sum, count or avg functions in a query, they can be replaced to single sumCount function to reuse the calculations. The function is rarely needed to use explicitly.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/sumcount.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/sumcount",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/sumcount",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/sumcount.md",tags:[],version:"current",sidebarPosition:144,frontMatter:{sidebar_position:144},sidebar:"english",previous:{title:"maxMap",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/maxmap"},next:{title:"rankCorr",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/rankCorr"}},c={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"sumcount"},"sumCount"),(0,u.kt)("p",null,"Calculates the sum of the numbers and counts the number of rows at the same time. The function is used by ClickHouse query optimizer: if there are multiple ",(0,u.kt)("inlineCode",{parentName:"p"},"sum"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"count")," or ",(0,u.kt)("inlineCode",{parentName:"p"},"avg")," functions in a query, they can be replaced to single ",(0,u.kt)("inlineCode",{parentName:"p"},"sumCount")," function to reuse the calculations. The function is rarely needed to use explicitly."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"sumCount(x)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Input value, must be ",(0,u.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,u.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/float"},"Float"),", or ",(0,u.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/decimal"},"Decimal"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tuple ",(0,u.kt)("inlineCode",{parentName:"li"},"(sum, count)"),", where ",(0,u.kt)("inlineCode",{parentName:"li"},"sum")," is the sum of numbers and ",(0,u.kt)("inlineCode",{parentName:"li"},"count")," is the number of rows with not-NULL values.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s_table (x Int8) Engine = Log;\nINSERT INTO s_table SELECT number FROM numbers(0, 20);\nINSERT INTO s_table VALUES (NULL);\nSELECT sumCount(x) from s_table;\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sumCount(x)\u2500\u2510\n\u2502 (190,20)    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"See also")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/operations/settings/settings#optimize_syntax_fuse_functions"},"optimize_syntax_fuse_functions")," setting.")))}f.isMDXComponent=!0}}]);