function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.length !== 11 || /^(\d)\1+$/.text(cpf)){
        return false;
    }

    let soma = 0;
    let resto;
    
}