function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  } 




// $(document).ready(function() {

//     anime.timeline({loop: false})
//   .add({
//     targets: '.ml5 .line',
//     opacity: [0.5,1],
//     scaleX: [0, 1],
//     easing: "easeInOutExpo",
//     duration: 700
//   }).add({
//     targets: '.ml5 .line',
//     duration: 600,
//     easing: "easeOutExpo",
//     translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
//   }).add({
//     targets: '.ml5 .ampersand',
//     opacity: [0,1],
//     scaleY: [0.5, 1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=600'
//   }).add({
//     targets: '.ml5 .letters-left',
//     opacity: [0,1],
//     translateX: ["0.5em", 0],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=300'
//   }).add({
//     targets: '.ml5 .letters-right',
//     opacity: [0,1],
//     translateX: ["-0.5em", 0],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=600'
//   }).add({
//     targets: '.ml5',
//     opacity: 1,
//     duration: 10000,
//     easing: "easeOutExpo",
//     delay: 10000
//   });
// });