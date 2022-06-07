
window.onscroll = function() {myFunction()};

const nav = document.getElementById("nav");
const about = document.getElementById("about");
const navHeigth = nav.offsetHeight;
const basePadding = window.getComputedStyle(about, null)
.getPropertyValue("padding-top")
.split("px")[0]; 
const basePaddingDone = (parseInt(basePadding) + parseInt(navHeigth));
// console.log(parseInt(basePadding) + parseInt(navHeigth));
// console.log(navHeigth);

const sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky"),
    about.style.paddingTop = (basePaddingDone) + "px";
  } else {
    nav.classList.remove("sticky"),
    about.style.paddingTop = basePadding + "px";
  }
}
console.log(basePaddingDone);