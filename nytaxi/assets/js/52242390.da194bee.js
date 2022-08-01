"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67259],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),g=a,m=f["".concat(l,".").concat(g)]||f[g]||p[g]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64323:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={sidebar_position:201},l="quantiles",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/quantiles",id:"zh/sql-reference/aggregate-functions/reference/quantiles",title:"quantiles",description:"quantiles}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/quantiles.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/quantiles",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/quantiles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/quantiles.md",tags:[],version:"current",sidebarPosition:201,frontMatter:{sidebar_position:201},sidebar:"chinese",previous:{title:"quantile",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/quantile"},next:{title:"quantileExact",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/quantileexact"}},s={},p=[],f={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantiles"},"quantiles"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"quantiles(level1, level2, \u2026)(x)\n")),(0,i.kt)("p",null,"\u6240\u6709\u5206\u4f4d\u6570\u51fd\u6570(quantile)\u4e5f\u6709\u76f8\u5e94\u7684\u5206\u4f4d\u6570(quantiles)\u51fd\u6570: ",(0,i.kt)("inlineCode",{parentName:"p"},"quantiles"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quantilesDeterministic"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quantilesTiming"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quantilesTimingWeighted"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quantilesExact"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quantilesExactWeighted"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quantilesTDigest"),"\u3002 \u8fd9\u4e9b\u51fd\u6570\u4e00\u6b21\u8ba1\u7b97\u6240\u5217\u7684\u7ea7\u522b\u7684\u6240\u6709\u5206\u4f4d\u6570, \u5e76\u8fd4\u56de\u7ed3\u679c\u503c\u7684\u6570\u7ec4\u3002"))}g.isMDXComponent=!0}}]);