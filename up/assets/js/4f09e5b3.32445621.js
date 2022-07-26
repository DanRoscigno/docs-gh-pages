"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[78459],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_label:"GROUP BY"},p="GROUP BY\u5b50\u53e5",s={unversionedId:"zh/sql-reference/statements/select/group-by",id:"zh/sql-reference/statements/select/group-by",title:"GROUP BY\u5b50\u53e5",description:"select-group-by-clause}",source:"@site/docs/zh/sql-reference/statements/select/group-by.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/group-by",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/group-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/group-by.md",tags:[],version:"current",frontMatter:{sidebar_label:"GROUP BY"},sidebar:"chinese",previous:{title:"FROM",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/from"},next:{title:"HAVING",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/having"}},u={},m=[{value:"\u7a7a\u5904\u7406",id:"null-processing",level:2},{value:"WITH TOTAL \u4fee\u9970\u7b26",id:"with-totals-modifier",level:2},{value:"\u914d\u7f6e\u603b\u548c\u5904\u7406",id:"configuring-totals-processing",level:3},{value:"\u4f8b\u5b50",id:"examples",level:2},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"implementation-details",level:2},{value:"\u5728\u5916\u90e8\u5b58\u50a8\u5668\u4e2d\u5206\u7ec4",id:"select-group-by-in-external-memory",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-group-by-clause"},"GROUP BY\u5b50\u53e5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u7ed3\u679c\u8f6c\u6362\u4e3a\u805a\u5408\u6a21\u5f0f\uff0c\u5176\u5de5\u4f5c\u539f\u7406\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GROUP BY")," \u5b50\u53e5\u5305\u542b\u8868\u8fbe\u5f0f\u5217\u8868\uff08\u6216\u5355\u4e2a\u8868\u8fbe\u5f0f -- \u53ef\u4ee5\u8ba4\u4e3a\u662f\u957f\u5ea6\u4e3a1\u7684\u5217\u8868\uff09\u3002 \u8fd9\u4efd\u540d\u5355\u5145\u5f53 \u201cgrouping key\u201d\uff0c\u800c\u6bcf\u4e2a\u5355\u72ec\u7684\u8868\u8fbe\u5f0f\u5c06\u88ab\u79f0\u4e3a \u201ckey expressions\u201d."),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6240\u6709\u7684\u8868\u8fbe\u5f0f\u5728 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/"},"SELECT"),", ",(0,l.kt)("a",{parentName:"li",href:"../../../sql-reference/statements/select/having"},"HAVING"),"\uff0c\u548c ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/order-by"},"ORDER BY")," \u5b50\u53e5\u4e2d ",(0,l.kt)("strong",{parentName:"li"},"\u5fc5\u987b")," \u57fa\u4e8e\u952e\u8868\u8fbe\u5f0f\u8fdb\u884c\u8ba1\u7b97 ",(0,l.kt)("strong",{parentName:"li"},"\u6216")," \u4e0a ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/"},"\u805a\u5408\u51fd\u6570")," \u5728\u975e\u952e\u8868\u8fbe\u5f0f\uff08\u5305\u62ec\u7eaf\u5217\uff09\u4e0a\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u4ece\u8868\u4e2d\u9009\u62e9\u7684\u6bcf\u4e2a\u5217\u5fc5\u987b\u7528\u4e8e\u952e\u8868\u8fbe\u5f0f\u6216\u805a\u5408\u51fd\u6570\u5185\uff0c\u4f46\u4e0d\u80fd\u540c\u65f6\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u805a\u5408\u7ed3\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," \u67e5\u8be2\u5c06\u5305\u542b\u5c3d\u53ef\u80fd\u591a\u7684\u884c\uff0c\u56e0\u4e3a\u6709\u552f\u4e00\u503c \u201cgrouping key\u201d \u5728\u6e90\u8868\u4e2d\u3002 \u901a\u5e38\u8fd9\u4f1a\u663e\u7740\u51cf\u5c11\u884c\u6570\uff0c\u901a\u5e38\u662f\u6570\u91cf\u7ea7\uff0c\u4f46\u4e0d\u4e00\u5b9a\uff1a\u5982\u679c\u6240\u6709\u884c\u6570\u4fdd\u6301\u4e0d\u53d8 \u201cgrouping key\u201d \u503c\u662f\u4e0d\u540c\u7684\u3002")),(0,l.kt)("p",null,'!!! note "\u6ce8"\n\u8fd8\u6709\u4e00\u79cd\u989d\u5916\u7684\u65b9\u6cd5\u53ef\u4ee5\u5728\u8868\u4e0a\u8fd0\u884c\u805a\u5408\u3002 \u5982\u679c\u67e5\u8be2\u4ec5\u5728\u805a\u5408\u51fd\u6570\u4e2d\u5305\u542b\u8868\u5217\uff0c\u5219 ',(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u53ef\u4ee5\u7701\u7565\uff0c\u5e76\u4e14\u901a\u8fc7\u4e00\u4e2a\u7a7a\u7684\u952e\u96c6\u5408\u6765\u5047\u5b9a\u805a\u5408\u3002 \u8fd9\u6837\u7684\u67e5\u8be2\u603b\u662f\u53ea\u8fd4\u56de\u4e00\u884c\u3002"),(0,l.kt)("h2",{id:"null-processing"},"\u7a7a\u5904\u7406"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5206\u7ec4\uff0cClickHouse\u89e3\u91ca ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/syntax#null-literal"},"NULL")," \u4f5c\u4e3a\u4e00\u4e2a\u503c\uff0c\u5e76\u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL==NULL"),". \u5b83\u4e0d\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u5728\u5927\u591a\u6570\u5176\u4ed6\u4e0a\u4e0b\u6587\u4e2d\u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e\u8fd9\u610f\u5473\u7740\u4ec0\u4e48\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u4f60\u6709\u4e00\u5f20\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502    2 \u2502\n\u2502 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 3 \u2502    2 \u2502\n\u2502 3 \u2502    3 \u2502\n\u2502 3 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT sum(x), y FROM t_null_big GROUP BY y")," \u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sum(x)\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502      4 \u2502    2 \u2502\n\u2502      3 \u2502    3 \u2502\n\u2502      5 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u770b\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"y = NULL")," \u603b\u7ed3 ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c\u4eff\u4f5b ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u662f\u8fd9\u4e2a\u503c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u901a\u8fc7\u51e0\u4e2a\u952e ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\uff0c\u7ed3\u679c\u4f1a\u7ed9\u4f60\u9009\u62e9\u7684\u6240\u6709\u7ec4\u5408\uff0c\u5c31\u597d\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u662f\u4e00\u4e2a\u7279\u5b9a\u7684\u503c\u3002"),(0,l.kt)("h2",{id:"with-totals-modifier"},"WITH TOTAL \u4fee\u9970\u7b26"),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," \u88ab\u6307\u5b9a\uff0c\u5c06\u8ba1\u7b97\u53e6\u4e00\u884c\u3002 \u6b64\u884c\u5c06\u5177\u6709\u5305\u542b\u9ed8\u8ba4\u503c\uff08\u96f6\u6216\u7a7a\u884c\uff09\u7684\u5173\u952e\u5217\uff0c\u4ee5\u53ca\u5305\u542b\u8de8\u6240\u6709\u884c\u8ba1\u7b97\u503c\u7684\u805a\u5408\u51fd\u6570\u5217\uff08 \u201ctotal\u201d \u503c\uff09\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u989d\u5916\u7684\u884c\u4ec5\u4ea7\u751f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON*"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TabSeparated*"),"\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Pretty*")," \u683c\u5f0f\uff0c\u4e0e\u5176\u4ed6\u884c\u5206\u5f00:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"JSON*")," \u683c\u5f0f\uff0c\u8fd9\u4e00\u884c\u662f\u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u8f93\u51fa \u2018totals\u2019 \u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"TabSeparated*")," \u683c\u5f0f\uff0c\u8be5\u884c\u4f4d\u4e8e\u4e3b\u7ed3\u679c\u4e4b\u540e\uff0c\u524d\u9762\u6709\u4e00\u4e2a\u7a7a\u884c\uff08\u5728\u5176\u4ed6\u6570\u636e\u4e4b\u540e\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"Pretty*")," \u683c\u5f0f\u65f6\uff0c\u8be5\u884c\u5728\u4e3b\u7ed3\u679c\u4e4b\u540e\u4f5c\u4e3a\u5355\u72ec\u7684\u8868\u8f93\u51fa\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5176\u4ed6\u683c\u5f0f\u4e2d\uff0c\u5b83\u4e0d\u53ef\u7528\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," \u53ef\u4ee5\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u8fd0\u884c\u65f6 ",(0,l.kt)("a",{parentName:"p",href:"../../../sql-reference/statements/select/having"},"HAVING")," \u662f\u5b58\u5728\u7684\u3002 \u8be5\u884c\u4e3a\u53d6\u51b3\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"totals_mode")," \u8bbe\u7f6e\u3002"),(0,l.kt)("h3",{id:"configuring-totals-processing"},"\u914d\u7f6e\u603b\u548c\u5904\u7406"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, ",(0,l.kt)("inlineCode",{parentName:"p"},"totals_mode = 'before_having'"),". \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b, \u2018totals\u2019 \u662f\u8de8\u6240\u6709\u884c\u8ba1\u7b97\uff0c\u5305\u62ec\u90a3\u4e9b\u4e0d\u901a\u8fc7\u5177\u6709\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by"),"."),(0,l.kt)("p",null,"\u5176\u4ed6\u66ff\u4ee3\u65b9\u6848\u4ec5\u5305\u62ec\u901a\u8fc7\u5177\u6709\u5728 \u2018totals\u2019\uff0c\u5e76\u4e0e\u8bbe\u7f6e\u4e0d\u540c\u7684\u884c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"group_by_overflow_mode = 'any'"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"after_having_exclusive")," \u2013 Don't include rows that didn't pass through ",(0,l.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by"),". \u6362\u53e5\u8bdd\u8bf4, \u2018totals\u2019 \u5c06\u6709\u5c11\u4e8e\u6216\u76f8\u540c\u6570\u91cf\u7684\u884c\uff0c\u56e0\u4e3a\u5b83\u4f1a ",(0,l.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," \u88ab\u7701\u7565\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"after_having_inclusive")," \u2013 Include all the rows that didn't pass through \u2018max_rows_to_group_by\u2019 \u5728 \u2018totals\u2019. \u6362\u53e5\u8bdd\u8bf4, \u2018totals\u2019 \u5c06\u6709\u591a\u4e2a\u6216\u76f8\u540c\u6570\u91cf\u7684\u884c\uff0c\u56e0\u4e3a\u5b83\u4f1a ",(0,l.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," \u88ab\u7701\u7565\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"after_having_auto")," \u2013 Count the number of rows that passed through HAVING. If it is more than a certain amount (by default, 50%), include all the rows that didn't pass through \u2018max_rows_to_group_by\u2019 \u5728 \u2018totals\u2019. \u5426\u5219\uff0c\u4e0d\u5305\u62ec\u5b83\u4eec\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"totals_auto_threshold")," \u2013 By default, 0.5. The coefficient for ",(0,l.kt)("inlineCode",{parentName:"p"},"after_having_auto"),"."),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"max_rows_to_group_by")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"group_by_overflow_mode = 'any'")," \u4e0d\u4f7f\u7528\uff0c\u6240\u6709\u7684\u53d8\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"after_having")," \u662f\u76f8\u540c\u7684\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\uff08\u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"after_having_auto"),")."),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH TOTALS")," \u5728\u5b50\u67e5\u8be2\u4e2d\uff0c\u5305\u62ec\u5728\u5b50\u67e5\u8be2 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/join"},"JOIN")," \u5b50\u53e5\uff08\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c06\u5404\u81ea\u7684\u603b\u503c\u5408\u5e76\uff09\u3002"),(0,l.kt)("h2",{id:"examples"},"\u4f8b\u5b50"),(0,l.kt)("p",null,"\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    count(),\n    median(FetchTiming > 60 ? 60 : FetchTiming),\n    count() - sum(Refresh)\nFROM hits\n")),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u4e0e\u6807\u51c6SQL\u76f8\u6bd4\uff0c\u5982\u679c\u8868\u6ca1\u6709\u4efb\u4f55\u884c\uff08\u6839\u672c\u6ca1\u6709\u4efb\u4f55\u884c\uff0c\u6216\u8005\u4f7f\u7528 WHERE \u8fc7\u6ee4\u4e4b\u540e\u6ca1\u6709\u4efb\u4f55\u884c\uff09\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u7ed3\u679c\uff0c\u800c\u4e0d\u662f\u6765\u81ea\u5305\u542b\u805a\u5408\u51fd\u6570\u521d\u59cb\u503c\u7684\u884c\u3002"),(0,l.kt)("p",null,"\u76f8\u5bf9\u4e8eMySQL\uff08\u5e76\u4e14\u7b26\u5408\u6807\u51c6SQL\uff09\uff0c\u60a8\u65e0\u6cd5\u83b7\u53d6\u4e0d\u5728\u952e\u6216\u805a\u5408\u51fd\u6570\uff08\u5e38\u91cf\u8868\u8fbe\u5f0f\u9664\u5916\uff09\u4e2d\u7684\u67d0\u4e9b\u5217\u7684\u67d0\u4e9b\u503c\u3002 \u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 \u2018any\u2019 \u805a\u5408\u51fd\u6570\uff08\u83b7\u53d6\u7b2c\u4e00\u4e2a\u9047\u5230\u7684\u503c\uff09\u6216 \u2018min/max\u2019."),(0,l.kt)("p",null,"\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    domainWithoutWWW(URL) AS domain,\n    count(),\n    any(Title) AS title -- getting the first occurred page header for each domain.\nFROM hits\nGROUP BY domain\n")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u9047\u5230\u7684\u6bcf\u4e2a\u4e0d\u540c\u7684\u952e\u503c, ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u8ba1\u7b97\u4e00\u7ec4\u805a\u5408\u51fd\u6570\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u4e0d\u652f\u6301\u6570\u7ec4\u5217\u3002"),(0,l.kt)("p",null,"\u4e0d\u80fd\u5c06\u5e38\u91cf\u6307\u5b9a\u4e3a\u805a\u5408\u51fd\u6570\u7684\u53c2\u6570\u3002 \u793a\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"p"},"sum(1)"),". \u76f8\u53cd\uff0c\u4f60\u53ef\u4ee5\u6446\u8131\u5e38\u6570\u3002 \u793a\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"p"},"count()"),"."),(0,l.kt)("h2",{id:"implementation-details"},"\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("p",null,"\u805a\u5408\u662f\u9762\u5411\u5217\u7684 DBMS \u6700\u91cd\u8981\u7684\u529f\u80fd\u4e4b\u4e00\uff0c\u56e0\u6b64\u5b83\u7684\u5b9e\u73b0\u662fClickHouse\u4e2d\u6700\u4f18\u5316\u7684\u90e8\u5206\u4e4b\u4e00\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u805a\u5408\u4f7f\u7528\u54c8\u5e0c\u8868\u5728\u5185\u5b58\u4e2d\u5b8c\u6210\u3002 \u5b83\u6709 40+ \u7684\u7279\u6b8a\u5316\u81ea\u52a8\u9009\u62e9\u53d6\u51b3\u4e8e \u201cgrouping key\u201d \u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"select-group-by-in-external-memory"},"\u5728\u5916\u90e8\u5b58\u50a8\u5668\u4e2d\u5206\u7ec4"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u542f\u7528\u5c06\u4e34\u65f6\u6570\u636e\u8f6c\u50a8\u5230\u78c1\u76d8\u4ee5\u9650\u5236\u5185\u5b58\u4f7f\u7528\u671f\u95f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY"),".\n\u8be5 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/query-complexity#settings-max_bytes_before_external_group_by"},"max_bytes_before_external_group_by")," \u8bbe\u7f6e\u786e\u5b9a\u503e\u9500\u7684\u9608\u503cRAM\u6d88\u8017 ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u4e34\u65f6\u6570\u636e\u5230\u6587\u4ef6\u7cfb\u7edf\u3002 \u5982\u679c\u8bbe\u7f6e\u4e3a0\uff08\u9ed8\u8ba4\u503c\uff09\uff0c\u5b83\u5c06\u88ab\u7981\u7528\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by"),"\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," \u5927\u7ea6\u4e24\u500d\u9ad8\u3002 \u8fd9\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u805a\u5408\u6709\u4e24\u4e2a\u9636\u6bb5\uff1a\u8bfb\u53d6\u6570\u636e\u548c\u5f62\u6210\u4e2d\u95f4\u6570\u636e\uff081\uff09\u548c\u5408\u5e76\u4e2d\u95f4\u6570\u636e\uff082\uff09\u3002 \u5c06\u6570\u636e\u8f6c\u50a8\u5230\u6587\u4ef6\u7cfb\u7edf\u53ea\u80fd\u5728\u9636\u6bb51\u4e2d\u53d1\u751f\u3002 \u5982\u679c\u672a\u8f6c\u50a8\u4e34\u65f6\u6570\u636e\uff0c\u5219\u9636\u6bb52\u53ef\u80fd\u9700\u8981\u4e0e\u9636\u6bb51\u76f8\u540c\u7684\u5185\u5b58\u91cf\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/query-complexity#settings_max_memory_usage"},"max_memory_usage")," \u8bbe\u7f6e\u4e3a10000000000\uff0c\u4f60\u60f3\u4f7f\u7528\u5916\u90e8\u805a\u5408\uff0c\u8fd9\u662f\u6709\u610f\u4e49\u7684\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by")," \u523010000000000\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," \u523020000000000\u3002 \u5f53\u89e6\u53d1\u5916\u90e8\u805a\u5408\uff08\u5982\u679c\u81f3\u5c11\u6709\u4e00\u4e2a\u4e34\u65f6\u6570\u636e\u8f6c\u50a8\uff09\u65f6\uff0cRAM\u7684\u6700\u5927\u6d88\u8017\u4ec5\u7565\u9ad8\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by"),"."),(0,l.kt)("p",null,"\u901a\u8fc7\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\uff0c\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u6267\u884c\u5916\u90e8\u805a\u5408\u3002 \u4e3a\u4e86\u4f7f\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u53ea\u4f7f\u7528\u5c11\u91cf\u7684RAM\uff0c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"distributed_aggregation_memory_efficient")," \u52301\u3002"),(0,l.kt)("p",null,"\u5f53\u5408\u5e76\u6570\u636e\u5237\u65b0\u5230\u78c1\u76d8\u65f6\uff0c\u4ee5\u53ca\u5f53\u5408\u5e76\u6765\u81ea\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u7ed3\u679c\u65f6\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"distributed_aggregation_memory_efficient")," \u8bbe\u7f6e\u88ab\u542f\u7528\uff0c\u6d88\u8017\u9ad8\u8fbe ",(0,l.kt)("inlineCode",{parentName:"p"},"1/256 * the_number_of_threads")," \u4eceRAM\u7684\u603b\u91cf\u3002"),(0,l.kt)("p",null,"\u5f53\u542f\u7528\u5916\u90e8\u805a\u5408\u65f6\uff0c\u5982\u679c\u6570\u636e\u91cf\u5c0f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_group_by")," (\u4f8b\u5982\u6570\u636e\u6ca1\u6709\u88ab flushed), \u67e5\u8be2\u6267\u884c\u901f\u5ea6\u548c\u4e0d\u5728\u5916\u90e8\u805a\u5408\u7684\u901f\u5ea6\u4e00\u6837\u5feb. \u5982\u679c\u4e34\u65f6\u6570\u636e\u88abflushed\u5230\u5916\u90e8\u5b58\u50a8, \u6267\u884c\u7684\u901f\u5ea6\u4f1a\u6162\u51e0\u500d (\u5927\u6982\u662f\u4e09\u500d)."),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/order-by"},"ORDER BY")," \u7528\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/limit"},"LIMIT")," \u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\uff0c\u7136\u540e\u4f7f\u7528\u7684RAM\u7684\u91cf\u53d6\u51b3\u4e8e\u6570\u636e\u7684\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\uff0c\u4e0d\u662f\u5728\u6574\u4e2a\u8868\u3002 \u4f46\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\uff0c\u4e0d\u8981\u5fd8\u8bb0\u542f\u7528\u5916\u90e8\u6392\u5e8f (",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort"),")."))}d.isMDXComponent=!0}}]);