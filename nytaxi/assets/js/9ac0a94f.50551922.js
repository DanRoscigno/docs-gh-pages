"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[6438],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),g=a,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90971:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={sidebar_position:1},c="count",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/count",id:"zh/sql-reference/aggregate-functions/reference/count",title:"count",description:"agg_function-count}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/count.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/count",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/count",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"chinese",previous:{title:"Reference",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/"},next:{title:"min",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/min"}},p={},s=[],f={toc:s};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_function-count"},"count"),(0,i.kt)("p",null,"\u8ba1\u6570\u884c\u6570\u6216\u975e\u7a7a\u503c\u3002"),(0,i.kt)("p",null,"ClickHouse\u652f\u6301\u4ee5\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," \u8bed\u6cd5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count(expr)")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"COUNT(DISTINCT expr)"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count()")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"COUNT(*)"),". \u8be5 ",(0,i.kt)("inlineCode",{parentName:"li"},"count()")," \u8bed\u6cd5\u662fClickHouse\u7279\u5b9a\u7684\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("p",null,"\u8be5\u51fd\u6570\u53ef\u4ee5\u91c7\u53d6:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u96f6\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u53c2\u6570\u8c03\u7528\u51fd\u6570\uff0c\u5b83\u4f1a\u8ba1\u7b97\u884c\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f")," \u88ab\u4f20\u9012\uff0c\u5219\u8be5\u51fd\u6570\u8ba1\u6570\u6b64\u8868\u8fbe\u5f0f\u8fd4\u56de\u975enull\u7684\u6b21\u6570\u3002 \u5982\u679c\u8868\u8fbe\u5f0f\u8fd4\u56de ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a"),"\u7c7b\u578b\u7684\u503c\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"count"),"\u7684\u7ed3\u679c\u4ecd\u7136\u4e0d ",(0,i.kt)("inlineCode",{parentName:"li"},"Nullable"),"\u3002 \u5982\u679c\u8868\u8fbe\u5f0f\u5bf9\u4e8e\u6240\u6709\u7684\u884c\u90fd\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \uff0c\u5219\u8be5\u51fd\u6570\u8fd4\u56de 0 \u3002")),(0,i.kt)("p",null,"\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8be6\u7ec6\u4fe1\u606f")),(0,i.kt)("p",null,"ClickHouse\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT(DISTINCT ...)")," \u8bed\u6cd5\uff0c\u8fd9\u79cd\u7ed3\u6784\u7684\u884c\u4e3a\u53d6\u51b3\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#settings-count_distinct_implementation"},"count_distinct_implementation")," \u8bbe\u7f6e\u3002 \u5b83\u5b9a\u4e49\u4e86\u7528\u4e8e\u6267\u884c\u8be5\u64cd\u4f5c\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq","*"),"\u51fd\u6570\u3002 \u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"),"\u51fd\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM table")," \u8fd9\u4e2a\u67e5\u8be2\u672a\u88ab\u4f18\u5316\uff0c\u56e0\u4e3a\u8868\u4e2d\u7684\u6761\u76ee\u6570\u6ca1\u6709\u5355\u72ec\u5b58\u50a8\u3002 \u5b83\u4ece\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\u5c0f\u5217\u5e76\u8ba1\u7b97\u5176\u503c\u7684\u4e2a\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u793a\u4f8b1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM t\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502       5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u793a\u4f8b2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, value FROM system.settings WHERE name = 'count_distinct_implementation'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 count_distinct_implementation \u2502 uniqExact \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(DISTINCT num) FROM t\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500uniqExact(num)\u2500\u2510\n\u2502              3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u8868\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"count(DISTINCT num)")," \u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"count_distinct_implementation")," \u7684\u8bbe\u5b9a\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqExact")," \u51fd\u6570\u6765\u6267\u884c\u7684\u3002"))}g.isMDXComponent=!0}}]);