(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(t,e,c){},207:function(t,e,c){},208:function(t,e,c){},214:function(t,e,c){"use strict";var n=c(206);c.n(n).a},215:function(t,e,c){"use strict";var n=c(207);c.n(n).a},216:function(t,e,c){"use strict";var n=c(208);c.n(n).a},221:function(t,e,c){"use strict";c.r(e);c(93),c(94),c(92),c(24);var n={props:{gameData:{type:Array},searchGame:{type:String},langCN:{type:Boolean},topGames:{type:Array}},computed:{slotGames:function(){var t=this,e=this.gameData,c=[];return null==e?c:c=e.map((function(c,n){var o,r,l,m=String(c.game_launch_url.web).split("/")[0],d=String(c.game_launch_url.web).split("/")[1],_=t.langCN?c.game_name_cn:c.game_name_en,h=t.langCN?"/gamegatewayincludes/images/cn/":"/gamegatewayincludes/images/",f=[];return{gameVendor:c.provider_code,game_name:_,game_url:"".concat(h).concat(c.game_id_desktop),gameImg:t.langCN?c.image_path.cn:c.image_path.en,game_link:{real:"".concat((o=e[0].provider_code,r=c.game_id_desktop,l=c.game_type_code,"T1PT"===o?"/".concat(m,"/").concat(d,"/").concat(r):"T1JUMB"===o?"card_games"===c.game_type_code?"/".concat(m,"/").concat(d,"/table_and_cards/").concat(r):"fishing_game"===c.game_type_code?"/".concat(m,"/").concat(d,"/fishing/").concat(r):"/".concat(m,"/").concat(d,"/").concat(l,"/").concat(r):"T1PNG"===o?"/".concat(m,"/").concat(d,"/").concat(r,"/real"):"PT V2"===o?"/".concat(m,"/").concat(d,"/default/").concat(r):"MGPLUS"===o?"/".concat(m,"/").concat(d,"/5213/").concat(r,"/real"):"HB"===o?"/".concat(m,"/").concat(d,"/real/").concat(r):"DT"===o?"/".concat(m,"/").concat(d,"/").concat(r,"/real/web"):"JUMB_GAMING"===o?"card_games"===c.game_type_code?"/".concat(m,"/").concat(d,"/table_and_cards/").concat(r,"/real/desktop"):"fishing_game"===c.game_type_code?"/".concat(m,"/").concat(d,"/fishing/").concat(r,"/real/desktop"):"/".concat(m,"/").concat(d,"/").concat(l,"/").concat(r):"PRAGMATICPLAY"===o?"/".concat(m,"/").concat(d,"/").concat(r,"/real"):"/".concat(m,"/").concat(d,"/").concat(r))),trial:"".concat(function(t,e,n,o,r){return"T1PT"===t?"/".concat(m,"/").concat(d,"/").concat(e):"T1JUMB"===t?"card_games"===c.game_type_code?"/".concat(m,"/").concat(d,"/table_and_cards/").concat(e):"fishing_game"===c.game_type_code?"/".concat(m,"/").concat(d,"/fishing/").concat(e):"/".concat(m,"/").concat(d,"/").concat(n,"/").concat(e):"T1PNG"===t?"/".concat(m,"/").concat(d,"/").concat(e,"/fun"):"PT V2"===t?"/".concat(m,"/").concat(d,"/default/").concat(e):"MGPLUS"===t?"/".concat(m,"/").concat(d,"/5213/").concat(e):"HB"===t?"/".concat(m,"/").concat(d,"/trial/").concat(e):"DT"===t?"/".concat(m,"/").concat(d,"/").concat(e):"JUMB_GAMING"===t?"card_games"===c.game_type_code?"/".concat(m,"/").concat(d,"/table_and_cards/").concat(e,"/trial"):"fishing_game"===c.game_type_code?"/".concat(m,"/").concat(d,"/fishing/").concat(e,"/trial"):"/".concat(m,"/").concat(d,"/").concat(n,"/").concat(e):"PRAGMATICPLAY"===t?"/".concat(m,"/").concat(d,"/").concat(e,"/fun"):"/".concat(m,"/").concat(d,"/").concat(e)}(e[0].provider_code,c.game_id_desktop,c.game_type_code))},is_flash:"",is_html5:"",is_mobile:"",category:"",gameCode:c.game_type_code,realBtn:t.langCN?"开始游戏":"real",demoBtn:function(){if(f.length<1)return!1;for(var i=0;i<f.length;i++)if(f[i]===c.provider_code)return!0}()?"":t.langCN?"免费试玩":"trial",uniqueCode:c.game_id_desktop}}))},filterGames:function(){var t=this;return this.slotGames.filter((function(e){return(null!==e.game_name?e.game_name.toLowerCase():"").match(t.searchGame.toLowerCase())}))}}},o=(c(214),c(20)),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"game-container"},t._l(t.filterGames,(function(e,n){return c("div",{key:n,staticClass:"game-slot-container"},[c("div",{class:"game-slot game-"+e.gameVendor.toLowerCase()+" "+(t.topGames.includes(e.uniqueCode)?"top-games":"")},[c("img",{staticClass:"hot-icon",attrs:{src:"/images/slots-page/hot.png",alt:"hot-icon"}}),t._v(" "),c("img",{attrs:{src:e.gameImg,alt:e.gName}})]),t._v(" "),c("div",{class:"game-info game-"+e.gameVendor.toLowerCase()},[c("span",{staticClass:"game-name"},[t._v("\n        "+t._s(e.game_name)+"\n      ")]),t._v(" "),c("div",{staticClass:"btn-wrapper"},[c("a",{staticClass:"btn play-btn",attrs:{href:e.game_link.real,target:"_blank"}},[t._v("\n          "+t._s(e.realBtn)+"\n        ")]),t._v(" "),c("a",{staticClass:"btn demo-btn",attrs:{href:e.game_link.trial}},[t._v("\n          "+t._s(e.demoBtn)+"\n        ")])])])])})),0)}),[],!1,null,"ec39a68a",null).exports,l={props:["activeCategory","categories","switchCategory"],data:function(){return{defaultCategories:[{categoryName:"all",categoryRaw:""},{categoryName:"hot",categoryRaw:" "},{categoryName:"slots",categoryRaw:"slots"}]}},computed:{createCategories:function(){var t=[];return this.categories.map((function(e){if(null===e||"slots"===e)return!1;return t.push({categoryName:"fishing_game"===e?"fishing":"card_games"===e||"table_and_cards"===e||"table_games"===e?"table":"scratch_card"===e?"scratch":"fixed_odds"===e?"fixed odds":"live_dealer"===e?"live dealer":"video_poker"===e?"video poker":e,categoryRaw:e})})),this.defaultCategories.concat(t)}}},m=(c(215),{data:function(){return{currVendor:"5587",currCategory:"",games:[],topGames:["fmn","grbjp","qnw","bob","fkmj","vs25journey","cs5moneyroll","vs243fortseren","vs20sbxmas","vs20aladdinsorc"],gameVendor:[{name:"Playtech",id:5587},{name:"Pragmatic",id:1011},{name:"Top Trend Gaming",id:1012},{name:"Play N Go",id:1010}],categories:[],langCN:!1,maxItem:15,loading:!1,loadMore:!1,searchVal:""}},created:function(){this.getCategories(this.currVendor),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)},beforeMount:function(){var t=this;window.addEventListener("scroll",(function(){t.loadMore=t.bottomPage()}),{passive:!0})},beforeDestroy:function(){window.removeEventListener("scroll",this.bottomPage,{passive:!0})},methods:{getGames:function(t,e,c,n){var o=this;fetch("http://player.onestop.t1t.in/pub/get_frontend_games/".concat(t,"/").concat(e),{method:"GET"}).then((function(t){return t.json()})).then((function(t){o.loading=!1;var r,l=function(){o.bottomPage()&&(o.loadMore=!1,o.games.concat(r))},m=t.game_list.filter((function(t){return("1"===t.in_flash||"1"===t.in_html5)&&"unknown"!==t.game_type_code&&null!==t.game_type_code})),d=m.filter((function(t,e){return o.topGames.includes(t.game_id_desktop)}));if(console.time(""),d.length>0)if(" "===e)r=d.slice(c,c+n),o.games=o.games.concat(r),l();else{var _=m.filter((function(t){return!o.topGames.includes(t.game_id_desktop)}));r=d.concat(_).slice(c,c+n),o.games=o.games.concat(r),l()}else r=m.slice(c,c+n),o.games=o.games.concat(r),l();console.timeEnd("")}))},bottomPage:function(){var t=window.scrollY,e=document.documentElement.clientHeight,c=document.documentElement.scrollHeight;return e+t>=c||c<e},getCategories:function(t){var e=this;fetch("http://player.onestop.t1t.in/pub/get_frontend_games/".concat(t,"/game_type"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){e.categories=t.available_game_type_codes}))},switchVendor:function(t){this.games=[],this.currCategory="",this.loading=!0,this.currVendor=t.target.getAttribute("data-id"),this.getCategories(this.currVendor),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)},switchCategory:function(t){this.games=[],this.loading=!0,this.currCategory=t.target.getAttribute("data-category"),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)},enBtn:function(){this.langCN=!1},cnBtn:function(){this.langCN=!0}},watch:{loadMore:function(t){t&&this.games.length>0&&this.getGames(this.currVendor,this.currCategory,this.games.length,this.maxItem)}},components:{Games:r,GameCategories:Object(o.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"game-category"},[c("ul",t._l(t.createCategories,(function(e,n){return c("li",{key:n},[c("button",{class:"category-"+e.categoryName+" "+(e.categoryRaw===t.activeCategory?"active":""),attrs:{"data-category":e.categoryRaw},on:{click:t.switchCategory}},[t._v("\n        "+t._s(e.categoryName)+"\n      ")])])})),0)])}),[],!1,null,"6f036d6c",null).exports}}),d=(c(216),{head:function(){return{titleTemplate:"%s | Slots"}},components:{Slots:Object(o.a)(m,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"game-vendor"},[c("ul",t._l(t.gameVendor,(function(e){return c("li",{key:e.id},[c("a",{class:{active:t.currVendor==e.id},attrs:{href:"#",id:"game-"+e.id,"data-id":e.id},on:{click:t.switchVendor}})])})),0)]),t._v(" "),c("div",{staticClass:"category-wrapper"},[c("GameCategories",{staticClass:"game-categories",attrs:{categories:this.categories,activeCategory:this.currCategory,switchCategory:this.switchCategory}}),t._v(" "),c("form",{staticClass:"search-game"},[c("label",[c("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],attrs:{type:"text",placeholder:"search..."},domProps:{value:t.searchVal},on:{input:function(e){e.target.composing||(t.searchVal=e.target.value)}}})])])],1),t._v(" "),c("div",{staticClass:"game-container-wrapper"},[c("div",{staticClass:"lang-btn-wrapper"},[c("button",{on:{click:t.enBtn}},[t._v("EN")]),t._v(" "),c("button",{on:{click:t.cnBtn}},[t._v("CN")])]),t._v(" "),t.loading?c("div",{staticClass:"animated",attrs:{id:"loading"}},[c("div",{staticClass:"circle"})]):t._e(),t._v(" "),t.loading?t._e():c("div",{staticClass:"load-more"},[c("Games",{attrs:{gameData:this.games,langCN:this.langCN,searchGame:this.searchVal,topGames:this.topGames}}),t._v(" "),t.loadMore?c("div",{staticClass:"animated",attrs:{id:"loading"}},[c("div",{staticClass:"circle"})]):t._e()],1)])])}),[],!1,null,"f19c2efa",null).exports}}),_=Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"page-container"},[e("Slots")],1)])}),[],!1,null,"33ec6be0",null);e.default=_.exports}}]);