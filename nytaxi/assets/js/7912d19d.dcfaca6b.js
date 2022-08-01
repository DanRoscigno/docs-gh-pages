"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45415],{3905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return u}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,f=s["".concat(o,".").concat(u)]||s[u]||g[u]||i;return r?t.createElement(f,l(l({ref:n},m),{},{components:r})):t.createElement(f,l({ref:n},m))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4728:function(e,n,r){r.r(n),r.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return g}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],p={},o="ReplacingMergeTree",c={unversionedId:"zh/engines/table-engines/mergetree-family/replacingmergetree",id:"zh/engines/table-engines/mergetree-family/replacingmergetree",title:"ReplacingMergeTree",description:"replacingmergetree}",source:"@site/docs/zh/engines/table-engines/mergetree-family/replacingmergetree.md",sourceDirName:"zh/engines/table-engines/mergetree-family",slug:"/zh/engines/table-engines/mergetree-family/replacingmergetree",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/replacingmergetree",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/mergetree-family/replacingmergetree.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"MergeTree",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/mergetree"},next:{title:"\u6570\u636e\u526f\u672c",permalink:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/replication"}},m={},g=[{value:"\u5efa\u8868",id:"jian-biao",level:2}],s={toc:g};function u(e){var n=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"replacingmergetree"},"ReplacingMergeTree"),(0,i.kt)("p",null,"\u8be5\u5f15\u64ce\u548c ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u4f1a\u5220\u9664\u6392\u5e8f\u952e\u503c\u76f8\u540c\u7684\u91cd\u590d\u9879\u3002"),(0,i.kt)("p",null,"\u6570\u636e\u7684\u53bb\u91cd\u53ea\u4f1a\u5728\u6570\u636e\u5408\u5e76\u671f\u95f4\u8fdb\u884c\u3002\u5408\u5e76\u4f1a\u5728\u540e\u53f0\u4e00\u4e2a\u4e0d\u786e\u5b9a\u7684\u65f6\u95f4\u8fdb\u884c\uff0c\u56e0\u6b64\u4f60\u65e0\u6cd5\u9884\u5148\u4f5c\u51fa\u8ba1\u5212\u3002\u6709\u4e00\u4e9b\u6570\u636e\u53ef\u80fd\u4ecd\u672a\u88ab\u5904\u7406\u3002\u5c3d\u7ba1\u4f60\u53ef\u4ee5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u8bed\u53e5\u53d1\u8d77\u8ba1\u5212\u5916\u7684\u5408\u5e76\uff0c\u4f46\u8bf7\u4e0d\u8981\u4f9d\u9760\u5b83\uff0c\u56e0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u8bed\u53e5\u4f1a\u5f15\u53d1\u5bf9\u6570\u636e\u7684\u5927\u91cf\u8bfb\u5199\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," \u9002\u7528\u4e8e\u5728\u540e\u53f0\u6e05\u9664\u91cd\u590d\u7684\u6570\u636e\u4ee5\u8282\u7701\u7a7a\u95f4\uff0c\u4f46\u662f\u5b83\u4e0d\u4fdd\u8bc1\u6ca1\u6709\u91cd\u590d\u7684\u6570\u636e\u51fa\u73b0\u3002"),(0,i.kt)("h2",{id:"jian-biao"},"\u5efa\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = ReplacingMergeTree([ver])\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,i.kt)("p",null,"\u6709\u5173\u5efa\u8868\u53c2\u6570\u7684\u63cf\u8ff0\uff0c\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/create#create-table-query"},"\u521b\u5efa\u8868"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ReplacingMergeTree \u7684\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ver")," \u2014 \u7248\u672c\u5217\u3002\u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),"\u3002\u53ef\u9009\u53c2\u6570\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5728\u6570\u636e\u5408\u5e76\u7684\u65f6\u5019\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," \u4ece\u6240\u6709\u5177\u6709\u76f8\u540c\u6392\u5e8f\u952e\u7684\u884c\u4e2d\u9009\u62e9\u4e00\u884c\u7559\u4e0b\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"ver")," \u5217\u672a\u6307\u5b9a\uff0c\u4fdd\u7559\u6700\u540e\u4e00\u6761\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"ver")," \u5217\u5df2\u6307\u5b9a\uff0c\u4fdd\u7559 ",(0,i.kt)("inlineCode",{parentName:"li"},"ver")," \u503c\u6700\u5927\u7684\u7248\u672c\u3002")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b50\u53e5")),(0,i.kt)("p",null,"\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplacingMergeTree")," \u8868\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u4e0e\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u8868\u65f6\u76f8\u540c\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/mergetree-family/mergetree"},"\u5b50\u53e5"),"\u3002"),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"\u5df2\u5f03\u7528\u7684\u5efa\u8868\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::info "\u6ce8\u610f"\n\u4e0d\u8981\u5728\u65b0\u9879\u76ee\u4e2d\u4f7f\u7528\u8be5\u65b9\u6cd5\uff0c\u53ef\u80fd\u7684\u8bdd\uff0c\u8bf7\u5c06\u65e7\u9879\u76ee\u5207\u6362\u5230\u4e0a\u8ff0\u65b9\u6cd5\u3002\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] ReplacingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, [ver])\n")),(0,i.kt)("p",null,"\u9664\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ver")," \u7684\u6240\u6709\u53c2\u6570\u90fd\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u4e2d\u7684\u542b\u4e49\u76f8\u540c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ver")," - \u7248\u672c\u5217\u3002\u53ef\u9009\u53c2\u6570\uff0c\u6709\u5173\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u4e0a\u6587\u3002"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/replacingmergetree/"},"\u6765\u6e90\u6587\u7ae0")," "))}u.isMDXComponent=!0}}]);