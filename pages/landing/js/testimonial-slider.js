(function(){
  let list = document.querySelector(".testimonial__list") ,
    items = document.querySelectorAll(".testimonial__item"),
    prevBtn = document.querySelector(".testimonial .slider__prev"),
    nextBtn = document.querySelector(".testimonial .slider__next"),
    pagination = document.querySelector(".testimonial .pagination__range"),
    paginationText = document.querySelector(".testimonial .pagination__curr");
    
  let activeInd = 0;
  let currTranslateX = 0;

  let widthItem = items[0].getBoundingClientRect().width;
  let translateXSize = (widthItem + parseInt(getComputedStyle(items[0]).marginRight)) * 2;

  window.addEventListener("resize", function() {
    widthItem = items[0].getBoundingClientRect().width;
    translateXSize = (widthItem + items[0].style.margin);
    changeActive();
  });

  pagination.addEventListener("input", changeActive);
  nextBtn.addEventListener("click", function() {
    let activeItem = activeInd + 2; // +1 индекс в значение и +1 для перехода к след эл-там
    pagination.value = (activeItem <= 4) ? activeItem : 0;
    changeActive();
  });
  prevBtn.addEventListener("click", function() {
    let activeItem = activeInd;
    pagination.value = (activeItem > 0) ? activeItem : 4;
    changeActive();
  });

  function changeActive() {
    activeInd = pagination.value-1;
    paginationText.textContent = `0${pagination.value}`;
    currTranslateX = -translateXSize * (activeInd);
    console.log(activeInd + " " + currTranslateX);
    items.forEach((item) => item.style.transform = `translateX(${currTranslateX}px)`);
  }
}())