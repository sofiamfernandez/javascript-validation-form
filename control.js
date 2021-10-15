//Definir variables
var form = document.getElementById('formulario');
var usuario  = document.getElementById('username');
var password = document.getElementById('pwd');

//Expresión regular

var buscarArroba = /\w+@/;

//Función para prevenir envío por defecto

form.addEventListener('submit',e=>{
    e.preventDefault();
       if(usuario.value === ''){
          alert('Ingresa tu usuario, no puede quedar vacío');
         
       }else if (!buscarArroba.test(usuario.value)) {
        alert('falta el @');
        usuario.focus;
        
       }      
       else if(password.value === ''){
          alert('Ingresa tu clave, no puede quedar vacío');
       }
       else(document.write('Formulario Validado'));
});
