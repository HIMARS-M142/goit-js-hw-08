import simpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryCreateEl = document.querySelector('.gallery');
galleryCreateEl.classList.add('list-none');
galleryItems.map(gall => {
  const createMarkup = `
  <li class="gallery__item">
   <a class="gallery__link" href="${gall.original}">
      <img class="gallery__image" src="${gall.preview}" alt="${gall.description}" />
   </a>
</li>`;

  galleryCreateEl.insertAdjacentHTML('afterbegin', createMarkup);
});
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
