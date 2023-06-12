export interface GolfVerificationResponse {
  state: 'REGISTERED' | 'NOT_REGISTERED';
  id?: string;
  fee?: number;
}
