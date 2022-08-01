"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[37386],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75150:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],s={},o="system.role_grants",u={unversionedId:"ru/operations/system-tables/role-grants",id:"ru/operations/system-tables/role-grants",title:"system.role_grants",description:"systemtables-rolegrants}",source:"@site/docs/ru/operations/system-tables/role-grants.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/role-grants",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/role-grants",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/role-grants.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.replication_queue",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/replication_queue"},next:{title:"system.roles",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/roles"}},p={},c=[],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-role_grants"},"system.role_grants"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/grant"},"\u0433\u0440\u0430\u043d\u0442\u044b")," \u0440\u043e\u043b\u0435\u0439 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0440\u043e\u043b\u0435\u0439. \u0427\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u044d\u0442\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"GRANT role TO user"),"."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"role_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0440\u043e\u043b\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"granted_role_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0418\u043c\u044f \u0440\u043e\u043b\u0438, \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u0440\u043e\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"role_name"),". \u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043e\u0434\u043d\u0443 \u0440\u043e\u043b\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"GRANT role1 TO role2"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"granted_role_is_default")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u0424\u043b\u0430\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"granted_role")," \u0440\u043e\u043b\u044c\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"granted_role")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u043e\u043b\u044c\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,i.kt)("li",{parentName:"ul"},"0 \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"granted_role")," \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u043e\u043b\u044c\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"with_admin_option")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u0424\u043b\u0430\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"granted_role")," \u0440\u043e\u043b\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0435\u0439 ",(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION"),". \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1 \u2014 \u0420\u043e\u043b\u044c \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0435\u0439 ",(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION"),"."),(0,i.kt)("li",{parentName:"ul"},"0 \u2014 \u0420\u043e\u043b\u044c \u043d\u0435 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0435\u0439 ",(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION"),".")))))}d.isMDXComponent=!0}}]);