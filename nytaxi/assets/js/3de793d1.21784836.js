"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65396],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80544:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:55,sidebar_label:"s3Cluster"},s="\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f s3Cluster",c={unversionedId:"ru/sql-reference/table-functions/s3Cluster",id:"ru/sql-reference/table-functions/s3Cluster",title:"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f s3Cluster",description:"s3Cluster-table-function}",source:"@site/docs/ru/sql-reference/table-functions/s3Cluster.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/s3Cluster",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/table-functions/s3Cluster",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/s3Cluster.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55,sidebar_label:"s3Cluster"},sidebar:"russia",previous:{title:"dictionary",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/table-functions/dictionary"},next:{title:"sqlite",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/table-functions/sqlite"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"s3Cluster-table-function"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f s3Cluster"),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u0438\u0437 ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e \u0438\u0437 \u043c\u043d\u043e\u0433\u0438\u0445 \u0443\u0437\u043b\u043e\u0432 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435. \u041d\u0430 \u0443\u0437\u043b\u0435-\u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u0443\u0437\u043b\u0430\u043c\u0438 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435, \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u0438\u043c\u0432\u043e\u043b\u044b '*' \u0432 \u043f\u0443\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0443 S3 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u0444\u0430\u0439\u043b. \u041d\u0430 \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u0443\u0437\u043b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0443 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0435\u0435. \u042d\u0442\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442\u0441\u044f \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0432\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u044b."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"s3Cluster(cluster_name, source, [access_key_id, secret_access_key,] format, structure)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster_name")," \u2014 \u0438\u043c\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u0430\u0431\u043e\u0440\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u043c \u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," \u2014 URL \u0444\u0430\u0439\u043b\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438: ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{'abc','def'}")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"{N..M}"),", \u0433\u0434\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," \u2014 \u0447\u0438\u0441\u043b\u0430, ",(0,i.kt)("inlineCode",{parentName:"li"},"abc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"def")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/integrations/s3#wildcards-in-path"},"\u0421\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"access_key_id")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"secret_access_key")," \u2014 \u043a\u043b\u044e\u0447\u0438, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u043d\u0430 \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u0442\u043e\u0447\u043a\u043e\u0439 \u043f\u0440\u0438\u0435\u043c\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/interfaces/formats#formats"},"\u0444\u043e\u0440\u043c\u0430\u0442")," \u0444\u0430\u0439\u043b\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0424\u043e\u0440\u043c\u0430\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,i.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster_simple"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM s3Cluster('cluster_simple', 'http://minio1:9001/root/data/{clickhouse,database}/*', 'minio', 'minio123', 'CSV', 'name String, value UInt32, polygon Array(Array(Tuple(Float64, Float64)))') ORDER BY (name, value, polygon);\n")),(0,i.kt)("p",null,"\u041f\u043e\u0434\u0441\u0447\u0435\u0442 \u043e\u0431\u0449\u0435\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0442\u0440\u043e\u043a \u0432\u043e \u0432\u0441\u0435\u0445 \u0444\u0430\u0439\u043b\u0430\u0445 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster_simple"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM s3Cluster('cluster_simple', 'http://minio1:9001/root/data/{clickhouse,database}/*', 'minio', 'minio123', 'CSV', 'name String, value UInt32, polygon Array(Array(Tuple(Float64, Float64)))');\n")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0430\u0439\u043b\u043e\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b \u0447\u0438\u0441\u0435\u043b \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438 \u043d\u0443\u043b\u044f\u043c\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e \u0441 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u043c\u0438 \u0441\u043a\u043e\u0431\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0446\u0438\u0444\u0440\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 `?`.\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/engines/table-engines/integrations/s3"},"\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 S3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/table-functions/s3"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f s3"))))))}d.isMDXComponent=!0}}]);