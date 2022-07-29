"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[19899],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],s={},o="session_log",p={unversionedId:"en/operations/system-tables/session_log",id:"en/operations/system-tables/session_log",title:"session_log",description:"Contains information about all successful and failed login and logout events.",source:"@site/docs/en/operations/system-tables/session_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/session_log",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/session_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/session_log.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"row_policies",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/row_policies"},next:{title:"settings",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/settings"}},c={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"session_log"},"session_log"),(0,r.kt)("p",null,"Contains information about all successful and failed login and logout events."),(0,r.kt)("p",null,"Columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Login/logout result. Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LoginFailure")," \u2014 Login error."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LoginSuccess")," \u2014 Successful login."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Logout")," \u2014 Logout from the system."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 Authentication ID, which is a UUID that is automatically generated each time user logins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 Session ID that is passed by client via ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/interfaces/http"},"HTTP")," interface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/date"},"Date"),") \u2014 Login/logout date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Login/logout time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 Login/logout starting time with microseconds precision."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 User name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth_type")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 The authentication type. Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NO_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLAINTEXT_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SHA256_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DOUBLE_SHA1_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KERBEROS")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"profiles")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 The list of profiles set for all roles and/or users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roles")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 The list of roles to which the profile is applied."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"settings")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/tuple"},"Tuple"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),"))) \u2014 Settings that were changed when the client logged in/out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_address")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 The IP address that was used to log in/out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_port")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 The client port that was used to log in/out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 The interface from which the login was initiated. Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TCP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gRPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PostgreSQL")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_hostname")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 The hostname of the client machine where the ",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/interfaces/cli"},"clickhouse-client")," or another TCP client is run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 The ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," or another TCP client name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_revision")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Revision of the ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," or another TCP client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_major")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The major version of the ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," or another TCP client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_minor")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The minor version of the ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," or another TCP client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_patch")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Patch component of the ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," or another TCP client version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"failure_reason")," (",(0,r.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 The exception message containing the reason for the login/logout failure.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.session_log LIMIT 1 FORMAT Vertical;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:                    LoginSuccess\nauth_id:                 45e6bd83-b4aa-4a23-85e6-bd83b4aa1a23\nsession_id:\nevent_date:              2021-10-14\nevent_time:              2021-10-14 20:33:52\nevent_time_microseconds: 2021-10-14 20:33:52.104247\nuser:                    default\nauth_type:               PLAINTEXT_PASSWORD\nprofiles:                ['default']\nroles:                   []\nsettings:                [('load_balancing','random'),('max_memory_usage','10000000000')]\nclient_address:          ::ffff:127.0.0.1\nclient_port:             38490\ninterface:               TCP\nclient_hostname:\nclient_name:             ClickHouse client\nclient_revision:         54449\nclient_version_major:    21\nclient_version_minor:    10\nclient_version_patch:    0\nfailure_reason:\n")))}m.isMDXComponent=!0}}]);