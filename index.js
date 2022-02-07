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



//Setting up the splash screen

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(()=> {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });


        setTimeout(()=> {
            logoSpan.forEach((span, idx) => {
                setTimeout(()=> {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, 50)
            })
        },2000 );

        setTimeout(()=> {
             intro.style.top = '-100vh';
        }, 2300);
    })
})










//use mountEnter and MouseLeave event Listeners
//On mouseEnter call the addText function
//On mouseLeave call a removeText function
const addText = function(title, mealNum) {
  title.classList.remove(`imageContainer-meal${mealNum}`);
  title.classList.add('cuisine-text-appear');
}
const removeText = function(title, mealNum) {
  title.classList.add(`imageContainer-meal${mealNum}`);
  title.classList.remove('cuisine-text-appear');
}

//Roll over effect for the Cuisine Section Images

const cuisineRollOverEnter = function(otherMealOne, otherMealTwo) {
  otherMealOne.classList.add('addBlur');
  otherMealTwo.classList.add('addBlur');
}
const cuisineRollOverLeave = function() {
  removeText(cuisineMealOneTitle,'One');
  removeText(cuisineMealTwoTitle, 'Two');
  removeText(cuisineMealThreeTitle, 'Three');
  mealOne.classList.remove('addBlur');
  mealTwo.classList.remove('addBlur');
  mealThree.classList.remove('addBlur');
}

cuisineMealOneContainer.addEventListener('mouseenter', () => {
  addText(cuisineMealOneTitle, 'One');
  cuisineRollOverEnter(mealTwo,mealThree);
})

cuisineMealTwoContainer.addEventListener('mouseenter', () => {
  addText(cuisineMealTwoTitle, 'Two');
  cuisineRollOverEnter(mealOne,mealThree);
})


cuisineMealThreeContainer.addEventListener('mouseenter', () => {
  addText(cuisineMealThreeTitle, 'Three');
  cuisineRollOverEnter(mealOne,mealTwo);

})

cuisineMealOneContainer.addEventListener('mouseleave', () => {
  cuisineRollOverLeave();
})
cuisineMealTwoContainer.addEventListener('mouseleave', () => {
  cuisineRollOverLeave();
})
cuisineMealThreeContainer.addEventListener('mouseleave', () => {
  cuisineRollOverLeave();
})




//Making the hamburger menu for the navBar functional
sideMenuOpen = false;

hamburger.addEventListener('click', () => {
    if(sideMenuOpen){
      closeSlideMenu()
    } else {
      console.log(screen.height)
      if(screen.width <= 440) {
        document.querySelector('#side-menu').style.width = '50vw';
      sideMenuOpen = !sideMenuOpen;
      } else {
        document.querySelector('#side-menu').style.width = '30vw';
        sideMenuOpen = !sideMenuOpen;
      }
     
    }
})

function closeSlideMenu(){
  sideMenuOpen = !sideMenuOpen;
  document.querySelector('#side-menu').style.width = '0';
  
}

const root = document.querySelector('#side-menu');
const navSection = document.querySelector('.navbar-section');

document.addEventListener('click', event => {
  console.log('this should be working')
  if (!root.contains(event.target) && !navSection.contains(event.target) ){
    document.querySelector('#side-menu').style.width = '0';
    sideMenuOpen = false;
  }
  })




//Making the text fadeIn on scroll for the info section

const fadeText = function() {
    console.log('hello');
    let elements;
    let windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;
        console.log(positionFromTop);
        console.log(windowHeight)
        if (positionFromTop - windowHeight <= -250) {
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