// LOGIC for SWITCHING TABS
const tabs = document.querySelectorAll(".cg-tab-main");
const all_content = document.querySelectorAll(".content-body");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    all_content.forEach((contentBody) => {
      contentBody.classList.remove("show-active");
    });
    all_content[index].classList.add("show-active");
  });
});
