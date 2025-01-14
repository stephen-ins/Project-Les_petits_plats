import { getData } from "../utils/Api.js";
import { Header, filterRecipes } from "../components/Header.js";
import { Main, Cards } from "../components/Main.js";
import { Footer } from "../components/Footer.js";
import { getUrlParams } from "../utils/urlParams.js";

const displayData = (data, urlParams) => {
  const body = document.querySelector("body");
  body.innerHTML = `
    <div class="container">
      ${Header(data, urlParams)}
      ${Main(data, urlParams)}
      ${Cards(data)}
      ${Footer()}
    </div>
    `;

  filterRecipes(data, urlParams);
};

(async () => {
  const data = await getData();
  const urlParams = getUrlParams();
  console.log(urlParams);
  displayData(data, urlParams);
})();

