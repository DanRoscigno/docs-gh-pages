"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50023],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),k=a,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||l;return t?r.createElement(m,u(u({ref:n},s),{},{components:t})):r.createElement(m,u({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var p=2;p<l;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1039:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),u=["components"],o={sidebar_position:45,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f"},i="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f",p={unversionedId:"ru/sql-reference/functions/rounding-functions",id:"ru/sql-reference/functions/rounding-functions",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f",description:"funktsii-okrugleniia}",source:"@site/docs/ru/sql-reference/functions/rounding-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/rounding-functions",permalink:"/docs-gh-pages/up/ru/sql-reference/functions/rounding-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/rounding-functions.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f"},sidebar:"russia",previous:{title:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/docs-gh-pages/up/ru/sql-reference/functions/math-functions"},next:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 map",permalink:"/docs-gh-pages/up/ru/sql-reference/functions/tuple-map-functions"}},s={},c=[{value:"floor(x[, N])",id:"floorx-n",level:2},{value:"ceil(x[, N])",id:"ceilx-n",level:2},{value:"round(x[, N])",id:"rounding_functions-round",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"primery",level:3},{value:"roundBankers",id:"roundbankers",level:2},{value:"roundToExp2(num)",id:"roundtoexp2num",level:2},{value:"roundDuration(num)",id:"rounddurationnum",level:2},{value:"roundAge(num)",id:"roundagenum",level:2}],d={toc:c};function k(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"funktsii-okrugleniia"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f"),(0,l.kt)("h2",{id:"floorx-n"},"floor(x","[",", N","]",")"),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u0440\u0443\u0433\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e, \u0447\u0435\u043c x.\n\u041a\u0440\u0443\u0433\u043b\u044b\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u043e, \u043a\u0440\u0430\u0442\u043d\u043e\u0435 1 / 10N \u0438\u043b\u0438 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u043a \u043d\u0435\u043c\u0443 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u0435\u0441\u043b\u0438 1 / 10N \u043d\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043c\u043e \u0442\u043e\u0447\u043d\u043e.\nN - \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430, \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - \u043d\u043e\u043b\u044c, \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 - \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0442\u044c \u0434\u043e \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430.\nN \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b: ",(0,l.kt)("inlineCode",{parentName:"p"},"floor(123.45, 1) = 123.4, floor(123.45, -1) = 120.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"x")," - \u043b\u044e\u0431\u043e\u0439 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u0442\u0438\u043f. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 - \u0447\u0438\u0441\u043b\u043e \u0442\u043e\u0433\u043e \u0436\u0435 \u0442\u0438\u043f\u0430.\n\u0414\u043b\u044f \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0441 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c N (\u0434\u043b\u044f \u043d\u0435\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 N, \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u0435\u043b\u0430\u0435\u0442).\n\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, floor(-128, -1)), \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f implementation specific \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."),(0,l.kt)("h2",{id:"ceilx-n"},"ceil(x","[",", N","]",")"),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u043a\u0440\u0443\u0433\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e, \u0447\u0435\u043c x.\n\u0412 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u043c, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 floor, \u0441\u043c. \u0432\u044b\u0448\u0435."),(0,l.kt)("h2",{id:"rounding_functions-round"},"round(x","[",", N","]",")"),(0,l.kt)("p",null,"\u041e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u0430."),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0432\u043d\u043e\u0443\u0434\u0430\u043b\u0435\u043d\u043e \u043e\u0442 \u0447\u0438\u0441\u0435\u043b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430, \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0442\u043e\u0447\u043a\u043e\u0439 (Float32/64) \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u043e \u0438\u0437 \u043d\u0438\u0445, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u043c\u0435\u0435\u0442 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0443\u044e \u0447\u0451\u0442\u043d\u0443\u044e \u0446\u0438\u0444\u0440\u0443 (\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435), \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432 \u0441 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u043e\u0439 (Decimal) \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0432 \u0431\u043e\u0301\u043b\u044c\u0448\u0443\u044e \u043f\u043e \u043c\u043e\u0434\u0443\u043b\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443 (\u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"round(expression [, decimal_places])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression")," \u2014 \u0447\u0438\u0441\u043b\u043e \u0434\u043b\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u044b\u043c ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u043c \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/functions/rounding-functions#data_types"},"\u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimal-places")," \u2014 \u0446\u0435\u043b\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"decimal-places > 0"),", \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0440\u0430\u0432\u0430 \u043e\u0442 \u0437\u0430\u043f\u044f\u0442\u043e\u0439."),(0,l.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"decimal-places < 0")," \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043b\u0435\u0432\u0430 \u043e\u0442 \u0437\u0430\u043f\u044f\u0442\u043e\u0439."),(0,l.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"decimal-places = 0"),", \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e \u0446\u0435\u043b\u043e\u0433\u043e. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u043e\u0436\u043d\u043e \u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:")),(0,l.kt)("p",null,"\u041e\u043a\u0440\u0443\u0433\u043b\u0451\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u043e\u0433\u043e \u0436\u0435 \u0442\u0438\u043f\u0430, \u0447\u0442\u043e \u0438 \u0432\u0445\u043e\u0434\u044f\u0449\u0435\u0435."),(0,l.kt)("h3",{id:"primery"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 Float")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number / 2 AS x, round(x) FROM system.numbers LIMIT 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500x\u2500\u252c\u2500round(divide(number, 2))\u2500\u2510\n\u2502   0 \u2502                        0 \u2502\n\u2502 0.5 \u2502                        0 \u2502\n\u2502   1 \u2502                        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 Decimal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT cast(number / 2 AS  Decimal(10,4)) AS x, round(x) FROM system.numbers LIMIT 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u252c\u2500round(CAST(divide(number, 2), 'Decimal(10, 4)'))\u2500\u2510\n\u2502 0.0000 \u2502                                           0.0000 \u2502\n\u2502 0.5000 \u2502                                           1.0000 \u2502\n\u2502 1.0000 \u2502                                           1.0000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f")),(0,l.kt)("p",null,"\u041e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0447\u0438\u0441\u043b\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"round(3.2, 0) = 3\nround(4.1267, 2) = 4.13\nround(22,-1) = 20\nround(467,-2) = 500\nround(-467,-2) = -500\n")),(0,l.kt)("p",null,"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"round(3.5) = 4\nround(4.5) = 4\nround(3.55, 1) = 3.6\nround(3.65, 1) = 3.6\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#roundbankers"},"roundBankers"))),(0,l.kt)("h2",{id:"roundbankers"},"roundBankers"),(0,l.kt)("p",null,"\u041e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0434\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u0430."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u043c\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0432\u043d\u043e\u0443\u0434\u0430\u043b\u0435\u043d\u043e \u043e\u0442 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0445 \u0447\u0438\u0441\u0435\u043b, \u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 (\u0430\u043d\u0433\u043b. banker's rounding) \u2014 \u043c\u0435\u0442\u043e\u0434 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0434\u0440\u043e\u0431\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b. \u0415\u0441\u043b\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u043c\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0432\u043d\u043e\u0443\u0434\u0430\u043b\u0435\u043d\u043e \u043e\u0442 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0445 \u0447\u0438\u0441\u0435\u043b, \u0442\u043e \u043e\u043d\u043e \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0439 \u0447\u0451\u0442\u043d\u043e\u0439 \u0446\u0438\u0444\u0440\u044b \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u0430. \u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, 3,5 \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e 4, \u0430 2,5 \u0434\u043e 2.\n\n\u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0435 [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754#Roundings_to_nearest). \u0424\u0443\u043d\u043a\u0446\u0438\u044f [round](#rounding_functions-round) \u0442\u0430\u043a\u0436\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u0430 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u043c\u0435\u0442\u043e\u0434\u0443. \u0424\u0443\u043d\u043a\u0446\u0438\u044f `roundBankers` \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u0430 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439, \u043d\u043e \u0438 \u0446\u0435\u043b\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, `roundBankers(45, -1) = 40`.\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u0412 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u043a \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c\u0443 \u0446\u0435\u043b\u043e\u043c\u0443."))),(0,l.kt)("p",null,"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u0435\u043b \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u0432\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u0447\u0438\u0441\u0435\u043b."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0447\u0438\u0441\u0435\u043b 1.5, 2.5, 3.5 \u0438 4.5 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435\u043c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0411\u0435\u0437 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f: 1.5 + 2.5 + 3.5 + 4.5 = 12."),(0,l.kt)("li",{parentName:"ul"},"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435: 2 + 2 + 4 + 4 = 12."),(0,l.kt)("li",{parentName:"ul"},"\u041e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0446\u0435\u043b\u043e\u0433\u043e: 2 + 3 + 4 + 5 = 14.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"roundBankers(expression [, decimal_places])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression")," \u2014 \u0447\u0438\u0441\u043b\u043e \u0434\u043b\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u044b\u043c ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u043c \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/functions/rounding-functions#data_types"},"\u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimal-places")," \u2014 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0437\u0440\u044f\u0434. \u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimal-places > 0")," \u2014 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0441\u043f\u0440\u0430\u0432\u0430 \u043e\u0442 \u0437\u0430\u043f\u044f\u0442\u043e\u0439. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"li"},"roundBankers(3.55, 1) = 3.6"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimal-places < 0")," \u2014 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0447\u0451\u0442\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0441\u043b\u0435\u0432\u0430 \u043e\u0442 \u0437\u0430\u043f\u044f\u0442\u043e\u0439. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"li"},"roundBankers(24.55, -1) = 20"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimal-places = 0")," \u2014 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e \u0446\u0435\u043b\u043e\u0433\u043e. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"li"},"roundBankers(2.5) = 2"),".")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u041e\u043a\u0440\u0443\u0433\u043b\u0451\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0443 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT number / 2 AS x, roundBankers(x, 0) AS b fROM system.numbers limit 10\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500x\u2500\u252c\u2500b\u2500\u2510\n\u2502   0 \u2502 0 \u2502\n\u2502 0.5 \u2502 0 \u2502\n\u2502   1 \u2502 1 \u2502\n\u2502 1.5 \u2502 2 \u2502\n\u2502   2 \u2502 2 \u2502\n\u2502 2.5 \u2502 2 \u2502\n\u2502   3 \u2502 3 \u2502\n\u2502 3.5 \u2502 4 \u2502\n\u2502   4 \u2502 4 \u2502\n\u2502 4.5 \u2502 4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"roundBankers(0.4) = 0\nroundBankers(-3.5) = -4\nroundBankers(4.5) = 4\nroundBankers(3.55, 1) = 3.6\nroundBankers(3.65, 1) = 3.6\nroundBankers(10.35, 1) = 10.4\nroundBankers(10.755, 2) = 10,76\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rounding_functions-round"},"round"))),(0,l.kt)("h2",{id:"roundtoexp2num"},"roundToExp2(num)"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e. \u0415\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 0. \u0418\u043d\u0430\u0447\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0432\u043d\u0438\u0437 \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0439 (\u0446\u0435\u043b\u043e\u0439 \u043d\u0435\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439) \u0441\u0442\u0435\u043f\u0435\u043d\u0438 \u0434\u0432\u0443\u0445."),(0,l.kt)("h2",{id:"rounddurationnum"},"roundDuration(num)"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e. \u0415\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 0. \u0418\u043d\u0430\u0447\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0432\u043d\u0438\u0437 \u0434\u043e \u0447\u0438\u0441\u0435\u043b \u0438\u0437 \u043d\u0430\u0431\u043e\u0440\u0430: 1, 10, 30, 60, 120, 180, 240, 300, 600, 1200, 1800, 3600, 7200, 18000, 36000. \u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u0430 \u0434\u043b\u044f \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0442\u0447\u0451\u0442\u0430 \u043f\u043e \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432\u0438\u0437\u0438\u0442\u0430."),(0,l.kt)("h2",{id:"roundagenum"},"roundAge(num)"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0447\u0438\u0441\u043b\u043e. \u0415\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u043c\u0435\u043d\u044c\u0448\u0435 18 - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 0. \u0418\u043d\u0430\u0447\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0432\u043d\u0438\u0437 \u0434\u043e \u0447\u0438\u0441\u0435\u043b \u0438\u0437 \u043d\u0430\u0431\u043e\u0440\u0430: 18, 25, 35, 45, 55. \u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u0430 \u0434\u043b\u044f \u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0438 \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0442\u0447\u0451\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0443 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439."))}k.isMDXComponent=!0}}]);