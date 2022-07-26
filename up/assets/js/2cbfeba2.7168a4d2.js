"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28742],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=o(n),d=a,g=f["".concat(p,".").concat(d)]||f[d]||i[d]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70188:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return i}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],u={sidebar_position:300,sidebar_label:"studentTTest"},p="studentTTest",o={unversionedId:"ru/sql-reference/aggregate-functions/reference/studentttest",id:"ru/sql-reference/aggregate-functions/reference/studentttest",title:"studentTTest",description:"studentttest}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/studentttest.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/studentttest",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/studentttest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/studentttest.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300,sidebar_label:"studentTTest"},sidebar:"russia",previous:{title:"categoricalInformationValue",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue"},next:{title:"welchTTest",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/welchttest"}},c={},i=[],f={toc:i};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"studentttest"},"studentTTest"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u043a \u0438\u0437 \u0434\u0432\u0443\u0445 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0435\u0439."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"studentTTest(sample_data, sample_index)\n")),(0,l.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u043a \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0438\u0437 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_data"),". \u0415\u0441\u043b\u0438  ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_index")," \u0440\u0430\u0432\u043d\u043e 0, \u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435. \u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.\n\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0443\u043b\u0435\u0432\u0430\u044f \u0433\u0438\u043f\u043e\u0442\u0435\u0437\u0430, \u0447\u0442\u043e \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0435\u0439 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442. \u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044f\u0445 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0431\u043e\u0440\u043e\u043a. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0432\u044b\u0431\u043e\u0440\u043e\u043a. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"Integer"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/tuple"},"\u041a\u043e\u0440\u0442\u0435\u0436")," \u0441 \u0434\u0432\u0443\u043c\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 p-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502        20.3 \u2502            0 \u2502\n\u2502        21.1 \u2502            0 \u2502\n\u2502        21.9 \u2502            1 \u2502\n\u2502        21.7 \u2502            0 \u2502\n\u2502        19.9 \u2502            1 \u2502\n\u2502        21.8 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT studentTTest(sample_data, sample_index) FROM student_ttest;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500studentTTest(sample_data, sample_index)\u2500\u2500\u2500\u2510\n\u2502 (-0.21739130434783777,0.8385421208415731) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/T-%D0%BA%D1%80%D0%B8%D1%82%D0%B5%D1%80%D0%B8%D0%B9_%D0%A1%D1%82%D1%8C%D1%8E%D0%B4%D0%B5%D0%BD%D1%82%D0%B0"},"t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/welchttest#welchttest"},"welchTTest"))))}d.isMDXComponent=!0}}]);