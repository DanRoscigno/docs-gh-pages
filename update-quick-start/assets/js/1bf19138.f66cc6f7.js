"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[26161],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],s={sidebar_position:43,sidebar_label:"DETACH"},c="DETACH Statement",i={unversionedId:"en/sql-reference/statements/detach",id:"en/sql-reference/statements/detach",title:"DETACH Statement",description:'Makes the server "forget" about the existence of a table, a materialized view, or a dictionary.',source:"@site/docs/en/sql-reference/statements/detach.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/detach",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/detach",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/detach.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"DETACH"},sidebar:"english",previous:{title:"DESCRIBE",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/describe-table"},next:{title:"DROP",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/drop"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"detach-statement"},"DETACH Statement"),(0,l.kt)("p",null,'Makes the server "forget" about the existence of a table, a materialized view, or a dictionary.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE|VIEW|DICTIONARY [IF EXISTS] [db.]name [ON CLUSTER cluster] [PERMANENTLY]\n")),(0,l.kt)("p",null,"Detaching does not delete the data or metadata of a table, a materialized view or a dictionary. If an entity was not detached ",(0,l.kt)("inlineCode",{parentName:"p"},"PERMANENTLY"),", on the next server launch the server will read the metadata and recall the table/view/dictionary again. If an entity was detached ",(0,l.kt)("inlineCode",{parentName:"p"},"PERMANENTLY"),", there will be no automatic recall."),(0,l.kt)("p",null,"Whether a table or a dictionary was detached permanently or not, in both cases you can reattach them using the ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/attach"},"ATTACH")," query.\nSystem log tables can be also attached back (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"query_log"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"text_log"),", etc). Other system tables can't be reattached. On the next server launch the server will recall those tables again."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH MATERIALIZED VIEW")," does not work with short syntax (without ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"), but you can attach it using the ",(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE")," query."),(0,l.kt)("p",null,"Note that you can not detach permanently the table which is already detached (temporary). But you can attach it back and then detach permanently again."),(0,l.kt)("p",null,"Also you can not ",(0,l.kt)("a",{parentName:"p",href:"../../sql-reference/statements/drop#drop-table"},"DROP")," the detached table, or ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/table"},"CREATE TABLE")," with the same name as detached permanently, or replace it with the other table with ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/rename"},"RENAME TABLE")," query."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Creating a table:"),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test ENGINE = Log AS SELECT * FROM numbers(10);\nSELECT * FROM test;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2502      2 \u2502\n\u2502      3 \u2502\n\u2502      4 \u2502\n\u2502      5 \u2502\n\u2502      6 \u2502\n\u2502      7 \u2502\n\u2502      8 \u2502\n\u2502      9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Detaching the table:"),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE test;\nSELECT * FROM test;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 21.4.1):\nCode: 60. DB::Exception: Received from localhost:9000. DB::Exception: Table default.test does not exist.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/view#materialized"},"Materialized View")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/dictionaries/"},"Dictionaries"))))}m.isMDXComponent=!0}}]);