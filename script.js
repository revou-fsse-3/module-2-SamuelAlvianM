// CAROUSEL FUNCTIONS
let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let currentSlide = 0; // Ubah currentSlide menjadi 0

let manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Atur tampilan slide pertama saat halaman dimuat
slides[currentSlide].classList.add('active');
btns[currentSlide].classList.add('active');




// CARDS ANIMATIONS
// Menggunakan event listener untuk kartu pertama
const card1 = document.querySelector("#card1 .card__inner");

card1.addEventListener("click", function() {
    card1.classList.toggle("is-flipped");
});

// Menggunakan event listener untuk kartu kedua
const card2 = document.querySelector("#card2 .card__inner");

card2.addEventListener("click", function() {
    card2.classList.toggle("is-flipped");
});

// FORM ANIMATION
document.addEventListener("DOMContentLoaded", function() {
    const openFormButton = document.getElementById("openForm");
    const closeFormButton = document.getElementById("closeForm");
    const formSection = document.getElementById("JoinUs");
    const thankYouMessage = document.getElementById("thankYouMessage");

    openFormButton.addEventListener("click", function() {
        formSection.style.display = "block";
        thankYouMessage.style.display = "none"; // Sembunyikan pesan Terima kasih saat membuka formulir
    });

    closeFormButton.addEventListener("click", function() {
        formSection.style.display = "none";
    });

    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        formSection.style.display = "none";
        thankYouMessage.style.display = "block"; // Menampilkan pesan Terima kasih

        // Menghapus isi formulir setelah mengirim
        signupForm.reset();

        // Menghapus pesan Terima kasih setelah 3 detik
        setTimeout(function() {
            thankYouMessage.style.display = "none";
        }, 2000);
    });
});