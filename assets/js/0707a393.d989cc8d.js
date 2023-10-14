"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[3198],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(a),g=r,f=s["".concat(c,".").concat(g)]||s[g]||m[g]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={slug:"gulf-stream",title:"Gulf Stream Solana Mempool-less Transaction Forwarding Protocol",authors:["davirain"],tags:["blog","blockchain","solana","gulf"]},o=void 0,i={permalink:"/solana-co-learn/blog/gulf-stream",editUrl:"https://creatorsdao.github.io/all-in-one-solana/blog/blog/2023-09-28/gulf-stream.md",source:"@site/blog/2023-09-28/gulf-stream.md",title:"Gulf Stream Solana Mempool-less Transaction Forwarding Protocol",description:"\u5728\u8fd9\u7bc7\u535a\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8 Gulf Stream\uff0c\u8fd9\u662f Solana \u7528\u4e8e\u9ad8\u6027\u80fd\u5bf9\u6297\u7f51\u7edc\u7684\u5185\u5b58\u6c60\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u3002\u5728\u8fdb\u4e00\u6b65\u7684\u535a\u5ba2\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u5217\u51fa\u6240\u6709 7 \u4e2a\u5173\u952e\u521b\u65b0\u3002",date:"2023-09-28T00:00:00.000Z",formattedDate:"September 28, 2023",tags:[{label:"blog",permalink:"/solana-co-learn/blog/tags/blog"},{label:"blockchain",permalink:"/solana-co-learn/blog/tags/blockchain"},{label:"solana",permalink:"/solana-co-learn/blog/tags/solana"},{label:"gulf",permalink:"/solana-co-learn/blog/tags/gulf"}],readingTime:6.82,hasTruncateMarker:!1,authors:[{name:"Davirain",title:"Davirain Blog",url:"https://github.com/DaviRain-Su",imageURL:"https://github.com/DaviRain-Su.png",key:"davirain"}],frontMatter:{slug:"gulf-stream",title:"Gulf Stream Solana Mempool-less Transaction Forwarding Protocol",authors:["davirain"],tags:["blog","blockchain","solana","gulf"]},prevItem:{title:"Cloudbreak Solana Horizontally Scaled State Architecture",permalink:"/solana-co-learn/blog/cloudbreak"},nextItem:{title:"Pipelining in Solana The Transaction Processing Unit",permalink:"/solana-co-learn/blog/pileline"}},c={authorsImageUrls:[void 0]},u=[{value:"\u5185\u5b58\u6c60\u89e3\u91ca",id:"\u5185\u5b58\u6c60\u89e3\u91ca",level:2},{value:"Introducing Gulf Stream \u58a8\u897f\u54e5\u6e7e\u6d41\u7b80\u4ecb",id:"introducing-gulf-stream-\u58a8\u897f\u54e5\u6e7e\u6d41\u7b80\u4ecb",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u8fd9\u7bc7\u535a\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8 Gulf Stream\uff0c\u8fd9\u662f Solana \u7528\u4e8e\u9ad8\u6027\u80fd\u5bf9\u6297\u7f51\u7edc\u7684\u5185\u5b58\u6c60\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u3002\u5728\u8fdb\u4e00\u6b65\u7684\u535a\u5ba2\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u5217\u51fa\u6240\u6709 7 \u4e2a\u5173\u952e\u521b\u65b0\u3002"),(0,r.kt)("h2",{id:"\u5185\u5b58\u6c60\u89e3\u91ca"},"\u5185\u5b58\u6c60\u89e3\u91ca"),(0,r.kt)("p",null,"\u5185\u5b58\u6c60\u662f\u4e00\u7ec4\u5df2\u63d0\u4ea4\u4f46\u5c1a\u672a\u88ab\u7f51\u7edc\u5904\u7406\u7684\u4ea4\u6613\u3002\u60a8\u73b0\u5728\u53ef\u4ee5\u770b\u5230\u6bd4\u7279\u5e01\u548c\u4ee5\u592a\u574a\u5185\u5b58\u6c60\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*30LjYU6b-XeuWF_NWzYl3g.png",alt:"30 \u5929\u7684\u6bd4\u7279\u5e01\u5185\u5b58\u6c60\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*FOcunSU91FoxGDfQuXDTgg.png",alt:"\u4ee5\u4ea4\u6613\u91cf\u8861\u91cf\u7684 30 \u5929\u4ee5\u592a\u574a\u5185\u5b58\u6c60"})),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6bd4\u7279\u5e01\u548c\u4ee5\u592a\u574a\u6765\u8bf4\uff0c\u672a\u7ecf\u786e\u8ba4\u7684\u4ea4\u6613\u6570\u91cf\u901a\u5e38\u7ea6\u4e3a 20K-100K\uff0c\u5982\u4e0a\u6240\u793a\u3002\u5185\u5b58\u6c60\u7684\u5927\u5c0f\uff08\u901a\u5e38\u4ee5\u672a\u786e\u8ba4\u4ea4\u6613\u7684\u6570\u91cf\u6765\u8861\u91cf\uff09\u53d6\u51b3\u4e8e\u533a\u5757\u7a7a\u95f4\u7684\u4f9b\u9700\u3002\u5373\u4f7f\u5728\u533a\u5757\u94fe\u65f6\u4ee3\u7684\u65e9\u671f\uff0c\u5f53\u5185\u5b58\u6c60\u4e0a\u5347\u65f6\uff0c\u8fd9\u4e5f\u4f1a\u5bf9\u6574\u4e2a\u7f51\u7edc\u4ea7\u751f\u663e\u7740\u7684\u74f6\u9888\u6548\u5e94\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\uff0cSolana \u5982\u4f55\u505a\u5f97\u66f4\u597d\u5462\uff1f\u5728\u4e0d\u589e\u52a0\u7f51\u7edc\u541e\u5410\u91cf\u7684\u60c5\u51b5\u4e0b\uff0cSolana \u9a8c\u8bc1\u5668\u53ef\u4ee5\u7ba1\u7406 100,000 \u7684\u5185\u5b58\u6c60\u5927\u5c0f\u3002\u8fd9\u610f\u5473\u7740\u5728\u7f51\u7edc\u541e\u5410\u91cf\u4e3a 50,000 TPS \u7684\u60c5\u51b5\u4e0b\uff0c100,000 \u4e2a\u4ea4\u6613\u5185\u5b58\u6c60\u53ea\u9700\u51e0\u79d2\u949f\u5373\u53ef\u6267\u884c\u3002\u8fd9\u5c31\u662f Solana \u6210\u4e3a\u4e16\u754c\u4e0a\u6027\u80fd\u6700\u9ad8\u7684\u65e0\u9700\u8bb8\u53ef\u533a\u5757\u94fe\u7684\u539f\u56e0\u3002"),(0,r.kt)("p",null,"\u4ee4\u4eba\u5370\u8c61\u6df1\u523b\uff0c\u5bf9\u5427\uff1f\u4f46\u8fd9\u4e2a\u7b80\u5355\u7684\u5206\u6790\u5ffd\u7565\u4e86\u5f88\u591a\u91cd\u8981\u56e0\u7d20\u2026\u2026"),(0,r.kt)("p",null,"\u4ee5\u592a\u574a\u548c\u6bd4\u7279\u5e01\u4e2d\u7684\u5185\u5b58\u6c60\u4f7f\u7528\u516b\u5366\u534f\u8bae\u4ee5\u70b9\u5bf9\u70b9\u65b9\u5f0f\u5728\u968f\u673a\u8282\u70b9\u4e4b\u95f4\u4f20\u64ad\u3002\u7f51\u7edc\u4e2d\u7684\u8282\u70b9\u5b9a\u671f\u6784\u5efa\u4ee3\u8868\u672c\u5730\u5185\u5b58\u6c60\u7684\u5e03\u9686\u8fc7\u6ee4\u5668\uff0c\u5e76\u5411\u7f51\u7edc\u4e0a\u7684\u5176\u4ed6\u8282\u70b9\u8bf7\u6c42\u4e0e\u8be5\u8fc7\u6ee4\u5668\u4e0d\u5339\u914d\u7684\u4efb\u4f55\u4ea4\u6613\uff08\u4ee5\u53ca\u5176\u4ed6\u4e00\u4e9b\u4ea4\u6613\uff0c\u4f8b\u5982\u6700\u4f4e\u8d39\u7528\uff09\u3002\u5c06\u5355\u4e2a\u4e8b\u52a1\u4f20\u64ad\u5230\u7f51\u7edc\u7684\u5176\u4f59\u90e8\u5206\u5c06\u81f3\u5c11\u9700\u8981 log(N) \u6b65\u9aa4\uff0c\u6d88\u8017\u8fc7\u6ee4\u5b83\u6240\u9700\u7684\u5e26\u5bbd\u3001\u5185\u5b58\u548c\u8ba1\u7b97\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u5f53\u57fa\u51c6\u5ba2\u6237\u7aef\u5f00\u59cb\u6bcf\u79d2\u751f\u6210 100,000 \u4e2a\u4e8b\u52a1\u65f6\uff0c\u516b\u5366\u534f\u8bae\u5c31\u4f1a\u4e0d\u582a\u91cd\u8d1f\u3002\u8ba1\u7b97\u8fc7\u6ee4\u5668\u4ee5\u53ca\u5728\u673a\u5668\u4e4b\u95f4\u5e94\u7528\u8fc7\u6ee4\u5668\u540c\u65f6\u7ef4\u62a4\u5185\u5b58\u4e2d\u7684\u6240\u6709\u4e8b\u52a1\u7684\u6210\u672c\u53d8\u5f97\u975e\u5e38\u9ad8\u3002\u9886\u5bfc\u8005\uff08\u533a\u5757\u751f\u4ea7\u8005\uff09\u8fd8\u5fc5\u987b\u5728\u533a\u5757\u4e2d\u91cd\u65b0\u4f20\u8f93\u76f8\u540c\u7684\u4ea4\u6613\uff0c\u8fd9\u610f\u5473\u7740\u6bcf\u7b14\u4ea4\u6613\u81f3\u5c11\u901a\u8fc7\u7f51\u7edc\u4f20\u64ad\u4e24\u6b21\u3002\u8fd9\u65e2\u4e0d\u9ad8\u6548\u4e5f\u4e0d\u5b9e\u7528\u3002"),(0,r.kt)("h2",{id:"introducing-gulf-stream-\u58a8\u897f\u54e5\u6e7e\u6d41\u7b80\u4ecb"},"Introducing Gulf Stream \u58a8\u897f\u54e5\u6e7e\u6d41\u7b80\u4ecb"),(0,r.kt)("p",null,"\u6211\u4eec\u5728 Solana \u7f51\u7edc\u4e0a\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u662f\u5c06\u4e8b\u52a1\u7f13\u5b58\u548c\u8f6c\u53d1\u63a8\u5230\u7f51\u7edc\u8fb9\u7f18\u3002\u6211\u4eec\u79f0\u4e4b\u4e3a\u6e7e\u6d41\u3002\u7531\u4e8e\u6bcf\u4e2a\u9a8c\u8bc1\u8005\u90fd\u77e5\u9053\u5373\u5c06\u5230\u6765\u7684\u9886\u5bfc\u8005\u7684\u987a\u5e8f\uff0c\u56e0\u6b64\u5ba2\u6237\u7aef\u548c\u9a8c\u8bc1\u8005\u4f1a\u63d0\u524d\u5c06\u4ea4\u6613\u8f6c\u53d1\u7ed9\u9884\u671f\u7684\u9886\u5bfc\u8005\u3002\u8fd9\u4f7f\u5f97\u9a8c\u8bc1\u8005\u53ef\u4ee5\u63d0\u524d\u6267\u884c\u4ea4\u6613\uff0c\u51cf\u5c11\u786e\u8ba4\u65f6\u95f4\uff0c\u66f4\u5feb\u5730\u5207\u6362\u9886\u5bfc\u8005\uff0c\u5e76\u51cf\u5c11\u672a\u786e\u8ba4\u4ea4\u6613\u6c60\u5bf9\u9a8c\u8bc1\u8005\u7684\u5185\u5b58\u538b\u529b\u3002\u8be5\u89e3\u51b3\u65b9\u6848\u5728\u5177\u6709\u975e\u786e\u5b9a\u6027\u9886\u5bfc\u8005\u7684\u7f51\u7edc\u4e2d\u662f\u4e0d\u53ef\u80fd\u7684"),(0,r.kt)("p",null,"\u90a3\u4e48\u5b83\u662f\u600e\u6837\u5de5\u4f5c\u7684\uff1f\u5ba2\u6237\u7aef\uff08\u4f8b\u5982\u94b1\u5305\uff09\u7b7e\u7f72\u5f15\u7528\u7279\u5b9a\u533a\u5757\u54c8\u5e0c\u7684\u4ea4\u6613\u3002\u5ba2\u6237\u7aef\u9009\u62e9\u4e00\u4e2a\u6700\u8fd1\u7684\u3001\u5df2\u88ab\u7f51\u7edc\u5b8c\u5168\u786e\u8ba4\u7684\u533a\u5757\u54c8\u5e0c\u503c\u3002\u533a\u5757\u5927\u7ea6\u6bcf 800 \u6beb\u79d2\u63d0\u8bae\u4e00\u6b21\uff0c\u5e76\u4e14\u6bcf\u589e\u52a0\u4e00\u4e2a\u533a\u5757\u5c31\u9700\u8981\u6307\u6570\u7ea7\u589e\u52a0\u7684\u8d85\u65f6\u65f6\u95f4\u6765\u5c55\u5f00\u3002\u4f7f\u7528\u6211\u4eec\u7684\u9ed8\u8ba4\u8d85\u65f6\u66f2\u7ebf\uff0c\u5728\u6700\u574f\u7684\u60c5\u51b5\u4e0b\uff0c\u5b8c\u5168\u786e\u8ba4\u7684\u5757\u54c8\u5e0c\u503c\u662f 32 \u4e2a\u5757\u65e7\u7684\u3002\u8be5\u4ea4\u6613\u4ec5\u5728\u5f15\u7528\u5757\u7684\u5b50\u5757\u4e2d\u6709\u6548\uff0c\u5e76\u4e14\u4ec5\u5bf9 X \u4e2a\u5757\u6709\u6548\u3002\u867d\u7136 X \u5c1a\u672a\u6700\u7ec8\u786e\u5b9a\uff0c\u4f46\u6211\u4eec\u9884\u8ba1\u533a\u5757\u54c8\u5e0c\u7684 TTL\uff08\u751f\u5b58\u65f6\u95f4\uff09\u7ea6\u4e3a 32 \u4e2a\u533a\u5757\u3002\u5047\u8bbe\u533a\u5757\u65f6\u95f4\u4e3a 800 \u6beb\u79d2\uff0c\u76f8\u5f53\u4e8e 24 \u79d2\u3002"),(0,r.kt)("p",null,"\u4e00\u65e6\u4ea4\u6613\u88ab\u8f6c\u53d1\u7ed9\u4efb\u4f55\u9a8c\u8bc1\u8005\uff0c\u9a8c\u8bc1\u8005\u5c31\u4f1a\u5c06\u5176\u8f6c\u53d1\u7ed9\u5373\u5c06\u5230\u6765\u7684\u9886\u5bfc\u8005\u4e4b\u4e00\u3002\u5ba2\u6237\u53ef\u4ee5\u8ba2\u9605\u6765\u81ea\u9a8c\u8bc1\u5668\u7684\u4ea4\u6613\u786e\u8ba4\u3002\u5ba2\u6237\u77e5\u9053\u533a\u5757\u54c8\u5e0c\u4f1a\u5728\u6709\u9650\u7684\u65f6\u95f4\u5185\u8fc7\u671f\uff0c\u6216\u8005\u4ea4\u6613\u5df2\u88ab\u7f51\u7edc\u786e\u8ba4\u3002\u8fd9\u5141\u8bb8\u5ba2\u6237\u7b7e\u7f72\u4fdd\u8bc1\u6267\u884c\u6216\u5931\u8d25\u7684\u4ea4\u6613\u3002\u4e00\u65e6\u7f51\u7edc\u8d8a\u8fc7\u56de\u6eda\u70b9\uff0c\u4f7f\u5f97\u4ea4\u6613\u5f15\u7528\u7684\u533a\u5757\u54c8\u5e0c\u8fc7\u671f\uff0c\u5ba2\u6237\u7aef\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u4ea4\u6613\u73b0\u5728\u65e0\u6548\u5e76\u4e14\u6c38\u8fdc\u4e0d\u4f1a\u5728\u94fe\u4e0a\u6267\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://podcasts.apple.com/us/podcast/anatoly-yakovenko-ceo-co-founder-solana-what-sharding/id1434060078?i=1000439218245&source=post_page-----d342e72186ad--------------------------------"},"https://podcasts.apple.com/us/podcast/anatoly-yakovenko-ceo-co-founder-solana-what-sharding/id1434060078?i=1000439218245&source=post_page-----d342e72186ad--------------------------------")),(0,r.kt)("p",null,"\u8fd9\u79cd\u67b6\u6784\u56fa\u6709\u7684\u8bb8\u591a\u79ef\u6781\u7684\u526f\u4f5c\u7528\u3002\u9996\u5148\uff0c\u8d1f\u8f7d\u4e0b\u7684\u9a8c\u8bc1\u5668\u53ef\u4ee5\u63d0\u524d\u6267\u884c\u4ea4\u6613\u5e76\u4e22\u5f03\u4efb\u4f55\u5931\u8d25\u7684\u4ea4\u6613\u3002\u5176\u6b21\uff0c\u9886\u5bfc\u8005\u53ef\u4ee5\u6839\u636e\u8f6c\u53d1\u4ea4\u6613\u7684\u9a8c\u8bc1\u5668\u7684\u6743\u76ca\u6743\u91cd\u6765\u4f18\u5148\u5904\u7406\u4ea4\u6613\u3002\u8fd9\u5141\u8bb8\u7f51\u7edc\u5728\u5927\u89c4\u6a21\u62d2\u7edd\u670d\u52a1\u671f\u95f4\u6b63\u5e38\u964d\u7ea7\u3002"),(0,r.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u5f88\u660e\u663e\uff0c\u533a\u5757\u94fe\u7f51\u7edc\u7684\u529f\u80fd\u53ea\u6709\u5728\u5176\u5185\u5b58\u6c60\u6700\u5c0f\u7684\u60c5\u51b5\u4e0b\u624d\u80fd\u53d1\u6325\u4f5c\u7528\u3002\u867d\u7136\u4ea4\u6613\u541e\u5410\u91cf\u6709\u9650\u7684\u7f51\u7edc\u627f\u62c5\u7740\u5c1d\u8bd5\u6539\u9020\u5168\u65b0\u6269\u5c55\u6280\u672f\u4ee5\u89e3\u51b3\u4e0d\u65ad\u589e\u957f\u7684\u5185\u5b58\u6c60\u7684\u5d07\u9ad8\u52aa\u529b\uff0c\u4f46 Solana \u81ea\u6784\u601d\u4ee5\u6765\u4e00\u76f4\u901a\u8fc7\u5386\u53f2\u8bc1\u660e\u3001\u6e7e\u6d41\u548c\u6d77\u5e73\u9762\u7b49\u4f18\u5316\u6765\u89e3\u51b3\u7b2c\u4e00\u4ee3\u7684\u95ee\u9898\u533a\u5757\u94fe\u7f51\u7edc\u5e76\u5b9e\u73b0\u5de8\u5927\u7684\u4ea4\u6613\u541e\u5410\u91cf\u3002\u4ece\u4e00\u5f00\u59cb\uff0c\u8fd9\u5c31\u662f\u5168\u7403\u8303\u56f4\u5185\u7684\u60ca\u4eba\u901f\u5ea6\uff0c\u4e5f\u662f\u4e3a\u4e16\u754c\u5404\u5730\u7684\u4f01\u4e1a\u3001\u7ecf\u6d4e\u548c\u4eba\u6c11\u521b\u5efa\u529f\u80fd\u5f3a\u5927\u7684\u53bb\u4e2d\u5fc3\u5316\u57fa\u7840\u8bbe\u65bd\u7684\u6839\u672c\u6027\u53d1\u5c55\u3002"))}m.isMDXComponent=!0}}]);