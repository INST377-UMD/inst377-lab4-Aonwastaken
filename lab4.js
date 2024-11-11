function validName() {
  const name = document.getElementById("alertForm").elements["name"].value;
  alert("Hi " + name + "!" )
}

function formValidation() {
  const input = document.getElementById("validateForm").elements["textvalidate"].value;
  const validRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (validRegex.test(input)) {
    alert("Nuh uh, doesn't work")
  } else {
    alert("i shall accept these terms" )
  }
}

var isBlue = true;
function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = "green";
        isBlue = false;
    } else {
        document.body.style.backgroundColor = "aquamarine";
        isBlue = true;
    }
}

function addText() {
  const heading = document.querySelector("h1");
  heading.textContent += " Add Text";
}