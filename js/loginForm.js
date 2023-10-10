const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérez les valeurs des champs email et password
    const identifiant = document.getElementById("identifiant").value;
    const password = document.getElementById("password").value;

    if (
      identifiant === jsonData.tables[0].columns[0].email &&
      password === jsonData.tables[0].columns[0].mot_de_passe
    ) {
      console.log(identifiant, jsonData.tables[0].columns[0].email);
      console.log(password, jsonData.tables[0].columns[0].mot_de_passe);
      auth = true;
      loginModal.style.display = "none";
      console.log("auth", auth);
    } else {
      alert("Identifiant ou mot de passe incorrect");
    }
  });
}
