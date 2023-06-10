import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FminsideModule } from './fminside/fminside.module';
import { FutheadModule } from './futhead/futhead.module';
import { MatchModule } from './matches/match.module';
import { PlayerModule } from './player/player.module';
import { SofascoreModule } from './sofascore/sofascore.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    TeamModule,
    MatchModule,
    PlayerModule,
    FutheadModule,
    FminsideModule,
    SofascoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
