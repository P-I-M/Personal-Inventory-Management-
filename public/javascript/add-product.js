//if cosmetics chosen then newCosmeticProduct()
//if grocery chosen then newGroceryProduct()
//if medicine chosen then newMedicineProduct()
//if books chosen then newBookProduct()

async function handleGetCategorySubmit(event) {
  event.preventDefault();
    debugger;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const category_id = parseInt(id);
    let mfg_date=null;
    let exp_date=null;
    
    const product_name = document.querySelector('input[name="prod-name"]').value.trim();
    const prod_desc = document.querySelector('textarea[name="prod-desc"]').value.trim();
    const price = parseFloat(document.querySelector('input[name="prod-price"]').value.trim());
    const stock = parseInt(document.querySelector('input[name="prod-stock"]').value.trim());
    if(category_id == 1 || category_id== 2 || category_id == 3)
    {
    mfg_date = Date.parse(document.querySelector('input[name="mfg-date"]').value.trim());
    exp_date = Date.parse(document.querySelector('input[name="exp-date"]').value.trim());
    }   
    const author_name = document.querySelector('input[name="prod-author"]').value.trim();
    const img_url = document.querySelector('input[id="prod-img"]').value.trim();

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
  {
    window.alert("Oops! Name, price and stock are mandatory");
  }
};
 
document.querySelector('.new-product-form').addEventListener('submit', handleGetCategorySubmit);