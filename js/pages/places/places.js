import { places, bookings } from "./places2.js";

export default function setPlaces() {
  const placesHTML = document.getElementById("places");
  const bookingDetails = document.getElementById("bookingTravels");
  const viewPlacesDetails = () => {
    places.forEach((place, idx) => {
      placesHTML.innerHTML += `
        <div class="card place place-famous rounded-4 border-0 shadow mb-3 p-3">
          <div class="d-flex g-0 align-items-center">
            <div>
              <img src="${place.img}" width="90" class="img-fluid rounded-start" alt="${place.place}" />
            </div>
            <div>
              <div class="card-body py-2">
                <h1 class="place-name fw-bold text-muted fs-6 h6">${place.place}, ${place.country}</h1>
                <small class="fw-medium m-0">Flights · Hotels · Resorts</small>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    bookings.forEach((content, idx) => {
      bookingDetails.innerHTML += `
        <aside class="cards rounded-4 pb-4">
          <div class="hotels-card-content d-flex flex-column justify-content-end h-100 align-items-center">
            <h2 class="text-white">${content.heading}</h2>
            <p class="text-white w-75 m-auto mb-3 mt-0">${content.about}</p>
            <a class="ms-3 w-auto p-3 btn-green-1 rounded-1 small fw-medium text-dark">
              <img src="./public/img/icons/show-flight.webp" class="me-1" alt=""> ${content.buttonMessage}
             </a>
          </div>
        </aside>
      `;
    });
  };

  viewPlacesDetails();
}
