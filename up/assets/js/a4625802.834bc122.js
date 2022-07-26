"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58842],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),g=n,u=d["".concat(l,".").concat(g)]||d[g]||c[g]||p;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<p;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10946:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),o=["components"],i={sidebar_position:62,sidebar_label:"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"},l="\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438",s={unversionedId:"ru/sql-reference/data-types/geo",id:"ru/sql-reference/data-types/geo",title:"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438",description:"geo-data-types}",source:"@site/docs/ru/sql-reference/data-types/geo.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/geo",permalink:"/docs-gh-pages/up/ru/sql-reference/data-types/geo",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/geo.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{sidebar_position:62,sidebar_label:"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"},sidebar:"russia",previous:{title:"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b",permalink:"/docs-gh-pages/up/ru/sql-reference/data-types/multiword-types"},next:{title:"Map(key, value)",permalink:"/docs-gh-pages/up/ru/sql-reference/data-types/map"}},m={},c=[],d={toc:c};function g(e){var t=e.components,a=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"geo-data-types"},"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438"),(0,p.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u2014 \u0442\u043e\u0447\u0435\u043a (\u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439), \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439 \u0438 \u0442.\u043f."),(0,p.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"')),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e. \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 `allow_experimental_geo_types = 1`.\n")),(0,p.kt)("p",{parentName:"div"},(0,p.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,p.kt)("ul",{parentName:"div"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/GeoJSON"},"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"),"."),(0,p.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/operations/settings/settings#allow-experimental-geo-types"},"allow_experimental_geo_types"),".")),(0,p.kt)("h2",{parentName:"div",id:"point-data-type"},"Point"),(0,p.kt)("p",{parentName:"div"},"\u0422\u0438\u043f ",(0,p.kt)("inlineCode",{parentName:"p"},"Point")," (\u0442\u043e\u0447\u043a\u0430) \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u043e\u0439 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 X \u0438 Y \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043a\u043e\u0440\u0442\u0435\u0436\u0430 ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/tuple"},"Tuple"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float64"),", ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float64"),")."),(0,p.kt)("p",{parentName:"div"},(0,p.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,p.kt)("p",{parentName:"div"},"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_geo_types = 1;\nCREATE TABLE geo_point (p Point) ENGINE = Memory();\nINSERT INTO geo_point VALUES((10, 10));\nSELECT p, toTypeName(p) FROM geo_point;\n")),(0,p.kt)("p",{parentName:"div"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500p\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(p)\u2500\u2510\n\u2502 (10,10) \u2502 Point         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,p.kt)("h2",{parentName:"div",id:"ring-data-type"},"Ring"),(0,p.kt)("p",{parentName:"div"},"\u0422\u0438\u043f ",(0,p.kt)("inlineCode",{parentName:"p"},"Ring")," \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0431\u0435\u0437 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439 (\u0434\u044b\u0440) \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0442\u043e\u0447\u0435\u043a: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"#point-data-type"},"Point"),")."),(0,p.kt)("p",{parentName:"div"},(0,p.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,p.kt)("p",{parentName:"div"},"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_geo_types = 1;\nCREATE TABLE geo_ring (r Ring) ENGINE = Memory();\nINSERT INTO geo_ring VALUES([(0, 0), (10, 0), (10, 10), (0, 10)]);\nSELECT r, toTypeName(r) FROM geo_ring;\n")),(0,p.kt)("p",{parentName:"div"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500r\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(r)\u2500\u2510\n\u2502 [(0,0),(10,0),(10,10),(0,10)] \u2502 Ring          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,p.kt)("h2",{parentName:"div",id:"polygon-data-type"},"Polygon"),(0,p.kt)("p",{parentName:"div"},"\u0422\u0438\u043f ",(0,p.kt)("inlineCode",{parentName:"p"},"Polygon")," \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c\u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u043c\u0438 (\u0434\u044b\u0440\u0430\u043c\u0438) \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"#ring-data-type"},"Ring"),"). \u041f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a (\u043a\u043e\u043d\u0442\u0443\u0440), \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442 \u0434\u044b\u0440\u044b."),(0,p.kt)("p",{parentName:"div"},(0,p.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,p.kt)("p",{parentName:"div"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0432 \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0441 \u043e\u0434\u043d\u043e\u0439 \u0434\u044b\u0440\u043e\u0439:"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_geo_types = 1;\nCREATE TABLE geo_polygon (pg Polygon) ENGINE = Memory();\nINSERT INTO geo_polygon VALUES([[(20, 20), (50, 20), (50, 50), (20, 50)], [(30, 30), (50, 50), (50, 30)]]);\nSELECT pg, toTypeName(pg) FROM geo_polygon;\n")),(0,p.kt)("p",{parentName:"div"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500pg\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(pg)\u2500\u2510\n\u2502 [[(20,20),(50,20),(50,50),(20,50)],[(30,30),(50,50),(50,30)]] \u2502 Polygon        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,p.kt)("h2",{parentName:"div",id:"multipolygon-data-type"},"MultiPolygon"),(0,p.kt)("p",{parentName:"div"},"\u0422\u0438\u043f ",(0,p.kt)("inlineCode",{parentName:"p"},"MultiPolygon")," \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 (\u043f\u043e\u043b\u0438\u0433\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0435\u0442\u043a\u0443). \u041e\u043d \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432: ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"#polygon-data-type"},"Polygon"),")."),(0,p.kt)("p",{parentName:"div"},(0,p.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,p.kt)("p",{parentName:"div"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0432 \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u2014 \u043f\u0435\u0440\u0432\u044b\u0439 \u0431\u0435\u0437 \u0434\u044b\u0440, \u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0441 \u043e\u0434\u043d\u043e\u0439 \u0434\u044b\u0440\u043e\u0439:"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_geo_types = 1;\nCREATE TABLE geo_multipolygon (mpg MultiPolygon) ENGINE = Memory();\nINSERT INTO geo_multipolygon VALUES([[[(0, 0), (10, 0), (10, 10), (0, 10)]], [[(20, 20), (50, 20), (50, 50), (20, 50)],[(30, 30), (50, 50), (50, 30)]]]);\nSELECT mpg, toTypeName(mpg) FROM geo_multipolygon;\n")),(0,p.kt)("p",{parentName:"div"},"Result:"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mpg\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(mpg)\u2500\u2510\n\u2502 [[[(0,0),(10,0),(10,10),(0,10)]],[[(20,20),(50,20),(50,50),(20,50)],[(30,30),(50,50),(50,30)]]] \u2502 MultiPolygon    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))))}g.isMDXComponent=!0}}]);