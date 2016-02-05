$(document).ready(function() { 
	// DOM STUFF

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

	// render cards
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
	renderCard($card4, cardFour.cardNum, cardFour.shape, cardFour.fill, cardFour.color);
	renderCard($card5, cardFive.cardNum, cardFive.shape, cardFive.fill, cardFive.color);
	renderCard($card6, cardSix.cardNum, cardSix.shape, cardSix.fill, cardSix.color);
	renderCard($card7, cardSeven.cardNum, cardSeven.shape, cardSeven.fill, cardSeven.color);
	renderCard($card8, cardEight.cardNum, cardEight.shape, cardEight.fill, cardEight.color);
	renderCard($card9, cardNine.cardNum, cardNine.shape, cardNine.fill, cardNine.color);

	// grab cards by id
	var card1 = document.getElementById('r1-c1'),
	    card2 = document.getElementById('r1-c2'),
	    card3 = document.getElementById('r1-c3'),
	    card4 = document.getElementById('r2-c1'),
	    card5 = document.getElementById('r2-c2'),
	    card6 = document.getElementById('r2-c3'),
	    card7 = document.getElementById('r3-c1'),
	    card8 = document.getElementById('r3-c2'),
	    card9 = document.getElementById('r3-c3');

	 // grab cards data obj from html
 	var card1Dom = cards[card1.dataset.card],
		card2Dom = cards[card2.dataset.card],
		card3Dom = cards[card3.dataset.card],
		card4Dom = cards[card4.dataset.card],
		card5Dom = cards[card5.dataset.card],
		card6Dom = cards[card6.dataset.card],
		card7Dom = cards[card7.dataset.card],
		card8Dom = cards[card8.dataset.card],
		card9Dom = cards[card9.dataset.card];

	// console.log(cards[card1.dataset.card]);

	var $select = $(".card"); 
	var cardSet = [];

	var counter = 0;
	$select.on("click", function() {
			// select card
			$(this).toggleClass("selected");
			// push data bound on html to array for parsing
			cardSet.push(this);
			console.log(cardSet);
		if (counter < 2) {
			counter++;
		} else {
			// parse array of objs for each click
			var card1ArrayIndex = $(cardSet[0]).children().attr("class");
			var card2ArrayIndex = $(cardSet[1]).children().attr("class");
			var card3ArrayIndex = $(cardSet[2]).children().attr("class");

			var card1AttrShape = card1ArrayIndex.split(" ")[0];
			var card1AttrFill = card1ArrayIndex.split(" ")[1].split("-")[0];
			var card1AttrColor = card1ArrayIndex.split(" ")[2];

			var card2AttrShape = card2ArrayIndex.split(" ")[0];
			var card2AttrFill = card2ArrayIndex.split(" ")[1].split("-")[0];
			var card2AttrColor = card2ArrayIndex.split(" ")[2];

			var card3AttrShape = card3ArrayIndex.split(" ")[0];
			var card3AttrFill = card3ArrayIndex.split(" ")[1].split("-")[0];
			var card3AttrColor = card3ArrayIndex.split(" ")[2];

			console.log(card1AttrShape);
			console.log(card1AttrFill);
			console.log(card1AttrColor);

			var shapeCheck = checkShape(card1AttrShape, card2AttrShape, card3AttrShape);
			console.log(shapeCheck);
			var fillCheck = checkFill(card1AttrFill, card2AttrFill, card3AttrFill);
			var colorCheck = checkColor(card1AttrColor, card2AttrColor, card3AttrColor);
			var setCheck = checkSet(shapeCheck, colorCheck, fillCheck, true);
			var winCheck = checkWin(setCheck);

			$select.removeClass("selected");
			counter = 0;
			cardSet = [];
			console.clear();
		}
	})
	// compare 3 cards by clicking
}) //jquery end

