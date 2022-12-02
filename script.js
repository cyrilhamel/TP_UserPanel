let compteur=0;
function newElement() {
  let li = document.createElement("li");
  let listName = document.getElementById("name").value;
let listFirstName = document.getElementById("firstName").value;
let listAge = document.getElementById("age").value;
  let t = document.createTextNode(listName,listFirstName,listAge);
  li.setAttribute('name','firstName','age'+compteur)
  li.appendChild(t);
  if (listName,listFirstName,age === '') {
    alert("Vous devez entrer une nouvelle tache");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }

  compteur++;
}