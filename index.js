var rectangle= {
      width: 200,
      height: 100
}

function calcArEa() {
  var width = rectangle.width;
  var height = rectangle.height;
  var results = width * height;
  return results;
}

var theArEa = calcArEa();
console.log("the area of the rectangle is " + theArEa);

var rectangle= {
      width: 200,
      height: 100
}

function calcPeRim() {
  var width = rectangle.width;
  var height = rectangle.height;
  var results = width + height + width + height;
  return results;
}

var theperim = calcPeRim();
console.log("the perimiter of the rectangle is " + theperim);