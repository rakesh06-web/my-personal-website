const cards = document.querySelectorAll(".artist-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const songs = card.querySelector(".songs");

    if (songs.style.display === "block") {
      songs.style.display = "none";
    } else {
      songs.style.display = "block";
    }
  });
});

let a = [1,2,3,4]
console.log(a)

