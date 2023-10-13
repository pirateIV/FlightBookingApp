import { places } from "./pages/places.js";

(function App(params) {
  const placesHTML = document.getElementById("places");
  places.forEach((place, idx) => {
    placesHTML.innerHTML += `
      <div class="card place place-famous rounded-4 border-0 shadow mb-3 p-3">
        <div class="d-flex g-0 align-items-center">
          <div>
            <img src="${place.img}" width="90" class="img-fluid rounded-start" alt="${place.place}" />
          </div>
          <div>
            <div class="card-body py-2">
              <h6 class="place-name fw-bold text-muted fs-6">${place.place}, ${place.country}</h6>
              <small class="fw-medium m-0">Flights · Hotels · Resorts</small>
            </div>
          </div>
        </div>
      </div>
    `;
  });
})();
