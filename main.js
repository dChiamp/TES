$(document).ready(function() { 

	function Card(cardNum, shape, fill, number, color) {
		this.cardNum = cardNum;
		this.shape = shape;
		this.fill = fill;
		this.number = number; 
		this.color = color;
		// position: row#/col#
		// card#: xx/81
	}

	Card.prototype = {
		// addShape: function addShape (shape) {
		// 	this.class(shape);
		// },
		displayCard: function displayCard () {
			console.log(this.shape);
			console.log(this.fill);
			console.log(this.color);
			console.log(this.number);
		},
		checkShapes: function checkShape (cardTwo, cardThree) {
			if (this.shape != cardTwo.shape && this.shape != cardThree.shape) {
				console.log("the shapes are all different");
				return true;
			} else if (this.shape == cardTwo.shape && this.shape == cardThree.shape ) {
				console.log("the shapes are all the same");
				return true;
			} else {
				console.log("cant be set, two shapes are the same");
				return false;
			}
		},
		checkFill: function checkFill(cardTwo, cardThree) {
			if (this.fill != cardTwo.fill && this.fill != cardThree.fill) {
				console.log("the fills are all different");
				return true;
			} else if (this.fill == cardTwo.fill && this.fill == cardThree.fill ) {
				console.log("the fills are all the same");
				return true;
			} else {
				console.log("cant be set, two fills are the same");
				return false;
			}
		},
		checkColor: function checkColor(cardTwo, cardThree) {
			if (this.color != cardTwo.color && this.color != cardThree.color) {
				console.log("the colors are all different");
				return true;
			} else if (this.color == cardTwo.color && this.color == cardThree.color ) {
				console.log("the colors are all the same");
				return true;
			} else {
				console.log("cant be set, two colors are the same");
				return false;
			}
		},
		checkNumber: function checkNumber(cardTwo, cardThree) {
			if (this.number != cardTwo.number && this.number != cardThree.number) {
				console.log("the numbers are all different");
				return true;
			} else if (this.number == cardTwo.number && this.number == cardThree.number ) {
				console.log("the numbers are all the same");
				return true;
			} else {
				console.log("cant be set, two numbers are a shape");
				return false;
			}
		},
		checkSet: function checkSet (shape,fill,color,number) {
		    if (shape == true && fill == true && color == true && number == true){
                console.log("set!!!")
                return true;
            } else {
                console.log("not a set")
                return false;
		    }
		},
		checkWin: function (checkSet) {
			if (checkSet == true) {
				console.log("it's a fucking set!");
				return true;
			} else {
				console.log("not a set, you idiot");
				return false;
			}
		}
	}

	// var cardOne = new Card(1, "square", "solid", 1, "red");
	// create a foreach function?

	cardOne = new Card(cards.card1.cardNum, 
						cards.card1.shape, 
						cards.card1.fill,
						cards.card1.shapeNum,
						cards.card1.color
					);

	cardTwo = new Card(cards.card2.cardNum, 
						cards.card2.shape, 
						cards.card2.fill,
						cards.card2.shapeNum,
						cards.card2.color
					);

	cardThree = new Card(cards.card3.cardNum, 
						cards.card3.shape, 
						cards.card3.fill,
						cards.card3.shapeNum,
						cards.card3.color
					); 

	cardFour = new Card(cards.card4.cardNum, 
						cards.card4.shape, 
						cards.card4.fill,
						cards.card4.shapeNum,
						cards.card4.color
					);

	cardFive = new Card(cards.card5.cardNum, 
						cards.card5.shape, 
						cards.card5.fill,
						cards.card5.shapeNum,
						cards.card5.color
					);
	cardSix = new Card(cards.card6.cardNum, 
						cards.card6.shape,
						cards.card6.fill,
						cards.card6.shapeNum,
						cards.card6.color
					);

	cardOne.checkWin(
		cardOne.checkSet(
			cardOne.checkShapes(cardTwo, cardThree),
			cardOne.checkFill(cardTwo, cardThree),
			cardOne.checkNumber(cardTwo, cardThree),
			cardOne.checkColor(cardTwo, cardThree)
		)
	);

	var $select = $(".card"); 
	var counter = 0;
	// select card
	// how check how many "selected" classes are on page?
	$select.on("click", function() {
		$(this).toggleClass("selected");
		if (counter < 3) {
			counter++;
		} else {
			counter = 1;
		}
		console.log(counter);
	})

	var $card4 = $("#r2-c1");
	var $card5 = $("#r2-c2");
	var $card6 = $("#r2-c3");

	function addCardNum (card, cardNum) {
		card.addClass(cardNum);
	}

	function addShape (card, shape) {
		card.addClass(shape);
	}

	function addFill (card, fill) {
		card.addClass(fill);
	}

	function addShapeNum (card, shapeNum) {
		card.addClass(shapeNum);
	}

	function addColor (card, color){
		card.addClass(color);
	}

	// maybe use these, need to add to protoype
	// but somehow use jquery also
	
	addShape($card4, cardFour.shape);
	addColor($card4, cardFour.color);
	
	addShape($card5, cardFive.shape);
	addColor($card5, cardFive.color);

	// addShape($card6, cardSix.shape);
	// addColor($card6, cardSix.color);
})

var cards = {
	card1: {
		cardNum: 1,
		shape: "square",
		fill: "solid",
		shapeNum: 1,
		color: "red"
	},
	card2: {
		cardNum: 2,
		shape: "triangle" ,
		fill: "solid",
		shapeNum: 1,
		color: "blue"
	},
	card3: {
		cardNum: 3,
		shape: "circle" ,
		fill: "solid",
		shapeNum: 1,
		color: "green"
	},
	card4: {
		cardNum: 4,
		shape: "circle" ,
		fill: "solid",
		shapeNum: 3,
		color: "red"
	},
	card5: {
		cardNum: 5,
		shape: "square" ,
		fill: "solid",
		shapeNum: 2,
		color: "blue"
	},
	card6: {
		cardNum: 6,
		shape: "triangle",
		fill: "solid",
		shapeNum: 2,
		color: "green"
	}
}

// $.getScript("cards.js", function(data) {
// 	console.log(data);
	// wtf? not allowing local file
// })
