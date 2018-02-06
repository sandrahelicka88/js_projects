$(document).ready(function(){
	let game = {
		cards: [1,1,2,2,3,3,4,4,5,5,6,6],
		init: function(){
			game.shuffle();
		},
		shuffle: function(){
			let random = 0;
			let temp = 0;
			for(i=1;i<game.cards.length;i++){
				random = Math.round(Math.random() *i);
				temp = game.cards[i];
				game.cards[i] = game.cards[random];
				game.cards[random] = temp;
			}
			game.assignCards();
			console.log(game.cards);
		},
		assignCards: function(){
			$('.card').each(function(index){
				$(this).attr('data-card-value',game.cards[index]);
			});
			game.clickHendlers();
		},
		clickHendlers: function(){
			$('.card').on('click', function(){
				$(this).html('<p>'+$(this).data('card-value')+'</p>').addClass("selected");
				game.checkMatch();
			});
		},
		checkMatch: function(){
			if($(".selected").length == 2){
				if($(".selected").first().data("cardValue")==$(".selected").last().data("cardValue")){
					$(".selected").each(function () {
						$(this).animate({opacity: 0}).removeClass("unmatched");
					});
					$(".selected").each(function(){
						$(this).removeClass("selected");
					});
			}else{
				setTimeout(function() {
					$(".selected").each(function(){
						$(this).html("").removeClass("selected");
					});
				}, 1000);
			}
		}
	}};		
	game.init();
});
			