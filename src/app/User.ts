interface rdv{
  name: string
  date: string
  description: string
}
export interface User {

  name: string;
  email: string;
  password: string;
  rdv: Array<rdv>;

}
