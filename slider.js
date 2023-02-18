let images =[ { 
    url: "./1.png",
    link: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months"    
}, {
    url: "./2.png",
    link: "Sochi Thieves",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months"    
}, {
    url: "./3.png",
    link: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months"    
}];

function initSlider(){
   if( !images || !images.length) return;

   let sliderImages = document.querySelector(".slider__images");
   let sliderLinks = document.querySelector(".slider_menu");
   let sliderArrows = document.querySelector(".slider_scroll");
   let sliderDots = document.querySelector(".slider__dots");   
   let sliderCity = document.querySelector(".city");
   let sliderArea = document.querySelector(".area");
   let sliderTime = document.querySelector(".time");
   
   

   initImages();
   initLinks();
   initArrows();
   initDots();
   initCity();
   initArea();
   initTime();
   
   function initImages(){
    images.forEach((image, index) => {
        let ImageDiv = `<div class ="image n${index} ${index=== 0? "active" : ""}" 
        style="background-image: url( ${images[index].url });" data-index ="${index}"></div>`
        sliderImages.innerHTML += ImageDiv;
    });
   }
   
   function initLinks(){
    images.forEach((image, index) => {
    let link = `<a class="slider_menu__link cursor n${index} ${index === 0? "active" : ""}" data-index ="${index}">${images[index].link}</a>`
       sliderLinks.innerHTML += link;
   });
   sliderLinks.querySelectorAll(".slider_menu__link").forEach(link =>{
    link.addEventListener("click", function(){            
    moveSlider(this.dataset.index); 
    })
})

}  

   function initArrows(){
    sliderArrows.querySelectorAll(".slider_scroll").forEach( arrow => {
       arrow.addEventListener("click", function (){
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if(arrow.classList.contains("left")){
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
        moveSlider(nextNumber);  
       });
    });         
   }
 
   function initDots(){
    images.forEach((image, index) => {
       let dot= `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index ="${index}"></div>`
       sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot =>{
        dot.addEventListener("click", function(){            
        moveSlider(this.dataset.index); 
        })
    })
   }

   function initCity(){
     let cityDiv = `<span class = "fact city">${images[0].city}</span>`
     sliderCity.innerHTML += cityDiv;
   };

   function changeCity(num){
    if (!images[num].city) return;
    let sliderCit = sliderCity.querySelector(".city");
    sliderCit.innerText = images[num].city;
   }

   function initArea(){
    let areaSpan = `<span class = "fact area">${images[0].area}</span>`
    sliderArea.innerHTML += areaSpan;
  };

  function changeArea(num){
   if (!images[num].area) return;
   let sliderAre = sliderArea.querySelector(".area");
   sliderAre.innerText = images[num].area;
  }

  function initTime(){
    let timeSpan = `<span class = "fact time">${images[0].time}</span>`
    sliderTime.innerHTML += timeSpan;
  };

  function changeTime(num){
   if (!images[num].time) return;
   let sliderTim = sliderTime.querySelector(".time");
   sliderTim.innerText = images[num].time;
  }

     

   function moveSlider(num){
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderLinks.querySelector(".active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");
    changeCity(num);
    changeArea(num);
    changeTime(num);
   }

}
document.addEventListener("DOMContentLoaded", initSlider);
