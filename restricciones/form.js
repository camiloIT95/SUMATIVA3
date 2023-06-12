function validar(){
    var ret_email = validar_email();
    var ret_pass = validar_pass();
    var ret_passconfirm = validar_passconfirm();
    var ret_comuna = validar_comuna();
    var ret_phone = validar_phone();
    var ret_web = validar_web();
    var ret_hobbies = validar_hobbies();
    var ret_termsAndConditions = validar_termsAndConditions();

    return ret_email && ret_pass && ret_passconfirm && ret_comuna && ret_phone && ret_web && ret_hobbies && ret_termsAndConditions;
}

function validar_email(){
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    if (arroba < 1) {
        div.innerText = "El correo electrónico no tiene @ (arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 2) {
            div.innerText = "El nombre de usuario del correo no es válido";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                div.innerText = "El nombre de dominio no es válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}

function validar_pass(){
    var pass = document.getElementById("pass").value;
    var div = document.getElementById("err_pass");
    if (pass == ""){
        div.innerText= "Debe ingresar una contraseña";
        div.className= "text-danger";
        return false;
    } else if (pass.length < 3 || pass.length > 6){
        div.innerText = "La contraseña debe tener 3 a 6 caracteres";
        div.className = "text-danger";
        return false;

    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)){
        div.innerText= "La contraseña debe tener al menos un caracter especial";
        div.className = "text-danger";
        return false;
    } else if (!/\d/.test(pass) || !/[a-zA-Z]/.test(pass)) {
        div.innerText = "La contraseña debe contener al menos un dígito y una letra.";
        div.className = "text-danger";
        return false;

    } else {
        div.innerText = "";
        return true;
    }
}

function validar_passconfirm(){
    var passconfirm = document.getElementById("passconfirm").value;
    var div = document.getElementById("err_passconfirm");
    if (pass === passconfirm){
        return true;
    } else {
        div.innerText = "Las contraseñas deben cohincidir"
        div.className = "text-danger";
        return false;
    }
}




function validar_phone(){
    var phone = document.getElementById("phone").value;
    var div = document.getElementById("err_phone");

    if (phone.trim() == ""){
        div.innerText="Debe ingresar un numero de telefono";
        div.className = "text-danger";
        return false;
    } else if (!/^\d+$/.test(phone)){
        div.innerText = "El numero no es valido";
        div.className = "text-danger";
        return false;
    } else if (phone.length < 9 || phone.length > 9){
        div.innerText= "El numero no es valido";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_comuna(){
    var comuna = document.getElementById("comuna").value;
    var div = document.getElementById("err_comuna");

    if (comuna.trim() ==="" || comuna == "Seleccione una comuna"){
        div.innerText = "Debe seleccionar una comuna";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_web(){
    var web = document.getElementById("web").value;
    var div = document.getElementById("err_web");

    if (web.trim() === ""){
        div.innerText = "Debe ingresar un sitio web";
        div.className = "text-danger";
        return false;
    } else if (/\.(com|cl|net|org)$/.test(url)){
        div.innerText = "";
        div.className = "text-danger";
        return true
    } else {
        div.innerText = "La URL de su web no es válida. Debe contener un dominio válido";
        div.className = "text-danger";
        return false
    }
}

function validar_hobbies() {
    var hobbiesInput = document.getElementById("hobbiesInput");
    var hobbiesList = document.getElementById("hobbiesList");
    var errHobbies = document.getElementById("err_hobbies");
    var hobbies = hobbiesInput.value.trim().toLowerCase();

    if (hobbies === "") {
        errHobbies.innerText = "Debes ingresar al menos dos hobbies separados por una coma ";
        return false;
    }
  
    var listaHobbies = hobbies.split(",").map(function(hobbies) {
        return hobbies.trim();
    });
  
    if (listaHobbies.length < 2) {
        errHobbies.innerText = "Debes ingresar al menos dos hobbies separados por una coma";
        return false;
    }
  
    hobbiesList.innerHTML = "";

    listaHobbies.forEach(function(hobbies) {
        var li = document.createElement("li");
        li.textContent = hobbies;
        hobbiesList.appendChild(li);
    });
  
    errHobbies.innerText = "";
    return true;
  }

function validar_termsAndConditions() {
    var check = document.getElementById("termsAndConditions");
    var div = document.getElementById("err_termsAndConditions");
    if (!check.checked) {
        div.innerText = "Debe aceptar las condiciones";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}