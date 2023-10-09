var auth = true;

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridFiveDay",
    locale: "fr",
    allDaySlot: false,
    timeZone: "UTC",
    firstDay: 1,
    height: 650,
    slotMinTime: "08:00",
    slotMaxTime: "19:00",
    forceEventDuration: false,
    views: {
      timeGridFiveDay: {
        type: "timeGrid",
        duration: {
          days: 5,
        },
      },
    },
    events: (function () {
      var events = [];
      for (var i = 0; i < jsonData.tables[1].columns.length; i++) {
        var eventData = jsonData.tables[1].columns[i];
        if (auth) {
          var endDate = new Date(eventData.date_et_heure);
          endDate.setTime(endDate.getTime() + 120 * 60 * 1000);

          // Obtenir les composants de date et d'heure de endDate
          var year = endDate.getFullYear();
          var month = String(endDate.getMonth() + 1).padStart(2, "0"); // Le mois est 0-indexé, donc ajoutez 1 et formatez avec deux chiffres
          var day = String(endDate.getDate()).padStart(2, "0");
          var hours = String(endDate.getHours()).padStart(2, "0");
          var minutes = String(endDate.getMinutes()).padStart(2, "0");
          var seconds = String(endDate.getSeconds()).padStart(2, "0");

          // Formatage de endDate au format "YYYY-MM-DDTHH:mm:ss"
          var formattedEndDate =
            year +
            "-" +
            month +
            "-" +
            day +
            "T" +
            hours +
            ":" +
            minutes +
            ":" +
            seconds;

          console.log(
            "Date de début :",
            eventData.date_et_heure,
            "Date de fin :",
            formattedEndDate
          );

          events.push({
            id: eventData.rendezvous_id,
            title: eventData.motif + " - " + eventData.patient,
            backgroundColor: "#007BFF",
            start: eventData.date_et_heure,
            end: endDate,
          });
        } else {
          events.push({
            id: eventData.rendezvous_id,
            title: "Complet",
            backgroundColor: "#007BFF",
            start: eventData.date_et_heure,
            end: endDate,
            className: "rendezvous-non-connecte",
          });
        }
      }
      return events;
    })(),
  });

  calendar.render();
});
