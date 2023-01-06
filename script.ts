// Keyword modificatori di accesso, classi astratte e interfacce 

class Persona{
    nome:string;
    congome:string;
    eta:number;
    coniugato:boolean
    constructor(nome:string,cognome:string,eta:number,coniugato:boolean){
        this.nome = nome;
        this.congome = cognome;
        this.eta = eta;
        this.coniugato = coniugato
    }

    cresce():number{
        return this.eta++;
    }
    stampaNomeSuSchermo():void{
        const body:HTMLElement = <HTMLElement>document.getElementById('container')
        body.innerHTML = `${this.nome}`
    }
}
class Persona2{
    nome:string;
    cognome:string;
    eta:number;
    protected coniugato:boolean;
    constructor(nome:string,cognome:string,eta:number,coniugato:boolean){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.coniugato = coniugato
    }

    cresce():number{
        return this.eta++;
    }
    stampaNomeSuSchermo():void{
        const body:HTMLElement = <HTMLElement>document.getElementById('container')
        body.innerHTML = `${this.nome}`
    }
}

class Studente extends Persona2{
    scuola:string;
    constructor(nome:string, cognome:string,eta:number,coniugato:boolean,scuola:string){
        super(nome,cognome,eta,coniugato);
        this.scuola = scuola;
    }

}

let persona2:Studente= new Studente('luigi','rossi',22,true,'liceoclassico');

persona2.stampaNomeSuSchermo()
