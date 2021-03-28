    // Creates an empty array to hold all of the ids of products that have not expired 
    var arr=[];
    var flag = false;

    const dropdownEl = document.getElementById('person');
    if(dropdownEl !== null)   
    {
    for (let i =0;i<dropdownEl.length;i++)
    {
        arr.push(dropdownEl[i].text);        
    }
   
    var rndno = Math.floor((Math.random() * (arr.length-1)) + 0);
    var rndprod = arr[rndno]; // Use Math.random() to get a random product from the array
    var arr1 = arr[rndno].split("/");
    if(arr1[0]==4)
    {
        arr1[3] = "N/A"; // If there is no expiry date (for books), show N/A
    }

    document.getElementById("nm").innerHTML = arr1[1];
    document.getElementById("st").innerHTML = arr1[2];
    document.getElementById("ex").innerHTML = arr1[3];
}
    
    