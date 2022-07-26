"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[25859],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),f=a,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14101:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={sidebar_position:310,sidebar_label:"mannWhitneyUTest"},s="mannWhitneyUTest",o={unversionedId:"zh/sql-reference/aggregate-functions/reference/mannwhitneyutest",id:"zh/sql-reference/aggregate-functions/reference/mannwhitneyutest",title:"mannWhitneyUTest",description:"mannwhitneyutest}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/mannwhitneyutest.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/mannwhitneyutest",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/mannwhitneyutest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/mannwhitneyutest.md",tags:[],version:"current",sidebarPosition:310,frontMatter:{sidebar_position:310,sidebar_label:"mannWhitneyUTest"},sidebar:"chinese",previous:{title:"welchTTest",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/welchttest"},next:{title:"median",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/median"}},c={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mannwhitneyutest"},"mannWhitneyUTest"),(0,l.kt)("p",null,"\u5bf9\u4e24\u4e2a\u603b\u4f53\u7684\u6837\u672c\u5e94\u7528 Mann-Whitney \u79e9\u68c0\u9a8c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mannWhitneyUTest[(alternative[, continuity_correction])](sample_data, sample_index)\n")),(0,l.kt)("p",null,"\u4e24\u4e2a\u6837\u672c\u7684\u503c\u90fd\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_data")," \u5217\u4e2d\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_index")," \u7b49\u4e8e 0\uff0c\u5219\u8be5\u884c\u7684\u503c\u5c5e\u4e8e\u7b2c\u4e00\u4e2a\u603b\u4f53\u7684\u6837\u672c\u3002 \u53cd\u4e4b\u5c5e\u4e8e\u7b2c\u4e8c\u4e2a\u603b\u4f53\u7684\u6837\u672c\u3002\n\u96f6\u5047\u8bbe\u662f\u4e24\u4e2a\u603b\u4f53\u968f\u673a\u76f8\u7b49\u3002\u4e5f\u53ef\u4ee5\u68c0\u9a8c\u5355\u8fb9\u5047\u8bbe\u3002\u8be5\u68c0\u9a8c\u4e0d\u5047\u8bbe\u6570\u636e\u5177\u6709\u6b63\u6001\u5206\u5e03\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 \u6837\u672c\u6570\u636e\u3002",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/float"},"Float")," \u6216 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/decimal"},"Decimal"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 \u6837\u672c\u7d22\u5f15\u3002",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"Integer"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alternative")," \u2014 \u4f9b\u9009\u5047\u8bbe\u3002(\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c\u662f: ",(0,l.kt)("inlineCode",{parentName:"li"},"'two-sided'")," \u3002) ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string"},"String"),"\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'two-sided'"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'greater'"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'less'"),"\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"continuity_correction")," \u2014 \u5982\u679c\u4e0d\u4e3a0\uff0c\u90a3\u4e48\u5c06\u5bf9p\u503c\u8fdb\u884c\u6b63\u6001\u8fd1\u4f3c\u7684\u8fde\u7eed\u6027\u4fee\u6b63\u3002(\u53ef\u9009\uff0c\u9ed8\u8ba4\uff1a1\u3002) ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt64"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/data-types/tuple"},"\u5143\u7ec4"),"\uff0c\u6709\u4e24\u4e2a\u5143\u7d20:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u51faU\u7edf\u8ba1\u91cf\u3002",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/float"},"Float64"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u51fa\u7684p\u503c\u3002",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/float"},"Float64"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u8f93\u5165\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502          10 \u2502            0 \u2502\n\u2502          11 \u2502            0 \u2502\n\u2502          12 \u2502            0 \u2502\n\u2502           1 \u2502            1 \u2502\n\u2502           2 \u2502            1 \u2502\n\u2502           3 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mannWhitneyUTest('greater')(sample_data, sample_index) FROM mww_ttest;\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mannWhitneyUTest('greater')(sample_data, sample_index)\u2500\u2510\n\u2502 (9,0.04042779918503192)                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test"},"Mann\u2013Whitney U test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stochastic_ordering"},"Stochastic ordering"))))}f.isMDXComponent=!0}}]);