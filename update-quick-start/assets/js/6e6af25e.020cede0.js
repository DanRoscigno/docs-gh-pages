"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[36153],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,m=s["".concat(u,".").concat(f)]||s[f]||g[f]||o;return n?t.createElement(m,i(i({ref:r},c),{},{components:n})):t.createElement(m,i({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},55797:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return g}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={sidebar_position:114},u="groupArrayMovingAvg",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/grouparraymovingavg",id:"zh/sql-reference/aggregate-functions/reference/grouparraymovingavg",title:"groupArrayMovingAvg",description:"agg_function-grouparraymovingavg}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/grouparraymovingavg.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/grouparraymovingavg",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/grouparraymovingavg",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/grouparraymovingavg.md",tags:[],version:"current",sidebarPosition:114,frontMatter:{sidebar_position:114},sidebar:"chinese",previous:{title:"groupArrayMovingSum",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/grouparraymovingsum"},next:{title:"groupArraySample",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/grouparraysample"}},c={},g=[],s={toc:g};function f(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_function-grouparraymovingavg"},"groupArrayMovingAvg"),(0,o.kt)("p",null,"\u8ba1\u7b97\u8f93\u5165\u503c\u7684\u79fb\u52a8\u5e73\u5747\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupArrayMovingAvg(numbers_for_summing)\ngroupArrayMovingAvg(window_size)(numbers_for_summing)\n")),(0,o.kt)("p",null,"\u8be5\u51fd\u6570\u53ef\u4ee5\u5c06\u7a97\u53e3\u5927\u5c0f\u4f5c\u4e3a\u53c2\u6570\u3002 \u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u8be5\u51fd\u6570\u7684\u7a97\u53e3\u5927\u5c0f\u7b49\u4e8e\u5217\u4e2d\u7684\u884c\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"numbers_for_summing")," \u2014 ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f")," \u751f\u6210\u6570\u503c\u6570\u636e\u7c7b\u578b\u503c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"window_size")," \u2014 \u7a97\u53e3\u5927\u5c0f\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0e\u8f93\u5165\u6570\u636e\u5927\u5c0f\u76f8\u540c\u7684\u6570\u7ec4\u3002")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u8f93\u5165\u6570\u636e\u7c7b\u578b\u662f",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/int-uint"},"Integer"),",\n\u548c",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/float"},"floating-point"),",\n\u5bf9\u5e94\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Float64")," \u3002\n\u5bf9\u4e8e\u8f93\u5165\u6570\u636e\u7c7b\u578b\u662f",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/decimal"},"Decimal")," \u8fd4\u56de\u503c\u7c7b\u578b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Decimal128")," \u3002"),(0,o.kt)("p",null,"\u8be5\u51fd\u6570\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Decimal128")," \u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rounding#Rounding_towards_zero"},"\u56db\u820d\u4e94\u5165\u5230\u96f6"),". \u5b83\u622a\u65ad\u65e0\u610f\u4e49\u7684\u5c0f\u6570\u4f4d\u6765\u4fdd\u8bc1\u7ed3\u679c\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("p",null,"\u6837\u8868 ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    `int` UInt8,\n    `float` Float32,\n    `dec` Decimal32(2)\n)\nENGINE = TinyLog\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int\u2500\u252c\u2500float\u2500\u252c\u2500\u2500dec\u2500\u2510\n\u2502   1 \u2502   1.1 \u2502 1.10 \u2502\n\u2502   2 \u2502   2.2 \u2502 2.20 \u2502\n\u2502   4 \u2502   4.4 \u2502 4.40 \u2502\n\u2502   7 \u2502  7.77 \u2502 7.77 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u67e5\u8be2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingAvg(int) AS I,\n    groupArrayMovingAvg(float) AS F,\n    groupArrayMovingAvg(dec) AS D\nFROM t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0.25,0.75,1.75,3.5] \u2502 [0.2750000059604645,0.8250000178813934,1.9250000417232513,3.8499999940395355] \u2502 [0.27,0.82,1.92,3.86] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingAvg(2)(int) AS I,\n    groupArrayMovingAvg(2)(float) AS F,\n    groupArrayMovingAvg(2)(dec) AS D\nFROM t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0.5,1.5,3,5.5] \u2502 [0.550000011920929,1.6500000357627869,3.3000000715255737,6.049999952316284] \u2502 [0.55,1.65,3.30,6.08] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);