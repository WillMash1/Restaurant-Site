const hamburger = document.querySelector('#hamburger');
const navUl = document.querySelector('#navbar-ul');
const title = document.querySelector('.title-section');
const cuisineMealOneContainer = document.querySelector('#imageContainer-mealOne');
const cuisineMealTwoContainer = document.querySelector('#imageContainer-mealTwo');
const cuisineMealThreeContainer = document.querySelector('#imageContainer-mealThree');
const cuisineMealOneTitle = document.querySelector('#cuisineTitleOne');
const cuisineMealTwoTitle = document.querySelector('#cuisineTitleTwo');
const cuisineMealThreeTitle = document.querySelector('#cuisineTitleThree');
const mealTwo = document.querySelector('#mealTwo');
const mealThree = document.querySelector('#mealThree');

///////////////////////////////////////////////
//use mountEnter and MouseLeave event Listeners
//On mouseEnter call the addText function
//On mouseLeave call a removeText function
///////////////////////////////////////////////
const addText = function(title, mealNum) {
  title.classList.remove(`imageContainer-meal${mealNum}`);
  title.classList.add('cuisine-text-appear');
}
const removeText = function(title, mealNum) {
  title.classList.add(`imageContainer-meal${mealNum}`);
  title.classList.remove('cuisine-text-appear');
}

///////////////////////////////////////////////
//Roll over effect for the Cuise Section Images
///////////////////////////////////////////////
cuisineMealOneContainer.addEventListener('mouseenter', () => {
  mealOne.classList.remove('addBlur');
  addText(cuisineMealOneTitle, 'One');
  mealTwo.classList.add('addBlur');
  mealThree.classList.add('addBlur');
})
cuisineMealOneContainer.addEventListener('mouseleave', () => {
  removeText(cuisineMealOneTitle,'One');
  mealTwo.classList.remove('addBlur');
  mealThree.classList.remove('addBlur');
})
cuisineMealTwoContainer.addEventListener('mouseenter', () => {
  addText(cuisineMealTwoTitle, 'Two');
  mealOne.classList.add('addBlur');
  mealThree.classList.add('addBlur');
})
cuisineMealTwoContainer.addEventListener('mouseleave', () => {
  removeText(cuisineMealTwoTitle, 'Two');
  mealOne.classList.remove('addBlur');
  mealThree.classList.remove('addBlur');
})
cuisineMealThreeContainer.addEventListener('mouseenter', () => {
  addText(cuisineMealThreeTitle, 'Three');
  mealOne.classList.add('addBlur');
  mealTwo.classList.add('addBlur');
})
cuisineMealThreeContainer.addEventListener('mouseleave', () => {
  removeText(cuisineMealThreeTitle, 'Three');
  mealOne.classList.remove('addBlur');
  mealTwo.classList.remove('addBlur');
})

//////////////////////////////////////////////////////
//Making the hamburger menu for the navBar functional
/////////////////////////////////////////////////////
hamburger.addEventListener('click', () => {
    console.log('click')
    title.classList.toggle('show');
    navUl.classList.toggle('show');
    
    // navUl.classList.toggle('navbar-fade-down');
})
///////////////////////////////////////////////
//Making the text fadeIn on scroll
///////////////////////////////////////////////
const fadeText = function() {
    console.log('hello');
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        console.log(positionFromTop);
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('text-fade-in');
          element.classList.remove('hidden');
        }
      }

    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  };

 fadeText();

 ///////////////////////////////////////////////
//Make the hamburger menu slide down as animation
//Right now the title 'Risotteria Plymouth jumps down whenever the hamburger menu is opened
//Fix it so that the title slides down smoothly in time with the hamburger menu sliding down as well, then slides back up when the hamburger menu is closed
///////////////////////////////////////////////





//LightBox code
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.meal');
// const images = document.querySelectorAll('.meal');

const mealContainerOne = document.querySelector('#imageContainer-mealOne');
const mealContainerTwo = document.querySelector('#imageContainer-mealTwo');
const mealContainerThree = document.querySelector('#imageContainer-mealThree');
const cuisineSectionTitle = document.querySelector('#cuisineSectionTitle');


    mealOne.addEventListener('click', e => { 
        cuisineSectionTitle.classList.add('hideText');
        lightbox.classList.add('active');            
        const carousel = new Carousel(0);
        lightbox.innerHTML = carousel.setHTML("imgs/pasta.jpg", "imgs/pasta2.jpg","imgs/pasta3.jpg" );
        carousel.startSlide();    
    })
    mealTwo.addEventListener('click', e => {    
        cuisineSectionTitle.classList.add('hideText');    
        lightbox.classList.add('active');            
        const carousel = new Carousel(0);
        lightbox.innerHTML = carousel.setHTML("imgs/mealTwo.jpg","imgs/pizza2.jpg","imgs/pizza3.jpg" );
        carousel.startSlide();    
    })
    mealThree.addEventListener('click', e => {    
        cuisineSectionTitle.classList.add('hideText');    
        lightbox.classList.add('active');            
        const carousel = new Carousel(0);
        lightbox.innerHTML = carousel.setHTML("imgs/lasagna.jpg","imgs/lasagna2.jpg", "imgs/lasagna3.jpg" );
        carousel.startSlide();    
    })



lightbox.addEventListener('click', e => {
    
    if(e.target !== e.currentTarget) return
    cuisineSectionTitle.classList.remove('hideText');
    lightbox.classList.remove('active');
    lightbox.innerHTML = '';
})