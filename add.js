// header burger
const nav = document.getElementById("nav");
const headerBurger = document.getElementById("header__burger");
const headerText = document.getElementById("intro__text");

headerBurger.addEventListener("click", function(event){
  event.preventDefault();
    nav.classList.toggle("show");
});



// header fixed
let header = document.getElementById("header");
let intro = document.getElementById("intro");
let introH = intro.clientHeight;
let scrollPos = window.pageYOffset;
console.log(scrollPos);

window.addEventListener("scroll", function() {
  scrollPos = this.pageYOffset;

  if (scrollPos > introH) {
    header.classList.add("fixed");
  }else{
    header.classList.remove("fixed");

  }
});


//smooth scroll

//My scrolling attempt - моя попытка сделать скролл
//Failed to do smoothly - у меня не получилось сделать плавно

// const navLink = document.querySelectorAll(".nav__link");
// navLink.forEach(function (event) {
//   event.addEventListener("click", function(e) {
//     e.preventDefault();
//
//     let navLinkDataScroll = this.getAttribute("data-scroll").substring(1);
//     let elementId = document.getElementById(navLinkDataScroll);
//     let elementOffset = elementId.scrollIntoView(top);
//
//   });
// });


//I took this from the internet - я взял это из интернета
function anim(duration) {
    let temp;
    return function(sel) {

      nav.classList.remove("show");
      headerText.classList.remove("show");


        cancelAnimationFrame(temp);
        let start = performance.now();
        let from = window.pageYOffset || document.documentElement.scrollTop,
        to = document.querySelector(sel).getBoundingClientRect().top;
        requestAnimationFrame(function step(timestamp) {
            let progress = (timestamp - start) / duration;
            1 <= progress && (progress = 1);
            window.scrollTo(0, from + to * progress | 0);
            1 > progress && (temp = requestAnimationFrame(step))
        })
    }
};
let scrollMenu = anim(1000)




// Team slider
const iconSmall = document.querySelectorAll(".icon__surfacing");
const img = document.querySelectorAll(".team__img");
const name = document.querySelectorAll(".team__name");
const text = document.querySelectorAll(".team__description");

iconSmall.forEach(function(item) {
  item.addEventListener("click", function() {
    let iconSmallIdDataTag = item.getAttribute("data-tab");
    let iconSmallIdDataId = item.getAttribute("data-id");
    let iconSmallIdDataBan = item.getAttribute("data-ban");
    let imgId = document.querySelector(iconSmallIdDataTag);
    let nameId = document.querySelector(iconSmallIdDataId);
    let textId = document.querySelector(iconSmallIdDataBan);

    // if это проверка, чтобы не нажимать много раз на кнопку
    if ( ! item.classList.contains('active')) {

      // Убираем класс у img
      img.forEach(function(item) {
        item.classList.remove('active');
      });

      // Убираем класс у name
      name.forEach(function(item) {
        item.classList.remove('active');
      });

      // Убираем класс у text
      text.forEach(function(item) {
        item.classList.remove('active');
      });

      // Добавляем класс к img
      imgId.classList.add('active');

      // Добавляем класс к name
      nameId.classList.add('active');

      // Добавляем класс к text
      textId.classList.add('active');
    }
  });
});






// Contact button
const div = document.getElementById("contacts__info");
const buttonContact = document.getElementById("contacts__button__burger");


buttonContact.addEventListener("click", function(event){
  event.preventDefault();
    div.classList.toggle("show");
});
