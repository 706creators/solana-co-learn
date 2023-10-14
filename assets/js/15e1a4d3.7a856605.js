"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Storing SOL in PDA",sidebar_position:28,tags:["solana-cook-book","game","store-sol","pda"]},i="Storing SOL in PDAs for Game Rewards",s={unversionedId:"references/gaming/store-sol-in-pda",id:"references/gaming/store-sol-in-pda",title:"Storing SOL in PDA",description:"Video Walkthrough:",source:"@site/docs/cookbook-zh/references/gaming/store-sol-in-pda.md",sourceDirName:"references/gaming",slug:"/references/gaming/store-sol-in-pda",permalink:"/solana-co-learn/cookbook-zh/references/gaming/store-sol-in-pda",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/references/gaming/store-sol-in-pda.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"game",permalink:"/solana-co-learn/cookbook-zh/tags/game"},{label:"store-sol",permalink:"/solana-co-learn/cookbook-zh/tags/store-sol"},{label:"pda",permalink:"/solana-co-learn/cookbook-zh/tags/pda"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1697277246,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:28,frontMatter:{title:"Storing SOL in PDA",sidebar_position:28,tags:["solana-cook-book","game","store-sol","pda"]},sidebar:"tutorialSidebar",previous:{title:"Hello world example",permalink:"/solana-co-learn/cookbook-zh/references/gaming/hello-world"},next:{title:"save game state",permalink:"/solana-co-learn/cookbook-zh/references/gaming/saving-game-state"}},l={},c=[{value:"Tiny Adventure Anchor Program - Part Two",id:"tiny-adventure-anchor-program---part-two",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Defining the Chest Vault Account",id:"defining-the-chest-vault-account",level:3},{value:"Defining the Game Data Account",id:"defining-the-game-data-account",level:3},{value:"Initialize Level One Instruction",id:"initialize-level-one-instruction",level:3},{value:"Reset Level and Spawn Chest Instruction",id:"reset-level-and-spawn-chest-instruction",level:3},{value:"Move Right Instruction",id:"move-right-instruction",level:3},{value:"Build and Deploy",id:"build-and-deploy",level:3},{value:"Get Started with the Client",id:"get-started-with-the-client",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storing-sol-in-pdas-for-game-rewards"},"Storing SOL in PDAs for Game Rewards"),(0,o.kt)("p",null,"Video Walkthrough:\n",(0,o.kt)("img",{parentName:"p",src:"https://www.youtube.com/embed/gILXyWvXu7M",alt:null})),(0,o.kt)("p",null,"Live Version. (use devnet)\n",(0,o.kt)("img",{parentName:"p",src:"https://solplay.de/TinyAdventureTwo/index.html",alt:null})),(0,o.kt)("h2",{id:"tiny-adventure-anchor-program---part-two"},"Tiny Adventure Anchor Program - Part Two"),(0,o.kt)("p",null,'In this tutorial, we will rebuild the Tiny Adventure game and introduce a chest with a reward of 0.1 SOL. The chest will "spawn" at a specific position, and when the player reaches that position, they will receive the reward. The goal of this program is to demonstrate how to store SOL within a program account and distribute it to players.'),(0,o.kt)("p",null,"The Tiny Adventure Two Program consists of 3 instructions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initialize_level_one")," - This instruction initializes two on-chain accounts: one for recording the player's position and another for holding the SOL reward that represents the \u201creward chest\u201d."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reset_level_and_spawn_chest"),' - This instruction resets the player\'s position to zero and "respawns" a reward chest by transferring SOL from the user invoking the instruction to the reward chest account.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"move_right")," - This instruction allows the player to move their position to the right and collect the SOL in the reward chest once they reach a specific position.")),(0,o.kt)("p",null,"In the following sections, we will guide you through building the program step by step. You can find the complete source code, which can be deployed directly from your browser using the Solana Playground, at this link:  ",(0,o.kt)("a",{parentName:"p",href:"https://beta.solpg.io/tutorials/tiny-adventure-two"},"Open In Playground"),"."),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To start building the Tiny Adventure game, follow these steps:"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://beta.solpg.io/"},"Solana Playground")," and create a new Anchor project. If you're new to Solana Playground, you'll also need to create a Playground Wallet."),(0,o.kt)("p",null,"After creating a new project, replace the default starter code with the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;\nuse anchor_lang::system_program;\n\ndeclare_id!("11111111111111111111111111111111");\n\n#[program]\nmod tiny_adventure_two {\n    use super::*;\n}\n\nfn print_player(player_position: u8) {\n    if player_position == 0 {\n        msg!("A Journey Begins!");\n        msg!("o.........\ud83d\udc8e");\n    } else if player_position == 1 {\n        msg!("..o.......\ud83d\udc8e");\n    } else if player_position == 2 {\n        msg!("....o.....\ud83d\udc8e");\n    } else if player_position == 3 {\n        msg!("........\\\\o/\ud83d\udc8e");\n        msg!("..........\\\\o/");\n        msg!("You have reached the end! Super!");\n    }\n}\n')),(0,o.kt)("p",null,"In this game, the player starts at position 0 and can only move right. To visualize the player's progress throughout the game, we'll use message logs to represent their journey towards the reward chest!"),(0,o.kt)("h3",{id:"defining-the-chest-vault-account"},"Defining the Chest Vault Account"),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"CHEST_REWARD")," constant at the beginning of the program. The ",(0,o.kt)("inlineCode",{parentName:"p"},"CHEST_REWARD")," represents the amount of lamports that will be put into the chest and given out as rewards. Lamports are the smallest fractions of a SOL, with 1 billion lamports being equal to 1 SOL."),(0,o.kt)("p",null,"To store the SOL reward, we will define a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount")," struct. This is an empty struct because we will be directly updating the lamports in the account. The account will hold the SOL reward and does not need to store any additional data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;\nuse anchor_lang::system_program;\n\ndeclare_id!("11111111111111111111111111111111");\n\n#[program]\nmod tiny_adventure_two {\n    use super::*;\n\n    // The amount of lamports that will be put into chests and given out as rewards.\n    const CHEST_REWARD: u64 = LAMPORTS_PER_SOL / 10; // 0.1 SOL\n}\n\n...\n\n// Define the Chest Vault Account structure\n#[account]\npub struct ChestVaultAccount {}\n')),(0,o.kt)("h3",{id:"defining-the-game-data-account"},"Defining the Game Data Account"),(0,o.kt)("p",null,"To keep track of the player's position within the game, we need to define a structure for the on-chain account that will store the player's position."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," struct contains a single field, ",(0,o.kt)("inlineCode",{parentName:"p"},"player_position"),", which stores the player's current position as an unsigned 8-bit integer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\nuse anchor_lang::prelude::*;\nuse anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;\nuse anchor_lang::system_program;\n\ndeclare_id!("11111111111111111111111111111111");\n\n#[program]\nmod tiny_adventure_two {\n    use super::*;\n    ...\n\n}\n\n...\n\n// Define the Game Data Account structure\n#[account]\npub struct GameDataAccount {\n    player_position: u8,\n}\n')),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," struct defined, you can now use it to store and update the player's position as they interact with the game. As the player moves right and progresses through the game, their position will be updated within the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),", allowing you to track their progress towards the chest containing the SOL reward."),(0,o.kt)("h3",{id:"initialize-level-one-instruction"},"Initialize Level One Instruction"),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount")," defined, let's implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize_level_one")," instruction. This instruction initializes both the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount"),", sets the player's position to 0, and displays the starting message."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize_level_one")," instruction requires 4 accounts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new_game_data_account")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"GameDataAccount")," we are initializing to store the player\u2019s position"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chest_vault")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"ChestVaultAccount")," we are initializing to store the SOL reward"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"signer")," - the player paying for the initialization of the accounts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_program")," - a required account when creating a new account")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\npub mod tiny_adventure_two {\n    use super::*;\n\n    pub fn initialize_level_one(_ctx: Context<InitializeLevelOne>) -> Result<()> {\n        msg!("A Journey Begins!");\n        msg!("o.......\ud83d\udc8e");\n        Ok(())\n    }\n\n    ...\n}\n\n// Specify the accounts required by the initialize_level_one instruction\n#[derive(Accounts)]\npub struct InitializeLevelOne<\'info> {\n    #[account(\n        init_if_needed,\n        seeds = [b"level1"],\n        bump,\n        payer = signer,\n        space = 8 + 1\n    )]\n    pub new_game_data_account: Account<\'info, GameDataAccount>,\n    #[account(\n        init_if_needed,\n        seeds = [b"chestVault"],\n        bump,\n        payer = signer,\n        space = 8\n    )]\n    pub chest_vault: Account<\'info, ChestVaultAccount>,\n    #[account(mut)]\n    pub signer: Signer<\'info>,\n    pub system_program: Program<\'info, System>,\n}\n\n...\n')),(0,o.kt)("p",null,"Both the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount")," are created using a Program Derived Address (PDA) as the address of the account, allowing us to deterministically locate the address later. The ",(0,o.kt)("inlineCode",{parentName:"p"},"init_if_needed")," constraint ensures that the accounts are only initialized if they don't already exist. Since the PDAs for both accounts in this instruction use a single fixed seed, our program can only create one of each type of account. In effect, the instruction would only ever need to be invoked one time."),(0,o.kt)("p",null,"It's worth noting that the current implementation does not have any restrictions on who can modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),", effectively turning the game into a multiplayer experience where everyone can control the player's movement."),(0,o.kt)("p",null,"Alternatively, you can use the signer's address as an extra seed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," instruction, allowing each player to create their own ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount"),"."),(0,o.kt)("h3",{id:"reset-level-and-spawn-chest-instruction"},"Reset Level and Spawn Chest Instruction"),(0,o.kt)("p",null,"Next, let's implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"reset_level_and_spawn_chest")," instruction, which resets the player's position to the start and fills up the chest with a reward of 0.1 SOL."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"reset_level_and_spawn_chest")," instruction requires 4 accounts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new_game_data_account")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"GameDataAccount")," storing the player's position"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chest_vault")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"ChestVaultAccount")," storing the SOL reward"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"signer")," - the player providing the SOL reward for the chest"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_program")," - the program we'll be invoking to transfer SOL using a cross-program invocation (CPI), more on this shortly")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\npub mod tiny_adventure_two {\n    use super::*;\n    ...\n\n    pub fn reset_level_and_spawn_chest(ctx: Context<SpawnChest>) -> Result<()> {\n        ctx.accounts.game_data_account.player_position = 0;\n\n        let cpi_context = CpiContext::new(\n            ctx.accounts.system_program.to_account_info(),\n            system_program::Transfer {\n                from: ctx.accounts.payer.to_account_info().clone(),\n                to: ctx.accounts.chest_vault.to_account_info().clone(),\n            },\n        );\n        system_program::transfer(cpi_context, CHEST_REWARD)?;\n\n        msg!(\"Level Reset and Chest Spawned at position 3\");\n\n        Ok(())\n    }\n\n    ...\n}\n\n// Specify the accounts required by the reset_level_and_spawn_chest instruction\n#[derive(Accounts)]\npub struct SpawnChest<'info> {\n    #[account(mut)]\n    pub payer: Signer<'info>,\n    #[account(mut, seeds = [b\"chestVault\"], bump)]\n    pub chest_vault: Account<'info, ChestVaultAccount>,\n    #[account(mut)]\n    pub game_data_account: Account<'info, GameDataAccount>,\n    pub system_program: Program<'info, System>,\n}\n\n...\n")),(0,o.kt)("p",null,"This instruction includes a cross-program invocation (CPI) to transfer SOL from the payer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount"),". A cross-program invocation is when one program invokes an instruction on another program. In this case, we use a CPI to invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," instruction from the ",(0,o.kt)("inlineCode",{parentName:"p"},"system_program")," to transfer SOL from the payer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount"),"."),(0,o.kt)("p",null,"Cross-program invocations are a key concept in the Solana programming model, enabling programs to directly interact with instructions from other programs. For a deeper dive into of CPIs, feel free to explore the CPI lessons available in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.soldev.app/course"},"Solana Course"),"."),(0,o.kt)("h3",{id:"move-right-instruction"},"Move Right Instruction"),(0,o.kt)("p",null,"Finally, let's implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"move_right")," instruction which includes the logic for collecting the chest reward. When a player reaches position 3 and inputs the correct \u201cpassword\u201d, the reward is transferred from the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ChestVaultAccount"))," to the player's account. If an incorrect password is entered, a custom Anchor Error is returned. If the player is already at position 3, a message will be logged. Otherwise, the position will be incremented by 1 to represent moving to the right."),(0,o.kt)("p",null,'The main purpose of this "password" functionality is to demonstrate how to incorporate parameters into an instruction and the implementation of custom Anchor Errors for improved error handling. In this example, the correct password will be "gib".'),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"move_right")," instruction requires 3 accounts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new_game_data_account")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"GameDataAccount")," storing the player's position"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chest_vault")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"ChestVaultAccount")," storing the SOL reward"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"player_wallet")," - the wallet of the player invoking the instruction and the potential recipient of SOL reward")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\npub mod tiny_adventure_two {\n    use super::*;\n    ...\n\n    // Instruction to move right\n    pub fn move_right(ctx: Context<MoveRight>, password: String) -> Result<()> {\n        let game_data_account = &mut ctx.accounts.game_data_account;\n        if game_data_account.player_position == 3 {\n            msg!("You have reached the end! Super!");\n        } else if game_data_account.player_position == 2 {\n            if password != "gib" {\n                return err!(MyError::WrongPassword);\n            }\n\n            game_data_account.player_position = game_data_account.player_position + 1;\n\n            msg!(\n                "You made it! Here is your reward {0} lamports",\n                CHEST_REWARD\n            );\n\n            **ctx\n                .accounts\n                .chest_vault\n                .to_account_info()\n                .try_borrow_mut_lamports()? -= CHEST_REWARD;\n            **ctx\n                .accounts\n                .player\n                .to_account_info()\n                .try_borrow_mut_lamports()? += CHEST_REWARD;\n        } else {\n            game_data_account.player_position = game_data_account.player_position + 1;\n            print_player(game_data_account.player_position);\n        }\n        Ok(())\n    }\n\n    ...\n}\n\n// Specify the accounts required by the move_right instruction\n#[derive(Accounts)]\npub struct MoveRight<\'info> {\n    #[account(mut, seeds = [b"chestVault"], bump)]\n    pub chest_vault: Account<\'info, ChestVaultAccount>,\n    #[account(mut)]\n    pub game_data_account: Account<\'info, GameDataAccount>,\n    #[account(mut)]\n    pub player: Signer<\'info>,\n}\n\n// Custom Anchor Error\n#[error_code]\npub enum MyError {\n    #[msg("Password was wrong")]\n    WrongPassword,\n}\n\n...\n')),(0,o.kt)("p",null,"To transfer lamports from the reward chest to the player account, we can't use a Cross-Program Invocation (CPI) as we did previously, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount")," isn't owned by the system program. Instead, we directly modify the lamports within the accounts by using ",(0,o.kt)("inlineCode",{parentName:"p"},"try_borrow_mut_lamports"),".  Keep in mind that the account you deduct lamports from must be a signer, and the runtime always makes sure that the total account balances stay equal after a transaction."),(0,o.kt)("p",null,"Note that Program Derived Accounts (PDAs) offer two main features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provide a deterministic way to find an account's address"),(0,o.kt)("li",{parentName:"ol"},'Allow the program from which a PDA is derived to "sign" for them')),(0,o.kt)("p",null,"This is the reason we are able to deduct lamports from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount")," without explicitly requiring an extra signer for the instruction."),(0,o.kt)("h3",{id:"build-and-deploy"},"Build and Deploy"),(0,o.kt)("p",null,"Great job! You've now completed part two of the Tiny Adventure program! Your final program should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\nuse anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;\nuse anchor_lang::system_program;\n\n// This is your program\'s public key and it will update\n// automatically when you build the project.\ndeclare_id!("7gZTdZg86YsYbs92Rhv63kZUAkoww1kLexJg8sNpgVQ3");\n\n#[program]\nmod tiny_adventure_two {\n    use super::*;\n\n    // The amount of lamports that will be put into chests and given out as rewards.\n    const CHEST_REWARD: u64 = LAMPORTS_PER_SOL / 10; // 0.1 SOL\n\n    pub fn initialize_level_one(_ctx: Context<InitializeLevelOne>) -> Result<()> {\n        // Usually in your production code you would not print lots of text because it cost compute units.\n        msg!("A Journey Begins!");\n        msg!("o.......\ud83d\udc8e");\n        Ok(())\n    }\n\n    pub fn reset_level_and_spawn_chest(ctx: Context<SpawnChest>) -> Result<()> {\n        ctx.accounts.game_data_account.player_position = 0;\n\n        let cpi_context = CpiContext::new(\n            ctx.accounts.system_program.to_account_info(),\n            system_program::Transfer {\n                from: ctx.accounts.payer.to_account_info().clone(),\n                to: ctx.accounts.chest_vault.to_account_info().clone(),\n            },\n        );\n        system_program::transfer(cpi_context, CHEST_REWARD)?;\n\n        msg!("Level Reset and Chest Spawned at position 3");\n\n        Ok(())\n    }\n\n    pub fn move_right(ctx: Context<MoveRight>, password: String) -> Result<()> {\n        let game_data_account = &mut ctx.accounts.game_data_account;\n        if game_data_account.player_position == 3 {\n            msg!("You have reached the end! Super!");\n        } else if game_data_account.player_position == 2 {\n            if password != "gib" {\n                return err!(MyError::WrongPassword);\n            }\n\n            game_data_account.player_position = game_data_account.player_position + 1;\n\n            msg!(\n                "You made it! Here is your reward {0} lamports",\n                CHEST_REWARD\n            );\n\n            **ctx\n                .accounts\n                .chest_vault\n                .to_account_info()\n                .try_borrow_mut_lamports()? -= CHEST_REWARD;\n            **ctx\n                .accounts\n                .player\n                .to_account_info()\n                .try_borrow_mut_lamports()? += CHEST_REWARD;\n        } else {\n            game_data_account.player_position = game_data_account.player_position + 1;\n            print_player(game_data_account.player_position);\n        }\n        Ok(())\n    }\n}\n\nfn print_player(player_position: u8) {\n    if player_position == 0 {\n        msg!("A Journey Begins!");\n        msg!("o.........\ud83d\udc8e");\n    } else if player_position == 1 {\n        msg!("..o.......\ud83d\udc8e");\n    } else if player_position == 2 {\n        msg!("....o.....\ud83d\udc8e");\n    } else if player_position == 3 {\n        msg!("........\\\\o/\ud83d\udc8e");\n        msg!("..........\\\\o/");\n        msg!("You have reached the end! Super!");\n    }\n}\n\n#[derive(Accounts)]\npub struct InitializeLevelOne<\'info> {\n    // We must specify the space in order to initialize an account.\n    // First 8 bytes are default account discriminator,\n    // next 1 byte come from NewAccount.data being type u8.\n    // (u8 = 8 bits unsigned integer = 8 bytes)\n    // You can also use the signer as seed [signer.key().as_ref()],\n    #[account(\n        init_if_needed,\n        seeds = [b"level1"],\n        bump,\n        payer = signer,\n        space = 8 + 1\n    )]\n    pub new_game_data_account: Account<\'info, GameDataAccount>,\n    // This is the PDA in which we will deposit the reward SOL and\n    // from where we send it back to the first player reaching the chest.\n    #[account(\n        init_if_needed,\n        seeds = [b"chestVault"],\n        bump,\n        payer = signer,\n        space = 8\n    )]\n    pub chest_vault: Account<\'info, ChestVaultAccount>,\n    #[account(mut)]\n    pub signer: Signer<\'info>,\n    pub system_program: Program<\'info, System>,\n}\n\n#[derive(Accounts)]\npub struct SpawnChest<\'info> {\n    #[account(mut)]\n    pub payer: Signer<\'info>,\n    #[account(mut, seeds = [b"chestVault"], bump)]\n    pub chest_vault: Account<\'info, ChestVaultAccount>,\n    #[account(mut)]\n    pub game_data_account: Account<\'info, GameDataAccount>,\n    pub system_program: Program<\'info, System>,\n}\n\n#[derive(Accounts)]\npub struct MoveRight<\'info> {\n    #[account(mut, seeds = [b"chestVault"], bump)]\n    pub chest_vault: Account<\'info, ChestVaultAccount>,\n    #[account(mut)]\n    pub game_data_account: Account<\'info, GameDataAccount>,\n    #[account(mut)]\n    pub player: Signer<\'info>,\n}\n\n#[account]\npub struct GameDataAccount {\n    player_position: u8,\n}\n\n#[account]\npub struct ChestVaultAccount {}\n\n#[error_code]\npub enum MyError {\n    #[msg("Password was wrong")]\n    WrongPassword,\n}\n')),(0,o.kt)("p",null,"Now that the program is complete, let's build and deploy it using the Solana Playground!"),(0,o.kt)("p",null,"If you're new to the Solana Playground, start by creating a Playground Wallet and make sure you're connected to a Devnet endpoint. Next, run\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"solana airdrop 2")," until you have 6 SOL. Once you have enough SOL,  build and deploy the program."),(0,o.kt)("h3",{id:"get-started-with-the-client"},"Get Started with the Client"),(0,o.kt)("p",null,"In this section, we'll walk through a simple client-side implementation for interacting with the game. We will break down the code and provide detailed explanations for each step. To get started, navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"client.ts")," file in Solana Playground, remove the placeholder code, and add the code snippets from the following sections."),(0,o.kt)("p",null,"First, let's derive the PDAs (Program Derived Addresses) for the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount"),". A PDA is a unique address in the format of a public key, derived using the program's ID and additional seeds."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// The PDA adress everyone will be able to control the character if the interact with your program\nconst [globalLevel1GameDataAccount, bump] =\n  await anchor.web3.PublicKey.findProgramAddress(\n    [Buffer.from("level1", "utf8")],\n    //[pg.wallet.publicKey.toBuffer()], <- You could also add the player wallet as a seed, then you would have one instance per player. Need to also change the seed in the rust part\n    pg.program.programId\n  );\n\n// This is where the program will save the sol reward for the chests and from which the reward will be payed out again\nconst [chestVaultAccount, chestBump] =\n  await anchor.web3.PublicKey.findProgramAddress(\n    [Buffer.from("chestVault", "utf8")],\n    pg.program.programId\n  );\n')),(0,o.kt)("p",null,"Next, we'll call the ",(0,o.kt)("inlineCode",{parentName:"p"},"initializeLevelOne")," instruction to set up the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataAccount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Initialize level\nlet txHash = await pg.program.methods\n  .initializeLevelOne()\n  .accounts({\n    chestVault: chestVaultAccount,\n    newGameDataAccount: globalLevel1GameDataAccount,\n    signer: pg.wallet.publicKey,\n    systemProgram: web3.SystemProgram.programId,\n  })\n  .signers([pg.wallet.keypair])\n  .rpc();\n\nconsole.log(`Use 'solana confirm -v ${txHash}' to see the logs`);\nawait pg.connection.confirmTransaction(txHash);\n\nlet balance = await pg.connection.getBalance(pg.wallet.publicKey);\nconsole.log(\n  `My balance before spawning a chest: ${balance / web3.LAMPORTS_PER_SOL} SOL`\n);\n")),(0,o.kt)("p",null,"After that, we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resetLevelAndSpawnChest")," instruction to set the player's position to 0 and fill the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount")," with 0.1 SOL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Set the player position back to 0 and pay to fill up the chest with sol\ntxHash = await pg.program.methods\n  .resetLevelAndSpawnChest()\n  .accounts({\n    chestVault: chestVaultAccount,\n    gameDataAccount: globalLevel1GameDataAccount,\n    payer: pg.wallet.publicKey,\n    systemProgram: web3.SystemProgram.programId,\n  })\n  .signers([pg.wallet.keypair])\n  .rpc();\n\nconsole.log(`Use \'solana confirm -v ${txHash}\' to see the logs`);\nawait pg.connection.confirmTransaction(txHash);\n\nconsole.log("Level reset and chest spawned \ud83d\udc8e");\nconsole.log("o........\ud83d\udc8e");\n')),(0,o.kt)("p",null,"Now we can interact with the game by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"moveRight")," instruction. In this example, we'll loop through this instruction until the player reaches the position to collect the reward from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChestVaultAccount"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\n// Here we move to the right three times and collect the chest at the end of the level\nfor (let i = 0; i < 3; i++) {\n  txHash = await pg.program.methods\n    .moveRight("gib")\n    .accounts({\n      chestVault: chestVaultAccount,\n      gameDataAccount: globalLevel1GameDataAccount,\n      player: pg.wallet.publicKey,\n    })\n    .signers([pg.wallet.keypair])\n    .rpc();\n\n  console.log(`Use \'solana confirm -v ${txHash}\' to see the logs`);\n  await pg.connection.confirmTransaction(txHash);\n  let balance = await pg.connection.getBalance(pg.wallet.publicKey);\n  console.log(`My balance: ${balance / web3.LAMPORTS_PER_SOL} SOL`);\n\n  let gameDateAccount = await pg.program.account.gameDataAccount.fetch(\n    globalLevel1GameDataAccount\n  );\n\n  console.log("Player position is:", gameDateAccount.playerPosition.toString());\n\n  switch (gameDateAccount.playerPosition) {\n    case 0:\n      console.log("A journey begins...");\n      console.log("o........\ud83d\udc8e");\n      break;\n    case 1:\n      console.log("....o....\ud83d\udc8e");\n      break;\n    case 2:\n      console.log("......o..\ud83d\udc8e");\n      break;\n    case 3:\n      console.log(".........\\\\o/\ud83d\udc8e");\n      console.log("...........\\\\o/");\n      break;\n  }\n}\n')),(0,o.kt)("p",null,'Finally, press the "Run" button in the Solana Playground to execute the client. When you input anything other than "gib" as the password for the ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"moveRight"))," instruction, you should encounter the following error message upon reaching the position to claim the chest reward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error Code: WrongPassword. Error Number: 6000. Error Message: Password was wrong.\n")),(0,o.kt)("p",null,"However, if you enter the correct password, the output should resemble the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Running client...\n  client.ts:\n    Use 'solana confirm -v CX8VWV5Jp1kXDkZrTdeeyibgZg3B3cXAzchzCfNHvJoqARSGHeEU5injypxFwiKFcHPcWFG9BeNSrqZAdENtL2t' to see the logs\n    My balance before spawning a chest: 6.396630254 SOL\n    Use 'solana confirm -v 3HwAS1RK7beL3mGoNdFYWteJXF3NdJXiEskJrHtuJ6Tu9ow67Zo3yScQBEPQyish33hP8WyuVanmq93wEFJ2LQcx' to see the logs\n    Level reset and chest spawned \ud83d\udc8e\n    o........\ud83d\udc8e\n    Use 'solana confirm -v 43KnGrx5VQYd8LctsNaNqN1hg69vE6wiiTbdxTC1uM3Hasnq7ZdM9zWx4JS39AKNz2FpQr9a3ZnEA7XscEzmXQ5U' to see the logs\n    My balance: 6.296620254 SOL\n    Player position is: 1\n    ....o....\ud83d\udc8e\n    Use 'solana confirm -v AGxYWDw49d4y5dLon5M42eu1qG8g2Yf7FeTr3Dpbf1uFXnMeUzp4XWmHyQP1YRNpT8acz4aTJU9f2FQpL6BSAkY' to see the logs\n    My balance: 6.296615254 SOL\n    Player position is: 2\n    ......o..\ud83d\udc8e\n    Use 'solana confirm -v 5pjAU5NrS4u91QLWZTvo9aXBtR3c6g981UGSxrWDoDW5MehXnx5LnAxu4jKLp1p75RKpVSgMBgg2zHX3WDyci7AK' to see the logs\n    My balance: 6.396610254 SOL\n    Player position is: 3\n    .........\\o/\ud83d\udc8e\n    ...........\\o/\n")),(0,o.kt)("p",null,"Well done! You have successfully created, deployed, and interacted with Tiny Adventure Two from the client side. You've incorporated a new feature that allows players to collect rewards by reaching the chest at the end of the level. Moreover, you've learned how to transfer SOL within an Anchor program using cross-program invocations and by directly modifying lamports in accounts."),(0,o.kt)("p",null,"Feel free to continue building independently and enhance the game with additional features like new levels or alternative rewards!"))}h.isMDXComponent=!0}}]);