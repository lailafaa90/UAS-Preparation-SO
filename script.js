const chapters = [
  {
    no: 11,
    title: "Sistem File",
    short: "Cara OS menyimpan, menamai, mengatur, dan melindungi file.",
    keywords: "file folder direktori permission inode FAT NTFS ext4 journaling",
    goal: "Memahami bagaimana data disimpan sebagai file dan folder agar mudah ditemukan kembali.",
    simple: "Sistem file itu seperti lemari arsip digital. OS memberi nama file, menaruhnya di folder, mencatat lokasinya, dan menentukan siapa yang boleh membaca atau mengubahnya.",
    points: [
      "File adalah kumpulan data, sedangkan direktori/folder adalah tempat untuk mengelompokkan file.",
      "Metadata berisi informasi tentang file, misalnya nama, ukuran, tanggal dibuat, dan hak akses.",
      "Path menunjukkan alamat file, contoh: C:/User/Tugas/uas.docx atau /home/user/uas.txt.",
      "Hak akses menjaga agar file tidak dibuka, diubah, atau dihapus sembarang orang.",
      "Contoh sistem file: FAT32, NTFS, ext4, APFS, dan exFAT."
    ],
    analogy: "Bayangkan perpustakaan. Buku adalah file, rak adalah folder, katalog adalah metadata, dan kartu anggota adalah hak akses.",
    mind: ["File", "Direktori", "Metadata", "Path", "Permission"],
    caseQuestion: "Di lab komputer, beberapa file tugas mahasiswa hilang setelah komputer dipakai bergantian. Dosen ingin file tetap rapi dan tidak mudah dihapus oleh user lain. Apa solusi dari sisi sistem file?",
    caseAnswer: [
      "Buat folder terpisah untuk tiap mahasiswa atau kelompok.",
      "Atur permission: pemilik boleh baca/tulis, user lain hanya baca atau tidak boleh akses.",
      "Gunakan akun berbeda agar kepemilikan file jelas.",
      "Aktifkan backup atau versioning agar file yang terhapus bisa dipulihkan.",
      "Solusi ini cocok karena masalah utamanya adalah pengaturan lokasi file dan hak akses."
    ]
  },
  {
    no: 12,
    title: "Manajemen Sistem I/O",
    short: "Cara OS mengatur komunikasi antara CPU, memori, dan perangkat input/output.",
    keywords: "input output io device driver buffer interrupt spooling DMA printer keyboard",
    goal: "Memahami peran OS saat komputer berhubungan dengan keyboard, mouse, printer, disk, dan perangkat lain.",
    simple: "Manajemen I/O adalah tugas OS untuk menjadi perantara antara aplikasi dan perangkat. Aplikasi tidak perlu tahu cara kerja printer secara detail, karena OS dan driver yang mengurusnya.",
    points: [
      "Perangkat I/O meliputi keyboard, mouse, monitor, printer, kamera, scanner, disk, dan jaringan.",
      "Driver adalah program kecil yang membuat OS bisa memahami perangkat keras tertentu.",
      "Buffer digunakan untuk menampung data sementara agar proses input/output lebih lancar.",
      "Interrupt adalah sinyal dari perangkat untuk meminta perhatian CPU.",
      "Spooling biasa dipakai pada printer agar banyak dokumen bisa antre dicetak."
    ],
    analogy: "OS seperti resepsionis hotel. Tamu tidak bicara langsung ke semua staf; resepsionis mengatur pesan ke bagian yang tepat.",
    mind: ["Device", "Driver", "Buffer", "Interrupt", "Spooling"],
    caseQuestion: "Sebuah kantor memakai satu printer untuk banyak komputer. Saat semua orang mencetak dokumen bersamaan, hasil cetak sering tertukar dan printer terasa lambat. Konsep I/O apa yang harus diterapkan?",
    caseAnswer: [
      "Gunakan spooling agar dokumen masuk antrean cetak.",
      "Pastikan driver printer sesuai dan terbaru.",
      "Gunakan buffer/queue sehingga printer memproses satu pekerjaan secara tertib.",
      "Berikan nama dokumen dan user yang jelas di antrean.",
      "Masalah terjadi karena banyak request I/O datang bersamaan, jadi OS harus mengatur antrean."
    ]
  },
  {
    no: 13,
    title: "Sistem Penyimpanan Disk",
    short: "Cara data ditempatkan, dijadwalkan, dan diamankan pada media penyimpanan.",
    keywords: "disk storage HDD SSD sector block partition seek time scheduling fragmentation RAID backup",
    goal: "Memahami cara OS memakai disk agar penyimpanan cepat, rapi, dan aman.",
    simple: "Disk adalah tempat menyimpan data jangka panjang. OS harus tahu di bagian mana data diletakkan, bagaimana membacanya, dan bagaimana mengurangi waktu tunggu.",
    points: [
      "HDD memakai piringan berputar, sedangkan SSD memakai memori flash sehingga biasanya lebih cepat.",
      "Partisi membagi disk menjadi beberapa bagian logis, misalnya drive C dan D.",
      "Blok atau sektor adalah unit kecil tempat data disimpan.",
      "Fragmentasi terjadi saat potongan file tersebar, sehingga akses bisa melambat terutama pada HDD.",
      "Disk scheduling membantu menentukan urutan pembacaan/penulisan agar lebih efisien."
    ],
    analogy: "Disk seperti gudang. Jika barang ditaruh asal-asalan, pencarian lambat. Jika rak diberi nomor dan alur pengambilan rapi, kerja jadi cepat.",
    mind: ["HDD/SSD", "Partisi", "Blok", "Scheduling", "Backup"],
    caseQuestion: "Komputer administrasi sekolah sering lambat saat membuka banyak file lama. Disk hampir penuh dan file tersebar di banyak folder. Apa analisis dan langkah perbaikannya?",
    caseAnswer: [
      "Cek kapasitas disk, kesehatan disk, dan jenis penyimpanan HDD/SSD.",
      "Hapus file tidak perlu dan pindahkan arsip lama ke penyimpanan eksternal/cloud.",
      "Jika HDD, lakukan defragmentasi; jika SSD, hindari defrag manual dan pastikan TRIM aktif.",
      "Buat struktur folder dan backup berkala.",
      "Jika disk sudah tua atau rusak, ganti ke SSD agar akses data lebih cepat."
    ]
  },
  {
    no: 14,
    title: "Keamanan Sistem dan Proteksi",
    short: "Cara OS melindungi data, proses, memori, dan akses pengguna.",
    keywords: "security protection authentication authorization privilege malware antivirus firewall encryption access control",
    goal: "Memahami keamanan dasar di dalam sistem operasi agar data dan proses tidak disalahgunakan.",
    simple: "Keamanan sistem adalah usaha mencegah orang atau program yang tidak berhak mengakses data. Proteksi adalah mekanisme OS untuk membatasi apa yang boleh dilakukan user dan program.",
    points: [
      "Authentication memastikan siapa user-nya, misalnya login password atau sidik jari.",
      "Authorization menentukan izin user setelah berhasil login.",
      "Privilege adalah tingkat hak akses, misalnya user biasa dan administrator/root.",
      "Proteksi memori mencegah satu program merusak area memori program lain.",
      "Enkripsi membuat data sulit dibaca jika dicuri."
    ],
    analogy: "Keamanan OS seperti gedung kantor. Ada kartu masuk, ruangan khusus, CCTV, dan petugas yang membatasi akses.",
    mind: ["Login", "Hak Akses", "Privilege", "Proteksi Memori", "Enkripsi"],
    caseQuestion: "Laptop bendahara organisasi hilang. Di dalamnya ada file keuangan dan data anggota. Apa fitur keamanan OS yang seharusnya digunakan sebelum kejadian dan apa tindakan setelah kejadian?",
    caseAnswer: [
      "Sebelum kejadian: gunakan password kuat, enkripsi disk, auto-lock, akun non-admin untuk aktivitas harian, dan backup.",
      "Setelah kejadian: ubah password akun penting, cabut sesi login, laporkan kehilangan, dan restore data dari backup.",
      "Gunakan fitur remote wipe jika tersedia.",
      "Enkripsi penting karena pencuri tidak mudah membaca isi disk tanpa kunci.",
      "Proteksi bukan hanya mencegah virus, tetapi juga menjaga data saat perangkat hilang."
    ]
  },
  {
    no: 15,
    title: "Sistem Operasi Jaringan",
    short: "OS yang menyediakan layanan jaringan seperti berbagi file, printer, user, dan server.",
    keywords: "network operating system server client domain active directory file sharing printer sharing remote access DNS DHCP",
    goal: "Memahami peran OS ketika komputer saling terhubung dan berbagi layanan.",
    simple: "Sistem operasi jaringan membantu banyak komputer bekerja bersama. Contohnya server sekolah yang mengatur akun siswa, folder bersama, printer, dan koneksi jaringan.",
    points: [
      "Model client-server: client meminta layanan, server menyediakan layanan.",
      "File sharing memungkinkan file dipakai bersama melalui jaringan.",
      "User management mengatur akun, password, grup, dan izin akses.",
      "DHCP memberi alamat IP otomatis, DNS menerjemahkan nama domain ke alamat IP.",
      "Remote access memungkinkan admin mengelola server dari tempat lain."
    ],
    analogy: "OS jaringan seperti kantor pusat. Semua cabang bisa meminta data, aturan akun, dan layanan dari satu pusat yang sama.",
    mind: ["Server", "Client", "User", "File Sharing", "Remote Access"],
    caseQuestion: "Sebuah sekolah ingin semua komputer lab bisa login memakai akun siswa masing-masing dan menyimpan tugas ke folder bersama. Konsep OS jaringan apa yang dibutuhkan?",
    caseAnswer: [
      "Gunakan server dengan manajemen user terpusat.",
      "Buat grup siswa/guru untuk memudahkan permission.",
      "Sediakan shared folder dengan hak akses sesuai kebutuhan.",
      "Gunakan DHCP dan DNS agar koneksi jaringan mudah dikelola.",
      "Model client-server cocok karena banyak komputer membutuhkan layanan yang sama."
    ]
  },
  {
    no: 16,
    title: "Keamanan Jaringan Komputer",
    short: "Cara melindungi komunikasi data antar komputer dari serangan dan penyalahgunaan.",
    keywords: "network security firewall VPN IDS IPS phishing sniffing WPA2 WPA3 SSL TLS attack",
    goal: "Memahami ancaman jaringan dan cara mengurangi risikonya.",
    simple: "Keamanan jaringan menjaga data saat berpindah dari satu perangkat ke perangkat lain. Tujuannya agar data tidak dicuri, diubah, atau dipalsukan selama lewat jaringan.",
    points: [
      "Firewall menyaring lalu lintas jaringan berdasarkan aturan tertentu.",
      "VPN membuat jalur komunikasi lebih aman melalui enkripsi.",
      "WPA2/WPA3 digunakan untuk mengamankan Wi-Fi.",
      "Phishing menipu user agar memberikan password atau kode OTP.",
      "IDS/IPS membantu mendeteksi atau mencegah aktivitas mencurigakan."
    ],
    analogy: "Jaringan seperti jalan raya data. Firewall adalah pos pemeriksaan, VPN adalah terowongan aman, dan IDS seperti kamera pengawas.",
    mind: ["Firewall", "VPN", "Wi‑Fi Aman", "IDS/IPS", "Phishing"],
    caseQuestion: "Di kafe, seorang mahasiswa login ke akun kampus memakai Wi-Fi publik. Beberapa hari kemudian akunnya dipakai orang lain. Apa kemungkinan penyebab dan pencegahannya?",
    caseAnswer: [
      "Kemungkinan: Wi-Fi publik tidak aman, phishing, password lemah, atau sesi login dicuri.",
      "Gunakan HTTPS dan hindari login penting di Wi-Fi publik tanpa VPN.",
      "Aktifkan autentikasi dua faktor.",
      "Jangan klik link login dari pesan mencurigakan.",
      "Gunakan password unik agar jika satu akun bocor, akun lain tidak ikut terkena."
    ]
  },
  {
    no: 17,
    title: "Sistem Operasi Mobile",
    short: "OS untuk smartphone/tablet yang mengatur aplikasi, sensor, baterai, dan koneksi.",
    keywords: "mobile operating system Android iOS app permission sandbox battery sensor notification mobile hardware",
    goal: "Memahami perbedaan OS mobile dengan OS desktop.",
    simple: "OS mobile dirancang untuk perangkat kecil yang memakai layar sentuh, baterai, sensor, kamera, GPS, dan jaringan seluler. Contohnya Android dan iOS.",
    points: [
      "Aplikasi mobile biasanya berjalan dalam sandbox agar tidak bebas mengakses data aplikasi lain.",
      "Permission digunakan untuk meminta izin kamera, lokasi, kontak, mikrofon, dan penyimpanan.",
      "Manajemen baterai penting karena perangkat mobile tidak selalu terhubung listrik.",
      "Notifikasi membantu aplikasi memberi informasi walau tidak sedang dibuka.",
      "App store membantu distribusi aplikasi dan pemeriksaan keamanan dasar."
    ],
    analogy: "OS mobile seperti manajer rumah kecil yang harus hemat listrik, menjaga privasi kamar, dan mengatur banyak sensor.",
    mind: ["Aplikasi", "Permission", "Sandbox", "Baterai", "Sensor"],
    caseQuestion: "Sebuah aplikasi kalkulator meminta izin lokasi, kontak, dan mikrofon. Pengguna bingung apakah harus mengizinkan. Bagaimana analisis dari konsep OS mobile?",
    caseAnswer: [
      "Izin tersebut tidak sesuai fungsi kalkulator, jadi mencurigakan.",
      "Tolak permission yang tidak relevan.",
      "Cek sumber aplikasi, rating, dan kebijakan privasi.",
      "Hapus aplikasi jika tetap memaksa akses yang tidak perlu.",
      "Permission dan sandbox dibuat agar aplikasi tidak mengambil data sembarangan."
    ]
  },
  {
    no: 18,
    title: "Mobile Security",
    short: "Perlindungan khusus untuk perangkat mobile dari malware, pencurian, dan kebocoran data.",
    keywords: "mobile security malware sideloading biometric screen lock encryption find my device app permission patch update",
    goal: "Memahami cara menjaga keamanan smartphone dan data pribadi.",
    simple: "Mobile security adalah cara melindungi HP dari aplikasi berbahaya, pencurian perangkat, penyadapan, dan kebocoran data pribadi.",
    points: [
      "Screen lock dan biometrik mencegah orang lain membuka perangkat.",
      "Update OS menutup celah keamanan yang ditemukan setelah perangkat dirilis.",
      "Hindari memasang aplikasi dari sumber tidak jelas karena berisiko malware.",
      "Find My Device atau Find My iPhone membantu melacak, mengunci, atau menghapus perangkat dari jarak jauh.",
      "Permission review perlu dilakukan secara berkala."
    ],
    analogy: "HP seperti dompet digital. Isinya bukan hanya foto, tapi juga akun, pembayaran, kontak, dan identitas.",
    mind: ["Lock Screen", "Update", "Anti Malware", "Remote Wipe", "Review Izin"],
    caseQuestion: "Seorang siswa memasang game dari luar app store. Setelah itu HP sering muncul iklan, baterai boros, dan kuota cepat habis. Apa kemungkinan masalahnya dan solusinya?",
    caseAnswer: [
      "Kemungkinan ada adware/malware dari aplikasi sideload.",
      "Hapus aplikasi mencurigakan dan scan dengan fitur keamanan bawaan.",
      "Cek permission aplikasi yang berlebihan.",
      "Update OS dan aplikasi resmi.",
      "Gunakan app store resmi dan hindari file APK dari sumber tidak jelas."
    ]
  },
  {
    no: 19,
    title: "Implementasi Sistem Operasi Berbasis Desktop",
    short: "Tahapan memasang, mengonfigurasi, dan menyiapkan OS desktop agar siap dipakai.",
    keywords: "desktop OS installation configuration driver user account partition software update backup Windows Linux macOS",
    goal: "Memahami langkah praktis implementasi OS desktop dari instalasi sampai siap digunakan.",
    simple: "Implementasi OS desktop berarti menyiapkan sistem operasi di komputer/laptop: instalasi, driver, akun, update, aplikasi, keamanan, dan backup.",
    points: [
      "Cek kebutuhan hardware: CPU, RAM, storage, dan kompatibilitas driver.",
      "Tentukan partisi dan format file system sebelum instalasi.",
      "Instal driver agar perangkat seperti Wi-Fi, audio, dan printer berjalan baik.",
      "Buat akun user biasa dan akun admin untuk keamanan.",
      "Lakukan update, instal aplikasi penting, aktifkan firewall, dan siapkan backup."
    ],
    analogy: "Menginstal OS desktop seperti menyiapkan rumah baru: bagi ruangan, pasang listrik, kunci pintu, lalu isi perabot yang diperlukan.",
    mind: ["Instalasi", "Partisi", "Driver", "Akun", "Update"],
    caseQuestion: "Lab komputer baru akan diisi 30 PC. Semua PC harus punya OS, aplikasi office, browser, antivirus, dan akun siswa. Bagaimana rencana implementasinya agar efisien?",
    caseAnswer: [
      "Tentukan spesifikasi OS yang sesuai dengan hardware.",
      "Buat satu konfigurasi master yang sudah berisi driver, update, dan aplikasi penting.",
      "Gunakan cloning/imaging agar instalasi 30 PC lebih cepat.",
      "Buat akun siswa dengan hak user biasa, bukan admin.",
      "Uji beberapa PC terlebih dahulu sebelum diterapkan ke semua komputer."
    ]
  },
  {
    no: 20,
    title: "Menganalisis Sistem Operasi Desktop",
    short: "Cara menilai masalah dan performa OS desktop berdasarkan gejala yang muncul.",
    keywords: "analyze desktop OS performance troubleshooting task manager logs boot slow memory CPU disk process service",
    goal: "Memahami cara mencari penyebab masalah OS desktop secara sistematis.",
    simple: "Analisis OS desktop adalah proses mencari tahu mengapa komputer lambat, error, gagal boot, sering hang, atau aplikasi tidak berjalan.",
    points: [
      "Amati gejala: lambat saat boot, lambat saat membuka aplikasi, sering crash, atau koneksi bermasalah.",
      "Cek penggunaan CPU, RAM, disk, dan jaringan melalui Task Manager/System Monitor.",
      "Lihat aplikasi startup, service, driver, dan update terakhir.",
      "Periksa log/error message untuk petunjuk penyebab.",
      "Bedakan masalah hardware, software, malware, konfigurasi, atau kapasitas penyimpanan."
    ],
    analogy: "Menganalisis OS seperti dokter memeriksa pasien: lihat gejala, ukur kondisi, cari riwayat, lalu tentukan penyebab.",
    mind: ["Gejala", "CPU/RAM", "Disk", "Log", "Solusi"],
    caseQuestion: "Laptop guru sangat lambat saat dinyalakan. Setelah 15 menit baru bisa digunakan. Apa langkah analisis yang tepat?",
    caseAnswer: [
      "Cek aplikasi startup yang terlalu banyak.",
      "Lihat penggunaan disk dan RAM saat boot.",
      "Periksa apakah ada update gagal, malware, atau driver bermasalah.",
      "Cek sisa storage dan kesehatan disk.",
      "Solusi bisa berupa menonaktifkan startup tidak penting, update, scan malware, tambah RAM, atau ganti SSD."
    ]
  },
  {
    no: 21,
    title: "Evaluasi Sistem Operasi Desktop",
    short: "Cara membandingkan dan menilai OS desktop berdasarkan kebutuhan pengguna.",
    keywords: "evaluate desktop OS usability security compatibility performance stability cost support Windows Linux macOS",
    goal: "Memahami cara memilih OS desktop yang paling cocok untuk kebutuhan tertentu.",
    simple: "Evaluasi OS desktop berarti menilai apakah sistem operasi cocok dipakai. Penilaiannya bukan hanya bagus atau tidak, tetapi cocok untuk siapa, untuk apa, dan dengan batasan apa.",
    points: [
      "Kinerja: apakah OS ringan dan responsif di hardware yang tersedia?",
      "Kompatibilitas: apakah aplikasi dan perangkat yang dibutuhkan bisa berjalan?",
      "Keamanan: apakah update, firewall, permission, dan enkripsi tersedia?",
      "Kemudahan penggunaan: apakah user mudah belajar dan mengoperasikannya?",
      "Biaya dan dukungan: apakah lisensi, maintenance, dan support sesuai anggaran?"
    ],
    analogy: "Memilih OS seperti memilih kendaraan. Motor, mobil, dan bus sama-sama berguna, tetapi pilihan terbaik tergantung kebutuhan, biaya, dan kondisi jalan.",
    mind: ["Kinerja", "Kompatibilitas", "Keamanan", "Kemudahan", "Biaya"],
    caseQuestion: "Sebuah sekolah ingin mengganti OS komputer lab. Pilihannya Windows atau Linux. Apa kriteria evaluasi yang harus dipakai sebelum memutuskan?",
    caseAnswer: [
      "Cek aplikasi wajib sekolah: apakah tersedia di Windows/Linux atau punya alternatif.",
      "Cek kemampuan guru dan siswa dalam menggunakan OS tersebut.",
      "Hitung biaya lisensi, pelatihan, maintenance, dan dukungan teknis.",
      "Uji performa di komputer lab yang ada.",
      "Nilai keamanan, update, dan kemudahan administrasi sebelum memilih."
    ]
  }
];

