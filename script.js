
const  imageContainer= document.getElementById("image-container")
const  loader= document.getElementById("loader")
let photoArray = []
//Unsplash API
const count = 10;
const apiKey2="YOUR_ACCESS_KEY"
//const apiKey="As7l8I4dcLj6uM6vB_Hh1FmCdVOLAUIyMzAOO70gN78"
const  apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey2}&count=${count}`;

const loading = () => { 
    loader.hidden = false;
 } 

 const loadingDone = () => { 
    loader.hidden =true;
  } 


//Create  Elements for links & photos, ass to dom 
function displayPhotos() {
    //Run Function for each object in photoarray;
    photoArray.forEach(photo => { 
        //Create <a></a> to unsplash
        const item = document.createElement('a')
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank')
        //Create Image element
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        item.appendChild(img)
        imageContainer.appendChild(item)

    })

}

//Get Photos from Unsplash API
async  function getPhotos() {
    loading()
    try {
        const res  = await fetch(apiURL);
        photoArray = res.json()
        console.log(photoArray)
       displayPhotos()
    }
    catch(err) {
      //Catch Error
      console.log(err)
    }
    loadingDone()
}

//On Load

getPhotos()