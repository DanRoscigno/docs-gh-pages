"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28742],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,g=f["".concat(c,".").concat(d)]||f[d]||o[d]||s;return r?n.createElement(g,l(l({ref:t},i),{},{components:r})):n.createElement(g,l({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70188:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return o}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),l=["components"],u={sidebar_position:300,sidebar_label:"studentTTest"},c="studentTTest",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/studentttest",id:"ru/sql-reference/aggregate-functions/reference/studentttest",title:"studentTTest",description:"studentttest}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/studentttest.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/studentttest",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/studentttest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/studentttest.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300,sidebar_label:"studentTTest"},sidebar:"russia",previous:{title:"categoricalInformationValue",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue"},next:{title:"welchTTest",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/welchttest"}},i={},o=[],f={toc:o};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"studentttest"},"studentTTest"),(0,s.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u043a \u0438\u0437 \u0434\u0432\u0443\u0445 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0435\u0439."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"studentTTest(sample_data, sample_index)\n")),(0,s.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u043a \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0438\u0437 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,s.kt)("inlineCode",{parentName:"p"},"sample_data"),". \u0415\u0441\u043b\u0438  ",(0,s.kt)("inlineCode",{parentName:"p"},"sample_index")," \u0440\u0430\u0432\u043d\u043e 0, \u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435. \u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.\n\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0443\u043b\u0435\u0432\u0430\u044f \u0433\u0438\u043f\u043e\u0442\u0435\u0437\u0430, \u0447\u0442\u043e \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0435\u0439 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442. \u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044f\u0445 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0431\u043e\u0440\u043e\u043a. ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"Integer"),", ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/float"},"Float")," or ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/decimal"},"Decimal"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0432\u044b\u0431\u043e\u0440\u043e\u043a. ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"Integer"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/tuple"},"\u041a\u043e\u0440\u0442\u0435\u0436")," \u0441 \u0434\u0432\u0443\u043c\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430. ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/float"},"Float64"),"."),(0,s.kt)("li",{parentName:"ul"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 p-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/float"},"Float64"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,s.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502        20.3 \u2502            0 \u2502\n\u2502        21.1 \u2502            0 \u2502\n\u2502        21.9 \u2502            1 \u2502\n\u2502        21.7 \u2502            0 \u2502\n\u2502        19.9 \u2502            1 \u2502\n\u2502        21.8 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT studentTTest(sample_data, sample_index) FROM student_ttest;\n")),(0,s.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500studentTTest(sample_data, sample_index)\u2500\u2500\u2500\u2510\n\u2502 (-0.21739130434783777,0.8385421208415731) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/T-%D0%BA%D1%80%D0%B8%D1%82%D0%B5%D1%80%D0%B8%D0%B9_%D0%A1%D1%82%D1%8C%D1%8E%D0%B4%D0%B5%D0%BD%D1%82%D0%B0"},"t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/welchttest#welchttest"},"welchTTest"))))}d.isMDXComponent=!0}}]);