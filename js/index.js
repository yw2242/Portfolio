$(document).ready(function () {

  $('.hamburger').on('click', function () {
    var x = document.getElementById("nav-menu");
    var y = document.querySelectorAll(".horizontal span:nth-child(1)");
    var z = document.querySelectorAll(".horizontal span:nth-child(3)");

    if (x.style.display === "inline") {
      x.style.display = "none";
      y.classList.remove("open");
      z.classList.remove("open");
      console.log("AHOO!")
    } else {
      x.style.display = "inline";
      y.classList.add("open");
      z.classList.add("open");

    }
  });
});
