"use strict";

const movies = [];
let jatka = "k";

while (jatka === "k") {
  const title = prompt("Anna elokuvan nimi: ");
  const rating = prompt("Anna elokuvalle pisteet 1-5: ");

  const movie = {
    title: title,
    rating: rating,
    };

  movies.push(movie);
  jatka = prompt("Haluatko lisätä toisen elokuvan? (k/e): ");
}

movies.sort(function (a, b) {
  return b.rating - a.rating;
});

let html = "";

for (const movie of movies) {
  html += `
    <tr>
      <td>${movie.title}</td>
      <td>${movie.rating}</td>
    </tr>
  `;
}

const tbody = document.querySelector("#target tbody");
if (tbody) {
  tbody.innerHTML = html;
}
