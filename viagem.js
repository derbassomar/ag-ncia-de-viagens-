document.addEventListener('DOMContentLoaded', function() {
    const editPassengersButton = document.getElementById('editPassengers');
    const passengerCountSpan = document.getElementById('passengerCount');
    const passengerClassSpan = document.getElementById('passengerClass');
  
    editPassengersButton.addEventListener('click', () => {
      let newPassengerCount = prompt("Quantos passageiros?", passengerCountSpan.textContent);
      let newPassengerClass = prompt("Classe de passagem?", passengerClassSpan.textContent);
  
      if (newPassengerCount && newPassengerClass) {
        passengerCountSpan.textContent = newPassengerCount;
        passengerClassSpan.textContent = newPassengerClass;
      }
    });
  
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
      const origin = document.getElementById('origin').value;
      const destination = document.getElementById('destination').value;
      const departureDate = document.getElementById('departureDate').value;
      const returnDate = document.getElementById('returnDate').value;
      const passengerCount = passengerCountSpan.textContent;
      const passengerClass = passengerClassSpan.textContent;
      const cheapDate = document.getElementById('cheapDate').checked;
  
      fetch('/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          origin,
          destination,
          departureDate,
          returnDate,
          passengerCount,
          passengerClass,
          cheapDate
        })
      })
     .then(response => {
        
      })
     .catch(error => {
        
      });
    });
  });

  

  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
  
    let currentSlide = 0;
  
    const showSlide = (n) => {
      slides[currentSlide].classList.remove('active');
      slides[currentSlide].classList.add('hidden');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.remove('hidden');
      slides[currentSlide].classList.add('active');
  
      updateDots();
    };
  
    const updateDots = () => {
      dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
          dot.classList.add('active');
        }
      });
    };
  
    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };
  
    const prevSlide = () => {
      showSlide(currentSlide - 1);
    };
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
  });