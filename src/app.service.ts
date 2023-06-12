import { Injectable, NotFoundException } from '@nestjs/common';
import { FileUtils } from './utils/file-utils';
import { ExternalUserIdResponse } from './web-api/api/events/external-user-id-response';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to pocketbenefits-mock!' };
  }

  getExternalUserId(): ExternalUserIdResponse {
    return {
      identifier: '12345',
      csUser: false,
    };
  }

  readFile(res: any, assetsPath: string): Promise<unknown> {
    if (!FileUtils.fileExist(assetsPath)) {
      console.warn('File not found: ' + assetsPath);
      throw new NotFoundException('File not found: ' + assetsPath);
    }
    return res.sendFile(assetsPath, { root: __dirname });
  }
}
