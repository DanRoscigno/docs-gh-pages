"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[52845],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),o=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=o(n),d=r,k=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return n?i.createElement(k,u(u({ref:t},c),{},{components:n})):i.createElement(k,u({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var o=2;o<a;o++)u[o]=n[o];return i.createElement.apply(null,u)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),u=["components"],l={sidebar_position:2,sidebar_label:"ClickHouse\u7684\u7279\u6027"},s="ClickHouse\u7684\u7279\u6027",o={unversionedId:"zh/introduction/distinctive-features",id:"zh/introduction/distinctive-features",title:"ClickHouse\u7684\u7279\u6027",description:"clickhouse-de-te-xing}",source:"@site/docs/zh/introduction/distinctive-features.md",sourceDirName:"zh/introduction",slug:"/zh/introduction/distinctive-features",permalink:"/docs-gh-pages/update-quick-start/zh/introduction/distinctive-features",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/introduction/distinctive-features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"ClickHouse\u7684\u7279\u6027"},sidebar:"chinese",previous:{title:"\u7b80\u4ecb",permalink:"/docs-gh-pages/update-quick-start/category/\u7b80\u4ecb"},next:{title:"ClickHouse\u6027\u80fd",permalink:"/docs-gh-pages/update-quick-start/zh/introduction/performance"}},c={},p=[{value:"\u771f\u6b63\u7684\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf",id:"zhen-zheng-de-lie-shi-shu-ju-ku-guan-li-xi-tong",level:2},{value:"\u6570\u636e\u538b\u7f29",id:"shu-ju-ya-suo",level:2},{value:"\u6570\u636e\u7684\u78c1\u76d8\u5b58\u50a8",id:"shu-ju-de-ci-pan-cun-chu",level:2},{value:"\u591a\u6838\u5fc3\u5e76\u884c\u5904\u7406",id:"duo-he-xin-bing-xing-chu-li",level:2},{value:"\u591a\u670d\u52a1\u5668\u5206\u5e03\u5f0f\u5904\u7406",id:"duo-fu-wu-qi-fen-bu-shi-chu-li",level:2},{value:"\u652f\u6301SQL",id:"zhi-chi-sql",level:2},{value:"\u5411\u91cf\u5f15\u64ce",id:"xiang-liang-yin-qing",level:2},{value:"\u5b9e\u65f6\u7684\u6570\u636e\u66f4\u65b0",id:"shi-shi-de-shu-ju-geng-xin",level:2},{value:"\u7d22\u5f15",id:"suo-yin",level:2},{value:"\u9002\u5408\u5728\u7ebf\u67e5\u8be2",id:"gua-he-zai-xian-cha-xun",level:2},{value:"\u652f\u6301\u8fd1\u4f3c\u8ba1\u7b97",id:"zhi-chi-jin-si-ji-suan",level:2},{value:"Adaptive Join Algorithm",id:"adaptive-join-algorithm",level:2},{value:"\u652f\u6301\u6570\u636e\u590d\u5236\u548c\u6570\u636e\u5b8c\u6574\u6027",id:"zhi-chi-shu-ju-fu-zhi-he-shu-ju-wan-zheng-xing",level:2},{value:"\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236",id:"role-based-access-control",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clickhouse-de-te-xing"},"ClickHouse\u7684\u7279\u6027"),(0,a.kt)("h2",{id:"zhen-zheng-de-lie-shi-shu-ju-ku-guan-li-xi-tong"},"\u771f\u6b63\u7684\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a\u771f\u6b63\u7684\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u4e2d\uff0c\u9664\u4e86\u6570\u636e\u672c\u8eab\u5916\u4e0d\u5e94\u8be5\u5b58\u5728\u5176\u4ed6\u989d\u5916\u7684\u6570\u636e\u3002\u8fd9\u610f\u5473\u7740\u4e3a\u4e86\u907f\u514d\u5728\u503c\u65c1\u8fb9\u5b58\u50a8\u5b83\u4eec\u7684\u957f\u5ea6\xabnumber\xbb\uff0c\u4f60\u5fc5\u987b\u652f\u6301\u56fa\u5b9a\u957f\u5ea6\u6570\u503c\u7c7b\u578b\u3002\u4f8b\u5982\uff0c10\u4ebf\u4e2aUInt8\u7c7b\u578b\u7684\u6570\u636e\u5728\u672a\u538b\u7f29\u7684\u60c5\u51b5\u4e0b\u5927\u7ea6\u6d88\u80171GB\u5de6\u53f3\u7684\u7a7a\u95f4\uff0c\u5982\u679c\u4e0d\u662f\u8fd9\u6837\u7684\u8bdd\uff0c\u8fd9\u5c06\u5bf9CPU\u7684\u4f7f\u7528\u4ea7\u751f\u5f3a\u70c8\u5f71\u54cd\u3002\u5373\u4f7f\u662f\u5728\u672a\u538b\u7f29\u7684\u60c5\u51b5\u4e0b\uff0c\u7d27\u51d1\u7684\u5b58\u50a8\u6570\u636e\u4e5f\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u89e3\u538b\u7f29\u7684\u901f\u5ea6\u4e3b\u8981\u53d6\u51b3\u4e8e\u672a\u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u975e\u5e38\u503c\u5f97\u6ce8\u610f\u7684\uff0c\u56e0\u4e3a\u5728\u4e00\u4e9b\u5176\u4ed6\u7cfb\u7edf\u4e2d\u4e5f\u53ef\u4ee5\u5c06\u4e0d\u540c\u7684\u5217\u5206\u522b\u8fdb\u884c\u5b58\u50a8\uff0c\u4f46\u7531\u4e8e\u5bf9\u5176\u4ed6\u573a\u666f\u8fdb\u884c\u7684\u4f18\u5316\uff0c\u4f7f\u5176\u65e0\u6cd5\u6709\u6548\u7684\u5904\u7406\u5206\u6790\u67e5\u8be2\u3002\u4f8b\u5982\uff1a HBase\uff0cBigTable\uff0cCassandra\uff0cHyperTable\u3002\u5728\u8fd9\u4e9b\u7cfb\u7edf\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5f97\u5230\u6bcf\u79d2\u6570\u5341\u4e07\u7684\u541e\u5410\u80fd\u529b\uff0c\u4f46\u662f\u65e0\u6cd5\u5f97\u5230\u6bcf\u79d2\u51e0\u4ebf\u884c\u7684\u541e\u5410\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0cClickHouse\u4e0d\u5355\u5355\u662f\u4e00\u4e2a\u6570\u636e\u5e93\uff0c \u5b83\u662f\u4e00\u4e2a\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002\u56e0\u4e3a\u5b83\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u521b\u5efa\u8868\u548c\u6570\u636e\u5e93\u3001\u52a0\u8f7d\u6570\u636e\u548c\u8fd0\u884c\u67e5\u8be2\uff0c\u800c\u65e0\u9700\u91cd\u65b0\u914d\u7f6e\u6216\u91cd\u542f\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"shu-ju-ya-suo"},"\u6570\u636e\u538b\u7f29"),(0,a.kt)("p",null,"\u5728\u4e00\u4e9b\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u4e2d(\u4f8b\u5982\uff1aInfiniDB CE \u548c MonetDB) \u5e76\u6ca1\u6709\u4f7f\u7528\u6570\u636e\u538b\u7f29\u3002\u4f46\u662f, \u82e5\u60f3\u8fbe\u5230\u6bd4\u8f83\u4f18\u5f02\u7684\u6027\u80fd\uff0c\u6570\u636e\u538b\u7f29\u786e\u5b9e\u8d77\u5230\u4e86\u81f3\u5173\u91cd\u8981\u7684\u4f5c\u7528\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u5728\u78c1\u76d8\u7a7a\u95f4\u548cCPU\u6d88\u8017\u4e4b\u95f4\u8fdb\u884c\u4e0d\u540c\u6743\u8861\u7684\u9ad8\u6548\u901a\u7528\u538b\u7f29\u7f16\u89e3\u7801\u5668\u4e4b\u5916\uff0cClickHouse\u8fd8\u63d0\u4f9b\u9488\u5bf9\u7279\u5b9a\u7c7b\u578b\u6570\u636e\u7684",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/create#create-query-specialized-codecs"},"\u4e13\u7528\u7f16\u89e3\u7801\u5668"),"\uff0c\u8fd9\u4f7f\u5f97ClickHouse\u80fd\u591f\u4e0e\u66f4\u5c0f\u7684\u6570\u636e\u5e93(\u5982\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93)\u7ade\u4e89\u5e76\u8d85\u8d8a\u5b83\u4eec\u3002"),(0,a.kt)("h2",{id:"shu-ju-de-ci-pan-cun-chu"},"\u6570\u636e\u7684\u78c1\u76d8\u5b58\u50a8"),(0,a.kt)("p",null,"\u8bb8\u591a\u7684\u5217\u5f0f\u6570\u636e\u5e93(\u5982 SAP HANA, Google PowerDrill)\u53ea\u80fd\u5728\u5185\u5b58\u4e2d\u5de5\u4f5c\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u9020\u6210\u6bd4\u5b9e\u9645\u66f4\u591a\u7684\u8bbe\u5907\u9884\u7b97\u3002"),(0,a.kt)("p",null,"ClickHouse\u88ab\u8bbe\u8ba1\u7528\u4e8e\u5de5\u4f5c\u5728\u4f20\u7edf\u78c1\u76d8\u4e0a\u7684\u7cfb\u7edf\uff0c\u5b83\u63d0\u4f9b\u6bcfGB\u66f4\u4f4e\u7684\u5b58\u50a8\u6210\u672c\uff0c\u4f46\u5982\u679c\u53ef\u4ee5\u4f7f\u7528SSD\u548c\u5185\u5b58\uff0c\u5b83\u4e5f\u4f1a\u5408\u7406\u7684\u5229\u7528\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,a.kt)("h2",{id:"duo-he-xin-bing-xing-chu-li"},"\u591a\u6838\u5fc3\u5e76\u884c\u5904\u7406"),(0,a.kt)("p",null,"ClickHouse\u4f1a\u4f7f\u7528\u670d\u52a1\u5668\u4e0a\u4e00\u5207\u53ef\u7528\u7684\u8d44\u6e90\uff0c\u4ece\u800c\u4ee5\u6700\u81ea\u7136\u7684\u65b9\u5f0f\u5e76\u884c\u5904\u7406\u5927\u578b\u67e5\u8be2\u3002"),(0,a.kt)("h2",{id:"duo-fu-wu-qi-fen-bu-shi-chu-li"},"\u591a\u670d\u52a1\u5668\u5206\u5e03\u5f0f\u5904\u7406"),(0,a.kt)("p",null,"\u4e0a\u9762\u63d0\u5230\u7684\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u4e2d\uff0c\u51e0\u4e4e\u6ca1\u6709\u4e00\u4e2a\u652f\u6301\u5206\u5e03\u5f0f\u7684\u67e5\u8be2\u5904\u7406\u3002\n\u5728ClickHouse\u4e2d\uff0c\u6570\u636e\u53ef\u4ee5\u4fdd\u5b58\u5728\u4e0d\u540c\u7684shard\u4e0a\uff0c\u6bcf\u4e00\u4e2ashard\u90fd\u7531\u4e00\u7ec4\u7528\u4e8e\u5bb9\u9519\u7684replica\u7ec4\u6210\uff0c\u67e5\u8be2\u53ef\u4ee5\u5e76\u884c\u5730\u5728\u6240\u6709shard\u4e0a\u8fdb\u884c\u5904\u7406\u3002\u8fd9\u4e9b\u5bf9\u7528\u6237\u6765\u8bf4\u662f\u900f\u660e\u7684"),(0,a.kt)("h2",{id:"zhi-chi-sql"},"\u652f\u6301SQL"),(0,a.kt)("p",null,"ClickHouse\u652f\u6301\u4e00\u79cd",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/"},"\u57fa\u4e8eSQL\u7684\u58f0\u660e\u5f0f\u67e5\u8be2\u8bed\u8a00"),"\uff0c\u5b83\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\u4e0e",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/ansi"},"ANSI SQL\u6807\u51c6"),"\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u7684\u67e5\u8be2",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/group-by"},"GROUP BY"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/order-by"},"ORDER BY"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/from"},"FROM"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/join"},"JOIN"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/operators/in"},"IN"),"\u4ee5\u53ca\u975e\u76f8\u5173\u5b50\u67e5\u8be2\u3002"),(0,a.kt)("p",null,"\u76f8\u5173(\u4f9d\u8d56\u6027)\u5b50\u67e5\u8be2\u548c\u7a97\u53e3\u51fd\u6570\u6682\u4e0d\u53d7\u652f\u6301\uff0c\u4f46\u5c06\u6765\u4f1a\u88ab\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"xiang-liang-yin-qing"},"\u5411\u91cf\u5f15\u64ce"),(0,a.kt)("p",null,"\u4e3a\u4e86\u9ad8\u6548\u7684\u4f7f\u7528CPU\uff0c\u6570\u636e\u4e0d\u4ec5\u4ec5\u6309\u5217\u5b58\u50a8\uff0c\u540c\u65f6\u8fd8\u6309\u5411\u91cf(\u5217\u7684\u4e00\u90e8\u5206)\u8fdb\u884c\u5904\u7406\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u52a0\u9ad8\u6548\u5730\u4f7f\u7528CPU\u3002"),(0,a.kt)("h2",{id:"shi-shi-de-shu-ju-geng-xin"},"\u5b9e\u65f6\u7684\u6570\u636e\u66f4\u65b0"),(0,a.kt)("p",null,"ClickHouse\u652f\u6301\u5728\u8868\u4e2d\u5b9a\u4e49\u4e3b\u952e\u3002\u4e3a\u4e86\u4f7f\u67e5\u8be2\u80fd\u591f\u5feb\u901f\u5728\u4e3b\u952e\u4e2d\u8fdb\u884c\u8303\u56f4\u67e5\u627e\uff0c\u6570\u636e\u603b\u662f\u4ee5\u589e\u91cf\u7684\u65b9\u5f0f\u6709\u5e8f\u7684\u5b58\u50a8\u5728MergeTree\u4e2d\u3002\u56e0\u6b64\uff0c\u6570\u636e\u53ef\u4ee5\u6301\u7eed\u4e0d\u65ad\u5730\u9ad8\u6548\u7684\u5199\u5165\u5230\u8868\u4e2d\uff0c\u5e76\u4e14\u5199\u5165\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u5b58\u5728\u4efb\u4f55\u52a0\u9501\u7684\u884c\u4e3a\u3002"),(0,a.kt)("h2",{id:"suo-yin"},"\u7d22\u5f15"),(0,a.kt)("p",null,"\u6309\u7167\u4e3b\u952e\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\uff0c\u8fd9\u5c06\u5e2e\u52a9ClickHouse\u5728\u51e0\u5341\u6beb\u79d2\u4ee5\u5185\u5b8c\u6210\u5bf9\u6570\u636e\u7279\u5b9a\u503c\u6216\u8303\u56f4\u7684\u67e5\u627e\u3002"),(0,a.kt)("h2",{id:"gua-he-zai-xian-cha-xun"},"\u9002\u5408\u5728\u7ebf\u67e5\u8be2"),(0,a.kt)("p",null,"\u5728\u7ebf\u67e5\u8be2\u610f\u5473\u7740\u5728\u6ca1\u6709\u5bf9\u6570\u636e\u505a\u4efb\u4f55\u9884\u5904\u7406\u7684\u60c5\u51b5\u4e0b\u4ee5\u6781\u4f4e\u7684\u5ef6\u8fdf\u5904\u7406\u67e5\u8be2\u5e76\u5c06\u7ed3\u679c\u52a0\u8f7d\u5230\u7528\u6237\u7684\u9875\u9762\u4e2d\u3002"),(0,a.kt)("h2",{id:"zhi-chi-jin-si-ji-suan"},"\u652f\u6301\u8fd1\u4f3c\u8ba1\u7b97"),(0,a.kt)("p",null,"ClickHouse\u63d0\u4f9b\u5404\u79cd\u5404\u6837\u5728\u5141\u8bb8\u727a\u7272\u6570\u636e\u7cbe\u5ea6\u7684\u60c5\u51b5\u4e0b\u5bf9\u67e5\u8be2\u8fdb\u884c\u52a0\u901f\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528\u4e8e\u8fd1\u4f3c\u8ba1\u7b97\u7684\u5404\u7c7b\u805a\u5408\u51fd\u6570\uff0c\u5982\uff1adistinct values, medians, quantiles"),(0,a.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6570\u636e\u7684\u90e8\u5206\u6837\u672c\u8fdb\u884c\u8fd1\u4f3c\u67e5\u8be2\u3002\u8fd9\u65f6\uff0c\u4ec5\u4f1a\u4ece\u78c1\u76d8\u68c0\u7d22\u5c11\u90e8\u5206\u6bd4\u4f8b\u7684\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u4f7f\u7528\u5168\u90e8\u7684\u805a\u5408\u6761\u4ef6\uff0c\u901a\u8fc7\u968f\u673a\u9009\u62e9\u6709\u9650\u4e2a\u6570\u636e\u805a\u5408\u6761\u4ef6\u8fdb\u884c\u805a\u5408\u3002\u8fd9\u5728\u6570\u636e\u805a\u5408\u6761\u4ef6\u6ee1\u8db3\u67d0\u4e9b\u5206\u5e03\u6761\u4ef6\u4e0b\uff0c\u5728\u63d0\u4f9b\u76f8\u5f53\u51c6\u786e\u7684\u805a\u5408\u7ed3\u679c\u7684\u540c\u65f6\u964d\u4f4e\u4e86\u8ba1\u7b97\u8d44\u6e90\u7684\u4f7f\u7528\u3002")),(0,a.kt)("h2",{id:"adaptive-join-algorithm"},"Adaptive Join Algorithm"),(0,a.kt)("p",null,"ClickHouse\u652f\u6301\u81ea\u5b9a\u4e49",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/join"},"JOIN"),"\u591a\u4e2a\u8868\uff0c\u5b83\u66f4\u503e\u5411\u4e8e\u6563\u5217\u8fde\u63a5\u7b97\u6cd5\uff0c\u5982\u679c\u6709\u591a\u4e2a\u5927\u8868\uff0c\u5219\u4f7f\u7528\u5408\u5e76-\u8fde\u63a5\u7b97\u6cd5"),(0,a.kt)("h2",{id:"zhi-chi-shu-ju-fu-zhi-he-shu-ju-wan-zheng-xing"},"\u652f\u6301\u6570\u636e\u590d\u5236\u548c\u6570\u636e\u5b8c\u6574\u6027"),(0,a.kt)("p",null,"ClickHouse\u4f7f\u7528\u5f02\u6b65\u7684\u591a\u4e3b\u590d\u5236\u6280\u672f\u3002\u5f53\u6570\u636e\u88ab\u5199\u5165\u4efb\u4f55\u4e00\u4e2a\u53ef\u7528\u526f\u672c\u540e\uff0c\u7cfb\u7edf\u4f1a\u5728\u540e\u53f0\u5c06\u6570\u636e\u5206\u53d1\u7ed9\u5176\u4ed6\u526f\u672c\uff0c\u4ee5\u4fdd\u8bc1\u7cfb\u7edf\u5728\u4e0d\u540c\u526f\u672c\u4e0a\u4fdd\u6301\u76f8\u540c\u7684\u6570\u636e\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0bClickHouse\u80fd\u5728\u6545\u969c\u540e\u81ea\u52a8\u6062\u590d\uff0c\u5728\u4e00\u4e9b\u5c11\u6570\u7684\u590d\u6742\u60c5\u51b5\u4e0b\u9700\u8981\u624b\u52a8\u6062\u590d\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/engines/table-engines/mergetree-family/replication"},"\u6570\u636e\u590d\u5236"),"\u3002"),(0,a.kt)("h2",{id:"role-based-access-control"},"\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236"),(0,a.kt)("p",null,"ClickHouse\u4f7f\u7528SQL\u67e5\u8be2\u5b9e\u73b0\u7528\u6237\u5e10\u6237\u7ba1\u7406\uff0c\u5e76\u5141\u8bb8",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/operations/access-rights"},"\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236"),"\uff0c\u7c7b\u4f3c\u4e8eANSI SQL\u6807\u51c6\u548c\u6d41\u884c\u7684\u5173\u7cfb\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,a.kt)("h1",{id:"clickhouseke-xian-zhi"},"\u9650\u5236"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u5b8c\u6574\u7684\u4e8b\u52a1\u652f\u6301\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7f3a\u5c11\u9ad8\u9891\u7387\uff0c\u4f4e\u5ef6\u8fdf\u7684\u4fee\u6539\u6216\u5220\u9664\u5df2\u5b58\u5728\u6570\u636e\u7684\u80fd\u529b\u3002\u4ec5\u80fd\u7528\u4e8e\u6279\u91cf\u5220\u9664\u6216\u4fee\u6539\u6570\u636e\uff0c\u4f46\u8fd9\u7b26\u5408 ",(0,a.kt)("a",{parentName:"li",href:"https://gdpr-info.eu"},"GDPR"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7a00\u758f\u7d22\u5f15\u4f7f\u5f97ClickHouse\u4e0d\u9002\u5408\u901a\u8fc7\u5176\u952e\u68c0\u7d22\u5355\u884c\u7684\u70b9\u67e5\u8be2\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/introduction/distinctive_features/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);