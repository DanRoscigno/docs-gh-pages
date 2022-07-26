"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[44302],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,k=m["".concat(i,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(k,c(c({ref:t},s),{},{components:n})):r.createElement(k,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<l;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),c=["components"],o={},i=void 0,u={unversionedId:"ru/sql-reference/table-functions/view",id:"ru/sql-reference/table-functions/view",title:"view",description:"view",source:"@site/docs/ru/sql-reference/table-functions/view.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/view",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/table-functions/view",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/view.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"sqlite",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/table-functions/sqlite"},next:{title:"\u0421\u043b\u043e\u0432\u0430\u0440\u0438",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/dictionaries/"}},s={},p=[{value:"view",id:"view",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"view"},"view"),(0,l.kt)("p",null,"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f (\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/sql-reference/statements/create/view/#create-view"},"CREATE VIEW"),"). \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435, \u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),". \u041f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, ClickHouse \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0438\u0437 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"view(subquery)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"subquery")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500days\u2500\u2510\n\u2502  1 \u2502 January  \u2502   31 \u2502\n\u2502  2 \u2502 February \u2502   29 \u2502\n\u2502  3 \u2502 March    \u2502   31 \u2502\n\u2502  4 \u2502 April    \u2502   30 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM view(SELECT name FROM months);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 January  \u2502\n\u2502 February \u2502\n\u2502 March    \u2502\n\u2502 April    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"view")," \u043a\u0430\u043a \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/sql-reference/table-functions/remote/#remote-remotesecure"},"remote")," \u0438 ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/sql-reference/table-functions/cluster/#cluster-clusterallreplicas"},"cluster"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM remote(`127.0.0.1`, view(SELECT a, b, c FROM table_name));\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cluster(`cluster_name`, view(SELECT a, b, c FROM table_name));\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/ru/engines/table-engines/special/view/#table_engines-view"},"view"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/view/"},"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f")," "))}f.isMDXComponent=!0}}]);