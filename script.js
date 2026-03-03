

if (typeof images === "undefined" || images.length === 0) {
  console.error("Le tableau 'images' est vide ou inexistant. Vérifie images.js !");
} else {

  const imgElement = document.getElementById("daily-image");
  const dateElement = document.getElementById("date-display");


  function displayDate() {
    const today = new Date();

    const days = [
      "Dimanche", "Lundi", "Mardi", "Mercredi",
      "Jeudi", "Vendredi", "Samedi"
    ];

    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const dayName = days[today.getDay()];
    const dayNumber = today.getDate().toString().padStart(2, '0');
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    const formattedDate = `${dayName} ${dayNumber} ${month} ${year}`;

    if (dateElement) {
      dateElement.textContent = formattedDate;
    }
  }

  function getDailyIndex(totalImages) {
    const today = new Date();
    const seed =
      today.getDate() +
      today.getMonth() +
      today.getFullYear();

    return seed % totalImages;
  }


  function setDailyContent() {
    displayDate();

    const index = getDailyIndex(images.length);
    imgElement.src = images[index];
    imgElement.alt = "Selfie du jour";

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0);

    const msUntilMidnight = tomorrow - now;

    setTimeout(setDailyContent, msUntilMidnight);
  }

  setDailyContent();
}