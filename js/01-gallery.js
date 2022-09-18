import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsGallery = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class = "gallery__image"
                    src = "${preview}"
                    data-source = "${original}"
                    alt = "${description}"
                    />
                </a>
            </div>`;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  
  let urlBigImg = event.target.dataset.source;
  console.log(urlBigImg);

  const instance = basicLightbox.create(`
    <img src="${urlBigImg}" width="800" height="600">
    `);

  document.addEventListener("keydown", closeModalWindow);
  instance.show();

  function closeModalWindow(event) {
    if (event.code === "Escape") {
      document.removeEventListener("keydown", closeModalWindow);
      instance.close();
      console.log(event);
    }
  }
}
