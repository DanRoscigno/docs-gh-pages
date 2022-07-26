"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88123],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_label:"INTO OUTFILE"},p="\u0421\u0435\u043a\u0446\u0438\u044f INTO OUTFILE",s={unversionedId:"ru/sql-reference/statements/select/into-outfile",id:"ru/sql-reference/statements/select/into-outfile",title:"\u0421\u0435\u043a\u0446\u0438\u044f INTO OUTFILE",description:"into-outfile-clause}",source:"@site/docs/ru/sql-reference/statements/select/into-outfile.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/into-outfile",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/into-outfile",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/into-outfile.md",tags:[],version:"current",frontMatter:{sidebar_label:"INTO OUTFILE"},sidebar:"russia",previous:{title:"INTERSECT",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/intersect"},next:{title:"JOIN",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/join"}},c={},u=[{value:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"implementation-details",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"into-outfile-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f INTO OUTFILE"),(0,i.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE")," \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0432 \u0444\u0430\u0439\u043b \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 ",(0,i.kt)("strong",{parentName:"p"},"\u043a\u043b\u0438\u0435\u043d\u0442\u0430"),"."),(0,i.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u0436\u0430\u0442\u044b\u0435 \u0444\u0430\u0439\u043b\u044b. \u0424\u043e\u0440\u043c\u0430\u0442 \u0441\u0436\u0430\u0442\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044e \u0444\u0430\u0439\u043b\u0430 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0436\u0438\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"'auto'"),"), \u043b\u0438\u0431\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d \u044f\u0432\u043d\u043e \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPRESSION"),". \u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0436\u0430\u0442\u0438\u044f \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"LEVEL"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT <expr_list> INTO OUTFILE file_name [COMPRESSION type [LEVEL level]]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file_name")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0445 \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u043e\u0432. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u044b \u0441\u0436\u0430\u0442\u0438\u044f: ",(0,i.kt)("inlineCode",{parentName:"p"},"'none"),"', ",(0,i.kt)("inlineCode",{parentName:"p"},"'gzip'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'deflate'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'br'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'xz'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'zstd'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'lz4'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'bz2'"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"level")," \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u0430. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430\u0445: ",(0,i.kt)("inlineCode",{parentName:"p"},"1-12")," \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"lz4"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1-22")," \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"zstd")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"1-9")," \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432."),(0,i.kt)("h2",{id:"implementation-details"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u0445: ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/interfaces/cli"},"\u043a\u043b\u0438\u0435\u043d\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438")," \u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/utilities/clickhouse-local"},"clickhouse-local"),". \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/interfaces/http"},"HTTP \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441")," \u0432\u0435\u0440\u043d\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443."),(0,i.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u043e\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u043e\u0448\u0438\u0431\u043a\u043e\u0439, \u0435\u0441\u043b\u0438 \u0444\u0430\u0439\u043b \u0441 \u0442\u0435\u043c \u0436\u0435 \u0438\u043c\u0435\u043d\u0435\u043c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/interfaces/formats"},"\u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0430\u0442")," ",(0,i.kt)("inlineCode",{parentName:"li"},"TabSeparated")," (\u043a\u0430\u043a \u0432 \u043f\u0430\u043a\u0435\u0442\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438). \u0415\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/format"},"FORMAT"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/interfaces/cli"},"\u043a\u043b\u0438\u0435\u043d\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --query=\"SELECT 1,'ABC' INTO OUTFILE 'select.gz' FORMAT CSV;\"\nzcat select.gz \n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'1,"ABC"\n')))}f.isMDXComponent=!0}}]);