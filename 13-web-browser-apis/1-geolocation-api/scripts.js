// Get Current Position
function locationSuccess(pos) {
  const coords = pos.coords
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function locationError(err) {
  console.log(err.code, err.message);
}

const locationOptions = {
  enableHighAccuracy: true, // use GPS if available
  timeout: 5000,
  maximumAge: 0, // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);


// watchPosition();
// const target = {
//   latitude: 41.37185715,
//   longitude: -71.3819274,
// }

// function watchSuccess(pos) {
//   const coords = pos.coords;
//   console.log(coords);

//   if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
//     console.log('You have reached your destination!');
//     navigator.geolocation.clearWatch(id);
//   }
// }

// function watchError(err) {
//   console.log(err.code, err.message);
// }

// const watchOptions = {
//   // enableHighAccuracy: true, // use GPS if available
//   // timeout: 5000,
//   // maximumAge: 0, // Do not use a cached position
// };

// const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);



const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker= L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13);

  marker.bindPopup('<strong>Hello World</strong> <br> This is my location');
});