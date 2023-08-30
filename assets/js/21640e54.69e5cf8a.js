"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[3456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),k=o,b=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return n?a.createElement(b,c(c({ref:t},u),{},{components:n})):a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},74756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),c=n(85162);const l={title:"\u8d28\u62bc",sidebar_position:21,tags:["solana-cook-book","staking"]},s="\u8d28\u62bc",i={unversionedId:"references/staking",id:"references/staking",title:"\u8d28\u62bc",description:"\u83b7\u53d6\u5f53\u524d\u9a8c\u8bc1\u5668",source:"@site/docs/cookbook-zh/references/staking.md",sourceDirName:"references",slug:"/references/staking",permalink:"/all-in-one-solana/cookbook-zh/references/staking",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/cookbook-zh/references/staking.md",tags:[{label:"solana-cook-book",permalink:"/all-in-one-solana/cookbook-zh/tags/solana-cook-book"},{label:"staking",permalink:"/all-in-one-solana/cookbook-zh/tags/staking"}],version:"current",sidebarPosition:21,frontMatter:{title:"\u8d28\u62bc",sidebar_position:21,tags:["solana-cook-book","staking"]},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u5e01",permalink:"/all-in-one-solana/cookbook-zh/references/token"},next:{title:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01 (NFTs)",permalink:"/all-in-one-solana/cookbook-zh/references/nfts"}},u={},d=[{value:"\u83b7\u53d6\u5f53\u524d\u9a8c\u8bc1\u5668",id:"\u83b7\u53d6\u5f53\u524d\u9a8c\u8bc1\u5668",level:2},{value:"\u521b\u5efa\u8d28\u62bc\u8d26\u6237",id:"\u521b\u5efa\u8d28\u62bc\u8d26\u6237",level:2},{value:"\u59d4\u6258\u8d28\u62bc",id:"\u59d4\u6258\u8d28\u62bc",level:2},{value:"\u901a\u8fc7\u9a8c\u8bc1\u5668\u83b7\u53d6\u59d4\u6258\u4eba",id:"\u901a\u8fc7\u9a8c\u8bc1\u5668\u83b7\u53d6\u59d4\u6258\u4eba",level:2},{value:"\u505c\u7528\u8d28\u62bc",id:"\u505c\u7528\u8d28\u62bc",level:2},{value:"\u63d0\u53d6\u8d28\u62bc",id:"\u63d0\u53d6\u8d28\u62bc",level:2}],p={toc:d},k="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8d28\u62bc"},"\u8d28\u62bc"),(0,o.kt)("h2",{id:"\u83b7\u53d6\u5f53\u524d\u9a8c\u8bc1\u5668"},"\u83b7\u53d6\u5f53\u524d\u9a8c\u8bc1\u5668"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8d28\u62bc SOL \u5e76\u901a\u8fc7\u5e2e\u52a9\u4fdd\u62a4\u7f51\u7edc\u6765\u83b7\u5f97\u5956\u52b1\u3002\u8981\u8fdb\u884c\u8d28\u62bc\uff0c\u6211\u4eec\u5c06 SOL \u59d4\u6258\u7ed9\u9a8c\u8bc1\u5668\uff0c\u800c\u9a8c\u8bc1\u5668\u5219\u5904\u7406\u4ea4\u6613\u3002"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { clusterApiUrl, Connection } from "@solana/web3.js";\n\n(async () => {\n  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n\n  // Get all validators, categorized by current (i.e. active) and deliquent (i.e. inactive)\n  const { current, delinquent } = await connection.getVoteAccounts();\n  console.log("current validators: ", current);\n  console.log("all validators: ", current.concat(delinquent));\n})();\n'))),(0,o.kt)(c.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana validators\n")))),(0,o.kt)("h2",{id:"\u521b\u5efa\u8d28\u62bc\u8d26\u6237"},"\u521b\u5efa\u8d28\u62bc\u8d26\u6237"),(0,o.kt)("p",null,"\u6240\u6709\u7684\u8d28\u62bc\u6307\u4ee4\u7531",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/runtime-facilities/programs#stake-program"},"\u8d28\u62bc\u7a0b\u5e8f (Stake Program)")," \u5904\u7406\u3002\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/staking/stake-accounts"},"\u8d28\u62bc\u8d26\u6237"),"\uff0c \u8be5\u8d26\u6237\u4e0e\u6807\u51c6",(0,o.kt)("a",{parentName:"p",href:"/all-in-one-solana/cookbook-zh/references/accounts#create-a-system-account"},"\u7cfb\u7edf\u8d26\u6237"),"\u521b\u5efa\u548c\u7ba1\u7406\u65b9\u5f0f\u4e0d\u540c\u3002\u7279\u522b\u662f\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u8d26\u6237\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Stake Authority"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Withdrawal Authority"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Setup a transaction to create our stake account\n// Note: `StakeProgram.createAccount` returns a `Transaction` preconfigured with the necessary `TransactionInstruction`s\nconst createStakeAccountTx = StakeProgram.createAccount({\n  authorized: new Authorized(wallet.publicKey, wallet.publicKey), // Here we set two authorities: Stake Authority and Withdrawal Authority. Both are set to our wallet.\n  fromPubkey: wallet.publicKey,\n  lamports: amountToStake,\n  lockup: new Lockup(0, 0, wallet.publicKey), // Optional. We'll set this to 0 for demonstration purposes.\n  stakePubkey: stakeAccount.publicKey,\n});\n\nconst createStakeAccountTxId = await sendAndConfirmTransaction(\n  connection,\n  createStakeAccountTx,\n  [\n    wallet,\n    stakeAccount, // Since we're creating a new stake account, we have that account sign as well\n  ]\n);\nconsole.log(`Stake account created. Tx Id: ${createStakeAccountTxId}`);\n\n// Check our newly created stake account balance. This should be 0.5 SOL.\nlet stakeBalance = await connection.getBalance(stakeAccount.publicKey);\nconsole.log(`Stake account balance: ${stakeBalance / LAMPORTS_PER_SOL} SOL`);\n\n// Verify the status of our stake account. This will start as inactive and will take some time to activate.\nlet stakeStatus = await connection.getStakeActivation(stakeAccount.publicKey);\nconsole.log(`Stake account status: ${stakeStatus.state}`);\n")),(0,o.kt)("h2",{id:"\u59d4\u6258\u8d28\u62bc"},"\u59d4\u6258\u8d28\u62bc"),(0,o.kt)("p",null,"\u4e00\u65e6\u8d28\u62bc\u8d26\u6237\u5f97\u5230\u8d44\u91d1\u652f\u6301\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Stake Authority"),"\u53ef\u4ee5\u5c06\u5176\u59d4\u6258\u7ed9\u4e00\u4e2a\u9a8c\u8bc1\u8005\u3002\u6bcf\u4e2a\u8d28\u62bc\u8d26\u6237\u4e00\u6b21\u53ea\u80fd\u59d4\u6258\u7ed9\u4e00\u4e2a\u9a8c\u8bc1\u8005\u3002\u6b64\u5916\uff0c\u8d26\u6237\u4e2d\u7684\u6240\u6709\u4ee3\u5e01\u5fc5\u987b\u8981\u4e48\u88ab\u59d4\u6258\uff0c\u8981\u4e48\u53d6\u6d88\u59d4\u6258\u3002\u4e00\u65e6\u59d4\u6258\u6210\u529f\uff0c\u8d28\u62bc\u8d26\u6237\u9700\u8981\u7ecf\u8fc7\u51e0\u4e2a\u65f6\u671f\u624d\u80fd\u53d8\u4e3a\u6d3b\u8dc3\u72b6\u6001\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// With a validator selected, we can now setup a transaction that delegates our stake to their vote account.\nconst delegateTx = StakeProgram.delegate({\n  stakePubkey: stakeAccount.publicKey,\n  authorizedPubkey: wallet.publicKey,\n  votePubkey: selectedValidatorPubkey,\n});\n\nconst delegateTxId = await sendAndConfirmTransaction(connection, delegateTx, [\n  wallet,\n]);\nconsole.log(\n  `Stake account delegated to ${selectedValidatorPubkey}. Tx Id: ${delegateTxId}`\n);\n\n// Check in on our stake account. It should now be activating.\nstakeStatus = await connection.getStakeActivation(stakeAccount.publicKey);\nconsole.log(`Stake account status: ${stakeStatus.state}`);\n")),(0,o.kt)("h2",{id:"\u901a\u8fc7\u9a8c\u8bc1\u5668\u83b7\u53d6\u59d4\u6258\u4eba"},"\u901a\u8fc7\u9a8c\u8bc1\u5668\u83b7\u53d6\u59d4\u6258\u4eba"),(0,o.kt)("p",null,"\u591a\u4e2a\u8d26\u6237\u53ef\u80fd\u5df2\u7ecf\u8d28\u62bc\u7ed9\u4e86\u7279\u5b9a\u7684\u9a8c\u8bc1\u8d26\u6237\u3002\u4e3a\u4e86\u83b7\u53d6\u6240\u6709\u7684\u8d28\u62bc\u4eba\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"getParsedProgramAccounts")," API\u3002\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/all-in-one-solana/cookbook-zh/guides/get-program-accounts"},"\u6307\u5357\u90e8\u5206")," \u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002\u8d28\u62bc\u8d26\u6237\u957f\u5ea6\u4e3a200\u5b57\u8282\uff0c\u9009\u6c11\u516c\u94a5\u4ece\u7b2c124\u5b57\u8282\u5f00\u59cb\u3002",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/blob/e960634909a9617fb98d5d836c9c4c5e0d9d59cc/sdk/program/src/stake/state.rs"},"\u53c2\u8003\u8d44\u6599"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const STAKE_PROGRAM_ID = new PublicKey(\n  "Stake11111111111111111111111111111111111111"\n);\nconst VOTE_PUB_KEY = "27MtjMSAQ2BGkXNuJEJkxFyCJT8dugGAaHJ9T7Gc6x4x";\n\nconst connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");\nconst accounts = await connection.getParsedProgramAccounts(STAKE_PROGRAM_ID, {\n  filters: [\n    {\n      dataSize: 200, // number of bytes\n    },\n    {\n      memcmp: {\n        offset: 124, // number of bytes\n        bytes: VOTE_PUB_KEY, // base58 encoded string\n      },\n    },\n  ],\n});\n\nconsole.log(`Accounts for program ${STAKE_PROGRAM_ID}: `);\nconsole.log(\n  `Total number of delegators found for ${VOTE_PUB_KEY} is: ${accounts.length}`\n);\nif (accounts.length)\n  console.log(`Sample delegator:`, JSON.stringify(accounts[0]));\n\n/*\n// Output\n\n  Accounts for program Stake11111111111111111111111111111111111111:\n  Total number of delegators found for 27MtjMSAQ2BGkXNuJEJkxFyCJT8dugGAaHJ9T7Gc6x4x is: 184\n  Sample delegator:\n  {\n    "account": {\n      "data": {\n        "parsed": {\n          "info": {\n            "meta": {\n              "authorized": {\n                "staker": "3VDVh3rHTLkNJp6FVYbuFcaihYBFCQX5VSBZk23ckDGV",\n                "withdrawer": "EhYXq3ANp5nAerUpbSgd7VK2RRcxK1zNuSQ755G5Mtxx"\n              },\n              "lockup": {\n                "custodian": "3XdBZcURF5nKg3oTZAcfQZg8XEc5eKsx6vK8r3BdGGxg",\n                "epoch": 0,\n                "unixTimestamp": 1822867200\n              },\n              "rentExemptReserve": "2282880"\n            },\n            "stake": {\n              "creditsObserved": 58685367,\n              "delegation": {\n                "activationEpoch": "208",\n                "deactivationEpoch": "18446744073709551615",\n                "stake": "433005300621",\n                "voter": "27MtjMSAQ2BGkXNuJEJkxFyCJT8dugGAaHJ9T7Gc6x4x",\n                "warmupCooldownRate": 0.25\n              }\n            }\n          },\n          "type": "delegated"\n        },\n        "program": "stake",\n        "space": 200\n      },\n      "executable": false,\n      "lamports": 433012149261,\n      "owner": {\n        "_bn": "06a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000"\n      },\n      "rentEpoch": 264\n    },\n    "pubkey": {\n      "_bn": "0dc8b506f95e52c9ac725e714c7078799dd3268df562161411fe0916a4dc0a43"\n    }\n  }\n\n*/\n')),(0,o.kt)("h2",{id:"\u505c\u7528\u8d28\u62bc"},"\u505c\u7528\u8d28\u62bc"),(0,o.kt)("p",null,"\u5728\u8d28\u62bc\u8d26\u6237\u59d4\u6258\u540e\u7684\u4efb\u4f55\u65f6\u5019\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Stake Authority"),"\u53ef\u4ee5\u9009\u62e9\u505c\u7528\u8be5\u8d26\u6237\u3002\u505c\u7528\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u591a\u4e2a\u65f6\u671f\u624d\u80fd\u5b8c\u6210\uff0c\u5e76\u4e14\u5728\u63d0\u53d6\u4efb\u4f55 SOL \u4e4b\u524d\u5fc5\u987b\u5b8c\u6210\u505c\u7528\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// At anytime we can choose to deactivate our stake. Our stake account must be inactive before we can withdraw funds.\nconst deactivateTx = StakeProgram.deactivate({\n  stakePubkey: stakeAccount.publicKey,\n  authorizedPubkey: wallet.publicKey,\n});\nconst deactivateTxId = await sendAndConfirmTransaction(\n  connection,\n  deactivateTx,\n  [wallet]\n);\nconsole.log(`Stake account deactivated. Tx Id: ${deactivateTxId}`);\n\n// Check in on our stake account. It should now be inactive.\nstakeStatus = await connection.getStakeActivation(stakeAccount.publicKey);\nconsole.log(`Stake account status: ${stakeStatus.state}`);\n")),(0,o.kt)("h2",{id:"\u63d0\u53d6\u8d28\u62bc"},"\u63d0\u53d6\u8d28\u62bc"),(0,o.kt)("p",null,"\u4e00\u65e6\u505c\u7528\u4e86\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Withdrawal Authority"),"\u53ef\u4ee5\u5c06 SOL \u63d0\u53d6\u56de\u7cfb\u7edf\u8d26\u6237\u3002\u4e00\u65e6\u8d28\u62bc\u8d26\u6237\u4e0d\u518d\u59d4\u6258\u5e76\u4e14\u4f59\u989d\u4e3a 0 SOL\uff0c\u5b83\u5c06\u88ab\u9500\u6bc1\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Once deactivated, we can withdraw our SOL back to our main wallet\nconst withdrawTx = StakeProgram.withdraw({\n  stakePubkey: stakeAccount.publicKey,\n  authorizedPubkey: wallet.publicKey,\n  toPubkey: wallet.publicKey,\n  lamports: stakeBalance, // Withdraw the full balance at the time of the transaction\n});\n\nconst withdrawTxId = await sendAndConfirmTransaction(connection, withdrawTx, [\n  wallet,\n]);\nconsole.log(`Stake account withdrawn. Tx Id: ${withdrawTxId}`);\n\n// Confirm that our stake account balance is now 0\nstakeBalance = await connection.getBalance(stakeAccount.publicKey);\nconsole.log(`Stake account balance: ${stakeBalance / LAMPORTS_PER_SOL} SOL`);\n")))}b.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function c(e){let{children:t,hidden:n,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,c),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),o=n(67294),r=n(86010),c=n(12466),l=n(16550),s=n(91980),i=n(67392),u=n(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[c,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,i]=b({queryString:n,groupId:a}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??d;return k({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:c,selectValue:(0,o.useCallback)((e=>{if(!k({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),m(e)}),[i,m,r]),tabValues:r}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==l&&(d(t),s(a))},k=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:c}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:p},c,{className:(0,r.Z)("tabs__item",g.tabItem,c?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=m(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(h,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}}}]);