# media: semua gambar & dokumen portofolio

Satu folder untuk semuanya. Taruh foto baru di subfolder yang sesuai, lalu kabari saya (nama file dan keterangan singkat), nanti saya yang memasangkannya di web.

```
media/
├── profile/                      foto dirimu
│   ├── portrait.jpg              foto di bingkai (bagian hero)
│   ├── ammar-cutout.webp         foto tanpa latar di banner "PORTFOLIO"
│   └── extra-photos/             foto diri tambahan
├── brand/                        logo MaR (mar-logo.svg, mar-logo-512.png); favicon-nya ada di app/icon.svg
├── logos/                        logo instansi, sudah terpasang di kartu web (.webp persegi)
│   ├── universities-and-schools/ unhas, sman1-maros, lab-sisfo-unhas
│   ├── companies-and-agencies/   bps-maros, otoritas-bandar-udara, rsoj-pertamina, double-helix
│   ├── organizations/            himatika, bakti-champions-unhas  (belum ada: osis, dispora-makassar)
│   └── events/                   makassar-half-marathon  (belum ada: macawafest)
├── education/
│   ├── unhas/                    graduation.jpg (+ wisuda, kampus)
│   └── sman1-maros/
├── experience/                   foto kegiatan per tempat kerja/magang
│   ├── bps-maros/   lab-assistant/   macawafest/   safenurse/   otban/
├── organizations/                foto organisasi & beasiswa
│   ├── himatika/   bakti-bca/   osis/   (foto Pekan Olahraga dan Seni ikut ke osis/)
├── volunteer/makassar-half-marathon/{2024,2025,2026}/
├── projects/<slug>/              main.png + ss1/ss2/ss3.png tiap proyek
├── certificates/                 dicoding / myskill / kominfo / competitions-and-licenses
├── documents/                    CV_Ammar_Tyo_Pasaribu.pdf (yang diunduh dari tombol Download CV)
└── _private/                     PRIBADI: tidak ikut git dan tidak ikut deploy
    ├── about-me/                 catatan tentang kamu (.md), teks CV lama
    ├── linkedin/                 banner dan draf LinkedIn
    ├── cv/                       CV terbaru (PDF)
    ├── originals/                foto asli resolusi penuh + foto mentah Bakti BCA (flyer internal)
    ├── fonts/                    LEGO BRIX (lisensi pemakaian pribadi)
    ├── inbox/                    taruh foto mentah di sini jika bingung mau ke folder mana
    └── archive/                  file yang tidak dipakai lagi (kartu 3D, hero lama, dll.)
```

## Aturan penamaan
- huruf kecil, pakai tanda hubung, tanpa spasi: `team-photo.jpg`, bukan `Foto Tim (1).JPG`
- sebut kegiatannya, bukan nomor kamera: `company-visit.jpg`, bukan `IMG_8443.jpg`
- foto kegiatan: JPG, sisi terpanjang sekitar 1600 px. Logo: PNG atau SVG berlatar transparan (idealnya persegi).

## Catatan penting
- Semua yang ada di luar `_private/` ikut ter-deploy dan bisa dilihat siapa saja. Jangan taruh data pribadi, dokumen internal, atau foto orang yang belum diizinkan di sana.
- `_private/` hanya ada di komputermu. **Cadangkan sendiri** (flashdisk atau cloud) karena tidak ada di GitHub.
- Path gambar di kode ditulis sebagai `/media/...` (lihat `lib/site/data.ts` dan `lib/site/projects.ts`).
