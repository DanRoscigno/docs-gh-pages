"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40945],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?t.createElement(g,i(i({ref:r},l),{},{components:n})):t.createElement(g,i({ref:r},l))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44618:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={sidebar_position:33},p="varSamp",s={unversionedId:"zh/sql-reference/aggregate-functions/reference/varsamp",id:"zh/sql-reference/aggregate-functions/reference/varsamp",title:"varSamp",description:"varsamp}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/varsamp.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/varsamp",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/varsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/varsamp.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33},sidebar:"chinese",previous:{title:"varPop(x)",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/varpop"},next:{title:"covarPop",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/covarpop"}},l={},u=[],f={toc:u};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"varsamp"},"varSamp"),(0,o.kt)("p",null,"\u8ba1\u7b97 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)^2) / (n - 1)"),"\uff0c\u8fd9\u91cc ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u6837\u672c\u5927\u5c0f\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"x\u0305"),"\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u5e73\u5747\u503c\u3002"),(0,o.kt)("p",null,"\u5b83\u8868\u793a\u968f\u673a\u53d8\u91cf\u7684\u65b9\u5dee\u7684\u65e0\u504f\u4f30\u8ba1\uff0c\u5982\u679c\u4f20\u9012\u7684\u503c\u5f62\u6210\u5176\u6837\u672c\u3002"),(0,o.kt)("p",null,"\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"Float64"),"\u3002 \u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"n <= 1"),"\uff0c\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"+\u221e"),"\u3002"),(0,o.kt)("p",null,'!!! note "\u6ce8"\n\u8be5\u51fd\u6570\u4f7f\u7528\u6570\u503c\u4e0d\u7a33\u5b9a\u7684\u7b97\u6cd5\u3002 \u5982\u679c\u4f60\u9700\u8981 ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Numerical_stability"},"\u6570\u503c\u7a33\u5b9a\u6027")," \u5728\u8ba1\u7b97\u4e2d\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"varSampStable")," \u51fd\u6570\u3002 \u5b83\u7684\u5de5\u4f5c\u901f\u5ea6\u8f83\u6162\uff0c\u4f46\u63d0\u4f9b\u8f83\u4f4e\u7684\u8ba1\u7b97\u9519\u8bef\u3002"))}m.isMDXComponent=!0}}]);