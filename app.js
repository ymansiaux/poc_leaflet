// $(document).ready(function() {
//     console.log('ready!');
// });
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var popup = L.popup();

function onMapClick(e) {
    $("#map").css("opacity", Math.random());
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


var waitForEl = function (selector, callback) {
    if (jQuery(selector).length) {
      callback();
    } else {
      setTimeout(function () {
        waitForEl(selector, callback);
      }, 100);
    }
  };


//   waitForEl(
//     "#amount", () => {
//         getCurrentZoom();
//         getCurrentZoom().on('change', function () {
//             console;log()
//             $("#amount").val();
//           });
//     }
//   );


$('#rangeInput[type=range]').on('change', function () {
    console.log('rangeInput');
})

$('input[type=range]').on('change', function () {
    console.log("change");
    $(this).trigger('change');
});

// function getCurrentZoom() {
//     console.log($("#amount").val());
//     parseInt($("#amount").val());
// }


  function changeZoom(a) {
    map.setZoom(a); 
  }
