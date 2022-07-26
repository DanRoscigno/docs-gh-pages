"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30810],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),y=a,g=f["".concat(l,".").concat(y)]||f[y]||p[y]||o;return t?r.createElement(g,c(c({ref:n},u),{},{components:t})):r.createElement(g,c({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},96020:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={sidebar_position:103},l="anyHeavy",s={unversionedId:"zh/sql-reference/aggregate-functions/reference/anyheavy",id:"zh/sql-reference/aggregate-functions/reference/anyheavy",title:"anyHeavy",description:"anyheavyx}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/anyheavy.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/anyheavy",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/anyheavy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/anyheavy.md",tags:[],version:"current",sidebarPosition:103,frontMatter:{sidebar_position:103},sidebar:"chinese",previous:{title:"covarSamp",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/covarsamp"},next:{title:"anylast",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/anylast"}},u={},p=[],f={toc:p};function y(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anyheavyx"},"anyHeavy"),(0,o.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u9891\u7e41\u51fa\u73b0\u7684\u503c\uff0c\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"http://www.cs.umd.edu/~samir/498/karp.pdf"},"heavy hitters")," \u7b97\u6cd5\u3002 \u5982\u679c\u67d0\u4e2a\u503c\u5728\u67e5\u8be2\u7684\u6bcf\u4e2a\u6267\u884c\u7ebf\u7a0b\u4e2d\u51fa\u73b0\u7684\u60c5\u51b5\u8d85\u8fc7\u4e00\u534a\uff0c\u5219\u8fd4\u56de\u6b64\u503c\u3002 \u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u7ed3\u679c\u662f\u4e0d\u786e\u5b9a\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"anyHeavy(column)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"column")," \u2013 The column name\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/zh/getting-started/example-datasets/ontime"},"OnTime")," \u6570\u636e\u96c6\uff0c\u5e76\u9009\u62e9\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"AirlineID")," \u5217\u4efb\u4f55\u9891\u7e41\u51fa\u73b0\u7684\u503c\u3002"),(0,o.kt)("p",null,"\u67e5\u8be2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT anyHeavy(AirlineID) AS res\nFROM ontime;\n")),(0,o.kt)("p",null,"\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500res\u2500\u2510\n\u2502 19690 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}y.isMDXComponent=!0}}]);