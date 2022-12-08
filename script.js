//utilisateur type
let admins = [{ id: 1, nom: "Revient", prenom: "Deloin", age: 25 }];

//boutons d'origine
let valButton = document.getElementById("valider");
let suppAllButton = document.getElementById("suppAll");
let triButton = document.getElementById("tri");

valButton.addEventListener("click", addAdmin);
suppAllButton.addEventListener("click", deleteAllAdmin);
affichAllAdmins();


//bouton supprimer tous les admins
function deleteAllAdmin(){
   suppAll=document.getElementById("liste");
       while (suppAll.firstChild)
        {
                suppAll.removeChild(suppAll.firstChild);
  }
}


//bouton supprimer un admin
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
//fonction ajouter les admins à la page HTML
function affichAllAdmins() {
  document.getElementById("liste").innerHTML = "";
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
      document.getElementById("liste").appendChild(newLi);
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


/*let valButton = document.getElementById("valider");
valButton.addEventListener("click", affichAdmin);

function addAdmin(){
  let nom=document.getElementById("nom").value;
  let prenom=document.getElementById("prenom").value;
  let age=document.getElementById("age").value;
  let tab=[nom,prenom,age];
  console.log(tab);
}

function affichAdmin(event){
  event.preventDefault();
  let liste=document.getElementById("liste");
  let newLi = document.createElement("li");
  let infos= addAdmin();
  let newButton = {
    Supprimer: document.createElement("input")
  }
  liste.appendChild(newLi);
  newLi.textContent=(infos+newButton);
   
}*/