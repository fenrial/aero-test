
import "../../assets/styles/styles.sass"


document.addEventListener("DOMContentLoaded", () => {
  const favButtons = document.querySelectorAll(".product__fav");
  favButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const fav = e.target;
      const product = e.target.closest(".product");
      const productID = product.getAttribute("data-id");

      let data = {};
      data.isFav = fav.classList.contains("product__fav_is-active") ? false : true;

      let json = JSON.stringify(data);

      const xhr = new XMLHttpRequest();
      xhr.open("PUT", `http://localhost:3000/products/${productID}`, true);
      xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
      xhr.onload = function () {
        var resp = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
          fav.classList.toggle("product__fav_is-active")
          console.log(resp);
        } else {
          console.error(xhr.status + ': ' + xhr.statusText);
        }
      }
      xhr.send(json);
    })
  })
});

// closest polyfill

(function(e){ 
  e.closest = e.closest || function(css){ 
    var node = this;
   
    while (node) { 
       if (node.matches(css)) return node; 
       else node = node.parentElement; 
    } 
    return null; 
  } 
 })(Element.prototype);