"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76178],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89426:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],s={},p="system.session_log",o={unversionedId:"ru/operations/system-tables/session_log",id:"ru/operations/system-tables/session_log",title:"system.session_log",description:"systemtables-sessionlog}",source:"@site/docs/ru/operations/system-tables/session_log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/session_log",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/session_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/session_log.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.row_policies",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/row_policies"},next:{title:"system.settings",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/settings"}},u={},c=[],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-session_log"},"system.session_log"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u0441\u0435\u0445 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u0438 \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u044b\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445 \u0432\u0445\u043e\u0434\u0430 \u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LoginFailure")," \u2014 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LoginSuccess")," \u2014 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0432\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Logout")," \u2014 \u0432\u044b\u0445\u043e\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auth_id")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/uuid"},"UUID"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0441\u043e\u0431\u043e\u0439 UUID, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0432\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"session_id")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u0435\u0441\u0441\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/interfaces/http"},"HTTP"),"-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/date"},"Date"),") \u2014 \u0434\u0430\u0442\u0430 \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auth_type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0442\u0438\u043f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NO_PASSWORD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLAINTEXT_PASSWORD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SHA256_PASSWORD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOUBLE_SHA1_PASSWORD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LDAP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KERBEROS")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"profiles")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0440\u043e\u043b\u0435\u0439 \u0438 (\u0438\u043b\u0438) \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"roles")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0439, \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"settings")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/tuple"},"Tuple"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),"))) \u2014 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_address")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP-\u0430\u0434\u0440\u0435\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_port")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u043f\u043e\u0440\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interface")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d \u0432\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TCP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gRPC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MySQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PostgreSQL")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_hostname")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0445\u043e\u0441\u0442\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/interfaces/cli"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 TCP \u043a\u043b\u0438\u0435\u043d\u0442."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 TCP \u043a\u043b\u0438\u0435\u043d\u0442."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_revision")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0440\u0435\u0432\u0438\u0437\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_version_major")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0441\u0442\u0430\u0440\u0448\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_version_minor")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043c\u043b\u0430\u0434\u0448\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_version_patch")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043f\u0430\u0442\u0447 ",(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"failure_reason")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0441\u0431\u043e\u044f \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.session_log LIMIT 1 FORMAT Vertical;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:                    LoginSuccess\nauth_id:                 45e6bd83-b4aa-4a23-85e6-bd83b4aa1a23\nsession_id:\nevent_date:              2021-10-14\nevent_time:              2021-10-14 20:33:52\nevent_time_microseconds: 2021-10-14 20:33:52.104247\nuser:                    default\nauth_type:               PLAINTEXT_PASSWORD\nprofiles:                ['default']\nroles:                   []\nsettings:                [('load_balancing','random'),('max_memory_usage','10000000000')]\nclient_address:          ::ffff:127.0.0.1\nclient_port:             38490\ninterface:               TCP\nclient_hostname:\nclient_name:             ClickHouse client\nclient_revision:         54449\nclient_version_major:    21\nclient_version_minor:    10\nclient_version_patch:    0\nfailure_reason:\n")))}d.isMDXComponent=!0}}]);