import "./Thumbnail.css";

// Props and Event Handling (I want to click on the thumbnail for a large image)
// I'm trying workshop's example: Passing arguments to event handlers and using inline function 
// to pass arguments to an event handler function. In example we have message,
// using image prop

export default function Thumbnail({image, onClick}) {
    const { urls, alt_description } = image;

    const handleKeyDown = (e) => {
        // I used if statement instead of Ternary operators because it wasn't getting well,
        // it was giving errors and I was making it complicated so decided to use this. I wanted to do if, else but
        // I love trying different things so I used ||, I like my codes to sing for me.
        if (e.key === "Enter"  || e.key === "Space"){
        onClick();
        }
    };

    return (
        <>
        <img
        src={urls.small}
        alt={alt_description || "Unsplash image"}
        className="image-item"
        onClick={onClick}
        // tabindex="0" means that the element should be focusable in sequential 
        // keyboard navigation. The focus navigation order of these elements is defined
        //  by their order in the document source.
        tabIndex={0}
        onKeyDown={handleKeyDown}
    />
    </>
  );
}
