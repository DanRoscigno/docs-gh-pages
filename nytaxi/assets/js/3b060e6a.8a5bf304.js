"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72237],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:44,sidebar_label:"String"},l="String",c={unversionedId:"en/sql-reference/data-types/string",id:"en/sql-reference/data-types/string",title:"String",description:"Strings of an arbitrary length. The length is not limited. The value can contain an arbitrary set of bytes, including null bytes.",source:"@site/docs/en/sql-reference/data-types/string.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/string",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/string",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/string.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"String"},sidebar:"english",previous:{title:"Boolean",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/boolean"},next:{title:"FixedString(N)",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/data-types/fixedstring"}},u={},p=[{value:"Encodings",id:"encodings",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string"},"String"),(0,a.kt)("p",null,"Strings of an arbitrary length. The length is not limited. The value can contain an arbitrary set of bytes, including null bytes.\nThe String type replaces the types VARCHAR, BLOB, CLOB, and others from other DBMSs."),(0,a.kt)("p",null,"When creating tables, numeric parameters for string fields can be set (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR(255)"),"), but ClickHouse ignores them."),(0,a.kt)("p",null,"Aliases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"LONGTEXT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MEDIUMTEXT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TINYTEXT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TEXT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"LONGBLOB"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MEDIUMBLOB"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TINYBLOB"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"BLOB"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"VARCHAR"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CHAR"),".")),(0,a.kt)("h2",{id:"encodings"},"Encodings"),(0,a.kt)("p",null,"ClickHouse does not have the concept of encodings. Strings can contain an arbitrary set of bytes, which are stored and output as-is.\nIf you need to store texts, we recommend using UTF-8 encoding. At the very least, if your terminal uses UTF-8 (as recommended), you can read and write your values without making conversions.\nSimilarly, certain functions for working with strings have separate variations that work under the assumption that the string contains a set of bytes representing a UTF-8 encoded text.\nFor example, the ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/string-functions#length"},"length")," function calculates the string length in bytes, while the ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/string-functions#lengthutf8"},"lengthUTF8")," function calculates the string length in Unicode code points, assuming that the value is UTF-8 encoded."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/string/"},"Original article")," "))}f.isMDXComponent=!0}}]);