// script.js

// Format angka ke mata uang Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

// Variabel untuk menyimpan data pilihan pengguna
let selectedItemPrice = 0;
let selectedPayment = "";

// Ambil elemen dari HTML
const diamondCards = document.querySelectorAll('.diamond-card');
const paymentCards = document.querySelectorAll('.payment-card');
const totalPriceDisplay = document.getElementById('total-price');
const btnBuy = document.getElementById('btn-buy');

// Logika untuk memilih Nominal Diamond
diamondCards.forEach(card => {
    card.addEventListener('click', function() {
        // Hapus class 'active' dari semua kartu diamond
        diamondCards.forEach(c => c.classList.remove('active'));
        
        // Tambahkan class 'active' ke kartu yang diklik
        this.classList.add('active');
        
        // Ambil harga dari atribut data-price di HTML
        selectedItemPrice = parseInt(this.getAttribute('data-price'));
        
        // Update tampilan total harga
        totalPriceDisplay.textContent = formatRupiah(selectedItemPrice);
    });
});

// Logika untuk memilih Metode Pembayaran
paymentCards.forEach(card => {
    card.addEventListener('click', function() {
        // Hapus class 'active' dari semua kartu pembayaran
        paymentCards.forEach(c => c.classList.remove('active'));
        
        // Tambahkan class 'active' ke kartu yang diklik
        this.classList.add('active');
        
        // Simpan nama metode pembayaran
        selectedPayment = this.getAttribute('data-method');
    });
});

// Logika tombol Beli Sekarang
btnBuy.addEventListener('click', function() {
    const userId = document.getElementById('user-id').value;
    const zoneId = document.getElementById('zone-id').value;

    // Validasi sederhana: pastikan semua data diisi
    if (!userId || !zoneId) {
        alert("Mohon masukkan User ID dan Zone ID Anda!");
        return;
    }
    if (selectedItemPrice === 0) {
        alert("Mohon pilih nominal top-up terlebih dahulu!");
        return;
    }
    if (selectedPayment === "") {
        alert("Mohon pilih metode pembayaran!");
        return;
    }

    // Jika berhasil
    alert(`Pesanan Berhasil Dibuat!\nUser ID: ${userId} (${zoneId})\nMetode: ${selectedPayment}\nTotal: ${formatRupiah(selectedItemPrice)}`);
});