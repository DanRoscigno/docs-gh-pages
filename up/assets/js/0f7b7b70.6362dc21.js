"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65215],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?s.createElement(m,o(o({ref:t},d),{},{components:n})):s.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<a;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93956:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var s=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],r={sidebar_position:70,sidebar_label:"Testing",description:"Most of ClickHouse features can be tested with functional tests and they are mandatory to use for every change in ClickHouse code that can be tested that way."},l="ClickHouse Testing",u={unversionedId:"en/development/tests",id:"en/development/tests",title:"ClickHouse Testing",description:"Most of ClickHouse features can be tested with functional tests and they are mandatory to use for every change in ClickHouse code that can be tested that way.",source:"@site/docs/en/development/tests.md",sourceDirName:"en/development",slug:"/en/development/tests",permalink:"/docs-gh-pages/up/en/development/tests",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/development/tests.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,sidebar_label:"Testing",description:"Most of ClickHouse features can be tested with functional tests and they are mandatory to use for every change in ClickHouse code that can be tested that way."},sidebar:"english",previous:{title:"C++ Guide",permalink:"/docs-gh-pages/up/en/development/style"},next:{title:"Third-Party Libraries",permalink:"/docs-gh-pages/up/en/development/contrib"}},d={},c=[{value:"Functional Tests",id:"functional-tests",level:2},{value:"Running a Test Locally",id:"functional-test-locally",level:3},{value:"Adding a New Test",id:"adding-a-new-test",level:3},{value:"Choosing the Test Name",id:"choosing-the-test-name",level:3},{value:"Checking for an Error that Must Occur",id:"checking-for-an-error-that-must-occur",level:3},{value:"Testing a Distributed Query",id:"testing-a-distributed-query",level:3},{value:"Known Bugs",id:"known-bugs",level:2},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Unit Tests",id:"unit-tests",level:2},{value:"Performance Tests",id:"performance-tests",level:2},{value:"Test Tools and Scripts",id:"test-tools-and-scripts",level:2},{value:"Miscellaneous Tests",id:"miscellaneous-tests",level:2},{value:"Manual Testing",id:"manual-testing",level:2},{value:"Build Tests",id:"build-tests",level:2},{value:"Testing for Protocol Compatibility",id:"testing-for-protocol-compatibility",level:2},{value:"Help from the Compiler",id:"help-from-the-compiler",level:2},{value:"Sanitizers",id:"sanitizers",level:2},{value:"Address sanitizer",id:"address-sanitizer",level:3},{value:"Thread sanitizer",id:"thread-sanitizer",level:3},{value:"Memory sanitizer",id:"memory-sanitizer",level:3},{value:"Undefined behaviour sanitizer",id:"undefined-behaviour-sanitizer",level:3},{value:"Valgrind (Memcheck)",id:"valgrind-memcheck",level:3},{value:"Fuzzing",id:"fuzzing",level:2},{value:"Stress test",id:"stress-test",level:2},{value:"Thread Fuzzer",id:"thread-fuzzer",level:2},{value:"Security Audit",id:"security-audit",level:2},{value:"Static Analyzers",id:"static-analyzers",level:2},{value:"Hardening",id:"hardening",level:2},{value:"Runtime Integrity Checks",id:"runtime-integrity-checks",level:2},{value:"Code Style",id:"code-style",level:2},{value:"Test Coverage",id:"test-coverage",level:2},{value:"Tests for Tests",id:"tests-for-tests",level:2},{value:"Testflows",id:"testflows",level:2},{value:"Test Automation",id:"test-automation",level:2}],p={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clickhouse-testing"},"ClickHouse Testing"),(0,a.kt)("h2",{id:"functional-tests"},"Functional Tests"),(0,a.kt)("p",null,"Functional tests are the most simple and convenient to use. Most of ClickHouse features can be tested with functional tests and they are mandatory to use for every change in ClickHouse code that can be tested that way."),(0,a.kt)("p",null,"Each functional test sends one or multiple queries to the running ClickHouse server and compares the result with reference."),(0,a.kt)("p",null,"Tests are located in ",(0,a.kt)("inlineCode",{parentName:"p"},"queries")," directory. There are two subdirectories: ",(0,a.kt)("inlineCode",{parentName:"p"},"stateless")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stateful"),". Stateless tests run queries without any preloaded test data - they often create small synthetic datasets on the fly, within the test itself. Stateful tests require preloaded test data from ClickHouse and it is available to general public."),(0,a.kt)("p",null,"Each test can be one of two types: ",(0,a.kt)("inlineCode",{parentName:"p"},".sql")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".sh"),". ",(0,a.kt)("inlineCode",{parentName:"p"},".sql")," test is the simple SQL script that is piped to ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client --multiquery"),". ",(0,a.kt)("inlineCode",{parentName:"p"},".sh")," test is a script that is run by itself. SQL tests are generally preferable to ",(0,a.kt)("inlineCode",{parentName:"p"},".sh")," tests. You should use ",(0,a.kt)("inlineCode",{parentName:"p"},".sh")," tests only when you have to test some feature that cannot be exercised from pure SQL, such as piping some input data into ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," or testing ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-local"),"."),(0,a.kt)("h3",{id:"functional-test-locally"},"Running a Test Locally"),(0,a.kt)("p",null,"Start the ClickHouse server locally, listening on the default port (9000). To\nrun, for example, the test ",(0,a.kt)("inlineCode",{parentName:"p"},"01428_hash_set_nan_key"),", change to the repository\nfolder and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PATH=$PATH:<path to clickhouse-client> tests/clickhouse-test 01428_hash_set_nan_key\n")),(0,a.kt)("p",null,"For more options, see ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/clickhouse-test --help"),". You can simply run all tests or run subset of tests filtered by substring in test name: ",(0,a.kt)("inlineCode",{parentName:"p"},"./clickhouse-test substring"),". There are also options to run tests in parallel or in randomized order."),(0,a.kt)("h3",{id:"adding-a-new-test"},"Adding a New Test"),(0,a.kt)("p",null,"To add new test, create a ",(0,a.kt)("inlineCode",{parentName:"p"},".sql")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".sh")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"queries/0_stateless")," directory, check it manually and then generate ",(0,a.kt)("inlineCode",{parentName:"p"},".reference")," file in the following way: ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client --multiquery < 00000_test.sql > 00000_test.reference")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"./00000_test.sh > ./00000_test.reference"),"."),(0,a.kt)("p",null,"Tests should use (create, drop, etc) only tables in ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," database that is assumed to be created beforehand; also tests can use temporary tables."),(0,a.kt)("h3",{id:"choosing-the-test-name"},"Choosing the Test Name"),(0,a.kt)("p",null,"The name of the test starts with a five-digit prefix followed by a descriptive name, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"00422_hash_function_constexpr.sql"),". To choose the prefix, find the largest prefix already present in the directory, and increment it by one. In the meantime, some other tests might be added with the same numeric prefix, but this is OK and does not lead to any problems, you don't have to change it later."),(0,a.kt)("p",null,"Some tests are marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"shard")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"long")," in their names. ",(0,a.kt)("inlineCode",{parentName:"p"},"zookeeper")," is for tests that are using ZooKeeper. ",(0,a.kt)("inlineCode",{parentName:"p"},"shard")," is for tests that requires server to listen ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.*"),"; ",(0,a.kt)("inlineCode",{parentName:"p"},"distributed")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"global")," have the same meaning. ",(0,a.kt)("inlineCode",{parentName:"p"},"long")," is for tests that run slightly longer that one second. You can disable these groups of tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-zookeeper"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-shard")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-long")," options, respectively. Make sure to add a proper prefix to your test name if it needs ZooKeeper or distributed queries."),(0,a.kt)("h3",{id:"checking-for-an-error-that-must-occur"},"Checking for an Error that Must Occur"),(0,a.kt)("p",null,"Sometimes you want to test that a server error occurs for an incorrect query. We support special annotations for this in SQL tests, in the following form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select x; -- { serverError 49 }\n")),(0,a.kt)("p",null,"This test ensures that the server returns an error with code 49 about unknown column ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),". If there is no error, or the error is different, the test will fail. If you want to ensure that an error occurs on the client side, use ",(0,a.kt)("inlineCode",{parentName:"p"},"clientError")," annotation instead."),(0,a.kt)("p",null,"Do not check for a particular wording of error message, it may change in the future, and the test will needlessly break. Check only the error code. If the existing error code is not precise enough for your needs, consider adding a new one."),(0,a.kt)("h3",{id:"testing-a-distributed-query"},"Testing a Distributed Query"),(0,a.kt)("p",null,"If you want to use distributed queries in functional tests, you can leverage ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," table function with ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.{1..2}")," addresses for the server to query itself; or you can use predefined test clusters in server configuration file like ",(0,a.kt)("inlineCode",{parentName:"p"},"test_shard_localhost"),". Remember to add the words ",(0,a.kt)("inlineCode",{parentName:"p"},"shard")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"distributed")," to the test name, so that it is run in CI in correct configurations, where the server is configured to support distributed queries."),(0,a.kt)("h2",{id:"known-bugs"},"Known Bugs"),(0,a.kt)("p",null,"If we know some bugs that can be easily reproduced by functional tests, we place prepared functional tests in ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/queries/bugs")," directory. These tests will be moved to ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/queries/0_stateless")," when bugs are fixed."),(0,a.kt)("h2",{id:"integration-tests"},"Integration Tests"),(0,a.kt)("p",null,"Integration tests allow testing ClickHouse in clustered configuration and ClickHouse interaction with other servers like MySQL, Postgres, MongoDB. They are useful to emulate network splits, packet drops, etc. These tests are run under Docker and create multiple containers with various software."),(0,a.kt)("p",null,"See ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/integration/README.md")," on how to run these tests."),(0,a.kt)("p",null,"Note that integration of ClickHouse with third-party drivers is not tested. Also, we currently do not have integration tests with our JDBC and ODBC drivers."),(0,a.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"Unit tests are useful when you want to test not the ClickHouse as a whole, but a single isolated library or class. You can enable or disable build of tests with ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLE_TESTS")," CMake option. Unit tests (and other test programs) are located in ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," subdirectories across the code. To run unit tests, type ",(0,a.kt)("inlineCode",{parentName:"p"},"ninja test"),". Some tests use ",(0,a.kt)("inlineCode",{parentName:"p"},"gtest"),", but some are just programs that return non-zero exit code on test failure."),(0,a.kt)("p",null,"It\u2019s not necessary to have unit tests if the code is already covered by functional tests (and functional tests are usually much more simple to use)."),(0,a.kt)("p",null,"You can run individual gtest checks by calling the executable directly, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./src/unit_tests_dbms --gtest_filter=LocalAddress*\n")),(0,a.kt)("h2",{id:"performance-tests"},"Performance Tests"),(0,a.kt)("p",null,"Performance tests allow to measure and compare performance of some isolated part of ClickHouse on synthetic queries. Tests are located at ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/performance"),". Each test is represented by ",(0,a.kt)("inlineCode",{parentName:"p"},".xml")," file with description of test case. Tests are run with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker/test/performance-comparison")," tool . See the readme file for invocation."),(0,a.kt)("p",null,"Each test run one or multiple queries (possibly with combinations of parameters) in a loop."),(0,a.kt)("p",null,"If you want to improve performance of ClickHouse in some scenario, and if improvements can be observed on simple queries, it is highly recommended to write a performance test. It always makes sense to use ",(0,a.kt)("inlineCode",{parentName:"p"},"perf top")," or other ",(0,a.kt)("inlineCode",{parentName:"p"},"perf")," tools during your tests."),(0,a.kt)("h2",{id:"test-tools-and-scripts"},"Test Tools and Scripts"),(0,a.kt)("p",null,"Some programs in ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," directory are not prepared tests, but are test tools. For example, for ",(0,a.kt)("inlineCode",{parentName:"p"},"Lexer")," there is a tool ",(0,a.kt)("inlineCode",{parentName:"p"},"src/Parsers/tests/lexer")," that just do tokenization of stdin and writes colorized result to stdout. You can use these kind of tools as a code examples and for exploration and manual testing."),(0,a.kt)("h2",{id:"miscellaneous-tests"},"Miscellaneous Tests"),(0,a.kt)("p",null,"There are tests for machine learned models in ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/external_models"),". These tests are not updated and must be transferred to integration tests."),(0,a.kt)("p",null,"There is separate test for quorum inserts. This test run ClickHouse cluster on separate servers and emulate various failure cases: network split, packet drop (between ClickHouse nodes, between ClickHouse and ZooKeeper, between ClickHouse server and client, etc.), ",(0,a.kt)("inlineCode",{parentName:"p"},"kill -9"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kill -STOP")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kill -CONT")," , like ",(0,a.kt)("a",{parentName:"p",href:"https://aphyr.com/tags/Jepsen"},"Jepsen"),". Then the test checks that all acknowledged inserts was written and all rejected inserts was not."),(0,a.kt)("p",null,"Quorum test was written by separate team before ClickHouse was open-sourced. This team no longer work with ClickHouse. Test was accidentally written in Java. For these reasons, quorum test must be rewritten and moved to integration tests."),(0,a.kt)("h2",{id:"manual-testing"},"Manual Testing"),(0,a.kt)("p",null,"When you develop a new feature, it is reasonable to also test it manually. You can do it with the following steps:"),(0,a.kt)("p",null,"Build ClickHouse. Run ClickHouse from the terminal: change directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"programs/clickhouse-server")," and run it with ",(0,a.kt)("inlineCode",{parentName:"p"},"./clickhouse-server"),". It will use configuration (",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"users.xml")," and files within ",(0,a.kt)("inlineCode",{parentName:"p"},"config.d")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"users.d")," directories) from the current directory by default. To connect to ClickHouse server, run ",(0,a.kt)("inlineCode",{parentName:"p"},"programs/clickhouse-client/clickhouse-client"),"."),(0,a.kt)("p",null,"Note that all clickhouse tools (server, client, etc) are just symlinks to a single binary named ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse"),". You can find this binary at ",(0,a.kt)("inlineCode",{parentName:"p"},"programs/clickhouse"),". All tools can also be invoked as ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse tool")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-tool"),"."),(0,a.kt)("p",null,"Alternatively you can install ClickHouse package: either stable release from ClickHouse repository or you can build package for yourself with ",(0,a.kt)("inlineCode",{parentName:"p"},"./release")," in ClickHouse sources root. Then start the server with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo clickhouse start")," (or stop to stop the server). Look for logs at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/clickhouse-server.log"),"."),(0,a.kt)("p",null,"When ClickHouse is already installed on your system, you can build a new ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary and replace the existing binary:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo clickhouse stop\n$ sudo cp ./clickhouse /usr/bin/\n$ sudo clickhouse start\n")),(0,a.kt)("p",null,"Also you can stop system clickhouse-server and run your own with the same configuration but with logging to terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo clickhouse stop\n$ sudo -u clickhouse /usr/bin/clickhouse server --config-file /etc/clickhouse-server/config.xml\n")),(0,a.kt)("p",null,"Example with gdb:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo -u clickhouse gdb --args /usr/bin/clickhouse server --config-file /etc/clickhouse-server/config.xml\n")),(0,a.kt)("p",null,"If the system clickhouse-server is already running and you do not want to stop it, you can change port numbers in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml")," (or override them in a file in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.d")," directory), provide appropriate data path, and run it."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary has almost no dependencies and works across wide range of Linux distributions. To quick and dirty test your changes on a server, you can simply ",(0,a.kt)("inlineCode",{parentName:"p"},"scp")," your fresh built ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary to your server and then run it as in examples above."),(0,a.kt)("h2",{id:"build-tests"},"Build Tests"),(0,a.kt)("p",null,"Build tests allow to check that build is not broken on various alternative configurations and on some foreign systems. These tests are automated as well."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cross-compile for Darwin x86_64 (Mac OS X)"),(0,a.kt)("li",{parentName:"ul"},"cross-compile for FreeBSD x86_64"),(0,a.kt)("li",{parentName:"ul"},"cross-compile for Linux AArch64"),(0,a.kt)("li",{parentName:"ul"},"build on Ubuntu with libraries from system packages (discouraged)"),(0,a.kt)("li",{parentName:"ul"},"build with shared linking of libraries (discouraged)")),(0,a.kt)("p",null,"For example, build with system packages is bad practice, because we cannot guarantee what exact version of packages a system will have. But this is really needed by Debian maintainers. For this reason we at least have to support this variant of build. Another example: shared linking is a common source of trouble, but it is needed for some enthusiasts."),(0,a.kt)("p",null,"Though we cannot run all tests on all variant of builds, we want to check at least that various build variants are not broken. For this purpose we use build tests."),(0,a.kt)("p",null,"We also test that there are no translation units that are too long to compile or require too much RAM."),(0,a.kt)("p",null,"We also test that there are no too large stack frames."),(0,a.kt)("h2",{id:"testing-for-protocol-compatibility"},"Testing for Protocol Compatibility"),(0,a.kt)("p",null,"When we extend ClickHouse network protocol, we test manually that old clickhouse-client works with new clickhouse-server and new clickhouse-client works with old clickhouse-server (simply by running binaries from corresponding packages)."),(0,a.kt)("p",null,"We also test some cases automatically with integrational tests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if data written by old version of ClickHouse can be successfully read by the new version;"),(0,a.kt)("li",{parentName:"ul"},"do distributed queries work in a cluster with different ClickHouse versions.")),(0,a.kt)("h2",{id:"help-from-the-compiler"},"Help from the Compiler"),(0,a.kt)("p",null,"Main ClickHouse code (that is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"dbms")," directory) is built with ",(0,a.kt)("inlineCode",{parentName:"p"},"-Wall -Wextra -Werror")," and with some additional enabled warnings. Although these options are not enabled for third-party libraries."),(0,a.kt)("p",null,"Clang has even more useful warnings - you can look for them with ",(0,a.kt)("inlineCode",{parentName:"p"},"-Weverything")," and pick something to default build."),(0,a.kt)("p",null,"For production builds, clang is used, but we also test make gcc builds. For development, clang is usually more convenient to use. You can build on your own machine with debug mode (to save battery of your laptop), but please note that compiler is able to generate more warnings with ",(0,a.kt)("inlineCode",{parentName:"p"},"-O3")," due to better control flow and inter-procedure analysis. When building with clang in debug mode, debug version of ",(0,a.kt)("inlineCode",{parentName:"p"},"libc++")," is used that allows to catch more errors at runtime."),(0,a.kt)("h2",{id:"sanitizers"},"Sanitizers"),(0,a.kt)("h3",{id:"address-sanitizer"},"Address sanitizer"),(0,a.kt)("p",null,"We run functional, integration, stress and unit tests under ASan on per-commit basis."),(0,a.kt)("h3",{id:"thread-sanitizer"},"Thread sanitizer"),(0,a.kt)("p",null,"We run functional, integration, stress and unit tests under TSan on per-commit basis."),(0,a.kt)("h3",{id:"memory-sanitizer"},"Memory sanitizer"),(0,a.kt)("p",null,"We run functional, integration, stress and unit tests under MSan on per-commit basis."),(0,a.kt)("h3",{id:"undefined-behaviour-sanitizer"},"Undefined behaviour sanitizer"),(0,a.kt)("p",null,"We run functional, integration, stress and unit tests under UBSan on per-commit basis. The code of some third-party libraries is not sanitized for UB."),(0,a.kt)("h3",{id:"valgrind-memcheck"},"Valgrind (Memcheck)"),(0,a.kt)("p",null,"We used to run functional tests under Valgrind overnight, but don't do it anymore. It takes multiple hours. Currently there is one known false positive in ",(0,a.kt)("inlineCode",{parentName:"p"},"re2")," library, see ",(0,a.kt)("a",{parentName:"p",href:"https://research.swtch.com/sparse"},"this article"),"."),(0,a.kt)("h2",{id:"fuzzing"},"Fuzzing"),(0,a.kt)("p",null,"ClickHouse fuzzing is implemented both using ",(0,a.kt)("a",{parentName:"p",href:"https://llvm.org/docs/LibFuzzer.html"},"libFuzzer")," and random SQL queries.\nAll the fuzz testing should be performed with sanitizers (Address and Undefined)."),(0,a.kt)("p",null,"LibFuzzer is used for isolated fuzz testing of library code. Fuzzers are implemented as part of test code and have \u201c_fuzzer\u201d name postfixes.\nFuzzer example can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/Parsers/tests/lexer_fuzzer.cpp"),". LibFuzzer-specific configs, dictionaries and corpus are stored at ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/fuzz"),".\nWe encourage you to write fuzz tests for every functionality that handles user input."),(0,a.kt)("p",null,"Fuzzers are not built by default. To build fuzzers both ",(0,a.kt)("inlineCode",{parentName:"p"},"-DENABLE_FUZZING=1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-DENABLE_TESTS=1")," options should be set.\nWe recommend to disable Jemalloc while building fuzzers. Configuration used to integrate ClickHouse fuzzing to\nGoogle OSS-Fuzz can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"docker/fuzz"),"."),(0,a.kt)("p",null,"We also use simple fuzz test to generate random SQL queries and to check that the server does not die executing them.\nYou can find it in ",(0,a.kt)("inlineCode",{parentName:"p"},"00746_sql_fuzzy.pl"),". This test should be run continuously (overnight and longer)."),(0,a.kt)("p",null,"We also use sophisticated AST-based query fuzzer that is able to find huge amount of corner cases. It does random permutations and substitutions in queries AST. It remembers AST nodes from previous tests to use them for fuzzing of subsequent tests while processing them in random order. You can learn more about this fuzzer in ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/en/2021/fuzzing-clickhouse/"},"this blog article"),"."),(0,a.kt)("h2",{id:"stress-test"},"Stress test"),(0,a.kt)("p",null,"Stress tests are another case of fuzzing. It runs all functional tests in parallel in random order with a single server. Results of the tests are not checked."),(0,a.kt)("p",null,"It is checked that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"server does not crash, no debug or sanitizer traps are triggered;"),(0,a.kt)("li",{parentName:"ul"},"there are no deadlocks;"),(0,a.kt)("li",{parentName:"ul"},"the database structure is consistent;"),(0,a.kt)("li",{parentName:"ul"},"server can successfully stop after the test and start again without exceptions.")),(0,a.kt)("p",null,"There are five variants (Debug, ASan, TSan, MSan, UBSan)."),(0,a.kt)("h2",{id:"thread-fuzzer"},"Thread Fuzzer"),(0,a.kt)("p",null,"Thread Fuzzer (please don't mix up with Thread Sanitizer) is another kind of fuzzing that allows to randomize thread order of execution. It helps to find even more special cases."),(0,a.kt)("h2",{id:"security-audit"},"Security Audit"),(0,a.kt)("p",null,"Our Security Team did some basic overview of ClickHouse capabilities from the security standpoint."),(0,a.kt)("h2",{id:"static-analyzers"},"Static Analyzers"),(0,a.kt)("p",null,"We run ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-tidy")," on per-commit basis. ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-static-analyzer")," checks are also enabled. ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-tidy")," is also used for some style checks."),(0,a.kt)("p",null,"We have evaluated ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-tidy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Coverity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cppcheck"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PVS-Studio"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tscancode"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeQL"),". You will find instructions for usage in ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/instructions/")," directory."),(0,a.kt)("p",null,"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"CLion")," as an IDE, you can leverage some ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-tidy")," checks out of the box."),(0,a.kt)("p",null,"We also use ",(0,a.kt)("inlineCode",{parentName:"p"},"shellcheck")," for static analysis of shell scripts."),(0,a.kt)("h2",{id:"hardening"},"Hardening"),(0,a.kt)("p",null,"In debug build we are using custom allocator that does ASLR of user-level allocations."),(0,a.kt)("p",null,"We also manually protect memory regions that are expected to be readonly after allocation."),(0,a.kt)("p",null,'In debug build we also involve a customization of libc that ensures that no "harmful" (obsolete, insecure, not thread-safe) functions are called.'),(0,a.kt)("p",null,"Debug assertions are used extensively."),(0,a.kt)("p",null,'In debug build, if exception with "logical error" code (implies a bug) is being thrown, the program is terminated prematurely. It allows to use exceptions in release build but make it an assertion in debug build.'),(0,a.kt)("p",null,"Debug version of jemalloc is used for debug builds.\nDebug version of libc++ is used for debug builds."),(0,a.kt)("h2",{id:"runtime-integrity-checks"},"Runtime Integrity Checks"),(0,a.kt)("p",null,"Data stored on disk is checksummed. Data in MergeTree tables is checksummed in three ways simultaneously* (compressed data blocks, uncompressed data blocks, the total checksum across blocks). Data transferred over network between client and server or between servers is also checksummed. Replication ensures bit-identical data on replicas."),(0,a.kt)("p",null,"It is required to protect from faulty hardware (bit rot on storage media, bit flips in RAM on server, bit flips in RAM of network controller, bit flips in RAM of network switch, bit flips in RAM of client, bit flips on the wire). Note that bit flips are common and likely to occur even for ECC RAM and in presence of TCP checksums (if you manage to run thousands of servers processing petabytes of data each day). ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ooBAQIe0KlQ"},"See the video (russian)"),"."),(0,a.kt)("p",null,"ClickHouse provides diagnostics that will help ops engineers to find faulty hardware."),(0,a.kt)("p",null,"*"," and it is not slow."),(0,a.kt)("h2",{id:"code-style"},"Code Style"),(0,a.kt)("p",null,"Code style rules are described ",(0,a.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/development/style"},"here"),"."),(0,a.kt)("p",null,"To check for some common style violations, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"utils/check-style")," script."),(0,a.kt)("p",null,"To force proper style of your code, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-format"),". File ",(0,a.kt)("inlineCode",{parentName:"p"},".clang-format")," is located at the sources root. It mostly corresponding with our actual code style. But it\u2019s not recommended to apply ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-format")," to existing files because it makes formatting worse. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-format-diff")," tool that you can find in clang source repository."),(0,a.kt)("p",null,"Alternatively you can try ",(0,a.kt)("inlineCode",{parentName:"p"},"uncrustify")," tool to reformat your code. Configuration is in ",(0,a.kt)("inlineCode",{parentName:"p"},"uncrustify.cfg")," in the sources root. It is less tested than ",(0,a.kt)("inlineCode",{parentName:"p"},"clang-format"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CLion")," has its own code formatter that has to be tuned for our code style."),(0,a.kt)("p",null,"We also use ",(0,a.kt)("inlineCode",{parentName:"p"},"codespell")," to find typos in code. It is automated as well."),(0,a.kt)("h2",{id:"test-coverage"},"Test Coverage"),(0,a.kt)("p",null,"We also track test coverage but only for functional tests and only for clickhouse-server. It is performed on daily basis."),(0,a.kt)("h2",{id:"tests-for-tests"},"Tests for Tests"),(0,a.kt)("p",null,"There is automated check for flaky tests. It runs all new tests 100 times (for functional tests) or 10 times (for integration tests). If at least single time the test failed, it is considered flaky."),(0,a.kt)("h2",{id:"testflows"},"Testflows"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://testflows.com/"},"Testflows")," is an enterprise-grade open-source testing framework, which is used to test a subset of ClickHouse."),(0,a.kt)("h2",{id:"test-automation"},"Test Automation"),(0,a.kt)("p",null,"We run tests with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions"),"."),(0,a.kt)("p",null,"Build jobs and tests are run in Sandbox on per commit basis. Resulting packages and test results are published in GitHub and can be downloaded by direct links. Artifacts are stored for several months. When you send a pull request on GitHub, we tag it as \u201ccan be tested\u201d and our CI system will build ClickHouse packages (release, debug, with address sanitizer, etc) for you."),(0,a.kt)("p",null,"We do not use Travis CI due to the limit on time and computational power.\nWe do not use Jenkins. It was used before and now we are happy we are not using Jenkins."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/tests/"},"Original article")," "))}h.isMDXComponent=!0}}]);