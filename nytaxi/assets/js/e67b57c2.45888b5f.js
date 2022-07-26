"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[21114],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),k=r,d=f["".concat(c,".").concat(k)]||f[k]||p[k]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Introduction",sidebar_position:1,description:"Introduction to Kafka with ClickHouse"},c="Connecting Kafka",l={unversionedId:"en/integrations/kafka/kakfa-intro",id:"en/integrations/kafka/kakfa-intro",title:"Connecting Kafka",description:"Introduction to Kafka with ClickHouse",source:"@site/docs/en/integrations/kafka/kakfa-intro.md",sourceDirName:"en/integrations/kafka",slug:"/en/integrations/kafka/kakfa-intro",permalink:"/docs-gh-pages/nytaxi/en/integrations/kafka/kakfa-intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/kafka/kakfa-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,description:"Introduction to Kafka with ClickHouse"},sidebar:"english",previous:{title:"Kafka",permalink:"/docs-gh-pages/nytaxi/en/integrations/kafka"},next:{title:"Choosing an Approach",permalink:"/docs-gh-pages/nytaxi/en/integrations/kafka/kafka-choosing-an-approach"}},u={},p=[{value:"Assumptions",id:"assumptions",level:2}],f={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-kafka"},"Connecting Kafka"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka")," is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications. In most cases involving Kafka and ClickHouse, users will wish to insert Kafka based data into ClickHouse - although the reverse is supported. Below we outline several options for both use cases, identifying the pros and cons of each approach. "),(0,o.kt)("p",null,"For those who do not have a Kafka instance to hand, we recommend ",(0,o.kt)("a",{parentName:"p",href:"https://www.confluent.io/get-started/"},"Confluent Cloud"),", which offers a free tier adequate for testing these examples. For self-managed alternatives, consider the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/operator/current/overview.html"},"Confluent for Kubernetes")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/installation/installing_cp/overview.html"},"here")," for non-Kubernetes environments. "),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are familiar with the Kafka fundamentals, such as producers, consumers and topics."),(0,o.kt)("li",{parentName:"ul"},"You have a topic prepared for these examples. We assume all data is stored in Kafka as JSON, although the principles remain the same if using Avro."),(0,o.kt)("li",{parentName:"ul"},"We utilise the excellent ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/edenhill/kcat"},"kcat")," (formerly kafkacat) in our examples to publish and consume Kafka data."),(0,o.kt)("li",{parentName:"ul"},"Whilst we reference some python scripts for loading sample data, feel free to adapt the examples to your dataset."),(0,o.kt)("li",{parentName:"ul"},"You are broadly familiar with ClickHouse materialized views.")))}k.isMDXComponent=!0}}]);