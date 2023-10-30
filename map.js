// Get the map container element
var mapContainer = document.getElementById("map");

// Initialize the map
var map = L.map(mapContainer).setView([-6.16, 39.16], 9); // Zanzibar, Tanzania coordinates and zoom level

// Add a tile layer (using OpenStreetMap data)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(map);

// Geocode the location using Nominatim
var locationName = "Zanzibar, Tanzania"; // The location you want to geocode
var geocodeUrl = "https://nominatim.openstreetmap.org/search?format=json&q=" + encodeURIComponent(locationName);

fetch(geocodeUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (data.length > 0) {
            var lat = parseFloat(data[0].lat);
            var lon = parseFloat(data[0].lon);

            // Add a marker for the location
            L.marker([lat, lon]).addTo(map)
                .bindPopup("Postcode: " + postcode)
                .openPopup();
        } else {
            console.log("No results found for the given postcode.");
        }
    })
    .catch(function(error) {
        console.error("Error fetching geolocation data:", error);
    });
