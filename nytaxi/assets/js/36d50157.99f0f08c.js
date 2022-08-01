"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99496],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80576:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_label:"ArcType",description:"Arctype is the fast and easy-to-use SQL client for developers and teams."},c="Connect Arctype to ClickHouse",l={unversionedId:"en/integrations/sql-clients/arctype",id:"en/integrations/sql-clients/arctype",title:"Connect Arctype to ClickHouse",description:"Arctype is the fast and easy-to-use SQL client for developers and teams.",source:"@site/docs/en/integrations/sql-clients/arctype.md",sourceDirName:"en/integrations/sql-clients",slug:"/en/integrations/sql-clients/arctype",permalink:"/docs-gh-pages/nytaxi/en/integrations/sql-clients/arctype",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/sql-clients/arctype.md",tags:[],version:"current",frontMatter:{sidebar_label:"ArcType",description:"Arctype is the fast and easy-to-use SQL client for developers and teams."},sidebar:"english",previous:{title:"SQL Clients",permalink:"/docs-gh-pages/nytaxi/en/integrations/sql-clients"},next:{title:"DBeaver",permalink:"/docs-gh-pages/nytaxi/en/integrations/sql-clients/dbeaver"}},p={},u=[{value:"1. Gather your ClickHouse details",id:"1-gather-your-clickhouse-details",level:2},{value:"2. Download Arctype",id:"2-download-arctype",level:2},{value:"3. Add a database",id:"3-add-a-database",level:2},{value:"4. Query ClickHouse",id:"4-query-clickhouse",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connect-arctype-to-clickhouse"},"Connect Arctype to ClickHouse"),(0,i.kt)("p",null,"Arctype has built-in support for ClickHouse, and the configuration is very simple.  If ClickHouse is not shown as one of the database types you will have to update Arctype."),(0,i.kt)("h2",{id:"1-gather-your-clickhouse-details"},"1. Gather your ClickHouse details"),(0,i.kt)("p",null,"To connect Arctype to ClickHouse; you will need this information about your ClickHouse deployment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endpoint"),(0,i.kt)("li",{parentName:"ul"},"port number"),(0,i.kt)("li",{parentName:"ul"},"username"),(0,i.kt)("li",{parentName:"ul"},"password")),(0,i.kt)("h2",{id:"2-download-arctype"},"2. Download Arctype"),(0,i.kt)("p",null,"Arctype is available at ",(0,i.kt)("a",{parentName:"p",href:"https://arctype.com/"},"https://arctype.com/")),(0,i.kt)("h2",{id:"3-add-a-database"},"3. Add a database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start Arctype and click ",(0,i.kt)("strong",{parentName:"p"},"+ Add Connection"),", and select ClickHouse:"),(0,i.kt)("img",{src:n(6798).Z,class:"image",alt:"Add a new database"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," tab set the Host, Port, User, Password, and SSL Mode:"),(0,i.kt)("img",{src:n(75923).Z,class:"image",alt:"Set endpoint, user, password, port"}))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In this example the SSL Mode is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"verify-full"),".  If you are not using SSL, or using a self-signed cert you may have to choose a different setting or upload your certificate(s)."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Test the connection and click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("h2",{id:"4-query-clickhouse"},"4. Query ClickHouse"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can select databases and then tables by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Tables")," icon in the left navigation, and then selecting the database and table.  You will see a tabular view of the selected table:"),(0,i.kt)("img",{src:n(67107).Z,class:"image",alt:"Select databases and tables"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The next choice in the left navigation is ",(0,i.kt)("strong",{parentName:"p"},"Queries"),".  After choosing Queries you can add a new query with the ",(0,i.kt)("strong",{parentName:"p"},"Add Query")," button, and then type your query in the query pane.  As you type Arctype will provide you with table and column names: "),(0,i.kt)("img",{src:n(39322).Z,class:"image",alt:"Query the ClickHouse database using Arctype type ahead log"}))),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.arctype.com/"},"Arctype documentation")," to learn about the capabilities of Arctype, and the ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs"},"ClickHouse documentation")," to learn about the capabilities of ClickHouse."))}m.isMDXComponent=!0},6798:function(e,t,n){t.Z=n.p+"assets/images/arctype-add-database-0035180867b2e3316713686d23b11cdb.png"},39322:function(e,t,n){t.Z=n.p+"assets/images/arctype-queries-builder-5487b4f50508fe49c516beabac77652f.png"},75923:function(e,t,n){t.Z=n.p+"assets/images/arctype-set-creds-and-test-018eb942a200b2f94b83286db581263c.png"},67107:function(e,t,n){t.Z=n.p+"assets/images/arctype-table-view-317a0236ecf7fda55ba5324e6253903a.png"}}]);