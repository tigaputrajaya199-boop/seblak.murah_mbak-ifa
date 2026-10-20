# 📖 Panduan Lengkap Setup Firebase & Master Prompt Website Jualan Seblak UMKM

Dokumen ini disusun untuk memudahkan Anda mengaktifkan, mengelola, serta mengembangkan website jualan **Seblak UMKM** yang ada di folder ini sesuai dengan 5 panduan gambar Firebase yang Anda miliki.

---

## 📌 Bagian 1: Panduan 5 Langkah Menghubungkan Firebase (Berdasarkan Gambar)

Website ini dirancang agar data menu, harga, foto, jam buka, dan warna tema tersimpan secara online di **Google Firebase (Gratis)**. Setiap kali Anda mengubah data di Panel Admin (`admin.html`), seluruh pengunjung di HP dan laptop lain akan melihat perubahannya secara instan (*real-time*).

### 🔹 Langkah 1 — Membuat Project Firebase
1. Buka browser dan kunjungi: **[console.firebase.google.com](https://console.firebase.google.com)**
2. Login menggunakan akun Google Anda.
3. Klik tombol **Add project** (atau **Create a project**).
4. Beri nama proyek, misalnya: `seblak-umkm-adit`.
5. Google Analytics boleh dinonaktifkan (opsional), lalu klik **Create project**.
6. Setelah proyek siap, klik ikon **Web (`</>`)** di halaman utama *Project Overview*.
7. Masukkan nama aplikasi web (misal: `Website Seblak`), lalu klik **Register app**.
8. Anda akan melihat kode konfigurasi (SDK setup). Simpan atau biarkan tab ini terbuka untuk Langkah 4.

---

### 🔹 Langkah 2 — Mengaktifkan Cloud Firestore (Database)
1. Di bilah menu kiri Firebase Console, klik **Build** > **Firestore Database**.
2. Klik tombol **Create database**.
3. Pilih lokasi database: pilih **`asia-southeast2 (Jakarta)`** (sangat direkomendasikan agar akses di Indonesia sangat cepat).
4. Pada pilihan aturan keamanan, pilih **Start in production mode** (mode produksi).
5. Klik **Create** dan tunggu beberapa detik sampai database aktif.

---

### 🔹 Langkah 3 — Membuat Akun Admin (Autentikasi Pengelola)
1. Di bilah menu kiri, klik **Build** > **Authentication**.
2. Klik tombol **Get started**.
3. Masuk ke tab **Sign-in method** (atau *Sign-in providers*).
4. Klik **Email/Password**, aktifkan opsi **Enable** pertama, lalu klik **Save**.
5. Pindah ke tab **Users**, lalu klik tombol **Add user**.
6. Masukkan:
   - **Email Admin**: misalnya `admin@seblakumkm.com` (bebas, catat email ini).
   - **Password**: minimal 6 karakter (misal: `seblak12345`).
7. Klik **Add user**. Email dan password ini akan menjadi kunci masuk ke Panel Kelola Website Anda.

---

### 🔹 Langkah 4 — Mengisi Konfigurasi di `firebase-config.js`
Buka file `firebase-config.js` di folder proyek ini dengan text editor (seperti VS Code atau Notepad), lalu isi nilai yang didapat dari Firebase Console:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyXXXXXXXXXXXXXX",
  authDomain: "seblak-umkm-adit.firebaseapp.com",
  projectId: "seblak-umkm-adit",
  storageBucket: "seblak-umkm-adit.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Masukkan email admin yang Anda buat di Langkah 3
const ADMIN_EMAIL = "admin@seblakumkm.com";

// ID unik toko (default: "seblak-umkm")
const TOKO_ID = "seblak-umkm";
```

---

### 🔹 Langkah 5 — Memasang Aturan Keamanan di `firestore.rules`
Agar database Anda aman dari tangan jahil (pengunjung hanya bisa melihat menu, hanya admin yang bisa mengedit):

1. Buka file `firestore.rules` di folder proyek ini.
2. Ganti teks `admin@contoh.com` dengan email admin Anda (harus persis sama dengan `ADMIN_EMAIL` di `firebase-config.js`):
   ```text
   rules_version = '2';

   service cloud.firestore {
     match /databases/{database}/documents {
       match /umkm/{tokoId} {
         allow read: if true;
         allow write: if request.auth != null
                      && request.auth.token.email == "admin@seblakumkm.com";
       }
     }
   }
   ```
3. Buka **Firebase Console** > **Firestore Database** > tab **Rules**.
4. Hapus semua teks yang ada di kotak aturan tersebut, lalu **Paste / Tempelkan** aturan di atas.
5. Klik tombol **Publish**.

---

## 🚀 Cara Menjalankan & Menguji Website

### Menjalankan di Komputer Lokal:
- Cukup buka file `index.html` dengan klik dua kali di browser Anda (Chrome, Edge, Firefox).
- Atau klik kanan file `index.html` dan pilih **Open with Live Server** (jika memakai VS Code).
- **Kata Sandi Masuk Pengelola (Langsung Aktif):** `admin123`
- Untuk mengelola produk, klik tombol **⚙️ Kelola Toko** di pojok kanan atas, atau buka berkas `admin.html`. Masukkan kata sandi `admin123`. Anda bisa langsung mengubah produk, harga, foto, dan nomor WhatsApp sekarang juga tanpa harus mendaftar ke Firebase!

### Mengunggah ke Internet (Online Gratis via GitHub Pages):
1. Buat repositori baru di GitHub (misal: `seblak-umkm`).
2. Unggah seluruh isi folder ini (`index.html`, `admin.html`, `style.css`, `script.js`, `firebase-config.js`, `firestore.rules`, folder `img/`).
3. Buka menu **Settings** > **Pages** di repositori GitHub Anda.
4. Pada opsi **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1 menit, website Anda sudah online di alamat: `https://username-github-anda.github.io/seblak-umkm/`

---

## 🤖 Bagian 2: Master Prompt AI (Siap Pakai Kapan Saja)

Gunakan prompt di bawah ini untuk memudahkan Anda mengembangkan website ini lebih lanjut atau membuat website jualan baru dengan bantuan AI:

### 🌟 PROMPT 1: Membuat Website Jualan Serupa untuk Usaha Lain
> *"Saya memiliki arsitektur website UMKM Single-Page Application berbasis Vanilla HTML5, CSS3, dan JavaScript murni yang terintegrasi langsung dengan Firebase Firestore (real-time sync) dan Firebase Authentication untuk panel admin, serta integrasi pemesanan WhatsApp otomatis.*
>
> *Bantu saya membuat website jualan baru untuk bisnis [SEBUTKAN NAMA BISNIS, contoh: Kedai Kopi / Bakso / Hijab / Kaos Distro] dengan fitur:*
> 1. *Halaman publik responsif (Hero Section, Cerita Usaha, 3 Fakta, 3 Keunggulan, Lokasi Google Maps, Jam Operasional).*
> 2. *Katalog 6 Produk unggulan dengan foto, porsi/ukuran, harga, deskripsi maks 25 kata, dan tombol 'Pesan via WhatsApp' otomatis dengan format pesan yang rapi.*
> 3. *Panel Admin (Jendela 2 / admin.html) terproteksi kata sandi Firebase Auth untuk mengubah semua teks, foto (kompresi otomatis canvas), harga, nomor WhatsApp, dan palet warna tema.*
> 4. *Sertakan struktur file lengkap (index.html, admin.html, style.css, script.js, firebase-config.js, firestore.rules).*
>
> *Gunakan kode yang bersih, mudah dipahami siswa/pemula, tanpa framework berat."*

---

### 🌟 PROMPT 2: Menambahkan Fitur Keranjang Belanja (Shopping Cart & WhatsApp Checkout)
> *"Berikut adalah codebase website Seblak UMKM saya (index.html, script.js, style.css). Saya ingin menambahkan fitur Keranjang Belanja Interaktif (Shopping Cart) tanpa merusak sinkronisasi Firebase yang sudah berjalan:*
> 1. *Tiap kartu produk memiliki tombol '+ Tambah ke Keranjang' dan pemilih kuantitas.*
> 2. *Tombol Floating Cart di pojok layar yang menampilkan jumlah total item dan total harga.*
> 3. *Modal keranjang belanja untuk melihat ringkasan pesanan, menambah/mengurangi porsi, kolom catatan (misal: level pedas 1-5, ekstra topping), dan input nama pemesan serta alamat pengantaran.*
> 4. *Tombol 'Checkout WhatsApp' yang merangkum seluruh daftar pesanan ke dalam format pesan WhatsApp yang rapi dan terstruktur.*
>
> *Mohon berikan kode modifikasi untuk script.js, index.html, dan style.css."*

---

### 🌟 PROMPT 3: Menyesuaikan Data Menu & Tampilan Cepat
> *"Tolong buatkan konfigurasi DEFAULT_DATA di script.js untuk bisnis [SEBUTKAN PRODUK ANDA] lengkap dengan daftar 6 menu produk unggulan beserta perkiraan harga yang realistis, slogan menarik, cerita kuliner 3 kalimat, 3 keunggulan, serta rekomendasi palet kode warna heksadesimal yang cocok dengan tema bisnis tersebut."*
