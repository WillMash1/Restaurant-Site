const hamburger = document.querySelector('#hamburger');
const navUl = document.querySelector('#navbar-ul');
const title = document.querySelector('.title-section');

hamburger.addEventListener('click', () => {
    console.log('click')
    title.classList.toggle('show');
    navUl.classList.toggle('show');
    
    // navUl.classList.toggle('navbar-fade-down');
})

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