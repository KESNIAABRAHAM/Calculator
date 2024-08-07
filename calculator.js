// set and display auto time
window.onload = setInterval(timeFunc, 1000);
function timeFunc() {
  var timescreen = document.getElementById("timescreen");
  let date = new Date();
  let time = date.toLocaleTimeString();
  timescreen.value = time;
}

//inputs
var opscreen = document.getElementById("opscreen");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var dot = document.getElementById("dot");
var zero = document.getElementById("zero");
var clear = document.getElementById("clear");
var divid = document.getElementById("division");
var multi = document.getElementById("multiplication");
var sub = document.getElementById("subtraction");
var add = document.getElementById("addition");
var clearall = document.getElementById("clearall");
var rem = document.getElementById("mod");
var percent = document.getElementById("per");
var equal = document.getElementById("equals");

function display(operand) {
  opscreen.value += operand;
  setTimeout(blink, 300);
}


function blink() {
  one.style.backgroundColor = "whitesmoke";
  two.style.backgroundColor = "whitesmoke";
  three.style.backgroundColor = "whitesmoke";
  four.style.backgroundColor = "whitesmoke";
  five.style.backgroundColor = "whitesmoke";
  six.style.backgroundColor = "whitesmoke";
  seven.style.backgroundColor = "whitesmoke";
  eight.style.backgroundColor = "whitesmoke";
  nine.style.backgroundColor = "whitesmoke";
  zero.style.backgroundColor = "whitesmoke";
  dot.style.backgroundColor = "whitesmoke";
  clear.style.backgroundColor = "whitesmoke";
  division.style.backgroundColor = "whitesmoke";
  multiplication.style.backgroundColor = "whitesmoke";
  subtraction.style.backgroundColor = "whitesmoke";
  addition.style.backgroundColor = "whitesmoke";
  clearall.style.backgroundColor = "whitesmoke";
  mod.style.backgroundColor = "whitesmoke";
  equal.style.backgroundColor = "whitesmoke";
  per.style.backgroundColor = "whitesmoke";
}
function displayone() {
  if (opscreen.value.length < 25) {
    one.style.backgroundColor = "green";
    // setTimeout(blink, 300);
    display(1);
  }
}
function displaytwo() {
  if (opscreen.value.length < 20) {
    two.style.backgroundColor = "green";
    display(2);
  }
}
function displaythree() {
  if (opscreen.value.length < 20) {
    three.style.backgroundColor = "green";
    display(3);
  }
}

function displayfour() {
  if (opscreen.value.length < 20) {
    four.style.backgroundColor = "green";
    display(4);
  }
}

function displayfive() {
  if (opscreen.value.length < 20) {
    five.style.backgroundColor = "green";
    display(5);
  }
}
function displaysix() {
  if (opscreen.value.length < 20) {
    six.style.backgroundColor = "green";
    display(6);
  }
}
function displayseven() {
  if (opscreen.value.length < 20) {
    seven.style.backgroundColor = "green";
    display(7);
  }
}

function displayeight() {
  if (opscreen.value.length < 20) {
    eight.style.backgroundColor = "green";
    display(8);
  }
}

function displaynine() {
  if (opscreen.value.length < 20) {
    nine.style.backgroundColor = "green";
    display(9);
  }
}

//dot
let strlen = opscreen.value.length;
let last = opscreen.value.charAt(strlen - 1);
function displaydot() {
  //get last value of string
  let stringlen = opscreen.value.length;
  let laststringid = stringlen - 1;
  let laststringval = opscreen.value.charAt(laststringid);

  if (
    opscreen.value.length < 25 &&
    opscreen.value != "" &&
    laststringval != "."
  ) {
    dot.style.backgroundColor = "green";
    let point = ".";
    display(point);
  }
}
// zero

function displayzero() {
  let firstval = opscreen.value[0];
  let secval = opscreen.value[1];
  if (opscreen.value.length < 25 && firstval != "0") {
    zero.style.backgroundColor = "green";

    display(0);
  } else if (
    opscreen.value.length < 25 &&
    secval != "0" &&
    opscreen.value.length > 1
  ) {
    zero.style.backgroundColor = "green";
    display(0);
  }
}
// clear last value

