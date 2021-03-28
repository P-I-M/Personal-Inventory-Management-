//Update product info
async function handleGetCategorySubmit(event) {

    //Get the category id of product being updated from the URL
    let category_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 2
    ];
    //Get the id of product being updated from the URL 
    let id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    category_id = parseInt(category_id);
    id = parseInt(id);
    let mfg_date=null;
    let exp_date=null;
    let prod_desc=null;
    let author_name=null;
    const imageEl = document.getElementById("product-image");
    
    const product_name = document.querySelector('input[name="product-title"]').value.trim();
    prod_desc = document.querySelector('input[name="prod-desc"]').value.trim();
    const price = parseFloat(document.querySelector('input[name="price"]').value.trim());
    const stock = parseInt(document.querySelector('input[name="stock"]').value.trim());
    if(category_id == 1 || category_id== 2 || category_id == 3) //Get the manufacturing and expiry date from food, medicine and cosmetics
    {
    mfg_date = Date.parse(document.querySelector('input[name="mfg_date"]').value.trim());
    exp_date = Date.parse(document.querySelector('input[name="exp_date"]').value.trim());
    }   
    author_name = document.querySelector('input[name="author_name"]').value.trim();

    if(document.body.contains(imageEl)) //If an image is being updated 
    {
      var img_url = imageEl.src;

      if(product_name && price && stock) //If name, price and stock is entered, allow this product to be updated
      {   
        const response = await fetch(`/api/products/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
          img_url,
          product_name,
          prod_desc,
          price,
          stock,
          mfg_date,
          exp_date,
          author_name
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        window.alert("Product updated successfully!");
        document.location.replace('/dashboard/products');
      } else {
        alert(response.statusText);
      } 
    }
    else
    {
      window.alert("Oops! Name, price and quantity are mandatory");
    }
  }
else
{
      if(product_name && price && stock) //If an image is not being updated 
      {   
        const response = await fetch(`/api/products/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
          product_name,
          prod_desc,
          price,
          stock,
          mfg_date,
          exp_date,
          author_name
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        window.alert("Product updated successfully!");
        document.location.replace('/dashboard/products');
      } else {
        alert(response.statusText);
      } 
    }
    else
    {
      window.alert("Oops! Name, price and quantity are mandatory");
    }
}

};

// Event listener for the update a product button

document.querySelector('#update-product').addEventListener('click', handleGetCategorySubmit);
