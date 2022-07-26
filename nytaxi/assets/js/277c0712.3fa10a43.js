"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[2184],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},66802:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={sidebar_position:43,sidebar_label:"Files"},s="Functions for Working with Files",c={unversionedId:"en/sql-reference/functions/files",id:"en/sql-reference/functions/files",title:"Functions for Working with Files",description:"file",source:"@site/docs/en/sql-reference/functions/files.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/files",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/functions/files",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/files.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"Files"},sidebar:"english",previous:{title:"Conditional ",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/functions/conditional-functions"},next:{title:"Mathematical",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/functions/math-functions"}},u={},f=[{value:"file",id:"file",level:2}],p={toc:f};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions-for-working-with-files"},"Functions for Working with Files"),(0,a.kt)("h2",{id:"file"},"file"),(0,a.kt)("p",null,"Reads file as a String. The file content is not parsed, so any information is read as one string and placed into the specified column."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"file(path)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," \u2014 The relative path to the file from ",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/operations/server-configuration-parameters/settings#server_configuration_parameters-user_files_path"},"user_files_path"),". Path to file support following wildcards: ",(0,a.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"{abc,def}")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ",(0,a.kt)("inlineCode",{parentName:"li"},"'abc', 'def'")," \u2014 strings.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Inserting data from files a.txt and b.txt into a table as strings:"),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table SELECT file('a.txt'), file('b.txt');\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/operations/server-configuration-parameters/settings#server_configuration_parameters-user_files_path"},"user_files_path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/file"},"file"))))}m.isMDXComponent=!0}}]);