"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67217],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=l(t),g=a,m=f["".concat(c,".").concat(g)]||f[g]||p[g]||i;return t?r.createElement(m,u(u({ref:n},s),{},{components:t})):r.createElement(m,u({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,u=new Array(i);u[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<i;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29204:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),u=["components"],o={sidebar_position:190},c="uniq",l={unversionedId:"en/sql-reference/aggregate-functions/reference/uniq",id:"en/sql-reference/aggregate-functions/reference/uniq",title:"uniq",description:"Calculates the approximate number of different values of the argument.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/uniq.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/uniq",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniq",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/uniq.md",tags:[],version:"current",sidebarPosition:190,frontMatter:{sidebar_position:190},sidebar:"english",previous:{title:"kurtSamp",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/kurtsamp"},next:{title:"uniqExact",permalink:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqexact"}},s={},p=[],f={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uniq"},"uniq"),(0,i.kt)("p",null,"Calculates the approximate number of different values of the argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniq(x[, ...])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("p",null,"The function takes a variable number of parameters. Parameters can be ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", or numeric types."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"UInt64"),"-type number.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implementation details")),(0,i.kt)("p",null,"Function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calculates a hash for all parameters in the aggregate, then uses it in calculations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Uses an adaptive sampling algorithm. For the calculation state, the function uses a sample of element hash values up to 65536. This algorithm is very accurate and very efficient on the CPU. When the query contains several of these functions, using ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")," is almost as fast as using other aggregate functions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provides the result deterministically (it does not depend on the query processing order)."))),(0,i.kt)("p",null,"We recommend using this function in almost all scenarios."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/aggregate-functions/reference/uniqthetasketch#agg_function-uniqthetasketch"},"uniqTheta"))))}g.isMDXComponent=!0}}]);