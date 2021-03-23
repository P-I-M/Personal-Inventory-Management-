//Update product info
async function handleGetCategorySubmit(event) {
  event.preventDefault();
    debugger;
    let category_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 2
    ];
    let id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    category_id = parseInt(category_id);
    id = parseInt(id);
    let mfg_date=null;
    let exp_date=null;
      
    const product_name = document.querySelector('input[name="product-title"]').value.trim();
    const prod_desc = document.querySelector('input[name="prod-desc"]').value.trim();
    const price = parseFloat(document.querySelector('input[name="price"]').value.trim());
    const stock = parseInt(document.querySelector('input[name="stock"]').value.trim());
    if(category_id == 1 || category_id== 2 || category_id == 3)
    {
    mfg_date = Date.parse(document.querySelector('input[name="mfg_date"]').value.trim());
    exp_date = Date.parse(document.querySelector('input[name="exp_date"]').value.trim());
    }   
    const author_name = document.querySelector('input[name="author_name"]').value.trim();

    if(product_name && prod_desc && price && stock)
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
      window.alert("New product added!");
      document.location.replace('/dashboard/products');
    } else {
      alert(response.statusText);
    } 
  }
  else
  {
    window.alert("Oops! We need all details");
  }
};













const category_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 2
];

async function editMakeupProduct(event) {
    event.preventDefault();
    
    const product_name = document.querySelector('input[name="product-name"]').value;
    const prod_desc = document.querySelector('input[name="prod_desc"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const mfg_date = document.querySelector('input[name="mfg_date"]').value;
    const exp_date = document.querySelector('input[name="exp_date"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
    const response = await fetch(`/api/cosmetics/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            product_name,
            prod_desc,
            price,
            stock,
            mfg_date,
            exp_date
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

async function editGroceryProduct(event) {
    event.preventDefault();
    
    const product_name = document.querySelector('input[name="product-name"]').value;
    const prod_desc = document.querySelector('input[name="prod_desc"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const exp_date = document.querySelector('input[name="exp_date"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
    const response = await fetch(`/api/grocery/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            product_name,
            prod_desc,
            price,
            stock,
            exp_date
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

async function editMedicineProduct(event) {
    event.preventDefault();
    
    const product_name = document.querySelector('input[name="product-name"]').value;
    const prod_desc = document.querySelector('input[name="prod_desc"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const mfg_date = document.querySelector('input[name="mfg_date"]').value;
    const exp_date = document.querySelector('input[name="exp_date"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
    const response = await fetch(`/api/medicine/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            product_name,
            prod_desc,
            price,
            stock,
            mfg_date,
            exp_date
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

async function editBookProduct(event) {
    event.preventDefault();

    const product_name = document.querySelector('input[name="product-name"]').value;
    const prod_desc = document.querySelector('input[name="prod_desc"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    const author_name = document.querySelector('input[name="author_name"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
    const response = await fetch(`/api/books/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            product_name,
            prod_desc,
            price,
            stock,
            author_name
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
  
document.querySelector('.edit-post-form').addEventListener('submit', handleGetCategorySubmit);