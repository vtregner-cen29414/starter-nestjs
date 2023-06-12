export interface Invitation {
  id: string;
  dateFrom: Date;
  dateTo?: Date;
  name: string;
  registered: boolean;
  detailPdfLink?: string;
  externalEventUrl?: string;
}
