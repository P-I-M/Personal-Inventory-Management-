//Delete products from database
async function deleteProduct(event) {
 
    //Empty array to store all of the ids for chosen products to delete
    var arr=[];
    var flag = false;
    var delflag = false;
    const listcheckboxes = document.querySelectorAll('input[type="checkbox"]');
    if (listcheckboxes !== null)
    {
    for (let i =0;i<listcheckboxes.length;i++)
    {
        //console.log(listcheckboxes[i].value);
        //If check boxes have been checked, push the ids of those products to the array
        if(listcheckboxes[i].checked == true) 
        {
            arr.push(parseInt(listcheckboxes[i].value));
            flag=true;
        }
    }
    //If no products were selected, alert the user. 
    if(flag == false)
    {
        window.alert("Please select product");
    }
    else
    {   for(var i =0;i<arr.length;i++)
        { // Delete all products from the database with the ids chosen
            var delflag = false;
        const response = await fetch(`/api/products/${arr[i]}`, {
            method: 'DELETE',
            body: JSON.stringify({
            id: arr[i]
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            
            delflag = true;
            
        } else {
            alert(response.statusText);
        }
        }
        if (delflag == true)
        {
            window.alert("Product(s) deleted successfully");
            document.location.replace('/dashboard/products');
        }
    }
}
};

// Event listener for the delete product button
  
document.querySelector('.delete-prod-btn').addEventListener('click', deleteProduct);



//Can we delete the below? 

/*async function deleteProduct(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    });
      
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
};
  
document.querySelector('.delete-prod-btn').addEventListener('click', deleteProduct);*/