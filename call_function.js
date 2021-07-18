if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
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

//let tabla = new Imported;
//tabla.importHtml('bandsTable/bandsTable.html', 'content');
let disqus = new Imported;
disqus.importHtml('../disqus/disqus.html','footer');



function call_function(){
    $(document).ready(function () {
        $('#navBar').load('navBar.html #barEntry');
    });
}

call_function();

//DISQUS----------------
function init() {
    var disqus_config = function () {
        this.page.url = document.URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = document.identifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://megamusicagratis-com.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

}
window.onload = init();


//all links open new blank
$("a").attr("target", "_blank");

