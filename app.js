const submitBtn = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thankyou-card');
const form = document.querySelector('form');
const userRatingSpan = document.querySelector('.user-rating');

function submitForm() {
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'block';
    const selectedOption = document.querySelector('input[name="rating"]:checked');
    const selectedValue = selectedOption.value;
    userRatingSpan.innerHTML = selectedValue;

};


form.addEventListener('submit', submitForm);