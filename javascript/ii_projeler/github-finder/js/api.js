// Api'dan kullanıcı verilerini alacak fonksiyon

import { renderUser } from "./ui.js";

const getUser = async (userName) => {
  // Kullanıcı adına göre api'a istek at
  const response = await fetch(`https://api.github.com/users/${userName}`);

  // Api'dan gelen veriyi js nesnesine çevir
  const data = await response.json();

  // Api'dan gelen veriye göre arayüzü renderla

  renderUser(data);
};

export default getUser;
