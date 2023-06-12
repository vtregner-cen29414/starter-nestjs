import { LoungeEntranceBase } from './lounge-entrance-base';
import { LoungeEntrance } from './lounge-entrance';

export interface GetLoungeEntrancesResponse {
  entrances: LoungeEntrance[];
  freeEntrance: LoungeEntranceBase;
}
