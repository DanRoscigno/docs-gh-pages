"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[39691],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),g=i,d=p["".concat(a,".").concat(g)]||p[g]||f[g]||o;return t?r.createElement(d,c(c({ref:n},l),{},{components:t})):r.createElement(d,c({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=p;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},70605:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),c=["components"],s={sidebar_position:64,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"},a="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",u={unversionedId:"ru/sql-reference/functions/machine-learning-functions",id:"ru/sql-reference/functions/machine-learning-functions",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",description:"funktsii-mashinnogo-obucheniia}",source:"@site/docs/ru/sql-reference/functions/machine-learning-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/machine-learning-functions",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/functions/machine-learning-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/machine-learning-functions.md",tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/functions/functions-for-nulls"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/functions/introspection"}},l={},f=[{value:"evalMLMethod (prediction)",id:"machine_learning_methods-evalmlmethod",level:2},{value:"Stochastic Linear Regression",id:"stochastic-linear-regression",level:3},{value:"Stochastic Logistic Regression",id:"stochastic-logistic-regression",level:3}],p={toc:f};function g(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"funktsii-mashinnogo-obucheniia"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"),(0,o.kt)("h2",{id:"machine_learning_methods-evalmlmethod"},"evalMLMethod (prediction)"),(0,o.kt)("p",null,"\u041f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439."),(0,o.kt)("h3",{id:"stochastic-linear-regression"},"Stochastic Linear Regression"),(0,o.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/functions/machine-learning-functions#agg_functions-stochasticlinearregression"},"stochasticLinearRegression")," \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u0439 \u0441\u043f\u0443\u0441\u043a, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043f\u043e\u0442\u0435\u0440\u044c MSE."),(0,o.kt)("h3",{id:"stochastic-logistic-regression"},"Stochastic Logistic Regression"),(0,o.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/functions/machine-learning-functions#agg_functions-stochasticlogisticregression"},"stochasticLogisticRegression")," \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u0439 \u0441\u043f\u0443\u0441\u043a \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438."))}g.isMDXComponent=!0}}]);