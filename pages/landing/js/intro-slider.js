let introList = document.querySelector(".intro-slider__list");
let introItems = document.querySelectorAll(".intro-slider__item");
let beforeItems = document.querySelectorAll(".intro-slider__item--before");
let afterItems = document.querySelectorAll(".intro-slider__item--after");
let introPagination = document.querySelector(".pagination--intro .pagination__range");
let introPaginationText = document.querySelector(".pagination--intro .pagination__curr");
let linksToAnimals = document.querySelectorAll(".intro-slider__btns a:first-of-type");
let btnlinkToAnimal = document.querySelector(".intro__btn");

let currNumb = 2;
let setHiddenItems = new Set();

function hiddenAdditionalPoints(){
  beforeItems[1].classList.add("hidden-item");
  afterItems[0].classList.add("hidden-item");
}

function showAdditionalPoints(){
  if(currNumb === 1){
    beforeItems[1].classList.remove("hidden-item");
  }
  else if(currNumb === introItems.length){
      afterItems[0].classList.remove("hidden-item");
  }
}

function hiddenElements(from, to){
  for(let i = from; i < to; i++){
      introItems[i].classList.add("hidden-item");
      setHiddenItems.add(i);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  hiddenAdditionalPoints();
  hiddenElements(5, introItems.length);
});

function changePaginationValues(){
  introPagination.value = currNumb;
  introPaginationText.textContent = "0" + currNumb;
}

function removeActive(){
  introItems.forEach(item => {
    item.classList.remove("intro-slider__item--active");
  });
};

function changeActive(indActive){
  removeActive();
  btnlinkToAnimal.href = linksToAnimals[indActive].href;
  introItems[indActive].classList.add("intro-slider__item--active");
  currNumb = indActive + 1;
  changePaginationValues();
  hiddenAdditionalPoints();
  introItems.forEach(item => item.classList.remove("hidden-item"));
  hiddenElements(0, indActive-1);
  hiddenElements(indActive+4, introItems.length);
  showAdditionalPoints();
}

introPagination.addEventListener("input", function(){
  changeActive(introPagination.value-1);
});

introItems.forEach((item, ind) => {
  item.addEventListener("click", function(){
    changeActive(ind);
  })
});
