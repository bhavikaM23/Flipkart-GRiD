// Example of a simple interactivity - changing the header color when clicked
const header = document.querySelector('header');

header.addEventListener('click', function() {
    header.style.backgroundColor = 'darkred';
    header.style.color = '#fff';
});
