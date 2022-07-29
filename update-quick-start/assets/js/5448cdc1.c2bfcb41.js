"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[27256],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:221},l="stochasticLinearRegression",c={unversionedId:"zh/sql-reference/aggregate-functions/reference/stochasticlinearregression",id:"zh/sql-reference/aggregate-functions/reference/stochasticlinearregression",title:"stochasticLinearRegression",description:"agg_functions-stochasticlinearregression}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/stochasticlinearregression.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/stochasticlinearregression",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/stochasticlinearregression",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/stochasticlinearregression.md",tags:[],version:"current",sidebarPosition:221,frontMatter:{sidebar_position:221},sidebar:"chinese",previous:{title:"simpleLinearRegression",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/simplelinearregression"},next:{title:"stochasticLogisticRegression",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression"}},p={},u=[{value:"\u53c2\u6570",id:"agg_functions-stochasticlinearregression-parameters",level:3},{value:"\u4f7f\u7528",id:"agg_functions-stochasticlinearregression-usage",level:3},{value:"\u6ce8",id:"agg_functions-stochasticlinearregression-notes",level:3}],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_functions-stochasticlinearregression"},"stochasticLinearRegression"),(0,i.kt)("p",null,"\u8be5\u51fd\u6570\u5b9e\u73b0\u968f\u673a\u7ebf\u6027\u56de\u5f52\u3002 \u5b83\u652f\u6301\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u5b66\u4e60\u7387\u3001L2\u6b63\u5219\u5316\u7cfb\u6570\u3001\u5fae\u6279\uff0c\u5e76\u4e14\u5177\u6709\u5c11\u91cf\u66f4\u65b0\u6743\u91cd\u7684\u65b9\u6cd5\uff08",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Adam"},"Adam")," \uff08\u9ed8\u8ba4\uff09\uff0c ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent"},"simple SGD"),"\uff0c ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Momentum"},"Momentum"),"\uff0c ",(0,i.kt)("a",{parentName:"p",href:"https://mipt.ru/upload/medialibrary/d7e/41-91.pdf"},"Nesterov"),"\uff09\u3002"),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-parameters"},"\u53c2\u6570"),(0,i.kt)("p",null,"\u67094\u4e2a\u53ef\u81ea\u5b9a\u4e49\u7684\u53c2\u6570\u3002\u5b83\u4eec\u6309\u987a\u5e8f\u4f20\u9012\u7ed9\u51fd\u6570\uff0c\u4f46\u4e0d\u9700\u8981\u4f20\u9012\u6240\u6709\u56db\u4e2a\u53c2\u6570\u2014\u2014\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c\uff0c\u7136\u800c\u597d\u7684\u6a21\u578b\u9700\u8981\u4e00\u4e9b\u53c2\u6570\u8c03\u6574\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"stochasticLinearRegression(1.0, 1.0, 10, 'SGD')\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"learning rate")," \u5f53\u6267\u884c\u68af\u5ea6\u4e0b\u964d\u6b65\u9aa4\u65f6\uff0c\u6b65\u957f\u7684\u7cfb\u6570\u3002 \u8fc7\u5927\u7684\u5b66\u4e60\u7387\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6a21\u578b\u7684\u6743\u91cd\u65e0\u9650\u5927\u3002 \u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"0.00001"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"l2 regularization coefficient")," \u8fd9\u53ef\u80fd\u6709\u52a9\u4e8e\u9632\u6b62\u8fc7\u5ea6\u62df\u5408\u3002 \u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"0.1"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"mini-batch size")," \u8bbe\u7f6e\u5143\u7d20\u7684\u6570\u91cf\uff0c\u8fd9\u4e9b\u5143\u7d20\u5c06\u88ab\u8ba1\u7b97\u548c\u6c42\u548c\u4ee5\u6267\u884c\u68af\u5ea6\u4e0b\u964d\u7684\u4e00\u4e2a\u6b65\u9aa4\u3002\u7eaf\u968f\u673a\u4e0b\u964d\u4f7f\u7528\u4e00\u4e2a\u5143\u7d20\uff0c\u4f46\u662f\u5177\u6709\u5c0f\u6279\u91cf\uff08\u7ea610\u4e2a\u5143\u7d20\uff09\u4f7f\u68af\u5ea6\u6b65\u9aa4\u66f4\u7a33\u5b9a\u3002 \u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"15"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"method for updating weights")," \u4ed6\u4eec\u662f: ",(0,i.kt)("inlineCode",{parentName:"li"},"Adam")," (\u9ed8\u8ba4\u60c5\u51b5\u4e0b), ",(0,i.kt)("inlineCode",{parentName:"li"},"SGD"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Momentum"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Nesterov"),"\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"Momentum")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"Nesterov")," \u9700\u8981\u66f4\u591a\u7684\u8ba1\u7b97\u548c\u5185\u5b58\uff0c\u4f46\u662f\u5b83\u4eec\u6070\u597d\u5728\u6536\u655b\u901f\u5ea6\u548c\u968f\u673a\u68af\u5ea6\u65b9\u6cd5\u7684\u7a33\u5b9a\u6027\u65b9\u9762\u662f\u6709\u7528\u7684\u3002")),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-usage"},"\u4f7f\u7528"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stochasticLinearRegression")," \u7528\u4e8e\u4e24\u4e2a\u6b65\u9aa4\uff1a\u62df\u5408\u6a21\u578b\u548c\u9884\u6d4b\u65b0\u6570\u636e\u3002 \u4e3a\u4e86\u62df\u5408\u6a21\u578b\u5e76\u4fdd\u5b58\u5176\u72b6\u6001\u4ee5\u4f9b\u4ee5\u540e\u4f7f\u7528\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"-State")," \u7ec4\u5408\u5668\uff0c\u5b83\u57fa\u672c\u4e0a\u4fdd\u5b58\u4e86\u72b6\u6001\uff08\u6a21\u578b\u6743\u91cd\u7b49\uff09\u3002\n\u4e3a\u4e86\u9884\u6d4b\u6211\u4eec\u4f7f\u7528\u51fd\u6570 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/functions/machine-learning-functions#machine_learning_methods-evalmlmethod"},"evalMLMethod"),", \u8fd9\u9700\u8981\u4e00\u4e2a\u72b6\u6001\u4f5c\u4e3a\u53c2\u6570\u4ee5\u53ca\u7279\u5f81\u6765\u9884\u6d4b\u3002"),(0,i.kt)("a",{name:"stochasticlinearregression-usage-fitting"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," \u62df\u5408"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u67e5\u8be2\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS train_data\n(\n    param1 Float64,\n    param2 Float64,\n    target Float64\n) ENGINE = Memory;\n\nCREATE TABLE your_model ENGINE = Memory AS SELECT\nstochasticLinearRegressionState(0.1, 0.0, 5, 'SGD')(target, param1, param2)\nAS state FROM train_data;\n")),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5c06\u6570\u636e\u63d2\u5165\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"train_data")," \u8868\u3002\u53c2\u6570\u7684\u6570\u91cf\u4e0d\u662f\u56fa\u5b9a\u7684\uff0c\u5b83\u53ea\u53d6\u51b3\u4e8e\u4f20\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"linearRegressionState")," \u7684\u53c2\u6570\u6570\u91cf\u3002\u5b83\u4eec\u90fd\u5fc5\u987b\u662f\u6570\u503c\u3002\n\u6ce8\u610f\uff0c\u76ee\u6807\u503c(\u6211\u4eec\u60f3\u5b66\u4e60\u9884\u6d4b\u7684)\u5217\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u63d2\u5165\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," \u9884\u6d4b"),(0,i.kt)("p",null,"\u5728\u5c06\u72b6\u6001\u4fdd\u5b58\u5230\u8868\u4e2d\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u591a\u6b21\u4f7f\u7528\u5b83\u8fdb\u884c\u9884\u6d4b\uff0c\u751a\u81f3\u4e0e\u5176\u4ed6\u72b6\u6001\u5408\u5e76\uff0c\u521b\u5efa\u65b0\u7684\u66f4\u597d\u7684\u6a21\u578b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) FROM test_data\n")),(0,i.kt)("p",null,"\u67e5\u8be2\u5c06\u8fd4\u56de\u4e00\u5217\u9884\u6d4b\u503c\u3002\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"evalMLMethod")," \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunctionState")," \u5bf9\u8c61, \u63a5\u4e0b\u6765\u662f\u7279\u5f81\u5217\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test_data")," \u662f\u4e00\u4e2a\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"p"},"train_data")," \u7684\u8868 \u4f46\u53ef\u80fd\u4e0d\u5305\u542b\u76ee\u6807\u503c\u3002"),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-notes"},"\u6ce8"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8981\u5408\u5e76\u4e24\u4e2a\u6a21\u578b\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u8fd9\u6837\u7684\u67e5\u8be2:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sql  SELECT state1 + state2 FROM your_models"),"\n\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"your_models")," \u8868\u5305\u542b\u8fd9\u4e24\u4e2a\u6a21\u578b\u3002\u6b64\u67e5\u8be2\u5c06\u8fd4\u56de\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunctionState")," \u5bf9\u8c61\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"-State")," \u7ec4\u5408\u5668\uff0c\u7528\u6237\u53ef\u4ee5\u4e3a\u81ea\u5df1\u7684\u76ee\u7684\u83b7\u53d6\u6240\u521b\u5efa\u6a21\u578b\u7684\u6743\u91cd\uff0c\u800c\u4e0d\u4fdd\u5b58\u6a21\u578b \u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"sql  SELECT stochasticLinearRegression(0.01)(target, param1, param2) FROM train_data"),"\n\u8fd9\u6837\u7684\u67e5\u8be2\u5c06\u62df\u5408\u6a21\u578b\uff0c\u5e76\u8fd4\u56de\u5176\u6743\u91cd\u2014\u2014\u9996\u5148\u662f\u6743\u91cd\uff0c\u5bf9\u5e94\u6a21\u578b\u7684\u53c2\u6570\uff0c\u6700\u540e\u4e00\u4e2a\u662f\u504f\u5dee\u3002 \u6240\u4ee5\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u67e5\u8be2\u5c06\u8fd4\u56de\u4e00\u4e2a\u5177\u67093\u4e2a\u503c\u7684\u5217\u3002"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression#agg_functions-stochasticlogisticregression"},"\u968f\u673a\u6307\u6807\u903b\u8f91\u56de\u5f52")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/12146914/what-is-the-difference-between-linear-regression-and-logistic-regression"},"\u7ebf\u6027\u56de\u5f52\u548c\u903b\u8f91\u56de\u5f52\u4e4b\u95f4\u7684\u5dee\u5f02"))))}m.isMDXComponent=!0}}]);