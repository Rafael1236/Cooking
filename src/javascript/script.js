import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export const initializeCarousel = () => {
  $(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });

    // Manejar el cambio de transparencia de la barra de navegación basado en el scroll
    const handleScroll = () => {
      const navbar = document.getElementById('mainNav');
      if (window.scrollY > 100) {
        navbar.classList.add('transparent');
      } else {
        navbar.classList.remove('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);
};
