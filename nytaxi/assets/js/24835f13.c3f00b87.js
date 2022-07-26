"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7469],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47653:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},s="role_grants",p={unversionedId:"en/operations/system-tables/role-grants",id:"en/operations/system-tables/role-grants",title:"role_grants",description:"Contains the role grants for users and roles. To add entries to this table, use GRANT role TO user.",source:"@site/docs/en/operations/system-tables/role-grants.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/role-grants",permalink:"/docs-gh-pages/nytaxi/en/operations/system-tables/role-grants",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/role-grants.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"replication_queue",permalink:"/docs-gh-pages/nytaxi/en/operations/system-tables/replication_queue"},next:{title:"roles",permalink:"/docs-gh-pages/nytaxi/en/operations/system-tables/roles"}},u={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"role_grants"},"role_grants"),(0,o.kt)("p",null,"Contains the role grants for users and roles. To add entries to this table, use ",(0,o.kt)("inlineCode",{parentName:"p"},"GRANT role TO user"),"."),(0,o.kt)("p",null,"Columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/string"},"String"),")) \u2014 User name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/string"},"String"),")) \u2014 Role name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"granted_role_name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/string"},"String"),") \u2014 Name of role granted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"role_name")," role. To grant one role to another one use ",(0,o.kt)("inlineCode",{parentName:"p"},"GRANT role1 TO role2"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"granted_role_is_default")," (",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,o.kt)("inlineCode",{parentName:"p"},"granted_role")," is a default role. Possible values:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"granted_role")," is a default role."),(0,o.kt)("li",{parentName:"ul"},"0 \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"granted_role")," is not a default role."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"with_admin_option")," (",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Flag that shows whether ",(0,o.kt)("inlineCode",{parentName:"p"},"granted_role")," is a role with ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/statements/grant#admin-option-privilege"},"ADMIN OPTION")," privilege. Possible values:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1 \u2014 The role has ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION")," privilege."),(0,o.kt)("li",{parentName:"ul"},"0 \u2014 The role without ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION")," privilege.")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/role-grants"},"Original article")," "))}d.isMDXComponent=!0}}]);