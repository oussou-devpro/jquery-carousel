$(document).ready(function() {

  // Mise en place
  let $slider = $('.slider'); // selection de la class du carrousel
  let $slide = 'li'; // selection des 'li' contenant les images

  let $transition_time = 1000; // 1 seconde
  let $time_between_slides = 2000; // 2 secondes

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut(); // Effet fadeOut

  // Slide active
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // defilement automatique
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // boucle pour revenir au début


      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides
  );

  // gestion du click sur les button

  //let $carrousel = $('.slider ul'), // on cible le bloc du carrousel
  let $slideli = $('li');
  let indexSlide = $slideli.length - 1; // on définit l'index du dernier élément
  let i = 0; // on initialise un compteur
  let $currentSlide = slides().eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

  //$img.css('display', 'none'); // on cache les images
  //$currentImg.css('display', 'block'); // on affiche seulement l'image courante

  $('.button-right').click(function(){ // img suivante
      i++;

      if( i <= indexSlide ){
          $slideli.css('display', 'none'); // on cache les images
          $currentSlide = $slideli.eq(i); // on définit la nouvelle image
          $currentSlide.css('display', 'block'); // puis on l'affiche
      }
      else{
          i = indexSlide;
      }

  });

  $('.button-left').click(function(){ // img précédente
      i--;

      if( i >= 0 ){
          $slideli.css('display', 'none');
          $currentSlide = $slideli.eq(i);
          $currentSlide.css('display', 'block');
      }
      else{
          i = 0;
      }

  });

});
