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
const themeIcon = document.getElementById('themeIcon');
const lightModeIcon = document.querySelector('.top-logo-dark');
const bottomIcon = document.querySelector('.bottom-logo-dark')

themeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuList.classList.toggle('hidden');
});

lightOption.addEventListener('click', () => {
    document.documentElement.classList.add('lightmode');
    themeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
    lightModeIcon.src = 'https://www.inspectra.ai/assets/brand/logo-horizontal.svg'
    bottomIcon.src = 'https://www.inspectra.ai/assets/brand/logo-horizontal.svg'
    menuList.style.backgroundColor = 'white';
    menuList.style.color = 'black';
    menuList.style.border = '1px solid white'
    menuList.classList.add('hidden');
});


darkOption.addEventListener('click', () => {
    document.documentElement.classList.remove('lightmode');
    themeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star-icon lucide-moon-star"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>'
    lightModeIcon.src = 'https://www.inspectra.ai/assets/brand/logo-dark-horizontal.svg'
    bottomIcon.src = 'https://www.inspectra.ai/assets/brand/logo-dark-horizontal.svg'
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