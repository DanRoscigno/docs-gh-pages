"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80342],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59793:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:62,sidebar_label:"\u5bf9\u8bbe\u7f6e\u7684\u9650\u5236"},p="\u5bf9\u8bbe\u7f6e\u7684\u9650\u5236",c={unversionedId:"zh/operations/settings/constraints-on-settings",id:"zh/operations/settings/constraints-on-settings",title:"\u5bf9\u8bbe\u7f6e\u7684\u9650\u5236",description:"constraints-on-settings}",source:"@site/docs/zh/operations/settings/constraints-on-settings.md",sourceDirName:"zh/operations/settings",slug:"/zh/operations/settings/constraints-on-settings",permalink:"/docs-gh-pages/up/zh/operations/settings/constraints-on-settings",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/settings/constraints-on-settings.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:62,sidebar_label:"\u5bf9\u8bbe\u7f6e\u7684\u9650\u5236"},sidebar:"chinese",previous:{title:"\u8bbe\u7f6e\u914d\u7f6e",permalink:"/docs-gh-pages/up/zh/operations/settings/settings-profiles"},next:{title:"\u7528\u6237\u8bbe\u7f6e",permalink:"/docs-gh-pages/up/zh/operations/settings/settings-users"}},l={},m=[],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"constraints-on-settings"},"\u5bf9\u8bbe\u7f6e\u7684\u9650\u5236"),(0,o.kt)("p",null,"\u5728\u8bbe\u7f6e\u7684\u7ea6\u675f\u53ef\u4ee5\u5728\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"p"},"profiles")," \u4e00\u8282 ",(0,o.kt)("inlineCode",{parentName:"p"},"user.xml")," \u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u7981\u6b62\u7528\u6237\u66f4\u6539\u4e00\u4e9b\u8bbe\u7f6e\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"SET")," \u67e5\u8be2\u3002\n\u7ea6\u675f\u5b9a\u4e49\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <user_name>\n    <constraints>\n      <setting_name_1>\n        <min>lower_boundary</min>\n      </setting_name_1>\n      <setting_name_2>\n        <max>upper_boundary</max>\n      </setting_name_2>\n      <setting_name_3>\n        <min>lower_boundary</min>\n        <max>upper_boundary</max>\n      </setting_name_3>\n      <setting_name_4>\n        <readonly/>\n      </setting_name_4>\n    </constraints>\n  </user_name>\n</profiles>\n")),(0,o.kt)("p",null,"\u5982\u679c\u7528\u6237\u8bd5\u56fe\u8fdd\u53cd\u7ea6\u675f\uff0c\u5c06\u5f15\u53d1\u5f02\u5e38\uff0c\u5e76\u4e14\u8bbe\u7f6e\u4e0d\u4f1a\u66f4\u6539\u3002\n\u652f\u6301\u4e09\u79cd\u7c7b\u578b\u7684\u7ea6\u675f: ",(0,o.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly"),". \u8be5 ",(0,o.kt)("inlineCode",{parentName:"p"},"min")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," \u7ea6\u675f\u6307\u5b9a\u6570\u503c\u8bbe\u7f6e\u7684\u4e0a\u8fb9\u754c\u548c\u4e0b\u8fb9\u754c\uff0c\u5e76\u4e14\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u3002 \u8be5 ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly")," constraint\u6307\u5b9a\u7528\u6237\u6839\u672c\u65e0\u6cd5\u66f4\u6539\u76f8\u5e94\u7684\u8bbe\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b:")," \u8ba9 ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml")," \u5305\u62ec\u884c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <default>\n    <max_memory_usage>10000000000</max_memory_usage>\n    <force_index_by_date>0</force_index_by_date>\n    ...\n    <constraints>\n      <max_memory_usage>\n        <min>5000000000</min>\n        <max>20000000000</max>\n      </max_memory_usage>\n      <force_index_by_date>\n        <readonly/>\n      </force_index_by_date>\n    </constraints>\n  </default>\n</profiles>\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u67e5\u8be2\u90fd\u4f1a\u5f15\u53d1\u5f02\u5e38:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET max_memory_usage=20000000001;\nSET max_memory_usage=4999999999;\nSET force_index_by_date=1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Code: 452, e.displayText() = DB::Exception: Setting max_memory_usage should not be greater than 20000000000.\nCode: 452, e.displayText() = DB::Exception: Setting max_memory_usage should not be less than 5000000000.\nCode: 452, e.displayText() = DB::Exception: Setting force_index_by_date should not be changed.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8:")," \u8be5 ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," \u914d\u7f6e\u6587\u4ef6\u5177\u6709\u7279\u6b8a\u7684\u5904\u7406\uff1a\u6240\u6709\u5b9a\u4e49\u7684\u7ea6\u675f ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," \u914d\u7f6e\u6587\u4ef6\u6210\u4e3a\u9ed8\u8ba4\u7ea6\u675f\uff0c\u56e0\u6b64\u5b83\u4eec\u9650\u5236\u6240\u6709\u7528\u6237\uff0c\u76f4\u5230\u4e3a\u8fd9\u4e9b\u7528\u6237\u663e\u5f0f\u590d\u76d6\u5b83\u4eec\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/constraints_on_settings/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);