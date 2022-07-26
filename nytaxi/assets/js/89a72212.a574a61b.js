"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93408],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={sidebar_position:50,sidebar_label:"SET"},c="SET Statement",l={unversionedId:"en/sql-reference/statements/set",id:"en/sql-reference/statements/set",title:"SET Statement",description:"Assigns value to the param setting for the current session. You cannot change server settings this way.",source:"@site/docs/en/sql-reference/statements/set.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/set",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/set",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/set.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"SET"},sidebar:"english",previous:{title:"EXCHANGE",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/exchange"},next:{title:"SET ROLE",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/set-role"}},p={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"set-statement"},"SET Statement"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET param = value\n")),(0,s.kt)("p",null,"Assigns ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"param")," ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/settings/"},"setting")," for the current session. You cannot change ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/server-configuration-parameters/"},"server settings")," this way."),(0,s.kt)("p",null,"You can also set all the values from the specified settings profile in a single query."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET profile = 'profile-name-from-the-settings-file'\n")),(0,s.kt)("p",null,"For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/settings/settings"},"Settings"),"."))}m.isMDXComponent=!0}}]);