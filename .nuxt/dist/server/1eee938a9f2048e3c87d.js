exports.ids=[6],exports.modules={31:function(e,t){},32:function(e,t){},33:function(e,t){},39:function(e,t,r){"use strict";r.r(t);var n=r(31),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},40:function(e,t,r){"use strict";r.r(t);var n=r(32),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},41:function(e,t,r){"use strict";r.r(t);var n=r(33),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},45:function(e,t,r){"use strict";r.r(t);var n={props:{gameData:{type:Array},searchGame:{type:String},langCN:{type:Boolean},topGames:{type:Array}},computed:{slotGames(){const e=this.gameData;let t=[];return null==e?t:t=e.map((t,r)=>{const n=String(t.game_launch_url.web).split("/")[0],o=String(t.game_launch_url.web).split("/")[1],c=this.langCN?t.game_name_cn:t.game_name_en,d=this.langCN?"/gamegatewayincludes/images/cn/":"/gamegatewayincludes/images/",l=[];return{gameVendor:t.provider_code,game_name:c,game_url:`${d}${t.game_id_desktop}`,gameImg:this.langCN?t.image_path.cn:t.image_path.en,game_link:{real:`${((e,r,c,d,l)=>"T1PT"===e?`/${n}/${o}/${r}`:"T1JUMB"===e?"card_games"===t.game_type_code?`/${n}/${o}/table_and_cards/${r}`:"fishing_game"===t.game_type_code?`/${n}/${o}/fishing/${r}`:`/${n}/${o}/${c}/${r}`:"T1PNG"===e?`/${n}/${o}/${r}/real`:"PT V2"===e?`/${n}/${o}/default/${r}`:"MGPLUS"===e?`/${n}/${o}/5213/${r}/real`:"HB"===e?`/${n}/${o}/real/${r}`:"DT"===e?`/${n}/${o}/${r}/real/web`:"JUMB_GAMING"===e?"card_games"===t.game_type_code?`/${n}/${o}/table_and_cards/${r}/real/desktop`:"fishing_game"===t.game_type_code?`/${n}/${o}/fishing/${r}/real/desktop`:`/${n}/${o}/${c}/${r}`:"PRAGMATICPLAY"===e?`/${n}/${o}/${r}/real`:`/${n}/${o}/${r}`)(e[0].provider_code,t.game_id_desktop,t.game_type_code)}`,trial:`${((e,r,c,d,l)=>"T1PT"===e?`/${n}/${o}/${r}`:"T1JUMB"===e?"card_games"===t.game_type_code?`/${n}/${o}/table_and_cards/${r}`:"fishing_game"===t.game_type_code?`/${n}/${o}/fishing/${r}`:`/${n}/${o}/${c}/${r}`:"T1PNG"===e?`/${n}/${o}/${r}/fun`:"PT V2"===e?`/${n}/${o}/default/${r}`:"MGPLUS"===e?`/${n}/${o}/5213/${r}`:"HB"===e?`/${n}/${o}/trial/${r}`:"DT"===e?`/${n}/${o}/${r}`:"JUMB_GAMING"===e?"card_games"===t.game_type_code?`/${n}/${o}/table_and_cards/${r}/trial`:"fishing_game"===t.game_type_code?`/${n}/${o}/fishing/${r}/trial`:`/${n}/${o}/${c}/${r}`:"PRAGMATICPLAY"===e?`/${n}/${o}/${r}/fun`:`/${n}/${o}/${r}`)(e[0].provider_code,t.game_id_desktop,t.game_type_code)}`},is_flash:"",is_html5:"",is_mobile:"",category:"",gameCode:t.game_type_code,realBtn:this.langCN?"开始游戏":"real",demoBtn:function(){if(l.length<1)return!1;for(let i=0;i<l.length;i++)if(l[i]===t.provider_code)return!0}()?"":this.langCN?"免费试玩":"trial",uniqueCode:t.game_id_desktop}})},filterGames(){return this.slotGames.filter(e=>{return(null!==e.game_name?e.game_name.toLowerCase():"").match(this.searchGame.toLowerCase())})}}},o=r(1);var c={props:["activeCategory","categories","switchCategory"],data:()=>({defaultCategories:[{categoryName:"all",categoryRaw:""},{categoryName:"hot",categoryRaw:" "},{categoryName:"slots",categoryRaw:"slots"}]}),computed:{createCategories(){const e=[];return this.categories.map(t=>{if(null===t||"slots"===t)return!1;{const r=()=>"fishing_game"===t?"fishing":"card_games"===t||"table_and_cards"===t||"table_games"===t?"table":"scratch_card"===t?"scratch":"fixed_odds"===t?"fixed odds":"live_dealer"===t?"live dealer":"video_poker"===t?"video poker":t;return e.push({categoryName:r(),categoryRaw:t})}}),this.defaultCategories.concat(e)}}};var d={data:()=>({currVendor:"5587",currCategory:"",games:[],topGames:["fmn","grbjp","qnw","bob","fkmj","vs25journey","cs5moneyroll","vs243fortseren","vs20sbxmas","vs20aladdinsorc"],gameVendor:[{name:"Playtech",id:5587},{name:"Pragmatic",id:1011},{name:"Top Trend Gaming",id:1012},{name:"Play N Go",id:1010}],categories:[],langCN:!1,maxItem:15,loading:!1,loadMore:!1,searchVal:""}),created(){this.getCategories(this.currVendor),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)},beforeMount(){window.addEventListener("scroll",()=>{this.loadMore=this.bottomPage()},{passive:!0})},beforeDestroy(){window.removeEventListener("scroll",this.bottomPage,{passive:!0})},methods:{getGames(e,t,r,n){fetch(`http://player.onestop.t1t.in/pub/get_frontend_games/${e}/${t}`,{method:"GET"}).then(e=>e.json()).then(e=>{this.loading=!1;const o=()=>{this.bottomPage()&&(this.loadMore=!1,this.games.concat(c))};let c;const d=e.game_list.filter(e=>("1"===e.in_flash||"1"===e.in_html5)&&"unknown"!==e.game_type_code&&null!==e.game_type_code),l=d.filter((e,t)=>this.topGames.includes(e.game_id_desktop));if(console.time(""),l.length>0)if(" "===t)c=l.slice(r,r+n),this.games=this.games.concat(c),o();else{const e=d.filter(e=>!this.topGames.includes(e.game_id_desktop));c=l.concat(e).slice(r,r+n),this.games=this.games.concat(c),o()}else c=d.slice(r,r+n),this.games=this.games.concat(c),o();console.timeEnd("")})},bottomPage(){const e=window.scrollY,t=document.documentElement.clientHeight,r=document.documentElement.scrollHeight;return t+e>=r||r<t},getCategories(e){fetch(`http://player.onestop.t1t.in/pub/get_frontend_games/${e}/game_type`,{method:"GET"}).then(e=>e.json()).then(e=>{this.categories=e.available_game_type_codes})},switchVendor(e){this.games=[],this.currCategory="",this.loading=!0,this.currVendor=e.target.getAttribute("data-id"),this.getCategories(this.currVendor),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)},switchCategory(e){this.games=[],this.loading=!0,this.currCategory=e.target.getAttribute("data-category"),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)},enBtn(){this.langCN=!1},cnBtn(){this.langCN=!0}},watch:{loadMore(e){e&&this.games.length>0&&this.getGames(this.currVendor,this.currCategory,this.games.length,this.maxItem)}},components:{Games:Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"game-container"},[e._ssrNode(e._ssrList(e.filterGames,(function(t,r){return'<div class="game-slot-container" data-v-ec39a68a><div'+e._ssrClass(null,"game-slot game-"+t.gameVendor.toLowerCase()+" "+(e.topGames.includes(t.uniqueCode)?"top-games":""))+' data-v-ec39a68a><img src="/images/slots-page/hot.png" alt="hot-icon" class="hot-icon" data-v-ec39a68a> <img'+e._ssrAttr("src",t.gameImg)+e._ssrAttr("alt",t.gName)+" data-v-ec39a68a></div> <div"+e._ssrClass(null,"game-info game-"+t.gameVendor.toLowerCase())+' data-v-ec39a68a><span class="game-name" data-v-ec39a68a>'+e._ssrEscape("\n        "+e._s(t.game_name)+"\n      ")+'</span> <div class="btn-wrapper" data-v-ec39a68a><a'+e._ssrAttr("href",t.game_link.real)+' target="_blank" class="btn play-btn" data-v-ec39a68a>'+e._ssrEscape("\n          "+e._s(t.realBtn)+"\n        ")+"</a> <a"+e._ssrAttr("href",t.game_link.trial)+' class="btn demo-btn" data-v-ec39a68a>'+e._ssrEscape("\n          "+e._s(t.demoBtn)+"\n        ")+"</a></div></div></div>"})))])}),[],!1,(function(e){var t=r(39);t.__inject__&&t.__inject__(e)}),"ec39a68a","cdc17626").exports,GameCategories:Object(o.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"game-category"},[e._ssrNode("<ul data-v-6f036d6c>"+e._ssrList(e.createCategories,(function(t,r){return"<li data-v-6f036d6c><button"+e._ssrAttr("data-category",t.categoryRaw)+e._ssrClass(null,"category-"+t.categoryName+" "+(t.categoryRaw===e.activeCategory?"active":""))+" data-v-6f036d6c>"+e._ssrEscape("\n        "+e._s(t.categoryName)+"\n      ")+"</button></li>"}))+"</ul>")])}),[],!1,(function(e){var t=r(40);t.__inject__&&t.__inject__(e)}),"6f036d6c","eb4dfc9c").exports}};var l={head:()=>({titleTemplate:"%s | Slots"}),components:{Slots:Object(o.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode('<div class="game-vendor" data-v-f19c2efa><ul data-v-f19c2efa>'+e._ssrList(e.gameVendor,(function(t){return'<li data-v-f19c2efa><a href="#"'+e._ssrAttr("id","game-"+t.id)+e._ssrAttr("data-id",t.id)+e._ssrClass(null,{active:e.currVendor==t.id})+" data-v-f19c2efa></a></li>"}))+"</ul></div> "),e._ssrNode('<div class="category-wrapper" data-v-f19c2efa>',"</div>",[r("GameCategories",{staticClass:"game-categories",attrs:{categories:this.categories,activeCategory:this.currCategory,switchCategory:this.switchCategory}}),e._ssrNode(' <form class="search-game" data-v-f19c2efa><label data-v-f19c2efa><input type="text" placeholder="search..."'+e._ssrAttr("value",e.searchVal)+" data-v-f19c2efa></label></form>")],2),e._ssrNode(" "),e._ssrNode('<div class="game-container-wrapper" data-v-f19c2efa>',"</div>",[e._ssrNode('<div class="lang-btn-wrapper" data-v-f19c2efa><button data-v-f19c2efa>EN</button> <button data-v-f19c2efa>CN</button></div> '+(e.loading?'<div id="loading" class="animated" data-v-f19c2efa><div class="circle" data-v-f19c2efa></div></div>':"\x3c!----\x3e")+" "),e.loading?e._e():e._ssrNode('<div class="load-more" data-v-f19c2efa>',"</div>",[r("Games",{attrs:{gameData:this.games,langCN:this.langCN,searchGame:this.searchVal,topGames:this.topGames}}),e._ssrNode(" "+(e.loadMore?'<div id="loading" class="animated" data-v-f19c2efa><div class="circle" data-v-f19c2efa></div></div>':"\x3c!----\x3e"))],2)],2)],2)}),[],!1,(function(e){var t=r(41);t.__inject__&&t.__inject__(e)}),"f19c2efa","45d140d4").exports}};var m=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[this._ssrNode('<div class="page-container" data-v-33ec6be0>',"</div>",[t("Slots")],1)])}),[],!1,(function(e){}),"33ec6be0","445697d2");t.default=m.exports}};