"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92006],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},g),{},{components:n})):r.createElement(m,s({ref:t},g))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],o={sidebar_position:222},c="stochasticLogisticRegression",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",id:"zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",title:"stochasticLogisticRegression",description:"agg_functions-stochasticlogisticregression}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression.md",tags:[],version:"current",sidebarPosition:222,frontMatter:{sidebar_position:222},sidebar:"chinese",previous:{title:"stochasticLinearRegression",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/stochasticlinearregression"},next:{title:"categoricalInformationValue",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue"}},g={},u=[{value:"\u53c2\u6570",id:"agg_functions-stochasticlogisticregression-parameters",level:3}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_functions-stochasticlogisticregression"},"stochasticLogisticRegression"),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u5b9e\u73b0\u968f\u673a\u903b\u8f91\u56de\u5f52\u3002 \u5b83\u53ef\u4ee5\u7528\u4e8e\u4e8c\u8fdb\u5236\u5206\u7c7b\u95ee\u9898\uff0c\u652f\u6301\u4e0estochasticLinearRegression\u76f8\u540c\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u5e76\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u5de5\u4f5c\u3002"),(0,a.kt)("h3",{id:"agg_functions-stochasticlogisticregression-parameters"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u53c2\u6570\u4e0estochasticLinearRegression\u4e2d\u7684\u53c2\u6570\u5b8c\u5168\u76f8\u540c:\n",(0,a.kt)("inlineCode",{parentName:"p"},"learning rate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"l2 regularization coefficient"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mini-batch size"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"method for updating weights"),".\n\u6b32\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ","[\u53c2\u6570]"," (#agg_functions-stochasticlinearregression-parameters)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"stochasticLogisticRegression(1.0, 1.0, 10, 'SGD')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," \u62df\u5408"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u53c2\u8003[stochasticLinearRegression](#stochasticlinearregression-usage-fitting)  `\u62df\u5408` \u7ae0\u8282\u6587\u6863\u3002\n\n\u9884\u6d4b\u6807\u7b7e\u7684\u53d6\u503c\u8303\u56f4\u4e3a\\[-1, 1\\]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," \u9884\u6d4b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4f7f\u7528\u5df2\u7ecf\u4fdd\u5b58\u7684state\u6211\u4eec\u53ef\u4ee5\u9884\u6d4b\u6807\u7b7e\u4e3a `1` \u7684\u5bf9\u8c61\u7684\u6982\u7387\u3002\n``` sql\nWITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) FROM test_data\n```\n\n\u67e5\u8be2\u7ed3\u679c\u8fd4\u56de\u4e00\u4e2a\u5217\u7684\u6982\u7387\u3002\u6ce8\u610f `evalMLMethod` \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f `AggregateFunctionState` \u5bf9\u8c61\uff0c\u63a5\u4e0b\u6765\u7684\u53c2\u6570\u662f\u5217\u7684\u7279\u6027\u3002\n\n\u6211\u4eec\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u6982\u7387\u7684\u8303\u56f4\uff0c \u8fd9\u6837\u9700\u8981\u7ed9\u5143\u7d20\u6307\u5b9a\u4e0d\u540c\u7684\u6807\u7b7e\u3002\n\n``` sql\nSELECT ans < 1.1 AND ans > 0.5 FROM\n(WITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) AS ans FROM test_data)\n```\n\n  \u7ed3\u679c\u662f\u6807\u7b7e\u3002\n\n`test_data` \u662f\u4e00\u4e2a\u50cf `train_data` \u4e00\u6837\u7684\u8868\uff0c\u4f46\u662f\u4e0d\u5305\u542b\u76ee\u6807\u503c\u3002\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/stochasticlinearregression#agg_functions-stochasticlinearregression"},"\u968f\u673a\u6307\u6807\u7ebf\u6027\u56de\u5f52")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/12146914/what-is-the-difference-between-linear-regression-and-logistic-regression"},"\u7ebf\u6027\u56de\u5f52\u548c\u903b\u8f91\u56de\u5f52\u4e4b\u95f4\u7684\u5dee\u5f02"))))}f.isMDXComponent=!0}}]);