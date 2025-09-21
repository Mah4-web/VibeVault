// import "./Modal.css";

// I used useRef to create a reference to a DOM element

import { useEffect, useRef } from "react";
import ModalNavigation from "../ModalNavigation/ModalNavigation";


export default function Modal({ image, onClose, onNext, onPrev }) {
    const { urls, alt_description } = image;

    // I created a ref object here with an initial value of null so I can use it in modal container

    const modalRef = useRef(null);

  // Autofocus modal when it opens, I want modal keyboard focused for accessibility, 
  // we can't use .focus directly so to focus in react we need useRef to access to the DOM
    useEffect(() => {
    modalRef.current?.focus();
    }, []);

    const handleKeyDown = (e) => {
    if (e.key === "Escape") {
        onClose();
    } else if (e.key === "ArrowRight") {
        onNext();
    } else if (e.key === "ArrowLeft") {
        onPrev();
    }
    };

    return (
    <div
        className="modal-overlay"
        onClick={onClose}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={modalRef}
    >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <ModalNavigation onPrev = {onPrev} onNext = {onNext} />

        <img
            src={urls.regular}
            alt={alt_description || "Unsplash image"}
            className="modal-image"
        />
        </div>
    </div>
    );
}
