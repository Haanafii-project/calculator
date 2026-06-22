# 🧮 Simple Modern DOM Calculator

Kalkulator digital berbasis web dengan tampilan modern bergaya *glassmorphism*. Proyek ini dibuat untuk memenuhi tantangan (challenge) pembuatan kalkulator menggunakan interaksi DOM (Document Object Model) secara manual tanpa bantuan *framework* JavaScript.

---

## 🚀 Fitur Utama

* **Interaksi DOM Manual:** Menggunakan teknik *Event Delegation* pada JavaScript untuk efisiensi performa penanganan klik tombol.
* **Desain Modern:** Antarmuka responsif dan estetis yang dibangun menggunakan **Tailwind CSS**, lengkap dengan efek *glow* dan animasi *micro-interaction* (`hover` & `active` state).
* **Validasi Operator:** Sistem otomatis mencegah kesalahan input pengguna seperti penulisan operator ganda berturut-turut (misal: `++` atau `×÷`).
* **Responsif:** Ukuran kalkulator otomatis menyesuaikan (fleksibel) saat dibuka di perangkat *mobile* maupun *desktop*.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5** – Struktur semantik dasar dan pemanfaatan *custom attribute* (`data-*`).
* **Tailwind CSS** – *Utility-first CSS framework* untuk mempercepat *styling* modern via CDN.
* **Vanilla JavaScript (ES6+)** – Logika matematika, manipulasi DOM, dan manajemen *state* input.

---

## 📂 Struktur File

```text
├── index.html     # Struktur halaman & interface Tailwind
├── script.js      # Logika kalkulator & manipulasi DOM
└── README.md      # Dokumentasi proyek