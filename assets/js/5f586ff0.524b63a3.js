"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[560],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>k});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=l,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return a?t.createElement(k,o(o({ref:n},c),{},{components:a})):t.createElement(k,o({ref:n},c))}));function k(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56021:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=a(87462),l=(a(67294),a(3905));const r={sidebar_position:3,sidebar_label:"\u5bc6\u7801\u5b66\u57fa\u7840\u77e5\u8bc6",sidebar_class_name:"green",tags:["blockchain","solana","cryptography"]},o=void 0,i={unversionedId:"module1/cryptography_and_solana",id:"module1/cryptography_and_solana",title:"cryptography_and_solana",description:"TL;DR",source:"@site/docs/solana-development-course/module1/cryptography_and_solana.md",sourceDirName:"module1",slug:"/module1/cryptography_and_solana",permalink:"/solana-co-learn/solana-development-course/module1/cryptography_and_solana",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/solana-development-course/module1/cryptography_and_solana.md",tags:[{label:"blockchain",permalink:"/solana-co-learn/solana-development-course/tags/blockchain"},{label:"solana",permalink:"/solana-co-learn/solana-development-course/tags/solana"},{label:"cryptography",permalink:"/solana-co-learn/solana-development-course/tags/cryptography"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1697277246,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u5bc6\u7801\u5b66\u57fa\u7840\u77e5\u8bc6",sidebar_class_name:"green",tags:["blockchain","solana","cryptography"]},sidebar:"tutorialSidebar",previous:{title:"\u5bc6\u7801\u5b66\u548c Solana \u5ba2\u6237\u7aef\u7b80\u4ecb",permalink:"/solana-co-learn/solana-development-course/module1/"},next:{title:"\u4ece Solana \u7f51\u7edc\u8bfb\u53d6\u6570\u636e",permalink:"/solana-co-learn/solana-development-course/module1/read_data_from_solana"}},p={},s=[{value:"TL;DR",id:"tldr",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5bf9\u79f0\u548c\u975e\u5bf9\u79f0\u5bc6\u7801\u5b66",id:"\u5bf9\u79f0\u548c\u975e\u5bf9\u79f0\u5bc6\u7801\u5b66",level:3},{value:"\u975e\u5bf9\u79f0\u5bc6\u7801\u5b66",id:"\u975e\u5bf9\u79f0\u5bc6\u7801\u5b66",level:4},{value:"Solana \u4f7f\u7528\u516c\u94a5\u4f5c\u4e3a\u5730\u5740",id:"solana-\u4f7f\u7528\u516c\u94a5\u4f5c\u4e3a\u5730\u5740",level:3},{value:"\u4f7f\u7528 <code>@solana/web3.js</code> \u5236\u4f5c\u5bc6\u94a5\u5bf9",id:"\u4f7f\u7528-solanaweb3js-\u5236\u4f5c\u5bc6\u94a5\u5bf9",level:3},{value:"\u26a0\ufe0f \u4e0d\u8981\u5728\u6e90\u4ee3\u7801\u4e2d\u5305\u542b\u5bc6\u94a5",id:"\ufe0f-\u4e0d\u8981\u5728\u6e90\u4ee3\u7801\u4e2d\u5305\u542b\u5bc6\u94a5",level:3},{value:"\u52a0\u8f7d\u73b0\u6709\u5bc6\u94a5\u5bf9",id:"\u52a0\u8f7d\u73b0\u6709\u5bc6\u94a5\u5bf9",level:3},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4ece <code>.env</code> \u6587\u4ef6\u52a0\u8f7d\u73b0\u6709\u5bc6\u94a5\u5bf9",id:"\u4ece-env-\u6587\u4ef6\u52a0\u8f7d\u73b0\u6709\u5bc6\u94a5\u5bf9",level:3}],c={toc:s},u="wrapper";function d(e){let{components:n,...r}=e;return(0,l.kt)(u,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u94a5\u5bf9\u662f\u4e00\u5bf9\u5339\u914d\u7684\u516c\u94a5\u548c\u79d8\u5bc6\u5bc6\u94a5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u516c\u94a5\u7528\u4f5c\u6307\u5411 Solana \u7f51\u7edc\u4e0a\u5e10\u6237\u7684\u201c\u5730\u5740\u201d\u3002\u516c\u94a5\u53ef\u4ee5\u4e0e\u4efb\u4f55\u4eba\u5171\u4eab\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u94a5\u7528\u4e8e\u9a8c\u8bc1\u5e10\u6237\u7684\u6743\u9650\u3002\u987e\u540d\u601d\u4e49\uff0c\u60a8\u5e94\u8be5\u59cb\u7ec8\u5bf9\u5bc6\u94a5\u4fdd\u5bc6\u3002"),(0,l.kt)("li",{parentName:"ul"},"@solana/web3.js \u63d0\u4f9b\u4e86\u7528\u4e8e\u521b\u5efa\u5168\u65b0\u5bc6\u94a5\u5bf9\u6216\u4f7f\u7528\u73b0\u6709\u5bc6\u94a5\u6784\u5efa\u5bc6\u94a5\u5bf9\u7684\u8f85\u52a9\u51fd\u6570\u3002")),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("h3",{id:"\u5bf9\u79f0\u548c\u975e\u5bf9\u79f0\u5bc6\u7801\u5b66"},"\u5bf9\u79f0\u548c\u975e\u5bf9\u79f0\u5bc6\u7801\u5b66"),(0,l.kt)("p",null,"\u201c\u5bc6\u7801\u5b66\u201d\u5b57\u9762\u610f\u601d\u662f\u9690\u85cf\u4fe1\u606f\u7684\u7814\u7a76\u3002\u60a8\u6bcf\u5929\u4f1a\u9047\u5230\u4e24\u79cd\u4e3b\u8981\u7c7b\u578b\u7684\u5bc6\u7801\u5b66\uff1a"),(0,l.kt)("p",null,"\u5bf9\u79f0\u5bc6\u7801\u672f\u662f\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u94a5\u6765\u52a0\u5bc6\u548c\u89e3\u5bc6\u3002\u5b83\u5df2\u6709\u6570\u767e\u5e74\u5386\u53f2\uff0c\u4ece\u53e4\u57c3\u53ca\u4eba\u5230\u4f0a\u4e3d\u838e\u767d\u4e00\u4e16\u5973\u738b\uff0c\u6bcf\u4e2a\u4eba\u90fd\u5728\u4f7f\u7528\u5b83\u3002"),(0,l.kt)("p",null,"\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u6709\u591a\u79cd\uff0c\u4f46\u4eca\u5929\u6700\u5e38\u89c1\u7684\u662f AES \u548c Chacha20\u3002"),(0,l.kt)("h4",{id:"\u975e\u5bf9\u79f0\u5bc6\u7801\u5b66"},"\u975e\u5bf9\u79f0\u5bc6\u7801\u5b66"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u975e\u5bf9\u79f0\u52a0\u5bc6\u6280\u672f - \u4e5f\u79f0\u4e3a\u201c",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"\u516c\u94a5\u52a0\u5bc6\u6280\u672f"),"\u201d\uff0c\u4e8e 20 \u4e16\u7eaa 70 \u5e74\u4ee3\u5f00\u53d1\u3002\u5728\u975e\u5bf9\u79f0\u52a0\u5bc6\u4e2d\uff0c\u53c2\u4e0e\u8005\u62e5\u6709\u5bc6\u94a5\u5bf9\uff08\u6216\u5bc6\u94a5\u5bf9\uff09\u3002\u6bcf\u4e2a\u5bc6\u94a5\u5bf9\u7531\u4e00\u4e2a\u79d8\u5bc6\u5bc6\u94a5\u548c\u4e00\u4e2a\u516c\u94a5\u7ec4\u6210\u3002\u975e\u5bf9\u79f0\u52a0\u5bc6\u7684\u5de5\u4f5c\u539f\u7406\u4e0e\u5bf9\u79f0\u52a0\u5bc6\u4e0d\u540c\uff0c\u5e76\u4e14\u53ef\u4ee5\u505a\u4e0d\u540c\u7684\u4e8b\u60c5"),(0,l.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\uff1a\u5982\u679c\u4f7f\u7528\u516c\u94a5\u52a0\u5bc6\uff0c\u5219\u53ea\u80fd\u4f7f\u7528\u540c\u4e00\u5bc6\u94a5\u5bf9\u4e2d\u7684\u79d8\u5bc6\u5bc6\u94a5\u6765\u8bfb\u53d6\u5b83"),(0,l.kt)("li",{parentName:"ul"},"\u7b7e\u540d\uff1a\u5982\u679c\u4f7f\u7528\u5bc6\u94a5\u52a0\u5bc6\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u5bc6\u94a5\u5bf9\u4e2d\u7684\u516c\u94a5\u6765\u8bc1\u660e\u5bc6\u94a5\u7684\u6301\u6709\u8005\u5bf9\u5176\u8fdb\u884c\u4e86\u7b7e\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u60a8\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528\u975e\u5bf9\u79f0\u52a0\u5bc6\u6280\u672f\u6765\u8ba1\u7b97\u51fa\u7528\u4e8e\u5bf9\u79f0\u52a0\u5bc6\u6280\u672f\u7684\u597d\u5bc6\u94a5\uff01\u8fd9\u79f0\u4e3a\u5bc6\u94a5\u4ea4\u6362\uff0c\u60a8\u4f7f\u7528\u81ea\u5df1\u7684\u516c\u94a5\u548c\u63a5\u6536\u8005\u7684\u516c\u94a5\u6765\u751f\u6210\u201c\u4f1a\u8bdd\u201d\u5bc6\u94a5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u6709\u591a\u79cd\uff0c\u4f46\u4eca\u5929\u6700\u5e38\u89c1\u7684\u662f ECC \u6216 RSA \u7684\u53d8\u4f53\u3002")),(0,l.kt)("p",null,"\u975e\u5bf9\u79f0\u52a0\u5bc6\u975e\u5e38\u6d41\u884c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u60a8\u7684\u94f6\u884c\u5361\u5185\u6709\u4e00\u4e2a\u5bc6\u94a5\uff0c\u7528\u4e8e\u7b7e\u7f72\u4ea4\u6613\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u60a8\u7684\u94f6\u884c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u5339\u914d\u7684\u516c\u94a5\u8fdb\u884c\u68c0\u67e5\u6765\u786e\u8ba4\u60a8\u662f\u5426\u8fdb\u884c\u4e86\u4ea4\u6613\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7ad9\u5728\u5176\u8bc1\u4e66\u4e2d\u5305\u542b\u516c\u94a5\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u5c06\u4f7f\u7528\u6b64\u516c\u94a5\u6765\u52a0\u5bc6\u53d1\u9001\u5230\u7f51\u9875\u7684\u6570\u636e\uff08\u4f8b\u5982\u4e2a\u4eba\u4fe1\u606f\u3001\u767b\u5f55\u8be6\u7ec6\u4fe1\u606f\u548c\u4fe1\u7528\u5361\u53f7\uff09\u3002 \u7f51\u7ad9\u6709\u5339\u914d\u7684\u79c1\u94a5\uff0c\u56e0\u6b64\u7f51\u7ad9\u53ef\u4ee5\u8bfb\u53d6\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u60a8\u7684\u7535\u5b50\u62a4\u7167\u7531\u7b7e\u53d1\u56fd\u5bb6\u7b7e\u7f72\uff0c\u4ee5\u786e\u4fdd\u62a4\u7167\u4e0d\u88ab\u4f2a\u9020\u3002\u7535\u5b50\u62a4\u7167\u95e8\u53ef\u4ee5\u4f7f\u7528\u60a8\u7684\u7b7e\u53d1\u56fd\u7684\u516c\u94a5\u6765\u786e\u8ba4\u8fd9\u4e00\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u624b\u673a\u4e0a\u7684\u6d88\u606f\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u5bc6\u94a5\u4ea4\u6362\u6765\u521b\u5efa\u4f1a\u8bdd\u5bc6\u94a5\u3002")),(0,l.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0c\u5bc6\u7801\u5b66\u5c31\u5728\u6211\u4eec\u8eab\u8fb9\u3002 Solana \u4ee5\u53ca\u5176\u4ed6\u533a\u5757\u94fe\u53ea\u662f\u5bc6\u7801\u5b66\u7684\u4e00\u79cd\u7528\u9014\u3002"),(0,l.kt)("h3",{id:"solana-\u4f7f\u7528\u516c\u94a5\u4f5c\u4e3a\u5730\u5740"},"Solana \u4f7f\u7528\u516c\u94a5\u4f5c\u4e3a\u5730\u5740"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(25775).Z,width:"2016",height:"1329"})),(0,l.kt)("p",null,"\u53c2\u4e0e Solana \u7f51\u7edc\u7684\u4eba\u81f3\u5c11\u62e5\u6709\u4e00\u5bf9\u5bc6\u94a5\u3002\u5728\u7d22\u62c9\u7eb3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u516c\u94a5\u7528\u4f5c\u6307\u5411 Solana \u7f51\u7edc\u4e0a\u5e10\u6237\u7684\u201c\u5730\u5740\u201d\u3002\u5373\u4f7f\u662f\u53cb\u597d\u7684\u540d\u79f0 - \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"example.sol")," - \u4e5f\u6307\u5411 ",(0,l.kt)("inlineCode",{parentName:"li"},"dDCQNnDmNbFVi8cQhKAgXhyhXeJ625tvwsunRyRc7c8")," \u8fd9\u6837\u7684\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u79c1\u94a5\u7528\u4e8e\u9a8c\u8bc1\u8be5\u5bc6\u94a5\u5bf9\u7684\u6743\u9650\u3002\u5982\u679c\u60a8\u62e5\u6709\u67d0\u4e2a\u5730\u5740\u7684\u5bc6\u94a5\uff0c\u60a8\u5c31\u53ef\u4ee5\u63a7\u5236\u8be5\u5730\u5740\u5185\u7684\u4ee3\u5e01\u3002\u56e0\u6b64\uff0c\u987e\u540d\u601d\u4e49\uff0c\u60a8\u5e94\u8be5\u59cb\u7ec8\u5bf9\u5bc6\u94a5\u4fdd\u5bc6\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528-solanaweb3js-\u5236\u4f5c\u5bc6\u94a5\u5bf9"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"@solana/web3.js")," \u5236\u4f5c\u5bc6\u94a5\u5bf9"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u6216\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"@solana/web3.js")," npm \u6a21\u5757\u7684 Node.js \u4f7f\u7528 Solana \u533a\u5757\u94fe\u3002\u6309\u7167\u5e73\u5e38\u7684\u65b9\u5f0f\u8bbe\u7f6e\u4e00\u4e2a\u9879\u76ee\uff0c\u7136\u540e",(0,l.kt)("a",{parentName:"p",href:"https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/"},"\u4f7f\u7528 npm")," \u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"@solana/web3.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @solana/web3.js\n")),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u5728\u672c\u8bfe\u7a0b\u4e2d\u9010\u6b65\u4ecb\u7ecd\u8bb8\u591a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/javascript-reference"},"web3.js")," \u7684\u5185\u5bb9\uff0c\u4f46\u60a8\u4e5f\u53ef\u4ee5\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/javascript-reference"},"\u5b98\u65b9 web3.js \u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"\u8981\u53d1\u9001\u4ee4\u724c\u3001\u53d1\u9001 NFTS \u6216\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e Solana\uff0c\u60a8\u9700\u8981\u81ea\u5df1\u7684\u5bc6\u94a5\u5bf9\u3002\u8981\u521b\u5efa\u65b0\u7684\u5bc6\u94a5\u5bf9\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@solana/web3.js")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Keypair.generate()")," \u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { Keypair } from "@solana/web3.js";\n\nconst keypair = Keypair.generate();\n\nconsole.log(`The public key is: `, keypair.publicKey.toBase58());\nconsole.log(`The secret key is: `, keypair.secretKey);\n')),(0,l.kt)("h3",{id:"\ufe0f-\u4e0d\u8981\u5728\u6e90\u4ee3\u7801\u4e2d\u5305\u542b\u5bc6\u94a5"},"\u26a0\ufe0f \u4e0d\u8981\u5728\u6e90\u4ee3\u7801\u4e2d\u5305\u542b\u5bc6\u94a5"),(0,l.kt)("p",null,"\u7531\u4e8e\u5bc6\u94a5\u5bf9\u53ef\u4ee5\u4ece\u5bc6\u94a5\u91cd\u65b0\u751f\u6210\uff0c\u56e0\u6b64\u6211\u4eec\u901a\u5e38\u53ea\u5b58\u50a8\u5bc6\u94a5\uff0c\u5e76\u4ece\u5bc6\u94a5\u6062\u590d\u5bc6\u94a5\u5bf9\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u7531\u4e8e\u5bc6\u94a5\u8d4b\u4e88\u4e86\u5730\u5740\u6743\u9650\uff0c\u56e0\u6b64\u6211\u4eec\u4e0d\u4f1a\u5c06\u5bc6\u94a5\u5b58\u50a8\u5728\u6e90\u4ee3\u7801\u4e2d\u3002\u76f8\u53cd\uff0c\u6211\u4eec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u5bc6\u94a5\u653e\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},".env")," \u6587\u4ef6\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},".env")," \u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},".gitignore"),"\uff0c\u8fd9\u6837 ",(0,l.kt)("inlineCode",{parentName:"li"},".env")," \u6587\u4ef6\u5c31\u4e0d\u4f1a\u88ab\u63d0\u4ea4\u3002")),(0,l.kt)("h3",{id:"\u52a0\u8f7d\u73b0\u6709\u5bc6\u94a5\u5bf9"},"\u52a0\u8f7d\u73b0\u6709\u5bc6\u94a5\u5bf9"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u60f3\u8981\u4f7f\u7528\u7684\u5bc6\u94a5\u5bf9\uff0c\u5219\u53ef\u4ee5\u4ece\u6587\u4ef6\u7cfb\u7edf\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u5b58\u50a8\u7684\u73b0\u6709\u5bc6\u94a5\u52a0\u8f7d\u5bc6\u94a5\u5bf9\u3002\u5728node.js\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@solana-developers/node-helpers")," npm\u5305\u5305\u542b\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},".env")," \u6587\u4ef6\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"getKeypairFromEnvironment()")),(0,l.kt)("li",{parentName:"ul"},"\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Solana CLI")," \u6587\u4ef6\uff0c\u8bf7\u4f7f\u7528 `getKeypairFromFile()``")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import * as dotenv from "dotenv";\nimport { getKeypairFromEnvironment } from "@solana-developers/node-helpers";\n\ndotenv.config();\n\nconst keypair = getKeypairFromEnvironment("SECRET_KEY");\n')),(0,l.kt)("p",null,"\u60a8\u77e5\u9053\u5982\u4f55\u5236\u4f5c\u548c\u52a0\u8f7d\u5bc6\u94a5\u5bf9\uff01\u8ba9\u6211\u4eec\u7ec3\u4e60\u4e00\u4e0b\u6211\u4eec\u6240\u5b66\u7684\u5185\u5bb9\u3002"),(0,l.kt)("h2",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u76ee\u5f55\uff0c\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeScript"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Solana web3.js")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"esrun"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir generate-keypair\ncd generate-keypair\nnpm init -y\nnpm install typescript @solana/web3.js @digitak/esrun @solana-developers/node-helpers\n")),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"generate-keypair.ts"),"\u7684\u65b0\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'import { Keypair } from "@solana/web3.js";\nconst keypair = Keypair.generate();\nconsole.log(`\u2705 Generated keypair!`)\n')),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npx esrungenerate-keypair.ts"),"\u3002\u60a8\u5e94\u8be5\u770b\u5230\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u2705 Generated keypair!\n")),(0,l.kt)("p",null,"\u6bcf\u4e2a\u5bc6\u94a5\u5bf9\u90fd\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"publicKey")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"SecretKey")," \u5c5e\u6027\u3002\u66f4\u65b0\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'import { Keypair } from "@solana/web3.js";\n\nconst keypair = Keypair.generate();\n\nconsole.log(`The public key is: `, keypair.publicKey.toBase58());\nconsole.log(`The secret key is: `, keypair.secretKey);\nconsole.log(`\u2705 Finished!`);\n')),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npx esrungenerate-keypair.ts"),"\u3002\u60a8\u5e94\u8be5\u770b\u5230\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"The public key is:  764CksEAZvm7C1mg2uFmpeFvifxwgjqxj2bH6Ps7La4F\nThe secret key is:  Uint8Array(64) [\n  (a long series of numbers)\n]\n\u2705 Finished!\n")),(0,l.kt)("h3",{id:"\u4ece-env-\u6587\u4ef6\u52a0\u8f7d\u73b0\u6709\u5bc6\u94a5\u5bf9"},"\u4ece ",(0,l.kt)("inlineCode",{parentName:"h3"},".env")," \u6587\u4ef6\u52a0\u8f7d\u73b0\u6709\u5bc6\u94a5\u5bf9"),(0,l.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u60a8\u7684\u5bc6\u94a5\u5b89\u5168\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u6ce8\u5165\u5bc6\u94a5\uff1a"),(0,l.kt)("p",null,"\u4f7f\u7528\u60a8\u4e4b\u524d\u521b\u5efa\u7684\u5bc6\u94a5\u7684\u5185\u5bb9\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u7684\u65b0\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'SECRET_KEY="[(a series of numbers)]"\n')),(0,l.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u4ece\u73af\u5883\u4e2d\u52a0\u8f7d\u5bc6\u94a5\u5bf9\u3002\u66f4\u65b0",(0,l.kt)("inlineCode",{parentName:"p"},"generate-keypair.ts"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import * as dotenv from "dotenv";\nimport { getKeypairFromEnvironment } from "@solana-developers/node-helpers";\n\ndotenv.config();\n\nconst keypair = getKeypairFromEnvironment("SECRET_KEY");\n\nconsole.log(\n  `\u2705 Finished! We\'ve loaded our secret key securely, using an env file!`\n);\n')),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npx esrungenerate-keypair.ts"),"\u3002\u60a8\u5e94\u8be5\u770b\u5230\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u2705 Finished! We've loaded our secret key securely, using an env file!\n")),(0,l.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u5df2\u7ecf\u4e86\u89e3\u4e86\u5bc6\u94a5\u5bf9\uff0c\u4ee5\u53ca\u5982\u4f55\u5728 Solana \u4e0a\u5b89\u5168\u5730\u5b58\u50a8\u5bc6\u94a5\u3002\u5728\u4e0b\u4e00\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u5b83\u4eec\uff01"))}d.isMDXComponent=!0},25775:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/wallet-addresses-662bd6b2b48bf5b363c07b05b3a6a129.svg"}}]);