function removeExistingPage() {
  const existingHomePage = document.querySelector(".home");
  if (existingHomePage) {
    existingHomePage.remove();
  }
  const existingMenuPage = document.querySelector(".menu");
  if (existingMenuPage) {
    existingMenuPage.remove();
  }
  const existingAboutPage = document.querySelector(".about");
  if (existingAboutPage) {
    existingAboutPage.remove();
  }
}
export default removeExistingPage;
