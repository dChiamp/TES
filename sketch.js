// want it to work to on mobile too
// good project to use bootstrap and SASS
// def get some CSS3 animations poppin off

// create board grid (3x3 or 4x3)
// create cards
	// make css card template
	// add attributes based off of card Objects
			
		// make a div
		// give it class of card
		// add another div
		// add classes from card Obj to this div

// should be 81 cards in total?

// make sure theres at least one set
// click on a card to get info (JQUERY)
	// click on three cards, check if set
		// alert if true / false
// if true remove cards from board
// !! keep track of cards !!
// add a point to scoreboard
// check board to make sure there are still sets
	// if yes keep playing until none
// fill in with remaining cards
// repeat

// template for cards
var cardTemplate = {
	shape: ["square", "circle", "triangle" ],
	fill: ["none", "solid", "stripe"],
	number: [1,2,3],
	color: ["red", "green", "blue"]
}

// make JSOn file with all 81 cards
// 

// constructor to make cards
// will i have to hard code 81 cards? buy the game and find the pattern?
function Card(shape, fill, number, color) {
	this.shape = shape;
	this.fill = fill;
	this.number = number; 
	this.color = color
	// position: row#/col#
	// card#: xx/81

}

// an example of a set 
var carOne = new Card() {
	shape: ["square"],
	fill: ["none"],
	number: [1],
	color: ["red"]
}
// prop better way to make cards
var cardOne = new Card("square", "none", 1, "color");

var red = $("#color-blue");

function renderCard () {
// apply CSS classes to style each card
	/*
	cardOne.addClass = "card"
	if (card.color = red) {
		this.addClass = red
	}

	if (card.fill = fill) {
		etc
	}
	*/
}

function renderCard () {
	var cardTest = document.createElement("div")
	cardTest.class = "card"
}


function drawBoard () {
	// create 9 cards , 3x3
	// make sure there are at least 2 sets
	// 
}

// html 
// can use simiilar table grid to tictactoe
// 

function drawCard () {
	// create style template 
}

function SelectCards () {
	// "highlight" card and get info
}

/*
LOGIC RULES:
They all have the same color, or they have three different colors.
They all have the same shape, or they have three different shape.
They all have the same number, or they have three different numbers.
They all have the same fill, or they have three different fill.


*/

// card object instances
/*
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
*/







function removeCards () {
	// remove winning set
}

function countCards () {
	// gunna need to keep track of cards
}

function addScore () {
	// add scores
}

function deal () {
	// deal more cards
}

// CSS HTML
// gunna need some real css shit
// IDs for every dimension: 3 x 4 = 12 IDs

// prob use SASS bc this is a great opportunity


// CSS shapes 

// BINDING DATA
function bindData (cardDom, cardObj){
		cardDom.data = cardObj;
	}

	// bind Card Obj Instance info to HTML el
	bindData($card1, cards.card1);
	// console.log(cards.card1.shape);
	
	// console.log(cardsArray[0].shape);
	
	// bindData($card2, cardTwo);
	console.log($card1.data) //logs ok
	// console.log($card2.data)

	// retrieve Card Obj data from html
	$card1.on("click", function () {
		console.log($card1.data);
		// test = this.children[0].dataset('card');
	})

	// $card1.data = cards.card1;
	// console.log($card1.data);

_____________________
questions

how to link loca .json file

how to crate protoype for obj in JQUERY










