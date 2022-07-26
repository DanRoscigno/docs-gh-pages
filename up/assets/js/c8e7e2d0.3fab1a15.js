"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[74283],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=i(t),m=a,g=f["".concat(u,".").concat(m)]||f[m]||l[m]||o;return t?n.createElement(g,p(p({ref:r},s),{},{components:t})):n.createElement(g,p({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56031:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),p=["components"],c={sidebar_position:154},u="kurtSamp",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/kurtsamp",id:"zh/sql-reference/aggregate-functions/reference/kurtsamp",title:"kurtSamp",description:"kurtsamp}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/kurtsamp.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/kurtsamp",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/kurtsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/kurtsamp.md",tags:[],version:"current",sidebarPosition:154,frontMatter:{sidebar_position:154},sidebar:"chinese",previous:{title:"kurtPop",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/kurtpop"},next:{title:"uniq",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/uniq"}},s={},l=[],f={toc:l};function m(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kurtsamp"},"kurtSamp"),(0,o.kt)("p",null,"\u8ba1\u7b97\u7ed9\u5b9a\u5e8f\u5217\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kurtosis"},"\u5cf0\u5ea6\u6837\u672c"),"\u3002\n\u5b83\u8868\u793a\u968f\u673a\u53d8\u91cf\u5cf0\u5ea6\u7684\u65e0\u504f\u4f30\u8ba1\uff0c\u5982\u679c\u4f20\u9012\u7684\u503c\u5f62\u6210\u5176\u6837\u672c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"kurtSamp(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 \u7ed3\u679c\u4e3a\u6570\u5b57\u7684 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("p",null,"\u7ed9\u5b9a\u5e8f\u5217\u7684\u5cf0\u5ea6\u3002\u7c7b\u578b \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/data-types/float"},"Float64"),"\u3002 \u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"n <= 1")," (",(0,o.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u6837\u672c\u7684\u5927\u5c0f\uff09\uff0c\u5219\u8be5\u51fd\u6570\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"nan"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT kurtSamp(value) FROM series_with_value_column;\n")))}m.isMDXComponent=!0}}]);