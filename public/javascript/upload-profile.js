//Upload profile picture 
//Main URL to Cloudinary 
const url = "https://api.cloudinary.com/v1_1/personal-inventory-management/image/upload/";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();
  if(files.length)
  {
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    fetch(url, { //Post uploaded image to Cloudinary 
      method: "POST",
      body: formData
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        //append to sign in page 
        var data = JSON.parse(data); //Parse the data from the uploaded image to JSON
        var imageurl = data.url; //Get the URL of the uploaded image 
        var div = document.querySelector(".signup-photo");
        var image = document.createElement("img"); 
        image.setAttribute("id", "profile-signup"); 
        image.width ="150";
        image.height ="150";
        image.src = imageurl; //Set the image source as the URL from the JSON
        div.appendChild(image);
      });
  }
}
else
//If no image is selected alert the user 
{
window.alert("Please select file to upload");
}
});