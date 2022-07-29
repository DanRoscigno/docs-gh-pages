"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59705],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,g=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},p="graphite_retentions",l={unversionedId:"en/operations/system-tables/graphite_retentions",id:"en/operations/system-tables/graphite_retentions",title:"graphite_retentions",description:"Contains information about parameters graphiterollup which are used in tables with \\*GraphiteMergeTree engines.",source:"@site/docs/en/operations/system-tables/graphite_retentions.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/graphite_retentions",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/graphite_retentions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/graphite_retentions.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"grants",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/grants"},next:{title:"INFORMATION_SCHEMA",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/information_schema"}},c={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphite_retentions"},"graphite_retentions"),(0,i.kt)("p",null,"Contains information about parameters ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"graphite_rollup")," which are used in tables with ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/mergetree-family/graphitemergetree"},"*","GraphiteMergeTree")," engines."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_name")," (String) - ",(0,i.kt)("inlineCode",{parentName:"li"},"graphite_rollup")," parameter name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regexp")," (String) - A pattern for the metric name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function")," (String) - The name of the aggregating function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"age")," (UInt64) - The minimum age of the data in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"precision")," (UInt64) - How precisely to define the age of the data in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"priority")," (UInt16) - Pattern priority."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_default")," (UInt8) - Whether the pattern is the default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tables.database")," (Array(String)) - Array of names of database tables that use the ",(0,i.kt)("inlineCode",{parentName:"li"},"config_name")," parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tables.table")," (Array(String)) - Array of table names that use the ",(0,i.kt)("inlineCode",{parentName:"li"},"config_name")," parameter.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/graphite_retentions"},"Original article")," "))}f.isMDXComponent=!0}}]);