"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30685],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],c={sidebar_position:35,sidebar_label:"DATABASE"},o="CREATE DATABASE",l={unversionedId:"zh/sql-reference/statements/create/database",id:"zh/sql-reference/statements/create/database",title:"CREATE DATABASE",description:"query-language-create-database}",source:"@site/docs/zh/sql-reference/statements/create/database.md",sourceDirName:"zh/sql-reference/statements/create",slug:"/zh/sql-reference/statements/create/database",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/create/database",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/create/database.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"DATABASE"},sidebar:"chinese",previous:{title:"CREATE",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/create/"},next:{title:"TABLE",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/create/table"}},u={},p=[{value:"\u6761\u4ef6",id:"clauses",level:2},{value:"IF NOT EXISTS",id:"if-not-exists",level:3},{value:"ON CLUSTER",id:"on-cluster",level:3},{value:"ENGINE",id:"engine",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"query-language-create-database"},"CREATE DATABASE"),(0,s.kt)("p",null,"\u521b\u5efa\u6570\u636e\u5e93."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster] [ENGINE = engine(...)]\n")),(0,s.kt)("h2",{id:"clauses"},"\u6761\u4ef6"),(0,s.kt)("h3",{id:"if-not-exists"},"IF NOT EXISTS"),(0,s.kt)("p",null,"\u5982\u679c",(0,s.kt)("inlineCode",{parentName:"p"},"db_name"),"\u6570\u636e\u5e93\u5df2\u7ecf\u5b58\u5728\uff0c\u5219ClickHouse\u4e0d\u4f1a\u521b\u5efa\u65b0\u6570\u636e\u5e93\u5e76\u4e14\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86\u5b50\u53e5\uff0c\u5219\u4e0d\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u6307\u5b9a\u5b50\u53e5\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002")),(0,s.kt)("h3",{id:"on-cluster"},"ON CLUSTER"),(0,s.kt)("p",null,"ClickHouse\u5728\u6307\u5b9a\u96c6\u7fa4\u7684\u6240\u6709\u670d\u52a1\u5668\u4e0a\u521b\u5efa",(0,s.kt)("inlineCode",{parentName:"p"},"db_name"),"\u6570\u636e\u5e93\u3002 \u66f4\u591a\u7ec6\u8282\u5728 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/distributed-ddl"},"Distributed DDL")," article."),(0,s.kt)("h3",{id:"engine"},"ENGINE"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/engines/database-engines/mysql"},"MySQL")," \u5141\u8bb8\u60a8\u4ece\u8fdc\u7a0bMySQL\u670d\u52a1\u5668\u68c0\u7d22\u6570\u636e. \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cClickHouse\u4f7f\u7528\u81ea\u5df1\u7684",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/engines/database-engines/"},"database engine"),". \u8fd8\u6709\u4e00\u4e2a",(0,s.kt)("a",{parentName:"p",href:"../../../engines/database-engines/lazy"},"lazy"),"\u5f15\u64ce."))}f.isMDXComponent=!0}}]);