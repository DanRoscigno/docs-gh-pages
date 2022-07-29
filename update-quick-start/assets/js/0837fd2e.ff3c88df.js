"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9214],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,d=m["".concat(o,".").concat(u)]||m[u]||k[u]||i;return n?a.createElement(d,p(p({ref:t},c),{},{components:n})):a.createElement(d,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69536:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),p=["components"],l={sidebar_position:47,sidebar_label:"OPTIMIZE"},o="OPTIMIZE",s={unversionedId:"ru/sql-reference/statements/optimize",id:"ru/sql-reference/statements/optimize",title:"OPTIMIZE",description:"misc_operations-optimize}",source:"@site/docs/ru/sql-reference/statements/optimize.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/optimize",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/optimize",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/optimize.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,sidebar_label:"OPTIMIZE"},sidebar:"russia",previous:{title:"KILL",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/kill"},next:{title:"RENAME",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/rename"}},c={},k=[{value:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 BY",id:"by-expression",level:2}],m={toc:k};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"misc_operations-optimize"},"OPTIMIZE"),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u043d\u0435\u043f\u043b\u0430\u043d\u043e\u0432\u043e\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"`OPTIMIZE` \u043d\u0435 \u0443\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438 `Too many parts`.\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE [db.]name [ON CLUSTER cluster] [PARTITION partition | PARTITION ID 'partition_id'] [FINAL] [DEDUPLICATE [BY expression]]\n")),(0,i.kt)("p",{parentName:"div"},"\u041c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/special/materializedview"},"MaterializedView")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/special/buffer"},"Buffer"),". \u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f."),(0,i.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/replication"},"ReplicatedMergeTree"),", ClickHouse \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0437\u0430\u0434\u0430\u0447\u0443 \u043d\u0430 \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u0438 \u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u0435\u0451 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0432\u0441\u0435\u0445 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0445 (\u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#replication-alter-partitions-sync"},"replication_alter_partitions_sync")," \u0440\u0430\u0432\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),") \u0438\u043b\u0438 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0440\u0435\u043f\u043b\u0438\u043a\u0435 (\u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#replication-alter-partitions-sync"},"replication_alter_partitions_sync")," \u0440\u0430\u0432\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",(0,i.kt)("inlineCode",{parentName:"li"},"OPTIMIZE")," \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441\u043b\u0438\u044f\u043d\u0438\u0435, \u0442\u043e\nClickHouse \u043d\u0435 \u043e\u043f\u043e\u0432\u0435\u0449\u0430\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u0427\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#setting-optimize_throw_if_noop"},"optimize_throw_if_noop"),"."),(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"PARTITION"),", \u0442\u043e \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/alter/#alter-how-to-specify-part-expr"},"\u041a\u0430\u043a \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043c\u044f \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445"),"."),(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"FINAL"),", \u0442\u043e \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u0430\u0436\u0435 \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0443\u0436\u0435 \u043b\u0435\u0436\u0430\u0442 \u0432 \u043e\u0434\u043d\u043e\u043c \u043a\u0443\u0441\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"DEDUPLICATE"),", \u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442 \u0441\u0445\u043b\u043e\u043f\u044b\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a (\u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445), \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0434\u0432\u0438\u0436\u043a\u0430 MergeTree.")),(0,i.kt)("p",{parentName:"div"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445) \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u0434\u043b\u044f \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0440\u0435\u043f\u043b\u0438\u043a \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#replication-wait-for-inactive-replica-timeout"},"replication_wait_for_inactive_replica_timeout"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 `replication_alter_partitions_sync` \u0440\u0430\u0432\u043d\u043e `2` \u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 `replication_wait_for_inactive_replica_timeout`, \u0442\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 `UNFINISHED`.\n")),(0,i.kt)("h2",{id:"by-expression"},"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 BY"),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0435\u0434\u0443\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044e \u043f\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u043c\u0443 \u043d\u0430\u0431\u043e\u0440\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u044f\u0432\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u0443\u044e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/#asterisk"},(0,i.kt)("inlineCode",{parentName:"a"},"*")),", \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/#columns-expression"},(0,i.kt)("inlineCode",{parentName:"a"},"COLUMNS"))," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/#except-modifier"},(0,i.kt)("inlineCode",{parentName:"a"},"EXCEPT")),"."),(0,i.kt)("p",null," \u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043b\u044f \u0434\u0435\u0434\u0443\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 (\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0438 \u043a\u043b\u044e\u0447 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438), \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f (\u043a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0441\u0438\u043c\u0432\u043e\u043b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 `*` \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 `SELECT`: \u0441\u0442\u043e\u043b\u0431\u0446\u044b [MATERIALIZED](/docs-gh-pages/update-quick-start/ru/sql-reference/statements/create/table#materialized) \u0438 [ALIAS](/docs-gh-pages/update-quick-start/ru/sql-reference/statements/create/table#alias) \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442.\n\u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u043b\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a, \u0442\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u0435\u0440\u043d\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443. \u0417\u0430\u043f\u0440\u043e\u0441 \u0432\u0438\u0434\u0430 `DEDUPLICATE BY aliased_value` \u0442\u0430\u043a\u0436\u0435 \u0432\u0435\u0440\u043d\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443.\n:::\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table DEDUPLICATE; -- \u043f\u043e \u0432\u0441\u0435\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c\nOPTIMIZE TABLE table DEDUPLICATE BY *; -- \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u044b MATERIALIZED \u0438 ALIAS\nOPTIMIZE TABLE table DEDUPLICATE BY colX,colY,colZ;\nOPTIMIZE TABLE table DEDUPLICATE BY * EXCEPT colX;\nOPTIMIZE TABLE table DEDUPLICATE BY * EXCEPT (colX, colY);\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex');\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex') EXCEPT colX;\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex') EXCEPT (colX, colY);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,i.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example (\n    primary_key Int32,\n    secondary_key Int32,\n    value UInt32,\n    partition_key UInt32,\n    materialized_value UInt32 MATERIALIZED 12345,\n    aliased_value UInt32 ALIAS 2,\n    PRIMARY KEY primary_key\n) ENGINE=MergeTree\nPARTITION BY partition_key\nORDER BY (primary_key, secondary_key);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO example (primary_key, secondary_key, value, partition_key)\nVALUES (0, 0, 0, 0), (0, 0, 0, 0), (1, 1, 2, 2), (1, 1, 2, 3), (1, 1, 3, 3);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043d\u0443\u0436\u043d\u043e \u0434\u0435\u0434\u0443\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0442\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0421\u0442\u0440\u043e\u043a\u0430 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0432\u0441\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0440\u0430\u0432\u043d\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", \u0442\u043e \u0434\u0435\u0434\u0443\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0439\u0434\u0435\u0442 \u043f\u043e \u0432\u0441\u0435\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c, \u043a\u0440\u043e\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"ALIAS")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED"),". \u0414\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," \u0431\u0443\u0434\u0443\u0442 \u0443\u0447\u0442\u0435\u043d\u044b: ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_key"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY *;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0414\u0435\u0434\u0443\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e \u0432\u0441\u0435\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c, \u043a\u0440\u043e\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"ALIAS")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED")," (",(0,i.kt)("inlineCode",{parentName:"p"},"BY *"),"), \u0438 \u0441 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary_key")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_key"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY * EXCEPT value;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0414\u0435\u0434\u0443\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary_key")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_key"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY primary_key, secondary_key, partition_key;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0414\u0435\u0434\u0443\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e \u043b\u044e\u0431\u043e\u043c\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u043c\u0443 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},".*_key"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary_key")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_key"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY COLUMNS('.*_key');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}u.isMDXComponent=!0}}]);