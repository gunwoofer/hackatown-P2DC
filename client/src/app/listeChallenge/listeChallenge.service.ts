import { Challenge } from './challenge';
import { Injectable } from '@angular/core';


@Injectable()
export class ListeChallengeService {



    constructor() {}

    public genererChallengeMock(): Challenge[] {
        const tableauChallenge: Challenge[] = new Array();

        const challenge1 = new Challenge('Deneigement', '5777 Rue Légare Montréal, QC H3T 1E4', 'John Doe', 9,
                                        'Besoin d aide pour deneiger ma voiture');
        const challenge2 = new Challenge('Pneu creve', '5355 Chemin de la Côte-des-Neiges Montréal, QC H3T 1Y4',
                                        'Xavier Niel', 15, 'J ai creve un pneu j ai besoin d aide');
        const challenge3 = new Challenge('Tondre ma pelouse', '3201-3215 Chemin de la Côte-Sainte-Catherine Montréal, QC H3T',
                                        'Marie France', 12, 'Besoin de quelqun pour tondre ma pelouse');

        tableauChallenge.push(challenge1, challenge2, challenge3);
        return tableauChallenge;
    }
}
