export interface Case {
  id: string;
  startDate: string;
  endDate: string;
  state: 'OPEN' | 'CLOSED';
  topic: string;
  type: 'EVENT' | 'SERVICE';
  entranceCount: number;
  venueType: 'ONLINE' | 'PERSONALLY';
  clientState: 'NOMINATED' | 'REGISTERED';
  flags: string[];
  rating?: number;
  ratingFinished: boolean;
}