const glossary = [
  ["Kernel", "Bagian inti OS yang mengatur CPU, memori, proses, dan perangkat keras."],
  ["File System", "Aturan OS untuk menyimpan dan mengatur file di media penyimpanan."],
  ["Direktori", "Folder yang dipakai untuk mengelompokkan file."],
  ["Path", "Alamat lokasi file atau folder di komputer."],
  ["Metadata", "Informasi tambahan tentang file, seperti ukuran, tanggal, dan pemilik."],
  ["Permission", "Izin untuk membaca, menulis, menjalankan, atau menghapus file."],
  ["Driver", "Program penghubung antara OS dan perangkat keras."],
  ["I/O", "Input/Output, yaitu proses masuk dan keluarnya data dari perangkat."],
  ["Buffer", "Tempat penyimpanan sementara agar aliran data lebih lancar."],
  ["Interrupt", "Sinyal dari perangkat agar CPU segera memberi perhatian."],
  ["Spooling", "Sistem antrean pekerjaan I/O, sering dipakai pada printer."],
  ["HDD", "Media penyimpanan dengan piringan berputar."],
  ["SSD", "Media penyimpanan cepat berbasis memori flash."],
  ["Partisi", "Pembagian disk menjadi beberapa bagian logis."],
  ["Fragmentasi", "Kondisi file tersimpan terpisah-pisah sehingga akses bisa lambat."],
  ["Defragmentasi", "Proses merapikan potongan file pada HDD."],
  ["Authentication", "Proses membuktikan identitas user, misalnya login password."],
  ["Authorization", "Proses menentukan izin setelah user berhasil login."],
  ["Privilege", "Tingkat hak akses user atau program."],
  ["Root/Admin", "Akun dengan hak akses tertinggi pada sistem."],
  ["Encryption", "Mengubah data menjadi bentuk sulit dibaca tanpa kunci."],
  ["Firewall", "Penyaring lalu lintas jaringan berdasarkan aturan keamanan."],
  ["VPN", "Jalur koneksi terenkripsi yang membuat komunikasi lebih aman."],
  ["DNS", "Layanan yang menerjemahkan nama domain menjadi alamat IP."],
  ["DHCP", "Layanan yang memberi alamat IP otomatis ke perangkat."],
  ["Client", "Komputer/perangkat yang meminta layanan."],
  ["Server", "Komputer yang menyediakan layanan untuk client."],
  ["Phishing", "Penipuan untuk mencuri data login atau informasi penting."],
  ["IDS", "Sistem yang mendeteksi aktivitas jaringan mencurigakan."],
  ["IPS", "Sistem yang mendeteksi sekaligus mencegah serangan jaringan."],
  ["Sandbox", "Pembatas aplikasi agar tidak bebas mengakses bagian sistem lain."],
  ["App Permission", "Izin aplikasi untuk memakai kamera, lokasi, kontak, dan fitur lain."],
  ["Sideloading", "Memasang aplikasi dari luar toko aplikasi resmi."],
  ["Remote Wipe", "Menghapus data perangkat dari jarak jauh."],
  ["Patch", "Perbaikan software untuk menutup bug atau celah keamanan."],
  ["Task Manager", "Alat untuk melihat proses dan penggunaan CPU, RAM, disk, dan jaringan."],
  ["Log", "Catatan kejadian sistem yang membantu mencari penyebab error."],
  ["Backup", "Salinan data untuk pemulihan saat data utama rusak atau hilang."],
  ["Compatibility", "Kecocokan OS dengan aplikasi dan perangkat yang dibutuhkan."],
  ["Stability", "Kemampuan sistem berjalan lancar tanpa sering crash."],
  ["Usability", "Kemudahan sistem digunakan oleh user."],
  ["Malware", "Software berbahaya seperti virus, trojan, spyware, atau ransomware."]
];

