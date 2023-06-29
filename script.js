//Toggling the hamburger menu icon in the navigation to a cross when clicked and vice-versa
const navbarToggler = document.querySelector("#navbar-toggler");
const iconSpan = navbarToggler.querySelector("span");

navbarToggler.addEventListener("click", () => {
  iconSpan.classList.toggle("fa-bars");
  iconSpan.classList.toggle("fa-xmark");
});



//   AI CHATBOT
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotContainer = document.getElementById("chatbot-container");
const cross = document.getElementById("cross");
const dot = document.querySelector(".dot");
const chatbotBody = document.getElementById("chatbot-body");

// Add event listener to chatbot icon to show/hide chatbot container and hide the red dot
chatbotIcon.addEventListener("click", function () {
  chatbotContainer.style.display = "block";
  dot.style.display = "none";
  chatbotIcon.style.display = "none";
});

// Add event listener to cross button to hide chatbot container
cross.addEventListener("click", function () {
  chatbotContainer.style.display = "none";
  chatbotIcon.style.display = "block";
});

// Check if the chatbot icon has been clicked before and hide the red dot if it has
if (localStorage.getItem("chatbotClicked")) {
  dot.style.display = "none";
} else {
  localStorage.setItem("chatbotClicked", true);
}



// Get Direction Button
function getLocation() {
  var loader = document.querySelector(".spinn");
  var loc_button = document.querySelector(".location_btn .btn");
  loc_button.style.display = "none";
  loader.style.display = "block";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = position.coords.latitude; // latitude position
        var lon = position.coords.longitude; // longitude position
        var acc = position.coords.accuracy; // longitude accuracy in meters

        //Hogwarts Haven coordinates: 53.3440° N, 6.2675° W
        var tcdLat = 53.3440;
        var tcdLon = -6.2675;
        var url = "https://www.google.com/maps/dir/?api=1&origin=" + lat + "," + lon + "&destination=" + tcdLat + "," + tcdLon;

        // Open Google Maps in a new window with the directions URL
        window.open(url);

        loader.style.display = "none";
        loc_button.style.display = "block";
      },
      function (error) {
        loader.style.display = "none";
        loc_button.style.display = "block";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        }
      }
    );
  } else {
    loader.style.display = "none";
    alert("Geolocation is not supported by this browser.");
  }
}

