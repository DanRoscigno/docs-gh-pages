"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[71327],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4299:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_label:"Playground",sidebar_position:2,keywords:["clickhouse","playground","getting","started","docs"],description:"The ClickHouse Playground allows people to experiment with ClickHouse by running queries instantly, without setting up their server or cluster.",slug:"/en/getting-started/playground"},s="ClickHouse Playground",u={unversionedId:"en/getting-started/playground",id:"en/getting-started/playground",title:"ClickHouse Playground",description:"The ClickHouse Playground allows people to experiment with ClickHouse by running queries instantly, without setting up their server or cluster.",source:"@site/docs/en/getting-started/playground.md",sourceDirName:"en/getting-started",slug:"/en/getting-started/playground",permalink:"/docs-gh-pages/nytaxi/en/getting-started/playground",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/playground.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Playground",sidebar_position:2,keywords:["clickhouse","playground","getting","started","docs"],description:"The ClickHouse Playground allows people to experiment with ClickHouse by running queries instantly, without setting up their server or cluster.",slug:"/en/getting-started/playground"},sidebar:"english",previous:{title:"Installation",permalink:"/docs-gh-pages/nytaxi/en/getting-started/install"},next:{title:"Interfaces",permalink:"/docs-gh-pages/nytaxi/en/interfaces"}},p={},c=[{value:"Credentials",id:"credentials",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouse-playground"},"ClickHouse Playground"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://play.clickhouse.com/play?user=play"},"ClickHouse Playground")," allows people to experiment with ClickHouse by running queries instantly, without setting up their server or cluster.\nSeveral example datasets are available in Playground."),(0,i.kt)("p",null,"You can make queries to Playground using any HTTP client, for example ",(0,i.kt)("a",{parentName:"p",href:"https://curl.haxx.se"},"curl")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget"),", or set up a connection using ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/interfaces/jdbc"},"JDBC")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/interfaces/odbc"},"ODBC")," drivers. More information about software products that support ClickHouse is available ",(0,i.kt)("a",{parentName:"p",href:"../interfaces"},"here"),"."),(0,i.kt)("h2",{id:"credentials"},"Credentials"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"HTTPS endpoint"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"https://play.clickhouse.com:443/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Native TCP endpoint"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"play.clickhouse.com:9440"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"explorer")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"play"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Password"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(empty)")))),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"The queries are executed as a read-only user. It implies some limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DDL queries are not allowed"),(0,i.kt)("li",{parentName:"ul"},"INSERT queries are not allowed")),(0,i.kt)("p",null,"The service also have quotas on its usage."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"HTTPS endpoint example with ",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://play.clickhouse.com/?user=explorer" --data-binary "SELECT \'Play ClickHouse\'"\n')),(0,i.kt)("p",null,"TCP endpoint example with ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/interfaces/cli"},"CLI"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse client --secure --host play.clickhouse.com --user explorer\n")))}g.isMDXComponent=!0}}]);