const chapterGrid = document.getElementById("chapterGrid");
const chapterDetail = document.getElementById("chapterDetail");
const chapterSearch = document.getElementById("chapterSearch");
const glossaryGrid = document.getElementById("glossaryGrid");
const glossarySearch = document.getElementById("glossarySearch");
const caseOutput = document.getElementById("caseOutput");
const randomCaseBtn = document.getElementById("randomCaseBtn");
const showAllCasesBtn = document.getElementById("showAllCasesBtn");
const resetProgress = document.getElementById("resetProgress");
const backTop = document.getElementById("backTop");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const progressKey = "uas-os-progress";
let progress = JSON.parse(localStorage.getItem(progressKey) || "{}");
let activeChapterNo = null;

const mindPositions = [
  { top: "6%", left: "50%", transform: "translateX(-50%)" },
  { top: "50%", left: "5%", transform: "translateY(-50%)" },
  { top: "50%", right: "5%", transform: "translateY(-50%)" },
  { bottom: "6%", left: "18%" },
  { bottom: "6%", right: "18%" }
];

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderChapters(list = chapters) {
  if (!list.length) {
    chapterGrid.innerHTML = `<div class="no-result">Bab tidak ditemukan. Coba kata kunci lain.</div>`;
    return;
  }

  chapterGrid.innerHTML = list.map(ch => {
    const done = progress[ch.no];
    const active = activeChapterNo === ch.no ? "active" : "";
    return `
      <button class="chapter-card ${active}" data-no="${ch.no}">
        <span class="chapter-number">${ch.no}</span>
        <h3>${escapeHTML(ch.title)}</h3>
        <p>${escapeHTML(ch.short)}</p>
        <span class="progress-pill ${done ? "done" : ""}">${done ? "✓ Sudah dipelajari" : "○ Belum dipelajari"}</span>
      </button>
    `;
  }).join("");
}

