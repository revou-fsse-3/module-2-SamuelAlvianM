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

const card3 = document.querySelector("#card3 .card__inner");

card3.addEventListener("click", function() {
    card3.classList.toggle("is-flipped");
});

const card4 = document.querySelector("#card4 .card__inner");

card4.addEventListener("click", function() {
    card4.classList.toggle("is-flipped");
});

const card5 = document.querySelector("#card5 .card__inner");

card5.addEventListener("click", function() {
    card5.classList.toggle("is-flipped");
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

//LIGHT DAN DARK MODE

const header = document.querySelector('header');
const LDM = document.querySelector('.LDM');
const icon = document.querySelector('.LDM_icon');

// kondisi dark light mode
function store(value) {
    localStorage.setItem('darkmode', value);
}

function load(){
    const darkMode = localStorage.getItem('darkmode');

    if(!darkMode) {
        store(false);
        icon.classList.add('fa-sun');
    } else if( darkMode == 'true'){
    header.classList.add('darkmode');
    icon.classList.add('fa-moon');
    } else if(darkMode == 'false'){
        icon.classList.add('fa-sun');
    }
}

load();

LDM.addEventListener('click', () => {
    header.classList.toggle('darkmode');
    icon.classList.add('animated');

    if(header.classList.contains('darkmode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        store(true);
    }else{
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        store(false);
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500);
})
