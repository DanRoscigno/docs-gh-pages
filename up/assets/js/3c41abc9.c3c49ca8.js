"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48766],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56513:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={sidebar_position:192},c="uniqCombined",u={unversionedId:"en/sql-reference/aggregate-functions/reference/uniqcombined",id:"en/sql-reference/aggregate-functions/reference/uniqcombined",title:"uniqCombined",description:"Calculates the approximate number of different argument values.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/uniqcombined.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/uniqcombined",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqcombined",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/uniqcombined.md",tags:[],version:"current",sidebarPosition:192,frontMatter:{sidebar_position:192},sidebar:"english",previous:{title:"uniqExact",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqexact"},next:{title:"uniqCombined64",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqcombined64"}},s={},p=[],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uniqcombined"},"uniqCombined"),(0,i.kt)("p",null,"Calculates the approximate number of different argument values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniqCombined(HLL_precision)(x[, ...])\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqCombined")," function is a good choice for calculating the number of different values."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("p",null,"The function takes a variable number of parameters. Parameters can be ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", or numeric types."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HLL_precision")," is the base-2 logarithm of the number of cells in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HyperLogLog"},"HyperLogLog"),". Optional, you can use the function as ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqCombined(x[, ...])"),". The default value for ",(0,i.kt)("inlineCode",{parentName:"p"},"HLL_precision")," is 17, which is effectively 96 KiB of space (2^17 cells, 6 bits each)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A number ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"UInt64"),"-type number.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implementation details")),(0,i.kt)("p",null,"Function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calculates a hash (64-bit hash for ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," and 32-bit otherwise) for all parameters in the aggregate, then uses it in calculations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Uses a combination of three algorithms: array, hash table, and HyperLogLog with an error correction table."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"For a small number of distinct elements, an array is used. When the set size is larger, a hash table is used. For a larger number of elements, HyperLogLog is used, which will occupy a fixed amount of memory.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provides the result deterministically (it does not depend on the query processing order)."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since it uses 32-bit hash for non-",(0,i.kt)("inlineCode",{parentName:"p"},"String")," type, the result will have very high error for cardinalities significantly larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"UINT_MAX")," (error will raise quickly after a few tens of billions of distinct values), hence in this case you should use ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")))),(0,i.kt)("p",null,"Compared to the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")," function, the ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqCombined"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consumes several times less memory."),(0,i.kt)("li",{parentName:"ul"},"Calculates with several times higher accuracy."),(0,i.kt)("li",{parentName:"ul"},"Usually has slightly lower performance. In some scenarios, ",(0,i.kt)("inlineCode",{parentName:"li"},"uniqCombined")," can perform better than ",(0,i.kt)("inlineCode",{parentName:"li"},"uniq"),", for example, with distributed queries that transmit a large number of aggregation states over the network.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqthetasketch#agg_function-uniqthetasketch"},"uniqTheta"))))}f.isMDXComponent=!0}}]);