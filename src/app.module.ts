import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
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
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
