let cartCount = 0;

// Cart badge তৈরি
const cartBadge = document.createElement("span");
cartBadge.innerHTML = " 🛒 0";
cartBadge.style.background = "red";
cartBadge.style.color = "white";
cartBadge.style.padding = "5px 10px";
cartBadge.style.borderRadius = "20px";
cartBadge.style.marginLeft = "10px";

document.querySelector("header h1").appendChild(cartBadge);

// সব Add to Cart বাটন নির্বাচন
const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartBadge.innerHTML = " 🛒 " + cartCount;

        button.innerText = "Added ✓";
        button.style.background = "#007bff";

        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.background = "#28a745";
        }, 1000);

        alert("Product added to cart!");
    });
});
