//Fungsi mengubah nama pada dokumen
function replaceName() {
    let named = prompt("Siapakah nama anda?", "");
    document.getElementById("nameID").innerHTML = named;
}

replaceName();

let slideIndex = 0;
let slides = document.querySelectorAll('.slide');

function showSlide() {
    // Menyembunyikan semua slide
    slides.forEach((slide) => {
        slide.style.display = 'none'; // Mengubah display menjadi none untuk menyembunyikan semua slide
    });
    // Menampilkan slide yang sesuai dengan slideIndex
    slides[slideIndex].style.display = 'block'; // Mengubah display menjadi block untuk menampilkan slide yang aktif
}

function nextSlide() {
    // Menggeser index slide berikutnya
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
}

// Menetapkan interval untuk mengubah slide setiap 5 detik
let slideInterval = setInterval(nextSlide, 4000);

// Menambahkan event listener untuk menghentikan interval saat area .banner-container diklik
document.querySelector('.banner-container').addEventListener('click', () => {
    clearInterval(slideInterval); // Menghentikan interval saat slider diklik
    nextSlide(); // Pindah ke slide berikutnya
});

// Menampilkan slide pertama saat halaman dimuat
showSlide();

// Mengambil elemen form
const form = document.getElementById('myForm');

// Mengambil elemen info pengirim
const nameInfo = document.getElementById('nameInfo');
const birthdateInfo = document.getElementById('birthdateInfo');
const genderInfo = document.getElementById('genderInfo');
const messageInfo = document.getElementById('messageInfo');

// Menambahkan submit event listener ke form
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai input user
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value;

    // Menampilkan submited validation
    nameInfo.textContent = `Nama: ${name}`;
    birthdateInfo.textContent = `Tanggal Lahir: ${birthdate}`;
    genderInfo.textContent = `Jenis Kelamin: ${gender.value}`;
    messageInfo.textContent = `Pesan: ${message}`;

    document.getElementById('name').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('message').value = '';

});

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('message').value = '';

}