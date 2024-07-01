import removeExistingPage from "./removeExistingPage";
import "animate.css";
const pageContent = document.querySelector("#content");
function loadHomePage() {
  removeExistingPage();
  const homePage = document.createElement("div");
  homePage.classList.add("home", "animate__animated", "animate__fadeIn");
  pageContent.append(homePage);
  const homeText = document.createElement("div");
  homeText.classList.add("home-text");
  homePage.append(homeText);
  const textBoxMain = document.createElement("div");
  textBoxMain.classList.add("main-text");
  homeText.append(textBoxMain);
  textBoxMain.innerText =
    "Cafe Pellegrini's A Family Company Since 1870. It all starts with coffee from Italy’s oldest coffee roasting company. Southern Italy 1870. The bracing air of early morning is enriched with intense fragrance in via Garibaldi where the little shop of colonial products radiate light and aromas onto the street. The source of this aroma is the coffee shop of Domenico Pellegrini, “the magician”, as his affectionate customers nicknamed him. Every day Domenico roasts fresh coffee with passion and dedication on his new coal-fired roaster, “Tornado” that was pride and joy of the Pellegrini family.";
  const imgCont = document.createElement("div");
  imgCont.classList.add("img-cont");
  homePage.append(imgCont);
  const image = document.createElement("div");
  image.classList.add("image", "animate__animated");
  image.style.backgroundImage = 'url("../imgs/image1.jpg")';
  imgCont.append(image);
  const images = [
    'url("../imgs/image1.jpg")',
    'url("../imgs/image2.jpg")',
    'url("../imgs/image3.jpg")',
    'url("../imgs/image4.jpg")',
  ];
  let currentIndex = 1;
  function changeImage() {
    image.classList.remove("animate__fadeIn");
    image.classList.add("animate__fadeOut");
    setTimeout(() => {
      image.style.backgroundImage = images[currentIndex];
      image.classList.remove("animate__fadeOut");
      image.classList.add("animate__fadeIn");
      currentIndex = (currentIndex + 1) % images.length;
    }, 500);
  }
  setInterval(changeImage, 5000);
}

export default loadHomePage;
