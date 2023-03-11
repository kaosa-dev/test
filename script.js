// DOM elementleri seçiliyor
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const mapButton = document.querySelector("#map-button");

// Veriler, DOM'a yerleştiriliyor
title.textContent = "Şirket Adı";
description.textContent = "Bu şirket hakkında kısa açıklama.";
address.textContent = "1234, Şirket Adı, Şirket Adresi";
email.textContent = "info@sirketadı.com";
phone.textContent = "+90 555 555 55 55";

// Haritada Göster butonu tema uygun hale getiriliyor
mapButton.classList.add("tema-uygun-stil");

// Haritada Göster butonu tıklandığında, Google Haritalar'da şirketin konumu gösterilecek.
mapButton.addEventListener("click", () => {
  const address = "Şirket Adresi";
  const url = "https://www.google.com/maps/place/" + encodeURIComponent(address);
  window.open(url, "_blank");
});

const contactInfo = `
<div class="contact-info">
  <h2>İletişim</h2>
  <ul>
    <li><i class="fas fa-map-marker-alt"></i> Adres: Istanbul/Türkiye</li>
    <li><i class="fas fa-envelope"></i> Email: <a href="mailto:mail@ornek.com">mail@ornek.com</a></li>
    <li><i class="fas fa-phone"></i> Telefon: <a href="tel:+901234567890">+90 (123) 456-7890</a></li>
  </ul>
</div>
`;

const map = '<div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.239727071149!2d28.98768161495812!3d41.04055711124477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabde69b71e469%3A0x8c10bb79f65bf72a!2sIstanbul%20Sapphire!5e0!3m2!1str!2str!4v1584894374456!5m2!1str!2str" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>';

