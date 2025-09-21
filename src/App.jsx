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

  useEffect(() =>{
    async function fetchImages(){
    try {
    const response = await fetch(`${import.meta.env.VITE_UNSPLASH_API}/search/photos?query=${searchQuery}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
  
    const data = await response.json();
    const wrangledData = data.results;
    setImages(wrangledData);
    } catch (error) {
  console.error("Error fetching images:", error);
}
  }
    fetchImages();

  }, [searchQuery]);
  console.log(images);
  return (
    
  <>
    <div className="app">
      <h1 class="text-4xl font-extrabold text-center mb-5 text-shadow-lg/20">VibeVault</h1>

      <Gallery images={images} handleClick={setSelectedImage} />

      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* <ul>
        {images.map((image) => (
          <li key={image.id}>{image.alt_description || "No description"}</li>
        ))}
      </ul> */}

      <SearchBar onSearch={setSearchQuery} />
    </div>
  </>
);

}
