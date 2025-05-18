// * Javascript Değişkenler

var isim = "Mustafa";

document.write("İsim: ", isim, "<br/>");

var isim = "Kaan";

document.write("İsim: ", isim, "<br/>");

// var ile değişken tanımlarken aynı değişkeni tekrardan tanımlayabiliriz.Bu projede güvenlik açıklarına sebep olur.Bu sebeple güncel projelerde var ile değişken tanımlanmaz.Bunun yerine let veya const ile değişkenler tanımlanır.

let ülke = "Amerika";

document.write("Ülke: ", ülke, "<br/>");

// let ülke = "Almanya"; ülke değişkeni hali hazırda tanımlanmış bir değişken olduğundan hata verir.

const plakaNo = 44;

document.write("Plaka No: ", plakaNo, "<br/>");

// const plakaNo = 23; plakaNo değişkeni önceden tanımlanan bir değişken olduğundan tekrar tanımlanamaz.

// ? let ve const arasındaki fark nedir ?

// let ile tanımlanan bir değişkenin değeri sonrasında güncellenebilir.Ama const ile tanımlanan bir değişkenin değeri güncellenemez.

// let ile tanımlanan bir değişkenin değeri sonraki satırlarda atanabilirken const ile tanımlanan bir değişkende değer ataması sonraki satırlarda yapılmaz.Anında değer ataması yapılmalıdır.

let ürün = "Telefon";

document.write("Ürün: ", ürün, "<br/>");

ürün = "Tablet"; // ürün değişkenin değeri güncellendi bundan sonraki satırlarda yeni değere sahip olacak

document.write("Ürün: ", ürün, "<br/>");

const renk = "Mavi";

document.write("Renk: ", renk, "<br/>");

// renk = "Turuncu"; // Sabit değişkene atama yapılamayacağından hata verir.

// document.write("Renk: ", renk, "<br/>");

let sayi;

sayi = 100;

document.write("Sayı: ", sayi, "<br/>");

// const puan; const ile tanımlanan bir değişkenin değeri anında atanmalıdır.

// ! Javascript'de değişken tanımlamak için var,let veya const anahtar kelimeleri kullanılabilir.Fakat var tanımlı bir değişkeni tekrardan tanımlamamıza izin veridiğinden güncel projelerde kullanılmaz.Yerini let ve const'a bırakır.let ve const ile tanımlanan değişkenler tekrardan tanımlanamaz.

// ! let ve const arasındaki fark ise let ile tanımlanan değişkenin değerini güncelleyebiliriz ama const ile tanımlanan değişkenin değerini güncelleyemeyiz.Bir diğer fark ise let ile tanımlanan değişkenin değeri sonraki satırlarda atanabilir ama const ile tanımlanan değişkenlerin değeri anında atanmalıdır.

// * Javascript Fonksiyonlar

function toplama() {
  let sayi1 = 10;
  let sayi2 = 20;

  let toplam = sayi1 + sayi2;

  document.write("Toplam: ", toplam, "<br/>");
}

toplama();

function ortalamaHesapla(a, b, c) {
  let ortalama = (a + b + c) / 3;

  document.write("Ortalama: ", ortalama, "<br/>");
}

ortalamaHesapla(20, 30, 70);

function çiktiVer(isim) {
  return isim;
}

document.write("İsim: ", çiktiVer("Kaan"), "<br/>");

// * Arrow Functions

// Bu metot modern fonksiyon tanımlama yöntemidir.Bir arrow function tanımlamak için let veya const anahtar kelimesinden sonra fonksiyona bir isim verilir.Verilen bu isim'den sonra sırasıyla "=()=>{}" yapısı oluşturulur.Buradaki () içerisinde fonksiyona geçilecek parametreler yazılır {} içerisinde ise fonksiyonun yapması istenen işlem herneyse o kodlanır.

// function toplama() {
//   let sayi1 = 10;
//   let sayi2 = 20;

//   let toplam = sayi1 + sayi2;

//   document.write("Toplam: ", toplam, "<br/>");
// }

// toplama();

// todo: toplama fonksiyonunu arrow function ile yeniden tanımla

