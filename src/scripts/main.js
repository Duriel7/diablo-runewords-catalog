const categoriesData = fetch("src/data/categories.json");

categoriesData
  .then((response) => {
    return response.json();
  })
  .then((categories) => {
    const container = document.getElementById("categories-panel");
    categories.forEach((category) => {
      const p = document.createElement("p");
      p.textContent = category.name;
      container.appendChild(p);
    });
  });

const runewordsData = fetch("src/data/runewords.json");

runewordsData
  .then((response) => {
    return response.json();
  })
  .then((runewords) => {
    const container = document.getElementById("runewords-panel");
    const detailsContainer = document.getElementById("details-panel");
    const details = document.createElement("div");
    detailsContainer.appendChild(details);
    runewords.forEach((runeword) => {
      const button = document.createElement("button");
      button.textContent = runeword.name;
      container.appendChild(button);
      button.addEventListener("click", () => {
        details.innerHTML = `<h3>${runeword.name} :</h3><p>${runeword.runes.join(", ")}</p>`;
      });
    });
  });
