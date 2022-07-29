"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50269],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},o),{},{components:n})):r.createElement(f,i({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_label:"DISTINCT"},c="DISTINCT\u5b50\u53e5",p={unversionedId:"zh/sql-reference/statements/select/distinct",id:"zh/sql-reference/statements/select/distinct",title:"DISTINCT\u5b50\u53e5",description:"select-distinct}",source:"@site/docs/zh/sql-reference/statements/select/distinct.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/distinct",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/distinct",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/distinct.md",tags:[],version:"current",frontMatter:{sidebar_label:"DISTINCT"},sidebar:"chinese",previous:{title:"ARRAY JOIN",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/array-join"},next:{title:"FORMAT",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/format"}},o={},u=[{value:"\u7a7a\u5904\u7406",id:"null-processing",level:2},{value:"\u66ff\u4ee3\u529e\u6cd5",id:"alternatives",level:2},{value:"\u9650\u5236",id:"limitations",level:2},{value:"\u4f8b\u5b50",id:"examples",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-distinct"},"DISTINCT\u5b50\u53e5"),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT")," \u88ab\u58f0\u660e\uff0c\u5219\u67e5\u8be2\u7ed3\u679c\u4e2d\u53ea\u4fdd\u7559\u552f\u4e00\u884c\u3002 \u56e0\u6b64\uff0c\u5728\u7ed3\u679c\u4e2d\u6240\u6709\u5b8c\u5168\u5339\u914d\u7684\u884c\u96c6\u5408\u4e2d\uff0c\u53ea\u6709\u4e00\u884c\u88ab\u4fdd\u7559\u3002"),(0,l.kt)("h2",{id:"null-processing"},"\u7a7a\u5904\u7406"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u9002\u7528\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/syntax#null-literal"},"NULL")," \u5c31\u597d\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u662f\u4e00\u4e2a\u7279\u5b9a\u7684\u503c\uff0c\u5e76\u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL==NULL"),". \u6362\u53e5\u8bdd\u8bf4\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u7ed3\u679c\uff0c\u4e0d\u540c\u7684\u7ec4\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u4ec5\u53d1\u751f\u4e00\u6b21\u3002 \u5b83\u4e0d\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u5728\u5927\u591a\u6570\u5176\u4ed6\u60c5\u51b5\u4e2d\u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"alternatives"},"\u66ff\u4ee3\u529e\u6cd5"),(0,l.kt)("p",null,"\u901a\u8fc7\u5e94\u7528\u53ef\u4ee5\u83b7\u5f97\u76f8\u540c\u7684\u7ed3\u679c ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/group-by"},"GROUP BY")," \u5728\u540c\u4e00\u7ec4\u503c\u6307\u5b9a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u5b50\u53e5\uff0c\u5e76\u4e14\u4e0d\u4f7f\u7528\u4efb\u4f55\u805a\u5408\u51fd\u6570\u3002 \u4f46\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u6709\u51e0\u4e2a\u4e0d\u540c\u7684\u5730\u65b9:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DISTINCT")," \u53ef\u4ee5\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"GROUP BY")," \u4e00\u8d77\u4f7f\u7528."),(0,l.kt)("li",{parentName:"ul"},"\u5f53 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/order-by"},"ORDER BY")," \u88ab\u7701\u7565\u5e76\u4e14 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/limit"},"LIMIT")," \u88ab\u5b9a\u4e49\u65f6\uff0c\u5728\u8bfb\u53d6\u6240\u9700\u6570\u91cf\u7684\u4e0d\u540c\u884c\u540e\u7acb\u5373\u505c\u6b62\u8fd0\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5757\u5728\u5904\u7406\u65f6\u8f93\u51fa\uff0c\u800c\u65e0\u9700\u7b49\u5f85\u6574\u4e2a\u67e5\u8be2\u5b8c\u6210\u8fd0\u884c\u3002")),(0,l.kt)("h2",{id:"limitations"},"\u9650\u5236"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u4e0d\u652f\u6301\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u5305\u542b\u6709\u6570\u7ec4\u7684\u5217\u3002"),(0,l.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,l.kt)("p",null,"ClickHouse\u652f\u6301\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u7684\u4e0d\u540c\u7684\u5217\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u5b50\u53e5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u53e5\u524d\u88ab\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 2 \u2502 1 \u2502\n\u2502 1 \u2502 2 \u2502\n\u2502 3 \u2502 3 \u2502\n\u2502 2 \u2502 4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5f53\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT a FROM t1 ORDER BY b ASC")," \u6765\u67e5\u8be2\u6570\u636e\uff0c\u6211\u4eec\u5f97\u5230\u4ee5\u4e0b\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 2 \u2502\n\u2502 1 \u2502\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u6539\u53d8\u6392\u5e8f\u65b9\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT a FROM t1 ORDER BY b DESC"),"\uff0c\u6211\u4eec\u5f97\u5230\u4ee5\u4e0b\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 3 \u2502\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"2, 4")," \u6392\u5e8f\u524d\u88ab\u5207\u5272\u3002"),(0,l.kt)("p",null,"\u5728\u7f16\u7a0b\u67e5\u8be2\u65f6\u8003\u8651\u8fd9\u79cd\u5b9e\u73b0\u7279\u6027\u3002"))}d.isMDXComponent=!0}}]);