var link=document.querySelector(".popup-button"),popup=document.querySelector(".popup-content"),close=popup.querySelector(".popup-closer"),form=popup.querySelector(".write-us-form"),login=popup.querySelector("[name=user-name]"),password=popup.querySelector("[name=user-email]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("user-name")}catch(err){isStorageSupport=!1}link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,password.focus()):login.focus()}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(a){login.value&&password.value?isStorageSupport&&localStorage.setItem("user-name",login.value):(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&(a.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});var mapLink=document.querySelector(".contacts-button-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".popup-closer");mapLink.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show")});
