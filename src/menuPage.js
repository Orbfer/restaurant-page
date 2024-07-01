import removeExistingPage from "./removeExistingPage";
const pageContent = document.querySelector("#content");
function loadMenuPage() {
  removeExistingPage();
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu", "animate__animated", "animate__fadeIn");
  pageContent.append(menuPage);
  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");
  menuPage.append(menuList);
  const beverages = document.createElement("div");
  beverages.classList.add("part-of-menu");
  menuList.append(beverages);
  beverages.innerText = "Beverages";
  const food = document.createElement("div");
  food.classList.add("part-of-menu");
  menuList.append(food);
  food.innerText = "Food";
  const hotBev = document.createElement("div");
  hotBev.classList.add("category");
  beverages.append(hotBev);
  hotBev.innerText = "Classico italiano (hot)";
  const coldBev = document.createElement("div");
  coldBev.classList.add("category");
  beverages.append(coldBev);
  coldBev.innerText = "Classico italiano (Cold)";
  const pastry = document.createElement("div");
  pastry.classList.add("category");
  food.append(pastry);
  pastry.innerText = "Pastry";
  const breakfast = document.createElement("div");
  breakfast.classList.add("category");
  food.append(breakfast);
  breakfast.innerText = "Italian Breakfast";
  createMenuItem(hotBev, "../imgs/Espresso-Italiano.png", "Espresso Italiano");
  createMenuItem(
    hotBev,
    "../imgs/Espresso-Machiatto.png",
    "Espresso Machiatto"
  );
  createMenuItem(
    hotBev,
    "../imgs/Espresso-Napoletano.png",
    "Espresso Napoletano"
  );
  createMenuItem(
    hotBev,
    "../imgs/Cappuccino-Italiano.png",
    "Cappuccino Italiano"
  );
  createMenuItem(hotBev, "../imgs/Americano.png", "Americano");
  createMenuItem(hotBev, "../imgs/Hot-Chocolate.png", "Hot Chocolate");
  createMenuItem(coldBev, "../imgs/Iced-Latte.png", "Iced Latte");
  createMenuItem(coldBev, "../imgs/Iced-Americano.png", "Iced Americano");
  createMenuItem(coldBev, "../imgs/Espresso-Freddo.png", "Espresso Freddo");
  createMenuItem(
    coldBev,
    "../imgs/Cappuccino-Shakerato.png",
    "Cappuccino Shakerato"
  );
  createMenuItem(coldBev, "../imgs/Affogato.png", "Affogato");
  createMenuItem(pastry, "../imgs/Croissant.png", "Croissant");
  createMenuItem(pastry, "../imgs/Muffins.png", "Muffins");
  createMenuItem(pastry, "../imgs/Crepe.png", "Crepe");
  createMenuItem(pastry, "../imgs/Macarons.png", "Macarons");
  createMenuItem(breakfast, "../imgs/Bruschetta.png", "Bruschetta");
  createMenuItem(breakfast, "../imgs/Cheddar-Omelet.png", "Cheddar Omelet");
  createMenuItem(breakfast, "../imgs/Veggie-Omelet.png", "Veggie Omelet");
  createMenuItem(breakfast, "../imgs/Chicken-Panini.png", "Chicken Panini");
  createMenuItem(breakfast, "../imgs/Frittata.png", "Frittata");
}
function createMenuItem(category, img, name) {
  const itemCont = document.createElement("div");
  itemCont.classList.add("item-cont");
  category.append(itemCont);
  const itemImg = document.createElement("img");
  itemImg.classList.add("item-img");
  itemImg.setAttribute("src", img);
  itemImg.setAttribute("alt", name);
  itemCont.append(itemImg);
  const item = document.createElement("div");
  item.classList.add("item");
  itemCont.append(item);
  item.innerText = name;
}
export default loadMenuPage;
