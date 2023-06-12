export interface Client {
  firstname: string;
  lastname: string;
  customerId?: string;
  salutation?: string;
  instituteId: number;
  marketingInfoAcceptance: 'ACCEPTED' | 'NOT_ACCEPTED' | 'UNKNOWN';
  gender: 'MALE' | 'FEMALE' | 'UNKNOWN';
  lastlogin?: Date;
  'cz-clientServiceSegment':
    | 'STANDARD'
    | 'PLUS'
    | 'PREMIER'
    | 'D4_INDIVIDUAL'
    | 'EPB'
    | 'NOT_DEFINED';
  'cz-birthNumber'?: string;
  dateOfBirth: string;
  branch?: {
    id: string;
  };
  flags?: string[];
}
