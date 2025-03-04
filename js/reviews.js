const reviews = [
  {
    "customer_name": "Samantha Green",
    "star_rating": 5,
    "comment": "This product exceeded my expectations! It's high quality and easy to use. I highly recommend it to anyone looking for something reliable."
  },
  {
    "customer_name": "James Lee",
    "star_rating": 3,
    "comment": "It's okay, but I expected better performance for the price. It gets the job done, but I think there are better options out there."
  },
  {
    "customer_name": "Tara White",
    "star_rating": 4,
    "comment": "I really like this, but the setup process was a bit confusing. Once I figured it out, it's been great and I’m enjoying it so far."
  },
  {
    "customer_name": "Mark Davis",
    "star_rating": 2,
    "comment": "Not as good as advertised. It broke after a few uses, and I’m disappointed with the durability. Wouldn’t recommend."
  }
];


function displayReviews() {
  const container = document.getElementById('customerCards'); 

  reviews.forEach(review => {
    
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review-card'); 

   
    const name = document.createElement('h3');
    name.textContent = review.customer_name;
    reviewDiv.appendChild(name);

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${'★'.repeat(review.star_rating)}${'☆'.repeat(5 - review.star_rating)}`;
    reviewDiv.appendChild(rating);

   
    const comment = document.createElement('p');
    comment.textContent = `"${review.comment}"`;
    reviewDiv.appendChild(comment);

  
    container.appendChild(reviewDiv);
  });
}


document.addEventListener('DOMContentLoaded', displayReviews);