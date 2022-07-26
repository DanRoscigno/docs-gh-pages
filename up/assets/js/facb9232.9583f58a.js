"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4329],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},k=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),m=a,d=k["".concat(s,".").concat(m)]||k[m]||c[m]||o;return n?t.createElement(d,l(l({ref:r},u),{},{components:n})):t.createElement(d,l({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97338:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},s="Kerberos",p={unversionedId:"ru/operations/external-authenticators/kerberos",id:"ru/operations/external-authenticators/kerberos",title:"Kerberos",description:"external-authenticators-kerberos}",source:"@site/docs/ru/operations/external-authenticators/kerberos.md",sourceDirName:"ru/operations/external-authenticators",slug:"/ru/operations/external-authenticators/kerberos",permalink:"/docs-gh-pages/up/ru/operations/external-authenticators/kerberos",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/external-authenticators/kerberos.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438",permalink:"/docs-gh-pages/up/ru/operations/external-authenticators/"},next:{title:"LDAP",permalink:"/docs-gh-pages/up/ru/operations/external-authenticators/ldap"}},u={},c=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kerberos \u0432 ClickHouse",id:"enabling-kerberos-in-clickhouse",level:2},{value:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kerberos",id:"kerberos-as-an-external-authenticator-for-existing-users",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kerberos \u0432 <code>users.xml</code>",id:"enabling-kerberos-in-users-xml",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kerberos \u0447\u0435\u0440\u0435\u0437 SQL",id:"enabling-kerberos-using-sql",level:3}],k={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},k,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"external-authenticators-kerberos"},"Kerberos"),(0,o.kt)("p",null,"ClickHouse \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 (\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445) \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Kerberos."),(0,o.kt)("p",null,"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Kerberos \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0430\u043a \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430, \u0442\u043e \u0435\u0441\u0442\u044c \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kerberos. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438, \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f Kerberos-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 ClickHouse \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 HTTP-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043f\u0440\u0438\u0447\u0451\u043c \u0441\u0430\u043c\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 GSS-SPNEGO."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::    \u0414\u043b\u044f Kerberos-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Kerberos \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u0430\u0445 \u0441\u0430\u043c\u043e\u0433\u043e ClickHouse. \u041d\u0438\u0436\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u043b\u0438\u0448\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ClickHouse.\n:::\n")),(0,o.kt)("h2",{id:"enabling-kerberos-in-clickhouse"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kerberos \u0432 ClickHouse"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c Kerberos-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0432 ClickHouse, \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0434\u043d\u0443-\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u0435\u043a\u0446\u0438\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"kerberos")," \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml"),"."),(0,o.kt)("p",null,"\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"principal")," ","\u2014"," \u0437\u0430\u0434\u0430\u0451\u0442 \u0438\u043c\u044f \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043b\u0430 (canonical service principal name, SPN), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 ClickHouse \u043d\u0430 Kerberos-\u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u042d\u0442\u043e \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u043f\u0440\u0438 \u0435\u0433\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0438\u043c\u044f."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"realm")," ","\u2014"," \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044e \u043f\u043e \u0440\u0435\u0430\u043b\u043c (realm). \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c, \u0447\u0435\u0439 \u0440\u0435\u0430\u043b\u043c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c, \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u042d\u0442\u043e \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u043f\u0440\u0438 \u0435\u0433\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0440\u0435\u0430\u043b\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.")))),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b, \u043a\u0430\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0444\u0430\u0439\u043b ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <kerberos />\n</clickhouse>\n")),(0,o.kt)("p",null,"\u0418\u043b\u0438, \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043b\u0430:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <kerberos>\n        <principal>HTTP/clickhouse.example.com@EXAMPLE.COM</principal>\n    </kerberos>\n</clickhouse>\n")),(0,o.kt)("p",null,"\u0418\u043b\u0438, \u0441 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u043f\u043e \u0440\u0435\u0430\u043b\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <kerberos>\n        <realm>EXAMPLE.COM</realm>\n    </kerberos>\n</clickhouse>\n")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u0412\u0430\u0436\u043d\u043e"')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"\u0412 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043e\u0431\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430. \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kerberos \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439.\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u0412 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0439 \u0441\u0435\u043a\u0446\u0438\u0438 `kerberos`. \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kerberos \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439.\n")),(0,o.kt)("h2",{id:"kerberos-as-an-external-authenticator-for-existing-users"},"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kerberos"),(0,o.kt)("p",null,"\u0423\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0435\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kerberos. \u041e\u0434\u043d\u0430\u043a\u043e, Kerberos-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 HTTP-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430."),(0,o.kt)("p",null,"\u0418\u043c\u044f \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043b\u0430 (principal name) \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u043c\u0435\u0435\u0442 \u0432\u0438\u0434:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"primary/instance@REALM"))),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u0447\u0442\u043e\u0431\u044b ",(0,o.kt)("em",{parentName:"p"},"primary")," \u0441\u043e\u0432\u043f\u0430\u043b\u043e \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ClickHouse, \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f Kerberos."),(0,o.kt)("h3",{id:"enabling-kerberos-in-users-xml"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kerberos \u0432 ",(0,o.kt)("inlineCode",{parentName:"h3"},"users.xml")),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0438\u043c\u0435\u043b \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kerberos, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0435\u043a\u0446\u0438\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"kerberos")," \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml")," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u043c\u0435\u0441\u0442\u043e \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," \u0438\u043b\u0438 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0439 \u0435\u0439)."),(0,o.kt)("p",null,"\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"realm")," ","\u2014"," \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044e \u043f\u043e \u0440\u0435\u0430\u043b\u043c (realm): \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0438 \u0440\u0435\u0430\u043b\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c, \u043f\u0440\u0438 \u0435\u0433\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.")))),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440, \u043a\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kerberos \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <users>\n        <!- ... --\x3e\n        <my_user>\n            <!- ... --\x3e\n            <kerberos>\n                <realm>EXAMPLE.COM</realm>\n            </kerberos>\n        </my_user>\n    </users>\n</clickhouse>\n")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u0412\u0430\u0436\u043d\u043e"')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u0434\u043b\u044f Kerberos-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u044b \u0443\u0430\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043b\u044f \u043d\u0435\u0433\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b. \u0415\u0441\u043b\u0438 \u043d\u0430\u0440\u044f\u0434\u0443 \u0441 `kerberos` \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, ClickHouse \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u0443.\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u0415\u0449\u0451 \u0440\u0430\u0437 \u043e\u0442\u043c\u0435\u0442\u0438\u043c, \u0447\u0442\u043e \u043a\u0440\u043e\u043c\u0435 `users.xml`, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0442\u0430\u043a\u0436\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c Kerberos \u0432 `config.xml`.\n")),(0,o.kt)("h3",{id:"enabling-kerberos-using-sql"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kerberos \u0447\u0435\u0440\u0435\u0437 SQL"),(0,o.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 Kerberos-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e, \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432.\n\u0415\u0441\u043b\u0438 SQL-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0432 ClickHouse, \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u0433\u043e \u0447\u0435\u0440\u0435\u0437 Kerberos, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e SQL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_user IDENTIFIED WITH kerberos REALM 'EXAMPLE.COM'\n")),(0,o.kt)("p",null,"\u0418\u043b\u0438, \u0431\u0435\u0437 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u0440\u0435\u0430\u043b\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_user IDENTIFIED WITH kerberos\n")))}m.isMDXComponent=!0}}]);