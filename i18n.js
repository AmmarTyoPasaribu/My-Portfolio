/* ============================================
   i18n — EN / ID LANGUAGE SYSTEM
   Shared across index.html and all detail pages
   ============================================ */
(function () {
  const T = {
    en: {
      // ── HERO ──
      'hero.greeting': "Hello, I'm",
      'hero.tagline': "I'm a ",
      'hero.desc': "Full Stack Developer who blends web technologies with AI and Data Science to build smart, real-world solutions.",
      'hero.cta1': 'View My Work',
      'hero.cta2': 'Get in Touch',

      // ── ABOUT ──
      'about.title': 'About <span>Me</span>',
      'about.p1': "A Bachelor of Information Systems from Universitas Hasanuddin with a strong foundation in full-stack web development and a growing passion for AI and Data Science. Proficient in Python (Flask), JavaScript, Node.js, Express.js, React.js/Next.js, Laravel, and SQL — always eager to learn, build, and turn complex ideas into clean, working solutions.",
      'about.skill': 'Skill & Interest',
      'about.cv': 'Download CV',

      // ── EDUCATION ──
      'edu.title': 'My <span>Education</span>',
      'edu.sub': 'Academic background',
      'edu.unhas.period': '2022 — 2026',
      'edu.unhas.role': 'Bachelor of Information Systems — GPA: 3.93 / 4.00',
      'edu.unhas.desc': 'Bakti BCA Scholarship Recipient.<br>Coursework: Web Development, Data Science, Machine Learning, Deep Learning, Rekayasa Sistem Informasi.',
      'edu.sma.role': 'Science Major — Score: 91.2 / 100.0',
      'edu.sma.desc': 'Head of OSIS Academic & Sports Division. 1st Place KSN-K Maros Informatics 2019 & 2020 by Ministry of Education.',

      // ── EXPERIENCE ──
      'exp.title': 'My <span>Experience</span>',
      'exp.sub': 'Internship & organizational activities',
      'exp.intern.role': 'Internship — Airport Pass Service Division',
      'exp.intern.desc': 'Managed recording and data input for up to 40 applicants/day. Served up to 200 applicants/week. Handled correspondence and administration, and compiled weekly reports for airport pass printing monitoring.',
      'exp.himatika.role': 'Member of Academic & Student Affairs Division',
      'exp.himatika.desc': 'Speaker at Himatika Talks on the path to success through scholarships. Managed student member databases and provided academic support in Information Systems, Mathematics, and Actuarial Science.',
      'exp.osis.role': 'Head of Academic Achievement, Arts & Sports Division',
      'exp.osis.desc': 'Recorded and compiled all student achievements. Led Sports & Arts Week 2020 involving 60 committee members and 900 student participants. Managed 20+ extracurriculars.',

      // ── ACHIEVEMENTS ──
      'ach.title': 'My <span>Achievements</span>',
      'ach.sub': "Awards and recognitions I've earned",
      'ach.bca.desc': 'Selected as a Bakti BCA Scholarship recipient through academic achievement selection. Participated in a Transformational Workshop and engaged in a Business Impact Plan Competition to support UMKM growth in Makassar.',
      'ach.ksn20.desc': 'Won 1st Place in the National Science Competition at the District level in Maros organized by the Ministry of Education in 2020.',
      'ach.ksn19.desc': 'Won 1st Place in the National Science Competition at the District level in Maros organized by the Ministry of Education in 2019.',

      // ── SKILLS ──
      'skills.title': 'My <span>Skills</span>',
      'skills.sub': 'Technologies, tools, and soft skills I work with',
      'skill.html': 'Semantic markup, responsive layouts, Tailwind CSS, animations, modern CSS features',
      'skill.js': 'ES6+, DOM manipulation, async programming, API integration, serverless functions',
      'skill.react': 'Component-based UI, hooks, SSR, routing, state management, API routes',
      'skill.node': 'REST APIs, Express, serverless functions, JWT authentication, database integration',
      'skill.python': 'Data Science, Machine Learning, Flask, scripting, automation, data processing',
      'skill.laravel': 'MVC architecture, Blade templating, Eloquent ORM, session auth, Vite integration',
      'skill.java': 'Object-oriented programming, Android development, data structures & algorithms',
      'skill.db': 'Database design, SQL queries, PostgreSQL, REST API, Supabase real-time features',
      'skill.tools': 'Git, GitHub, VS Code, Vercel, Render, Google Colab, Tableau, Microsoft Office',

      // ── PROJECTS ──
      'proj.title': 'My <span>Projects</span>',
      'proj.sub': "A showcase of web applications I've built",
      'proj.safenurse.desc': 'Patient safety incident reporting system with AI chatbot, voice input, auto categorization, and multi-role dashboard.',
      'proj.shoestore.desc': 'Full-stack shoe e-commerce with NMF machine learning-based AI recommendation system and complete admin panel.',
      'proj.marental.desc': 'Full-stack online car rental system with auto booking, driver management, admin dashboard, and payment proof upload.',
      'proj.marnime.desc': 'Modern anime website with Aurora Dark theme. Explore, track watchlist, and manage your anime list with AniList data.',
      'proj.margames.desc': '15 modern HTML5 mini-games with dark glassmorphism, SFX, high score, and PWA support — playable offline.',
      'proj.interview.desc': 'Web-based candidate interview scoring app. Create question templates, real-time scoring, and automatic ranking leaderboard.',
      'proj.grabmar.desc': 'Daily earnings calculator for Grab drivers. Calculate digital & cash money, save history with login, and view detailed breakdown.',
      'proj.desa.desc': 'Village profile website for KKN program. Displays profile, history, monograph, infographics, UMKM, and village potential.',
      'proj.marilmu.desc': 'Complete digital Islamic portal with 25+ features to support daily worship — Al-Quran, Prayer Schedule, Digital Tasbih, and more.',
      'proj.marticle.desc': 'Interactive particle system designer with 18 built-in presets, multi-layer, mouse interaction, export to JSON/WebM/PNG, and shareable links.',
      'proj.qrcodemar.desc': 'Full-featured QR code generator & customizer — 8 color presets, 4 dot styles, logo overlay, labels, history, PNG/SVG export, all client-side.',
      'btn.detail': 'Detail',
      'btn.demo': 'Live Demo',
      'btn.source': 'Source Code',

      // ── CONTACT ──
      'contact.title': 'Get in <span>Touch</span>',
      'contact.sub': "Let's connect and collaborate!",

      // ── CERTIFICATIONS ──
      'cert.title': '<span>Certifications</span>',
      'cert.sub': 'Certifications & Achievements',
      'cert.more': 'Show More Certifications ▼',
      'cert.less': 'Show Less ▲',
      'cert.other.title': '🏅 Other Certifications',
      'cert.bnsp': 'BNSP Data Analyst Certification',
      'cert.ksn20': '1st Place KSN-K Informatics 2020',
      'cert.ksn21': '1st Place KSN-K Informatics 2021',

      // ── FOOTER ──
      'footer.copy': '© 2026 Ammar Tyo Pasaribu. All rights reserved.',

      // ── DETAIL PAGES ──
      'detail.back': 'Back to Projects',
      'detail.features': '✨ <span>Features</span>',
      'detail.tech': '🛠 <span>Tech Stack</span>',
      'detail.screenshots': '📸 <span>Screenshots</span>',

      // SafeNurse Detail
      'sn.desc': 'Web-based patient safety incident reporting system for hospitals. Nurses report incidents through an AI chatbot assistant, and reports are automatically processed with validation, scoring, and notifications to relevant parties.',
      'sn.f1': '<strong>AI Chat Assistant</strong> — Report incidents through an interactive chatbot with AI that guides data entry',
      'sn.f2': '<strong>Voice Input</strong> — Voice input using Web Speech API directly from the browser',
      'sn.f3': '<strong>Auto Categorization</strong> — Reports are automatically categorized by LLM (KTD, KPC, KNC, KTC, Sentinel)',
      'sn.f4': '<strong>Multi-Role Dashboard</strong> — Different dashboards for Nurse, Head Nurse, Chief Nursing, and Super Admin',
      'sn.f5': '<strong>Notifications & Email</strong> — Real-time notifications and automatic emails for every status change',
      'sn.f6': '<strong>Scoring & Grading</strong> — Incident risk assessment based on impact and probability',

      // ShoeStore Detail
      'ss.desc': 'Full-stack shoe e-commerce application with NMF machine learning-based recommendation system. Built with React and Flask, equipped with complete admin panel for managing products, orders, and user data.',
      'ss.f1': '<strong>Product Catalog</strong> — Browse shoe collection with category filters, search, and pagination',
      'ss.f2': '<strong>AI Recommendation</strong> — Personal recommendation system using NMF machine learning',
      'ss.f3': '<strong>Cart & Checkout</strong> — Add to cart, adjust quantities, and process orders',
      'ss.f4': '<strong>Multi-Payment</strong> — Bank Transfer, E-Wallet, COD, Credit Card',
      'ss.f5': '<strong>Wishlist</strong> — Save favorite shoes to buy later',
      'ss.f6': '<strong>Admin Panel</strong> — Complete CRUD for categories, products, users, orders, and interactions',

      // MaRental Detail
      'mr.desc': 'Full-stack online car rental application. Features automatic booking, driver selection, payment proof upload via Cloudinary, rental history, complete admin dashboard, and auto-release vehicles.',
      'mr.f1': '<strong>Vehicle Catalog</strong> — View available cars with specs and prices',
      'mr.f2': '<strong>Auto Booking</strong> — Automatic booking with duration and total price calculation',
      'mr.f3': '<strong>Choose Driver</strong> — Self-drive or with available driver option',
      'mr.f4': '<strong>Upload Payment</strong> — Upload payment proof via Cloudinary',
      'mr.f5': '<strong>Admin Dashboard</strong> — Manage vehicles, orders, drivers, and payments',
      'mr.f6': '<strong>Auto-Release</strong> — Vehicles automatically available again after rental period ends',

      // MaRnime Detail
      'mn.desc': 'Modern anime website with an elegant Aurora Dark theme. Explore, track, and manage your anime list using data from the AniList GraphQL API. Complete with watchlist, profile, and multilingual support.',
      'mn.f1': '<strong>Explore Anime</strong> — Filter by genre, format, status, season, and year',
      'mn.f2': '<strong>Anime Details</strong> — Synopsis, characters, staff, relations, recommendations, and trailer',
      'mn.f3': '<strong>Seasonal Anime</strong> — Currently airing anime per season with episode countdown',
      'mn.f4': '<strong>Watchlist</strong> — Add anime to watch list (Planning, Watching, Completed)',
      'mn.f5': '<strong>Authentication</strong> — Register and login with email & password via Supabase',
      'mn.f6': '<strong>Multilingual</strong> — Toggle English / Indonesian language',

      // MaRgames Detail
      'mg.desc': 'Collection of 15 modern HTML5 mini-games with dark glassmorphism UI, built-in SFX, high score, and PWA support — playable directly from the browser, offline-ready.',
      'mg.f1': '<strong>15 Mini-Games</strong> — Various games from puzzle, arcade, classic, to brain teaser',
      'mg.f2': '<strong>Dark Glassmorphism</strong> — Modern design with glass effect and dark gradients',
      'mg.f3': '<strong>High Score</strong> — Save highest scores locally',
      'mg.f4': '<strong>Built-in SFX</strong> — Interactive sound effects in every game',
      'mg.f5': '<strong>PWA Support</strong> — Install as app on device, playable offline',
      'mg.f6': '<strong>Canvas-based</strong> — Game rendering using HTML5 Canvas API',

      // Interview Detail
      'iv.desc': 'Web-based candidate interview scoring application. Create reusable question templates, real-time scoring for each candidate, and automatic ranking leaderboard for comparing results.',
      'iv.f1': '<strong>Template Creation</strong> — Create reusable interview question templates',
      'iv.f2': '<strong>Real-time Scoring</strong> — Score directly during the interview',
      'iv.f3': '<strong>Leaderboard</strong> — Automatic ranking based on total candidate scores',
      'iv.f4': '<strong>Detail Breakdown</strong> — View score details per category for each candidate',
      'iv.f5': '<strong>Multi-Template</strong> — Support various templates for different positions',
      'iv.f6': '<strong>Responsive</strong> — Usable on mobile and desktop devices',

      // GrabMaR Detail
      'gm.desc': 'Daily earnings calculator application for Grab drivers. Calculate digital and cash money separately, save earnings history with account login, and view detailed breakdown for each work day.',
      'gm.f1': '<strong>Earnings Calculator</strong> — Input earnings from GrabFood, GrabCar, GrabBike easily',
      'gm.f2': '<strong>Live Total</strong> — Total earnings update in real-time while inputting',
      'gm.f3': '<strong>User Accounts</strong> — Login and register to save personal data',
      'gm.f4': '<strong>History Saving</strong> — Save daily earnings history to database',
      'gm.f5': '<strong>Detail Breakdown</strong> — View detailed breakdown per category and day',
      'gm.f6': '<strong>Responsive</strong> — Optimal display on smartphones for drivers',

      // Desa Bangkalaloe Detail
      'db.desc': 'Official profile website of Desa Bangkalaloe, Jeneponto to support the KKN program. Displays village profile, history, monographic data, map infographics, UMKM information, and village potential.',
      'db.f1': '<strong>Village Profile</strong> — Complete information about Desa Bangkalaloe, Jeneponto',
      'db.f2': '<strong>Village History</strong> — History of how the village was formed and its development',
      'db.f3': '<strong>Monographic Data</strong> — Population, demographic, and village statistics',
      'db.f4': '<strong>Location Map</strong> — Google Maps integration to show village location',
      'db.f5': '<strong>UMKM</strong> — Information on micro, small, and medium enterprises in the village',
      'db.f6': '<strong>Modern UI</strong> — Scroll animations, parallax, and responsive design',

      // MaRilmu Detail
      'marilmu.desc': 'Complete digital Islamic portal with 25+ features to support daily worship. Includes Al-Quran with translations, automatic prayer schedule, digital tasbih, dzikir, prayer guide, audio murottal, and much more.',
      'marilmu.f1': '<strong>Al-Quran</strong> — 114 surahs with Arabic text, Latin transliteration, and Indonesian translation',
      'marilmu.f2': '<strong>Prayer Schedule</strong> — Automatic prayer times based on GPS location + countdown',
      'marilmu.f3': '<strong>Digital Tasbih</strong> — Dhikr counter with 6 presets and daily tracking',
      'marilmu.f4': '<strong>Audio Murottal</strong> — Listen to Al-Quran from 4 famous reciters',
      'marilmu.f5': '<strong>Islamic Quiz</strong> — 15 Islamic trivia questions + score + answer explanations',
      'marilmu.f6': '<strong>Zakat Calculator</strong> — Calculate income zakat, assets zakat, and fitrah zakat automatically',

      // MaRticle Design Detail
      'marticle.desc': 'Premium interactive particle system designer built with vanilla HTML, CSS, and JavaScript. Create stunning particle effects in real-time with an intuitive visual editor, multi-layer system, and 18 built-in presets.',
      'marticle.f1': '<strong>18 Built-in Presets</strong> — Fire, Rain, Snow, Smoke, Sparkle, Explosion, Confetti, Galaxy, Aurora, and more',
      'marticle.f2': '<strong>Multi-Layer System</strong> — Run multiple particle effects simultaneously on the same canvas',
      'marticle.f3': '<strong>Mouse Interaction</strong> — Click and drag on canvas to emit particles at cursor position',
      'marticle.f4': '<strong>Export Options</strong> — Export to JSON config, WebM recording, PNG frame, and copyable JS code',
      'marticle.f5': '<strong>Undo/Redo</strong> — Full history with Ctrl+Z / Ctrl+Y support',
      'marticle.f6': '<strong>Shareable Links</strong> — Encode configuration into a URL and share with others',

      // QR Code MaR Detail
      'qrcodemar.desc': 'Generate, customize, and download QR codes instantly — all client-side, no data sent to any server. Features 8 color presets, 4 dot styles, logo overlay, and history.',
      'qrcodemar.f1': '<strong>Multiple Data Types</strong> — Support for URL, Text, WiFi, and Email',
      'qrcodemar.f2': '<strong>8 Color Presets</strong> — Classic, Midnight, Ocean, Purple, Emerald, Rose, Gold Dark, Inverted',
      'qrcodemar.f3': '<strong>Logo Overlay</strong> — Drag & drop logo with adjustable size, padding, and shape',
      'qrcodemar.f4': '<strong>4 Dot Styles</strong> — Square, Rounded, Circle, and Diamond',
      'qrcodemar.f5': '<strong>Export PNG/SVG</strong> — Download as PNG or SVG, plus copy to clipboard',
      'qrcodemar.f6': '<strong>History</strong> — Last 8 QR codes saved locally',
    },
    id: {
      // ── HERO ──
      'hero.greeting': 'Halo, Saya',
      'hero.tagline': 'Saya seorang ',
      'hero.desc': 'Full Stack Developer yang memadukan teknologi web dengan AI dan Data Science untuk membangun solusi cerdas di dunia nyata.',
      'hero.cta1': 'Lihat Karya Saya',
      'hero.cta2': 'Hubungi Saya',

      // ── ABOUT ──
      'about.title': 'Tentang <span>Saya</span>',
      'about.p1': "Lulusan S1 Sistem Informasi Universitas Hasanuddin dengan fondasi kuat di pengembangan web full-stack serta passion yang terus berkembang di bidang AI dan Data Science. Menguasai Python (Flask), JavaScript, Node.js, Express.js, React.js/Next.js, Laravel, dan SQL — selalu semangat belajar, membangun, dan mengubah ide kompleks menjadi solusi yang rapi dan bekerja.",
      'about.skill': 'Keahlian & Minat',
      'about.cv': 'Unduh CV',

      // ── EDUCATION ──
      'edu.title': '<span>Pendidikan</span> Saya',
      'edu.sub': 'Latar belakang akademik',
      'edu.unhas.period': '2022 — 2026',
      'edu.unhas.role': 'Bachelor of Information Systems — IPK: 3.93 / 4.00',
      'edu.unhas.desc': 'Penerima Beasiswa Bakti BCA.<br>Coursework: Web Development, Data Science, Machine Learning, Deep Learning, Rekayasa Sistem Informasi.',
      'edu.sma.role': 'Jurusan IPA — Score: 91.2 / 100.0',
      'edu.sma.desc': 'Ketua OSIS Sekbid Prestasi Akademik, Seni & Olahraga. Juara 1 KSN-K Maros Bidang Informatika 2019 & 2020 oleh Kemdikbudristek.',

      // ── EXPERIENCE ──
      'exp.title': '<span>Pengalaman</span> Saya',
      'exp.sub': 'Magang & kegiatan organisasi',
      'exp.intern.role': 'Magang — Bagian Pelayanan Pas Bandara',
      'exp.intern.desc': 'Mengelola perekaman dan input data hingga 40 pemohon/hari. Melayani hingga 200 pemohon/minggu. Mengelola persuratan dan administrasi, serta menyusun laporan mingguan monitoring pencetakan pas bandara secara terstruktur.',
      'exp.himatika.role': 'Anggota Bidang Akademik dan Kemahasiswaan',
      'exp.himatika.desc': 'Pemateri kegiatan Himatika Talks tentang jalan kesuksesan melalui beasiswa. Mengelola database mahasiswa anggota dan memberikan bantuan akademik dalam lingkup Sistem Informasi, Matematika, dan Ilmu Aktuaria.',
      'exp.osis.role': 'Ketua Sekbid Prestasi Akademik, Seni & Olahraga',
      'exp.osis.desc': 'Mendata dan merekap seluruh prestasi siswa. Memimpin Pekan Olahraga & Seni 2020 yang melibatkan 60 panitia dan 900 siswa peserta. Mengelola 20+ ekstrakurikuler.',

      // ── ACHIEVEMENTS ──
      'ach.title': '<span>Prestasi</span> Saya',
      'ach.sub': 'Penghargaan dan pencapaian yang diraih',
      'ach.bca.desc': 'Terpilih sebagai penerima Beasiswa Bakti BCA melalui seleksi prestasi akademik. Mengikuti Transformational Workshop dan terlibat dalam Business Impact Plan Competition untuk mendukung pertumbuhan UMKM di Makassar.',
      'ach.ksn20.desc': 'Meraih juara 1 Kompetisi Sains Nasional tingkat Kabupaten Maros yang diselenggarakan oleh Kemdikbudristek Tahun 2020.',
      'ach.ksn19.desc': 'Meraih juara 1 Kompetisi Sains Nasional tingkat Kabupaten Maros yang diselenggarakan oleh Kemdikbudristek Tahun 2019.',

      // ── SKILLS ──
      'skills.title': '<span>Keahlian</span> Saya',
      'skills.sub': 'Teknologi, tools, dan soft skills yang saya kuasai',
      'skill.html': 'Markup semantik, layout responsif, Tailwind CSS, animasi, fitur CSS modern',
      'skill.js': 'ES6+, manipulasi DOM, async programming, integrasi API, serverless functions',
      'skill.react': 'UI berbasis komponen, hooks, SSR, routing, state management, API routes',
      'skill.node': 'REST API, Express, serverless functions, autentikasi JWT, integrasi database',
      'skill.python': 'Data Science, Machine Learning, Flask, scripting, automation, pengolahan data',
      'skill.laravel': 'Arsitektur MVC, Blade templating, Eloquent ORM, session auth, integrasi Vite',
      'skill.java': 'Pemrograman berorientasi objek, pengembangan Android, struktur data & algoritma',
      'skill.db': 'Desain database, SQL queries, PostgreSQL, REST API, fitur real-time Supabase',
      'skill.tools': 'Git, GitHub, VS Code, Vercel, Render, Google Colab, Tableau, Microsoft Office',

      // ── PROJECTS ──
      'proj.title': '<span>Proyek</span> Saya',
      'proj.sub': 'Kumpulan aplikasi web yang telah saya bangun',
      'proj.safenurse.desc': 'Sistem pelaporan insiden keselamatan pasien dengan chatbot AI, voice input, auto kategorisasi, dan multi-role dashboard.',
      'proj.shoestore.desc': 'E-commerce sepatu full-stack dengan sistem rekomendasi AI berbasis NMF machine learning dan panel admin lengkap.',
      'proj.marental.desc': 'Sistem rental mobil online full stack dengan booking otomatis, manajemen driver, admin dashboard, dan upload bukti pembayaran.',
      'proj.marnime.desc': 'Website anime modern dengan tema Aurora Dark. Jelajahi, lacak watchlist, dan kelola daftar anime kamu dengan data dari AniList.',
      'proj.margames.desc': 'Koleksi 15 mini-game HTML5 modern dengan dark glassmorphism, SFX, high score, dan PWA support — playable offline.',
      'proj.interview.desc': 'Aplikasi penilaian interview kandidat berbasis web. Buat template pertanyaan, scoring real-time, dan leaderboard ranking otomatis.',
      'proj.grabmar.desc': 'Kalkulator pendapatan harian driver Grab. Hitung uang digital & cash, simpan riwayat dengan login, dan lihat detail breakdown.',
      'proj.desa.desc': 'Website profil desa untuk program KKN. Menampilkan profil, sejarah, monografi, infografis, UMKM, dan potensi desa.',
      'proj.marilmu.desc': 'Portal Islami digital lengkap dengan 25+ fitur untuk membantu ibadah sehari-hari seperti Al-Quran, Jadwal Sholat, Tasbih Digital, dan lainnya.',
      'proj.marticle.desc': 'Interactive particle system designer dengan 18 preset bawaan, multi-layer, mouse interaction, export ke JSON/WebM/PNG, dan shareable links.',
      'proj.qrcodemar.desc': 'QR code generator & customizer lengkap — 8 color presets, 4 dot styles, logo overlay, label, history, export PNG/SVG, semua client-side.',
      'btn.detail': 'Detail',
      'btn.demo': 'Demo Langsung',
      'btn.source': 'Kode Sumber',

      // ── CONTACT ──
      'contact.title': 'Hubungi <span>Saya</span>',
      'contact.sub': 'Ayo terhubung dan berkolaborasi!',

      // ── CERTIFICATIONS ──
      'cert.title': '<span>Sertifikasi</span>',
      'cert.sub': 'Sertifikasi & Pencapaian',
      'cert.more': 'Lihat Lebih Banyak Sertifikasi ▼',
      'cert.less': 'Sembunyikan ▲',
      'cert.other.title': '🏅 Sertifikasi Lainnya',
      'cert.bnsp': 'Sertifikasi BNSP Data Analyst',
      'cert.ksn20': 'Juara 1 KSN-K Informatika 2020',
      'cert.ksn21': 'Juara 1 KSN-K Informatika 2021',

      // ── FOOTER ──
      'footer.copy': '© 2026 Ammar Tyo Pasaribu. Hak cipta dilindungi.',

      // ── DETAIL PAGES ──
      'detail.back': 'Kembali ke Proyek',
      'detail.features': '✨ <span>Fitur</span>',
      'detail.tech': '🛠 <span>Teknologi</span>',
      'detail.screenshots': '📸 <span>Tangkapan Layar</span>',

      // SafeNurse Detail
      'sn.desc': 'Sistem pelaporan insiden keselamatan pasien berbasis web untuk rumah sakit. Perawat melaporkan insiden melalui asisten chatbot AI, dan laporan diproses secara otomatis dengan validasi, scoring, serta notifikasi ke pihak terkait.',
      'sn.f1': '<strong>Chat Assistant AI</strong> — Pelaporan insiden melalui chatbot interaktif dengan AI yang membimbing pengisian data',
      'sn.f2': '<strong>Voice Input</strong> — Input suara menggunakan Web Speech API langsung dari browser',
      'sn.f3': '<strong>Auto Kategorisasi</strong> — Data laporan dikategorikan otomatis oleh LLM (KTD, KPC, KNC, KTC, Sentinel)',
      'sn.f4': '<strong>Multi-Role Dashboard</strong> — Dashboard berbeda untuk Perawat, Kepala Ruangan, Chief Nursing, dan Super Admin',
      'sn.f5': '<strong>Notifikasi & Email</strong> — Notifikasi real-time dan email otomatis untuk setiap perubahan status',
      'sn.f6': '<strong>Scoring & Grading</strong> — Penilaian risiko insiden berdasarkan dampak dan probabilitas',

      // ShoeStore Detail
      'ss.desc': 'Aplikasi e-commerce sepatu full-stack dengan sistem rekomendasi berbasis machine learning NMF. Dibangun dengan React dan Flask, dilengkapi panel admin lengkap untuk mengelola produk, pesanan, dan data pengguna.',
      'ss.f1': '<strong>Katalog Produk</strong> — Jelajahi koleksi sepatu dengan filter kategori, pencarian, dan pagination',
      'ss.f2': '<strong>Rekomendasi AI</strong> — Sistem rekomendasi personal menggunakan NMF machine learning',
      'ss.f3': '<strong>Keranjang & Checkout</strong> — Tambah ke keranjang, atur jumlah, dan proses pesanan',
      'ss.f4': '<strong>Multi-Pembayaran</strong> — Transfer Bank, E-Wallet, COD, Kartu Kredit',
      'ss.f5': '<strong>Wishlist</strong> — Simpan sepatu favorit untuk dibeli nanti',
      'ss.f6': '<strong>Panel Admin</strong> — CRUD lengkap untuk kategori, produk, user, pesanan, dan interaksi',

      // MaRental Detail
      'mr.desc': 'Aplikasi rental mobil online full-stack. Fitur booking otomatis, pilih driver, upload bukti pembayaran via Cloudinary, riwayat rental, admin dashboard lengkap, dan auto-release kendaraan.',
      'mr.f1': '<strong>Katalog Kendaraan</strong> — Lihat daftar mobil yang tersedia dengan spesifikasi dan harga',
      'mr.f2': '<strong>Booking Otomatis</strong> — Pemesanan otomatis dengan kalkulasi durasi dan total harga',
      'mr.f3': '<strong>Pilih Driver</strong> — Opsi lepas kunci atau dengan driver yang tersedia',
      'mr.f4': '<strong>Upload Bukti Bayar</strong> — Upload bukti pembayaran via Cloudinary',
      'mr.f5': '<strong>Admin Dashboard</strong> — Kelola kendaraan, pesanan, driver, dan pembayaran',
      'mr.f6': '<strong>Auto-Release</strong> — Kendaraan otomatis tersedia kembali setelah masa rental selesai',

      // MaRnime Detail
      'mn.desc': 'Website anime modern dengan tema Aurora Dark yang elegan. Jelajahi, lacak, dan kelola daftar anime kamu menggunakan data dari AniList GraphQL API. Dilengkapi watchlist, profil, dan multibahasa.',
      'mn.f1': '<strong>Jelajahi Anime</strong> — Filter berdasarkan genre, format, status, musim, dan tahun',
      'mn.f2': '<strong>Detail Anime</strong> — Sinopsis, karakter, staf, relasi, rekomendasi, dan trailer',
      'mn.f3': '<strong>Anime Musiman</strong> — Anime sedang tayang per musim dengan countdown episode',
      'mn.f4': '<strong>Watchlist</strong> — Tambah anime ke daftar tontonan (Planning, Watching, Completed)',
      'mn.f5': '<strong>Autentikasi</strong> — Daftar dan masuk dengan email & password via Supabase',
      'mn.f6': '<strong>Multibahasa</strong> — Toggle bahasa English / Indonesia',

      // MaRgames Detail
      'mg.desc': 'Koleksi 15 mini-game HTML5 modern dengan tampilan dark glassmorphism, built-in SFX, high score, dan PWA support — bisa dimainkan langsung dari browser, offline-ready.',
      'mg.f1': '<strong>15 Mini-Games</strong> — Beragam game dari puzzle, arcade, classic, hingga brain teaser',
      'mg.f2': '<strong>Dark Glassmorphism</strong> — Desain modern dengan efek glass dan gradien gelap',
      'mg.f3': '<strong>High Score</strong> — Simpan skor tertinggi secara lokal',
      'mg.f4': '<strong>Built-in SFX</strong> — Efek suara interaktif di setiap game',
      'mg.f5': '<strong>PWA Support</strong> — Install sebagai app di device, bisa dimainkan offline',
      'mg.f6': '<strong>Canvas-based</strong> — Rendering game menggunakan HTML5 Canvas API',

      // Interview Detail
      'iv.desc': 'Aplikasi penilaian interview kandidat berbasis web. Membuat template pertanyaan, scoring secara real-time untuk setiap kandidat, dan leaderboard ranking otomatis untuk perbandingan hasil.',
      'iv.f1': '<strong>Template Creation</strong> — Buat template pertanyaan interview yang bisa dipakai ulang',
      'iv.f2': '<strong>Real-time Scoring</strong> — Penilaian langsung saat interview berlangsung',
      'iv.f3': '<strong>Leaderboard</strong> — Ranking otomatis berdasarkan skor total kandidat',
      'iv.f4': '<strong>Detail Breakdown</strong> — Lihat detail skor per kategori untuk setiap kandidat',
      'iv.f5': '<strong>Multi-Template</strong> — Mendukung berbagai template untuk posisi berbeda',
      'iv.f6': '<strong>Responsive</strong> — Bisa digunakan di perangkat mobile dan desktop',

      // GrabMaR Detail
      'gm.desc': 'Aplikasi kalkulator pendapatan harian untuk driver Grab. Menghitung uang digital dan cash secara terpisah, menyimpan riwayat pendapatan dengan login akun, dan melihat detail breakdown setiap hari kerja.',
      'gm.f1': '<strong>Kalkulator Pendapatan</strong> — Input pendapatan dari GrabFood, GrabCar, GrabBike dengan mudah',
      'gm.f2': '<strong>Live Total</strong> — Total pendapatan update real-time saat menginput',
      'gm.f3': '<strong>User Accounts</strong> — Login dan register untuk menyimpan data secara personal',
      'gm.f4': '<strong>History Saving</strong> — Simpan riwayat pendapatan harian ke database',
      'gm.f5': '<strong>Detail Breakdown</strong> — Lihat detail breakdown per kategori dan hari',
      'gm.f6': '<strong>Responsive</strong> — Tampilan optimal di smartphone untuk driver',

      // Desa Bangkalaloe Detail
      'db.desc': 'Website profil resmi Desa Bangkalaloe, Jeneponto untuk mendukung program KKN. Menampilkan profil desa, sejarah, data monografi, infografis peta, informasi UMKM, serta potensi desa.',
      'db.f1': '<strong>Profil Desa</strong> — Informasi lengkap tentang Desa Bangkalaloe, Jeneponto',
      'db.f2': '<strong>Sejarah Desa</strong> — Sejarah terbentuknya desa dan perkembangannya',
      'db.f3': '<strong>Data Monografi</strong> — Data kependudukan, demografis, dan statistik desa',
      'db.f4': '<strong>Peta Lokasi</strong> — Integrasi Google Maps untuk menunjukkan lokasi desa',
      'db.f5': '<strong>UMKM</strong> — Informasi usaha mikro, kecil, dan menengah di desa',
      'db.f6': '<strong>Modern UI</strong> — Scroll animations, parallax, dan desain responsif',

      // MaRilmu Detail
      'marilmu.desc': 'Portal Islami digital lengkap dengan 25+ fitur untuk membantu ibadah sehari-hari. Dilengkapi Al-Quran dengan terjemahan, jadwal sholat otomatis, tasbih digital, dzikir, panduan sholat, audio murottal, dan masih banyak lagi.',
      'marilmu.f1': '<strong>Al-Quran</strong> — 114 surah dengan teks Arab, transliterasi Latin, dan terjemahan Indonesia',
      'marilmu.f2': '<strong>Jadwal Sholat</strong> — Waktu sholat otomatis berdasarkan lokasi GPS + countdown',
      'marilmu.f3': '<strong>Tasbih Digital</strong> — Penghitung dzikir dengan 6 preset dan tracking harian',
      'marilmu.f4': '<strong>Audio Murottal</strong> — Dengarkan Al-Quran dari 4 qari terkenal',
      'marilmu.f5': '<strong>Quiz Islami</strong> — 15 soal trivia Islam + skor + penjelasan jawaban',
      'marilmu.f6': '<strong>Kalkulator Zakat</strong> — Hitung zakat penghasilan, mal, dan fitrah secara otomatis',

      // MaRticle Design Detail
      'marticle.desc': 'Interactive particle system designer premium yang dibangun dengan vanilla HTML, CSS, dan JavaScript. Buat efek partikel stunning secara real-time dengan visual editor intuitif, multi-layer system, dan 18 preset bawaan.',
      'marticle.f1': '<strong>18 Built-in Presets</strong> — Fire, Rain, Snow, Smoke, Sparkle, Explosion, Confetti, Galaxy, Aurora, dan lainnya',
      'marticle.f2': '<strong>Multi-Layer System</strong> — Jalankan beberapa efek partikel secara bersamaan di satu canvas',
      'marticle.f3': '<strong>Mouse Interaction</strong> — Klik dan drag di canvas untuk emit partikel di posisi kursor',
      'marticle.f4': '<strong>Export Options</strong> — Export ke JSON config, WebM recording, PNG frame, dan copyable JS code',
      'marticle.f5': '<strong>Undo/Redo</strong> — Full history dengan Ctrl+Z / Ctrl+Y support',
      'marticle.f6': '<strong>Shareable Links</strong> — Encode konfigurasi ke URL dan bagikan ke orang lain',

      // QR Code MaR Detail
      'qrcodemar.desc': 'Generate, customize, dan download QR code secara instan — semuanya berjalan di sisi client, tidak ada data yang dikirim ke server manapun. Dilengkapi 8 color presets, 4 dot styles, logo overlay, dan history.',
      'qrcodemar.f1': '<strong>Multiple Data Types</strong> — Support URL, Text, WiFi, dan Email',
      'qrcodemar.f2': '<strong>8 Color Presets</strong> — Classic, Midnight, Ocean, Purple, Emerald, Rose, Gold Dark, Inverted',
      'qrcodemar.f3': '<strong>Logo Overlay</strong> — Drag & drop logo dengan size, padding, dan shape yang bisa diatur',
      'qrcodemar.f4': '<strong>4 Dot Styles</strong> — Square, Rounded, Circle, dan Diamond',
      'qrcodemar.f5': '<strong>Export PNG/SVG</strong> — Download sebagai PNG atau SVG, plus copy ke clipboard',
      'qrcodemar.f6': '<strong>History</strong> — 8 QR code terakhir tersimpan secara lokal',
    }
  };

  // ── ENGINE ──
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  let lang = localStorage.getItem('portfolioLang') || 'en';

  function apply(l) {
    const d = T[l]; if (!d) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (d[k] !== undefined) el.textContent = d[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html');
      if (d[k] !== undefined) el.innerHTML = d[k];
    });
    // Labels (placeholder-like labels)
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const k = el.getAttribute('data-i18n-label');
      if (d[k] !== undefined) el.textContent = d[k];
    });
    btn.textContent = l === 'en' ? 'ID' : 'EN';
    document.documentElement.lang = l;
    localStorage.setItem('portfolioLang', l);
    lang = l;
  }

  btn.addEventListener('click', () => apply(lang === 'en' ? 'id' : 'en'));

  // Apply on load
  if (lang !== 'en') { apply(lang); } else { btn.textContent = 'ID'; }
})();
