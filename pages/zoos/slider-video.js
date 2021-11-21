let list = document.querySelector(".media__list");
let items = document.querySelectorAll(".media__item");
let mainVideo = document.querySelector(".media__main-video");
let controls = document.querySelector(".controls");
let controlsItem = document.querySelectorAll(".controls__item");

let currPage = 1;

document.addEventListener("DOMContentLoaded", function(){
  for(let i = 3; i < items.length; i++){
    items[i].classList.add("hidden-item");
  }
});

function hiddenAllItems() {
  items.forEach(item => {
    item.classList.add("hidden-item");
  });
}

list.addEventListener("click", function(e){
  let clickedVideo = e.target.firstElementChild;
  let littleVideoLink = clickedVideo.src;
  clickedVideo.src = mainVideo.src;
  mainVideo.src = littleVideoLink;
});

controlsItem.forEach((elem, ind) => {
  elem.addEventListener("click", function(e){
    hiddenAllItems();
    for(let i = 0, curr = ind*3; i < 3; i++){
      items[curr + i].classList.remove("hidden-item");
    }
})
});
