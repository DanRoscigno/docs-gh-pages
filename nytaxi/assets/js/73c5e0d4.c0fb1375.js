"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9525],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,N=m["".concat(u,".").concat(k)]||m[k]||p[k]||l;return n?r.createElement(N,o(o({ref:t},c),{},{components:n})):r.createElement(N,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9314:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={sidebar_position:65,sidebar_label:"clickhouse-format"},u="clickhouse-format",s={unversionedId:"ru/operations/utilities/clickhouse-format",id:"ru/operations/utilities/clickhouse-format",title:"clickhouse-format",description:"clickhouse-format}",source:"@site/docs/ru/operations/utilities/clickhouse-format.md",sourceDirName:"ru/operations/utilities",slug:"/ru/operations/utilities/clickhouse-format",permalink:"/docs-gh-pages/nytaxi/ru/operations/utilities/clickhouse-format",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/utilities/clickhouse-format.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65,sidebar_label:"clickhouse-format"},sidebar:"russia",previous:{title:"clickhouse-benchmark",permalink:"/docs-gh-pages/nytaxi/ru/operations/utilities/clickhouse-benchmark"},next:{title:"clickhouse-compressor",permalink:"/docs-gh-pages/nytaxi/ru/operations/utilities/clickhouse-compressor"}},c={},p=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse-format"},"clickhouse-format"),(0,l.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b."),(0,l.kt)("p",null,"\u041a\u043b\u044e\u0447\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help")," \u0438\u043b\u0438",(0,l.kt)("inlineCode",{parentName:"li"},"-h")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0435\u0439."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--query")," \u2014 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043b\u044e\u0431\u043e\u0439 \u0434\u043b\u0438\u043d\u044b \u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--hilite")," \u2014 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0443 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0441 \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--oneline")," \u2014 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--quiet")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"-q")," \u2014 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0431\u0435\u0437 \u0432\u044b\u0432\u043e\u0434\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--multiquery")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"-n")," \u2014 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--obfuscate")," \u2014 \u043e\u0431\u0444\u0443\u0441\u0446\u0438\u0440\u0443\u0435\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--seed <\u0441\u0442\u0440\u043e\u043a\u0430>")," \u2014 \u0437\u0430\u0434\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043e\u0431\u0444\u0443\u0441\u043a\u0430\u0446\u0438\u0438."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--backslash")," \u2014 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0441\u043b\u0435\u0448 \u0432 \u043a\u043e\u043d\u0446\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0423\u0434\u043e\u0431\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0435\u0441\u043b\u0438 \u043c\u043d\u043e\u0433\u043e\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430 \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \u0438 \u0435\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0438\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438.")),(0,l.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --query "select number from numbers(10) where number%2 order by number desc;"\n')),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT number\nFROM numbers(10)\nWHERE number % 2\nORDER BY number DESC\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u041f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --oneline --hilite <<< "SELECT sum(number) FROM numbers(5);"\n')),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(number) FROM numbers(5)\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format -n <<< "SELECT * FROM (SELECT 1 AS x UNION ALL SELECT 1 UNION DISTINCT SELECT 3);"\n')),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM\n(\n    SELECT 1 AS x\n    UNION ALL\n    SELECT 1\n    UNION DISTINCT\n    SELECT 3\n)\n;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u041e\u0431\u0444\u0443\u0441\u043a\u0430\u0446\u0438\u044f:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --seed Hello --obfuscate <<< "SELECT cost_first_screen BETWEEN a AND b, CASE WHEN x >= 123 THEN y ELSE NULL END;"\n')),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT treasury_mammoth_hazelnut BETWEEN nutmeg AND span, CASE WHEN chive >= 116 THEN switching ELSE ANYTHING END;\n")),(0,l.kt)("p",null,"\u0422\u043e\u0442 \u0436\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0434\u0440\u0443\u0433\u043e\u0439 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --seed World --obfuscate <<< "SELECT cost_first_screen BETWEEN a AND b, CASE WHEN x >= 123 THEN y ELSE NULL END;"\n')),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT horse_tape_summer BETWEEN folklore AND moccasins, CASE WHEN intestine >= 116 THEN nonconformist ELSE FORESTRY END;\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0441\u043b\u0435\u0448\u0430:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --backslash <<< "SELECT * FROM (SELECT 1 AS x UNION ALL SELECT 1 UNION DISTINCT SELECT 3);"\n')),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT * \\\nFROM  \\\n( \\\n    SELECT 1 AS x \\\n    UNION ALL \\\n    SELECT 1 \\\n    UNION DISTINCT \\\n    SELECT 3 \\\n)\n")))}k.isMDXComponent=!0}}]);