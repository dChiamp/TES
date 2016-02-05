$(document).ready(function() { 
	// DOM STUFF

	// grab cards on page by ids
	var $card1 = $("#r1-c1"), $card2 = $("#r1-c2"), $card3 = $("#r1-c3"),
		$card4 = $("#r2-c1"), $card5 = $("#r2-c2"), $card6 = $("#r2-c3"),
		$card7 = $("#r3-c1"), $card8 = $("#r3-c2"), $card9 = $("#r3-c3");

	// render cards and bind json data to DOM
	function renderCard (cardEl, cardNum, shape, fill, shapeNum, color) {
		cardEl.attr('data-card', cardNum);
		cardEl.addClass(shape);
		cardEl.addClass(fill);
		cardEl.addClass(shapeNum);
		cardEl.addClass(color);
	}

	var boardSpotArr = [$card1, $card2, $card3, 
						$card4, $card5, $card6, 
						$card7, $card8, $card9];

	// to get length
	var cardNumValArray = [];
	
	function dealNineCards () {
		for (i=0; i<9; i++){
			var rando = Math.floor(Math.random() * cardNumValArray.length);
			console.log(rando);
			var cardNumStr = cardNumValArray[rando];
			var cardData = cards[cardNumStr];

			renderCard(boardSpotArr[i], cardData.cardNum, cardData.shape, 
						cardData.fill, cardData.shapeNum, cardData.color);
		}
	}

	function startGame() {
		for (var key in cards) {
			var nums = cards[key].cardNum;
			cardNumValArray.push(nums);
		} 
		console.log("this is the length", cardNumValArray.length);

		dealNineCards();
	}

	startGame();

	// reset
	$resetBtn = $("#reset-btn");
	$resetBtn.on("click", function (e) {
		e.preventDefault();
		location.reload();
		startGame();
	})

	var $select = $(".card"); 
	var cardSet = [];

	//click on cards to compare	 

	// somewhere in here is prob where to limit the clicks
	var counter = 0;
	$select.on("click", function() {
		// $(e.target).off()
		// select card
		$(this).toggleClass("selected");
		$(this).addClass("clicked");
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

			// win logic
			var shapeCheck = checkShape(card1AttrShape, card2AttrShape, card3AttrShape);
			console.log(shapeCheck);
			var fillCheck = checkFill(card1AttrFill, card2AttrFill, card3AttrFill);
			var colorCheck = checkColor(card1AttrColor, card2AttrColor, card3AttrColor);
			var setCheck = checkSet(shapeCheck, colorCheck, fillCheck, true);
			var winCheck = checkWin(setCheck);
			// clear
			$select.removeClass("selected");
			counter = 0;
			cardSet = [];
			console.clear();
		}
	})
}) //jquery end

