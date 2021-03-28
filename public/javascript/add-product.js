//if cosmetics chosen then newCosmeticProduct()
//if grocery chosen then newGroceryProduct()
//if medicine chosen then newMedicineProduct()
//if books chosen then newBookProduct()

async function handleGetCategorySubmit(event) {
 // event.preventDefault();
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const category_id = parseInt(id);
    let mfg_date=null;
    let exp_date=null;
    var img_url = "";
    const imageEl = document.getElementById("product-image");
    const product_name = document.querySelector('input[name="prod-name"]').value.trim();
    const prod_desc = document.querySelector('textarea[name="prod-desc"]').value.trim();
    const price = parseFloat(document.querySelector('input[name="prod-price"]').value.trim());
    const stock = parseInt(document.querySelector('input[name="prod-stock"]').value.trim());
    if(category_id == 1 || category_id== 2 || category_id == 3)
    {
      mfg_date = Date.parse(document.querySelector('input[name="mfg-date"]').value.trim());
      exp_date = Date.parse(document.querySelector('input[name="exp-date"]').value.trim());
      if(!mfg_date)
      {
        var d = new Date();
        mfg_date = d;
      }
      if(!exp_date)
      {
        var d = new Date();
        exp_date = d;
      }
    }   
    const author_name = document.querySelector('input[name="prod-author"]').value.trim();

    if(category_id == 1)
    {img_url = "http://res.cloudinary.com/personal-inventory-management/image/upload/v1616716089/grocery_eyoham.jpg";}
    if(category_id == 2)
    {img_url = "http://res.cloudinary.com/personal-inventory-management/image/upload/v1616716123/medicines_h4lxxt.jpg";}
    if(category_id == 3)
    {img_url = "http://res.cloudinary.com/personal-inventory-management/image/upload/v1616716156/cosmetics_rvtlpi.jpg";}
    if(category_id == 4)
    {img_url = "http://res.cloudinary.com/personal-inventory-management/image/upload/v1616716192/books_is7gtz.jpg";}

    if(document.body.contains(imageEl))
    {
      img_url = imageEl.src;
    }
   
    //const img_url = document.querySelector('input[id="prod-img"]').value.trim();

    if(product_name && price && stock)
    {   
    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        img_url,
        product_name,
        prod_desc,
        price,
        stock,
        mfg_date,
        exp_date,
        author_name,
        category_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      window.alert("New product added!");
      document.location.replace('/dashboard/products');
    } else {
      alert(response.statusText);
    } 
  }
  else
  // If there's an error due to missing information, return this error message as an alert
  {
    window.alert("Oops! Name, price and quantity are mandatory");
  }
};
 
// Event listener for the add-product button
document.querySelector('#add-product').addEventListener('click', handleGetCategorySubmit);