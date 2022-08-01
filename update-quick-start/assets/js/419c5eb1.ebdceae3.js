"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[31922],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12972:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],a={sidebar_position:62,sidebar_label:"Constraints on Settings"},l="Constraints on Settings",c={unversionedId:"en/operations/settings/constraints-on-settings",id:"en/operations/settings/constraints-on-settings",title:"Constraints on Settings",description:"The constraints on settings can be defined in the profiles section of the user.xml configuration file and prohibit users from changing some of the settings with the SET query.",source:"@site/docs/en/operations/settings/constraints-on-settings.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/constraints-on-settings",permalink:"/docs-gh-pages/update-quick-start/en/operations/settings/constraints-on-settings",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/settings/constraints-on-settings.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{sidebar_position:62,sidebar_label:"Constraints on Settings"},sidebar:"english",previous:{title:"Settings Profiles",permalink:"/docs-gh-pages/update-quick-start/en/operations/settings/settings-profiles"},next:{title:"User Settings",permalink:"/docs-gh-pages/update-quick-start/en/operations/settings/settings-users"}},p={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"constraints-on-settings"},"Constraints on Settings"),(0,o.kt)("p",null,"The constraints on settings can be defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"profiles")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"user.xml")," configuration file and prohibit users from changing some of the settings with the ",(0,o.kt)("inlineCode",{parentName:"p"},"SET")," query.\nThe constraints are defined as the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <user_name>\n    <constraints>\n      <setting_name_1>\n        <min>lower_boundary</min>\n      </setting_name_1>\n      <setting_name_2>\n        <max>upper_boundary</max>\n      </setting_name_2>\n      <setting_name_3>\n        <min>lower_boundary</min>\n        <max>upper_boundary</max>\n      </setting_name_3>\n      <setting_name_4>\n        <readonly/>\n      </setting_name_4>\n    </constraints>\n  </user_name>\n</profiles>\n")),(0,o.kt)("p",null,"If the user tries to violate the constraints an exception is thrown and the setting isn\u2019t changed.\nThere are supported three types of constraints: ",(0,o.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," constraints specify upper and lower boundaries for a numeric setting and can be used in combination. The ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly")," constraint specifies that the user cannot change the corresponding setting at all."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")," Let ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml")," includes lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <default>\n    <max_memory_usage>10000000000</max_memory_usage>\n    <force_index_by_date>0</force_index_by_date>\n    ...\n    <constraints>\n      <max_memory_usage>\n        <min>5000000000</min>\n        <max>20000000000</max>\n      </max_memory_usage>\n      <force_index_by_date>\n        <readonly/>\n      </force_index_by_date>\n    </constraints>\n  </default>\n</profiles>\n")),(0,o.kt)("p",null,"The following queries all throw exceptions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET max_memory_usage=20000000001;\nSET max_memory_usage=4999999999;\nSET force_index_by_date=1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Code: 452, e.displayText() = DB::Exception: Setting max_memory_usage should not be greater than 20000000000.\nCode: 452, e.displayText() = DB::Exception: Setting max_memory_usage should not be less than 5000000000.\nCode: 452, e.displayText() = DB::Exception: Setting force_index_by_date should not be changed.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," profile has special handling: all the constraints defined for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," profile become the default constraints, so they restrict all the users until they\u2019re overridden explicitly for these users."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/constraints_on_settings/"},"Original article")," "))}d.isMDXComponent=!0}}]);