function renderMindMap(chapter) {
  const nodes = chapter.mind.map((item, index) => {
    const pos = mindPositions[index] || mindPositions[0];
    const style = Object.entries(pos).map(([key, value]) => `${key}: ${value}`).join("; ");
    return `<div class="mindmap-node" style="${style}">${escapeHTML(item)}</div>`;
  }).join("");

  return `
    <div class="mindmap" aria-label="Mind map ${escapeHTML(chapter.title)}">
      <div class="mindmap-center">Bab ${chapter.no}<br>${escapeHTML(chapter.title.split(" ")[0])}</div>
      ${nodes}
    </div>
  `;
}

function renderDetail(chapter) {
  activeChapterNo = chapter.no;
  renderChapters(filterChapters(chapterSearch.value));

  chapterDetail.innerHTML = `
    <div class="detail-header">
      <div>
        <span class="tag">Bab ${chapter.no}</span>
        <h3>${escapeHTML(chapter.title)}</h3>
        <p>${escapeHTML(chapter.goal)}</p>
      </div>
      <div class="detail-actions">
        <button class="btn small" id="markDoneBtn">${progress[chapter.no] ? "Tandai Belum" : "Tandai Selesai"}</button>
        <button class="btn small" id="copyCaseBtn">Salin Soal</button>
      </div>
    </div>

    <div class="detail-layout">
      <div class="panel">
        <h4>Bahasa sederhananya</h4>
        <p class="simple-box">${escapeHTML(chapter.simple)}</p>
        <h4>Analogi cepat</h4>
        <p>${escapeHTML(chapter.analogy)}</p>
      </div>

      <div class="panel">
        <h4>Poin penting</h4>
        <ul>${chapter.points.map(point => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
      </div>

      <div class="panel">
        <h4>Mind map bab ini</h4>
        ${renderMindMap(chapter)}
      </div>

      <div class="panel">
        <h4>Contoh studi kasus</h4>
        <p><strong>Soal:</strong> ${escapeHTML(chapter.caseQuestion)}</p>
        <button class="btn primary toggle-answer">Lihat contoh jawaban</button>
        <div class="answer">
          <strong>Contoh arah jawaban:</strong>
          <ul>${chapter.caseAnswer.map(ans => `<li>${escapeHTML(ans)}</li>`).join("")}</ul>
        </div>
      </div>
    </div>
  `;

  document.getElementById("markDoneBtn").addEventListener("click", () => {
    progress[chapter.no] = !progress[chapter.no];
    if (!progress[chapter.no]) delete progress[chapter.no];
    saveProgress();
    renderDetail(chapter);
  });

  document.getElementById("copyCaseBtn").addEventListener("click", async () => {
    const text = `Bab ${chapter.no} - ${chapter.title}\nSoal studi kasus:\n${chapter.caseQuestion}`;
    try {
      await navigator.clipboard.writeText(text);
      document.getElementById("copyCaseBtn").textContent = "Tersalin ✓";
      setTimeout(() => document.getElementById("copyCaseBtn").textContent = "Salin Soal", 1200);
    } catch {
      alert(text);
    }
  });

  chapterDetail.querySelector(".toggle-answer").addEventListener("click", (event) => {
    const answer = event.target.nextElementSibling;
    answer.classList.toggle("show");
    event.target.textContent = answer.classList.contains("show") ? "Sembunyikan jawaban" : "Lihat contoh jawaban";
  });

  chapterDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function filterChapters(query) {
  const q = query.trim().toLowerCase();
  if (!q) return chapters;
  return chapters.filter(ch =>
    `${ch.no} ${ch.title} ${ch.short} ${ch.keywords} ${ch.simple}`.toLowerCase().includes(q)
  );
}

function renderCaseCard(chapter) {
  return `
    <article class="case-card">
      <span class="tag">Bab ${chapter.no}</span>
      <h3>${escapeHTML(chapter.title)}</h3>
      <p><strong>Soal:</strong> ${escapeHTML(chapter.caseQuestion)}</p>
      <button class="btn primary toggle-answer">Lihat kunci arah jawaban</button>
      <div class="answer">
        <strong>Arah jawaban:</strong>
        <ul>${chapter.caseAnswer.map(ans => `<li>${escapeHTML(ans)}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function attachAnswerToggles(scope = document) {
  scope.querySelectorAll(".toggle-answer").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      answer.classList.toggle("show");
      button.textContent = answer.classList.contains("show") ? "Sembunyikan jawaban" : "Lihat kunci arah jawaban";
    });
  });
}

