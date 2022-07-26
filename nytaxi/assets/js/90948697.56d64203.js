"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87495],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return v}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,l=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),c=s(t),v=i,m=c["".concat(l,".").concat(v)]||c[v]||f[v]||a;return t?r.createElement(m,o(o({ref:e},p),{},{components:t})):r.createElement(m,o({ref:e},p))}));function v(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=c;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u.mdxType="string"==typeof n?n:i,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},31507:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],u={},l="IP\u51fd\u6570",s={unversionedId:"zh/sql-reference/functions/ip-address-functions",id:"zh/sql-reference/functions/ip-address-functions",title:"IP\u51fd\u6570",description:"iphan-shu}",source:"@site/docs/zh/sql-reference/functions/ip-address-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/ip-address-functions",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/ip-address-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/ip-address-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u9ad8\u9636\u51fd\u6570",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/higher-order-functions"},next:{title:"JSON\u51fd\u6570",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/json-functions"}},p={},f=[{value:"IPv4NumToString(num)",id:"ipv4numtostringnum",level:2},{value:"IPv4StringToNum(s)",id:"ipv4stringtonums",level:2},{value:"IPv4NumToStringClassC(num)",id:"ipv4numtostringclasscnum",level:2},{value:"IPv6NumToString(x)",id:"ipv6numtostringx",level:3},{value:"IPv6StringToNum(s)",id:"ipv6stringtonums",level:2},{value:"IPv4ToIPv6(x)",id:"ipv4toipv6x",level:2},{value:"cutIPv6(x,bitsToCutForIPv6,bitsToCutForIPv4)",id:"cutipv6x-bitstocutforipv6-bitstocutforipv4",level:2},{value:"\uff82\u53e4\uff76\uff82\u76ca\uff82\u50ac\uff82\u56e3\uff82\u6cd5\uff82\u4eba),",id:"ipv4cidrtorangeipv4-cidr",level:2},{value:"\uff82\u6697\uff6a\uff82\u6c3e\u73af\u50ac\uff82\u56e3\uff82\u6cd5\uff82\u4eba),",id:"ipv6cidrtorangeipv6-cidr",level:2},{value:"toIPv4(\u5b57\u7b26\u4e32)",id:"toipv4string",level:2},{value:"toIPv6(\u5b57\u7b26\u4e32)",id:"toipv6string",level:2}],c={toc:f};function v(n){var e=n.components,t=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iphan-shu"},"IP\u51fd\u6570"),(0,a.kt)("h2",{id:"ipv4numtostringnum"},"IPv4NumToString(num)"),(0,a.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2aUInt32\uff08\u5927\u7aef\uff09\u8868\u793a\u7684IPv4\u7684\u5730\u5740\uff0c\u8fd4\u56de\u76f8\u5e94IPv4\u7684\u5b57\u7b26\u4e32\u8868\u73b0\u5f62\u5f0f\uff0c\u683c\u5f0f\u4e3aA.B.C.D\uff08\u4ee5\u70b9\u5206\u5272\u7684\u5341\u8fdb\u5236\u6570\u5b57\uff09\u3002"),(0,a.kt)("h2",{id:"ipv4stringtonums"},"IPv4StringToNum(s)"),(0,a.kt)("p",null,"\u4e0eIPv4NumToString\u51fd\u6570\u76f8\u53cd\u3002\u5982\u679cIPv4\u5730\u5740\u683c\u5f0f\u65e0\u6548\uff0c\u5219\u8fd4\u56de0\u3002"),(0,a.kt)("h2",{id:"ipv4numtostringclasscnum"},"IPv4NumToStringClassC(num)"),(0,a.kt)("p",null,"\u4e0eIPv4NumToString\u7c7b\u4f3c\uff0c\u4f46\u4f7f\u7528xxx\u66ff\u6362\u6700\u540e\u4e00\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    IPv4NumToStringClassC(ClientIP) AS k,\n    count() AS c\nFROM test.hits\nGROUP BY k\nORDER BY c DESC\nLIMIT 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500k\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500c\u2500\u2510\n\u2502 83.149.9.xxx   \u2502 26238 \u2502\n\u2502 217.118.81.xxx \u2502 26074 \u2502\n\u2502 213.87.129.xxx \u2502 25481 \u2502\n\u2502 83.149.8.xxx   \u2502 24984 \u2502\n\u2502 217.118.83.xxx \u2502 22797 \u2502\n\u2502 78.25.120.xxx  \u2502 22354 \u2502\n\u2502 213.87.131.xxx \u2502 21285 \u2502\n\u2502 78.25.121.xxx  \u2502 20887 \u2502\n\u2502 188.162.65.xxx \u2502 19694 \u2502\n\u2502 83.149.48.xxx  \u2502 17406 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u7531\u4e8e\u4f7f\u7528\u2019xxx\u2019\u662f\u4e0d\u89c4\u8303\u7684\uff0c\u56e0\u6b64\u5c06\u6765\u53ef\u80fd\u4f1a\u66f4\u6539\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u4e0d\u8981\u4f9d\u8d56\u6b64\u683c\u5f0f\u3002"),(0,a.kt)("h3",{id:"ipv6numtostringx"},"IPv6NumToString(x)"),(0,a.kt)("p",null,"\u63a5\u53d7FixedString(16)\u7c7b\u578b\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f\u7684IPv6\u5730\u5740\u3002\u4ee5\u6587\u672c\u683c\u5f0f\u8fd4\u56de\u6b64\u5730\u5740\u7684\u5b57\u7b26\u4e32\u3002\nIPv6\u6620\u5c04\u7684IPv4\u5730\u5740\u4ee5::ffff:111.222.33\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv6NumToString(toFixedString(unhex('2A0206B8000000000000000000000011'), 16)) AS addr\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2a02:6b8::11 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    IPv6NumToString(ClientIP6 AS k),\n    count() AS c\nFROM hits_all\nWHERE EventDate = today() AND substring(ClientIP6, 1, 12) != unhex('00000000000000000000FFFF')\nGROUP BY k\nORDER BY c DESC\nLIMIT 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500IPv6NumToString(ClientIP6)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500c\u2500\u2510\n\u2502 2a02:2168:aaa:bbbb::2                   \u2502 24695 \u2502\n\u2502 2a02:2698:abcd:abcd:abcd:abcd:8888:5555 \u2502 22408 \u2502\n\u2502 2a02:6b8:0:fff::ff                      \u2502 16389 \u2502\n\u2502 2a01:4f8:111:6666::2                    \u2502 16016 \u2502\n\u2502 2a02:2168:888:222::1                    \u2502 15896 \u2502\n\u2502 2a01:7e00::ffff:ffff:ffff:222           \u2502 14774 \u2502\n\u2502 2a02:8109:eee:ee:eeee:eeee:eeee:eeee    \u2502 14443 \u2502\n\u2502 2a02:810b:8888:888:8888:8888:8888:8888  \u2502 14345 \u2502\n\u2502 2a02:6b8:0:444:4444:4444:4444:4444      \u2502 14279 \u2502\n\u2502 2a01:7e00::ffff:ffff:ffff:ffff          \u2502 13880 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    IPv6NumToString(ClientIP6 AS k),\n    count() AS c\nFROM hits_all\nWHERE EventDate = today()\nGROUP BY k\nORDER BY c DESC\nLIMIT 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500IPv6NumToString(ClientIP6)\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500c\u2500\u2510\n\u2502 ::ffff:94.26.111.111       \u2502 747440 \u2502\n\u2502 ::ffff:37.143.222.4        \u2502 529483 \u2502\n\u2502 ::ffff:5.166.111.99        \u2502 317707 \u2502\n\u2502 ::ffff:46.38.11.77         \u2502 263086 \u2502\n\u2502 ::ffff:79.105.111.111      \u2502 186611 \u2502\n\u2502 ::ffff:93.92.111.88        \u2502 176773 \u2502\n\u2502 ::ffff:84.53.111.33        \u2502 158709 \u2502\n\u2502 ::ffff:217.118.11.22       \u2502 154004 \u2502\n\u2502 ::ffff:217.118.11.33       \u2502 148449 \u2502\n\u2502 ::ffff:217.118.11.44       \u2502 148243 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"ipv6stringtonums"},"IPv6StringToNum(s)"),(0,a.kt)("p",null,"\u4e0eIPv6NumToString\u7684\u76f8\u53cd\u3002\u5982\u679cIPv6\u5730\u5740\u683c\u5f0f\u65e0\u6548\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u8282\u5b57\u7b26\u4e32\u3002\n\u5341\u516d\u8fdb\u5236\u53ef\u4ee5\u662f\u5927\u5199\u7684\u6216\u5c0f\u5199\u7684\u3002"),(0,a.kt)("h2",{id:"ipv4toipv6x"},"IPv4ToIPv6(x)"),(0,a.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2aUInt32\u7c7b\u578b\u7684IPv4\u5730\u5740\uff0c\u8fd4\u56deFixedString(16)\u7c7b\u578b\u7684IPv6\u5730\u5740\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv6NumToString(IPv4ToIPv6(IPv4StringToNum('192.168.0.1'))) AS addr\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ::ffff:192.168.0.1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"cutipv6x-bitstocutforipv6-bitstocutforipv4"},"cutIPv6(x,bitsToCutForIPv6,bitsToCutForIPv4)"),(0,a.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2aFixedString(16)\u7c7b\u578b\u7684IPv6\u5730\u5740\uff0c\u8fd4\u56de\u4e00\u4e2aString\uff0c\u8fd9\u4e2aString\u4e2d\u5305\u542b\u4e86\u5220\u9664\u6307\u5b9a\u4f4d\u4e4b\u540e\u7684\u5730\u5740\u7684\u6587\u672c\u683c\u5f0f\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    IPv6StringToNum('2001:0DB8:AC10:FE01:FEED:BABE:CAFE:F00D') AS ipv6,\n    IPv4ToIPv6(IPv4StringToNum('192.168.0.1')) AS ipv4\nSELECT\n    cutIPv6(ipv6, 2, 0),\n    cutIPv6(ipv4, 0, 2)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500cutIPv6(ipv6, 2, 0)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500cutIPv6(ipv4, 0, 2)\u2500\u2510\n\u2502 2001:db8:ac10:fe01:feed:babe:cafe:0 \u2502 ::ffff:192.168.0.0  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"ipv4cidrtorangeipv4-cidr"},"\uff82\u53e4\uff76\uff82\u76ca\uff82\u50ac\uff82\u56e3\uff82\u6cd5\uff82\u4eba),"),(0,a.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2aIPv4\u5730\u5740\u4ee5\u53ca\u4e00\u4e2aUInt8\u7c7b\u578b\u7684CIDR\u3002\u8fd4\u56de\u5305\u542b\u5b50\u7f51\u6700\u4f4e\u8303\u56f4\u4ee5\u53ca\u6700\u9ad8\u8303\u56f4\u7684\u5143\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv4CIDRToRange(toIPv4('192.168.5.2'), 16)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500IPv4CIDRToRange(toIPv4('192.168.5.2'), 16)\u2500\u2510\n\u2502 ('192.168.0.0','192.168.255.255')          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"ipv6cidrtorangeipv6-cidr"},"\uff82\u6697\uff6a\uff82\u6c3e\u73af\u50ac\uff82\u56e3\uff82\u6cd5\uff82\u4eba),"),(0,a.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2aIPv6\u5730\u5740\u4ee5\u53ca\u4e00\u4e2aUInt8\u7c7b\u578b\u7684CIDR\u3002\u8fd4\u56de\u5305\u542b\u5b50\u7f51\u6700\u4f4e\u8303\u56f4\u4ee5\u53ca\u6700\u9ad8\u8303\u56f4\u7684\u5143\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv6CIDRToRange(toIPv6('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 32);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500IPv6CIDRToRange(toIPv6('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 32)\u2500\u2510\n\u2502 ('2001:db8::','2001:db8:ffff:ffff:ffff:ffff:ffff:ffff')                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"toipv4string"},"toIPv4(\u5b57\u7b26\u4e32)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IPv4StringToNum()"),"\u7684\u522b\u540d\uff0c\u5b83\u91c7\u7528\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684IPv4\u5730\u5740\u5e76\u8fd4\u56de",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/ip-address-functions"},"IPv4"),"\u7c7b\u578b\u7684\u503c\uff0c\u8be5\u4e8c\u8fdb\u5236\u503c\u7b49\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"IPv4StringToNum()"),"\u8fd4\u56de\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    '171.225.130.45' as IPv4_string\nSELECT\n    toTypeName(IPv4StringToNum(IPv4_string)),\n    toTypeName(toIPv4(IPv4_string))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500toTypeName(IPv4StringToNum(IPv4_string))\u2500\u252c\u2500toTypeName(toIPv4(IPv4_string))\u2500\u2510\n\u2502 UInt32                                   \u2502 IPv4                            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    '171.225.130.45' as IPv4_string\nSELECT\n    hex(IPv4StringToNum(IPv4_string)),\n    hex(toIPv4(IPv4_string))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500hex(IPv4StringToNum(IPv4_string))\u2500\u252c\u2500hex(toIPv4(IPv4_string))\u2500\u2510\n\u2502 ABE1822D                          \u2502 ABE1822D                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"toipv6string"},"toIPv6(\u5b57\u7b26\u4e32)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IPv6StringToNum()"),"\u7684\u522b\u540d\uff0c\u5b83\u91c7\u7528\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684IPv6\u5730\u5740\u5e76\u8fd4\u56de",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/sql-reference/functions/ip-address-functions"},"IPv6"),"\u7c7b\u578b\u7684\u503c\uff0c\u8be5\u4e8c\u8fdb\u5236\u503c\u7b49\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"IPv6StringToNum()"),"\u8fd4\u56de\u7684\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    '2001:438:ffff::407d:1bc1' as IPv6_string\nSELECT\n    toTypeName(IPv6StringToNum(IPv6_string)),\n    toTypeName(toIPv6(IPv6_string))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500toTypeName(IPv6StringToNum(IPv6_string))\u2500\u252c\u2500toTypeName(toIPv6(IPv6_string))\u2500\u2510\n\u2502 FixedString(16)                          \u2502 IPv6                            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    '2001:438:ffff::407d:1bc1' as IPv6_string\nSELECT\n    hex(IPv6StringToNum(IPv6_string)),\n    hex(toIPv6(IPv6_string))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500hex(IPv6StringToNum(IPv6_string))\u2500\u252c\u2500hex(toIPv6(IPv6_string))\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 20010438FFFF000000000000407D1BC1  \u2502 20010438FFFF000000000000407D1BC1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/ip_address_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}v.isMDXComponent=!0}}]);