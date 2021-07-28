

let color = document.querySelector('.color1')
let bc = document.querySelector('.background1')
let swatch = document.querySelector('.swatch')
let kis = document.querySelector('.kis')



document.addEventListener("DOMContentLoaded", function() {
  swatch.classList.add('drag')
});


  color.addEventListener('click', function() {
    color.style.backgroundColor = 'blue'
    color.style.color = 'white'
    swatch.classList.add('drag')
    kis.classList.remove('drag')
    bc.style.backgroundColor = 'white'
    bc.style.color = 'black'


  })
  bc.addEventListener('click', function() {
    bc.style.backgroundColor = 'blue'
    swatch.classList.remove('drag')
    kis.classList.add('drag')
    color.style.color = 'black'
    bc.style.color = 'white'

    color.style.backgroundColor = 'white'
  })


$( function() {
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }

 
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
    green = $( "#green" ).slider( "value" ),
    blue = $( "#blue" ).slider( "value" ),
    hex = hexFromRGB( red, green, blue );
    if ($(".kis").hasClass("drag")) {
      $( ".kis" ).css( "color", "#" + hex );
    } else {
      $( ".swatch" ).css( "background-color", "#" + hex );

    }
  }
  
  
  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 140 );
  $( "#blue" ).slider( "value", 60 );
} );
