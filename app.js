// constructors
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
	displayCard: function () {
		console.log(this.shape);
		console.log(this.fill);
		console.log(this.color);
		console.log(this.number);
	},
	checkShape: function (cardTwo, cardThree) {
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
	checkFill: function (cardTwo, cardThree) {
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
	checkColor: function (cardTwo, cardThree) {
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
	checkNumber: function (cardTwo, cardThree) {
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
	checkSet: function  (shape,fill,color,number) {
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
			alert("it's a fucking set!");
			return true;
		} else {
			console.log("not a set, you idiot");
			alert("not a set, you idiot");
			return false;
		}
	}
}

	// var cardOne = new Card(1, "square", "solid", 1, "red");
	// create a foreach function?

function instantiateCards() {
var attributesArray = []
	for (var key in cards) {
		// console.log(cards[key])
		var obj2 = cards[key]
		var obj3 = cards[key].cardNum;
		console.log(obj3)
		for (var k in obj2){
			var attr = obj2[k];
			// console.log(obj2[k]);
			// console.log(obj2.cardNum)
			// var tmp = cardOne.cards[key].obj2[k];
			// console.log(tmp)
			attributesArray.push(attr);
		}
	}
console.log(attributesArray);
}

instantiateCards();

// How do this programatically
cardOne = new Card(cards.card1.cardNum, 
				   cards.card1.shape, 
				   cards.card1.fill, 
				   cards.card1.shapeNum, 
				   cards.card1.color);

cardTwo = new Card(cards.card2.cardNum, cards.card2.shape, cards.card2.fill, cards.card2.shapeNum, cards.card2.color);
cardThree = new Card(cards.card3.cardNum, cards.card3.shape, cards.card3.fill, cards.card3.shapeNum, cards.card3.color);

// function readDomCard (Obj){
// 	for (var key in Obj) {
// 		console.log(Obj[key]);
// 	};
// }
// readDomCard(cards.card1);

/*
cardOne.checkWin(
	cardOne.checkSet(
		cardOne.checkShape(cardTwo, cardThree),
		cardOne.checkFill(cardTwo, cardThree),
		cardOne.checkNumber(cardTwo, cardThree),
		cardOne.checkColor(cardTwo, cardThree)
	)
);
*/