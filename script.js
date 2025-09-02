//-------------- Hämta element ----------------------//
const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");



let imageCount = 0;
let count = 6; // Antal bilder som ska laddas

// Funktion: få ett slumpmässigt nummer
function getRandomNumber() {
  return Math.floor(Math.random() * 600); 
}
// Funktion: skapa ett bildkort
function createImageCard(i) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Skapa bild-element
  const img = document.createElement("img");
  img.src = `https://picsum.photos/1000/600?random=${getRandomNumber()}`;
  //img.src = `https://picsum.photos/id/${getRandomNumber()}/500/300`;

  imageCount++;
  img.alt = `Bild ${imageCount}`;

  const text = document.createElement("p");
  text.textContent = `Bild ${imageCount}`;


  card.appendChild(img);
  card.appendChild(text);
  return card;
}

// Ladda bilder
function loadImages(count) {
  for (let i = 1; i <= count; i++) {
    const card = createImageCard(i);
    gallery.appendChild(card);
  }
}

// Klick-event på knappen
loadMoreBtn.addEventListener("click", () => {
  loadImages(6); // Lägg till 6 nya bilder
});

// Ladda första set direkt
loadImages(6);



// Lägg till click-event på alla bilder
document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && e.target.parentElement.classList.contains("card")) {
    lightbox.style.display = "flex";


    setTimeout(() => {
      lightbox.classList.add("show");
    }, 10);

    lightboxImg.src = e.target.src;
  }
});

// Stäng lightbox när man klickar på X
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300); // samma tid som transition
});

// Stäng lightbox om man klickar utanför bilden
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
    setTimeout(() => {
      lightbox.style.display = "none";
    }, 300);
  }
});

