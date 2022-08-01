"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12777],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(d,l(l({ref:t},o),{},{components:r})):n.createElement(d,l({ref:t},o))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81144:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],s={sidebar_label:"FROM"},p="\u0421\u0435\u043a\u0446\u0438\u044f FROM",u={unversionedId:"ru/sql-reference/statements/select/from",id:"ru/sql-reference/statements/select/from",title:"\u0421\u0435\u043a\u0446\u0438\u044f FROM",description:"select-from}",source:"@site/docs/ru/sql-reference/statements/select/from.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/from",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/from",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/from.md",tags:[],version:"current",frontMatter:{sidebar_label:"FROM"},sidebar:"russia",previous:{title:"FORMAT",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/format"},next:{title:"GROUP BY",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/group-by"}},o={},c=[{value:"\u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 FINAL",id:"select-from-final",level:2},{value:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438",id:"drawbacks",level:3},{value:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"implementation-details",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"select-from"},"\u0421\u0435\u043a\u0446\u0438\u044f FROM"),(0,i.kt)("p",null,"\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/"},"\u041f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441")," {## TODO: better link ##}"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/table-functions/#table-functions"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f"))),(0,i.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/join"},"JOIN")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/array-join"},"ARRAY JOIN")," \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM"),"."),(0,i.kt)("p",null,"\u041f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441 \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d \u0432 \u043a\u0440\u0443\u0433\u043b\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM"),"."),(0,i.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e, \u0447\u0442\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/join"},"CROSS JOIN")," \u043d\u0430 \u043d\u0438\u0445."),(0,i.kt)("h2",{id:"select-from-final"},"\u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 FINAL"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"FINAL"),", \u0442\u043e ClickHouse \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043c\u0451\u0440\u0436\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0434 \u0432\u044b\u0434\u0430\u0447\u0435\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430, \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044f \u0432\u0441\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0434\u0432\u0438\u0436\u043a\u043e\u043c \u0442\u0430\u0431\u043b\u0438\u0446 \u043f\u0440\u0438 \u043c\u0451\u0440\u0436\u0430\u0445."),(0,i.kt)("p",null,"\u041e\u043d \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"- \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e \u0434\u0432\u0438\u0436\u043a\u043e\u0432. \u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/replication"},"Replicated")," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"MergeTree")," \u0434\u0432\u0438\u0436\u043a\u043e\u0432."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/special/view"},"View"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/special/buffer"},"Buffer"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/special/distributed"},"Distributed"),", \u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/special/materializedview"},"MaterializedView"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u043e\u0432\u0435\u0440\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u0434\u0432\u0438\u0436\u043a\u043e\u0432, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u0434\u0432\u0438\u0436\u043a\u0430\u043c\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"MergeTree"),".")),(0,i.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"FINAL")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e \u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435. \u041d\u043e \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u044b\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u043f\u0440\u0438 \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 (\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0438\u0436\u0435). \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/operations/settings/settings#max-final-threads"},"max_final_threads")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0442\u043e\u043a\u043e\u0432."),(0,i.kt)("h3",{id:"drawbacks"},"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"FINAL")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u043b\u0435\u043d\u0435\u0435, \u0447\u0435\u043c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0431\u0435\u0437 \u043d\u0435\u0433\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u043c\u0451\u0440\u0436\u0430\u0442\u0441\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0441 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"li"},"FINAL")," \u0447\u0438\u0442\u0430\u044e\u0442 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 \u0432 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0438\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"strong"},"FINAL"),".")," \u041e\u0431\u0449\u0438\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442, \u0447\u0442\u043e \u0444\u043e\u043d\u043e\u0432\u044b\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0434\u0432\u0438\u0436\u043a\u043e\u0432 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u0435\u0449\u0451 \u043d\u0435 \u0441\u043b\u0443\u0447\u0438\u043b\u0438\u0441\u044c  (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u0430\u043c\u0438 \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442 \u0434\u0443\u0431\u043b\u0438\u043a\u0430\u0442\u044b). {## TODO: examples ##}"),(0,i.kt)("h2",{id:"implementation-details"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0441\u0435\u043a\u0446\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," \u043e\u043f\u0443\u0449\u0435\u043d\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"system.one"),".\n\u0422\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"system.one")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0438\u0437 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0432\u044b\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u0418\u0437 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432\u044b\u043a\u0438\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043d\u0435 \u043d\u0443\u0436\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043d\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043e \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM t)"),", \u0442\u043e \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432\u0441\u0451 \u0440\u0430\u0432\u043d\u043e \u0432\u044b\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u043a\u0430\u043a\u043e\u0439-\u043d\u0438\u0431\u0443\u0434\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 (\u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u0439 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439), \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a."))}f.isMDXComponent=!0}}]);