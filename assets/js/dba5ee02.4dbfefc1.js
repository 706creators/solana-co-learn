"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[8363],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>g});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?t.createElement(g,l(l({ref:n},u),{},{components:a})):t.createElement(g,l({ref:n},u))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32817:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=a(87462),r=(a(67294),a(3905));const o={slug:"ada-and-pda",title:"ADA(\u6d3e\u751f\u8d26\u53f7) \u548c PDA \u4f7f\u7528",authors:["v1xingyue"],tags:["blog","blockchain","solana","co-learn"]},l=void 0,i={permalink:"/solana-co-learn/blog/ada-and-pda",editUrl:"https://creatorsdao.github.io/all-in-one-solana/blog/blog/2023-08-29.md",source:"@site/blog/2023-08-29.md",title:"ADA(\u6d3e\u751f\u8d26\u53f7) \u548c PDA \u4f7f\u7528",description:"\u5728solana\u7684\u6570\u636e\u8d26\u53f7\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u7275\u626f\u4e24\u79cd\u8d26\u53f7",date:"2023-08-29T00:00:00.000Z",formattedDate:"August 29, 2023",tags:[{label:"blog",permalink:"/solana-co-learn/blog/tags/blog"},{label:"blockchain",permalink:"/solana-co-learn/blog/tags/blockchain"},{label:"solana",permalink:"/solana-co-learn/blog/tags/solana"},{label:"co-learn",permalink:"/solana-co-learn/blog/tags/co-learn"}],readingTime:4.195,hasTruncateMarker:!1,authors:[{name:"v1xingyue",title:"YanAemons's Blog",url:"https://github.com/v1xingyue",imageURL:"https://avatars.githubusercontent.com/u/974169",key:"v1xingyue"}],frontMatter:{slug:"ada-and-pda",title:"ADA(\u6d3e\u751f\u8d26\u53f7) \u548c PDA \u4f7f\u7528",authors:["v1xingyue"],tags:["blog","blockchain","solana","co-learn"]},prevItem:{title:"\u4ec0\u4e48\u662fAnchor\uff1f",permalink:"/solana-co-learn/blog/what-is-anchor"},nextItem:{title:"\u4f7f\u7528anchor build \u4f9d\u8cf4\u885d\u7a81",permalink:"/solana-co-learn/blog/error-after-running-anchor-build"}},c={authorsImageUrls:[void 0]},s=[{value:"\u5730\u5740\u751f\u6210\u903b\u8f91\u4ecb\u7ecd\u5982\u4e0b",id:"\u5730\u5740\u751f\u6210\u903b\u8f91\u4ecb\u7ecd\u5982\u4e0b",level:2},{value:"ADA \u8d26\u53f7\u4f7f\u7528",id:"ada-\u8d26\u53f7\u4f7f\u7528",level:2},{value:"PDA \u8d26\u53f7\u4f7f\u7528",id:"pda-\u8d26\u53f7\u4f7f\u7528",level:2},{value:"ADA \u8d26\u53f7\u4f7f\u7528 example",id:"ada-\u8d26\u53f7\u4f7f\u7528-example",level:2},{value:"PDA \u4f7f\u7528 example",id:"pda-\u4f7f\u7528-example",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728solana\u7684\u6570\u636e\u8d26\u53f7\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u7275\u626f\u4e24\u79cd\u8d26\u53f7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PDA (Program Derived Account)")),(0,r.kt)("p",null,"\u7531 createProgramAddressSync \u4ea7\u751f\u3002\n\u901a\u5e38\u7531\u7279\u5b9a\u7a0b\u5e8f\uff08\u901a\u5e38\u662f\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6\uff09\u5173\u8054\u989d\u5916\u7684\u8d26\u6237\u3002\u8be5\u8d26\u53f7\u6ca1\u6709\u79c1\u94a5\uff0c\u6545\u9664\u7a0b\u5e8f\u672c\u8eab\u5916\uff0c\u65e0\u6cd5\u5b8c\u6210\u6570\u636e\u7b7e\u540d\uff0c\u65e0\u6cd5\u5b8c\u6210\u5b8c\u6574\u7684\u6570\u636e\u4ea4\u6613\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ADA (Account Derived Account)")),(0,r.kt)("p",null,"\u7531 createWithSeed \u65b9\u6cd5\u4ea7\u751f\u3002\n\u6709\u4e00\u4e2a\u8d26\u53f7\u516c\u94a5\u6d3e\u751f\u51fa\u6765\u7684\u5173\u8054\u8d26\u6237\uff0c\u6570\u636e\u7b7e\u540d\u6743\u9650\u5c5e\u4e8e\u4e3b\u8d26\u53f7\u3002\u4e5f\u5373\uff0c\u9700\u8981\u4e3b\u8d26\u53f7\u7684\u7b7e\u540d\u624d\u80fd\u5b8c\u6210\u5b8c\u6574\u7684\u6570\u636e\u4ea4\u6613\u3002"),(0,r.kt)("p",null,"solana\u4e2d\uff0c\u6839\u636e\u6570\u636e\u7b7e\u540d\uff0c\u51b3\u5b9a\u4e86\u6570\u636e\u7684\u771f\u5b9e\u6240\u6709\u6743\u3002\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6211\u7684\u6570\u636e\u6211\u505a\u4e3b")),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u5206\u6790\u8fd9\u4e24\u79cd\u8d26\u53f7\u7684\u5f02\u540c\u3002"),(0,r.kt)("h2",{id:"\u5730\u5740\u751f\u6210\u903b\u8f91\u4ecb\u7ecd\u5982\u4e0b"},"\u5730\u5740\u751f\u6210\u903b\u8f91\u4ecb\u7ecd\u5982\u4e0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PDA \u5730\u5740\u751f\u6210\u89c4\u5219")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"buffer = ",'[seed,programId,"ProgramDerivedAddress"]'),(0,r.kt)("li",{parentName:"ol"},"\u5bf9buffer \u53d6 sha256"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5728\u66f2\u7ebf\u4e0a\uff0c\u90a3\u4e48\u629b\u51faerror, \u5982\u679c\u4e0d\u5728\uff0c\u90a3\u4e48\u76f4\u63a5\u8fd4\u56de\u4f5c\u4e3a \u4f7f\u7528\u5730\u5740")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-web3.js/blob/ae1056366cd75fea784e9146af511302d5a62845/packages/library-legacy/src/publickey.ts#L168"},"createProgramAddressSync")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ADA \u751f\u6210")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"buffer=","[fromPublicKey,seed,programId]"),(0,r.kt)("li",{parentName:"ol"},"buffer \u53d6 sha256, \u76f4\u63a5\u8fd4\u56de")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-web3.js/blob/ae1056366cd75fea784e9146af511302d5a62845/packages/library-legacy/src/publickey.ts#L150"},"createWithSeed")),(0,r.kt)("p",null,"\u533a\u522b\u5728\u4e8e\uff0c\u6570\u636e\u7684\u6258\u7ba1\u4f7f\u7528\u903b\u8f91."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ADA \u6570\u636e\u7b7e\u540d\u6743\u9650\uff0c\u5728\u4e8e\u8d26\u6237\u672c\u8eab\u3002\u5373 \u6211\u7684\u6570\u636e\u6211\u505a\u4e3b\uff0c\u672a\u7ecf\u5141\u8bb8(\u6211\u672a\u7b7e\u540d)\u4e0d\u80fd\u4fee\u6539\u3002"),(0,r.kt)("li",{parentName:"ul"},"PDA \u6570\u636e\u7b7e\u540d\u6743\u9650\u5728\u4e8e\u5408\u7ea6\u3002\u7ecf\u8fc7\u7a0b\u5e8f\u7b7e\u540d\uff0c\u53ef\u4ee5\u4fee\u6539 account \u7684\u6570\u636e\u548c\u63d0\u53d6\u5176\u4e2d\u7684sol\u3002")),(0,r.kt)("h2",{id:"ada-\u8d26\u53f7\u4f7f\u7528"},"ADA \u8d26\u53f7\u4f7f\u7528"),(0,r.kt)("p",null,"\u6570\u636e\u64cd\u4f5c\uff0c\u6709\u914d\u5957\u7684\u51fd\u6570\u5bf9\u5e94\uff0c\u5185\u90e8\u5305\u542b xxxxWithSeedParams \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u5b8c\u6210\u5bf9\u5e94\u7684\u64cd\u4f5c\u3002\n\u64cd\u4f5c\u6570\u636e\uff0c\u9700\u8981 \u4e3b\u8d26\u6237\u7684\u7b7e\u540d\uff0c\u8fd9\u4e00\u70b9\u51b3\u5b9a\u4e86\uff0c\u8d26\u53f7\u7684\u771f\u5b9e\u6240\u6709\u6743\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SystemProgram.createAccountWithSeed \u521d\u59cb\u5316\u8d26\u53f7"),(0,r.kt)("li",{parentName:"ul"},"SystemProgram.assign \u91cd\u65b0\u5206\u914downer"),(0,r.kt)("li",{parentName:"ul"},"SystemProgram.allocate \u5206\u914d\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"SystemProgram.transfer \u8f6c\u79fbSOL")),(0,r.kt)("h2",{id:"pda-\u8d26\u53f7\u4f7f\u7528"},"PDA \u8d26\u53f7\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u53ea\u7528\u4e8e\u8d26\u6237\u5730\u5740\u63a8\u5bfc\uff0c\u4e0d\u80fd\u521d\u59cb\u5316\u3002\u521d\u59cb\u5316\u8fc7\u7a0b\u5728\u5408\u7ea6\u5185\u90e8\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u5176\u7b7e\u540d\u6743\u9650\uff0c\u5fc5\u987b\u5728\u5408\u7ea6\u5185\u90e8\u5b8c\u6210\u3002\u4ed6\u7684\u64cd\u4f5c\u6743\u9650\u5b8c\u5168\u5c5e\u4e8e\u667a\u80fd\u5408\u7ea6\u3002")),(0,r.kt)("h2",{id:"ada-\u8d26\u53f7\u4f7f\u7528-example"},"ADA \u8d26\u53f7\u4f7f\u7528 example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'  const seed = "ada.creator";\n\n  // \u521d\u59cb\u5316ada \u8d26\u6237\n  let ada_account = await web3.PublicKey.createWithSeed(\n    signer.publicKey,\n    seed,\n    program\n  );\n  console.log("ada_account address: ", ada_account.toBase58());\n\n  let ada_info = await connection.getAccountInfo(ada_account);\n\n  // \u6839\u636e\u662f\u5426\u5b58\u5728\u8d26\u53f7\uff0c\u51b3\u5b9a\u662f\u5426\u521d\u59cb\u5316\n  if (ada_info) {\n    console.log(ada_info);\n  } else {\n    console.log("ada account not found");\n    const transaction = new web3.Transaction().add(\n      web3.SystemProgram.createAccountWithSeed({\n        newAccountPubkey: ada_account,\n        fromPubkey: signer.publicKey,\n        basePubkey: signer.publicKey,\n        programId: program,\n        seed,\n        lamports: web3.LAMPORTS_PER_SOL,\n        space: 20,\n      })\n    );\n\n')),(0,r.kt)("h2",{id:"pda-\u4f7f\u7528-example"},"PDA \u4f7f\u7528 example"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u90e8\u5206\u4ee3\u7801\u903b\u8f91"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const pda_seed = "pda.creator";\n\n  const obj = new Model();\n\n  const [pda, bump_seed] = web3.PublicKey.findProgramAddressSync(\n    [signer.publicKey.toBuffer(), new TextEncoder().encode(movie.title)],\n    program\n  );\n\n  console.log("pda address : ", pda.toBase58());\n\n  const instruction = new web3.TransactionInstruction({\n    keys: [\n      {\n        // \u4ed8\u94b1\u7684\u8d26\u6237\n        pubkey: signer.publicKey,\n        isSigner: true,\n        isWritable: false,\n      },\n      {\n        // PDA\u5c06\u5b58\u50a8\u6570\u636e\n        pubkey: pda,\n        isSigner: false,\n        isWritable: true,\n      },\n      {\n        // \u7cfb\u7edf\u7a0b\u5e8f\u5c06\u7528\u4e8e\u521b\u5efaPDA\n        pubkey: web3.SystemProgram.programId,\n        isSigner: false,\n        isWritable: false,\n      },\n    ],\n    // \u4f20\u8f93\u6570\u636e \n    data: obj.serialize(),\n    programId: program,\n  });\n\n  const transaction = new web3.Transaction().add(instruction);\n\n  const signature = await web3.sendAndConfirmTransaction(\n    connection,\n    transaction,\n    [signer]\n  );\n\n  console.log(signature);\n')),(0,r.kt)("p",null,"\u5408\u7ea6\u90e8\u5206\u4ee3\u7801\u903b\u8f91"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// \u83b7\u53d6\u8d26\u6237\u8fed\u4ee3\u5668\nlet account_info_iter = &mut accounts.iter();\n\n// \u83b7\u53d6\u8d26\u6237\nlet initializer = next_account_info(account_info_iter)?;\nlet pda_account = next_account_info(account_info_iter)?;\nlet system_program = next_account_info(account_info_iter)?;\n\n// \u6784\u9020PDA\u8d26\u6237\nlet (pda, bump_seed) =\n    Pubkey::find_program_address(&[initializer.key.as_ref(), title.as_bytes()], program_id);\n\n// \u548c\u5ba2\u6237\u7aef\u6bd4\u5bf9\nif pda != *pda_account.key {\n    msg!("Invalid seeds for PDA");\n    return Err(ProgramError::InvalidArgument);\n}\n\n// \u8ba1\u7b97\u6240\u9700\u7684\u79df\u91d1\nlet rent = Rent::get()?;\nlet rent_lamports = rent.minimum_balance(total_len);\n\n// \u521b\u5efa\u8d26\u6237\ninvoke_signed(\n    &system_instruction::create_account(\n        initializer.key,\n        pda_account.key,\n        rent_lamports,\n        total_len\n            .try_into()\n            .map_err(|_| Error::ConvertUsizeToU64Failed)?,\n        program_id,\n    ),\n    &[\n        initializer.clone(),\n        pda_account.clone(),\n        system_program.clone(),\n    ],\n    &[&[initializer.key.as_ref(), title.as_bytes(), &[bump_seed]]],\n)?;\n\n// MovieAccountState \u5b9a\u4e49\u7684state\u7c7b\u578b\nlet mut account_data =\n    try_from_slice_unchecked::<MovieAccountState>(&pda_account.data.borrow()).unwrap();\n\naccount_data.title = title;\naccount_data.rating = rating;\naccount_data.description = description;\naccount_data.is_initialized = true;\n\n// \u5199\u5165pda \u6570\u636e\u672c\u8eab\naccount_data.serialize(&mut &mut pda_account.data.borrow_mut()[..])?;\n\n')),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://solana.stackexchange.com/questions/1557/then-what-is-the-purpose-of-createwithseed-instruction?rq=1"},"https://solana.stackexchange.com/questions/1557/then-what-is-the-purpose-of-createwithseed-instruction?rq=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://solanacookbook.com/references/accounts.html#how-to-create-accounts-with-seeds"},"https://solanacookbook.com/references/accounts.html#how-to-create-accounts-with-seeds"))))}d.isMDXComponent=!0}}]);