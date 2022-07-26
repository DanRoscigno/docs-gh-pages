"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[83551],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,E=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(E,l(l({ref:t},s),{},{components:r})):n.createElement(E,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32370:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={sidebar_label:"PREWHERE"},p="PREWHERE \u5b50\u53e5",c={unversionedId:"zh/sql-reference/statements/select/prewhere",id:"zh/sql-reference/statements/select/prewhere",title:"PREWHERE \u5b50\u53e5",description:"prewhere-clause}",source:"@site/docs/zh/sql-reference/statements/select/prewhere.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/prewhere",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/prewhere",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/prewhere.md",tags:[],version:"current",frontMatter:{sidebar_label:"PREWHERE"},sidebar:"chinese",previous:{title:"ORDER BY",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/order-by"},next:{title:"SAMPLE",permalink:"/docs-gh-pages/up/zh/sql-reference/statements/select/sample"}},s={},u=[{value:"\u624b\u52a8\u63a7\u5236Prewhere",id:"controlling-prewhere-manually",level:2},{value:"\u9650\u5236",id:"limitations",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prewhere-clause"},"PREWHERE \u5b50\u53e5"),(0,o.kt)("p",null,"Prewhere\u662f\u66f4\u6709\u6548\u5730\u8fdb\u884c\u8fc7\u6ee4\u7684\u4f18\u5316\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5373\u4f7f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u5b50\u53e5\u672a\u663e\u5f0f\u6307\u5b9a\u3002 \u5b83\u4e5f\u4f1a\u81ea\u52a8\u79fb\u52a8 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/statements/select/where"},"WHERE")," \u6761\u4ef6\u5230prewhere\u9636\u6bb5\u3002 ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u5b50\u53e5\u53ea\u662f\u63a7\u5236\u8fd9\u4e2a\u4f18\u5316\uff0c\u5982\u679c\u4f60\u8ba4\u4e3a\u4f60\u77e5\u9053\u5982\u4f55\u505a\u5f97\u6bd4\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u66f4\u597d\u624d\u53bb\u63a7\u5236\u5b83\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528prewhere\u4f18\u5316\uff0c\u9996\u5148\u53ea\u8bfb\u53d6\u6267\u884cprewhere\u8868\u8fbe\u5f0f\u6240\u9700\u7684\u5217\u3002 \u7136\u540e\u8bfb\u53d6\u8fd0\u884c\u5176\u4f59\u67e5\u8be2\u6240\u9700\u7684\u5176\u4ed6\u5217\uff0c\u4f46\u53ea\u8bfb\u53d6prewhere\u8868\u8fbe\u5f0f\u6240\u5728\u7684\u90a3\u4e9b\u5757 \u201ctrue\u201d \u81f3\u5c11\u5bf9\u4e8e\u4e00\u4e9b\u884c\u3002 \u5982\u679c\u6709\u5f88\u591a\u5757\uff0c\u5176\u4e2dprewhere\u8868\u8fbe\u5f0f\u662f \u201cfalse\u201d \u5bf9\u4e8e\u6240\u6709\u884c\u548cprewhere\u9700\u8981\u6bd4\u67e5\u8be2\u7684\u5176\u4ed6\u90e8\u5206\u66f4\u5c11\u7684\u5217\uff0c\u8fd9\u901a\u5e38\u5141\u8bb8\u4ece\u78c1\u76d8\u8bfb\u53d6\u66f4\u5c11\u7684\u6570\u636e\u4ee5\u6267\u884c\u67e5\u8be2\u3002"),(0,o.kt)("h2",{id:"controlling-prewhere-manually"},"\u624b\u52a8\u63a7\u5236Prewhere"),(0,o.kt)("p",null,"\u8be5\u5b50\u53e5\u5177\u6709\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," \u76f8\u540c\u7684\u542b\u4e49\uff0c\u533a\u522b\u5728\u4e8e\u4ece\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\u3002 \u5f53\u624b\u52a8\u63a7\u5236 ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u5bf9\u4e8e\u67e5\u8be2\u4e2d\u7684\u5c11\u6570\u5217\u4f7f\u7528\u7684\u8fc7\u6ee4\u6761\u4ef6\uff0c\u4f46\u8fd9\u4e9b\u8fc7\u6ee4\u6761\u4ef6\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6570\u636e\u8fc7\u6ee4\u3002 \u8fd9\u51cf\u5c11\u4e86\u8981\u8bfb\u53d6\u7684\u6570\u636e\u91cf\u3002"),(0,o.kt)("p",null,"\u67e5\u8be2\u53ef\u4ee5\u540c\u65f6\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE"),". \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b, ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u5148\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE"),"."),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"optimize_move_to_prewhere")," \u8bbe\u7f6e\u4e3a0\uff0c\u542f\u53d1\u5f0f\u81ea\u52a8\u79fb\u52a8\u90e8\u5206\u8868\u8fbe\u5f0f ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u88ab\u7981\u7528\u3002"),(0,o.kt)("h2",{id:"limitations"},"\u9650\u5236"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u53ea\u6709\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"*MergeTree")," \u65cf\u7cfb\u5217\u5f15\u64ce\u7684\u8868\u3002"))}f.isMDXComponent=!0}}]);