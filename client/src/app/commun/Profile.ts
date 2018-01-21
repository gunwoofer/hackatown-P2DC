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
  new UserProfile('Daniel','Etudiant Polytechnique Montreal', 2, 'Banane', false, 'gars1'),
  new UserProfile('Julie','Femme au foyer', 1, 'Banane', false, 'fille1'),
  new UserProfile('John','Etudiant', 5, 'Banane', false, 'gars2'),
  new UserProfile('Paul','Cuisinier', 6, 'Banane', false, 'gars5'),
  new UserProfile('Marie','Etudiante McGill', 12, 'Banane', false, 'fille2'),
  new UserProfile('Pauline','Etudiante McGill', 12, 'Banane', true, 'fille3')

]
