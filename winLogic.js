// Win Logic
function checkDimension (shape1, shape2, shape3) {
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
		alert("Great job, that's a set!");
		return true;
	} else {
		console.log("not a set, you idiot");
		alert("That's not a set, try again :( ");
		return false;
	}
}