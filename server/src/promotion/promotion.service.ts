import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PromotionServiceBase } from "./base/promotion.service.base";

@Injectable()
export class PromotionService extends PromotionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
