"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79575],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,h=m["".concat(i,".").concat(f)]||m[f]||o[f]||s;return r?a.createElement(h,c(c({ref:t},u),{},{components:r})):a.createElement(h,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,c=new Array(s);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<s;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34649:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),c=["components"],l={sidebar_label:"SQL \u8bed\u53e5",sidebar_position:31},i="ClickHouse SQL \u8bed\u53e5",p={unversionedId:"zh/sql-reference/statements/index",id:"zh/sql-reference/statements/index",title:"ClickHouse SQL \u8bed\u53e5",description:"clickhouse-sql-statements}",source:"@site/docs/zh/sql-reference/statements/index.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/index.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_label:"SQL \u8bed\u53e5",sidebar_position:31},sidebar:"chinese",previous:{title:"SQL\u53c2\u8003",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/"},next:{title:"SELECT",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/"}},u={},o=[],m={toc:o};function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"clickhouse-sql-statements"},"ClickHouse SQL \u8bed\u53e5"),(0,s.kt)("p",null,"\u8bed\u53e5\u8868\u793a\u53ef\u4ee5\u4f7f\u7528 SQL \u67e5\u8be2\u6267\u884c\u7684\u5404\u79cd\u64cd\u4f5c\u3002\u6bcf\u79cd\u7c7b\u578b\u7684\u8bed\u53e5\u90fd\u6709\u81ea\u5df1\u7684\u8bed\u6cd5\u548c\u7528\u6cd5\u8be6\u7ec6\u4fe1\u606f\uff0c\u8fd9\u4e9b\u8bed\u6cd5\u548c\u7528\u6cd5\u8be6\u7ec6\u4fe1\u606f\u5355\u72ec\u63cf\u8ff0\u5982\u4e0b\u6240\u793a:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/"},"SELECT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/insert-into"},"INSERT INTO")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/create/"},"CREATE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/alter/"},"ALTER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/system"},"SYSTEM")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/show"},"SHOW")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/grant"},"GRANT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/revoke"},"REVOKE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/attach"},"ATTACH")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/check-table"},"CHECK TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/describe-table"},"DESCRIBE TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/detach"},"DETACH")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../sql-reference/statements/drop"},"DROP")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/exists"},"EXISTS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/kill"},"KILL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/optimize"},"OPTIMIZE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/rename"},"RENAME")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/set"},"SET")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/set-role"},"SET ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/truncate"},"TRUNCATE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/use"},"USE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/explain"},"EXPLAIN"))))}f.isMDXComponent=!0}}]);