let toplamaİşlemi = () => {
  let sayi3 = 44;
  let sayi4 = 32;

  let toplam = sayi3 + sayi4;

  document.write("Toplam: ", toplam, "<br/>");
};

toplamaİşlemi();

// function ortalamaHesapla(a, b, c) {
//   let ortalama = (a + b + c) / 3;

//   document.write("Ortalama: ", ortalama, "<br/>");
// }

// ortalamaHesapla(20, 30, 70);

// todo: ortalamaHesapla fonksiyonunu arrow function ile yeniden tanımla

let ortalamaHesaplaİşlemi = (x, y, z) => {
  let ortalama = (x + y + z) / 3;

  document.write("Ortalama: ", ortalama, "<br/>");
};

ortalamaHesaplaİşlemi(12, 12, 12);

// function çiktiVer(isim) {
//   return isim;
// }

// document.write("İsim: ", çiktiVer("Kaan"), "<br/>");

// todo: çiktiVer fonksiyonunu arrow function ile yeniden tanımla

const çiktiVerİşlemi = (i) => i;

// ! Arrow function'lar return işlemini tek satırda yapabiliyorsa {} ve return kullanmadan tek satırda yapabiliriz.

document.write("İsim: ", çiktiVerİşlemi("Mehmet"), "<br/>");

// ! Arrow function'lar klasik function'ların tüm özelliklerini yapabilen güncel fonksiyonlardır.Tanımlama noktasında klasik functionlardan farklıdır.Satır içi işlemler için bizim işimizi kolaylaştırır.

// * Javascript if-else Yapısı

// Projelerde koşşulu yapılar oluşturmak için if-else kullanılır.if-else ile bir koşula bağlı olarak işlemler yapabiliriz.Ör: Kullanıcı yaşı 18'den büyükse ehliyet alabilir değilse alamaz çıktısı ver

const yaş = 17;

if (yaş > 18) {
  document.write("Ehliyet alabilir", "<br/>");
} else {
  document.write("Ehliyet alamaz", "<br/>");
}

// todo: Kullanıcı kredi notu 50'den küçükse "Kredi alamaz",50-60 arasında ise "50.000TL kredi alabilir",60-70 arasında ise "100.000TL kredi alabilir",70-80 arasında ise "150.000TL kredi alabilir" 80-100 arasında ise "200.000TL kredi alabilir" çıktısı ver

let krediNotu = 81;

if (krediNotu < 50) {
  document.write("Kredi alamaz", "<br/>");
} else if (krediNotu > 50 && krediNotu < 60) {
  document.write("50.000 TL kredi alabilir", "<br/>");
} else if (krediNotu > 60 && krediNotu < 70) {
  document.write("100.000 TL kredi alabilir", "<br/>");
} else if (krediNotu > 70 && krediNotu < 80) {
  document.write("150.000 TL kredi alabilir", "<br/>");
} else {
  document.write("200.000 TL kredi alabilir", "<br/>");
}

// * Javascript switch-case yapısı

// Javascript'de bir değişkenin aldığı belirli değerlere göre işlemler yapabilmek için switch-case yapısı kullanılır.

// switch(){case değer:çalışacakKod} şeklinde oluşturulan yapı () içerisinde değer kontrol edilecek değişkenin adını yazıldıktan sonra bunun değerleri case kısmında karşılanır.

// todo: öğrenciNotu 1 ise "Çok kötü" 2 ise "Kötü" 3 ise "Orta" 4 ise "İyi" 5 ise "Çok iyi" çıktısı veren code-script'i oluşturunuz.

let öğrenciNotu = 8;

switch (öğrenciNotu) {
  case 1:
    document.write("Durum: Çok Kötü", "<br/>");
    break;
  case 2:
    document.write("Durum:  Kötü", "<br/>");
    break;

  case 3:
    document.write("Durum:  Orta", "<br/>");
    break;

  case 4:
    document.write("Durum: İyi", "<br/>");
    break;

  case 5:
    document.write("Durum: Çok iyi", "<br/>");
    break;

  default:
    document.write("Tanımsız Not", "<br/>");
}
