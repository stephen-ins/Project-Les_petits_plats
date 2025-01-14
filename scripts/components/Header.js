export const Header = (data, urlParams) => {
  return `
    
          <header class="header">
        <section class="banner">
          <div class="logo">
            <h1 class="title__h1">
              LES PETITS PLATS
              <i class="fa-duotone fa-regular fa-circle"></i>
            </h1>
          </div>

          <a href="#" class="index__banner">
            <img
              src="assets/images/banner/leftover_beef_noodle_56167_16x9.jpg"
              alt="banner"
              class="banner__img"
            />
          </a>
          <section class="search">
            <h2 class="title__h2">
              CHERCHER PARMI PLUS DE ${data.recipes.length} RECETTES DU QUOTIDIEN, SIMPLES ET
              DELICIEUSES
            </h2>
            <div class="search__bar">
              <input
                class="input__search"
                placeholder="Rechercher une recette, un ingrédient,..."
              />
              <div class="icone__search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </section>
        </section>
      </header>
  
    `;
};

// Fonction pour trier les recettes par mot clé présent dans le nom de la recette et l'afficher dans le DOM
export const filterRecipes = async (data, urlParams) => {
  const search = document.querySelector(".input__search").value;
  let filteredRecipes = data.recipes;

  if (search.length > 0) {
    const allRecipes = await getData();
    filteredRecipes = allRecipes.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  console.log(filteredRecipes);
  return filteredRecipes;
};
