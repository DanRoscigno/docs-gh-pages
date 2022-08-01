"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73521],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7658:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={sidebar_position:35,sidebar_label:"\u5b57\u5178"},s="\u5b57\u5178",l={unversionedId:"zh/sql-reference/dictionaries/index",id:"zh/sql-reference/dictionaries/index",title:"\u5b57\u5178",description:"dictionaries}",source:"@site/docs/zh/sql-reference/dictionaries/index.md",sourceDirName:"zh/sql-reference/dictionaries",slug:"/zh/sql-reference/dictionaries/",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/dictionaries/index.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"\u5b57\u5178"},sidebar:"chinese",previous:{title:"remote, remoteSecure",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/table-functions/remote"},next:{title:"\u5185\u90e8\u5b57\u5178",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/internal-dicts"}},u={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dictionaries"},"\u5b57\u5178"),(0,a.kt)("p",null,"\u5b57\u5178\u662f\u4e00\u4e2a\u6620\u5c04 (",(0,a.kt)("inlineCode",{parentName:"p"},"\u952e -> \u5c5e\u6027"),"\uff09, \u662f\u65b9\u4fbf\u5404\u79cd\u7c7b\u578b\u7684\u53c2\u8003\u6e05\u5355\u3002"),(0,a.kt)("p",null,"ClickHouse\u652f\u6301\u4e00\u4e9b\u7279\u6b8a\u51fd\u6570\u914d\u5408\u5b57\u5178\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u3002 \u5c06\u5b57\u5178\u4e0e\u51fd\u6570\u7ed3\u5408\u4f7f\u7528\u6bd4\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," \u64cd\u4f5c\u4e0e\u5f15\u7528\u8868\u7ed3\u5408\u4f7f\u7528\u66f4\u7b80\u5355\u3001\u66f4\u6709\u6548\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/syntax#null-literal"},"NULL")," \u503c\u4e0d\u80fd\u5b58\u50a8\u5728\u5b57\u5178\u4e2d\u3002"),(0,a.kt)("p",null,"ClickHouse\u652f\u6301:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/internal-dicts#internal_dicts"},"\u5185\u7f6e\u5b57\u5178")," ,\u8fd9\u4e9b\u5b57\u5178\u5177\u6709\u7279\u5b9a\u7684 ",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/ym-dict-functions"},"\u51fd\u6570\u96c6"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/dictionaries/external-dictionaries/external-dicts#dicts-external-dicts"},"\u63d2\u4ef6\uff08\u5916\u90e8\uff09\u5b57\u5178")," ,\u8fd9\u4e9b\u5b57\u5178\u62e5\u6709\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/ext-dict-functions"},"\u51fd\u6570\u96c6"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/dicts/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);