import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { PlayerModule } from './player/player.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PlayerModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
