"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28767],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,N=u["".concat(s,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={sidebar_label:"SELECT",sidebar_position:33},s="\u9009\u62e9\u67e5\u8be2",o={unversionedId:"zh/sql-reference/statements/select/index",id:"zh/sql-reference/statements/select/index",title:"\u9009\u62e9\u67e5\u8be2",description:"select-queries-syntax}",source:"@site/docs/zh/sql-reference/statements/select/index.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/index.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_label:"SELECT",sidebar_position:33},sidebar:"chinese",previous:{title:"SQL \u8bed\u53e5",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/"},next:{title:"ALL \u5b50\u53e5",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/all"}},m={},c=[{value:"\u8bed\u6cd5",id:"syntax",level:2},{value:"SELECT \u5b50\u53e5",id:"select-clause",level:2},{value:"\u661f\u53f7",id:"asterisk",level:3},{value:"\u6781\u7aef\u503c",id:"extreme-values",level:3},{value:"\u5907\u6ce8",id:"notes",level:3},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"implementation-details",level:2}],u={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-queries-syntax"},"\u9009\u62e9\u67e5\u8be2"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u6267\u884c\u6570\u636e\u68c0\u7d22\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bf7\u6c42\u7684\u6570\u636e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff0c\u540c\u65f6\u7ed3\u5408 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/insert-into"},"INSERT INTO")," \u53ef\u4ee5\u88ab\u8f6c\u53d1\u5230\u4e0d\u540c\u7684\u8868\u3002"),(0,l.kt)("h2",{id:"syntax"},"\u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"[WITH expr_list|(subquery)]\nSELECT [DISTINCT] expr_list\n[FROM [db.]table | (subquery) | table_function] [FINAL]\n[SAMPLE sample_coeff]\n[ARRAY JOIN ...]\n[GLOBAL] [ANY|ALL|ASOF] [INNER|LEFT|RIGHT|FULL|CROSS] [OUTER|SEMI|ANTI] JOIN (subquery)|table (ON <expr_list>)|(USING <column_list>)\n[PREWHERE expr]\n[WHERE expr]\n[GROUP BY expr_list] [WITH TOTALS]\n[HAVING expr]\n[ORDER BY expr_list] [WITH FILL] [FROM expr] [TO expr] [STEP expr]\n[LIMIT [offset_value, ]n BY columns]\n[LIMIT [n, ]m] [WITH TIES]\n[UNION ALL ...]\n[INTO OUTFILE filename]\n[FORMAT format]\n")),(0,l.kt)("p",null,"\u6240\u6709\u5b50\u53e5\u90fd\u662f\u53ef\u9009\u7684\uff0c\u4f46\u7d27\u63a5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u540e\u9762\u7684\u5fc5\u9700\u8868\u8fbe\u5f0f\u5217\u8868\u9664\u5916\uff0c\u66f4\u8be6\u7ec6\u7684\u8bf7\u770b ",(0,l.kt)("a",{parentName:"p",href:"#select-clause"},"\u4e0b\u9762"),"."),(0,l.kt)("p",null,"\u6bcf\u4e2a\u53ef\u9009\u5b50\u53e5\u7684\u5177\u4f53\u5185\u5bb9\u5728\u5355\u72ec\u7684\u90e8\u5206\u4e2d\u8fdb\u884c\u4ecb\u7ecd\uff0c\u8fd9\u4e9b\u90e8\u5206\u6309\u4e0e\u6267\u884c\u987a\u5e8f\u76f8\u540c\u7684\u987a\u5e8f\u5217\u51fa:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/with"},"WITH \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/from"},"FROM \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/sample"},"SAMPLE \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/join"},"JOIN \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/prewhere"},"PREWHERE \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/where"},"WHERE \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/group-by"},"GROUP BY \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/limit-by"},"LIMIT BY \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../sql-reference/statements/select/having"},"HAVING \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#select-clause"},"SELECT \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/distinct"},"DISTINCT \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/limit"},"LIMIT \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/union"},"UNION ALL \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/into-outfile"},"INTO OUTFILE \u5b50\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/format"},"FORMAT \u5b50\u53e5"))),(0,l.kt)("h2",{id:"select-clause"},"SELECT \u5b50\u53e5"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f")," \u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u5b50\u53e5\u662f\u5728\u4e0a\u8ff0\u5b50\u53e5\u4e2d\u7684\u6240\u6709\u64cd\u4f5c\u5b8c\u6210\u540e\u8ba1\u7b97\u7684\u3002 \u8fd9\u4e9b\u8868\u8fbe\u5f0f\u7684\u5de5\u4f5c\u65b9\u5f0f\u5c31\u597d\u50cf\u5b83\u4eec\u5e94\u7528\u4e8e\u7ed3\u679c\u4e2d\u7684\u5355\u72ec\u884c\u4e00\u6837\u3002 \u5982\u679c\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u5b50\u53e5\u5305\u542b\u805a\u5408\u51fd\u6570\uff0c\u7136\u540eClickHouse\u5c06\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/group-by"},"GROUP BY")," \u805a\u5408\u53c2\u6570\u5e94\u7528\u5728\u805a\u5408\u51fd\u6570\u548c\u8868\u8fbe\u5f0f\u4e0a\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u7ed3\u679c\u4e2d\u5305\u542b\u6240\u6709\u5217\uff0c\u8bf7\u4f7f\u7528\u661f\u53f7 (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),"\uff09\u7b26\u53f7\u3002 \u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT * FROM ..."),"."),(0,l.kt)("p",null,"\u5c06\u7ed3\u679c\u4e2d\u7684\u67d0\u4e9b\u5217\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/RE2_(software)"},"re2")," \u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"COLUMNS")," \u8868\u8fbe\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"COLUMNS('regexp')\n")),(0,l.kt)("p",null,"\u4f8b\u5982\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE default.col_names (aa Int8, ab Int8, bc Int8) ENGINE = TinyLog\n")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u67e5\u8be2\u6240\u6709\u5217\u540d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COLUMNS('a') FROM col_names\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500aa\u2500\u252c\u2500ab\u2500\u2510\n\u2502  1 \u2502  1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u6240\u9009\u5217\u4e0d\u6309\u5b57\u6bcd\u987a\u5e8f\u8fd4\u56de\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"COLUMNS")," \u8868\u8fbe\u5f0f\u5e76\u5c06\u51fd\u6570\u5e94\u7528\u4e8e\u5b83\u4eec\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COLUMNS('a'), COLUMNS('c'), toTypeName(COLUMNS('c')) FROM col_names\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500aa\u2500\u252c\u2500ab\u2500\u252c\u2500bc\u2500\u252c\u2500toTypeName(bc)\u2500\u2510\n\u2502  1 \u2502  1 \u2502  1 \u2502 Int8           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u7684\u6bcf\u4e00\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},"COLUMNS")," \u8868\u8fbe\u5f0f\u4f5c\u4e3a\u5355\u72ec\u7684\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\u3002 \u5982\u679c\u51fd\u6570\u652f\u6301\u5176\u4ed6\u53c2\u6570\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5c06\u5176\u4ed6\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\u3002 \u4f7f\u7528\u51fd\u6570\u65f6\u8981\u5c0f\u5fc3\uff0c\u5982\u679c\u51fd\u6570\u4e0d\u652f\u6301\u4f20\u9012\u7ed9\u5b83\u7684\u53c2\u6570\uff0cClickHouse\u5c06\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COLUMNS('a') + COLUMNS('c') FROM col_names\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 19.14.1):\nCode: 42. DB::Exception: Received from localhost:9000. DB::Exception: Number of arguments for function plus doesn't match: passed 3, should be 2.\n")),(0,l.kt)("p",null,"\u8be5\u4f8b\u5b50\u4e2d, ",(0,l.kt)("inlineCode",{parentName:"p"},"COLUMNS('a')")," \u8fd4\u56de\u4e24\u5217: ",(0,l.kt)("inlineCode",{parentName:"p"},"aa")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ab"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"COLUMNS('c')")," \u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"bc")," \u5217\u3002 \u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," \u8fd0\u7b97\u7b26\u4e0d\u80fd\u5e94\u7528\u4e8e3\u4e2a\u53c2\u6570\uff0c\u56e0\u6b64ClickHouse\u629b\u51fa\u4e00\u4e2a\u5e26\u6709\u76f8\u5173\u6d88\u606f\u7684\u5f02\u5e38\u3002"),(0,l.kt)("p",null,"\u5339\u914d\u7684\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},"COLUMNS")," \u8868\u8fbe\u5f0f\u53ef\u4ee5\u5177\u6709\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u3002 \u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"COLUMNS")," \u4e0d\u5339\u914d\u4efb\u4f55\u5217\uff0c\u5e76\u4e14\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u552f\u4e00\u7684\u8868\u8fbe\u5f0f\uff0cClickHouse\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,l.kt)("h3",{id:"asterisk"},"\u661f\u53f7"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u67e5\u8be2\u7684\u4efb\u4f55\u90e8\u5206\u4f7f\u7528\u661f\u53f7\u66ff\u4ee3\u8868\u8fbe\u5f0f\u3002\u8fdb\u884c\u67e5\u8be2\u5206\u6790\u3001\u65f6\uff0c\u661f\u53f7\u5c06\u5c55\u5f00\u4e3a\u6240\u6709\u8868\u7684\u5217\uff08\u4e0d\u5305\u62ec ",(0,l.kt)("inlineCode",{parentName:"p"},"MATERIALIZED")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ALIAS")," \u5217\uff09\u3002 \u53ea\u6709\u5c11\u6570\u60c5\u51b5\u4e0b\u4f7f\u7528\u661f\u53f7\u662f\u5408\u7406\u7684:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8f6c\u50a8\u8868\u65f6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u53ea\u5305\u542b\u51e0\u5217\u7684\u8868\uff0c\u4f8b\u5982\u7cfb\u7edf\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8868\u4e2d\u5217\u7684\u4fe1\u606f\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"LIMIT 1"),". \u4f46\u6700\u597d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"DESC TABLE")," \u67e5\u8be2\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5bf9\u5c11\u91cf\u5217\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"PREWHERE")," \u8fdb\u884c\u5f3a\u8fc7\u6ee4\u65f6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5b50\u67e5\u8be2\u4e2d\uff08\u56e0\u4e3a\u5916\u90e8\u67e5\u8be2\u4e0d\u9700\u8981\u7684\u5217\u4ece\u5b50\u67e5\u8be2\u4e2d\u6392\u9664\uff09\u3002")),(0,l.kt)("p",null,"\u5728\u6240\u6709\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u4f7f\u7528\u661f\u53f7\uff0c\u56e0\u4e3a\u5b83\u53ea\u7ed9\u4f60\u4e00\u4e2a\u5217DBMS\u7684\u7f3a\u70b9\uff0c\u800c\u4e0d\u662f\u4f18\u70b9\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u661f\u53f7\u3002"),(0,l.kt)("h3",{id:"extreme-values"},"\u6781\u7aef\u503c"),(0,l.kt)("p",null,"\u9664\u7ed3\u679c\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u83b7\u53d6\u7ed3\u679c\u5217\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002 \u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u8bbe\u7f6e ",(0,l.kt)("strong",{parentName:"p"},"extremes")," \u8bbe\u7f6e\u4e3a1\u3002 \u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u662f\u9488\u5bf9\u6570\u5b57\u7c7b\u578b\u3001\u65e5\u671f\u548c\u5e26\u6709\u65f6\u95f4\u7684\u65e5\u671f\u8ba1\u7b97\u7684\u3002 \u5bf9\u4e8e\u5176\u4ed6\u7c7b\u578b\u5217\uff0c\u8f93\u51fa\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("p",null,"\u5206\u522b\u7684\u989d\u5916\u8ba1\u7b97\u4e24\u884c \u2013 \u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002 \u8fd9\u989d\u5916\u7684\u4e24\u884c\u91c7\u7528\u8f93\u51fa\u683c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON*"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TabSeparated*"),"\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Pretty*")," ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/interfaces/formats"},"formats"),"\uff0c\u4e0e\u5176\u4ed6\u884c\u5206\u5f00\u3002 \u5b83\u4eec\u4e0d\u4ee5\u5176\u4ed6\u683c\u5f0f\u8f93\u51fa\u3002"),(0,l.kt)("p",null,"\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON*")," \u683c\u5f0f\u65f6\uff0c\u6781\u7aef\u503c\u5355\u72ec\u7684\u8f93\u51fa\u5728 \u2018extremes\u2019 \u5b57\u6bb5\u3002 \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"TabSeparated*")," \u683c\u5f0f\u65f6\uff0c\u6b64\u884c\u6765\u7684\u4e3b\u8981\u7ed3\u679c\u96c6\u540e\uff0c\u7136\u540e\u663e\u793a \u2018totals\u2019 \u5b57\u6bb5\u3002 \u5b83\u524d\u9762\u6709\u4e00\u4e2a\u7a7a\u884c\uff08\u5728\u5176\u4ed6\u6570\u636e\u4e4b\u540e\uff09\u3002 \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Pretty*")," \u683c\u5f0f\u65f6\uff0c\u8be5\u884c\u5728\u4e3b\u7ed3\u679c\u4e4b\u540e\u8f93\u51fa\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u8868\uff0c\u7136\u540e\u663e\u793a \u2018totals\u2019 \u5b57\u6bb5\u3002"),(0,l.kt)("p",null,"\u6781\u7aef\u503c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," \u4e4b\u524d\u88ab\u8ba1\u7b97\uff0c\u4f46\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," \u4e4b\u540e\u88ab\u8ba1\u7b97. \u7136\u800c\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT offset, size"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"offset")," \u4e4b\u524d\u7684\u884c\u90fd\u5305\u542b\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"extremes"),". \u5728\u6d41\u8bf7\u6c42\u4e2d\uff0c\u7ed3\u679c\u8fd8\u53ef\u80fd\u5305\u62ec\u5c11\u91cf\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," \u8fc7\u6ee4\u7684\u884c."),(0,l.kt)("h3",{id:"notes"},"\u5907\u6ce8"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u67e5\u8be2\u7684\u4efb\u4f55\u90e8\u5206\u4f7f\u7528\u540c\u4e49\u8bcd (",(0,l.kt)("inlineCode",{parentName:"p"},"AS")," \u522b\u540d\uff09\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u53e5\u4e0d\u652f\u6301\u4f4d\u7f6e\u53c2\u6570\u3002 \u8fd9\u4e0eMySQL\u76f8\u77db\u76fe\uff0c\u4f46\u7b26\u5408\u6807\u51c6SQL\u3002 \u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY 1, 2")," \u5c06\u88ab\u7406\u89e3\u4e3a\u6839\u636e\u5e38\u91cf\u5206\u7ec4 (i.e.\xa0aggregation of all rows into one)."),(0,l.kt)("h2",{id:"implementation-details"},"\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("p",null,"\u5982\u679c\u67e5\u8be2\u7701\u7565 ",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"IN")," \uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," \u5b50\u67e5\u8be2\uff0c\u67e5\u8be2\u5c06\u88ab\u5b8c\u5168\u6d41\u5904\u7406\uff0c\u4f7f\u7528O(1)\u91cf\u7684RAM\u3002 \u82e5\u672a\u6307\u5b9a\u9002\u5f53\u7684\u9650\u5236\uff0c\u5219\u67e5\u8be2\u53ef\u80fd\u4f1a\u6d88\u8017\u5927\u91cfRAM:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_memory_usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_rows_to_group_by")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_rows_to_sort")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_rows_in_distinct")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_bytes_in_distinct")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_rows_in_set")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_bytes_in_set")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_rows_in_join")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_bytes_in_join")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_bytes_before_external_sort")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_bytes_before_external_group_by"))),(0,l.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u90e8\u5206 \u201cSettings\u201d. \u53ef\u4ee5\u4f7f\u7528\u5916\u90e8\u6392\u5e8f\uff08\u5c06\u4e34\u65f6\u8868\u4fdd\u5b58\u5230\u78c1\u76d8\uff09\u548c\u5916\u90e8\u805a\u5408\u3002"),(0,l.kt)("p",null,"{## ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/"},"\u539f\u59cb\u6587\u7ae0")," ##}"))}k.isMDXComponent=!0}}]);