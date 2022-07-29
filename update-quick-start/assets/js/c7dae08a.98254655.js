"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[83617],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,m=g["".concat(o,".").concat(d)]||g[d]||u[d]||s;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},67753:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),i=["components"],l={},o="\u7528\u4e8e\u67e5\u8be2\u5904\u7406\u7684\u5916\u90e8\u6570\u636e",c={unversionedId:"zh/engines/table-engines/special/external-data",id:"zh/engines/table-engines/special/external-data",title:"\u7528\u4e8e\u67e5\u8be2\u5904\u7406\u7684\u5916\u90e8\u6570\u636e",description:"external-data-for-query-processing}",source:"@site/docs/zh/engines/table-engines/special/external-data.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/external-data",permalink:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/special/external-data",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/external-data.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u5b57\u5178",permalink:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/special/dictionary"},next:{title:"\u6587\u4ef6(\u8f93\u5165\u683c\u5f0f)",permalink:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/special/file"}},p={},u=[],g={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"external-data-for-query-processing"},"\u7528\u4e8e\u67e5\u8be2\u5904\u7406\u7684\u5916\u90e8\u6570\u636e"),(0,s.kt)("p",null,"ClickHouse \u5141\u8bb8\u5411\u670d\u52a1\u5668\u53d1\u9001\u5904\u7406\u67e5\u8be2\u6240\u9700\u7684\u6570\u636e\u4ee5\u53ca SELECT \u67e5\u8be2\u3002\u8fd9\u4e9b\u6570\u636e\u653e\u5728\u4e00\u4e2a\u4e34\u65f6\u8868\u4e2d\uff08\u8bf7\u53c2\u9605 \xab\u4e34\u65f6\u8868\xbb \u4e00\u8282\uff09\uff0c\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\uff08\u4f8b\u5982\uff0c\u5728 IN \u64cd\u4f5c\u7b26\u4e2d\uff09\u3002"),(0,s.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u5305\u542b\u91cd\u8981\u7528\u6237\u6807\u8bc6\u7b26\u7684\u6587\u672c\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u5c06\u5176\u4e0e\u4f7f\u7528\u6b64\u5217\u8868\u8fc7\u6ee4\u7684\u67e5\u8be2\u4e00\u8d77\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528\u5927\u91cf\u5916\u90e8\u6570\u636e\u8fd0\u884c\u591a\u4e2a\u67e5\u8be2\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u7279\u6027\u3002\u6700\u597d\u63d0\u524d\u628a\u6570\u636e\u4e0a\u4f20\u5230\u6570\u636e\u5e93\u3002"),(0,s.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\uff08\u5728\u975e\u4ea4\u4e92\u6a21\u5f0f\u4e0b\uff09\u6216\u4f7f\u7528 HTTP \u63a5\u53e3\u4e0a\u4f20\u5916\u90e8\u6570\u636e\u3002"),(0,s.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\u4e2d\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u683c\u5f0f\u7684\u53c2\u6570\u90e8\u5206"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"--external --file=... [--name=...] [--format=...] [--types=...|--structure=...]\n")),(0,s.kt)("p",null,"\u5bf9\u4e8e\u4f20\u8f93\u7684\u8868\u7684\u6570\u91cf\uff0c\u53ef\u80fd\u6709\u591a\u4e2a\u8fd9\u6837\u7684\u90e8\u5206\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u2013external")," \u2013 \u6807\u8bb0\u5b50\u53e5\u7684\u5f00\u59cb\u3002\n",(0,s.kt)("strong",{parentName:"p"},"\u2013file")," \u2013 \u5e26\u6709\u8868\u5b58\u50a8\u7684\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u6216\u8005\uff0c\u5b83\u6307\u7684\u662fSTDIN\u3002\n\u53ea\u80fd\u4ece stdin \u4e2d\u68c0\u7d22\u5355\u4e2a\u8868\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u7684\u53c2\u6570\u662f\u53ef\u9009\u7684\uff1a",(0,s.kt)("strong",{parentName:"p"},"\u2013name")," \u2013 \u8868\u7684\u540d\u79f0\uff0c\u5982\u679c\u7701\u7565\uff0c\u5219\u91c7\u7528 _data\u3002\n",(0,s.kt)("strong",{parentName:"p"},"\u2013format")," \u2013 \u6587\u4ef6\u4e2d\u7684\u6570\u636e\u683c\u5f0f\u3002 \u5982\u679c\u7701\u7565\uff0c\u5219\u4f7f\u7528 TabSeparated\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u7684\u53c2\u6570\u5fc5\u9009\u4e00\u4e2a\uff1a",(0,s.kt)("strong",{parentName:"p"},"\u2013types")," \u2013 \u9017\u53f7\u5206\u9694\u5217\u7c7b\u578b\u7684\u5217\u8868\u3002\u4f8b\u5982\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"UInt64,String"),"\u3002\u5217\u5c06\u88ab\u547d\u540d\u4e3a _1\uff0c_2\uff0c\u2026\n",(0,s.kt)("strong",{parentName:"p"},"\u2013structure"),"\u2013 \u8868\u7ed3\u6784\u7684\u683c\u5f0f ",(0,s.kt)("inlineCode",{parentName:"p"},"UserID UInt64"),"\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"URL String"),"\u3002\u5b9a\u4e49\u5217\u7684\u540d\u5b57\u4ee5\u53ca\u7c7b\u578b\u3002"),(0,s.kt)("p",null,"\u5728 \xabfile\xbb \u4e2d\u6307\u5b9a\u7684\u6587\u4ef6\u5c06\u7531 \xabformat\xbb \u4e2d\u6307\u5b9a\u7684\u683c\u5f0f\u89e3\u6790\uff0c\u4f7f\u7528\u5728 \xabtypes\xbb \u6216 \xabstructure\xbb \u4e2d\u6307\u5b9a\u7684\u6570\u636e\u7c7b\u578b\u3002\u8be5\u8868\u5c06\u88ab\u4e0a\u4f20\u5230\u670d\u52a1\u5668\uff0c\u5e76\u5728\u4f5c\u4e3a\u540d\u79f0\u4e3a \xabname\xbb\u4e34\u65f6\u8868\u3002"),(0,s.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'echo -ne "1\\n2\\n3\\n" | clickhouse-client --query="SELECT count() FROM test.visits WHERE TraficSourceID IN _data" --external --file=- --types=Int8\n849897\ncat /etc/passwd | sed \'s/:/\\t/g\' | clickhouse-client --query="SELECT shell, count() AS c FROM passwd GROUP BY shell ORDER BY c DESC" --external --file=- --name=passwd --structure=\'login String, unused String, uid UInt16, gid UInt16, comment String, home String, shell String\'\n/bin/sh 20\n/bin/false      5\n/bin/bash       4\n/usr/sbin/nologin       1\n/bin/sync       1\n')),(0,s.kt)("p",null,"\u5f53\u4f7f\u7528HTTP\u63a5\u53e3\u65f6\uff0c\u5916\u90e8\u6570\u636e\u4ee5 multipart/form-data \u683c\u5f0f\u4f20\u9012\u3002\u6bcf\u4e2a\u8868\u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4f20\u8f93\u3002\u8868\u540d\u53d6\u81ea\u6587\u4ef6\u540d\u3002\xabquery_string\xbb \u4f20\u9012\u53c2\u6570 \xabname_format\xbb\u3001\xabname_types\xbb\u548c\xabname_structure\xbb\uff0c\u5176\u4e2d \xabname\xbb \u662f\u8fd9\u4e9b\u53c2\u6570\u5bf9\u5e94\u7684\u8868\u7684\u540d\u79f0\u3002\u53c2\u6570\u7684\u542b\u4e49\u4e0e\u4f7f\u7528\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\u65f6\u7684\u542b\u4e49\u76f8\u540c\u3002"),(0,s.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/passwd | sed 's/:/\\t/g' > passwd.tsv\n\ncurl -F 'passwd=@passwd.tsv;' 'http://localhost:8123/?query=SELECT+shell,+count()+AS+c+FROM+passwd+GROUP+BY+shell+ORDER+BY+c+DESC&passwd_structure=login+String,+unused+String,+uid+UInt16,+gid+UInt16,+comment+String,+home+String,+shell+String'\n/bin/sh 20\n/bin/false      5\n/bin/bash       4\n/usr/sbin/nologin       1\n/bin/sync       1\n")),(0,s.kt)("p",null,"\u5bf9\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\uff0c\u5c06\u4e34\u65f6\u8868\u53d1\u9001\u5230\u6240\u6709\u8fdc\u7a0b\u670d\u52a1\u5668\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/table_engines/external_data/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);