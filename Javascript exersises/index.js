//creating a function

var elem = document.getElementById("jstest");
function myFunction1(x, y = 2) {
 
  return x * y;
}

document.getElementById("jsFunction").innerHTML = myFunction1(4); //callback the function

function findMax() {
  let max = -Infinity; //let lets u declare variables thata re used in that scope of the block
  for (let i = 0; i < arguments.length; i++) {
    //funksioni for me parametrat
    if (arguments[i] > max) {
      //nqs array[i] > max qe mban vleren me te madhe te tabeles ath kthen nr m t madhe te ruajtur ne variablen max
      max = arguments[i];
    }
  }
  return max; // kthejm variablen max te funks qe mban elementin me te madh
}
document.getElementById("jsFunction1").innerHTML = findMax(4, 5, 6); //therrasim funksionin duke e kapur me id

//emertojme funksionin
function sumAll() {
  let sum = 0; //krijojme variablen sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum; //kthejme shumen
}
document.getElementById("jsFunction2").innerText = sumAll(
  1,
  123,
  500,
  115,
  44,
  88
);

//krijojme nje objekt
const myObject = {
  firstName: "Laura",
  lastName: "Toska",
  fullName: function () {
  
    return this.firstName + " " + this.lastName; //kthejme vleren e funskionit
  },
};

document.getElementById("jsFunction3").innerHTML = myObject.fullName(); //therasim funksionin me ane te DOM dhe mbushim html me innerHTML

//ne kete rast funksioni merr rolin e nje konsstruktori
function myFunction(arg1, arg2) {
  this.firstName = arg1; //perdorim argumente
  this.lastName = arg2;
}

const myObj = new myFunction("Laura", "Toska");
document.getElementById("jsFunction4").innerHTML = myObj.firstName;

//krijojme nje konstruktor
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

//i japim vlera objektit
const person1 = {
  firstName: "Sara",
  lastName: "Malaj",
};
//objekti 2
const person2 = {
  firstName: "Christopher",
  lastName: "Johnson",
};

document.getElementById("jsFunction5").innerHTML =
  person.fullName.call(person2); //e therrasim funksionin me ane te funks call

//krijojme nje tabele
const persons = ["Jora", "Igli", "Kejdi"];
document.getElementById("jsArray").innerHTML = persons;

//krijojme tabelen
const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
document.getElementById("jsArray1").innerHTML = fruits.length; //returns length

//krijojme tabelen
const food = ["Milk", "Bread", "Cake", "Candy"];
let fLen = food.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + food[i] + "</li>";
}
text += "</ul>";

document.getElementById("jsArray2").innerHTML = text; //kthejme rezultatin

//kemi fruits.string fruits.join fruits.sort fruits.shift etc
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("jsArray3").innerHTML = points;
//points.sort sorts the elements kurse
function pointsFunction() {
  points.sort(function (a, b) {
    return b - a; //kthejme the inverted array
  });
  document.getElementById("jsArray3").innerHTML = points;
}

const numbers = [40, 100, 1, 5, 25, 10];
document.getElementById("jsArray4").innerHTML = numbers;

function pointsFunction2() {
  for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i); //math.floor return the largest integer less than or equal given to a number
    let k = numbers[i]; //kap elementet e rreshtit te tabeles
    numbers[i] = numbers[j]; //swaps
    numbers[j] = k; //ruan vlerat e kthyera ne nje variabel  k
  }
  document.getElementById("jsArray4").innerHTML = numbers;
}

const grades = [4, 5, 7, 8, 9, 6, 10];
document.getElementById("jsArray5").innerHTML = myArrayMax(grades);

function myArrayMax(arr) {
  //funskioni i tabeles
  let len = arr.length; //gjatesia e tabeles
  let max = +Infinity;
  while (len--) {
    //while len zbritet
    if (arr[len] < max) {
      //nqs len i arr eshte me i madh se max
      max = arr[len]; //ath max = arr[len]
    }
  }
  return max; //kthejme funks
}
