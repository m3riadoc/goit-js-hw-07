import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const { preview, original, description } = image;

  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;

  link.appendChild(img);
  li.appendChild(link);
  gallery.appendChild(li);

  link.addEventListener("click", (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(
      `
      <img src="${
        event.currentTarget.querySelector("img").dataset.source
      }" alt="${description}">
    `,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              instance.close();
            }
          });
        },
      }
    );

    instance.show();
  });
});