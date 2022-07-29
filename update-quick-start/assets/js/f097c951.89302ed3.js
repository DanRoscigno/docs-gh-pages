"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38728],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={sidebar_position:40,sidebar_label:"REVOKE"},s="\u6743\u9650\u53d6\u6d88",c={unversionedId:"zh/sql-reference/statements/revoke",id:"zh/sql-reference/statements/revoke",title:"\u6743\u9650\u53d6\u6d88",description:"revoke}",source:"@site/docs/zh/sql-reference/statements/revoke.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/revoke",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/revoke",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/revoke.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"REVOKE"},sidebar:"chinese",previous:{title:"ATTACH",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/attach"},next:{title:"CHECK",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/check-table"}},p={},u=[{value:"\u8bed\u6cd5 {#revoke-\u8bed\u6cd5}",id:"\u8bed\u6cd5-revoke-\u8bed\u6cd5",level:2},{value:"\u8bf4\u660e",id:"revoke-description",level:2},{value:"\u53d6\u6d88\u90e8\u5206\u6743\u9650",id:"partial-revokes-dscr",level:3},{value:"\u793a\u4f8b",id:"revoke-example",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"revoke"},"\u6743\u9650\u53d6\u6d88"),(0,o.kt)("p",null,"\u53d6\u6d88\u7528\u6237\u6216\u89d2\u8272\u7684\u6743\u9650"),(0,o.kt)("h2",{id:"\u8bed\u6cd5-revoke-\u8bed\u6cd5"},"\u8bed\u6cd5 {#revoke-\u8bed\u6cd5}"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53d6\u6d88\u7528\u6237\u7684\u6743\u9650")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.*|*.*|table|*} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53d6\u6d88\u7528\u6237\u7684\u89d2\u8272")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,o.kt)("h2",{id:"revoke-description"},"\u8bf4\u660e"),(0,o.kt)("p",null,"\u8981\u53d6\u6d88\u67d0\u4e9b\u6743\u9650\uff0c\u53ef\u4f7f\u7528\u6bd4\u8981\u64a4\u56de\u7684\u6743\u9650\u66f4\u5927\u8303\u56f4\u7684\u6743\u9650\u3002\u4f8b\u5982\uff0c\u5f53\u7528\u6237\u6709  ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT (x,y)"),"\u6743\u9650\u65f6\uff0c\u7ba1\u7406\u5458\u53ef\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT(x,y) ..."),", \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT * ..."),", \u751a\u81f3\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"REVOKE ALL PRIVILEGES ..."),"\u6765\u53d6\u6d88\u539f\u6709\u6743\u9650\u3002"),(0,o.kt)("h3",{id:"partial-revokes-dscr"},"\u53d6\u6d88\u90e8\u5206\u6743\u9650"),(0,o.kt)("p",null,"\u53ef\u4ee5\u53d6\u6d88\u90e8\u5206\u6743\u9650\u3002\u4f8b\u5982\uff0c\u5f53\u7528\u6237\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT *.*")," \u6743\u9650\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6388\u4e88\u5bf9\u90e8\u5206\u5e93\u6216\u8868\u7684\u8bfb\u53d6\u6743\u9650\u6765\u64a4\u56de\u539f\u6709\u6743\u9650\u3002"),(0,o.kt)("h2",{id:"revoke-example"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u6388\u6743 ",(0,o.kt)("inlineCode",{parentName:"p"},"john"),"\u8d26\u53f7\u80fd\u67e5\u8be2\u6240\u6709\u5e93\u7684\u6240\u6709\u8868\uff0c\u9664\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),"\u5e93\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON *.* TO john;\nREVOKE SELECT ON accounts.* FROM john;\n")),(0,o.kt)("p",null,"\u6388\u6743 ",(0,o.kt)("inlineCode",{parentName:"p"},"mira"),"\u8d26\u53f7\u80fd\u67e5\u8be2 ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts.staff"),"\u8868\u7684\u6240\u6709\u5217\uff0c\u9664\u4e86  ",(0,o.kt)("inlineCode",{parentName:"p"},"wage"),"\u8fd9\u4e00\u5217\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON accounts.staff TO mira;\nREVOKE SELECT(wage) ON accounts.staff FROM mira;\n")),(0,o.kt)("p",null,"{## ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings/"},"\u539f\u59cb\u6587\u6863")," ##}"))}d.isMDXComponent=!0}}]);