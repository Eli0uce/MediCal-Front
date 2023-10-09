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
          events.push({
            id: eventData.rendezvous_id,
            title: eventData.motif,
            start: eventData.date_et_heure,
            end: eventData.date_et_heure + eventData.duree * 60 * 1000,
          });
        } else {
          events.push({
            id: eventData.rendezvous_id,
            title: "Complet",
            start: eventData.date_et_heure,
            className: "rendezvous-non-connecte",
          });
        }
      }
      return events;
    })(),
  });

  calendar.render();
});
