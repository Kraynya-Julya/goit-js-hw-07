import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('gallary');
const cardsGallery = createImagesCardsGallery(galleryItems);
// console.log(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery)
galleryContainer.addEventListener('click', onPaletteContainerClick);

function createImagesCardsGallery(galleryItems) {
    return galleryItems.map(({original, preview, description}) =>{
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`}).join('');
}

function onPaletteContainerClick(event) {
    event.preventDefault() 
    const isImageEl = event.target.classList.contains('gallery__image');
     
    if(!isImageEl) {
        return;
    }

const instance = basicLightbox.create(`<img src="assets/images/image.png" width="800" height="600">') = "${event.target.dataset.source}";
instance.show();
}
