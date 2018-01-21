export class UserProfile {
  public id: number;
  public name;
  public title;
  public distance: number;
  public location;
  public disabled: boolean;
  public nomPhoto: string;

  constructor(id: number, name: string, title: string, distance: number, location: string, disabled: boolean, nomPhoto: string) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.distance = distance;
    this.location = location;
    this.disabled = disabled;
    this.nomPhoto = "../assets/" + nomPhoto + ".jpg";
  }
}


export let profilesTest: UserProfile[] = [
  new UserProfile(0, 'Daniel', 'Etudiant ', 2, 'Polytechnique Montreal', false, 'gars1'),
  new UserProfile(1, 'Julie', 'Femme au foyer', 1, '12 avenue Laurier', false, 'fille1'),
  new UserProfile(2, 'John', 'Etudiant', 5, 'Parc Mont Royal', false, 'gars2'),
  new UserProfile(3, 'Paul', 'Cuisinier', 6, '236 Rue Avenue Sainte Catherine Ouest', false, 'gars5'),
  new UserProfile(4, 'Marie', 'Etudiante McGill', 12, 'Laval', false, 'fille2'),
  new UserProfile(5, 'Pauline', 'Etudiante McGill', 12, '2224 rue saint Antoine', true, 'fille3')
];


// mission : jardinage d'herbe médicinale
// coupe de feuilles pour détente récréative
