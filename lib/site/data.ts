import { L, type LText } from '@/lib/i18n/localize';

export { projects, projectCategories, getProject, type Project, type ProjectCategory } from './projects';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface GalleryImage {
  src: string;
  caption: string;
}

export interface SkillItem {
  name: string;
  description: LText;
}

export interface SkillGroup {
  id: string;
  eyebrow: string;
  title: LText;
  items: SkillItem[];
}

export interface Experience {
  id: string;
  logo?: string;
  role: string | LText;
  company: string | LText;
  location: string;
  period: LText;
  type: LText;
  description: LText;
  responsibilities: LText[];
  technologies: string[];
  images: GalleryImage[];
}

export interface Education {
  id: string;
  logo?: string;
  degree: LText;
  institution: string;
  location: string;
  period: LText;
  description: LText;
  details: LText[];
  images: GalleryImage[];
}

export interface Organization {
  id: string;
  logo?: string;
  role: string | LText;
  organization: string;
  location: string;
  period: LText;
  description: LText;
  responsibilities: LText[];
  images: GalleryImage[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description?: LText;
  images: GalleryImage[];
}

// ─── Personal ─────────────────────────────────────────────────────────────────
export const personal = {
  name: 'Ammar Tyo Pasaribu',
  shortName: 'Ammar',
  roles: ['Full Stack Developer', 'AI & Data Enthusiast', 'Web Developer', 'Problem Solver'],
  description: L(
    'Full Stack Developer who combines web technology with AI and data to build intelligent, real-world solutions.',
    'Full Stack Developer yang memadukan teknologi web dengan AI dan data untuk membangun solusi cerdas di dunia nyata.',
  ),
  email: 'ammar123tyo12@gmail.com',
  location: 'Makassar, Indonesia',
  cv: '/media/documents/CV_Ammar_Tyo_Pasaribu.pdf',
  about: {
    intro: L('I build web applications that think.', 'Saya membangun aplikasi web yang cerdas.'),
    description: L(
      "I'm a Full Stack Developer and Information Systems graduate from Hasanuddin University (GPA 3.93/4.00), with a focus on web development, artificial intelligence, and data analysis. I enjoy building end-to-end web applications, turning data into useful insights, and learning new technologies. Through student organizations and committees I've also built experience in teamwork and leadership. Open to Full Stack, Software Engineering, and Data roles.",
      'Saya Full Stack Developer dan lulusan Sistem Informasi Universitas Hasanuddin (IPK 3,93/4,00), dengan fokus pada pengembangan web, kecerdasan buatan, dan analisis data. Saya senang membangun aplikasi web end-to-end, mengubah data menjadi wawasan yang berguna, dan mempelajari teknologi baru. Lewat organisasi dan kepanitiaan, saya juga membangun pengalaman bekerja dalam tim dan kepemimpinan. Terbuka untuk peran Full Stack, Software Engineering, dan Data.',
    ),
    role: L(
      'Full Stack Developer · AI & Data · Information Systems Graduate',
      'Full Stack Developer · AI & Data · Lulusan Sistem Informasi',
    ),
    location: 'Makassar, Indonesia',
  },
};

export const socials = [
  { name: 'GitHub', url: 'https://github.com/AmmarTyoPasaribu', handle: 'AmmarTyoPasaribu' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ammartyopasaribu', handle: 'ammartyopasaribu' },
  { name: 'Instagram', url: 'https://instagram.com/ammartyo', handle: '@ammartyo' },
  { name: 'Email', url: 'mailto:ammar123tyo12@gmail.com', handle: 'ammar123tyo12@gmail.com' },
] as const;

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills: SkillGroup[] = [
  {
    id: 'development',
    eyebrow: '01 / BUILD',
    title: L('Development', 'Pengembangan'),
    items: [
      { name: 'React', description: L('Component-based UI library for interactive, state-driven interfaces.', 'Library UI berbasis komponen untuk antarmuka interaktif.') },
      { name: 'Next.js', description: L('React framework for routing, server rendering, and full stack web apps.', 'Framework React untuk routing, server rendering, dan aplikasi web full stack.') },
      { name: 'TypeScript', description: L('Typed JavaScript that catches mistakes early and keeps larger codebases maintainable.', 'JavaScript bertipe yang menangkap kesalahan lebih awal dan menjaga kode besar tetap terawat.') },
      { name: 'JavaScript', description: L('ES6+, async programming, DOM manipulation, and API integration.', 'ES6+, pemrograman async, manipulasi DOM, dan integrasi API.') },
      { name: 'HTML & CSS', description: L('Semantic markup and responsive layouts.', 'Markup semantik dan layout responsif.') },
      { name: 'Tailwind CSS', description: L('Utility-first CSS framework for fast, consistent styling.', 'Framework CSS utility-first untuk styling cepat dan konsisten.') },
    ],
  },
  {
    id: 'backend',
    eyebrow: '02 / SYSTEMS',
    title: L('Backend & Databases', 'Backend & Basis Data'),
    items: [
      { name: 'Node.js & Express', description: L('REST APIs, serverless functions, and JWT authentication.', 'REST API, serverless function, dan autentikasi JWT.') },
      { name: 'Python', description: L('Scripting, automation, and backend services.', 'Scripting, otomasi, dan layanan backend.') },
      { name: 'Flask & FastAPI', description: L('Python web frameworks for APIs and machine learning services.', 'Framework web Python untuk API dan layanan machine learning.') },
      { name: 'Laravel & PHP', description: L('MVC architecture, Blade templating, and Eloquent ORM.', 'Arsitektur MVC, Blade templating, dan Eloquent ORM.') },
      { name: 'Java', description: L('Object-oriented programming and Android development.', 'Pemrograman berorientasi objek dan pengembangan Android.') },
      { name: 'Supabase & PostgreSQL', description: L('Database design, SQL queries, auth, and pgvector for embeddings.', 'Desain database, query SQL, autentikasi, dan pgvector untuk embedding.') },
      { name: 'MySQL', description: L('Relational database design and querying.', 'Desain dan query database relasional.') },
    ],
  },
  {
    id: 'ai-data',
    eyebrow: '03 / INTELLIGENCE',
    title: L('AI & Data', 'AI & Data'),
    items: [
      { name: 'Machine Learning', description: L('Recommendation systems with NMF, built with scikit-learn and Pandas.', 'Sistem rekomendasi dengan NMF, dibangun dengan scikit-learn dan Pandas.') },
      { name: 'Deep Learning', description: L('Neural network models in PyTorch, including face recognition embeddings.', 'Model neural network di PyTorch, termasuk embedding face recognition.') },
      { name: 'Face Recognition', description: L('MTCNN, SCRFD, FaceNet, and ArcFace compared for a web-based attendance system.', 'MTCNN, SCRFD, FaceNet, dan ArcFace dibandingkan untuk sistem absensi berbasis web.') },
      { name: 'LLM Integration', description: L('Chat interfaces on top of LLM APIs, with text and voice input.', 'Antarmuka chat di atas API LLM, dengan input teks dan suara.') },
      { name: 'Data Analysis', description: L('Data cleaning, analysis, and visualization with Python and Tableau.', 'Pembersihan data, analisis, dan visualisasi dengan Python dan Tableau.') },
      { name: 'GIS (QGIS)', description: L('Statistical work-area maps and building-point updates.', 'Peta wilayah kerja statistik dan pembaruan titik bangunan.') },
    ],
  },
  {
    id: 'tools',
    eyebrow: '04 / TOOLING',
    title: L('Tools & Technologies', 'Alat & Teknologi'),
    items: [
      { name: 'Git & GitHub', description: L('Version control and collaboration.', 'Version control dan kolaborasi.') },
      { name: 'Vercel', description: L('Deployment and hosting for Next.js applications.', 'Deployment dan hosting untuk aplikasi Next.js.') },
      { name: 'Postman', description: L('API testing and documentation.', 'Pengujian dan dokumentasi API.') },
      { name: 'VS Code', description: L('Primary code editor.', 'Editor kode utama.') },
      { name: 'Google Colab', description: L('Notebook environment for data and ML experiments.', 'Lingkungan notebook untuk eksperimen data dan ML.') },
      { name: 'Android Studio', description: L('Native Android development in Java and Kotlin.', 'Pengembangan Android native dengan Java dan Kotlin.') },
      { name: 'Microsoft Office', description: L('Word, Excel, and PowerPoint for documents and reporting.', 'Word, Excel, dan PowerPoint untuk dokumen dan pelaporan.') },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'exp-bps',
    logo: '/media/logos/companies-and-agencies/bps-maros.webp',
    role: L('IT Assistant', 'Asisten Pranata Komputer'),
    company: L('BPS-Statistics Maros Regency', 'BPS Kabupaten Maros'),
    location: 'Maros, Indonesia',
    period: L('Aug 2026 — Present', 'Agu 2026 — Sekarang'),
    type: L('Internship · MagangHub', 'Magang · MagangHub'),
    description: L(
      'Internship at BPS-Statistics Maros Regency, working on software development (websites), statistical data processing, and field data collection through the Kemnaker MagangHub program.',
      'Magang di Badan Pusat Statistik Kabupaten Maros, mengerjakan berbagai pengembangan perangkat lunak berupa website, pengolahan data statistik, dan pengumpulan data lapangan, melalui program MagangHub Kemnaker.',
    ),
    responsibilities: [
      L('Built and deployed four web applications with Next.js, Supabase, and Vercel: an employee monitoring system, a digital guest book, a queue management system, and the Desa Cantik Taroada village profile website.', 'Membangun dan men-deploy empat aplikasi web dengan Next.js, Supabase, dan Vercel: sistem monitoring pegawai, buku tamu digital, sistem antrean, dan website profil Desa Cantik Taroada.'),
      L('Compiled the 14 "Kecamatan Dalam Angka" (Districts in Figures) publications for all districts in Maros Regency.', 'Menyusun 14 buku "Kecamatan Dalam Angka" untuk seluruh kecamatan di Kabupaten Maros.'),
      L("Entered survey data for Susenas and Seruti, and corrected data anomalies in the 2026 Economic Census using BPS's FASIH SM platform.", 'Melakukan entri data survei Susenas dan Seruti, serta memperbaiki anomali data Sensus Ekonomi 2026 melalui platform FASIH SM BPS.'),
      L('Joined the field team for the 2026 Economic Census (Sensus Ekonomi 2026) in Maros Regency.', 'Turun ke lapangan pada Sensus Ekonomi 2026 di Kabupaten Maros.'),
      L('Managed Wilkerstat (statistical work area) maps and updated building points across the regency using QGIS.', 'Mengelola peta Wilkerstat (wilayah kerja statistik) dan memperbarui titik bangunan di seluruh kabupaten menggunakan QGIS.'),
    ],
    technologies: ['Next.js', 'Supabase', 'Vercel', 'TypeScript', 'QGIS', 'FASIH SM'],
    images: [
      { src: '/media/experience/bps-maros/team.jpg', caption: 'Team photo at BPS Maros' },
      { src: '/media/experience/bps-maros/staff-session.jpg', caption: 'Staff discussion session' },
      { src: '/media/experience/bps-maros/building-team.jpg', caption: 'In front of the BPS Maros office with fellow interns' },
    ],
  },
  {
    id: 'exp-lab',
    logo: '/media/logos/universities-and-schools/lab-sisfo-unhas.webp',
    role: L('Laboratory Assistant, Mobile Programming', 'Asisten Laboratorium Pemrograman Mobile'),
    company: L('Information Systems Laboratory, FMIPA UNHAS', 'Laboratorium Sistem Informasi FMIPA UNHAS'),
    location: 'Makassar, Indonesia',
    period: L('Feb 2026 — Jun 2026', 'Feb 2026 — Jun 2026'),
    type: L('Part-time', 'Paruh waktu'),
    description: L(
      'Laboratory assistant for the Mobile Programming course, supporting practical sessions for Information Systems students and teaching mobile app development with Android Studio.',
      'Asisten Laboratorium mata kuliah Pemrograman Mobile, mendampingi jalannya praktikum mahasiswa Sistem Informasi dan mengajarkan materi pengembangan aplikasi mobile menggunakan Android Studio.',
    ),
    responsibilities: [
      L('Taught Android development with Android Studio (Java/Kotlin) in weekly lab sessions for around 80 fourth-semester students, covering RecyclerView, Fragment, SQLite, background threads, networking, SharedPreferences, and Activity Intents.', 'Mengajar pengembangan Android dengan Android Studio (Java/Kotlin) dalam sesi lab mingguan untuk sekitar 80 mahasiswa semester 4, mencakup RecyclerView, Fragment, SQLite, background thread, networking, SharedPreferences, dan Activity Intent.'),
      L('Delivered the Fragment sessions as the assigned instructor for that topic.', 'Mengajar sesi Fragment sebagai pengajar yang ditugaskan untuk topik tersebut.'),
      L('Mentored a group of around 8 students with their weekly practicum assignments.', 'Membimbing satu kelompok berisi sekitar 8 mahasiswa dalam tugas praktikum mingguan.'),
    ],
    technologies: ['Android Studio', 'Java', 'Kotlin'],
    images: [
      { src: '/media/experience/lab-assistant/class-photo.jpg', caption: 'Mobile Programming class with the students' },
      { src: '/media/experience/lab-assistant/lecture-hall.jpg', caption: 'Live coding session in the lecture hall' },
      { src: '/media/experience/lab-assistant/instructor-poster.jpg', caption: 'Week 3 session poster: Fragment' },
    ],
  },
  {
    id: 'exp-macawafest',
    logo: '/media/logos/companies-and-agencies/double-helix.webp',
    role: 'Event Marketing & Activation Team Member',
    company: 'Double Helix Indonesia',
    location: 'Makassar, Indonesia',
    period: L('Mar 2026 — Apr 2026', 'Mar 2026 — Apr 2026'),
    type: L('Contract', 'Kontrak'),
    description: L(
      'Part of the marketing and activation team for MacawaFest 2026, a large stand-up comedy event held in Makassar.',
      'Bagian dari tim marketing dan aktivasi MacawaFest 2026, acara stand-up comedy besar yang digelar di Makassar.',
    ),
    responsibilities: [
      L('Took part in pre-event promotion to raise public awareness of the festival.', 'Terlibat dalam promosi pra-acara untuk meningkatkan kesadaran publik terhadap festival.'),
      L('Carried out on-ground promotion at Car Free Day events, university campuses, and cafés using interactive activations.', 'Melakukan promosi lapangan di acara Car Free Day, kampus, dan kafe dengan aktivasi interaktif.'),
      L('Supported direct ticket sales through field promotion, selling up to 30 tickets in a single day.', 'Mendukung penjualan tiket langsung lewat promosi lapangan, menjual hingga 30 tiket dalam satu hari.'),
      L('Contributed to promotional efforts for an event that recorded more than 3,000 tickets sold.', 'Berkontribusi pada upaya promosi acara yang mencatat penjualan lebih dari 3.000 tiket.'),
    ],
    technologies: [],
    images: [
      { src: '/media/experience/macawafest/team-photo.jpg', caption: 'Marketing and activation team on the street' },
      { src: '/media/experience/macawafest/event-poster.jpg', caption: 'MaCawa Fest 2026 poster' },
      { src: '/media/experience/macawafest/crew-on-stage.jpg', caption: 'Crew on stage at the closing' },
    ],
  },
  {
    id: 'exp-safenurse',
    logo: '/media/logos/companies-and-agencies/rsoj-pertamina.webp',
    role: 'Frontend Developer',
    company: 'RSOJ Pertamina Royal Biringkanaya Makassar',
    location: 'Makassar, Indonesia',
    period: L('Sep 2025 — Dec 2025', 'Sep 2025 — Des 2025'),
    type: L('Freelance', 'Pekerja lepas'),
    description: L(
      'Built SafeNurse with a three-person team: a web-based patient safety incident reporting system for a hospital, where nurses report incidents through an AI chat assistant and reports are categorized and graded by risk.',
      'Membangun SafeNurse bersama tim tiga orang: sistem pelaporan insiden keselamatan pasien berbasis web untuk rumah sakit, tempat perawat melapor lewat asisten chat AI dan laporan dikategorikan serta dinilai risikonya.',
    ),
    responsibilities: [
      L('Built the web interface with Next.js, React, TypeScript, and Tailwind CSS.', 'Membangun antarmuka web dengan Next.js, React, TypeScript, dan Tailwind CSS.'),
      L('Developed the chat-based reporting interface with text and voice input (Web Speech API) that guides nurses step by step.', 'Mengembangkan antarmuka pelaporan berbasis chat dengan input teks dan suara (Web Speech API) yang membimbing perawat langkah demi langkah.'),
      L('Built separate dashboards for each role: Nurse, Head Nurse, Chief Nursing, and Super Admin.', 'Membangun dashboard terpisah untuk setiap peran: Perawat, Kepala Ruangan, Chief Nursing, dan Super Admin.'),
      L('Displayed AI-generated incident categories and risk grading, with real-time notifications for each status change.', 'Menampilkan kategori insiden hasil AI dan penilaian risiko, dengan notifikasi real-time untuk setiap perubahan status.'),
      L('Integrated the frontend with the backend API and deployed it on Vercel.', 'Mengintegrasikan frontend dengan API backend dan men-deploy di Vercel.'),
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Web Speech API', 'Vercel'],
    images: [
      { src: '/media/experience/safenurse/login.jpg', caption: 'SafeNurse login page' },
      { src: '/media/experience/safenurse/presentation.jpg', caption: 'Project presentation' },
      { src: '/media/experience/safenurse/team-nurses.jpg', caption: 'Team photo with nursing staff' },
      { src: '/media/experience/safenurse/user-testing.jpg', caption: 'User testing session' },
      { src: '/media/experience/safenurse/team-working.jpg', caption: 'Team working session' },
    ],
  },
  {
    id: 'exp-otban',
    logo: '/media/logos/companies-and-agencies/otoritas-bandar-udara.webp',
    role: L('Airport Pass Services Division', 'Divisi Pelayanan Pas Bandara'),
    company: L('Airport Authority Office Region V Makassar', 'Kantor Otoritas Bandar Udara Wilayah V Makassar'),
    location: 'Makassar, Indonesia',
    period: L('Feb 2025 — Jul 2025', 'Feb 2025 — Jul 2025'),
    type: L('Internship', 'Magang'),
    description: L(
      'Internship in the Airport Pass Services section of the Airport Authority Office (Kantor Otoritas Bandar Udara Wilayah V Makassar), which processes applications for airport access passes.',
      'Magang di bagian Pelayanan Pas Bandara Kantor Otoritas Bandar Udara Wilayah V Makassar, yang memproses permohonan pas akses bandara.',
    ),
    responsibilities: [
      L('Recorded and entered applicant data for up to 40 airport pass applicants per day, keeping records accurate and organized.', 'Merekam dan menginput data hingga 40 pemohon pas bandara per hari, menjaga data tetap akurat dan teratur.'),
      L('Served up to 200 applicants per week, supporting a smooth application and issuance process.', 'Melayani hingga 200 pemohon per minggu untuk kelancaran proses pengajuan dan penerbitan.'),
      L('Managed correspondence and administrative documents for pass applications.', 'Mengelola persuratan dan dokumen administrasi permohonan pas.'),
      L("Prepared structured weekly reports to monitor airport pass printing, including observations on the process's efficiency and accuracy.", 'Menyusun laporan mingguan terstruktur untuk memonitor pencetakan pas bandara, termasuk catatan efisiensi dan akurasi proses.'),
    ],
    technologies: ['Microsoft Excel', 'Microsoft Office'],
    images: [
      { src: '/media/experience/otban/team.jpg', caption: 'With the team at the Airport Authority Office' },
      { src: '/media/experience/otban/pass-desk.jpg', caption: 'Processing airport pass applications' },
      { src: '/media/experience/otban/public-service-unit.jpg', caption: 'Public Service Unit building' },
      { src: '/media/experience/otban/meeting.jpg', caption: 'Office meeting session' },
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    id: 'edu-unhas',
    logo: '/media/logos/universities-and-schools/unhas.webp',
    degree: L('Bachelor of Information Systems', 'Sarjana Sistem Informasi'),
    institution: 'Universitas Hasanuddin',
    location: 'Makassar, Indonesia',
    period: L('2022 — Jul 2026', '2022 — Jul 2026'),
    description: L(
      'Graduated on time in 3 years 10 months with a GPA of 3.93 / 4.00. Bakti BCA scholarship recipient, information systems laboratory assistant, and focused on full stack development integrated with AI.',
      'Lulus tepat waktu 3 tahun 10 bulan dengan IPK 3,93 / 4,00. Penerima Beasiswa Bakti BCA, asisten laboratorium sistem informasi, dan berfokus pada full stack dev terintegrasi dengan AI.',
    ),
    details: [
      L('Thesis: "A Comparative Study of Face Detection (MTCNN and SCRFD) and Face Embedding (FaceNet and ArcFace) Model Combinations for a Web-Based Attendance System (Case Study: Information Systems Laboratory, FMIPA Hasanuddin University)".', 'Skripsi: "Studi Komparasi Kinerja Kombinasi Model Face Detection (MTCNN dan SCRFD) dan Face Embedding (FaceNet dan ArcFace) untuk Sistem Absensi Berbasis Website (Studi Kasus: Laboratorium Sistem Informasi FMIPA Unhas)".'),
      L('Coursework: Web Development, Data Science, Machine Learning, Deep Learning, and Information Systems Engineering.', 'Mata kuliah: Pemrograman Web, Data Science, Machine Learning, Deep Learning, dan Rekayasa Sistem Informasi.'),
      L('Teaching assistant at the Information Systems Laboratory and member of the Himatika FMIPA executive board.', 'Asisten laboratorium Sistem Informasi dan anggota pengurus Himatika FMIPA.'),
    ],
    images: [{ src: '/media/education/unhas/graduation.jpg', caption: 'Graduation, July 2026' }],
  },
  {
    id: 'edu-sma',
    logo: '/media/logos/universities-and-schools/sman1-maros.webp',
    degree: L('Science Track (IPA)', 'Jurusan Ilmu Pengetahuan Alam (IPA)'),
    institution: 'SMA Negeri 1 Maros',
    location: 'Maros, Indonesia',
    period: L('2019 — 2022', '2019 — 2022'),
    description: L(
      'Graduated with a final score of 91.2 / 100. Active in OSIS, including leading the 2020 Sports & Arts Week, and a district-level winner of the Informatics KSN-K in Maros Regency.',
      'Lulus dengan nilai akhir 91,2 / 100. Aktif dalam berbagai kegiatan OSIS termasuk memimpin Porseni 2020, serta juara dalam KSN-K Informatika tingkat Kabupaten Maros.',
    ),
    details: [
      L('1st place in the Informatics category of the National Science Competition (KSN-K), Maros Regency level, in 2020 and 2021.', 'Juara 1 bidang Informatika Kompetisi Sains Nasional (KSN-K) tingkat Kabupaten Maros pada 2020 dan 2021.'),
      L('Head of the Academic Achievement, Arts and Sports division of the student council (OSIS), including chairing the 2020 Sports and Arts Week committee.', 'Ketua Sekbid Prestasi Akademik, Seni dan Olahraga OSIS, termasuk memimpin panitia Pekan Olahraga dan Seni 2020.'),
    ],
    images: [],
  },
];

// ─── Organizations ────────────────────────────────────────────────────────────
export const organizations: Organization[] = [
  {
    id: 'org-himatika',
    logo: '/media/logos/organizations/himatika.webp',
    role: L('Member, Academic and Student Affairs Division', 'Anggota Divisi Akademik dan Kemahasiswaan'),
    organization: 'Himatika FMIPA Hasanuddin University',
    location: 'Makassar, Indonesia',
    period: L('Oct 2024 — Jun 2025', 'Okt 2024 — Jun 2025'),
    description: L(
      "Himatika is the student association of the Mathematics Department, serving students of Mathematics, Information Systems, and Actuarial Science. The Academic and Student Affairs Division represents members' academic interests and links them with the student affairs office.",
      'Himatika adalah himpunan mahasiswa Departemen Matematika yang melayani mahasiswa Matematika, Sistem Informasi, dan Ilmu Aktuaria. Bidang Akademik dan Kemahasiswaan mewakili kepentingan akademik anggota dan menjadi penghubung dengan pihak kemahasiswaan.',
    ),
    responsibilities: [
      L('Spoke at "Himatika Talks" on achieving success through scholarships, in front of around 50 participants.', 'Menjadi pemateri "Himatika Talks" tentang jalan kesuksesan melalui beasiswa di depan sekitar 50 peserta.'),
      L('Managed the member database of the association.', 'Mengelola database anggota himpunan.'),
      L('Supported the division\'s academic assistance program for members facing study evaluations.', 'Mendukung program bantuan akademik bidang untuk anggota yang menghadapi evaluasi studi.'),
      L('Shared guidance on self-development and career goals with fellow students.', 'Berbagi wawasan tentang pengembangan diri dan tujuan karir dengan sesama mahasiswa.'),
    ],
    images: [
      { src: '/media/organizations/himatika/talks.jpg', caption: 'Himatika Talks: Pathway to Success' },
      { src: '/media/organizations/himatika/group.jpg', caption: 'Himatika group photo' },
      { src: '/media/organizations/himatika/excel-training.jpg', caption: 'Excel productivity training' },
    ],
  },
  {
    id: 'org-bakti-bca',
    logo: '/media/logos/organizations/bakti-champions-unhas.webp',
    role: 'Scholarship Awardee (Bakti Champions)',
    organization: 'Bakti BCA Scholarship · Bank Central Asia',
    location: 'Makassar, Indonesia',
    period: L('Jan 2024 — Dec 2024', 'Jan 2024 — Des 2024'),
    description: L(
      "Bakti BCA Scholarship is Bank Central Asia's scholarship program, selected through academic achievement. As a Bakti Champion at Hasanuddin University, I took part in a year-long development program of workshops, mentoring, and company activities.",
      'Beasiswa Bakti BCA adalah program beasiswa Bank Central Asia yang dipilih melalui prestasi akademik. Sebagai Bakti Champion di Universitas Hasanuddin, saya mengikuti program pengembangan sepanjang tahun berupa workshop, mentoring, dan kegiatan perusahaan.',
    ),
    responsibilities: [
      L('Completed the Transformational Workshop on developing self, building relationships, and designing and delivering solutions.', 'Menyelesaikan Transformational Workshop tentang pengembangan diri, membangun relasi, serta merancang dan menyampaikan solusi.'),
      L('Took part in the Business Impact Plan Competition, developing a business idea to support the growth of MSMEs in Makassar through two rounds of mentoring and idea validation.', 'Mengikuti Business Impact Plan Competition, mengembangkan ide bisnis untuk mendukung pertumbuhan UMKM di Makassar melalui dua sesi mentoring dan validasi ide.'),
      L('Joined a Company Visit to BCA, including a banking and office tour.', 'Mengikuti Company Visit ke BCA, termasuk tur perbankan dan kantor.'),
      L('Attended the Financial Talk on managing finances and investing.', 'Mengikuti Financial Talk tentang pengelolaan keuangan dan investasi.'),
    ],
    images: [
      { src: '/media/organizations/bakti-bca/champions-2024.jpg', caption: 'Bakti Champions Unhas 2024' },
      { src: '/media/organizations/bakti-bca/company-visit.jpg', caption: 'Company Visit' },
      { src: '/media/organizations/bakti-bca/workshop-day-1.jpg', caption: 'Transformational Workshop (Day 1)' },
      { src: '/media/organizations/bakti-bca/workshop-day-2.jpg', caption: 'Transformational Workshop (Day 2)' },
      { src: '/media/organizations/bakti-bca/final-gathering.jpg', caption: 'Final Gathering' },
    ],
  },
  {
    id: 'org-osis',
    logo: '/media/logos/universities-and-schools/sman1-maros.webp',
    role: L('Head of Academic Achievement, Arts and Sports Division', 'Ketua Bidang Prestasi Akademik, Seni, dan Olahraga'),
    organization: 'OSIS SMA Negeri 1 Maros',
    location: 'Maros, Indonesia',
    period: L('2020 — 2021', '2020 — 2021'),
    description: L(
      'Led the OSIS division that tracks student achievements and coordinates academic, arts, and sports activities across the school, including chairing the organizing committee of the 2020 Sports and Arts Week (Pekan Olahraga dan Seni), a school-wide event of sports and arts competitions.',
      'Memimpin bidang OSIS yang mendata prestasi siswa dan mengoordinasikan kegiatan akademik, seni, dan olahraga di sekolah, termasuk menjadi Ketua Panitia Pekan Olahraga dan Seni 2020, acara sekolah berisi lomba olahraga dan seni.',
    ),
    responsibilities: [
      L('Recorded and compiled all student achievements, averaging around 40 per month.', 'Mendata dan merekap seluruh prestasi siswa, rata-rata 40 prestasi tiap bulan.'),
      L('Prepared weekly achievement reports and proposals asking the school to give prize money to winning students.', 'Menyusun laporan mingguan prestasi dan proposal dana juara kepada sekolah.'),
      L('Tracked more than 20 extracurricular activities and their weekly reports from each supervisor.', 'Mendata lebih dari 20 ekstrakurikuler dan laporan kegiatan mingguan dari tiap pembina.'),
      L('Chaired the Sports and Arts Week committee (Dec 2020): led 60 committee members to plan and run the event for 900 student participants.', 'Menjadi Ketua Panitia Pekan Olahraga dan Seni (Des 2020): memimpin 60 anggota panitia merencanakan dan menjalankan acara untuk 900 siswa peserta.'),
      L('Prepared the event budget and managed IDR 11 million in funds.', 'Menyusun anggaran acara dan mengelola dana sebesar Rp 11 juta.'),
      L('Scheduled and organized more than 20 sports and arts activities.', 'Menyusun jadwal dan mengorganisasi lebih dari 20 kegiatan olahraga dan seni.'),
    ],
    images: [],
  },
];

// ─── Volunteering ─────────────────────────────────────────────────────────────
export const volunteers: Organization[] = [
  {
    id: 'vol-mhm-2026',
    logo: '/media/logos/events/makassar-half-marathon.webp',
    role: 'Race Pack Collection Volunteer',
    organization: 'Makassar Half Marathon 2026',
    location: 'Makassar, Indonesia',
    period: L('May 2026', 'Mei 2026'),
    description: L(
      'Makassar Half Marathon 2026 was organized by the Makassar City Government through the Youth and Sports Office (Dispora), with a target of 12,000 runners. I helped registered runners collect their race packs before the race.',
      'Makassar Half Marathon 2026 diselenggarakan Pemerintah Kota Makassar melalui Dinas Pemuda dan Olahraga (Dispora), dengan target 12.000 pelari. Saya membantu pelari terdaftar mengambil race pack sebelum lomba.',
    ),
    responsibilities: [],
    images: [{ src: '/media/volunteer/makassar-half-marathon/2026/race-pack.jpg', caption: 'Race pack collection team' }],
  },
  {
    id: 'vol-mhm-2025',
    logo: '/media/logos/events/makassar-half-marathon.webp',
    role: 'Marshal',
    organization: 'Makassar Half Marathon 2025',
    location: 'Makassar, Indonesia',
    period: L('May — Jun 2025', 'Mei — Jun 2025'),
    description: L(
      'A two-day road running event (31 May – 1 June 2025) with Half Marathon, 10K, and 5K categories and a target of 10,000 runners. I served as a marshal, supporting runners along the race route.',
      'Lomba lari dua hari (31 Mei – 1 Juni 2025) dengan kategori Half Marathon, 10K, dan 5K serta target 10.000 pelari. Saya bertugas sebagai marshal, mendampingi pelari di sepanjang rute lomba.',
    ),
    responsibilities: [],
    images: [{ src: '/media/volunteer/makassar-half-marathon/2025/marshal.jpg', caption: 'Marshal briefing' }],
  },
  {
    id: 'vol-mhm-2024',
    logo: '/media/logos/events/makassar-half-marathon.webp',
    role: 'Ribbon Checkpoint Volunteer',
    organization: 'Makassar Half Marathon 2024',
    location: 'Makassar, Indonesia',
    period: L('Jun 2024', 'Jun 2024'),
    description: L(
      'Makassar Half Marathon 2024 (2 June 2024) drew around 6,500 runners from Indonesia and abroad. I volunteered at a ribbon checkpoint, checking runners to confirm they completed the route.',
      'Makassar Half Marathon 2024 (2 Juni 2024) diikuti sekitar 6.500 pelari dari dalam dan luar negeri. Saya menjadi relawan di checkpoint pita, memeriksa pelari untuk memastikan mereka menyelesaikan rute.',
    ),
    responsibilities: [],
    images: [{ src: '/media/volunteer/makassar-half-marathon/2024/checkpoint.jpg', caption: 'Checkpoint crew' }],
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
const cert = (
  id: string,
  name: string,
  issuer: string,
  date: string,
  image: string,
  extra: Partial<Certification> = {},
): Certification => ({
  id,
  name,
  issuer,
  date,
  images: [{ src: `/media/certificates/${image}`, caption: name }],
  ...extra,
});

export const certifications: Certification[] = [
  cert('cert-bnsp', 'Data Analyst (BNSP Certificate of Competence)', 'LSP Digital Teknologi Informasi Indonesia, on behalf of BNSP', 'Nov 2025', 'competitions-and-licenses/bnsp-data-analyst.jpg', {
    credentialId: '63172 2511 0 0005699 2025',
    description: L(
      'Competency certification in Data Management with the qualification of Data Analyst. Valid for three years (until November 2028).',
      'Sertifikasi kompetensi bidang Manajemen Data dengan kualifikasi Data Analyst. Berlaku tiga tahun (sampai November 2028).',
    ),
  }),
  cert('cert-ksn-2021', '1st Place, KSN-K Informatics 2021', 'Dinas Pendidikan Provinsi Sulawesi Selatan (Cabang Dinas Wilayah I)', 'Jun 2021', 'competitions-and-licenses/ksn-k-2021.jpg'),
  cert('cert-ksn-2020', '1st Place, KSN-K Informatics 2020', 'Dinas Pendidikan Provinsi Sulawesi Selatan (Cabang Dinas Wilayah I)', 'Mar 2020', 'competitions-and-licenses/ksn-k-2020.jpg'),
  cert('cert-kominfo-wawasan', 'Wawasan Karir dalam Bidang Data Analytics', 'Komdigi · Digital Talent Scholarship', 'Jun 2025', 'kominfo/wawasan-karir-data-analytics.jpg', { credentialId: '2299746850-12081' }),
  cert('cert-kominfo-ai', 'AI Engineer For Milenial', 'Kominfo · Digital Talent Scholarship', '2024', 'kominfo/ai-engineer.jpg'),
  cert('cert-kominfo-fds', 'Fundamental Data Science', 'Kominfo · Digital Talent Scholarship', '2024', 'kominfo/fundamental-data-science.jpg'),
  cert('cert-kominfo-ids', 'Intermediate Data Science', 'Kominfo · Digital Talent Scholarship', '2024', 'kominfo/intermediate-data-science.jpg'),
  cert('cert-kominfo-pds', 'Pengenalan Data Science dan Pemanfaatannya', 'Kominfo · Digital Talent Scholarship', '2024', 'kominfo/pengenalan-data-science.jpg'),
  cert('cert-dicoding-ds', 'Belajar Dasar Data Science', 'Dicoding Indonesia', '2024', 'dicoding/sertifikat_datascience_page-0001.jpg'),
  cert('cert-dicoding-python', 'Memulai Pemrograman dengan Python', 'Dicoding Indonesia', '2024', 'dicoding/sertifikat_python_page-0001.jpg'),
  cert('cert-dicoding-viz', 'Belajar Dasar Visualisasi Data', 'Dicoding Indonesia', '2024', 'dicoding/sertifikat_visualisasi_data_page-0001.jpg'),
  cert('cert-dicoding-sql', 'Belajar Dasar Structured Query Language (SQL)', 'Dicoding Indonesia', '2024', 'dicoding/sertifikat_SQL_page-0001.jpg'),
  cert('cert-dicoding-ai', 'Belajar Dasar AI', 'Dicoding Indonesia', '2024', 'dicoding/sertifikat_AI_page-0001.jpg'),
  cert('cert-myskill-viz', 'Data Visualization', 'MySkill', '2024', 'myskill/data-visualization.jpg'),
  cert('cert-myskill-pm', 'Introduction to Project Management', 'MySkill', '2024', 'myskill/project-management.jpg'),
  cert('cert-myskill-ux', 'Introduction to UX Research', 'MySkill', '2024', 'myskill/ux-research.jpg'),
  cert('cert-myskill-fe', 'Frontend Fundamentals', 'MySkill x SGU', '2024', 'myskill/frontend-fundamentals.jpg'),
  cert('cert-myskill-brand', 'Brand Identity Design', 'MySkill', '2024', 'myskill/brand-identity.jpg'),
  cert('cert-myskill-fin', 'Corporate Finance Introduction', 'MySkill', '2024', 'myskill/corporate-finance.jpg'),
  cert('cert-myskill-pitch', 'Creating Business Pitch Deck', 'MySkill x SGU', '2024', 'myskill/pitch-deck.jpg'),
  cert('cert-myskill-recruit', 'Intro to Recruitment Process', 'Deloitte x MySkill', '2024', 'myskill/recruitment-process.jpg'),
  cert('cert-myskill-interview', 'Scholarship Interview', 'MySkill x Deloitte', '2024', 'myskill/scholarship-interview.jpg'),
];
