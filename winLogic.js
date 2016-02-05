// Win Logic
function checkShape (shape1, shape2, shape3) {
		if (shape1 != shape2 && shape2 != shape3 && shape3 != shape1) {
			console.log("the shapes are all different");
			return true;
		} else if (shape1 == shape2 && shape2 == shape3 && shape3 == shape1) {
			console.log("the shapes are all the same");
			return true;
		} else {
			console.log("cant be set, two shapes are the same");
			return false;
		}
}

function checkFill (fill1, fill2, fill3) {
		if (fill1 != fill2 && fill1 != fill3 && fill2 != fill3) {
			console.log("the fills are all different");
			return true;
		} else if (fill1 == fill2 && fill1 == fill3 && fill2 == fill3 ) {
			console.log("the fills are all the same");
			return true;
		} else {
			console.log("cant be set, two fills are the same");
			return false;
		}
}

function checkColor (color1, color2, color3) {
		if (color1 != color2 && color1 != color3 && color2 != color3) {
			console.log("the colors are all different");
			return true;
		} else if (color1 == color2 && color1 == color3 && color2 == color3) {
			console.log("the colors are all the same");
			return true;
		} else {
			console.log("cant be a set, two colors are the same");
			return false;
		}
}

function checkSet (shape,fill,color,number) {
	    if (shape == true && fill == true && color == true && number == true){
            console.log("set!!!")
            return true;
        } else {
            console.log("not a set")
            return false;
	    }
	}

function checkWin (checkSet) {
		if (checkSet == true) {
			console.log("it's a fucking set!");
			alert("it's a set!");
			return true;
		} else {
			console.log("not a set, you idiot");
			alert("not a set, try again :( ");
			return false;
		}
	}


/*
only doing singles rn

function checkNumber (cardOne, cardTwo, cardThree) {
		if (cardOne != cardTwo && cardOne != cardThree) {
			console.log("the numbers are all different");
			return true;
		} else if (cardOne == cardTwo && cardOne == cardThree ) {
			console.log("the numbers are all the same");
			return true;
		} else {
			console.log("cant be set, two numbers are a shape");
			return false;
		}
	}
*/