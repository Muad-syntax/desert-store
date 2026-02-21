// Simulasi keranjang menggunakan localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fungsi tambah ke keranjang
function addToCart(name, price) {
    cart.push({ name, price, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Ditambahkan ke keranjang!');
}

// Update keranjang di halaman cart
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.qty;
        cartItems.innerHTML += `<div>${item.name} - Rp ${item.price} x ${item.qty} <button onclick="removeItem(${index})">Hapus</button></div>`;
    });
    totalEl.textContent = `Rp ${total}`;
}

// Hapus item dari keranjang
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Checkout (simulasi)
function checkout() {
    alert('Checkout berhasil! Total: ' + document.getElementById('total').textContent);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Validasi form register/login (sederhana)
document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registrasi berhasil!');
});
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login berhasil!');
});

// Load keranjang saat halaman cart dimuat
if (window.location.pathname.includes('cart.html')) {
    updateCart();
}x