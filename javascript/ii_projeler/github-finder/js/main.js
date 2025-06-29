import getUser from "./api.js";
import { uiElements } from "./ui.js";

// Formun gönderilmesini izle
uiElements.form.addEventListener("submit", (e) => {
  // Sayfa yenilemesini engelle
  e.preventDefault();

  // Form içerisindeki input'un değerine eriş
  const userName = e.target[0].value;

  // Kullanıcı adı girilmediyse api isteği atma,fonksiyonu durdur
  if (!userName) {
    // Kullanıcıya bildirimde bulun
    alert(`Kullancı adı girilmelidir!`);

    // Fonksiyonu durdur
    return;
  }

  // Form'dan alınan kullanıcı adına göre api isteği at
  getUser(userName);
});
