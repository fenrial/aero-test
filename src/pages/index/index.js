
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

      fetch(`http://localhost:3000/products/${productID}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: json
      })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        res.json()
      })
      .then(product => {
        fav.classList.toggle("product__fav_is-active");
      }).catch(function(error) {
        console.error(error);
    });
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