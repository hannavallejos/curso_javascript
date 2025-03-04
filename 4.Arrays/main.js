let opcion; 
const pacientesPresentes = []
const pacientesAusentes = []

function verPacientesPresentes(){
    if(pacientesPresentes.length === 0){
        alert("no hay pacientes registrados como presentes en este momento");
    } else{
        alert("pacientes presentes en el sistema en este momento:");
        alert(pacientesPresentes.join("\n"));
    };
    
};

function verPacientesAusentes(){
    if(pacientesAusentes.length === 0){
        alert("no hay pacientes registrados como ausentes en este momento");
    } else{
        alert("pacientes ausentes en el sistema en este momento:");
        alert(pacientesAusentes.join("\n"));
    };
    
};
  function agregarPaciente(){
    const nuevoPaciente = prompt("Nombre del paciente");
    const listaDeAsistencia = confirm("se encuentra en el consultorio?");
if(listaDeAsistencia){
        pacientesPresentes.push(nuevoPaciente);
        alert("ha sido registrado en el sistema como presente el/la paciente " + nuevoPaciente);
    }else{
        pacientesAusentes.push(nuevoPaciente);
        alert("ha sido registrado en el sistema como ausente el/la paciente " + nuevoPaciente);
       

    };

};

do{
opcion = parseInt(prompt("bienvenido a la lista de pacientes dentales\n\n1. ver pacientes presentes. \n2. ver pacienes ausentes/faltantes \n3. agregar un nuevo paciente\n\nPara salir ingrese 0  ")) 


switch (opcion) {
    case 0:
        alert("gracias por su visita. Esperamos atenderle nuevamente en el futuro. No dude en contactarnos para cualquier consulta!");
        break; 
    case 1:
        verPacientesPresentes();
        break; 
    case 2:
       verPacientesAusentes();
        break; 
    case 3:
       agregarPaciente();
        break; 
    default:
        alert("opcion no valida, por favor ingrese una opcion correcta ");
        break; 
}
}while(opcion !==0);

