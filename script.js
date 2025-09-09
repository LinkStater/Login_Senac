function teste(){
    
var usuario = document.getElementById("usuario").value;
var senha = document.getElementById("senha").value;

if(usuario == "victor" && senha == 1234) window.location.href = "home.html";
else alert("Usuario ou Senha incorretos.")

}

