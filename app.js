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


// instantiate cards
cardOne = new Card(cards.card1.cardNum, 
				   cards.card1.shape, 
				   cards.card1.fill, 
				   cards.card1.shapeNum, 
				   cards.card1.color
				   );

cardTwo = new Card(cards.card2.cardNum, cards.card2.shape, cards.card2.fill, cards.card2.shapeNum, cards.card2.color);
cardThree = new Card(cards.card3.cardNum, cards.card3.shape, cards.card3.fill, cards.card3.shapeNum, cards.card3.color);
cardFour = new Card(cards.card4.cardNum, cards.card4.shape, cards.card4.fill, cards.card4.shapeNum, cards.card4.color);
cardFive = new Card(cards.card15.cardNum, cards.card15.shape, cards.card15.fill, cards.card15.shapeNum, cards.card5.color);
cardSix = new Card(cards.card6.cardNum, cards.card6.shape, cards.card6.fill, cards.card6.shapeNum, cards.card6.color);
cardSeven = new Card(cards.card17.cardNum, cards.card17.shape, cards.card17.fill, cards.card17.shapeNum, cards.card17.color);
cardEight = new Card(cards.card8.cardNum, cards.card8.shape, cards.card8.fill, cards.card8.shapeNum, cards.card8.color);
cardNine = new Card(cards.card19.cardNum, cards.card19.shape, cards.card19.fill, cards.card19.shapeNum, cards.card19.color);


var cardObjArray = [];
var cardNumValArray = [];
var cardShapeValArray = [];
var cardFillValArray = [];
var cardColorValArray = [];

function instantiateCards() {
	for (var key in cards) {
		// console.log(cards[key])
		var obj = cards[key]
		var nums = cards[key].cardNum;
		var shapes = cards[key].shape;
		var fills = cards[key].fill;
		var colors = cards[key].color;

		cardNumValArray.push(nums);
		cardShapeValArray.push(shapes);
		cardFillValArray.push(fills);
		cardColorValArray.push(colors); 

		Card.prototype = new Card(nums, shapes, fills, colors);

		// console.log(obj3)
		// for (var k in obj2){
		// 	var attr = obj2[k];
		// 	console.log(obj2[k]);
		// 	console.log(obj2.cardNum)
		// 	attributesArray.push(attr);
		// }
	}
console.log(cardShapeValArray);
console.log(cardFillValArray);
console.log(cardColorValArray);
}

instantiateCards();
