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