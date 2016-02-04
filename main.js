$(document).ready(function() { 
	// DOM STUFF

	// function Dom (card) {
	// 	this.Card = Card
	// }
	// Dom.prototype = {
	// 	createCard: function (){
	// 	}
	// }

	// grab cards on page
	var $card1 = $("#r1-c1"),
		$card2 = $("#r1-c2"),
		$card3 = $("#r1-c3"),
		$card4 = $("#r2-c1"),
		$card5 = $("#r2-c2"),
		$card6 = $("#r2-c3"),
		$card7 = $("#r3-c1"),
		$card8 = $("#r3-c2"),
		$card9 = $("#r3-c3");

	function renderCard (cardEl, cardNum, shape, fill, shapeNum, color) {
		cardEl.attr('data-card', cardNum);
		cardEl.addClass(shape);
		cardEl.addClass(fill);
		cardEl.addClass(shapeNum);
		cardEl.addClass(color);
	}

	//could also pull argurments from obj instead of instances
	renderCard($card1, cardOne.cardNum, cardOne.shape, cardOne.fill, cardOne.color);
	renderCard($card2, cardTwo.cardNum, cardTwo.shape, cardTwo.fill, cardTwo.color);
	renderCard($card3, cardThree.cardNum, cardThree.shape, cardThree.fill, cardThree.color);

/*
	// render cards
	var $test3 = $(".test")
	// addDataEl($card1, cardOne.cardNum);
	// console.log($test3.children[0].dataset.card);

	// var temp2 = $card1.children[0].dataset.card;
	// console.log(cards[temp2].shape)
	// var tempShape2 = cards[temp2].shape
*/

	var $select = $(".card"); 
	var counter = 0;

	var card1 = document.getElementById('r1-c1');
	var card2 = document.getElementById('r1-c2');
	var card3 = document.getElementById('r1-c3');

	// var temp = card1.dataset.card;
	// console.log(cards[card1.dataset.card].shape);
	console.log(cards[card1.dataset.card].shape, cards[card2.dataset.card].shape, cards[card3.dataset.card].shape)

	function checkShapes (cardOne, cardTwo, cardThree) {
		if (cardOne.shape != cardTwo.shape && cardOne.shape != cardThree.shape) {
			console.log("the shapes are all different");
			return true; 

		} else if (cardOne.shape == cardTwo.shape && cardOne.shape == cardThree.shape ) {
			console.log("the shapes are all the same");
			return true;
		} else {
			console.log("cant be set, two shapes are a shape");
			return false;
		}
	}

	checkShapes(cards[card1.dataset.card], cards[card2.dataset.card], cards[card3.dataset.card]);

	$select.on("click", function () {
		// console.log(this.children[0].dataset.card);
		var temp = this.children[0].dataset.card;
		console.log(cards[temp])
		// var tempShape = cards[temp].shape;
	})

	$card1.on("click", function(){
		var testIt = cards[$card1.dataset.card];
		console.log(testIt)
	})

	// select card
	// how check how many "selected" classes are on page?
	$select.on("click", function() {
		$(this).toggleClass("selected");
		console.log(counter);
		if (counter < 2) {
			counter++;
		} else {
			var shapeCheck = cardOne.checkShape($card2, $card3);
			var colorCheck = cardOne.checkColor($card2, $card3);
			var fillCheck = cardOne.checkFill($card2, $card3)
			var setCheck = cardOne.checkSet(shapeCheck, colorCheck, fillCheck, true);
			var winCheck = cardOne.checkWin(setCheck);
			$select.removeClass("selected");
			counter = 0;


		}
	})
	// compare 3 cards by clicking
}) //jquery end

