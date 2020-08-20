
function filter() {
    listado.innerHTML = final;
    var input, filter, table, tr, td, i, txtValue, count;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    count = 0;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && count < 10) {
          tr[i].style.display = "";
          count++
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }