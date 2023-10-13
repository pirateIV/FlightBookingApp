import { reviewList } from "./review2.js"

export const reviews = () => {
  const reviews = document.getElementById('review')
  reviews.style.gridTemplateColumns = `repeat( ${(reviewList.length + 1)} , ${31.7}%)`

  reviewList.forEach((review, idx) => {
    let stars = ''
    for(let i =  0; i < review.rating; i++) {
      stars += `<img src="./public/img/icons/star.png" width="15" alt="s"`
    }    
    reviews.innerHTML += `
      <div class="review-card card border-0 rounded-4 p-4 d-flex flex-column justify-content-between justify-self-center">
        <div class="rev-heading nav align-items-center flex-column">
          <figcaption>
            <h5 class="fw-bold fs-5 mb-4 pb-1"><q>${review.heading}</q </h5>
          </figcaption>
          <p class="text-gray fw-medium" style="font-size: 14px;">${review.comment}</p>
        </div>
        <button class="w-auto border-0 bg-transparent w-100 text-end fw-600">View More</button>
        <div class="ratings mb-3">${stars}</div>

        <div class="about-user">
          <div class="rev-user-name fw-600">${review.name}</div>
          <small class="text-gray fw-500">${review.company}</small>
          <div class="user-comp mt-2 mb-4">
            <img src="./public/img/icons/google_icon.png" alt="">
            <span class="fw-500 ms-1 text-gray">Google</span>
          </div>
          <img src="${review.imgPath}" class="pb-0 rounded-3" style="width: 100% ;" alt="">
        </div>
     </div>
    `
  })
  
  // <img src="./public/img/icons/star.png" width="15" alt="s" class="star" />
}