// TOGGLE CART BOX
const cartBtn = document.getElementById('cartBtn');
const cartBox = document.getElementById('cartBox');

cartBtn.addEventListener('click', () => {
    cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
});

// ADD TO CART
const cartItemsList = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

const addButtons = document.querySelectorAll('.product-card .btn-buy');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        // Add item to cart list
        const li = document.createElement('li');
        li.textContent = `${itemName} - $${price.toFixed(2)}`;
        cartItemsList.appendChild(li);

        // Update count
        cartCount.textContent = parseInt(cartCount.textContent) + 1;

        // Update total
        cartTotal.textContent = (parseFloat(cartTotal.textContent) + price).toFixed(2);
    });
});

const whatsappBtn = document.getElementById('whatsappBtn');

whatsappBtn.addEventListener('click', () => {
    const cartTotal = document.getElementById('cartTotal').textContent;
    const cartItems = document.getElementById('cartItems');
    
    // Qaado items-ka cart-ka
    let itemsText = '';
    cartItems.querySelectorAll('li').forEach((li, index) => {
        itemsText += `${index+1}. ${li.textContent}\n`;
    });

    // Number WhatsApp (Somalia example)
    const phoneNumber = '252619788378';

    // Fariinta
    const message = `Salaan,%0AWaxaan rabaa inaan dalbado alaabaha soo socda:%0A${encodeURIComponent(itemsText)}%0ATotal: $${cartTotal}`;

    // Fur WhatsApp link
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});
