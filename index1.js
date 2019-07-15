var questions = [
  "Name of the screen that recognizes touch input is :",
  "Computer Moniter is also known as : ",
  "Which one of these stores more data than a DVD ? ",
  "Eight Bits make up a ?",
  "The printed output from a computer is called ?"
];
var options = [
  ["Recog screen", "Touch Screen", "Point Screen", "Android Screen"],
  ["DVD", "UVD", "VDU", "CCTV"],
  ["Red Ray Disk", "CD Rom", "Blue Ray Disk", "Floppy"],
  ["Byte", "Megabyte", "Kilobyte", "None"],
  ["Copy", "Paper", "SoftCopy", "HardCopy"]
];
var answers = [1, 2, 2, 0];
var useranswer = [0, 0, 0, 0];
function checkanswer() {
  let correct = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == useranswer[i]) {
      correct++;
    }
  }
  document.getElementById("result").textContent =
    "You have " + correct + " Correct Answers.";
}

function addf(answer, num) {
  //   if (useranswer.length == 0) {
  //     useranswer.push(answer);
  //   } else if (useranswer.length != 0 && num == 0) {
  //     useranswer.pop();
  //     useranswer.push(answer);
  console.log(answer);
  document.getElementById("right").style.display = "block";
  document.getElementsByTagName("h3")[answer].classList.add("changeback");
  for (var i = 0; i < 4; i++) {
    if (i != answer) {
      document.getElementsByTagName("h3")[i].className = "";
    }
  }
  useranswer[num] = answer;
  //   console.log(useranswer);
}
var questcontainer = document.getElementById("question");
var questionnum = 0;
var btn = document.getElementById("btn");
var optioncontainer = document.getElementById("options");
questcontainer.innerHTML = `<h4> 1: ${questions[questionnum]}</h4>`;
var out = "";
for (var i = 0; i < 4; i++) {
  out += `<h3 onclick='addf(${i},${0})' >${options[0][i]}</h3>`;
}
optioncontainer.innerHTML = out;

//right siede

var right = document.getElementById("right").addEventListener("click", () => {
  document.getElementById("right").style.display = "none";
  questionnum++;
  if (questionnum > questions.length - 1) {
    questionnum--;
    return;
  }
  questcontainer.innerHTML = `<h4> ${questionnum + 1}: ${
    questions[questionnum]
  }</h4>`;
  var out = "";
  for (var i = 0; i < 4; i++) {
    out += `<h3 onclick='addf(${i},${questionnum})'>${
      options[questionnum][i]
    }</h3>`;
  }
  optioncontainer.innerHTML = out;
  if (questionnum == questions.length - 1) {
    btn.innerHTML =
      "<button  data-target='modal1' class=' modal-trigger mybtn' onclick='checkanswer()'>Submit Answers</button>";
  }

  if (questionnum > 0) {
    document.getElementById("left").style.display = "block";
  } else {
    document.getElementById("left").style.display = "none";
  }
});

//lrft side
var left = document.getElementById("left").addEventListener("click", () => {
  questionnum--;
  if (questionnum < 0) {
    questionnum++;
    return;
  }
  questcontainer.innerHTML = `<h4> ${questionnum + 1}: ${
    questions[questionnum]
  }</h4>`;
  var out = "";
  for (var i = 0; i < 4; i++) {
    out += `<h3 onclick='addf(${i},${questionnum})'>${
      options[questionnum][i]
    }</h3>`;
  }
  optioncontainer.innerHTML = out;
  if (questionnum == 0) {
    document.getElementById("left").style.display = "none";
  }
});
