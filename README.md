# 🌍 tour and travels website  – React Tourism Website

A modern, responsive tourism website built using **React**, showcasing premium tour packages across India with galleries, enquiry modals, featured tours slider, and smooth navigation.

---

## 🚀 Features

- 🌄 Premium tour packages (Chardham, Gujarat, Rajasthan, Kashmir, South India, etc.)
- 🖼️ Image gallery with modal preview
- 📩 Enquiry modal for each tour
- 🎞️ Auto-sliding featured tours & testimonials
- 📱 Fully responsive (mobile & desktop)
- 🧭 Client-side routing using React Router
- 🎨 Modern UI with Tailwind CSS
- ⚡ Optimized using React Hooks

---

## 🛠️ Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Routing:** react-router-dom
- **Icons:** lucide-react
- **State Management:** React Hooks
- **Deployment:** Netlify / Vercel

---

## 📦 Dependencies

```bash
react
react-dom
react-router-dom
lucide-react
tailwindcss

If using Vite:
vite

📂 Project Structure
project-root/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── fe/
│   │   └── logo.png
│
├── src/
│   ├── EnquiryModal.jsx
│   ├── GalleryModal.jsx
│   ├── Tours.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── App.js
│   ├── main.jsx
│   ├── index.css
│
├── package.json
├── tailwind.config.js
├── README.md
└── vite.config.js / craco.config.js

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/india-tour-company.git
cd india-tour-company

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
Vite
npm run dev

CRA
npm start

🏗️ Build for Production
npm run build
Vite: dist/
CRA: build/

🌐 Deployment (Netlify)
Run:
npm run build

Upload the build folder (dist or build)
Add redirect rule for React Router:
Create a file _redirects inside public/:

/*  /index.html  200

🧠 Key Files Explanation
App.js
Main application file

Handles:
Featured tour slider
Gallery scrolling & modal
Testimonials rotation
Header scroll effects
Tour data & UI rendering

EnquiryModal.jsx
Opens on Enquire Now
Receives selected tour data

GalleryModal.jsx
Displays tour gallery images in modal

🔁 Routing Used
<Route path="/" element={<Home />} />
<Route path="/tours" element={<Tours />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

🎨 UI Highlights
Gradient-based modern theme
Glassmorphism navigation bar
Smooth animations & transitions
Icon-based feature highlights
Mobile-first design
📌 Future Enhancements
🔐 Admin dashboard
💳 Online booking & payment gateway
🌍 Multi-language support
🤖 AI-based tour recommendations
📊 Analytics dashboard

👨‍💻 Author
Vikash Gautam
B.Tech AI | Software Engineering
📍 India
🚀 Dream Company: NVIDIA

📜 License

This project is licensed for educational and commercial use.




