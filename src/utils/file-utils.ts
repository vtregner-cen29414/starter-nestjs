import * as fs from 'fs';
import * as path from 'path';

export class FileUtils {
  public static fileExist(filePath: string): boolean {
    const file = path.join(__dirname, '..', filePath);
    console.log(file);
    return fs.existsSync(file);
  }

  public static readFileAsObject<T>(filePath: string): T {
    const file = path.join(__dirname, '..', filePath);
    const text = fs.readFileSync(file, 'utf-8');
    return JSON.parse(text) as T;
  }
}
