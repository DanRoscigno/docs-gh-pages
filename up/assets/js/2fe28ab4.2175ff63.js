"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[19900],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24194:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={sidebar_position:20,sidebar_label:"MySQL\u63a5\u53e3"},l="MySQL\u63a5\u53e3",c={unversionedId:"zh/interfaces/mysql",id:"zh/interfaces/mysql",title:"MySQL\u63a5\u53e3",description:"mysql-interface}",source:"@site/docs/zh/interfaces/mysql.md",sourceDirName:"zh/interfaces",slug:"/zh/interfaces/mysql",permalink:"/docs-gh-pages/up/zh/interfaces/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/interfaces/mysql.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"MySQL\u63a5\u53e3"},sidebar:"chinese",previous:{title:"HTTP\u5ba2\u6237\u7aef",permalink:"/docs-gh-pages/up/zh/interfaces/http"},next:{title:"\u8f93\u5165/\u8f93\u51fa\u683c\u5f0f",permalink:"/docs-gh-pages/up/zh/interfaces/formats"}},p={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-interface"},"MySQL\u63a5\u53e3"),(0,o.kt)("p",null,"ClickHouse\u652f\u6301MySQL wire\u901a\u8baf\u534f\u8bae\u3002\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-mysql_port"},"mysql_port")," \u6765\u542f\u7528\u5b83:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mysql_port>9004</mysql_port>\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177 ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," \u8fdb\u884c\u8fde\u63a5\u7684\u793a\u4f8b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mysql --protocol tcp -u default -P 9004\n")),(0,o.kt)("p",null,"\u5982\u679c\u8fde\u63a5\u6210\u529f\uff0c\u5219\u8f93\u51fa:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Welcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 4\nServer version: 20.2.1.1-ClickHouse\n\nCopyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u4e0e\u6240\u6709MySQL\u5ba2\u6237\u7aef\u517c\u5bb9\uff0c\u5efa\u8bae\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/settings-users#password_double_sha1_hex"},"double SHA1")," \u6765\u6307\u5b9a\u7528\u6237\u5bc6\u7801\u3002\n\u5982\u679c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/settings-users#password_sha256_hex"},"SHA256")," \u6307\u5b9a\u7528\u6237\u5bc6\u7801\uff0c\u4e00\u4e9b\u5ba2\u6237\u7aef\u5c06\u65e0\u6cd5\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff08\u6bd4\u5982mysqljs\u548c\u65e7\u7248\u672c\u7684\u547d\u4ee4\u884c\u5de5\u5177mysql\uff09\u3002"),(0,o.kt)("p",null,"\u9650\u5236:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301prepared queries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u67d0\u4e9b\u6570\u636e\u7c7b\u578b\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u53d1\u9001"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/mysql/"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);