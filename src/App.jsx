import "./App.css";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Thumbnail from "./Components/Thumbnail/Thumbnail.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";

// I'm using useState and useEffect because I'm fetching data from an API here.

import { useState, useEffect } from "react";

export default function App(){
  // Why I used [] here, I used it to store a list of images, and by default, that list is empty
  const [images, setImages] = useState([]);
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
   <div className = "app">
      <h1>VibeVault</h1>

      <ul>
        {images.map((image) => (
         
          <li key={image.id}>{image.alt_description || "No description"}</li>
        ))}
      </ul>
        <SearchBar onSearch={setSearchQuery} />
    </div>
    </>
  )
}
// Notes: I decided to do the components first, 
//  like creating part of puzzles but not the frame, I am a visual person and
//  everything is still blank, and I forgot I am working on thumbnails, searchbar but where is the
// LARGE IMAGE??????? so in the assignment we have to make a modal and my everything is blank becuase 
// I didn't make the modal yet and I have to put everything in the APP.jsx as well.

// REMINDER: add thumbnails, Modal, once modal is done style
