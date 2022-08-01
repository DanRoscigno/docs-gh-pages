"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61195],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,h=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59106:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={sidebar_position:45,sidebar_label:"Monitoring"},l="Monitoring",p={unversionedId:"en/operations/monitoring",id:"en/operations/monitoring",title:"Monitoring",description:"You can monitor:",source:"@site/docs/en/operations/monitoring.md",sourceDirName:"en/operations",slug:"/en/operations/monitoring",permalink:"/docs-gh-pages/nytaxi/en/operations/monitoring",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/monitoring.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"Monitoring"},sidebar:"english",previous:{title:"Requirements",permalink:"/docs-gh-pages/nytaxi/en/operations/requirements"},next:{title:"Secured Communication with Zookeeper",permalink:"/docs-gh-pages/nytaxi/en/operations/ssl-zookeeper"}},u={},c=[{value:"Resource Utilization",id:"resource-utilization",level:2},{value:"ClickHouse Server Metrics",id:"clickhouse-server-metrics",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"You can monitor:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilization of hardware resources."),(0,i.kt)("li",{parentName:"ul"},"ClickHouse server metrics.")),(0,i.kt)("h2",{id:"resource-utilization"},"Resource Utilization"),(0,i.kt)("p",null,"ClickHouse does not monitor the state of hardware resources by itself."),(0,i.kt)("p",null,"It is highly recommended to set up monitoring for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Load and temperature on processors."),(0,i.kt)("p",{parentName:"li"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dmesg"},"dmesg"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.linux.org/docs/man8/turbostat.html"},"turbostat")," or other instruments.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Utilization of storage system, RAM and network."))),(0,i.kt)("h2",{id:"clickhouse-server-metrics"},"ClickHouse Server Metrics"),(0,i.kt)("p",null,"ClickHouse server has embedded instruments for self-state monitoring."),(0,i.kt)("p",null,"To track server events use server logs. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/server-configuration-parameters/settings#server_configuration_parameters-logger"},"logger")," section of the configuration file."),(0,i.kt)("p",null,"ClickHouse collects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Different metrics of how the server uses computational resources."),(0,i.kt)("li",{parentName:"ul"},"Common statistics on query processing.")),(0,i.kt)("p",null,"You can find metrics in the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/system-tables/metrics#system_tables-metrics"},"system.metrics"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/system-tables/events#system_tables-events"},"system.events"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/system-tables/asynchronous_metrics#system_tables-asynchronous_metrics"},"system.asynchronous_metrics")," tables."),(0,i.kt)("p",null,"You can configure ClickHouse to export metrics to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphite-project"},"Graphite"),". See the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"Graphite section")," in the ClickHouse server configuration file. Before configuring export of metrics, you should set up Graphite by following their official ",(0,i.kt)("a",{parentName:"p",href:"https://graphite.readthedocs.io/en/latest/install.html"},"guide"),"."),(0,i.kt)("p",null,"You can configure ClickHouse to export metrics to ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus"),". See the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/server-configuration-parameters/settings#server_configuration_parameters-prometheus"},"Prometheus section")," in the ClickHouse server configuration file. Before configuring export of metrics, you should set up Prometheus by following their official ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"guide"),"."),(0,i.kt)("p",null,"Additionally, you can monitor server availability through the HTTP API. Send the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP GET")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/ping"),". If the server is available, it responds with ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK"),"."),(0,i.kt)("p",null,"To monitor servers in a cluster configuration, you should set the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/operations/settings/settings#settings-max_replica_delay_for_distributed_queries"},"max_replica_delay_for_distributed_queries")," parameter and use the HTTP resource ",(0,i.kt)("inlineCode",{parentName:"p"},"/replicas_status"),". A request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/replicas_status")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK")," if the replica is available and is not delayed behind the other replicas. If a replica is delayed, it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"503 HTTP_SERVICE_UNAVAILABLE")," with information about the gap."))}f.isMDXComponent=!0}}]);