const slides=document.querySelector(".slider").children;
   const indicatorImages=document.querySelector(".s-slider").children;

    for(let i=0; i<indicatorImages.length; i++){
    	indicatorImages[i].addEventListener("click",function(){
         
           for(let j=0; j<indicatorImages.length; j++){
             indicatorImages[j].classList.remove("active");
           }
            this.classList.add("active");
            const id=this.getAttribute("data-id");
           for(let j=0; j<slides.length; j++){
           	slides[j].classList.remove("active");
           }

            slides[id].classList.add("active");

    	})
    }
