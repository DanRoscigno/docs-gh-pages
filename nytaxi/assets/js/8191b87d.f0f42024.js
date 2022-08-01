"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79595],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=o(n),g=a,m=f["".concat(i,".").concat(g)]||f[g]||u[g]||l;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],c={sidebar_position:301,sidebar_label:"welchTTest"},i="welchTTest",o={unversionedId:"zh/sql-reference/aggregate-functions/reference/welchttest",id:"zh/sql-reference/aggregate-functions/reference/welchttest",title:"welchTTest",description:"welchttest}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/welchttest.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/welchttest",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/welchttest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/welchttest.md",tags:[],version:"current",sidebarPosition:301,frontMatter:{sidebar_position:301,sidebar_label:"welchTTest"},sidebar:"chinese",previous:{title:"studentTTest",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/studentttest"},next:{title:"mannWhitneyUTest",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/mannwhitneyutest"}},p={},u=[],f={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"welchttest"},"welchTTest"),(0,l.kt)("p",null,"\u5bf9\u4e24\u4e2a\u603b\u4f53\u7684\u6837\u672c\u5e94\u7528 Welch t\u68c0\u9a8c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"welchTTest(sample_data, sample_index)\n")),(0,l.kt)("p",null,"\u4e24\u4e2a\u6837\u672c\u7684\u503c\u90fd\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_data")," \u5217\u4e2d\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_index")," \u7b49\u4e8e 0\uff0c\u5219\u8be5\u884c\u7684\u503c\u5c5e\u4e8e\u7b2c\u4e00\u4e2a\u603b\u4f53\u7684\u6837\u672c\u3002 \u53cd\u4e4b\u5c5e\u4e8e\u7b2c\u4e8c\u4e2a\u603b\u4f53\u7684\u6837\u672c\u3002\n\u96f6\u5047\u8bbe\u662f\u7fa4\u4f53\u7684\u5747\u503c\u76f8\u7b49\u3002\u5047\u8bbe\u4e3a\u6b63\u6001\u5206\u5e03\u3002\u603b\u4f53\u53ef\u80fd\u5177\u6709\u4e0d\u76f8\u7b49\u7684\u65b9\u5dee\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 \u6837\u672c\u6570\u636e\u3002",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/float"},"Float")," \u6216 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 \u6837\u672c\u7d22\u5f15\u3002",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"Integer"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/tuple"},"\u5143\u7ec4"),"\uff0c\u6709\u4e24\u4e2a\u5143\u7d20:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u51fa\u7684t\u7edf\u8ba1\u91cf\u3002 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/float"},"Float64"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u51fa\u7684p\u503c\u3002",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/float"},"Float64"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u8f93\u5165\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502        20.3 \u2502            0 \u2502\n\u2502        22.1 \u2502            0 \u2502\n\u2502        21.9 \u2502            0 \u2502\n\u2502        18.9 \u2502            1 \u2502\n\u2502        20.3 \u2502            1 \u2502\n\u2502          19 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT welchTTest(sample_data, sample_index) FROM welch_ttest;\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500welchTTest(sample_data, sample_index)\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (2.7988719532211235,0.051807360348581945) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Welch%27s_t-test"},"Welch's t-test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/studentttest#studentttest"},"studentTTest function"))))}g.isMDXComponent=!0}}]);