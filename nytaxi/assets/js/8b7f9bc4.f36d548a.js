"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41610],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84453:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=["components"],o={sidebar_position:38,sidebar_label:"\u0421\u043b\u043e\u0432\u0430\u0440\u044c"},s="CREATE DICTIONARY",l={unversionedId:"ru/sql-reference/statements/create/dictionary",id:"ru/sql-reference/statements/create/dictionary",title:"CREATE DICTIONARY",description:"create-dictionary-query}",source:"@site/docs/ru/sql-reference/statements/create/dictionary.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/dictionary",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/create/dictionary",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/create/dictionary.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"\u0421\u043b\u043e\u0432\u0430\u0440\u044c"},sidebar:"russia",previous:{title:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/create/view"},next:{title:"FUNCTION",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/create/function"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-dictionary-query"},"CREATE DICTIONARY"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/external-dictionaries/external-dicts"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0441\u043b\u043e\u0432\u0430\u0440\u044c")," \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u043c"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u043f\u0430\u043c\u044f\u0442\u0438")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u043f\u0435\u0440\u0438\u043e\u0434\u043e\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY [OR REPLACE][IF NOT EXISTS] [db.]dictionary_name [ON CLUSTER cluster]\n(\n    key1 type1  [DEFAULT|EXPRESSION expr1] [IS_OBJECT_ID],\n    key2 type2  [DEFAULT|EXPRESSION expr2],\n    attr1 type2 [DEFAULT|EXPRESSION expr3] [HIERARCHICAL|INJECTIVE],\n    attr2 type2 [DEFAULT|EXPRESSION expr4] [HIERARCHICAL|INJECTIVE]\n)\nPRIMARY KEY key1, key2\nSOURCE(SOURCE_NAME([param1 value1 ... paramN valueN]))\nLAYOUT(LAYOUT_NAME([param_name param_value]))\nLIFETIME({MIN min_val MAX max_val | max_val})\nSETTINGS(setting_name = setting_value, setting_name = setting_value, ...)\nCOMMENT 'Comment'\n")),(0,i.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432. \u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044b \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u0442\u0438\u043f, \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,i.kt)("p",null,"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0432 \u043f\u0430\u043c\u044f\u0442\u0438"),", \u043a\u043b\u044e\u0447\u0430\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0434\u0438\u043d \u0438 \u0431\u043e\u043b\u0435\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432."),(0,i.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/external-dictionaries/external-dicts"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438"),"."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0441\u043b\u043e\u0432\u0430\u0440\u044e \u043f\u0440\u0438 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0435\u043a\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMENT"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500value\u2500\u2500\u2510\n\u2502  1 \u2502 First  \u2502\n\u2502  2 \u2502 Second \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u044f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dictionary_with_comment\n(\n    id UInt64,\n    value String\n)\nPRIMARY KEY id\nSOURCE(CLICKHOUSE(HOST 'localhost' PORT tcpPort() TABLE 'source_table'))\nLAYOUT(FLAT())\nLIFETIME(MIN 0 MAX 1000)\nCOMMENT 'The temporary dictionary';\n")),(0,i.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u0441\u043b\u043e\u0432\u0430\u0440\u044f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE DICTIONARY dictionary_with_comment;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE DICTIONARY default.dictionary_with_comment\n(\n    `id` UInt64,\n    `value` String\n)\nPRIMARY KEY id\nSOURCE(CLICKHOUSE(HOST 'localhost' PORT tcpPort() TABLE 'source_table'))\nLIFETIME(MIN 0 MAX 1000)\nLAYOUT(FLAT())\nCOMMENT 'The temporary dictionary' \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f \u043a \u0441\u043b\u043e\u0432\u0430\u0440\u044e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT comment FROM system.dictionaries WHERE name == 'dictionary_with_comment' AND database == currentDatabase();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 The temporary dictionary \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/system-tables/dictionaries"},"system.dictionaries")," \u2014 \u044d\u0442\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/external-dictionaries/external-dicts"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u0445"),".")))}m.isMDXComponent=!0}}]);