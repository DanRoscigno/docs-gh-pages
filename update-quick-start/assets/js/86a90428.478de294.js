"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72070],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),h=r,k=f["".concat(s,".").concat(h)]||f[h]||p[h]||a;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_label:"Kafka Connect Options",sidebar_position:5,description:"Options with Kafka Connect"},s="Connection Options",l={unversionedId:"en/integrations/kafka/kafka-connect-options",id:"en/integrations/kafka/kafka-connect-options",title:"Connection Options",description:"Options with Kafka Connect",source:"@site/docs/en/integrations/kafka/kafka-connect-options.md",sourceDirName:"en/integrations/kafka",slug:"/en/integrations/kafka/kafka-connect-options",permalink:"/docs-gh-pages/update-quick-start/en/integrations/kafka/kafka-connect-options",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/kafka/kafka-connect-options.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Kafka Connect Options",sidebar_position:5,description:"Options with Kafka Connect"},sidebar:"english",previous:{title:"Kafka Connect",permalink:"/docs-gh-pages/update-quick-start/en/integrations/kafka/kafka-connect-intro"},next:{title:"Kafka Connect JDBC Connector",permalink:"/docs-gh-pages/update-quick-start/en/integrations/kafka/kafka-connect-jdbc"}},u={},p=[],f={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connection-options"},"Connection Options"),(0,a.kt)("p",null,"Kafka Connect uses Sink Connectors to deliver data from Kafka topics into other data stores such as ClickHouse. Two Sink connectors provided by Confluent are compatible with ClickHouse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.confluent.io/kafka-connect-jdbc/current/"},"JDBC Connector")," - This Connector is both a Sink and Source Connector (for pushing data to Kafka) via the JDBC interface."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.confluent.io/kafka-connect-http/current/overview.html"},"HTTP Sink Connector")," - A connector for pulling data from Kafka and inserting it via its HTTP interface.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Limitations")),(0,a.kt)("p",null,"Each of these has benefits and limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"./kafka-connect-jdbc"},"JDBC connector")," relies on the user providing a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"JDBC driver"),". This driver has several versions, including the official ClickHouse distribution. This version uses the HTTP interface, although native support is planned. Until the native interface is not supported, it provides no performance benefit over the HTTP Sink other than ease of configuration. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/housepower/ClickHouse-Native-JDBC"},"Other drivers")," support the native protocol, but these have not been tested."),(0,a.kt)("li",{parentName:"ul"},"The JDBC connector requires a Kafka schema defining the types of the fields. It uses this schema, defined in JSON schema, to formulate insert statements. Whilst this is effective on primitive types, the connector does not support ClickHouse specific types, e.g., Arrays and Maps. Furthermore, this connector will not support several configuration options which rely on DDL queries - highlighted in the section ",(0,a.kt)("a",{parentName:"li",href:"./kafka-connect-jdbc"},"JDBC Connector")," below."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"./kafka-connect-http"},"HTTP Sink Connector")," does not require a data schema. Our example assumes the data is in JSON format - although this approach should be compatible with any ",(0,a.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/interfaces/formats/#data-formatting"},"formats")," that the ClickHouse HTTP interface can consume. "),(0,a.kt)("li",{parentName:"ul"},"The HTTP Sink Connector is also deployed natively in Confluent Cloud and has been tested with ClickHouse Cloud, unlike the JDBC, which must be self-managed. We provide instructions for both scenarios below."),(0,a.kt)("li",{parentName:"ul"},"The JDBC connector is not currently hosted in Confluent Cloud. This must be self-managed."),(0,a.kt)("li",{parentName:"ul"},"Both connectors have at-least-once delivery semantics. Duplicates may therefore occur in ClickHouse. ")),(0,a.kt)("p",null,"The JDBC Connector is distributed under the ",(0,a.kt)("a",{parentName:"p",href:"https://www.confluent.io/confluent-community-license"},"Confluent Community License"),". The HTTP Connector conversely requires a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-http/current/overview.html#license"},"Confluent Enterprise License"),"."))}h.isMDXComponent=!0}}]);