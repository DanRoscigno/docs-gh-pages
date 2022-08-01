"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[54163],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29498:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={sidebar_position:39,sidebar_label:"REVOKE"},s="REVOKE",c={unversionedId:"ru/sql-reference/statements/revoke",id:"ru/sql-reference/statements/revoke",title:"REVOKE",description:"\u041e\u0442\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u043b\u0438 \u0440\u043e\u043b\u0435\u0439.",source:"@site/docs/ru/sql-reference/statements/revoke.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/revoke",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/revoke",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/revoke.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"REVOKE"},sidebar:"russia",previous:{title:"EXPLAIN",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/explain"},next:{title:"ATTACH",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/attach"}},p={},u=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"revoke-syntax",level:2},{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"revoke-description",level:2},{value:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043e\u0442\u0437\u044b\u0432",id:"partial-revokes-dscr",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"revoke-example",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"revoke"},"REVOKE"),(0,o.kt)("p",null,"\u041e\u0442\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u043b\u0438 \u0440\u043e\u043b\u0435\u0439."),(0,o.kt)("h2",{id:"revoke-syntax"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041e\u0442\u0437\u044b\u0432 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.*|*.*|table|*} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041e\u0442\u0437\u044b\u0432 \u0440\u043e\u043b\u0435\u0439 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,o.kt)("h2",{id:"revoke-description"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u043e\u0442\u0437\u044b\u0432\u0430 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0435\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT (x,y)"),", \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u0435\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432: ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT(x,y) ..."),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT * ...")," \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE ALL PRIVILEGES ..."),"."),(0,o.kt)("h3",{id:"partial-revokes-dscr"},"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043e\u0442\u0437\u044b\u0432"),(0,o.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u0447\u0430\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0435\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT *.*"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445."),(0,o.kt)("h2",{id:"revoke-example"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)("p",null,"\u041f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"john")," \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438\u0437 \u0432\u0441\u0435\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0440\u043e\u043c\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON *.* TO john;\nREVOKE SELECT ON accounts.* FROM john;\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"mira")," \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438\u0437 \u0432\u0441\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts.staff")," \u043a\u0440\u043e\u043c\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"wage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON accounts.staff TO mira;\nREVOKE SELECT(wage) ON accounts.staff FROM mira;\n")))}d.isMDXComponent=!0}}]);