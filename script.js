const images = [
    'https://www.inspectra.ai/_next/image?url=%2Fassets%2Fscreens%2Freport-dark.png&w=1200&q=100',
    'https://www.inspectra.ai/_next/image?url=%2Fassets%2Fscreens%2Freport-writer-dark.png&w=1200&q=100',
    'https://www.inspectra.ai/_next/image?url=%2Fassets%2Fscreens%2Fscheduling-dark.png&w=1200&q=100',
    'https://www.inspectra.ai/_next/image?url=%2Fassets%2Fscreens%2Fbooking-dark.png&w=1200&q=100',
    'https://www.inspectra.ai/_next/image?url=%2Fassets%2Fscreens%2Fcontacts-dark.png&w=1200&q=100',
    'https://www.inspectra.ai/_next/image?url=%2Fassets%2Fscreens%2Fmarketing-dark.png&w=1200&q=100'
];

let currentIndex = 0;

function updateImage() {
    document.getElementById('mainImage').src = images[currentIndex];
    document.querySelectorAll('.hero-2 button').forEach((btn, index) => {
        btn.classList.toggle('active', index === currentIndex);
    }); 
}

function selectTab(index) {
    currentIndex = index;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

const themeBtn = document.getElementById('themeBtn');
const menuList = document.getElementById('menuList');
const lightOption = document.getElementById('lightOption');
const darkOption = document.getElementById('darkOption');

themeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuList.classList.toggle('hidden');
});

lightOption.addEventListener('click', () => {
    document.documentElement.classList.add('lightmode');
    menuList.classList.add('hidden');
});

darkOption.addEventListener('click', () => {
    document.documentElement.classList.remove('lightmode');
    menuList.classList.add('hidden');
});

document.addEventListener('click', (e) => {
    if (!menuList.classList.contains('hidden')
    &&
    !menuList.contains(e.target) &&
    !themeBtn.contains(e.target)) {
        menuList.classList.add('hidden');
    } 
});

systemOption.addEventListener('click', () => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
    if (isSystemDark) {
        document.documentElement.classList.remove('lightmode');
    } else {
        document.documentElement.classList.add('lightmode');
    }

    menuList.classList.add('hidden');
});