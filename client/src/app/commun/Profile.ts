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
  new UserProfile(0, 'Daniel', 'Etudiant', 2, 'Polytechnique Montreal', false, 'gars1'),
  new UserProfile(1, 'Julie', 'Chauffeur VTC', 1, '12 avenue Laurier', false, 'fille1'),
  new UserProfile(2, 'John', 'eSportif professionnel', 5, 'Parc Mont Royal', false, 'gars2'),
  new UserProfile(3, 'Paul', 'Cuisinier', 6, '236 Rue Avenue Sainte Catherine Ouest', false, 'gars5'),
  new UserProfile(4, 'Marie', 'Ingénieur agronome', 12, 'Laval', false, 'fille2'),
  new UserProfile(5, 'Pauline', 'Aubergiste', 12, '2224 rue saint Antoine', true, 'fille5'),
  new UserProfile(6,'Karim', 'Artisan maçon', 10, '2880 Avenue Van Horne', false, 'gars3'),
  new UserProfile(7,'Zack', 'PDG', 6, '2591 Rue de Soissons', false, 'gars4'),
  new UserProfile(8,'Fanny', 'Esthéticienne', 11, '5634 Avenue Canterbury', false, 'fille4')
];


// mission : jardinage d'herbe médicinale
// coupe de feuilles pour détente récréative
