"use strict";
// Keyword modificatori di accesso, classi astratte e interfacce 
class Persona {
    constructor(nome, cognome, eta, coniugato) {
        this.nome = nome;
        this.congome = cognome;
        this.eta = eta;
        this.coniugato = coniugato;
    }
    cresce() {
        return this.eta++;
    }
    stampaNomeSuSchermo() {
        const body = document.getElementById('container');
        body.innerHTML = `${this.nome}`;
    }
}
class Persona2 {
    constructor(nome, cognome, eta, coniugato) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.coniugato = coniugato;
    }
    cresce() {
        return this.eta++;
    }
    stampaNomeSuSchermo() {
        const body = document.getElementById('container');
        body.innerHTML = `${this.nome}`;
    }
}
class Studente extends Persona2 {
    constructor(nome, cognome, eta, coniugato, scuola) {
        super(nome, cognome, eta, coniugato);
        this.scuola = scuola;
    }
}
let persona2 = new Studente('luigi', 'rossi', 22, true, 'liceoclassico');
persona2.stampaNomeSuSchermo();
