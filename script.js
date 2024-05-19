function getLocation() {
    const status = document.getElementById('status');
    const locationOutput = document.getElementById('location');

    if (navigator.geolocation) {
        status.textContent = 'Requesting location...';

        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        status.textContent = 'Geolocation is not supported by your browser';
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = 'Location found';
        locationOutput.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    console.log($latitude);
}

//call the fungtion

getLocation();





//send to email 
//must be remember to download requirements

//npm install nodemailer


