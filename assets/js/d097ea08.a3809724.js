"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[6210],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},71069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"\u4ea4\u6613",sidebar_position:6,tags:["solana-cook-book","transactions"]},l="\u4ea4\u6613",i={unversionedId:"core-concepts/transactions",id:"core-concepts/transactions",title:"\u4ea4\u6613",description:"\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u5411\u4e00\u4e2a\u96c6\u7fa4\u63d0\u4ea4\u4ea4\u6613\u6765\u8c03\u7528\u7a0b\u5e8f\u3002\u4e00\u4e2a\u4ea4\u6613\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u6307\u4ee4\uff0c\u6bcf\u4e2a\u6307\u4ee4\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684\u7a0b\u5e8f\u3002",source:"@site/docs/cookbook-zh/core-concepts/transactions.md",sourceDirName:"core-concepts",slug:"/core-concepts/transactions",permalink:"/solana-co-learn/cookbook-zh/core-concepts/transactions",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/core-concepts/transactions.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"transactions",permalink:"/solana-co-learn/cookbook-zh/tags/transactions"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1697277246,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:6,frontMatter:{title:"\u4ea4\u6613",sidebar_position:6,tags:["solana-cook-book","transactions"]},sidebar:"tutorialSidebar",previous:{title:"\u7a0b\u5e8f",permalink:"/solana-co-learn/cookbook-zh/core-concepts/programs"},next:{title:"Cross Program Invocations (CPIs)",permalink:"/solana-co-learn/cookbook-zh/core-concepts/cpi"}},s={},c=[{value:"\u6df1\u5165",id:"\u6df1\u5165",level:2},{value:"\u8d39\u7528",id:"\u8d39\u7528",level:3},{value:"Other Resources",id:"other-resources",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ea4\u6613"},"\u4ea4\u6613"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u5411\u4e00\u4e2a\u96c6\u7fa4\u63d0\u4ea4\u4ea4\u6613\u6765\u8c03\u7528",(0,r.kt)("a",{parentName:"p",href:"/solana-co-learn/cookbook-zh/core-concepts/programs"},"\u7a0b\u5e8f"),"\u3002\u4e00\u4e2a\u4ea4\u6613\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u6307\u4ee4\uff0c\u6bcf\u4e2a\u6307\u4ee4\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684\u7a0b\u5e8f\u3002\n\u4ea4\u6613\u63d0\u4ea4\u65f6\uff0cSolana",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/runtime"},"\u8fd0\u884c\u5e93"),"\u4f1a\u81ea\u52a8\u7684\u6309\u987a\u5e8f\u5904\u7406\u8fd9\u4e9b\u6307\u4ee4\u3002\n\u5982\u679c\u67d0\u4e00\u4e2a\u6307\u4ee4\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u90e8\u5206\u5931\u8d25\uff0c\u6574\u4e2a\u4ea4\u6613\u5c31\u4f1a\u5931\u8d25\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"tip \u8981\u70b9")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6307\u4ee4\u662fSolana\u4e0a\u6700\u57fa\u672c\u7684\u64cd\u4f5c\u5355\u5143"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6307\u4ee4\u90fd\u5305\u542b\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"program_id"),"\uff1a\u6240\u9488\u5bf9\u7684\u7a0b\u5e8f\u7684id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accounts"),"\uff1a\u9700\u8981\u8bfb\u6216\u5199\u7684\u5168\u90e8\u8d26\u6237\u7ec4\u6210\u7684\u6570\u7ec4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instruction_data"),"\uff1a\u5411\u6307\u5b9a\u7a0b\u5e8f\u6240\u4f20\u8f93\u7684\u6570\u636e\u7684\u5b57\u8282\u7801"))),(0,r.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u6307\u4ee4\u53ef\u4ee5\u88ab\u6253\u5305\u8fdb\u5165\u540c\u4e00\u4e2a\u4ea4\u6613\u5f53\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4ea4\u6613\u90fd\u5305\u542b\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instructions"),"\uff1a\u4e00\u4e2a\u6216\u591a\u4e2a\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blockhash"),"\uff1a\u6700\u65b0\u7684\u5757\u54c8\u5e0c\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signatures"),"\uff1a\u4e00\u4e2a\u6216\u591a\u4e2a\u7b7e\u540d"))),(0,r.kt)("li",{parentName:"ul"},"\u6307\u4ee4\u4f1a\u88ab\u81ea\u52a8\u7684\u6309\u987a\u5e8f\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u6307\u4ee4\u7684\u4efb\u4f55\u4e00\u90e8\u5206\u5931\u8d25\uff0c\u6574\u4e2a\u4ea4\u6613\u5c31\u4f1a\u5931\u8d25"),(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u7684\u5927\u5c0f\u9650\u5236\u57281232\u5b57\u8282\u4ee5\u5185"))),(0,r.kt)("h2",{id:"\u6df1\u5165"},"\u6df1\u5165"),(0,r.kt)("p",null,"\u5728Solana\u8fd0\u884c\u5e93\u4e2d\uff0c\u6307\u4ee4\u548c\u4ea4\u6613\u90fd\u9700\u8981\u5148\u6307\u5b9a\u5168\u90e8\u9700\u8981\u8bfb\u5199\u8bbf\u95ee\u7684\u8d26\u6237\u5217\u8868\u3002\n\u901a\u8fc7\u4e8b\u5148\u6307\u5b9a\u8d26\u6237\u5217\u8868\uff0c\u8fd0\u884c\u5e93\u53ef\u4ee5\u5bf9\u4ea4\u6613\u7684\u6267\u884c\u505a\u5e76\u884c\u5316\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5f53\u4ea4\u6613\u88ab\u63d0\u4ea4\u5230\u96c6\u7fa4\u65f6\uff0c\u8fd0\u884c\u5e93\u4f1a\u81ea\u52a8\u7684\u6309\u7167\u987a\u5e8f\u5904\u7406\u8fd9\u4e9b\u6307\u4ee4\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u6307\u4ee4\uff0c\u63a5\u6536\u8fd9\u4e2a\u6307\u4ee4\u7684\u7a0b\u5e8f\u4f1a\u89e3\u6790\u6307\u4ee4\u4e2d\u7684\u6570\u636e\u5b57\u6bb5\uff0c\u5728\u6307\u5b9a\u7684\u8d26\u6237\u4e0a\u8fdb\u884c\u64cd\u4f5c\u3002\n\u7a0b\u5e8f\u8981\u4e48\u6267\u884c\u6210\u529f\uff0c\u8981\u4e48\u4f1a\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u7801\u3002\u5982\u679c\u8fd4\u56de\u4e86\u4e00\u4e2a\u9519\u8bef\u7801\uff0c\u6574\u4e2a\u4ea4\u6613\u90fd\u4f1a\u7acb\u5373\u5931\u8d25\u3002"),(0,r.kt)("p",null,"\u4efb\u4f55\u4ea4\u6613\uff0c\u53ea\u8981\u9488\u5bf9\u4e00\u4e2a\u8d26\u6237\u6263\u9664SOL\uff0c\u6216\u8005\u4fee\u6539\u5176\u4e2d\u7684\u6570\u636e\uff0c\u90fd\u9700\u8981\u8fd9\u4e2a\u8d26\u6237\u62e5\u6709\u8005\u7684\u7b7e\u540d\u3002\n\u5728\u4ea4\u6613\u4e2d\uff0c\u4f1a\u88ab\u4fee\u6539\u7684\u8d26\u6237\u90fd\u4f1a\u88ab\u6807\u8bb0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"writable"),"\uff08\u53ef\u5199\uff09\u3002\n\u5f53\u4ea4\u6613\u7684\u4ed8\u8d39\u8005\u652f\u4ed8\u4e86\u8db3\u591f\u7684\u79df\u91d1\u548c\u4ea4\u6613\u8d39\u7528\u65f6\uff0c\u4e00\u4e2a\u8d26\u6237\u53ef\u4ee5\u88ab\u5b58\u5165SOL\u800c\u4e0d\u7528\u8fd9\u4e2a\u8d26\u6237\u62e5\u6709\u8005\u7684\u8bb8\u53ef\u3002"),(0,r.kt)("p",null,"\u63d0\u4ea4\u4e4b\u524d\uff0c\u6bcf\u4e2a\u4ea4\u6613\u9700\u8981\u5f15\u7528\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/transactions#recent-blockhash"},"recent blockhash\uff08\u6700\u65b0\u5757\u54c8\u5e0c\uff09"),"\u3002\n\u5757\u54c8\u5e0c\u88ab\u7528\u4e8e\u53bb\u91cd\uff0c\u4ee5\u53ca\u79fb\u9664\u8fc7\u671f\u4ea4\u6613\u3002\u4e00\u4e2a\u5757\u54c8\u5e0c\u7684\u6700\u5927\u5bff\u547d\u662f150\u4e2a\u533a\u5757\uff0c\u6210\u6587\u65f6\u8fd9\u4e2a\u65f6\u95f4\u5927\u7ea6\u662f1\u5206\u949f19\u79d2\u3002"),(0,r.kt)("h3",{id:"\u8d39\u7528"},"\u8d39\u7528"),(0,r.kt)("p",null,"Solana\u7f51\u7edc\u6536\u53d6\u4e24\u79cd\u8d39\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/transaction_fees"},"\u4ea4\u6613\u8d39"),"\uff0c\u7528\u4e8e\u5411\u7f51\u7edc\u5e7f\u64ad\u6d88\u606f\uff08\u4ea6\u5373gas\u8d39\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/accounts#rent"},"\u79df\u91d1"),"\uff0c\u7528\u4e8e\u5411\u533a\u5757\u94fe\u4e0a\u5b58\u50a8\u6570\u636e")),(0,r.kt)("p",null,"\u5728Solana\u4e2d\uff0c\u4ea4\u6613\u8d39\u662f\u786e\u5b9a\u7684\u3002\u5e76\u6ca1\u6709\u8d39\u7387\u7ade\u4ef7\u7684\u6982\u5ff5\uff0c\u7528\u6237\u65e0\u6cd5\u901a\u8fc7\u589e\u52a0\u4ea4\u6613\u8d39\u7684\u65b9\u5f0f\u589e\u52a0\u81ea\u5df1\u7684\u4ea4\u6613\u88ab\u6253\u5305\u8fdb\u4e0b\u4e00\u4e2a\u533a\u5757\u7684\u6982\u7387\u3002\n\u5728\u6210\u6587\u65f6\uff0c\u4ea4\u6613\u8d39\u53ea\u4e0e\u4ea4\u6613\u6240\u9700\u7684\u7b7e\u540d\u6570\u91cf\u76f8\u5173\uff08\u53c2\u89c1",(0,r.kt)("inlineCode",{parentName:"p"},"lamports_per_signature"),"\uff09\uff0c\u4e0e\u4ea4\u6613\u6240\u4f7f\u7528\u7684\u8d44\u6e90\u65e0\u5173\u3002\n\u8fd9\u662f\u56e0\u4e3a\u76ee\u524d\u6240\u6709\u4ea4\u6613\u90fd\u6709\u4e00\u4e2a\u4e25\u683c\u76841232\u5b57\u8282\u7684\u9650\u5236\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u4ea4\u6613\u90fd\u9700\u8981\u81f3\u5c11\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"writable"),"\uff08\u53ef\u5199\uff09\u7684\u8d26\u6237\uff0c\u7528\u4e8e\u4e3a\u4ea4\u6613\u7b7e\u540d\u3002\u8fd9\u4e2a\u8d26\u6237\u65e0\u8bba\u4ea4\u6613\u6210\u529f\u4e0e\u5426\u90fd\u9700\u8981\u4e3a\u4ea4\u6613\u6210\u672c\u4ed8\u8d39\u3002\n\u5982\u679c\u4ed8\u8d39\u8005\u6ca1\u6709\u8db3\u591f\u4e3a\u4ea4\u6613\u4ed8\u8d39\u7684\u4f59\u989d\uff0c\u8fd9\u4e2a\u4ea4\u6613\u5c31\u4f1a\u88ab\u4e22\u5f03\u3002"),(0,r.kt)("p",null,"\u6210\u6587\u65f6\uff0c50%\u7684\u4ea4\u6613\u8d39\u88ab\u51fa\u5757\u7684\u9a8c\u8bc1\u8282\u70b9\u6536\u53d6\uff0c\u5269\u4e0b\u768450%\u88ab\u71c3\u70e7\u6389\u3002\u8fd9\u6837\u7684\u7ed3\u6784\u4f1a\u6fc0\u52b1\u9a8c\u8bc1\u8282\u70b9\u5728leader schedule\uff08\u9886\u5bfc\u65f6\u95f4\u8868\uff09\u89c4\u5b9a\u7684\u5c5e\u4e8e\u81ea\u5df1\u7684slot\uff08\u63d2\u69fd\uff09\u4e2d\u5904\u7406\u5c3d\u53ef\u80fd\u591a\u7684\u4ea4\u6613\u3002"),(0,r.kt)("h2",{id:"other-resources"},"Other Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/transactions"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://solana.wiki/docs/solidity-guide/transactions/#solana-transaction-structure"},"\u4ea4\u6613\u7684\u7ed3\u6784")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jstarry.notion.site/Transaction-Fees-f09387e6a8d84287aa16a34ecb58e239"},"Transaction Fees by Justin Starry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://2501babe.github.io/posts/solana101.html"},"An Introduction to Solana by Hana")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143"},"Transaction Processing by Jito Labs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@asmiller1989/solana-transactions-in-depth-1f7f7fe06ac2"},"Solana Transaction in Depth by Alex Miller"))))}u.isMDXComponent=!0}}]);