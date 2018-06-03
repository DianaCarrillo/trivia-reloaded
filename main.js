  document.getElementById("comenzarJuego").style.display="none";
      document.getElementById("Preguntas").style.display="none";
          document.getElementById("submitButton").style.display="none";
      document.getElementById("Respuestas").style.display="none";
function bienvenida(){
  var name = document.getElementById("nombreUsuario").value;
  document.getElementById("bienvenida").innerHTML="Bienvenida " + name;
  document.getElementById("preguntaNombre").style.display="none";
  document.getElementById("comenzarJuego").style.display="block";
}

function si(){
  document.getElementById("comenzarJuego").style.display="none";
  document.getElementById("Preguntas").style.display="block";
  document.getElementById("submitButton").style.display="block";
}

function submit(){
  document.getElementById("Preguntas").style.display="none";
  document.getElementById("Respuestas").style.display="block";
  var P1= document.newForm.P1.value;
  var P2= document.newForm.P2.value;
  var P3= document.newForm.P3.value;
  var countCorrectas= 0;
  var countIncorrectas=0;

  if (P1=="a") {
    countCorrectas+=1;
document.getElementById("Correctas").innerHTML= countCorrectas;
}else{
  countIncorrectas+=1
  document.getElementById("Correctas").innerHTML=countCorrectas;
document.getElementById("Incorrectas").innerHTML= countIncorrectas;
}


if (P2=="c"){
  countCorrectas+=1
  document.getElementById("Correctas").innerHTML=countCorrectas;
}else {
  countIncorrectas+=1
  document.getElementById("Correctas").innerHTML=countCorrectas;
  document.getElementById("Incorrectas").innerHTML=countIncorrectas;
}


if (P3=="b"){
countCorrectas+=1
document.getElementById("Correctas").innerHTML=countCorrectas;
}else {
  countIncorrectas+=1
  document.getElementById("Correctas").innerHTML=  countCorrectas;
document.getElementById("Incorrectas").innerHTML=countIncorrectas;
}
}


function no(){
  document.getElementById("hastaPronto").innerHTML= ":(";
  document.getElementById("comenzarJuego").style.display="none";
  document.getElementById("bienvenida").style.display="none";
}
