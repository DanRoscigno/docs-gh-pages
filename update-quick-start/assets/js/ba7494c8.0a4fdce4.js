"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28056],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33049:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={},l="Integrating Rust libraries",u={unversionedId:"en/development/integrating_rust_libraries",id:"en/development/integrating_rust_libraries",title:"Integrating Rust libraries",description:"Rust library integration will be described based on BLAKE3 hash-function integration.",source:"@site/docs/en/development/integrating_rust_libraries.md",sourceDirName:"en/development",slug:"/en/development/integrating_rust_libraries",permalink:"/docs-gh-pages/update-quick-start/en/development/integrating_rust_libraries",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/development/integrating_rust_libraries.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"Source Code Browser",permalink:"/docs-gh-pages/update-quick-start/en/development/browse-code"},next:{title:"Native protocol",permalink:"/docs-gh-pages/update-quick-start/en/native-protocol"}},c={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-rust-libraries"},"Integrating Rust libraries"),(0,o.kt)("p",null,"Rust library integration will be described based on BLAKE3 hash-function integration."),(0,o.kt)("p",null,"The first step is forking a library and making necessary changes for Rust and C/C++ compatibility."),(0,o.kt)("p",null,"After forking library repository you need to change target settings in Cargo.toml file. Firstly, you need to switch build to static library. Secondly, you need to add cbindgen crate to the crate list. We will use it later to generate C-header automatically."),(0,o.kt)("p",null,"The next step is creating or editing the build.rs script for your library - and enable cbindgen to generate the header during library build. These lines were added to BLAKE3 build script for the same purpose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    let crate_dir = env::var("CARGO_MANIFEST_DIR").unwrap();\n\n    let package_name = env::var("CARGO_PKG_NAME").unwrap();\n    let output_file = ("include/".to_owned() + &format!("{}.h", package_name)).to_string();\n\n    match cbindgen::generate(&crate_dir) {\n        Ok(header) => {\n            header.write_to_file(&output_file);\n        }\n        Err(err) => {\n            panic!("{}", err)\n        }\n    }\n')),(0,o.kt)("p",null,"As you can see, script sets the output directory and launches header generation."),(0,o.kt)("p",null,"The next step is to add CMake files into library directory, so it can build with other submodules. As you can see, BLAKE3 main directory contains two CMake files - CMakeLists.txt and build_rust_lib.cmake. The second one is a function, which calls cargo build and sets all needed paths for library build. You should copy it to your library and then you can adjust cargo flags and other settings for you library needs."),(0,o.kt)("p",null,"When finished with CMake configuration, you should move on to create a C/C++ compatible API for your library. Let us see BLAKE3's method blake3_apply_shim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#[no_mangle]\npub unsafe extern "C" fn blake3_apply_shim(\n    begin: *const c_char,\n    _size: u32,\n    out_char_data: *mut u8,\n) -> *mut c_char {\n    if begin.is_null() {\n        let err_str = CString::new("input was a null pointer").unwrap();\n        return err_str.into_raw();\n    }\n    let mut hasher = Hasher::new();\n    let input_bytes = CStr::from_ptr(begin);\n    let input_res = input_bytes.to_bytes();\n    hasher.update(input_res);\n    let mut reader = hasher.finalize_xof();\n    reader.fill(std::slice::from_raw_parts_mut(out_char_data, OUT_LEN));\n    std::ptr::null_mut()\n}\n')),(0,o.kt)("p",null,"This method gets C-compatible string, its size and output string pointer as input. Then, it converts C-compatible inputs into types that are used by actual library methods and calls them. After that, it should convert library methods' outputs back into C-compatible type. In that particular case library supported direct writing into pointer by method fill(), so the conversion was not needed. The main advice here is to create less methods, so you will need to do less conversions on each method call and won't create much overhead."),(0,o.kt)("p",null,"Also, you should use attribute #","[no_mangle]"," and ",(0,o.kt)("inlineCode",{parentName:"p"},'extern "C"')," for every C-compatible attribute. Without it library can compile incorrectly and cbindgen won't launch header autogeneration."),(0,o.kt)("p",null,"After all these steps you can test your library in a small project to find all problems with compatibility or header generation. If any problems occur during header generation, you can try to configure it with cbindgen.toml file (you can find an example of it in BLAKE3 directory or a template here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eqrion/cbindgen/blob/master/template.toml"},"https://github.com/eqrion/cbindgen/blob/master/template.toml"),"). If everything works correctly, you can finally integrate its methods into ClickHouse."),(0,o.kt)("p",null,"In addition, some problems with integration are worth noting here:\n1) Some architectures may require special cargo flags or build.rs configurations, so you may want to test cross-compilation for different platforms first.\n2) MemorySanitizer can cause false-positive reports as it's unable to see if some variables in Rust are initialized or not. It was solved with writing a method with more explicit definition for some variables, although this implementation of method is slower and is used only to fix MemorySanitizer builds."))}m.isMDXComponent=!0}}]);