// contoh program javascript menggunakan if else
// contoh 1
let bilangan = 10;
if (bilangan < 0) {
  console.log(bilangan + " Ini bilangan negatif. ");
} else {
  console.log(bilangan + " Ini bilangan positif.");
}

// contoh 2
let nomorPunggung = 7;
if (nomorPunggung === 7) {
  console.log(nomorPunggung + " Ini nomor punggung Ronaldo.");
} else {
  console.log(nomorPunggung + " Ini bukan nomor punggung Ronaldo.");
}

// contoh program javascript menggunakan nested if
let hargaBarang = 10000;
if (hargaBarang <= 50000) {
  console.log("Akan beli dengan cash.");
} else if (hargaBarang >= 100000 && hargaBarang < 150000) {
  console.log("Minjem dulu seratus.");
} else if (hargaBarang >= 150000 && hargaBarang < 200000) {
  console.log("Pake payLater boleh kali yaa.");
} else {
  console.log("Gak jadi beli dehhh.");
}

// contoh program javascript menggunakan switch case
// contoh 1
let kategori = "Jelek";

switch (kategori) {
  case "Ganteng":
    console.log("Ini cowok idaman banget.");
    break;
  case "Jelek":
    console.log("Aku tidak suka cowok jelek.");
    break;
  default:
    console.log("Tidak masuk kategori.");
}

// contoh 2
let bulan = "Juli";

switch (bulan) {
  case "Januari":
    console.log("Saya akan pergi jalan-jalan ke Jepang.");
    break;
  case "Februari":
    console.log("Saya akan membeli mobil dan rumah baru.");
    break;
  case "Maret":
    console.log("Saya akan memutusakan pacar saya.");
  case "April":
    console.log("Saya akan menjual mobil dan rumah saya.");
    break;
  case "Mei":
    console.log("Saya akan mencalonkan diri jadi presiden di hati kamu.");
    break;
  case "Juni":
    console.log("Saya akan pergi ke Amerika dan bertemu dengan mbak liberty.");
    break;
  case "Juli":
    console.log("Saya akan berangkat umrah bersama keluarga.");
    break;
  case "Agustus":
    console.log("Saya akan sedekah kepada mantan yang terus meminta baikan.");
    break;
  case "September":
    console.log("Saya akan pergi ke bali bersama freya.");
    break;
  case "Oktober":
    console.log("Saya akan membelikan motor untuk adik saya.");
    break;
  case "November":
    console.log("Saya akan lulus kuliah dengan IPK 5.0");
    break;
  case "Desember":
    console.log("Saya akan melamar dia.");
    break;
  default:
    console.log("Masukan bulan yang valid");
}

// contoh program javascript menggunakan for statemwnt
for (let angka = 0; angka <= 10; angka++) {
  console.log("Menampilkan angka: " + angka);
}

// contoh program javascript menggunakan while
let jumlahMobil = 5;
let nomorMobil = 1;
while (nomorMobil <= jumlahMobil) {
  console.log("Mobil " + nomorMobil + " Sedang di luar kota");
  nomorMobil++;
}

// contoh program javascript menggunakan do while
let bilanganX = 0;
do{
    console.log("Menampilkan bilangan: " + bilanganX);
bilanganX++
}while(bilanganX < 10);

// contoh program javascript menggunakan function
function hitungLuasPersegiPanjang(panjang, lebar){
    return panjang * lebar;
}
let = luasPersegiPanjang = hitungLuasPersegiPanjang(15,4);
console.log("Luas persegi panjang dengan panjang 15 dan lebar 4 adalah: " + luasPersegiPanjang);
