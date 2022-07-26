"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[6404],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_label:"LIMIT BY"},o="LIMIT BY\u5b50\u53e5",p={unversionedId:"zh/sql-reference/statements/select/limit-by",id:"zh/sql-reference/statements/select/limit-by",title:"LIMIT BY\u5b50\u53e5",description:"limit-by-clause}",source:"@site/docs/zh/sql-reference/statements/select/limit-by.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/limit-by",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/limit-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/limit-by.md",tags:[],version:"current",frontMatter:{sidebar_label:"LIMIT BY"},sidebar:"chinese",previous:{title:"JOIN",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/join"},next:{title:"LIMIT",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/limit"}},c={},u=[{value:"\u4f8b",id:"examples",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"limit-by-clause"},"LIMIT BY\u5b50\u53e5"),(0,l.kt)("p",null,"\u4e0e\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n BY expressions")," \u5b50\u53e5\u9009\u62e9\u7b2c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u6bcf\u4e2a\u4e0d\u540c\u503c\u7684\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"expressions"),".  ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," \u53ef\u4ee5\u5305\u542b\u4efb\u610f\u6570\u91cf\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"."),(0,l.kt)("p",null,"ClickHouse\u652f\u6301\u4ee5\u4e0b\u8bed\u6cd5\u53d8\u4f53:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LIMIT [offset_value, ]n BY expressions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LIMIT n OFFSET offset_value BY expressions"))),(0,l.kt)("p",null,"\u5728\u8fdb\u884c\u67e5\u8be2\u5904\u7406\u65f6\uff0cClickHouse\u9009\u62e9\u6309\u6392\u5e8f\u952e\u6392\u5e8f\u7684\u6570\u636e\u3002\u6392\u5e8f\u952e\u8bbe\u7f6e\u663e\u5f0f\u5730\u4f7f\u7528\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY"),"\u6761\u6b3e\u6216\u9690\u5f0f\u5c5e\u6027\u8868\u7684\u5f15\u64ce(\u884c\u987a\u5e8f\u53ea\u662f\u4fdd\u8bc1\u5728\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY"),",\u5426\u5219\u4e0d\u4f1a\u547d\u4ee4\u884c\u5757\u7531\u4e8e\u591a\u7ebf\u7a0b)\u3002\u7136\u540eClickHouse\u5e94\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n BY \u8868\u8fbe\u5f0f"),"\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u4e0d\u540c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u8868\u8fbe\u5f0f"),"\u7ec4\u5408\u8fd4\u56de\u524dn\u884c\u3002\u5982\u679c\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"OFFSET"),"\uff0c\u90a3\u4e48\u5bf9\u4e8e\u6bcf\u4e2a\u5c5e\u4e8e\u4e0d\u540c",(0,l.kt)("inlineCode",{parentName:"p"},"\u8868\u8fbe\u5f0f"),"\u7ec4\u5408\u7684\u6570\u636e\u5757\uff0cClickHouse\u5c06\u8df3\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"offset_value"),"\u4ece\u5757\u5f00\u59cb\u7684\u884c\u6570\uff0c\u5e76\u6700\u7ec8\u8fd4\u56de\u6700\u591a",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u884c\u7684\u7ed3\u679c\u3002\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"offset_value"),"\u5927\u4e8e\u6570\u636e\u5757\u4e2d\u7684\u884c\u6570\uff0c\u5219ClickHouse\u4ece\u6570\u636e\u5757\u4e2d\u8fd4\u56de\u96f6\u884c\u3002"),(0,l.kt)("p",null,'!!! note "\u6ce8"\n',(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," \u662f\u4e0d\u76f8\u5173\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/limit"},"LIMIT"),". \u5b83\u4eec\u90fd\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"examples"},"\u4f8b"),(0,l.kt)("p",null,"\u6837\u4f8b\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE limit_by(id Int, val Int) ENGINE = Memory;\nINSERT INTO limit_by VALUES (1, 10), (1, 11), (1, 12), (2, 20), (2, 21);\n")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 2 BY id\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  10 \u2502\n\u2502  1 \u2502  11 \u2502\n\u2502  2 \u2502  20 \u2502\n\u2502  2 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 1, 2 BY id\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  11 \u2502\n\u2502  1 \u2502  12 \u2502\n\u2502  2 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 2 OFFSET 1 BY id")," \u67e5\u8be2\u8fd4\u56de\u76f8\u540c\u7684\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u67e5\u8be2\u8fd4\u56de\u6bcf\u4e2a\u5f15\u7528\u7684\u524d5\u4e2a\u5f15\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"domain, device_type")," \u6700\u591a\u53ef\u4e0e100\u884c\u914d\u5bf9 (",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n BY + LIMIT"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    domainWithoutWWW(URL) AS domain,\n    domainWithoutWWW(REFERRER_URL) AS referrer,\n    device_type,\n    count() cnt\nFROM hits\nGROUP BY domain, referrer, device_type\nORDER BY cnt DESC\nLIMIT 5 BY domain, device_type\nLIMIT 100\n")))}d.isMDXComponent=!0}}]);