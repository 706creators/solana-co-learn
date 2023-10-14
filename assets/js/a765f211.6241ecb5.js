"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?a.createElement(m,c(c({ref:n},u),{},{components:t})):a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={title:"\u53d1\u9001\u79bb\u7ebf\u4ea4\u6613",sidebar_position:23,tags:["solana-cook-book","transactions"]},c="\u53d1\u9001\u79bb\u7ebf\u4ea4\u6613",i={unversionedId:"references/offline-transactions",id:"references/offline-transactions",title:"\u53d1\u9001\u79bb\u7ebf\u4ea4\u6613",description:"\u7b7e\u7f72\u4ea4\u6613",source:"@site/docs/cookbook-zh/references/offline-transactions.md",sourceDirName:"references",slug:"/references/offline-transactions",permalink:"/solana-co-learn/cookbook-zh/references/offline-transactions",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/references/offline-transactions.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"transactions",permalink:"/solana-co-learn/cookbook-zh/tags/transactions"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1697277246,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:23,frontMatter:{title:"\u53d1\u9001\u79bb\u7ebf\u4ea4\u6613",sidebar_position:23,tags:["solana-cook-book","transactions"]},sidebar:"tutorialSidebar",previous:{title:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01 (NFTs)",permalink:"/solana-co-learn/cookbook-zh/references/nfts"},next:{title:"\u547d\u540d\u670d\u52a1",permalink:"/solana-co-learn/cookbook-zh/references/name-service"}},l={},s=[{value:"\u7b7e\u7f72\u4ea4\u6613",id:"\u7b7e\u7f72\u4ea4\u6613",level:2},{value:"\u90e8\u5206\u7b7e\u7f72\u4ea4\u6613",id:"\u90e8\u5206\u7b7e\u7f72\u4ea4\u6613",level:2},{value:"\u8010\u4e45\u6027\u7684 Nonce",id:"\u8010\u4e45\u6027\u7684-nonce",level:2},{value:"\u521b\u5efaNonce\u8d26\u6237",id:"\u521b\u5efanonce\u8d26\u6237",level:3},{value:"\u83b7\u53d6Nonce\u8d26\u6237",id:"\u83b7\u53d6nonce\u8d26\u6237",level:3},{value:"\u4f7f\u7528Nonce\u8d26\u6237",id:"\u4f7f\u7528nonce\u8d26\u6237",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u53d1\u9001\u79bb\u7ebf\u4ea4\u6613"},"\u53d1\u9001\u79bb\u7ebf\u4ea4\u6613"),(0,o.kt)("h2",{id:"\u7b7e\u7f72\u4ea4\u6613"},"\u7b7e\u7f72\u4ea4\u6613"),(0,o.kt)("p",null,"\u8981\u521b\u5efa\u79bb\u7ebf\u4ea4\u6613\uff0c\u4f60\u9700\u8981\u7b7e\u7f72\u4ea4\u6613\uff0c\u7136\u540e\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u5728\u7f51\u7edc\u4e0a\u5e7f\u64ad\u5b83\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// there are two ways you can recover the tx\n// 3.a Recover Tranasction (use populate then addSignauture)\n{\n  let recoverTx = Transaction.populate(Message.from(realDataNeedToSign));\n  recoverTx.addSignature(feePayer.publicKey, Buffer.from(feePayerSignature));\n  recoverTx.addSignature(alice.publicKey, Buffer.from(aliceSignature));\n\n  // 4. Send transaction\n  console.log(\n    `txhash: ${await connection.sendRawTransaction(recoverTx.serialize())}`\n  );\n}\n\n// or\n\n// 3.b. Recover Tranasction (use populate with signature)\n{\n  let recoverTx = Transaction.populate(Message.from(realDataNeedToSign), [\n    bs58.encode(feePayerSignature),\n    bs58.encode(aliceSignature),\n  ]);\n\n  // 4. Send transaction\n  console.log(\n    `txhash: ${await connection.sendRawTransaction(recoverTx.serialize())}`\n  );\n}\n\n")),(0,o.kt)("h2",{id:"\u90e8\u5206\u7b7e\u7f72\u4ea4\u6613"},"\u90e8\u5206\u7b7e\u7f72\u4ea4\u6613"),(0,o.kt)("p",null,"\u5f53\u4e00\u4e2a\u4ea4\u6613\u9700\u8981\u591a\u4e2a\u7b7e\u540d\u65f6\uff0c\u4f60\u53ef\u4ee5\u90e8\u5206\u7b7e\u7f72\u5b83\u3002\u5176\u4ed6\u7b7e\u7f72\u8005\u968f\u540e\u53ef\u4ee5\u7b7e\u7f72\u5e76\u5728\u7f51\u7edc\u4e0a\u5e7f\u64ad\u8be5\u4ea4\u6613\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u6709\u7528\u7684\u60c5\u51b5\u793a\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7528\u652f\u4ed8\u4f5c\u4e3a\u4ea4\u6362\u53d1\u9001 SPL \u4ee3\u5e01"),(0,o.kt)("li",{parentName:"ul"},"\u7b7e\u7f72\u4ea4\u6613\u4ee5\u4fbf\u4ee5\u540e\u9a8c\u8bc1\u5176\u771f\u5b9e\u6027"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u9700\u8981\u4f60\u7b7e\u540d\u7684\u81ea\u5b9a\u4e49\u7a0b\u5e8f\u4e2d\u8c03\u7528\u4ea4\u6613")),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0cBob\u7ed9Alice\u53d1\u9001\u4e86\u4e00\u4e2a SPL \u4ee3\u5e01\uff0c\u56de\u62a5Alice\u7684\u4ed8\u6b3e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// 1. Add an instruction to send the token from Bob to Alice\ntransaction.add(\n  createTransferCheckedInstruction(\n    bobTokenAddress, // source\n    tokenAddress, // mint\n    aliceTokenAccount.address, // destination\n    bobKeypair.publicKey, // owner of source account\n    1 * 10 ** tokenMint.decimals, // amount to transfer\n    tokenMint.decimals // decimals of token\n  )\n);\n\n// 2. Bob partially signs the transaction\ntransaction.partialSign(bobKeypair);\n\n// 3. Serialize the transaction without requiring all signatures\nconst serializedTransaction = transaction.serialize({\n  requireAllSignatures: false,\n});\n\n// 4. Alice can deserialize the transaction\nconst recoveredTransaction = Transaction.from(\n  Buffer.from(transactionBase64, "base64")\n);\n\n')),(0,o.kt)("h2",{id:"\u8010\u4e45\u6027\u7684-nonce"},"\u8010\u4e45\u6027\u7684 Nonce"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RecentBlockhash"),"\u5bf9\u4e8e\u4ea4\u6613\u975e\u5e38\u91cd\u8981\u3002\u5982\u679c\u4f60\u4f7f\u7528\u4e00\u4e2a\u8fc7\u671f\u7684\u6700\u8fd1\u533a\u5757\u54c8\u5e0c\uff08\u5728150\u4e2a\u533a\u5757\u540e\uff09\uff0c\u4f60\u7684\u4ea4\u6613\u5c06\u88ab\u62d2\u7edd\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8010\u4e45\u6027Nonce\u6765\u83b7\u53d6\u4e00\u4e2a\u6c38\u4e0d\u8fc7\u671f\u7684\u6700\u8fd1\u533a\u5757\u54c8\u5e0c\u3002\u8981\u89e6\u53d1\u8fd9\u79cd\u673a\u5236\uff0c\u4f60\u7684\u4ea4\u6613\u5fc5\u987b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5b58\u50a8\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"nonce"),"\u8d26\u6237\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"nonce"),"\u4f5c\u4e3a\u6700\u8fd1\u7684\u533a\u5757\u54c8\u5e0c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06",(0,o.kt)("inlineCode",{parentName:"li"},"nonce advance"),"\u64cd\u4f5c\u653e\u5728\u7b2c\u4e00\u4e2a\u6307\u4ee4\u4e2d\u3002")),(0,o.kt)("h3",{id:"\u521b\u5efanonce\u8d26\u6237"},"\u521b\u5efaNonce\u8d26\u6237"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let tx = new Transaction().add(\n  // create nonce account\n  SystemProgram.createAccount({\n    fromPubkey: feePayer.publicKey,\n    newAccountPubkey: nonceAccount.publicKey,\n    lamports: await connection.getMinimumBalanceForRentExemption(\n      NONCE_ACCOUNT_LENGTH\n    ),\n    space: NONCE_ACCOUNT_LENGTH,\n    programId: SystemProgram.programId,\n  }),\n  // init nonce account\n  SystemProgram.nonceInitialize({\n    noncePubkey: nonceAccount.publicKey, // nonce account pubkey\n    authorizedPubkey: nonceAccountAuth.publicKey, // nonce account authority (for advance and close)\n  })\n);\n\nconsole.log(\n  `txhash: ${await connection.sendTransaction(tx, [feePayer, nonceAccount])}`\n);\n")),(0,o.kt)("h3",{id:"\u83b7\u53d6nonce\u8d26\u6237"},"\u83b7\u53d6Nonce\u8d26\u6237"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let accountInfo = await connection.getAccountInfo(nonceAccountPubkey);\nlet nonceAccount = NonceAccount.fromAccountData(accountInfo.data);\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528nonce\u8d26\u6237"},"\u4f7f\u7528Nonce\u8d26\u6237"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let tx = new Transaction().add(\n  // nonce advance must be the first insturction\n  SystemProgram.nonceAdvance({\n    noncePubkey: nonceAccountPubkey,\n    authorizedPubkey: nonceAccountAuth.publicKey,\n  }),\n  // after that, you do what you really want to do, here we append a transfer instruction as an example.\n  SystemProgram.transfer({\n    fromPubkey: feePayer.publicKey,\n    toPubkey: nonceAccountAuth.publicKey,\n    lamports: 1,\n  })\n);\n// assign `nonce` as recentBlockhash\ntx.recentBlockhash = nonceAccount.nonce;\ntx.feePayer = feePayer.publicKey;\ntx.sign(\n  feePayer,\n  nonceAccountAuth\n); /* fee payer + nonce account authority + ... */\n\nconsole.log(`txhash: ${await connection.sendRawTransaction(tx.serialize())}`);\n")))}d.isMDXComponent=!0}}]);