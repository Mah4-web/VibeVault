
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ModalNavigation({ onPrev, onNext }) {
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
