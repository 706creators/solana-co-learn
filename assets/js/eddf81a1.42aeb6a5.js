"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[9314],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>k});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=l,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?t.createElement(k,r(r({ref:n},m),{},{components:a})):t.createElement(k,r({ref:n},m))}));function k(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82286:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=a(87462),l=(a(67294),a(3905));const i={sidebar_position:36,sidebar_label:"\ud83c\udf6d \u7cd6\u679c\u673a\u548cSugar CLI",sidebar_class_name:"green",tags:["nfts-and-minting-with-metaplex","solana","nft","metaplex","candy-machine","sugar-cli"]},r="\ud83c\udf6d \u7cd6\u679c\u673a\u548cSugar CLI",o={unversionedId:"module2/nfts-and-minting-with-metaplex/candy-machine-and-the-sugar-cli/README",id:"module2/nfts-and-minting-with-metaplex/candy-machine-and-the-sugar-cli/README",title:"\ud83c\udf6d \u7cd6\u679c\u673a\u548cSugar CLI",description:"\u5c06\u81ea\u5df1\u7684\u8138\u505a\u6210NFT\u6709\u4f55\u4e0d\u597d\u5462\uff1f\u4f60\u53ef\u4ee5\u6c38\u4e45\u5730\u5c06\u81ea\u5df1\u89c6\u4e3a\u4e00\u4e2a\u65e9\u671f\u7684\u5efa\u8bbe\u8005\uff0c\u5e76\u544a\u8bc9\u4f60\u7684\u5988\u5988\u4f60\u5df2\u7ecf\u8fdb\u5165\u4e86\u533a\u5757\u94fe\u4e16\u754c\u3002\u65e2\u7136\u6211\u4eec\u5df2\u7ecf\u94f8\u9020\u4e86\u4e00\u4e2a\u5355\u72ec\u7684NFT\uff0c\u73b0\u5728\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u94f8\u9020\u4e00\u7cfb\u5217\u7684NFT\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Candy Machine\u2014\u2014\u8fd9\u662f\u4e00\u4e2aSolana\u7a0b\u5e8f\uff0c\u8ba9\u521b\u4f5c\u8005\u80fd\u591f\u5c06\u4ed6\u4eec\u7684\u8d44\u4ea7\u4e0a\u94fe\u3002\u5c3d\u7ba1\u8fd9\u4e0d\u662f\u521b\u5efa\u7cfb\u5217\u7684\u552f\u4e00\u65b9\u6cd5\uff0c\u4f46\u5728Solana\u4e0a\u5b83\u5df2\u7ecf\u6210\u4e3a\u4e00\u79cd\u6807\u51c6\uff0c\u56e0\u4e3a\u5b83\u62e5\u6709\u4e00\u4e9b\u6709\u7528\u7684\u529f\u80fd\uff0c\u5982\u9632\u673a\u5668\u4eba\u4fdd\u62a4\u548c\u5b89\u5168\u968f\u673a\u5316\u3002",source:"@site/docs/Solana-Co-Learn/module2/nfts-and-minting-with-metaplex/candy-machine-and-the-sugar-cli/README.md",sourceDirName:"module2/nfts-and-minting-with-metaplex/candy-machine-and-the-sugar-cli",slug:"/module2/nfts-and-minting-with-metaplex/candy-machine-and-the-sugar-cli/",permalink:"/Solana-Co-Learn/module2/nfts-and-minting-with-metaplex/candy-machine-and-the-sugar-cli/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/Solana-Co-Learn/module2/nfts-and-minting-with-metaplex/candy-machine-and-the-sugar-cli/README.md",tags:[{label:"nfts-and-minting-with-metaplex",permalink:"/Solana-Co-Learn/tags/nfts-and-minting-with-metaplex"},{label:"solana",permalink:"/Solana-Co-Learn/tags/solana"},{label:"nft",permalink:"/Solana-Co-Learn/tags/nft"},{label:"metaplex",permalink:"/Solana-Co-Learn/tags/metaplex"},{label:"candy-machine",permalink:"/Solana-Co-Learn/tags/candy-machine"},{label:"sugar-cli",permalink:"/Solana-Co-Learn/tags/sugar-cli"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1694519070,formattedLastUpdatedAt:"Sep 12, 2023",sidebarPosition:36,frontMatter:{sidebar_position:36,sidebar_label:"\ud83c\udf6d \u7cd6\u679c\u673a\u548cSugar CLI",sidebar_class_name:"green",tags:["nfts-and-minting-with-metaplex","solana","nft","metaplex","candy-machine","sugar-cli"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd28 NFT\u4f60\u7684\u8138",permalink:"/Solana-Co-Learn/module2/nfts-and-minting-with-metaplex/nft-your-face/"},next:{title:"\u5728\u7528\u6237\u754c\u9762\u4e2d\u5c55\u793aNFTS",permalink:"/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/"}},p={},s=[{value:"\ud83d\udee0 \u5b89\u88c5\u547d\u4ee4\u884c\u754c\u9762\uff08CLIs\uff09",id:"-\u5b89\u88c5\u547d\u4ee4\u884c\u754c\u9762clis",level:2},{value:"\ud83c\udf6c \u521b\u5efa\u4f60\u7684\u73cd\u85cf\u54c1",id:"-\u521b\u5efa\u4f60\u7684\u73cd\u85cf\u54c1",level:2},{value:"\ud83c\udf6d \u914d\u7f6e\u4f60\u7684\u7cd6\u679c\u673a",id:"-\u914d\u7f6e\u4f60\u7684\u7cd6\u679c\u673a",level:2},{value:"\ud83d\ude80 \u53d1\u884c\u4f60\u7684NFT\u73cd\u85cf\u54c1",id:"-\u53d1\u884c\u4f60\u7684nft\u73cd\u85cf\u54c1",level:2},{value:"\ud83c\udf10 \u4e3a\u4f60\u7684NFT\u6536\u85cf\u521b\u5efa\u524d\u7aef\u754c\u9762",id:"-\u4e3a\u4f60\u7684nft\u6536\u85cf\u521b\u5efa\u524d\u7aef\u754c\u9762",level:2},{value:"\ud83d\udea2 \u6311\u6218",id:"-\u6311\u6218",level:2}],m={toc:s},d="wrapper";function c(e){let{components:n,...i}=e;return(0,l.kt)(d,(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-\u7cd6\u679c\u673a\u548csugar-cli"},"\ud83c\udf6d \u7cd6\u679c\u673a\u548cSugar CLI"),(0,l.kt)("p",null,"\u5c06\u81ea\u5df1\u7684\u8138\u505a\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u6709\u4f55\u4e0d\u597d\u5462\uff1f\u4f60\u53ef\u4ee5\u6c38\u4e45\u5730\u5c06\u81ea\u5df1\u89c6\u4e3a\u4e00\u4e2a\u65e9\u671f\u7684\u5efa\u8bbe\u8005\uff0c\u5e76\u544a\u8bc9\u4f60\u7684\u5988\u5988\u4f60\u5df2\u7ecf\u8fdb\u5165\u4e86\u533a\u5757\u94fe\u4e16\u754c\u3002\u65e2\u7136\u6211\u4eec\u5df2\u7ecf\u94f8\u9020\u4e86\u4e00\u4e2a\u5355\u72ec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff0c\u73b0\u5728\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u94f8\u9020\u4e00\u7cfb\u5217\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u6211\u4eec\u5c06\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Candy Machine"),"\u2014\u2014\u8fd9\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7a0b\u5e8f\uff0c\u8ba9\u521b\u4f5c\u8005\u80fd\u591f\u5c06\u4ed6\u4eec\u7684\u8d44\u4ea7\u4e0a\u94fe\u3002\u5c3d\u7ba1\u8fd9\u4e0d\u662f\u521b\u5efa\u7cfb\u5217\u7684\u552f\u4e00\u65b9\u6cd5\uff0c\u4f46\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u5b83\u5df2\u7ecf\u6210\u4e3a\u4e00\u79cd\u6807\u51c6\uff0c\u56e0\u4e3a\u5b83\u62e5\u6709\u4e00\u4e9b\u6709\u7528\u7684\u529f\u80fd\uff0c\u5982\u9632\u673a\u5668\u4eba\u4fdd\u62a4\u548c\u5b89\u5168\u968f\u673a\u5316\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a\u94fe\u4e0a\u7a0b\u5e8f\uff0c\u6240\u6709\u7684\u6570\u636e\u90fd\u5b58\u50a8\u5728\u8d26\u6237\u4e2d\u3002\u4f60\u9996\u5148\u9700\u8981\u4e3a\u4f60\u7684\u6536\u85cf\u521b\u5efa\u4e00\u4e2a\u7cd6\u679c\u673a\u5b9e\u4f8b\u3002\u8fd9\u53ea\u662f\u4e00\u4e2a\u8d26\u6237\uff0c\u5176\u4e2d\u5b58\u50a8\u4e86\u4e00\u4e9b\u5173\u4e8e\u6240\u6709\u8005\u7684\u91cd\u8981\u4fe1\u606f\u4ee5\u53ca\u7cd6\u679c\u673a\u5728\u5143\u6570\u636e\u5b57\u6bb5\u4e2d\u7684\u914d\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(76373).Z,width:"1152",height:"654"})),(0,l.kt)("p",null,"\u6ce8\u610f\u90a3\u4e2a\u6570\u636e\u5b57\u6bb5\uff1f\u90a3\u91cc\u5b58\u653e\u7684\u5c31\u662f\u5143\u6570\u636e\uff0c\u5b83\u7684\u7ed3\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(80424).Z,width:"1190",height:"818"})),(0,l.kt)("p",null,"\u518d\u6b21\u5f3a\u8c03\u4e00\u4e0b\uff0c\u8fd9\u91cc\u6709\u5f88\u591a\u7ec6\u8282\uff0c\u6211\u4eec\u5c06\u5728\u9002\u5f53\u7684\u65f6\u5019\u9010\u4e00\u89e3\u91ca\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4e0e\u7cd6\u679c\u673a\u7a0b\u5e8f\u4e92\u52a8\uff0c\u6211\u4eec\u5c06\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/developer-tools/sugar/overview/introduction"},(0,l.kt)("inlineCode",{parentName:"a"},"Sugar CLI")),"\u3002\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u68d2\u7684\u5de5\u5177\uff0c\u8ba9\u4f60\u80fd\u591f\u76f4\u63a5\u4ece\u547d\u4ee4\u884c\u4e0e\u7a0b\u5e8f\u4ea4\u4e92\u3002"),(0,l.kt)("h2",{id:"-\u5b89\u88c5\u547d\u4ee4\u884c\u754c\u9762clis"},"\ud83d\udee0 \u5b89\u88c5\u547d\u4ee4\u884c\u754c\u9762\uff08CLIs\uff09"),(0,l.kt)("p",null,"\u5728\u6211\u4eec\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u4e24\u6837\u4e1c\u897f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Solana CLI")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Sugar CLI")," \u4f9d\u8d56\u4e8e\u6b64\u3002\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"li",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"\u8fd9\u91cc"),"\u627e\u5230\u9002\u5408\u4f60\u64cd\u4f5c\u7cfb\u7edf\u7684\u5b89\u88c5\u6307\u5357\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Sugar CLI")," - \u4f60\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"li",href:"https://docs.metaplex.com/developer-tools/sugar/overview/installation"},"\u8fd9\u91cc"),"\u627e\u5230\u5b89\u88c5\u65b9\u6cd5\u3002")))),(0,l.kt)("p",null,"\u6ce8\u610f - \u5982\u679c\u4f60\u60f3\u5c06CLI\u7684\u5b89\u88c5\u4e0e\u4f60\u7684\u8ba1\u7b97\u673a\u9694\u79bb\u5f00\u6765\uff0c\u4f60\u53ef\u4ee5\u5728Docker\u4e0a\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\uff0c\u7136\u540e\u4e0b\u8f7d",(0,l.kt)("inlineCode",{parentName:"p"},"Sugar CLI"),"\u3002Docker\u955c\u50cf\u5728",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/solanalabs/solana"},"\u8fd9\u91cc"),"\u3002\u5982\u679c\u4f60\u4e0d\u4e86\u89e3Docker\u662f\u4ec0\u4e48\uff0c\u4e5f\u4e0d\u8981\u62c5\u5fc3\uff01"),(0,l.kt)("p",null,"\u5982\u679c\u5b89\u88c5\u6b63\u786e\uff0c\u5f53\u4f60\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"solana --version")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"sugar --version")," \u65f6\uff0c\u5e94\u8be5\u4f1a\u770b\u5230\u7248\u672c\u53f7\u800c\u4e0d\u662f\u9519\u8bef\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u672c\u5730\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u94b1\u5305\uff0c\u73b0\u5728\u662f\u914d\u7f6e\u5f00\u53d1\u7f51\u7edc\u7684\u597d\u65f6\u673a\u3002\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url devnet\nsolana-keygen new --outfile ~/.config/solana/devnet.json\nsolana airdrop 2\nsolana balance\n")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u547d\u4ee4\u4e0e\u6211\u4eec\u5728\u672c\u5730\u5ba2\u6237\u7aef\u811a\u672c\u4e2d\u6267\u884c\u7684\u64cd\u4f5c\u76f8\u540c\uff0c\u53ea\u4e0d\u8fc7\u73b0\u5728\u662f\u5728\u7ec8\u7aef\u4e2d\u5b8c\u6210\u3002\u8fd9\u6837\uff0c\u4f60\u5c31\u4e3a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u521b\u5efa\u4e00\u7cfb\u5217",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u505a\u597d\u4e86\u51c6\u5907\u3002"),(0,l.kt)("h2",{id:"-\u521b\u5efa\u4f60\u7684\u73cd\u85cf\u54c1"},"\ud83c\udf6c \u521b\u5efa\u4f60\u7684\u73cd\u85cf\u54c1"),(0,l.kt)("p",null,"\u8fd9\u53ef\u80fd\u662f\u6574\u4e2a\u6784\u5efa\u8fc7\u7a0b\u4e2d\u6700\u5177\u6311\u6218\u7684\u90e8\u5206\uff1a\u786e\u5b9a\u4f60\u60f3\u8981\u5236\u4f5c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u6536\u85cf\u54c1\u7684\u5185\u5bb9\u3002\u4f60\u81f3\u5c11\u9700\u8981\u51c6\u59075\u5f20\u56fe\u7247\uff0c\u6bcf\u5f20\u56fe\u7247\u5bf9\u5e94\u6536\u85cf\u4e2d\u7684\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002\u6211\u6311\u9009\u4e86\u4e00\u4e9b\u7ecf\u5178\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"pepes"),"\u56fe\u50cf\uff0c\u56e0\u4e3a\u5b83\u4eec\u603b\u80fd\u5f15\u8d77\u6211\u7684\u5171\u9e23\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u5de5\u4f5c\u7a7a\u95f4\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u9879\u76ee\u6587\u4ef6\u5939\uff0c\u5e76\u5728\u5176\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"assets")," \u7684\u6587\u4ef6\u5939\u3002\u4f60\u9700\u8981\u5c06\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u8d44\u4ea7\u4e0e\u4e00\u4efd\u5143\u6570\u636e",(0,l.kt)("inlineCode",{parentName:"p"},"JSON"),"\u6587\u4ef6\u914d\u5bf9\uff0c\u5e76\u4ece\u96f6\u5f00\u59cb\u4e3a\u6bcf\u4e00\u5bf9\u7f16\u53f7\u3002\u56e0\u6b64\uff0c\u4f60\u7684\u6587\u4ef6\u5939\u7ed3\u6784\u5e94\u8be5\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"...\n|\n|\u2500\u2500 assets\n|   |\u2500\u2500 0.png\n|   |\u2500\u2500 0.json\n|   |...\n|   |\u2500\u2500 5.png\n|   |\u2500\u2500 5.json\n|\n|\u2500\u2500 node_modules\n|\u2500\u2500 src\n|\u2500\u2500 package.json\n....\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"JSON"),"\u6587\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(44632).Z,width:"662",height:"633"})),(0,l.kt)("p",null,"\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\uff0c\u4f60\u53ef\u4ee5\u7f16\u5199\u811a\u672c\u6765\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6\uff0c\u4f46\u73b0\u5728\u6211\u4eec\u6682\u65f6\u624b\u52a8\u5b8c\u6210\u3002\u4f60\u53ef\u4ee5\u4ece\u8fd9\u4e9b",(0,l.kt)("a",{parentName:"p",href:"https://arweave.net/RhNCVZoqC6iO0xEL0DnsqZGPSG_CK_KeiU4vluOeIoI?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u793a\u4f8b\u8d44\u4ea7"),"\u5f00\u59cb\uff0c\u7136\u540e\u7528\u4f60\u81ea\u5df1\u7684\u56fe\u7247\u66ff\u6362\u5b83\u4eec\u3002\u522b\u5fd8\u4e86\u66f4\u65b0JSON\u6587\u4ef6\uff01"),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u9009\u62e9\u6dfb\u52a0\u4e0e\u4e4b\u5339\u914d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"collection.json")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"collection.png")," \u6587\u4ef6\uff0c\u5e02\u573a\u5c06\u4f7f\u7528\u8fd9\u4e9b\u6587\u4ef6\u4f5c\u4e3a\u96c6\u5408\u7684\u540d\u79f0\u3001\u63cf\u8ff0\u548c\u7f29\u7565\u56fe\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6a21\u677f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Studious Crabs Collection",\n  "symbol": "CRAB",\n  "description": "Collection of 10 crabs seeking refuge from overfishing on the blockchain.",\n  "image": "collection.png",\n  "attributes": [],\n  "properties": {\n    "files": [\n      {\n        "uri": "collection.png",\n        "type": "image/png"\n      }\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"\u62ef\u6551\ud83e\udd80\u8783\u87f9\uff0c\u4f7f\u5176\u514d\u53d7\ud83c\udfa3\u6e14\u6c11\u6355\u635e"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u7684\u8d44\u4ea7\u6587\u4ef6\u5939\u5e94\u8be5\u53ea\u5305\u62ec\u5546\u54c1\uff08\u5982\u679c\u4f60\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Windows"),"\u7cfb\u7edf\uff0c\u53ef\u80fd\u8fd8\u4f1a\u6709\u4e00\u4e2a~\u6587\u4ef6\u5939\uff09\u3002"),(0,l.kt)("h2",{id:"-\u914d\u7f6e\u4f60\u7684\u7cd6\u679c\u673a"},"\ud83c\udf6d \u914d\u7f6e\u4f60\u7684\u7cd6\u679c\u673a"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u7cd6\u679c\u673a\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u8fd9\u4e2a\u6587\u4ef6\u7528\u4e8e\u5728\u94fe\u4e0a\u521b\u5efa\u7cd6\u679c\u673a\u5b9e\u4f8b\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Sugar CLI"),"\u5c06\u6307\u5bfc\u4f60\u5b8c\u6210\u6700\u57fa\u672c\u7684\u8bbe\u7f6e\uff0c\u65e0\u9700\u624b\u52a8\u64cd\u4f5c\uff01\u4ee5\u4e0b\u662f\u5b83\u7684\u6837\u5b50\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(39814).Z,width:"598",height:"844"})),(0,l.kt)("p",null,"\u4f60\u662f\u5426\u542c\u8bf4\u8fc7\u5403\u592a\u591a\u7cd6\u5bf9\u8eab\u4f53\u4e0d\u597d\uff1f\u5f00\u53d1",(0,l.kt)("inlineCode",{parentName:"p"},"Sugar CLI"),"\u7684\u4eba\u4f3c\u4e4e\u4e5f\u8fd9\u4e48\u8ba4\u4e3a\u3002\u8981\u8bbe\u7acb\u4e00\u4e2a\u7cd6\u679c\u673a\uff0c\u4f60\u53ea\u9700\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"launch")," \u547d\u4ee4\uff0c\u5176\u4f59\u7684\u5de5\u4f5c\u5b83\u90fd\u4f1a\u4e3a\u4f60\u5904\u7406\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(43264).Z,width:"1500",height:"732"})),(0,l.kt)("h2",{id:"-\u53d1\u884c\u4f60\u7684nft\u73cd\u85cf\u54c1"},"\ud83d\ude80 \u53d1\u884c\u4f60\u7684NFT\u73cd\u85cf\u54c1"),(0,l.kt)("p",null,"\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"sugar launch")," \u547d\u4ee4\uff0c\u5f53\u5b83\u8be2\u95ee\u662f\u5426\u8981\u521b\u5efa\u65b0\u7684\u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"y"),"\u952e\u3002\u56de\u7b54\u95ee\u9898\u540e\uff0c\u4f60\u7684\u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u4f1a\u751f\u6210\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"config.json")," \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u7684\u56de\u7b54\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\u2714 What is the price of each NFT? \xb7 0.3\n\u2714 Found 10 file pairs in "assets". Is this how many NFTs you will have in your candy machine? \xb7 ye\n\u2714 Found symbol "CRAB" in your metadata file. Is this value correct? \xb7 no\n\u2714 What is the symbol of your collection? Hit [ENTER] for no symbol. \xb7 PEPE\n\u2714 What is the seller fee basis points? \xb7 100\n? What is your go live date? Many common formats are supported. \xb7 now\n\u2714 How many creator wallets do you have? (max limit of 4) \xb7 1\n\u2714 Enter creator wallet address #1 \xb7 B1aLAAe4vW8nSQCetXnYqJfRxzTjnbooczwkUJAr7yMS\n\u2714 Enter royalty percentage share for creator #1 (e.g., 70). Total shares must add to 100. \xb7 100\n? Which extra features do you want to use?  \xb7\n\u2714 What is your SOL treasury address? \xb7 B1aLAAe4vW8nSQCetXnYqJfRxzTjnbooczwkUJAr7yMS\n\u2714 What upload method do you want to use? \xb7 Bundlr\n\u2714 Do you want to retain update authority on your NFTs? We HIGHLY recommend you choose yes. \xb7 yes\n\u2714 Do you want your NFTs to remain mutable? We HIGHLY recommend you choose yes. \xb7 yes\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"MISSING COLLECTION FILES IN ASSETS FOLDER")," \u7684\u8b66\u544a\uff0c\u4e0d\u7528\u62c5\u5fc3\uff0c\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u6ca1\u6709\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"assets")," \u6587\u4ef6\u5939\u4e2d\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"collection.png")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"collection.json")," \u6587\u4ef6\u3002\u7ee7\u7eed\u56de\u7b54 y\u3002\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u8fd9\u4e9b\u6587\u4ef6\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/developer-tools/sugar/guides/preparing-assets"},"\u6b64\u5904"),"\u4e86\u89e3\u66f4\u591a\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6682\u65f6\u4e0d\u9700\u8981\u4efb\u4f55\u7279\u6b8a\u529f\u80fd\u3002\u5982\u679c\u4f60\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/developer-tools/sugar/learning/settings"},"\u6b64\u5904"),"\u9605\u8bfb\u66f4\u591a\u76f8\u5173\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9047\u5230\u4efb\u4f55\u95ee\u9898\u6216\u4e2d\u9014\u6539\u53d8\u4e3b\u610f\uff0c\u4f60\u53ef\u4ee5\u968f\u65f6\u9000\u51fa\u5e76\u91cd\u65b0\u5f00\u59cb\u3002\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.json")," \u6587\u4ef6\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Sugar CLI"),"\u4f1a\u663e\u793a\u975e\u5e38\u6709\u7528\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u6240\u4ee5\u5982\u679c\u9047\u5230\u56f0\u96be\uff0c\u53ea\u9700\u4ed4\u7ec6\u9605\u8bfb\uff0c\u901a\u5e38\u5c31\u80fd\u627e\u5230\u89e3\u51b3\u65b9\u6848\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u6700\u7ec8\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u7eff\u8272\u7684\u201c\u547d\u4ee4\u6210\u529f\u201d\u6d88\u606f\u3002\u5728\u6d88\u606f\u4e0a\u65b9\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2aSolanEyes\u94fe\u63a5\u3002\u70b9\u51fb\u8be5\u94fe\u63a5\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7f51\u7edc\u4e0a\u67e5\u770b\u4f60\u7684\u7cd6\u679c\u673a\uff01\u590d\u5236\u7cd6\u679c\u673a\u7684ID\u4ee5\u5907\u540e\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8fd9\u8fd8\u4e0d\u8db3\u4ee5\u8ba9\u4f60\u60ca\u5947\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"sugar mint")," \u547d\u4ee4\u6765\u94f8\u9020\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff0c\u8fd9\u7b80\u76f4\u662f\u4e00\u79cd\u7f8e\u5473\u7684\u4f53\u9a8c\u3002"),(0,l.kt)("p",null,'\u4e00\u65e6\u4f60\u6574\u7406\u597d\u4f60\u7684\u6536\u85cf\u54c1\uff0c\u5e76\u5728\u5df4\u5398\u5c9b\u4eab\u53d7\u4f11\u95f2\u65f6\u5149\uff0c"\u7cd6"\u5de5\u5177\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6267\u884c\u5404\u79cd\u64cd\u4f5c\u3002\u5982\u679c\u4f60\u611f\u5230\u597d\u5947\uff0c\u53ef\u4ee5\u67e5\u770b',(0,l.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/developer-tools/sugar/reference/commands"},"\u8fd9\u91cc\u7684\u547d\u4ee4"),"\u4e86\u89e3\u66f4\u591a\u3002"),(0,l.kt)("h2",{id:"-\u4e3a\u4f60\u7684nft\u6536\u85cf\u521b\u5efa\u524d\u7aef\u754c\u9762"},"\ud83c\udf10 \u4e3a\u4f60\u7684NFT\u6536\u85cf\u521b\u5efa\u524d\u7aef\u754c\u9762"),(0,l.kt)("p",null,"\u5e0c\u671b\u4f60\u5df2\u7ecf\u7528\u8fc7\u665a\u9910\uff0c\u56e0\u4e3a\u73b0\u5728\u53c8\u5230\u4e86\u4eab\u7528\u66f4\u591a\u7cd6\u679c\u7684\u65f6\u523b\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Metaplex"),"\u57fa\u91d1\u4f1a\u4e3a\u4f60\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65f6\u5c1a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"React UI"),"\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u4e3a\u4f60\u7684NFT\u6536\u85cf\u6253\u9020\u524d\u7aef\u754c\u9762\u3002\u4e0b\u9762\uff0c\u8ba9\u6211\u4eec\u5f00\u59cb\u8bbe\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/metaplex-foundation/candy-machine-ui\ncd candy-machine-ui\nnpm i\n")),(0,l.kt)("p",null,"\u867d\u7136\u8fd9\u91cc\u8fdb\u884c\u4e86\u5f88\u591a\u64cd\u4f5c\uff0c\u4f46\u6211\u4eec\u4e0d\u5fc5\u8fc7\u4e8e\u62c5\u5fc3\u3002\u53ea\u9700\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},".env.example")," \u6587\u4ef6\u91cd\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},".env"),"\uff0c\u5e76\u7c98\u8d34\u4f60\u4e4b\u524d\u590d\u5236\u7684\u7cd6\u679c\u673a",(0,l.kt)("inlineCode",{parentName:"p"},"ID"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"REACT_APP_CANDY_MACHINE_ID=GNfbQEfMA1u1irEFnThTcrzDyefJsoa7sndACShaS5vC\n")),(0,l.kt)("p",null,"\u8fd9\u5c31\u662f\u4f60\u9700\u8981\u505a\u7684\u5168\u90e8\u5de5\u4f5c\uff01\u73b0\u5728\uff0c\u5982\u679c\u4f60\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start"),"\uff0c\u4f60\u5c06\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:3000")," \u4e0a\u770b\u5230\u4e00\u4e2a\u7cbe\u7f8e\u7684\u7528\u6237\u754c\u9762\uff0c\u53ef\u4ee5\u7528\u5b83\u6765\u94f8\u9020\u4f60\u7684NFT\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Mac"),"\u7528\u6237\uff0c\u5982\u679c\u9047\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"export NODE_OPTIONS=--openssl-legacy-provider")," \u95ee\u9898\uff0c\u8bf7\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"\u94f8\u9020\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u94b1\u5305\u7684\u6536\u85cf\u54c1\u90e8\u5206\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(73801).Z,width:"356",height:"536"})),(0,l.kt)("p",null,"\u4f60\u4f1a\u6ce8\u610f\u5230\u94f8\u9020\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u5e76\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"1.png"),"\u3002\u8fd9\u662f\u56e0\u4e3a\u7cd6\u679c\u673a\u7684\u94f8\u9020\u8fc7\u7a0b\u9ed8\u8ba4\u662f\u968f\u673a\u7684\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ea\u662f\u6d45\u5c1d\u8f84\u6b62\u5730\u89e6\u53ca\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Candy Machine"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Sugar CLI"),"\u7684\u6f5c\u529b\u3002\u672a\u6765\u6211\u4eec\u8fd8\u4f1a\u6df1\u5165\u63a2\u8ba8\u66f4\u591a\u5185\u5bb9\u2014\u2014\u672c\u8282\u7684\u76ee\u7684\u662f\u8ba9\u4f60\u5177\u5907\u8db3\u591f\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u4ee5\u4fbf\u80fd\u591f\u81ea\u4e3b\u6df1\u5165\u7814\u7a76\u3002\u968f\u7740\u6211\u4eec\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u9879\u76ee\u7684\u4e0d\u65ad\u5b8c\u5584\uff0c\u6211\u4eec\u5c06\u7ee7\u7eed\u63a2\u7d22\u3002"),(0,l.kt)("h2",{id:"-\u6311\u6218"},"\ud83d\udea2 \u6311\u6218"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u4eab\u53d7\u4e00\u4f1a\u513f\u7cd6\u679c\u673a\u7684\u4e50\u8da3\u5427\uff01\ud83c\udf6d"),(0,l.kt)("p",null,"\u901a\u8fc7\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.json")," \u6587\u4ef6\u5e76\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"sugar update")," \u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u6316\u6398\u521b\u9020\u529b\u5e76\u5c1d\u8bd5\u4e0d\u540c\u7684\u7cd6\u679c\u673a\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"goLiveDate")),(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"gatekeeper"),"\uff08\u9a8c\u8bc1\u7801\u529f\u80fd\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"whitelistMintSettings"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u521b\u5efa\u4ee4\u724c"))),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"splToken")," \u6765\u4ee3\u66ff\u672c\u5730\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"sol"),"\u8fdb\u884c\u4ed8\u6b3e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u521b\u5efa\u4ee4\u724c")))),(0,l.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u63d0\u793a\u548c\u6587\u6863\uff0c\u8bf7\u8bbf\u95ee\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/developer-tools/sugar/learning/settings"},"https://docs.metaplex.com/developer-tools/sugar/learning/settings")))}c.isMDXComponent=!0},44632:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/candy-cli-00f43bfd4e7b6dba08b124f9534edb47.png"},80424:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/candy-machine-data-d0afaefce7462f15226af24e0370cd95.png"},76373:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/candy-machine-a456ccc69fb9e552cdce1fae74f06bfc.png"},73801:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/candy-nft-875a99a13c64e1b63bfe6f76be91a725.png"},39814:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/config-file-0ff449ad98cddd7f4f2be8c4e741e7a7.png"},43264:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/launch-09bae10d5aa4b59e0e2a02128b44c565.png"}}]);