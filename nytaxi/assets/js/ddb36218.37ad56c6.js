"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40200],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,g=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l="system.graphite_retentions",p={unversionedId:"ru/operations/system-tables/graphite_retentions",id:"ru/operations/system-tables/graphite_retentions",title:"system.graphite_retentions",description:"system-graphite-retentions}",source:"@site/docs/ru/operations/system-tables/graphite_retentions.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/graphite_retentions",permalink:"/docs-gh-pages/nytaxi/ru/operations/system-tables/graphite_retentions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/graphite_retentions.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.grants",permalink:"/docs-gh-pages/nytaxi/ru/operations/system-tables/grants"},next:{title:"INFORMATION_SCHEMA",permalink:"/docs-gh-pages/nytaxi/ru/operations/system-tables/information_schema"}},u={},c=[],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-graphite-retentions"},"system.graphite_retentions"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"graphite_rollup")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445 \u0441 \u0434\u0432\u0438\u0436\u043a\u0430\u043c\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/graphitemergetree"},"*","GraphiteMergeTree"),"."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_name")," (String) - \u0418\u043c\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0434\u043b\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"graphite_rollup"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regexp")," (String) - \u0428\u0430\u0431\u043b\u043e\u043d \u0438\u043c\u0435\u043d\u0438 \u043c\u0435\u0442\u0440\u0438\u043a\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function")," (String) - \u0418\u043c\u044f \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"age")," (UInt64) - \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"precision")," (UInt64) - \u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"priority")," (UInt16) - \u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 pattern."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_default")," (UInt8) - \u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b pattern \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u043c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tables.database")," (Array(String)) - \u041c\u0430\u0441\u0441\u0438\u0432 \u0438\u043c\u0451\u043d \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.kt)("inlineCode",{parentName:"li"},"config_name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tables.table")," (Array(String)) - \u041c\u0430\u0441\u0441\u0438\u0432 \u0438\u043c\u0451\u043d \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.kt)("inlineCode",{parentName:"li"},"config_name"),".")))}f.isMDXComponent=!0}}]);