  var link = document.querySelector(".user-login")
  var popup = document.querySelector(".modal-login")
  var close = popup.querySelector(".modal-close")
  var form = popup.querySelector("form")
  var login = popup.querySelector("[name=login]")
  var password = popup.querySelector("[name=password]")
  var btnSubmit = popup.querySelector("[type=submit]")
  var storageLogin = localStorage.getItem("login")
	  
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-show");
    if(storageLogin) {
      login.value=storageLogin;
      password.focus();	
    } else {
        login.focus();
    }
  });
	  
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
	  
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
     if (popup.classList.contains("modal-show")) {
       popup.classList.remove("modal-show");
     }
	 if (popup.classList.contains("modal-error")) {
       popup.classList.remove("modal-error");
     }
    }
  });
	  
  btnSubmit.addEventListener("click", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
  });