import { InterestsEnum } from './interestsEnum';
import { InterestsResponse } from './interests-response';

export interface GetInterestsResponse extends InterestsResponse {
  interests: InterestsEnum[];
}
