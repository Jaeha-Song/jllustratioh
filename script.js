function showImage(imageSrc) {
    const overlay = document.getElementById('overlay');
    const expandedImage = document.getElementById('expandedImage');
    expandedImage.src = imageSrc;
    overlay.style.display = 'flex';
}

function hideImage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
