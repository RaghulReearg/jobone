var cont = document.getElementById("cont");
var ques = document.getElementById("ques");

var output = "";
var question = "";
var questions = ["question 1", "Question 2", "question 3"];
var options = [
  ["option1", "option2", "option3", "option4"],
  ["optiona", "optionb", "optionc", "optiond"],
  ["optionz", "optionx", "optiony", "optionw"]
];
for (var i = 0; i < 3; i++) {
  var j = 0;
  cont.innerHTML = output += `${
    questions[i]
  }<br><input type="radio" value="1" name="choice">${
    options[i][j]
  }</input><input type="radio" value="2" name="choice">${
    options[i][j + 1]
  }</input><input type="radio" value="3" name="choice">${
    options[i][j + 2]
  }</input><br/>`;
}
var radios = document.getElementsByName("choice");
console.log(radios);
for (var i = 0; i < radios.length; i++) {
  radios[i].onclick = function() {
    document.getElementById("choiceLabel").innerText = this.value;
  };
}



if (questionnum == questions.length - 1) {
  document.getElementById("btn").innerHTML =
    "<button class='mybtn'>Submit Answer</buttom>";
}