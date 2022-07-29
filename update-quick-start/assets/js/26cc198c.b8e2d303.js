"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98508],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,c=m["".concat(s,".").concat(d)]||m[d]||k[d]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92177:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={sidebar_position:31,sidebar_label:"SQL\u8bed\u6cd5"},s="SQL\u8bed\u6cd5",o={unversionedId:"zh/sql-reference/syntax",id:"zh/sql-reference/syntax",title:"SQL\u8bed\u6cd5",description:"syntax}",source:"@site/docs/zh/sql-reference/syntax.md",sourceDirName:"zh/sql-reference",slug:"/zh/sql-reference/syntax",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/syntax",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/syntax.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,sidebar_label:"SQL\u8bed\u6cd5"},sidebar:"chinese",previous:{title:"insert-into",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/insert-into"},next:{title:"Distributed DDL",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/distributed-ddl"}},u={},k=[{value:"\u7a7a\u767d",id:"spaces",level:2},{value:"\u6ce8\u91ca",id:"comments",level:2},{value:"\u5173\u952e\u5b57",id:"syntax-keywords",level:2},{value:"\u6807\u8bc6\u7b26",id:"syntax-identifiers",level:2},{value:"\u5b57\u7b26",id:"literals",level:2},{value:"\u6570\u5b57",id:"numeric",level:3},{value:"\u5b57\u7b26\u4e32",id:"syntax-string-literal",level:3},{value:"\u590d\u5408\u5b57\u7b26\u4e32",id:"compound",level:3},{value:"NULL\u503c",id:"null-literal",level:3},{value:"\u51fd\u6570",id:"functions",level:2},{value:"\u8fd0\u7b97\u7b26",id:"operators",level:2},{value:"\u6570\u636e\u7c7b\u578b\u53ca\u6570\u636e\u5e93/\u8868\u5f15\u64ce",id:"data_types-and-database-table-engines",level:2},{value:"\u8868\u8fbe\u5f0f\u522b\u540d",id:"syntax-expression_aliases",level:2},{value:"\u7528\u6cd5\u6ce8\u610f",id:"notes-on-usage",level:3},{value:"\u661f\u53f7",id:"asterisk",level:2},{value:"\u8868\u8fbe\u5f0f",id:"syntax-expressions",level:2}],m={toc:k};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"syntax"},"SQL\u8bed\u6cd5"),(0,l.kt)("p",null,"ClickHouse\u67092\u7c7b\u89e3\u6790\u5668\uff1a\u5b8c\u6574SQL\u89e3\u6790\u5668\uff08\u9012\u5f52\u5f0f\u89e3\u6790\u5668\uff09\uff0c\u4ee5\u53ca\u6570\u636e\u683c\u5f0f\u89e3\u6790\u5668\uff08\u5feb\u901f\u6d41\u5f0f\u89e3\u6790\u5668\uff09\n\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\uff0c\u5176\u5b83\u60c5\u51b5\u4e0b\u4ec5\u4f7f\u7528\u5b8c\u6574SQL\u89e3\u6790\u5668\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u67e5\u8be2\u4f1a\u540c\u65f6\u4f7f\u75282\u79cd\u89e3\u6790\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t VALUES (1, 'Hello, world'), (2, 'abc'), (3, 'def')\n")),(0,l.kt)("p",null,"\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT INTO t VALUES")," \u7684\u90e8\u5206\u7531\u5b8c\u6574SQL\u89e3\u6790\u5668\u5904\u7406\uff0c\u5305\u542b\u6570\u636e\u7684\u90e8\u5206 ",(0,l.kt)("inlineCode",{parentName:"p"},"(1, 'Hello, world'), (2, 'abc'), (3, 'def')")," \u4ea4\u7ed9\u5feb\u901f\u6d41\u5f0f\u89e3\u6790\u5668\u89e3\u6790\u3002\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/operations/settings/settings#settings-input_format_values_interpret_expressions"},"input_format_values_interpret_expressions"),"\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5bf9\u6570\u636e\u90e8\u5206\u5f00\u542f\u5b8c\u6574SQL\u89e3\u6790\u5668\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"input_format_values_interpret_expressions = 1")," \u65f6\uff0cClickHouse\u4f18\u5148\u91c7\u7528\u5feb\u901f\u6d41\u5f0f\u89e3\u6790\u5668\u6765\u89e3\u6790\u6570\u636e\u3002\u5982\u679c\u5931\u8d25\uff0cClickHouse\u518d\u5c1d\u8bd5\u7528\u5b8c\u6574SQL\u89e3\u6790\u5668\u6765\u5904\u7406\uff0c\u5c31\u50cf\u5904\u7406SQL ",(0,l.kt)("a",{parentName:"p",href:"#syntax-expressions"},"expression")," \u4e00\u6837\u3002"),(0,l.kt)("p",null,"\u6570\u636e\u53ef\u4ee5\u91c7\u7528\u4efb\u4f55\u683c\u5f0f\u3002\u5f53CH\u63a5\u6536\u5230\u8bf7\u6c42\u65f6\uff0c\u670d\u52a1\u7aef\u5148\u5728\u5185\u5b58\u4e2d\u8ba1\u7b97\u4e0d\u8d85\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/operations/settings/settings#settings-max_query_size"},"max_query_size")," \u5b57\u8282\u7684\u8bf7\u6c42\u6570\u636e\uff08\u9ed8\u8ba41 mb\uff09\uff0c\u7136\u540e\u5269\u4e0b\u90e8\u5206\u4ea4\u7ed9\u5feb\u901f\u6d41\u5f0f\u89e3\u6790\u5668\u3002"),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u8bed\u53e5\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Values")," \u683c\u5f0f\u65f6\uff0c\u770b\u8d77\u6765\u6570\u636e\u90e8\u5206\u7684\u89e3\u6790\u548c\u89e3\u6790",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u4e2d\u7684\u8868\u8fbe\u5f0f\u76f8\u540c\uff0c\u4f46\u5e76\u4e0d\u662f\u8fd9\u6837\u7684\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"Values")," \u683c\u5f0f\u6709\u975e\u5e38\u591a\u7684\u9650\u5236\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u7684\u5269\u4f59\u90e8\u5206\u6db5\u76d6\u4e86\u5b8c\u6574SQL\u89e3\u6790\u5668\u3002\u5173\u4e8e\u683c\u5f0f\u89e3\u6790\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/interfaces/formats"},"Formats")," \u7ae0\u8282\u3002"),(0,l.kt)("h2",{id:"spaces"},"\u7a7a\u767d"),(0,l.kt)("p",null,"sql\u8bed\u53e5\u7684\u8bed\u6cd5\u7ed3\u6784\u90e8\u5206\u4e4b\u95f4\uff08\u6807\u8bc6\u7b26\u4e4b\u95f4\u3001\u90e8\u5206\u7b26\u53f7\u4e4b\u95f4\u3001\u5305\u62ecsql\u7684\u8d77\u59cb\u548c\u7ed3\u675f\uff09\u53ef\u4ee5\u6709\u4efb\u610f\u7684\u7a7a\u767d\u5b57\u7b26\uff0c\u8fd9\u4e9b\u7a7a\u5b57\u7b26\u7c7b\u578b\u5305\u62ec\uff1a\u7a7a\u683c\u5b57\u7b26\uff0ctab\u5236\u8868\u7b26\uff0c\u6362\u884c\u7b26\uff0cCR\u7b26\uff0c\u6362\u9875\u7b26\u7b49\u3002"),(0,l.kt)("h2",{id:"comments"},"\u6ce8\u91ca"),(0,l.kt)("p",null,"ClickHouse\u652f\u6301SQL\u98ce\u683c\u6216C\u8bed\u8a00\u98ce\u683c\u7684\u6ce8\u91ca\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SQL\u98ce\u683c\u7684\u6ce8\u91ca\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"--")," \u5f00\u59cb\uff0c\u76f4\u5230\u884c\u672b\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"--")," \u540e\u7d27\u8ddf\u7684\u7a7a\u683c\u53ef\u4ee5\u5ffd\u7565"),(0,l.kt)("li",{parentName:"ul"},"C\u8bed\u8a00\u98ce\u683c\u7684\u6ce8\u91ca\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"/*")," \u5f00\u59cb\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"*/")," \u7ed3\u675f\uff0c\u53ef\u4ee5\u8de8\u884c\uff0c\u540c\u6837\u53ef\u4ee5\u7701\u7565 ",(0,l.kt)("inlineCode",{parentName:"li"},"/*")," \u540e\u7684\u7a7a\u683c")),(0,l.kt)("h2",{id:"syntax-keywords"},"\u5173\u952e\u5b57"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u573a\u666f\u7684\u5173\u952e\u5b57\u662f\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6807\u51c6SQL\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"select")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"SeLeCt")," \u90fd\u662f\u5141\u8bb8\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u67d0\u4e9b\u6d41\u884c\u7684RDBMS\u4e2d\u88ab\u5b9e\u73b0\u7684\u5173\u952e\u5b57\uff0c\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"datetime"),"\u662f\u4e00\u6837\u7684")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u7cfb\u7edf\u8868 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/operations/system-tables/data_type_families#system_tables-data_type_families"},"system.data_type_families")," \u4e2d\u68c0\u67e5\u67d0\u4e2a\u6570\u636e\u7c7b\u578b\u7684\u540d\u79f0\u662f\u5426\u662f\u5927\u5c0f\u5199\u654f\u611f\u578b\u3002"),(0,l.kt)("p",null,"\u548c\u6807\u51c6SQL\u76f8\u53cd\uff0c\u6240\u6709\u5176\u5b83\u7684\u5173\u952e\u5b57\u90fd\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u5927\u5c0f\u5199\u654f\u611f\u7684"),"\uff0c\u5305\u62ec\u51fd\u6570\u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u5173\u952e\u5b57\u4e0d\u662f\u4fdd\u7559\u7684\uff1b\u5b83\u4eec\u4ec5\u5728\u76f8\u5e94\u7684\u4e0a\u4e0b\u6587\u4e2d\u624d\u4f1a\u88ab\u8ba4\u4e3a\u662f\u5173\u952e\u5b57\u3002\u5982\u679c\u4f60\u4f7f\u7528\u548c\u5173\u952e\u5b57\u540c\u540d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"#syntax-identifiers"},"\u6807\u8bc6\u7b26")," \uff0c\u9700\u8981\u4f7f\u7528\u53cc\u5f15\u53f7\u6216\u53cd\u5f15\u53f7\u5c06\u5b83\u4eec\u5305\u542b\u8d77\u6765\u3002\u4f8b\u5982\uff1a\u5982\u679c\u8868 ",(0,l.kt)("inlineCode",{parentName:"p"},"table_name")," \u5305\u542b\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},'"FROM"'),"\uff0c\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},'SELECT "FROM" FROM table_name')," \u662f\u5408\u6cd5\u7684"),(0,l.kt)("h2",{id:"syntax-identifiers"},"\u6807\u8bc6\u7b26"),(0,l.kt)("p",null,"\u6807\u8bc6\u7b26\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u3001\u6570\u636e\u5e93\u3001\u8868\u3001\u5206\u533a\u3001\u5217\u7684\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/zh/sql-reference/syntax/#syntax-expression_aliases"},"\u8868\u8fbe\u5f0f\u522b\u540d"))),(0,l.kt)("p",null,"\u53d8\u91cf\u540d\u53ef\u4ee5\u88ab\u62ec\u8d77\u6216\u4e0d\u62ec\u8d77\uff0c\u540e\u8005\u662f\u63a8\u8350\u505a\u6cd5\u3002"),(0,l.kt)("p",null,"\u6ca1\u6709\u62ec\u8d77\u7684\u53d8\u91cf\u540d\uff0c\u5fc5\u987b\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"^[a-zA-Z_][0-9a-zA-Z_]*$"),"\uff0c\u5e76\u4e14\u4e0d\u80fd\u548c ",(0,l.kt)("a",{parentName:"p",href:"#syntax-keywords"},"\u5173\u952e\u5b57"),"\u76f8\u540c\uff0c\u5408\u6cd5\u7684\u6807\u8bc6\u7b26\u540d\u79f0\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"_1"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"X_y__Z123_"),"\u7b49\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u4f7f\u7528\u548c\u5173\u952e\u5b57\u540c\u540d\u7684\u53d8\u91cf\u540d\u79f0\uff0c\u6216\u8005\u5728\u53d8\u91cf\u540d\u79f0\u4e2d\u5305\u542b\u5176\u5b83\u7b26\u53f7\uff0c\u4f60\u9700\u8981\u901a\u8fc7\u53cc\u5f15\u53f7\u6216\u53cd\u5f15\u53f7\uff0c\u4f8b\u5982\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},'"id"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},"`id`")),(0,l.kt)("h2",{id:"literals"},"\u5b57\u7b26"),(0,l.kt)("p",null,"\u5b57\u7b26\u5305\u542b\u6570\u5b57\uff0c\u5b57\u6bcd\uff0c\u62ec\u53f7\uff0cNULL\u503c\u7b49\u5b57\u7b26\u3002"),(0,l.kt)("h3",{id:"numeric"},"\u6570\u5b57"),(0,l.kt)("p",null,"\u6570\u5b57\u7c7b\u578b\u5b57\u7b26\u4f1a\u88ab\u505a\u5982\u4e0b\u89e3\u6790\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9996\u5148\uff0c\u5f53\u505a64\u4f4d\u7684\u6709\u7b26\u53f7\u6574\u6570\uff0c\u4f7f\u7528\u51fd\u6570 ",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/string/byte/strtoul"},"strtoull"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5931\u8d25\uff0c\u89e3\u6790\u621064\u4f4d\u65e0\u7b26\u53f7\u6574\u6570\uff0c\u540c\u6837\u4f7f\u7528\u51fd\u6570 ",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/string/byte/strtoul"},"strtoull"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u8fd8\u5931\u8d25\u4e86\uff0c\u8bd5\u56fe\u89e3\u6790\u6210\u6d6e\u70b9\u578b\u6570\u503c\uff0c\u4f7f\u7528\u51fd\u6570 ",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/string/byte/strtof"},"strtod"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6700\u540e\uff0c\u4ee5\u4e0a\u60c5\u5f62\u90fd\u4e0d\u7b26\u5408\u65f6\uff0c\u8fd4\u56de\u5f02\u5e38"))),(0,l.kt)("p",null,"\u6570\u5b57\u7c7b\u578b\u7684\u503c\u7c7b\u578b\u4e3a\u80fd\u5bb9\u7eb3\u8be5\u503c\u7684\u6700\u5c0f\u6570\u636e\u7c7b\u578b\u3002\n\u4f8b\u5982\uff1a1 \u89e3\u6790\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u578b\uff0c256 \u5219\u89e3\u6790\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt16"),"\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/"},"\u6570\u636e\u7c7b\u578b")),(0,l.kt)("p",null,"\u4f8b\u5982: ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"18446744073709551615"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"0xDEADBEEF"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"01"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"1e100"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"-1e-100"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"inf"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"nan"),"."),(0,l.kt)("h3",{id:"syntax-string-literal"},"\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,"ClickHouse\u53ea\u652f\u6301\u7528\u5355\u5f15\u53f7\u5305\u542b\u7684\u5b57\u7b26\u4e32\u3002\u7279\u6b8a\u5b57\u7b26\u53ef\u901a\u8fc7\u53cd\u659c\u6760\u8fdb\u884c\u8f6c\u4e49\u3002\u4e0b\u5217\u8f6c\u4e49\u5b57\u7b26\u90fd\u6709\u76f8\u5e94\u7684\u5b9e\u9645\u503c\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"\\b"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\f"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\t"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\v"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\xHH"),"\u3002\u5176\u5b83\u60c5\u51b5\u4e0b\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\c"),"\u5f62\u5f0f\u51fa\u73b0\u7684\u8f6c\u4e49\u5b57\u7b26\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"c"),"\u8868\u793a\u4efb\u610f\u5b57\u7b26\u65f6\uff0c\u8f6c\u4e49\u5b57\u7b26\u4f1a\u8f6c\u6362\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"c"),"\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\'"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"\\\\"),"\u3002\u8be5\u503c\u5c06\u62e5\u6709",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/string"},"String"),"\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u5728\u5b57\u7b26\u4e32\u4e2d\uff0c\u4f60\u81f3\u5c11\u9700\u8981\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"'")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," \u8fdb\u884c\u8f6c\u4e49\u3002\u5355\u5f15\u53f7\u53ef\u4ee5\u4f7f\u7528\u5355\u5f15\u53f7\u8f6c\u4e49\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"'It\\'s'")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"'It''s'")," \u662f\u76f8\u540c\u7684\u3002"),(0,l.kt)("h3",{id:"compound"},"\u590d\u5408\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,"\u6570\u7ec4\u90fd\u662f\u4f7f\u7528\u65b9\u62ec\u53f7\u8fdb\u884c\u6784\u9020 ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]"),"\uff0c\u5143\u7ec4\u5219\u4f7f\u7528\u5706\u62ec\u53f7 ",(0,l.kt)("inlineCode",{parentName:"p"},"(1, 'Hello, world!', 2)"),"\n\u4ece\u6280\u672f\u4e0a\u6765\u8bb2\uff0c\u8fd9\u4e9b\u90fd\u4e0d\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u662f\u5305\u542b\u521b\u5efa\u6570\u7ec4\u548c\u5143\u7ec4\u8fd0\u7b97\u7b26\u7684\u8868\u8fbe\u5f0f\u3002\n\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\u5fc5\u987b\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5143\u7d20\uff0c\u521b\u5efa\u4e00\u4e2a\u5143\u7ec4\u81f3\u5c11\u5305\u542b2\u4e2a\u5143\u7d20\n\u5f53\u5143\u7ec4\u51fa\u73b0\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"IN")," \u90e8\u5206\u65f6\uff0c\u662f\u4e00\u79cd\u4f8b\u5916\u60c5\u5f62\u3002\u67e5\u8be2\u7ed3\u679c\u53ef\u4ee5\u5305\u542b\u5143\u7ec4\uff0c\u4f46\u662f\u5143\u7ec4\u7c7b\u578b\u4e0d\u80fd\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\uff08\u9664\u975e\u8868\u91c7\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/special/memory"},"\u5185\u5b58\u8868"),"\u5f15\u64ce\uff09"),(0,l.kt)("h3",{id:"null-literal"},"NULL\u503c"),(0,l.kt)("p",null,"\u4ee3\u8868\u4e0d\u5b58\u5728\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u80fd\u5728\u8868\u5b57\u6bb5\u4e2d\u5b58\u50a8NULL\u503c\uff0c\u8be5\u5b57\u6bb5\u5fc5\u987b\u58f0\u660e\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/nullable"},"\u7a7a\u503c")," \u7c7b\u578b\u3002\n\u6839\u636e\u6570\u636e\u7684\u683c\u5f0f\uff08\u8f93\u5165\u6216\u8f93\u51fa\uff09\uff0cNULL\u503c\u6709\u4e0d\u540c\u7684\u8868\u73b0\u5f62\u5f0f\u3002\u66f4\u591a\u4fe1\u606f\u53c2\u89c1\u6587\u6863 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/interfaces/formats#formats"},"\u6570\u636e\u683c\u5f0f")),(0,l.kt)("p",null,"\u5728\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"\u65f6\u5b58\u5728\u5f88\u591a\u7ec6\u5fae\u5dee\u522b\u3002\u4f8b\u5982\uff0c\u6bd4\u8f83\u8fd0\u7b97\u7684\u81f3\u5c11\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \uff0c\u5219\u8be5\u7ed3\u679c\u4e5f\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u3002\u4e0e\u4e4b\u7c7b\u4f3c\u7684\u8fd8\u6709\u4e58\u6cd5\u8fd0\u7b97, \u52a0\u6cd5\u8fd0\u7b97,\u4ee5\u53ca\u5176\u5b83\u8fd0\u7b97\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6bcf\u79cd\u8fd0\u7b97\u7684\u6587\u6863\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u5728\u8bed\u53e5\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/operators/#operator-is-null"},"IS NULL")," \u4ee5\u53ca ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/operators/"},"IS NOT NULL")," \u8fd0\u7b97\u7b26\uff0c\u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"isNull")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"isNotNull")," \u51fd\u6570\u6765\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u503c"),(0,l.kt)("h2",{id:"functions"},"\u51fd\u6570"),(0,l.kt)("p",null,"\u51fd\u6570\u8c03\u7528\u7684\u5199\u6cd5\uff0c\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u6807\u8bc6\u7b26\u540e\u63a5\u88ab\u5706\u62ec\u53f7\u5305\u542b\u7684\u53c2\u6570\u5217\u8868\uff08\u53ef\u80fd\u4e3a\u7a7a\uff09\u3002\u4e0e\u6807\u51c6SQL\u4e0d\u540c\uff0c\u5706\u62ec\u53f7\u662f\u5fc5\u987b\u7684\uff0c\u4e0d\u7ba1\u53c2\u6570\u5217\u8868\u662f\u5426\u4e3a\u7a7a\u3002\u4f8b\u5982\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"now()"),"\u3002"),(0,l.kt)("p",null,"\u51fd\u6570\u5206\u4e3a\u5e38\u89c4\u51fd\u6570\u548c\u805a\u5408\u51fd\u6570\uff08\u53c2\u89c1\u201cAggregate functions\u201d\u4e00\u7ae0\uff09\u3002\u6709\u4e9b\u805a\u5408\u51fd\u6570\u5305\u542b2\u4e2a\u53c2\u6570\u5217\u8868\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u5217\u8868\u4e2d\u7684\u53c2\u6570\u88ab\u79f0\u4e3a\u201cparameters\u201d\u3002\u4e0d\u5305\u542b\u201cparameters\u201d\u7684\u805a\u5408\u51fd\u6570\u8bed\u6cd5\u548c\u5e38\u89c4\u51fd\u6570\u662f\u4e00\u6837\u7684\u3002"),(0,l.kt)("h2",{id:"operators"},"\u8fd0\u7b97\u7b26"),(0,l.kt)("p",null,"\u5728\u67e5\u8be2\u89e3\u6790\u9636\u6bb5\uff0c\u8fd0\u7b97\u7b26\u4f1a\u88ab\u8f6c\u6362\u6210\u5bf9\u5e94\u7684\u51fd\u6570\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u5b83\u4eec\u7684\u4f18\u5148\u7ea7\u3002\u4f8b\u5982\uff1a\n\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"1 + 2 * 3 + 4")," \u4f1a\u88ab\u89e3\u6790\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"plus(plus(1, multiply(2, 3)), 4)"),"."),(0,l.kt)("h2",{id:"data_types-and-database-table-engines"},"\u6570\u636e\u7c7b\u578b\u53ca\u6570\u636e\u5e93/\u8868\u5f15\u64ce"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CREATE")," \u8bed\u53e5\u4e2d\u7684\u6570\u636e\u7c7b\u578b\u548c\u8868\u5f15\u64ce\u5199\u6cd5\u4e0e\u53d8\u91cf\u6216\u51fd\u6570\u7c7b\u4f3c\u3002\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u4eec\u53ef\u4ee5\u5305\u542b\u6216\u4e0d\u5305\u542b\u7528\u62ec\u53f7\u5305\u542b\u7684\u53c2\u6570\u5217\u8868\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1\u201c\u6570\u636e\u7c7b\u578b,\u201d \u201c\u6570\u636e\u8868\u5f15\u64ce\u201d \u548c \u201cCREATE\u8bed\u53e5\u201d\u7b49\u7ae0\u8282"),(0,l.kt)("h2",{id:"syntax-expression_aliases"},"\u8868\u8fbe\u5f0f\u522b\u540d"),(0,l.kt)("p",null,"\u522b\u540d\u662f\u7528\u6237\u5bf9\u8868\u8fbe\u5f0f\u7684\u81ea\u5b9a\u4e49\u540d\u79f0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"expr AS alias\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"AS")," \u2014 \u7528\u4e8e\u5b9a\u4e49\u522b\u540d\u7684\u5173\u952e\u5b57\u3002\u53ef\u4ee5\u5bf9\u8868\u6216select\u8bed\u53e5\u4e2d\u7684\u5217\u5b9a\u4e49\u522b\u540d(",(0,l.kt)("inlineCode",{parentName:"p"},"AS")," \u53ef\u4ee5\u7701\u7565\uff09\n\u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT table_name_alias.column_name FROM table_name table_name_alias"),"."),(0,l.kt)("p",{parentName:"li"},"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST\u51fd\u6570")," \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"AS"),"\u6709\u5176\u5b83\u542b\u4e49\u3002\u8bf7\u53c2\u89c1\u8be5\u51fd\u6570\u7684\u8bf4\u660e\u90e8\u5206\u3002"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 \u4efb\u610fCH\u652f\u6301\u7684\u8868\u8fbe\u5f0f."),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT column_name * 2 AS double FROM some_table"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias")," \u2014  ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," \u7684\u540d\u79f0\u3002\u522b\u540d\u5fc5\u987b\u7b26\u5408 ",(0,l.kt)("a",{parentName:"p",href:"#syntax-identifiers"},"\u6807\u8bc6\u7b26")," \u8bed\u6cd5."),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},'SELECT "table t".column_name FROM table_name AS "table t"'),"."))),(0,l.kt)("h3",{id:"notes-on-usage"},"\u7528\u6cd5\u6ce8\u610f"),(0,l.kt)("p",null,"\u522b\u540d\u5728\u5f53\u524d\u67e5\u8be2\u6216\u5b50\u67e5\u8be2\u4e2d\u662f\u5168\u5c40\u53ef\u89c1\u7684\uff0c\u4f60\u53ef\u4ee5\u5728\u67e5\u8be2\u8bed\u53e5\u7684\u4efb\u4f55\u4f4d\u7f6e\u5bf9\u8868\u8fbe\u5f0f\u5b9a\u4e49\u522b\u540d"),(0,l.kt)("p",null,"\u522b\u540d\u5728\u5f53\u524d\u67e5\u8be2\u7684\u5b50\u67e5\u8be2\u53ca\u4e0d\u540c\u5b50\u67e5\u8be2\u4e2d\u662f\u4e0d\u53ef\u89c1\u7684\u3002\u4f8b\u5982\uff0c\u6267\u884c\u5982\u4e0b\u67e5\u8be2SQL: ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT (SELECT sum(b.a) + num FROM b) - a.a AS num FROM a")," ,ClickHouse\u4f1a\u63d0\u793a\u5f02\u5e38 ",(0,l.kt)("inlineCode",{parentName:"p"},"Unknown identifier: num"),"."),(0,l.kt)("p",null,"\u5982\u679c\u7ed9select\u5b50\u67e5\u8be2\u8bed\u53e5\u7684\u7ed3\u679c\u5217\u5b9a\u4e49\u5176\u522b\u540d\uff0c\u90a3\u4e48\u5728\u5916\u5c42\u53ef\u4ee5\u4f7f\u7528\u8be5\u522b\u540d\u3002\u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT n + m FROM (SELECT 1 AS n, 2 AS m)"),"."),(0,l.kt)("p",null,"\u6ce8\u610f\u5217\u7684\u522b\u540d\u548c\u8868\u7684\u522b\u540d\u76f8\u540c\u65f6\u7684\u60c5\u5f62\uff0c\u8003\u8651\u5982\u4e0b\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    a Int,\n    b Int\n)\nENGINE = TinyLog()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    argMax(a, b),\n    sum(b) AS b\nFROM t\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 18.14.17):\nCode: 184. DB::Exception: Received from localhost:9000, 127.0.0.1. DB::Exception: Aggregate function sum(b) is found inside another aggregate function in query.\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u5148\u58f0\u660e\u4e86\u8868 ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," \u4ee5\u53ca\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\u3002\u7136\u540e\uff0c\u5728\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u53c8\u5b9a\u4e49\u4e86\u522b\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},"sum(b) AS b"),"\u3002\u7531\u4e8e\u522b\u540d\u662f\u5168\u5c40\u7684\uff0cClickHouse\u4f7f\u7528\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"sum(b)")," \u6765\u66ff\u6362\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"argMax(a, b)")," \u4e2d\u7684\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\u3002\u8fd9\u79cd\u66ff\u6362\u5bfc\u81f4\u51fa\u73b0\u5f02\u5e38\u3002"),(0,l.kt)("h2",{id:"asterisk"},"\u661f\u53f7"),(0,l.kt)("p",null,"select\u67e5\u8be2\u4e2d\uff0c\u661f\u53f7\u53ef\u4ee5\u4ee3\u66ff\u8868\u8fbe\u5f0f\u4f7f\u7528\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1\u201cselect\u201d\u90e8\u5206"),(0,l.kt)("h2",{id:"syntax-expressions"},"\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"\u8868\u8fbe\u5f0f\u662f\u51fd\u6570\u3001\u6807\u8bc6\u7b26\u3001\u5b57\u7b26\u3001\u4f7f\u7528\u8fd0\u7b97\u7b26\u7684\u8bed\u53e5\u3001\u62ec\u53f7\u4e2d\u7684\u8868\u8fbe\u5f0f\u3001\u5b50\u67e5\u8be2\u6216\u661f\u53f7\u3002\u5b83\u4e5f\u53ef\u4ee5\u5305\u542b\u522b\u540d\u3002\n\u8868\u8fbe\u5f0f\u5217\u8868\u662f\u7528\u9017\u53f7\u5206\u9694\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u8fbe\u5f0f\u3002\n\u53cd\u8fc7\u6765\uff0c\u51fd\u6570\u548c\u8fd0\u7b97\u7b26\u53ef\u4ee5\u5c06\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql_reference/syntax/"},"\u539f\u59cb\u6587\u6863")," "))}d.isMDXComponent=!0}}]);