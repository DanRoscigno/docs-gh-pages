"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[6892],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14342:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={sidebar_position:47,sidebar_label:"generateRandom"},c="generateRandom",u={unversionedId:"zh/sql-reference/table-functions/generate",id:"zh/sql-reference/table-functions/generate",title:"generateRandom",description:"generaterandom}",source:"@site/docs/zh/sql-reference/table-functions/generate.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/generate",permalink:"/docs-gh-pages/up/zh/sql-reference/table-functions/generate",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/generate.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,sidebar_label:"generateRandom"},sidebar:"chinese",previous:{title:"input",permalink:"/docs-gh-pages/up/zh/sql-reference/table-functions/input"},next:{title:"cluster",permalink:"/docs-gh-pages/up/zh/sql-reference/table-functions/cluster"}},p={},s=[{value:"\u7528\u6cd5\u793a\u4f8b",id:"usage-example",level:2}],m={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generaterandom"},"generateRandom"),(0,o.kt)("p",null,"\u751f\u6210\u5177\u7528\u7ed9\u5b9a\u7684\u6a21\u5f0f\u7684\u968f\u673a\u6570\u636e\u3002\n\u5141\u8bb8\u7528\u6570\u636e\u6765\u586b\u5145\u6d4b\u8bd5\u8868\u3002\n\u652f\u6301\u6240\u6709\u53ef\u4ee5\u5b58\u50a8\u5728\u8868\u4e2d\u7684\u6570\u636e\u7c7b\u578b\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u9664\u5916\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"generateRandom('name TypeName[, name TypeName]...', [, 'random_seed'[, 'max_string_length'[, 'max_array_length']]]);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," \u2014 \u5bf9\u5e94\u5217\u7684\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TypeName")," \u2014 \u5bf9\u5e94\u5217\u7684\u7c7b\u578b\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_array_length")," \u2014 \u751f\u6210\u6570\u7ec4\u7684\u6700\u5927\u957f\u5ea6\u3002 \u9ed8\u8ba4\u4e3a10\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_string_length")," \u2014 \u751f\u6210\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6\u3002 \u9ed8\u8ba4\u4e3a10\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"random_seed")," \u2014 \u624b\u52a8\u6307\u5b9a\u968f\u673a\u79cd\u5b50\u4ee5\u4ea7\u751f\u7a33\u5b9a\u7684\u7ed3\u679c\u3002 \u5982\u679c\u4e3aNULL-\u79cd\u5b50\u662f\u968f\u673a\u751f\u6210\u7684\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("p",null,"\u5177\u6709\u8bf7\u6c42\u6a21\u5f0f\u7684\u8868\u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"usage-example"},"\u7528\u6cd5\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM generateRandom('a Array(Int8), d Decimal32(4), c Tuple(DateTime64(3), UUID)', 1, 10, 2) LIMIT 3;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500d\u2500\u252c\u2500c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [77]     \u2502 -124167.6723 \u2502 ('2061-04-17 21:59:44.573','3f72f405-ec3e-13c8-44ca-66ef335f7835') \u2502\n\u2502 [32,110] \u2502 -141397.7312 \u2502 ('1979-02-09 03:43:48.526','982486d1-5a5d-a308-e525-7bd8b80ffa73') \u2502\n\u2502 [68]     \u2502  -67417.0770 \u2502 ('2080-03-12 14:17:31.269','110425e5-413f-10a6-05ba-fa6b3e929f15') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/generate/"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);