const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const imageGallery = document.getElementById('image-gallery');

searchButton.addEventListener('click', performSearch);

function performSearch() {
    const query = searchInput.value.trim();

    // Simulate fetching search results and images based on the query
    const searchResultsHTML = `<p>Search results for "${query}"</p>`;
    const imageGalleryHTML = `
        <img src="https://via.placeholder.com/150" alt="Image 1">
        <img src="https://via.placeholder.com/150" alt="Image 2">
        <img src="https://via.placeholder.com/150" alt="Image 3">
        <!-- Additional images can be added here -->
    `;

    // Display the search results and image gallery
    searchResults.innerHTML = searchResultsHTML;
    imageGallery.innerHTML = imageGalleryHTML;

    searchResults.style.display = 'block';
    imageGallery.style.display = 'block';

    // Scroll down to the search results
    searchResults.scrollIntoView({ behavior: 'smooth' });
}
