import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseFilters,
} from '@nestjs/common';
import { WebApiExceptionFilter } from '../web-api-exception-filter';
import { AppService } from '../app.service';

import { FileUtils } from '../utils/file-utils';
import {GetInterestsResponse} from "../web-api/api/benefits/get-interests-response";
import {GetCasesResponse} from "../web-api/api/benefits/get-cases-response";
import {InterestsEnum} from "../web-api/api/benefits/interestsEnum";
import {GolfRegistrationRequest} from "../web-api/api/benefits/golf-registration-request";
import {GolfRegistrationResponse} from "../web-api/api/benefits/golf-registration-response";
import {InterestsResponse} from "../web-api/api/benefits/interests-response";
import {GolfVerificationResponse} from "../web-api/api/benefits/golf-verification-response";
import {CreateInsuranceRequest} from "../web-api/api/benefits/create-insurance-request";
import {Evaluation} from "../web-api/api/benefits/evaluation";
import {AddInvitationToCalendarRequest} from "../web-api/api/benefits/add-invitation-to-calendar-request";
import {ForcedEventInvitationRequest} from "../web-api/api/benefits/forced-event-invitation-request";

@Controller('webapi/api/v1/benefits')
@UseFilters(new WebApiExceptionFilter())
export class BenefitsController {
  private golfRegistrations: Map<string, GolfVerificationResponse> = new Map();

  private interests: GetInterestsResponse = { clientInterests: [], interests: Object.values(InterestsEnum) };

  private invitations: GetCasesResponse;

  constructor(private appService: AppService) {}

  @Get('lounge')
  getLounge(@Res() res) {
    return this.appService.readFile(res, 'assets/mocks/lounge.json');
  }

  @Get('entrances')
  getEntrances(@Res() res) {
    return this.appService.readFile(res, 'assets/mocks/entrances.json');
  }

  @Get('insurance')
  getInsurance(@Res() res) {
    return this.appService.readFile(res, 'assets/mocks/insurance.json');
  }

  @Get('golf-verification')
  getGolfRegistration(@Query('memberNumber') memberNumber?: string) {
    if (memberNumber && this.golfRegistrations.has(memberNumber)) {
      return this.golfRegistrations.get(memberNumber);
    } else {
      return { state: 'NOT_REGISTERED' };
    }
  }

  @HttpCode(200)
  @Post('golf-registration')
  createGolfRegistration(@Body() request: GolfRegistrationRequest): GolfRegistrationResponse {
    this.golfRegistrations.set(request.memberNumber, { state: 'REGISTERED', id: request.memberNumber, fee: 6 });
    return { id: request.memberNumber };
  }

  @Get('client')
  getClient(@Res() res) {
    return this.appService.readFile(res, 'assets/mocks/client.json');
  }

  @Post('insurance')
  @HttpCode(200)
  createInsuranceRequest(@Body() request: CreateInsuranceRequest) {
    return;
  }

  @Get('digest')
  getCases() {
    if (this.invitations) {
      return this.invitations;
    } else {
      this.invitations = FileUtils.readFileAsObject<GetCasesResponse>('assets/mocks/cases.json');
      return this.invitations;
    }
    // throw new Error('xxx')
  }

  @Get('digest/:id')
  getCaseDetail(@Param('id') id, @Res() res) {
    return this.appService.readFile(res, `assets/mocks/case_${id}.json`);
  }

  @Post('evaluation')
  @HttpCode(200)
  sendEventEvaluation(@Body() request: Evaluation) {
    const c = this.invitations?.cases?.find((value) => value.id === request.id);
    if (c) {
      c.flags = [];
      return request;
    } else {
      throw new BadRequestException();
    }
  }

  @Get('interests')
  getInterests() {
    return this.interests;
  }

  @Get('inspirations')
  getInspirations(@Res() res) {
    return this.appService.readFile(res, `assets/mocks/inspirations.json`);
  }

  @Put('interests')
  @HttpCode(200)
  saveInterests(@Body() request: InterestsResponse) {
    this.interests.clientInterests = request.clientInterests;
    return request;
  }

  @Post('invitation')
  @HttpCode(200)
  addInvitationToCalendar(@Body() request: AddInvitationToCalendarRequest) {
    return request;
  }

  @Post('invitation/forced')
  @HttpCode(200)
  addForcedInvitationToCalendar(@Body() request: ForcedEventInvitationRequest) {
    return request;
  }
}
