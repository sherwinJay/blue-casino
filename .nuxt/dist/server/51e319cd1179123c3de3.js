exports.ids=[6],exports.modules={31:function(e,t){},32:function(e,t){},33:function(e,t){},39:function(e,t,r){"use strict";r.r(t);var o=r(31),n=r.n(o);for(var c in o)"default"!==c&&function(e){r.d(t,e,(function(){return o[e]}))}(c);t.default=n.a},40:function(e,t,r){"use strict";r.r(t);var o=r(32),n=r.n(o);for(var c in o)"default"!==c&&function(e){r.d(t,e,(function(){return o[e]}))}(c);t.default=n.a},41:function(e,t,r){"use strict";r.r(t);var o=r(33),n=r.n(o);for(var c in o)"default"!==c&&function(e){r.d(t,e,(function(){return o[e]}))}(c);t.default=n.a},45:function(e,t,r){"use strict";r.r(t);var o={props:{gameData:{type:Array},searchGame:{type:String},langCN:{type:Boolean},topGames:{type:Array}},computed:{slotGames(){const e=this.gameData,t=[];return null==e?t:(e.map((r,o)=>{const n=String(r.game_launch_url.web).split("/")[0],c=String(r.game_launch_url.web).split("/")[1],d=this.langCN?r.game_name_cn:r.game_name_en,l=this.langCN?"/gamegatewayincludes/images/cn/":"/gamegatewayincludes/images/",m=[];t.push({gameVendor:r.provider_code,game_name:d,game_url:`${l}${r.game_id_desktop}`,gameImg:this.langCN?r.image_path.cn:r.image_path.en,game_link:{real:`${((e,t,o,d,l)=>"T1PT"===e?`/${n}/${c}/${t}`:"T1JUMB"===e?"card_games"===r.game_type_code?`/${n}/${c}/table_and_cards/${t}`:"fishing_game"===r.game_type_code?`/${n}/${c}/fishing/${t}`:`/${n}/${c}/${o}/${t}`:"T1PNG"===e?`/${n}/${c}/${t}/real`:"PT V2"===e?`/${n}/${c}/default/${t}`:"MGPLUS"===e?`/${n}/${c}/5213/${t}/real`:"HB"===e?`/${n}/${c}/real/${t}`:"DT"===e?`/${n}/${c}/${t}/real/web`:"JUMB_GAMING"===e?"card_games"===r.game_type_code?`/${n}/${c}/table_and_cards/${t}/real/desktop`:"fishing_game"===r.game_type_code?`/${n}/${c}/fishing/${t}/real/desktop`:`/${n}/${c}/${o}/${t}`:"PRAGMATICPLAY"===e?`/${n}/${c}/${t}/real`:`/${n}/${c}/${t}`)(e[0].provider_code,r.game_id_desktop,r.game_type_code)}`,trial:`${((e,t,o,d,l)=>"T1PT"===e?`/${n}/${c}/${t}`:"T1JUMB"===e?"card_games"===r.game_type_code?`/${n}/${c}/table_and_cards/${t}`:"fishing_game"===r.game_type_code?`/${n}/${c}/fishing/${t}`:`/${n}/${c}/${o}/${t}`:"T1PNG"===e?`/${n}/${c}/${t}/fun`:"PT V2"===e?`/${n}/${c}/default/${t}`:"MGPLUS"===e?`/${n}/${c}/5213/${t}`:"HB"===e?`/${n}/${c}/trial/${t}`:"DT"===e?`/${n}/${c}/${t}`:"JUMB_GAMING"===e?"card_games"===r.game_type_code?`/${n}/${c}/table_and_cards/${t}/trial`:"fishing_game"===r.game_type_code?`/${n}/${c}/fishing/${t}/trial`:`/${n}/${c}/${o}/${t}`:"PRAGMATICPLAY"===e?`/${n}/${c}/${t}/fun`:`/${n}/${c}/${t}`)(e[0].provider_code,r.game_id_desktop,r.game_type_code)}`},is_flash:"",is_html5:"",is_mobile:"",category:"",gameCode:r.game_type_code,realBtn:this.langCN?"开始游戏":"real",demoBtn:function(){if(m.length<1)return!1;for(let i=0;i<m.length;i++)if(m[i]===r.provider_code)return!0}()?"":this.langCN?"免费试玩":"trial",uniqueCode:r.game_id_desktop})}),t)},filterGames(){return this.slotGames.filter(e=>{return(null!==e.game_name?e.game_name.toLowerCase():"").match(this.searchGame.toLowerCase())})}}},n=r(1);var c={props:["activeCategory","categories","switchCategory"],data:()=>({defaultCategories:[{category:{categoryName:"all",categoryRaw:""}}]}),computed:{createCategories(){const e=[];return this.categories.map(t=>{if(null===t)return!1;{const r=()=>"fishing_game"===t?"fishing":"card_games"===t||"table_and_cards"===t||"table_games"===t?"table":"scratch_card"===t?"scratch":"fixed_odds"===t?"fixed odds":"live_dealer"===t?"live dealer":"video_poker"===t?"video poker":t;return e.push({category:{categoryName:r(),categoryRaw:t}})}}),this.defaultCategories.concat(e)}}};var d={data:()=>({currVendor:"1002",currCategory:"",games:[],topGames:["fmn","grbjp","qnw","bob","fkmj","vs25journey","cs5moneyroll","vs243fortseren","vs20sbxmas","vs20aladdinsorc"],gameVendor:[{name:"Playtech",id:1002},{name:"Pragmatic",id:1011},{name:"Top Trend Gaming",id:1012},{name:"Play N Go",id:1010}],categories:[],langCN:!1,maxItem:15,loading:!1,loadMore:!1,searchVal:""}),created(){this.getCategories(this.currVendor),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)},beforeMount(){window.addEventListener("scroll",()=>{this.loadMore=this.bottomPage()},{passive:!0})},beforeDestroy(){window.removeEventListener("scroll",this.bottomPage,{passive:!0})},methods:{getGames(e,t,r,o){fetch(`http://player.onestop.t1t.in/pub/get_frontend_games/${e}/${t}`,{method:"GET"}).then(e=>e.json()).then(e=>{this.loading=!1;const t=e.game_list.filter(e=>("1"===e.in_flash||"1"===e.in_html5)&&"unknown"!==e.game_type_code&&null!==e.game_type_code);let n;const c=t.filter((e,t)=>this.topGames.includes(e.game_id_desktop));if(c.length>0){const e=t.filter(e=>!this.topGames.includes(e.game_id_desktop));n=c.concat(e).slice(r,r+o),this.games=this.games.concat(n),this.bottomPage()&&(this.loadMore=!1,this.games.concat(n))}else n=t.slice(r,r+o),this.games=this.games.concat(n),this.bottomPage()&&(this.loadMore=!1,this.games.concat(n))})},bottomPage(){const e=window.scrollY,t=document.documentElement.clientHeight,r=document.documentElement.scrollHeight;return t+e>=r||r<t},getCategories(e){fetch(`http://player.onestop.t1t.in/pub/get_frontend_games/${e}/game_type`,{method:"GET"}).then(e=>e.json()).then(e=>{this.categories=e.available_game_type_codes})},switchVendor(e){this.games=[],this.currCategory="",this.loading=!0,this.currVendor=e.target.getAttribute("data-id"),this.getCategories(this.currVendor),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)},switchCategory(e){this.games=[],this.loading=!0,this.currCategory=e.target.getAttribute("data-category"),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)}},watch:{loadMore(e){e&&this.getGames(this.currVendor,this.currCategory,this.games.length,this.maxItem)}},components:{Games:Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"game-container"},[e._ssrNode(e._ssrList(e.filterGames,(function(t,r){return'<div class="game-slot-container" data-v-187b29d0><div'+e._ssrClass(null,"game-slot game-"+t.gameVendor.toLowerCase()+" "+(e.topGames.includes(t.uniqueCode)?"top-games":""))+' data-v-187b29d0><img src="/images/slots-page/hot.png" alt="hot-icon" class="hot-icon" data-v-187b29d0> <img'+e._ssrAttr("src",t.gameImg)+e._ssrAttr("alt",t.gName)+" data-v-187b29d0></div> <div"+e._ssrClass(null,"game-info game-"+t.gameVendor.toLowerCase())+' data-v-187b29d0><span class="game-name" data-v-187b29d0>'+e._ssrEscape("\n        "+e._s(t.game_name)+"\n      ")+'</span> <div class="btn-wrapper" data-v-187b29d0><a'+e._ssrAttr("href",t.game_link.real)+' target="_blank" class="btn play-btn" data-v-187b29d0>'+e._ssrEscape("\n          "+e._s(t.realBtn)+"\n        ")+"</a> <a"+e._ssrAttr("href",t.game_link.trial)+' class="btn demo-btn" data-v-187b29d0>'+e._ssrEscape("\n          "+e._s(t.demoBtn)+"\n        ")+"</a></div></div></div>"})))])}),[],!1,(function(e){var t=r(39);t.__inject__&&t.__inject__(e)}),"187b29d0","cdc17626").exports,GameCategories:Object(n.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"game-category"},[e._ssrNode("<ul data-v-50de19c4>"+e._ssrList(e.createCategories,(function(t){return"<li data-v-50de19c4><button"+e._ssrAttr("data-category",t.category.categoryRaw)+e._ssrClass(null,"category-"+t.category.categoryName+" "+(t.category.categoryRaw===e.activeCategory?"active":""))+" data-v-50de19c4>"+e._ssrEscape("\n        "+e._s(t.category.categoryName)+"\n      ")+"</button></li>"}))+"</ul>")])}),[],!1,(function(e){var t=r(40);t.__inject__&&t.__inject__(e)}),"50de19c4","eb4dfc9c").exports}};var l={components:{Slots:Object(n.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode('<div class="game-vendor" data-v-4407c18e><ul data-v-4407c18e>'+e._ssrList(e.gameVendor,(function(t){return'<li data-v-4407c18e><a href="#"'+e._ssrAttr("id","game-"+t.id)+e._ssrAttr("data-id",t.id)+e._ssrClass(null,{active:e.currVendor==t.id})+" data-v-4407c18e></a></li>"}))+"</ul></div> "),e._ssrNode('<div class="category-wrapper" data-v-4407c18e>',"</div>",[r("GameCategories",{staticClass:"game-categories",attrs:{categories:this.categories,activeCategory:this.currCategory,switchCategory:this.switchCategory}}),e._ssrNode(' <form class="search-game" data-v-4407c18e><label data-v-4407c18e><input type="text" placeholder="search..."'+e._ssrAttr("value",e.searchVal)+" data-v-4407c18e></label></form>")],2),e._ssrNode(" "),e._ssrNode('<div class="game-container-wrapper" data-v-4407c18e>',"</div>",[e._ssrNode((e.loading?'<div id="loading" class="animated" data-v-4407c18e><div class="circle" data-v-4407c18e></div></div>':"\x3c!----\x3e")+" "),e.loading?e._e():e._ssrNode('<div class="load-more" data-v-4407c18e>',"</div>",[r("Games",{attrs:{gameData:this.games,langCN:this.langCN,searchGame:this.searchVal,topGames:this.topGames}}),e._ssrNode(" "+(e.loadMore?'<div id="loading" class="animated" data-v-4407c18e><div class="circle" data-v-4407c18e></div></div>':"\x3c!----\x3e"))],2)],2)],2)}),[],!1,(function(e){var t=r(41);t.__inject__&&t.__inject__(e)}),"4407c18e","45d140d4").exports}};var m=Object(n.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[this._ssrNode('<div class="page-container" data-v-56187ebe>',"</div>",[t("Slots")],1)])}),[],!1,(function(e){}),"56187ebe","445697d2");t.default=m.exports}};