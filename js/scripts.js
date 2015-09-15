  var link = document.querySelector(".search-open");
  var popup = document.querySelector(".search-form");
  var overlay = document.querySelector(".js-overlay");
  var dateIn = popup.querySelector(".date-in");
  var dateOut = popup.querySelector(".date-out");
  var blockAdults = document.querySelector(".search-adults");
  var blockChildren = document.querySelector(".search-children");
  
  link.addEventListener("click", function(event)
                        {
    if ( popup.classList.contains("search-show")) {
      event.preventDefault();
      link.innerHTML = "ПОИСК ГОСТИНИЦЫ В седоне";
      overlay.classList.remove("search-overlay")
      popup.classList.add("search-hidden");
      window.setTimeout(function(event) {
        popup.classList.remove("search-show");
      }, 600);
    } else {
      event.preventDefault();
      link.innerHTML = "Закрыть";
      overlay.classList.add("search-overlay");
      popup.classList.add("search-show");
      popup.classList.remove("search-hidden");
      popup.classList.remove("form-error");
      dateIn.focus();
        }
  });

  popup.addEventListener("submit", function(event) {
    
    if (!(dateIn.value && dateOut.value)) {
      event.preventDefault();
      popup.classList.remove("form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form-error");
    }
  });

  window.addEventListener("keydown", function(event) {
    
    if (event.keyCode == 27) {
      if ( popup.classList.contains("search-show")) {
        overlay.classList.remove("search-overlay")
        popup.classList.add("search-hidden");
        window.setTimeout(function(event) {
          popup.classList.remove("search-show");
        }, 600);
        popup.classList.remove("form-error");
      }
    }
  });
  
  blockAdults.addEventListener("click", counter);
  blockChildren.addEventListener("click", counter);
    function counter (event) {
      var element = event.target;
      myInput = element.parentNode.children[1];
      if(element.getAttribute("class") == "icon-plus") {
        myInput.value = +myInput.value + 1;
      } else if (element.getAttribute("class") == "icon-minus") {
        if (myInput.value == 0) {
        myInput.value = 0;
        } else {
          myInput.value = myInput.value - 1;
  }
  }
  }