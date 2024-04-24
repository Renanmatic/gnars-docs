"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1476],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>w});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,w=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(w,l(l({ref:t},u),{},{components:a})):n.createElement(w,l({ref:t},u))}));function w(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:3},l="1.3) How to Create a Wallet",i={unversionedId:"Level-1/how-to-create-wallet",id:"Level-1/how-to-create-wallet",title:"1.3) How to Create a Wallet",description:"Ethereum wallets are applications that let you interact with your Ethereum account. Think of it like an internet banking app \u2013 without the bank. Your wallet lets you read your balance, send transactions and connect to applications.",source:"@site/docs/Level-1/3-how-to-create-wallet.md",sourceDirName:"Level-1",slug:"/Level-1/how-to-create-wallet",permalink:"/docs/Level-1/how-to-create-wallet",draft:!1,editUrl:"https://github.com/gnars-dao/gnars-dao.github.io/tree/main/docs/Level-1/3-how-to-create-wallet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1.2) What is an NFT?",permalink:"/docs/Level-1/what-is-a-NFT"},next:{title:"1.4) What Gnars NFT can do?",permalink:"/docs/Level-1/what-gnars-nft-can-do"}},s={},c=[{value:"Easiest Way - Dawn",id:"easiest-way---dawn",level:2},{value:"Backup",id:"backup",level:2},{value:"Coolest way - ShapeShift + WalletConnect",id:"coolest-way---shapeshift--walletconnect",level:2},{value:"Hive Wallet",id:"hive-wallet",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"13-how-to-create-a-wallet"},"1.3) How to Create a Wallet"),(0,o.kt)("center",null,(0,o.kt)("img",{src:"https://openseauserdata.com/files/7cc8c6f42e368ae42540a6b1241b6d9e.svg"})),(0,o.kt)("p",null,"Ethereum wallets are applications that let you interact with your Ethereum account. Think of it like an internet banking app \u2013 without the bank. Your wallet lets you read your balance, send transactions and connect to applications."),(0,o.kt)("p",null,"You need a wallet to send funds and manage your ETH."),(0,o.kt)("p",null,"Your wallet is only a tool for managing your Ethereum account. That means you can swap wallet providers at any time. Many wallets also let you manage several Ethereum accounts from one application."),(0,o.kt)("p",null,"That's because wallets don't have custody of your funds, you do. They're just a tool for managing what's really yours."),(0,o.kt)("h2",{id:"easiest-way---dawn"},"Easiest Way - Dawn"),(0,o.kt)("p",null,"Dawn is an iPhone based Ethereum mobile wallet. "),(0,o.kt)("p",null,"You download the app onto your iPhone and run through the onboarding to get it setup. It has a native Safari extension, which makes it very easy to use Gnars from your iPhones Safari web browser. "),(0,o.kt)("p",null,"Download here: ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782"},"https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782")),(0,o.kt)("p",null,"To use, you would go to the Gnars dapp (",(0,o.kt)("inlineCode",{parentName:"p"},"gnars.wtf"),') on Safari, and then when you click "Connect", "Settle Transaction" etc. a popup will appear which allows you to connect your wallet and interact with Gnars.'),(0,o.kt)("p",null,"A demo of how to use Dawn is here: ",(0,o.kt)("img",{parentName:"p",src:"https://youtube.com/shorts/GFpCSmBmxx0",alt:"Gnars Demo"})),(0,o.kt)("h2",{id:"backup"},"Backup"),(0,o.kt)("p",null,"If Dawn isn't supported on your platform (you're not using an iPhone), then MetaMask is the way to go:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85296013/213961063-c01ddd2a-523f-47bc-83a5-148a75b59c2b.gif",alt:"ezgif com-gif-maker"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85296013/213961142-b3a77e13-ff19-4777-8b62-c467e3f71c19.gif",alt:"ezgif com-gif-maker_1"})),(0,o.kt)("h2",{id:"coolest-way---shapeshift--walletconnect"},"Coolest way - ShapeShift + WalletConnect"),(0,o.kt)("video",null,(0,o.kt)("source",{src:"/static/shapeshift.mp4"})),(0,o.kt)("h2",{id:"hive-wallet"},"Hive Wallet"),(0,o.kt)("p",null,"ETH is like a flip, hive still a hardflip, so you are going to learn that in Level 3."))}p.isMDXComponent=!0}}]);