"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35838],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48860:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:100,sidebar_label:"MaterializedView"},l="MaterializedView Table Engine",c={unversionedId:"en/engines/table-engines/special/materializedview",id:"en/engines/table-engines/special/materializedview",title:"MaterializedView Table Engine",description:"Used for implementing materialized views (for more information, see CREATE VIEW). For storing data, it uses a different engine that was specified when creating the view. When reading from a table, it just uses that engine.",source:"@site/docs/en/engines/table-engines/special/materializedview.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/materializedview",permalink:"/docs-gh-pages/update-quick-start/en/engines/table-engines/special/materializedview",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/materializedview.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,sidebar_label:"MaterializedView"},sidebar:"english",previous:{title:"View",permalink:"/docs-gh-pages/update-quick-start/en/engines/table-engines/special/view"},next:{title:"Memory",permalink:"/docs-gh-pages/update-quick-start/en/engines/table-engines/special/memory"}},u={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"materializedview-table-engine"},"MaterializedView Table Engine"),(0,a.kt)("p",null,"Used for implementing materialized views (for more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/view#materialized"},"CREATE VIEW"),"). For storing data, it uses a different engine that was specified when creating the view. When reading from a table, it just uses that engine."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/materializedview/"},"Original article")," "))}d.isMDXComponent=!0}}]);