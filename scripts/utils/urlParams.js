export const getUrlParams = () => {
  const queryString = window.location.search;
  // console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  // console.log(id);
  const ingredient = urlParams.get("ingredient");
  console.log(ingredient);
  const appliance = urlParams.get("appliance");
  console.log(appliance);
  const ustensils = urlParams.get("ustensils");
  console.log(ustensils);

  return {
    id: id,
    ingredient: ingredient,
    appliance: appliance,
    ustensils: ustensils,
  };
};

export const setUrlParams = (key, value) => {
  // console.log(key, value);

  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);

  // méthode 'has'
  // indique si le paramètre est dans les paramètres de recherche.
  if (urlParams.has(key)) {
    console.log("indice existant param URL");
    // méthode 'set'
    // mise à jour du paramètre
    urlParams.set(key, value);
    // console.log(urlParams);

    // urlParams.append(key, value)
    // ingredient=bananes&ingredient=bananes --> false
    // ingredient=bananes,coco,lait -->
    // ingredient=bananes,coco&appliance=couteau,casserole&ustensils=couteau&search=gferzger
  } else {
    console.log("indice non existant param URL");
    // méthode 'append'
    // ajout d'un paramètre dans l'url
    urlParams.append(key, value);
  }

  // mise à jour de l'url avec les paramètres
  const newUrl = `${window.location.origin}${
    window.location.pathname
  }?${urlParams.toString()}`;

  window.history.replaceState(null, "", newUrl);

  console.log(newUrl);

  // window.location.assign();
};

// test
setUrlParams("ingredient", "bananes");
setUrlParams("ingredient", "coco");
setUrlParams("appliance", "mixeur");
setUrlParams("appliance", "four");
setUrlParams("appliance", "robot");
setUrlParams("ustensils", "spatule");
setUrlParams("ustensils", "cuillère");
setUrlParams("ustensils", "fouet");
setUrlParams("ustensils", "couteau");
