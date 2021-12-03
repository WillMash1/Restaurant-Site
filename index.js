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

//Making the hamburger menu for the navBar functional
hamburger.addEventListener('click', () => {
    console.log('click')
    title.classList.toggle('show');
    navUl.classList.toggle('show');
    
    // navUl.classList.toggle('navbar-fade-down');
})

//Making the text fadeIn on scroll
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
//Make the hamburger menu slide down as animation
//Right now the title 'Risotteria Plymouth jumps down whenever the hamburger menu is opened
//Fix it so that the title slides down smoothly in time with the hamburger menu sliding down as well, then slides back up when the hamburger menu is closed