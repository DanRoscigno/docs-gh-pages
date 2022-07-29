"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23797],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),g=a,m=f["".concat(o,".").concat(g)]||f[g]||p[g]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={sidebar_position:212},o="median",u={unversionedId:"en/sql-reference/aggregate-functions/reference/median",id:"en/sql-reference/aggregate-functions/reference/median",title:"median",description:"The median functions are the aliases for the corresponding quantile functions. They calculate median of a numeric data sample.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/median.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/median",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/median",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/median.md",tags:[],version:"current",sidebarPosition:212,frontMatter:{sidebar_position:212},sidebar:"english",previous:{title:"quantileBFloat16",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantilebfloat16"},next:{title:"simpleLinearRegression",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/simplelinearregression"}},s={},p=[],f={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"median"},"median"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"median*")," functions are the aliases for the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," functions. They calculate median of a numeric data sample."),(0,i.kt)("p",null,"Functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"median")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianDeterministic")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantiledeterministic#quantiledeterministic"},"quantileDeterministic"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianExact")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantileexact#quantileexact"},"quantileExact"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianExactWeighted")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantileexactweighted#quantileexactweighted"},"quantileExactWeighted"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianTiming")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantiletiming#quantiletiming"},"quantileTiming"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianTimingWeighted")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantiletimingweighted#quantiletimingweighted"},"quantileTimingWeighted"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianTDigest")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantiletdigest#quantiletdigest"},"quantileTDigest"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianTDigestWeighted")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted#quantiletdigestweighted"},"quantileTDigestWeighted"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medianBFloat16")," \u2014 Alias for ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/quantilebfloat16#quantilebfloat16"},"quantileBFloat16"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Input table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u2510\n\u2502   1 \u2502\n\u2502   1 \u2502\n\u2502   2 \u2502\n\u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT medianDeterministic(val, 1) FROM t;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500medianDeterministic(val, 1)\u2500\u2510\n\u2502                         1.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);