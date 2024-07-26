// Interfaccia per startup innovative
interface IStartup {
  nome: string;
  settoreFocus: string;
  descrizione: string;
  prodottiServizi: string[];
  riceviIncentivo(incentivo: IIncentivo): void;
}

// Interfaccia per incentivi statali
interface IIncentivo {
  codice: string;
  descrizione: string;
  valore: number;
  criteriEleggibilita: string[];
  assegnaAStartup(startup: IStartup): void;
}

// Interfaccia per i cittadini partecipanti
interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];
  partecipaAttivita(startup: IStartup): void;
}

// Implementazione della classe Startup
class Startup implements IStartup {
  nome: string;
  settoreFocus: string;
  descrizione: string;
  prodottiServizi: string[];

  constructor(
    nome: string,
    settoreFocus: string,
    descrizione: string,
    prodottiServizi: string[]
  ) {
    this.nome = nome;
    this.settoreFocus = settoreFocus;
    this.descrizione = descrizione;
    this.prodottiServizi = prodottiServizi;
  }

  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(
      `${this.nome} ha ricevuto un incentivo: ${incentivo.descrizione}`
    );
  }
}

// Implementazione della classe Incentivo
class Incentivo implements IIncentivo {
  codice: string;
  descrizione: string;
  valore: number;
  criteriEleggibilita: string[];

  constructor(
    codice: string,
    descrizione: string,
    valore: number,
    criteriEleggibilita: string[]
  ) {
    this.codice = codice;
    this.descrizione = descrizione;
    this.valore = valore;
    this.criteriEleggibilita = criteriEleggibilita;
  }

  assegnaAStartup(startup: IStartup): void {
    console.log(`Incentivo ${this.codice} assegnato a ${startup.nome}`);
  }
}

// Implementazione della classe Cittadino
class Cittadino implements ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];

  constructor(
    nome: string,
    cognome: string,
    eta: number,
    interessiSportivi: string[]
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.interessiSportivi = interessiSportivi;
  }

  partecipaAttivita(startup: IStartup): void {
    console.log(
      `${this.nome} ${this.cognome} partecipa alle attività di ${startup.nome}`
    );
  }
}

// Creazione di istanze di Startup
const startup1 = new Startup(
  "TechWear",
  "tecnologie wearable",
  "Sviluppiamo dispositivi indossabili avanzati per migliorare le prestazioni sportive",
  ["smartwatch con GPS integrato", "sensori di movimento ad alta precisione"]
);

const startup2 = new Startup(
  "FitApp",
  "app per il fitness",
  "Creiamo app innovative per l'allenamento personalizzato e il monitoraggio della salute",
  ["app di allenamento con AI", "piattaforma di analisi dati fitness"]
);

// Creazione di istanze di Incentivo
const incentivo1 = new Incentivo(
  "WEARTECH2024",
  "Incentivo per startup nel settore delle tecnologie wearable per lo sport",
  70000,
  ["innovazione in dispositivi indossabili", "applicazione nel campo sportivo"]
);

const incentivo2 = new Incentivo(
  "FITAPP2024",
  "Incentivo per lo sviluppo di app fitness innovative",
  50000,
  ["startup nel settore delle app", "utilizzo di AI per personalizzazione"]
);

// Creazione di istanze di Cittadino
const cittadino1 = new Cittadino("Marco", "Bianchi", 29, ["corsa", "ciclismo"]);
const cittadino2 = new Cittadino("Laura", "Rossi", 34, ["nuoto", "yoga"]);

// Test della logica di assegnazione degli incentivi e partecipazione dei cittadini
incentivo1.assegnaAStartup(startup1);

startup2.riceviIncentivo(incentivo2);

cittadino1.partecipaAttivita(startup1);
cittadino2.partecipaAttivita(startup2);
