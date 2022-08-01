"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10734],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,d=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={},o="median",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/median",id:"zh/sql-reference/aggregate-functions/reference/median",title:"median",description:"median}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/median.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/median",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/median",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/median.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"mannWhitneyUTest",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/mannwhitneyutest"},next:{title:"rankCorr",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/rankCorr"}},p={},m=[],s={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"median"},"median"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"median*")," \u51fd\u6570\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," \u51fd\u6570\u7684\u522b\u540d\u3002\u5b83\u4eec\u8ba1\u7b97\u6570\u5b57\u6570\u636e\u6837\u672c\u7684\u4e2d\u4f4d\u6570\u3002"),(0,i.kt)("p",null,"\u51fd\u6570:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"median")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"#quantile"},"quantile"),"\u522b\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianDeterministic")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"#quantiledeterministic"},"quantileDeterministic"),"\u522b\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianExact")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"#quantileexact"},"quantileExact"),"\u522b\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianExactWeighted")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"#quantileexactweighted"},"quantileExactWeighted"),"\u522b\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianTiming")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"#quantiletiming"},"quantileTiming"),"\u522b\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianTimingWeighted")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"#quantiletimingweighted"},"quantileTimingWeighted"),"\u522b\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianTDigest")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"#quantiletdigest"},"quantileTDigest"),"\u522b\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianTDigestWeighted")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"#quantiletdigestweighted"},"quantileTDigestWeighted"),"\u522b\u540d\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u8f93\u5165\u8868:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u2510\n\u2502   1 \u2502\n\u2502   1 \u2502\n\u2502   2 \u2502\n\u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT medianDeterministic(val, 1) FROM t\n")),(0,i.kt)("p",null,"\u7ed3\u679c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500medianDeterministic(val, 1)\u2500\u2510\n\u2502                         1.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);