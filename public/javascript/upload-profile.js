const url = "https://api.cloudinary.com/v1_1/personal-inventory-management/image/upload/";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        var data = JSON.parse(data);
        var imageurl = data.url; 
        var div = document.querySelector(".profile-photo");
        var image = document.createElement("img");
        image.src = imageurl;
        div.appendChild(image);
      });
  }
});

