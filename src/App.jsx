import "./App.css";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Thumbnail from "./Components/Thumbnail/Thumbnail.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import Modal from "./Components/Modal/Modal.jsx";
import ModalNavigation from "./Components/ModalNavigation/ModalNavigation.jsx";

// I'm using useState and useEffect because I'm fetching data from an API here.

import { useState, useEffect } from "react";


export default function App(){
  // Why I used [] here, I used it to store a list of images, and by default, that list is empty
    const [images, setImages] = useState([]);
    // Why I used null here? because it's single selected image, single item starting as null (meaning no image is selected yet)
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState("nature");
    const [imageIndex, setImageIndex] = useState(0);
    


  useEffect(() =>{
    async function fetchImages(){
    try {
    const response = await fetch(`${import.meta.env.VITE_UNSPLASH_API}/search/photos?query=${searchQuery}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
  
    const data = await response.json();
    const wrangledData = data.results;

    setImages(wrangledData);

    // I wanted an image to be there not an empty page, setting default value, default image and index on new search

      if (wrangledData.length > 0) {
        setSelectedImage(wrangledData[0]);
        setImageIndex(0);
    } else {
      setSelectedImage(null);
    }
   } catch (error) {
  console.error("Error fetching images:", error);
}
  }
    fetchImages();

  }, [searchQuery]);


   useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[imageIndex]);
    }
  }, [imageIndex, images]);

  // Navigate to next image
  function showNextImage() {
    setImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }

  // Navigate to previous image
  function showPrevImage() {
    setImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }
// I copied this code from a video and it's in the resources Readme. Explanation is in the readme,
// I successfully put the icons but they were not functional so followed the video then edited after so many trail and errors
// 
// function showPrevImage() {
//   setImageIndex(index => {
//     if (index === 0) return imageUrls.length - 1;
//     return index - 1;
//   });
// }
  
  return (
    
  <>
    <div className="app">
      <h1 class=" text-4xl font-extrabold text-center mb-5 text-shadow-lg/20 z-1">VibeVault</h1>

      {selectedImage && (
      <div className="text-1xl animate-color-cycle font-extrabold mb-5 text-bg z-1 motion-safe:animate-pulse">
      {selectedImage.alt_description || "No description available"}
      </div>
      )}

      <SearchBar onSearch={setSearchQuery} />
      
      <Gallery images={images} handleClick={setSelectedImage} />
      

      {selectedImage && (
        <Modal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)}
        onNext={showNextImage}
        onPrev={showPrevImage}
      
        />
      )}

    </div>
  </>
);

}
