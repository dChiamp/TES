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

function checkInsanity (nums, colors, shapes, fill) {
    if (fill == true){
        if ( shapes true) {
            if (colors  ==true){
                if (nums ==true || nums ==false) {
                    console.log("set")
                } else {
                    console.log("no set")
                }
            } else {
                console.log("no Set");
            }
        } else {
            console.log("no Set");
          }
    } else {
        console.log("no Set");
    }
}
function checkset (nums, colors, shapes, fill) {
	if (this.checknums || !this.checkNumbers) {
	} if (this.checkColors) {
		if (this.checkShapes) {
			if(this.checkFill) {
				console.log('set');
			}
		}
	}
	else {
		console.log("not set");
	}
	// if (this.checkColors || !this.checkNumbers){
	// 	if (this.checkNums) {
	// 		if (this.checkShapes) {
	// 			if(this.checkFill) {
	// 				console.log('set');
	// 			}
	// 		}
	// 	}
	// }
	// else {
	// 	console.log("not set");
	// }
	// if (this.checkShapes || !this.checkNumbers){
	// 	if (this.checkNums) {
	// 		if (this.checkShapes) {
	// 			if(this.checkFill) {
	// 				console.log('set');
	// 			}
	// 		}
	// 	}
	// }
	// else {
	// 	console.log("not set");
	// }

}

checkSet: function checkSet (s,c,f,n) {
		var shape = (s == true) ? "set": "not set";
		console.log("")
		return shape;

		var color = (c == true) ? "set" : "not set";
		return color;
		var fill = (f == true) ? "set" : "not set";
		return fill;
		var number = (n == true) ? "set" : "not set";
		return number;
	}


function checkSet() {
	// check if set
	// this shits gunna be hard

	if (cardOne.color != cardTwo.color != cardThree.color || cardOne.color == cardTwo.color == cardThree.color) {
		// colors are ok
	} else if (cardOne.shape != cardTwo.shape != cardThree.shape || cardOne.shape == cardTwo.shape == cardThree.shape ){
		// shapes are ok
	} else if (cardOne.number != cardTwo.number != cardThree.number || cardOne.number == cardTwo.number == cardThree.number ){
		// numbers are ok
	} else if (cardOne.fill != cardTwo.fill != cardThree.fill || cardOne.fill == cardTwo.fill == cardThree.fill ){
		// fill are ok
	}
}

function checkColors(cardTwo, cardThree) {
	if (this.color != cardTwo.color && this.color != cardThree.color) {}
		console.log("the colors are different");
		return true;
	} else if (this.color != cardTwo.color && this.color != cardThree.color) {
		console.log("the colors are the same");
		return true;
	} else {
		// if two are similar, and one is different, it cannot be a set;
		console.log("cant be set");
		return false;
	}
}

function checkNumbers (cardTwo, cardThree) {
	if (this.number != cardTwo.number && this.number != cardThree.number) {
		console.log("the numbers are different");
		return true;
	} else if (this.shapeNum == cardThree.shapeNum) {
		console.log("the numbers are the same");
		return true;
	} else {
		console.log("cant be set");
		return false;
	}
}

function checkShapes (cardTwo, cardThree) {
	if (this.number != cardTwo.number && this.number != cardThree.number) {
		console.log("the numbers are different");
		return true;
	} else if (this.shapeNum == cardThree.shapeNum) {
		console.log("the numbers are the same") 
		return true;
	} else {
		console.log("cant be set");
		return false;
	}

}

function checkFill (cardTwo, cardThree) {
	if (this.fill != cardTwo.fill && this.fill != cardThree.fill) {
		console.log("the numbers are different");
		return true;
	} else if (this.fill == cardThree.fill && this.fill == cardThree.fill) {
		console.log("the numbers are the same") 
		return true;
	} else {
		console.log("cant be set");
		return false;
	}

}



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


/*CSS shapes 
.triangle {
	float: none;
	margin: 0 auto;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	// want to abstract color out
	border-bottom: 100px solid $blue;
}

.circle{
	float: none;
	margin: 0 auto;
	width: 100px;
	height: 100px;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	// want to abstract color out
	background: $green;
}

.square {
	float: none;
	margin: 0 auto;
	width: 100px;
	height: 100px;
	// want to abstract color out
	// define as mixin and @include
	background: $red;
}

@mixin triangle {
	float: none;
	margin: 0 auto;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid $blue;
}

@mixin triangle-color($color) {
	border-bottom: 100px solid $color;

}

*/

_____________________
questions

how to link loca .json file

how to crate protoype for obj in JQUERY










