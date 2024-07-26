// Implementazione della classe Startup
var Startup = /** @class */ (function () {
    function Startup(nome, settoreFocus, descrizione, prodottiServizi) {
        this.nome = nome;
        this.settoreFocus = settoreFocus;
        this.descrizione = descrizione;
        this.prodottiServizi = prodottiServizi;
    }
    Startup.prototype.riceviIncentivo = function (incentivo) {
        console.log("".concat(this.nome, " ha ricevuto un incentivo: ").concat(incentivo.descrizione));
    };
    return Startup;
}());
// Implementazione della classe Incentivo
var Incentivo = /** @class */ (function () {
    function Incentivo(codice, descrizione, valore, criteriEleggibilita) {
        this.codice = codice;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteriEleggibilita = criteriEleggibilita;
    }
    Incentivo.prototype.assegnaAStartup = function (startup) {
        console.log("Incentivo ".concat(this.codice, " assegnato a ").concat(startup.nome));
    };
    return Incentivo;
}());
// Implementazione della classe Cittadino
var Cittadino = /** @class */ (function () {
    function Cittadino(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    Cittadino.prototype.partecipaAttivita = function (startup) {
        console.log("".concat(this.nome, " ").concat(this.cognome, " partecipa alle attivit\u00E0 di ").concat(startup.nome));
    };
    return Cittadino;
}());
// Creazione di istanze di Startup
var startup1 = new Startup("TechWear", "tecnologie wearable", "Sviluppiamo dispositivi indossabili avanzati per migliorare le prestazioni sportive", ["smartwatch con GPS integrato", "sensori di movimento ad alta precisione"]);
var startup2 = new Startup("FitApp", "app per il fitness", "Creiamo app innovative per l'allenamento personalizzato e il monitoraggio della salute", ["app di allenamento con AI", "piattaforma di analisi dati fitness"]);
// Creazione di istanze di Incentivo
var incentivo1 = new Incentivo("WEARTECH2024", "Incentivo per startup nel settore delle tecnologie wearable per lo sport", 70000, ["innovazione in dispositivi indossabili", "applicazione nel campo sportivo"]);
var incentivo2 = new Incentivo("FITAPP2024", "Incentivo per lo sviluppo di app fitness innovative", 50000, ["startup nel settore delle app", "utilizzo di AI per personalizzazione"]);
// Creazione di istanze di Cittadino
var cittadino1 = new Cittadino("Marco", "Bianchi", 29, ["corsa", "ciclismo"]);
var cittadino2 = new Cittadino("Laura", "Rossi", 34, ["nuoto", "yoga"]);
// Test della logica di assegnazione degli incentivi e partecipazione dei cittadini
incentivo1.assegnaAStartup(startup1);
startup2.riceviIncentivo(incentivo2);
cittadino1.partecipaAttivita(startup1);
cittadino2.partecipaAttivita(startup2);
