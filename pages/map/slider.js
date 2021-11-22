(function() {
  let btnPrev = document.querySelector(".page-map__slider-content .slider__prev");
  let btnNext = document.querySelector(".page-map__slider-content .slider__next");
  let list = document.querySelector(".page-map__list");
  let items = document.querySelectorAll(".page-map__item");

  let paginationInput = document.querySelector(".page-map__pagination .pagination__range");
  let paginationText = document.querySelector(".page-map__pagination .pagination__curr");

  let markers = document.querySelectorAll(".page-map .markers__item");
  let linkToAnimal = document.querySelector(".page-map__btn");

  let activeElemNumb = 2;
  let hiddenInd = [];

  let hiddenElementsArr = Object.values(items).filter((el, ind) => {
    let coords = el.getBoundingClientRect();
    if (coords.left >= list.offsetWidth) return ind;
  });

  window.addEventListener(`resize`, () => {
    hiddenElementsArr = Object.values(items).filter((el, ind) => {
      let coords = el.getBoundingClientRect();
      if (coords.left >= list.offsetWidth) return ind;
    });
  });

  function changeActiveElem(){
      items.forEach(elem => {
          elem.classList.remove("page-map__item--active");
      });
      items[activeElemNumb-1].classList.add("page-map__item--active");
      if(window.innerWidth <= 1200) hiddenElementsForSmallScreen();
  }

  function hiddenElementsForSmallScreen() {
    if(hiddenElementsArr.includes(items[activeElemNumb-1])){
      let ind = hiddenElementsArr.findIndex((el) => (el === items[activeElemNumb-1]));
      hiddenElements(0, ind + 1);
    }
    else {
      showAllItems();
    }
  }

  function changeActiveMarker() {
    markers.forEach(elem => {
      elem.classList.remove("markers__item--active");
    });

    if(activeElemNumb < 5) { // Для остальных не созданы страницы с животными
        markers[activeElemNumb-1].classList.add("markers__item--active");
        let animalName = markers[activeElemNumb-1].title;
        linkToAnimal.href = `../zoos/${animalName}/`;
    }
    else{
      linkToAnimal.href = "#";
    }
  }

  function changePaginationValue(){
    paginationInput.value = activeElemNumb;
    paginationText.textContent = "0" + activeElemNumb;
  }

  function hiddenElements(from, to) {
    showAllItems();
    for(let i = from; i < to; i++){
      items[i].classList.add("hidden-item");
      hiddenInd.push(i);
    }
  }

  function showAllItems(){
    items.forEach(item => item.classList.remove("hidden-item"));
    hiddenInd = [];
  }

  function changeActive() {
    changePaginationValue();
    changeActiveElem();
    changeActiveMarker();
  }

  paginationInput.addEventListener("input", function (){
      activeElemNumb = paginationInput.value;
      changeActive();
  });

  collectionHandleClick(markers);
  collectionHandleClick(items);

  function collectionHandleClick(collection) {
    collection.forEach((item, ind) => {
      item.addEventListener("click", function(){
        activeElemNumb = ind + 1;
        changeActive();
      })
    });
  }

  btnNext.addEventListener("click", function(){
    if(activeElemNumb < 8){
      activeElemNumb++;
    }
    else{
      activeElemNumb = 1;
    }
    changeActive();
  });

  btnPrev.addEventListener("click", function(){
    if(activeElemNumb > 1){
      activeElemNumb--;
    }
    else{
      activeElemNumb = 8;
    }
    changeActive();
  });
}())