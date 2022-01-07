import "../style.css";
import { news, act } from "./data";

const newsElement = document.querySelector("#news");
if (newsElement) {
    const result = news
        .map((newItem) => `
        <article class="border py-[20px] px-[20px] ml-[30px]">
          <img src="${newItem.img}" alt="">
          <a href="#">
              <h3 class="text-base font-bold text-orange-600 py-3 hover:text-pink-50">${newItem.title}</h3>
          </a>
          <p>${newItem.content}</p>
        </article>`)
        .join("");
    newsElement.innerHTML = result;
}
const actElement = document.querySelector("#act");
if (actElement) {
    const result2 = act
        .map((actItem) => `
        <article class="border py-[20px] px-[20px] ml-[30px] mb-[30px]">
          <img src="${actItem.img}" alt="">
          <a href="#">
              <h3 class="text-base font-bold text-orange-600 py-3 hover:text-pink-50">${actItem.title}</h3>
          </a>
          <p>${actItem.content}</p>
        </article>`)
        .join("");
    actElement.innerHTML = result2;
}