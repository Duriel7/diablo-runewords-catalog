const runewordsData = fetch("src/data/runewords.json");
runewordsData
  .then((response) => {
    return response.json();
  })
  .then((runewords) => {
    const container = document.getElementById("runewords-panel");
    runewords.forEach((runeword) => {
      const p = document.createElement("p");
      p.textContent = runeword.name;
      container.appendChild(p);
    });
  });

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