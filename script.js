
       const circle = document.querySelector(".counter-buy");
       const number = document.querySelector(".number-counter");
       let counter;
       const localStorageValue = Number(localStorage.getItem("counter-book"));
       if (localStorageValue) {
         counter = localStorageValue;
       } else {
         counter = 0;
       }

      updateValue();
         function updateValue(){
          const number = document.querySelector(".number-counter");
         number.innerText = counter;
         }

         
      
       function onClick() {
         counter = counter + 1;
         localStorage.setItem("counter-book", counter);
         number.textContent = counter;
         circle.style.display = "block";
       }
