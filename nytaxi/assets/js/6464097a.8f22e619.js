"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91258],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"What if I have a problem with encodings when using Oracle via ODBC?",toc_hidden:!0,toc_priority:20},l="What If I Have a Problem with Encodings When Using Oracle Via ODBC?",u={unversionedId:"en/faq/integration/oracle-odbc",id:"en/faq/integration/oracle-odbc",title:"What if I have a problem with encodings when using Oracle via ODBC?",description:"oracle-odbc-encodings}",source:"@site/docs/en/faq/integration/oracle-odbc.md",sourceDirName:"en/faq/integration",slug:"/en/faq/integration/oracle-odbc",permalink:"/docs-gh-pages/nytaxi/en/faq/integration/oracle-odbc",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/integration/oracle-odbc.md",tags:[],version:"current",frontMatter:{title:"What if I have a problem with encodings when using Oracle via ODBC?",toc_hidden:!0,toc_priority:20},sidebar:"english",previous:{title:"How to import JSON into ClickHouse?",permalink:"/docs-gh-pages/nytaxi/en/faq/integration/json-import"},next:{title:"Question about Operating ClickHouse Servers and Clusters",permalink:"/docs-gh-pages/nytaxi/en/faq/operations/"}},s={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oracle-odbc-encodings"},"What If I Have a Problem with Encodings When Using Oracle Via ODBC?"),(0,a.kt)("p",null,"If you use Oracle as a source of ClickHouse external dictionaries via Oracle ODBC driver, you need to set the correct value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"NLS_LANG")," environment variable in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/default/clickhouse"),". For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/products/globalization/nls-lang-099431.html"},"Oracle NLS_LANG FAQ"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"NLS_LANG=RUSSIAN_RUSSIA.UTF8\n")))}d.isMDXComponent=!0}}]);