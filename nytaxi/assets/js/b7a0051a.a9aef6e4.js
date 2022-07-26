"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[52643],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return y}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),y=r,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29991:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={sidebar_position:51,sidebar_label:"LowCardinality"},s="LowCardinality",p={unversionedId:"ru/sql-reference/data-types/lowcardinality",id:"ru/sql-reference/data-types/lowcardinality",title:"LowCardinality",description:"lowcardinality-data-type}",source:"@site/docs/ru/sql-reference/data-types/lowcardinality.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/lowcardinality",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/lowcardinality",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/lowcardinality.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,sidebar_label:"LowCardinality"},sidebar:"russia",previous:{title:"Enum",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/enum"},next:{title:"Array(T)",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/array"}},c={},u=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"lowcardinality-syntax",level:2},{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"lowcardinality-dscr",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0438-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435-\u0442\u0430\u043a\u0436\u0435",level:2}],d={toc:u};function y(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lowcardinality-data-type"},"LowCardinality"),(0,i.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u044f \u0438\u0445 \u0432 \u0442\u0438\u043f \u0441\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u043d\u044b\u043c \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c."),(0,i.kt)("h2",{id:"lowcardinality-syntax"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LowCardinality(data_type)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_type")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/string"},"String"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/date"},"Date"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/datetime"},"DateTime")," \u0438 \u0447\u0438\u0441\u043b\u0430 \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u0438\u043f\u0430 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/decimal"},"Decimal"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"LowCardinality")," \u043d\u0435\u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u0435\u043d \u0434\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u043c. \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings#allow_suspicious_low_cardinality_types"},"allow_suspicious_low_cardinality_types"),".")),(0,i.kt)("h2",{id:"lowcardinality-dscr"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u2014 \u044d\u0442\u043e \u043d\u0430\u0434\u0441\u0442\u0440\u043e\u0439\u043a\u0430, \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0449\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. ClickHouse \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dictionary_coder"},"\u0441\u043b\u043e\u0432\u0430\u0440\u043d\u043e\u0435 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")," \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality"),". \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0432 \u0441\u043b\u043e\u0432\u0430\u0440\u043d\u043e\u043c \u0432\u0438\u0434\u0435, \u043c\u043e\u0436\u0435\u0442 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/statements/select/"},"SELECT")," \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439."),(0,i.kt)("p",null,"\u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u0415\u0441\u043b\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043c\u0435\u043d\u0435\u0435 10 000 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, ClickHouse \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u0415\u0441\u043b\u0438 \u0436\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0431\u043e\u043b\u0435\u0435 100 000 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, ClickHouse \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0445\u0443\u0436\u0435, \u0447\u0435\u043c \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u0431\u044b\u0447\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u0432\u043c\u0435\u0441\u0442\u043e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/enum"},"Enum")," \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u0447\u0430\u0441\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0442\u0430\u043a\u0443\u044e \u0436\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c."),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440"},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c\u0438 \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE lc_t\n(\n    `id` UInt16,\n    `strings` LowCardinality(String)\n)\nENGINE = MergeTree()\nORDER BY id\n")),(0,i.kt)("h2",{id:"\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0438-\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},"\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,i.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings#low_cardinality_max_dictionary_size"},"low_cardinality_max_dictionary_size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings#low_cardinality_use_single_dictionary_for_part"},"low_cardinality_use_single_dictionary_for_part")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings#low_cardinality_allow_in_native_format"},"low_cardinality_allow_in_native_format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings#allow_suspicious_low_cardinality_types"},"allow_suspicious_low_cardinality_types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/operations/settings/settings#output-format-arrow-low-cardinality-as-dictionary"},"output_format_arrow_low_cardinality_as_dictionary"))),(0,i.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/functions/type-conversion-functions#tolowcardinality"},"toLowCardinality"))),(0,i.kt)("h2",{id:"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.instana.com/blog/reducing-clickhouse-storage-cost-with-the-low-cardinality-type-lessons-from-an-instana-engineer/"},"Reducing ClickHouse Storage Cost with the Low Cardinality Type \u2013 Lessons from an Instana Engineer"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/rqf-ILRgBdY?list=PL0Z2YDlm0b3iwXCpEFiOOYmwXzVmjJfEt"},"String Optimization (video presentation in Russian)"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-presentations/raw/master/meetup19/string_optimization.pdf"},"Slides in English"),".")))}y.isMDXComponent=!0}}]);