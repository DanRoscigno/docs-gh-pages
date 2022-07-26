"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10052],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(t),g=a,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||i;return t?r.createElement(m,u(u({ref:n},p),{},{components:t})):r.createElement(m,u({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,u=new Array(i);u[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<i;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19126:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),u=["components"],o={sidebar_position:190},c="uniq",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/uniq",id:"zh/sql-reference/aggregate-functions/reference/uniq",title:"uniq",description:"agg_function-uniq}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/uniq.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/uniq",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/uniq",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/uniq.md",tags:[],version:"current",sidebarPosition:190,frontMatter:{sidebar_position:190},sidebar:"chinese",previous:{title:"kurtSamp",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/kurtsamp"},next:{title:"uniqExact",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/uniqexact"}},p={},s=[],f={toc:s};function g(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_function-uniq"},"uniq"),(0,i.kt)("p",null,"\u8ba1\u7b97\u53c2\u6570\u7684\u4e0d\u540c\u503c\u7684\u8fd1\u4f3c\u6570\u91cf\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniq(x[, ...])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("p",null,"\u8be5\u51fd\u6570\u91c7\u7528\u53ef\u53d8\u6570\u91cf\u7684\u53c2\u6570\u3002 \u53c2\u6570\u53ef\u4ee5\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", \u6216\u6570\u5b57\u7c7b\u578b\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt64")," \u7c7b\u578b\u6570\u503c\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u7ec6\u8282")),(0,i.kt)("p",null,"\u529f\u80fd:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8ba1\u7b97\u805a\u5408\u4e2d\u6240\u6709\u53c2\u6570\u7684\u54c8\u5e0c\u503c\uff0c\u7136\u540e\u5728\u8ba1\u7b97\u4e2d\u4f7f\u7528\u5b83\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\u81ea\u9002\u5e94\u91c7\u6837\u7b97\u6cd5\u3002 \u5bf9\u4e8e\u8ba1\u7b97\u72b6\u6001\uff0c\u8be5\u51fd\u6570\u4f7f\u7528\u6700\u591a65536\u4e2a\u5143\u7d20\u54c8\u5e0c\u503c\u7684\u6837\u672c\u3002"),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u7b97\u6cd5\u662f\u975e\u5e38\u7cbe\u786e\u7684\uff0c\u5e76\u4e14\u5bf9\u4e8eCPU\u6765\u8bf4\u975e\u5e38\u9ad8\u6548\u3002\u5982\u679c\u67e5\u8be2\u5305\u542b\u4e00\u4e9b\u8fd9\u6837\u7684\u51fd\u6570\uff0c\u90a3\u548c\u5176\u4ed6\u805a\u5408\u51fd\u6570\u76f8\u6bd4 ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")," \u5c06\u662f\u51e0\u4e4e\u4e00\u6837\u5feb\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u786e\u5b9a\u6027\u5730\u63d0\u4f9b\u7ed3\u679c\uff08\u5b83\u4e0d\u4f9d\u8d56\u4e8e\u67e5\u8be2\u5904\u7406\u987a\u5e8f\uff09\u3002"))),(0,i.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728\u51e0\u4e4e\u6240\u6709\u60c5\u51b5\u4e0b\u4f7f\u7528\u6b64\u529f\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"))))}g.isMDXComponent=!0}}]);