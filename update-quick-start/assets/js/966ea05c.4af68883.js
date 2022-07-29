"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[74588],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(b,a(a({ref:t},d),{},{components:n})):o.createElement(b,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],c={sidebar_label:"Connecting to ClickHouse",sidebar_position:3,description:"Connecting dbt to ClickHouse"},s="Connecting ClickHouse",l={unversionedId:"en/integrations/dbt/dbt-connecting",id:"en/integrations/dbt/dbt-connecting",title:"Connecting ClickHouse",description:"Connecting dbt to ClickHouse",source:"@site/docs/en/integrations/dbt/dbt-connecting.md",sourceDirName:"en/integrations/dbt",slug:"/en/integrations/dbt/dbt-connecting",permalink:"/docs-gh-pages/update-quick-start/en/integrations/dbt/dbt-connecting",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/dbt/dbt-connecting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Connecting to ClickHouse",sidebar_position:3,description:"Connecting dbt to ClickHouse"},sidebar:"english",previous:{title:"Setup",permalink:"/docs-gh-pages/update-quick-start/en/integrations/dbt/dbt-setup"},next:{title:"View Materializations",permalink:"/docs-gh-pages/update-quick-start/en/integrations/dbt/dbt-view-model"}},d={},p=[],u={toc:p};function m(e){var t=e.components,c=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-clickhouse"},"Connecting ClickHouse"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a dbt project. In this case we name this after our imdb source. When prompted, select ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse")," as the database source."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-user@clickhouse:~$ dbt init imdb\n\n16:52:40  Running with dbt=1.1.0\nWhich database would you like to use?\n[1] clickhouse\n\n(Don\'t see the one you want? https://docs.getdbt.com/docs/available-adapters)\n\nEnter a number: 1\n16:53:21  No sample profile found for clickhouse.\n16:53:21\nYour new dbt project "imdb" was created!\n\nFor more information on how to configure the profiles.yml file,\nplease consult the dbt documentation here:\n\nhttps://docs.getdbt.com/docs/configure-your-profile\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into your project folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd imdb\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At this point, you will need the text editor of your choice. In the examples below, we use the popular VSCode. Opening the IMDB directory, you should see a collection of yml and sql files:"),(0,r.kt)("img",{src:n(79433).Z,class:"image",alt:"New dbt project",style:{width:"100%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," file to specify our first model - ",(0,r.kt)("inlineCode",{parentName:"p"},"actor_summary")," and set profile to ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse_imdb"),"."),(0,r.kt)("img",{src:n(88298).Z,class:"image",alt:"dbt profile",style:{width:"100%"}}),(0,r.kt)("img",{src:n(31125).Z,class:"image",alt:"dbt profile",style:{width:"100%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We next need to provide dbt with the connection details for our ClickHouse instance. Add the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.dbt/profiles.yml"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"clickhouse_imdb:\n  target: dev\n  outputs:\n    dev:\n      type: clickhouse\n      schema: imdb_dbt\n      host: localhost\n      port: 8123\n      user: default\n      password: ''\n      secure: False\n")),(0,r.kt)("p",{parentName:"li"},"Note the need to modify the user and password. There are additional available settings documented",(0,r.kt)("a",{parentName:"p",href:"https://github.com/silentsokolov/dbt-clickhouse#example-profile"}," here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the IMDB directory, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt debug")," command to confirm whether dbt is able to connect to ClickHouse."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-user@clickhouse:~/imdb$ dbt debug\n17:33:53  Running with dbt=1.1.0\ndbt version: 1.1.0\npython version: 3.10.1\npython path: /home/dale/.pyenv/versions/3.10.1/bin/python3.10\nos info: Linux-5.13.0-10039-tuxedo-x86_64-with-glibc2.31\nUsing profiles.yml file at /home/dale/.dbt/profiles.yml\nUsing dbt_project.yml file at /opt/dbt/imdb/dbt_project.yml\n\nConfiguration:\nprofiles.yml file [OK found and valid]\ndbt_project.yml file [OK found and valid]\n\nRequired dependencies:\n- git [OK found]\n\nConnection:\nhost: localhost\nport: 8123\nuser: default\nschema: imdb_dbt\nsecure: False\nverify: False\nConnection test: [OK connection ok]\n\nAll checks passed!\n")),(0,r.kt)("p",{parentName:"li"},"Confirm the response includes ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection test: [OK connection ok]")," indicating a successful connection."))))}m.isMDXComponent=!0},79433:function(e,t,n){t.Z=n.p+"assets/images/dbt_02-8318d15ea0eafec005a86dbacfbe4d58.png"},88298:function(e,t,n){t.Z=n.p+"assets/images/dbt_03-b9c1ccc74eae7f23956f59dc8c9c79ab.png"},31125:function(e,t,n){t.Z=n.p+"assets/images/dbt_04-e9de140479a78612317ccd005190c381.png"}}]);