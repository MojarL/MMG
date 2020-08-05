//Import with plain JS, must fill vars.
class Imported{

    importHtml (html, id){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', html, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
                document.getElementById(id).innerHTML = this.responseText;
        };
        xhr.send();0
    }
}

let tabla = new Imported;
tabla.importHtml('bandsTable/bandsTable.html', 'content');
let disqus = new Imported;
disqus.importHtml('disqus/disqus.html','footer');
let disqusScript = new Imported;
disqusScript.importHtml('disqus/disqusScript.html','dropdown-content');


function call_function(){
    $(document).ready(function () {
        $('#navBar').load('navBar.html #barEntry');
    });
}

call_function();
