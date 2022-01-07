import "../style.css";
import { news, act, listMenu } from "./data";

const newsElement = document.querySelector("#news");
const actElement = document.querySelector("#act");
const menuElement = document.querySelector("#menu");
if (menuElement) {
    const newMenu = listMenu
        .map((item) => `
        <li class="px-5 text-white hover:underline">
            <a href="">${item}</a>
        </li>`)
        .join("");
    menuElement.innerHTML = newMenu;
}
if (newsElement) {
    const result = news
        .map((newItem) => `
        <article class="border py-[20px] px-[20px] ml-[30px] mb-[30px]">
          <img src="${newItem.img}" alt="">
          <a href="#">
              <h3 class="text-base font-bold text-orange-600 py-3 hover:text-pink-500">${newItem.title}</h3>
          </a>
          <p>${newItem.content}</p>
        </article>`)
        .join("");
    newsElement.innerHTML = result;
}
if (actElement) {
    const result2 = act
        .map((actItem) => `
        <article class="border py-[20px] px-[20px] ml-[30px] mb-[30px]">
          <img src="${actItem.img}" alt="">
          <a href="#">
              <h3 class="text-base font-bold text-orange-600 py-3 hover:text-pink-500">${actItem.title}</h3>
          </a>
          <p>${actItem.content}</p>
        </article>`)
        .join("");
    actElement.innerHTML = result2;
}