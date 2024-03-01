"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Solana Gaming SDKs",sidebar_position:26,tags:["solana-cook-book","game","sdk"]},l="Solana Gaming SDKs",s={unversionedId:"references/gaming/game-sdks",id:"references/gaming/game-sdks",title:"Solana Gaming SDKs",description:"Unity SDK",source:"@site/docs/cookbook-zh/references/gaming/game-sdks.md",sourceDirName:"references/gaming",slug:"/references/gaming/game-sdks",permalink:"/solana-co-learn/cookbook-zh/references/gaming/game-sdks",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/references/gaming/game-sdks.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"game",permalink:"/solana-co-learn/cookbook-zh/tags/game"},{label:"sdk",permalink:"/solana-co-learn/cookbook-zh/tags/sdk"}],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1709255541,formattedLastUpdatedAt:"Mar 1, 2024",sidebarPosition:26,frontMatter:{title:"Solana Gaming SDKs",sidebar_position:26,tags:["solana-cook-book","game","sdk"]},sidebar:"tutorialSidebar",previous:{title:"Intro into gaming on Solana",permalink:"/solana-co-learn/cookbook-zh/references/gaming/intro"},next:{title:"NFTs In Games",permalink:"/solana-co-learn/cookbook-zh/references/gaming/nfts-in-games"}},i={},c=[{value:"Unity SDK",id:"unity-sdk",level:2},{value:"Unreal SDK",id:"unreal-sdk",level:2},{value:"Flutter",id:"flutter",level:2},{value:"Next.js/React + Anchor",id:"nextjsreact--anchor",level:2},{value:"Python",id:"python",level:2},{value:"Native C#",id:"native-c",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solana-gaming-sdks"},"Solana Gaming SDKs"),(0,o.kt)("h2",{id:"unity-sdk"},"Unity SDK"),(0,o.kt)("p",null,"The unity game engine is known for its beginner friendly approach and cross platform support including WebGL, ios and android. Build once export everywhere.\nThe Solana Unity SDK comes with NFT support, transactions, RPC functions, Phantom Deep lLinks, WebGL connector, WebSocket connection support, mobile wallet-adapter and anchor client code generation."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://solana.unity-sdk.gg/"},"Docs"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/decentralization/infrastructure/solana-sdk-for-unity-246931"},"Verified Unity Asset Store Listing"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Woody4618/SolPlay_Unity_SDK/tree/main/Assets/SolPlay/Examples"},"Example Games"),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"unreal-sdk"},"Unreal SDK"),(0,o.kt)("p",null,"Unreal engine is known for its great visuals and node based scripting framework.\nThe Solana sdk was originally build by the team of Star Atlas."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/staratlasmeta/FoundationKit"},"Star Atlas Unreal SDK"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=S8fm8mFeUkk"},"Tutorial"),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"flutter"},"Flutter"),(0,o.kt)("p",null,"Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/espresso-cash/espresso-cash-public"},"Source Code"),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"nextjsreact--anchor"},"Next.js/React + Anchor"),(0,o.kt)("p",null,"One of the easiest way to build on Solana is using the Web3js Javascript framework in combination with the Solana Anchor frameworks. For more complex games I would recommend using a GameEngine like Unity or Unreal though.\nThe fastest way to set it up is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npx create-solana-dapp your-app\n")),(0,o.kt)("p",null,"This will generate a great starting application with wallet-adapter support.\nA benefit of using Next.js is that you can use the same code in the backend and in the frontend, speeding up development."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/espresso-cash/espresso-cash-public"},"Web3Js"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://solanacookbook.com/references/basic-transactions.html#how-to-send-sol"},"Solana Cookbook"),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Python is an easy to learn programming language which is often used in AI programming. There is a framework called Seahorse which lets you build smart contracts in Python."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://beta.solpg.io/tutorials/hello-seahorse"},"Anchor Playground Example"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ameliatastic/seahorse-lang"},"Source and Docs"),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"native-c"},"Native C#"),(0,o.kt)("p",null,"The original port of Web3js to C#. It comes with a bunch of functionality like transactions, RPC functions and anchor client code generation."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bmresearch/Solnet/blob/master/docs/articles/getting_started.md"},"Source and Docs"),(0,o.kt)("br",null)))}m.isMDXComponent=!0}}]);