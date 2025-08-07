# 🌌 Parallax Metaverse Theme

An immersive parallax scrolling template built for modern, futuristic web experiences. Ideal for showcasing virtual worlds, metaverse concepts, creative portfolios, or storytelling sites.

🔗 **Live Preview:** [jomscasti.github.io/parallax](https://jomscasti.github.io/parallax)

---

## ✨ Features

- Smooth multi-layer parallax scrolling
- Easy integration into any HTML project
- Fully customizable image layers
- Lightweight and responsive design
- Ideal for virtual themes, Web3, and tech showcases

---

## 🚀 Quick Start

### 1. Add the Parallax Section

Paste this into your HTML file where you want the parallax effect:

```html
<section>
  <div class="keyart" id="parallax">
    <div class="keyart_layer parallax" id="keyart-0" data-speed="2"></div>
    <div class="keyart_layer parallax" id="keyart-1" data-speed="5"></div>
    <div class="keyart_layer parallax" id="keyart-2" data-speed="11"></div>
    <div class="keyart_layer parallax" id="keyart-3" data-speed="16"></div>
    <div class="keyart_layer parallax" id="keyart-4" data-speed="26"></div>
    <div class="keyart_layer parallax" id="keyart-5" data-speed="36"></div>
    <div class="keyart_layer parallax" id="keyart-6" data-speed="49"></div>
    <div class="keyart_layer parallax" id="keyart-7" data-speed="69"></div>
    <div class="keyart_layer" id="keyart-8" data-speed="100"></div>
  </div>
</section>
```

---

### 2. Add Your Main Content

Below the parallax section, add your site’s content:

```html
<section class="main-content">
  <div style="/* Your custom styles here */">
    <!-- Your content goes here -->
  </div>
</section>
```

---

### 3. Customize the Layers

To change layer images, update files in the `/img` folder using `.png` format.

Edit `parallax.css` to define each layer:

```css
#keyart-0 {
  background-image: url(img/your-image.png);
}
```

---

### 4. Adjust Speed

Change the `data-speed` value in the HTML to make layers scroll faster or slower:

```html
<div class="keyart_layer parallax" data-speed="20"></div>
```

---

## 📁 Folder Structure

```
parallax/
├── index.html
├── parallax.html
├── parallax.css
├── style.css
├── img/
└── README.md
```

---

## 🧠 Credits

Originally adapted from **EZ-Parallax by cjdeclaro**  
Modified and enhanced by **JomCasti** for the **Metaverse Theme Experience**
