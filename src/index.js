import "./styles.css";
import loadHomePage from "./homePage.js";
const pageContent = document.querySelector("#content");
function makeHeader() {
  const header = document.createElement("div");
  header.classList.add("header", "animate__animated", "animate__fadeIn");
  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = "Pellegrini's";
  const navBtnsCont = document.createElement("div");
  navBtnsCont.classList.add("btns-cont");
  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.innerText = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.innerText = "Menu";
  const aboutBtn = document.createElement("button");
  aboutBtn.classList.add("nav-btn");
  aboutBtn.innerText = "About";
  pageContent.append(header);
  header.append(title);
  header.append(navBtnsCont);
  navBtnsCont.append(homeBtn);
  navBtnsCont.append(menuBtn);
  navBtnsCont.append(aboutBtn);
  homeBtn.addEventListener("click", homeBtnClicked);
  menuBtn.addEventListener("click", menuBtnClicked);
  aboutBtn.addEventListener("click", aboutBtnClicked);
  homeBtn.style.border = "3px solid var(--thirdColor)";
  homeBtn.style.borderStyle = "none none solid none";
  function homeBtnClicked() {
    homeBtn.style.border = "3px solid var(--thirdColor)";
    homeBtn.style.borderStyle = "none none solid none";
    menuBtn.style.border = "0";
    aboutBtn.style.border = "0";
    loadHomePage();
  }
  function menuBtnClicked() {
    menuBtn.style.border = "3px solid var(--thirdColor)";
    menuBtn.style.borderStyle = "none none solid none";
    homeBtn.style.border = "0";
    aboutBtn.style.border = "0";
  }
  function aboutBtnClicked() {
    aboutBtn.style.border = "3px solid var(--thirdColor)";
    aboutBtn.style.borderStyle = "none none solid none";
    menuBtn.style.border = "0";
    homeBtn.style.border = "0";
  }
}
makeHeader();
loadHomePage();
