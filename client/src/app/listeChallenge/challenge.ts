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
