// Get the main image and all thumbnails
const mainImg = document.getElementById("mainImg");
const thumbnails = document.querySelectorAll(".thumbnail");

// Add click event listeners to each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        thumbnails.forEach(thumbnail => {
            thumbnail.style.opacity = "50%";
        })
        // Update the source of the main image with the clicked thumbnail's source
        mainImg.src = thumbnail.src;
        thumbnail.style.opacity = "100%";
    });
});