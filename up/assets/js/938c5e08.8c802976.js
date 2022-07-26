"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[64836],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(t),d=r,m=g["".concat(u,".").concat(d)]||g[d]||p[d]||i;return t?o.createElement(m,a(a({ref:n},c),{},{components:t})):o.createElement(m,a({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},59616:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],l={sidebar_position:59,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438"},u="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438",s={unversionedId:"ru/sql-reference/functions/ym-dict-functions",id:"ru/sql-reference/functions/ym-dict-functions",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438",description:"ym-dict-functions}",source:"@site/docs/ru/sql-reference/functions/ym-dict-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/ym-dict-functions",permalink:"/docs-gh-pages/up/ru/sql-reference/functions/ym-dict-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/ym-dict-functions.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438",permalink:"/docs-gh-pages/up/ru/sql-reference/functions/ext-dict-functions"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 IN",permalink:"/docs-gh-pages/up/ru/sql-reference/functions/in-functions"}},c={},p=[{value:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0433\u0435\u043e\u0431\u0430\u0437\u044b",id:"multiple-geobases",level:2},{value:"regionToCity(id[, geobase])",id:"regiontocityid-geobase",level:3},{value:"regionToArea(id[, geobase])",id:"regiontoareaid-geobase",level:3},{value:"regionToDistrict(id[, geobase])",id:"regiontodistrictid-geobase",level:3},{value:"regionToCountry(id[, geobase])",id:"regiontocountryid-geobase",level:3},{value:"regionToContinent(id[, geobase])",id:"regiontocontinentid-geobase",level:3},{value:"regionToTopContinent (#regiontotopcontinent)",id:"regiontotopcontinent-regiontotopcontinent",level:3},{value:"regionToPopulation(id[, geobase])",id:"regiontopopulationid-geobase",level:3},{value:"regionIn(lhs, rhs[, geobase])",id:"regioninlhs-rhs-geobase",level:3},{value:"regionHierarchy(id[, geobase])",id:"regionhierarchyid-geobase",level:3},{value:"regionToName(id[, lang])",id:"regiontonameid-lang",level:3}],g={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ym-dict-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438"),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u043d\u0438\u0436\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438, \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u043f\u0443\u0442\u0438 \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438. \u0421\u043b\u043e\u0432\u0430\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0432\u044b\u0437\u043e\u0432\u0435 \u043b\u044e\u0431\u043e\u0439 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439. \u0415\u0441\u043b\u0438 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0438 \u043d\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c - \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u0438\u043d\u0443\u0442\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,i.kt)("p",null,"\u041e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0438, \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xab\u0421\u043b\u043e\u0432\u0430\u0440\u0438\xbb."),(0,i.kt)("h2",{id:"multiple-geobases"},"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0433\u0435\u043e\u0431\u0430\u0437\u044b"),(0,i.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0433\u0435\u043e\u0431\u0430\u0437\u0430\u043c\u0438 (\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044f\u043c\u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432), \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043e \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432 \u0441\u0442\u0440\u0430\u043d\u0430\u043c."),(0,i.kt)("p",null,"\u0412 \u043a\u043e\u043d\u0444\u0438\u0433\u0435 clickhouse-server \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0444\u0430\u0439\u043b \u0441 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0435\u0439 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432:\n",(0,i.kt)("inlineCode",{parentName:"p"},"<path_to_regions_hierarchy_file>/opt/geo/regions_hierarchy.txt</path_to_regions_hierarchy_file>")),(0,i.kt)("p",null,"\u041a\u0440\u043e\u043c\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430, \u0440\u044f\u0434\u043e\u043c \u0438\u0449\u0443\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u044b, \u043a \u0438\u043c\u0435\u043d\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 (\u0434\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f) \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0441\u0438\u043c\u0432\u043e\u043b _ \u0438 \u043a\u0430\u043a\u043e\u0439 \u0443\u0433\u043e\u0434\u043d\u043e \u0441\u0443\u0444\u0444\u0438\u043a\u0441.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0430\u043a\u0436\u0435 \u043d\u0430\u0439\u0434\u0451\u0442\u0441\u044f \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/geo/regions_hierarchy_ua.txt"),", \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u0435\u0441\u0442\u044c."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ua")," \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043b\u044e\u0447\u043e\u043c \u0441\u043b\u043e\u0432\u0430\u0440\u044f. \u0414\u043b\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0431\u0435\u0437 \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u0430, \u043a\u043b\u044e\u0447 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439."),(0,i.kt)("p",null,"\u0412\u0441\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0435 (\u0440\u0430\u0437 \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0443\u043d\u0434, \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 builtin_dictionaries_reload_interval, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - \u0440\u0430\u0437 \u0432 \u0447\u0430\u0441), \u043d\u043e \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437, \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,i.kt)("p",null,"\u0412\u043e \u0432\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043c\u0438, \u0432 \u043a\u043e\u043d\u0446\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043e\u0434\u0438\u043d \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 - \u043a\u043b\u044e\u0447 \u0441\u043b\u043e\u0432\u0430\u0440\u044f. \u0414\u0430\u043b\u0435\u0435 \u043e\u043d \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d \u043a\u0430\u043a geobase.\n\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"regionToCountry(RegionID) - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: /opt/geo/regions_hierarchy.txt;\nregionToCountry(RegionID, '') - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: /opt/geo/regions_hierarchy.txt;\nregionToCountry(RegionID, 'ua') - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0434\u043b\u044f \u043a\u043b\u044e\u0447\u0430 ua: /opt/geo/regions_hierarchy_ua.txt;\n")),(0,i.kt)("h3",{id:"regiontocityid-geobase"},"regionToCity(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0442\u0438\u043f\u0430 UInt32 - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0438\u0437 \u0433\u0435\u043e\u0431\u0430\u0437\u044b \u042f\u043d\u0434\u0435\u043a\u0441\u0430. \u0415\u0441\u043b\u0438 \u0440\u0435\u0433\u0438\u043e\u043d \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0433\u043e\u0440\u043e\u0434\u043e\u043c \u0438\u043b\u0438 \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0433\u043e\u0440\u043e\u0434, \u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 - \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430. \u0418\u043d\u0430\u0447\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 0."),(0,i.kt)("h3",{id:"regiontoareaid-geobase"},"regionToArea(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0440\u0435\u0433\u0438\u043e\u043d \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u044c (\u0442\u0438\u043f \u0432 \u0433\u0435\u043e\u0431\u0430\u0437\u0435 - 5). \u0412 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u043c, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 regionToCity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT regionToName(regionToArea(toUInt32(number), 'ua'))\nFROM system.numbers\nLIMIT 15\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500regionToName(regionToArea(toUInt32(number), \\'ua\\'))\u2500\u2510\n\u2502                                                      \u2502\n\u2502 \u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                          \u2502\n\u2502 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433 \u0438 \u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c              \u2502\n\u2502 \u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                 \u2502\n\u2502 \u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                   \u2502\n\u2502 \u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                    \u2502\n\u2502 \u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                  \u2502\n\u2502 \u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                      \u2502\n\u2502 \u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                     \u2502\n\u2502 \u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                    \u2502\n\u2502 \u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                    \u2502\n\u2502 \u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                   \u2502\n\u2502 \u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                   \u2502\n\u2502 \u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                     \u2502\n\u2502 \u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c                                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"regiontodistrictid-geobase"},"regionToDistrict(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0440\u0435\u0433\u0438\u043e\u043d \u0432 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433 (\u0442\u0438\u043f \u0432 \u0433\u0435\u043e\u0431\u0430\u0437\u0435 - 4). \u0412 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u043c, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 regionToCity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT regionToName(regionToDistrict(toUInt32(number), 'ua'))\nFROM system.numbers\nLIMIT 15\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500regionToName(regionToDistrict(toUInt32(number), \\'ua\\'))\u2500\u2510\n\u2502                                                          \u2502\n\u2502 \u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433                            \u2502\n\u2502 \u0421\u0435\u0432\u0435\u0440\u043e-\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433                        \u2502\n\u2502 \u042e\u0436\u043d\u044b\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433                                  \u2502\n\u2502 \u0421\u0435\u0432\u0435\u0440\u043e-\u041a\u0430\u0432\u043a\u0430\u0437\u0441\u043a\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433                      \u2502\n\u2502 \u041f\u0440\u0438\u0432\u043e\u043b\u0436\u0441\u043a\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433                            \u2502\n\u2502 \u0423\u0440\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433                              \u2502\n\u2502 \u0421\u0438\u0431\u0438\u0440\u0441\u043a\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433                              \u2502\n\u2502 \u0414\u0430\u043b\u044c\u043d\u0435\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433                        \u2502\n\u2502 \u0428\u043e\u0442\u043b\u0430\u043d\u0434\u0438\u044f                                                \u2502\n\u2502 \u0424\u0430\u0440\u0435\u0440\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430                                        \u2502\n\u2502 \u0424\u043b\u0430\u043c\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0440\u0435\u0433\u0438\u043e\u043d                                       \u2502\n\u2502 \u0411\u0440\u044e\u0441\u0441\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u043e\u043d                            \u2502\n\u2502 \u0412\u0430\u043b\u043b\u043e\u043d\u0438\u044f                                                 \u2502\n\u2502 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u0441\u043d\u0438\u0438 \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u044b                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"regiontocountryid-geobase"},"regionToCountry(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0440\u0435\u0433\u0438\u043e\u043d \u0432 \u0441\u0442\u0440\u0430\u043d\u0443. \u0412 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u043c, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 regionToCity.\n\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,i.kt)("inlineCode",{parentName:"p"},"regionToCountry(toUInt32(213)) = 225")," - \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043b\u0438 \u041c\u043e\u0441\u043a\u0432\u0443 (213) \u0432 \u0420\u043e\u0441\u0441\u0438\u044e (225)."),(0,i.kt)("h3",{id:"regiontocontinentid-geobase"},"regionToContinent(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0440\u0435\u0433\u0438\u043e\u043d \u0432 \u043a\u043e\u043d\u0442\u0438\u043d\u0435\u043d\u0442. \u0412 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u043c, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 regionToCity.\n\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,i.kt)("inlineCode",{parentName:"p"},"regionToContinent(toUInt32(213)) = 10001")," - \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043b\u0438 \u041c\u043e\u0441\u043a\u0432\u0443 (213) \u0432 \u0415\u0432\u0440\u0430\u0437\u0438\u044e (10001)."),(0,i.kt)("h3",{id:"regiontotopcontinent-regiontotopcontinent"},"regionToTopContinent (#regiontotopcontinent)"),(0,i.kt)("p",null,"\u041d\u0430\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0432 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u043a\u043e\u043d\u0442\u0438\u043d\u0435\u043d\u0442."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"regionToTopContinent(id[, geobase])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0438\u0437 \u0433\u0435\u043e\u0431\u0430\u0437\u044b \u042f\u043d\u0434\u0435\u043a\u0441\u0430. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/functions/ym-dict-functions"},"UInt32"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"geobase")," \u2014 \u043a\u043b\u044e\u0447 \u0441\u043b\u043e\u0432\u0430\u0440\u044f. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,i.kt)("a",{parentName:"li",href:"#multiple-geobases"},"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0433\u0435\u043e\u0431\u0430\u0437\u044b"),". ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/functions/ym-dict-functions"},"String"),". \u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u043e\u043d\u0442\u0438\u043d\u0435\u043d\u0442\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f (\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043f\u0440\u0438 \u043f\u043e\u0434\u044a\u0435\u043c\u0435 \u043f\u043e \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432)."),(0,i.kt)("li",{parentName:"ul"},"0, \u0435\u0441\u043b\u0438 \u0435\u0433\u043e \u043d\u0435\u0442.")),(0,i.kt)("p",null,"\u0422\u0438\u043f: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt32"),"."),(0,i.kt)("h3",{id:"regiontopopulationid-geobase"},"regionToPopulation(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430.\n\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0444\u0430\u0439\u043b\u0430\u0445 \u0441 \u0433\u0435\u043e\u0431\u0430\u0437\u043e\u0439. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xab\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438\xbb.\n\u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u043d\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u043e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f 0.\n\u0412 \u0433\u0435\u043e\u0431\u0430\u0437\u0435 \u042f\u043d\u0434\u0435\u043a\u0441\u0430, \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0434\u043b\u044f \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432, \u043d\u043e \u043d\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0434\u043b\u044f \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445."),(0,i.kt)("h3",{id:"regioninlhs-rhs-geobase"},"regionIn(lhs, rhs","[",", geobase","]",")"),(0,i.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0433\u0438\u043e\u043d\u0430 lhs \u0440\u0435\u0433\u0438\u043e\u043d\u0443 rhs. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0442\u0438\u043f\u0430 UInt8, \u0440\u0430\u0432\u043d\u043e\u0435 1, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0438 0, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442.\n\u041e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0440\u0435\u0444\u043b\u0435\u043a\u0441\u0438\u0432\u043d\u043e\u0435 - \u043b\u044e\u0431\u043e\u0439 \u0440\u0435\u0433\u0438\u043e\u043d \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0442\u0430\u043a\u0436\u0435 \u0441\u0430\u043c\u043e\u043c\u0443 \u0441\u0435\u0431\u0435."),(0,i.kt)("h3",{id:"regionhierarchyid-geobase"},"regionHierarchy(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0442\u0438\u043f\u0430 UInt32 - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0438\u0437 \u0433\u0435\u043e\u0431\u0430\u0437\u044b \u042f\u043d\u0434\u0435\u043a\u0441\u0430. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0438 \u0432\u0441\u0435\u0445 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u043f\u043e \u0446\u0435\u043f\u043e\u0447\u043a\u0435.\n\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,i.kt)("inlineCode",{parentName:"p"},"regionHierarchy(toUInt32(213)) = [213,1,3,225,10001,10000]"),"."),(0,i.kt)("h3",{id:"regiontonameid-lang"},"regionToName(id","[",", lang","]",")"),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0442\u0438\u043f\u0430 UInt32 - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0438\u0437 \u0433\u0435\u043e\u0431\u0430\u0437\u044b \u042f\u043d\u0434\u0435\u043a\u0441\u0430. \u0412\u0442\u043e\u0440\u044b\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0430 - \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u044f\u0437\u044b\u043a\u0438 ru, en, ua, uk, by, kz, tr. \u0415\u0441\u043b\u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u044f\u0437\u044b\u043a ru. \u0415\u0441\u043b\u0438 \u044f\u0437\u044b\u043a \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f - \u043a\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 - \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c \u044f\u0437\u044b\u043a\u0435. \u0415\u0441\u043b\u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ua")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"uk")," \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442 \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 - \u0443\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a."))}d.isMDXComponent=!0}}]);