window.onload = function(){
    //crear la etiqueta formulario
    var formulario = document.createElement('form');
    //crear una etiqueta de texto y su texto
    var etiqueta = document.createElement('label');
    var textoEtiqueta = document.createTextNode('Introduce tu dni: ');
    //añadir el texto en la etiqueta y añadirla al formulario 
    etiqueta.appendChild(textoEtiqueta);
    formulario.appendChild(etiqueta);
    //crear la etiquieta input
    var input1 = document.createElement('input');
    //asignar los atributos a la etiqueta input
    input1.setAttribute("type", "text");
    input1.setAttribute("name","dni");
    //añadir el input dentro de la etiqueta formulario
    formulario.appendChild(input1);
    //crear la etiqueta boton
    var boton = document.createElement('button');
    // asignar los atributos a la etiqueta boton
    boton.setAttribute("type", "submit");
    boton.style = "height:25px; width:50px"
    //crear el texto de dentro del boton y añadirselo
    var text = document.createTextNode("Enviar");
    boton.appendChild(text);
    //añadir el boton dentro de la etiqueta formulario
    formulario.appendChild(boton);
    //añadir el formulario en el cuerpo del documento html
    document.body.appendChild(formulario);
}