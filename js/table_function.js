
let tablaArtistas = document.getElementById("bands-table");
let tablaDiscos = document.getElementById("discs-table");
let alertMsj = document.getElementById("alertMsj");
let tablaArtSup, tablaDiscSup;
let artInput = document.getElementById("artInput");

artInput.addEventListener("keyup", createArtistTable);
let discsInput = document.getElementById("discsInput");
discsInput.addEventListener("keyup", createDiscTable);

let discsCount = 0;
function countDiscs() {
  let i = 0;
  while (i < bands.length) {
    let j = 0;
    while (j < bands[i].discs.length) {
      discsCount++;
      j++;
    }
    i++;
  }
}
countDiscs();

function removeSigns(frase) {
  frase = frase.replace('Á', 'A');
  frase = frase.replace('Á', 'A');
  frase = frase.replace('É', 'E');
  frase = frase.replace('Í', 'I');
  frase = frase.replace('Ó', 'O');
  frase = frase.replace('Ö', 'O');
  frase = frase.replace('Ú', 'U');
  return frase;
}

function createColumn(number, text, table, j) {
  let node1 = document.createElement('tr');
  let node2 = document.createElement('td');
  let node3 = document.createElement('h4');
  let textnode = document.createTextNode(text);

  //tr td
  node1.appendChild(node2);
  //td h4
  node2.appendChild(node3);

  if (table == tablaArtistas) {
    node3.setAttribute("id", `${bands[number].id}`);
    node3.setAttribute("onclick", "clickedBand(this.id)");

    node3.appendChild(textnode);
    table.appendChild(node1);

  } else {
    let node4 = document.createElement('a');
    let node5 = document.createElement('td');
    let texnode2 = document.createTextNode(bands[number].nombre);

    node4.setAttribute("href", bands[number].discs[j][2]);
    node4.setAttribute("target", "_blank");
    textnode = document.createTextNode(text)

    //h4 a text
    node3.appendChild(node4);
    node4.appendChild(textnode);

    //tr td text
    node1.appendChild(node5);
    node5.appendChild(texnode2)

    //table tr
    table.appendChild(node1);


  }
}

function message(count, table) {
  if (table == messageArt) {
    if (count == 0) {
      table.innerHTML += `
      <div class="alert alert-warning" role="alert">
        <h4>No se encontró nada :( Intenta <a href="#" class="alert-link">viendo la lista completa</a> o volviendo a escribir.</h4>
      </div>
      `
    } else {
      table.innerHTML += `
  
      <div class="alert alert-success" role="alert">
        <h4 class="">+${bands.length - count} ARTISTAS <a href="#" class="alert-link">VER LISTA COMPLETA</a></h4>
      </div>
      `
    }
  } else {
    if (count == discsCount) {
      
      table.innerHTML += `
      <div class="alert alert-warning" role="alert">
        <h4>No se encontró nada :( Intenta <a href="#" class="alert-link">viendo la lista completa</a> o volviendo a escribir.</h4>
      </div>
      `
    } else {
      table.innerHTML += `
  
      <div class="alert alert-success" role="alert">
        <h4 class="">+${count} DISCOS <a href="#" class="alert-link">VER LISTA COMPLETA</a></h4>
      </div>
      `
    }
  }
}

let messageArt = document.getElementById("message-artist");
let messageDisc = document.getElementById("message-disc");

function countMessage(count, table) {
  if (table == tablaArtistas) {
    message(count, messageArt);
  } else {
    message(count, messageDisc);
  }

}


function createArtistTable() {
  let input = document.getElementById("artInput");
  let filter = input.value.toUpperCase();
  let count = 0;
  i = 0;

  tablaArtistas.innerHTML = "";
  messageArt.innerHTML = "";
  if (filter != "") {
    while (i < bands.length && count < 7) {

      let frase = bands[i].nombre.toUpperCase();
      frase = removeSigns(frase);

      if (frase.indexOf(filter) > -1) {
        createColumn(i, bands[i].nombre, tablaArtistas);
        count++;
      }
      i++;
    }
    countMessage(count, tablaArtistas);

  } else {
    //poner bandas aleatorias
    while (i < 7) {
      let rnd = Math.floor(Math.random() * bands.length);
      createColumn(rnd, bands[rnd].nombre, tablaArtistas);
      i++;
    }
    countMessage(i, tablaArtistas);
  }
}

function createDiscTable() {

  let input = document.getElementById("discsInput");
  let filter = input.value.toUpperCase();
  let count = 0;
  i = 0;
  tablaDiscos.innerHTML = "";
  messageDisc.innerHTML = "";
  if (filter != "") {
    while (i < bands.length && count < 7) {
      let j = 0;
      while (j < bands[i].discs.length) {

        let frase = bands[i].discs[j][1].toUpperCase();
        frase = removeSigns(frase);

        if (frase.indexOf(filter) > -1) {
          createColumn(i, bands[i].discs[j][1], tablaDiscos, j);
          count++
        }
        j++
      }
      i++
    }
    countMessage(discsCount - count, tablaDiscos);
  } else {
    //poner discos aleatorios
    for (i = 0; i < 7; i++) {
      let rnd1 = Math.floor(Math.random() * bands.length);
      let rnd2 = Math.floor(Math.random() * bands[rnd1].discs.length);

      createColumn(rnd1, bands[rnd1].discs[rnd2][1], tablaDiscos, rnd2);
    }
    countMessage(discsCount - 7, tablaDiscos);
  }
}

//esta funcion lo que hace es poner una id para cada banda y un atributo
function clickedBand(bandId) {
  tablaArtistas.innerHTML = "";
  messageArt.innerHTML = "";

  node1 = document.createElement('tr');
  node2 = document.createElement('td');
  node3 = document.createElement('h4');
  node3.setAttribute("id", `${bands[bandId].id}`);
  node3.setAttribute("class", 'alert alert-success');
  textnode = document.createTextNode(bands[bandId].nombre.toUpperCase());

  node1.appendChild(node2);
  node2.appendChild(node3);
  node3.appendChild(textnode);
  tablaArtistas.appendChild(node1);

  let i = 0;
  while (i < bands[bandId].discs.length) {
    let node1 = document.createElement('tr');
    let node2 = document.createElement('td');
    let node3 = document.createElement('h4');
    let node4 = document.createElement('a');
    node4.setAttribute("href", bands[bandId].discs[i][2]);
    node4.setAttribute("target", "_blank");
    let textnode = document.createTextNode(bands[bandId].discs[i][1])

    node1.appendChild(node2);
    node2.appendChild(node3);
    node3.appendChild(node4);
    node4.appendChild(textnode);
    tablaArtistas.appendChild(node1);

    i++
  }
  let node5 = document.createElement('td');
  node5.setAttribute("class", 'alert alert-warning');
  node5.setAttribute("onclick", "createArtistTable()");
  let texnode2 = document.createTextNode('Volver atrás');
  node1.appendChild(node5);
  node5.appendChild(texnode2);

}

createArtistTable();
createDiscTable();
