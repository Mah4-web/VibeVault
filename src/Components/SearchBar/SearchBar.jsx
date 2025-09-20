// import "./SearchBar.css";

// useState Hook and event handler 
// The function returned by the useState hook is used to update the state value. 
// It can be called with a new value, or a function that returns a new value. ==Follow Workshop==
// I'm using useState here to store data that changes over time

import { useState } from "react";

export default function SearchBar ({ onSearch }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        // prevents page reload
        e.preventDefault();
        // this will only work if input is not empty
        if (input.trim() !== "") {
            onSearch(input);
            // it will clear the input field after the search
            setInput("");
        }
    };
    return<form className = "search-bar" onSubmit = { handleSubmit }>
        <input type="text" 
        placeholder="Search image or illustration that inspire you....."
        value={input}
        // it will update the state on typing
        onChange={(e) => setInput(e.target.value)}
        />
    </form>
}


//  
