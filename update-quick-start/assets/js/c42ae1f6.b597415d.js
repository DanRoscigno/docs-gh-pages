"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61575],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92178:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={sidebar_position:36,sidebar_label:"Comparison"},l="Comparison Functions",u={unversionedId:"en/sql-reference/functions/comparison-functions",id:"en/sql-reference/functions/comparison-functions",title:"Comparison Functions",description:"Comparison functions always return 0 or 1 (Uint8).",source:"@site/docs/en/sql-reference/functions/comparison-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/comparison-functions",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/comparison-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/comparison-functions.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,sidebar_label:"Comparison"},sidebar:"english",previous:{title:"Arrays",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/array-functions"},next:{title:"Logical",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/logical-functions"}},c={},p=[{value:"equals, a = b and a == b operator",id:"equals-a--b-and-a--b-operator",level:2},{value:"notEquals, a != b and a &lt;&gt; b operator",id:"notequals-a--b-and-a--b-operator",level:2},{value:"less, &lt; operator",id:"less--operator",level:2},{value:"greater, &gt; operator",id:"greater--operator",level:2},{value:"lessOrEquals, &lt;= operator",id:"lessorequals--operator",level:2},{value:"greaterOrEquals, &gt;= operator",id:"greaterorequals--operator",level:2}],f={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comparison-functions"},"Comparison Functions"),(0,a.kt)("p",null,"Comparison functions always return 0 or 1 (Uint8)."),(0,a.kt)("p",null,"The following types can be compared:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"numbers"),(0,a.kt)("li",{parentName:"ul"},"strings and fixed strings"),(0,a.kt)("li",{parentName:"ul"},"dates"),(0,a.kt)("li",{parentName:"ul"},"dates with times")),(0,a.kt)("p",null,"within each group, but not between different groups."),(0,a.kt)("p",null,"For example, you can\u2019t compare a date with a string. You have to use a function to convert the string to a date, or vice versa."),(0,a.kt)("p",null,"Strings are compared by bytes. A shorter string is smaller than all strings that start with it and that contain at least one more character."),(0,a.kt)("h2",{id:"equals-a--b-and-a--b-operator"},"equals, a = b and a == b operator"),(0,a.kt)("h2",{id:"notequals-a--b-and-a--b-operator"},"notEquals, a != b and a \\<",">"," b operator"),(0,a.kt)("h2",{id:"less--operator"},"less, \\< operator"),(0,a.kt)("h2",{id:"greater--operator"},"greater, ",">"," operator"),(0,a.kt)("h2",{id:"lessorequals--operator"},"lessOrEquals, \\<= operator"),(0,a.kt)("h2",{id:"greaterorequals--operator"},"greaterOrEquals, ",">","= operator"))}d.isMDXComponent=!0}}]);