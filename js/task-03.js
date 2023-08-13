const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");
galleryList.classList.add("gallery");
galleryList.style.display = "flex";
galleryList.style.justifyContent = "center";
galleryList.style.gap = "20px";
galleryList.style.listStyle = "none";

images.forEach((image) => {
  const imgElement = `
    <li class="gallery-item">
      <img width="300px" height="200px" src="${image.url}" alt="${image.alt}" class="gallery-image">
    </li>
    
  `;

  galleryList.insertAdjacentHTML("beforeend", imgElement);
});
