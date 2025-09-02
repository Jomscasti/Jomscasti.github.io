const projects = [
    {
        title: "MUSEEYOU",
        description: "A personal museum concept combining the ideas of 'Museum,' 'See,' and 'You,' designed to highlight moments and the art of living.",
        image: "assets/images/works/museeyou.png",
        preview: "https://jomscasti.github.io/mu-see-you",
        code: "https://github.com/Jomscasti/mu-see-you"
    },
    {
        title: "Arcane",
        description: "ARCANE is a visually immersive, responsive landing page inspired by the animated Netflix series Arcane.",
        image: "assets/images/works/arcane.png",
        preview: "https://jomscasti.github.io/arcane/",
        code: "https://github.com/Jomscasti/arcane"
    },
    {
        title: "Volcano Wonders",
        description: "A responsive website showcasing active volcanoes, fun facts, and real-time activity using HTML, Bootstrap, and custom CSS.",
        image: "assets/images/works/volcano.png",
        preview: "https://jomscasti.github.io/volcano-wonders/",
        code: "https://github.com/Jomscasti/volcano-wonders"
    },
    {
        title: "Cat Breeds Gallery",
        description: "Purrfectly Bredis a responsive web application designed to showcase, list, and explore various cat breeds.",
        image: "assets/images/works/cat.png",
        preview: "https://jomscasti.github.io/purrfectly-bred/",
        code: "https://github.com/Jomscasti/purrfectly-bred"
    },
    {
        title: "Tokyo Japan",
        description: "A responsive travel-themed website showcasing the beauty of Tokyo, Japan — featuring iconic destinations like Akihabara, Koishikawa Korakuen, and the Imperial Palace.",
        image: "assets/images/works/tokyo.png",
        preview: "https://jomscasti.github.io/tokyo-japan/",
        code: "https://github.com/Jomscasti/tokyo-japan"
    },
    {
        title: "Parallax",
        description: "An immersive parallax scrolling template built for modern, futuristic web experiences. Ideal for showcasing metaverse concepts, creative portfolios, or storytelling sites",
        image: "assets/images/works/metaverse.png",
        preview: "https://jomscasti.github.io/parallax/parallax.html",
        code: "https://github.com/Jomscasti/parallax"
    },
    {
        title: "Product Showcase",
        description: "Neo QLED 8K QN900D Smart TV. It features smooth navigation, a dynamic image carousel, and a sleek layout that highlights key features and specs with a modern, premium design.",
        image: "assets/images/works/samsung.png",
        preview: "https://jomscasti.github.io/smart-tv-showcase/",
        code: "https://github.com/Jomscasti/smart-tv-showcase"
    },
];

const container = document.getElementById("projectsContainer");

projects.forEach(project => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
    <div class="card h-100 shadow-sm border-0">
        <div class="ratio ratio-16x9">
            <img src="${project.image}" 
                 class="img-fluid w-100 h-100 rounded-top" 
                 alt="${project.title}" 
                 style="object-fit: cover;">
        </div>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title" style="color:#010440;">${project.title}</h5>
            <p class="card-text flex-grow-1">${project.description}</p>
            <div class="d-flex flex-wrap gap-2 mt-3">
                <a href="${project.preview}" target="_blank" class="btn text-white" style="background-color:#010440">Open Preview</a>
                <a href="${project.code}" target="_blank" class="btn btn-outline-dark">View Code</a>
            </div>
        </div>
    </div>
`;
    container.appendChild(col);
});