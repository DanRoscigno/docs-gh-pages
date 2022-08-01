"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[2635],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=i,h=d["".concat(s,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_position:4,sidebar_label:"\u041e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 ClickHouse"},s="\u041e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 ClickHouse",u={unversionedId:"ru/introduction/distinctive-features",id:"ru/introduction/distinctive-features",title:"\u041e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 ClickHouse",description:"otlichitelnye-vozmozhnosti-clickhouse}",source:"@site/docs/ru/introduction/distinctive-features.md",sourceDirName:"ru/introduction",slug:"/ru/introduction/distinctive-features",permalink:"/docs-gh-pages/nytaxi/ru/introduction/distinctive-features",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/introduction/distinctive-features.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u041e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 ClickHouse"},sidebar:"russia",previous:{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",permalink:"/docs-gh-pages/nytaxi/category/\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},next:{title:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",permalink:"/docs-gh-pages/nytaxi/ru/introduction/performance"}},c={},p=[{value:"\u041f\u043e-\u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0421\u0423\u0411\u0414",id:"po-nastoiashchemu-stolbtsovaia-subd",level:2},{value:"\u0421\u0436\u0430\u0442\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"szhatie-dannykh",level:2},{value:"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435",id:"khranenie-dannykh-na-diske",level:2},{value:"\u041f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u043c\u043d\u043e\u0433\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043d\u044b\u0445 \u044f\u0434\u0440\u0430\u0445",id:"parallelnaia-obrabotka-zaprosa-na-mnogikh-protsessornykh-iadrakh",level:2},{value:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u043c\u043d\u043e\u0433\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445",id:"raspredelionnaia-obrabotka-zaprosa-na-mnogikh-serverakh",level:2},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 SQL",id:"sql-support",level:2},{value:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0434\u0432\u0438\u0436\u043e\u043a",id:"vektornyi-dvizhok",level:2},{value:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438",id:"obnovlenie-dannykh-v-realnom-vremeni",level:2},{value:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430",id:"nalichie-indeksa",level:2},{value:"\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",id:"podkhodit-dlia-onlain-zaprosov",level:2},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0451\u043d\u043d\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439",id:"podderzhka-priblizhionnykh-vychislenii",level:2},{value:"\u0420\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438",id:"replikatsiia-dannykh-i-podderzhka-tselostnosti",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0430\u043c\u0438",id:"osobennosti-clickhouse-kotorye-mogut-schitatsia-nedostatkami",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"otlichitelnye-vozmozhnosti-clickhouse"},"\u041e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 ClickHouse"),(0,a.kt)("h2",{id:"po-nastoiashchemu-stolbtsovaia-subd"},"\u041f\u043e-\u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0421\u0423\u0411\u0414"),(0,a.kt)("p",null,"\u0412 \u043f\u043e-\u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u043e\u0439 \u0421\u0423\u0411\u0414 \u0440\u044f\u0434\u043e\u043c \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043b\u0438\u0448\u043d\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u0434\u043b\u0438\u043d\u044b, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0440\u044f\u0434\u043e\u043c \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0438\u043f\u0430 \xab\u0447\u0438\u0441\u043b\u043e\xbb \u0438\u0445 \u0434\u043b\u0438\u043d\u044b. \u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430, \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0442\u0438\u043f\u0430 UInt8 \u0434\u043e\u043b\u0436\u0435\u043d \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c \u0432 \u043d\u0435\u0441\u0436\u0430\u0442\u043e\u043c \u0432\u0438\u0434\u0435 \u043e\u043a\u043e\u043b\u043e 1GB, \u0438\u043d\u0430\u0447\u0435 \u044d\u0442\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u0440\u0438\u0442 \u043f\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f CPU. \u041e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e (\u0431\u0435\u0437 \xab\u043c\u0443\u0441\u043e\u0440\u0430\xbb) \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0432 \u043d\u0435\u0441\u0436\u0430\u0442\u043e\u043c \u0432\u0438\u0434\u0435, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0430\u0437\u0436\u0430\u0442\u0438\u044f (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 CPU) \u0437\u0430\u0432\u0438\u0441\u0438\u0442, \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c, \u043e\u0442 \u043e\u0431\u044a\u0451\u043c\u0430 \u043d\u0435\u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0443\u043d\u043a\u0442 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043d\u043e \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u0441\u0438\u043b\u0443 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u0434 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0440\u0430\u0431\u043e\u0442\u044b. \u041f\u0440\u0438\u043c\u0435\u0440\u044b: HBase, BigTable, Cassandra, HyperTable. \u0412 \u044d\u0442\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0432 \u0440\u0430\u0439\u043e\u043d\u0435 \u0441\u043e\u0442\u0435\u043d \u0442\u044b\u0441\u044f\u0447 \u0441\u0442\u0440\u043e\u043a \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443, \u043d\u043e \u043d\u0435 \u0441\u043e\u0442\u0435\u043d \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u0441\u0442\u0440\u043e\u043a \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443."),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0441\u0442\u043e\u0438\u0442 \u0437\u0430\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e ClickHouse \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0430 \u043d\u0435 \u043e\u0434\u043d\u043e\u0439 \u0431\u0430\u0437\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445. \u0422\u043e \u0435\u0441\u0442\u044c, ClickHouse \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 runtime, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,a.kt)("h2",{id:"szhatie-dannykh"},"\u0421\u0436\u0430\u0442\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("p",null,"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u044b\u0435 \u0421\u0423\u0411\u0414 (InfiniDB CE, MonetDB) \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0441\u0436\u0430\u0442\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u0434\u043d\u0430\u043a\u043e \u0441\u0436\u0430\u0442\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0433\u0440\u0430\u0435\u0442 \u043e\u0434\u043d\u0443 \u0438\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0445 \u0440\u043e\u043b\u0435\u0439 \u0432 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043e\u0442\u043b\u0438\u0447\u043d\u043e\u0439 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,a.kt)("h2",{id:"khranenie-dannykh-na-diske"},"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435"),(0,a.kt)("p",null,"\u041c\u043d\u043e\u0433\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u044b\u0435 \u0421\u0423\u0411\u0414 (SAP HANA, Google PowerDrill) \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438. \u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0441\u0442\u0438\u043c\u0443\u043b\u0438\u0440\u0443\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u0439 \u0431\u044e\u0434\u0436\u0435\u0442 \u043d\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435, \u0447\u0435\u043c \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438. ClickHouse \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u043e\u0431\u044b\u0447\u043d\u044b\u0445 \u0436\u0435\u0441\u0442\u043a\u0438\u0445 \u0434\u0438\u0441\u043a\u0430\u0445, \u0447\u0442\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043d\u0438\u0437\u043a\u0443\u044e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0433\u0438\u0433\u0430\u0431\u0430\u0439\u0442 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e SSD \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c \u0442\u043e\u0436\u0435 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b."),(0,a.kt)("h2",{id:"parallelnaia-obrabotka-zaprosa-na-mnogikh-protsessornykh-iadrakh"},"\u041f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u043c\u043d\u043e\u0433\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043d\u044b\u0445 \u044f\u0434\u0440\u0430\u0445"),(0,a.kt)("p",null,"\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0440\u0430\u0441\u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0438\u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,a.kt)("h2",{id:"raspredelionnaia-obrabotka-zaprosa-na-mnogikh-serverakh"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u043c\u043d\u043e\u0433\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445"),(0,a.kt)("p",null,"\u041f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u0430\u043d\u0435\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u044b\u0435 \u0421\u0423\u0411\u0414 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0443\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.\n\u0412 ClickHouse \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0448\u0430\u0440\u0434\u0430\u0445. \u041a\u0430\u0436\u0434\u044b\u0439 \u0448\u0430\u0440\u0434 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u0431\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0443 \u0440\u0435\u043f\u043b\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0442\u043a\u0430\u0437\u043e\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u0438. \u0417\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u043d\u0430 \u0432\u0441\u0435\u0445 \u0448\u0430\u0440\u0434\u0430\u0445 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e. \u042d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("h2",{id:"sql-support"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 SQL"),(0,a.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/"},"\u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 SQL")," \u0438 \u0432\u043e ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/ansi"},"\u043c\u043d\u043e\u0433\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445")," \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441 SQL \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043e\u043c."),(0,a.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/group-by"},"GROUP BY"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/order-by"},"ORDER BY"),", \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u0441\u0435\u043a\u0446\u0438\u044f\u0445 ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/from"},"FROM"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/operators/in"},"IN"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/join"},"JOIN"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/window-functions/"},"\u0444\u0443\u043d\u043a\u0446\u0438\u0438 window"),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u044b."),(0,a.kt)("p",null,"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f, \u043d\u043e \u043c\u043e\u0433\u0443\u0442 \u0441\u0442\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c\u0438 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c."),(0,a.kt)("h2",{id:"vektornyi-dvizhok"},"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0434\u0432\u0438\u0436\u043e\u043a"),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u043f\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c, \u043d\u043e \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u0432\u0435\u043a\u0442\u043e\u0440\u0430\u043c - \u043a\u0443\u0441\u043e\u0447\u043a\u0430\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u0417\u0430 \u0441\u0447\u0451\u0442 \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043f\u043e CPU."),(0,a.kt)("h2",{id:"obnovlenie-dannykh-v-realnom-vremeni"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),(0,a.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c. \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0443 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e merge \u0434\u0435\u0440\u0435\u0432\u0430. \u0417\u0430 \u0441\u0447\u0451\u0442 \u044d\u0442\u043e\u0433\u043e, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443. \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442."),(0,a.kt)("h2",{id:"nalichie-indeksa"},"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430"),(0,a.kt)("p",null,"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u043c\u0443 \u043a\u043b\u044e\u0447\u0443 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u043b\u0438 \u0438\u0445 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u043e\u0432 \u0441 \u043d\u0438\u0437\u043a\u0438\u043c\u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430\u043c\u0438 - \u043c\u0435\u043d\u0435\u0435 \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434."),(0,a.kt)("h2",{id:"podkhodit-dlia-onlain-zaprosov"},"\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),(0,a.kt)("p",null,"\u041d\u0438\u0437\u043a\u0438\u0435 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043d\u0435 \u043e\u0442\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u043d\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u0440\u0430\u043d\u0435\u0435, \u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0435\u0433\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \u0422\u043e \u0435\u0441\u0442\u044c, \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043e\u043d\u043b\u0430\u0439\u043d."),(0,a.kt)("h2",{id:"podderzhka-priblizhionnykh-vychislenii"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0451\u043d\u043d\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439"),(0,a.kt)("p",null,"ClickHouse \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439 \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0451\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u043c\u0435\u0434\u0438\u0430\u043d\u044b \u0438 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439."),(0,a.kt)("li",{parentName:"ol"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0447\u0430\u0441\u0442\u0438 (\u0432\u044b\u0431\u043e\u0440\u043a\u0438) \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0451\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0441 \u0434\u0438\u0441\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0447\u0438\u0442\u0430\u043d\u043e \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("li",{parentName:"ol"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044e \u043d\u0435 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043a\u043b\u044e\u0447\u0435\u0439, \u0430 \u0434\u043b\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0435\u0440\u0432\u044b\u0445 \u043f\u043e\u043f\u0430\u0432\u0448\u0438\u0445\u0441\u044f \u043a\u043b\u044e\u0447\u0435\u0439. \u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u043d\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0435\u0439 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u044d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0442\u043e\u0447\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432.")),(0,a.kt)("h2",{id:"replikatsiia-dannykh-i-podderzhka-tselostnosti"},"\u0420\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438"),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f multimaster \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f. \u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0440\u0435\u043f\u043b\u0438\u043a\u0443, \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u0432 \u0444\u043e\u043d\u0435. \u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u043b\u043d\u0443\u044e \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0445. \u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u0441\u0431\u043e\u0435\u0432 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u0430 \u0432 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u2014 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438. \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings"},"\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u0432\u043e\u0440\u0443\u043c\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c")," \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/mergetree-family/replication"},"\u0420\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"),"."),(0,a.kt)("h2",{id:"osobennosti-clickhouse-kotorye-mogut-schitatsia-nedostatkami"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0430\u043c\u0438"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0445 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439."),(0,a.kt)("li",{parentName:"ol"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u043d\u0438\u0437\u043a\u0438\u043c\u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0430\u043c\u0438 \u0438 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f. \u0415\u0441\u0442\u044c \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0431\u043e\u043b\u0435\u0435 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f ",(0,a.kt)("a",{parentName:"li",href:"https://gdpr-info.eu"},"GDPR"),"."),(0,a.kt)("li",{parentName:"ol"},"\u0420\u0430\u0437\u0440\u0435\u0436\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u0434\u0435\u043b\u0430\u0435\u0442 ClickHouse \u043f\u043b\u043e\u0445\u043e \u043f\u0440\u0438\u0433\u043e\u0434\u043d\u044b\u043c \u0434\u043b\u044f \u0442\u043e\u0447\u0435\u0447\u043d\u044b\u0445 \u0447\u0442\u0435\u043d\u0438\u0439 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a \u043f\u043e \u0441\u0432\u043e\u0438\u043c\n\u043a\u043b\u044e\u0447\u0430\u043c.")))}k.isMDXComponent=!0}}]);