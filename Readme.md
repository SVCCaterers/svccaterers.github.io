# Catering Website

A static catering website hosted on **GitHub Pages**, built with modular header and footer components using JavaScript injection.  
This avoids code repetition and keeps the site easy to maintain.

---

## 📂 Folder Structure
/index.html /menu.html /services.html /contact.html /header.html /footer.html /style.css /JS/include.js /JS/script.js /images/logo1.png /images/logo2.png


---

## 🔧 How It Works

- **Header & Footer**  
  Stored separately in `header.html` and `footer.html`.  
  Each page has placeholders (`<div id="header-placeholder"></div>` and `<div id="footer-placeholder"></div>`).  

- **JavaScript Injection**  
  `JS/include.js` loads `header.html` and `footer.html` into placeholders using `fetch()`.  
  This means you only edit header/footer once, and all pages update automatically.

- **Logo Rotation**  
  `JS/script.js` alternates between `logo1.png` and `logo2.png` every 5 seconds.

- **Styling**  
  `style.css` provides consistent design across all pages.

---

## 🚀 Deployment on GitHub Pages

1. Push your project to a GitHub repository.  
2. Go to **Settings → Pages**.  
3. Under **Source**, select the branch (usually `main`) and root folder (`/`).  
4. Save — your site will be live at:  

https://<username>.github.io/<repository>/


---

## 🖼️ Adding Images

- Place all images inside the `/images/` folder.  
- Reference them in HTML as:  
```html
<img src="images/yourimage.png" alt="Description">

