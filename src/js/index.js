import '../sass/style.scss';
//import 'bootstrap';
//import '../sass/app.scss';
//import { Home } from './Home';
import {  PageDetail } from './PageDetail';
import { PageList } from './PageList';

window.imageOut = function(event) {
  event.target.style.display = "none";
  event.target.nextElementSibling.style.display = "block";
}

window.hoverOut = function(event) {
  event.target.style.display = "none";
  event.target.previousElementSibling.style.display = "block";
}


let pageArgument;
//console.log(`La variable routes équivaut à undefined : ${typeof routes == 'undefined'}`)

var routes = {
  "home": PageList,
  "pagelist": PageList,
  "pagedetail": PageDetail
};

//console.log(`La variable routes équivaut à undefined : ${typeof routes == 'undefined'}`)



const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  if (path[0] == "home") { 
    pageArgument = "default"
  }
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());


window.searchByKeyword = function(e){
  e.preventDefault()
  PageList(document.querySelector('input[type="text"]').value)
}

window.displayMore = function() {
    console.log(`Il reste ${document.querySelectorAll('div.not-visible').length} éléments invisibles`)

    if (document.querySelectorAll('div.not-visible').length >= 9) {
      console.log(`Il reste ${document.querySelectorAll('div.not-visible').length} éléments invisibles`)
      for (let i = 0; i<9; i++) {
        console.log(i)
        if (document.querySelectorAll('div.not-visible')[i]) {
          document.querySelectorAll('div.not-visible')[i].className = 'visible';
        }
      }
    }
    else {
      document.querySelector("#seeMore").style.display = "none";

    }
}

window.filterByPlatform = function() {
  const selectedPlatform = document.querySelector("select").value

  if (selectedPlatform == "all") {
    document.querySelectorAll("div.visible>p").forEach(paragraph =>
      {
        paragraph.parentElement.style.display = "block";
      })
  }
  else {
  document.querySelectorAll("div.visible>p").forEach(paragraph =>
    {
      if (!paragraph.innerHTML.includes(selectedPlatform)) {
        paragraph.parentElement.style.display = "none";
      }
      else {
        paragraph.parentElement.style.display = "block";
      }
    })
  }
}

document.querySelector('.jeuxliste').addEventListener('click', async (event => {
  event.preventDefault();
}))
//document.querySelector('pagedetail').addEventListener('click', async (event => {
  //event.preventDefault();
//}))

