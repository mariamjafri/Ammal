console.log("Script Running!");

const country = document.querySelector("#country");
const city = document.querySelector("#city");
const submitButton = document.querySelector("#submit");
const locationButton = document.querySelector("#location");

var requestOptions = {
  method: 'GET',
};
fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDPUmoWHg503QDXoUCKcnj5co1GIHIW6Xw", requestOptions)
//fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&format=json&apiKey=46606bb53cd243ac8a0005c230e6d47a", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//initial coordinates (Naperville)
let latitude = 41.8755616;
let longitude = -87.6244212;


submitButton.addEventListener("click", getResturaunt);


locationButton.addEventListener("click", getHalalRestaurant);

async function getHalalRestaurant(position) {
  console.log("Location button clicked");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(updateRestaurantMap);
    console.log("geolocation");
  } else {
    locationButton.innerHTML = "Geolocation is not supported by this browser.";
    console.log("Not supported");
  }
  
}

function updateRestaurantMap(position) {
  console.log(position);
  console.log(position.coords);
  
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  initMap();
}







var map;
var service;
var infowindow;






// console.log(lat);
// console.log(long);


// This function is clicked when the submit button is pressed

async function getResturaunt() {
  let cityName = city.value;
  console.log("Getting resturaunt");
  const myQuery = 'https://maps.googleapis.com/maps/api/geocode/json?long_name=${cityName}&key=AIzaSyDPUmoWHg503QDXoUCKcnj5co1GIHIW6Xw';
  //const myQuery = `https://api.geoapify.com/v1/geocode/search?city=${cityName}&format=json&apiKey=46606bb53cd243ac8a0005c230e6d47a`;
  console.log("My query:" + myQuery);
  var response = await fetch(myQuery);
  console.log(response);
  const myJson = await response.json();
  // console.log(myJson);
  latitude = myJson.results[0].lat;
  longitude = myJson.results[0].lon;
  // console.log(lat);
  // console.log(long);
  initMap();

};


function initMap() {
  //to refresh the map
  google.maps.event.trigger(map, 'resize');
  // this is where the position of the map is set to
  var sydney = new google.maps.LatLng(`${latitude}`, `${longitude}`);
  console.log(sydney);
  // console.log(lat);
  // console.log(long);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
    document.getElementById('map'), { center: sydney, zoom: 11 });

  // var request = {
  //   query: 'Halal Resturaunt',
  //   fields: ['name'],
  // };

  const newService = new google.maps.places.PlacesService(map);
  newService.nearbySearch({
    location: new google.maps.LatLng(`${latitude}`, `${longitude}`),
    radius: `15000`,
    type: [`restaurant`],
    keyword: `halal`,
    // openNow: true,
  }, callback);
}


function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
    console.log(results);
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}




function service2() {
  const request = {
    location: new google.maps.LatLng(`${latitude}`, `${longitude}`),
    radius: `20000`,
    type: [`restaurant`],
    keyword: `halal`,
    // openNow: true,
  };

  const service2 = new google.maps.places.PlacesService(map);
  service2.nearbySearch(request, callback);

}

function initialize() {
  initMap();
  // service2();
}


 //   service.findPlaceFromQuery(request, function(results, status) {
  //     if (status === google.maps.places.PlacesServiceStatus.OK) {
  //       for (var i = 0; i < results.length; i++) {
  //         // createMarker(results[i]);
  //       }
  //       map.setCenter(results[0].geometry.location);
  //     }
  //   });
  // }




// function displayRestaurantAround() {
//   return new Promise((resolve, reject) => {
//     this.service.nearbySearch({
//       location: currentUserPosition,
//       radius: 5000,
//       types: ['restaurant']
//     }, (res) => {
//       resolve(res);
//     });
//   });
// }











// console.log("Script Running!");

// const country = document.querySelector("#country");
// const city = document.querySelector("#city");
// const submitButton = document.querySelector("#submit");

// var requestOptions = {
//   method: 'GET',
// };

// fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=cd7208d27c0b4aa0be2b53efdd8981be", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



// submitButton.addEventListener("click", getResturaunt);






// var map;
// var service;
// var infowindow;



// //initial coordinates (Naperville)
// let latitude = 41.7728699;
// let longitude = -88.1479278;


// // console.log(lat);
// // console.log(long);


// // This function is clicked when the submit button is pressed

// async function getResturaunt() {
//   let cityName = city.value;
//   console.log("Getting resturaunt");
//   const myQuery = `https://api.geoapify.com/v1/geocode/search?city=${cityName}&format=json&apiKey=cd7208d27c0b4aa0be2b53efdd8981be`;
//   console.log("My query:" + myQuery);
//   var response = await fetch(myQuery);
//   console.log(response);
//   const myJson = await response.json();
//   // console.log(myJson);
//   latitude = myJson.results[0].lat;
//   longitude = myJson.results[0].lon;
//   // console.log(lat);
//   // console.log(long);
//   initMap();

// };


// function initMap() {
//   //to refresh the map
//   google.maps.event.trigger(map, 'resize');
//   // this is where the position of the map is set to
//   var sydney = new google.maps.LatLng(`${latitude}`, `${longitude}`);
//   console.log(sydney);
//   // console.log(lat);
//   // console.log(long);

//   infowindow = new google.maps.InfoWindow();

//   map = new google.maps.Map(
//     document.getElementById('map'), { center: sydney, zoom: 15 });

//   var request = {
//     query: 'Halal Resturaunt',
//     fields: ['name'],
//   };

// }





// function service2 () {
//   const request = {
//   location: new google.maps.LatLng(`${latitude}`, `${longitude}`),
//   radius: `8500`,
//   type: [`restaurant`],
//   keyword: `halal`,
//   openNow: true,
// };

//  const service2 = new google.maps.places.PlacesService(map);
// service2.nearbySearch(request, callback);

// }

// function initialize() {
//   initMap();
//   service2();
// }


//  //   service.findPlaceFromQuery(request, function(results, status) {
//   //     if (status === google.maps.places.PlacesServiceStatus.OK) {
//   //       for (var i = 0; i < results.length; i++) {
//   //         // createMarker(results[i]);
//   //       }
//   //       map.setCenter(results[0].geometry.location);
//   //     }
//   //   });
//   // }




// // function displayRestaurantAround() {
// //   return new Promise((resolve, reject) => {
// //     this.service.nearbySearch({
// //       location: currentUserPosition,
// //       radius: 5000,
// //       types: ['restaurant']
// //     }, (res) => {
// //       resolve(res);
// //     });
// //   });
//

