"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[33488],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||s;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47481:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={sidebar_position:41,sidebar_label:"SAMPLE BY"},l="Manipulating Sampling-Key Expressions",c={unversionedId:"ru/sql-reference/statements/alter/sample-by",id:"ru/sql-reference/statements/alter/sample-by",title:"Manipulating Sampling-Key Expressions",description:"manipulations-with-sampling-key-expressions}",source:"@site/docs/ru/sql-reference/statements/alter/sample-by.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/sample-by",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/alter/sample-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/sample-by.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"SAMPLE BY"},sidebar:"russia",previous:{title:"ORDER BY",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/alter/order-by"},next:{title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u043c\u0438",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/alter/index/"}},p={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"manipulations-with-sampling-key-expressions"},"Manipulating Sampling-Key Expressions"),(0,s.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] MODIFY SAMPLE BY new_expression\n")),(0,s.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043c\u0435\u043d\u044f\u0435\u0442 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/mergetree"},"\u043a\u043b\u044e\u0447 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f")," \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430 ",(0,s.kt)("inlineCode",{parentName:"p"},"new_expression")," (\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0440\u044f\u0434 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439)."),(0,s.kt)("p",null,"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u043e\u0439 \u0432 \u0442\u043e\u043c \u0441\u043c\u044b\u0441\u043b\u0435, \u0447\u0442\u043e \u043e\u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043b\u044e\u0447 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},':::note "Note"\n\u042d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0432 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0435 [MergeTree](/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/mergetree) (\u0432\u043a\u043b\u044e\u0447\u0430\u044f\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/replication"},"\u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u043c\u044b\u0435")," \u0442\u0430\u0431\u043b\u0438\u0446\u044b).\n:::"))}f.isMDXComponent=!0}}]);