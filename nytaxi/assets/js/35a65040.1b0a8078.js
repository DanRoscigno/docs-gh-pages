"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34186],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13557:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={},u="\u914d\u989d",l={unversionedId:"zh/operations/quotas",id:"zh/operations/quotas",title:"\u914d\u989d",description:"quotas}",source:"@site/docs/zh/operations/quotas.md",sourceDirName:"zh/operations",slug:"/zh/operations/quotas",permalink:"/docs-gh-pages/nytaxi/zh/operations/quotas",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/quotas.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u67e5\u8be2\u5206\u6790",permalink:"/docs-gh-pages/nytaxi/zh/operations/optimizing-performance/sampling-query-profiler"},next:{title:"\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570",permalink:"/docs-gh-pages/nytaxi/zh/operations/server-configuration-parameters/"}},c={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quotas"},"\u914d\u989d"),(0,a.kt)("p",null,"\u914d\u989d\u5141\u8bb8\u60a8\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u9650\u5236\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u6216\u8005\u53ea\u662f\u8ddf\u8e2a\u8d44\u6e90\u7684\u4f7f\u7528\u3002\n\u914d\u989d\u5728\u7528\u6237\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u3002 \u8fd9\u901a\u5e38\u662f \u2018users.xml\u2019."),(0,a.kt)("p",null,"The system also has a feature for limiting the complexity of a single query. See the section \xabRestrictions on query complexity\xbb)."),(0,a.kt)("p",null,"\u4e0e\u67e5\u8be2\u590d\u6742\u6027\u9650\u5236\u76f8\u6bd4\uff0c\u914d\u989d:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u53ef\u4ee5\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u8fd0\u884c\u7684\u4e00\u7ec4\u67e5\u8be2\u8bbe\u7f6e\u9650\u5236\uff0c\u800c\u4e0d\u662f\u9650\u5236\u5355\u4e2a\u67e5\u8be2\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5360\u7528\u5728\u6240\u6709\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7528\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\u7684\u8d44\u6e90\u3002")),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u770b\u7684\u90e8\u5206 \u2018users.xml\u2019 \u5b9a\u4e49\u914d\u989d\u7684\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Quotas --\x3e\n<quotas>\n    \x3c!-- Quota name. --\x3e\n    <default>\n        \x3c!-- Restrictions for a time period. You can set many intervals with different restrictions. --\x3e\n        <interval>\n            \x3c!-- Length of the interval. --\x3e\n            <duration>3600</duration>\n\n            \x3c!-- Unlimited. Just collect data for the specified time interval. --\x3e\n            <queries>0</queries>\n            <errors>0</errors>\n            <result_rows>0</result_rows>\n            <read_rows>0</read_rows>\n            <execution_time>0</execution_time>\n        </interval>\n    </default>\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u914d\u989d\u53ea\u8ddf\u8e2a\u6bcf\u5c0f\u65f6\u7684\u8d44\u6e90\u6d88\u8017\uff0c\u800c\u4e0d\u9650\u5236\u4f7f\u7528\u60c5\u51b5\u3002\n\u6bcf\u6b21\u8bf7\u6c42\u540e\uff0c\u8ba1\u7b97\u51fa\u7684\u6bcf\u4e2a\u65f6\u95f4\u95f4\u9694\u7684\u8d44\u6e90\u6d88\u8017\u5c06\u8f93\u51fa\u5230\u670d\u52a1\u5668\u65e5\u5fd7\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<statbox>\n    \x3c!-- Restrictions for a time period. You can set many intervals with different restrictions. --\x3e\n    <interval>\n        \x3c!-- Length of the interval. --\x3e\n        <duration>3600</duration>\n\n        <queries>1000</queries>\n        <errors>100</errors>\n        <result_rows>1000000000</result_rows>\n        <read_rows>100000000000</read_rows>\n        <execution_time>900</execution_time>\n    </interval>\n\n    <interval>\n        <duration>86400</duration>\n\n        <queries>10000</queries>\n        <errors>1000</errors>\n        <result_rows>5000000000</result_rows>\n        <read_rows>500000000000</read_rows>\n        <execution_time>7200</execution_time>\n    </interval>\n</statbox>\n")),(0,a.kt)("p",null,"\u4e3a \u2018statbox\u2019 \u914d\u989d\uff0c\u9650\u5236\u8bbe\u7f6e\u4e3a\u6bcf\u5c0f\u65f6\u548c\u6bcf24\u5c0f\u65f6\uff0886,400\u79d2\uff09\u3002 \u65f6\u95f4\u95f4\u9694\u4ece\u5b9e\u73b0\u5b9a\u4e49\u7684\u56fa\u5b9a\u65f6\u523b\u5f00\u59cb\u8ba1\u6570\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c24\u5c0f\u65f6\u95f4\u9694\u4e0d\u4e00\u5b9a\u4ece\u5348\u591c\u5f00\u59cb\u3002"),(0,a.kt)("p",null,"\u95f4\u9694\u7ed3\u675f\u65f6\uff0c\u5c06\u6e05\u9664\u6240\u6709\u6536\u96c6\u7684\u503c\u3002 \u5728\u4e0b\u4e00\u4e2a\u5c0f\u65f6\u5185\uff0c\u914d\u989d\u8ba1\u7b97\u5c06\u91cd\u65b0\u5f00\u59cb\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u53ef\u4ee5\u9650\u5236\u7684\u91d1\u989d:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"queries")," \u2013 The total number of requests."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"errors")," \u2013 The number of queries that threw an exception."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"result_rows")," \u2013 The total number of rows given as the result."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"read_rows")," \u2013 The total number of source rows read from tables for running the query, on all remote servers."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"execution_time")," \u2013 The total query execution time, in seconds (wall time)."),(0,a.kt)("p",null,"\u5982\u679c\u5728\u81f3\u5c11\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694\u5185\u8d85\u51fa\u9650\u5236\uff0c\u5219\u4f1a\u5f15\u53d1\u5f02\u5e38\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5173\u8d85\u51fa\u4e86\u54ea\u4e2a\u9650\u5236\u3001\u54ea\u4e2a\u65f6\u95f4\u95f4\u9694\u4ee5\u53ca\u65b0\u65f6\u95f4\u95f4\u9694\u5f00\u59cb\u65f6\uff08\u4f55\u65f6\u53ef\u4ee5\u518d\u6b21\u53d1\u9001\u67e5\u8be2\uff09\u7684\u6587\u672c\u3002"),(0,a.kt)("p",null,"Quotas can use the \xabquota key\xbb feature in order to report on resources for multiple keys independently. Here is an example of this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- For the global reports designer. --\x3e\n<web_global>\n    \x3c!-- keyed \u2013 The quota_key "key" is passed in the query parameter,\n            and the quota is tracked separately for each key value.\n        For example, you can pass a Yandex.Metrica username as the key,\n            so the quota will be counted separately for each username.\n        Using keys makes sense only if quota_key is transmitted by the program, not by a user.\n\n        You can also write <keyed_by_ip /> so the IP address is used as the quota key.\n        (But keep in mind that users can change the IPv6 address fairly easily.)\n    --\x3e\n    <keyed />\n')),(0,a.kt)("p",null,"\u914d\u989d\u5206\u914d\u7ed9\u7528\u6237 \u2018users\u2019 section of the config. See the section \xabAccess rights\xbb."),(0,a.kt)("p",null,"For distributed query processing, the accumulated amounts are stored on the requestor server. So if the user goes to another server, the quota there will \xabstart over\xbb."),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u91cd\u65b0\u542f\u52a8\u65f6\uff0c\u5c06\u91cd\u7f6e\u914d\u989d\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/quotas/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);