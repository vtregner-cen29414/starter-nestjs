import { Case } from './case';

export interface CaseDetail extends Case {
  href?: string;
  url?: string;
  email: string;
  isDetail: boolean;
  startTime: string;
  venue: string;
}
