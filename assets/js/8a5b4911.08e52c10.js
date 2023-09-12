"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[9365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Hello world example",sidebar_position:28,tags:["solana-cook-book","game","example","hello-world"]},r="Building an on-chain game on Solana",l={unversionedId:"references/gaming/hello-world",id:"references/gaming/hello-world",title:"Hello world example",description:"Getting started with your first Solana game",source:"@site/docs/cookbook-zh/references/gaming/hello-world.md",sourceDirName:"references/gaming",slug:"/references/gaming/hello-world",permalink:"/cookbook-zh/references/gaming/hello-world",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/references/gaming/hello-world.md",tags:[{label:"solana-cook-book",permalink:"/cookbook-zh/tags/solana-cook-book"},{label:"game",permalink:"/cookbook-zh/tags/game"},{label:"example",permalink:"/cookbook-zh/tags/example"},{label:"hello-world",permalink:"/cookbook-zh/tags/hello-world"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1694519070,formattedLastUpdatedAt:"Sep 12, 2023",sidebarPosition:28,frontMatter:{title:"Hello world example",sidebar_position:28,tags:["solana-cook-book","game","example","hello-world"]},sidebar:"tutorialSidebar",previous:{title:"NFTs In Games",permalink:"/cookbook-zh/references/gaming/nfts-in-games"},next:{title:"Storing SOL in PDA",permalink:"/cookbook-zh/references/gaming/store-sol-in-pda"}},s={},c=[{value:"Getting started with your first Solana game",id:"getting-started-with-your-first-solana-game",level:2},{value:"Tiny Adventure",id:"tiny-adventure",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Defining the Game Data Account",id:"defining-the-game-data-account",level:3},{value:"Initialize Instruction",id:"initialize-instruction",level:3},{value:"Move Left Instruction",id:"move-left-instruction",level:3},{value:"Move Right Instruction",id:"move-right-instruction",level:3},{value:"Build and Deploy",id:"build-and-deploy",level:3},{value:"Get Started with the Client",id:"get-started-with-the-client",level:3},{value:"Where to Go from Here",id:"where-to-go-from-here",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-an-on-chain-game-on-solana"},"Building an on-chain game on Solana"),(0,o.kt)("h2",{id:"getting-started-with-your-first-solana-game"},"Getting started with your first Solana game"),(0,o.kt)("p",null,"Video Walkthrough:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.youtube.com/embed/_vQ3bSs3svs",alt:"YouTube video player"})),(0,o.kt)("p",null,"Live Version. (use devnet in the embedded version)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://solplay.de/TinyAdventure/index.html",alt:null})),(0,o.kt)("h2",{id:"tiny-adventure"},"Tiny Adventure"),(0,o.kt)("p",null,"Tiny Adventure is a beginner-friendly Solana program created using the Anchor framework. The goal of this program is to show you how to create a simple game that allows players to track their position and move left or right."),(0,o.kt)("p",null,"The Tiny Adventure Program consists of only 3 instructions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initialize")," - This instruction sets up an on-chain account to store the player's position"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"move_left")," - This instruction lets the player move their position to the left"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"move_right")," - This instruction lets the player move their position to the right")),(0,o.kt)("p",null,"In the upcoming sections, we'll walk through the process of building this game step by step.\nYou can find the complete source code, available to deploy from your browser, in this ",(0,o.kt)("a",{parentName:"p",href:"https://beta.solpg.io/tutorials/tiny-adventure"},"Solana Playground example"),"."),(0,o.kt)("p",null,"If need to familiarize yourself with the Anchor framework, feel free to check out the Anchor module of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.soldev.app/course"},"Solana Course")," to get started."),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To start building the Tiny Adventure game, follow these steps:"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://beta.solpg.io/"},"Solana Playground")," and create a new Anchor project. If you're new to Solana Playground, you'll also need to create a Playground Wallet. Here is an example of how to use Solana Playground:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"solpg.gif",src:n(996).Z,width:"1386",height:"872"})),(0,o.kt)("p",null,"After creating a new project, replace the default starter code with the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\n\ndeclare_id!("11111111111111111111111111111111");\n\n#[program]\nmod tiny_adventure {\n    use super::*;\n}\n\nfn print_player(player_position: u8) {\n    if player_position == 0 {\n        msg!("A Journey Begins!");\n        msg!("o.......");\n    } else if player_position == 1 {\n        msg!("..o.....");\n    } else if player_position == 2 {\n        msg!("....o...");\n    } else if player_position == 3 {\n        msg!("........\\\\o/");\n        msg!("You have reached the end! Super!");\n    }\n}\n')),(0,o.kt)("p",null,"In this game, the player starts at position 0 and can move left or right. To show the player's progress throughout the game, we'll use message logs to display their journey."),(0,o.kt)("h3",{id:"defining-the-game-data-account"},"Defining the Game Data Account"),(0,o.kt)("p",null,"The first step in building the game is to define a structure for the on-chain account that will store the player's position."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," struct contains a single field, ",(0,o.kt)("inlineCode",{parentName:"p"},"player_position"),", which stores the player's current position as an unsigned 8-bit integer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\n\ndeclare_id!("11111111111111111111111111111111");\n\n#[program]\nmod tiny_adventure {\n    use super::*;\n\n}\n\n...\n\n// Define the Game Data Account structure\n#[account]\npub struct GameDataAccount {\n    player_position: u8,\n}\n')),(0,o.kt)("h3",{id:"initialize-instruction"},"Initialize Instruction"),(0,o.kt)("p",null,"After defining the program account, let\u2019s implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," instruction. This instruction initializes the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," if it doesn't already exist, sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"player_position")," to 0, and print some message logs."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," instruction requires 3 accounts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new_game_data_account")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"GameDataAccount")," we are initializing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"signer")," - the player paying for the initialization of the ",(0,o.kt)("inlineCode",{parentName:"li"},"GameDataAccount")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_program")," - a required account when creating a new account")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\npub mod tiny_adventure {\n    use super::*;\n\n    // Instruction to initialize GameDataAccount and set position to 0\n    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {\n        ctx.accounts.new_game_data_account.player_position = 0;\n        msg!("A Journey Begins!");\n        msg!("o.......");\n        Ok(())\n    }\n}\n\n// Specify the accounts required by the initialize instruction\n#[derive(Accounts)]\npub struct Initialize<\'info> {\n    #[account(\n        init_if_needed,\n        seeds = [b"level1"],\n        bump,\n        payer = signer,\n        space = 8 + 1\n    )]\n    pub new_game_data_account: Account<\'info, GameDataAccount>,\n    #[account(mut)]\n    pub signer: Signer<\'info>,\n    pub system_program: Program<\'info, System>,\n}\n\n...\n')),(0,o.kt)("p",null,"In this example, a Program Derived Address (PDA) is used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," address. This enables us to deterministically locate the address later on. It is important to note that the PDA in this example is generated with a single fixed value as the seed (",(0,o.kt)("inlineCode",{parentName:"p"},"level1"),"), limiting our program to creating only one ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"init_if_needed")," constraint then ensures that the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," is initialized only if it doesn't already exist."),(0,o.kt)("p",null,"It is worth noting that the current implementation does not have any restrictions on who can modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),". This effectively transforms the game into a multiplayer experience where everyone can control the player's movement."),(0,o.kt)("p",null,"Alternatively, you can use the signer's address as an extra seed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," instruction, which would enable each player to create their own ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),"."),(0,o.kt)("h3",{id:"move-left-instruction"},"Move Left Instruction"),(0,o.kt)("p",null,"Now that we can initialize a ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," account, let\u2019s implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"move_left")," instruction. This lets a player update their ",(0,o.kt)("inlineCode",{parentName:"p"},"player_position"),". In this example, moving left simply means decrementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"player_position")," by 1. We'll also set the minimum position to 0."),(0,o.kt)("p",null,"The only account needed for this instruction is the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\npub mod tiny_adventure {\n    use super::*;\n    ...\n\n    // Instruction to move left\n    pub fn move_left(ctx: Context<MoveLeft>) -> Result<()> {\n        let game_data_account = &mut ctx.accounts.game_data_account;\n        if game_data_account.player_position == 0 {\n            msg!(\"You are back at the start.\");\n        } else {\n            game_data_account.player_position -= 1;\n            print_player(game_data_account.player_position);\n        }\n        Ok(())\n    }\n}\n\n// Specify the account required by the move_left instruction\n#[derive(Accounts)]\npub struct MoveLeft<'info> {\n    #[account(mut)]\n    pub game_data_account: Account<'info, GameDataAccount>,\n}\n\n...\n")),(0,o.kt)("h3",{id:"move-right-instruction"},"Move Right Instruction"),(0,o.kt)("p",null,"Lastly, let\u2019s implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"move_right")," instruction. Similarly, moving right will simply mean incrementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"player_position")," by 1. We\u2019ll also limit the maximum position to 3."),(0,o.kt)("p",null,"Just like before, the only account needed for this instruction is the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\npub mod tiny_adventure {\n    use super::*;\n        ...\n\n        // Instruction to move right\n        pub fn move_right(ctx: Context<MoveRight>) -> Result<()> {\n            let game_data_account = &mut ctx.accounts.game_data_account;\n            if game_data_account.player_position == 3 {\n                msg!(\"You have reached the end! Super!\");\n            } else {\n                game_data_account.player_position = game_data_account.player_position + 1;\n                print_player(game_data_account.player_position);\n            }\n            Ok(())\n        }\n}\n\n// Specify the account required by the move_right instruction\n#[derive(Accounts)]\npub struct MoveRight<'info> {\n    #[account(mut)]\n    pub game_data_account: Account<'info, GameDataAccount>,\n}\n\n...\n")),(0,o.kt)("h3",{id:"build-and-deploy"},"Build and Deploy"),(0,o.kt)("p",null,"We've now completed the Tiny Adventure program! Your final program should resemble the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\n\n// This is your program\'s public key and it will update\n// automatically when you build the project.\ndeclare_id!("BouPBVWkdVHbxsdzqeMwkjqd5X67RX5nwMEwxn8MDpor");\n\n#[program]\nmod tiny_adventure {\n    use super::*;\n\n    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {\n        ctx.accounts.new_game_data_account.player_position = 0;\n        msg!("A Journey Begins!");\n        msg!("o.......");\n        Ok(())\n    }\n\n    pub fn move_left(ctx: Context<MoveLeft>) -> Result<()> {\n        let game_data_account = &mut ctx.accounts.game_data_account;\n        if game_data_account.player_position == 0 {\n            msg!("You are back at the start.");\n        } else {\n            game_data_account.player_position -= 1;\n            print_player(game_data_account.player_position);\n        }\n        Ok(())\n    }\n\n    pub fn move_right(ctx: Context<MoveRight>) -> Result<()> {\n        let game_data_account = &mut ctx.accounts.game_data_account;\n        if game_data_account.player_position == 3 {\n            msg!("You have reached the end! Super!");\n        } else {\n            game_data_account.player_position = game_data_account.player_position + 1;\n            print_player(game_data_account.player_position);\n        }\n        Ok(())\n    }\n}\n\nfn print_player(player_position: u8) {\n    if player_position == 0 {\n        msg!("A Journey Begins!");\n        msg!("o.......");\n    } else if player_position == 1 {\n        msg!("..o.....");\n    } else if player_position == 2 {\n        msg!("....o...");\n    } else if player_position == 3 {\n        msg!("........\\\\o/");\n        msg!("You have reached the end! Super!");\n    }\n}\n\n#[derive(Accounts)]\npub struct Initialize<\'info> {\n    #[account(\n        init_if_needed,\n        seeds = [b"level1"],\n        bump,\n        payer = signer,\n        space = 8 + 1\n    )]\n    pub new_game_data_account: Account<\'info, GameDataAccount>,\n    #[account(mut)]\n    pub signer: Signer<\'info>,\n    pub system_program: Program<\'info, System>,\n}\n\n#[derive(Accounts)]\npub struct MoveLeft<\'info> {\n    #[account(mut)]\n    pub game_data_account: Account<\'info, GameDataAccount>,\n}\n\n#[derive(Accounts)]\npub struct MoveRight<\'info> {\n    #[account(mut)]\n    pub game_data_account: Account<\'info, GameDataAccount>,\n}\n\n#[account]\npub struct GameDataAccount {\n    player_position: u8,\n}\n')),(0,o.kt)("p",null,"With the program completed, it's time to build and deploy it on Solana Playground!"),(0,o.kt)("p",null,"If this is your first time using Solana Playground, create a Playground Wallet first and ensure that you're connected to a Devnet endpoint. Then, run ",(0,o.kt)("inlineCode",{parentName:"p"},"solana airdrop 2")," until you have 6 SOL. Once you have enough SOL, build and deploy the program."),(0,o.kt)("h3",{id:"get-started-with-the-client"},"Get Started with the Client"),(0,o.kt)("p",null,"This next section will guide you through a simple client-side implementation for interacting with the game. We'll break down the code and provide detailed explanations for each step. In Solana Playground, navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"client.ts")," file and add the code snippets from the following sections."),(0,o.kt)("p",null,"First, let\u2019s derive the PDA for the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),". A PDA is a unique address in the format of a public key, derived using the program's ID and additional seeds. Feel free to check out the PDA lessons of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.soldev.app/course"},"Solana Course")," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// The PDA adress everyone will be able to control the character if the interact with your program\nconst [globalLevel1GameDataAccount, bump] =\n  await anchor.web3.PublicKey.findProgramAddress(\n    [Buffer.from("level1", "utf8")],\n    pg.program.programId\n  );\n')),(0,o.kt)("p",null,"Next, let\u2019s try to fetch the game data account using the PDA from the previous step. If the account doesn't exist, we'll create it by invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," instruction from our program."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let txHash;\nlet gameDateAccount;\ntry {\n  gameDateAccount = await pg.program.account.gameDataAccount.fetch(\n    globalLevel1GameDataAccount\n  );\n} catch {\n  // Check if the account is already initialized, other wise initialize it\n  txHash = await pg.program.methods\n    .initialize()\n    .accounts({\n      newGameDataAccount: globalLevel1GameDataAccount,\n      signer: pg.wallet.publicKey,\n      systemProgram: web3.SystemProgram.programId,\n    })\n    .signers([pg.wallet.keypair])\n    .rpc();\n\n  console.log(`Use \'solana confirm -v ${txHash}\' to see the logs`);\n  await pg.connection.confirmTransaction(txHash);\n  console.log("A journey begins...");\n  console.log("o........");\n}\n')),(0,o.kt)("p",null,"Now we are ready to interact with the game by moving left or right. This is done by invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"moveLeft")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"moveRight")," instructions from the program and submitting a transaction to the Solana network. You can repeat this step as many times as you'd like."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Here you can play around now, move left and right\ntxHash = await pg.program.methods\n  //.moveLeft()\n  .moveRight()\n  .accounts({\n    gameDataAccount: globalLevel1GameDataAccount,\n  })\n  .signers([pg.wallet.keypair])\n  .rpc();\nconsole.log(`Use 'solana confirm -v ${txHash}' to see the logs`);\nawait pg.connection.confirmTransaction(txHash);\n\ngameDateAccount = await pg.program.account.gameDataAccount.fetch(\n  globalLevel1GameDataAccount\n);\n\nconsole.log(\"Player position is:\", gameDateAccount.playerPosition.toString());\n")),(0,o.kt)("p",null,"Lastly, let\u2019s use a ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," statement to log the character's position based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"playerPosition")," value stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"gameDateAccount"),". We\u2019ll use this as a visual representation of the character's movement in the game."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'switch (gameDateAccount.playerPosition) {\n  case 0:\n    console.log("A journey begins...");\n    console.log("o........");\n    break;\n  case 1:\n    console.log("....o....");\n    break;\n  case 2:\n    console.log("......o..");\n    break;\n  case 3:\n    console.log(".........\\\\o/");\n    break;\n}\n')),(0,o.kt)("p",null,"Finally, run the client by clicking the \u201cRun\u201d button in Solana Playground. The output should be similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Running client...\n  client.ts:\n    My address: 8ujtDmwpkQ4Bp4GU4zUWmzf65sc21utdcxFAELESca22\n    My balance: 4.649749614 SOL\n    Use 'solana confirm -v 4MRXEWfGqvmro1KsKb94Zz8qTZsPa9x99oMFbLBz2WicLnr8vdYYsQwT5u3pK5Vt1i9BDrVH5qqTXwtif6sCRJCy' to see the logs\n    Player position is: 1\n    ....o....\n")),(0,o.kt)("p",null,"Congratulations! You have successfully built, deployed, and invoked the Tiny Adventure game from the client. To further illustrate the possibilities, check out this ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs-tiny-adventure.vercel.app/"},"demo")," that demonstrates how to interact with the Tiny Adventure program through a Next.js frontend."),(0,o.kt)("h3",{id:"where-to-go-from-here"},"Where to Go from Here"),(0,o.kt)("p",null,"With the basic game complete, unleash your creativity and practice building independently by implementing your own ideas to enrich the game experience. Here are a few suggestions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify the in-game texts to create an intriguing story. Invite a friend to play through your custom narrative and observe the on-chain transactions as they unfold!"),(0,o.kt)("li",{parentName:"ol"},"Add a chest that rewards players with ",(0,o.kt)("a",{parentName:"li",href:"./store-sol-in-pda"},"Sol Rewards")," or let the player collect coins ",(0,o.kt)("a",{parentName:"li",href:"./interact-with-tokens"},"Interact with tokens")," as they progress through the game."),(0,o.kt)("li",{parentName:"ol"},"Create a grid that allows the player to move up, down, left, and right, and introduce multiple players for a more dynamic experience.")),(0,o.kt)("p",null,"In the next installment, ",(0,o.kt)("a",{parentName:"p",href:"./store-sol-in-pda"},"Tiny Adventure Two"),", we'll learn how to store SOL in the program and distribute it to players as rewards."))}m.isMDXComponent=!0},996:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/solpg-dfdfe5b6e11059d1d347f43584a1b0ae.gif"}}]);