"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[26837],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||s[f]||u;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=t.length,l=new Array(u);l[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<u;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70947:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=t(87462),o=t(63366),u=(t(67294),t(3905)),l=["components"],i={},a="\u53d6\u6574\u51fd\u6570",c={unversionedId:"zh/sql-reference/functions/rounding-functions",id:"zh/sql-reference/functions/rounding-functions",title:"\u53d6\u6574\u51fd\u6570",description:"qu-zheng-han-shu}",source:"@site/docs/zh/sql-reference/functions/rounding-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/rounding-functions",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/rounding-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/rounding-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u968f\u673a\u51fd\u6570",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/random-functions"},next:{title:"\u5b57\u7b26\u4e32\u62c6\u5206\u5408\u5e76\u51fd\u6570",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/splitting-merging-functions"}},p={},s=[{value:"\u697c(x[,N])",id:"floorx-n",level:2},{value:"ceil(x[,N]),\u5929\u82b1\u677f(x[,N])",id:"ceilx-n-ceilingx-n",level:2},{value:"\u5706\u5f62(x[,N])",id:"rounding_functions-round",level:2},{value:"\u793a\u4f8b",id:"shi-li",level:3},{value:"roundToExp2(num)",id:"roundtoexp2num",level:2},{value:"\u5706\u5f62\u9971\u548c\u5ea6(num)",id:"rounddurationnum",level:2},{value:"\u5706\u6570(num)",id:"roundagenum",level:2},{value:"roundDown(num,arr)",id:"rounddownnum-arr",level:2}],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"qu-zheng-han-shu"},"\u53d6\u6574\u51fd\u6570"),(0,u.kt)("h2",{id:"floorx-n"},"\u697c(x","[",",N","]",")"),(0,u.kt)("p",null,"\u8fd4\u56de\u5c0f\u4e8e\u6216\u7b49\u4e8ex\u7684\u6700\u5927\u820d\u5165\u6570\u3002\u8be5\u51fd\u6570\u4f7f\u7528\u53c2\u6570\u4e581/10N\uff0c\u5982\u679c1/10N\u4e0d\u7cbe\u786e\uff0c\u5219\u9009\u62e9\u6700\u63a5\u8fd1\u7684\u7cbe\u786e\u7684\u9002\u5f53\u6570\u636e\u7c7b\u578b\u7684\u6570\u3002\n\u2019N\u2019\u662f\u4e00\u4e2a\u6574\u6570\u5e38\u91cf\uff0c\u53ef\u9009\u53c2\u6570\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8fd9\u610f\u5473\u7740\u4e0d\u5bf9\u5176\u8fdb\u884c\u820d\u5165\u3002\n\u2019N\u2019\u53ef\u4ee5\u662f\u8d1f\u6570\u3002"),(0,u.kt)("p",null,"\u793a\u4f8b: ",(0,u.kt)("inlineCode",{parentName:"p"},"floor(123.45, 1) = 123.4, floor(123.45, -1) = 120.")),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"x"),"\u662f\u4efb\u4f55\u6570\u5b57\u7c7b\u578b\u3002\u7ed3\u679c\u4e0e\u5176\u4e3a\u76f8\u540c\u7c7b\u578b\u3002\n\u5bf9\u4e8e\u6574\u6570\u53c2\u6570\uff0c\u4f7f\u7528\u8d1f\u2019N\u2019\u503c\u8fdb\u884c\u820d\u5165\u662f\u6709\u610f\u4e49\u7684\uff08\u5bf9\u4e8e\u975e\u8d1f\xabN\xbb\uff0c\u8be5\u51fd\u6570\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\uff09\u3002\n\u5982\u679c\u53d6\u6574\u5bfc\u81f4\u6ea2\u51fa\uff08\u4f8b\u5982\uff0cfloor(-128\uff0c-1)\uff09\uff0c\u5219\u8fd4\u56de\u7279\u5b9a\u4e8e\u5b9e\u73b0\u7684\u7ed3\u679c\u3002"),(0,u.kt)("h2",{id:"ceilx-n-ceilingx-n"},"ceil(x","[",",N","]","),\u5929\u82b1\u677f(x","[",",N","]",")"),(0,u.kt)("p",null,"\u8fd4\u56de\u5927\u4e8e\u6216\u7b49\u4e8e\u2019x\u2019\u7684\u6700\u5c0f\u820d\u5165\u6570\u3002\u5728\u5176\u4ed6\u65b9\u9762\uff0c\u5b83\u4e0e\u2019floor\u2019\u529f\u80fd\u76f8\u540c\uff08\u89c1\u4e0a\u6587\uff09\u3002"),(0,u.kt)("h2",{id:"rounding_functions-round"},"\u5706\u5f62(x","[",",N","]",")"),(0,u.kt)("p",null,"\u5c06\u503c\u53d6\u6574\u5230\u6307\u5b9a\u7684\u5c0f\u6570\u4f4d\u6570\u3002"),(0,u.kt)("p",null,"\u8be5\u51fd\u6570\u6309\u987a\u5e8f\u8fd4\u56de\u6700\u8fd1\u7684\u6570\u5b57\u3002\u5982\u679c\u7ed9\u5b9a\u6570\u5b57\u5305\u542b\u591a\u4e2a\u6700\u8fd1\u6570\u5b57\uff0c\u5219\u51fd\u6570\u8fd4\u56de\u5176\u4e2d\u6700\u63a5\u8fd1\u5076\u6570\u7684\u6570\u5b57\uff08\u94f6\u884c\u7684\u53d6\u6574\u65b9\u5f0f\uff09\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"round(expression [, decimal_places])\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"expression")," \u2014 \u8981\u8fdb\u884c\u53d6\u6574\u7684\u6570\u5b57\u3002\u53ef\u4ee5\u662f\u4efb\u4f55\u8fd4\u56de\u6570\u5b57",(0,u.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/rounding-functions#data_types"},"\u7c7b\u578b"),"\u7684",(0,u.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"\u3002"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"decimal-places")," \u2014 \u6574\u6570\u7c7b\u578b\u3002",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,u.kt)("inlineCode",{parentName:"li"},"decimal-places > 0"),"\uff0c\u5219\u8be5\u51fd\u6570\u5c06\u503c\u820d\u5165\u5c0f\u6570\u70b9\u53f3\u4fa7\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,u.kt)("inlineCode",{parentName:"li"},"decimal-places < 0"),"\uff0c\u5219\u8be5\u51fd\u6570\u5c06\u5c0f\u6570\u70b9\u5de6\u4fa7\u7684\u503c\u56db\u820d\u4e94\u5165\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,u.kt)("inlineCode",{parentName:"li"},"decimal-places = 0"),"\uff0c\u5219\u8be5\u51fd\u6570\u5c06\u8be5\u503c\u820d\u5165\u4e3a\u6574\u6570\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u7701\u7565\u53c2\u6570\u3002")))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c\uff1a")),(0,u.kt)("p",null,"\u4e0e\u8f93\u5165\u6570\u5b57\u76f8\u540c\u7c7b\u578b\u7684\u53d6\u6574\u540e\u7684\u6570\u5b57\u3002"),(0,u.kt)("h3",{id:"shi-li"},"\u793a\u4f8b"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number / 2 AS x, round(x) FROM system.numbers LIMIT 3\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500x\u2500\u252c\u2500round(divide(number, 2))\u2500\u2510\n\u2502   0 \u2502                        0 \u2502\n\u2502 0.5 \u2502                        0 \u2502\n\u2502   1 \u2502                        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u53d6\u6574\u7684\u793a\u4f8b")),(0,u.kt)("p",null,"\u53d6\u6574\u5230\u6700\u8fd1\u7684\u6570\u5b57\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"round(3.2, 0) = 3\nround(4.1267, 2) = 4.13\nround(22,-1) = 20\nround(467,-2) = 500\nround(-467,-2) = -500\n")),(0,u.kt)("p",null,"\u94f6\u884c\u7684\u53d6\u6574\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"round(3.5) = 4\nround(4.5) = 4\nround(3.55, 1) = 3.6\nround(3.65, 1) = 3.6\n")),(0,u.kt)("h2",{id:"roundtoexp2num"},"roundToExp2(num)"),(0,u.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u5b57\u3002\u5982\u679c\u6570\u5b57\u5c0f\u4e8e1\uff0c\u5219\u8fd4\u56de0\u3002\u5426\u5219\uff0c\u5b83\u5c06\u6570\u5b57\u5411\u4e0b\u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\uff08\u6574\u4e2a\u975e\u8d1f\uff092\u7684x\u6b21\u5e42\u3002"),(0,u.kt)("h2",{id:"rounddurationnum"},"\u5706\u5f62\u9971\u548c\u5ea6(num)"),(0,u.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u5b57\u3002\u5982\u679c\u6570\u5b57\u5c0f\u4e8e1\uff0c\u5219\u8fd4\u56de0\u3002\u5426\u5219\uff0c\u5b83\u5c06\u6570\u5b57\u5411\u4e0b\u820d\u5165\u4e3a\u96c6\u5408\u4e2d\u7684\u6570\u5b57\uff1a1\uff0c10\uff0c30\uff0c60\uff0c120\uff0c180\uff0c240\uff0c300\uff0c600\uff0c1200\uff0c1800\uff0c3600\uff0c7200\uff0c18000\uff0c36000\u3002\u6b64\u51fd\u6570\u7528\u4e8eYandex.Metrica\u62a5\u8868\u4e2d\u8ba1\u7b97\u4f1a\u8bdd\u7684\u6301\u7eed\u65f6\u957f\u3002"),(0,u.kt)("h2",{id:"roundagenum"},"\u5706\u6570(num)"),(0,u.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u5b57\u3002\u5982\u679c\u6570\u5b57\u5c0f\u4e8e18\uff0c\u5219\u8fd4\u56de0\u3002\u5426\u5219\uff0c\u5b83\u5c06\u6570\u5b57\u5411\u4e0b\u820d\u5165\u4e3a\u96c6\u5408\u4e2d\u7684\u6570\u5b57\uff1a18\uff0c25\uff0c35\uff0c45\uff0c55\u3002\u6b64\u51fd\u6570\u7528\u4e8eYandex.Metrica\u62a5\u8868\u4e2d\u7528\u6237\u5e74\u9f84\u7684\u8ba1\u7b97\u3002"),(0,u.kt)("h2",{id:"rounddownnum-arr"},"roundDown(num,arr)"),(0,u.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u5b57\uff0c\u5c06\u5176\u5411\u4e0b\u820d\u5165\u5230\u6307\u5b9a\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u3002\u5982\u679c\u8be5\u503c\u5c0f\u4e8e\u6570\u7ec4\u4e2d\u7684\u6700\u4f4e\u8fb9\u754c\uff0c\u5219\u8fd4\u56de\u6700\u4f4e\u8fb9\u754c\u3002"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/rounding_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);