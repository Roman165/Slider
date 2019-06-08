$(document).ready(function(){
  $('.slider').slick({
	   slidesToShow: 4,
  	 slidesToScroll: 1,
  	 arrows: true,
  	autoplay: true,
 	  autoplaySpeed: 2000,
  	responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
         arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
         arrows: false,
         slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});