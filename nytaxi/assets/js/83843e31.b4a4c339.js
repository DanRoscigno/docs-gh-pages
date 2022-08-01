"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60243],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return y}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(r),y=o,m=f["".concat(l,".").concat(y)]||f[y]||p[y]||a;return r?t.createElement(m,c(c({ref:n},s),{},{components:r})):t.createElement(m,c({ref:n},s))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54613:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={},l="arrayJoin\u51fd\u6570",u={unversionedId:"zh/sql-reference/functions/array-join",id:"zh/sql-reference/functions/array-join",title:"arrayJoin\u51fd\u6570",description:"functions_arrayjoin}",source:"@site/docs/zh/sql-reference/functions/array-join.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/array-join",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/array-join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/array-join.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u6570\u7ec4\u51fd\u6570",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/array-functions"},next:{title:"\u4f4d\u64cd\u4f5c\u51fd\u6570",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/bit-functions"}},s={},p=[],f={toc:p};function y(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions_arrayjoin"},"arrayJoin\u51fd\u6570"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u666e\u901a\u51fd\u6570\u4e0d\u4f1a\u66f4\u6539\u7ed3\u679c\u96c6\u7684\u884c\u6570\uff0c\u800c\u53ea\u662f\u8ba1\u7b97\u6bcf\u884c\u4e2d\u7684\u503c\uff08map\uff09\u3002\n\u805a\u5408\u51fd\u6570\u5c06\u591a\u884c\u538b\u7f29\u5230\u4e00\u884c\u4e2d\uff08fold\u6216reduce\uff09\u3002\n\u2019arrayJoin\u2019\u51fd\u6570\u83b7\u53d6\u6bcf\u4e00\u884c\u5e76\u5c06\u4ed6\u4eec\u5c55\u5f00\u5230\u591a\u884c\uff08unfold\uff09\u3002"),(0,a.kt)("p",null,"\u6b64\u51fd\u6570\u5c06\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u5c06\u8be5\u884c\u5728\u7ed3\u679c\u96c6\u4e2d\u590d\u5236\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u3002\n\u9664\u4e86\u5e94\u7528\u6b64\u51fd\u6570\u7684\u5217\u4e2d\u7684\u503c\u4e4b\u5916\uff0c\u7b80\u5355\u5730\u590d\u5236\u5217\u4e2d\u7684\u6240\u6709\u503c;\u5b83\u88ab\u66ff\u6362\u4e3a\u76f8\u5e94\u7684\u6570\u7ec4\u503c\u3002"),(0,a.kt)("p",null,"\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin"),"\u51fd\u6570\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8f6c\u6362\u88ab\u6267\u884c\u591a\u6b21\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610fSELECT\u67e5\u8be2\u4e2d\u7684ARRAY JOIN\u8bed\u6cd5\uff0c\u5b83\u63d0\u4f9b\u4e86\u66f4\u5e7f\u6cdb\u7684\u53ef\u80fd\u6027\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayJoin([1, 2, 3] AS src) AS dst, 'Hello', src\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500dst\u2500\u252c\u2500\\'Hello\\'\u2500\u252c\u2500src\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   2 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   3 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/array_join/"},"\u6765\u6e90\u6587\u7ae0")," "))}y.isMDXComponent=!0}}]);