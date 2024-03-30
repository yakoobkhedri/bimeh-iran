// dropdown
let dropdownBtn=Array.from(document.getElementsByClassName('dropdown-btn'));

dropdownBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
  })
})

// swiper
var blog = new Swiper(".blog", {
  slidesPerView: 1,
  spaceBetween: 25,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


// datapicker

jalaliDatepicker.startWatch();