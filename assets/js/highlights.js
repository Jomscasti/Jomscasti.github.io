const highlightsData = {
    cards: [
        {
            title: "Certificates & Awards",
            text: "Recognizing growth, excellence, and commitment.",
            narrative: "Each certificate and award represents a milestone — a reflection of dedication, continuous learning, and the drive to do more. From academic honors to national recognition programs, these achievements fuel my passion to keep striving and growing as a tech professional.",
            image: "assets/images/highlights/certs/07.png", 
            folder: "certs"
        },
        {
            title: "Leadership",
            text: "Shaping communities, one initiative at a time.",
            narrative: "Being a leader means more than holding a title — it's about making a difference. Whether through mentoring, organizing events, or fostering inclusive communities, I use leadership as a platform to empower others and inspire collaborative growth.",
            image: "assets/images/me2.png",
            folder: "leadership"
        },
        {
            title: "Film & Creative Media",
            text: "Stories told through visuals and emotion.",
            narrative: "My passion for storytelling extends into the world of film and multimedia. I explore narratives that resonate — blending emotion, concept, and digital craftsmanship. Every frame becomes a tool to inform, inspire, or provoke thought in meaningful ways.",
            image: "assets/images/me.png", 
            folder: "works"
        }
    ]
};

function loadHighlights() {
    const container = document.getElementById("highlightsContainer");
    if (!container) return;

    highlightsData.cards.forEach((card, index) => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-3 mt-0";

        col.innerHTML = `
  <div class="card text-white border-0 position-relative overflow-hidden mb-5"
       style="height: 400px; background-size: cover; background-position: center; background-image: url('${card.image}');">
    <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center"
         style="background: rgba(0, 0, 0, 0.4);">
      <h5 class="card-title fw-bold">${card.title}</h5>
      <p class="card-text">${card.text}</p>
<a href="view.html?index=${index}" class="btn btn-outline-light mt-2 px-4">Explore</a>
  </div>
`;
        container.appendChild(col);
    });
}

// Load highlights when the page loads
document.addEventListener('DOMContentLoaded', loadHighlights);