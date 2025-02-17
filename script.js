const menuItems = document.querySelectorAll('.menu li');
const gallery = document.getElementById('gallery');
const rightPanel = document.querySelector('.right-panel');

const portfolioImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

function loadPortfolio() {
    gallery.innerHTML = '';
    portfolioImages.forEach(image => {
        const div = document.createElement('div');
        div.classList.add('image-item');
        div.innerHTML = `<img src="${image}" alt="Portfolio Image">`;
        div.addEventListener('click', () => showImage(image));
        gallery.appendChild(div);
    });
}

function showImage(image) {
    rightPanel.style.marginLeft = '300px';
    const img = document.createElement('img');
    img.src = image;
    img.style.width = 'auto';
    img.style.height = '100%';
    img.style.position = 'absolute';
    img.style.left = '300px';
    img.style.top = '0';
    img.addEventListener('click', () => {
        rightPanel.style.marginLeft = '0';
        img.remove();
    });
    rightPanel.appendChild(img);
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        loadPortfolio();
    });
});

// 초기 로드
loadPortfolio();
