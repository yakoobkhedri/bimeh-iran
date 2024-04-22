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
var blog2 = new Swiper(".blog2", {
  slidesPerView: 1,
  spaceBetween: 25,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },
});
// accordion

let accordionBtn=Array.from(document.getElementsByClassName('accordion-btn'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})

// datapicker

jalaliDatepicker.startWatch();

// pay type

let selectType=Array.from(document.getElementsByClassName('selectType'));
let payType=Array.from(document.getElementsByClassName('payType'));

selectType.forEach((item)=>{
  item.addEventListener('change', function () {
    payType.forEach((items)=>{items.classList.add('opacity-30')});
    item.parentElement.parentElement.classList.remove('opacity-30');
  })
})

// navigation

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('mouseover',activeLink));