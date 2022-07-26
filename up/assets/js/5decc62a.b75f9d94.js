"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38257],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32675:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={sidebar_position:36,sidebar_label:"\u6bd4\u8f83\u51fd\u6570"},c="\u6bd4\u8f83\u51fd\u6570",u={unversionedId:"zh/sql-reference/functions/comparison-functions",id:"zh/sql-reference/functions/comparison-functions",title:"\u6bd4\u8f83\u51fd\u6570",description:"bi-jiao-han-shu}",source:"@site/docs/zh/sql-reference/functions/comparison-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/comparison-functions",permalink:"/docs-gh-pages/up/zh/sql-reference/functions/comparison-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/comparison-functions.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,sidebar_label:"\u6bd4\u8f83\u51fd\u6570"},sidebar:"chinese",previous:{title:"\u7b97\u672f\u51fd\u6570",permalink:"/docs-gh-pages/up/zh/sql-reference/functions/arithmetic-functions"},next:{title:"\u903b\u8f91\u51fd\u6570",permalink:"/docs-gh-pages/up/zh/sql-reference/functions/logical-functions"}},s={},p=[{value:"\u7b49\u4e8e\uff0ca=b\u548ca==b \u8fd0\u7b97\u7b26",id:"equals-a-b-and-a-b-operator",level:2},{value:"\u4e0d\u7b49\u4e8e\uff0ca!=b\u548ca&lt;&gt;b \u8fd0\u7b97\u7b26",id:"notequals-a-operator-b-and-a-b",level:2},{value:"\u5c11, &lt; \u8fd0\u7b97\u7b26",id:"less-operator",level:2},{value:"\u5927\u4e8e, &gt; \u8fd0\u7b97\u7b26",id:"greater-operator",level:2},{value:"\u5c0f\u4e8e\u7b49\u4e8e, &lt;= \u8fd0\u7b97\u7b26",id:"lessorequals-operator",level:2},{value:"\u5927\u4e8e\u7b49\u4e8e, &gt;= \u8fd0\u7b97\u7b26",id:"greaterorequals-operator",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bi-jiao-han-shu"},"\u6bd4\u8f83\u51fd\u6570"),(0,a.kt)("p",null,"\u6bd4\u8f83\u51fd\u6570\u59cb\u7ec8\u8fd4\u56de0\u62161\uff08UInt8\uff09\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u6bd4\u8f83\u4ee5\u4e0b\u7c7b\u578b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u5b57"),(0,a.kt)("li",{parentName:"ul"},"String \u548c FixedString"),(0,a.kt)("li",{parentName:"ul"},"\u65e5\u671f"),(0,a.kt)("li",{parentName:"ul"},"\u65e5\u671f\u65f6\u95f4")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u6bcf\u4e2a\u7ec4\u5185\u7684\u7c7b\u578b\u5747\u53ef\u4e92\u76f8\u6bd4\u8f83\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e0d\u540c\u7ec4\u7684\u7c7b\u578b\u95f4\u4e0d\u80fd\u591f\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u60a8\u65e0\u6cd5\u5c06\u65e5\u671f\u4e0e\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83\u3002\u60a8\u5fc5\u987b\u4f7f\u7528\u51fd\u6570\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u65e5\u671f\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u6309\u5b57\u8282\u8fdb\u884c\u6bd4\u8f83\u3002\u8f83\u77ed\u7684\u5b57\u7b26\u4e32\u5c0f\u4e8e\u4ee5\u5176\u5f00\u5934\u5e76\u4e14\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\u7684\u6240\u6709\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h2",{id:"equals-a-b-and-a-b-operator"},"\u7b49\u4e8e\uff0ca=b\u548ca==b \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"notequals-a-operator-b-and-a-b"},"\u4e0d\u7b49\u4e8e\uff0ca!=b\u548ca","<",">","b \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"less-operator"},"\u5c11, ","<"," \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"greater-operator"},"\u5927\u4e8e, ",">"," \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"lessorequals-operator"},"\u5c0f\u4e8e\u7b49\u4e8e, ","<","= \u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"greaterorequals-operator"},"\u5927\u4e8e\u7b49\u4e8e, ",">","= \u8fd0\u7b97\u7b26"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/comparison_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);