    const comments = [
    "Creative leader 💡",
    "Design addict 🎨",
    "Visionary thinker 🌟",
    "Team player 🤝",
    "Multi-passionate 🔥",
    "Web wizard 🧙‍♂️",
    "Glassmorphism fan ✨",
    "Dream chaser 🚀",
    "Strategic mind 🧠"
    ];

    function createFloatingComment() {
    const comment = document.createElement("span");
    comment.classList.add("floating-comment");
    comment.textContent = comments[Math.floor(Math.random() * comments.length)];

    const top = Math.random() * 85 + 5;
    comment.style.top = `${top}%`;

    const duration = Math.random() * 3 + 3;
    comment.style.animationDuration = `${duration}s`;

    comment.style.fontSize = `${Math.random() * 0.4 + 1.1}rem`;

    document.querySelector(".about-highlight").appendChild(comment);

    setTimeout(() => {
        comment.remove();
    }, duration * 1000);
}

    setInterval(createFloatingComment, 700);
