$(document).ready(function() {

// Wrap every letter in a span
  $('.ml12').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2500,
        delay: function(el, i) {
          return 500 + 30 * i;
        }
      }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: function(el, i) {
          return 900 + 30 * i;
        }
      });



      // window.onscroll = function() {scrollFunction()};

      // function scrollFunction() {
      //   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      //     document.getElementById("wrapper").style.width = "100%";
      //     document.getElementById("wrapper").style.margin = "0%";
 
      //   } else {
      //     document.getElementById("wrapper").style.width = "40%";
      //   }
      // } 


});



