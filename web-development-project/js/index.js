console.log("In the JS folder");

//Slider buttons
const sliderImages = document.querySelectorAll('.hero-container-slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let current = 0;

//Slider functions for Home page
function reset() {
  sliderImages.forEach(img => img.style.display = 'none');
}

function startSlide() {
  reset();
  sliderImages[current].style.display = 'block';
}

function slideNext() {
  reset();
  current = (current + 1) % sliderImages.length;
  sliderImages[current].style.display = 'block';
}

function slidePrev() {
  reset();
  current = (current - 1 + sliderImages.length) % sliderImages.length;
  sliderImages[current].style.display = 'block';
}


//Event listner for click on buttons
nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);


//Starting slideshow
startSlide();

document.getElementById('yachtInquiryForm').addEventListener('submit', function(event) {
event.preventDefault();

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const yachtType = document.getElementById('yacht-type').value;
const budget = document.getElementById('budget').value;
const inquiryType = document.getElementById('inquiry-type').value;
const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !yachtType || !budget || !inquiryType || !message) {
        alert('Please fill in all fields before submitting.');
        return; // Stop form submission
      }
      
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return; // Stop form submission
          }
          alert('Your inquiry has been submitted successfully!');
          console.log('Form submitted successfully!');
        
    });
