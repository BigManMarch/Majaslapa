
// Gallery images array
const images = [
    'airplane sky-7873308_640.jpg',
    'cockpit-4598188_640.jpg',
    'airplane-window-7443196_640.jpg',
    'airplane-6867678_640.jpg',
    'airplane city-3702676_640.jpg'
];

let currentImageIndex = 0;

function showImage(index) {
    currentImageIndex = index;
    document.getElementById('currentImage').src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initialize gallery
window.onload = function() {
    if (document.getElementById('currentImage')) {
        showImage(0);
    }
};