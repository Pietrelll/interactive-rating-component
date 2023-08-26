const submitBtn = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thankyou-card');
function submitForm() {
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'block'
};




submitBtn.addEventListener('click', submitForm);