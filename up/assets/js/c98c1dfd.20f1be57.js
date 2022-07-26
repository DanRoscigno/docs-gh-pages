"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[6428],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:221},l="stochasticLinearRegression",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/stochasticlinearregression",id:"ru/sql-reference/aggregate-functions/reference/stochasticlinearregression",title:"stochasticLinearRegression",description:"agg_functions-stochasticlinearregression}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression.md",tags:[],version:"current",sidebarPosition:221,frontMatter:{sidebar_position:221},sidebar:"russia",previous:{title:"simpleLinearRegression",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/simplelinearregression"},next:{title:"stochasticLogisticRegression",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression"}},p={},u=[{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"agg_functions-stochasticlinearregression-parameters",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"agg_functions-stochasticlinearregression-usage",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f",id:"agg_functions-stochasticlinearregression-notes",level:3}],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_functions-stochasticlinearregression"},"stochasticLinearRegression"),(0,i.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044e. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0438 L2, \u0440\u0430\u0437\u043c\u0435\u0440\u0430 mini-batch \u0438 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0435\u0441\u043e\u0432 (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Adam"},"Adam")," (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e), ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent"},"simple SGD"),", ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Momentum"},"Momentum"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mipt.ru/upload/medialibrary/d7e/41-91.pdf"},"Nesterov"),")."),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-parameters"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,i.kt)("p",null,"\u0415\u0441\u0442\u044c 4 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430. \u041e\u043d\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043e\u0434\u043d\u0430\u043a\u043e \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043e\u0434\u043d\u0430\u043a\u043e \u0445\u043e\u0440\u043e\u0448\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"stochasticLinearRegression(1.0, 1.0, 10, 'SGD')\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u2014 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0434\u043b\u0438\u043d\u044b \u0448\u0430\u0433\u0430, \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0443\u0441\u043a\u0430. \u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c \u0432\u0435\u0441\u0430\u043c \u043c\u043e\u0434\u0435\u043b\u0438. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"li"},"0.00001"),"."),(0,i.kt)("li",{parentName:"ol"},"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0438 l2. \u041f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u043f\u043e\u0434\u0433\u043e\u043d\u043a\u0443. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"li"},"0.1"),"."),(0,i.kt)("li",{parentName:"ol"},"\u0420\u0430\u0437\u043c\u0435\u0440 mini-batch \u0437\u0430\u0434\u0430\u0451\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0447\u044c\u0438 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0438 \u043f\u0440\u043e\u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0448\u0430\u0433\u0430 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0443\u0441\u043a\u0430. \u0427\u0438\u0441\u0442\u044b\u0439 \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u043f\u0443\u0441\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043e\u0434\u0438\u043d \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u043e\u0434\u043d\u0430\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 mini-batch (\u043e\u043a\u043e\u043b\u043e 10 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432) \u0434\u0435\u043b\u0430\u0435\u0442 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u0435 \u0448\u0430\u0433\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u043c\u0438. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,i.kt)("li",{parentName:"ol"},"\u041c\u0435\u0442\u043e\u0434 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0435\u0441\u043e\u0432, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445: ",(0,i.kt)("inlineCode",{parentName:"li"},"Adam")," (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e), ",(0,i.kt)("inlineCode",{parentName:"li"},"SGD"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Momentum"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Nesterov"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"Momentum")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"Nesterov")," \u0431\u043e\u043b\u0435\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c \u0438 \u043f\u0430\u043c\u044f\u0442\u0438, \u043e\u0434\u043d\u0430\u043a\u043e \u043e\u043d\u0438 \u0438\u043c\u0435\u044e\u0442 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u0430.")),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-usage"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stochasticLinearRegression")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0434\u0432\u0443\u0445 \u044d\u0442\u0430\u043f\u0430\u0445: \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0451 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u043b\u044f \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u043e\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"-State"),".\n\u0414\u043b\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/functions/machine-learning-functions#machine_learning_methods-evalmlmethod"},"evalMLMethod"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),(0,i.kt)("a",{name:"stochasticlinearregression-usage-fitting"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," \u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438"),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS train_data\n(\n    param1 Float64,\n    param2 Float64,\n    target Float64\n) ENGINE = Memory;\n\nCREATE TABLE your_model ENGINE = Memory AS SELECT\nstochasticLinearRegressionState(0.1, 0.0, 5, 'SGD')(target, param1, param2)\nAS state FROM train_data;\n")),(0,i.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u043d\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"train_data"),". \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043d\u0435 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043e, \u043e\u043d\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043f\u0435\u0440\u0435\u0448\u0435\u0434\u0448\u0438\u0445 \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"linearRegressionState"),". \u0412\u0441\u0435 \u043e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438.\n\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u0446\u0435\u043b\u0435\u0432\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c (\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c) \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," \u041f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u043c\u0451\u0440\u0436\u0438\u0442\u044c \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f\u043c\u0438 \u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435, \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) FROM test_data\n")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"evalMLMethod")," \u044d\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunctionState"),", \u0434\u0430\u043b\u0435\u0435 \u0438\u0434\u0443\u0442 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441\u0432\u043e\u0439\u0441\u0442\u0432."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test_data")," \u2014 \u044d\u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430, \u043f\u043e\u0434\u043e\u0431\u043d\u0430\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"train_data"),", \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0435\u043b\u0435\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-notes"},"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0434\u0432\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT state1 + state2 FROM your_models\n")),(0,i.kt)("p",null,"\u0433\u0434\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"your_models")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0431\u0435 \u043c\u043e\u0434\u0435\u043b\u0438. \u0417\u0430\u043f\u0440\u043e\u0441 \u0432\u0435\u0440\u043d\u0451\u0442 \u043d\u043e\u0432\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunctionState"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0432\u0435\u0441\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043b\u044f \u0441\u0432\u043e\u0438\u0445 \u0446\u0435\u043b\u0435\u0439 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u043e\u0440 ",(0,i.kt)("inlineCode",{parentName:"li"},"-State"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT stochasticLinearRegression(0.01)(target, param1, param2) FROM train_data\n")),(0,i.kt)("p",null,"\u041f\u043e\u0434\u043e\u0431\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441\u0442\u0440\u043e\u0438\u0442 \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0451 \u0432\u0435\u0441\u0430, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0438 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u043c \u0432\u044b\u0448\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u0435\u0440\u043d\u0435\u0442 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u0442\u0440\u0435\u043c\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression#agg_functions-stochasticlogisticregression"},"stochasticLogisticRegression")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/12146914/what-is-the-difference-between-linear-regression-and-logistic-regression"},"\u041e\u0442\u043b\u0438\u0447\u0438\u0435 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043e\u0442 \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438."))))}m.isMDXComponent=!0}}]);