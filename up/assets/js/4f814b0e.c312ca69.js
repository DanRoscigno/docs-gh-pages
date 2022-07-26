"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23631],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:46,sidebar_label:"input"},u="input",c={unversionedId:"ru/sql-reference/table-functions/input",id:"ru/sql-reference/table-functions/input",title:"input",description:"input}",source:"@site/docs/ru/sql-reference/table-functions/input.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/input",permalink:"/docs-gh-pages/up/ru/sql-reference/table-functions/input",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/input.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"input"},sidebar:"russia",previous:{title:"s3",permalink:"/docs-gh-pages/up/ru/sql-reference/table-functions/s3"},next:{title:"generateRandom",permalink:"/docs-gh-pages/up/ru/sql-reference/table-functions/generate"}},p={},s=[],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"input"},"input"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"input(structure)")," - \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0430\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0438 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0435,\n\u0438\u043c\u0435\u044e\u0449\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"structure"),", \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"structure")," - \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"'column1_name column1_type, column2_name column2_type, ...'"),".\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: ",(0,i.kt)("inlineCode",{parentName:"p"},"'id UInt32, name String'"),"."),(0,i.kt)("p",null,"\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT SELECT")," \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437, \u043d\u043e \u0432 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0435\u0434\u0435\u0442 \u0441\u0435\u0431\u044f\n\u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f (\u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0438 \u0442.\u0434.)."),(0,i.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043b\u044e\u0431\u044b\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u043a\u0430\u043a \u0434\u043b\u044f \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u0432 \u043b\u044e\u0431\u043e\u043c\n\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/interfaces/formats#formats"},"\u0444\u043e\u0440\u043c\u0430\u0442\u0435"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0446\u0435\n\u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT SELECT"),")."),(0,i.kt)("p",null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\n\u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0438\u0445 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0447\u0430\u0441\u0442\u0438 \u0438 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432 \u0446\u0435\u043b\u0435\u0432\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443. \u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430\n\u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u0443\u0441\u0442\u044c \u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"(a String, b String)"),",\n\u0430 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043c\u0435\u044e\u0442 \u0434\u0440\u0443\u0433\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 ",(0,i.kt)("inlineCode",{parentName:"li"},"(col1 String, col2 Date, col3 Int32)"),". \u0417\u0430\u043f\u0440\u043e\u0441 \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438\n\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," \u0441 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat data.csv | clickhouse-client --query=\"INSERT INTO test SELECT lower(col1), col3 * col3 FROM input('col1 String, col2 Date, col3 Int32') FORMAT CSV\";\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," \u043b\u0435\u0436\u0430\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u0439 \u0436\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"test_structure"),", \u0447\u0442\u043e \u0438 \u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"test"),", \u0442\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat data.csv | clickhouse-client --query="INSERT INTO test FORMAT CSV"\n$ cat data.csv | clickhouse-client --query="INSERT INTO test SELECT * FROM input(\'test_structure\') FORMAT CSV"\n')))}m.isMDXComponent=!0}}]);