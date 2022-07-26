"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[14230],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),N=s(n),k=a,d=N["".concat(i,".").concat(k)]||N[k]||c[k]||l;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=N;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},73829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p=["components"],o={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},i="IN \u64cd\u4f5c\u7b26",s={unversionedId:"zh/sql-reference/operators/in",id:"zh/sql-reference/operators/in",title:"IN \u64cd\u4f5c\u7b26",description:"select-in-operators}",source:"@site/docs/zh/sql-reference/operators/in.md",sourceDirName:"zh/sql-reference/operators",slug:"/zh/sql-reference/operators/in",permalink:"/docs-gh-pages/up/zh/sql-reference/operators/in",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/operators/in.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"\u64cd\u4f5c\u7b26",permalink:"/docs-gh-pages/up/zh/sql-reference/operators/"},next:{title:"ClickHouse\u6307\u5357",permalink:"/docs-gh-pages/up/zh/guides/"}},u={},c=[{value:"\u7a7a\u5904\u7406",id:"in-null-processing",level:2},{value:"\u5206\u5e03\u5f0f\u5b50\u67e5\u8be2",id:"select-distributed-subqueries",level:2}],N={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-in-operators"},"IN \u64cd\u4f5c\u7b26"),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"IN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NOT IN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL IN"),"\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL NOT IN")," \u8fd0\u7b97\u7b26\u662f\u5355\u72ec\u8003\u8651\u7684\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u529f\u80fd\u76f8\u5f53\u4e30\u5bcc\u3002"),(0,l.kt)("p",null,"\u8fd0\u7b97\u7b26\u7684\u5de6\u4fa7\u662f\u5355\u5217\u6216\u5143\u7ec4\u3002"),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT UserID IN (123, 456) FROM ...\nSELECT (CounterID, UserID) IN ((34, 123), (101500, 456)) FROM ...\n")),(0,l.kt)("p",null,"\u5982\u679c\u5de6\u4fa7\u662f\u7d22\u5f15\u4e2d\u7684\u5355\u5217\uff0c\u800c\u53f3\u4fa7\u662f\u4e00\u7ec4\u5e38\u91cf\uff0c\u5219\u7cfb\u7edf\u5c06\u4f7f\u7528\u7d22\u5f15\u5904\u7406\u67e5\u8be2\u3002"),(0,l.kt)("p",null,"\u8bf7\u4e0d\u8981\u5217\u4e3e\u592a\u591a\u5177\u4f53\u7684\u5e38\u91cf (\u6bd4\u65b9\u8bf4 \u51e0\u767e\u4e07\u6761)\u3002\u5982\u679c\u6570\u636e\u96c6\u975e\u5e38\u5927\uff0c\u8bf7\u628a\u5b83\u653e\u5728\u4e00\u5f20\u4e34\u65f6\u8868\u91cc\uff08\u4f8b\u5982\uff0c\u53c2\u8003\u7ae0\u8282",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/engines/table-engines/special/external-data"},"\u7528\u4e8e\u67e5\u8be2\u5904\u7406\u7684\u5916\u90e8\u6570\u636e"),"\uff09\uff0c\u7136\u540e\u4f7f\u7528\u5b50\u67e5\u8be2\u3002"),(0,l.kt)("p",null,"\u8fd0\u7b97\u7b26\u7684\u53f3\u4fa7\u53ef\u4ee5\u662f\u4e00\u7ec4\u5e38\u91cf\u8868\u8fbe\u5f0f\u3001\u4e00\u7ec4\u5e26\u6709\u5e38\u91cf\u8868\u8fbe\u5f0f\u7684\u5143\u7ec4\uff08\u5982\u4e0a\u9762\u7684\u793a\u4f8b\u6240\u793a\uff09\uff0c\u6216\u62ec\u53f7\u4e2d\u7684\u6570\u636e\u5e93\u8868\u6216SELECT\u5b50\u67e5\u8be2\u7684\u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8fd0\u7b97\u7b26\u7684\u53f3\u4fa7\u662f\u8868\u7684\u540d\u79f0\uff08\u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"UserID IN users"),"\uff09\uff0c\u8fd9\u76f8\u5f53\u4e8e\u5b50\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"UserID IN (SELECT * FROM users)"),". \u4f7f\u7528\u4e0e\u67e5\u8be2\u4e00\u8d77\u53d1\u9001\u7684\u5916\u90e8\u6570\u636e\u65f6\uff0c\u8bf7\u4f7f\u7528\u6b64\u9009\u9879\u3002 \u4f8b\u5982\uff0c\u67e5\u8be2\u53ef\u4ee5\u4e0e\u4e00\u7ec4\u7528\u6237Id\u4e00\u8d77\u53d1\u9001\u5230 \u2018users\u2019 \u5e94\u8fc7\u6ee4\u7684\u4e34\u65f6\u8868\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8fd0\u7b97\u7b26\u7684\u53f3\u4fa7\u662f\u5177\u6709Set\u5f15\u64ce\u7684\u8868\u540d\uff08\u59cb\u7ec8\u4f4d\u4e8eRAM\u4e2d\u7684\u51c6\u5907\u597d\u7684\u6570\u636e\u96c6\uff09\uff0c\u5219\u4e0d\u4f1a\u4e3a\u6bcf\u4e2a\u67e5\u8be2\u91cd\u65b0\u521b\u5efa\u6570\u636e\u96c6\u3002"),(0,l.kt)("p",null,"\u5b50\u67e5\u8be2\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u7528\u4e8e\u7b5b\u9009\u5143\u7ec4\u7684\u5217\u3002\n\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (CounterID, UserID) IN (SELECT CounterID, UserID FROM ...) FROM ...\n")),(0,l.kt)("p",null,"IN\u8fd0\u7b97\u7b26\u5de6\u4fa7\u548c\u53f3\u4fa7\u7684\u5217\u5e94\u5177\u6709\u76f8\u540c\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"IN\u8fd0\u7b97\u7b26\u548c\u5b50\u67e5\u8be2\u53ef\u80fd\u51fa\u73b0\u5728\u67e5\u8be2\u7684\u4efb\u4f55\u90e8\u5206\uff0c\u5305\u62ec\u805a\u5408\u51fd\u6570\u548clambda\u51fd\u6570\u3002\n\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    EventDate,\n    avg(UserID IN\n    (\n        SELECT UserID\n        FROM test.hits\n        WHERE EventDate = toDate('2014-03-17')\n    )) AS ratio\nFROM test.hits\nGROUP BY EventDate\nORDER BY EventDate ASC\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500EventDate\u2500\u252c\u2500\u2500\u2500\u2500ratio\u2500\u2510\n\u2502 2014-03-17 \u2502        1 \u2502\n\u2502 2014-03-18 \u2502 0.807696 \u2502\n\u2502 2014-03-19 \u2502 0.755406 \u2502\n\u2502 2014-03-20 \u2502 0.723218 \u2502\n\u2502 2014-03-21 \u2502 0.697021 \u2502\n\u2502 2014-03-22 \u2502 0.647851 \u2502\n\u2502 2014-03-23 \u2502 0.648416 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5bf9\u4e8e3\u670817\u65e5\u540e\u7684\u6bcf\u4e00\u5929\uff0c\u8ba1\u7b973\u670817\u65e5\u8bbf\u95ee\u8be5\u7f51\u7ad9\u7684\u7528\u6237\u6240\u505a\u7684\u6d4f\u89c8\u91cf\u767e\u5206\u6bd4\u3002\nIN\u5b50\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\u59cb\u7ec8\u53ea\u5728\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u4e00\u6b21\u3002 \u6ca1\u6709\u4f9d\u8d56\u5b50\u67e5\u8be2\u3002"),(0,l.kt)("h2",{id:"in-null-processing"},"\u7a7a\u5904\u7406"),(0,l.kt)("p",null,"\u5728\u8bf7\u6c42\u5904\u7406\u8fc7\u7a0b\u4e2d\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"IN")," \u8fd0\u7b97\u7b26\u5047\u5b9a\u8fd0\u7b97\u7684\u7ed3\u679c ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/syntax#null-literal"},"NULL")," \u603b\u662f\u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u65e0\u8bba\u662f\u5426 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u4f4d\u4e8e\u64cd\u4f5c\u5458\u7684\u53f3\u4fa7\u6216\u5de6\u4fa7\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u503c\u4e0d\u5305\u542b\u5728\u4efb\u4f55\u6570\u636e\u96c6\u4e2d\uff0c\u5f7c\u6b64\u4e0d\u5bf9\u5e94\uff0c\u5e76\u4e14\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u65e0\u6cd5\u8fdb\u884c\u6bd4\u8f83 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/settings#transform_null_in"},"transform_null_in=0"),"."),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50 ",(0,l.kt)("inlineCode",{parentName:"p"},"t_null")," \u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u8fd0\u884c\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT x FROM t_null WHERE y IN (NULL,3)")," \u4e3a\u60a8\u63d0\u4f9b\u4ee5\u4e0b\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u5176\u4e2d\u7684\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"y = NULL")," \u88ab\u629b\u51fa\u7684\u67e5\u8be2\u7ed3\u679c\u3002 \u8fd9\u662f\u56e0\u4e3aClickHouse\u65e0\u6cd5\u51b3\u5b9a\u662f\u5426 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u5305\u542b\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"(NULL,3)")," \u8bbe\u7f6e\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," \u4f5c\u4e3a\u64cd\u4f5c\u7684\u7ed3\u679c\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u4ece\u6700\u7ec8\u8f93\u51fa\u4e2d\u6392\u9664\u6b64\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT y IN (NULL, 3)\nFROM t_null\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500in(y, tuple(NULL, 3))\u2500\u2510\n\u2502                     0 \u2502\n\u2502                     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"select-distributed-subqueries"},"\u5206\u5e03\u5f0f\u5b50\u67e5\u8be2"),(0,l.kt)("p",null,"\u5e26\u5b50\u67e5\u8be2\u7684IN-s\u6709\u4e24\u4e2a\u9009\u9879\uff08\u7c7b\u4f3c\u4e8e\u8fde\u63a5\uff09\uff1anormal ",(0,l.kt)("inlineCode",{parentName:"p"},"IN")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL JOIN"),". \u5b83\u4eec\u5728\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\u7684\u8fd0\u884c\u65b9\u5f0f\u4e0a\u6709\u6240\u4e0d\u540c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':::info "\u6ce8\u610f"\n\u8bf7\u8bb0\u4f4f\uff0c\u4e0b\u9762\u63cf\u8ff0\u7684\u7b97\u6cd5\u53ef\u80fd\u4f1a\u6709\u4e0d\u540c\u7684\u5de5\u4f5c\u65b9\u5f0f\u53d6\u51b3\u4e8e [\u8bbe\u7f6e](/docs-gh-pages/up/zh/operations/settings/settings) `distributed_product_mode` \u8bbe\u7f6e\u3002\n')),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528\u5e38\u89c4IN\u65f6\uff0c\u67e5\u8be2\u88ab\u53d1\u9001\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u5e76\u4e14\u5b83\u4eec\u4e2d\u7684\u6bcf\u4e2a\u670d\u52a1\u5668\u90fd\u5728\u8fd0\u884c\u5b50\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"IN")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u6761\u6b3e"),(0,l.kt)("p",null,"\u4f7f\u7528\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL JOINs"),"\uff0c\u9996\u5148\u6240\u6709\u7684\u5b50\u67e5\u8be2\u90fd\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL JOINs"),"\uff0c\u5e76\u5c06\u7ed3\u679c\u6536\u96c6\u5728\u4e34\u65f6\u8868\u4e2d\u3002 \u7136\u540e\u5c06\u4e34\u65f6\u8868\u53d1\u9001\u5230\u6bcf\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u5176\u4e2d\u4f7f\u7528\u6b64\u4e34\u65f6\u6570\u636e\u8fd0\u884c\u67e5\u8be2\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u975e\u5206\u5e03\u5f0f\u67e5\u8be2\uff0c\u8bf7\u4f7f\u7528\u5e38\u89c4 ",(0,l.kt)("inlineCode",{parentName:"p"},"IN")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN"),"."),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u5b50\u67e5\u8be2\u65f6\u8981\u5c0f\u5fc3 ",(0,l.kt)("inlineCode",{parentName:"p"},"IN")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u7528\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\u7684\u5b50\u53e5\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u770b\u4e00\u4e9b\u4f8b\u5b50\u3002 \u5047\u8bbe\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u670d\u52a1\u5668\u90fd\u6709\u4e00\u4e2a\u6b63\u5e38\u7684 ",(0,l.kt)("strong",{parentName:"p"},"local_table"),". \u6bcf\u4e2a\u670d\u52a1\u5668\u8fd8\u5177\u6709 ",(0,l.kt)("strong",{parentName:"p"},"distributed_table")," \u8868\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u5206\u5e03")," \u7c7b\u578b\uff0c\u5b83\u67e5\u770b\u7fa4\u96c6\u4e2d\u7684\u6240\u6709\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u67e5\u8be2 ",(0,l.kt)("strong",{parentName:"p"},"distributed_table"),"\uff0c\u67e5\u8be2\u5c06\u88ab\u53d1\u9001\u5230\u6240\u6709\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728\u5176\u4e0a\u8fd0\u884c ",(0,l.kt)("strong",{parentName:"p"},"local_table"),"."),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM distributed_table\n")),(0,l.kt)("p",null,"\u5c06\u88ab\u53d1\u9001\u5230\u6240\u6709\u8fdc\u7a0b\u670d\u52a1\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM local_table\n")),(0,l.kt)("p",null,"\u5e76\u4e14\u5e76\u884c\u8fd0\u884c\u5b83\u4eec\u4e2d\u7684\u6bcf\u4e00\u4e2a\uff0c\u76f4\u5230\u8fbe\u5230\u53ef\u4ee5\u7ed3\u5408\u4e2d\u95f4\u7ed3\u679c\u7684\u9636\u6bb5\u3002 \u7136\u540e\u5c06\u4e2d\u95f4\u7ed3\u679c\u8fd4\u56de\u7ed9\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u5e76\u5728\u5176\u4e0a\u5408\u5e76\uff0c\u5e76\u5c06\u6700\u7ec8\u7ed3\u679c\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u68c0\u67e5\u4e00\u4e2a\u67e5\u8be2IN:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM distributed_table WHERE CounterID = 101500 AND UserID IN (SELECT UserID FROM local_table WHERE CounterID = 34)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u4e24\u4e2a\u7f51\u7ad9\u7684\u53d7\u4f17\u7684\u4ea4\u96c6\u3002")),(0,l.kt)("p",null,"\u6b64\u67e5\u8be2\u5c06\u4ee5\u4e0b\u5217\u65b9\u5f0f\u53d1\u9001\u5230\u6240\u6709\u8fdc\u7a0b\u670d\u52a1\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM local_table WHERE CounterID = 101500 AND UserID IN (SELECT UserID FROM local_table WHERE CounterID = 34)\n")),(0,l.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0cIN\u5b50\u53e5\u4e2d\u7684\u6570\u636e\u96c6\u5c06\u5728\u6bcf\u53f0\u670d\u52a1\u5668\u4e0a\u72ec\u7acb\u6536\u96c6\uff0c\u4ec5\u5728\u6bcf\u53f0\u670d\u52a1\u5668\u4e0a\u672c\u5730\u5b58\u50a8\u7684\u6570\u636e\u4e2d\u6536\u96c6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u4e3a\u6b64\u60c5\u51b5\u505a\u597d\u51c6\u5907\uff0c\u5e76\u4e14\u5df2\u7ecf\u5c06\u6570\u636e\u5206\u6563\u5230\u7fa4\u96c6\u670d\u52a1\u5668\u4e0a\uff0c\u4ee5\u4fbf\u5355\u4e2a\u7528\u6237Id\u7684\u6570\u636e\u5b8c\u5168\u9a7b\u7559\u5728\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\uff0c\u5219\u8fd9\u5c06\u6b63\u5e38\u548c\u6700\u4f73\u5730\u5de5\u4f5c\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u5fc5\u8981\u7684\u6570\u636e\u5c06\u5728\u6bcf\u53f0\u670d\u52a1\u5668\u4e0a\u672c\u5730\u63d0\u4f9b\u3002 \u5426\u5219\uff0c\u7ed3\u679c\u5c06\u662f\u4e0d\u51c6\u786e\u7684\u3002 \u6211\u4eec\u5c06\u67e5\u8be2\u7684\u8fd9\u79cd\u53d8\u4f53\u79f0\u4e3a \u201clocal IN\u201d."),(0,l.kt)("p",null,"\u82e5\u8981\u66f4\u6b63\u6570\u636e\u5728\u7fa4\u96c6\u670d\u52a1\u5668\u4e0a\u968f\u673a\u4f20\u64ad\u65f6\u67e5\u8be2\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u53ef\u4ee5\u6307\u5b9a ",(0,l.kt)("strong",{parentName:"p"},"distributed_table")," \u5728\u5b50\u67e5\u8be2\u4e2d\u3002 \u67e5\u8be2\u5982\u4e0b\u6240\u793a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM distributed_table WHERE CounterID = 101500 AND UserID IN (SELECT UserID FROM distributed_table WHERE CounterID = 34)\n")),(0,l.kt)("p",null,"\u6b64\u67e5\u8be2\u5c06\u4ee5\u4e0b\u5217\u65b9\u5f0f\u53d1\u9001\u5230\u6240\u6709\u8fdc\u7a0b\u670d\u52a1\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM local_table WHERE CounterID = 101500 AND UserID IN (SELECT UserID FROM distributed_table WHERE CounterID = 34)\n")),(0,l.kt)("p",null,"\u5b50\u67e5\u8be2\u5c06\u5f00\u59cb\u5728\u6bcf\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u3002 \u7531\u4e8e\u5b50\u67e5\u8be2\u4f7f\u7528\u5206\u5e03\u5f0f\u8868\uff0c\u56e0\u6b64\u6bcf\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u5b50\u67e5\u8be2\u5c06\u91cd\u65b0\u53d1\u9001\u5230\u6bcf\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT UserID FROM local_table WHERE CounterID = 34\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u6709100\u53f0\u670d\u52a1\u5668\u7684\u96c6\u7fa4\uff0c\u5219\u6267\u884c\u6574\u4e2a\u67e5\u8be2\u5c06\u9700\u898110,000\u4e2a\u57fa\u672c\u8bf7\u6c42\uff0c\u8fd9\u901a\u5e38\u88ab\u8ba4\u4e3a\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5e94\u59cb\u7ec8\u4f7f\u7528GLOBAL IN\u800c\u4e0d\u662fIN\u3002 \u8ba9\u6211\u4eec\u6765\u770b\u770b\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM distributed_table WHERE CounterID = 101500 AND UserID GLOBAL IN (SELECT UserID FROM distributed_table WHERE CounterID = 34)\n")),(0,l.kt)("p",null,"\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u5c06\u8fd0\u884c\u5b50\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT UserID FROM distributed_table WHERE CounterID = 34\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u5c06\u88ab\u653e\u5728RAM\u4e2d\u7684\u4e34\u65f6\u8868\u4e2d\u3002 \u7136\u540e\u8bf7\u6c42\u5c06\u88ab\u53d1\u9001\u5230\u6bcf\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM local_table WHERE CounterID = 101500 AND UserID GLOBAL IN _data1\n")),(0,l.kt)("p",null,"\u548c\u4e34\u65f6\u8868 ",(0,l.kt)("inlineCode",{parentName:"p"},"_data1")," \u5c06\u901a\u8fc7\u67e5\u8be2\u53d1\u9001\u5230\u6bcf\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\uff08\u4e34\u65f6\u8868\u7684\u540d\u79f0\u662f\u5b9e\u73b0\u5b9a\u4e49\u7684\uff09\u3002"),(0,l.kt)("p",null,"\u8fd9\u6bd4\u4f7f\u7528\u6b63\u5e38IN\u66f4\u4f18\u5316\u3002 \u4f46\u662f\uff0c\u8bf7\u8bb0\u4f4f\u4ee5\u4e0b\u51e0\u70b9:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e34\u65f6\u8868\u65f6\uff0c\u6570\u636e\u4e0d\u662f\u552f\u4e00\u7684\u3002 \u8981\u51cf\u5c11\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u7684\u6570\u636e\u91cf\uff0c\u8bf7\u5728\u5b50\u67e5\u8be2\u4e2d\u6307\u5b9aDISTINCT\u3002 \uff08\u4f60\u4e0d\u9700\u8981\u4e3a\u6b63\u5e38\u4eba\u505a\u8fd9\u4e2a\u3002)"),(0,l.kt)("li",{parentName:"ol"},"\u4e34\u65f6\u8868\u5c06\u88ab\u53d1\u9001\u5230\u6240\u6709\u8fdc\u7a0b\u670d\u52a1\u5668\u3002 \u4f20\u8f93\u4e0d\u8003\u8651\u7f51\u7edc\u62d3\u6251\u3002 \u4f8b\u5982\uff0c\u5982\u679c10\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\u9a7b\u7559\u5728\u4e0e\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u975e\u5e38\u8fdc\u7a0b\u7684\u6570\u636e\u4e2d\u5fc3\u4e2d\uff0c\u5219\u6570\u636e\u5c06\u901a\u8fc7\u901a\u9053\u53d1\u900110\u6b21\u5230\u8fdc\u7a0b\u6570\u636e\u4e2d\u5fc3\u3002 \u4f7f\u7528GLOBAL IN\u65f6\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u5927\u578b\u6570\u636e\u96c6\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u6570\u636e\u4f20\u8f93\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u65f6\uff0c\u65e0\u6cd5\u914d\u7f6e\u7f51\u7edc\u5e26\u5bbd\u9650\u5236\u3002 \u60a8\u53ef\u80fd\u4f1a\u4f7f\u7f51\u7edc\u8fc7\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c1d\u8bd5\u8de8\u670d\u52a1\u5668\u5206\u53d1\u6570\u636e\uff0c\u4ee5\u4fbf\u60a8\u4e0d\u9700\u8981\u5b9a\u671f\u4f7f\u7528GLOBAL IN\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u9700\u8981\u7ecf\u5e38\u4f7f\u7528GLOBAL IN\uff0c\u8bf7\u89c4\u5212ClickHouse\u96c6\u7fa4\u7684\u4f4d\u7f6e\uff0c\u4ee5\u4fbf\u5355\u4e2a\u526f\u672c\u7ec4\u9a7b\u7559\u5728\u4e0d\u8d85\u8fc7\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u4e2d\uff0c\u5e76\u4e14\u5b83\u4eec\u4e4b\u95f4\u5177\u6709\u5feb\u901f\u7f51\u7edc\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5b8c\u5168\u5728\u5355\u4e2a\u6570\u636e\u4e2d\u5fc3\u5185\u5904\u7406\u67e5\u8be2\u3002")),(0,l.kt)("p",null,"\u8fd9\u4e5f\u662f\u6709\u610f\u4e49\u7684\uff0c\u5728\u6307\u5b9a\u4e00\u4e2a\u672c\u5730\u8868 ",(0,l.kt)("inlineCode",{parentName:"p"},"GLOBAL IN")," \u5b50\u53e5\uff0c\u4ee5\u9632\u6b64\u672c\u5730\u8868\u4ec5\u5728\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u4e0a\u53ef\u7528\uff0c\u5e76\u4e14\u60a8\u5e0c\u671b\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u4f7f\u7528\u6765\u81ea\u5b83\u7684\u6570\u636e\u3002"))}k.isMDXComponent=!0}}]);