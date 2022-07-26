"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17885],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),i=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=i(n),g=a,m=f["".concat(c,".").concat(g)]||f[g]||u[g]||o;return n?t.createElement(m,s(s({ref:r},l),{},{components:n})):t.createElement(m,s({ref:r},l))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41194:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],p={sidebar_position:151},c="skewSamp",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/skewsamp",id:"zh/sql-reference/aggregate-functions/reference/skewsamp",title:"skewSamp",description:"skewsamp}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/skewsamp.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/skewsamp",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/skewsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/skewsamp.md",tags:[],version:"current",sidebarPosition:151,frontMatter:{sidebar_position:151},sidebar:"chinese",previous:{title:"skewPop",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/skewpop"},next:{title:"kurtPop",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/kurtpop"}},l={},u=[],f={toc:u};function g(e){var r=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"skewsamp"},"skewSamp"),(0,o.kt)("p",null,"\u8ba1\u7b97\u7ed9\u5b9a\u5e8f\u5217\u7684 ","[\u6837\u672c\u504f\u5ea6]"," (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skewness)%E3%80%82"},"https://en.wikipedia.org/wiki/Skewness)\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u4f20\u9012\u7684\u503c\u5f62\u6210\u5176\u6837\u672c\uff0c\u5b83\u4ee3\u8868\u4e86\u4e00\u4e2a\u968f\u673a\u53d8\u91cf\u7684\u504f\u5ea6\u7684\u65e0\u504f\u4f30\u8ba1\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"skewSamp(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f")," \u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("p",null,"\u7ed9\u5b9a\u5206\u5e03\u7684\u504f\u5ea6\u3002 \u7c7b\u578b \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/data-types/float"},"Float64"),"\u3002 \u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"n <= 1")," (",(0,o.kt)("inlineCode",{parentName:"p"},"n")," \u6837\u672c\u7684\u5927\u5c0f), \u51fd\u6570\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"nan"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT skewSamp(value) FROM series_with_value_column;\n")))}g.isMDXComponent=!0}}]);