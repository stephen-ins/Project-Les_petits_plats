export const Main = (data) => {
  // insertion des filtres correspondants par ingredients, appareils et ustensiles
  let ingredients = `
     <div class="input">
      <select class="input__item">
        <option value="">Ingrédients</option>
  `;


  let uniqueIngredients = [
    ...new Set(
      data.recipes.flatMap((recipe) =>
        recipe.ingredients.map((ingredient) => ingredient.ingredient)
      )
    ),
  ];

  uniqueIngredients.forEach((ingredient) => {
    ingredients += `
      <option value="${ingredient}">${ingredient}</option>
    `;
  });

  ingredients += `
      </select>
    </div>
  `;

  let appliances = `
    <div class="input">
      <select class="input__item">
        <option value="">Appareils</option>
  `;

  let uniqueAppliances = [
    ...new Set(data.recipes.map((recipe) => recipe.appliance)),
  ];

  uniqueAppliances.forEach((appliance) => {
    appliances += `
      <option value="${appliance}">${appliance}</option>
    `;
  });

  appliances += `
      </select>
    </div>
  `;

  let ustensils = `
    <div class="input">
      <select class="input__item">
        <option value="">Ustensiles</option>
  `;

  let uniqueUstensils = [
    ...new Set(data.recipes.map((recipe) => recipe.ustensils).flat()),
  ];

  uniqueUstensils.forEach((ustensil) => {
    ustensils += `
      <option value="${ustensil}">${ustensil}</option>
    `;
  });

  ustensils += `
      </select>
    </div>
  `;

  return `
    <main class="main">
      <section class="item__selection">
            <div class="item__banner">
              ${ingredients}
              ${appliances}
              ${ustensils}
            </div>

            <div class="recipes">
              <div class="recipes__numbers">${data.recipes.length} recettes</div>
            </div>

      </section>
  
    </main>
  `;
};

// search=ezfzefzefzef&ingredient=coco,bananes,pommes&appliance=casserole&ustensils=couteau,bol

// insertion des recettes du fichier recipes.json dans la page
export const Cards = (data) => {
  // insertion des recettes
  let cardsContent = "";
  data.recipes.forEach((recipe) => {
    cardsContent += `

      <div class="card">
        <img
          src="assets/images/recipes/${recipe.image}"
          alt="picture__recipe"
          class="picture__recipe"
        />
        <p class="recipe__time">${recipe.time}</p>
        <h3 class="title__h3">${recipe.name}</h3>
        <div class="recipe__content">
          <h4 class="title__h4">RECETTE</h4>
          <p class="paragraph__recette">
            ${recipe.description}
          </p>

          <h4 class="title__h4">INGRÉDIENTS</h4>
          <section class="ingredients__container">
            ${recipe.ingredients
        .map(
          (ingredient) => `
              <div class="ingredients__table">
                <div class="ingredients__item">${ingredient.ingredient}</div>
                <div class="quantity__item">${ingredient.quantity} ${ingredient.unit ? ingredient.unit : ""
            }</div>
              </div>
            `
        )
        .join("")}
          </section>
        </div>
      </div>
    `;
  });

  return `
  
         <section class="card__content">
  
             ${cardsContent};
  
         </section>


  
  
  `;
};
