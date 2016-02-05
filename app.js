// constructors
var gameDeck = []


var cardObjArray = [];
var cardNumValArray = [];
var cardShapeValArray = [];
var cardFillValArray = [];
var cardColorValArray = [];
var cardCounter = 0

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

		} 


		// Card.prototype = new Card(nums, shapes, fills, colors);

		// console.log(obj3)
		// for (var k in obj2){
		// 	var attr = obj2[k];
		// 	console.log(obj2[k]);
		// 	console.log(obj2.cardNum)
		// 	attributesArray.push(attr);
		// }
	

console.log(cardShapeValArray);
console.log(cardFillValArray);
console.log(cardColorValArray);
}

instantiateCards();
