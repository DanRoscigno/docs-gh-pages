"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35682],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={title:"\u4ec0\u4e48\u662f\u5217\u5b58\u50a8\u6570\u636e\u5e93?",toc_hidden:!0,sidebar_position:101},u="\u4ec0\u4e48\u662f\u5217\u5b58\u50a8\u6570\u636e\u5e93?",l={unversionedId:"zh/faq/general/columnar-database",id:"zh/faq/general/columnar-database",title:"\u4ec0\u4e48\u662f\u5217\u5b58\u50a8\u6570\u636e\u5e93?",description:"what-is-a-columnar-database}",source:"@site/docs/zh/faq/general/columnar-database.md",sourceDirName:"zh/faq/general",slug:"/zh/faq/general/columnar-database",permalink:"/docs-gh-pages/update-quick-start/zh/faq/general/columnar-database",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/general/columnar-database.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{title:"\u4ec0\u4e48\u662f\u5217\u5b58\u50a8\u6570\u636e\u5e93?",toc_hidden:!0,sidebar_position:101},sidebar:"chinese",previous:{title:"What is OLAP?",permalink:"/docs-gh-pages/update-quick-start/zh/faq/general/olap"},next:{title:"\u4e3a\u4f55\u4e0d\u4f7f\u7528 MapReduce\u7b49\u6280\u672f?",permalink:"/docs-gh-pages/update-quick-start/zh/faq/general/mapreduce"}},s={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-a-columnar-database"},"\u4ec0\u4e48\u662f\u5217\u5b58\u50a8\u6570\u636e\u5e93?"),(0,o.kt)("p",null,"\u5217\u5b58\u50a8\u6570\u636e\u5e93\u72ec\u7acb\u5b58\u50a8\u6bcf\u4e2a\u5217\u7684\u6570\u636e\u3002\u8fd9\u53ea\u5141\u8bb8\u4ece\u78c1\u76d8\u8bfb\u53d6\u4efb\u4f55\u7ed9\u5b9a\u67e5\u8be2\u4e2d\u4f7f\u7528\u7684\u5217\u7684\u6570\u636e\u3002\u5176\u4ee3\u4ef7\u662f\uff0c\u5f71\u54cd\u6574\u884c\u7684\u64cd\u4f5c\u4f1a\u6309\u6bd4\u4f8b\u53d8\u5f97\u66f4\u6602\u8d35\u3002\u5217\u5b58\u50a8\u6570\u636e\u5e93\u7684\u540c\u4e49\u8bcd\u662f\u9762\u5411\u5217\u7684\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002ClickHouse\u5c31\u662f\u8fd9\u6837\u4e00\u4e2a\u5178\u578b\u7684\u4f8b\u5b50\u3002"),(0,o.kt)("p",null,"\u5217\u5b58\u50a8\u6570\u636e\u5e93\u7684\u4e3b\u8981\u4f18\u70b9\u662f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u53ea\u4f7f\u7528\u8bb8\u591a\u5217\u5176\u4e2d\u7684\u5c11\u6570\u5217\u3002\n\u2014 \u805a\u5408\u5bf9\u5927\u91cf\u6570\u636e\u7684\u67e5\u8be2\u3002\n\u2014 \u6309\u5217\u538b\u7f29\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u6784\u5efa\u62a5\u8868\u65f6\u4f20\u7edf\u7684\u9762\u5411\u884c\u7cfb\u7edf\u548c\u67f1\u72b6\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u533a\u522b:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f20\u7edf\u884c\u5b58\u50a8"),"\n!(\u4f20\u7edf\u884c\u5b58\u50a8)(",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/images/row-oriented.gif"},"https://clickhouse.com/docs/en/images/row-oriented.gif"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5217\u5b58\u50a8"),"\n!(\u5217\u5b58\u50a8)(",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/images/column-oriented.gif"},"https://clickhouse.com/docs/en/images/column-oriented.gif"),")"),(0,o.kt)("p",null,"\u5217\u5b58\u50a8\u6570\u636e\u5e93\u662f\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u7684\u9996\u9009\uff0c\u56e0\u4e3a\u5b83\u5141\u8bb8\u5728\u4e00\u4e2a\u8868\u4e2d\u6709\u8bb8\u591a\u5217\u4ee5\u9632\u4e07\u4e00\uff0c\u4f46\u4e0d\u4f1a\u5728\u8bfb\u53d6\u67e5\u8be2\u6267\u884c\u65f6\u4e3a\u672a\u4f7f\u7528\u7684\u5217\u4ed8\u51fa\u4ee3\u4ef7\u3002\u9762\u5411\u5217\u7684\u6570\u636e\u5e93\u662f\u4e3a\u5927\u6570\u636e\u5904\u7406\u800c\u8bbe\u8ba1\u7684\uff0c\u56e0\u4e3a\u548c\u6570\u636e\u4ed3\u5e93\u4e00\u6837\uff0c\u5b83\u4eec\u901a\u5e38\u4f7f\u7528\u5206\u5e03\u5f0f\u7684\u4f4e\u6210\u672c\u786c\u4ef6\u96c6\u7fa4\u6765\u63d0\u9ad8\u541e\u5410\u91cf\u3002ClickHouse\u7ed3\u5408\u4e86",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/special/distributed"},"\u5206\u5e03\u5f0f"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/mergetree-family/replication"},"\u590d\u5236\u5f0f"),"\u4e24\u7c7b\u8868\u3002"))}d.isMDXComponent=!0}}]);