import{ validateString,validateTelefono, Validate} from "./validate.js";
import {addStudent,  modalAlert} from "./paint.js";
const btnEnviar = document.getElementById('btnEnviar');
const form=document.getElementById('fmContact');
//instanciar un objeto validate

let validator = new Validate();

const objectValid={
    cargObject:false,
    nameObject:false,
    lastNameObject:false,
    mailObject:false,
    teleObject:false,
    msnObject:true
}
form.addEventListener('change' , function (event){
    const inputId = event.target.id;
    console.log(inputId);
    const inputValue = event.target.value;
    console.log(inputValue);
    const inputClass = event.target.classList;
    console.log(inputClass);
    const validClass = ()=>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }
    const invalidClass = ()=>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }

    switch(inputId){
        case "carg":
            objectValid.cargObject = validator.validCarg(inputValue);    
            objectValid.cargObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        case "name": 
            objectValid.nameObject = validator.validNames(inputValue);
            objectValid.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        case"lastName":
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        case "mail":
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;   
        case "telephone":
            objectValid.teleObject = validator.validTele(inputValue);    
            objectValid.teleObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        
        case "msn":
            objectValid.msnObject = validator.validMsn(inputValue);    
            objectValid.msnObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
        break;
        }
}
);



btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    const cargo = document.getElementById('carg').value;
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('mail').value;
    const telefono = document.getElementById('telephone').value;
    const mensaje = document.getElementById('fm_contact').value;

    if (validator.validFrom(objectValid) === -1){
       
        addStudent(cargo,nombre,apellido,correo,telefono,mensaje);

    }else{
     modalAlert("Error en los datos");
    }
}
);