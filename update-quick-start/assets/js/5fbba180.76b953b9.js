"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10326],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),s=(n(67294),n(3905)),r=["components"],i={sidebar_label:"Installation",sidebar_position:1,keywords:["clickhouse","install","installation","docs"],description:"ClickHouse can run on any Linux, FreeBSD, or Mac OS X with x86_64, AArch64, or PowerPC64LE CPU architecture.",slug:"/en/getting-started/install"},l="Installation",c={unversionedId:"en/getting-started/install",id:"en/getting-started/install",title:"Installation",description:"ClickHouse can run on any Linux, FreeBSD, or Mac OS X with x86_64, AArch64, or PowerPC64LE CPU architecture.",source:"@site/docs/en/getting-started/install.md",sourceDirName:"en/getting-started",slug:"/en/getting-started/install",permalink:"/docs-gh-pages/update-quick-start/en/getting-started/install",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Installation",sidebar_position:1,keywords:["clickhouse","install","installation","docs"],description:"ClickHouse can run on any Linux, FreeBSD, or Mac OS X with x86_64, AArch64, or PowerPC64LE CPU architecture.",slug:"/en/getting-started/install"},sidebar:"english",previous:{title:"Getting Started",permalink:"/docs-gh-pages/update-quick-start/en/getting-started"},next:{title:"Playground",permalink:"/docs-gh-pages/update-quick-start/en/getting-started/playground"}},u={},p=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Available Installation Options",id:"available-installation-options",level:2},{value:"From DEB Packages",id:"install-from-deb-packages",level:3},{value:"Packages",id:"packages",level:4},{value:"From RPM Packages",id:"from-rpm-packages",level:3},{value:"From Tgz Archives",id:"from-tgz-archives",level:3},{value:"From Docker Image",id:"from-docker-image",level:3},{value:"Single Binary",id:"from-single-binary",level:3},{value:"From Precompiled Binaries for Non-Standard Environments",id:"from-binaries-non-linux",level:3},{value:"From Sources",id:"from-sources",level:3},{value:"Launch",id:"launch",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"installation"},"Installation"),(0,s.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,s.kt)("p",null,"ClickHouse can run on any Linux, FreeBSD, or Mac OS X with x86_64, AArch64, or PowerPC64LE CPU architecture."),(0,s.kt)("p",null,"Official pre-built binaries are typically compiled for x86_64 and leverage SSE 4.2 instruction set, so unless otherwise stated usage of CPU that supports it becomes an additional system requirement. Here\u2019s the command to check if current CPU has support for SSE 4.2:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ grep -q sse4_2 /proc/cpuinfo && echo "SSE 4.2 supported" || echo "SSE 4.2 not supported"\n')),(0,s.kt)("p",null,"To run ClickHouse on processors that do not support SSE 4.2 or have AArch64 or PowerPC64LE architecture, you should ",(0,s.kt)("a",{parentName:"p",href:"#from-sources"},"build ClickHouse from sources")," with proper configuration adjustments."),(0,s.kt)("h2",{id:"available-installation-options"},"Available Installation Options"),(0,s.kt)("h3",{id:"install-from-deb-packages"},"From DEB Packages"),(0,s.kt)("p",null,"It is recommended to use official pre-compiled ",(0,s.kt)("inlineCode",{parentName:"p"},"deb")," packages for Debian or Ubuntu. Run these commands to install packages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get install -y apt-transport-https ca-certificates dirmngr\nsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 8919F6BD2B48D754\n\necho "deb https://packages.clickhouse.com/deb stable main" | sudo tee \\\n    /etc/apt/sources.list.d/clickhouse.list\nsudo apt-get update\n\nsudo apt-get install -y clickhouse-server clickhouse-client\n\nsudo service clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you\'ve set up a password.\n')),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Deprecated Method for installing deb-packages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get install apt-transport-https ca-certificates dirmngr\nsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv E0C56BD4\n\necho "deb https://repo.clickhouse.com/deb/stable/ main/" | sudo tee \\\n    /etc/apt/sources.list.d/clickhouse.list\nsudo apt-get update\n\nsudo apt-get install -y clickhouse-server clickhouse-client\n\nsudo service clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you set up a password.\n'))),(0,s.kt)("p",null,"You can replace ",(0,s.kt)("inlineCode",{parentName:"p"},"stable")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"lts")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"testing")," to use different ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/faq/operations/production"},"release trains")," based on your needs."),(0,s.kt)("p",null,"You can also download and install packages manually from ",(0,s.kt)("a",{parentName:"p",href:"https://packages.clickhouse.com/deb/pool/stable"},"here"),"."),(0,s.kt)("h4",{id:"packages"},"Packages"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"clickhouse-common-static")," \u2014 Installs ClickHouse compiled binary files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"clickhouse-server")," \u2014 Creates a symbolic link for ",(0,s.kt)("inlineCode",{parentName:"li"},"clickhouse-server")," and installs the default server configuration."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u2014 Creates a symbolic link for ",(0,s.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," and other client-related tools. and installs client configuration files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"clickhouse-common-static-dbg")," \u2014 Installs ClickHouse compiled binary files with debug info.")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you need to install specific version of ClickHouse you have to install all packages with the same version:\n",(0,s.kt)("inlineCode",{parentName:"p"},"sudo apt-get install clickhouse-server=21.8.5.7 clickhouse-client=21.8.5.7 clickhouse-common-static=21.8.5.7")))),(0,s.kt)("h3",{id:"from-rpm-packages"},"From RPM Packages"),(0,s.kt)("p",null,"It is recommended to use official pre-compiled ",(0,s.kt)("inlineCode",{parentName:"p"},"rpm")," packages for CentOS, RedHat, and all other rpm-based Linux distributions."),(0,s.kt)("p",null,"First, you need to add the official repository:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo yum install -y yum-utils\nsudo yum-config-manager --add-repo https://packages.clickhouse.com/rpm/clickhouse.repo\nsudo yum install -y clickhouse-server clickhouse-client\n\nsudo /etc/init.d/clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you set up a password.\n')),(0,s.kt)("details",{markdown:"1"},(0,s.kt)("summary",null,"Deprecated Method for installing rpm-packages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo yum install yum-utils\nsudo rpm --import https://repo.clickhouse.com/CLICKHOUSE-KEY.GPG\nsudo yum-config-manager --add-repo https://repo.clickhouse.com/rpm/clickhouse.repo\nsudo yum install clickhouse-server clickhouse-client\n\nsudo /etc/init.d/clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you set up a password.\n'))),(0,s.kt)("p",null,"If you want to use the most recent version, replace ",(0,s.kt)("inlineCode",{parentName:"p"},"stable")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"testing")," (this is recommended for your testing environments). ",(0,s.kt)("inlineCode",{parentName:"p"},"prestable")," is sometimes also available."),(0,s.kt)("p",null,"Then run these commands to install packages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install clickhouse-server clickhouse-client\n")),(0,s.kt)("p",null,"You can also download and install packages manually from ",(0,s.kt)("a",{parentName:"p",href:"https://packages.clickhouse.com/rpm/stable"},"here"),"."),(0,s.kt)("h3",{id:"from-tgz-archives"},"From Tgz Archives"),(0,s.kt)("p",null,"It is recommended to use official pre-compiled ",(0,s.kt)("inlineCode",{parentName:"p"},"tgz")," archives for all Linux distributions, where installation of ",(0,s.kt)("inlineCode",{parentName:"p"},"deb")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"rpm")," packages is not possible."),(0,s.kt)("p",null,"The required version can be downloaded with ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"wget")," from repository ",(0,s.kt)("a",{parentName:"p",href:"https://packages.clickhouse.com/tgz/"},"https://packages.clickhouse.com/tgz/"),".\nAfter that downloaded archives should be unpacked and installed with installation scripts. Example for the latest stable version:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'LATEST_VERSION=$(curl -s https://packages.clickhouse.com/tgz/stable/ | \\\n    grep -Eo \'[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\' | sort -V -r | head -n 1)\nexport LATEST_VERSION\n\ncase $(uname -m) in\n  x86_64) ARCH=amd64 ;;\n  aarch64) ARCH=arm64 ;;\n  *) echo "Unknown architecture $(uname -m)"; exit 1 ;;\nesac\n\nfor PKG in clickhouse-common-static clickhouse-common-static-dbg clickhouse-server clickhouse-client\ndo\n  curl -fO "https://packages.clickhouse.com/tgz/stable/$PKG-$LATEST_VERSION-${ARCH}.tgz" \\\n    || curl -fO "https://packages.clickhouse.com/tgz/stable/$PKG-$LATEST_VERSION.tgz"\ndone\n\nexit 0\n\ntar -xzvf "clickhouse-common-static-$LATEST_VERSION-${ARCH}.tgz" \\\n  || tar -xzvf "clickhouse-common-static-$LATEST_VERSION.tgz"\nsudo "clickhouse-common-static-$LATEST_VERSION/install/doinst.sh"\n\ntar -xzvf "clickhouse-common-static-dbg-$LATEST_VERSION-${ARCH}.tgz" \\\n  || tar -xzvf "clickhouse-common-static-dbg-$LATEST_VERSION.tgz"\nsudo "clickhouse-common-static-dbg-$LATEST_VERSION/install/doinst.sh"\n\ntar -xzvf "clickhouse-server-$LATEST_VERSION-${ARCH}.tgz" \\\n  || tar -xzvf "clickhouse-server-$LATEST_VERSION.tgz"\nsudo "clickhouse-server-$LATEST_VERSION/install/doinst.sh"\nsudo /etc/init.d/clickhouse-server start\n\ntar -xzvf "clickhouse-client-$LATEST_VERSION-${ARCH}.tgz" \\\n  || tar -xzvf "clickhouse-client-$LATEST_VERSION.tgz"\nsudo "clickhouse-client-$LATEST_VERSION/install/doinst.sh"\n')),(0,s.kt)("details",{markdown:"1"},(0,s.kt)("summary",null,"Deprecated Method for installing tgz archives"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export LATEST_VERSION=$(curl -s https://repo.clickhouse.com/tgz/stable/ | \\\n    grep -Eo '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' | sort -V -r | head -n 1)\ncurl -O https://repo.clickhouse.com/tgz/stable/clickhouse-common-static-$LATEST_VERSION.tgz\ncurl -O https://repo.clickhouse.com/tgz/stable/clickhouse-common-static-dbg-$LATEST_VERSION.tgz\ncurl -O https://repo.clickhouse.com/tgz/stable/clickhouse-server-$LATEST_VERSION.tgz\ncurl -O https://repo.clickhouse.com/tgz/stable/clickhouse-client-$LATEST_VERSION.tgz\n\ntar -xzvf clickhouse-common-static-$LATEST_VERSION.tgz\nsudo clickhouse-common-static-$LATEST_VERSION/install/doinst.sh\n\ntar -xzvf clickhouse-common-static-dbg-$LATEST_VERSION.tgz\nsudo clickhouse-common-static-dbg-$LATEST_VERSION/install/doinst.sh\n\ntar -xzvf clickhouse-server-$LATEST_VERSION.tgz\nsudo clickhouse-server-$LATEST_VERSION/install/doinst.sh\nsudo /etc/init.d/clickhouse-server start\n\ntar -xzvf clickhouse-client-$LATEST_VERSION.tgz\nsudo clickhouse-client-$LATEST_VERSION/install/doinst.sh\n"))),(0,s.kt)("p",null,"For production environments, it\u2019s recommended to use the latest ",(0,s.kt)("inlineCode",{parentName:"p"},"stable"),"-version. You can find its number on GitHub page ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tags"},"https://github.com/ClickHouse/ClickHouse/tags")," with postfix ",(0,s.kt)("inlineCode",{parentName:"p"},"-stable"),"."),(0,s.kt)("h3",{id:"from-docker-image"},"From Docker Image"),(0,s.kt)("p",null,"To run ClickHouse inside Docker follow the guide on ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/clickhouse/clickhouse-server/"},"Docker Hub"),". Those images use official ",(0,s.kt)("inlineCode",{parentName:"p"},"deb")," packages inside."),(0,s.kt)("h3",{id:"from-single-binary"},"Single Binary"),(0,s.kt)("p",null,"You can install ClickHouse on Linux using a single portable binary from the latest commit of the ",(0,s.kt)("inlineCode",{parentName:"p"},"master")," branch: ","[https://builds.clickhouse.com/master/amd64/clickhouse]","."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/amd64/clickhouse' && chmod a+x clickhouse\nsudo ./clickhouse install\n")),(0,s.kt)("h3",{id:"from-binaries-non-linux"},"From Precompiled Binaries for Non-Standard Environments"),(0,s.kt)("p",null,"For non-Linux operating systems and for AArch64 CPU architecture, ClickHouse builds are provided as a cross-compiled binary from the latest commit of the ",(0,s.kt)("inlineCode",{parentName:"p"},"master")," branch (with a few hours delay)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://builds.clickhouse.com/master/macos/clickhouse"},"MacOS x86_64"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/macos/clickhouse' && chmod a+x ./clickhouse\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://builds.clickhouse.com/master/macos-aarch64/clickhouse"},"MacOS Aarch64 (Apple Silicon)"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/macos-aarch64/clickhouse' && chmod a+x ./clickhouse\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://builds.clickhouse.com/master/freebsd/clickhouse"},"FreeBSD x86_64"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/freebsd/clickhouse' && chmod a+x ./clickhouse\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://builds.clickhouse.com/master/aarch64/clickhouse"},"Linux AArch64"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/aarch64/clickhouse' && chmod a+x ./clickhouse\n")))),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo ./clickhouse install")," to install ClickHouse system-wide (also with needed configuration files, configuring users etc.). Then run ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse start")," commands to start the clickhouse-server and ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," to connect to it."),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse client")," to connect to the server, or ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse local")," to process local data."),(0,s.kt)("h3",{id:"from-sources"},"From Sources"),(0,s.kt)("p",null,"To manually compile ClickHouse, follow the instructions for ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/development/build"},"Linux")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/development/build-osx"},"Mac OS X"),"."),(0,s.kt)("p",null,"You can compile packages and install them or use programs without installing packages. Also by building manually you can disable SSE 4.2 requirement or build for AArch64 CPUs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  Client: programs/clickhouse-client\n  Server: programs/clickhouse-server\n")),(0,s.kt)("p",null,"You\u2019ll need to create a data and metadata folders and ",(0,s.kt)("inlineCode",{parentName:"p"},"chown")," them for the desired user. Their paths can be changed in server config (src/programs/server/config.xml), by default they are:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  /var/lib/clickhouse/data/default/\n  /var/lib/clickhouse/metadata/default/\n")),(0,s.kt)("p",null,"On Gentoo, you can just use ",(0,s.kt)("inlineCode",{parentName:"p"},"emerge clickhouse")," to install ClickHouse from sources."),(0,s.kt)("h2",{id:"launch"},"Launch"),(0,s.kt)("p",null,"To start the server as a daemon, run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo clickhouse start\n")),(0,s.kt)("p",null,"There are also other ways to run ClickHouse:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service clickhouse-server start\n")),(0,s.kt)("p",null,"If you do not have ",(0,s.kt)("inlineCode",{parentName:"p"},"service")," command, run as"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo /etc/init.d/clickhouse-server start\n")),(0,s.kt)("p",null,"If you have ",(0,s.kt)("inlineCode",{parentName:"p"},"systemctl")," command, run as"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl start clickhouse-server.service\n")),(0,s.kt)("p",null,"See the logs in the ",(0,s.kt)("inlineCode",{parentName:"p"},"/var/log/clickhouse-server/")," directory."),(0,s.kt)("p",null,"If the server does not start, check the configurations in the file ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.xml"),"."),(0,s.kt)("p",null,"You can also manually launch the server from the console:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-server --config-file=/etc/clickhouse-server/config.xml\n")),(0,s.kt)("p",null,"In this case, the log will be printed to the console, which is convenient during development.\nIf the configuration file is in the current directory, you do not need to specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"--config-file")," parameter. By default, it uses ",(0,s.kt)("inlineCode",{parentName:"p"},"./config.xml"),"."),(0,s.kt)("p",null,"ClickHouse supports access restriction settings. They are located in the ",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml")," file (next to ",(0,s.kt)("inlineCode",{parentName:"p"},"config.xml"),").\nBy default, access is allowed from anywhere for the ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," user, without a password. See ",(0,s.kt)("inlineCode",{parentName:"p"},"user/default/networks"),".\nFor more information, see the section ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/configuration-files"},"\u201cConfiguration Files\u201d"),"."),(0,s.kt)("p",null,"After launching server, you can use the command-line client to connect to it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-client\n")),(0,s.kt)("p",null,"By default, it connects to ",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:9000")," on behalf of the user ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," without a password. It can also be used to connect to a remote server using ",(0,s.kt)("inlineCode",{parentName:"p"},"--host")," argument."),(0,s.kt)("p",null,"The terminal must use UTF-8 encoding.\nFor more information, see the section ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/interfaces/cli"},"\u201cCommand-line client\u201d"),"."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ ./clickhouse-client\nClickHouse client version 0.0.18749.\nConnecting to localhost:9000.\nConnected to ClickHouse server version 0.0.18749.\n\n:) SELECT 1\n\nSELECT 1\n\n\u250c\u25001\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.003 sec.\n\n:)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Congratulations, the system works!")),(0,s.kt)("p",null,"To continue experimenting, you can download one of the test data sets or go through ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/tutorial"},"tutorial"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting_started/install/"},"Original article")," "))}m.isMDXComponent=!0}}]);