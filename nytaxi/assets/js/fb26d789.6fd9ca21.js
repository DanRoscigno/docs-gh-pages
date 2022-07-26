"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[20182],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(n),g=a,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||o;return n?t.createElement(m,i(i({ref:r},p),{},{components:n})):t.createElement(m,i({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1974:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={sidebar_position:110},c="groupArray",l={unversionedId:"en/sql-reference/aggregate-functions/reference/grouparray",id:"en/sql-reference/aggregate-functions/reference/grouparray",title:"groupArray",description:"Syntax: groupArray(x) or groupArray(max_size)(x)",source:"@site/docs/en/sql-reference/aggregate-functions/reference/grouparray.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/grouparray",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/grouparray",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/grouparray.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"english",previous:{title:"topKWeighted",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/topkweighted"},next:{title:"groupUniqArray",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/groupuniqarray"}},p={},s=[],f={toc:s};function g(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grouparray"},"groupArray"),(0,o.kt)("p",null,"Syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"groupArray(x)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"groupArray(max_size)(x)")),(0,o.kt)("p",null,"Creates an array of argument values.\nValues can be added to the array in any (indeterminate) order."),(0,o.kt)("p",null,"The second version (with the ",(0,o.kt)("inlineCode",{parentName:"p"},"max_size")," parameter) limits the size of the resulting array to ",(0,o.kt)("inlineCode",{parentName:"p"},"max_size")," elements. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"groupArray(1)(x)")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"[any (x)]"),"."),(0,o.kt)("p",null,"In some cases, you can still rely on the order of execution. This applies to cases when ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," comes from a subquery that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER BY"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"SELECT * FROM default.ck;\n\n\u250c\u2500id\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  1 \u2502 zhangsan \u2502\n\u2502  1 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502\n\u2502  1 \u2502 lisi     \u2502\n\u2502  2 \u2502 wangwu   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select id, groupArray(10)(name) from default.ck group by id;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500groupArray(10)(name)\u2500\u2510\n\u2502  1 \u2502 ['zhangsan','lisi']  \u2502\n\u2502  2 \u2502 ['wangwu']           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"The groupArray function will remove \u1d3a\u1d41\u1d38\u1d38 value based on the above results."))}g.isMDXComponent=!0}}]);