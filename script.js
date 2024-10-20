
let slideIndex = 1;
showSlides(slideIndex);
// Функція для перемикання слайдів
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Функція для вибору конкретного слайду
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  // Перевірка на кількість слайдів
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Приховуємо всі слайди
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Очищаємо активні точки
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Відображаємо активний слайд
  slides[slideIndex - 1].style.display = "block";
  // Активуємо відповідну точку
  dots[slideIndex - 1].className += " active";
}
//card 
let cart = [];

    function increaseQuantity(itemId) {
        const quantityElement = document.getElementById(itemId + 'Value');
        let quantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = ++quantity;
    }

    function decreaseQuantity(itemId) {
        const quantityElement = document.getElementById(itemId + 'Value');
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 1) {
            quantityElement.innerText = --quantity;
        }
    }

    function addToCart(name, price, itemId) {
        const quantity = parseInt(document.getElementById(itemId + 'Value').innerText);
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }

        updateCart();
        openModal();
    }

    function updateCart() {
        const cartItemsElement = document.getElementById('cart');
        cartItemsElement.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            cartItemsElement.innerHTML += `
                <div class="cart-item">
                    <h5>${item.name} - ${item.price} грн x ${item.quantity}</h5>
                    <p>Сума: ${itemTotal} грн</p>
                    <button onclick="removeFromCart(${index})" class="remove-item">Видалити</button>
                </div>
            `;
        });

        document.getElementById('totalPrice').innerText = totalPrice;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function clearCart() {
        cart = [];
        updateCart();
    }

    function openModal(e) {
        document.getElementById("myModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    window.onclick = function(event) {
        event.preventDefault()
        const modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }