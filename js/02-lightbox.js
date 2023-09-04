import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


// Створення і рендер розмітки на підставі масиву даних galleryItems 
// і наданого шаблону елемента галереї. 
// Використовуй готовий код з першого завдання.

const galleryImages = document.querySelector('.gallery');

const markup = createGalleryMarkup(galleryItems);
galleryImages.insertAdjacentHTML('beforeend', markup);
// galleryImages.addEventListener('click', handlerPhotoClick);



// 3) Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. 
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

const lighthbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
// 4) Подивися в документації секцію «Options» і додай відображення підписів до зображень 
// з атрибута alt. Нехай підпис буде знизу і 
// з'являється через 250 мілісекунд після відкриття зображення.


function createGalleryMarkup (galleryArray) {
    return galleryArray.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" 
      alt="${description}" />
   </a>
</li>
        ` }).join('');
};

// console.log(markup);