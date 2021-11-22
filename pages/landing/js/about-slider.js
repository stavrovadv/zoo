(function(){
  let list = document.querySelector(".about-slider__list"),
  items = document.querySelectorAll(".about-slider__item"),
  pagination = document.querySelector(".about .pagination__range"),
  paginationText = document.querySelector(".about .pagination__curr");

  let activeItemInd = 0;
  let currTranslateX = 0;

  let widthItem = items[0].getBoundingClientRect().width;

  window.addEventListener("resize", function() {
    widthItem = items[0].getBoundingClientRect().width;
    changeActive();
  });

  pagination.addEventListener("input", () => changeActive());

  function changeActive() {
    let activeInd = pagination.value-1;
    paginationText.textContent = `0${pagination.value}`;
    currTranslateX = -widthItem * activeInd;
    items.forEach((item) => item.style.transform = `translateX(${currTranslateX}px)`);
  }
}())
