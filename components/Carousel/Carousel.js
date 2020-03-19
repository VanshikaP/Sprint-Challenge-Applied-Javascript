// /* If You've gotten this far, you're on your own! Although we will give you some hints:
//     1. You will need to write a function that creates the carousel component, you will find the HTML below.
//     2. You will need to grab a reference to all of the images
//     3. Create a current index
//     4. Those buttons are gonna need some click handlers.
//     5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
//     6. Have fun!
// */

// /* HTML:
//   <div class="carousel">
//     <div class="left-button"> < </div>
//     <img src="./assets/carousel/mountains.jpeg" />
//     <img src="./assets/carousel/computer.jpeg" />
//     <img src="./assets/carousel/trees.jpeg" />
//     <img src="./assets/carousel/turntable.jpeg" />
//     <div class="right-button"> > </div>
//   </div>
// */


function createCarousel(){
  const carousel = document.createElement('div'),
        leftButton = document.createElement('div'),
        img1 = document.createElement('img'),
        img2 = document.createElement('img'),
        img3 = document.createElement('img'),
        img4 = document.createElement('img'),
        rightButton = document.createElement('div');
  
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  img1.classList.add('slide');
  img2.classList.add('slide');
  img3.classList.add('slide');
  img4.classList.add('slide');
  
  leftButton.textContent = ' < ';
  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';
  rightButton.textContent = ' > ';
  
  carousel.append(leftButton, img1, img2, img3, img4, rightButton);
  
  return carousel;
}


document.querySelector('.carousel-container').append(createCarousel());


let slideIndex = 1;

function showSlide(n){
  console.log('function called with index: ', n);

  let slides = document.getElementsByClassName('slide');

  if(n > slides.length){
    slideIndex = 1;
  } else if (n < 1){
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }
  for (let i  = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
    console.log('set display to: ', slides[i].style.display);
    console.log('hiding this image: ', slides[i]);
  }
  slides[slideIndex-1].style.display = 'block';
  console.log('showing this image: ', slides[slideIndex-1]);
  console.log('display of currentImage: ', slides[slideIndex-1].style.display);
  console.log('slideInex is ', slideIndex);

}

showSlide(slideIndex);

//Button Navigations
document.querySelector('.left-button').addEventListener('click', () => {
  slideIndex -= 1;
  showSlide(slideIndex);
});
document.querySelector('.right-button').addEventListener('click', () => {
  slideIndex += 1;
  showSlide(slideIndex);
});
