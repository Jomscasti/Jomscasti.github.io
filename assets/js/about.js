const whatIDoData = [
    {
        icon: 'bi-window',
        title: 'Responsive Web Applications',
        description: 'Building fast, scalable websites that adapt to any device.'
    },
    {
        icon: 'bi-brush',
        title: 'User-Centered Web Designs',
        description: 'Designing with empathy and usability at the core.'
    },
    {
        icon: 'bi-palette-fill',
        title: 'Graphic Design',
        description: 'Crafting visual content for branding and digital media.'
    },
    {
        icon: 'bi-people-fill',
        title: 'Lead Others',
        description: 'Empowering teams with vision, support, and direction.'
    }
];

const container = document.getElementById('whatIDoCards');

whatIDoData.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3';

    col.innerHTML = `
    <div class="card h-100 text-center border-0 rounded"
        style="
             background-color: #e5d4f7;
             color: #010440;
           ">
        <div class="card-body">
            <i class="bi ${item.icon} fs-1 mb-3" style="color: #9b5de5;"></i>
            <h5 class="card-title fw-bold">${item.title}</h5>
            <p class="card-text">${item.description}</p>
        </div>
    </div>
    `;

    container.appendChild(col);
});

