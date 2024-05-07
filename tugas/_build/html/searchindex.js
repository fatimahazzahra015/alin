Search.setIndex({"docnames": ["Aljabar Matriks", "Determinan", "Intro", "Matriks Inversi", "Sistem Linier Dan Metode Eliminasi Gaussias", "_sources/Aljabar Matriks", "_sources/Sistem Linier Dan Metode Eliminasi Gaussias", "_sources/intro"], "filenames": ["Aljabar Matriks.ipynb", "Determinan.ipynb", "Intro.md", "Matriks Inversi.ipynb", "Sistem Linier Dan Metode Eliminasi Gaussias.ipynb", "_sources/Aljabar Matriks.ipynb", "_sources/Sistem Linier Dan Metode Eliminasi Gaussias.ipynb", "_sources/intro.md"], "titles": ["<strong>ALJABAR MATRIKS</strong>", "<strong>DETERMINAN</strong>", "<strong>KOMPUTASI ALJABAR LINIER DAN MATRIKS</strong>", "<strong>MATRIK INVERSI</strong>", "<strong>SISTEM LINIER DAN METODE ELIMINASI GAUSSIAS</strong>", "<strong>ALJABAR MATRIKS</strong>", "<strong>SISTEM LINIER DAN METODE ELIMINASI GAUSSIAS</strong>", "<strong>HALO!!</strong>"], "terms": {"adalah": [0, 1, 2, 3, 4, 5, 6], "susunan": [0, 5], "bilagan": [0, 5], "real": [0, 5], "atau": [0, 1, 5], "elemen": [0, 1, 3, 4, 5, 6], "yang": [0, 2, 3, 4, 5, 6, 7], "disusun": [0, 5], "dalam": [0, 1, 2, 3, 4, 5, 6], "bari": [0, 1, 3, 4, 5, 6], "dan": [0, 3, 5], "kolom": [0, 1, 3, 5], "sehingga": [0, 4, 5, 6], "membentuk": [0, 5], "persegi": [0, 1, 3, 5], "ataupun": [0, 5], "panjang": [0, 5], "setiap": [0, 1, 3, 5], "memiliki": [0, 1, 3, 4, 5, 6], "posisi": [0, 4, 5, 6], "unik": [0, 3, 5], "ditentukan": [0, 5], "oleh": [0, 3, 4, 5, 6], "kolomnya": [0, 5], "misalnya": [0, 1, 5], "2x3": [0, 5], "suatu": [0, 1, 4, 5, 6], "biasa": [0, 5], "diberi": [0, 5], "nama": [0, 4, 5, 6], "menggunakan": [0, 5], "huruf": [0, 5], "kapit": [0, 5], "seperti": [0, 3, 5], "A": [0, 1, 3, 4, 6], "b": [0, 1, 3, 4, 6], "dll": [0, 5], "elemennya": [0, 3, 4, 5, 6], "dinyatakan": [0, 5], "kecil": [0, 5], "berikut": [0, 4, 6], "contoh": [0, 1, 3, 4, 6], "begin": [0, 1], "equat": [0, 1], "left": [0, 1], "arrai": [0, 1, 3, 4, 5, 6], "cccc": [0, 1], "5": [0, 1, 3, 4, 6], "8": [0, 1, 3, 4, 6], "end": [0, 1], "right": [0, 1], "0": [0, 1, 3, 4, 6], "7": [0, 1, 4, 6], "9": [0, 1, 4, 6], "6": [0, 1], "c": [0, 1, 3, 5], "saat": [0, 5], "dibuat": [0, 5], "informasi": [0, 5], "ini": [0, 4, 5, 6], "disimpan": [0, 5], "sebagai": [0, 5], "bagian": [0, 5], "dari": [0, 1, 3, 4, 5, 6], "objek": [0, 5], "dapat": [0, 1, 4, 5, 6], "diaks": [0, 5], "metod": [0, 5], "disebut": [0, 5], "shape": [0, 3, 4, 5, 6], "jika": [0, 1, 3, 4, 5, 6], "sebuah": [0, 1, 3, 5], "itu": [0, 3, 4, 5, 6], "sendiri": [0, 3, 4, 5, 6], "dua": [0, 4, 5, 6], "nilai": [0, 1, 3, 4, 5, 6], "masukan": [0, 5], "pertama": [0, 1, 4, 5, 6], "indek": [0, 1, 5], "jumlah": [0, 4, 5, 6], "kedua": [0, 1, 4, 5, 6], "import": [0, 1, 3, 4, 5, 6], "np": [0, 1, 3, 4, 5, 6], "d": [0, 1, 3, 5], "print": [0, 1, 3, 4, 5, 6], "digunakan": [0, 1, 3, 5], "untuk": [0, 1, 2, 4, 5, 6], "melihat": [0, 5], "banyak": [0, 5], "serangkaian": [0, 5], "tindakan": [0, 5], "dilakukan": [0, 4, 5, 6], "baik": [0, 5], "mengubah": [0, 4, 5, 6], "menggabungkan": [0, 5], "beberapa": [0, 2, 5, 7], "sere": [0, 5], "melibatkan": [0, 5], "penambahan": [0, 5], "berada": [0, 4, 5, 6], "sama": [0, 3, 5], "ordo": [0, 5], "artinya": [0, 5], "haru": [0, 4, 5, 6], "12": [0, 5], "10": [0, 5], "14": [0, 5], "n": [0, 1, 3, 4, 5, 6], "sifat": [0, 2, 5], "di": [0, 1, 2, 3, 4, 5, 6], "ata": [0, 5], "merupakan": [0, 3, 5], "komutatif": [0, 5], "karena": [0, 1, 2, 5], "bukan": [0, 4, 5, 6], "tidak": [0, 1, 3, 4, 5, 6], "melakukan": [0, 1, 5], "ukuran": [0, 1, 5], "mxn": [0, 5], "maka": [0, 1, 2, 3, 4, 5, 6], "nxp": [0, 5], "hasil": [0, 1, 3, 5], "tersebut": [0, 1, 4, 5, 6], "akan": [0, 2, 4, 5, 6, 7], "menghasilkan": [0, 3, 5], "baru": [0, 5], "mxp": [0, 5], "hasilnya": [0, 5], "x": [0, 5], "31": [0, 5], "37": [0, 5], "17": [0, 5], "20": [0, 5], "59": [0, 5], "86": [0, 5], "93": [0, 5], "64": [0, 5], "35": [0, 5], "57": [0, 5], "47": [0, 5], "28": [0, 5], "40": [0, 1, 5], "109": [0, 5], "18": [0, 5], "29": [0, 5], "asosiasi": [0, 5], "ab": [0, 3, 5], "bc": [0, 5], "457": [0, 5], "74": [0, 5], "475": [0, 5], "1237": [0, 5], "249": [0, 5], "skalar": [0, 1, 5], "ca": [0, 5], "cb": [0, 5], "111": [0, 5], "51": [0, 5], "60": [0, 5], "177": [0, 5], "21": [0, 1, 5], "258": [0, 5], "279": [0, 5], "identita": [0, 1, 3, 5], "ai": [0, 5], "ia": [0, 5], "i": [0, 1, 3, 4, 5, 6], "berlaku": [0, 5], "kumutatif": [0, 5], "ba": [0, 5], "24": [0, 5], "53": [0, 4, 5, 6], "52": [0, 5], "41": [0, 5], "23": [0, 4, 5, 6], "diperoleh": [0, 5], "cara": [0, 5], "menukar": [0, 3, 5], "menjadi": [0, 4, 5, 6], "sebaliknya": [0, 5], "berukuran": [0, 5], "m": [0, 3, 4, 5, 6], "ct": [0, 5], "transposr": [0, 5], "meng": [0, 5], "c_t": [0, 5], "z": [0, 3, 5], "c_transpos": [0, 5], "y": [0, 3, 5], "p": [0, 5], "disimpulkan": [0, 5], "bahwa": [0, 5], "161": [0, 5], "90": [0, 5], "85": [0, 5], "145": [0, 5], "32": [0, 5], "16": [0, 5], "36": [0, 5], "def": [0, 3, 4, 5, 6], "matrix1": [0, 5], "matrix2": [0, 5], "len": [0, 5], "return": [0, 3, 4, 5, 6], "none": [0, 5], "result": [0, 5], "_": [0, 5], "rang": [0, 3, 4, 5, 6], "j": [0, 1, 3, 4, 5, 6], "k": [0, 1, 3, 4, 5, 6], "tampilan_hasil": [0, 5], "matrix": [0, 1, 5], "selisih": 1, "antara": 1, "perkalian": 1, "pada": [1, 4, 6], "diagon": [1, 3], "utama": [1, 4, 6], "dengan": [1, 3, 4, 6], "sekund": 1, "hanya": [1, 3], "dituli": 1, "det": 1, "1": [1, 4, 6], "numpi": [1, 3, 4, 6], "2": [1, 4, 6], "3": [1, 4, 6], "inver": 1, "ainv": 1, "invert": 1, "binv": 1, "misalkan": 1, "bujur": 1, "sangakar": 1, "inv": 1, "det_a": 1, "linalg": 1, "f": [1, 3], "det_ainv": 1, "det_b": 1, "det_binv": 1, "16666666666666666": 1, "merubah": 1, "tanda": 1, "e": 1, "det_": 1, "round": [1, 4, 6], "det_f": 1, "kelipatan": [1, 4, 6], "lain": [1, 2], "g": [1, 3], "det_g": 1, "anxn": 1, "nxn": 1, "ka": 1, "det_ka": 1, "ke": [1, 3, 4, 6], "det_k": 1, "t": [1, 3], "ta": 1, "tb": 1, "tc": 1, "h": [1, 3], "det_h": 1, "sangkar": 1, "semua": [1, 4, 6], "entri": [1, 3, 4, 6], "dibawah": 1, "bernilai": [1, 4, 6], "nol": [1, 4, 6], "bentuk": [1, 4, 6], "d1": 1, "d2": [1, 3], "dn": 1, "operasi": [1, 4, 6], "element": [1, 4, 6], "terhadap": 1, "inversnya": [1, 3], "tranpus": 1, "tranpos": [1, 3], "e_tran": 1, "transpos": 1, "det_etran": 1, "salah": [1, 2], "satu": [1, 2, 3], "menghitung": 1, "langkah": 1, "umum": 1, "pilih": 1, "tertentu": 1, "dipilih": 1, "hitung": 1, "kofaktornya": 1, "a_": 1, "ij": 1, "dikalikan": [1, 3, 4], "minor": 1, "m_": 1, "mana": [1, 3], "dihasilkan": 1, "asli": 1, "menghapu": 1, "kalikan": [1, 4, 6], "bersangkutan": 1, "kemudian": [1, 4, 6], "tambahkan": [1, 6], "memberikan": 1, "rumu": 1, "text": 1, "time": 1, "c_": 1, "528": 1, "align": 1, "vmatrix": 1, "gunakan": 1, "aturan": 1, "3x3": 1, "mase": 1, "2x2": 1, "15": [1, 3], "105": 1, "jadi": 1, "ketiga": [1, 4, 6], "keduanya": 1, "juga": [1, 3], "keempat": 1, "147": 1, "141": 1, "keseluruhan": 1, "mengalikan": [1, 3, 4], "yaitu": 1, "423": 1, "disini": [2, 7], "saya": 2, "membagikan": [2, 7], "materi": [2, 7], "telah": [2, 3, 7], "pelajari": [2, 7], "perkuliahan": [2, 7], "tentang": 2, "teori": 2, "mengkaji": 2, "implementasi": 2, "disiplin": 2, "ilmu": [2, 3], "terutama": 2, "sain": 2, "data": 2, "cabang": 2, "matematika": [2, 3], "mempelajari": 2, "sistem": [2, 3], "persamaan": [2, 4, 6], "konsep": 2, "sangat": 2, "berguna": 2, "fisika": 2, "ekonomi": 2, "sosial": 2, "alam": 2, "teknik": 2, "penerapannya": 2, "lua": 2, "mata": 2, "kuliah": 2, "perlu": 2, "dipelajari": 2, "lebih": [2, 4, 6], "mendalam": 2, "ketika": 3, "asalnya": 3, "utamanya": 3, "tempat": 3, "lainnya": [3, 4, 6], "simbol": 3, "biasanya": 3, "dilambangkan": 3, "asal": 3, "berbagai": 3, "bidang": 3, "terapan": 3, "linear": [3, 4, 6], "transformasi": 3, "pemrosesan": 3, "sinyal": 3, "dimiliki": 3, "karna": 3, "yanng": 3, "ada": [3, 4, 6], "non": 3, "singular": 3, "determinannya": 3, "kali": [3, 6], "invernya": 3, "secara": 3, "terbalik": 3, "yz": 3, "tranposenya": 3, "rowswap": [3, 4, 6], "l": [3, 4, 6], "duplic": [3, 4, 6], "row": [3, 4, 6], "swap": [3, 4, 6], "number": [3, 4, 6], "column": [3, 4, 6], "copi": [3, 4, 6], "astyp": [3, 4, 6], "float64": [3, 4, 6], "temp": [3, 4, 6], "rowscal": [3, 4, 6], "scale": [3, 4, 6], "multipli": [3, 4, 6], "rowadd": [3, 4, 6], "modif": [3, 4, 6], "The": [3, 4, 6], "new": [3, 4, 6], "valu": [3, 4, 6], "old": [3, 4, 6], "ad": [3, 4, 6], "4x_1": 3, "0x_2": 3, "0x_3": 3, "0x_4": 3, "4": [3, 4, 6], "0x_1": 3, "2x_3": 3, "1x_2": [3, 4], "1x_1": [3, 4], "1x_4": 3, "25": 3, "menambah": 3, "sudah": [3, 4, 6], "mencari": 3, "x1": [3, 4, 6], "x2": [3, 4, 6], "x3": [3, 4, 6], "x4": 3, "pembuktian": 3, "2x_2": [3, 4, 6], "x_4": 3, "22": 3, "x_1": [3, 4, 6], "1x_3": [3, 4], "2x_4": 3, "a2": [3, 4, 6], "b2": 3, "c2": 3, "e2": 3, "f2": 3, "g2": 3, "h2": 3, "3x_1": 3, "2x_1": [3, 4, 6], "4x_3": 3, "a3": [3, 4, 6], "b3": 3, "c3": 3, "d3": 3, "e3": 3, "f3": 3, "g3": 3, "h3": 3, "i3": 3, "j3": 3, "gaussian": [4, 6], "gauss": [4, 6], "ditemukan": [4, 6], "carl": [4, 6], "friedrich": [4, 6], "dimanfaatkan": [4, 6], "memecahkan": [4, 6], "merepresentasikan": [4, 6], "matrik": [4, 6], "lalu": [4, 6], "diubah": [4, 6], "kebentuk": [4, 6], "eselon": [4, 6], "melalui": [4, 6], "diselesaikan": [4, 6], "substitusi": [4, 6], "balik": [4, 6], "memenuhi": [4, 6], "kriteria": [4, 6], "didalam": [4, 6], "terdapat": [4, 6], "semuanya": [4, 6], "bilangan": [4, 6], "tak": [4, 6], "kalau": [4, 6], "dikelompokkan": [4, 6], "diletakkan": [4, 6], "dibagian": [4, 6], "bawah": [4, 6], "berurutan": [4, 6], "angka": [4, 6], "rendah": [4, 6], "kekanan": [4, 6], "diatasnya": [4, 6], "tiga": [4, 6], "tukarkan": [4, 6], "apa": [4, 6], "pun": [4, 6], "gantikan": [4, 6], "selesaikan": [4, 6], "8x_1": [4, 6], "9x_2": [4, 6], "x_3": [4, 6], "19": [4, 6], "3x_3": [4, 6], "x_2": [4, 6], "deklarasikan": [4, 6], "perhitungan": [4, 6], "selanjutnya": [4, 6], "buat": [4, 6], "kita": [4, 6], "memberi": [4, 6], "bisa": [4, 6], "memanggilnya": [4, 6], "lagi": [4, 6], "nanti": [4, 6], "memindahkan": 4, "a1": [4, 6], "menambahkan": 4, "13": [4, 6], "a4": [4, 6], "28571429": [4, 6], "57142857": [4, 6], "a5": [4, 6], "85714286": [4, 6], "71428571": [4, 6], "a6": [4, 6], "terakhir": [4, 6], "tinggal": [4, 6], "mengubahnya": [4, 6], "kembali": [4, 6], "28571429x_3": [4, 6], "pindahkan": 6, "persamaanya": 6, "semoga": 7, "bermanfaat": 7, "yaa": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"aljabar": [0, 2, 5], "matrik": [0, 1, 2, 3, 5], "pengertian": [0, 3, 5], "implementasi": [0, 5], "dengan": [0, 5], "numpi": [0, 5], "operasi": [0, 5], "pada": [0, 5], "1": [0, 3, 5], "penjumlahan": [0, 5], "2": [0, 3, 5], "pengurangan": [0, 5], "3": [0, 3, 5], "perkalian": [0, 5], "4": [0, 1, 5], "transpos": [0, 5], "program": [0, 5], "determinan": 1, "sifat": [1, 3], "segitiga": 1, "ata": 1, "ekspansi": 1, "kofaktor": 1, "berikut": [1, 5], "ini": 1, "merupakan": 1, "x": 1, "yang": 1, "akan": 1, "dicari": 1, "determinannya": 1, "menggunakan": 1, "metod": [1, 4, 6], "langsung": 1, "dan": [1, 2, 4, 6], "manual": 1, "pembuktian": 1, "komputasi": 2, "linier": [2, 4, 6], "inversi": 3, "inver": 3, "persamaan": 3, "sistem": [4, 6], "eliminasi": [4, 6], "gaussia": [4, 6], "contoh": 5, "begin": 5, "align": 5, "A": 5, "bmatrix": 5, "5": 5, "8": 5, "end": 5, "b": 5, "0": 5, "7": 5, "9": 5, "6": 5, "halo": 7, "selamat": 7, "datang": 7, "di": 7, "websit": 7, "saya": 7}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"ALJABAR MATRIKS": [[0, "aljabar-matriks"], [5, "aljabar-matriks"]], "Pengertian Matriks:": [[0, "pengertian-matriks"], [5, "pengertian-matriks"]], "Implementasi dengan Numpy": [[0, "implementasi-dengan-numpy"], [5, "implementasi-dengan-numpy"]], "Operasi pada Matriks": [[0, "operasi-pada-matriks"], [5, "operasi-pada-matriks"]], "1. Penjumlahan Matriks :": [[0, "penjumlahan-matriks"]], "2. Pengurangan Matriks:": [[0, "pengurangan-matriks"]], "3. Perkalian Matriks:": [[0, "perkalian-matriks"]], "4. Transpose Matriks": [[0, "transpose-matriks"]], "Program Perkalian Matriks": [[0, "program-perkalian-matriks"], [5, "program-perkalian-matriks"]], "DETERMINAN": [[1, "determinan"]], "Sifat - Sifat Determinan :": [[1, "sifat-sifat-determinan"]], "Matriks Segitiga Atas": [[1, "matriks-segitiga-atas"]], "Ekspansi Kofaktor": [[1, "ekspansi-kofaktor"]], "Berikut ini merupakan matriks 4 X 4 yang akan dicari determinannya menggunakan metode langsung dan metode manual": [[1, "berikut-ini-merupakan-matriks-4-x-4-yang-akan-dicari-determinannya-menggunakan-metode-langsung-dan-metode-manual"]], "Pembuktian :": [[1, "pembuktian"]], "KOMPUTASI ALJABAR LINIER DAN MATRIKS": [[2, "komputasi-aljabar-linier-dan-matriks"]], "MATRIK INVERSI": [[3, "matrik-inversi"]], "Pengertian :": [[3, "pengertian"]], "Sifat-sifat Matriks invers :": [[3, "sifat-sifat-matriks-invers"]], "Persamaan 1": [[3, "persamaan-1"]], "Persamaan 2 :": [[3, "persamaan-2"]], "Persamaan 3 :": [[3, "persamaan-3"]], "SISTEM LINIER DAN METODE ELIMINASI GAUSSIAS": [[4, "sistem-linier-dan-metode-eliminasi-gaussias"], [6, "sistem-linier-dan-metode-eliminasi-gaussias"]], "Berikut Contoh Matriks": [[5, "berikut-contoh-matriks"]], "1.Penjumlahan Matriks :": [[5, "penjumlahan-matriks"]], "\\begin{align*}\nA=\n\\begin{bmatrix}\n3&1&4\\\n5&2&1\\\n2&8&5\n\\end{bmatrix}\n&&\nB=\n\\begin{bmatrix}\n-4&0&8\\\n0&7&9\\\n3&6&1\n\\end{bmatrix}\n&&\nA + B =\n\\begin{bmatrix}\n3+(-4)&1+0&4+8\\\n5+0&2+7&1+9\\\n2+3&8+6&5+1\n\\end{bmatrix}": [[5, "begin-align-a-begin-bmatrix-3-1-4-5-2-1-2-8-5-end-bmatrix-b-begin-bmatrix-4-0-8-0-7-9-3-6-1-end-bmatrix-a-b-begin-bmatrix-3-4-1-0-4-8-5-0-2-7-1-9-2-3-8-6-5-1-end-bmatrix"]], "2.Pengurangan Matriks:": [[5, "pengurangan-matriks"]], "\\begin{align*}\nA=\n\\begin{bmatrix}\n3&1&4\\\n5&2&1\\\n2&8&5\n\\end{bmatrix}\n&&\nB=\n\\begin{bmatrix}\n-4&0&8\\\n0&7&9\\\n3&6&1\n\\end{bmatrix}\n&&\nA - B =\n\\begin{bmatrix}\n3-(-4)&1-0&4-8\\\n5-0&2-7&1-9\\\n2-3&8-6&5-1\n\\end{bmatrix}": [[5, "id1"]], "3.Perkalian Matriks:": [[5, "perkalian-matriks"]], "4.Transpose Matriks": [[5, "transpose-matriks"]], "HALO!!": [[7, "halo"]], "SELAMAT DATANG DI WEBSITE SAYA": [[7, "selamat-datang-di-website-saya"]]}, "indexentries": {}})