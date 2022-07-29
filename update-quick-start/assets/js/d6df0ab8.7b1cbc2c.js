"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92215],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},o),{},{components:n})):a.createElement(k,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_position:67,sidebar_label:"Encryption"},p="Encryption functions",c={unversionedId:"en/sql-reference/functions/encryption-functions",id:"en/sql-reference/functions/encryption-functions",title:"Encryption functions",description:"These functions  implement encryption and decryption of data with AES (Advanced Encryption Standard) algorithm.",source:"@site/docs/en/sql-reference/functions/encryption-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/encryption-functions",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/encryption-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/encryption-functions.md",tags:[],version:"current",sidebarPosition:67,frontMatter:{sidebar_position:67,sidebar_label:"Encryption"},sidebar:"english",previous:{title:"Tuples",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/tuple-functions"},next:{title:"NLP",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/functions/nlp-functions"}},o={},u=[{value:"encrypt",id:"encrypt",level:2},{value:"aes_encrypt_mysql",id:"aes_encrypt_mysql",level:2},{value:"decrypt",id:"decrypt",level:2},{value:"aes_decrypt_mysql",id:"aes_decrypt_mysql",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"encryption-functions"},"Encryption functions"),(0,i.kt)("p",null,"These functions  implement encryption and decryption of data with AES (Advanced Encryption Standard) algorithm."),(0,i.kt)("p",null,"Key length depends on encryption mode. It is 16, 24, and 32 bytes long for ",(0,i.kt)("inlineCode",{parentName:"p"},"-128-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-196-"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"-256-")," modes respectively."),(0,i.kt)("p",null,"Initialization vector length is always 16 bytes (bytes in excess of 16 are ignored)."),(0,i.kt)("p",null,"Note that these functions work slowly until ClickHouse 21.1."),(0,i.kt)("h2",{id:"encrypt"},"encrypt"),(0,i.kt)("p",null,"This function encrypts data using these modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aes-128-ecb, aes-192-ecb, aes-256-ecb"),(0,i.kt)("li",{parentName:"ul"},"aes-128-cbc, aes-192-cbc, aes-256-cbc"),(0,i.kt)("li",{parentName:"ul"},"aes-128-ofb, aes-192-ofb, aes-256-ofb"),(0,i.kt)("li",{parentName:"ul"},"aes-128-gcm, aes-192-gcm, aes-256-gcm"),(0,i.kt)("li",{parentName:"ul"},"aes-128-ctr, aes-192-ctr, aes-256-ctr")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"encrypt('mode', 'plaintext', 'key' [, iv, aad])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mode")," \u2014 Encryption mode. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plaintext")," \u2014 Text thats need to be encrypted. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 Encryption key. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iv")," \u2014 Initialization vector. Required for ",(0,i.kt)("inlineCode",{parentName:"li"},"-gcm")," modes, optinal for others. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aad")," \u2014 Additional authenticated data. It isn't encrypted, but it affects decryption. Works only in ",(0,i.kt)("inlineCode",{parentName:"li"},"-gcm")," modes, for others would throw an exception. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ciphertext binary string. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Create this table:"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE encryption_test\n(\n    `comment` String,\n    `secret` String\n)\nENGINE = Memory;\n")),(0,i.kt)("p",null,"Insert some data (please avoid storing the keys/ivs in the database as this undermines the whole concept of encryption), also storing 'hints' is unsafe too and used only for illustrative purposes:"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO encryption_test VALUES('aes-256-ofb no IV', encrypt('aes-256-ofb', 'Secret', '12345678910121314151617181920212')),\\\n('aes-256-ofb no IV, different key', encrypt('aes-256-ofb', 'Secret', 'keykeykeykeykeykeykeykeykeykeyke')),\\\n('aes-256-ofb with IV', encrypt('aes-256-ofb', 'Secret', '12345678910121314151617181920212', 'iviviviviviviviv')),\\\n('aes-256-cbc no IV', encrypt('aes-256-cbc', 'Secret', '12345678910121314151617181920212'));\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT comment, hex(secret) FROM encryption_test;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500hex(secret)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aes-256-ofb no IV                \u2502 B4972BDC4459                     \u2502\n\u2502 aes-256-ofb no IV, different key \u2502 2FF57C092DC9                     \u2502\n\u2502 aes-256-ofb with IV              \u2502 5E6CB398F653                     \u2502\n\u2502 aes-256-cbc no IV                \u2502 1BC0629A92450D9E73A00E7D02CF4142 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Example with ",(0,i.kt)("inlineCode",{parentName:"p"},"-gcm"),":"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO encryption_test VALUES('aes-256-gcm', encrypt('aes-256-gcm', 'Secret', '12345678910121314151617181920212', 'iviviviviviviviv')), \\\n('aes-256-gcm with AAD', encrypt('aes-256-gcm', 'Secret', '12345678910121314151617181920212', 'iviviviviviviviv', 'aad'));\n\nSELECT comment, hex(secret) FROM encryption_test WHERE comment LIKE '%gcm%';\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500hex(secret)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aes-256-gcm          \u2502 A8A3CCBC6426CFEEB60E4EAE03D3E94204C1B09E0254 \u2502\n\u2502 aes-256-gcm with AAD \u2502 A8A3CCBC6426D9A1017A0A932322F1852260A4AD6837 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"aes_encrypt_mysql"},"aes_encrypt_mysql"),(0,i.kt)("p",null,"Compatible with mysql encryption and resulting ciphertext can be decrypted with ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt"},"AES_DECRYPT")," function."),(0,i.kt)("p",null,"Will produce the same ciphertext as ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypt")," on equal inputs. But when ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"iv")," are longer than they should normally be, ",(0,i.kt)("inlineCode",{parentName:"p"},"aes_encrypt_mysql")," will stick to what MySQL's ",(0,i.kt)("inlineCode",{parentName:"p"},"aes_encrypt")," does: 'fold' ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and ignore excess bits of ",(0,i.kt)("inlineCode",{parentName:"p"},"iv"),"."),(0,i.kt)("p",null,"Supported encryption modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aes-128-ecb, aes-192-ecb, aes-256-ecb"),(0,i.kt)("li",{parentName:"ul"},"aes-128-cbc, aes-192-cbc, aes-256-cbc"),(0,i.kt)("li",{parentName:"ul"},"aes-128-ofb, aes-192-ofb, aes-256-ofb")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"aes_encrypt_mysql('mode', 'plaintext', 'key' [, iv])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mode")," \u2014 Encryption mode. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plaintext")," \u2014 Text that needs to be encrypted. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 Encryption key. If key is longer than required by mode, MySQL-specific key folding is performed. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iv")," \u2014 Initialization vector. Optional, only first 16 bytes are taken into account ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ciphertext binary string. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Given equal input ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aes_encrypt_mysql")," produce the same ciphertext:"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT encrypt('aes-256-ofb', 'Secret', '12345678910121314151617181920212', 'iviviviviviviviv') = aes_encrypt_mysql('aes-256-ofb', 'Secret', '12345678910121314151617181920212', 'iviviviviviviviv') AS ciphertexts_equal;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500ciphertexts_equal\u2500\u2510\n\u2502                 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"But ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypt")," fails when ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"iv")," is longer than expected:"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT encrypt('aes-256-ofb', 'Secret', '123456789101213141516171819202122', 'iviviviviviviviv123');\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 22.6.1):\nCode: 36. DB::Exception: Received from localhost:9000. DB::Exception: Invalid key size: 33 expected 32: While processing encrypt('aes-256-ofb', 'Secret', '123456789101213141516171819202122', 'iviviviviviviviv123').\n")),(0,i.kt)("p",null,"While ",(0,i.kt)("inlineCode",{parentName:"p"},"aes_encrypt_mysql")," produces MySQL-compatitalbe output:"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT hex(aes_encrypt_mysql('aes-256-ofb', 'Secret', '123456789101213141516171819202122', 'iviviviviviviviv123')) AS ciphertext;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ciphertext\u2500\u2500\u2500\u2510\n\u2502 24E9E4966469 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Notice how supplying even longer ",(0,i.kt)("inlineCode",{parentName:"p"},"IV")," produces the same result"),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT hex(aes_encrypt_mysql('aes-256-ofb', 'Secret', '123456789101213141516171819202122', 'iviviviviviviviv123456')) AS ciphertext\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ciphertext\u2500\u2500\u2500\u2510\n\u2502 24E9E4966469 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Which is binary equal to what MySQL produces on same inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SET  block_encryption_mode='aes-256-ofb';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT aes_encrypt('Secret', '123456789101213141516171819202122', 'iviviviviviviviv123456') as ciphertext;\n+------------------------+\n| ciphertext             |\n+------------------------+\n| 0x24E9E4966469         |\n+------------------------+\n1 row in set (0.00 sec)\n")),(0,i.kt)("h2",{id:"decrypt"},"decrypt"),(0,i.kt)("p",null,"This function decrypts ciphertext into a plaintext using these modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aes-128-ecb, aes-192-ecb, aes-256-ecb"),(0,i.kt)("li",{parentName:"ul"},"aes-128-cbc, aes-192-cbc, aes-256-cbc"),(0,i.kt)("li",{parentName:"ul"},"aes-128-ofb, aes-192-ofb, aes-256-ofb"),(0,i.kt)("li",{parentName:"ul"},"aes-128-gcm, aes-192-gcm, aes-256-gcm"),(0,i.kt)("li",{parentName:"ul"},"aes-128-ctr, aes-192-ctr, aes-256-ctr")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"decrypt('mode', 'ciphertext', 'key' [, iv, aad])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mode")," \u2014 Decryption mode. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ciphertext")," \u2014 Encrypted text that needs to be decrypted. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 Decryption key. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iv")," \u2014 Initialization vector. Required for ",(0,i.kt)("inlineCode",{parentName:"li"},"-gcm")," modes, optinal for others. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aad")," \u2014 Additional authenticated data. Won't decrypt if this value is incorrect. Works only in ",(0,i.kt)("inlineCode",{parentName:"li"},"-gcm")," modes, for others would throw an exception. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decrypted String. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Re-using table from ",(0,i.kt)("a",{parentName:"p",href:"#encrypt"},"encrypt"),"."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT comment, hex(secret) FROM encryption_test;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500hex(secret)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aes-256-gcm          \u2502 A8A3CCBC6426CFEEB60E4EAE03D3E94204C1B09E0254 \u2502\n\u2502 aes-256-gcm with AAD \u2502 A8A3CCBC6426D9A1017A0A932322F1852260A4AD6837 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500hex(secret)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aes-256-ofb no IV                \u2502 B4972BDC4459                     \u2502\n\u2502 aes-256-ofb no IV, different key \u2502 2FF57C092DC9                     \u2502\n\u2502 aes-256-ofb with IV              \u2502 5E6CB398F653                     \u2502\n\u2502 aes-256-cbc no IV                \u2502 1BC0629A92450D9E73A00E7D02CF4142 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Now let's try to decrypt all that data."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT comment, decrypt('aes-256-cfb128', secret, '12345678910121314151617181920212') as plaintext FROM encryption_test\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500plaintext\u2500\u2500\u2510\n\u2502 aes-256-gcm          \u2502 OQ\ufffdE\n                             \ufffdt\ufffd7T\ufffd\\\ufffd\ufffd\ufffd\\\ufffd   \u2502\n\u2502 aes-256-gcm with AAD \u2502 OQ\ufffdE\n                             \ufffd\\\ufffd\ufffdsi\ufffd\ufffd\ufffd\ufffd;\ufffdo\ufffd\ufffd \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500plaintext\u2500\u2510\n\u2502 aes-256-ofb no IV                \u2502 Secret    \u2502\n\u2502 aes-256-ofb no IV, different key \u2502 \ufffd4\ufffd\n                                        \ufffd         \u2502\n\u2502 aes-256-ofb with IV              \u2502 \ufffd\ufffd\ufffd6\ufffd~        \u2502\n \u2502aes-256-cbc no IV                \u2502 \ufffd2*4\ufffdh3c\ufffd4w\ufffd\ufffd@\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Notice how only a portion of the data was properly decrypted, and the rest is gibberish since either ",(0,i.kt)("inlineCode",{parentName:"p"},"mode"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"iv")," were different upon encryption."),(0,i.kt)("h2",{id:"aes_decrypt_mysql"},"aes_decrypt_mysql"),(0,i.kt)("p",null,"Compatible with mysql encryption and decrypts data encrypted with ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-encrypt"},"AES_ENCRYPT")," function."),(0,i.kt)("p",null,"Will produce same plaintext as ",(0,i.kt)("inlineCode",{parentName:"p"},"decrypt")," on equal inputs. But when ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"iv")," are longer than they should normally be, ",(0,i.kt)("inlineCode",{parentName:"p"},"aes_decrypt_mysql")," will stick to what MySQL's ",(0,i.kt)("inlineCode",{parentName:"p"},"aes_decrypt")," does: 'fold' ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and ignore excess bits of ",(0,i.kt)("inlineCode",{parentName:"p"},"IV"),"."),(0,i.kt)("p",null,"Supported decryption modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aes-128-ecb, aes-192-ecb, aes-256-ecb"),(0,i.kt)("li",{parentName:"ul"},"aes-128-cbc, aes-192-cbc, aes-256-cbc"),(0,i.kt)("li",{parentName:"ul"},"aes-128-cfb128"),(0,i.kt)("li",{parentName:"ul"},"aes-128-ofb, aes-192-ofb, aes-256-ofb")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"aes_decrypt_mysql('mode', 'ciphertext', 'key' [, iv])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mode")," \u2014 Decryption mode. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ciphertext")," \u2014 Encrypted text that needs to be decrypted. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 Decryption key. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iv")," \u2014 Initialization vector. Optinal. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decrypted String. ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string#string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Let's decrypt data we've previously encrypted with MySQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SET  block_encryption_mode='aes-256-ofb';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT aes_encrypt('Secret', '123456789101213141516171819202122', 'iviviviviviviviv123456') as ciphertext;\n+------------------------+\n| ciphertext             |\n+------------------------+\n| 0x24E9E4966469         |\n+------------------------+\n1 row in set (0.00 sec)\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT aes_decrypt_mysql('aes-256-ofb', unhex('24E9E4966469'), '123456789101213141516171819202122', 'iviviviviviviviv123456') AS plaintext\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plaintext\u2500\u2510\n\u2502 Secret    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);