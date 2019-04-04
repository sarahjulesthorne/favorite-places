let places = [];

function loadPlacesRequest() {
    const data = JSON.parse(this.responseText);
    places = data.places;
    domStringBuilder(places);
};

function errorPlacesRequest() {
    console.error('Oh shit');
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    domString += `<div class="row">`;
    arrayToPrint.forEach((selectedObject) => {
        domString += `<div class="col-sm-12 col-md-6 col-lg-4">`;
        domString += `<div class="card">`;
        domString += `<img src="${selectedObject.image}" class="card-img-top" alt="${selectedObject.imageAlt}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${selectedObject.cityName}, ${selectedObject.cityState}</h5>`;
        domString += `<p class="card-text">${selectedObject.cityName} is one of my favorite places in this world or out of it! Some highlights include places like ${selectedObject.favoriteRestaurant} and ${selectedObject.favoriteBar}, where you can enjoy delicious food and drinks!</p>`;
        domString += `<p class="card-text">You can find rest and lodging at many lovely locations, but I recommend the ${selectedObject.favoriteHotel}, for the best night's sleep!</p>`;
        domString += `<p class="card-text">Finally, don't forget to stop by ${selectedObject.favoriteAttraction}, my favorite attraction in this fabulous city!</p>`;

        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
        printToDom('placesContainer', domString);
    })
    domString += `</div>`;
};

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