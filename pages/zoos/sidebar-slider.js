(function() {
  let list = document.querySelector(".sidebar__list"),
  prevBtn = document.querySelector(".sidebar__prev"),
  nextBtn = document.querySelector(".sidebar__next"),
  items = document.querySelectorAll(".sidebar__item");

  let activeItemInd = Object.values(items).findIndex((item) => (item.classList.contains("sidebar__item--active")));

  prevBtn.addEventListener("click", prevItemActive);
  nextBtn.addEventListener("click", nextItemActive);

  function nextItemActive() {
    if(activeItemInd < 3) activeItemInd++;
    else activeItemInd = 0;
    openActiveItemPage();
  }

  function prevItemActive() {
    if(activeItemInd > 1) activeItemInd--;
    else activeItemInd = 3;
    openActiveItemPage();
  }

  function openActiveItemPage() {
    let itemLink = items[activeItemInd].children[0].getAttribute("href");
    location.href = itemLink;
  }
}())
