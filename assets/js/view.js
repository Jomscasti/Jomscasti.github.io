document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get("index"));

    if (isNaN(index) || !highlightsData.cards[index]) {
        document.getElementById("highlightTitle").textContent = "Not Found";
        return;
    }

    const card = highlightsData.cards[index];

    // Set title, featured image, and narrative
    document.getElementById("highlightTitle").textContent = card.title;
    document.getElementById("featuredImage").src = card.image;
    document.getElementById("highlightNarrative").textContent = card.narrative;

    const galleryContainer = document.getElementById("galleryContainer");
    const folder = `assets/images/highlights/${card.folder}/`;
    const extensions = [".png", ".jpg", ".jpeg", ".webp"];
    let i = 1;

    function tryNextImage() {
        if (i > 99) return; 

        const baseName = String(i).padStart(2, "0");

        let found = false;
        let tryIndex = 0;

        function tryExtension() {
            if (tryIndex >= extensions.length) {
                if (!found) return;
            } else {
                const ext = extensions[tryIndex];
                const img = new Image();
                img.src = `${folder}${baseName}${ext}`;
                img.onload = function () {
                    // Create card only if the image loads
                    const col = document.createElement("div");
                    col.className = "col-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch";

                    const imgWrapper = document.createElement("div");
                    imgWrapper.className = "card w-100 shadow-sm";

                    img.className = "card-img-top img-fluid";
                    img.style.height = "250px";
                    img.style.objectFit = "cover";

                    imgWrapper.appendChild(img);
                    col.appendChild(imgWrapper);
                    galleryContainer.appendChild(col);

                    found = true;
                    i++;
                    tryNextImage();
                };
                img.onerror = function () {
                    tryIndex++;
                    tryExtension();
                };
            }
        }

        tryExtension();
    }

    tryNextImage(); // Start loading images
});
