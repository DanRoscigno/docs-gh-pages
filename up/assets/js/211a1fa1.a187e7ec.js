"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[63107],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,b=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_label:"Table Materializations",sidebar_position:5,description:"Table materializations with dbt and ClickHouse"},l=void 0,m={unversionedId:"en/integrations/dbt/dbt-table-model",id:"en/integrations/dbt/dbt-table-model",title:"dbt-table-model",description:"Table materializations with dbt and ClickHouse",source:"@site/docs/en/integrations/dbt/dbt-table-model.md",sourceDirName:"en/integrations/dbt",slug:"/en/integrations/dbt/dbt-table-model",permalink:"/docs-gh-pages/up/en/integrations/dbt/dbt-table-model",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/dbt/dbt-table-model.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Table Materializations",sidebar_position:5,description:"Table materializations with dbt and ClickHouse"},sidebar:"english",previous:{title:"View Materializations",permalink:"/docs-gh-pages/up/en/integrations/dbt/dbt-view-model"},next:{title:"Incremental Materializations",permalink:"/docs-gh-pages/up/en/integrations/dbt/dbt-incremental-model"}},c={},d=[{value:"Creating a Table Materialization",id:"creating-a-table-materialization",level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creating-a-table-materialization"},"Creating a Table Materialization"),(0,i.kt)("p",null,"In the previous example, our model was materialized as a view. While this might offer sufficient performance for some queries, more complex SELECTs or frequently executed queries may be better materialized as a table.  This materialization is useful for models that will be queried by BI tools to ensure users have a faster experience. This effectively causes the query results to be stored as a new table, with the associated storage overheads - effectively, an ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT TO SELECT")," is executed. Note that this table will be reconstructed each time i.e., it is not incremental. Large result sets may therefore result in long execution times - see ",(0,i.kt)("a",{parentName:"p",href:"./dbt-limitations"},"dbt Limitations"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the file ",(0,i.kt)("inlineCode",{parentName:"p"},"actors_summary.sql")," such that the ",(0,i.kt)("inlineCode",{parentName:"p"},"materialized")," parameter is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"table"),". Notice how ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," is defined, and notice we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," table engine:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"{{ config(order_by='(updated_at, id, name)', engine='MergeTree()', materialized='table') }}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"imdb")," directory execute the command ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt run"),". This execution may take a little longer to execute - around 10s on most machines."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-user@clickhouse:~/imdb$ dbt run\n15:13:27  Running with dbt=1.1.0\n15:13:27  Found 1 model, 0 tests, 1 snapshot, 0 analyses, 181 macros, 0 operations, 0 seed files, 6 sources, 0 exposures, 0 metrics\n15:13:27\n15:13:28  Concurrency: 1 threads (target='dev')\n15:13:28\n15:13:28  1 of 1 START table model imdb_dbt.actor_summary................................. [RUN]\n15:13:37  1 of 1 OK created table model imdb_dbt.actor_summary............................ [OK in 9.22s]\n15:13:37\n15:13:37  Finished running 1 table model in 10.20s.\n15:13:37\n15:13:37  Completed successfully\n15:13:37\n15:13:37  Done. PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm the creation of the table ",(0,i.kt)("inlineCode",{parentName:"p"},"imdb_dbt.actor_summary"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE imdb_dbt.actor_summary;\n")),(0,i.kt)("p",{parentName:"li"},"You should the table with the appropriate data types:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"+----------------------------------------\n|statement\n+----------------------------------------\n|CREATE TABLE imdb_dbt.actor_summary\n|(\n|`id` UInt32,\n|`first_name` String,\n|`last_name` String,\n|`num_movies` UInt64,\n|`updated_at` DateTime\n|)\n|ENGINE = MergeTree\n|ORDER BY (id, first_name, last_name)\n|SETTINGS index_granularity = 8192\n+----------------------------------------\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm the results from this table are consistent with previous responses. Notice an appreciable improvement in the response time now that the model is a table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM imdb_dbt.actor_summary ORDER BY num_movies DESC LIMIT 5;\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"+------+------------+----------+------------------+------+---------+-------------------+\n|id    |name        |num_movies|avg_rank          |genres|directors|updated_at         |\n+------+------------+----------+------------------+------+---------+-------------------+\n|45332 |Mel Blanc   |832       |6.175853582979779 |18    |84       |2022-04-26 15:26:55|\n|621468|Bess Flowers|659       |5.57727638854796  |19    |293      |2022-04-26 15:26:57|\n|372839|Lee Phelps  |527       |5.032976449684617 |18    |261      |2022-04-26 15:26:56|\n|283127|Tom London  |525       |2.8721716524875673|17    |203      |2022-04-26 15:26:56|\n|356804|Bud Osborne |515       |2.0389507108727773|15    |149      |2022-04-26 15:26:56|\n+------+------------+----------+------------------+------+---------+-------------------+\n")),(0,i.kt)("p",{parentName:"li"},"Feel free to issue other queries against this model. For example, which actors have the highest ranking movies with more than 5 appearances?"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM imdb_dbt.actor_summary WHERE num_movies > 5 ORDER BY avg_rank  DESC LIMIT 10;\n")))))}u.isMDXComponent=!0}}]);