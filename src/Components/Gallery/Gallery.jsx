// import ".Gallery.css";

import Thumbnail from "../Thumbnail/Thumbnail.jsx";

export default function Gallery({images, handleClick}) {

    return (
      <div className="gallery">
//       {images.map((img) => (
        <Thumbnail
        key={img.id} 
        image={img} 
        onClick={() => handleClick(img)} />
      ))}
    </div>
  );
}

// You can declare an event handler (onClick) in a parent and pass it as a prop 
// to a child. https://react.dev/learn/responding-to-events

