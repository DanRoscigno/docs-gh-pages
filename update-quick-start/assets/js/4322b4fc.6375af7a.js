"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62513],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26361:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={title:"\u6211\u80fd\u628a ClickHouse \u5f53\u505a\u65f6\u5e8f\u6570\u636e\u5e93\u6765\u4f7f\u7528\u5417?",toc_hidden:!0,sidebar_position:101},c="\u6211\u80fd\u628a ClickHouse \u5f53\u505a\u65f6\u5e8f\u6570\u636e\u5e93\u6765\u4f7f\u7528\u5417?",u={unversionedId:"zh/faq/use-cases/time-series",id:"zh/faq/use-cases/time-series",title:"\u6211\u80fd\u628a ClickHouse \u5f53\u505a\u65f6\u5e8f\u6570\u636e\u5e93\u6765\u4f7f\u7528\u5417?",description:"can-i-use-clickhouse-as-a-time-series-database}",source:"@site/docs/zh/faq/use-cases/time-series.md",sourceDirName:"zh/faq/use-cases",slug:"/zh/faq/use-cases/time-series",permalink:"/docs-gh-pages/update-quick-start/zh/faq/use-cases/time-series",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/use-cases/time-series.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{title:"\u6211\u80fd\u628a ClickHouse \u5f53\u505a\u65f6\u5e8f\u6570\u636e\u5e93\u6765\u4f7f\u7528\u5417?",toc_hidden:!0,sidebar_position:101},sidebar:"chinese",previous:{title:"\u6211\u80fd\u628a ClickHouse \u5f53\u505aKey-value \u952e\u503c\u5b58\u50a8\u6765\u4f7f\u7528\u5417\uff1f",permalink:"/docs-gh-pages/update-quick-start/zh/faq/use-cases/key-value"},next:{title:"Operations",permalink:"/docs-gh-pages/update-quick-start/zh/faq/operations/"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"can-i-use-clickhouse-as-a-time-series-database"},"\u6211\u80fd\u628a ClickHouse \u5f53\u505a\u65f6\u5e8f\u6570\u636e\u5e93\u6765\u4f7f\u7528\u5417?"),(0,s.kt)("p",null,"ClickHouse\u662f\u4e00\u4e2a\u901a\u7528\u7684\u6570\u636e\u5b58\u50a8\u89e3\u51b3\u65b9\u6848",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/faq/general/olap"},"OLAP"),"\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u800c\u6709\u8bb8\u591a\u4e13\u95e8\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002\u7136\u800c\uff0cClickHouse\u7684",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/faq/general/why-clickhouse-is-so-fast"},"\u4e13\u6ce8\u4e8e\u67e5\u8be2\u6267\u884c\u901f\u5ea6"),"\u4f7f\u5f97\u5b83\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\u7684\u6027\u80fd\u4f18\u4e8e\u4e13\u95e8\u7684\u7cfb\u7edf\u3002\u5173\u4e8e\u8fd9\u4e2a\u8bdd\u9898\u6709\u5f88\u591a\u72ec\u7acb\u7684\u57fa\u51c6\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u6253\u7b97\u5728\u8fd9\u91cc\u8fdb\u884c\u8bba\u8ff0\u3002\u76f8\u53cd\uff0c\u8ba9\u6211\u4eec\u5c06\u91cd\u70b9\u653e\u5728ClickHouse\u7684\u91cd\u8981\u529f\u80fd(\u5982\u679c\u8fd9\u662f\u4f60\u7684\u7528\u4f8b)\u4e0a\u3002"),(0,s.kt)("p",null,"\u9996\u5148\uff0c\u6709 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/create/table#create-query-specialized-codecs"},"specialized codecs")),"\uff0c\u8fd9\u662f\u5178\u578b\u7684\u65f6\u95f4\u5e8f\u5217\u3002\u65e0\u8bba\u662f\u5e38\u89c1\u7684\u7b97\u6cd5\uff0c\u5982\u201cDoubleDelta\u201d\u548c\u201cGorilla\u201d\uff0c\u6216\u7279\u5b9a\u7684ClickHouse \u6570\u636e\u7c7b\u578b\u5982\u201cT64\u201d\u3002"),(0,s.kt)("p",null,"\u5176\u6b21\uff0c\u65f6\u95f4\u5e8f\u5217\u67e5\u8be2\u901a\u5e38\u53ea\u8bbf\u95ee\u6700\u8fd1\u7684\u6570\u636e\uff0c\u6bd4\u5982\u4e00\u5929\u6216\u4e00\u5468\u4ee5\u524d\u7684\u6570\u636e\u3002\u4f7f\u7528\u5177\u6709\u5feb\u901fnVME/SSD\u9a71\u52a8\u5668\u548c\u9ad8\u5bb9\u91cfHDD\u9a71\u52a8\u5668\u7684\u670d\u52a1\u5668\u662f\u6709\u610f\u4e49\u7684\u3002ClickHouse ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes"},"TTL"),"\u7279\u6027\u5141\u8bb8\u914d\u7f6e\u5728\u5feb\u901f\u786c\u76d8\u4e0a\u4fdd\u6301\u65b0\u9c9c\u7684\u70ed\u6570\u636e\uff0c\u5e76\u968f\u7740\u6570\u636e\u7684\u8001\u5316\u9010\u6e10\u79fb\u52a8\u5230\u8f83\u6162\u7684\u786c\u76d8\u4e0a\u3002\u5982\u679c\u60a8\u7684\u9700\u6c42\u9700\u8981\uff0c\u4e5f\u53ef\u4ee5\u6c47\u603b\u6216\u5220\u9664\u66f4\u65e7\u7684\u6570\u636e\u3002"),(0,s.kt)("p",null,"\u5c3d\u7ba1\u8fd9\u4e0eClickHouse\u5b58\u50a8\u548c\u5904\u7406\u539f\u59cb\u6570\u636e\u7684\u7406\u5ff5\u76f8\u8fdd\u80cc\uff0c\u4f46\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/create/view"},"materialized views"),"\u6765\u9002\u5e94\u66f4\u7d27\u8feb\u7684\u5ef6\u8fdf\u6216\u6210\u672c\u9700\u6c42\u3002"))}d.isMDXComponent=!0}}]);