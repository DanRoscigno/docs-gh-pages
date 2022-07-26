"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[51210],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={},l="system.disks",p={unversionedId:"zh/operations/system-tables/disks",id:"zh/operations/system-tables/disks",title:"system.disks",description:"system_tables-disks}",source:"@site/docs/zh/operations/system-tables/disks.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/disks",permalink:"/docs-gh-pages/up/zh/operations/system-tables/disks",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/disks.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002\u5b57\u5178",permalink:"/docs-gh-pages/up/zh/operations/system-tables/dictionaries"},next:{title:"system.distributed_ddl_queue",permalink:"/docs-gh-pages/up/zh/operations/system-tables/distributed_ddl_queue"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-disks"},"system.disks"),(0,s.kt)("p",null,"\u5305\u542b\u5728 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes_configure"},"\u670d\u52a1\u5668\u914d\u7f6e")," \u4e2d\u5b9a\u4e49\u7684\u78c1\u76d8\u4fe1\u606f."),(0,s.kt)("p",null,"\u5217:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u670d\u52a1\u5668\u914d\u7f6e\u4e2d\u7684\u78c1\u76d8\u540d\u79f0."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u6587\u4ef6\u7cfb\u7edf\u4e2d\u6302\u8f7d\u70b9\u7684\u8def\u5f84."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"free_space")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u78c1\u76d8\u4e0a\u7684\u53ef\u7528\u7a7a\u95f4\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"total_space")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u78c1\u76d8\u5bb9\u91cf\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"keep_free_space")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u5728\u78c1\u76d8\u4e0a\u5e94\u4fdd\u6301\u7a7a\u95f2\u7684\u78c1\u76d8\u7a7a\u95f4\u7684\u6570\u91cf\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002\u5728\u78c1\u76d8\u914d\u7f6e\u7684 ",(0,s.kt)("inlineCode",{parentName:"li"},"keep_free_space_bytes")," \u53c2\u6570\u4e2d\u5b9a\u4e49\u3002")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT * FROM system.disks;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u252c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500free_space\u2500\u252c\u2500\u2500total_space\u2500\u252c\u2500keep_free_space\u2500\u2510\n\u2502 default \u2502 /var/lib/clickhouse/ \u2502 276392587264 \u2502 490652508160 \u2502               0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.001 sec.\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/disks"},"\u539f\u6587")," "))}d.isMDXComponent=!0}}]);