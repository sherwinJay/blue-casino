(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(t,e,c){},207:function(t,e,c){},208:function(t,e,c){},214:function(t,e,c){"use strict";var n=c(206);c.n(n).a},215:function(t,e,c){"use strict";var n=c(207);c.n(n).a},216:function(t,e,c){"use strict";var n=c(208);c.n(n).a},221:function(t,e,c){"use strict";c.r(e);c(92),c(24);var n={props:{gameData:{type:Array},searchGame:{type:String},langCN:{type:Boolean}},computed:{slotGames:function(){var t=this,e=this.gameData,c=[];return null==e?c:(e.map((function(n){var o,r,l,m=String(n.game_launch_url.web).split("/")[0],d=String(n.game_launch_url.web).split("/")[1],_=t.langCN?n.game_name_cn:n.game_name_en,h=t.langCN?"/gamegatewayincludes/images/cn/":"/gamegatewayincludes/images/",f=[];c.push({gameVendor:n.provider_code,game_name:_,game_url:"".concat(h).concat(n.game_id_desktop),gameImg:t.langCN?n.image_path.cn:n.image_path.en,game_link:{real:"".concat((o=e[0].provider_code,r=n.game_id_desktop,l=n.game_type_code,"T1PT"===o?"/".concat(m,"/").concat(d,"/").concat(r):"T1JUMB"===o?"card_games"===n.game_type_code?"/".concat(m,"/").concat(d,"/table_and_cards/").concat(r):"fishing_game"===n.game_type_code?"/".concat(m,"/").concat(d,"/fishing/").concat(r):"/".concat(m,"/").concat(d,"/").concat(l,"/").concat(r):"T1PNG"===o?"/".concat(m,"/").concat(d,"/").concat(r,"/real"):"PT V2"===o?"/".concat(m,"/").concat(d,"/default/").concat(r):"MGPLUS"===o?"/".concat(m,"/").concat(d,"/5213/").concat(r,"/real"):"HB"===o?"/".concat(m,"/").concat(d,"/real/").concat(r):"DT"===o?"/".concat(m,"/").concat(d,"/").concat(r,"/real/web"):"JUMB_GAMING"===o?"card_games"===n.game_type_code?"/".concat(m,"/").concat(d,"/table_and_cards/").concat(r,"/real/desktop"):"fishing_game"===n.game_type_code?"/".concat(m,"/").concat(d,"/fishing/").concat(r,"/real/desktop"):"/".concat(m,"/").concat(d,"/").concat(l,"/").concat(r):"PRAGMATICPLAY"===o?"/".concat(m,"/").concat(d,"/").concat(r,"/real"):"/".concat(m,"/").concat(d,"/").concat(r))),trial:"".concat(function(t,e,c,o,r){return"T1PT"===t?"/".concat(m,"/").concat(d,"/").concat(e):"T1JUMB"===t?"card_games"===n.game_type_code?"/".concat(m,"/").concat(d,"/table_and_cards/").concat(e):"fishing_game"===n.game_type_code?"/".concat(m,"/").concat(d,"/fishing/").concat(e):"/".concat(m,"/").concat(d,"/").concat(c,"/").concat(e):"T1PNG"===t?"/".concat(m,"/").concat(d,"/").concat(e,"/fun"):"PT V2"===t?"/".concat(m,"/").concat(d,"/default/").concat(e):"MGPLUS"===t?"/".concat(m,"/").concat(d,"/5213/").concat(e):"HB"===t?"/".concat(m,"/").concat(d,"/trial/").concat(e):"DT"===t?"/".concat(m,"/").concat(d,"/").concat(e):"JUMB_GAMING"===t?"card_games"===n.game_type_code?"/".concat(m,"/").concat(d,"/table_and_cards/").concat(e,"/trial"):"fishing_game"===n.game_type_code?"/".concat(m,"/").concat(d,"/fishing/").concat(e,"/trial"):"/".concat(m,"/").concat(d,"/").concat(c,"/").concat(e):"PRAGMATICPLAY"===t?"/".concat(m,"/").concat(d,"/").concat(e,"/fun"):"/".concat(m,"/").concat(d,"/").concat(e)}(e[0].provider_code,n.game_id_desktop,n.game_type_code))},is_flash:"",is_html5:"",is_mobile:"",category:"",gameCode:n.game_type_code,realBtn:t.langCN?"开始游戏":"real",demoBtn:function(){if(f.length<1)return!1;for(var i=0;i<f.length;i++)if(f[i]===n.provider_code)return!0}()?"":t.langCN?"免费试玩":"trial"})})),console.log(c),c)},filterGames:function(){var t=this;return this.slotGames.filter((function(e){return e.game_name.toLowerCase().match(t.searchGame.toLowerCase())}))}}},o=(c(214),c(20)),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"game-container"},t._l(t.filterGames,(function(e,n){return c("div",{key:n,staticClass:"game-slot-container"},[c("img",{attrs:{src:e.gameImg}}),t._v(" "),c("div",{class:"game-info "+e.gameVendor},[c("span",{staticClass:"game-name"},[t._v("\n        "+t._s(e.game_name)+"\n      ")]),t._v(" "),c("div",{staticClass:"btn-wrapper"},[c("a",{staticClass:"btn play-btn",attrs:{href:e.game_link.real,target:"_blank"}},[t._v("\n          "+t._s(e.realBtn)+"\n        ")]),t._v(" "),c("a",{staticClass:"btn demo-btn",attrs:{href:e.game_link.trial}},[t._v("\n          "+t._s(e.demoBtn)+"\n        ")])])])])})),0)}),[],!1,null,"0ff553b6",null).exports,l={props:["activeCategory","categories","switchCategory"],computed:{createCategories:function(){var t=[];return this.categories.map((function(e){if(null===e)return test;return t.push({category:{categoryName:"fishing_game"===e?"fishing":"card_games"===e||"table_and_cards"===e||"table_games"===e?"table":"scratch_card"===e?"scratch":"fixed_odds"===e?"fixed odds":"live_dealer"===e?"live dealer":"video_poker"===e?"video poker":e,categoryRaw:e}})})),t}}},m=(c(215),{data:function(){return{currVendor:"1002",currCategory:"slots",games:[],gameVendor:[{name:"Playtech",id:1002},{name:"Pragmatic",id:1011},{name:"Top Trend Gaming",id:1012},{name:"Play N Go",id:1010}],categories:[],langCN:!1,maxItem:15,loading:!1,loadMore:!1,inputVal:""}},created:function(){this.getGames(this.currVendor,this.currCategory,0,this.maxItem),this.getCategories(this.currVendor)},beforeMount:function(){var t=this;window.addEventListener("scroll",(function(){t.loadMore=t.bottomPage()}))},beforeDestroy:function(){window.removeEventListener("scroll",this.bottomPage)},methods:{getGames:function(t,e,c,n){var o=this;fetch("http://player.onestop.t1t.in/pub/get_frontend_games/".concat(t,"/").concat(e),{method:"GET"}).then((function(t){return t.json()})).then((function(e){o.loading=!1;var r=e.game_list.filter((function(t){return"1"===t.in_flash&&"unknown"!==t.game_type_code})).slice(c,c+n);o.games=o.games.concat(r),o.bottomPage()&&(o.loadMore=!1,o.games.concat(r)),console.log(t)}))},bottomPage:function(){var t=window.scrollY,e=document.documentElement.clientHeight,c=document.documentElement.scrollHeight;return e+t>=c||c<e},getCategories:function(t){var e=this;fetch("http://player.onestop.t1t.in/pub/get_frontend_games/".concat(t,"/game_type"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){e.categories=t.available_game_type_codes,console.log(e.categories)}))},switchVendor:function(t){this.games=[],this.currCategory="slots",this.loading=!0,this.currVendor=t.target.getAttribute("data-id"),this.getGames(this.currVendor,this.currCategory,0,this.maxItem),this.getCategories(this.currVendor)},switchCategory:function(t){this.games=[],this.loading=!0,this.currCategory=t.target.getAttribute("data-category"),this.getGames(this.currVendor,this.currCategory,0,this.maxItem)}},watch:{loadMore:function(t){t&&this.getGames(this.currVendor,this.currCategory,this.games.length,this.maxItem)}},components:{Games:r,GameCategories:Object(o.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"game-category"},[c("ul",t._l(t.createCategories,(function(e){return c("li",{key:e.category.categoryRaw},[c("button",{class:{active:e.category.categoryRaw==t.activeCategory},attrs:{"data-category":e.category.categoryRaw},on:{click:t.switchCategory}},[t._v("\n        "+t._s(e.category.categoryName)+"\n      ")])])})),0)])}),[],!1,null,"2a9bf992",null).exports}}),d=(c(216),{components:{Slots:Object(o.a)(m,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"game-vendor"},[c("ul",t._l(t.gameVendor,(function(e){return c("li",{key:e.id},[c("a",{class:{active:t.currVendor===e.id},attrs:{href:"#","data-id":e.id},on:{click:t.switchVendor}},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0)]),t._v(" "),c("div",{staticClass:"category-wrapper"},[c("GameCategories",{staticClass:"game-categories",attrs:{categories:this.categories,activeCategory:this.currCategory,switchCategory:this.switchCategory}}),t._v(" "),c("div",{staticClass:"search-game"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{type:"text",placeholder:"search..."},domProps:{value:t.inputVal},on:{input:function(e){e.target.composing||(t.inputVal=e.target.value)}}})])],1),t._v(" "),c("div",{staticClass:"game-container-wrapper"},[t.loading?c("div",{staticClass:"animated",attrs:{id:"loading"}},[c("div",{staticClass:"circle"})]):t._e(),t._v(" "),t.loading?t._e():c("div",{staticClass:"load-more"},[c("Games",{attrs:{gameData:this.games,langCN:this.langCN,searchGame:this.inputVal}}),t._v(" "),t.loadMore?c("div",{staticClass:"animated",attrs:{id:"loading"}},[c("div",{staticClass:"circle"})]):t._e()],1)])])}),[],!1,null,"526243f2",null).exports}}),_=Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"page-container"},[e("Slots")],1)])}),[],!1,null,"4764bca4",null);e.default=_.exports}}]);