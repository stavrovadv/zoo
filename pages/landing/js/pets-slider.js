(function() {
  let slider = document.querySelector(".pets__slider .slider__content");
  let btnPrev = document.querySelector(".pets__slider .slider__prev");
  let btnNext = document.querySelector(".pets__slider .slider__next");
  let list = document.querySelector(".pets-slider__list");
  let items = document.querySelectorAll(".pets__slider .slider__item");
  let pagination = document.querySelector(".pets__slider .pagination__range");
  let paginationText = document.querySelector(".pets__slider .pagination__curr");

  let hiddenInd = [];
  let currElemVal = 1;
  let countInRow = (document.body.clientWidth > 480) ? 4 : 2;

  window.addEventListener("resize", function() {
    countInRow = (document.body.clientWidth > 480) ? 4 : 2;
  });

  btnNext.addEventListener("click", next);
  btnPrev.addEventListener("click", prev);
  pagination.addEventListener("change", paginationChange);

  function showAllItems() {
    items.forEach(item => {
        item.classList.remove("hidden-item");
    });
    hiddenInd = [];
  }

  function hiddenItems(from, to) {
    showAllItems();
    for (let i = from; i <= to; i++){
        items[i].classList.add("hidden-item");
        hiddenInd.push(i);
    }
  }

  function changeRangeValue (){
    pagination.value = currElemVal;
    paginationText.textContent = "0" + currElemVal;
  }

  function changeActiveElement (){
      items.forEach(elem => {
          elem.classList.remove("slider__item--active");
      });
      items[currElemVal-1].classList.add("slider__item--active");
      changeRangeValue();
      (currElemVal > countInRow) ? hiddenItems(0, currElemVal-(countInRow+1)) : showAllItems();
  }

  function paginationChange() {
    currElemVal = pagination.value;
    changeActiveElement();
  }

  function prev() {
    currElemVal = (currElemVal > 1) ? currElemVal - 1 : 8;
    changeActiveElement();
  }

  function next() {
    currElemVal = (currElemVal < 8) ? currElemVal + 1 : 1;
    changeActiveElement();
  }
}())