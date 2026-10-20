/**
 * ==============================================================================
 * FIREBASE-CONFIG.JS — PENGATURAN DATABASE WEBSITE (WAJIB DIISI)
 * ==============================================================================
 * Semua data toko disimpan di Firebase Cloud Firestore, sehingga perubahan dari
 * Panel Kelola langsung tampil di halaman utama pada SEMUA perangkat (HP & laptop).
 *
 * Cara mengisi: lihat README.md bagian "Menyiapkan Firebase".
 *
 * Catatan keamanan:
 * - apiKey Firebase untuk web memang boleh terlihat publik.
 * - Yang menjaga data adalah Rules Firestore (file firestore.rules),
 *   sehingga hanya akun admin yang boleh mengubah data.
 * ==============================================================================
 */

// 1. Tempel konfigurasi dari Firebase Console
//    (Project settings > General > Your apps > Web app > SDK setup and configuration)
const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// 2. Email akun admin yang dibuat di Firebase Authentication (Email/Password).
//    Kata sandi akun ini dipakai untuk masuk ke Panel Kelola.
//    Email ini harus SAMA dengan email yang ditulis di firestore.rules.
const ADMIN_EMAIL = "";

// 3. Nama dokumen data toko. Ganti jika satu project Firebase dipakai beberapa kelompok
//    (contoh: "kelompok-1", "kelompok-2") agar data tiap kelompok tidak tercampur.
const TOKO_ID = "seblak-umkm";
