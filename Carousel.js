class Carousel {



    constructor(slidePosition){
        this.slidePosition = slidePosition;
    }
        getSlides = function(){
            const slides = document.querySelectorAll('.carousel_item');
            return slides;
        }
        getTotalSlides = function(slides){
            const totalSlides = slides.length;
            return totalSlides;
        }
        
        startSlide = function () {
        document.querySelector('#carousel_button--next').addEventListener('click', () => {
       
            this.moveToNextSlide(this.slidePosition);
        })
        document.querySelector('#carousel_button--prev').addEventListener('click', () => {
            
            this.moveToPrevSlide(this.slidePosition);
        })
    }
    
    

    setHTML = function(imgOne, imgTwo, imgThree) {
        const html = `<div class="carousel">
        <div class="carousel_item carousel_item--visible">
            <img src=" ${imgOne}" alt="">
        </div>
        <div class="carousel_item">
            <img src="${imgTwo}" alt="">
        </div>
        <div class="carousel_item">
            <img src="${imgThree}" alt="">
        </div>
        <div class="carousel_actions">
            <button id="carousel_button--prev"aria-label="Previous slide"><</button>
            <button id="carousel_button--next"aria-label="Next slide" >></button>
        </div>
        </div>`;

        return html
    }
    
    
     updateSlidePosition = function(slidePosition) {
         const slides = this.getSlides();
        for(let slide of slides) {
            slide.classList.remove('carousel_item--visible');
            slide.classList.add('carousel_item--hidden');
        }
    
        slides[this.slidePosition].classList.add('carousel_item--visible');
        
    }
    
     moveToNextSlide = function(slidePosition) {
         const slides = this.getSlides()
        const totalSlides = this.getTotalSlides(slides);
        if(this.slidePosition === totalSlides-1){
            this.slidePosition = 0;
        } else {
            this.slidePosition++;
        }
        this.updateSlidePosition(this.slidePosition);
    }
     moveToPrevSlide = function(slidePosition) {
        const slides = this.getSlides()
        const totalSlides = this.getTotalSlides(slides);
        
        if(this.slidePosition === 0){
            this.slidePosition = totalSlides-1;
        } else {
            this.slidePosition--;
        }
        this.updateSlidePosition(this.slidePosition);
    }

}