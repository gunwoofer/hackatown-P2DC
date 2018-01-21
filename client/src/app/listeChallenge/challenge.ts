export class Challenge {

    public adresse: string;
    private titre: string;
    public auteur: number;
    private salaire: number;
    private description: string;
    public longitude: number;
    public latitude: number;

    constructor(titre: string, adresse: string, auteur: number, salaire: number, description: string, latitude: number, longitude: number) {
        this.titre = titre;
        this.adresse = adresse;
        this.auteur = auteur;
        this.salaire = salaire;
        this.description = description;
        this.latitude = latitude;       // mock
        this.longitude = longitude;
    }
}

export let tableauChallenges: Challenge[] =
    [
    new Challenge('Deneigement', '5777 Rue Légare Montréal, QC H3T 1E4', 1, 9,
                'Besoin d aide pour deneiger ma voiture', 45.497992, -73.629618),
    new Challenge('Pneu creve', '5355 Chemin de la Côte-des-Neiges Montréal, QC H3T 1Y4',
                2, 15, 'J ai creve un pneu j ai besoin d aide', 45.497132, -73.622861),
    new Challenge('Tondre ma pelouse', '3201-3215 Chemin de la Côte-Sainte-Catherine Montréal, QC H3T',
                5, 12, 'Besoin de quelqun pour tondre ma pelouse', 45.502533, -73.625302)
    ];
