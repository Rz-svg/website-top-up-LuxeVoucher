// Ganti nomor ini dengan nomor WhatsApp bisnis Anda
const WHATSAPP_NUMBER = "6281234567890"; 

// Fungsi menampilkan Notifikasi ala Website Mahal
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

// Tambahkan event listener baru pada tombol beli
document.getElementById('btn-buy').addEventListener('click', function() {
    const userId = document.getElementById('user-id').value;
    const zoneId = document.getElementById('zone-id').value;
    
    // Validasi dengan Toast
    if (!userId || !zoneId) {
        showToast("⚠️ Masukkan ID Akun Anda!");
        return;
    }
    if (selectedItemPrice === 0) {
        showToast("💎 Pilih Nominal dulu, Boss!");
        return;
    }
    if (selectedPayment === "") {
        showToast("💳 Pilih metode bayar ya!");
        return;
    }

    // Mengambil Nama Diamond dari elemen yang aktif
    const activeDiamond = document.querySelector('.diamond-card.active .item-name').innerText;

    // Membuat Format Pesan WhatsApp yang rapi
    const message = `Halo Admin LuxeVoucher, saya ingin Top Up:\n\n` +
                    `🎮 *Game*: Mobile Legends\n` +
                    `🆔 *ID*: ${userId} (${zoneId})\n` +
                    `💎 *Item*: ${activeDiamond}\n` +
                    `💸 *Total*: ${formatRupiah(selectedItemPrice)}\n` +
                    `💳 *Metode*: ${selectedPayment}\n\n` +
                    `Mohon segera diproses ya!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Efek loading sedikit sebelum redirect
    showToast("🚀 Mengalihkan ke WhatsApp...");
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 1500);
});