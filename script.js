const abtbutton = document.getElementById("abt-button");
const info = document.getElementById("info-icon");
const canclebutton = document.getElementById("cancle-button");
abtbutton.addEventListener("click", () => {
  let aboutpage = document.getElementById("about-page");
  aboutpage.style.left = "0";
});

info.addEventListener("click", () => {
  let aboutpage = document.getElementById("about-page");
  aboutpage.style.left = "0";
});


canclebutton.addEventListener("click", () => {
  let aboutpage = document.getElementById("about-page");
  aboutpage.style.left = "100%";
})
