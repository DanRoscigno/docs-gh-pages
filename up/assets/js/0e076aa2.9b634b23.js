"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[33325],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95592:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={sidebar_position:20,sidebar_label:"MySQL-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"},l="MySQL-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",c={unversionedId:"ru/interfaces/mysql",id:"ru/interfaces/mysql",title:"MySQL-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",description:"mysql-interface}",source:"@site/docs/ru/interfaces/mysql.md",sourceDirName:"ru/interfaces",slug:"/ru/interfaces/mysql",permalink:"/docs-gh-pages/up/ru/interfaces/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/interfaces/mysql.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"MySQL-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"},sidebar:"russia",previous:{title:"HTTP-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",permalink:"/docs-gh-pages/up/ru/interfaces/http"},next:{title:"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0438 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs-gh-pages/up/ru/interfaces/formats"}},p={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-interface"},"MySQL-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,o.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 MySQL. \u0414\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-mysql_port"},"mysql_port")," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mysql_port>9004</mysql_port>\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 mysql:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mysql --protocol tcp -u default -P 9004\n")),(0,o.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Welcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 4\nServer version: 20.2.1.1-ClickHouse\n\nCopyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0432\u043e\u0439\u043d\u043e\u0433\u043e \u0445\u044d\u0448\u0430 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/operations/settings/settings-users#password_double_sha1_hex"},"SHA1"),".\n\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/operations/settings/settings-users#password_sha256_hex"},"SHA256")," \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u043d\u0435 \u0441\u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u043e\u0439\u0442\u0438 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e (mysqljs \u0438 \u0441\u0442\u0430\u0440\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 mysql)."),(0,o.kt)("p",null,"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u043a\u0438"))),(0,o.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c \u0434\u043e\u043b\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,o.kt)("inlineCode",{parentName:"p"},"KILL QUERY connection_id")," (\u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"KILL QUERY WHERE query_id = connection_id"),"). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ mysql --protocol tcp -h mysql_server -P 9004 default -u default --password=123 -e "KILL QUERY 123456;"\n')))}f.isMDXComponent=!0}}]);