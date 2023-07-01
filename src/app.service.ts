import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Swagger is available on http://localhost:4000/api';
  }
}
