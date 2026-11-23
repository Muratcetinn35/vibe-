const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
    "Merhaba, Vibe NFC hakkında bilgi almak istiyorum.%0A%0A" +
    "Ad Soyad: " + name + "%0A" +
    "Telefon: " + phone + "%0A" +
    "İlgilendiğim çözüm: " + service + "%0A" +
    "Mesaj: " + message;

  const whatsappNumber = "905316430591";

  window.open(
    "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage,
    "_blank"
  );
});