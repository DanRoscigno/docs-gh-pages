"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12289],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},82316:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={},l="system.merges",u={unversionedId:"ru/operations/system-tables/merges",id:"ru/operations/system-tables/merges",title:"system.merges",description:"system-merges}",source:"@site/docs/ru/operations/system-tables/merges.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/merges",permalink:"/docs-gh-pages/up/ru/operations/system-tables/merges",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/merges.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"merge_tree_settings",permalink:"/docs-gh-pages/up/ru/operations/system-tables/merge_tree_settings"},next:{title:"system.metric_log",permalink:"/docs-gh-pages/up/ru/operations/system-tables/metric_log"}},p={},m=[],c={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-merges"},"system.merges"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0449\u0438\u0445\u0441\u044f \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0441\u043b\u0438\u044f\u043d\u0438\u044f\u0445 \u0438 \u043c\u0443\u0442\u0430\u0446\u0438\u044f\u0445 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 MergeTree."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database String")," \u2014 \u0418\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table String")," \u2014 \u0418\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elapsed Float64")," \u2014 \u0412\u0440\u0435\u043c\u044f \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445, \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0435\u0435 \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u043b\u0438\u044f\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"progress Float64")," \u2014 \u0414\u043e\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043e\u0442 0 \u0434\u043e 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_parts UInt64")," \u2014 \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043a\u0443\u0441\u043a\u043e\u0432."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result_part_name String")," \u2014 \u0418\u043c\u044f \u043a\u0443\u0441\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_mutation UInt8")," - \u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043c\u0443\u0442\u0430\u0446\u0438\u0435\u0439 \u043a\u0443\u0441\u043a\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total_size_bytes_compressed UInt64")," \u2014 \u0421\u0443\u043c\u043c\u0430\u0440\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043b\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043a\u0443\u0441\u043a\u043e\u0432."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total_size_marks UInt64")," \u2014 \u0421\u0443\u043c\u043c\u0430\u0440\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0441\u0435\u0447\u0435\u043a \u0432 \u0441\u043b\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043a\u0443\u0441\u043a\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_read_uncompressed UInt64")," \u2014 \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0431\u0430\u0439\u0442, \u0440\u0430\u0437\u0436\u0430\u0442\u044b\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows_read UInt64")," \u2014 \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_written_uncompressed UInt64")," \u2014 \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u0431\u0430\u0439\u0442, \u043d\u0435\u0441\u0436\u0430\u0442\u044b\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows_written UInt64")," \u2014 \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a.")))}f.isMDXComponent=!0}}]);