_____________________
questions

how to link loca .json file

how to crate protoype for obj in JQUERY


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



/*
LOG THAT FOUND ELEMENTS
(anonymous function) @ VM14084:2InjectedScript._evaluateOn @ VM13941:875InjectedScript._evaluateAndWrap @ VM13941:808InjectedScript.evaluate @ VM13941:664
cardSet[0].dataset.card
undefined
cardSet[0].getAttribute("data-card")
null
cardSet[0].getAttribute("card")
null
cardSet[0].getAttribute("data")
null
$cardSet[0].getAttribute("data-card")
VM14186:2 Uncaught ReferenceError: $cardSet is not defined(…)(anonymous function) @ VM14186:2InjectedScript._evaluateOn @ VM13941:875InjectedScript._evaluateAndWrap @ VM13941:808InjectedScript.evaluate @ VM13941:664
$(cardSet[0]).attr("data-card");
undefined
$(cardSet[0]).find(".square")
[<div id=​"r1-c1" data-card=​"card1" class=​"square solid-red red">​ ​</div>​]
$(cardSet[0]).find(".square").attr("data-card")
"card1"
$(cardSet[0]).children
(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}
$(cardSet[0]).children()
[<div id=​"r1-c1" data-card=​"card1" class=​"square solid-red red">​ ​</div>​]
$(cardSet[0]).children().attr("data-card")
"card1"
$(cardSet[0]).children().attr("class")
"square solid-red red"




**********ORINGAL OOP IDEAS***********
/*
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
*/

// How do this programatically

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






