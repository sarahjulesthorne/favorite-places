/*Project is mainly an exercise in making XHR requests
The getPlacesData function makes the request
The loadPlacesRequest function parses the data from the request and passes an array from the data into the string builder function
The printToDom function and domStringBuilder functions work together to form a string of bootstrap cards using the array data, which they print to the dom */

//variable for later storing places array from JSON file
let places = [];

// XHR load function which parses JSON object text, assigns a key value of the places array to the places variable, and passes the places variable into the domStringBuilder function to print to page
function loadPlacesRequest() {
    const data = JSON.parse(this.responseText);
    places = data.places;
    domStringBuilder(places);
};

//XHR function which console logs when error occurs
function errorPlacesRequest() {
    console.error('Oh shit');
};

//print function which sets the inner HTML of the selected element to the designated variable's value
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//string builder function which passes in an array, iterates over that array to pass values from the array into a bootstrap card, and prints the final string of cards to the dom by calling the printToDom function
const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    domString += `<div class="row">`;
    arrayToPrint.forEach((selectedObject) => {
        domString += `<div class="col-sm-12 col-md-6 col-lg-4">`;
        domString += `<div class="card d-flex">`;
        domString += `<img src="${selectedObject.image}" class="card-img-top w-100" alt="${selectedObject.imageAlt}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${selectedObject.cityName}, ${selectedObject.cityState}</h5>`;
        domString += `<p class="card-text">${selectedObject.cityName} is one of my favorite places in this world or out of it! Some highlights include places like ${selectedObject.favoriteRestaurant} and ${selectedObject.favoriteBar}, where you can enjoy delicious food and drinks!</p>`;
        domString += `<p class="card-text">You can find rest and lodging at many lovely locations, but I recommend the ${selectedObject.favoriteHotel}, for the best night's sleep!</p>`;
        domString += `<p class="card-text">Finally, don't forget to stop by ${selectedObject.favoriteAttraction}, my favorite attraction in this fabulous city!</p>`;

        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    })
    domString += `</div>`;
    printToDom('placesContainer', domString);
};

//XHR function which makes an XHR request, sets event listeners on the load and error properties, and calls open and send methods
const getPlacesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', loadPlacesRequest);
    myRequest.addEventListener('error', errorPlacesRequest);
    myRequest.open('GET', './db/places.json');
    myRequest.send();
};

const init = () => {
    getPlacesData();
};
init()