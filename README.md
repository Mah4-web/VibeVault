# 🎨 VibeVault – Where Aesthetics Live

## 🖼️ Accessible & Responsive Image Gallery

VibeVault is a React-based image gallery that fetches images and illustrations from the Unsplash API. The app is fully keyboard-accessible, responsive across devices, and includes smooth animations, modal navigation, and alt-text for screen readers. Built with Vite, Tailwind CSS, and modern React practices.

---

## 🚀 Features

- 🔍 Searchable gallery using Unsplash API
- 🖼️ Thumbnail grid with hover animations
- 📷 Modal popup with full-size image and navigation
- ♿ Keyboard accessible (Enter/Space)
- ✅ Lighthouse & Safari accessibility audits: **100%**
- 💅 Responsive design using Tailwind & custom CSS
- 🔐 Environment variable setup for secure API key

---

## 🧠 What I Learned

This project helped me strengthen and apply the following concepts and tools:

### ⚛️ React (with Vite)
- Components 
- Props and event handling
- State management using `useState`
- Side effects using `useEffect`
- Conditional rendering
- Lists and keys
- Debugging with React Dev Tools
- Environment variables with Vite

### 🎨 Styling & UI
- Responsive design with Tailwind CSS
- UI styling approach
- Animated text and transitions

### 🚀 Deployment & Workflow
- Project setup with Vite
- Version control with Git & GitHub
- Deployment using Render

## Requirements

🎯 Implement the useState hook to manage gallery state (e.g. selected image).
🎯 Use useEffect for initial fetching of images from an external API.
🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
🎯 Use the .map() function to render an array of images dynamically
🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
🎯 Ensure all images have meaningful alt text.
🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

# Stretch Requirements

🏹 Use useEffect and the dependancy array to update the images when the user types in an input field.
🏹 Set up an Unsplash application that you can fetch from your React app.
🏹 Use .env to hide your API keys and tokens from the code.
🏹 Style the application excellently, using grid or flex and positioning.

# Resources
[Keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
[tabIndex](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex)
[Modal](https://www.youtube.com/watch?v=FSY2A0vzwko)
[SearchBar](https://www.youtube.com/watch?v=sWVgMcz8Q44)
[Stop Propagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
[React Icons](https://react-icons.github.io/react-icons/icons/hi/)
[Focus image](https://react.dev/learn/synchronizing-with-effects#focus-a-field-on-mount)







