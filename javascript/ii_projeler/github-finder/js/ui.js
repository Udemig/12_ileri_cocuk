// Arayüz elemalarını bir arada tutan obje
const uiElements = {
  form: document.querySelector("form"),
  resultsContainer: document.querySelector(".results"),
};

// Kullanıcı bilgilerine göre arayüzü renderlayacak fonksiyon

const renderUser = (user) => {
  console.log(user);

  // resultsContainer'ı görünür kılmak için class ekle
  uiElements.resultsContainer.classList.add("show");
  // resultsContainer'ın içeriğini dinamik şekilde renderla

  uiElements.resultsContainer.innerHTML = `      <div class="result-card">
     
        <div class="result-card-left">
          <img
            src="${user.avatar_url}"
            alt="card-image"
          />
          <a href="${user.html_url}" target="_blank">Profili Göster</a>
        </div>
       
        
        <div class="result-card-right">
    
          <div class="info">
            <div>Açık Repolar: <span id="repo-count">${
              user.public_repos
            }</span></div>
            <div>Takipçiler: <span id="followers">${user.followers}</span></div>
            <div>Takip Edilenler: <span id="following">${
              user.following
            }</span></div>
          </div>
       
          <div class="about">
         
            <div class="about-item">
              Hakkında:
              <span id="about"
                >${user.bio}</span
              >
            </div>
     
            <div class="about-item">
              Şirket:
              <span id="company">${user.company}</span>
            </div>
           
            <div class="about-item">
              Websitesi:
              <span id="website">${user.blog}</span>
            </div>
         
            
            <div class="about-item">
              Konum:
              <span id="location">${user.location}</span>
            </div>
          
            
            <div class="about-item">
              Hesap Oluşturma:
              <span id="account-created">${new Date(
                user.created_at
              ).toLocaleDateString("tr")}</span>
            </div>
          </div>
        </div>
      </div>`;
};

export { uiElements, renderUser };
