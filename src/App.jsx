import "./App.css";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Thumbnail from "./Components/Thumbnail/Thumbnail.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import { useState, useEffect } from "react";

export default function App(){
  const [images, setImages] = useState([]);

  useEffect(() =>{
   async function fetchData(){
    const response = await fetch(`${import.meta.env.VITE_UNSPLASH_API}/photos?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
  
   const data = await response.json();
   const wrangledData = data.images;
   setImages(wrangledData);
    }
   fetchData();

  }, []);
  console.log(images);
  return (
    <>
   <div>
      <h1>VibeVault</h1>
      <ul>
        {images.map((image) => (
          // This is the data from previous workshop and I added alt from unsplash
          // I have to make changes here =====DON'T Forget=====
          <li key={image.urls}>{image.alt_description}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

// NOTE:
// I have to import from Thumbnail, searchbar, gallery