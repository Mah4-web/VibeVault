import "./ModalNavigation.css";


import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ModalNavigation({ onNext, onPrev }) {
    
    return (
    <>
        <button
        className="nav-btn left"
        onClick={onPrev}
        aria-label="Previous image"
        >
        <HiChevronLeft />
        </button>
        <button
        className="nav-btn right"
        onClick={onNext}
        aria-label="Next image"
        >
        <HiChevronRight />
        </button>
    </>
    );
}
