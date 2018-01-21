export class Challenge {

    public adresse: string;
    private titre: string;
    private auteur: string;
    private salaire: number;
    private description: string;

    constructor(titre: string, adresse: string, auteur: string, salaire: number, description: string) {
        this.titre = titre;
        this.adresse = adresse;
        this.auteur = auteur;
        this.salaire = salaire;
        this.description = description;
    }
}

export let tableauChallenges: Challenge[] = [new Challenge('Deneigement', '5777 Rue Légare Montréal, QC H3T 1E4', 'John Doe', 9,
  'Besoin d aide pour deneiger ma voiture'),
  new Challenge('Pneu creve', '5355 Chemin de la Côte-des-Neiges Montréal, QC H3T 1Y4',
    'Xavier Niel', 15, 'J ai creve un pneu j ai besoin d aide'),
  new Challenge('Tondre ma pelouse', '3201-3215 Chemin de la Côte-Sainte-Catherine Montréal, QC H3T',
    'Marie France', 12, 'Besoin de quelqun pour tondre ma pelouse')];
