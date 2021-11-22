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

list.addEventListener("click", (e) => changeVideo(e));

function changeVideo(e) {
  let clickedPreview = e.target.children[0];
  clickedPreview.src = `https://i.ytimg.com/vi/${mainVideo.dataset.id}/hqdefault.jpg`;
  mainVideo.src = `https://www.youtube.com/embed/${clickedPreview.dataset.id}`;

  let clickedDataId = clickedPreview.dataset.id;
  clickedPreview.dataset.id = mainVideo.dataset.id;
  mainVideo.dataset.id = clickedDataId;
}

controlsItem.forEach((elem, ind) => {
  elem.addEventListener("click", function(e){
    hiddenAllItems();
    for(let i = 0, curr = ind*3; i < 3; i++){
      items[curr + i].classList.remove("hidden-item");
    }
})
});
