"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59412],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),c=["components"],o={},s="ALL \u5b50\u53e5",i={unversionedId:"zh/sql-reference/statements/select/all",id:"zh/sql-reference/statements/select/all",title:"ALL \u5b50\u53e5",description:"select-all}",source:"@site/docs/zh/sql-reference/statements/select/all.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/all",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/all",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/all.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"SELECT",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/"},next:{title:"ARRAY JOIN",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/array-join"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-all"},"ALL \u5b50\u53e5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SELECT ALL")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u4e0d\u5e26 ",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u662f\u4e00\u6837\u7684\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"ALL")," \uff0c\u5219\u5ffd\u7565\u5b83\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540c\u65f6\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"ALL")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"DISTINCT")," \uff0c\u5219\u4f1a\u629b\u51fa\u5f02\u5e38\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ALL")," \u4e5f\u53ef\u4ee5\u5728\u805a\u5408\u51fd\u6570\u4e2d\u6307\u5b9a\uff0c\u5177\u6709\u76f8\u540c\u7684\u6548\u679c\uff08\u7a7a\u64cd\u4f5c\uff09\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(ALL number) FROM numbers(10);\n")),(0,l.kt)("p",null,"\u7b49\u4e8e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(number) FROM numbers(10);\n")))}f.isMDXComponent=!0}}]);