"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17009],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,m=c["".concat(s,".").concat(d)]||c[d]||o[d]||i;return n?a.createElement(m,r(r({ref:t},k),{},{components:n})):a.createElement(m,r({ref:t},k))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return o}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],p={},s="\u4f4d\u64cd\u4f5c\u51fd\u6570",u={unversionedId:"zh/sql-reference/functions/bit-functions",id:"zh/sql-reference/functions/bit-functions",title:"\u4f4d\u64cd\u4f5c\u51fd\u6570",description:"wei-cao-zuo-han-shu}",source:"@site/docs/zh/sql-reference/functions/bit-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/bit-functions",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/bit-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/bit-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"arrayJoin\u51fd\u6570",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/array-join"},next:{title:"\u4f4d\u56fe\u51fd\u6570",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/bitmap-functions"}},k={},o=[{value:"bitAnd(a, b)",id:"bitanda-b",level:2},{value:"bitOr(a, b)",id:"bitora-b",level:2},{value:"bitXor(a, b)",id:"bitxora-b",level:2},{value:"bitNot(a)",id:"bitnota",level:2},{value:"bitShiftLeft(a, b)",id:"bitshiftlefta-b",level:2},{value:"bitShiftRight(a, b)",id:"bitshiftrighta-b",level:2},{value:"bitRotateLeft(a, b)",id:"bitrotatelefta-b",level:2},{value:"bitRotateRight(a, b)",id:"bitrotaterighta-b",level:2},{value:"bitSlice(s, offset, length)",id:"bitslices-offset-length",level:2},{value:"bitTest",id:"bittest",level:2},{value:"bitTestAll",id:"bittestall",level:2},{value:"bitTestAny",id:"bittestany",level:2},{value:"bitCount",id:"bitcount",level:2},{value:"bitHammingDistance",id:"bithammingdistance",level:2}],c={toc:o};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wei-cao-zuo-han-shu"},"\u4f4d\u64cd\u4f5c\u51fd\u6570"),(0,i.kt)("p",null,"\u4f4d\u64cd\u4f5c\u51fd\u6570\u9002\u7528\u4e8eUInt8\uff0cUInt16\uff0cUInt32\uff0cUInt64\uff0cInt8\uff0cInt16\uff0cInt32\uff0cInt64\uff0cFloat32\u6216Float64\u4e2d\u7684\u4efb\u4f55\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u7ed3\u679c\u7c7b\u578b\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u5176\u4f4d\u6570\u7b49\u4e8e\u5176\u53c2\u6570\u7684\u6700\u5927\u4f4d\u3002\u5982\u679c\u81f3\u5c11\u6709\u4e00\u4e2a\u53c2\u6570\u4e3a\u6709\u7b26\u6570\u5b57\uff0c\u5219\u7ed3\u679c\u4e3a\u6709\u7b26\u6570\u5b57\u3002\u5982\u679c\u53c2\u6570\u662f\u6d6e\u70b9\u6570\uff0c\u5219\u5c06\u5176\u5f3a\u5236\u8f6c\u6362\u4e3aInt64\u3002"),(0,i.kt)("h2",{id:"bitanda-b"},"bitAnd(a, b)"),(0,i.kt)("h2",{id:"bitora-b"},"bitOr(a, b)"),(0,i.kt)("h2",{id:"bitxora-b"},"bitXor(a, b)"),(0,i.kt)("h2",{id:"bitnota"},"bitNot(a)"),(0,i.kt)("h2",{id:"bitshiftlefta-b"},"bitShiftLeft(a, b)"),(0,i.kt)("p",null,"\u5c06\u503c\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u5411\u5de6\u79fb\u52a8\u6307\u5b9a\u6570\u91cf\u7684\u4f4d\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u88ab\u89c6\u4e3a\u5355\u4e2a\u591a\u5b57\u8282\u503c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FixedString")," \u503c\u7684\u4f4d\u5728\u79fb\u51fa\u65f6\u4f1a\u4e22\u5931\u3002\u76f8\u53cd\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u503c\u4f7f\u7528\u989d\u5916\u7684\u5b57\u8282\u8fdb\u884c\u6269\u5c55\uff0c\u56e0\u6b64\u4e0d\u4f1a\u4e22\u5931\u4efb\u4f55\u4f4d\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitShiftLeft(a, b)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a")," \u2014 \u8981\u8fdb\u884c\u79fb\u4f4d\u64cd\u4f5c\u7684\u503c\u3002\u7c7b\u578b\u53ef\u4ee5\u4e3a",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"Integer types"),"\uff0c",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/string"},"String"),"\u6216\u8005",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/fixedstring"},"FixedString"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b")," \u2014 \u79fb\u4f4d\u7684\u6b21\u6570\u3002\u7c7b\u578b\u4e3a",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"Unsigned integer types"),"\uff0c\u5141\u8bb8\u4f7f\u752864\u4f4d\u6570\u5b57\u53ca64\u4f4d\u4ee5\u4e0b\u7684\u6570\u5b57\u7c7b\u578b\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u79fb\u4f4d\u540e\u7684\u503c\u3002")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e0e\u8f93\u5165\u503c\u7684\u7c7b\u578b\u76f8\u540c\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u5728\u4ee5\u4e0b\u67e5\u8be2\u4e2d\uff0c",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/encoding-functions#bin"},"bin"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/encoding-functions#hex"},"hex"),"\u51fd\u6570\u7528\u4e8e\u663e\u793a\u79fb\u4f4d\u503c\u7684\u4f4d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 99 AS a, bin(a), bitShiftLeft(a, 2) AS a_shifted, bin(a_shifted);\nSELECT 'abc' AS a, hex(a), bitShiftLeft(a, 4) AS a_shifted, hex(a_shifted);\nSELECT toFixedString('abc', 3) AS a, hex(a), bitShiftLeft(a, 4) AS a_shifted, hex(a_shifted);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500a\u2500\u252c\u2500bin(99)\u2500\u2500\u252c\u2500a_shifted\u2500\u252c\u2500bin(bitShiftLeft(99, 2))\u2500\u2510\n\u2502 99 \u2502 01100011 \u2502       140 \u2502 10001100                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2500\u2500\u252c\u2500hex('abc')\u2500\u252c\u2500a_shifted\u2500\u252c\u2500hex(bitShiftLeft('abc', 4))\u2500\u2510\n\u2502 abc \u2502 616263     \u2502 &0        \u2502 06162630                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2500\u2500\u252c\u2500hex(toFixedString('abc', 3))\u2500\u252c\u2500a_shifted\u2500\u252c\u2500hex(bitShiftLeft(toFixedString('abc', 3), 4))\u2500\u2510\n\u2502 abc \u2502 616263                       \u2502 &0        \u2502 162630                                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bitshiftrighta-b"},"bitShiftRight(a, b)"),(0,i.kt)("p",null,"\u5c06\u503c\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u5411\u53f3\u79fb\u52a8\u6307\u5b9a\u6570\u91cf\u7684\u4f4d\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FixedString"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"\u88ab\u89c6\u4e3a\u5355\u4e2a\u591a\u5b57\u8282\u503c\u3002\u8bf7\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"\u503c\u7684\u957f\u5ea6\u4f1a\u968f\u7740\u4f4d\u7684\u79fb\u51fa\u800c\u51cf\u5c11\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitShiftRight(a, b)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a")," \u2014 \u9700\u8981\u8fdb\u884c\u4f4d\u79fb\u7684\u503c\u3002\u7c7b\u578b\u53ef\u4ee5\u4e3a",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"Integer types"),"\uff0c",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/string"},"String"),"\u6216\u8005",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/fixedstring"},"FixedString"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b")," \u2014 \u79fb\u4f4d\u7684\u6b21\u6570\u3002\u7c7b\u578b\u4e3a",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"Unsigned integer types"),"\uff0c\u5141\u8bb8\u4f7f\u752864\u4f4d\u6570\u5b57\u53ca64\u4f4d\u4ee5\u4e0b\u7684\u6570\u5b57\u7c7b\u578b\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u79fb\u4f4d\u540e\u7684\u503c\u3002")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e0e\u8f93\u5165\u503c\u7684\u7c7b\u578b\u76f8\u540c\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 101 AS a, bin(a), bitShiftRight(a, 2) AS a_shifted, bin(a_shifted);\nSELECT 'abc' AS a, hex(a), bitShiftRight(a, 12) AS a_shifted, hex(a_shifted);\nSELECT toFixedString('abc', 3) AS a, hex(a), bitShiftRight(a, 12) AS a_shifted, hex(a_shifted);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500a\u2500\u252c\u2500bin(101)\u2500\u252c\u2500a_shifted\u2500\u252c\u2500bin(bitShiftRight(101, 2))\u2500\u2510\n\u2502 101 \u2502 01100101 \u2502        25 \u2502 00011001                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2500\u2500\u252c\u2500hex('abc')\u2500\u252c\u2500a_shifted\u2500\u252c\u2500hex(bitShiftRight('abc', 12))\u2500\u2510\n\u2502 abc \u2502 616263     \u2502           \u2502 0616                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2500\u2500\u252c\u2500hex(toFixedString('abc', 3))\u2500\u252c\u2500a_shifted\u2500\u252c\u2500hex(bitShiftRight(toFixedString('abc', 3), 12))\u2500\u2510\n\u2502 abc \u2502 616263                       \u2502           \u2502 000616                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bitrotatelefta-b"},"bitRotateLeft(a, b)"),(0,i.kt)("h2",{id:"bitrotaterighta-b"},"bitRotateRight(a, b)"),(0,i.kt)("h2",{id:"bitslices-offset-length"},"bitSlice(s, offset, length)"),(0,i.kt)("p",null,"\u8fd4\u56de\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),"\u7d22\u5f15\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"length"),"\u4f4d\u957f\u7684\u4f4d\u5f00\u59cb\u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u4f4d\u7d22\u5f15\u4ece 1 \u5f00\u59cb\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitSlice(s, offset[, length])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," \u2014 \u7c7b\u578b\u53ef\u4ee5\u662f",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/string"},"String"),"\u6216\u8005",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/fixedstring"},"FixedString"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offset")," \u2014 \u5e26\u4f4d\u7684\u8d77\u59cb\u7d22\u5f15\uff0c\u6b63\u503c\u8868\u793a\u5de6\u4fa7\u504f\u79fb\uff0c\u8d1f\u503c\u8868\u793a\u53f3\u4fa7\u7f29\u8fdb\uff0c\u4f4d\u7f16\u53f7\u4ece 1 \u5f00\u59cb\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"length")," \u2014 \u5e26\u4f4d\u7684\u5b50\u4e32\u957f\u5ea6\u3002\u5982\u679c\u60a8\u6307\u5b9a\u4e00\u4e2a\u8d1f\u503c\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de\u4e00\u4e2a\u5f00\u653e\u5b50\u5b57\u7b26\u4e32 ","[","offset, array_length - length","]","\u3002\u5982\u679c\u7701\u7565\u8be5\u503c\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de\u5b50\u5b57\u7b26\u4e32 ","[","offset, the_end_string","]","\u3002\u5982\u679c\u957f\u5ea6\u8d85\u8fc7s\uff0c\u5c06\u88ab\u622a\u65ad\u3002\u5982\u679c\u957f\u5ea6\u4e0d\u662f8\u7684\u500d\u6570\uff0c\u5219\u5728\u53f3\u8fb9\u586b\u51450\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b50\u5b57\u7b26\u4e32\uff0c\u7c7b\u578b\u4e3a",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/string"},"String"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select bin('Hello'), bin(bitSlice('Hello', 1, 8))\nselect bin('Hello'), bin(bitSlice('Hello', 1, 2))\nselect bin('Hello'), bin(bitSlice('Hello', 1, 9))\nselect bin('Hello'), bin(bitSlice('Hello', -4, 8))\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bin('Hello')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bin(bitSlice('Hello', 1, 8))\u2500\u2510\n\u2502 0100100001100101011011000110110001101111 \u2502 01001000                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500bin('Hello')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bin(bitSlice('Hello', 1, 2))\u2500\u2510\n\u2502 0100100001100101011011000110110001101111 \u2502 01000000                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500bin('Hello')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bin(bitSlice('Hello', 1, 9))\u2500\u2510\n\u2502 0100100001100101011011000110110001101111 \u2502 0100100000000000             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500bin('Hello')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bin(bitSlice('Hello', -4, 8))\u2500\u2510\n\u2502 0100100001100101011011000110110001101111 \u2502 11110000                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bittest"},"bitTest"),(0,i.kt)("p",null,"\u53d6\u4efb\u610f\u6574\u6570\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Binary_number"},"binary form"),"\uff0c\u8fd4\u56de\u6307\u5b9a\u4f4d\u7f6e\u7684\u4f4d\u503c\u3002\u4f4d\u503c\u4ece\u53f3\u5230\u5de6\u6570\uff0c\u4ece0\u5f00\u59cb\u8ba1\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(number, index)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u2013 \u6574\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index")," \u2013 \u8981\u83b7\u53d6\u4f4d\u503c\u7684\u4f4d\u7f6e\u3002 ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u4f4d\u7f6e\u7684\u4f4d\u503c"),(0,i.kt)("p",null,"\u7c7b\u578b\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5341\u8fdb\u5236\u6570\u5b57 43 \u5728\u4e8c\u8fdb\u5236\u7684\u8868\u793a\u662f 101011\u3002"),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(43, 1);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTest(43, 1)\u2500\u2510\n\u2502              1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u53e6\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTest(43, 2);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTest(43, 2)\u2500\u2510\n\u2502              0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bittestall"},"bitTestAll"),(0,i.kt)("p",null,"\u8fd4\u56de\u7ed9\u5b9a\u4f4d\u7f6e\u6240\u6709\u4f4d\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Logical_conjunction"},"logical conjuction")," \u8fdb\u884c\u4e0e\u64cd\u4f5c\u7684\u7ed3\u679c\u3002\u4f4d\u503c\u4ece\u53f3\u5230\u5de6\u6570\uff0c\u4ece0\u5f00\u59cb\u8ba1\u6570\u3002"),(0,i.kt)("p",null,"\u4e0e\u8fd0\u7b97\u7684\u7ed3\u679c\uff1a"),(0,i.kt)("p",null,"0 AND 0 = 0"),(0,i.kt)("p",null,"0 AND 1 = 0"),(0,i.kt)("p",null,"1 AND 0 = 0"),(0,i.kt)("p",null,"1 AND 1 = 1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(number, index1, index2, index3, index4, ...)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u2013 \u6574\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index4")," \u2013 \u4f4d\u7684\u4f4d\u7f6e\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4e00\u7ec4\u4f4d\u7f6e (",(0,i.kt)("inlineCode",{parentName:"li"},"index1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index4"),") \u5f53\u4e14\u4ec5\u5f53\u5b83\u7684\u6240\u6709\u4f4d\u7f6e\u90fd\u4e3a\u771f\u65f6\u624d\u4e3a\u771f (",(0,i.kt)("inlineCode",{parentName:"li"},"index1")," \u22c0 ",(0,i.kt)("inlineCode",{parentName:"li"},"index2"),", \u22c0 ",(0,i.kt)("inlineCode",{parentName:"li"},"index3")," \u22c0 ",(0,i.kt)("inlineCode",{parentName:"li"},"index4")," \uff09\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("p",null,"\u8fd4\u56de\u903b\u8f91\u4e0e\u7684\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"\u7c7b\u578b\u4e3a\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5341\u8fdb\u5236\u6570\u5b57 43 \u5728\u4e8c\u8fdb\u5236\u7684\u8868\u793a\u662f 101011\u3002"),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(43, 0, 1, 3, 5);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTestAll(43, 0, 1, 3, 5)\u2500\u2510\n\u2502                          1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u53e6\u4e00\u4e2a\u4f8b\u5b50:"),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAll(43, 0, 1, 3, 5, 2);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTestAll(43, 0, 1, 3, 5, 2)\u2500\u2510\n\u2502                             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bittestany"},"bitTestAny"),(0,i.kt)("p",null,"\u8fd4\u56de\u7ed9\u5b9a\u4f4d\u7f6e\u6240\u6709\u4f4d\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Logical_disjunction"},"logical disjunction")," \u8fdb\u884c\u6216\u64cd\u4f5c\u7684\u7ed3\u679c\u3002\u4f4d\u503c\u4ece\u53f3\u5230\u5de6\u6570\uff0c\u4ece0\u5f00\u59cb\u8ba1\u6570\u3002"),(0,i.kt)("p",null,"\u6216\u8fd0\u7b97\u7684\u7ed3\u679c\uff1a"),(0,i.kt)("p",null,"0 OR 0 = 0"),(0,i.kt)("p",null,"0 OR 1 = 1"),(0,i.kt)("p",null,"1 OR 0 = 1"),(0,i.kt)("p",null,"1 OR 1 = 1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAny(number, index1, index2, index3, index4, ...)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u2013 \u6574\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"index4")," \u2013  \u4f4d\u7684\u4f4d\u7f6e\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("p",null,"\u8fd4\u56de\u903b\u8f91\u6216\u7684\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"\u7c7b\u578b\u4e3a\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5341\u8fdb\u5236\u6570\u5b57 43 \u5728\u4e8c\u8fdb\u5236\u7684\u8868\u793a\u662f 101011\u3002"),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAny(43, 0, 2);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTestAny(43, 0, 2)\u2500\u2510\n\u2502                    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u53e6\u4e00\u4e2a\u4f8b\u5b50:"),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitTestAny(43, 4, 2);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitTestAny(43, 4, 2)\u2500\u2510\n\u2502                    0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bitcount"},"bitCount"),(0,i.kt)("p",null,"\u8ba1\u7b97\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u4e2d\u503c\u4e3a 1 \u7684\u4f4d\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitCount(x)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u7c7b\u578b\u4e3a",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"Integer"),"\u6216",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/float"},"floating-point"),"\u6570\u5b57\u3002\u8be5\u51fd\u6570\u4f7f\u7528\u5185\u5b58\u4e2d\u7684\u503c\u8868\u793a\u3002\u5b83\u5141\u8bb8\u652f\u6301\u6d6e\u70b9\u6570\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6570\u5b57\u4e2d\u503c\u4e3a 1 \u7684\u4f4d\u6570\u3002")),(0,i.kt)("p",null,"\u8be5\u51fd\u6570\u4e0d\u4f1a\u5c06\u8f93\u5165\u503c\u8f6c\u6362\u4e3a\u66f4\u5927\u7684\u7c7b\u578b (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sign_extension"},"sign extension"),")\u3002 \u56e0\u6b64\uff0c\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"bitCount(toUInt8(-1)) = 8"),"\u3002"),(0,i.kt)("p",null,"\u7c7b\u578b\u4e3a\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u4ee5\u5341\u8fdb\u5236\u6570\u5b57 333 \u4e3a\u4f8b\uff0c\u5b83\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u4e3a: 0000000101001101\u3002"),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitCount(333);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitCount(333)\u2500\u2510\n\u2502             5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"bithammingdistance"},"bitHammingDistance"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e24\u4e2a\u6574\u6570\u503c\u7684\u4f4d\u8868\u793a\u4e4b\u95f4\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hamming_distance"},"Hamming Distance"),"\u3002\u53ef\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/hash-functions#ngramsimhash"},"SimHash")," \u51fd\u6570\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u68c0\u6d4b\u534a\u91cd\u590d\u5b57\u7b26\u4e32\u3002\u8ddd\u79bb\u8d8a\u5c0f\uff0c\u8fd9\u4e9b\u5b57\u7b26\u4e32\u5c31\u8d8a\u6709\u53ef\u80fd\u76f8\u540c\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"bitHammingDistance(int1, int2)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int1")," \u2014 \u7b2c\u4e00\u4e2a\u6574\u6570\u503c\u3002\u7c7b\u578b\u4e3a",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"Int64"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int2")," \u2014 \u7b2c\u4e8c\u4e2a\u6574\u6570\u503c\u3002\u7c7b\u578b\u4e3a",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"Int64"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6c49\u660e\u8ddd\u79bb\u3002")),(0,i.kt)("p",null,"\u7c7b\u578b\u4e3a\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"UInt8"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitHammingDistance(111, 121);\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitHammingDistance(111, 121)\u2500\u2510\n\u2502                            3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/hash-functions#ngramsimhash"},"SimHash"),"\u51fd\u6570:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitHammingDistance(ngramSimHash('cat ate rat'), ngramSimHash('rat ate cat'));\n")),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bitHammingDistance(ngramSimHash('cat ate rat'), ngramSimHash('rat ate cat'))\u2500\u2510\n\u2502                                                                            5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/bit_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);