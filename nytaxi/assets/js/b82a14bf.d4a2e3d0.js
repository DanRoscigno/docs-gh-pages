"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[26239],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_label:"UNION ALL"},s="UNION ALL\u5b50\u53e5",c={unversionedId:"zh/sql-reference/statements/select/union",id:"zh/sql-reference/statements/select/union",title:"UNION ALL\u5b50\u53e5",description:"union-clause}",source:"@site/docs/zh/sql-reference/statements/select/union.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/union",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/select/union",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/union.md",tags:[],version:"current",frontMatter:{sidebar_label:"UNION ALL"},sidebar:"chinese",previous:{title:"SAMPLE",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/select/sample"},next:{title:"WHERE",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/select/where"}},p={},u=[{value:"\u9650\u5236",id:"limitations",level:2},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"implementation-details",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"union-clause"},"UNION ALL\u5b50\u53e5"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u7ed3\u5408\u4efb\u610f\u6570\u91cf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u6765\u6269\u5c55\u5176\u7ed3\u679c\u3002 \u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CounterID, 1 AS table, toInt64(count()) AS c\n    FROM test.hits\n    GROUP BY CounterID\n\nUNION ALL\n\nSELECT CounterID, 2 AS table, sum(Sign) AS c\n    FROM test.visits\n    GROUP BY CounterID\n    HAVING c > 0\n")),(0,i.kt)("p",null,"\u7ed3\u679c\u5217\u901a\u8fc7\u5b83\u4eec\u7684\u7d22\u5f15\u8fdb\u884c\u5339\u914d\uff08\u5728\u5185\u90e8\u7684\u987a\u5e8f ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"). \u5982\u679c\u5217\u540d\u79f0\u4e0d\u5339\u914d\uff0c\u5219\u4ece\u7b2c\u4e00\u4e2a\u67e5\u8be2\u4e2d\u83b7\u53d6\u6700\u7ec8\u7ed3\u679c\u7684\u540d\u79f0\u3002"),(0,i.kt)("p",null,"\u5bf9\u8054\u5408\u6267\u884c\u7c7b\u578b\u8f6c\u6362\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u5408\u5e76\u7684\u4e24\u4e2a\u67e5\u8be2\u5177\u6709\u76f8\u540c\u7684\u5b57\u6bb5\u4e0e\u975e-",(0,i.kt)("inlineCode",{parentName:"p"},"Nullable")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Nullable")," \u4ece\u517c\u5bb9\u7c7b\u578b\u7684\u7c7b\u578b\uff0c\u7531\u6b64\u4ea7\u751f\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u6709\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Nullable")," \u7c7b\u578b\u5b57\u6bb5\u3002"),(0,i.kt)("p",null,"\u5c5e\u4e8e\u4ee5\u4e0b\u90e8\u5206\u7684\u67e5\u8be2 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u4e0d\u80fd\u7528\u5706\u62ec\u53f7\u62ec\u8d77\u6765\u3002 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/select/order-by"},"ORDER BY")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/select/limit"},"LIMIT")," \u5e94\u7528\u4e8e\u5355\u72ec\u7684\u67e5\u8be2\uff0c\u800c\u4e0d\u662f\u6700\u7ec8\u7ed3\u679c\u3002 \u5982\u679c\u60a8\u9700\u8981\u5c06\u8f6c\u6362\u5e94\u7528\u4e8e\u6700\u7ec8\u7ed3\u679c\uff0c\u5219\u53ef\u4ee5\u5c06\u6240\u6709\u67e5\u8be2 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u5728\u5b50\u67e5\u8be2\u4e2d ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/statements/select/from"},"FROM")," \u5b50\u53e5\u3002"),(0,i.kt)("h2",{id:"limitations"},"\u9650\u5236"),(0,i.kt)("p",null,"\u53ea\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u652f\u6301\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION")," (",(0,i.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT"),"\uff09\u4e0d\u652f\u6301\u3002 \u5982\u679c\u4f60\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT"),"\uff0c\u4f60\u53ef\u4ee5\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT")," \u5b50\u67e5\u8be2\u4e2d\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL"),"."),(0,i.kt)("h2",{id:"implementation-details"},"\u5b9e\u73b0\u7ec6\u8282"),(0,i.kt)("p",null,"\u5c5e\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u7684\u67e5\u8be2\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\uff0c\u5e76\u4e14\u5b83\u4eec\u7684\u7ed3\u679c\u53ef\u4ee5\u6df7\u5408\u5728\u4e00\u8d77\u3002"))}f.isMDXComponent=!0}}]);