import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const cardsGallery = createImagesCardsGallery(galleryItems);
// console.log(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);
galleryContainer.addEventListener('click', onPaletteContainerClick);
function createImagesCardsGallery(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}"alt=${description}"/>
</a>`
    }).join('');
}
function onPaletteContainerClick(event) {
    event.preventDefault();
    const isImageEl = event.target.classList.contains('gallery__image');
    if(!isImageEl) {
        return;
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
    instance.show();
}
