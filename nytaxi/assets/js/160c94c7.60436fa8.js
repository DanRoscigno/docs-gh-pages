"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85899],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),y=i,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15861:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={sidebar_position:46,sidebar_label:"Polygon Dictionaries With Grids"},s="Polygon dictionaries",c={unversionedId:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon",id:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon",title:"Polygon dictionaries",description:"Polygon dictionaries allow you to efficiently search for the polygon containing specified points.",source:"@site/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon.md",sourceDirName:"en/sql-reference/dictionaries/external-dictionaries",slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"Polygon Dictionaries With Grids"},sidebar:"english",previous:{title:"Hierarchical dictionaries",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical"},next:{title:"Internal Dictionaries",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/dictionaries/internal-dicts"}},p={},u=[],d={toc:u};function y(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"polygon-dictionaries"},"Polygon dictionaries"),(0,a.kt)("p",null,"Polygon dictionaries allow you to efficiently search for the polygon containing specified points.\nFor example: defining a city area by geographical coordinates."),(0,a.kt)("p",null,"Example of a polygon dictionary configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <structure>\n        <key>\n            <name>key</name>\n            <type>Array(Array(Array(Array(Float64))))</type>\n        </key>\n\n        <attribute>\n            <name>name</name>\n            <type>String</type>\n            <null_value></null_value>\n        </attribute>\n\n        <attribute>\n            <name>value</name>\n            <type>UInt64</type>\n            <null_value>0</null_value>\n        </attribute>\n    </structure>\n\n    <layout>\n        <polygon>\n            <store_polygon_key_column>1</store_polygon_key_column>\n        </polygon>\n    </layout>\n\n    ...\n</dictionary>\n")),(0,a.kt)("p",null,"The corresponding ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/statements/create/dictionary#create-dictionary-query"},"DDL-query"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY polygon_dict_name (\n    key Array(Array(Array(Array(Float64)))),\n    name String,\n    value UInt64\n)\nPRIMARY KEY key\nLAYOUT(POLYGON(STORE_POLYGON_KEY_COLUMN 1))\n...\n")),(0,a.kt)("p",null,"When configuring the polygon dictionary, the key must have one of two types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A simple polygon. It is an array of points."),(0,a.kt)("li",{parentName:"ul"},"MultiPolygon. It is an array of polygons. Each polygon is a two-dimensional array of points. The first element of this array is the outer boundary of the polygon, and subsequent elements specify areas to be excluded from it.")),(0,a.kt)("p",null,"Points can be specified as an array or a tuple of their coordinates. In the current implementation, only two-dimensional points are supported."),(0,a.kt)("p",null,"The user can ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"upload their own data")," in all formats supported by ClickHouse."),(0,a.kt)("p",null,"There are 3 types of ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"in-memory storage")," available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POLYGON_SIMPLE"),". This is a naive implementation, where a linear pass through all polygons is made for each query, and membership is checked for each one without using additional indexes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POLYGON_INDEX_EACH"),". A separate index is built for each polygon, which allows you to quickly check whether it belongs in most cases (optimized for geographical regions).\nAlso, a grid is superimposed on the area under consideration, which significantly narrows the number of polygons under consideration.\nThe grid is created by recursively dividing the cell into 16 equal parts and is configured with two parameters.\nThe division stops when the recursion depth reaches ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_DEPTH")," or when the cell crosses no more than ",(0,a.kt)("inlineCode",{parentName:"p"},"MIN_INTERSECTIONS")," polygons.\nTo respond to the query, there is a corresponding cell, and the index for the polygons stored in it is accessed alternately.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POLYGON_INDEX_CELL"),". This placement also creates the grid described above. The same options are available. For each sheet cell, an index is built on all pieces of polygons that fall into it, which allows you to quickly respond to a request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POLYGON"),". Synonym to ",(0,a.kt)("inlineCode",{parentName:"p"},"POLYGON_INDEX_CELL"),"."))),(0,a.kt)("p",null,"Dictionary queries are carried out using standard ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/sql-reference/functions/ext-dict-functions"},"functions")," for working with external dictionaries.\nAn important difference is that here the keys will be the points for which you want to find the polygon containing them."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Example of working with the dictionary defined above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE points (\n    x Float64,\n    y Float64\n)\n...\nSELECT tuple(x, y) AS key, dictGet(dict_name, 'name', key), dictGet(dict_name, 'value', key) FROM points ORDER BY x, y;\n")),(0,a.kt)("p",null,"As a result of executing the last command for each point in the 'points' table, a minimum area polygon containing this point will be found, and the requested attributes will be output."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"You can read columns from polygon dictionaries via SELECT query, just turn on the ",(0,a.kt)("inlineCode",{parentName:"p"},"store_polygon_key_column = 1")," in the dictionary configuration or corresponding DDL-query."),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE polygons_test_table\n(\n    key Array(Array(Array(Tuple(Float64, Float64)))),\n    name String\n) ENGINE = TinyLog;\n\nINSERT INTO polygons_test_table VALUES ([[[(3, 1), (0, 1), (0, -1), (3, -1)]]], 'Value');\n\nCREATE DICTIONARY polygons_test_dictionary\n(\n    key Array(Array(Array(Tuple(Float64, Float64)))),\n    name String\n)\nPRIMARY KEY key\nSOURCE(CLICKHOUSE(TABLE 'polygons_test_table'))\nLAYOUT(POLYGON(STORE_POLYGON_KEY_COLUMN 1))\nLIFETIME(0);\n\nSELECT * FROM polygons_test_dictionary;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500key\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500name\u2500\u2500\u2510\n\u2502 [[[(3,1),(0,1),(0,-1),(3,-1)]]] \u2502 Value \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}y.isMDXComponent=!0}}]);