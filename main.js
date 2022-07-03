let all_input = document.querySelectorAll("input");
let input_name = document.querySelector("#inputName");
let input_email = document.getElementById("inputEmail");
let input_pass = document.getElementById("inputPass");
let btn = document.getElementById("btn");
let section = document.querySelector(".home");
let line = document.querySelector(".line");
let line_up = document.querySelector(".lineUp");
let close_layout = document.querySelector("#close_layout");
let cancel_layout = document.querySelector("#cancel_layout");
let layout = document.querySelector(".layout");

all_input.forEach((e) => {
  e.addEventListener("input", () => {
    if (e.id == "inputName" && e.value != "") {
      line.style.background = "rgba(215, 16, 16, 0.337)";
      line_up.style.cssText = "background:#ff0000fe; width: 30%";
      btn.style.background = "#0277bd";
    } else if (e.id == "inputEmail" && e.value != "") {
      line.style.background = "#ff980073";
      line_up.style.cssText = "background:#ff9800; width: 60%";
      btn.style.background = "#000";
    } else if (e.id == "inputPass" && e.value != "") {
      line.style.background = "rgba(38, 109, 217, 0.5)";
      line_up.style.cssText = "background:#0277bd; width: 100%";
      btn.style.background = "#0277bd";
    } else if (e.id == "inputPass" && e.value == "") {
      line.style.background = "#ff980073";
      line_up.style.cssText = "background:#ff9800; width: 60%";
      btn.style.background = "#000";
    } else if (e.id == "inputEmail" && e.value == "") {
      line.style.background = "rgba(215, 16, 16, 0.337)";
      line_up.style.cssText = "background:#ff0000fe; width: 30%";
      btn.style.background = "#0277bd";
    } else {
      line.style.background = "none";
      line_up.style.cssText = "none";
      btn.style.background = "#000";
    }
  });
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    input_name.value == "" ||
    input_email.value == "" ||
    input_pass.value == ""
  ) {
    layout.classList.add("active");
  } else {
    section.classList.add("active");
    input_name.value = "";
    input_email.value = "";
    input_pass.value = "";
    line.style.background = "none";
    line_up.style.cssText = "none";
    btn.style.background = "#000";
  }
});

let sec = document.querySelector(".sec");
let log = document.querySelector(".log");
let login = document.querySelector(".regist");
let content = document.querySelector(".content");

sec.addEventListener("click", () => {
  section.classList.remove("active");
});

log.addEventListener("click", () => {
  content.classList.remove("active");
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  content.classList.add("active");
});

cancel_layout.addEventListener("click", () => {
  layout.classList.remove("active");
});

close_layout.addEventListener("click", () => {
  layout.classList.remove("active");
});
