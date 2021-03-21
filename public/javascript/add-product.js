//if cosmetics chosen then newCosmeticProduct()
//if grocery chosen then newGroceryProduct()
//if medicine chosen then newMedicineProduct()
//if books chosen then newBookProduct()

const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];
const category_id = id;

const handleGetCategorySubmit = event => {
  event.preventDefault();

  switch(category_id) {
    case 1:
      newGroceryProduct(category_id); 
      break; 
    case 2:
      newMedicineProduct(category_id); 
      break; 
    case 3:
      newMakeupProduct(category_id); 
      break;     
    case 4 :
      newBookProduct(category_id); 
      break; 
  }
};


async function newMakeupProduct(event) {
    event.preventDefault();

    const img_url = document.querySelect('input[name="prod-img"]').value;
    const product_name = document.querySelector('input[name="prod-name"]').value;
    const prod_desc = document.querySelector('input[name="prod-desc"]').value;
    const price = document.querySelector('input[name="prod-price"]').value;
    const stock = document.querySelector('input[name="prod-stock"]').value;
    const mfg_date = document.querySelector('input[name="mfg-date"]').value;
    const exp_date = document.querySelector('input[name="exp-date"]').value;


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
        category_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      window.alert("New product added!");
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
};

async function newGroceryProduct(event) {
    event.preventDefault();

    const img_url = document.querySelect('input[name="prod-img"]').value;
    const product_name = document.querySelector('input[name="product-name"]').value;
    const prod_desc = document.querySelector('input[name="prod_desc"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const exp_date = document.querySelector('input[name="exp_date"]').value;

    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        img_url, 
        product_name,
        prod_desc,
        price,
        stock,
        exp_date,
        category_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      window.alert("New product added!");
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
};

async function newMedicineProduct(event) {
    event.preventDefault();
  
    const img_url = document.querySelect('input[name="prod-img"]').value;
    const product_name = document.querySelector('input[name="product-name"]').value;
    const prod_desc = document.querySelector('input[name="prod_desc"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const mfg_date = document.querySelector('input[name="mfg_date"]').value;
    const exp_date = document.querySelector('input[name="exp_date"]').value;

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
        category_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      window.alert("New product added!");
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
};

async function newBookProduct(event) {
    event.preventDefault();

    const img_url = document.querySelect('input[name="prod-img"]').value;
    const product_name = document.querySelector('input[name="product-name"]').value;
    const prod_desc = document.querySelector('input[name="prod_desc"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const author_name = document.querySelector('input[name="author_name"]').value;

    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        img_url, 
        product_name,
        prod_desc,
        price,
        stock,
        author_name,
        category_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      window.alert("New product added!");
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
};


  
document.querySelector('.new-product-form').addEventListener('submit', newMedicineProduct);