import { Controller, Get, Header, Headers, Param, Res } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('/webapi/api/v1/codebooks/rds')
export class CodebooksController {
  constructor(private appService: AppService) {}

  @Header('Content-Type', 'application/json')
  @Get(':codebookId/:system')
  getCodebook(
    @Param('codebookId') codebookId,
    @Param('system') system,
    @Res() res,
    @Headers('accept-language') acceptLanguage: string,
  ) {
    const lang = this.getFirstLang(acceptLanguage) ?? 'cs';
    return this.getCodebookFile(res, codebookId, lang);
  }

  private getCodebookFile(res: any, codebookId: string, lang: string) {
    try {
      return this.appService.readFile(
        res,
        `assets/codebooks/${codebookId}_${lang}.json`,
      );
    } catch (e) {
      return this.appService.readFile(
        res,
        `assets/codebooks/${codebookId}_cs.json`,
      );
    }
  }

  private getFirstLang(acceptLanguage: string): string | undefined {
    let lang = acceptLanguage.split(',')[0];
    if (lang) {
      lang = lang.split(';')[0];
      if (lang) {
        lang = lang.split('-')[0];
      }
    }
    return acceptLanguage ? lang : undefined;
  }
}
