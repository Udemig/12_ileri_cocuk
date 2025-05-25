// * Javascript Backtick (Template Literals)

// Javascript'de string ve dinamik değerlerin bir arada kullanımı noktasında string değerleri ve dinamik ifadeleri ya "," yada "+" ile birbirinden ayırmamız gerekir.Bu yazım bizi zorladığından bunu backtick ile tanımlayabiliriz.Bactick (``) şeklinde bir yapıdır.`` içerisinde string ve dinamik ifadeler bir arada kullanılır.Dinamik değerler ${} ile string ifadeler ise direkt olarak yazılır.

const kullanıcıAdı = "Mustafa Emre";
const kullanıcıSoyadı = "Savaşkan";
const kullanıcıYaş = 15;

document.write(
  "Kullanıcı adı: ",
  kullanıcıAdı,
  " kullanıcı soyadı:",
  kullanıcıSoyadı,
  " kullanıcı yaşı:",
  kullanıcıYaş,
  "<br/>"
);

document.write(
  `Kullanıcı adı: ${kullanıcıAdı} kullanıcı soyadı: ${kullanıcıSoyadı} kullanıcı yaşı: ${kullanıcıYaş} <br/>`
);
// * Javascript Diziler (Arrays)

// Javascript diziler'i verilerimizi daha kolay bir şekilde yönetmek için kullanılan bir javascript yapısıdır.Bir dizi tanımlanırken var,let veya const anahtar kelimelerinden biri seçilir,seçildikten sonra diziye bir isim verilir.Verilen isimden sonra = [] oluşturulur.Buradaki [] içerisinde dizinin elemanları tanımlanır.

let öğrenciler = ["Ali", "Ayşe", "Mehmet", "Fatma", "Zeynep"];

document.write(`------------------------------------------------- <br/>`);

// Dizinin elemanlarına erişme
document.write(`Öğrenciler: ${öğrenciler} <br/>`);

// Dizinin belirli bir index'indekindeki elemana erişme
document.write(`Öğrenciler dizisi 1.elemanı: ${öğrenciler[0]} <br/>`);

// Dizinin belirli bir index'indekindeki elemana erişme
document.write(`Öğrenciler dizisi 2.elemanı: ${öğrenciler[1]} <br/>`);

// ! Dizinin sonuna eleman ekleme
öğrenciler.push("Yasin");

document.write(`Öğrenciler-1: ${öğrenciler} <br/>`);

// ! Dizinin başına eleman ekleme
öğrenciler.unshift("Kaan");

document.write(`Öğrenciler-2: ${öğrenciler} <br/>`);

// ! Dizinin sonundaki elemanı kaldırma
öğrenciler.pop();

document.write(`Öğrenciler-3: ${öğrenciler} <br/>`);

// ! Dizinin başındaki elemanı kaldırma
öğrenciler.shift();

document.write(`Öğrenciler-4: ${öğrenciler} <br/>`);

// ! Dizinin elemanlarını sıralama
document.write(`Öğrenciler-5: ${öğrenciler.sort()} <br/>`);

const sayılar = [12, 432, 1223, 536764, 86554, 887653, 23456];

document.write(`Sayılar: ${sayılar} <br/>`);

document.write(
  `Sıralı Sayılar: ${sayılar.sort(function (a, b) {
    return a - b;
  })} <br/>`
);

document.write(`Sıralı Sayılar: ${sayılar.sort((a, b) => a - b)} <br/>`);

// * Javascript Objeler

// Javascript objeler'i içerisinde key-value çiftleri halinde veri tutmamızı sağlayan yapılardır.Objeler verileri daha düzenli şekilde tutmamızı sağlar.

let kullanıcı = {
  isim: "Yusuf",
  soyisim: "Esat",
  yaş: 16,
  hobiler: ["Yüzme", "Futbol", "Basketbol", "Kitap Okuma"],
  kullanıcıTanıtım: function () {
    document.write(
      `Kullanıcı isim: ${this.isim} kullanıcı soyisim: ${this.soyisim} kullanıcı yaş: ${this.yaş} <br/>`
    );
  },
};

// Objeye erişme
// console.log(kullanıcı);

// Obje içerisindeki bir değere erişme

// console.log(kullanıcı.isim);

// Bir obje içerisindeki bir fonkisyon'da obje içerisindeki değerlere erişmek istersek erişmek istediğimiz değerin önine "this" keyword'ünü eklmemiz gerekir.

kullanıcı.kullanıcıTanıtım();

// Bir dizi içerisinde obje kullanımı

let students = [
  { id: 1, isim: "Muhammed", soyisim: "Yasir", yaş: 15, puan: 100 },
  { id: 2, isim: "Mustafa Emre", soyisim: "Savaş", yaş: 16, puan: 90 },
  { id: 3, isim: "Hakan", soyisim: "Aydoğmuş", yaş: 30, puan: 44 },
  { id: 4, isim: "Yusuf", soyisim: "Esat", yaş: 14, puan: 85 },
  { id: 5, isim: "Yavuz", soyisim: "Kol", yaş: 40, puan: 50 },
];

console.table(students);

// ! find: Bir dizi içerisindeki elemanlardan birini bir koşula göre bulmak için kullanılır.Hangi elemanın hangi koşula göre bulunacağını bir callback fonksiyon ile söylememizi ister.

// todo: students dizi içerisinde ismi Hakan olan kullanıcıyı bul.

const bulunanKullanıcı = students.find((student) => student.isim == "Hakan");

// console.log(bulunanKullanıcı);

// todo: students dizi içerisinde puanı 90 olan kullanıcıyı bul

const doksanAlanKullanıcı = students.find((kullanıcı) => kullanıcı.puan == 90);

// console.log(doksanAlanKullanıcı);

// ! filter: Bir dizi içerisindeki elemanları bir koşula göre filtrelemek için kullanılır.Bu metot hangi elemanların filtreleneceğini bir callback fonksiyon ile söylememizi ister.

// todo: students dizisi içerisindeki öğrencilerden puanı 60'dan küçük olan kullanıcılara erişme

const altmışdanKüçükOlanKullanıcılar = students.filter(
  (student) => student.puan < 60
);

// console.log(altmışdanKüçükOlanKullanıcılar);

// ! Özetle find ve filter metotları bir dizi içerisindeki elemanları bir koşula göre bulmak için kullanılır.find belirtilen koşulu sağlayan ilk elemanı bulurken filter ise belirtilen koşulu sağlayan tüm elemanları almak için kullanılır.

const altmışdanKüçükOlanKullanıcılar1 = students.find(
  (student) => student.puan < 60
);

// console.log(altmışdanKüçükOlanKullanıcılar1);

// ! slice: Bir dizideki elemanlardan belirli bir aralığı almak için kullanılır.Bu metot bizden bir başlangıç ev bitiş değeri ister.Birinci değer zorunludur,ikincş değer ise opsiyoneldir.Yani ikinci değer zorunlu değildir.İkinci değer girilmezse dizi elemanları kaç tane ise belirtilen birinci index'deki elemandan son elemana kadar alır.

const öğrenciler1 = students.slice(1);

öğrenciler1.forEach((öğrenci) => {
  console.log(`${öğrenci.isim}`);
});

// ! join: Bir dizinin elemanlarının hangi ayraca göre ayrılacağını belirlemek için kullanılır.

const öğrenciler2 = öğrenciler.join(" // - // - // ");

console.log(öğrenciler2);
