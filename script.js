function test() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var D = ((b*b)-4*a*c);
  var x1 = (-b+Math.sqrt(D))/(2*a);
  var x2 = (-b-Math.sqrt(D))/(2*a);
  var x1x2 = -b/(2*a);
  var cx1x2 = (Math.sqrt((b*b-4*a*c)*-1))/(2*a)
  if(D > 0) {
    document.getElementById("answer1").innerHTML = "x1 = " + x1;
    document.getElementById("answer").innerHTML = "x2 = " + x2;
  } else if(D == 0) {
    document.getElementById("answer1").innerHTML = "X = " + x1x2;
    document.getElementById("answer").innerHTML = "";
  } else {
    document.getElementById("answer1").innerHTML = "x1 = " + x1x2 + "+" + cx1x2 + "i";
    document.getElementById("answer").innerHTML = "x2 = " + x1x2 + "-" + cx1x2 + "i";
  }
}