function showRandomCase() {
  const chapter = chapters[Math.floor(Math.random() * chapters.length)];
  caseOutput.innerHTML = renderCaseCard(chapter);
  attachAnswerToggles(caseOutput);
}

function showAllCases() {
  caseOutput.innerHTML = chapters.map(renderCaseCard).join("");
  attachAnswerToggles(caseOutput);
}

function renderGlossary(list = glossary) {
  if (!list.length) {
    glossaryGrid.innerHTML = `<div class="no-result">Istilah tidak ditemukan. Coba kata kunci lain.</div>`;
    return;
  }

  glossaryGrid.innerHTML = list.map(([term, meaning]) => `
    <article class="glossary-card">
      <h3>${escapeHTML(term)}</h3>
      <p>${escapeHTML(meaning)}</p>
    </article>
  `).join("");
}

function filterGlossary(query) {
  const q = query.trim().toLowerCase();
  if (!q) return glossary;
  return glossary.filter(([term, meaning]) => `${term} ${meaning}`.toLowerCase().includes(q));
}

chapterGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".chapter-card");
  if (!card) return;
  const chapter = chapters.find(ch => ch.no === Number(card.dataset.no));
  if (chapter) renderDetail(chapter);
});

chapterSearch.addEventListener("input", () => {
  renderChapters(filterChapters(chapterSearch.value));
});

glossarySearch.addEventListener("input", () => {
  renderGlossary(filterGlossary(glossarySearch.value));
});

randomCaseBtn.addEventListener("click", showRandomCase);
showAllCasesBtn.addEventListener("click", showAllCases);

resetProgress.addEventListener("click", () => {
  progress = {};
  saveProgress();
  renderChapters(filterChapters(chapterSearch.value));
});

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 600);
});

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", () => navLinks.classList.remove("open"));

renderChapters();
renderGlossary();
showRandomCase();
