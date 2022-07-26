"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91594],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74537:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],o={sidebar_position:40,sidebar_label:"\u5173\u8054\u8868\u5f15\u64ce"},s="\u5173\u8054\u8868\u5f15\u64ce",p={unversionedId:"zh/engines/table-engines/special/join",id:"zh/engines/table-engines/special/join",title:"\u5173\u8054\u8868\u5f15\u64ce",description:"join}",source:"@site/docs/zh/engines/table-engines/special/join.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/join",permalink:"/docs-gh-pages/up/zh/engines/table-engines/special/join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/join.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"\u5173\u8054\u8868\u5f15\u64ce"},sidebar:"chinese",previous:{title:"\u5206\u5e03\u5f0f\u5f15\u64ce",permalink:"/docs-gh-pages/up/zh/engines/table-engines/special/distributed"},next:{title:"Memory",permalink:"/docs-gh-pages/up/zh/engines/table-engines/special/memory"}},u={},c=[{value:"\u5efa\u8868\u8bed\u53e5",id:"creating-a-table",level:2},{value:"\u8868\u7528\u6cd5",id:"table-usage",level:2},{value:"\u793a\u4f8b",id:"example",level:3},{value:"\u6570\u636e\u67e5\u8be2\u53ca\u63d2\u5165",id:"selecting-and-inserting-data",level:3},{value:"\u4f7f\u7528\u9650\u5236\u53ca\u53c2\u6570\u8bbe\u7f6e",id:"join-limitations-and-settings",level:3},{value:"\u6570\u636e\u5b58\u50a8",id:"data-storage",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"join"},"\u5173\u8054\u8868\u5f15\u64ce"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/join#select-join"},"JOIN"),"\u64cd\u4f5c\u7684\u4e00\u79cd\u53ef\u9009\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,r.kt)("p",null,'!!! \u6ce8\u610f "Note"\n\u8be5\u6587\u6863\u548c ',(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/join#select-join"},"JOIN \u8bed\u53e5")," \u65e0\u5173."),(0,r.kt)("h2",{id:"creating-a-table"},"\u5efa\u8868\u8bed\u53e5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n) ENGINE = Join(join_strictness, join_type, k1[, k2, ...])\n")),(0,r.kt)("p",null,"\u5efa\u8868\u8bed\u53e5\u8be6\u60c5\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/create#create-table-query"},"\u521b\u5efa\u8868"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"join_strictness")," \u2013 ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/join#select-join-types"},"JOIN \u9650\u5236"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"join_type")," \u2013 ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/join#select-join-types"},"JOIN \u7c7b\u578b"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k1[, k2, ...]")," \u2013 \u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN")," \u64cd\u4f5c\u65f6 ",(0,r.kt)("inlineCode",{parentName:"li"},"USING"),"\u8bed\u53e5\u7528\u5230\u7684key\u5217")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"join_strictness")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"join_type")," \u53c2\u6570\u65f6\u4e0d\u9700\u8981\u7528\u5f15\u53f7, \u4f8b\u5982, ",(0,r.kt)("inlineCode",{parentName:"p"},"Join(ANY, LEFT, col1)"),". \u8fd9\u4e9b\u53c2\u6570\u5fc5\u987b\u548c\u8fdb\u884cjoin\u64cd\u4f5c\u7684\u8868\u76f8\u5339\u914d\u3002\u5426\u5219\uff0cCH\u4e0d\u4f1a\u62a5\u9519\uff0c\u4f46\u662f\u53ef\u80fd\u8fd4\u56de\u9519\u8bef\u7684\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"table-usage"},"\u8868\u7528\u6cd5"),(0,r.kt)("h3",{id:"example"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u521b\u5efa\u5de6\u5173\u8054\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE id_val(`id` UInt32, `val` UInt32) ENGINE = TinyLog\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO id_val VALUES (1,11)(2,12)(3,13)\n")),(0,r.kt)("p",null,"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"Join")," \u53f3\u8fb9\u7684\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE id_val_join(`id` UInt32, `val` UInt8) ENGINE = Join(ANY, LEFT, id)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO id_val_join VALUES (1,21)(1,22)(3,23)\n")),(0,r.kt)("p",null,"\u8868\u5173\u8054:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM id_val ANY LEFT JOIN id_val_join USING (id) SETTINGS join_use_nulls = 1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u252c\u2500id_val_join.val\u2500\u2510\n\u2502  1 \u2502  11 \u2502              21 \u2502\n\u2502  2 \u2502  12 \u2502            \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502  3 \u2502  13 \u2502              23 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u4f5c\u4e3a\u4e00\u79cd\u66ff\u6362\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"\u8868\u83b7\u53d6\u6570\u636e\uff0c\u9700\u8981\u8bbe\u7f6e\u597djoin\u7684key\u5b57\u6bb5\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT joinGet('id_val_join', 'val', toUInt32(1))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500joinGet('id_val_join', 'val', toUInt32(1))\u2500\u2510\n\u2502                                         21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"selecting-and-inserting-data"},"\u6570\u636e\u67e5\u8be2\u53ca\u63d2\u5165"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u8bed\u53e5\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"\u5f15\u64ce\u8868\u4e2d\u6dfb\u52a0\u6570\u636e\u3002\u5982\u679c\u8868\u662f\u901a\u8fc7\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"ANY"),"\u9650\u5236\u53c2\u6570\u6765\u521b\u5efa\u7684\uff0c\u90a3\u4e48\u91cd\u590dkey\u7684\u6570\u636e\u4f1a\u88ab\u5ffd\u7565\u3002\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL"),"\u9650\u5236\u53c2\u6570\u65f6\uff0c\u6240\u6709\u884c\u8bb0\u5f55\u90fd\u4f1a\u88ab\u6dfb\u52a0\u8fdb\u53bb\u3002"),(0,r.kt)("p",null,"\u4e0d\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\u76f4\u63a5\u4ece\u8868\u4e2d\u83b7\u53d6\u6570\u636e\u3002\u8bf7\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u8868\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN")," \u7684\u53f3\u8fb9\u8fdb\u884c\u67e5\u8be2"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/functions/other-functions#joinget"},"joinGet"),"\u51fd\u6570\uff0c\u5c31\u50cf\u4ece\u5b57\u5178\u4e2d\u83b7\u53d6\u6570\u636e\u4e00\u6837\u6765\u67e5\u8be2\u8868\u3002")),(0,r.kt)("h3",{id:"join-limitations-and-settings"},"\u4f7f\u7528\u9650\u5236\u53ca\u53c2\u6570\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u521b\u5efa\u8868\u65f6\uff0c\u4f1a\u5e94\u7528\u4e0b\u5217\u8bbe\u7f6e\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/operations/settings/settings#join_use_nulls"},"join_use_nulls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/operations/settings/query-complexity#settings-max_rows_in_join"},"max_rows_in_join")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/operations/settings/query-complexity#settings-max_bytes_in_join"},"max_bytes_in_join")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/operations/settings/query-complexity#settings-join_overflow_mode"},"join_overflow_mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/operations/settings/settings#settings-join_any_take_last_row"},"join_any_take_last_row"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"\u8868\u4e0d\u80fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"GLOBAL JOIN"),"\u64cd\u4f5c\u4e2d\u4f7f\u7528"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"\u8868\u521b\u5efa\u53ca ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/"},"\u67e5\u8be2"),"\u65f6\uff0c\u5141\u8bb8\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/settings#join_use_nulls"},"join_use_nulls"),"\u53c2\u6570\u3002\u5982\u679c\u4f7f\u7528\u4e0d\u540c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"join_use_nulls"),"\u8bbe\u7f6e\uff0c\u4f1a\u5bfc\u81f4\u8868\u5173\u8054\u5f02\u5e38\uff08\u53d6\u51b3\u4e8ejoin\u7684\u7c7b\u578b\uff09\u3002\u5f53\u4f7f\u7528\u51fd\u6570 ",(0,r.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/functions/other-functions#joinget"},"joinGet"),"\u65f6\uff0c\u8bf7\u5728\u5efa\u8868\u548c\u67e5\u8be2\u8bed\u53e5\u4e2d\u4f7f\u7528\u76f8\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"join_use_nulls")," \u53c2\u6570\u8bbe\u7f6e\u3002"),(0,r.kt)("h2",{id:"data-storage"},"\u6570\u636e\u5b58\u50a8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"\u8868\u7684\u6570\u636e\u603b\u662f\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\u3002\u5f53\u5f80\u8868\u4e2d\u63d2\u5165\u884c\u8bb0\u5f55\u65f6\uff0cCH\u4f1a\u5c06\u6570\u636e\u5757\u4fdd\u5b58\u5728\u786c\u76d8\u76ee\u5f55\u4e2d\uff0c\u8fd9\u6837\u670d\u52a1\u5668\u91cd\u542f\u65f6\u6570\u636e\u53ef\u4ee5\u6062\u590d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u975e\u6b63\u5e38\u91cd\u542f\uff0c\u4fdd\u5b58\u5728\u786c\u76d8\u4e0a\u7684\u6570\u636e\u5757\u4f1a\u4e22\u5931\u6216\u88ab\u635f\u574f\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u624b\u52a8\u5220\u9664\u88ab\u635f\u574f\u7684\u6570\u636e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/join/"},"\u539f\u59cb\u6587\u6863")," "))}d.isMDXComponent=!0}}]);