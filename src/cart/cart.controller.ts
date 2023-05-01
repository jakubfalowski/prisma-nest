import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CardPatchDto, CartPostDto } from './cart.dto';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/create-cart')
  createNewCart(@Body() cartDto: CartPostDto) {
    try {
      return this.cartService.createCart(cartDto);
    } catch (error) {
      throw error;
    }
  }

  @Patch('/update-cart')
  UpdateUserCart(@Body() cartDto: CardPatchDto) {
    try {
      return this.cartService.updateCart(cartDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('/get-user-carts')
  GetUserCards() {
    return this.cartService.getUserCartsByUserId();
  }
}
