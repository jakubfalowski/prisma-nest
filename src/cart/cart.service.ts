import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CardPatchDto, CartPostDto } from './cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCart(cartDto: CartPostDto) {
    return this.prismaService.cart.create({
      data: cartDto,
    });
  }

  async updateCart(cartDto: CardPatchDto) {
    const cart = await this.prismaService.cart.findFirst({
      where: { activation_code: cartDto.activation_code },
    });

    return this.prismaService.cart.update({
      where: { id: cart.id },
      data: {
        id_user: cartDto.id_user,
      },
    });
  }

  async getUserCartsByUserId() {
    return this.prismaService.cart.findMany({});
  }
}
