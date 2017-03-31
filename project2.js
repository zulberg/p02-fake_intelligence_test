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
  if (isNaN(ans1) == true) {
    alert("You must enter a number.");
  }
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
function testAnswer2() {
  var ans2=document.getElementById("answer2").value;
  if (isNaN(ans2) == true) {
  alert("You must enter a number.");
  }
  if (ans2 == "257144") {
  document.getElementById("answer2Group").innerHTML="Correct";
  document.getElementById("answer2Group").classList.add("has-success");
  } else {
  document.getElementById("answer2Group").innerHTML="Incorrect";
  document.getElementById("answer2Group").classList.add("has-error");
  document.getElementById("answer2Error").classList.remove("hidden-message");
  document.getElementById("answer2Error").classList.add("shown-message");
  }
}

function testAnswer3() {
  var ans3=document.getElementById("answer3").value;
  if (isNaN(ans3) == true) {
  alert("You must enter a number.");
  }
  if (ans3 == "91620") {
  document.getElementById("answer3Group").innerHTML="Correct";
  document.getElementById("answer3Group").classList.add("has-success");
  } else {
  document.getElementById("answer3Group").innerHTML="Incorrect";
  document.getElementById("answer3Group").classList.add("has-error");
  document.getElementById("answer3Error").classList.remove("hidden-message");
  document.getElementById("answer3Error").classList.add("shown-message");
  }
}
function storeAnswer() {
  var numCorrect=0;
  var ans1;
  var ans2;
  var ans3;
  if (ans1= true){
    numCorrect=numCorrect+1;
  } else if (ans1=false && ans2=true) {
    numCorrect=numCorrect+1;
  } else if (!ans1 && !ans2 && ans3) {
    numCorrect=numCorrect+1;
  }
  setCookie("TotalCorrect",numCorrect,1);
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
