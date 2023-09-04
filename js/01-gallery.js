import { galleryItems } from './gallery-items.js';
// Change code below this line

// gallaryItems це масив об`єктів
// console.log(galleryItems); 


// 1) Створення і рендер (візуалізація) розмітки на підставі 
// масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryPhotos = document.querySelector(".gallery");
// console.log(galaryPhotos);

const markup = createPhotosMarkup(galleryItems);
// console.log(markup);

galleryPhotos.insertAdjacentHTML('beforeend', markup);

function createPhotosMarkup (photosArray) {
    return  photosArray.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
        </li>
        ` }).join('');
}


// 2) Реалізація делегування на ul.gallery і отримання url великого зображення.



galleryPhotos.addEventListener('click', handlerPhotoClick);

function handlerPhotoClick (event) {
// *Додатково - Зверни увагу на те, що зображення обгорнуте посиланням,
//  отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. 
//  Заборони цю поведінку за замовчуванням.
event.preventDefault(); 

// Зробимо ще валідацію, щоб уникнути небажаного результату, якщо користувач 
// натисне між картинками. 
if (event.target === event.currentTarget){
    return;
};

const targetElement = event.target.closest('.gallery__item');

const photoSource = targetElement.dataset.source;



// 4) Відкриття модального вікна по кліку на елементі галереї. 
//Для цього ознайомся з документацією і прикладами.

console.log(basicLightbox);

const instance = basicLightbox.create(`
<div class="modal">

<img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600"

</div>

`);
instance.show();

// 5) Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
//  Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки
//  basicLightbox. (вище в рядку <img src="${event.target.dataset.source}" alt="${event.target.alt} width="800" height="600"")


// console.log(event.target);
// console.log("--------------------------------------------");
// console.log(targetElement);
}
