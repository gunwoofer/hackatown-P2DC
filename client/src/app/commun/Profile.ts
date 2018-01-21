export class UserProfile {
  public name;
  public title;
  public distance: number;
  public location;
  public disabled: boolean;
  public nomPhoto: string;

  constructor(name: string, title: string, distance: number, location: string, disabled: boolean, nomPhoto: string) {
    this.name = name;
    this.title = title;
    this.distance = distance;
    this.location = location;
    this.disabled = disabled;
    this.nomPhoto =  "../assets/" +nomPhoto + ".jpg";
  }
}


export let profilesTest : UserProfile[] = [
  new UserProfile('Daniel','Etudiant ', 2, 'Polytechnique Montreal', false, 'gars1'),
  new UserProfile('Julie','Femme au foyer', 1, '12 avenue Laurier', false, 'fille1'),
  new UserProfile('John','Etudiant', 5, 'Parc Mont Royal', false, 'gars2'),
  new UserProfile('Paul','Cuisinier', 6, '236 Rue Avenue Sainte Catherine Ouest', false, 'gars5'),
  new UserProfile('Marie','Etudiante McGill', 12, 'Laval', false, 'fille2'),
  new UserProfile('Pauline','Etudiante McGill', 12, '2224 rue saint Antoine', true, 'fille3')
];


// mission : jardinage d'herbe médicinale
// coupe de feuilles pour détente récréative
