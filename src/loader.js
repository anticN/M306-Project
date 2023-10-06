/**
 * @fileoverview Loader functions for the application.
 *
 */

function showLoaderz() {
  let x = document.getElementById("loaderz");
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function showLoaderv() {
  let x = document.getElementById("loaderv");
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function hideLoaderz() {
  let x = document.getElementById("loaderz");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function hideLoaderv() {
  let x = document.getElementById("loaderv");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function openGraph(evt, graphName) {

  let i, tabcontent, tabutton;


  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }


  tabutton = document.getElementsByClassName("tabutton");
  for (i = 0; i < tabutton.length; i++) {
      tabutton[i].className = tabutton[i].className.replace(" active", "");
  }


  document.getElementById(graphName).style.display = "block";
  evt.currentTarget.className += " active";
}
