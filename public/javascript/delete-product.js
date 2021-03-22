async function deleteProduct(event) {
    event.preventDefault();
    var arr=[];
    flag = false;
    const listcheckboxes = document.querySelectorAll('input[type="checkbox"]');
    
    for (let i =0;i<listcheckboxes.length;i++)
    {
        console.log(listcheckboxes[i].value);
        if(listcheckboxes[i].checked == true)
        {
            arr.push(parseInt(listcheckboxes[i].value));
            flag=true;
        }
    }
    if(flag == false)
    {
        window.alert("Please select product");
    }
    else
    {  
        const response = await fetch(`/api/products/${arr}`, {
            method: 'DELETE',
            body: JSON.stringify({
            id: arr
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            window.alert("Product(s) deleted successfully");
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
};
  
document.querySelector('.delete-prod-btn').addEventListener('click', deleteProduct);




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