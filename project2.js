function nextPage() {
window.location.href="page1.html";
}
function prevPage() {
window.location.href="index.html";
}
function nextPage2() {
window.location.href="page2.html";
}
function prevPage1() {
window.location.href="page1.html";
}
function nextPage3() {
window.location.href="page3.html";
}
function prevPage2() {
window.location.href="page2.html";
}
function finalPage() {
window.location.href="results.html";
}
function prevPage3() {
window.location.href="page3.html";
}
function testAnswer1() {
var ans1=document.getElementById("answer1").value;
  if (ans1 == "81648") {
  document.getElementById("answer1Group").innerHTML="Correct";
  document.getElementById("answer1Group").classList.add("has-success");
  } else {
  document.getElementById("answer1Group").innerHTML="Incorrect";
  document.getElementById("answer1Group").classList.add("has-error");
  document.getElementById("answer1Error").classList.remove("hidden-message");
  document.getElementById("answer1Error").classList.add("shown-message");
  }
}

function testAnswer3() {
var ans3=document.getElementById("answer3").value;
  if (ans3 == "257144") {
  document.getElementById("answer3Group").innerHTML="Correct";
  document.getElementById("answer3Group").classList.add("has-success");
  } else {
  document.getElementById("answer3Group").innerHTML="Incorrect";
  document.getElementById("answer3Group").classList.add("has-error");
  document.getElementById("answer3Error").classList.remove("hidden-message");
  document.getElementById("answer3Error").classList.add("shown-message");
  }
}

function testAnswer5() {
var ans5=document.getElementById("answer5").value;
  if (ans5 == "91620") {
  document.getElementById("answer5Group").innerHTML="Correct";
  document.getElementById("answer5Group").classList.add("has-success");
  } else {
  document.getElementById("answer5Group").innerHTML="Incorrect";
  document.getElementById("answer5Group").classList.add("has-error");
  document.getElementById("answer5Error").classList.remove("hidden-message");
  document.getElementById("answer5Error").classList.add("shown-message");
  }
}
