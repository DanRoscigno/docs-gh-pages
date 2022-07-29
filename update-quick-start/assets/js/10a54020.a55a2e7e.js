"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7983],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,s(s({ref:n},l),{},{components:t})):r.createElement(d,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},82844:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={sidebar_position:38,sidebar_label:"FUNCTION"},c="CREATE FUNCTION",u={unversionedId:"en/sql-reference/statements/create/function",id:"en/sql-reference/statements/create/function",title:"CREATE FUNCTION",description:"Creates a user defined function from a lambda expression. The expression must consist of function parameters, constants, operators, or other function calls.",source:"@site/docs/en/sql-reference/statements/create/function.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/function",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/function",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/function.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"FUNCTION"},sidebar:"english",previous:{title:"DICTIONARY",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/dictionary"},next:{title:"USER",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/user"}},l={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-function"},"CREATE FUNCTION"),(0,o.kt)("p",null,"Creates a user defined function from a lambda expression. The expression must consist of function parameters, constants, operators, or other function calls."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION name [ON CLUSTER cluster] AS (parameter0, ...) -> expression\n")),(0,o.kt)("p",null,"A function can have an arbitrary number of parameters."),(0,o.kt)("p",null,"There are a few restrictions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of a function must be unique among user defined and system functions."),(0,o.kt)("li",{parentName:"ul"},"Recursive functions are not allowed."),(0,o.kt)("li",{parentName:"ul"},"All variables used by a function must be specified in its parameter list.")),(0,o.kt)("p",null,"If any restriction is violated then an exception is raised."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION linear_equation AS (x, k, b) -> k*x + b;\nSELECT number, linear_equation(number, 2, 1) FROM numbers(3);\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u252c\u2500plus(multiply(2, number), 1)\u2500\u2510\n\u2502      0 \u2502                            1 \u2502\n\u2502      1 \u2502                            3 \u2502\n\u2502      2 \u2502                            5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/conditional-functions"},"conditional function")," is called in a user defined function in the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION parity_str AS (n) -> if(n % 2, 'odd', 'even');\nSELECT number, parity_str(number) FROM numbers(3);\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u252c\u2500if(modulo(number, 2), 'odd', 'even')\u2500\u2510\n\u2502      0 \u2502 even                                 \u2502\n\u2502      1 \u2502 odd                                  \u2502\n\u2502      2 \u2502 even                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);