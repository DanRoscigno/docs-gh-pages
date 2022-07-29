"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91199],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},g),{},{components:n})):r.createElement(f,s({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={sidebar_label:"\u96c6\u6210\u7684\u8868\u5f15\u64ce",sidebar_position:30},l="\u96c6\u6210\u7684\u8868\u5f15\u64ce",c={unversionedId:"zh/engines/table-engines/integrations/index",id:"zh/engines/table-engines/integrations/index",title:"\u96c6\u6210\u7684\u8868\u5f15\u64ce",description:"table-engines-for-integrations}",source:"@site/docs/zh/engines/table-engines/integrations/index.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/",permalink:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/index.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_label:"\u96c6\u6210\u7684\u8868\u5f15\u64ce",sidebar_position:30},sidebar:"chinese",previous:{title:"TinyLog",permalink:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/log-family/tinylog"},next:{title:"Hive",permalink:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/hive"}},g={},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"table-engines-for-integrations"},"\u96c6\u6210\u7684\u8868\u5f15\u64ce"),(0,i.kt)("p",null,"ClickHouse \u63d0\u4f9b\u4e86\u591a\u79cd\u65b9\u5f0f\u6765\u4e0e\u5916\u90e8\u7cfb\u7edf\u96c6\u6210\uff0c\u5305\u62ec\u8868\u5f15\u64ce\u3002\u50cf\u6240\u6709\u5176\u4ed6\u7684\u8868\u5f15\u64ce\u4e00\u6837\uff0c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE"),"\u67e5\u8be2\u8bed\u53e5\u6765\u5b8c\u6210\u914d\u7f6e\u3002\u7136\u540e\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u914d\u7f6e\u7684\u96c6\u6210\u770b\u8d77\u6765\u50cf\u67e5\u8be2\u4e00\u4e2a\u6b63\u5e38\u7684\u8868\uff0c\u4f46\u5bf9\u5b83\u7684\u67e5\u8be2\u662f\u4ee3\u7406\u7ed9\u5916\u90e8\u7cfb\u7edf\u7684\u3002\u8fd9\u79cd\u900f\u660e\u7684\u67e5\u8be2\u662f\u8fd9\u79cd\u65b9\u6cd5\u76f8\u5bf9\u4e8e\u5176\u4ed6\u96c6\u6210\u65b9\u6cd5\u7684\u4e3b\u8981\u4f18\u52bf\u4e4b\u4e00\uff0c\u6bd4\u5982\u5916\u90e8\u5b57\u5178\u6216\u8868\u51fd\u6570\uff0c\u5b83\u4eec\u9700\u8981\u5728\u6bcf\u6b21\u4f7f\u7528\u65f6\u4f7f\u7528\u81ea\u5b9a\u4e49\u67e5\u8be2\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u652f\u6301\u7684\u96c6\u6210\u65b9\u5f0f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/odbc"},"ODBC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/jdbc"},"JDBC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/mysql"},"MySQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/mongodb"},"MongoDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/hdfs"},"HDFS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/s3"},"S3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/kafka"},"Kafka")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/embedded-rocksdb"},"EmbeddedRocksDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/rabbitmq"},"RabbitMQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/postgresql"},"PostgreSQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/sqlite"},"SQLite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/integrations/hive"},"Hive"))))}d.isMDXComponent=!0}}]);