"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59376],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return T}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),T=a,f=m["".concat(o,".").concat(T)]||m[T]||c[T]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function T(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return T},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:44,sidebar_label:"TTL"},o="\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 TTL \u0442\u0430\u0431\u043b\u0438\u0446\u044b",u={unversionedId:"ru/sql-reference/statements/alter/ttl",id:"ru/sql-reference/statements/alter/ttl",title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 TTL \u0442\u0430\u0431\u043b\u0438\u0446\u044b",description:"manipuliatsii-s-ttl-tablitsy}",source:"@site/docs/ru/sql-reference/statements/alter/ttl.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/ttl",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/alter/ttl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/ttl.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"TTL"},sidebar:"russia",previous:{title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/alter/constraint"},next:{title:"USER",permalink:"/docs-gh-pages/up/ru/sql-reference/statements/alter/user"}},p={},c=[{value:"MODIFY TTL",id:"modify-ttl",level:2},{value:"REMOVE TTL",id:"remove-ttl",level:2},{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435-\u0442\u0430\u043a\u0436\u0435",level:3}],m={toc:c};function T(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"manipuliatsii-s-ttl-tablitsy"},"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 TTL \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,l.kt)("h2",{id:"modify-ttl"},"MODIFY TTL"),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/mergetree#mergetree-column-ttl"},"TTL \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b")," \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0432\u0438\u0434\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table-name MODIFY TTL ttl-expression\n")),(0,l.kt)("h2",{id:"remove-ttl"},"REMOVE TTL"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 TTL \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0432\u0438\u0434\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name REMOVE TTL\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," \u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u043c \u0435\u0451 \u0434\u0430\u043d\u043d\u044b\u043c\u0438:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_ttl\n(\n    event_time DateTime,\n    UserID UInt64,\n    Comment String\n)\nENGINE MergeTree()\nORDER BY tuple()\nTTL event_time + INTERVAL 3 MONTH;\nSETTINGS min_bytes_for_wide_part = 0;\n\nINSERT INTO table_with_ttl VALUES (now(), 1, 'username1');\n\nINSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\n")),(0,l.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u0434\u043b\u044f \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u043f\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl;\n")),(0,l.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u0432\u0442\u043e\u0440\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u043c \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_ttl REMOVE TTL;\n")),(0,l.kt)("p",null,"\u0417\u0430\u043d\u043e\u0432\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0438 \u0441\u043d\u043e\u0432\u0430 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043e\u0447\u0438\u0441\u0442\u043a\u0443 \u043f\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIMIZE"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\nOPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2502   2020-08-11 12:44:57 \u2502       2 \u2502    username2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/mergetree#mergetree-column-ttl"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0435 TTL"),"."),(0,l.kt)("li",{parentName:"ul"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/alter/column#alter_modify-column"},"\u0441 TTL"),".")))}T.isMDXComponent=!0}}]);