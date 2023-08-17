// Add a simple interactivity example (you can expand this)
document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Remove active class from all links
            sidebarLinks.forEach(link => link.classList.remove("active"));
            // Add active class to the clicked link
            this.classList.add("active");
            event.preventDefault();
        });
    });
});
