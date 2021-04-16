if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

let tablaArtistas = document.getElementById("bands-table");
let tablaDiscos = document.getElementById("discs-table");
let tablaArtSup, tablaDiscSup;

function fillTableArt() {
  var node1, node2, node3, textnode;
  tablaArtistas.innerHTML = "";
  for (let i = 0; i < bandas.length; i++) {
    node1 = document.createElement("tr");
    node2 = document.createElement("td");
    node3 = document.createElement("h4")
    textnode = document.createTextNode(bandas[i][1]);

    node2.setAttribute("id", bandas[i][0]);
    node2.setAttribute("onClick", "hola(this.id)");

    node1.appendChild(node2);
    node2.appendChild(node3);
    node3.appendChild(textnode)
    tablaArtistas.appendChild(node1);
  }
  tablaArtSup = tablaArtistas.innerHTML;
}

fillTableArt();

function fillTableDisc() {
  var node1, node2, node3, node4, textnode;
  tablaDiscos.innerHTML = "";
  for (let i = 0; i < discos.length; i++) {
    node1 = document.createElement("tr");
    node2 = document.createElement("td");
    node3 = document.createElement("a")
    node4 = document.createElement("h4")

    textnode = document.createTextNode(discos[i][2]);

    node3.setAttribute("href", discos[i][3]);
    node3.setAttribute("target", "_blank");

    node1.appendChild(node2);
    node2.appendChild(node3);
    node3.appendChild(node4)
    node4.appendChild(textnode)
    tablaDiscos.appendChild(node1);
  }
  tablaDiscSup = tablaDiscos.innerHTML;
}

fillTableDisc();

function filterArt() {
  tablaArtistas.innerHTML = tablaArtSup;
  var input, filter, tr, td, i, txtValue, count;
  input = document.getElementById("artInput");
  filter = input.value.toUpperCase();
  tr = tablaArtistas.getElementsByTagName("tr");
  count = 0;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 && count < 6) {
        tr[i].style.display = "";
        count++
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  if (count == 0) {
    tablaArtistas.innerHTML += `
    <div class="alert alert-warning" role="alert">
      <h4>No se encontró nada :( Intenta <a href="#" class="alert-link">viendo la lista completa</a> o volviendo a escribir.</h4>
    </div>
    `
  } else {
    tablaArtistas.innerHTML += `

    <div class="alert alert-success" role="alert">
      <h4 class="">+${bandas.length - count} ARTISTAS <a href="#" class="alert-link">VER LISTA COMPLETA</a></h4>
    </div>
    `
  }
}
filterArt();

function filterDisc() {
  tablaDiscos.innerHTML = tablaDiscSup;
  var input, filter, tr, td, i, txtValue, count;
  input = document.getElementById("discsInput");
  filter = input.value.toUpperCase();
  tr = tablaDiscos.getElementsByTagName("tr");
  count = 0;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 && count < 6) {
        tr[i].style.display = "";
        count++
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  if (count == 0) {
    tablaDiscos.innerHTML += `
    <div class="alert alert-warning" role="alert">
      <h4>No se encontró nada :( Intenta <a href="#" class="alert-link">viendo la lista completa</a> o volviendo a escribir.</h4>
    </div>
    `
  } else {
    tablaDiscos.innerHTML += `

    <div class="alert alert-success" role="alert">
      <h4 class="">+${discos.length - count} DISCOS <a href="#" class="alert-link">VER LISTA COMPLETA</a></h4>
    </div>
    `
  }
}
filterDisc();

function hola(clickedId) {
  console.log(parseInt(clickedId))
  let idBanda = document.getElementById(clickedId);
  let tableDiscs;

  idBanda.innerHTML += `
    <table id="discos">
    </table>
    `
  for (let i = 2; i < bandas[parseInt(clickedId)].length; i++) {
    tableDiscs = document.getElementById("discos");
    tableDiscs.innerHTML += `
        <tr>
          <td>
            <a href="${bandas[parseInt(clickedId)][i][3]}" target="_blank">${bandas[parseInt(clickedId)][i][2]}</a>
          </td> 
        </tr>
    `
  }

  tablaArtistas.innerHTML = idBanda.innerHTML;
}

