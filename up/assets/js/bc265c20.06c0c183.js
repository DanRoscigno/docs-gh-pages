"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[31689],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return r?i.createElement(m,o(o({ref:t},p),{},{components:r})):i.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13910:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),o=["components"],l={sidebar_position:71,sidebar_label:"Third-Party Libraries",description:"A list of third-party libraries used"},s="Third-Party Libraries Used",c={unversionedId:"en/development/contrib",id:"en/development/contrib",title:"Third-Party Libraries Used",description:"A list of third-party libraries used",source:"@site/docs/en/development/contrib.md",sourceDirName:"en/development",slug:"/en/development/contrib",permalink:"/docs-gh-pages/up/en/development/contrib",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/development/contrib.md",tags:[],version:"current",sidebarPosition:71,frontMatter:{sidebar_position:71,sidebar_label:"Third-Party Libraries",description:"A list of third-party libraries used"},sidebar:"english",previous:{title:"Testing",permalink:"/docs-gh-pages/up/en/development/tests"},next:{title:"Source Code Browser",permalink:"/docs-gh-pages/up/en/development/browse-code"}},p={},d=[{value:"Adding new third-party libraries and maintaining patches in third-party libraries",id:"adding-third-party-libraries",level:2}],u={toc:d};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"third-party-libraries-used"},"Third-Party Libraries Used"),(0,a.kt)("p",null,"ClickHouse utilizes third-party libraries for different purposes, e.g., to connect to other databases, to decode (encode) data during load (save) from (to) disk or to implement certain specialized SQL functions. To be independent of the available libraries in the target system, each third-party library is imported as a Git submodule into ClickHouse's source tree and compiled and linked with ClickHouse. A list of third-party libraries and their licenses can be obtained by the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT library_name, license_type, license_path FROM system.licenses ORDER BY library_name COLLATE 'en';\n")),(0,a.kt)("p",null,"(Note that the listed libraries are the ones located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"contrib/")," directory of the ClickHouse repository. Depending on the build options, some of of the libraries may have not been compiled, and as a result, their functionality may not be available at runtime."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://play.clickhouse.com/play?user=play#U0VMRUNUIGxpYnJhcnlfbmFtZSwgbGljZW5zZV90eXBlLCBsaWNlbnNlX3BhdGggRlJPTSBzeXN0ZW0ubGljZW5zZXMgT1JERVIgQlkgbGlicmFyeV9uYW1lIENPTExBVEUgJ2VuJw=="},"Example")),(0,a.kt)("h2",{id:"adding-third-party-libraries"},"Adding new third-party libraries and maintaining patches in third-party libraries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Each third-party library must reside in a dedicated directory under the ",(0,a.kt)("inlineCode",{parentName:"li"},"contrib/")," directory of the ClickHouse repository. Avoid dumps/copies of external code, instead use Git submodule feature to pull third-party code from an external upstream repository."),(0,a.kt)("li",{parentName:"ol"},"Submodules are listed in ",(0,a.kt)("inlineCode",{parentName:"li"},".gitmodule"),". If the external library can be used as-is, you may reference the upstream repository directly. Otherwise, i.e. the external library requires patching/customization, create a fork of the official repository in the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse"},"ClickHouse organization in GitHub"),"."),(0,a.kt)("li",{parentName:"ol"},"In the latter case, create a branch with ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/")," prefix from the branch you want to integrate, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/master")," (for ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),") or ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/release/vX.Y.Z")," (for a ",(0,a.kt)("inlineCode",{parentName:"li"},"release/vX.Y.Z")," tag). The purpose of this branch is to isolate customization of the library from upstream work. For example, pulls from the upstream repository into the fork will leave all ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/")," branches unaffected. Submodules in ",(0,a.kt)("inlineCode",{parentName:"li"},"contrib/")," must only track ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/")," branches of forked third-party repositories."),(0,a.kt)("li",{parentName:"ol"},"To patch a fork of a third-party library, create a dedicated branch with ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/")," prefix in the fork, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/fix-some-desaster"),". Finally, merge the patch branch into the custom tracking branch (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/master")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/release/vX.Y.Z"),") using a PR."),(0,a.kt)("li",{parentName:"ol"},"Always create patches of third-party libraries with the official repository in mind. Once a PR of a patch branch to the ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse/")," branch in the fork repository is done and the submodule version in ClickHouse official repository is bumped, consider opening another PR from the patch branch to the upstream library repository. This ensures, that 1) the contribution has more than a single use case and importance, 2) others will also benefit from it, 3) the change will not remain a maintenance burden solely on ClickHouse developers."),(0,a.kt)("li",{parentName:"ol"},"To update a submodule with changes in the upstream repository, first merge upstream ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," (or a new ",(0,a.kt)("inlineCode",{parentName:"li"},"versionX.Y.Z")," tag) into the ",(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse"),"-tracking branch in the fork repository. Conflicts with patches/customization will need to be resolved in this merge (see Step 4.). Once the merge is done, bump the submodule in ClickHouse to point to the new hash in the fork.")))}h.isMDXComponent=!0}}]);