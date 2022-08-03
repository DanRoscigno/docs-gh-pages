"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17564],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),u=a(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,T=(0,r.useState)(b),x=T[0],I=T[1],S=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var H=N[k];null!=H&&H!==x&&v.some((function(e){return e.value===H}))&&I(H)}var O=function(e){var t=e.currentTarget,a=S.indexOf(t),n=v[a].value;n!==x&&(E(t),I(n),null!=k&&C(k,String(n)))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=S.indexOf(e.currentTarget)+1;a=null!=(n=S[r])?n:S[0];break;case"ArrowLeft":var o,i=S.indexOf(e.currentTarget)-1;a=null!=(o=S[i])?o:S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return S.push(e)},onKeyDown:R,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},94537:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(65488),l=a(85162),s=["components"],u={sidebar_label:"Quick Start",sidebar_position:2,keywords:["clickhouse","install","getting started","quick start"]},c="Quick Start",p={unversionedId:"en/quick-start",id:"en/quick-start",title:"Quick Start",description:"ClickHouse runs on ClickHouse Cloud or any Linux, FreeBSD, or macOS system with x86_64, AArch64, or PowerPC64LE CPU architecture. Follow these steps to get up and running with ClickHouse.",source:"@site/docs/en/quick-start.mdx",sourceDirName:"en",slug:"/en/quick-start",permalink:"/docs-gh-pages/update-quick-start/en/quick-start",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/quick-start.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Quick Start",sidebar_position:2,keywords:["clickhouse","install","getting started","quick start"]},sidebar:"english",previous:{title:"What is ClickHouse?",permalink:"/docs-gh-pages/update-quick-start/en/intro"},next:{title:"Tutorial",permalink:"/docs-gh-pages/update-quick-start/en/tutorial"}},d={},m=[{value:"1. Get ClickHouse",id:"1-get-clickhouse",level:2},{value:"2. Connect to ClickHouse",id:"2-connect-to-clickhouse",level:2},{value:"Connect to SQL console",id:"connect-to-sql-console",level:3},{value:"3. Run a query",id:"3-run-a-query",level:2},{value:"4. Create a database and table",id:"4-create-a-database-and-table",level:2},{value:"A Brief Intro to Primary Keys",id:"a-brief-intro-to-primary-keys",level:3},{value:"5. Insert Data",id:"5-insert-data",level:2},{value:"The ClickHouse Client",id:"the-clickhouse-client",level:3},{value:"Insert a CSV file",id:"insert-a-csv-file",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],h={toc:m};function k(e){var t=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"ClickHouse runs on ClickHouse Cloud or any Linux, FreeBSD, or macOS system with x86_64, AArch64, or PowerPC64LE CPU architecture. Follow these steps to get up and running with ClickHouse."),(0,o.kt)("h2",{id:"1-get-clickhouse"},"1. Get ClickHouse"),(0,o.kt)(i.Z,{groupId:"deployMethod",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"serverless",label:"ClickHouse Cloud",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Placeholder, we will work on this with the Cloud team as we get closer to locking down the UX."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sign up for a trial? forever free? account?"),(0,o.kt)("li",{parentName:"ul"},"invite your colleagues?"),(0,o.kt)("li",{parentName:"ul"},"deploy your first service?")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get started with ClickHouse Cloud",src:a(39132).Z,width:"748",height:"428"}))),(0,o.kt)(l.Z,{value:"selfmanaged",label:"Self Managed",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If your OS is not supported or for other install options, view the ",(0,o.kt)("a",{parentName:"p",href:"/en/getting-started/install/"},"installation details in the technical reference guide"),"."))),(0,o.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"The simplest way to download ClickHouse locally is to run the following command. If your operating system is supported, an appropriate ClickHouse binary will be downloaded and made runnable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://clickhouse.com/ | sh\n")),(0,o.kt)("p",null,"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," command, which defines a collection of useful symlinks along with the files and folders used by ClickHouse - all of which you can see in the output of the install script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./clickhouse install\n")),(0,o.kt)("p",null,"At the end of the install script, you are prompted for a password for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," user. Feel free to enter a password, or you can optionally leave it blank:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-response"},"Creating log directory /var/log/clickhouse-server.\nCreating data directory /var/lib/clickhouse.\nCreating pid directory /var/run/clickhouse-server.\n chown -R clickhouse:clickhouse '/var/log/clickhouse-server'\n chown -R clickhouse:clickhouse '/var/run/clickhouse-server'\n chown  clickhouse:clickhouse '/var/lib/clickhouse'\nEnter password for default user:\n")),(0,o.kt)("p",null,"  You should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," ClickHouse has been successfully installed.\n\n Start clickhouse-server with:\n  sudo clickhouse start\n\n Start clickhouse-client with:\n  clickhouse-client\n")),(0,o.kt)("p",null,"Run the following command to start the ClickHouse server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo clickhouse start\n"))),(0,o.kt)(l.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,o.kt)("p",null,"The simplest way to download ClickHouse locally is to run the following command. If your operating system is supported, an appropriate ClickHouse binary will be downloaded and made runnable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl https://clickhouse.com/ | sh\n")),(0,o.kt)("p",null,"Run the following command to start the ClickHouse server. A user named ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," with no password is created on the initial startup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./clickhouse server\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The examples throughout the documentation use the Linux commands for running the ClickHouse client (",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),").",(0,o.kt)("br",{parentName:"p"}),"\n","To run the ClickHouse server and client on a Mac, use ",(0,o.kt)("inlineCode",{parentName:"p"},"./clickhouse server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"./clickhouse client"),", respectively."))))))),(0,o.kt)("h2",{id:"2-connect-to-clickhouse"},"2. Connect to ClickHouse"),(0,o.kt)("p",null,"ClickHouse provides a web based SQL console that this part of the Quick Start will use.  Later on you will use ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," to connect to your ClickHouse service, and other clients are described in the pages in the ",(0,o.kt)("em",{parentName:"p"},"What's Next")," section."),(0,o.kt)(i.Z,{groupId:"deployMethod",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"serverless",label:"ClickHouse Cloud",default:!0,mdxType:"TabItem"},(0,o.kt)("h3",{id:"connect-to-sql-console"},"Connect to SQL console"),(0,o.kt)("p",null,"You can connect to the SQL console from the Services list in your ClickHouse Cloud organization."),(0,o.kt)("p",null,"From your organization page, open the connection details for the service that you want to connect to:"),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"Services list",src:a(35593).Z,width:"1446",height:"714"})),(0,o.kt)("p",null,"From here you can reset the password for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," user, get the connection information to connect clients (SQL clients, visualization tools, development language clients, etc.), and ",(0,o.kt)("strong",{parentName:"p"},"connect to SQL console"),"."),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"Service connection details",src:a(53092).Z,width:"1261",height:"746"})),(0,o.kt)("p",null,"The SQL console requires a username and password, the username is populated with ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),"; change it to your username if you are not using the default user.  Enter your password in the password field."),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"The SQL console",src:a(41417).Z,width:"875",height:"440"}))),(0,o.kt)(l.Z,{value:"selfmanaged",label:"Self Managed",mdxType:"TabItem"},(0,o.kt)("p",null,"The ClickHouse server listens for HTTP clients on port 8123 by default. There is a built-in UI for running SQL queries at ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8123/play"},"http://127.0.0.1:8123/play")," (change the hostname accordingly)."),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"The Play UI",src:a(41256).Z,width:"1624",height:"390"})),(0,o.kt)("p",null,"Notice in your Play UI that the username was populated with ",(0,o.kt)("strong",{parentName:"p"},"default")," and the password text field was left empty. If you assigned a password to the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," user, enter it into the password field."))),(0,o.kt)("h2",{id:"3-run-a-query"},"3. Run a query"),(0,o.kt)("p",null,"This returns the names of the databases, type it in the SQL console, and click ",(0,o.kt)("strong",{parentName:"p"},"Run"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SHOW databases\n")),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"View the results",src:a(33031).Z,width:"1472",height:"539"})),(0,o.kt)("h2",{id:"4-create-a-database-and-table"},"4. Create a database and table"),(0,o.kt)("p",null,"Like most database management systems, ClickHouse logically groups tables into ",(0,o.kt)("strong",{parentName:"p"},"databases"),". Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," command to create a new database in ClickHouse:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE DATABASE IF NOT EXISTS helloworld\n")),(0,o.kt)("p",null,"Run the following command to create a table named ",(0,o.kt)("inlineCode",{parentName:"p"},"my_first_table")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworld")," database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE TABLE helloworld.my_first_table\n(\n    user_id UInt32,\n    message String,\n    timestamp DateTime,\n    metric Float32\n)\nENGINE = MergeTree()\nPRIMARY KEY (user_id, timestamp)\n")),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"my_first_table")," is a MergeTree table with four columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user_id"),":  a 32-bit unsigned integer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message"),": a String data type, which replaces types like VARCHAR, BLOB, CLOB and others from other database systems"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp"),": a DateTime value, which represents an instant in time"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metric"),": a 32-bit floating point number")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"table engines")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The table engine determines:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"How and where the data is stored"),(0,o.kt)("li",{parentName:"ul"},"Which queries are supported"),(0,o.kt)("li",{parentName:"ul"},"Whether or not the data is replicated")),(0,o.kt)("p",{parentName:"div"},"There are many engines to choose from, but for a simple table on a single-node ClickHouse server, ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," is your likely choice. "))),(0,o.kt)("h3",{id:"a-brief-intro-to-primary-keys"},"A Brief Intro to Primary Keys"),(0,o.kt)("p",null,"Before you go any further, it is important to understand how primary keys work in ClickHouse (the implementation\nof primary keys might seem unexpected!):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"primary keys in ClickHouse are ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"not unique"))," for each row in a table")),(0,o.kt)("p",null,"The primary key of a ClickHouse table determines how the data is sorted when written to disk. Every 8,192 rows or 10MB of\ndata (referred to as the ",(0,o.kt)("strong",{parentName:"p"},"index granularity"),") creates an entry in the primary key index file. This granularity concept\ncreates a ",(0,o.kt)("strong",{parentName:"p"},"sparse index")," that can easily fit in memory, and the granules represent a stripe of the smallest amount of\ncolumn data that gets processed during ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," queries."),(0,o.kt)("p",null,"The primary key can be defined using the ",(0,o.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," parameter. If you define a table without a ",(0,o.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," specified,\nthen the key becomes the tuple specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause. If you specify both a ",(0,o.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY ")," and an ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", the primary key must be a subset of the sort order."),(0,o.kt)("p",null,"The primary key is also the sorting key, which is a tuple of ",(0,o.kt)("inlineCode",{parentName:"p"},"(user_id, timestamp)"),".  Therefore, the data stored in each\ncolumn file will be sorted by ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,o.kt)("h2",{id:"5-insert-data"},"5. Insert Data"),(0,o.kt)("p",null,"You can use the familiar ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT INTO TABLE")," command with ClickHouse, but it is important to understand that each insert into a ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeTree")," table causes a ",(0,o.kt)("strong",{parentName:"p"},"part")," to be created in storage."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Clickhouse best practice")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Insert a large number of rows per batch - tens of thousands or even millions of\nrows at once. (Don't worry - ClickHouse can easily handle that type of volume!)"))),(0,o.kt)("p",null,"Even for a simple example, let's insert more than one row at a time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INSERT INTO helloworld.my_first_table (user_id, message, timestamp, metric) VALUES\n    (101, 'Hello, ClickHouse!',                                 now(),       -1.0    ),\n    (102, 'Insert a lot of rows per batch',                     yesterday(), 1.41421 ),\n    (102, 'Sort your data based on your commonly-used queries', today(),     2.718   ),\n    (101, 'Granules are the smallest chunks of data read',      now() + 5,   3.14159 )\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp")," column is populated using various ",(0,o.kt)("strong",{parentName:"p"},"Date")," and ",(0,o.kt)("strong",{parentName:"p"},"DateTime")," functions. ClickHouse has hundreds of useful functions that you can ",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/"},"view in the ",(0,o.kt)("strong",{parentName:"a"},"Functions")," section"),"."))),(0,o.kt)("p",null,"Let's verify it worked:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT * FROM helloworld.my_first_table\n")),(0,o.kt)("p",null,"   You should see the four rows of data that were inserted:"),(0,o.kt)("p",null,"   ",(0,o.kt)("img",{alt:"New rows inserted",src:a(11665).Z,width:"1804",height:"792"})),(0,o.kt)("h3",{id:"the-clickhouse-client"},"The ClickHouse Client"),(0,o.kt)(i.Z,{groupId:"deployMethod",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"serverless",label:"ClickHouse Cloud",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"You can also connect to your ClickHouse Cloud service using a command-line tool named ",(0,o.kt)("strong",{parentName:"p"},"clickhouse-client"),". The connection details are in the ",(0,o.kt)("strong",{parentName:"p"},"Native")," tab in the services connection details:"),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"clickhouse client connection details",src:a(28482).Z,width:"1261",height:"756"})),(0,o.kt)("p",null,"  Download info to be determined (we need a download link for\n`clickhouse-client and clickhouse-local for Cloud customers)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-client --host ysx97qkuzb.us-east-1.aws.clickhouse.cloud \\\n--secure --port 9440 \\\n--user default \\\n--password <password>\n"))),(0,o.kt)(l.Z,{value:"selfmanaged",label:"Self Managed",mdxType:"TabItem"},(0,o.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("p",null,"You can also connect to your ClickHouse server using a command-line tool named ",(0,o.kt)("strong",{parentName:"p"},"clickhouse-client"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-client\n"))),(0,o.kt)(l.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,o.kt)("p",null,"You can also connect to your ClickHouse server using a command-line tool named ",(0,o.kt)("strong",{parentName:"p"},"clickhouse-client"),". Open a new terminal and change directories to where you downloaded the ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary in step 1 above, then run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./clickhouse client\n")))))),(0,o.kt)("p",null,"If you get the smiley face prompt, you are ready to run queries!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":)\n")),(0,o.kt)("p",null,"  Give it a try by running the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp\n")),(0,o.kt)("p",null,"  Notice the response comes back in a nice table format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp ASC\n \nQuery id: f7a33012-bc8c-4f0f-9641-260ee1ffe4b8\n \n\u250c\u2500user_id\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500\u2500metric\u2500\u2510\n\u2502     102 \u2502 Insert a lot of rows per batch                     \u2502 2022-03-21 00:00:00 \u2502 1.41421 \u2502\n\u2502     102 \u2502 Sort your data based on your commonly-used queries \u2502 2022-03-22 00:00:00 \u2502   2.718 \u2502\n\u2502     101 \u2502 Hello, ClickHouse!                                 \u2502 2022-03-22 14:04:09 \u2502      -1 \u2502\n\u2502     101 \u2502 Granules are the smallest chunks of data read      \u2502 2022-03-22 14:04:14 \u2502 3.14159 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.008 sec.\n")),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMAT")," clause to specify one of the ",(0,o.kt)("a",{parentName:"p",href:"/en/interfaces/formats/"},"many supported output formats of ClickHouse"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp\nFORMAT TabSeparated\n")),(0,o.kt)("p",null,"  In the above query, the output is returned as tab-separated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Query id: 3604df1c-acfd-4117-9c56-f86c69721121\n\n102 Insert a lot of rows per batch  2022-03-21 00:00:00 1.41421\n102 Sort your data based on your commonly-used queries  2022-03-22 00:00:00 2.718\n101 Hello, ClickHouse!  2022-03-22 14:04:09 -1\n101 Granules are the smallest chunks of data read   2022-03-22 14:04:14 3.14159\n\n4 rows in set. Elapsed: 0.005 sec.\n")),(0,o.kt)("p",null,"To exit the ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),", enter the ",(0,o.kt)("strong",{parentName:"p"},"exit")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":) exit\nBye.\n")),(0,o.kt)("h3",{id:"insert-a-csv-file"},"Insert a CSV file"),(0,o.kt)("p",null,"A common task when getting started with a database is to insert some data that you already have in files. We have some\nsample data online that you can insert that represents clickstream data - it includes a user ID, a URL that was visited, and\nthe timestamp of the event."),(0,o.kt)("p",null,"Suppose we have the following text in a CSV file named ",(0,o.kt)("inlineCode",{parentName:"p"},"data.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"102,This is data in a file,2022-02-22 10:43:28,123.45\n101,It is comma-separated,2022-02-23 00:00:00,456.78\n103,Use FORMAT to specify the format,2022-02-21 10:43:30,678.90\n")),(0,o.kt)("p",null,"The following command inserts the data into ",(0,o.kt)("inlineCode",{parentName:"p"},"my_first_table"),":"),(0,o.kt)(i.Z,{groupId:"deployMethod",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"serverless",label:"ClickHouse Cloud",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-client --host ysx97qkuzb.us-east-1.aws.clickhouse.cloud \\\n--secure --port 9440 \\\n--user default \\\n--password <password> \\\n--query='INSERT INTO helloworld.my_first_table FORMAT CSV' < data.csv\n"))),(0,o.kt)(l.Z,{value:"selfmanaged",label:"Self Managed",mdxType:"TabItem"},(0,o.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-client \\\n--query='INSERT INTO helloworld.my_first_table FORMAT CSV' < data.csv\n"))),(0,o.kt)(l.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./clickhouse client \\\n--query='INSERT INTO helloworld.my_first_table FORMAT CSV' < data.csv\n")))))),(0,o.kt)("p",null,"Notice the new rows appear in the table now:"),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"New rows from CSV file",src:a(78134).Z,width:"1818",height:"951"})),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/tutorial"},"Tutorial")," has you insert 2 million rows into a table and write some analytical queries"),(0,o.kt)("li",{parentName:"ul"},"We have a list of ",(0,o.kt)("a",{parentName:"li",href:"/en/getting-started/example-datasets/"},"example datasets")," with instructions on how to insert them"),(0,o.kt)("li",{parentName:"ul"},"Check out our 25-minute video on ",(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/company/events/getting-started-with-clickhouse/"},"Getting Started with ClickHouse")),(0,o.kt)("li",{parentName:"ul"},"If your data is coming from an external source, view our ",(0,o.kt)("a",{parentName:"li",href:"/en/integrations/"},"collection of integration guides")," for connecting to message queues, databases, pipelines and more"),(0,o.kt)("li",{parentName:"ul"},"If you are using a UI/BI visualization tool, view the ",(0,o.kt)("a",{parentName:"li",href:"/en/connect-a-ui/"},"user guides for connecting a UI to ClickHouse")),(0,o.kt)("li",{parentName:"ul"},"The user guide on ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro"},"primary keys")," is everything you need to know about primary keys and how to define them")))}k.isMDXComponent=!0},39132:function(e,t,a){t.Z=a.p+"assets/images/cloud_demo_small_de3d370183-1c203baf74f75461cc21a99c08d989bc.gif"},28482:function(e,t,a){t.Z=a.p+"assets/images/CloudClickhouseClientDetails-bf6a0cf51a64a8ab54c550311e484598.png"},41417:function(e,t,a){t.Z=a.p+"assets/images/SQLConsole-2169e31d1b33e4d4fcf3fcd2b002d26d.png"},53092:function(e,t,a){t.Z=a.p+"assets/images/ServiceDetails-53cf1a65d70cc20fcb935b6f32fae273.png"},35593:function(e,t,a){t.Z=a.p+"assets/images/Services-17d33e566240ccd64857eff7d1a5febc.png"},33031:function(e,t,a){t.Z=a.p+"assets/images/ShowDatabases-04468cefcc9d6f7cb24363ec54867cf1.png"},41256:function(e,t,a){t.Z=a.p+"assets/images/quickstart_01-a6d0b81717fcc498112f333cb8ff772a.png"},11665:function(e,t,a){t.Z=a.p+"assets/images/quickstart_03-ddbbd963912a0493045d85a1f5106cbe.png"},78134:function(e,t,a){t.Z=a.p+"assets/images/quickstart_04-89a1a9f0676555829c0c8abf55d32784.png"}}]);