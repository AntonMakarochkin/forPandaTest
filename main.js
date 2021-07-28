/* let arr = [2, 3, 5, 6, 7, 1]
function sum(arr, target) {
  let obj = {}

  for(let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i
  }

  for(let i = 0; i < arr.length; i++) {

    let dif = target - arr[i]

    if (obj[dif] && obj[dif] !== i) {
      return [i, obj[dif]]
    }

  } return []
}

console.log(sum(arr, 7))
 */


/* let arr = ['toto', 'toto', 'c', 'a', 'a', 'b'  ]

  let eAcc = {}
for (let i = 0; i < arr.length; i++) {
  let current = arr[i]
  if (eAcc[current]) eAcc[current] = eAcc[current] + 1
  else eAcc[current] = 1
}

let result = Object.keys(eAcc).sort((a, b) => eAcc[b] - eAcc[a])



console.log(result) */


/* let array = [1, 3, 2, 5, 6]

function sum(arr, target) {
 let left = 0
 let right = arr.length - 1
 let mid

 while(left <= right) {

   mid = Math.round( (right - left)/2) + left 

   if (target == arr[mid]) return mid
   else if (target < arr[mid]) right = mid - 1
   else left = mid + 1
 }
}

console.log(sum(array, 5)) */


/* function fizBuz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) console.log('fiz')
    else if( i % 5 === 0) console.log('buz')
    else if( i % 3 === 0 && i % 5 === 0) console.log('fizbuzz')
    else console.log(i)
  }
}

fizBuz(100) */


/* function bank(hm) {
  const avalibaleNotes = [100, 50, 20, 10]
  const result = []
  if (hm > 0) {

    for(let i = 0; i < avalibaleNotes.length; i++) {

      let current = avalibaleNotes[i]
      while (hm - current >= 0) {
        hm = hm - current
        result.push(current)
      }
    }

  } else console.log('mode')
  return result
}

console.log(bank(230)) */

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