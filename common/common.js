$(() => {

  const box = document.querySelector('#sec1');
  window.addEventListener('scroll', function () {
    const val = 1200 - window.scrollY;
    box.style.clipPath = "circle(" + val + "px at center center)"
  })

  // 눈
  // css eye::before 에 left값을 50% 로 하면 동작이 안됨
  document.querySelector('body').addEventListener('mousemove', eyeball);
  
  function eyeball() {
    const eye = document.querySelectorAll('.eye');

    eye.forEach(function (eye) {

      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

      let radian = Math.atan2(event.pageX - x, event.clientY - y);
      let rotation = (radian * (180 / Math.PI) * -1) + 270;
      eye.style.transform = "rotate(" + rotation + "deg)"

    });
  }

  // 펴지는 선
  const SkewedOne = document.querySelector('.SkewedOne');
  const SkewedTwo = document.querySelector('.SkewedTwo');
  window.addEventListener('scroll', function () {
    const value1 = -15 + window.scrollY / 175;
    const value2 = 15 + window.scrollY / -175;
    SkewedOne.style.transform = "skewY(" + value1 + "deg)"
    SkewedTwo.style.transform = "skewY(" + value2 + "deg)"
  })

  // 스크롤트리거
  let a = gsap.timeline({
    scrollTrigger: {
      trigger: '.scroll_trigger',
      start: 'top',
      end: 'bottom',
      scrub: true,
      // markers: true
    }
  });
  a.from('.box', {
    y: -130,
    opacity: 0,
    duration: 1.5
  })

  // 슬라이드
  var main = new Swiper(".main", {
    loop: true,
    grabCursor: true,
    effect: "fade",
  });
  var sub = new Swiper(".sub", {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
  });

  main.controller.control = sub;
  sub.controller.control = main;
})