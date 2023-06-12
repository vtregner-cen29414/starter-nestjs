import { Person } from './person';

export interface CreateInsuranceRequest {
  country: string;
  coPolicyHolders: Person[];
}
