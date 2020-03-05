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

      anime.timeline({})
      .add({
        targets: '.ml5 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 1000
      }).add({
        targets: '.ml5 .line',
        duration: 1000,
        easing: "easeOutExpo",
        translateY: function(e, i, l) {
          var offset = -0.625 + 0.625*2*i;
          return offset + "em";
        }
      }).add({
        targets: '.ml5 .ampersand',
        opacity: [0,1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600'
      }).add({
        targets: '.ml5 .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
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



