"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[44907],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:60,sidebar_label:"Set"},l="Set Table Engine",c={unversionedId:"en/engines/table-engines/special/set",id:"en/engines/table-engines/special/set",title:"Set Table Engine",description:"A data set that is always in RAM. It is intended for use on the right side of the IN operator (see the section \u201cIN operators\u201d).",source:"@site/docs/en/engines/table-engines/special/set.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/set",permalink:"/docs-gh-pages/up/en/engines/table-engines/special/set",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/set.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,sidebar_label:"Set"},sidebar:"english",previous:{title:"Null",permalink:"/docs-gh-pages/up/en/engines/table-engines/special/null"},next:{title:"Join",permalink:"/docs-gh-pages/up/en/engines/table-engines/special/join"}},p={},u=[{value:"Limitations and Settings",id:"join-limitations-and-settings",level:3}],d={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-table-engine"},"Set Table Engine"),(0,a.kt)("p",null,"A data set that is always in RAM. It is intended for use on the right side of the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator (see the section \u201cIN operators\u201d)."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," to insert data in the table. New elements will be added to the data set, while duplicates will be ignored.\nBut you can\u2019t perform ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," from the table. The only way to retrieve data is by using it in the right half of the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator."),(0,a.kt)("p",null,"Data is always located in RAM. For ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),", the blocks of inserted data are also written to the directory of tables on the disk. When starting the server, this data is loaded to RAM. In other words, after restarting, the data remains in place."),(0,a.kt)("p",null,"For a rough server restart, the block of data on the disk might be lost or damaged. In the latter case, you may need to manually delete the file with damaged data."),(0,a.kt)("h3",{id:"join-limitations-and-settings"},"Limitations and Settings"),(0,a.kt)("p",null,"When creating a table, the following settings are applied:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/operations/settings/settings#persistent"},"persistent"))))}g.isMDXComponent=!0}}]);