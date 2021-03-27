// //push suggestion to calendar

// async function addToCalendar(event) {
//     event.preventDefault();
//     var arr=[];
//     var flag = false;
//     var addflag = false;
//     const listcheckboxes = document.querySelectorAll('input[type="checkbox"]');
    
//     for (let i =0;i<listcheckboxes.length;i++)
//     {
//         console.log(listcheckboxes[i].value);
//         if(listcheckboxes[i].checked == true)
//         {
//             arr.push(parseInt(listcheckboxes[i].value));
//             flag=true;
//         }
//     }
//     if(flag == false)
//     {
//         window.alert("Please select product");
//     }
//     else
//     {   for(var i =0;i<arr.length;i++)
//         {
//             var addflag = false;
//         const response = await fetch(`/api/products/${arr[i]}`, {
//             method: 'GET',
//             // body: JSON.stringify({
//             // id: arr[i]
//             // }),
//             headers: {
//             'Content-Type': 'application/json'
//             }
//         });
        
//         if (response.ok) {
//             response.json().then(function(response) {
//                 var expdate = moment(response.exp_date).format('YYYY-MM-DD');
//                 var currdate = moment().format('YYYY-MM-DD');
//                 if (currdate = expdate ) {
//                     $('#calendar-add').css("background-color", "red")
//                 }
//             })
//           console.log();
//           addflag = true;
            
//         } else {
//             alert(response.statusText);
//         }
//         }
//         if (addflag == true)
//         {
//             document.location.replace('/dashboard/calendar');
//         }
//     }
//   };
  
//   document.querySelector('#calendar-add').addEventListener('click', addToCalendar);


var button = document.querySelectorAll('#cal-item')

console.log(JSON.stringify(button));