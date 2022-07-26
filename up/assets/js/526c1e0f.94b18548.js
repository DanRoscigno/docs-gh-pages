"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92878],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var g=r.createContext({}),c=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(g.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,g=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=i,m=s["".concat(g,".").concat(f)]||s[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},38740:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={sidebar_position:150},g=void 0,c={unversionedId:"zh/sql-reference/aggregate-functions/reference/initializeAggregation",id:"zh/sql-reference/aggregate-functions/reference/initializeAggregation",title:"initializeAggregation",description:"initializeAggregation",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/initializeAggregation.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/initializeAggregation",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/initializeAggregation",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/initializeAggregation.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"chinese",previous:{title:"intervalLengthSum",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/intervalLengthSum"},next:{title:"skewPop",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/skewpop"}},u={},p=[{value:"initializeAggregation",id:"initializeaggregation",level:2}],s={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"initializeaggregation"},"initializeAggregation"),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u4f60\u8f93\u5165\u884c\u7684\u805a\u5408\u3002\u7528\u4e8e\u540e\u7f00\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"State")," \u7684\u51fd\u6570\u3002\n\u7528\u5b83\u6765\u6d4b\u8bd5\u6216\u5904\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregationgMergeTree")," \u7c7b\u578b\u7684\u5217\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"initializeAggregation (aggregate_function, column_1, column_2)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aggregate_function")," \u2014 \u805a\u5408\u51fd\u6570\u540d\u3002 \u8fd9\u4e2a\u51fd\u6570\u7684\u72b6\u6001 \u2014 \u6b63\u521b\u5efa\u7684\u3002",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string#string"},"String"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"column_n")," \u2014 \u5c06\u5176\u8f6c\u6362\u4e3a\u51fd\u6570\u7684\u53c2\u6570\u7684\u5217\u3002",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string#string"},"String"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,"\u8fd4\u56de\u8f93\u5165\u884c\u7684\u805a\u5408\u7ed3\u679c\u3002\u8fd4\u56de\u7c7b\u578b\u5c06\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeAgregation")," \u7528\u4f5c\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\u76f8\u540c\u3002\n\u4f8b\u5982\uff0c\u5bf9\u4e8e\u540e\u7f00\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"State")," \u7684\u51fd\u6570\uff0c\u8fd4\u56de\u7c7b\u578b\u5c06\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniqMerge(state) FROM (SELECT initializeAggregation('uniqState', number % 3) AS state FROM system.numbers LIMIT 10000);\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("p",null,"\u250c\u2500uniqMerge(state)\u2500\u2510\n\u2502                3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"))}f.isMDXComponent=!0}}]);