"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30298],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),p=i,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93811:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={sidebar_position:40,sidebar_label:"Configuring an External Dictionary"},l="Configuring an External Dictionary",s={unversionedId:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",id:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",title:"Configuring an External Dictionary",description:"If dictionary is configured using xml file, than dictionary configuration has the following structure:",source:"@site/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",sourceDirName:"en/sql-reference/dictionaries/external-dictionaries",slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",permalink:"/docs-gh-pages/up/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"Configuring an External Dictionary"},sidebar:"english",previous:{title:"General Description",permalink:"/docs-gh-pages/up/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},next:{title:"Storing Dictionaries in Memory",permalink:"/docs-gh-pages/up/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"}},u={},d=[],f={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-an-external-dictionary"},"Configuring an External Dictionary"),(0,a.kt)("p",null,"If dictionary is configured using xml file, than dictionary configuration has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <name>dict_name</name>\n\n    <structure>\n      \x3c!-- Complex key configuration --\x3e\n    </structure>\n\n    <source>\n      \x3c!-- Source configuration --\x3e\n    </source>\n\n    <layout>\n      \x3c!-- Memory layout configuration --\x3e\n    </layout>\n\n    <lifetime>\n      \x3c!-- Lifetime of dictionary in memory --\x3e\n    </lifetime>\n</dictionary>\n")),(0,a.kt)("p",null,"Corresponding ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/statements/create/dictionary"},"DDL-query")," has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name\n(\n    ... -- attributes\n)\nPRIMARY KEY ... -- complex or single key configuration\nSOURCE(...) -- Source configuration\nLAYOUT(...) -- Memory layout configuration\nLIFETIME(...) -- Lifetime of dictionary in memory\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," \u2013 The identifier that can be used to access the dictionary. Use the characters ",(0,a.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_\\-]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"source")," \u2014 Source of the dictionary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"layout")," \u2014 Dictionary layout in memory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"structure")," \u2014 Structure of the dictionary . A key and attributes that can be retrieved by this key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"lifetime")," \u2014 Frequency of dictionary updates.")))}p.isMDXComponent=!0}}]);