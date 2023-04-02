const validateString = (cad) =>{
    let response = (cad.length >=3) ?true : false;
    return response;
};

const validateTelefono =(cad) => {
    let response = (cad.length >=10) ?true : false;
    return response;
}

class Validate{
    validCarg(value){
        const cargDB = value;
        const resp = value.match(cargDB)? true : false;
        return resp;
    }
    validNames(value){
        const nombresDB = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,30})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})([\s]?)$/g;
        const resp = value.match(nombresDB) ? true : false;
        console.log(resp);
        return resp;
    }

    validTele(value){
        //VALIDACION DE NUMEROS TELEFONOS//
                       const teleFR =  /^(((300|301|302|303|304|324|305|310|311|312|313|314|320|321|322|323|315|316|317|318|319|350|351)[0-9]{7}))$/g;
                       const resp = value.match(teleFR) ? true:false;
                       return resp;
    }
    validMail(value){
        //VALIDACION DE CORREO @//
                            const mailFR =  /^([\w.]+[^#$%&\/()='"!?}¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
                            const resp = value.match(mailFR) ? true:false;
                            return resp;
    }
    validTex(values){
                                   const texFR=/^([a-zA-Z\dñÑáéíóúÁÉÍÓÚ^\d]+\s){20,50}$/g;
                                   const respuesta = values.match(texFR) ? true : false;
                                   return respuesta;
    }
    validFrom = (objeto) => {
                                          const valores = Object.values(objeto);
                                          let resp = valores.findIndex(e => e === false); 
                                          return resp;
    }
}

export{validateString,validateTelefono, Validate }
