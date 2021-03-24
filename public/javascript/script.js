window.onload = function(){
    //colorCode();
    monday();
    tuesday();
    wednesday();
    thursday();
    friday();
    saturday();
    sunday();
   }
  

// Display Current Time / Date Using moment.js
  
  //var currentDay = moment().format("dddd LL");
  //$("#currentDay").append(currentDay);
  
 
  
// Add Local Storage And Recall of Local Storage Information Into TextEntry Divs

  function monday() {
    var input_textarea = document.querySelector("#entryMonday");
    var output_div = document.querySelector("#entryMonday");
    var save_button = document.querySelector("#buttonMonday");
  
    save_button.addEventListener("click", updateOutput);
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
  
      output_div.textContent = input_textarea.value;
    }
  }
  
  function tuesday() {
    var input_textarea1 = document.querySelector("#entryTuesday");
    var output_div1 = document.querySelector("#entryTuesday");
    var save_button1 = document.querySelector("#buttonTuesday");
  
    save_button1.addEventListener("click", updateOutput1);
  
    output_div1.textContent = localStorage.getItem("content1");
    input_textarea1.value = localStorage.getItem("content1");
  
    function updateOutput1() {
      localStorage.setItem("content1", input_textarea1.value);
  
      output_div1.textContent = input_textarea1.value;
    }
  }
  
  
  
  function wednesday() {
    var input_textarea2 = document.querySelector("#entryWednesday");
    var output_div2 = document.querySelector("#entryWednesday");
    var save_button2 = document.querySelector("#buttonWednesday");
  
    save_button2.addEventListener("click", updateOutput2);
  
    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");
  
    function updateOutput2() {
      localStorage.setItem("content2", input_textarea2.value);
  
      output_div2.textContent = input_textarea2.value;
    }
  }
  
  
  function thursday() {
    var input_textarea3 = document.querySelector("#entryThursday");
    var output_div3 = document.querySelector("#entryThursday");
    var save_button3 = document.querySelector("#buttonThursday");
  
    save_button3.addEventListener("click", updateOutput3);
  
    output_div3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");
  
    function updateOutput3() {
      localStorage.setItem("content3", input_textarea3.value);
  
      output_div3.textContent = input_textarea3.value;
    }
  }
  
  
  function friday() {
    var input_textarea4 = document.querySelector("#entryFriday");
    var output_div4 = document.querySelector("#entryFriday");
    var save_button4 = document.querySelector("#buttonFriday");
  
    save_button4.addEventListener("click", updateOutput4);
  
    output_div4.textContent = localStorage.getItem("content4");
    input_textarea4.value = localStorage.getItem("content4");
  
    function updateOutput4() {
      localStorage.setItem("content4", input_textarea4.value);
  
      output_div4.textContent = input_textarea4.value;
    }
  }
  
  
  function saturday() {
    var input_textarea5 = document.querySelector("#entrySaturday");
    var output_div5 = document.querySelector("#entrySaturday");
    var save_button5 = document.querySelector("#buttonSaturday");
  
    save_button5.addEventListener("click", updateOutput5);
  
    output_div5.textContent = localStorage.getItem("content5");
    input_textarea5.value = localStorage.getItem("content5");
  
    function updateOutput5() {
      localStorage.setItem("content5", input_textarea5.value);
  
      output_div5.textContent = input_textarea5.value;
    }
  }
  
  
  function sunday() {
    var input_textarea6 = document.querySelector("#entrySunday");
    var output_div6 = document.querySelector("#entrySunday");
    var save_button6 = document.querySelector("#buttonSunday");
  
    save_button6.addEventListener("click", updateOutput6);
  
    output_div6.textContent = localStorage.getItem("content6");
    input_textarea6.value = localStorage.getItem("content6");
  
    function updateOutput6() {
      localStorage.setItem("content6", input_textarea6.value);
  
      output_div6.textContent = input_textarea6.value;
    }
  }

// async function addCalendarEvent(event) {
//   event.preventDefault(); 

//   const response = await fetch('/dashboard/calendar' , {
//     method: 'POST',
//     body: JSON.stringify({
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   if (response.ok) {
//     window.alert('Yay!');
//     document.location.reload('/dashboard/calendar')
//   } else {
//     alert(response.statusText);
//     console.log(response)
//   }
// };
  
document.querySelector('#calendar-add').addEventListener('click', addCalendarEvent)
  