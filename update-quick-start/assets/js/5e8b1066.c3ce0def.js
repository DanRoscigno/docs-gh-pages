"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30298],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(n),p=i,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),c=["components"],o={sidebar_position:40,sidebar_label:"Configuring an External Dictionary"},s="Configuring an External Dictionary",l={unversionedId:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",id:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",title:"Configuring an External Dictionary",description:"If dictionary is configured using xml file, than dictionary configuration has the following structure:",source:"@site/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",sourceDirName:"en/sql-reference/dictionaries/external-dictionaries",slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"Configuring an External Dictionary"},sidebar:"english",previous:{title:"General Description",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},next:{title:"Storing Dictionaries in Memory",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"}},u={},d=[],f={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-an-external-dictionary"},"Configuring an External Dictionary"),(0,a.kt)("p",null,"If dictionary is configured using xml file, than dictionary configuration has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <name>dict_name</name>\n\n    <structure>\n      \x3c!-- Complex key configuration --\x3e\n    </structure>\n\n    <source>\n      \x3c!-- Source configuration --\x3e\n    </source>\n\n    <layout>\n      \x3c!-- Memory layout configuration --\x3e\n    </layout>\n\n    <lifetime>\n      \x3c!-- Lifetime of dictionary in memory --\x3e\n    </lifetime>\n</dictionary>\n")),(0,a.kt)("p",null,"Corresponding ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/dictionary"},"DDL-query")," has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name\n(\n    ... -- attributes\n)\nPRIMARY KEY ... -- complex or single key configuration\nSOURCE(...) -- Source configuration\nLAYOUT(...) -- Memory layout configuration\nLIFETIME(...) -- Lifetime of dictionary in memory\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," \u2013 The identifier that can be used to access the dictionary. Use the characters ",(0,a.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_\\-]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"source")," \u2014 Source of the dictionary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"layout")," \u2014 Dictionary layout in memory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"structure")," \u2014 Structure of the dictionary . A key and attributes that can be retrieved by this key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"lifetime")," \u2014 Frequency of dictionary updates.")))}p.isMDXComponent=!0}}]);