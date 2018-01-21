export class UserProfile {
  private name;
  private title;
  private distance: number;
  private location;
  private disabled: boolean;

  constructor(name: string, title: string, distance: number, location: string, disabled: boolean) {
    this.name = name;
    this.title = title;
    this.distance = distance;
    this.location = location;
    this.disabled = disabled;
  }
}


export let profilesTest : UserProfile[] = [
  new UserProfile('Daniel','Etudiant Polytechnique Montreal', 2, 'Banane', false),
  new UserProfile('Julie','Femme au foyer', 1, 'Banane', false),
  new UserProfile('John','Etudiant', 5, 'Banane', false),
  new UserProfile('Paul','Cuisinier', 6, 'Banane', false),
  new UserProfile('Marie','Etudiante McGill', 12, 'Banane', false),
  new UserProfile('Pauline','Etudiante McGill', 12, 'Banane', true)

]
