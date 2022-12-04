//utilisateur type
let admins = [{ id: 1, nom: "Revient", prenom: "Deloin", age: 25 }];
let valButton = document.getElementById("Ajouter");


valButton.addEventListener("click", addAdmin);
affichAllAdmins();
deleteAdmin();

//bouton supprimer
function deleteAdmin() {
  let boutonSupp = document.querySelectorAll(".Supprimer");
  boutonSupp.forEach((button) => {
    button.addEventListener("click", () => suppAdmin(button.id))
  });
}

// fonction ajout d'administrateur
function addAdmin(event) {
  event.preventDefault();
  let infosAdmins = {
    id: admins.length !== 0 ? admins[admins.length - 1].id + 1 : 1,
    nom: document.getElementById("nom").value,
    prenom: document.getElementById("prenom").value,
    age: document.getElementById("age").value,
  };
  if (infosAdmins.nom !== "" &&
    infosAdmins.prenom !== "" &&
    infosAdmins.age !== "") {
    admins.push(infosAdmins)
    affichAllAdmins();
  }
}

function affichAllAdmins() {
  document.getElementById("utilisateurs").innerHTML = "";
  admins.forEach((admin) => {
    let newInputs = {
      Nom: document.createElement("input"),
      Prenom: document.createElement("input"),
      Age: document.createElement("input"),
    };
    let newLi = document.createElement("li");
    let newButton = {
      Supprimer: document.createElement("input")
    }
    for (let [key, value] of Object.entries(newInputs)) {
      value.setAttribute("type", "text");
      value.setAttribute("id",`${key}ofAdmin${admin.id}`);

      key === "Nom" && value.setAttribute("value", admin.nom);
      key === "Prenom" && value.setAttribute("value", admin.prenom);
      key === "Age" && value.setAttribute("value", admin.age);

      newLi.appendChild(value);
      document.getElementById("utilisateurs").appendChild(newLi);
    }
    for (let [key, value] of Object.entries(newButton)) {
      value.setAttribute("type", "button");
      value.setAttribute("class", key);
      value.setAttribute("id", admin.id);
      value.setAttribute("value", key);
      newLi.appendChild(value);
    }

  });

  deleteAdmin();
}
//selection d'objet à supprimer
function suppAdmin(id) {
  admins.forEach((admin) => {
    let adminPosTab = admins.indexOf(admin);
    admin.id === parseInt(id) && admins.splice(adminPosTab, 1)

  });
  affichAllAdmins();
}



