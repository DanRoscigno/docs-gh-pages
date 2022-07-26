"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[13883],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||p;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),l=["components"],i={sidebar_position:40,sidebar_label:"remote"},o="remote, remoteSecure",s={unversionedId:"ru/sql-reference/table-functions/remote",id:"ru/sql-reference/table-functions/remote",title:"remote, remoteSecure",description:"remote-remotesecure}",source:"@site/docs/ru/sql-reference/table-functions/remote.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/remote",permalink:"/docs-gh-pages/up/ru/sql-reference/table-functions/remote",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/remote.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"remote"},sidebar:"russia",previous:{title:"numbers",permalink:"/docs-gh-pages/up/ru/sql-reference/table-functions/numbers"},next:{title:"url",permalink:"/docs-gh-pages/up/ru/sql-reference/table-functions/url"}},m={},u=[{value:"\u0421\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432 \u0430\u0434\u0440\u0435\u0441\u0430\u0445 {globs-in-addresses}",id:"\u0441\u0438\u043c\u0432\u043e\u043b\u044b-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0432-\u0430\u0434\u0440\u0435\u0441\u0430\u0445-globs-in-addresses",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"remote-remotesecure"},"remote, remoteSecure"),(0,p.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c \u0431\u0435\u0437 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0438\u043f\u0430 ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/engines/table-engines/special/distributed"},"Distributed"),". \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"remoteSecure")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,p.kt)("inlineCode",{parentName:"p"},"remote"),", \u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435."),(0,p.kt)("p",null,"\u041e\u0431\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,p.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"INSERT"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"remote('addresses_expr', db, table[, 'user'[, 'password']])\nremote('addresses_expr', db.table[, 'user'[, 'password']])\nremoteSecure('addresses_expr', db, table[, 'user'[, 'password']])\nremoteSecure('addresses_expr', db.table[, 'user'[, 'password']])\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"addresses_expr")," \u2014 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0449\u0435\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0434\u0438\u043d \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u2014 \u044d\u0442\u043e ",(0,p.kt)("inlineCode",{parentName:"p"},"host:port")," \u0438\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e ",(0,p.kt)("inlineCode",{parentName:"p"},"host"),"."),(0,p.kt)("p",{parentName:"li"},"  \u0412\u043c\u0435\u0441\u0442\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,p.kt)("inlineCode",{parentName:"p"},"host")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0438\u043c\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u0435\u0433\u043e \u0430\u0434\u0440\u0435\u0441 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 IPv4 \u0438\u043b\u0438 IPv6. IPv6 \u0430\u0434\u0440\u0435\u0441 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"port")," \u2014 TCP-\u043f\u043e\u0440\u0442 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0415\u0441\u043b\u0438 \u043f\u043e\u0440\u0442 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port"},"tcp_port")," \u0438\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0442\u0438\u043b\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,p.kt)("inlineCode",{parentName:"p"},"remote")," (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - 9000), \u0438 ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port_secure"},"tcp_port_secure"),", \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0442\u0438\u043b\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,p.kt)("inlineCode",{parentName:"p"},"remoteSecure")," (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 9440)."),(0,p.kt)("p",{parentName:"li"},"  \u0421 IPv6-\u0430\u0434\u0440\u0435\u0441\u043e\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e\u0440\u0442."),(0,p.kt)("p",{parentName:"li"},"  \u0422\u0438\u043f: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"db")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445. \u0422\u0438\u043f: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"table")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0422\u0438\u043f: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"user")," \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d, \u0442\u043e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,p.kt)("inlineCode",{parentName:"p"},"default"),". \u0422\u0438\u043f: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c. \u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d, \u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c. \u0422\u0438\u043f: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"sharding_key")," \u2014 \u043a\u043b\u044e\u0447 \u0448\u0430\u0440\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u0443\u0437\u043b\u0430\u043c\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: ",(0,p.kt)("inlineCode",{parentName:"p"},"insert into remote('127.0.0.1:9000,127.0.0.2', db, table, 'default', rand())"),". \u0422\u0438\u043f: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"UInt32"),"."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,p.kt)("p",null,"\u041d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435")),(0,p.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"remote")," \u043c\u0435\u043d\u0435\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e, \u0447\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0438\u043f\u0430 ",(0,p.kt)("inlineCode",{parentName:"p"},"Distributed"),", \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0437\u0430\u043d\u043e\u0432\u043e \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u043c\u0435\u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432, \u0442\u043e \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043d\u0435 \u0432\u0435\u0434\u0451\u0442\u0441\u044f \u0441\u043a\u0432\u043e\u0437\u043d\u043e\u0439 \u043f\u043e\u0434\u0441\u0447\u0451\u0442 \u043e\u0448\u0438\u0431\u043e\u043a \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u043c\u0438. \u041f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0442\u0438\u043f\u0430 ",(0,p.kt)("inlineCode",{parentName:"p"},"Distributed"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,p.kt)("inlineCode",{parentName:"p"},"remote")," \u0432 \u0442\u0430\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f."),(0,p.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"remote")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u0430 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),(0,p.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u043c\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430\u043c\u0438 ClickHouse \u0434\u043b\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439."),(0,p.kt)("li",{parentName:"ul"},"\u041d\u0435\u0447\u0430\u0441\u0442\u044b\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u0440\u0443\u0447\u043d\u0443\u044e."),(0,p.kt)("li",{parentName:"ul"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u0433\u0434\u0435 \u043d\u0430\u0431\u043e\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u0437\u0430\u043d\u043e\u0432\u043e.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0410\u0434\u0440\u0435\u0441\u0430")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"example01-01-1\nexample01-01-1:9000\nlocalhost\n127.0.0.1\n[::]:9000\n[2a02:6b8:0:1111::11]:9000\n")),(0,p.kt)("p",null,"\u0410\u0434\u0440\u0435\u0441\u0430 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 ClickHouse \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043a\u0430\u043a \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439, \u0442.\u0435. \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u0435\u0433\u043e \u043f\u043e \u0432\u0441\u0435\u043c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0430\u0434\u0440\u0435\u0441\u0430\u043c \u043a\u0430\u043a \u043d\u0430 \u0448\u0430\u0440\u0434\u044b \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438. \u041f\u0440\u0438\u043c\u0435\u0440:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"example01-01-1,example01-02-1\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,p.kt)("p",null,"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM remote('127.0.0.1', db.remote_engine_table) LIMIT 3;\n")),(0,p.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE remote_table (name String, value UInt32) ENGINE=Memory;\nINSERT INTO FUNCTION remote('127.0.0.1', currentDatabase(), 'remote_table') VALUES ('test', 42);\nSELECT * FROM remote_table;\n")),(0,p.kt)("h2",{id:"\u0441\u0438\u043c\u0432\u043e\u043b\u044b-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0432-\u0430\u0434\u0440\u0435\u0441\u0430\u0445-globs-in-addresses"},"\u0421\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432 \u0430\u0434\u0440\u0435\u0441\u0430\u0445 {globs-in-addresses}"),(0,p.kt)("p",null,"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0432 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445 ",(0,p.kt)("inlineCode",{parentName:"p"},"{ }")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0448\u0430\u0440\u0434\u043e\u0432 \u0438\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u043e\u0442\u043a\u0430\u0437\u0430. \u0412 \u043e\u0434\u043d\u043e\u043c URL \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432.\n\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0438\u043f\u044b \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"{",(0,p.kt)("em",{parentName:"li"},"a"),",",(0,p.kt)("em",{parentName:"li"},"b"),"} - \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u044f\u0442\u043e\u0439. \u0412\u0435\u0441\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,p.kt)("em",{parentName:"li"},"a")," \u0432 \u0430\u0434\u0440\u0435\u0441\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0448\u0430\u0440\u0434\u0430, \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,p.kt)("em",{parentName:"li"},"b")," \u0432 \u0430\u0434\u0440\u0435\u0441\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0448\u0430\u0440\u0434\u0430 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,p.kt)("inlineCode",{parentName:"li"},"example0{1,2}-1")," \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0430\u0434\u0440\u0435\u0441\u0430 ",(0,p.kt)("inlineCode",{parentName:"li"},"example01-1")," \u0438 ",(0,p.kt)("inlineCode",{parentName:"li"},"example02-1"),"."),(0,p.kt)("li",{parentName:"ul"},"{",(0,p.kt)("em",{parentName:"li"},"n"),"..",(0,p.kt)("em",{parentName:"li"},"m"),"} - \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0447\u0438\u0441\u0435\u043b. \u042d\u0442\u043e\u0442 \u0448\u0430\u0431\u043b\u043e\u043d \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0430\u0434\u0440\u0435\u0441\u0430 \u0448\u0430\u0440\u0434\u043e\u0432 \u0441 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u043c\u0438\u0441\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u043c\u0438 \u043e\u0442 ",(0,p.kt)("em",{parentName:"li"},"n")," \u0434\u043e ",(0,p.kt)("em",{parentName:"li"},"m"),". ",(0,p.kt)("inlineCode",{parentName:"li"},"example0{1..2}-1")," \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 ",(0,p.kt)("inlineCode",{parentName:"li"},"example01-1")," \u0438 ",(0,p.kt)("inlineCode",{parentName:"li"},"example02-1"),"."),(0,p.kt)("li",{parentName:"ul"},"{",(0,p.kt)("em",{parentName:"li"},"0n"),"..",(0,p.kt)("em",{parentName:"li"},"0m"),"} - \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0447\u0438\u0441\u0435\u043b \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438 \u043d\u0443\u043b\u044f\u043c\u0438. \u0422\u0430\u043a\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0432\u0435\u0434\u0443\u0449\u0438\u0435 \u043d\u0443\u043b\u0438 \u0432 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0445. \u041f\u043e \u0448\u0430\u0431\u043b\u043e\u043d\u0443 ",(0,p.kt)("inlineCode",{parentName:"li"},"example{01..03}-1")," \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f ",(0,p.kt)("inlineCode",{parentName:"li"},"example01-1"),", ",(0,p.kt)("inlineCode",{parentName:"li"},"example02-1")," \u0438 ",(0,p.kt)("inlineCode",{parentName:"li"},"example03-1"),"."),(0,p.kt)("li",{parentName:"ul"},"{",(0,p.kt)("em",{parentName:"li"},"a"),"|",(0,p.kt)("em",{parentName:"li"},"b"),"} - \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ",(0,p.kt)("inlineCode",{parentName:"li"},"|"),". \u0428\u0430\u0431\u043b\u043e\u043d \u0437\u0430\u0434\u0430\u0435\u0442 \u0430\u0434\u0440\u0435\u0441\u0430 \u0440\u0435\u043f\u043b\u0438\u043a. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,p.kt)("inlineCode",{parentName:"li"},"example01-{1|2}")," \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0440\u0435\u043f\u043b\u0438\u043a\u0438",(0,p.kt)("inlineCode",{parentName:"li"},"example01-1")," \u0438 ",(0,p.kt)("inlineCode",{parentName:"li"},"example01-2"),".")),(0,p.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043f\u0435\u0440\u0432\u0443\u044e \u0436\u0438\u0432\u0443\u044e \u0440\u0435\u043f\u043b\u0438\u043a\u0443. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u043b\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"remote")," \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/operations/settings/settings#settings-load_balancing"},"load_balancing"),".\n\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/operations/settings/settings#table_function_remote_max_addresses"},"table_function_remote_max_addresses"),"."))}d.isMDXComponent=!0}}]);