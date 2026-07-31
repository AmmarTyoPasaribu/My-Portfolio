import type { en } from './en';

export const id: Record<keyof typeof en, string> = {
  // ── HERO ──
  'hero.greeting': 'FULL STACK DEVELOPER — MAKASSAR, ID',
  'cert.view': 'Lihat Sertifikat',
  'hero.tagline': 'Saya seorang ',
  'hero.desc':
    'Full Stack Developer yang memadukan teknologi web dengan AI dan Data Science untuk membangun solusi cerdas di dunia nyata.',
  'hero.cta1': 'Lihat Karya Saya',
  'hero.cta2': 'Hubungi Saya',

  // ── ABOUT ──
  'about.title': 'Tentang <span>Saya</span>',
  'about.p1':
    'Fresh Graduate S1 Sistem Informasi Universitas Hasanuddin (IPK 3.93/4.00) dengan fokus pada Full Stack Web Development yang terintegrasi dengan Artificial Intelligence (Machine Learning, Deep Learning), serta pengolahan data (Data Analysis, Data Science). Berpengalaman membangun aplikasi web end-to-end menggunakan React/Next.js, Node.js/Express, Laravel, dan Python. Aktif dalam organisasi kemahasiswaan dan kepanitiaan, terbuka untuk berbagai peluang karir di bidang teknologi informasi dengan semangat kolaborasi tim dan pembelajaran berkelanjutan.',
  'about.skill': 'Keahlian & Minat',
  'about.cv': 'Unduh CV',

  // ── EDUCATION ──
  'edu.title': '<span>Pendidikan</span> Saya',
  'edu.sub': 'Latar belakang akademik',
  'edu.unhas.period': '2022 — 2026',
  'edu.unhas.role': 'Bachelor of Information Systems — IPK: 3.93 / 4.00',
  'edu.unhas.desc':
    'Penerima Beasiswa Bakti BCA.<br>Coursework: Web Development, Data Science, Machine Learning, Deep Learning, Rekayasa Sistem Informasi.',
  'edu.sma.role': 'Jurusan IPA — Score: 91.2 / 100.0',
  'edu.sma.desc':
    'Ketua OSIS Sekbid Prestasi Akademik, Seni & Olahraga. Juara 1 KSN-K Maros Bidang Informatika 2019 & 2020 oleh Kemdikbudristek.',

  // ── EXPERIENCE ──
  'exp.title': '<span>Pengalaman</span> Saya',
  'exp.sub': 'Magang & kegiatan organisasi',
  'exp.silab.role': 'Asisten Laboratorium Mata Kuliah Pemrograman Mobile',
  'exp.silab.desc':
    'Mengajar dan mendampingi lebih dari 80 praktikan pada praktikum Pemrograman Mobile. Mengelola pengolahan nilai dan hasil praktikum, menyusun materi dan modul praktikum, serta mendampingi pengerjaan tugas praktikan.',
  'exp.intern.role': 'Magang — Bagian Pelayanan Pas Bandara',
  'exp.intern.desc':
    'Mengelola perekaman dan input data hingga 40 pemohon/hari. Melayani hingga 200 pemohon/minggu. Mengelola persuratan dan administrasi, serta menyusun laporan mingguan monitoring pencetakan pas bandara secara terstruktur.',
  'exp.himatika.role': 'Anggota Bidang Akademik dan Kemahasiswaan',
  'exp.himatika.desc':
    'Pemateri kegiatan Himatika Talks tentang jalan kesuksesan melalui beasiswa. Mengelola database mahasiswa anggota dan memberikan bantuan akademik dalam lingkup Sistem Informasi, Matematika, dan Ilmu Aktuaria.',
  'exp.osis.role': 'Ketua Sekbid Prestasi Akademik, Seni & Olahraga',
  'exp.osis.desc':
    'Mendata dan merekap seluruh prestasi siswa. Memimpin Pekan Olahraga & Seni 2020 yang melibatkan 60 panitia dan 900 siswa peserta. Mengelola 20+ ekstrakurikuler.',

  // ── ACHIEVEMENTS ──
  'ach.title': '<span>Prestasi</span> Saya',
  'ach.sub': 'Penghargaan dan pencapaian yang diraih',
  'ach.bca.desc':
    'Terpilih sebagai penerima Beasiswa Bakti BCA melalui seleksi prestasi akademik. Mengikuti Transformational Workshop dan terlibat dalam Business Impact Plan Competition untuk mendukung pertumbuhan UMKM di Makassar.',
  'ach.ksn20.desc':
    'Meraih juara 1 Kompetisi Sains Nasional tingkat Kabupaten Maros yang diselenggarakan oleh Kemdikbudristek Tahun 2020.',
  'ach.ksn19.desc':
    'Meraih juara 1 Kompetisi Sains Nasional tingkat Kabupaten Maros yang diselenggarakan oleh Kemdikbudristek Tahun 2019.',

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
  'proj.safenurse.desc':
    'Sistem pelaporan insiden keselamatan pasien dengan chatbot AI, voice input, auto kategorisasi, dan multi-role dashboard.',
  'proj.shoestore.desc':
    'E-commerce sepatu full-stack dengan sistem rekomendasi AI berbasis NMF machine learning dan panel admin lengkap.',
  'proj.marental.desc':
    'Sistem rental mobil online full stack dengan booking otomatis, manajemen driver, admin dashboard, dan upload bukti pembayaran.',
  'proj.marnime.desc':
    'Website anime modern dengan tema Aurora Dark. Jelajahi, lacak watchlist, dan kelola daftar anime kamu dengan data dari AniList.',
  'proj.faceattendance.desc':
    'Sistem absensi laboratorium berbasis face recognition dengan deteksi multi-wajah otomatis, roster mahasiswa per kelas, dan dashboard admin lengkap.',
  'proj.margames.desc':
    'Koleksi 15 mini-game HTML5 modern dengan dark glassmorphism, SFX, high score, dan PWA support — playable offline.',
  'proj.interview.desc':
    'Aplikasi penilaian interview kandidat berbasis web. Buat template pertanyaan, scoring real-time, dan leaderboard ranking otomatis.',
  'proj.grabmar.desc':
    'Kalkulator pendapatan harian driver Grab. Hitung uang digital & cash, simpan riwayat dengan login, dan lihat detail breakdown.',
  'proj.desa.desc':
    'Website profil desa untuk program KKN. Menampilkan profil, sejarah, monografi, infografis, UMKM, dan potensi desa.',
  'proj.marilmu.desc':
    'Portal Islami digital lengkap dengan 25+ fitur untuk membantu ibadah sehari-hari seperti Al-Quran, Jadwal Sholat, Tasbih Digital, dan lainnya.',
  'proj.marticle.desc':
    'Interactive particle system designer dengan 18 preset bawaan, multi-layer, mouse interaction, export ke JSON/WebM/PNG, dan shareable links.',
  'proj.qrcodemar.desc':
    'QR code generator & customizer lengkap — 8 color presets, 4 dot styles, logo overlay, label, history, export PNG/SVG, semua client-side.',
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
  'sn.desc':
    'Sistem pelaporan insiden keselamatan pasien berbasis web untuk rumah sakit. Perawat melaporkan insiden melalui asisten chatbot AI, dan laporan diproses secara otomatis dengan validasi, scoring, serta notifikasi ke pihak terkait.',
  'sn.f1': '<strong>Chat Assistant AI</strong> — Pelaporan insiden melalui chatbot interaktif dengan AI yang membimbing pengisian data',
  'sn.f2': '<strong>Voice Input</strong> — Input suara menggunakan Web Speech API langsung dari browser',
  'sn.f3': '<strong>Auto Kategorisasi</strong> — Data laporan dikategorikan otomatis oleh LLM (KTD, KPC, KNC, KTC, Sentinel)',
  'sn.f4': '<strong>Multi-Role Dashboard</strong> — Dashboard berbeda untuk Perawat, Kepala Ruangan, Chief Nursing, dan Super Admin',
  'sn.f5': '<strong>Notifikasi & Email</strong> — Notifikasi real-time dan email otomatis untuk setiap perubahan status',
  'sn.f6': '<strong>Scoring & Grading</strong> — Penilaian risiko insiden berdasarkan dampak dan probabilitas',

  // ShoeStore Detail
  'ss.desc':
    'Aplikasi e-commerce sepatu full-stack dengan sistem rekomendasi berbasis machine learning NMF. Dibangun dengan React dan Flask, dilengkapi panel admin lengkap untuk mengelola produk, pesanan, dan data pengguna.',
  'ss.f1': '<strong>Katalog Produk</strong> — Jelajahi koleksi sepatu dengan filter kategori, pencarian, dan pagination',
  'ss.f2': '<strong>Rekomendasi AI</strong> — Sistem rekomendasi personal menggunakan NMF machine learning',
  'ss.f3': '<strong>Keranjang & Checkout</strong> — Tambah ke keranjang, atur jumlah, dan proses pesanan',
  'ss.f4': '<strong>Multi-Pembayaran</strong> — Transfer Bank, E-Wallet, COD, Kartu Kredit',
  'ss.f5': '<strong>Wishlist</strong> — Simpan sepatu favorit untuk dibeli nanti',
  'ss.f6': '<strong>Panel Admin</strong> — CRUD lengkap untuk kategori, produk, user, pesanan, dan interaksi',

  // MaRental Detail
  'mr.desc':
    'Aplikasi rental mobil online full-stack. Fitur booking otomatis, pilih driver, upload bukti pembayaran via Cloudinary, riwayat rental, admin dashboard lengkap, dan auto-release kendaraan.',
  'mr.f1': '<strong>Katalog Kendaraan</strong> — Lihat daftar mobil yang tersedia dengan spesifikasi dan harga',
  'mr.f2': '<strong>Booking Otomatis</strong> — Pemesanan otomatis dengan kalkulasi durasi dan total harga',
  'mr.f3': '<strong>Pilih Driver</strong> — Opsi lepas kunci atau dengan driver yang tersedia',
  'mr.f4': '<strong>Upload Bukti Bayar</strong> — Upload bukti pembayaran via Cloudinary',
  'mr.f5': '<strong>Admin Dashboard</strong> — Kelola kendaraan, pesanan, driver, dan pembayaran',
  'mr.f6': '<strong>Auto-Release</strong> — Kendaraan otomatis tersedia kembali setelah masa rental selesai',

  // MaRnime Detail
  'mn.desc':
    'Website anime modern dengan tema Aurora Dark yang elegan. Jelajahi, lacak, dan kelola daftar anime kamu menggunakan data dari AniList GraphQL API. Dilengkapi watchlist, profil, dan multibahasa.',
  'mn.f1': '<strong>Jelajahi Anime</strong> — Filter berdasarkan genre, format, status, musim, dan tahun',
  'mn.f2': '<strong>Detail Anime</strong> — Sinopsis, karakter, staf, relasi, rekomendasi, dan trailer',
  'mn.f3': '<strong>Anime Musiman</strong> — Anime sedang tayang per musim dengan countdown episode',
  'mn.f4': '<strong>Watchlist</strong> — Tambah anime ke daftar tontonan (Planning, Watching, Completed)',
  'mn.f5': '<strong>Autentikasi</strong> — Daftar dan masuk dengan email & password via Supabase',
  'mn.f6': '<strong>Multibahasa</strong> — Toggle bahasa English / Indonesia',

  'fa.desc':
    'Sistem absensi laboratorium berbasis web menggunakan face recognition. Admin membuat sesi kelas dengan foto rombongan, dan sistem otomatis mendeteksi setiap wajah, mencocokkannya dengan roster mahasiswa terdaftar, lalu mencatat kehadiran — dengan review manual untuk wajah yang belum terkenali.',
  'fa.f1': '<strong>Registrasi Mahasiswa</strong> — Upload foto mahasiswa, ekstrak embedding wajah, dan auto-enroll ke kelasnya',
  'fa.f2': '<strong>Pembuatan Sesi</strong> — Upload foto kelas untuk deteksi multi-wajah otomatis dan pencocokan roster',
  'fa.f3': '<strong>Review Manual</strong> — Ubah status kehadiran (hadir/absen/sakit) dan tautkan wajah belum dikenali ke mahasiswa',
  'fa.f4': '<strong>Dashboard Absensi</strong> — Statistik real-time total mahasiswa, kelas, dan sesi',
  'fa.f5': '<strong>Filter, Pencarian &amp; Export</strong> — Filter sesi berdasarkan mata kuliah, kelas, atau tanggal, dan export kehadiran ke CSV',
  'fa.f6': '<strong>Akses Berbasis Role</strong> — Sistem login dengan manajemen admin dan user',

  'maint.title': 'Live Demo Sedang Maintenance',
  'maint.desc':
    'Live demo untuk proyek ini untuk sementara belum tersedia karena masih dalam tahap persiapan deployment. Sambil menunggu, kamu bisa cek source code lengkapnya di GitHub.',
  'maint.back': 'Kembali ke Portfolio',
  'maint.source': 'Lihat Source Code',

  // MaRgames Detail
  'mg.desc':
    'Koleksi 15 mini-game HTML5 modern dengan tampilan dark glassmorphism, built-in SFX, high score, dan PWA support — bisa dimainkan langsung dari browser, offline-ready.',
  'mg.f1': '<strong>15 Mini-Games</strong> — Beragam game dari puzzle, arcade, classic, hingga brain teaser',
  'mg.f2': '<strong>Dark Glassmorphism</strong> — Desain modern dengan efek glass dan gradien gelap',
  'mg.f3': '<strong>High Score</strong> — Simpan skor tertinggi secara lokal',
  'mg.f4': '<strong>Built-in SFX</strong> — Efek suara interaktif di setiap game',
  'mg.f5': '<strong>PWA Support</strong> — Install sebagai app di device, bisa dimainkan offline',
  'mg.f6': '<strong>Canvas-based</strong> — Rendering game menggunakan HTML5 Canvas API',

  // Interview Detail
  'iv.desc':
    'Aplikasi penilaian interview kandidat berbasis web. Membuat template pertanyaan, scoring secara real-time untuk setiap kandidat, dan leaderboard ranking otomatis untuk perbandingan hasil.',
  'iv.f1': '<strong>Template Creation</strong> — Buat template pertanyaan interview yang bisa dipakai ulang',
  'iv.f2': '<strong>Real-time Scoring</strong> — Penilaian langsung saat interview berlangsung',
  'iv.f3': '<strong>Leaderboard</strong> — Ranking otomatis berdasarkan skor total kandidat',
  'iv.f4': '<strong>Detail Breakdown</strong> — Lihat detail skor per kategori untuk setiap kandidat',
  'iv.f5': '<strong>Multi-Template</strong> — Mendukung berbagai template untuk posisi berbeda',
  'iv.f6': '<strong>Responsive</strong> — Bisa digunakan di perangkat mobile dan desktop',

  // GrabMaR Detail
  'gm.desc':
    'Aplikasi kalkulator pendapatan harian untuk driver Grab. Menghitung uang digital dan cash secara terpisah, menyimpan riwayat pendapatan dengan login akun, dan melihat detail breakdown setiap hari kerja.',
  'gm.f1': '<strong>Kalkulator Pendapatan</strong> — Input pendapatan dari GrabFood, GrabCar, GrabBike dengan mudah',
  'gm.f2': '<strong>Live Total</strong> — Total pendapatan update real-time saat menginput',
  'gm.f3': '<strong>User Accounts</strong> — Login dan register untuk menyimpan data secara personal',
  'gm.f4': '<strong>History Saving</strong> — Simpan riwayat pendapatan harian ke database',
  'gm.f5': '<strong>Detail Breakdown</strong> — Lihat detail breakdown per kategori dan hari',
  'gm.f6': '<strong>Responsive</strong> — Tampilan optimal di smartphone untuk driver',

  // Desa Bangkalaloe Detail
  'db.desc':
    'Website profil resmi Desa Bangkalaloe, Jeneponto untuk mendukung program KKN. Menampilkan profil desa, sejarah, data monografi, infografis peta, informasi UMKM, serta potensi desa.',
  'db.f1': '<strong>Profil Desa</strong> — Informasi lengkap tentang Desa Bangkalaloe, Jeneponto',
  'db.f2': '<strong>Sejarah Desa</strong> — Sejarah terbentuknya desa dan perkembangannya',
  'db.f3': '<strong>Data Monografi</strong> — Data kependudukan, demografis, dan statistik desa',
  'db.f4': '<strong>Peta Lokasi</strong> — Integrasi Google Maps untuk menunjukkan lokasi desa',
  'db.f5': '<strong>UMKM</strong> — Informasi usaha mikro, kecil, dan menengah di desa',
  'db.f6': '<strong>Modern UI</strong> — Scroll animations, parallax, dan desain responsif',

  // MaRilmu Detail
  'marilmu.desc':
    'Portal Islami digital lengkap dengan 25+ fitur untuk membantu ibadah sehari-hari. Dilengkapi Al-Quran dengan terjemahan, jadwal sholat otomatis, tasbih digital, dzikir, panduan sholat, audio murottal, dan masih banyak lagi.',
  'marilmu.f1': '<strong>Al-Quran</strong> — 114 surah dengan teks Arab, transliterasi Latin, dan terjemahan Indonesia',
  'marilmu.f2': '<strong>Jadwal Sholat</strong> — Waktu sholat otomatis berdasarkan lokasi GPS + countdown',
  'marilmu.f3': '<strong>Tasbih Digital</strong> — Penghitung dzikir dengan 6 preset dan tracking harian',
  'marilmu.f4': '<strong>Audio Murottal</strong> — Dengarkan Al-Quran dari 4 qari terkenal',
  'marilmu.f5': '<strong>Quiz Islami</strong> — 15 soal trivia Islam + skor + penjelasan jawaban',
  'marilmu.f6': '<strong>Kalkulator Zakat</strong> — Hitung zakat penghasilan, mal, dan fitrah secara otomatis',

  // MaRticle Design Detail
  'marticle.desc':
    'Interactive particle system designer premium yang dibangun dengan vanilla HTML, CSS, dan JavaScript. Buat efek partikel stunning secara real-time dengan visual editor intuitif, multi-layer system, dan 18 preset bawaan.',
  'marticle.f1': '<strong>18 Built-in Presets</strong> — Fire, Rain, Snow, Smoke, Sparkle, Explosion, Confetti, Galaxy, Aurora, dan lainnya',
  'marticle.f2': '<strong>Multi-Layer System</strong> — Jalankan beberapa efek partikel secara bersamaan di satu canvas',
  'marticle.f3': '<strong>Mouse Interaction</strong> — Klik dan drag di canvas untuk emit partikel di posisi kursor',
  'marticle.f4': '<strong>Export Options</strong> — Export ke JSON config, WebM recording, PNG frame, dan copyable JS code',
  'marticle.f5': '<strong>Undo/Redo</strong> — Full history dengan Ctrl+Z / Ctrl+Y support',
  'marticle.f6': '<strong>Shareable Links</strong> — Encode konfigurasi ke URL dan bagikan ke orang lain',

  // QR Code MaR Detail
  'qrcodemar.desc':
    'Generate, customize, dan download QR code secara instan — semuanya berjalan di sisi client, tidak ada data yang dikirim ke server manapun. Dilengkapi 8 color presets, 4 dot styles, logo overlay, dan history.',
  'qrcodemar.f1': '<strong>Multiple Data Types</strong> — Support URL, Text, WiFi, dan Email',
  'qrcodemar.f2': '<strong>8 Color Presets</strong> — Classic, Midnight, Ocean, Purple, Emerald, Rose, Gold Dark, Inverted',
  'qrcodemar.f3': '<strong>Logo Overlay</strong> — Drag & drop logo dengan size, padding, dan shape yang bisa diatur',
  'qrcodemar.f4': '<strong>4 Dot Styles</strong> — Square, Rounded, Circle, dan Diamond',
  'qrcodemar.f5': '<strong>Export PNG/SVG</strong> — Download sebagai PNG atau SVG, plus copy ke clipboard',
  'qrcodemar.f6': '<strong>History</strong> — 8 QR code terakhir tersimpan secara lokal',
};
