"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72967],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],c={sidebar_position:43,sidebar_label:"\u7ea6\u675f"},i="\u64cd\u4f5c\u7ea6\u675f",l={unversionedId:"zh/sql-reference/statements/alter/constraint",id:"zh/sql-reference/statements/alter/constraint",title:"\u64cd\u4f5c\u7ea6\u675f",description:"manipulations-with-constraints}",source:"@site/docs/zh/sql-reference/statements/alter/constraint.md",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/constraint",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/alter/constraint",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/alter/constraint.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"\u7ea6\u675f"},sidebar:"chinese",previous:{title:"INDEX",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/alter/index/"},next:{title:"TTL",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/alter/ttl"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manipulations-with-constraints"},"\u64cd\u4f5c\u7ea6\u675f"),(0,o.kt)("p",null,"\u7ea6\u675f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u6dfb\u52a0\u6216\u5220\u9664:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name ADD CONSTRAINT constraint_name CHECK expression;\nALTER TABLE [db].name DROP CONSTRAINT constraint_name;\n")),(0,o.kt)("p",null,"\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/create/table#constraints"},"constraints"),"\u3002"),(0,o.kt)("p",null,"\u67e5\u8be2\u5c06\u4ece\u8868\u4e2d\u6dfb\u52a0\u6216\u5220\u9664\u5173\u4e8e\u7ea6\u675f\u7684\u5143\u6570\u636e\uff0c\u56e0\u6b64\u5b83\u4eec\u5c06\u88ab\u7acb\u5373\u5904\u7406\u3002"),(0,o.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u5982\u679c\u5df2\u6709\u6570\u636e\u88ab\u6dfb\u52a0\uff0c\u7ea6\u675f\u68c0\u67e5',(0,o.kt)("strong",{parentName:"p"},"\u5c06\u4e0d\u4f1a\u88ab\u6267\u884c"),"\u3002"),(0,o.kt)("p",null,"\u590d\u5236\u8868\u4e0a\u7684\u6240\u6709\u66f4\u6539\u90fd\u4f1a\u88ab\u5e7f\u64ad\u5230ZooKeeper\uff0c\u5e76\u5e94\u7528\u5230\u5176\u4ed6\u526f\u672c\u4e0a\u3002"))}m.isMDXComponent=!0}}]);