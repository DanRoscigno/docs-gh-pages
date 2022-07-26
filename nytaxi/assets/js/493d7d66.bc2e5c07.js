"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58855],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81669:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_label:"Introduction",sidebar_position:1,description:"Users can transform and model their data in ClickHouse using dbts"},l="ClickHouse and dbt",d={unversionedId:"en/integrations/dbt/dbt-intro",id:"en/integrations/dbt/dbt-intro",title:"ClickHouse and dbt",description:"Users can transform and model their data in ClickHouse using dbts",source:"@site/docs/en/integrations/dbt/dbt-intro.md",sourceDirName:"en/integrations/dbt",slug:"/en/integrations/dbt/dbt-intro",permalink:"/docs-gh-pages/nytaxi/en/integrations/dbt/dbt-intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/dbt/dbt-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,description:"Users can transform and model their data in ClickHouse using dbts"},sidebar:"english",previous:{title:"dbt",permalink:"/docs-gh-pages/nytaxi/en/integrations/dbt"},next:{title:"Setup",permalink:"/docs-gh-pages/nytaxi/en/integrations/dbt/dbt-setup"}},c={},u=[],p={toc:u};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouse-and-dbt"},"ClickHouse and dbt"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"dbt")," (data build tool) enables analytics engineers to transform data in their warehouses by simply writing select statements. dbt handles materializing these select statements into objects in the database in the form of tables and views - performing the T of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extract,_load,_transform"},"Extract Load and Transform (ELT)"),". Users can create a model defined by a SELECT statement."),(0,i.kt)("p",null,"Within dbt, these models can be cross-referenced and layered to allow the construction of higher-level concepts. The boilerplate SQL required to connect models is automatically generated. Furthermore, dbt identifies dependencies between models and ensures they are created in the appropriate order using a directed acyclic graph (DAG)."),(0,i.kt)("p",null,"Dbt is compatible with ClickHouse through a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/dbt-clickhouse"},"ClickHouse-supported plugin"),". We describe the process for connecting ClickHouse with a simple example based on a publicly available IMDB dataset. We additionally highlight some of the limitations of the current connector."),(0,i.kt)("h1",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"dbt introduces the concept of a model. This is defined as a SQL statement, potentially joining many tables. A model can be \u201cmaterialized\u201d in a number of ways. A materialization represents a build strategy for the model\u2019s select query. The code behind a materialization is boilerplate SQL that wraps your SELECT query in a statement in order to create a new or update an existing relation."),(0,i.kt)("p",null,"dbt provides 4 types of materialization:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"view")," (default): The model is built as a view in the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"table"),": The model is built as a table in the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ephemeral"),": The model is not directly built in the database but is instead pulled into dependent models as common table expressions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"incremental"),": The model is initially materialized as a table, and in subsequent runs, dbt inserts new rows and updates changed rows in the table.")),(0,i.kt)("p",null,"Additional syntax and clauses define how these models should be updated if their underlying data changes. dbt generally recommends starting with the view materialization until performance becomes a concern. The table materialization provides a query time performance improvement by capturing the results of the model\u2019s query as a table at the expense of increased storage. The incremental approach builds on this further to allow subsequent updates to the underlying data to be captured in the target table."),(0,i.kt)("p",null,"The",(0,i.kt)("a",{parentName:"p",href:"https://github.com/silentsokolov/dbt-clickhouse"}," current plugin")," for ClickHouse supports the ",(0,i.kt)("strong",{parentName:"p"},"view"),", ",(0,i.kt)("strong",{parentName:"p"},"table,")," and ",(0,i.kt)("strong",{parentName:"p"},"incremental")," materializations. Ephemeral is not supported. The plugin also supports dbt",(0,i.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/snapshots#check-strategy"}," snapshots")," and",(0,i.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/seeds"}," seeds")," which we explore in this guide."),(0,i.kt)("p",null,"For the following guides, we assume you have a ClickHouse instance available."))}b.isMDXComponent=!0}}]);