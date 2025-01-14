const BASE_URL = "data/recipes.json";

// Récupération des données JSON
export const getData = async () => {
  const response = await fetch(BASE_URL);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  return data;
};
