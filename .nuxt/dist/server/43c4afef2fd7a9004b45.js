exports.ids=[3],exports.modules={34:function(e,r){},35:function(e,r){},36:function(e,r){},42:function(e,r,t){"use strict";t.r(r);var n=t(34),o=t.n(n);for(var c in n)"default"!==c&&function(e){t.d(r,e,(function(){return n[e]}))}(c);r.default=o.a},43:function(e,r,t){"use strict";t.r(r);var n=t(35),o=t.n(n);for(var c in n)"default"!==c&&function(e){t.d(r,e,(function(){return n[e]}))}(c);r.default=o.a},44:function(e,r,t){"use strict";t.r(r);var n=t(36),o=t.n(n);for(var c in n)"default"!==c&&function(e){t.d(r,e,(function(){return n[e]}))}(c);r.default=o.a},46:function(e,r,t){"use strict";t.r(r);var n={data:()=>({winners:[{player:"test002",game:"Frost Valley",winAmount:"1234. 00 USD"},{player:"test002",game:"Frost Valley",winAmount:"1234. 00 USD"},{player:"test002",game:"Frost Valley",winAmount:"1234. 00 USD"},{player:"test002",game:"Frost Valley",winAmount:"1234. 00 USD"},{player:"test002",game:"Frost Valley",winAmount:"1234. 00 USD"},{player:"test002",game:"Frost Valley",winAmount:"1234. 00 USD"},{player:"test002",game:"Frost Valley",winAmount:"1234. 00 USD"}],swiperOption:{direction:"vertical",slidesPerView:6,spaceBetween:0,mousewheel:!0,speed:2e3,loop:!0,autoplay:{delay:0,reverseDirection:!1}}})},o=t(1);var c={data:()=>({banners:["/images/background2.jpg","/images/sportsbanner.jpg","/images/Fishing-Background.jpg"],swiperOption:{loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",centeredSlides:!0,spaceBetween:1,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}})};var l={data:()=>({thumbnails:[{src:"fireflyfrenzy.jpg",name:"Firefly Frenzy"},{src:"gpas_fatchoy_pop.jpg",name:"Fat Choy Choy Sun"},{src:"SMG_ancientFortunesZeus.jpg",name:"Ancient Fortunes: Zeus"},{src:"vs5trdragons.jpg",name:"Triple Dragon"},{src:"AR29.jpg",name:"Wealthy Chicken"},{src:"aceofspades.jpg",name:"Ace of Spades"},{src:"sevensins.jpg",name:"7 Sins"},{src:"grimmuerto.jpg",name:"Grim Muerto"},{src:"SMG_goldenPrincess.jpg",name:"Golden Princess"},{src:"BPG-convertusaurum.jpg",name:"Convertus Aurum"},{src:"bigwincat.jpg",name:"Big Win Cat"},{src:"belloffortune.jpg",name:"Bell of Fortune"},{src:"phtd.jpg",name:"Pharaoh’s Treasure Deluxe"},{src:"prosperitypalace.jpg",name:"Prosperity Palace"},{src:"epa.jpg",name:"Epic Ape"},{src:"SMG_shogunofTime.jpg",name:"Shogun Of Time"},{src:"142.jpg",name:"Hephaestus"}],otherPages:[{src:"sports2.jpg",link:"/sports"},{src:"casino.jpg",link:"/casino"},{src:"slots.jpg",link:"/slots"},{src:"lottery.jpg",link:"/lottery"},{src:"fishing.jpg",link:"/fishing"},{src:"cards.jpg",link:"/cards"}],jackpotPrize:"1501480"}),created(){this.jackpotPrizes()},methods:{jackpotPrizes(){let e=1501124;setInterval(()=>{e=parseInt(e),e+=3;const r=Math.floor(90*Math.random()+11);this.jackpotPrize=`¥ ${function(e){const r=e.toString().split(".");return r[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),r.join(".")}(e)}.${r}`},1e3)}},components:{Winners:Object(o.a)(n,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:e.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"box_content winners"},[e._ssrNode('<div class="swiper-wrapper" data-v-5af80401>'+e._ssrList(e.winners,(function(r,t){return'<div class="swiper-slide" data-v-5af80401><div class="win_item" data-v-5af80401><div class="row" data-v-5af80401><div class="win-user col-md-4" data-v-5af80401><p class="win_user" data-v-5af80401>'+e._ssrEscape(e._s(r.player))+'</p></div> <div class="win_text col-md-8" data-v-5af80401><p class="win_game" data-v-5af80401>'+e._ssrEscape(e._s(r.game))+'</p> <p class="win_amount" data-v-5af80401>'+e._ssrEscape(e._s(r.winAmount))+"</p></div></div></div></div>"}))+"</div>")])}),[],!1,(function(e){var r=t(42);r.__inject__&&r.__inject__(e)}),"5af80401","3ba616c1").exports,Banner:Object(o.a)(c,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:e.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[e._ssrNode('<div class="swiper-wrapper" data-v-4c87e169>'+e._ssrList(e.banners,(function(r,t){return'<div class="swiper-slide" data-v-4c87e169><img'+e._ssrAttr("src",r)+" data-v-4c87e169></div>"}))+'</div> <div slot="button-prev" class="swiper-button-prev" data-v-4c87e169></div> <div slot="button-next" class="swiper-button-next" data-v-4c87e169></div> <div class="swiper-pagination swiper-pagination-bullets" data-v-4c87e169></div>')])}),[],!1,(function(e){var r=t(43);r.__inject__&&r.__inject__(e)}),"4c87e169","3bf0c1e2").exports}};var d=Object(o.a)(l,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"main-container"},[t("Banner"),e._ssrNode(" "),e._ssrNode('<div class="announcement">',"</div>",[t("marquee",{attrs:{behavior:"",direction:""}},[e._v("只是印刷和排版行业的虚拟文本。自16世纪以来，Lorem Ipsum一直是业界标准的虚拟文本，当时一台未知的打印机采用了类型的厨房，并将其拼凑成一本类型的样本。它不仅存在了五个世纪，而且还延续了电子排版，基本保持不变。它在20世纪60年代随着包含Lorem Ipsum段落的Letraset表格的推出而得到普及，最近还推出了像Aldus PageMaker这样的桌面出版软件，包括Lorem Ipsum的版本")])],1),e._ssrNode(' <section class="home-games page-container"><div class="game-grid-container"><div class="gm-day-wrapper"><img src="/images/home/DesertTreasure.jpg"></div> '+e._ssrList(e.thumbnails,(function(r,t){return'<div class="thumbnail"><img'+e._ssrAttr("src","/images/home/featured-games/"+r.src)+'> <div class="game_overlay"><p>'+e._ssrEscape(e._s(r.name))+'</p> <a href="#"><a href="#" class="game-btn">Play</a></a></div></div>'}))+'</div></section> <section class="promo-banner-wrapper"><h3>Play more than 3000 games!</h3> <p>Try our best games now!</p> <button class="btn">Play</button></section> '),e._ssrNode('<section class="page-container">',"</section>",[e._ssrNode('<div class="jackpot-container"><h2>Jackpot</h2> <p id="our-jackpot">'+e._ssrEscape(e._s(this.jackpotPrize))+"</p></div> "),e._ssrNode('<div class="home-content">',"</div>",[e._ssrNode('<div class="bonus-container">',"</div>",[e._ssrNode('<h2 class="bonus">Bonuses</h2> '),t("nuxt-link",{staticClass:"bonus-img-wrapper",attrs:{to:"/promotion"}},[t("img",{attrs:{src:"/images/home/livecasino-promo-banner.png"}})])],2),e._ssrNode(" "),e._ssrNode('<div class="more-games-wrapper">',"</div>",[e._ssrNode('<h2 class="more-games">More Games</h2> '),e._ssrNode('<div class="game-pages">',"</div>",e._l(e.otherPages,(function(r,n){return e._ssrNode('<div class="gm-img-wrapper">',"</div>",[t("nuxt-link",{attrs:{to:r.link}},[t("img",{attrs:{src:"/images/home/"+r.src}})])],1)})),0)],2),e._ssrNode(" "),e._ssrNode('<div class="game-winners-container">',"</div>",[e._ssrNode('<h2 class="game-winners">Daily Winners</h2> '),t("Winners")],2)],2)],2)],2)}),[],!1,(function(e){var r=t(44);r.__inject__&&r.__inject__(e)}),null,"22cc9804");r.default=d.exports}};