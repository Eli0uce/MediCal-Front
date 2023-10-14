const jsonData = {
  tables: [
    {
      table_name: "medecin",
      columns: [
        {
          medecin_id: 1,
          nom: "Dupont",
          prenom: "Jean",
          email: "test",
          mot_de_passe: "test",
        },
      ],
    },
    {
      table_name: "rendezvous",
      columns: [
        {
          rendezvous_id: 1,
          medecin_id: 1,
          patient: "Alice Dupont",
          date_et_heure: "2023-10-14T09:00:00",
          motif: "Consultation générale",
          duree: 30,
        },
        {
          rendezvous_id: 2,
          medecin_id: 1,
          patient: "Bob Gerard",
          date_et_heure: "2023-10-15T14:30:00",
          motif: "Examen de routine",
          duree: 45,
        },
        {
          rendezvous_id: 3,
          medecin_id: 2,
          patient: "Eva Martin",
          date_et_heure: "2023-10-16T11:15:00",
          motif: "Suivi médical",
          duree: 30,
        },
        {
          rendezvous_id: 4,
          medecin_id: 2,
          patient: "Eva Martin",
          date_et_heure: "2023-10-17T11:45:00",
          motif: "Suivi médical",
          duree: 30,
        },
      ],
    },
  ],
};