function clearone() {
  let strlen = opscreen.value.length;
  let last = opscreen.value.charAt(strlen - 1);
  let newstring = opscreen.value.replace(last, "");
  opscreen.value = newstring;
  clear.style.backgroundColor = "green";
  setTimeout(blink, 200);
}
// division
function displaydiv() {
  let stringlen = opscreen.value.length;
  let laststringid = stringlen - 1;
  let laststringval = opscreen.value.charAt(laststringid);
  if (
    opscreen.value.length < 20 &&
    opscreen.value.length > 0 &&
    laststringval != "*" &&
    laststringval != "/" &&
    laststringval != "-" &&
    laststringval != "+"
  ) {
    division.style.backgroundColor = "green";
    let div = "/";
    display(div);
    setTimeout(blink, 300);
  }
}

// multiplication
function displaymultiplication() {
  let stringlen = opscreen.value.length;
  let laststringid = stringlen - 1;
  let laststringval = opscreen.value.charAt(laststringid);
  if (
    opscreen.value.length < 20 &&
    opscreen.value.length > 0 &&
    laststringval != "/" &&
    laststringval != "*" &&
    laststringval != "-" &&
    laststringval != "+"
  ) {
    let mul = "*";
    multiplication.style.backgroundColor = "green";
    display(mul);
    setTimeout(blink, 300);
  }
}

//subtraction
function displaysubtraction() {
  let stringlen = opscreen.value.length;
  let laststringid = stringlen - 1;
  let laststringval = opscreen.value.charAt(laststringid);
  if (
    opscreen.value.length < 20 &&
    opscreen.value.length > 0 &&
    laststringval != "/" &&
    laststringval != "*" &&
    laststringval != "-" &&
    laststringval != "+"
  ) {
    let sub = "-";
    subtraction.style.backgroundColor = "green";
    display(sub);
    setTimeout(blink, 300);
  }
}

//addition
function displayaddition() {
  let stringlen = opscreen.value.length;
  let laststringid = stringlen - 1;
  let laststringval = opscreen.value.charAt(laststringid);
  if (
    opscreen.value.length < 20 &&
    opscreen.value.length > 0 &&
    laststringval != "/" &&
    laststringval != "*" &&
    laststringval != "-" &&
    laststringval != "+"
  ) {
    let add = "+";
    addition.style.backgroundColor = "green";
    display(add);
    setTimeout(blink, 300);
  }
}

//CA
function workclearall() {
  opscreen.value = " ";
  setTimeout(blink, 300);
  clearall.style.backgroundColor = "green";
}

//mod
function workmodulo() {
  let MOD = '%';
  let stringlen = opscreen.value.length;
  let laststringid = stringlen - 1;
  let laststringval = opscreen.value.charAt(laststringid);
  

  if (
    opscreen.value.length < 25 &&
    opscreen.value.length > 0 &&
    laststringval != "%" &&
    laststringval != "/" &&
    laststringval != "-" &&
    laststringval != "*"
  ) {
    setTimeout(blink, 300);
    mod.style.backgroundColor = "green";
    opscreen.value += MOD;
  }
}

// percent
function displaypercentage() {
  let percent = "/100*";
  let stringlen = opscreen.value.length;
  let laststringid = stringlen - 1;
  let laststringval = opscreen.value.charAt(laststringid);

  if (
    opscreen.value.length < 25 &&
    opscreen.value.length > 0 &&
    laststringval != "/100*" &&
    laststringval != "/" &&
    laststringval != "-" &&
    laststringval != "*" &&
    !opscreen.value.includes(percent)
  ) {
    
 per.style.backgroundColor = "lightgreen";

 opscreen.value += percent;

 setTimeout(blink, 300);
       
       
  }
}

// equalto
function displayequalsto() {
  let exp = opscreen.value;
  let result = eval(exp);
  opscreen.value = result;
  setTimeout(blink, 300);
  equal.style.backgroundColor = "green";
  
}
