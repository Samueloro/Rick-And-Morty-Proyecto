
export default function Validation (input){
    const regexEmail = /\S+@\S+.\S+/;
    const regexPassword= new RegExp('[0-9]') 
    const error = {};


    if(!regexEmail.test(input.email)){
        error.email = 'Debe ingresar un Correo valido'
    }
    if(!input.email){
        error.email = 'Debe ingresar un Correo'
    }
    if(input.email>35){
        error.email='No debe tener un mayor a 35 caracteres'
    }
    if(!regexPassword.test(input.password)){
        error.password = 'Debe contener al menos un número'
    }
    
    if(input.password.length < 6  || input.password.length > 10){
        error.password = 'Debe contener entre 6 y 10 caracteres'
    }
    return error; 
}