
function validar(){
    nombre=document.getElementById("name1").value;
    ocupacion=document.getElementById("ocupacion1").value;
    numero=document.getElementById("numero").value;
    email=document.getElementById("email1").value;
    fecha=document.getElementById("fecha").value;
    texto=document.getElementById("texto1").value;
    var spanresul=document.getElementById("result");
    var spanresul="";
    var x=document.getElementById("skills");
    var fisico=document.getElementById("a_fisico");
    var cvd=document.getElementById("c_v_d");
    var ofice=document.getElementById("p_ofice");
    var tenis=document.getElementById("tenis");
    var aptitudes=document.getElementById("aptitudes");
    laboral=document.getElementById("laboral2").value;
    var yo=0;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //nombre
    if (nombre.length==0 || /^\s+$/.test(nombre)){
        document.getElementById("nombre1").innerHTML="Ingrese el Nombre correctamente";
        document.getElementById("nombre1").style.color="red";
        yo=yo+1;
    }
    else{
        document.getElementById("nombre1").innerHTML="Genial";
        document.getElementById("nombre1").style.color="green";
    }
    //fecha
    if(fecha.length==0){
        document.getElementById("fecha1").innerHTML="Seleccione una fecha";
        document.getElementById("fecha1").style.color="red";
        yo=yo+1;
    }
    else{
        document.getElementById("fecha1").innerHTML="genial";
        document.getElementById("fecha1").style.color="green";
    }

    //ocupacion
    if (ocupacion.length==0 || /^\s+$/.test(ocupacion)){
        document.getElementById("ocupacion2").innerHTML="Complete correctamente";
        document.getElementById("ocupacion2").style.color="red";
        yo=yo+1;   
    }
    else{
        document.getElementById("ocupacion2").innerHTML="Genial";
        document.getElementById("ocupacion2").style.color="green";
    }
    //numero
    if (numero.length==0 || /^\s+$/.test(numero)|| isNaN(numero)){
        document.getElementById("numero1").innerHTML="Ingrese el numero correctamente";
        document.getElementById("numero1").style.color="red";

       
        yo=yo+1;     
    }
    else{
        document.getElementById("numero1").innerHTML="Genial";
        document.getElementById("numero1").style.color="green";
    }
    //email
    if (email.length==0 || /^\s+$/.test(email)|| !(emailRegex.test(email))){
        document.getElementById("email2").innerHTML="Ingrese el email correctamente";
        document.getElementById("email2").style.color="red";
       
        yo=yo+1;      
    }
    else{
        document.getElementById("email2").innerHTML="Genial";
        document.getElementById("email2").style.color="green";
    }

    //lenguajes_programcion
    for(var i=0;i<x.options.length;i++){
        if(x.options[i].selected==true){
            
            spanresul.value+=x.options[i].value+" " ;
            
        }
    }
    if(spanresul.value==""){
        
        document.getElementById("skills1").innerHTML="Seleccione al menos una";
        document.getElementById("skills1").style.color="red";
        yo=yo+1;    
    }
    else{
        document.getElementById("skills1").innerHTML="Genial";
        document.getElementById("skills1").style.color="green";
    }
    //aptitudes
    if(aptitudes.value.length==0){
        document.getElementById("aptitudes1").innerHTML="Seleccione al menos una aptitud";
        document.getElementById("aptitudes1").style.color="red";
        yo=yo+1;
    }
    else{
        document.getElementById("aptitudes1").innerHTML="Genial";
        document.getElementById("aptitudes1").style.color="Green";
    }
    //hablidades
    if(!(fisico.checked)&&!(cvd.checked)&&!(ofice.checked)&&!(tenis.checked)){
        document.getElementById("habilidad").innerHTML="Seleccione al menos una";
        document.getElementById("habilidad").style.color="red";
        yo=yo+1;
    }
    else{
        document.getElementById("habilidad").innerHTML="Genial";
        document.getElementById("habilidad").style.color="green";
    }
    //perfil
    if(texto.length==0 || /^\s+$/.test(texto)){
        document.getElementById("texto2").innerHTML="Complete correctamente";
        document.getElementById("texto2").style.color="red";
        yo=yo+1;
    }
    else{
        document.getElementById("texto2").innerHTML="Genial";
        document.getElementById("texto2").style.color="green";
    }
    //Experiencia laboral
    if(laboral.length==0 || /^\s+$/.test(laboral) ) {
        document.getElementById("laboral3").innerHTML="Complete correctamente";
        document.getElementById("laboral3").style.color="red";
        yo++;
    }
    else{
        const contenedor=document.querySelector('#dinamic');
        let divs=contenedor.children;
        let cont=0;
        for(let i=0;i<divs.length;i++){
            if(divs[i].children[0].value.length==0 || /^\s+$/.test(divs[i].children[0].value)){
                cont++;
            }
        }
        if (cont==0){
            document.getElementById("laboral3").innerHTML="Genial";
            document.getElementById("laboral3").style.color="green";
        }
        else{
            document.getElementById("laboral3").innerHTML="Complete correctamente";
            document.getElementById("laboral3").style.color="red";
            yo++;
        }

    }
    if(yo==0){
        document.form_action.submit();
    }
     
    
};

function exten(){
    const contenedor=document.querySelector('#dinamic');
    let div=document.createElement('div');
    div.innerHTML='<input type="text" name="laboral[]"  class="pre3" placeholder="" required><input type="button" onclick="elimina(this)" value="X" >';
    contenedor.appendChild(div);
};

function elimina(e){
    const contenedor=document.querySelector('#dinamic');
    const divpadre=e.parentNode;
    contenedor.removeChild(divpadre);

}


