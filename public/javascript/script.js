window.onload = function(){
  day1(); 
  day2(); 
  day3(); 
  day4(); 
  day5(); 
  day6(); 
  day7(); 
}

// Display Current Time / Date Using moment.js
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);
  
let days = [];
//let daysRequired = 7
var dateEls = document.querySelectorAll(".cal-date");

for (let i = 0; i<= dateEls.length; i++){
  //dateEls[i].innerHTML=""; 
  days.push(moment().add(i, 'days').format('ddd, MMM M'));
  var calDateEl = document.createElement("span");
  calDateEl.className ='day-info';
  calDateEl.innerHTML = days[i]; 
  //dateEls[i].append(calDateEl);
}

function day1() {
  var input_textarea = document.querySelector("#day1");
  var output_div = document.querySelector("#day1");
  var save_button = document.querySelector("#save1");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem(days[0]);
  input_textarea.value = localStorage.getItem(days[0]);

  function updateOutput() {
    localStorage.setItem(days[0], input_textarea.value);

    output_div.textContent = input_textarea.value;
  }
}

function day2() {
  var input_textarea = document.querySelector("#day2");
  var output_div = document.querySelector("#day2");
  var save_button = document.querySelector("#save2");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem(days[1]);
  input_textarea.value = localStorage.getItem(days[1]);

  function updateOutput() {
    localStorage.setItem(days[1], input_textarea.value);

    output_div.textContent = input_textarea.value;
  }
}

function day3() {
  var input_textarea = document.querySelector("#day3");
  var output_div = document.querySelector("#day3");
  var save_button = document.querySelector("#save3");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem(days[2]);
  input_textarea.value = localStorage.getItem(days[2]);

  function updateOutput() {
    localStorage.setItem(days[2], input_textarea.value);

    output_div.textContent = input_textarea.value;
  }
}

function day4() {
  var input_textarea = document.querySelector("#day4");
  var output_div = document.querySelector("#day4");
  var save_button = document.querySelector("#save4");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem(days[3]);
  input_textarea.value = localStorage.getItem(days[3]);

  function updateOutput() {
    localStorage.setItem(days[3], input_textarea.value);

    output_div.textContent = input_textarea.value;
  }
}

function day5() {
  var input_textarea = document.querySelector("#day5");
  var output_div = document.querySelector("#day5");
  var save_button = document.querySelector("#save5");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem(days[4]);
  input_textarea.value = localStorage.getItem(days[4]);

  function updateOutput() {
    localStorage.setItem(days[4], input_textarea.value);

    output_div.textContent = input_textarea.value;
  }
}

function day6() {
  var input_textarea = document.querySelector("#day6");
  var output_div = document.querySelector("#day6");
  var save_button = document.querySelector("#save6");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem(days[5]);
  input_textarea.value = localStorage.getItem(days[5]);

  function updateOutput() {
    localStorage.setItem(days[5], input_textarea.value);

    output_div.textContent = input_textarea.value;
  }
}

function day7() {
  var input_textarea = document.querySelector("#day7");
  var output_div = document.querySelector("#day7");
  var save_button = document.querySelector("#save7");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem(days[6]);
  input_textarea.value = localStorage.getItem(days[6]);

  function updateOutput() {
    localStorage.setItem(days[6], input_textarea.value);

    output_div.textContent = input_textarea.value;
  }
}



