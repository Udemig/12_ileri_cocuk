// * Javascript Tarih Objesi

// Javascript'de dinamik şekilde tarih verisine erişmek için Date objesi kullanılır.Bu obje içerisindeki metotları kullabilmek için ilk olarak "new" keywordü ile bu objeden bir örnek alırız.Sonrasında bu objenin içerisindeki metotları kullanabiliriz.

const tarih = new Date();

document.write(`Tarih: ${tarih} <br/>`);

// ! getDay(): Tarih objesindeki günün haftanın kaçıncı günü olduğunu bulmak için kullanılır.
document.write(`Haftanın kaçıncı günü: ${tarih.getDay()} <br/>`);

// !getMonth(): Tarih objesi içerisindeki ayın kaçıncı ay olduğunu bulmak için kullanılır.
document.write(`Ay: ${tarih.getMonth() + 1} <br/>`);

// !getDate(): Tarih objesi içerisindeki gün değerine erişmek için kullanılır.
document.write(`Gün: ${tarih.getDate()} <br/>`);

// !getFullYear(): Tarih objesi içerisindeki yıl değerine erişmek için kullanılır.
document.write(`Yıl: ${tarih.getFullYear()} <br/>`);

// !getHours(): Tarih objesi içerisindeki saat değerine erişmek için kullanılır.
document.write(`Saat: ${tarih.getHours()} <br/>`);

// !getMinutes(): Tarih objesi içerisindeki dakika değerine erişmek için kullanılır.
document.write(`Dakika: ${tarih.getMinutes()} <br/>`);

// !getSeconds(): Tarih objesi içerisindeki saniye değerine erişmek için kullanılır.
document.write(`Saniye: ${tarih.getSeconds()} <br/>`);

// !getTime(): 1 Ocak 1970'den bu yana geçen süreyi milisaniye cinsinden döndürür.
document.write(`1970'den bu yana milisaniye: ${tarih.getTime()} <br/>`);

// !toLocaleDateString(): Tarih verisini belirtilen locale parametresine göre formatlamak için kullanılır.Bu metot bizden bir locale parametresi ev birde ayar objesi ister.Ayar objesi içerisinde ay ve yıl değerlerinin kaç basamaktan oluşacağını ay değerinin ise nasıl yazılacağını ayarlayabilmemizi sağlar.
document.write(
  `Formatlı tarih: ${tarih.toLocaleDateString("tr", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })} <br/>`
);

// * API (Application Programing Interface):

// Api'dan veri çekme işlemi asekron şekilde yönetilmelidir.Sekron aynı anda çalışan işlemler demektir.Asekron ise aynı anda değil farklı sıralarla çalışan işlemler demektir.

// Asekron işlemleri yönetmek için async-await ve promise yapısı kullanılabilir.

// Async-await
const getRecipe = async () => {
  const response = await fetch("https://dummyjson.com/recipes");

  console.log(response);
};

// getRecipe();

// promise

const getProducts = () => {
  fetch("https://dummyjson.com/products?limit=5&skip=30")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products);
    });
};
getProducts();
