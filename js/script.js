function loadPage() {
    //document.getElementById("content").innerHTML='<object type="text/html" data="semana3.html"></object>';
    console.log('<object type="text/html" data="semana3.html"></object>');

    let xhttp;
    let element = document.querySelector(".content");
    let file = "semana3.html";

    if(file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4) {
                if(this.status == 200){
                    element.innerHTML = this.responseText;
                    alert(this.responseText);
                }
                if(this.status == 404){
                    element.innerHTML = "<h1>Página não encontrada</h1>";
                    alert("pagina não encontrada");
                }
            }
        }
        /*xhttp.open("GET",`templates/${file}`, true);*/
        xhttp.open("GET",`semana3.html`,true);
        xhttp.send();
        return;
    }
}