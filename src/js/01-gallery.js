// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector(".gallery");

const galleryMarkUp = galleryItems.map(({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}" alt="${description}" /> </a>`
}).join("");

galleryRef.innerHTML = galleryMarkUp;


galleryRef.addEventListener("click", event => {
    event.preventDefault()
});

const lightbox = new SimpleLightbox('.gallery a', { 
    
    captionsData: "alt",
    captionDelay: 250,
 });


console.log(galleryItems);
