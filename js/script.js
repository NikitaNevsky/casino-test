$(document).ready(function() {
 
    //E-mail Ajax Send
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "/mail.php", //Change
        data: th.serialize()
      }).done(function() {
        swal("Отлично!", "Ваша заявка успешно принята!", "success");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });

    $('.offer__slider').owlCarousel({
      center: true,
      items:1,
      loop:true,
      margin:16,
      dots:true,
      responsive:{
          600:{
              items:2
          }
      }
    });

    $(".types__item").on( "click", function() {
      $(".types__item").toggleClass("active");
    });
   
  });