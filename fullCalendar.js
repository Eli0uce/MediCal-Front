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
    events: [
      {
        id: "a",
        title: "my event",
        start: "2023-10-10T10:30:00",
      },
    ],
  });
  var event = calendar.getEventById("a"); // an event object!
  var start = event.start; // a property (a Date object)
  console.log(start.toISOString()); // "2018-09-01T00:00:00.000Z"

  calendar.render();
});

const jsonData = {
  tables: [
    {
      table_name: "medecin",
      columns: [
        {
          medecin_id: 1,
          nom: "Dupont",
          prenom: "Jean",
          email: "jean.dupont@example.com",
          mot_de_passe: "hashed_password_1",
        },
        {
          medecin_id: 2,
          nom: "Martin",
          prenom: "Marie",
          email: "marie.martin@example.com",
          mot_de_passe: "hashed_password_2",
        },
        {
          medecin_id: 3,
          nom: "Smith",
          prenom: "John",
          email: "john.smith@example.com",
          mot_de_passe: "hashed_password_3",
        },
      ],
    },
    {
      table_name: "rendezvous",
      columns: [
        {
          rendezvous_id: 1,
          medecin_id: 1,
          patient: "Alice",
          date_et_heure: "2023-10-10T09:00:00",
          motif: "Consultation générale",
          duree: 30,
        },
        {
          rendezvous_id: 2,
          medecin_id: 1,
          patient: "Bob",
          date_et_heure: "2023-10-11T14:30:00",
          motif: "Examen de routine",
          duree: 45,
        },
        {
          rendezvous_id: 3,
          medecin_id: 2,
          patient: "Eva",
          date_et_heure: "2023-10-12T11:15:00",
          motif: "Suivi médical",
          duree: 30,
        },
      ],
    },
  ],
};
