interface Dipendente{
    nome:string;
    cognome:string;
    eta:string;
    impiegato:boolean;
    azienda:string
}

class Dipendente1 implements Dipendente{
    nome:string;
    cognome:string;
    eta:string;
    impiegato:boolean;
    azienda:string
    constructor(nome:string,cognome:string,eta:string,impiegato:boolean,azienda:string){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.impiegato = impiegato;
        this.azienda = azienda
    }
}