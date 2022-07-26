"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29037],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44250:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={sidebar_label:"\u57df",sidebar_position:56},s="\u57df",c={unversionedId:"zh/sql-reference/data-types/domains/index",id:"zh/sql-reference/data-types/domains/index",title:"\u57df",description:"domains}",source:"@site/docs/zh/sql-reference/data-types/domains/index.md",sourceDirName:"zh/sql-reference/data-types/domains",slug:"/zh/sql-reference/data-types/domains/",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/domains/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/domains/index.md",tags:[],version:"current",sidebarPosition:56,frontMatter:{sidebar_label:"\u57df",sidebar_position:56},sidebar:"chinese",previous:{title:"\u4f4e\u57fa\u6570\u7c7b\u578b",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/lowcardinality"},next:{title:"ipv4",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/domains/ipv4"}},u={},p=[{value:"Domains\u7684\u989d\u5916\u7279\u6027",id:"domainsde-e-wai-te-xing",level:3},{value:"Domains\u7c7b\u578b\u7684\u9650\u5236",id:"domainslei-xing-de-xian-zhi",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"domains"},"\u57df"),(0,i.kt)("p",null,"Domain\u7c7b\u578b\u662f\u7279\u5b9a\u5b9e\u73b0\u7684\u7c7b\u578b\uff0c\u5b83\u603b\u662f\u4e0e\u67d0\u4e2a\u73b0\u5b58\u7684\u57fa\u7840\u7c7b\u578b\u4fdd\u6301\u4e8c\u8fdb\u5236\u517c\u5bb9\u7684\u540c\u65f6\u6dfb\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u7279\u6027\uff0c\u4ee5\u80fd\u591f\u5728\u7ef4\u6301\u78c1\u76d8\u6570\u636e\u4e0d\u53d8\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u8fd9\u4e9b\u989d\u5916\u7684\u7279\u6027\u3002\u76ee\u524dClickHouse\u6682\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49domain\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u5730\u65b9\u4f7f\u7528\u4e0eDomain\u7c7b\u578b\u4e8c\u8fdb\u5236\u517c\u5bb9\u7684\u57fa\u7840\u7c7b\u578b\uff0c\u90a3\u4e48\u5728\u76f8\u540c\u7684\u5730\u65b9\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528Domain\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528Domain\u7c7b\u578b\u4f5c\u4e3a\u8868\u4e2d\u5217\u7684\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9Domain\u7c7b\u578b\u7684\u5217\u8fdb\u884c\u8bfb/\u5199\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0eDomain\u4e8c\u8fdb\u5236\u517c\u5bb9\u7684\u57fa\u7840\u7c7b\u578b\u53ef\u4ee5\u4f5c\u4e3a\u7d22\u5f15\uff0c\u90a3\u4e48Domain\u7c7b\u578b\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u7d22\u5f15"),(0,i.kt)("li",{parentName:"ul"},"\u5c06Domain\u7c7b\u578b\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6")),(0,i.kt)("h3",{id:"domainsde-e-wai-te-xing"},"Domains\u7684\u989d\u5916\u7279\u6027"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u6267\u884cSHOW CREATE TABLE \u6216 DESCRIBE TABLE\u65f6\uff0c\u5176\u5bf9\u5e94\u7684\u5217\u603b\u662f\u5c55\u793a\u4e3aDomain\u7c7b\u578b\u7684\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},"\u5728INSERT INTO domain_table(domain_column) VALUES(\u2026)\u4e2d\u8f93\u5165\u6570\u636e\u603b\u662f\u4ee5\u66f4\u4eba\u6027\u5316\u7684\u683c\u5f0f\u8fdb\u884c\u8f93\u5165"),(0,i.kt)("li",{parentName:"ul"},"\u5728SELECT domain_column FROM domain_table\u4e2d\u6570\u636e\u603b\u662f\u4ee5\u66f4\u4eba\u6027\u5316\u7684\u683c\u5f0f\u8f93\u51fa"),(0,i.kt)("li",{parentName:"ul"},"\u5728INSERT INTO domain_table FORMAT CSV \u2026\u4e2d\uff0c\u5b9e\u73b0\u5916\u90e8\u6e90\u6570\u636e\u4ee5\u66f4\u4eba\u6027\u5316\u7684\u683c\u5f0f\u8f7d\u5165")),(0,i.kt)("h3",{id:"domainslei-xing-de-xian-zhi"},"Domains\u7c7b\u578b\u7684\u9650\u5236"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER TABLE"),"\u5c06\u57fa\u7840\u7c7b\u578b\u7684\u7d22\u5f15\u8f6c\u6362\u4e3aDomain\u7c7b\u578b\u7684\u7d22\u5f15\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u4ece\u5176\u4ed6\u5217\u6216\u8868\u63d2\u5165\u6570\u636e\u65f6\uff0c\u65e0\u6cd5\u5c06string\u7c7b\u578b\u7684\u503c\u9690\u5f0f\u5730\u8f6c\u6362\u4e3aDomain\u7c7b\u578b\u7684\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u5bf9\u5b58\u50a8\u4e3aDomain\u7c7b\u578b\u7684\u503c\u6dfb\u52a0\u7ea6\u675f\u3002")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/domains/overview"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);