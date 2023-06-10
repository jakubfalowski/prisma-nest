import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { MatchModule } from './matches/match.module';

@Module({
  imports: [TeamModule, MatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
