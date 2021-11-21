let wrap = document.querySelector(".pets__slider");
let slider = document.querySelector(".pets__slider .slider__content");
let btnPrev = document.querySelector(".pets__slider .slider__prev");
let btnNext = document.querySelector(".pets__slider .slider__next");
let list = document.querySelector(".pets-slider__list");
let items = document.querySelectorAll(".pets__slider .slider__item");
let pagination = document.querySelector(".pets__slider .pagination__range");
let paginationText = document.querySelector(".pets__slider .pagination__curr");

let hiddenInd = [];
let currElemInd = 1;

function showAllItems() {
  items.forEach(item => {
      item.classList.remove("hidden-item");
  });
  hiddenInd = [];
}

function showItems(from, to) {
  for (let i = from; i <= to; i++){
      items[i].classList.remove("hidden-item");
      if(i === hiddenInd[hiddenInd.length-1]) hiddenInd.pop();
  }
}

function hiddenItems(from, to) {
  for (let i = from; i <= to; i++){
      items[i].classList.add("hidden-item");
      hiddenInd.push(i);
  }
}

function changeRangeValue (){
    pagination.value = currElemInd;
    paginationText.textContent = "0" + currElemInd;
}

function changeActiveElement (){
    items.forEach(elem => {
        elem.classList.remove("slider__item--active");
    });
    items[currElemInd-1].classList.add("slider__item--active");
}

document.addEventListener("load", showAllItems);
wrap.addEventListener("click", changeRangeValue);

pagination.addEventListener("change", function(){
  currElemInd = pagination.value;
  changeActiveElement();
  changeRangeValue();
  if(currElemInd > 4) {
      hiddenItems(0, currElemInd-5);
  }
  else {
      showAllItems();
  }
});

btnPrev.addEventListener("click", function (){
    if(currElemInd > 1) {
      currElemInd--;
      changeActiveElement();
      if(currElemInd-1 === hiddenInd[hiddenInd.length-1]){
        showItems(currElemInd-1, currElemInd);
      }
    }
    else {
      currElemInd = 8;
      changeActiveElement();
      hiddenItems(0, 3);
    }
});

btnNext.addEventListener("click", function (){
    if(currElemInd < 8) {
        currElemInd++;
        changeActiveElement();
        if(currElemInd > 4) {
            hiddenItems((currElemInd-5), (currElemInd-5));
        }
    }
    else {
      currElemInd = 1;
      changeActiveElement();
      showAllItems();
    }
});
