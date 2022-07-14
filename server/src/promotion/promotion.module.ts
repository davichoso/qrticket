import { Module } from "@nestjs/common";
import { PromotionModuleBase } from "./base/promotion.module.base";
import { PromotionService } from "./promotion.service";
import { PromotionResolver } from "./promotion.resolver";

@Module({
  imports: [PromotionModuleBase],
  providers: [PromotionService, PromotionResolver],
  exports: [PromotionService],
})
export class PromotionModule {}
