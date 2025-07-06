import getMenu from "./api.js";
import { renderMenu, uiElements } from "./ui.js";

// Sayfa yüklendiğinde getMenu fonksiyonunu çalıştır
document.addEventListener("DOMContentLoaded", async () => {
  // Api'dan menu elemanlarını al
  const menu = await getMenu();

  // addEventListener tekil elemanlara eklenir.Bu sebeple uiElements.buttons içerisinde yer alan her elemana teker teker erişmeli sonrasında addEventListener eklemeliyiz.
  uiElements.buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Tıklanılan elemanın içerisindeki category değerine eriş
      const selectedCategory = e.target.dataset.category;

      // menu içerisinde seçili category'e ait elemanları al
      const filtredMenu = menu.filter(
        (item) => item.category == selectedCategory
      );

      // Filtrelenen elemanları arayüzde renderla.Ama eğer seçili kategory all ise tüm elemanları renderlasın
      if (selectedCategory == "all") {
        // Seçili kategory all ise
        renderMenu(menu);
        // todo: All durumunda menu elemanlarının doğru şekilde renderlanması sağlanacak
      }
      // Seçili kategory all haricinde yer alan diğer kategorilerse
      renderMenu(filtredMenu);
    });
  });
});
