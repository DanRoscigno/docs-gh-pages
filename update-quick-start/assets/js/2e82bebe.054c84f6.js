"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70687],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(r),g=a,k=f["".concat(p,".").concat(g)]||f[g]||l[g]||o;return r?n.createElement(k,s(s({ref:t},u),{},{components:r})):n.createElement(k,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81923:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],c={sidebar_position:150},p="skewPop",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/skewpop",id:"zh/sql-reference/aggregate-functions/reference/skewpop",title:"skewPop",description:"skewpop}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/skewpop.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/skewpop",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/skewpop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/skewpop.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"chinese",previous:{title:"initializeAggregation",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/initializeAggregation"},next:{title:"skewSamp",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/skewsamp"}},u={},l=[],f={toc:l};function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"skewpop"},"skewPop"),(0,o.kt)("p",null,"\u8ba1\u7b97\u7ed9\u5b9a\u5e8f\u5217\u7684 ","[\u504f\u5ea6]"," (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skewness)%E3%80%82"},"https://en.wikipedia.org/wiki/Skewness)\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"skewPop(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f")," \u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("p",null,"\u7ed9\u5b9a\u5206\u5e03\u7684\u504f\u5ea6\u3002\u7c7b\u578b \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/float"},"Float64")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT skewPop(value) FROM series_with_value_column;\n")))}g.isMDXComponent=!0}}]);