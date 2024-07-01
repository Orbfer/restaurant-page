import removeExistingPage from "./removeExistingPage";
const pageContent = document.querySelector("#content");
function loadAboutPage() {
  removeExistingPage();
  const aboutPage = document.createElement("div");
  aboutPage.classList.add("about", "animate__animated", "animate__fadeIn");
  pageContent.append(aboutPage);
  const textPart = document.createElement("div");
  textPart.classList.add("text-cont");
  aboutPage.append(textPart);
  const textBox = document.createElement("div");
  textBox.classList.add("text-box");
  textPart.append(textBox);
  const title = document.createElement("div");
  title.classList.add("text-title");
  textBox.append(title);
  title.innerText = "The Coffee Wizard, And The Birth Of The Italian Dream";
  const textContent = document.createElement("div");
  textContent.classList.add("text-content");
  textBox.append(textContent);
  textContent.innerText =
    "The history of Caffè Pellegrini begins all the way back in 1870, when Domenico Pellegrini decided to settle in Southern Italy, and begin producing coffee with a small handcrafted roasting machine. His native Northern Italian industriousness and diligence, combined with the cheerfulness typical of his adopted South, soon lead to a thriving business. Domenico the coffee wizard, as he was known locally, watched his family and business grow together. His first roasting machine, called the Tornado, was capable of toasting 30 kilos of coffee at one time, and became his pride and joy. Unfortunately in 1903 Domenico Pellegrini the coffee wizard passed away unexpectedly from illness. Yet, he had enough time to hand down his art and passion to his children. The family business that proudly bears his name continues to live on today, and remains just as committed to producing high quality coffee, as the coffee wizard was all those years ago.";
  const addressPart = document.createElement("div");
  addressPart.classList.add("address-cont");
  aboutPage.append(addressPart);
  const addressBox = document.createElement("div");
  addressBox.classList.add("address-box");
  addressPart.append(addressBox);
  const map = document.createElement("img");
  map.setAttribute("src", "../imgs/map.png");
  map.setAttribute("alt", "Map Address");
  map.classList.add("map");
  addressBox.append(map);
  const numberAndAddress = document.createElement("div");
  numberAndAddress.classList.add("number-and-address");
  addressBox.append(numberAndAddress);
  const addressText = document.createElement("div");
  addressText.classList.add("address-text");
  numberAndAddress.append(addressText);
  addressText.innerText =
    "Address - 66 Bourke St, Melbourne VIC 3000, Austrlia";
  const phoneNumber = document.createElement("div");
  phoneNumber.classList.add("phone-number");
  numberAndAddress.append(phoneNumber);
  phoneNumber.innerText = "Phone Number - +61396621885";
}
export default loadAboutPage;
