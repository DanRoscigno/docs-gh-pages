"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15904],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(o,".").concat(k)]||d[k]||p[k]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={},o="JSON\u51fd\u6570",c={unversionedId:"zh/sql-reference/functions/json-functions",id:"zh/sql-reference/functions/json-functions",title:"JSON\u51fd\u6570",description:"jsonhan-shu}",source:"@site/docs/zh/sql-reference/functions/json-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/json-functions",permalink:"/docs-gh-pages/up/zh/sql-reference/functions/json-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/json-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"IP\u51fd\u6570",permalink:"/docs-gh-pages/up/zh/sql-reference/functions/ip-address-functions"},next:{title:"\u673a\u5668\u5b66\u4e60\u51fd\u6570",permalink:"/docs-gh-pages/up/zh/sql-reference/functions/machine-learning-functions"}},u={},p=[{value:"visitParamHas(\u53c2\u6570\uff0c\u540d\u79f0)",id:"visitparamhasparams-name",level:2},{value:"visitParamExtractUInt(\u53c2\u6570\uff0c\u540d\u79f0)",id:"visitparamextractuintparams-name",level:2},{value:"visitParamExtractInt(\u53c2\u6570\uff0c\u540d\u79f0)",id:"visitparamextractintparams-name",level:2},{value:"visitParamExtractFloat(\u53c2\u6570\uff0c\u540d\u79f0)",id:"visitparamextractfloatparams-name",level:2},{value:"visitParamExtractBool(\u53c2\u6570\uff0c\u540d\u79f0)",id:"visitparamextractboolparams-name",level:2},{value:"visitParamExtractRaw(\u53c2\u6570\uff0c\u540d\u79f0)",id:"visitparamextractrawparams-name",level:2},{value:"visitParamExtractString(\u53c2\u6570\uff0c\u540d\u79f0)",id:"visitparamextractstringparams-name",level:2},{value:"JSONHas(json[, indices_or_keys]\u2026)",id:"jsonhasjson-indices-or-keys",level:2},{value:"JSONLength(json[, indices_or_keys]\u2026)",id:"jsonlengthjson-indices-or-keys",level:2},{value:"JSONType(json[, indices_or_keys]\u2026)",id:"jsontypejson-indices-or-keys",level:2},{value:"JSONExtractUInt(json[, indices_or_keys]\u2026)",id:"jsonextractuintjson-indices-or-keys",level:2},{value:"JSONExtractInt(json[, indices_or_keys]\u2026)",id:"jsonextractintjson-indices-or-keys",level:2},{value:"JSONExtractFloat(json[, indices_or_keys]\u2026)",id:"jsonextractfloatjson-indices-or-keys",level:2},{value:"JSONExtractBool(json[, indices_or_keys]\u2026)",id:"jsonextractbooljson-indices-or-keys",level:2},{value:"JSONExtractString(json[, indices_or_keys]\u2026)",id:"jsonextractstringjson-indices-or-keys",level:2},{value:"JSONExtract(json[, indices_or_keys\u2026], Return_type)",id:"jsonextractjson-indices-or-keys-return-type",level:2},{value:"JSONExtractKeysAndValues(json[, indices_or_keys\u2026], Value_type)",id:"jsonextractkeysandvaluesjson-indices-or-keys-value-type",level:2},{value:"JSONExtractRaw(json[, indices_or_keys]\u2026)",id:"jsonextractrawjson-indices-or-keys",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jsonhan-shu"},"JSON\u51fd\u6570"),(0,i.kt)("p",null,"\u5728Yandex.Metrica\u4e2d\uff0c\u7528\u6237\u4f7f\u7528JSON\u4f5c\u4e3a\u8bbf\u95ee\u53c2\u6570\u3002\u4e3a\u4e86\u5904\u7406\u8fd9\u4e9bJSON\uff0c\u5b9e\u73b0\u4e86\u4e00\u4e9b\u51fd\u6570\u3002\uff08\u5c3d\u7ba1\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cJSON\u662f\u9884\u5148\u8fdb\u884c\u989d\u5916\u5904\u7406\u7684\uff0c\u5e76\u5c06\u7ed3\u679c\u503c\u653e\u5728\u5355\u72ec\u7684\u5217\u4e2d\u3002\uff09\u6240\u6709\u7684\u8fd9\u4e9b\u51fd\u6570\u90fd\u8fdb\u884c\u4e86\u5c3d\u53ef\u80fd\u7684\u5047\u8bbe\u3002\u4ee5\u4f7f\u51fd\u6570\u80fd\u591f\u5c3d\u5feb\u7684\u5b8c\u6210\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5bf9JSON\u683c\u5f0f\u505a\u4e86\u5982\u4e0b\u5047\u8bbe\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b57\u6bb5\u540d\u79f0\uff08\u51fd\u6570\u7684\u53c2\u6570\uff09\u5fc5\u987b\u4f7f\u5e38\u91cf\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5b57\u6bb5\u540d\u79f0\u5fc5\u987b\u4f7f\u7528\u89c4\u8303\u7684\u7f16\u7801\u3002\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"visitParamHas('{\"abc\":\"def\"}', 'abc') = 1"),"\uff0c\u4f46\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"visitParamHas('{\"\\\\u0061\\\\u0062\\\\u0063\":\"def\"}', 'abc') = 0")),(0,i.kt)("li",{parentName:"ol"},"\u51fd\u6570\u53ef\u4ee5\u968f\u610f\u7684\u5728\u591a\u5c42\u5d4c\u5957\u7ed3\u6784\u4e0b\u67e5\u627e\u5b57\u6bb5\u3002\u5982\u679c\u5b58\u5728\u591a\u4e2a\u5339\u914d\u5b57\u6bb5\uff0c\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5339\u914d\u5b57\u6bb5\u3002"),(0,i.kt)("li",{parentName:"ol"},"JSON\u9664\u5b57\u7b26\u4e32\u6587\u672c\u5916\u4e0d\u5b58\u5728\u7a7a\u683c\u5b57\u7b26\u3002")),(0,i.kt)("h2",{id:"visitparamhasparams-name"},"visitParamHas(\u53c2\u6570\uff0c\u540d\u79f0)"),(0,i.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u5b58\u5728\xabname\xbb\u540d\u79f0\u7684\u5b57\u6bb5"),(0,i.kt)("h2",{id:"visitparamextractuintparams-name"},"visitParamExtractUInt(\u53c2\u6570\uff0c\u540d\u79f0)"),(0,i.kt)("p",null,"\u5c06\u540d\u4e3a\xabname\xbb\u7684\u5b57\u6bb5\u7684\u503c\u89e3\u6790\u6210UInt64\u3002\u5982\u679c\u8fd9\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u5b57\u6bb5\uff0c\u51fd\u6570\u5c06\u5c1d\u8bd5\u4ece\u5b57\u7b26\u4e32\u7684\u5f00\u5934\u89e3\u6790\u4e00\u4e2a\u6570\u5b57\u3002\u5982\u679c\u8be5\u5b57\u6bb5\u4e0d\u5b58\u5728\uff0c\u6216\u65e0\u6cd5\u4ece\u5b83\u4e2d\u89e3\u6790\u5230\u6570\u5b57\uff0c\u5219\u8fd4\u56de0\u3002"),(0,i.kt)("h2",{id:"visitparamextractintparams-name"},"visitParamExtractInt(\u53c2\u6570\uff0c\u540d\u79f0)"),(0,i.kt)("p",null,"\u4e0evisitParamExtractUInt\u76f8\u540c\uff0c\u4f46\u8fd4\u56deInt64\u3002"),(0,i.kt)("h2",{id:"visitparamextractfloatparams-name"},"visitParamExtractFloat(\u53c2\u6570\uff0c\u540d\u79f0)"),(0,i.kt)("p",null,"\u4e0evisitParamExtractUInt\u76f8\u540c\uff0c\u4f46\u8fd4\u56deFloat64\u3002"),(0,i.kt)("h2",{id:"visitparamextractboolparams-name"},"visitParamExtractBool(\u53c2\u6570\uff0c\u540d\u79f0)"),(0,i.kt)("p",null,"\u89e3\u6790true/false\u503c\u3002\u5176\u7ed3\u679c\u662fUInt8\u7c7b\u578b\u7684\u3002"),(0,i.kt)("h2",{id:"visitparamextractrawparams-name"},"visitParamExtractRaw(\u53c2\u6570\uff0c\u540d\u79f0)"),(0,i.kt)("p",null,"\u8fd4\u56de\u5b57\u6bb5\u7684\u503c\uff0c\u5305\u542b\u7a7a\u683c\u7b26\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"visitParamExtractRaw('{\"abc\":\"\\\\n\\\\u0000\"}', 'abc') = '\"\\\\n\\\\u0000\"'\nvisitParamExtractRaw('{\"abc\":{\"def\":[1,2,3]}}', 'abc') = '{\"def\":[1,2,3]}'\n")),(0,i.kt)("h2",{id:"visitparamextractstringparams-name"},"visitParamExtractString(\u53c2\u6570\uff0c\u540d\u79f0)"),(0,i.kt)("p",null,"\u4f7f\u7528\u53cc\u5f15\u53f7\u89e3\u6790\u5b57\u7b26\u4e32\u3002\u8fd9\u4e2a\u503c\u6ca1\u6709\u8fdb\u884c\u8f6c\u4e49\u3002\u5982\u679c\u8f6c\u4e49\u5931\u8d25\uff0c\u5b83\u5c06\u8fd4\u56de\u4e00\u4e2a\u7a7a\u767d\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"visitParamExtractString('{\"abc\":\"\\\\n\\\\u0000\"}', 'abc') = '\\n\\0'\nvisitParamExtractString('{\"abc\":\"\\\\u263a\"}', 'abc') = '\u263a'\nvisitParamExtractString('{\"abc\":\"\\\\u263\"}', 'abc') = ''\nvisitParamExtractString('{\"abc\":\"hello}', 'abc') = ''\n")),(0,i.kt)("p",null,"\u76ee\u524d\u4e0d\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"\\uXXXX\\uYYYY"),"\u8fd9\u4e9b\u5b57\u7b26\u7f16\u7801\uff0c\u8fd9\u4e9b\u7f16\u7801\u4e0d\u5728\u57fa\u672c\u591a\u6587\u79cd\u5e73\u9762\u4e2d\uff08\u5b83\u4eec\u88ab\u8f6c\u5316\u4e3aCESU-8\u800c\u4e0d\u662fUTF-8\uff09\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u51fd\u6570\u57fa\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lemire/simdjson"},"simdjson"),"\uff0c\u4e13\u4e3a\u66f4\u590d\u6742\u7684JSON\u89e3\u6790\u8981\u6c42\u800c\u8bbe\u8ba1\u3002\u4f46\u4e0a\u8ff0\u5047\u8bbe2\u4ecd\u7136\u9002\u7528\u3002"),(0,i.kt)("h2",{id:"jsonhasjson-indices-or-keys"},"JSONHas(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("p",null,"\u5982\u679cJSON\u4e2d\u5b58\u5728\u8be5\u503c\uff0c\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8be5\u503c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'select JSONHas(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\') = 1\nselect JSONHas(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\', 4) = 0\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"indices_or_keys"),"\u53ef\u4ee5\u662f\u96f6\u4e2a\u6216\u591a\u4e2a\u53c2\u6570\u7684\u5217\u8868\uff0c\u6bcf\u4e2a\u53c2\u6570\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u6574\u6570\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"String = \u6309\u6210\u5458\u540d\u79f0\u8bbf\u95eeJSON\u5bf9\u8c61\u6210\u5458\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6b63\u6574\u6570 = \u4ece\u5934\u5f00\u59cb\u8bbf\u95ee\u7b2cn\u4e2a\u6210\u5458/\u6210\u5458\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8d1f\u6574\u6570 = \u4ece\u672b\u5c3e\u8bbf\u95ee\u7b2cn\u4e2a\u6210\u5458/\u6210\u5458\u540d\u79f0\u3002")),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u6574\u6570\u6765\u8bbf\u95eeJSON\u6570\u7ec4\u548cJSON\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'select JSONExtractKey(\'{"a": "hello", "b": [-100, 200.0, 300]}\', 1) = \'a\'\nselect JSONExtractKey(\'{"a": "hello", "b": [-100, 200.0, 300]}\', 2) = \'b\'\nselect JSONExtractKey(\'{"a": "hello", "b": [-100, 200.0, 300]}\', -1) = \'b\'\nselect JSONExtractKey(\'{"a": "hello", "b": [-100, 200.0, 300]}\', -2) = \'a\'\nselect JSONExtractString(\'{"a": "hello", "b": [-100, 200.0, 300]}\', 1) = \'hello\'\n')),(0,i.kt)("h2",{id:"jsonlengthjson-indices-or-keys"},"JSONLength(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("p",null,"\u8fd4\u56deJSON\u6570\u7ec4\u6216JSON\u5bf9\u8c61\u7684\u957f\u5ea6\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8be5\u503c\u4e0d\u5b58\u5728\u6216\u7c7b\u578b\u9519\u8bef\uff0c\u5c06\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'select JSONLength(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\') = 3\nselect JSONLength(\'{"a": "hello", "b": [-100, 200.0, 300]}\') = 2\n')),(0,i.kt)("h2",{id:"jsontypejson-indices-or-keys"},"JSONType(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("p",null,"\u8fd4\u56deJSON\u503c\u7684\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8be5\u503c\u4e0d\u5b58\u5728\uff0c\u5c06\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"Null"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'select JSONType(\'{"a": "hello", "b": [-100, 200.0, 300]}\') = \'Object\'\nselect JSONType(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'a\') = \'String\'\nselect JSONType(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\') = \'Array\'\n')),(0,i.kt)("h2",{id:"jsonextractuintjson-indices-or-keys"},"JSONExtractUInt(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("h2",{id:"jsonextractintjson-indices-or-keys"},"JSONExtractInt(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("h2",{id:"jsonextractfloatjson-indices-or-keys"},"JSONExtractFloat(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("h2",{id:"jsonextractbooljson-indices-or-keys"},"JSONExtractBool(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("p",null,"\u89e3\u6790JSON\u5e76\u63d0\u53d6\u503c\u3002\u8fd9\u4e9b\u51fd\u6570\u7c7b\u4f3c\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"visitParam*"),"\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8be5\u503c\u4e0d\u5b58\u5728\u6216\u7c7b\u578b\u9519\u8bef\uff0c\u5c06\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'select JSONExtractInt(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\', 1) = -100\nselect JSONExtractFloat(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\', 2) = 200.0\nselect JSONExtractUInt(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\', -1) = 300\n')),(0,i.kt)("h2",{id:"jsonextractstringjson-indices-or-keys"},"JSONExtractString(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("p",null,"\u89e3\u6790JSON\u5e76\u63d0\u53d6\u5b57\u7b26\u4e32\u3002\u6b64\u51fd\u6570\u7c7b\u4f3c\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"visitParamExtractString"),"\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8be5\u503c\u4e0d\u5b58\u5728\u6216\u7c7b\u578b\u9519\u8bef\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"\u8be5\u503c\u672a\u8f6c\u4e49\u3002\u5982\u679cunescaping\u5931\u8d25\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select JSONExtractString('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'a') = 'hello'\nselect JSONExtractString('{\"abc\":\"\\\\n\\\\u0000\"}', 'abc') = '\\n\\0'\nselect JSONExtractString('{\"abc\":\"\\\\u263a\"}', 'abc') = '\u263a'\nselect JSONExtractString('{\"abc\":\"\\\\u263\"}', 'abc') = ''\nselect JSONExtractString('{\"abc\":\"hello}', 'abc') = ''\n")),(0,i.kt)("h2",{id:"jsonextractjson-indices-or-keys-return-type"},"JSONExtract(json","[",", indices_or_keys\u2026","]",", Return_type)"),(0,i.kt)("p",null,"\u89e3\u6790JSON\u5e76\u63d0\u53d6\u7ed9\u5b9aClickHouse\u6570\u636e\u7c7b\u578b\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u8fd9\u662f\u4ee5\u524d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"JSONExtract<type>\u51fd\u6570\u7684\u53d8\u4f53\u3002 \u8fd9\u610f\u5473\u7740"),"JSONExtract(\u2026, \u2018String\u2019)",(0,i.kt)("inlineCode",{parentName:"p"},"\u8fd4\u56de\u4e0e"),"JSONExtractString()",(0,i.kt)("inlineCode",{parentName:"p"},"\u8fd4\u56de\u5b8c\u5168\u76f8\u540c\u3002"),"JSONExtract(\u2026, \u2018Float64\u2019)",(0,i.kt)("inlineCode",{parentName:"p"},"\u8fd4\u56de\u4e8e"),"JSONExtractFloat()","`","\u8fd4\u56de\u5b8c\u5168\u76f8\u540c\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT JSONExtract('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'Tuple(String, Array(Float64))') = ('hello',[-100,200,300])\nSELECT JSONExtract('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'Tuple(b Array(Float64), a String)') = ([-100,200,300],'hello')\nSELECT JSONExtract('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'b', 'Array(Nullable(Int8))') = [-100, NULL, NULL]\nSELECT JSONExtract('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'b', 4, 'Nullable(Int64)') = NULL\nSELECT JSONExtract('{\"passed\": true}', 'passed', 'UInt8') = 1\nSELECT JSONExtract('{\"day\": \"Thursday\"}', 'day', 'Enum8(\\'Sunday\\' = 0, \\'Monday\\' = 1, \\'Tuesday\\' = 2, \\'Wednesday\\' = 3, \\'Thursday\\' = 4, \\'Friday\\' = 5, \\'Saturday\\' = 6)') = 'Thursday'\nSELECT JSONExtract('{\"day\": 5}', 'day', 'Enum8(\\'Sunday\\' = 0, \\'Monday\\' = 1, \\'Tuesday\\' = 2, \\'Wednesday\\' = 3, \\'Thursday\\' = 4, \\'Friday\\' = 5, \\'Saturday\\' = 6)') = 'Friday'\n")),(0,i.kt)("h2",{id:"jsonextractkeysandvaluesjson-indices-or-keys-value-type"},"JSONExtractKeysAndValues(json","[",", indices_or_keys\u2026","]",", Value_type)"),(0,i.kt)("p",null,"\u4eceJSON\u4e2d\u89e3\u6790\u952e\u503c\u5bf9\uff0c\u5176\u4e2d\u503c\u662f\u7ed9\u5b9a\u7684ClickHouse\u6570\u636e\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT JSONExtractKeysAndValues('{\"x\": {\"a\": 5, \"b\": 7, \"c\": 11}}', 'x', 'Int8') = [('a',5),('b',7),('c',11)];\n")),(0,i.kt)("h2",{id:"jsonextractrawjson-indices-or-keys"},"JSONExtractRaw(json","[",", indices_or_keys","]","\u2026)"),(0,i.kt)("p",null,"\u8fd4\u56deJSON\u7684\u90e8\u5206\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u90e8\u4ef6\u4e0d\u5b58\u5728\u6216\u7c7b\u578b\u9519\u8bef\uff0c\u5c06\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select JSONExtractRaw('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'b') = '[-100, 200.0, 300]'\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/json_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}k.isMDXComponent=!0}}]);