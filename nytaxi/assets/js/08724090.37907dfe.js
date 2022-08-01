"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40010],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),y=o,d=f["".concat(u,".").concat(y)]||f[y]||p[y]||i;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9872:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],a={sidebar_position:60,sidebar_label:"IN \u8fd0\u7b97\u7b26"},u="IN\u8fd0\u7b97\u7b26\u76f8\u5173\u51fd\u6570",c={unversionedId:"zh/sql-reference/functions/in-functions",id:"zh/sql-reference/functions/in-functions",title:"IN\u8fd0\u7b97\u7b26\u76f8\u5173\u51fd\u6570",description:"inyun-suan-fu-xiang-guan-han-shu}",source:"@site/docs/zh/sql-reference/functions/in-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/in-functions",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/in-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/in-functions.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,sidebar_label:"IN \u8fd0\u7b97\u7b26"},sidebar:"chinese",previous:{title:"Working with maps",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/tuple-map-functions"},next:{title:"Geo",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/geo/"}},s={},p=[{value:"in,notIn,globalIn,globalNotIn",id:"in-notin-globalin-globalnotin",level:2},{value:"tuple(x, y, \u2026), \u8fd0\u7b97\u7b26 (x, y, \u2026)",id:"tuplex-y-operator-x-y",level:2},{value:"tupleElement(tuple, n), \u8fd0\u7b97\u7b26 x.N",id:"tupleelementtuple-n-operator-x-n",level:2}],f={toc:p};function y(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inyun-suan-fu-xiang-guan-han-shu"},"IN\u8fd0\u7b97\u7b26\u76f8\u5173\u51fd\u6570"),(0,i.kt)("h2",{id:"in-notin-globalin-globalnotin"},"in,notIn,globalIn,globalNotIn"),(0,i.kt)("p",null,"\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/operators/in#select-in-operators"},"IN \u8fd0\u7b97\u7b26"),"\u90e8\u5206\u3002"),(0,i.kt)("h2",{id:"tuplex-y-operator-x-y"},"tuple(x, y, \u2026), \u8fd0\u7b97\u7b26 (x, y, \u2026)"),(0,i.kt)("p",null,"\u51fd\u6570\u7528\u4e8e\u5bf9\u591a\u4e2a\u5217\u8fdb\u884c\u5206\u7ec4\u3002\n\u5bf9\u4e8e\u5177\u6709\u7c7b\u578bT1\uff0cT2\uff0c\u2026\u7684\u5217\uff0c\u5b83\u8fd4\u56de\u5305\u542b\u8fd9\u4e9b\u5217\u7684\u5143\u7ec4\uff08T1\uff0cT2\uff0c\u2026\uff09\u3002 \u6267\u884c\u8be5\u51fd\u6570\u6ca1\u6709\u4efb\u4f55\u6210\u672c\u3002\n\u5143\u7ec4\u901a\u5e38\u7528\u4f5cIN\u8fd0\u7b97\u7b26\u7684\u4e2d\u95f4\u53c2\u6570\u503c\uff0c\u6216\u7528\u4e8e\u521b\u5efalambda\u51fd\u6570\u7684\u5f62\u53c2\u5217\u8868\u3002 \u5143\u7ec4\u4e0d\u80fd\u5199\u5165\u8868\u3002"),(0,i.kt)("h2",{id:"tupleelementtuple-n-operator-x-n"},"tupleElement(tuple, n), \u8fd0\u7b97\u7b26 x.N"),(0,i.kt)("p",null,"\u7528\u4e8e\u4ece\u5143\u7ec4\u4e2d\u83b7\u53d6\u5217\u7684\u51fd\u6570\n\u2019N\u2019\u662f\u5217\u7d22\u5f15\uff0c\u4ece1\u5f00\u59cb\u3002N\u5fc5\u987b\u662f\u6b63\u6574\u6570\u5e38\u91cf\uff0c\u5e76\u4e14\u4e0d\u5927\u4e8e\u5143\u7ec4\u7684\u5927\u5c0f\u3002\n\u6267\u884c\u8be5\u51fd\u6570\u6ca1\u6709\u4efb\u4f55\u6210\u672c\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/in_functions/"},"\u539f\u59cb\u6587\u7ae0")," "))}y.isMDXComponent=!0}}]);